---
title: Virtualization Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Virtualization Directive, Virtualization, Performance
---

### Grid Virtualization and Performance

In Ignite UI for Angular, the `igxGrid` control now utilizes the `igxForOf` directive and virtualizes its content both vertically and horizontally.

#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Enabling Virtualization

By utilizing the `igxForOf` directive the Data Grid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. `igxGrid`'s `width` and `height` defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the grid's `width` and/or `height` to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if `width` is `null` and rows if height is `null`).

The size of the data chunks is determined by:

*   The row height for the vertical (row) virtualization. This is determined by the `rowHeight` option and is 50(px) by default.
*   The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the grid's `columnWidth` option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the grid's container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

### Remote Virtualization

`igxGrid` supports the scenario in which the data chunks are requested from a remote service, exposing the behavior implemented in the `igxForOf` directive it uses internally.

### Grid Remote Virtualization Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" src='{environment:demosBaseUrl}/grid-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

To utilize this feature, you need to subscribe to the `onDataPreLoad` output so that you make the appropriate request based on the arguments received, as well as set the public `igxGrid` property `totalItemCount` with the respective information coming from the service. 

```html
<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false' (onDataPreLoad)="processData()"
    (onSortingDone)="processData()">
    <igx-column [field]="'ID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'CategoryName'" [sortable]="true"></igx-column>
    <igx-column [field]="'Rating'" [dataType]="'number'" [headerClasses]="'headerAlignSyle'" [sortable]="true">
        <ng-template igxHeader>
            <span class="cellAlignSyle">Rating</span>
        </ng-template>
        <ng-template igxCell let-val>
            <div class="currency-badge-container">
                <igx-badge *ngIf="val>0" type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
                <igx-badge *ngIf="val<=0" type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
                <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<=0">{{ formatNumber(val) }}</span>
            </div>
        </ng-template>
    </igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitsInStock'" [dataType]="'number'" [headerClasses]="'headerAlignSyle'" [sortable]="true">
        <ng-template igxHeader>
            <span class="cellAlignSyle">UnitsInStock</span>
        </ng-template>
        <ng-template igxCell let-val>
            <div class="currency-badge-container">
                <igx-badge *ngIf="val>50" type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
                <igx-badge *ngIf="val<=50" type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
                <span class="cellAlignSyle" [class.up]="val>50" [class.down]="val<=50">{{ formatNumber(val) }}</span>
            </div>
        </ng-template>
    </igx-column>
    <igx-column [field]="'SupplierName'" [sortable]="true"></igx-column>
</igx-grid>

<igx-toast #toast></igx-toast>
```

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], (data) => {
        this.grid.totalItemCount = data.Count;
    });
}

public processData() {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }

    this.toast.message = "Loading Remote Data...";
    this.toast.position = 1;
    this.toast.show();
    this.cdr.detectChanges();

    const virtualizationState = this.grid.virtualizationState;
    const sortingExpr = this.grid.sortingExpressions[0];

    this.prevRequest = this.remoteService.getData(virtualizationState, sortingExpr, () => {
        this.toast.hide();
        this.cdr.detectChanges();
    });
}
```

When requesting data, you need to utilize the `IForOfState` interface, which provides the `startIndex` and `chunkSize` properties.

***Note:*** The first `chunkSize` will always be 0 and should be determined by you based on the specific application scenario.

```typescript
public getData(virtualizationArgs?: IForOfState, sortingArgs?: any, cb?: (any) => void): any {
    return this.http.get(this.buildDataUrl(virtualizationArgs, sortingArgs)).subscribe((data: any) => {
        this._remoteData.next(data.Results);
        if (cb) {
            cb(data);
        }
    });
}

private buildDataUrl(virtualizationArgs: any, sortingArgs: any): string {
    let baseQueryString = `${this._url}?$inlinecount=allpages`;
    let scrollingQuery = EMPTY_STRING;
    let orderQuery = EMPTY_STRING;
    let query = EMPTY_STRING;

    if (sortingArgs) {
        let sortingDirection: string;
        switch (sortingArgs.dir) {
            case SortingDirection.Asc:
                sortingDirection = SortOrder.ASC;
                break;
            case SortingDirection.Desc:
                sortingDirection = SortOrder.DESC;
                break;
            default:
                sortingDirection = SortOrder.NONE;
        }

        orderQuery = `$orderby=${sortingArgs.fieldName} ${sortingDirection}`;
    }

    if (virtualizationArgs) {
        const skip = virtualizationArgs.startIndex;
        // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
        const top = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
        scrollingQuery = `$skip=${skip}&$top=${top}`;
    }

    query += (orderQuery !== EMPTY_STRING) ? `&${orderQuery}` : EMPTY_STRING;
    query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

    baseQueryString += query;

    return baseQueryString;
}
```

### Remote Filtering Virtualization Demo
To provide remote filtering, you need to subscribe to the `onDataPreLoad` and `onFilteringDone` outputs so that you make the appropriate request based on the arguments received, as well as set the public `igxGrid` property `totalItemCount` with the respective information coming from the service. You should mark the filterable columns setting `filterable` input to *true*. 

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-remote-filtering-iframe" src='{environment:demosBaseUrl}/grid-remote-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-remote-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Virtualization Limitations

*   Variable row heights are not supported. All rows must have the same height.
*   Specified dimensions for rows/columns should match the actual rendered elements. For instance, if there is a template or class defined for the grid cells, which expand the row heights and they no longer match the specified `rowHeight` value the vertical virtualization will no longer work as expected. The virtual items count will no longer reflect the actual elements in the DOM. The same applies to columns and their widths.
*   Browsers currently have height limitation for DOM elements. Because of that the total height of the rows shouldn't exceed the height limitation of the browsers. Otherwise there may be unexpected changes in behavior of `igxGrid`. For example Internet Explorer 11 has height limitation of 1 533 916 pixels, which for rows with height 50px means no more than 30 678 rows.
*   When the grid has responsive width and/or height and responds to size changes of the browser's window or other elements sizes, the scroll position resets to 0. A more natural solution to the changing scrollbar position and size is planned for future releases.
*   On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the grid’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

### FAQ

#### Why having dimensions in the grid is neccessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the grid is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take affect.

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
