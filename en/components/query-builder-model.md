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

## Demo

## Using Sub-Queries
In the context of the [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) the *IN / NOT-IN* operators are used with the newly exposed subquery functionality in the *WHERE* clause.

> [!Note]
> A subquery is a query nested inside another query used to retrieve data that will be used as a condition for the outer query. 

Selecting the *IN / NOT-IN* operator in a `FilteringExpression` would create a subquery. After choosing entity and a column to return, it checks if the value in the specified column in the outer query matches or not any of the values returned by the subquery.

The following expression tree:
```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['OrderId']);
innerTree.filteringOperands.push({
    fieldName: 'OrderId',
    conditionName: IgxNumberFilteringOperand.instance().condition('greaterThan').name,
    searchVal: 10
});

const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Products', ['Id']);
tree.filteringOperands.push({
    fieldName: 'Id',
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
      "fieldName": "Id",
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
            "fieldName": "OrderId",
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
        "entity": "Orders",
        "returnFields": [
          "OrderId"
        ]
      }
    }
  ],
  "operator": 0,
  "entity": "Products",
  "returnFields": [
    "Id"
  ]
}
```

Then could be used to build the following SQL query on a server:

```
SELECT * FROM Products WHERE Id IN (SELECT OrderId FROM Orders WHERE OrderId > 10);
```

The subquery above returns a list of Id values, and the main query filters out products whose Ids is in the list provided by the subquery.

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
