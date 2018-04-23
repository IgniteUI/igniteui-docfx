---
title: Virtualization Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Virtualization Directive, Virtualization, Performance
---

### Grid Virtualization and Performance

Many modern applications require displaying big data in a way that is performant and seamless to the end user. For this reason, within Ignite UI for Angular, the `igxGrid` control now utilizes the `igxForOf` directive and virtualizes its content both vertically (the data records) and horizontally (the columns), allowing the user to scroll through a large set of data smoothly with optimal performance. By utilizing the `igxForOf` directive the Data Grid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically.

#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Enabling Virtualization


`igxGrid`'s `width` and `height` defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the grid's `width` and/or `height` to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if `width` is `null` and rows if height is `null`).

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
<igx-grid #grid1 [data]="remoteData | async" (onDataPreLoad)="dataLoading($event)" >
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.header">
    </igx-column>
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.grid.virtualizationState, (data) => {
        this.grid.totalItemCount = data["@odata.count"];
    });
}

public dataLoading(evt) {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }
    this.prevRequest = this.remoteService.getData(evt, () => {
        this.cdr.detectChanges();
    });
}
```

When requesting data, you need to utilize the `IForOfState` interface, which provides the `startIndex` and `chunkSize` properties.

***Note:*** The first `chunkSize` will always be 0 and should be determined by you based on the specific application scenario.

```typescript
public getData(data?: IForOfState, cb?: (any) => void): any {
    const dataState = data;
    return this.http
        .get(this.buildUrl(dataState))
        .subscribe((d: any) => {
            this._remoteData.next(d.value);
            if (cb) {
                cb(d);
            }
        });
}

private buildUrl(dataState: IForOfState): string {
    let qS: string = "?";
    let requiredChunkSize: number;
    if (dataState) {
        const skip = dataState.startIndex;

        requiredChunkSize = dataState.chunkSize === 0 ?
            // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
            10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```

### Virtualization Limitations

*   Variable row heights are not supported. All rows must have the same height.
*   Specified dimensions for rows/columns should match the actual rendered elements. For instance, if there is a template or class defined for the grid cells, which expand the row heights and they no longer match the specified `rowHeight` value the vertical virtualization will no longer work as expected. The virtual items count will no longer reflect the actual elements in the DOM. The same applies to columns and their widths.
*   Browsers currently have height limitation for DOM elements. Because of that the total height of the rows shouldn't exceed the height limitation of the browsers. Otherwise there may be unexpected changes in behavior of `igxGrid`. For example Internet Explorer 11 has height limitation of 1 533 916 pixels, which for rows with height 50px means no more than 30 678 rows.
*   When the grid has responsive width and/or height and responds to size changes of the browser's window or other elements sizes, the scroll position resets to 0. A more natural solution to the changing scrollbar position and size is planned for future releases.


### FAQ

#### Why having dimensions in the grid is neccessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the grid is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take affect.

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Sorting](grid_sorting.html)
* [Summaries](grid_summaries.html)
* [Column Pinning](grid_column_pinning.html)
* [Column Resizing](grid_column_resizing.html)
* [Selection](grid_selection.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
