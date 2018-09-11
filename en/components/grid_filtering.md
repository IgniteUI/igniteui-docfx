---
title: Grid filtering
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Filtering, filter
---

### Grid Filtering

The Grid component in Ignite UI for Angular provides extensive filtering API through the Data Container to which the grid is bound.

#### Demo

<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The Grid currently provides not only a simplistic filtering UI but also more complex filtering options. Depending on the set `dataType` of the column, the correct set of [**filtering operations**](grid.md#filtering-conditions) is loaded inside the filter UI dropdown. Additionally, you can set the `ignoreCase` and the initial `condition` properties.

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

> [!NOTE]
> If values of type `string` are used by column of dataType `Date`, the grid won't parse it to `Date` objects and using filtering conditions won't be possible. If you want to use `string` objects, additional logic should be implemented on the application level, in order to parse the values to `Date` object.

You can filter any column or a combination of columns through the grid API. The grid exposes several methods for this task - `filter`, `filterGlobal ` and `clearFilter`.

*   `filter` - filter a single column or a combination of columns.

There are five filtering operand classes exposed:
   - `IgxFilteringOperand`: this is a base filtering operand, which can be inherited when defining custom filtering conditions.
   - `IgxBooleanFilteringOperand` defines all default filtering conditions for `boolean` type.
   - `IgxNumberFilteringOperand` defines all default filtering conditions for `numeric` type.
   - `IgxStringFilteringOperand` defines all default filtering conditions for `string` type.
   - `IgxDateFilteringOperand` defines all default filtering conditions for `Date` type.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition("contains"), true);
```

The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.

> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the grid.

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "ProductName");
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition("contains"),
    fieldName: "ProductName",
    ignoreCase: true,
    searchVal: "ch"
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "Price");
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition("greaterThan"),
    fieldName: "UnitPrice",
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
```

*   `filterGlobal` - clears all existing filters and applies the new filtering condition to all grid's columns.

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   `clearFilter` - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### Initial filtered state

To set the initial filtering state of the grid, set the IgxGridComponent `filteringExpressionsTree` property to an array of IFilteringExpressionsTree for each column to be filtered.

```typescript
public ngOnInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "ProductName");
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition("contains"),
        fieldName: "ProductName",
        ignoreCase: true,
        searchVal: "c"
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

#### Filtering logic

The `filteringLogic` property of the grid controls how filtering multiple columns will resolve in the grid. You can change it at any time through the grid API or through the grid input property.

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

<div class="divider--half"></div>

#### Remote Filtering
You can activate grid's remote filtering by subscribing to several outputs. More information on how to use it you can find in the `Grid Virtualization and Performance` [documentation](grid_virtualization.md#remote-sortingfiltering-virtualization).

<div class="divider--half"></div>

#### Breaking Changes in 6.1.0
* IgxGridComponent `filteringExpressions` property is removed. Use `filteringExpressionsTree` instead.
* `filter_multiple` method is removed. Use `filter` method and `filteringExpressionsTree` property instead.
* The `filter` method has new signature. It now accepts the following parameters:
  * `name` - the name of the column to be filtered.
  * `value` - the value to be used for filtering.
  * `conditionOrExpressionTree` (optional) - this parameter accepts object of type `IFilteringOperation` or `IFilteringExpressionsTree`. If only simple filtering is needed, a filtering operation could be passed as an argument. In case of advanced filtering, an expressions tree containing complex filtering logic could be passed as an argument.
  * `ignoreCase` (optional) - whether the filtering is case sensitive or not.
* `onFilteringDone` event now have only one parameter of type `IFilteringExpressionsTree` which contains the filtering state of the filtered column.
* filtering operands: `IFilteringExpression` condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an `IFilteringOperation`.
* `IgxColumnComponent` now exposes a `filters` property, which takes an `IgxFilteringOperand` class reference.
* Custom filters can be provided to the grid columns by populating the `operations` property of the `IgxFilteringOperand` with operations of `IFilteringOperation` type.

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Paging](grid_paging.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Moving](grid_column_moving.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
