---
title: Grid Excel Style Filtering
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Filtering, Data Grid Filtering, Data Table Filtering
---

### Grid Excel Style Filtering

The Grid component in Ignite UI for Angular provides filter UI similar to the one in excel.

#### Demo

<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

###Usage

To turn on the excel style filtering, two inputs should be set. The `allowFiltering` should be set to `true` and the `filterMode` should be set to `excelStyleFilter`.

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-grid>
```

###Interaction

In order to open the filter menu for a particular column, the filter icon in the header should be clicked. If the column can be sorted, pinned, moved or hidden along with the filtering functionality there will be buttons for the features that are turned on.

If no filter is applied all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data you can select/deselect the items in the list and click Apply button. The filtering applied throught the list items create filter expressions with `equals` operator and the logic operator between each expression is `OR`. If you want to clear the filter you can check Select All item and then Apply button. 

To apply filter with different expressions you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button which can clear the filter.


<div class="divider--half"></div>

###Configure menu features

Sorting, moving, pinning and hiding features can be removed from the filter menu. The inputs that controls them are as follows: `sortable`, `movable`, `disablePinning`, `disableHiding`.

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [movable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [movable]="false" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [movable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false" [movable]="false" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [movable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```
<div class="divider--half"></div>

In the sample bellow 'Product Name' and 'Discontinued' columns have all four features enebled, 'Quantity Per Unit' have all four disabled, 'Unit Price' has only sorting and moving and 'Order Date' has only pinning and hiding.

<div class="divider--half"></div>

<div class="sample-container loading" style="height:800px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
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