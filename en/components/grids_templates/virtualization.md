@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Virtualization and Performance - Ignite UI for Angular
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free! 
_keywords: angular data grid, grid performance, data table virtualization, ignite ui for angular
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Grid Virtualization and Performance - Ignite UI for Angular
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free! 
_keywords: angular data grid, grid performance, data table virtualization, ignite ui for angular
_canonicalLink: grid/virtualization
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Grid Virtualization and Performance - Ignite UI for Angular
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!
_keywords: angular data grid, grid performance, data table virtualization, ignite ui for angular
_canonicalLink: grid/virtualization
---
}
# Angular @@igComponent Virtualization and Performance

In Ignite UI for Angular, the [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) control now utilizes the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) directive and virtualizes its content both vertically and horizontally.

@@if (igxName === 'IgxGrid') {
## Angular @@igComponent Virtualization and Performance Example


<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-2" alt="Angular @@igComponent Virtualization and Performance Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
### Demo

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod" alt="Angular @@igComponent Virtualization and Performance Example">
</code-view>

<div class="divider--half"></div>
}

## Enabling Virtualization

By utilizing the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) directive the @@igxName now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html)'s [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) and [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the @@igComponent's [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) and/or [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) is `null` and rows if [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) is `null`).

The size of the data chunks is determined by:

*   The row height for the vertical (row) virtualization. This is determined by the [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) option and is 50(px) by default.
*   The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the @@igComponent's [`columnWidth`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnwidth) option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the @@igComponent's container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

@@if (igxName === 'IgxGrid') {
## Remote Virtualization

The @@igComponent supports remote virtualization, which is demonstrated in the [`@@igComponent Remote Data Operations`](remote-data-operations.md) topic.
}

## Virtualization Limitations

*   On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the @@igComponent’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

## FAQ

### Why having dimensions in the @@igComponent is necessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the @@igComponent is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.

<div class="divider--half"></div>

## API References
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IForOfState]({environment:angularApiUrl}/interfaces/iforofstate.html)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
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