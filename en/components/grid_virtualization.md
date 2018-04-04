---
title: Grid Virtualization and Performance
_description: The Ignite UI for Angular Data Grid control now virtualizes its columns and rows, visualizing only the visible chunks of the data in the DOM, as a result allowing smooth and seamless scrolling through large sets of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Virtualization, Performance
---

## Grid Virtualization and Performance

<p class="highlight">Many modern applications require displaying big data in a way that is performant and seamless to the end user.
For this reason the `igxGrid` control now utilizes the `igxForOf` directive and virtualizes its content both vertically (the data records) and horizontally (the columns), allowing the user to scroll through a large set of data smoothly with optimal performance.
By utilizing the `igxForOf` directive the Data Grid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically.</p>
<div class="divider"></div>

### Grid Virtualization Demo

<div class="sample-container loading" style="height:850px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Enabling Virtualization

Virtualization is automatically enabled if the size of the related grid dimension is set.

*   height for vertical (row) virtualization. Can be set in pixels ("500px") or percentage("50%").

*   width for horizontal (column) virtualization. Can be set in pixels ("500px") or percentage("50%").

If the related dimension is not set then the respective row/column virtualization will be disabled.

The size of the data chunks are determined by:

*   The row height for the vertical (row) virtualization. This is determined by the `rowHeight` option and is 50(px) by default.
*   The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the grid's `columnWidth` option, which will be applied to all columns that don't have explicit width set.

Not specifying the required sizes will, in most cases, create a grid that is not virtualized. For example a grid with no height will render ***all*** rows at once and grow naturally based on their total size, while a grid that has set width but with columns without one is expected to render them in the available space without a scrollbar. The latter applies to grids with column widths in percentages (%) as well.

### Virtualization Limitations

*   Variable row heights are not supported. All rows must have the same height.
*   For column virtualization all columns should have width defined in pixels, either explicitly set via the column component or via the grid `columnWidth` option.
*   Specified dimensions for rows/columns should match the actual rendered elements. For instance, if there is a template or class defined for the grid cells, which expand the row heights and they no longer match the specified `rowHeight` value the vertical virtualization will no longer work as expected. The virtual items count will no longer reflect the actual elements in the DOM. The same applies to columns and their widths.


### FAQ

#### Why having dimensions in the grid is neccessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the grid is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take affect.

#### What results would I get with different combinations of set width/heights along with widths for columns and height for rows?

Please refer to the below table for details on how each combination of configurations would affect the end result.

| Set Grid width     | Set Grid height    | Set 'rowHeight'    | Set 'columnWidth' or all columns have explicitly set width | Result                                                |
|--------------------|--------------------|--------------------|------------------------------------------------------------|-------------------------------------------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:                                         | Grid with both horizontal and vertical virtualization |
| :heavy_check_mark: | :x:                | N/A                | :heavy_check_mark:                                         | Grid with just horizontal virtualization              |
| :x:                | :heavy_check_mark: | :heavy_check_mark: | N/A                                                        | Grid with just vertical virtualization                |
| :x:                | :x:                | N/A                | N/A                                                        | Grid with no virtualization                           |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                                                        | Grid with just vertical virtualization                |
| :heavy_check_mark: | :heavy_check_mark: | :x:                | :heavy_check_mark:                                         | Invalid config                                        |
| :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                                                        | Invalid config                                        |

<br/>
*   Setting the grid height but deliberately passing `null` for `rowHeight` is not supported
*   Setting some of the column widths but leaving others unset without specifying `columnWidth` for the grid will result in a grid without horizontal virtualization. The exact sizes of the columns will be determined by the flex rules applied for the container.