@@if(igxName === 'IgxGrid'){
---
title: Excel Style Filtering in Angular Data Grid- Ignite UI for Angular
_description: Learn how to configure Excel filtering in Angular Data Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
_keywords: excel like filter, igniteui for angular, infragistics
---
}
@@if(igxName !== 'IgxGrid'){
---
title: Excel Style Filtering in Angular @@igComponent - Ignite UI for Angular
_description: Learn how to configure Excel filtering in Angular @@igComponent. You can enable/disable various options and customize the Excel style filter menu the way you want.
_keywords: excel like filter, igniteui for angular, infragistics
_canonicalLink: grid/excel-style-filtering
---
}

# Excel Filtering in Angular @@igComponent

The grid Excel filtering provides an Excel like filtering UI for any Angular table like the @@igComponent.

## Angular @@igComponent Excel Style Filtering Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-1" alt="Angular @@igComponent Excel Style Filtering Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-1" alt="Angular @@igComponent Excel Style Filtering Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-1" alt="Angular @@igComponent Excel Style Filtering Example">
</code-view>

}

<div class="divider--half"></div>

## Usage

To turn on the grid excel filtering, two inputs should be set. The [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowFiltering) should be set to `true` and the [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterMode) should be set to `excelStyleFilter`.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-hierarchical-grid>
```
}

## Interactions

In order to open the filter menu for a particular column, the Angular filter icon in the header should be clicked. Additionally, you can use the `Ctrl + Shift + L` combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.

If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press `Enter`. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or).

If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option `Add current selection to filter`.

If you want to clear the filter, you can check the `Select All` option and then click the Apply button.

To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.


<div class="divider--half"></div>

## Configure Menu Features

Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable), [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected), [`disablePinning`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablePinning), [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disableHiding).

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

<div class="divider--half"></div>

In the sample below **Product Name** and **Discontinued** columns have all four features enabled, **Quantity Per Unit** have all three disabled, **Unit Price** has only sorting and **Order Date** has only pinning and hiding and all are [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable).
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [moving]="true" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Order ID" [dataType]="'string'"></igx-column>
    <igx-column field="Name" header="Order Product" [dataType]="'string'" [sortable]="true"></igx-column>
    <igx-column field="Category" header="Category" [dataType]="'string'" [sortable]="true"></igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true"></igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions"></igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false" [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false"></igx-column>
    <igx-column field="Delivered" header="Deliverued" [dataType]="'boolean'" [sortable]="false">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

<div class="divider--half"></div>

In the sample below 'Order Product', 'Category' and 'Units' columns have all three features enabled, 'Price' have all three disabled, 'Order Date' and 'Delivered' have only pinning and hiding.
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

<div class="divider--half"></div>

In the sample below 'Artist' column have all three features enabled, 'Debut' have all three disabled, 'Grammy Nominations' has only pinning and hiding.
}

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-2" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-2" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-2" >
</code-view>

}

<div class="divider--half"></div>

## Templates

If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:
- `IgxExcelStyleColumnOperationsTemplateDirective` - re-templates the area with all column operations like sorting, pinning, etc.
- `IgxExcelStyleFilterOperationsTemplateDirective` - re-templates the area with all filter specific operations.

You could either re-template only one of those areas or both of them. You could put any custom content inside those directives or you could use any of our built-in Excel style filtering components.

The following code demonstrates how to define a custom Excel style filter menu using the [`igx-excel-style-header`]({environment:angularApiUrl}/classes/igxexcelstyleheadercomponent.html), [`igx-excel-style-sorting`]({environment:angularApiUrl}/classes/igxexcelstylesortingcomponent.html) and [`igx-excel-style-search`]({environment:angularApiUrl}/classes/igxexcelstylesearchcomponent.html) components.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
    
    ...
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

    ...
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    
    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

    ...

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>
        ....
</igx-hierarchical-grid>
```

}

You could also re-template the Excel style filtering icon in the column header using the `igxExcelStyleHeaderIcon` directive:

```html
<@@igSelector ...>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</@@igSelector>
```

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-3" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-3" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-3" >
</code-view>

}

Here is the full list of Excel style filtering components that you could use:
- [`igx-excel-style-header`]({environment:angularApiUrl}/classes/igxexcelstyleheadercomponent.html)
- [`igx-excel-style-sorting`]({environment:angularApiUrl}/classes/igxexcelstylesortingcomponent.html)
- [`igx-excel-style-moving`]({environment:angularApiUrl}/classes/igxexcelstylemovingcomponent.html)
- [`igx-excel-style-pinning`]({environment:angularApiUrl}/classes/igxexcelstylepinningcomponent.html)
- [`igx-excel-style-hiding`]({environment:angularApiUrl}/classes/igxexcelstylehidingcomponent.html)
- [`igx-excel-style-selecting`]({environment:angularApiUrl}/classes/igxexcelstyleselectingcomponent.html)
- [`igx-excel-style-clear-filters`]({environment:angularApiUrl}/classes/igxexcelstyleclearfilterscomponent.html)
- [`igx-excel-style-conditional-filter`]({environment:angularApiUrl}/classes/igxexcelstyleconditionalfiltercomponent.html)
- [`igx-excel-style-search`]({environment:angularApiUrl}/classes/igxexcelstylesearchcomponent.html)

<div class="divider--half"></div>

## Unique Column Values Strategy

The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. These values can be provided manually and loaded on demand, which is demonstrated in the [`@@igComponent Remote Data Operations`](remote-data-operations.md#unique-column-values-strategy) topic.

## Formatted Values Filtering Strategy

By default, the @@igComponent component filters the data based on the original cell values, however in some cases you may want to filter the data based on the formatted values. @@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') { In order to do that you can use the [`FormattedValuesFilteringStrategy`]({environment:angularApiUrl}/classes/formattedvaluesfilteringstrategy.html). } @@if (igxName === 'IgxTreeGrid') { In order to do that you can use the [`TreeGridFormattedValuesFilteringStrategy`]({environment:angularApiUrl}/classes/treegridformattedvaluesfilteringstrategy.html). } The following sample demonstrates how to format the numeric values of a column as strings and filter the @@igComponent based on the string values:

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-formatted-filtering-strategy" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-formatted-filtering-strategy" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-formatted-filtering-strategy" >
</code-view>

}

>[!NOTE]
>The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.


@@if (igxName === 'IgxTreeGrid') {
## Tree Filter View

By default, the Excel Style Filtering dialog displays the items in a list view. In order to display them in a tree view you can use the [`TreeGridFilteringStrategy`]({environment:angularApiUrl}/classes/treegridfilteringstrategy.html) and specify an array of column field names. Filter items will be displayed in a tree view for the specified columns and in a list view for all other columns. The following sample demonstrates how to show filter items in a tree view for the first column:

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-tree-filter-view" >
</code-view>
}

## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the @@igComponent. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the @@igComponent.

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:670px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-external-excel-style-filtering" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:670px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-external-excel-style-filtering" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:670px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-excel-style-filtering" >
</code-view>

}


<div class="divider--half"></div>

### Usage

In order to configure the Excel style filtering component, you should set its [`column`]({environment:angularApiUrl}/classes/igxgridexcelstylefilteringcomponent.html#column) property to one of the @@igComponent's columns. In the sample above, we have bound the [`column`]({environment:angularApiUrl}/classes/igxgridexcelstylefilteringcomponent.html#column) property to the value of an IgxSelectComponent that displays the @@igComponent's columns.

@@if (igxName === 'IgxGrid') {
```html
<igx-select #gridColums value="ProductID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of grid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-select #gridColums value="ID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of treegrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="treegrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-select #gridColums value="Artist">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of hierarchicalgrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="hierarchicalgrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```
}

## External Outlet

The @@igComponent's [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) creates separate stacking context for each grid in the DOM. This ensures that all descendant elements of the grid will render as intended, without overlapping one another.
However, elements that go outside of the grid (e.g. Excel Style filter) will conflict with outside elements with the same `z-index` (e.g. having two grids one under another) resulting in false rendering. The solution for this issue is to set the [`outlet`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#outlet) property to an external outlet directive which allows the overlay elements to always appear on top.

### Demo
@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-external-outlet" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-external-outlet" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-outlet" >
</code-view>

}

## Styling

To get started with styling the Excel Style Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The Excel Style Filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. Additionally, there are specific Excel Style Filtering parameters available for customizing the text color of elements within the dialog. To change the overall style of the dialog, you need to create a custom theme.

```scss
$custom-grid: grid-theme(
  $filtering-row-background: #ffcd0f,
  $excel-filtering-header-foreground: #292826,
  $excel-filtering-subheader-foreground: #292826,
  $excel-filtering-actions-foreground: #006400,
  $excel-filtering-actions-hover-foreground: #ffcd0f,
  $excel-filtering-actions-disabled-foreground: #9e9e9e
);
```

We obviously have a lot more components inside the excel like filtering dialog, such as buttons, checkboxes, a list and even a drop-down. In order to style them, we need to create a separate theme for each one:

```scss
$custom-button: button-theme(
  $background: #ffcd0f,
  $foreground: #292826,
  $hover-background: #292826,
  $hover-foreground: #ffcd0f
);

$custom-checkbox: checkbox-theme(
  $empty-color: #292826,
  $fill-color: #292826,
  $tick-color: #ffcd0f,
  $label-color: #292826
);

$custom-drop-down: drop-down-theme(
  $background-color: #ffcd0f,
  $item-text-color: #292826,
  $hover-item-background: #292826,
  $hover-item-text-color: #ffcd0f
);

$custom-input-group: input-group-theme(
  $box-background: #ffcd0f,
  $idle-text-color: #292826,
  $focused-text-color: #292826,
  $filled-text-color: #292826
);

$custom-list: list-theme(
  $background: #ffcd0f
);

```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

In this example we only changed some of the parameters for the listed components, but the [`button-theme`]({environment:sassApiUrl}/themes#function-button-theme), [`checkbox-theme`]({environment:sassApiUrl}/themes#function-checkbox-theme), [`drop-down-theme`]({environment:sassApiUrl}/themes#function-drop-down-theme), [`input-group-theme`]({environment:sassApiUrl}/themes#function-input-group-theme), [`list-theme`]({environment:sassApiUrl}/themes#function-list-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.

```scss
@include css-vars($custom-grid);
@include css-vars($custom-drop-down);

.igx-excel-filter, 
.igx-excel-filter__secondary {
  @include css-vars($custom-button);
  @include css-vars($custom-checkbox);
  @include css-vars($custom-input-group);
  @include css-vars($custom-list);

  .igx-input-group__input::placeholder {
    color: #ffcd0f;
  }
}
```

>[!NOTE]
>We scope most of the components' mixins within `.igx-excel-filter` and `.igx-excel-filter__secondary`, so that these custom themes will affect only components nested in the excel style filtering dialog and all of its sub-dialogs. Otherwise other buttons, checkboxes, input-groups and lists would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
  ::ng-deep {
    @include css-vars($custom-grid);
    @include css-vars($custom-drop-down);


    .igx-excel-filter,
    .igx-excel-filter__secondary {
      @include css-vars($custom-button);
      @include css-vars($custom-checkbox);
      @include css-vars($custom-input-group);
      @include css-vars($custom-list);
      
      .igx-input-group__input::placeholder {
        color: #ffcd0f;
      }
    }
  }
}
```

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:950px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:950px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:950px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-style" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

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
