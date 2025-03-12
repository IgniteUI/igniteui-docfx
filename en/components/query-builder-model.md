---
title: Using Query Builder Model
_description: Angular Query Builder provides easily serializable/deserializable JSON format model, making it easily to build SQL queries. Try it Now.
_keywords: Angular Query Builder component, Angular Query Builder control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---

# Query Builder 
<p class="highlight">

</p>

## Query Builder Model
In order to set an expression tree to the [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) you need to define [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html). Each [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) should have filtering logic that represents how a data record should resolve against the tree and depending on the use case, you could pass field name, entity name and an array of return fields. If all fields in certain entity should be returned, the `returnFields` property could be set to ['*']:

```ts
const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity A', ['*']);
```
Once the root [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) is created, adding conditions, groups or subqueries, could be done by setting its `filteringOperands` property to an array of [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) (single expression or a group) and [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) (subquery).
Each [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) and [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) should have `fieldName` that is the name of the column where the filtering expression is placed. If required, you could also set a `condition` of type [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html), `conditionName`, `searchVal`, `searchTree` of type [`IExpressionTree`]({environment:angularApiUrl}/interfaces/iexpressiontree.html) and `ignoreCase` properties.

- Defining a simple **expression**:
```ts
tree.filteringOperands.push({
            fieldName: 'Name',
            conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
            searchVal: 'a'
        });
```

- Defining a **group** of expressions:
```ts
const group = new FilteringExpressionsTree(FilteringLogic.Or, undefined, 'Entity A', ['*']);
group.filteringOperands.push({
    fieldName: 'Name',
    conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
    searchVal: 'a'
});
group.filteringOperands.push({
    fieldName: 'DateTime created',
    conditionName: IgxDateFilteringOperand.instance().condition('today').name
});
tree.filteringOperands.push(group);
```

- Defining a **subquery**:
```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity B', ['Number']);
innerTree.filteringOperands.push({
    fieldName: 'Number',
    conditionName: IgxNumberFilteringOperand.instance().condition('equals').name,
    searchVal: 123
});
 tree.filteringOperands.push({
    fieldName: 'Id',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: innerTree
});
```

The model can be serialized/deserialized in JSON format, making it easily transferable between client and server:
```ts
JSON.stringify(tree, null, 2);
```

## Using Sub-Queries
In the context of the [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) the *IN / NOT-IN* operators are used with the newly exposed subquery functionality in the *WHERE* clause.

> [!Note]
> A subquery is a query nested inside another query used to retrieve data that will be used as a condition for the outer query. 

Selecting the *IN / NOT-IN* operator in a `FilteringExpression` would create a subquery. After choosing entity and a column to return, it checks if the value in the specified column in the outer query matches or not any of the values returned by the subquery.

The following expression tree:
```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'products', ['supplier_id']);
innerTree.filteringOperands.push({
    fieldName: 'supplier_id',
    conditionName: IgxNumberFilteringOperand.instance().condition('greaterThan').name,
    searchVal: 10
});

const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'suppliers', ['supplier_id']);
tree.filteringOperands.push({
    fieldName: 'supplier_id',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: innerTree
});
```
Could be serialized by calling:
```ts
JSON.stringify(tree, null, 2);
```

This would be transferred as:
``` 
{
  "filteringOperands": [
    {
      "fieldName": "supplier_id",
      "condition": {
        "name": "inQuery",
        "isUnary": false,
        "isNestedQuery": true,
        "iconName": "in"
      },
      "conditionName": "inQuery",
      "searchVal": null,
      "searchTree": {
        "filteringOperands": [
          {
            "fieldName": "supplier_id",
            "condition": {
              "name": "greaterThan",
              "isUnary": false,
              "iconName": "filter_greater_than"
            },
            "conditionName": "greaterThan",
            "searchVal": 10,
            "searchTree": null
          }
        ],
        "operator": 0,
        "entity": "suppliers",
        "returnFields": [
          "supplier_id"
        ]
      }
    }
  ],
  "operator": 0,
  "entity": "products",
  "returnFields": [
    "supplier_id"
  ]
}
```

## SQL Example

Let's take a look at practical example how the Ignite UI for Angular Query Builder Component can be used to build SQL queries.

In the sample below we have a SQL database with 3 tables - 'suppliers', 'categories' and 'products'. Once we fetch information about them we set our `entities` property of the [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) and we can build queries.

Let's say we want to find all suppliers who supply products that belong to the 'Beverages' category. Since the data is distributed across the 3 tables we can take advantage of the *IN* operator and accomplish the task by creating subqueries. Each subquery is represented by a `FilteringExpressionsTree` and can be converted to a SQL query through the `transformExpressionTreeToSqlQuery(tree: IExpressionTree)` method.

First, we create `categoriesTree` which will return the `category_id` for the record where `category_name` is `Beverages`. This is the innermost subquery:

```ts
const categoriesTree = new FilteringExpressionsTree(0, undefined, 'categories', ['category_id']);
categoriesTree.filteringOperands.push({
    fieldName: 'category_name',
    conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
    searchVal: 'Beverages'
});
```

The corresponding SQL query for this `FilteringExpressionsTree` will look like this:

```
SELECT category_id FROM categories WHERE category_name = 'Beverages'
```

Then we create `productsTree` that will return the `supplier_id` field from the `categoriesTree` for the records where the `category_id` matches the `category_id` returned by the innermost subquery. We do this by setting the `inQuery` condition and the relevant `searchTree`. This is the middle subquery:

```ts
const productsTree = new FilteringExpressionsTree(0, undefined, 'products', ['supplier_id']);
productsTree.filteringOperands.push({
    fieldName: 'category_id',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: categoriesTree
});
```

This is the updated state of the SQL query:

```
SELECT supplier_id FROM products WHERE category_id IN (
    SELECT category_id FROM categories WHERE category_name = 'Beverages'
  )
```

Finally, we create `suppliersTree` that will return all fields from `suppliers` entity where the `supplier_id` matches any of the `supplier_id`s returned by the middle subquery. This is the outermost query:

```ts
const suppliersTree = new FilteringExpressionsTree(0, undefined, 'suppliers', ['*']);
suppliersTree.filteringOperands.push({
    fieldName: 'supplier_id',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: productsTree
});
```

Our SQL query is now complete:

```
SELECT * FROM suppliers WHERE supplier_id IN (
  SELECT supplier_id FROM products WHERE category_id IN (
      SELECT category_id FROM categories WHERE category_name = 'Beverages'
    )
)
```

Now can set the `expressionsTree` property of the `IgxQueryBuilderComponent` to `suppliersTree`. Furthermore, every change to the query triggers SQL query execution and refreshing the results data shown in the grid.

<code-view style="height:700px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sql-sample" >
</code-view>

## API References

<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderHeaderComponent]({environment:angularApiUrl}/classes/igxquerybuilderheadercomponent.html)
* [IgxQueryBuilderSearchValueTemplateDirective]({environment:angularApiUrl}/classes/igxquerybuildersearchvaluetemplatedirective.html)
* [IgxQueryBuilderComponent Styles]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
