---
title: Grid Virtualization and Performance
_description: The Ignite UI for Angular Data Grid control now virtualizes its columns and rows, visualizing only the visible chunks of the data in the DOM, as a result allowing smooth and seamless scrolling through large sets of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Virtualization, Performance
---

## Grid Virtualization and Performance

<p class="highlight">
    Many modern applications require displaying big data in a way that is performant and seamless to the end user.
    For this reason the Angular Data Grid control now utilizes our `igxForOf` directive and virtualizes its content both vertically (the data records) and horizontally (the columns), allowing the user to scroll through a large set of data smoothly with optimal performance.
    By utilizing the `igxForOf` directive the DataGrid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically.
</p>

### Grid Virtualization Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Enabling Virtualization

Virtualization requires the following settings to be applied in order to take affect.

The size of the related grid dimension should be set.

*   height for vertical (row) virtualization. Can be set in pixels ("500px") or percentage("50%").

*   width for horizontal (column) virtualization. Can be set in pixels ("500px") or percentage("50%").
        
If the related dimension is not set then virtualization will be disabled.

The size of the data chunks are determined by the size of the related virtualized elements.

*   The row height for the vertical (row) virtualization. This is determined by the rowHeight option and is 50 by default.
*   The individual column widths for the horizontal (column) virtualization. They can be determiend by either setting explicit width for each column component or setting the grid's columnWidth option, which will be applied to all columns that don't have explicit width set.

If the related elements don't have sizes this may lead to unexpected results when displaying the grid data.

### Virtualization Limitations

*   Variable row heights are not supported. All rows must have the same height.
*   For column virtualization all columns should have a width defined, either explicitly set via the column component or via the grid columnWidth option.
*   Specified dimensions for rows/columns should match the actual rendered elements. For instance, if there is a template or class defined for the grid cells, which expand the row heights and they no longer match the specified rowHeight value the vertical virtualization will no longer work as expected. The virtual items count will no longer reflect the actual elements in the DOM. Same applies to columns and their widths.


### FAQ

#### Why having dimensions in the grid is neccessary for virtualization to work?

<br/>
If you don't know the sizes of container and the items before actually rendering them you cannot determine how big the scrollbar should be or which items would be in the view when you scroll to a random location in the grid. Any assumptions on what the actual dimensions might be would lead to unnatural behavior of the scrollbar and ultimately bad experience for the end-user. Due to this we enforce setting the dimensions in order for the virtualization to take affect.

#### What results would I get with different combinations of set width/heights along with widths for columns and height for rows?
<br/>
Please refer to the below table for details on how each combination of configurations would affect the end result.
<br/>

|Set Grid width|Set Grid height |Set rowHeight |Set columnWidth or all columns have explicitly set width| Result
|--- |--- | --- |  --- | --- |
|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|Grid with both horizontal and vertical virtualization
|:heavy_check_mark:|:x:|N/A|:heavy_check_mark:|Grid with just horizontal virtualization
|:x:|:heavy_check_mark:|:heavy_check_mark:|N/A|Grid with just vertical virtualization
|:x:|:x:|N/A|N/A|Grid with no virtualization
|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:x:|Invalid config
|:heavy_check_mark:|:heavy_check_mark:|:x:|:heavy_check_mark:|Invalid config
|:heavy_check_mark:|:heavy_check_mark:|:x:|:x:|Invalid config