---
title: React Data Grid | Table Controls | Ignite UI for Angular | Row Pining | Infragistics
_description: Start to use the Pinning feature of the The Ignite UI for Angular Data Table / Data Grid in order to lock column or change column order with rich and easy to use API
_keywords: react table, row pinning, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid']
---

## Row Pinning

 The Ignite UI for Angular Data Table / Data Grid allows Row Pinning by either using keys or the underlying data source items. When a row is pinned, it will be duplicated at the top of the grid and remain fixed there with light gray background and its actual row will be rendered with low opacity.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

You can pin rows in the Angular data grid by adding the target row’s underlying data item to the pinnedItems collection of the Angular grid.

### Code Snippet
