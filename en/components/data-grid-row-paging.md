---
title: React Data Grid | Table Controls | Ignite UI for Angular | Paging | Infragistics
_description: Configure react pagination and create custom pages in the react table by Ignite UI for Angular, get data for the requested pages with variety of react events
_keywords: react table, Ignite UI for Angular, paging, infragistics
mentionedTypes: ['Grid']
---

## Row Paging

Paging is not currently implemented within the Ignite UI for Angular Data Table / Data Grid itself however by switching the data source dynamically you can achieve similar results.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="ldata-grid-row-paging-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-paging' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Overview

For the above demo, since paging is not built into the Ignite UI for Angular Data Grid, we created a custom Pager component which was designed to take in an array of data and output portions of that data as a page.  This paged data can then be provided to the Ignite UI for Angular Data Grid which will automatically display that new data.

> [!NOTE]
>
> The source code for the Pager component is available in the Ignite UI for Angular download.

In order to support things like sorting, grouping and filtering the Pager component keeps its own version of the data source.  When a sort, group or filter is added to the Ignite UI for Angular Data Grid the internal version of the data source inside the Pager is updated with the matching sort, group or filter.  This data source then mutates its view of the data based on these and provides updated data to reflect this.

### Code Snippet

Here is how the above demo uses this Pager component:

The <b>pageChanged</b> event on the Pager component will notify us when it changes the page and will provide the data for the new page.  The sample takes this data and passes it to the grid for display.
