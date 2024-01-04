Versioning a relational database with migrations is crucial for today's applications. In .NET the most easy way of doing it I have seen until now is by using EF Core and Fluent Migrator together.

In this post I will show an easy way to configure migrations and run then, also taking advantage of EF Core's `EnsureCreated` method to create our database if it doesn't exist (without making workarounds with raw SQL 😄).

## Our sample app

The application we are going to create will be a simple C# `console` application in [.NET 7](https://dotnet.microsoft.com) (it can be any major version too). I will not cover some concepts here, so it is important you have some familiarity with C# and .NET.

I will use [PostgreSQL](https://www.postgresql.org), but it will work with any database provider. This will be good to show this method works independently of whichever database you use.

## Adding our model and EF Core

First we will have just the entity `Music`. The class will be like this:

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

Next we are going to create a `DbContext`. For this you will need to install the packages `Micosoft.EntityFrameworkCore` and `Npgsql.EntityFrameworkCore.PostgreSQL` (since we are using Postgres). After installing the packages, create a `MusicsDbContext` class:

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

There is no much secret on this. The only interesting part is that we are applying any entity mapping from the current assembly, using the `ApplyConfigurationsFromAssembly` method. So, for the next and most important part, we are going to create a mapping for our `Music` entity:

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

It is highly important to notice that we have to call the `ToTable` method passing an options builder with `ExcludeFromMigrations()` as the second argument. This method will prevent EF Core from generating tables based on our models when using the `EnsureCreated` method.

And that is it. Now it is time to configure the migrations.

## Adding migrations

Firstly you will need to install the package `FluentMigrator.Runner` and the package `FluentMigrator.Runner.Postgres` for PostgreSQL.

Next we are going to add a new migration for the `musics` table:

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

Just remember to place this class into a `Migrations` directory at the root of the project. You can also use any pattern you want to name the class (like sequential numbers). In this case I chose to use a _timestamp_, so the file name ended up being `202401011910_AddMusicTable.cs`.

Now, with the migration and entity mapping setups, it is time to put everything to work.

## Running the migrations

To bring together everything that we created so far, we are going to add the startup logic into the `Program` class. Before that, you will also need to install the package `Microsoft.Extensions.DependencyInjection` for the dependency injection.

We have to get our database connection string. In this sample I won't show how to do it, but one possible way would be to read a `appsettings.json` file:

```csharp
var connectionString = configuration.GetConnectionString("Test");
```

Then we have to create a `ServiceCollection`:

```csharp
var services = new ServiceCollection();
```

After that we add our `DbContext`:

```csharp
services.AddDbContext<MusicsDbContext>(
    options => options.UseNpgsql(connectionString));
```

And then we add the configuration for our migration runner:

```csharp
services
    .AddFluentMigratorCore()
    .ConfigureRunner(runner => runner
        .AddPostgres11_0()
        .WithGlobalConnectionString(connectionString)
        .ScanIn(typeof(MusicsDbContext).Assembly));
```

Now with our new `ServiceCollection` we can resolve the services we will use:

```csharp
using var provider = services.BuildServiceProvider();
using var scope = provider.CreateScope();

var musicsContext = scope.ServiceProvider.GetRequiredService<MusicsDbContext>();
var migrationsRunner = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
```

Finally, to run the migrations, just do this:

```csharp
// Creates the database if it does not exist
await musicsContext.Database.EnsureCreatedAsync();

// Runs all migrations
migrationsRunner.MigrateUp();
```

Simple as this 😊.

## Final words

The secret for this to work is using EF Core's `EnsureCreated` with `ExcludeFromMigrations` (introduced in EF Core 5) before calling FluentMigrator's `MigrateUp`. EF Core will ensure the database is created for you.

The only small downside is that you will be forced to call the `ToTable` for each entity when building the entity model and you won't be able to use EF's default convention for table names. However it can be easily addressed by using `nameof`.

## Sample project

You can check the sample project [on this repository](https://github.com/leandroslc/ef-core-and-fluent-migrator-sample).
