The [LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) became essential in the .NET ecosystem, introducing functional characteristics since 2008.

With the advent of [Entity Framework (EF)](https://learn.microsoft.com/pt-br/ef/core/querying/) and the adoption of LINQ in other technologies like in the [ORM NHibernate](https://nhibernate.info/doc/nhibernate-reference/querylinq.html), the [MongoDb driver](https://www.mongodb.com/docs/drivers/csharp/current/fundamentals/linq/) and even for data querying in files like JSON and XML, it is more common to find LINQ in a C# application. But you know how this process works? And what are the characteristics that distinguishes it from a simple [Iterator](https://refactoring.guru/design-patterns/iterator)?

In 2016, when I was still starting out in the .NET world, I noticed queries in EF looked like they worked like magic. In an attempt to get deeper into the matter, I came across [an old and very good series of articles by Matt Warren](https://docs.microsoft.com/en-us/archive/blogs/mattwar/linq-building-an-iqueryable-provider-series) and decided to create my own ORM to discover.

Obviously creating an ORM is far beyond the scope 😄, but at least I will show the initial steps of how to create your own LINQ provider.

## A simple example

For our little example we will create something simple and that is of easy understanding: a LINQ provider that transforms C# expressions into SQL. Unfortunately, for this post to not extrapolate the limits, I will not show how to process queries in database and I will also let other details aside to make everything as simple as possible.

Furthermore, for this example, I will only use a simple `console` application in [.NET 7](https://dotnet.microsoft.com/) (it can be another major version too).

It is worth mentioning that it is necessary a good prior understanding in C# and .NET, as for example, how to create an application, since I will not cover some topics here. In any way, if you already have the .NET SDK installed, just run the command `dotnet new console -n <name>`.

## Our own collection

Firstly, we will create a class that I will call `DbCollection`. It will work as the starting point to build our _queries_, similar to [DbSet do EF](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1?view=efcore-6.0).

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

We need to implement the interfaces of `IQueryable` which also implement the generic and non-generic versions of `IQueryable` and `IEnumerable`.

Note that we used an `IQueryProvider` that is exposed by the interface and which we will create right away. But before we shall have a look in the rest of the code.

Both constructors receive our `provider` (that we will create next). The first constructor will be used by us to create a `DbCollection` directly, defining an initial `Expression` as the current state of the `DbCollection`.

The other constructor will be used internally by our own `provider`, passing an `expression` that will be created as we use the LINQ methods (remiding that the LINQ expression tree is immutable). Therfore in the second constructor we need to obtain the current element type, which can be different from our initial `TElement` (_e.g._ `Select`, `Join`, and others).

Despite that, the rest is pretty simple: the `ToString` method will return our SQL in string and the methods `GetEnumerator` will return the materialized _[result sets](https://en.wikipedia.org/wiki/Result_set)_ as an `IEnumerable`.

## The provider

Now we will create our `IQueryProvider`, which I called `DbQueryProvider`.

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

The provider exposes three important methods. The `CreateQuery` methods just return our `DbCollection`, one of them being a non-generic version (where we need to apply a bit of _reflection_).

The `Execute` methods are also for both cases, generic and non-generic. Usually the non-generic method is enough to both scenarios and you can reuse it in the generic version (and do a _cast_ to the final type).

In this case I will not implement the `Execute` since this post would get really long. It is in `Execute` that you would probably get the translated SQL and its parameters, create and `DbCommand`, execute it with a `DbConnection` and return a custom `IEnumerator` that materializes the data into objects. Too much work, so I will leave it as homework 😄.

Finally, I added one more method, the `GetEvaluatedQuery`, which will just translate the expression into SQL and return. For this to work, we use a _"translator"_ that we will see further.

## Making our queries more clean

Before we proceed to our translator, first I decided to create a really basic `QueryBuilder` class using a `StringBuilder` to turn the queries more clearer and easy to build.

As it is a more utilitary and simple class, I will just copy and paste it here, since it should be quite straighforward to understand:

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

## Transforming our expressions into SQL

At last we reached the cooler and at the same time more complex part of this post. We are going to translate [expression trees](https://en.wikipedia.org/wiki/Tree_(data_structure)) to SQL.

Methods and _lambda_ expressions used in LINQ generate `Expression`s. These expression can be formed by other expressions, each one forming an individual component. This tree is an example of the [Composite Design Pattern](https://refactoring.guru/design-patterns/composite).

As it is a naturally recursive structure, to read all tree and generate our SQL we will use another _Design Pattern_: the [Visitor](https://refactoring.guru/design-patterns/visitor).

Because of the way that the tree is created, the reading works like a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)). When we use methods like `query.Where().Select()`, the first read expression will be the method `Select` and successively until reaching the constant `query`.

So now we are going to build a class that I called `DbQueryTranslator`. To not be confusing, we are going to make this at little steps, writing method by method and explaining each process in detail.

First let us see our basic structure:

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

To our luck the .NET exposes an abstract class `ExpressionVisitor` to help us go through the tree (in the past, pre .NET Framework 4.5, you had to build it too 😅). It already exposes a `Visit` method and many other `Visit***` methods that we will use.

Initially as we see above, we just create our `QueryBuilder` and a `StringBuilder`. We will always recreate the `currentBuilder` depending on which position we are in the tree. We will talk more about it soon.

The private methods above are simple utility methods that we are going to reuse. The `IsStatic` will help us to see whether the invoker of a member or method is static and the `GetOperand` will help us to remove [closures](https://en.wikipedia.org/wiki/Closure_(computer_programming)).

Now to the method `Translate`:

```csharp
public (string, Dictionary<string, object?>) Translate(Expression expression)
{
    Visit(expression);

    return (builder.Build(), builder.Parameters);
}
```

This is the main method that shall be used externally. The `Visit` will start the recursive analysis of the tree. After we return an tuple with the generated SQL and the parameters added to the query.

Everything we do with LINQ works through extension methods defined in the `Queryable` class. Then the next step is to check whether one of them were called:

```csharp
protected override Expression VisitMethodCall(MethodCallExpression node)
{
    return node.Method.DeclaringType == typeof(Queryable)
        ? VisitQueryableMethodCall(node)
        : VisitNormalMethodCall(node);
}
```

As we see, any method expression falls here so we need to distinguish when we are handling an extension method of LINQ or any other method.

From that we can have a look at out method `VisitQueryableMethodCall`:

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

Always when the visitor gets within this method we will create a new `currentBuilder`. If we notice, the majority of these methods receive as parameter an lambda expression (`LambdaExpression`). Then we are going to build the SQL from the expression content (`Body`).

In the above example we translate only the `Where`. As it is an extension method it receives two arguments. The first one (`0`) is the previous expression within the stack. The second one (`1`) is the lambda expression itself.

Therefore we first use the `Visit` on the content and then we return the `Visit` of the previous expression to continue the reading.

For the `Select` method we won't do much, just passthrough to the previous method, but it is important to declare it at this moment since the _query syntax_ forces us to use it.

Remembering that in LINQ we can write queries using [the Method Syntax or the Query Syntax](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq) but, in the end, the Query Syntax is autommatically converted to the Method Syntax by the compiler.

In `Where` generally we have a binary expression or a combination of them, where we will always have two elements and an operator between them. Let's see how it would look:

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

In `VisitBinary` we read the left expression and the right expression in sequence. Between them we read the type of the expression, that commonly is and _operator_. For this I created a simple utility method `TranslateBinary`:

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

To simplify things I just added some operators as example. In the above excerpt, always when you use `||` (OrAlso), `&&` (AndAlso) and `>` (GreaterThan), they would be translated to the equivalent in SQL.

Good, now we already have our translation for `Where`. However, we still need to translate members and constants.

To translate members it is more simple. It would be something like this:

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

The member expression is any expression where you access a property of field of a class, for example: `o.Name`, `o.Name.FirstName` ou `Class.StaticName`.

In this case we need to check if it is not an `static` member and whether this member is relative to the type of the class we are using in our query (the `TElement` of `DbCollection`). In this case, the object should be the parameter of the expression (_e.g._: `Where(p => ...)`).

This way, having the name of the accessed member, we can use it as the column name.

As for the constants, we will do something a bit different:

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

In `VisitConstant`, in the first condition, we assume that a constant value derivated from `IQueryable` is the origin of the expression tree. In other words, the constant that invokes the first method in the LINQ methods stack usually contains the _ElementType_ that we would want to use as the initial table of _"select from"_.

Any other constant will be added as a parameter, thinking in advance to avoid a _[sql injection](https://en.wikipedia.org/wiki/SQL_injection)_ issue.

But notice also that there is a serious issue with our translator: we cannot use variables! The .NET compiler creates a local class to store local variables and usually access them in this format:

```html
value(Namespace.Class+<>c__DisplayClass0).variable
```

That way, variables are not treated as constants but as `MemberExpression`s. To fix this, before initiating the translator `Visit`, we would have to walk through all expression tree to transform variables into constants. Unfortunately we will let this aside since the code for this process is a bit more complicated.

Knowing this, we now have almost everything to make this work. But before, I though that it would be cool to create a `LIKE` to demonstrate how it would work:

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

Here we use the method `VisitNormalMethodCall` that we used earlier in `VisitMethodCall`. Its logic is quite similar to the one we used in `VisitMember`, checking if the called method is a member of the class that we are using as `TElement`.

In this example we read the `Object` expression (who made the call) that will be the left side of the expression and, after this, we read the first argument passed to the `Contains` method, which will be the right side.

Now we are ready 🙂. Time to use all we have done until now.

## Putting everything into practice

For our sample we will create a person class:

```csharp
public class Person
{
    public string? Name { get; }
    public int Age { get; }
}
```

In the `Program` class, to create our _provider_ and _query_, we will use this code:

```csharp
var provider = new DbQueryProvider();
var query = new DbCollection<Person>(provider);
```

This code is usually encapsulated somewhere. EF, for example, creates through _reflection_ any property of type `DbSet` in a `DbContext` or returns a new query through the `DbContext.Set` method. But we won't not worry about that now.

Finally we can write queries using both syntaxes:

```csharp
// 1st Example
var q1 = query;
var q2 = from p in query select p;

// 2nd Example
var q3 = query.Where(p => p.Age > 25);
var q4 = from p in query where p.Age > 25 select p;

// 3rd Example
var q5 = query.Where(p => p.Name!.Contains("Leandro"));
var q6 = from p in query where p.Name!.Contains("Leandro") select p;

// 4th Example
var q7 = query.Where(p => p.Name!.Contains("Leandro") || p.Age > 25);
var q8 = from p in query where p.Name!.Contains("Leandro") || p.Age > 25 select p;
```

Now all that remains is to call the ToString method in each `q` variable and print it to the console to see what each one returns (if in doubt, it is possible to [see the sample Program class](https://github.com/leandroslc/linq-to-sql-sample/blob/main/src/Sample/Program.cs)).

Each example will generate the following queries, respectivelly:

```sql
SELECT * FROM Person

SELECT * FROM Person WHERE (Age > p0)
-- (p0: '25')

SELECT * FROM Person WHERE Name LIKE '%' + p0 + '%'
-- (p0: 'Leandro')

SELECT * FROM Person WHERE (Name LIKE '%' + p0 + '%' OR (Age > p1))
-- (p0: 'Leandro', p1: '25')
```

And that is it 😊.

## Final words

Now you know how to build your own LINQ provider. Of course that maitaining a provider is much more complex and there are many other points to improve that I cannot cover in this post (who knows in a next one 😉).

Although it is interesting to see its inner workings to understand that, differently from an `IEnumerable` that only executes expressions in-memory, an `IQueryable` has an inner provider that compiles expressions, as is the case of our provider that we just happened to create in this post 😊.

## Sample project

You can also check the sample project [on this repository](https://github.com/leandroslc/linq-to-sql-sample).
