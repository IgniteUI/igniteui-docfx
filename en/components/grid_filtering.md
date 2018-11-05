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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The Grid currently provides not only a simplistic filtering UI but also more complex filtering options. Depending on the set [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) of the column, the correct set of [**filtering operations**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) is loaded inside the filter UI dropdown. Additionally, you can set the [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) and the initial [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) properties.

Filtering feature is enabled for the igxGrid component by setting the [`allowFiltering`]({environment:angularApiUrl}/classes/igxgridcomponent.html#allowfiltering) input to `true`. To disable this feature for a certain column – set the [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) input to `false`.

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    ...
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</igx-grid>
```

> [!NOTE]
> If values of type `string` are used by column of dataType `Date`, the grid won't parse it to `Date` objects and using filtering conditions won't be possible. If you want to use `string` objects, additional logic should be implemented on the application level, in order to parse the values to `Date` object.

You can filter any column or a combination of columns through the grid API. The grid exposes several methods for this task - [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter), [`filterGlobal`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filterglobal) and [`clearFilter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearfilter).

*   [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) - filter a single column or a combination of columns.

There are five filtering operand classes exposed:
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): this is a base filtering operand, which can be inherited when defining custom filtering conditions.
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) defines all default filtering conditions for `boolean` type.
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) defines all default filtering conditions for `numeric` type.
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) defines all default filtering conditions for `string` type.
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) defines all default filtering conditions for `Date` type.

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

*   [`filterGlobal`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filterglobal) - clears all existing filters and applies the new filtering condition to all grid's columns.

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearfilter) - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### Initial filtered state

To set the initial filtering state of the grid, set the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) property to an array of [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) for each column to be filtered.

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

The [`filteringLogic`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringlogic) property of the grid controls how filtering multiple columns will resolve in the grid. You can change it at any time through the grid API or through the grid input property.

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

The default value of [`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or), a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

<div class="divider--half"></div>

#### Remote Filtering
You can provide grid's remote filtering by subscribing to [`onDataPreLoad`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ondatapreload) and [`onFilteringDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onfilteringdone) outputs. More information on how to use it you can find in the `Grid Virtualization and Performance` [documentation](grid_virtualization.md#remote-sortingfiltering-virtualization).

<div class="divider--half"></div>

#### Breaking Changes in 6.1.0
* IgxGridComponent `filteringExpressions` property is removed. Use [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) instead.
* `filter_multiple` method is removed. Use [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) method and [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) property instead.
* The [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) method has new signature. It now accepts the following parameters:
  * `name` - the name of the column to be filtered.
  * `value` - the value to be used for filtering.
  * `conditionOrExpressionTree` (optional) - this parameter accepts object of type [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) or [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html). If only simple filtering is needed, a filtering operation could be passed as an argument. In case of advanced filtering, an expressions tree containing complex filtering logic could be passed as an argument.
  * `ignoreCase` (optional) - whether the filtering is case sensitive or not.
* [`onFilteringDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onfilteringdone) event now have only one parameter of type [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) which contains the filtering state of the filtered column.
* filtering operands: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html).
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) now exposes a [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) property, which takes an [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) class reference.
* Custom filters can be provided to the grid columns by populating the [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) property of the [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) with operations of [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) type.

<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

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
