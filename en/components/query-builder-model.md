---
title: Using the Query Builder Model - commercial license
_description: Angular Query Builder provides a serializable/deserializable JSON format model, making it easy to build SQL queries. Try it now.
_keywords: Angular Query Builder component, Angular Query Builder control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: commercial
---

# Using the Query Builder Model
Angular Query Builder provides a serializable/deserializable JSON format model, making it easy to build SQL queries.

## Overview

This Angular Query Builder example demonstartes how the [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) expression tree could be used to request data from an endpoint [Northwind WebAPI](https://data-northwind.indigo.design/swagger/index.html) and set it as an [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) data source.

<code-view style="height:700px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-request-sample" >
</code-view>

## Query Builder Model
In order to set an expression tree to the [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html), you need to define a[`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html). Each [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) should have filtering logic that represents how a data record should resolve against the tree and depending on the use case, you could pass a field name, entity name, and an array of return fields. If all fields in a certain entity should be returned, the `returnFields` property could be set to ['*']:

```ts
const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity A', ['*']);
```
Once the root [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) is created, adding conditions, groups or subqueries, could be done by setting its `filteringOperands` property to an array of [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) (single expression or a group) or [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) (subquery).
Each [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) and [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) should have a `fieldName` that is the name of the column where the filtering expression is placed, and either a `condition` of type [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) or a `conditionName`. If required, you could also set a `searchVal`, `searchTree` of type [`IExpressionTree`]({environment:angularApiUrl}/interfaces/iexpressiontree.html), and `ignoreCase` properties.

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
    conditionName: 'equals',
    searchVal: 123
});
 tree.filteringOperands.push({
    fieldName: 'Id',
    conditionName: 'inQuery',
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

Selecting the *IN / NOT-IN* operator in a `FilteringExpression` would create a subquery. After choosing an entity and a column to return, it checks if the value in the specified column in the outer query matches or not any of the values returned by the subquery.

The following expression tree:
```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Products', ['supplierId']);
innerTree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxNumberFilteringOperand.instance().condition('greaterThan').name,
    searchVal: 10
});

const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Suppliers', ['supplierId']);
tree.filteringOperands.push({
    fieldName: 'supplierId',
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
      "fieldName": "supplierId",
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
            "fieldName": "supplierId",
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
        "entity": "Suppliers",
        "returnFields": [
          "supplierId"
        ]
      }
    }
  ],
  "operator": 0,
  "entity": "Products",
  "returnFields": [
    "supplierId"
  ]
}
```

## SQL Example

Let's take a look at a practical example of how the Ignite UI for Angular Query Builder Component can be used to build SQL queries.

In the sample below we have 3 `entities` with names 'Suppliers', 'Categories' and 'Products'.

Let's say we want to find all suppliers who supply products which belong to the 'Beverages' category. Since the data is distributed across all entities, we can take advantage of the *IN* operator and accomplish the task by creating subqueries. Each subquery is represented by a `FilteringExpressionsTree` and can be converted to a SQL query through the `transformExpressionTreeToSqlQuery(tree: IExpressionTree)` method.

First, we create а `categoriesTree` which will return the `categoryId` for the record where `name` is `Beverages`. This is the innermost subquery:

```ts
const categoriesTree = new FilteringExpressionsTree(0, undefined, 'Categories', ['categoryId']);
categoriesTree.filteringOperands.push({
    fieldName: 'name',
    conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
    searchVal: 'Beverages'
});
```

The corresponding SQL query for this `FilteringExpressionsTree` will look like this:

```
SELECT categoryId FROM Categories WHERE name = 'Beverages'
```

Then we create а `productsTree` that will return the `supplierId` field from the `categoriesTree` for the records where the `categoryId` matches the `categoryId` returned by the innermost subquery. We do this by setting the `inQuery` condition and the relevant `searchTree`. This is the middle subquery:

```ts
const productsTree = new FilteringExpressionsTree(0, undefined, 'Products', ['supplierId']);
productsTree.filteringOperands.push({
    fieldName: 'categoryId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: categoriesTree
});
```

This is the updated state of the SQL query:

```
SELECT supplierId FROM Products WHERE categoryId IN (
    SELECT categoryId FROM Categories WHERE name = 'Beverages'
  )
```

Finally, we create а `suppliersTree` that will return all fields from `Suppliers` entity where the `supplierId` matches any of the `supplierId`s returned by the middle subquery. This is the outermost query:

```ts
const suppliersTree = new FilteringExpressionsTree(0, undefined, 'Suppliers', ['*']);
suppliersTree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: productsTree
});
```

Our SQL query is now complete:

```
SELECT * FROM Suppliers WHERE supplierId IN (
  SELECT supplierId FROM Products WHERE categoryId IN (
      SELECT categoryId FROM Categories WHERE name = 'Beverages'
    )
)
```

Now we can set the `expressionsTree` property of the `IgxQueryBuilderComponent` to `suppliersTree`. Furthermore, every change to the query triggers a new request to the endpoint and the resulting data shown in the grid is refreshed.

<code-view style="height:700px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sql-sample" >
</code-view>

## API References

<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderComponent Styles]({environment:sassApiUrl}/themes#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
