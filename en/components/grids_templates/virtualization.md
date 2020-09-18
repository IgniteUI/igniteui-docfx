@@if (igxName === 'IgxGrid') {
---
title: Virtualization Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Angular Virtualization Directive, Angular Data Table Virtualization, Virtualization, Angular Data Table Performance, Data Table Performance
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Virtualization Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the tree grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Angular Virtualization Directive, Angular Tree Table Virtualization, Virtualization, Angular Tree Table Performance, Tree Table Performance
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Virtualization Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the hierarchical grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Angular Virtualization Directive, Angular Hierarchical Table Virtualization, Virtualization, Angular Hierarchical Table Performance, Hierarchical Table Performance
---
}
# @@igComponent Virtualization and Performance

In Ignite UI for Angular, the [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) control now utilizes the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) directive and virtualizes its content both vertically and horizontally.

@@if (igxName === 'IgxGrid') {
#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
#### Demo
<div class="sample-container loading" style="height:620px">
    <iframe id="hierarchical-grid-lod-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

### Enabling Virtualization

By utilizing the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) directive the @@igxName now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html)'s [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) and [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the @@igComponent's [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) and/or [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) is `null` and rows if [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) is `null`).

The size of the data chunks is determined by:

*   The row height for the vertical (row) virtualization. This is determined by the [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) option and is 50(px) by default.
*   The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the @@igComponent's [`columnWidth`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnwidth) option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the @@igComponent's container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

@@if (igxName === 'IgxGrid') {
### Remote Virtualization

The @@igComponent supports remote virtualization, which is demonstrated in the [`@@igComponent Remote Data Operations`](remote_data_operations.md) topic.
}

### Virtualization Limitations

*   On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the @@igComponent’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

### FAQ

#### Why having dimensions in the @@igComponent is necessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the @@igComponent is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.

<div class="divider--half"></div>

### API References
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IForOfState]({environment:angularApiUrl}/interfaces/iforofstate.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
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