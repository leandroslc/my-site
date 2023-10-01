---
title: 'Construindo seu próprio provedor LINQ no .NET'
excerpt: 'Com o advento do Entity Framework (EF) e a adoção do LINQ em outras tecnologias, como no ORM NHibernate, no driver do MongoDb e até mesmo para consulta de dados em arquivos como JSON e XML, é cada vez mais comum encontrar o LINQ em uma aplicação C#. Mas você sabe como esse processo funciona? E quais são as características que o diferenciam de um simples Iterator?'
coverImage: '/assets/blog/building-your-own-linq-provider-in-dotnet/cover.webp'
date: '2023-05-15T17:40:00.000Z'
tags:
  - .NET
  - C#
ogImage:
  url: '/assets/blog/building-your-own-linq-provider-in-dotnet/cover.webp'
---

O [LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) se tornou essencial no ecossistema .NET, trazendo características funcionais desde 2008.

Com o advento do [Entity Framework (EF)](https://learn.microsoft.com/pt-br/ef/core/querying/) e a adoção do LINQ em outras tecnologias, como no [ORM NHibernate](https://nhibernate.info/doc/nhibernate-reference/querylinq.html), no [driver do MongoDb](https://www.mongodb.com/docs/drivers/csharp/current/fundamentals/linq/) e até mesmo para consulta de dados em arquivos como JSON e XML, é cada vez mais comum encontrar o LINQ em uma aplicação C#. Mas você sabe como esse processo funciona? E quais são as características que o diferenciam de um simples [Iterator](https://refactoring.guru/design-patterns/iterator)?

Em 2016, quando estava ainda iniciando no mundo .NET, percebi que as queries do EF pareciam funcionar como mágica. Na tentativa de me aprofundar no assunto, me deparei com [uma antiga e muito boa série de artigos de Matt Warren](https://docs.microsoft.com/en-us/archive/blogs/mattwar/linq-building-an-iqueryable-provider-series) e resolvi criar meu próprio ORM para descobrir.

Obviamente criar um ORM está muito além do escopo 😄, mas ao menos vou mostrar os passos iniciais de como criar seu próprio provedor LINQ.

## Um exemplo simples

Para o nosso pequeno exemplo, vamos criar algo simples e que é de fácil entendimento: um provedor LINQ que transforma expressões C# em SQL. Infelizmente, para que esse artigo não extrapole os limites, não irei mostrar como processar consultas em banco de dados e vou deixar de lado outros detalhes para tornar tudo o mais simples possível.

Além disso, para este exemplo, vou usar apenas uma simples aplicação de `console` em [.NET 7](https://dotnet.microsoft.com/) (pode ser outra versão maior também).

Vale ressaltar que é necessário ter um bom entendimento prévio de C# e .NET, como por exemplo, criar uma aplicação, já que não vou cobrir alguns tópicos aqui. De qualquer forma, se já tiver o SDK do .NET instalado, basta executar o comando `dotnet new console -n <nome>`.

## Nossa própria coleção

Primeiramente vamos criar uma classe que vou chamar de `DbCollection`. Ela vai funcionar como ponto de partida para montar nossas *queries*, semelhante ao [DbSet do EF](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1?view=efcore-6.0).

```csharp
using System.Collections;
using System.Linq.Expressions;

namespace MyLinqProvider;

public class DbCollection<TElement>
		: IQueryable<TElement>, IOrderedQueryable<TElement>
{
    private DbQueryProvider provider;

    public DbCollection(DbQueryProvider provider)
    {
        this.provider = provider;
        Expression = Expression.Constant(this);
    }

    public DbCollection(DbQueryProvider provider, Expression expression)
    {
        this.provider = provider;
        Expression = expression;
    }

    public Type ElementType => typeof(TElement);

    public Expression Expression { get; }

    public IQueryProvider Provider => provider;

    public override string ToString()
    {
        return provider.GetEvaluatedQuery(Expression);
    }

    public IEnumerator<TElement> GetEnumerator()
    {
        var enumerable = Provider.Execute<TElement>(Expression) as IEnumerable<TElement>
            ?? throw new InvalidOperationException();

        return enumerable.GetEnumerator();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        var enumerable = Provider.Execute(Expression) as IEnumerable
            ?? throw new InvalidOperationException();

        return enumerable.GetEnumerator();
    }
}
```

Precisamos implementar as interfaces de `IQueryable`, que também implementam as versões genéricas e não-genéricas de `IQueryable` e `IEnumerable`.

Note que usamos um `IQueryProvider` que é exposto pela interface e que vamos criar logo em seguida. Mas antes, vamos dar uma olhada no restante do código.

Ambos os construtores recebem o nosso `provider` (que iremos criar em seguida). O primeiro construtor será usado por nós, ao criar um `DbCollection` diretamente, definindo a `Expression` inicial como o estado atual do `DbCollection`.

O outro construtor será usado internamente pelo próprio `provider`, passando a `expression` que será criada conforme usamos os métodos do LINQ (lembrando que a árvore de expressões do LINQ são imutáveis). Por isso no segundo construtor precisamos obter o tipo do elemento atual, que pode ser diferente do nosso `TElement` inicial (_e.g._ `Select`, `Join`, e outros).

Tirando isso, o restante é bem simples: o método `ToString` irá retornar o nosso SQL em string, e os métodos `GetEnumerator` irão retornar os _[result sets](https://en.wikipedia.org/wiki/Result_set)_ materializados como um `IEnumerable`.

## O provedor

Agora vamos criar nosso `IQueryProvider`, que chamei de `DbQueryProvider`.

```csharp
using System.Linq.Expressions;

namespace MyLinqProvider;

public class DbQueryProvider : IQueryProvider
{
    public IQueryable CreateQuery(Expression expression)
    {
        var elementType = expression.Type.GetElementType()
            ?? throw new NotSupportedException();

        return (IQueryable)Activator.CreateInstance(
            typeof(DbCollection<>).MakeGenericType(elementType))!;
    }

    public IQueryable<TElement> CreateQuery<TElement>(Expression expression)
        => new DbCollection<TElement>(this, expression);

    public string GetEvaluatedQuery(Expression expression)
    {
        var (query, _) = new DbQueryTranslator().Translate(expression);

        return query;
    }

    public object? Execute(Expression expression)
    {
        throw new NotImplementedException();
    }

    public TResult Execute<TResult>(Expression expression)
    {
        return (TResult)this.Execute(expression)!;
    }
}
```

O provedor expõe três métodos importantes. Os métodos `CreateQuery` apenas retornam nosso `DbCollection`, sendo um deles uma versão não-genérica (onde precisamos aplicar um pouquinho de _reflection_).

Os métodos `Execute` também são para os dois casos, genéricos e não-genéricos. Usualmente o método não-genérico é suficiente para os dois casos, por isso você pode apenas reusá-lo na versão genérica (e realizar um _cast_ para o tipo final).

Nesse caso, eu não vou implementar o `Execute`, já que o artigo ficaria muito extenso. É no `Execute` que você provavelmente iria obter o SQL e os parâmetros traduzidos, criar um `DbCommand`, executá-lo com uma `DbConnection` e retornar um `IEnumerator` personalizado que materializa os dados em objetos. Bastante trabalho, então vou deixar como lição de casa 😄.

E por fim, acrescentei um método a mais, o `GetEvaluatedQuery`, que irá apenas traduzir a expressão em SQL e retornar. Para isso, usamos um _"tradutor"_, que veremos mais a adiante.

## Tornando nossas _queries_ mais limpas

Antes de seguirmos para o nosso tradutor, primeiro decidi criar uma classe `QueryBuilder` muito básica usando um `StringBuilder` para tornar as queries mais limpas e fáceis de montar.

Por ser uma classe mais utilitária e simples, vou apenas colar ela aqui, já que o entendimento dela deve ser bem natural:

```csharp
using System.Text;

namespace MyLinqProvider;

public class QueryBuilder
{
    public string? TableName { get; set; }

    public ICollection<string> WhereExpressions { get; } = new List<string>();

    public Dictionary<string, object?> Parameters { get; } = new();

    public string AddParameter(object? value)
    {
        var paramName = $"p{Parameters.Count}";

        Parameters[paramName] = value;

        return paramName;
    }

    public string Build()
    {
        var builder = new StringBuilder($"SELECT * FROM {TableName}");

        if (WhereExpressions.Any())
        {
            builder.Append(" WHERE ").AppendJoin(" AND ", WhereExpressions);
        }

        if (Parameters.Any())
        {
            builder
                .Append(Environment.NewLine)
                .Append("-- (")
                .AppendJoin(", ", Parameters.Select(p => $"{p.Key}: '{p.Value}'"))
                .Append(")");
        }

        return builder.ToString();
    }
}
```

## Transformando expressões em SQL

Por fim, chegamos na parte mais legal e ao mesmo tempo um pouco mais complexa. Vamos traduzir [árvores](https://en.wikipedia.org/wiki/Tree_(data_structure)) de expressão (_expression trees_) em SQL.

Os métodos e expressões _lambda_ usadas no LINQ geram `Expression`s. As expressões podem ser formadas por outras expressões, cada uma formando um componente individual. Essa árvore é um exemplo do [Design Pattern Composite](https://refactoring.guru/design-patterns/composite).

Por ser uma estrutura naturalmente recursiva, para ler toda a árvore e gerar nosso SQL usaremos outro _Design Pattern_: o [Visitor](https://refactoring.guru/design-patterns/visitor).

Por conta da forma que a árvore é criada, a leitura funciona como uma [pilha](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)). Quando usamos métodos como `query.Where().Select()`, a primeira expressão lida será o método `Select` e, sucessivamente, até chegar na constante `query`.

Então agora vamos construir uma classe que chamei de `DbQueryTranslator`. Para não confundir, vamos fazer isso aos poucos, escrevendo método por método e explicando em detalhes cada processo.

Primeiro vejamos a nossa estrutura básica:

```csharp
using System.Linq.Expressions;
using System.Text;

namespace MyLinqProvider;

public class DbQueryTranslator : ExpressionVisitor
{
    private QueryBuilder builder = new();
    private StringBuilder currentBuilder = new();

    private static Expression GetOperand(Expression node)
    {
        while (node.NodeType == ExpressionType.Quote)
        {
            node = ((UnaryExpression)node).Operand;
        }

        return node;
    }

    private static bool IsStatic(Expression node)
    {
        return node is MemberExpression member
            ? member.Expression == null
            : node is MethodCallExpression method
                ? method.Object == null
                : false;
    }
}
```

Para a nossa sorte, o .NET expõe a classe abstrata `ExpressionVisitor` para nos ajudar a percorrer a árvore (antigamente, pré .NET Framework 4.5, você tinha que construí-la também 😅). Ela já expõe um método `Visit` e vários outros métodos `Visit***` que iremos usar.

Inicialmente como vemos acima, apenas criamos nosso `QueryBuilder` e um `StringBuilder`. Nós sempre vamos recriar o `currentBuilder` dependendo de qual posição estivermos na árvore. Vamos falar mais sobre ele daqui a pouco.

Os métodos private acima são utilitários simples que vamos reusar. O `IsStatic` vai nos ajudar a saber se o invocador de um membro ou método é estático e o `GetOperand` vai nos ajudar a remover [closures](https://en.wikipedia.org/wiki/Closure_(computer_programming)).

Agora vamos ao método `Translate`:

```csharp
public (string, Dictionary<string, object?>) Translate(Expression expression)
{
    Visit(expression);

    return (builder.Build(), builder.Parameters);
}
```

Esse é o método principal que iremos usar externamente. O `Visit` irá iniciar a varredura recursiva na árvore. Depois retornamos uma tupla com o SQL gerado e os parâmetros adicionados na query.

Tudo o que fazemos com o LINQ funciona através de métodos de extensão definidos na classe `Queryable`. Então nosso próximo passo é observar se algum deles foi chamado:

```csharp
protected override Expression VisitMethodCall(MethodCallExpression node)
{
    return node.Method.DeclaringType == typeof(Queryable)
        ? VisitQueryableMethodCall(node)
        : VisitNormalMethodCall(node);
}
```

Como vemos, qualquer expressão de método cai aqui, então precisamos distinguir quando estamos lidando com um método principal do LINQ ou com outro método qualquer.

A partir disso, podemos dar uma olhada no nosso método `VisitQueryableMethodCall`:

```csharp
protected internal Expression VisitQueryableMethodCall(MethodCallExpression node)
{
    currentBuilder = new();

    if (node.Method.Name == nameof(Queryable.Where))
    {
        var whereNode = (LambdaExpression)GetOperand(node.Arguments[1]);

        Visit(whereNode.Body);

        builder.WhereExpressions.Add(currentBuilder.ToString());

        return Visit(node.Arguments[0]);
    }

    if (node.Method.Name == nameof(Queryable.Select))
    {
        return Visit(node.Arguments[0]);
    }

    throw new NotSupportedException($"Method {node.Method.Name} not supported");
}
```

Sempre que o visitor cair nesse método, vamos criar um novo `currentBuilder`. Se notarmos, a maioria desses métodos recebem como parâmetro uma expressão lambda (`LambdaExpression`). Então vamos construir o SQL a partir do conteúdo (`Body`) da expressão lambda.

No exemplo acima vamos traduzir apenas o `Where`. Por ser um método de extensão, ele tem dois argumentos. O primeiro (`0`) é a expressão anterior da pilha. O segundo (`1`) é a expressão lambda.

Então primeiro usamos o `Visit` no conteúdo, e depois retornamos o `Visit` da expressão anterior para continuar a leitura.

Para o método `Select` não faremos muita coisa, só passaremos para o método anterior, mas é importante declará-lo no momento, já que na _sintaxe de query_ nós somos obrigados a usá-lo.

Lembrando que no LINQ podemos escrever _queries_ usando [a Sintaxe de Método ou a Sintaxe de Query](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq), mas no final, a Sintaxe de Query é convertida para Sintaxe de Método automaticamente pelo compilador.

No `Where` geralmente temos uma expressão binária ou uma combinação delas, onde sempre teremos dois elementos e um operador entre eles. Vejamos como ficaria:

```csharp
protected override Expression VisitBinary(BinaryExpression node)
{
    currentBuilder.Append("(");

    Visit(node.Left);

    currentBuilder.Append($" {TranslateBinary(node)} ");

    Visit(node.Right);

    currentBuilder.Append(")");

    return node;
}
```

No `VisitBinary` nós lemos a expressão à esquerda e a expressão à direita, em sequência. No meio nós lemos o tipo de expressão, que geralmente é um _operator_. Para isso criei um método utilitário simples que é o `TranslateBinary`:

```csharp
private static string TranslateBinary(BinaryExpression node)
{
    return node.NodeType switch
    {
        ExpressionType.AndAlso => "AND",
        ExpressionType.OrElse => "OR",
        ExpressionType.GreaterThan => ">",
        _ => throw new NotSupportedException(
            $"Binary operator {node.NodeType} not supported"),
    };
}
```

Para simplificar só adicionei alguns operadores de exemplo. No trecho acima, sempre quando você usar `||` (OrAlso), `&&` (AndAlso) e `>` (GreaterThan), eles serão traduzidos para o equivalente em SQL.

Pronto, já temos nossa tradução para o `Where`. Porém, ainda falta traduzir membros e constantes.

Para traduzir membros é mais simples. Ficaria algo assim:

```csharp
protected override Expression VisitMember(MemberExpression node)
{
    if (IsStatic(node) is false
        && node.Expression!.NodeType == ExpressionType.Parameter)
    {
        currentBuilder.Append(node.Member.Name);

        return node;
    }

    throw new NotSupportedException($"Member {node.Member.Name} not supported");
}
```

A expressão de membro é qualquer expressão onde você acessa uma propriedade ou atributo de uma classe, por exemplo: `o.Name`, `o.Name.FirstName` ou `Class.StaticName`.

Nesse caso precisamos verificar se não é um membro `static` e se é um membro relativo ao tipo da classe que estamos usando na nossa query (lembra do nosso `TElement` do `DbCollection`?).

Tendo o nome do membro acessado, podemos então usá-lo como nome da coluna.

Já para as constantes, faremos algo diferente:

```csharp
protected override Expression VisitConstant(ConstantExpression node)
{
    if (node.Value is IQueryable queryable)
    {
        builder.TableName = queryable.ElementType.Name;

        return node;
    }

    var paramName = builder.AddParameter(node.Value);

    currentBuilder.Append(paramName);

    return node;
}
```

No `VisitConstant`, na primeira condição, vamos assumir que um valor constante derivado de `IQueryable` é a origem da árvore de expressão. Ou seja, a constante que chama o primeiro método na base da pilha de métodos do LINQ geralmente possui o _ElementType_ que vamos querer usar como a nossa tabela inicial do _"select from"_.

Qualquer outra constante será adicionada como um parâmetro, já pensando em evitar um problema de _[sql injection](https://en.wikipedia.org/wiki/SQL_injection)_.

Mas note que existe um grave problema no nosso tradutor: não podemos usar variáveis! O compilador do .NET cria uma classe local para armazenar variáveis locais e geralmente acessa nesse formato:

```html
value(Namespace.Class+<>c__DisplayClass0).variable
```

Dessa forma, variáveis não são tratadas como constantes, mas sim como `MemberExpression`s. Para corrigir isso, antes de iniciarmos o `Visit` do tradutor, precisaríamos percorrer toda a árvore de expressões para transformar variáveis em constantes. Infelizmente deixaremos isso de lado por enquanto, já que o código desse processo é um pouco mais complicado.

Sabendo disso, agora temos quase tudo para funcionar. Mas antes, achei que seria legal criar um `LIKE` para exemplificar como funciona:

```csharp
protected internal Expression VisitNormalMethodCall(MethodCallExpression node)
{
    if (IsStatic(node) is false)
    {
        if (node.Object is MemberExpression member
            && IsStatic(member) is false
            && member.Expression!.NodeType == ExpressionType.Parameter)
        {
            if (node.Method.DeclaringType == typeof(string)
								&& node.Method.Name == "Contains")
            {
                Visit(member);

                currentBuilder.Append(" LIKE '%' + ");

                Visit(node.Arguments[0]);

                currentBuilder.Append(" + '%'");

                return node;
            }
        }
    }

    throw new NotSupportedException($"Method {node.Method.Name} not supported");
}
```

Aqui usamos o método `VisitNormalMethodCall` que usamos mais cedo em `VisitMethodCall`. O funcionamento dele é bem semelhante ao que usamos em `VisitMember`, verificando se o método chamado é parte da classe que estamos usando como `TElement`.

Nesse exemplo lemos a expressão `Object` (quem faz a chamada), que será o lado esquerdo da expressão e, depois, lemos o primeiro argumento passado no método `Contains`, que será o lado direito.

Agora estamos prontos 🙂. Hora de usar o que fizemos até agora.

## Colocando em prática

Para o nosso exemplo, criaremos uma classe pessoa:

```csharp
public class Person
{
    public string? Name { get; }
    public int Age { get; }
}
```

Na classe `Program`, para criar nosso _provider_ e _query_, usaremos esse código:

```csharp
var provider = new DbQueryProvider();
var query = new DbCollection<Person>(provider);
```

Esse código geralmente é encapsulado em algum lugar. O EF, por exemplo, cria através de _reflection_ qualquer propriedade do tipo `DbSet` em um `DbContext` ou retorna a query através do método `DbContext.Set`. Mas não vamos nos preocupar com isso agora.

Por fim, podemos escrever *queries* usando as duas sintaxes:

```csharp
// Exemplo 1
var q1 = query;
var q2 = from p in query select p;

// Exemplo 2
var q3 = query.Where(p => p.Age > 25);
var q4 = from p in query where p.Age > 25 select p;

// Exemplo 3
var q5 = query.Where(p => p.Name!.Contains("Leandro"));
var q6 = from p in query where p.Name!.Contains("Leandro") select p;

// Exemplo 4
var q7 = query.Where(p => p.Name!.Contains("Leandro") || p.Age > 25);
var q8 = from p in query where p.Name!.Contains("Leandro") || p.Age > 25 select p;
```

Agora resta apenas chamar o método ToString em cada variável `q` e imprimir no console para ver o que cada uma retorna (se estiver em dúvida, é possível [ver a classe Program de exemplo](https://github.com/leandroslc/linq-to-sql-sample/blob/main/src/Sample/Program.cs)).

Cada exemplo irá gerar as seguintes _queries_, respectivamente:

```sql
SELECT * FROM Person

SELECT * FROM Person WHERE (Age > p0)
-- (p0: '25')

SELECT * FROM Person WHERE Name LIKE '%' + p0 + '%'
-- (p0: 'Leandro')

SELECT * FROM Person WHERE (Name LIKE '%' + p0 + '%' OR (Age > p1))
-- (p0: 'Leandro', p1: '25')
```

E é isso 😊.

## Considerações finais

Agora você sabe como montar seu próprio provedor LINQ. É claro que manter um provedor é muito mais complexo e existem muitos outros pontos a melhorar que não vou poder cobrir neste artigo (quem sabe em um próximo 😉).

Porém é interessante ver o funcionamento dele internamente e entender que, diferentemente do `IEnumerable` que apenas executa expressões em memória, o `IQueryable` possui um provedor interno que compila expressões, como é o caso do nosso provedor que acabamos de montar neste artigo 😊.

## Projeto de exemplo

Você também pode conferir o projeto de exemplo [neste repositório](https://github.com/leandroslc/linq-to-sql-sample).
