Versionar um banco de dados relacional com migrações é crucial para as aplicações de hoje. No .NET, o modo mais fácil de fazer isso que vi até agora é usando o EF Core e Fluent Migrator juntos.

Neste post vou mostrar uma maneira fácil de configurar migrações e executá-las, aproveitando o método `EnsureCreated` do EF Core para criar nosso banco de dados caso ele não exista (sem fazer gambiarras com SQL puro 😄).

## Nossa aplicação de exemplo

A aplicação que vamos criar será uma aplicação `console` simples em C# no [.NET 7](https://dotnet.microsoft.com) (pode ser qualquer versão maior também). Não abordarei alguns conceitos aqui, por isso é importante que você tenha alguma familiaridade com C# e .NET.

Irei usar [PostgreSQL](https://www.postgresql.org), mas funcionará com qualquer provedor de banco de dados. Será bom para mostrar que esse método funciona independentemente do banco de dados que você usar.

## Adicionando nosso modelo e o EF Core

Primeiro teremos apenas a entidade `Music`. A classe ficará assim:

```csharp
namespace EFCoreAndFluentMigrator.Musics;

public class Music
{
    public int Id { get; private set; }

    public required string Name { get; init; }

    public required int CompositionYear { get; init; }

    public required string ComposerName { get; init; }
}
```

A seguir vamos criar um `DbContext`. Para isso você precisará instalar os pacotes `Micosoft.EntityFrameworkCore` e `Npgsql.EntityFrameworkCore.PostgreSQL` (já que estamos usando Postgres). Após instalar os pacotes, crie uma classe `MusicsDbContext`:

```csharp
using Microsoft.EntityFrameworkCore;

namespace EFCoreAndFluentMigrator.Musics;

public sealed class MusicsDbContext : DbContext
{
    public MusicsDbContext(DbContextOptions options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(
            typeof(MusicsDbContext).Assembly);
    }
}
```

Não há muito segredo. A única parte interessante é que estamos aplicando qualquer mapeamento de entidade do assembly atual, usando o método `ApplyConfigurationsFromAssembly`. Então, para a próxima e mais importante parte, vamos criar um mapeamento para nossa entidade `Music`:

```csharp
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EFCoreAndFluentMigrator.Musics;

public sealed class MusicEntityMap : IEntityTypeConfiguration<Music>
{
    public void Configure(EntityTypeBuilder<Music> builder)
    {
        builder.ToTable(
            "musics",
            options => options.ExcludeFromMigrations());

        builder.HasKey(w => w.Id);

        // Optional property mappings ...
    }
}
```

É muito importante notar que temos que chamar o método `ToTable` passando como segundo argumento um _builder_ de opções com `ExcludeFromMigrations()`. Este método impedirá que o EF Core gere tabelas com base em nossas entidades ao usar o método `EnsureCreated`.

E é isso. Agora é hora de configurar as migrações.

## Adicionando migrações

Primeiramente você precisará instalar o pacote `FluentMigrator.Runner` e o pacote `FluentMigrator.Runner.Postgres` para o PostgreSQL.

A seguir vamos adicionar uma nova migração para a tabela `musics`:

```csharp
using FluentMigrator;

namespace EFCoreAndFluentMigrator.Migrations;

[Migration(202401011910)]
public sealed class AddMusicTable : Migration
{
    public override void Down()
    {
        Delete.Table("musics");
    }

    public override void Up()
    {
        Create
            .Table("musics")
            .WithColumn("id").AsInt32().NotNullable().Identity().PrimaryKey()
            .WithColumn("name").AsString(200).NotNullable()
            .WithColumn("composition_year").AsInt32().NotNullable()
            .WithColumn("composer_name").AsString(200).NotNullable();
    }
}
```

Apenas lembre-se de colocar esta classe em um diretório `Migrations` na raiz do projeto. Você também pode usar qualquer padrão que desejar para nomear a classe (como números sequenciais). Neste caso optei por usar um _timestamp_, então o nome do arquivo acabou ficando `202401011910_AddMusicTable.cs`.

Agora, com as configurações de migração e o mapeamento de entidades, é hora de colocar tudo para funcionar.

## Executando as migrações

Para juntar tudo o que criamos até agora, vamos adicionar a lógica de inicialização na classe `Program`. Antes disso, você também precisará instalar o pacote `Microsoft.Extensions.DependencyInjection` para a injeção de dependência.

Temos que obter nossa string de conexão com o banco de dados. Neste exemplo não vou mostrar como fazer isso, mas uma maneira possível seria ler um arquivo `appsettings.json`:

```csharp
var connectionString = configuration.GetConnectionString("Test");
```

Depois temos que criar um `ServiceCollection`:

```csharp
var services = new ServiceCollection();
```

Logo em seguida adicionamos nosso `DbContext`:

```csharp
services.AddDbContext<MusicsDbContext>(
    options => options.UseNpgsql(connectionString));
```

E então adicionamos a configuração para o nosso _runner_ de migrações:

```csharp
services
    .AddFluentMigratorCore()
    .ConfigureRunner(runner => runner
        .AddPostgres11_0()
        .WithGlobalConnectionString(connectionString)
        .ScanIn(typeof(MusicsDbContext).Assembly));
```

Agora com nosso novo `ServiceCollection` podemos resolver os serviços que iremos usar:

```csharp
using var provider = services.BuildServiceProvider();
using var scope = provider.CreateScope();

var musicsContext = scope.ServiceProvider.GetRequiredService<MusicsDbContext>();
var migrationsRunner = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
```

Finalmente, para executar as migrações, apenas faça isso:

```csharp
// Creates the database if it does not exist
await musicsContext.Database.EnsureCreatedAsync();

// Runs all migrations
migrationsRunner.MigrateUp();
```

Simples assim 😊.

## Considerações finais

O segredo para que isso funcione é usar o `EnsureCreated` do EF Core com `ExcludeFromMigrations` (introduzido no EF Core 5) antes de chamar o `MigrateUp` do FluentMigrator. O EF Core garantirá que o banco de dados seja criado para você.

A única pequena desvantagem é que você será forçado a chamar `ToTable` para cada entidade ao construir o modelo de entidade e não poderá usar a convenção padrão do EF para nomes de tabelas. Mas isso pode ser facilmente resolvido usando `nameof`.

## Projeto de exemplo

Você pode conferir o projeto de exemplo [neste repositório](https://github.com/leandroslc/ef-core-and-fluent-migrator-sample).
