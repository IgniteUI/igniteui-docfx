@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Filter - Ignite UI for Angular
_description: Start using angular filter to return specific data with Ignite UI for Angular. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: angular filter, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Filter - Ignite UI for Angular
_description: Start using angular filter to return specific data with Ignite UI for Angular. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: angular filter, ignite ui for angular, infragistics
_canonicalLink: grid/filtering
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Filter - Ignite UI for Angular
_description: Start using angular filter to return specific data with Ignite UI for Angular. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: angular filter, ignite ui for angular, infragistics
_canonicalLink: grid/filtering
---
}

# Angular @@igComponent Filtering
IgniteUI for [Angular @@igComponent component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) provides three different filtering types - Quick filtering, [Excel style filtering](excel-style-filtering.md) and [Advanced filtering](advanced-filtering.md) which enable you to display only the records that meet specified criteria. The Material UI grid component in Ignite UI provides angular filter capabilities and extensive filtering API through the Data Container to which the @@igComponent is bound.

## Angular @@igComponent Filtering Example

The sample below demonstrates @@igComponent's **Quick filtering** user experience. @@if(igxName!=='IgxHierarchicalGrid'){API [filter()]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) method is used to apply _contains_ condition on the _ProductName column_ through external _igxInputGroup component_.  } 
@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-filtering-sample" alt="Angular @@igComponent Filtering Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-filtering" alt="Angular @@igComponent Filtering Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:610px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering" alt="Angular @@igComponent Filtering Example">
</code-view>

}

<div class="divider--half"></div>

## Setup
In order to specify if filtering is enabled and which filtering mode should be used, the @@igComponent exposes the following boolean properties - [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowFiltering), [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowAdvancedFiltering), [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterMode) and [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable).

Property **[allowFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering)** enables you to specify the following options:
- **false** - the filtering for the corresponding grid will be disabled; /default value/
- **true** - the filtering for the corresponding grid will be enabled;

Property **[allowAdvancedFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowAdvancedFiltering)** enables you to specify the following options:
- **false** - the advanced filtering for the corresponding grid will be disabled; /default value/
- **true** - the advanced filtering for the corresponding grid will be enabled;

Property **[filterMode]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterMode)** enables you to specify the following options:
- **quickFilter** - a simplistic filtering UI; /default value/
- **excelStyleFilter** - an Excel-like filtering UI;

Property **[filterable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)** enables you to specify the following options:
- **true** - the filtering for the corresponding column will be enabled; /default value/
- **false** - the filtering for the corresponding column will be disabled;

@@if (igxName === 'IgxTreeGrid') {
```html
<@@igSelector [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Name" header="Order Product"></igx-column>
    <igx-column field="Units" header="Units" dataType="number" [filterable]="false"></igx-column>
</@@igSelector>
```
}
@@if (igxName !== 'IgxTreeGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</@@igSelector>
```
}

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowAdvancedFiltering) input properties to `true`.

```html
<@@igSelector [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</@@igSelector>
```

>[!NOTE]
>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the @@igComponent. Both filtering user interfaces will work independently of one another. The final filtered result in the @@igComponent is the intersection between the results of the two filters.

## Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For `number` and `date` columns 'Equals' is selected by default, for `string` - 'Contains' and for `boolean` - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

## Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The @@igComponent currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) of the column, the correct set of [**filtering operations**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) is loaded inside the filter UI dropdown. Additionally, you can set the [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) and the initial [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) properties.

Filtering feature is enabled for the @@igComponent component by setting the [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowFiltering) input to `true`. The default [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterMode) is `quickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) input to `false`. 

@@if (igxName === 'IgxGrid') {
```html
<@@igSelector [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</@@igSelector>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<@@igSelector [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Name" header="Order Product"></igx-column>
    <igx-column field="Units" header="Units" dataType="number"></igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [filterable]="false">
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]="true"></igx-column>
    <igx-column field="Photo" [filterable]="false">
</igx-hierarchical-grid>
```
}

> [!NOTE]
> If values of type `string` are used by a column of dataType `Date`, the @@igComponent won't parse them to `Date` objects and using filtering conditions won't be possible. If you want to use `string` objects, additional logic should be implemented on the application level, in order to parse the values to `Date` objects.

You can filter any column or a combination of columns through the @@igComponent API. The @@igComponent exposes several methods for this task - [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter), [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal) and [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearFilter).

*   [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) - filter a single column or a combination of columns.

There are five filtering operand classes exposed:
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): this is a base filtering operand, which can be inherited when defining custom filtering conditions.
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) defines all default filtering conditions for `boolean` type.
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) defines all default filtering conditions for `numeric` type.
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) defines all default filtering conditions for `string` type.
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) defines all default filtering conditions for `Date` type.

@@if (igxName === 'IgxTreeGrid') {
```typescript
// Single column filtering

// Filter the `Order Product` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('Order Product', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```
}

The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.

> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the @@igComponent.

@@if (igxName === 'IgxTreeGrid') {
```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'Order Product',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```
}

*   [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterGlobal) - clears all existing filters and applies the new filtering condition to all @@igComponent's columns.

```typescript
// Filter all cells for a value which contains `myproduct`
this.@@igObjectRef.filteringLogic = FilteringLogic.Or;
this.@@igObjectRef.filterGlobal('myproduct', IgxStringFilteringOperand.instance().condition('contains'), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearFilter) - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

@@if (igxName === 'IgxTreeGrid') {
```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('Order Product');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```
}

## Initial filtered state

To set the initial filtering state of the @@igComponent, set the [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringExpressionsTree) property to an array of [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) for each column to be filtered.

@@if (igxName === 'IgxTreeGrid') {
```typescript
constructor(private cdr: ChangeDetectorRef) { }

public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Order Product');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'Order Product',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
constructor(private cdr: ChangeDetectorRef) { }

public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'ProductName',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```
}

### Filtering logic

The [`filteringLogic`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringlogic) property of the @@igComponent controls how filtering multiple columns will resolve in the @@igComponent. You can change it at any time through the @@igComponent API, or through the @@igComponent input property.

```typescript
import { FilteringLogic } from 'igniteui-angular';
// import { FilteringLogic } from '@infragistics/igniteui-angular'; for licensed package
...

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```

The default value of [`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or), a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
## Remote Filtering

The @@igComponent supports remote filtering, which is demonstrated in the [`@@igComponent Remote Data Operations`](remote-data-operations.md) topic.

<div class="divider--half"></div>
}

## Custom Filtering Operands
You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type ([`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) and [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html)). You can extend these classes or their base class [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) to change the filtering menu items’ behavior.

@@if (igxName !== 'IgxTreeGrid') {
In the sample below, inspect the "Product Name" and "Discontinued" columns filters menus. For the "Discontinued" column filter, we have limited the number of operands to All, True and False. For the "Product Name" column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.
}
@@if (igxName === 'IgxTreeGrid') {
In the sample below, inspect the "Order Product" and "Delivered" columns filters menus. For the "Delivered" column filter, we have limited the number of operands to All, True and False. For the "Order Product" column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.
}

To do that, extend the [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) and [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html), modify the operations and their logic, and set the column [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) input to the new operands.

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}

export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```
@@if (igxName === 'IgxGrid') {
```html
<!-- grid-custom-filtering.component.html -->

<@@igSelector [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        </ng-template>
    </igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- tree-grid-filtering-custom-sample.component.html -->

<@@igSelector [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Name" header="Order Product" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        </ng-template>
    </igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- hierarchical-grid-custom-filtering.component.html -->

<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]='true' [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
            <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
        </ng-template>
    </igx-column>
</igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-filter-conditions" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-filtering-custom" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
   
<code-view style="height:610px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-filtering" >
</code-view>

}

## Re-templating filter cell
You can add a template marked with `igxFilterCellTemplate` in order to retemplate the filter cell. In the sample below, an input is added for the string columns and IgxDatePicker for the date column. When the user types or selects a value, a filter with contains operator for string columns and equals operator for date columns, is applied using grid's public API.

@@if (igxName === 'IgxGrid') {

<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-filtering-template-sample" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-filtering-template" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
   
<code-view style="height:610px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-template" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid') {
    
## Matching Records Only Filtering Strategy
By default, after a filtering is applied, the Tree Grid component displays the records matching the criterion that have been set and their parents in a grayed-out fashion to provide additional context. However, in some cases, you may want to display only the records matching particular filtering condition without any trace for their parents. This can be achieved by using the `TreeGridMatchingRecordsOnlyFilteringStrategy`:

```html
<igx-grid [data]="data" [allowFiltering]="true" [filterStrategy]="matchingRecordsOnlyStrategy">

</igx-grid>
```

```typescript
import { TreeGridMatchingRecordsOnlyFilteringStrategy } from "igniteui-angular";
...
public matchingRecordsOnlyStrategy = new TreeGridMatchingRecordsOnlyFilteringStrategy();
```

}


## Styling

To get started with styling the filtering row, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the `$filtering-row-text-color`, `$filtering-row-background`, `$filtering-header-text-color` and the `$filtering-header-background` parameters.

```scss
$custom-grid: grid-theme(
  $filtering-row-text-color: #292826,
  $filtering-row-background: #ffcd0f,
  $filtering-header-text-color: #292826,
  $filtering-header-background: #ffcd0f
);
```

As seen, the `grid-theme` only controls colors for the filtering row and the respective column header that is being filtered. We obviously have a lot more components inside the filtering row, such as an input group, chips, buttons and others. In order to style them, we need to create a separate theme for each one, so let's create a new [`input-group-theme`]({environment:sassApiUrl}/themes#input-group-theme) and a new [`button-theme`]({environment:sassApiUrl}/themes#button-theme):

```scss
$dark-input-group: input-group-theme(
  $box-background: #ffcd0f,
  $idle-text-color: #292826,
  $focused-text-color: #292826,
  $filled-text-color: #292826
);

$dark-button: button-theme(
  $flat-background: #ffcd0f,
  $flat-text-color: #292826,
  $flat-hover-background: #292826,
  $flat-hover-text-color: #ffcd0f
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

In this example we only changed some of the parameters for the input group and the button, but the [`input-group-theme`]({environment:sassApiUrl}/themes#function-input-group-theme) and the [`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.

```scss
@include css-vars($custom-grid);

.igx-grid__filtering-row {
  @include css-vars($dark-button);
  @include css-vars($dark-input-group);  

  .igx-input-group__input::placeholder {
    color: #ffcd0f;
  }
}
```

>[!NOTE]
>We include the created **button-theme** and **input-group-theme** within `.igx-grid__filtering-row`, so that only the filtering row buttons and its input group would be styled. Otherwise other buttons and input groups in the grid would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
  ::ng-deep {
    @include css-vars($custom-grid);

    .igx-grid__filtering-row {
      @include css-vars($dark-button);
      @include css-vars($dark-input-group)

      .igx-input-group__input::placeholder {
        color: #ffcd0f;
      }
    }
  }
}
```

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:500px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:500px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
   
<code-view style="height:650px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-style" >
</code-view>

}
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## Known Limitations

> [!NOTE] 
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).

@@if (igxName !== 'IgxHierarchicalGrid') {
### Breaking Changes in 6.1.0
* @@igxName `filteringExpressions` property is removed. Use [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) instead.
* `filter_multiple` method is removed. Use [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) method and [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringExpressionsTree) property instead.
* The [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) method has new signature. It now accepts the following parameters:
  * `name` - the name of the column to be filtered.
  * `value` - the value to be used for filtering.
  * `conditionOrExpressionTree` (optional) - this parameter accepts object of type [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) or [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html). If only simple filtering is needed, a filtering operation could be passed as an argument. In case of advanced filtering, an expressions tree containing complex filtering logic could be passed as an argument.
  * `ignoreCase` (optional) - whether the filtering is case sensitive or not.
* [`filteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringDone) event now have only one parameter of type [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) which contains the filtering state of the filtered column.
* filtering operands: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html).
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) now exposes a [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) property, which takes an [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) class reference.
* Custom filters can be provided to the @@igComponent columns by populating the [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) property of the [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) with operations of [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) type.
}

## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
