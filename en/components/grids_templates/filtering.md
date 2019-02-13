---
title: @@igComponent Filtering
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Filtering, filter
---

### @@igComponent Filtering

The @@igComponent component in Ignite UI for Angular provides extensive filtering API through the Data Container to which the @@igComponent is bound.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <!-- todo -->
}

<div class="divider--half"></div>

###Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For `number` and `date` columns 'Equals' is selected by default, for `string` - 'Contains' and for `boolean` - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While there are applied conditions for a column and the filter row is closed, you can either remove the conditions by clicking the chip's close button or you can open the filter row by selecting any of the chips. When there is not enough space to show all conditions a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

###Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The @@igComponent currently provides not only a simplistic filtering UI but also more complex filtering options. Depending on the set [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) of the column, the correct set of [**filtering operations**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) is loaded inside the filter UI dropdown. Additionally, you can set the [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) and the initial [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) properties.

Filtering feature is enabled for the igxGrid component by setting the [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) input to `true`. To disable this feature for a certain column – set the [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) input to `false`.

```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    ...
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</@@igSelector>
```

> [!NOTE]
> If values of type `string` are used by column of dataType `Date`, the @@igComponent won't parse it to `Date` objects and using filtering conditions won't be possible. If you want to use `string` objects, additional logic should be implemented on the application level, in order to parse the values to `Date` object.

You can filter any column or a combination of columns through the @@igComponent API. The @@igComponent exposes several methods for this task - [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter), [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal) and [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearfilter).

*   [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) - filter a single column or a combination of columns.

There are five filtering operand classes exposed:
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): this is a base filtering operand, which can be inherited when defining custom filtering conditions.
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) defines all default filtering conditions for `boolean` type.
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) defines all default filtering conditions for `numeric` type.
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) defines all default filtering conditions for `string` type.
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) defines all default filtering conditions for `Date` type.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition("contains"), true);
```

The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.

> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the @@igComponent.

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

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```

*   [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal) - clears all existing filters and applies the new filtering condition to all @@igComponent's columns.

```typescript
// Filter all cells for a value which contains `myproduct`
this.@@igObjectRef.filteringLogic = FilteringLogic.Or;
this.@@igObjectRef.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearfilter) - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```

#### Initial filtered state

To set the initial filtering state of the @@igComponent, set the [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) property to an array of [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) for each column to be filtered.

```typescript
public ngAfterViewInit() {
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

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

#### Filtering logic

The [`filteringLogic`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringlogic) property of the @@igComponent controls how filtering multiple columns will resolve in the @@igComponent. You can change it at any time through the @@igComponent API or through the @@igComponent input property.

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```

The default value of [`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or), a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

<div class="divider--half"></div>

#### Remote Filtering
You can provide @@igComponent's remote filtering by subscribing to [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) and [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) outputs. More information on how to use it you can find in the `Grid Virtualization and Performance` [documentation](virtualization.md#remote-sortingfiltering-virtualization).

<div class="divider--half"></div>

#### Custom Filtering Operands
You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type ([`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) and [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html)). You can extend these classes or their base class [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) to change the filtering menu items’ behavior.

In the sample below, inspect the “Product Name” and “Discontinued” columns filters menus. For the “Discontinued” column filter, we have limited the number of operands to All, True and False. For the “Product Name” column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.

To do that, extend the [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) and [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), modify the operations and their logic and set the column [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) input to the new operands.

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent implements OnInit {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
    ...
}
...
export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: "contains",
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: "Contains (case sensitive)"
            },
            {
                iconName: "does_not_contain",
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: "Does Not Contain (case sensitive)"
            }
        ];

        const emptyOperators = [
            // "Empty"
            this.operations[6],
            // "Not Empty"
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // "All"
            this.operations[0],
            // "TRUE"
            this.operations[1],
            // "FALSE"
            this.operations[2]
        ];
    }
}
```

```html
<!-- grid-custom-filtering.component.html -->

 <@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
    ...
</@@igSelector>
```

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-filtering-iframe" src='{environment:demosBaseUrl}/grid/grid-filter-conditions' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-filtering-iframe" src='{environment:demosBaseUrl}/treegrid/tree-grid-filter-conditions' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <!-- todo -->
}

#### Breaking Changes in 6.1.0
* @@igxName `filteringExpressions` property is removed. Use [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) instead.
* `filter_multiple` method is removed. Use [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) method and [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) property instead.
* The [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) method has new signature. It now accepts the following parameters:
  * `name` - the name of the column to be filtered.
  * `value` - the value to be used for filtering.
  * `conditionOrExpressionTree` (optional) - this parameter accepts object of type [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) or [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html). If only simple filtering is needed, a filtering operation could be passed as an argument. In case of advanced filtering, an expressions tree containing complex filtering logic could be passed as an argument.
  * `ignoreCase` (optional) - whether the filtering is case sensitive or not.
* [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) event now have only one parameter of type [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) which contains the filtering state of the filtered column.
* filtering operands: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html).
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) now exposes a [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) property, which takes an [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) class reference.
* Custom filters can be provided to the @@igComponent columns by populating the [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) property of the [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) with operations of [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) type.

<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
