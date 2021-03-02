@@if(igxName === 'IgxGrid'){
---
title: Angular Grid | Excel Style Filtering | Infragistics
_description: Learn how to configure Excel like angular filter of data with the Angular Material table. The grid excel filtering is more convenient and engaging than ever.
_keywords: excel like filter, igniteui for angular, infragistics
---
}
@@if(igxName !== 'IgxGrid'){
---
title: Angular Grid | Excel Style Filtering | Infragistics
_description: Learn how to configure Excel like angular filter of data with the Angular Material table. The grid excel filtering is more convenient and engaging than ever.
_keywords: excel like filter, igniteui for angular, infragistics
_canonicalLink: grid/excel-style-filtering
---
}

# @@igComponent Excel Style Filtering

The grid Excel filtering provides an Excel like filtering UI for any Angular Material table like the @@igComponent.

## Angular @@igComponent Excel Style Filtering Example

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="grid-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent Excel Style Filtering Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="tree-grid-sample-1-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent Excel Style Filtering Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="hierarchical-grid-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent Excel Style Filtering Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

## Usage

To turn on the grid excel filtering, two inputs should be set. The [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) should be set to `true` and the [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) should be set to `excelStyleFilter`.

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

Sorting, moving, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable), [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable), [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected), [`disablePinning`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablepinning), [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding).

@@if (igxName === 'IgxGrid') {
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

In the sample below **Product Name** and **Discontinued** columns have all four features enabled, **Quantity Per Unit** have all four disabled, **Unit Price** has only sorting and moving and **Order Date** has only pinning and hiding and all are [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable).
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Product ID" [dataType]="'string'">
    </igx-column>
    <igx-column field="Name" header="Product Name" [sortable]="true" [movable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [movable]="false">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
            <span *ngIf="cell.row.rowData.UnitPrice != 0">${{val}}</span>
        </ng-template>
    </igx-column>
    <igx-column field="AddedDate" header="Added Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false" [movable]="false">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [movable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
            <img *ngIf="cell.row.rowData.UnitPrice != 0 && val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="cell.row.rowData.UnitPrice != 0 && !val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

<div class="divider--half"></div>

In the sample below 'Product Name' and 'Discontinued' columns have all four features enabled, 'Unit Price' have all four disabled, 'Added Date' has only pinning and hiding.
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true" [movable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false" [movable]="false"></igx-column>
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

In the sample below 'Artist' column have all four features enabled, 'Debut' have all four disabled, 'Grammy Nominations' has only pinning and hiding.
}

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="grid-sample-2-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="tree-grid-sample-2-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="hierarchical-grid-sample-2-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

## Templates

If you want to further customize the Excel style filter menu without disabling the column features you could use custom templates. The Excel Style filter menu provides two directives for templating:
- [`IgxExcelStyleColumnOperationsTemplateDirective`]({environment:angularApiUrl}/classes/igxexcelstylecolumnoperationsdirective.html) - re-templates the area with all column operations like sorting, moving, pinning, etc.
- [`IgxExcelStyleFilterOperationsTemplateDirective`]({environment:angularApiUrl}/classes/igxexcelstylefilteroperationsdirective.html) - re-templates the area with all filter specific operations.

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
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-3-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-3' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="tree-grid-sample-3-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-3' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="hierarchical-grid-sample-3-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-3' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
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
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-formatted-strategy-iframe" src='{environment:demosBaseUrl}/grid/grid-formatted-filtering-strategy' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-formatted-strategy-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-formatted-strategy-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-formatted-strategy-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-formatted-filtering-strategy' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-formatted-strategy-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-formatted-strategy-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="hgrid-formatted-strategy-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hGrid-formatted-filtering-strategy' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hgrid-formatted-strategy-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-formatted-strategy-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

>[!NOTE]
>The formatted values filtering strategy won't work correctly if you have more than one column bound to the same field from your data and one of the columns has a formatter.

## External Excel Style filtering

As you see at the demos above the default appearance of the Excel Style filtering dialog is inside the @@igComponent. So this dialog is only visible when configuring the filters. There is a way to make that dialog stay always visible - it can be used outside of the grid as a standalone component. In the demo below, the Excel style filtering is declared separately of the @@igComponent.

### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:670px">
    <iframe id="grid-sample-4-iframe" src='{environment:demosBaseUrl}/grid/grid-external-excel-style-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:670px">
    <iframe id="treegrid-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-external-excel-style-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:670px">
    <iframe id="hierarchicalgrid-sample-4-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-excel-style-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchicalgrid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


<div class="divider--half"></div>

### Usage

In order to configure the Excel style filtering component, you should set its [`column`]({environment:angularApiUrl}/classes/igxexcelstylefilteringdialogcomponent.html#column) property to one of the @@igComponent's columns. In the sample above, we have bound the [`column`]({environment:angularApiUrl}/classes/igxexcelstylefilteringdialogcomponent.html#column) property to the value of an IgxSelectComponent that displays the @@igComponent's columns.

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
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-outlet-iframe" src='{environment:demosBaseUrl}/grid/grid-external-outlet' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-outlet-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-outlet-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-outlet-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-external-outlet' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-outlet-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-outlet-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-outlet-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-outlet' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-outlet-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-outlet-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

## Styling

To get started with styling the Excel Style Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

The excel style filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. In order to change the background we need to create a custom theme:

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: #FFCD0F
);
```

We obviously have a lot more components inside the excel like filtering dialog, such as buttons, checkboxes, a list and even a drop-down. In order to style them, we need to create a separate theme for each one:

```scss
$dark-button: igx-button-theme(
    $flat-background: #FFCD0F,
    $flat-text-color: #292826,
    $flat-hover-background: #292826,
    $flat-hover-text-color: #FFCD0F,

    $raised-background: #FFCD0F,
    $raised-text-color: #292826,
    $raised-hover-background: #292826,
    $raised-hover-text-color: #FFCD0F
);

$dark-input-group: igx-input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$custom-list: igx-list-theme(
    $background: #FFCD0F
);

$custom-checkbox: igx-checkbox-theme(
    $empty-color: #292826,
    $fill-color: #292826,
    $tick-color: #FFCD0F,
    $label-color: #292826
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: #FFCD0F,
    $item-text-color: #292826,
    $hover-item-background: #292826,
    $hover-item-text-color: #FFCD0F
);
```

In this example we only changed some of the parameters for the listed components, but the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme), [`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme), [`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme), [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme), [`igx-list-theme`]({environment:sassApiUrl}/index.html#function-igx-list-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.

```scss
@include igx-drop-down($custom-drop-down);
@include igx-grid($custom-grid);
.igx-excel-filter, .igx-excel-filter__secondary {
    @include igx-button($dark-button);
    @include igx-input-group($dark-input-group);
    @include igx-list($custom-list);
    @include igx-checkbox($custom-checkbox);
    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

>[!NOTE]
>We scope most of the components' mixins within `.igx-excel-filter` and `.igx-excel-filter__secondary`, so that these custom themes will affect only components nested in the excel style filtering dialog and all of its sub-dialogs. Otherwise other buttons, checkboxes, input-groups and lists would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down);
        @include igx-grid($custom-grid);
        .igx-excel-filter, .igx-excel-filter__secondary {
            @include igx-button($dark-button);
            @include igx-input-group($dark-input-group);
            @include igx-list($custom-list);
            @include igx-checkbox($custom-checkbox);
            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```
And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: #FFCD0F
);

$dark-button: igx-button-theme(
    $flat-background: igx-color($dark-palette, "secondary", 400),
    $flat-text-color: igx-color($dark-palette, "primary", 400),
    $flat-hover-background: igx-color($dark-palette, "primary", 400),
    $flat-hover-text-color: igx-color($dark-palette, "secondary", 400),

    $raised-background: igx-color($dark-palette, "secondary", 400),
    $raised-text-color: igx-color($dark-palette, "primary", 400),
    $raised-hover-background: igx-color($dark-palette, "primary", 400),
    $raised-hover-text-color: igx-color($dark-palette, "secondary", 400)
);

$dark-input-group: igx-input-group-theme(
    $box-background: igx-color($dark-palette, "secondary", 400),
    $idle-text-color: igx-color($dark-palette, "primary", 400),
    $focused-text-color: igx-color($dark-palette, "primary", 400),
    $filled-text-color: igx-color($dark-palette, "primary", 400)
);

$custom-list: igx-list-theme(
    $background: igx-color($dark-palette, "secondary", 400)
);

$custom-checkbox: igx-checkbox-theme(
    $empty-color: igx-color($dark-palette, "primary", 400),
    $fill-color: igx-color($dark-palette, "primary", 400),
    $tick-color: igx-color($dark-palette, "secondary", 400),
    $label-color: igx-color($dark-palette, "primary", 400)
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: igx-color($dark-palette, "secondary", 400),
    $item-text-color: igx-color($dark-palette, "primary", 400),
    $hover-item-background: igx-color($dark-palette, "primary", 400),
    $hover-item-text-color: igx-color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid), [`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group), [`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button), [`light-list`]({environment:sassApiUrl}/index.html#variable-_light-list), [`light-checkbox`]({environment:sassApiUrl}/index.html#variable-_light-checkbox) and [`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down) schemas:

```scss
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        flat-background:(
            igx-color: ("secondary", 400)
        ),
        flat-text-color:(
            igx-color: ("primary", 400)
        ),
        flat-hover-background:(
            igx-color: ("primary", 400)
        ),
        flat-hover-text-color:(
            igx-color: ("secondary", 400)
        ),

        raised-background:(
            igx-color: ("secondary", 400)
        ),
        raised-text-color:(
            igx-color: ("primary", 400)
        ),
        raised-hover-background:(
            igx-color: ("primary", 400)
        ),
        raised-hover-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
            igx-color: ("secondary", 400)
        ),
        idle-text-color:(
            igx-color: ("primary", 400)
        ),
        focused-text-color:(
            igx-color: ("primary", 400)
        ),
        filled-text-color:(
            igx-color: ("primary", 400)
        )
    )
);

$custom-list-schema: extend($_light-list,
    (
        background:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-checkbox-schema: extend($_light-checkbox,
    (
        empty-color:(
            igx-color: ("primary", 400)
        ),
        fill-color:(
            igx-color: ("primary", 400)
        ),
        tick-color:(
            igx-color: ("secondary", 400)
        ),
        label-color:(
            igx-color: ("primary", 400)
        )
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
            igx-color: ("secondary", 400)
        ),
        item-text-color:(
            igx-color: ("primary", 400)
        ),
        hover-item-background:(
            igx-color: ("primary", 400)
        ),
        hover-item-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-button: $custom-button-schema,
    igx-input-group: $custom-input-group-schema,
    igx-list: $custom-list-schema,
    igx-checkbox: $custom-checkbox-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-grid: igx-grid-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button: igx-button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: igx-input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-list: igx-list-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-checkbox: igx-checkbox-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: igx-drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="grid-excel-style-filtering-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-excel-style-filtering-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="hierarchical-grid-excel-style-filtering-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

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
