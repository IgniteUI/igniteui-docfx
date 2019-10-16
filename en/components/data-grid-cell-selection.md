---
title: React Data Grid | Table Controls | Ignite UI for Angular | Selection | Infragistics
_description: Get started with the React Sort feature of the Ignite UI for Angular ui grid and learn how to configure a mix of sortable columns with rich API and react events
_keywords: react table, sorting, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid', 'GridSelectionMode']
---

## Selection

The Ignite UI for Angular Data Table / Data Grid supports single or multiple row and cell selection.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Overview

Selection in the Angular data grid is enabled on a row and cell level and can be configured by using the [`selectionMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#selectionmode) option of the Angular grid. This property takes five different options, listed below:

-   [`None`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#none): Selection is not enabled.
-   [`SingleCell`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#singlecell): Selection of a single cell is enabled.
-   [`SingleRow`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#singlerow): Selection of a single row is enabled.
-   [`MultipleCell`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#multiplecell): Selection of multiple cells is enabled.
-   [`MultipleRow`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#multiplerow): Selection of multiple rows is enabled.
-   [`RangeCell`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#rangecell): Selection of a range of multiple cells by clicking and dragging is enabled.

When set to [`MultipleRow`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#multiplerow) or [`MultipleCell`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridselectionmode.html#multiplecell), it is not necessary to hold the CTRL key to select multiple rows or cells. Each row or cell will be selected or deselected on click of that particular row or cell.

### Code Snippet

The following demonstrates how to configure selection on the Angular data grid to set multiple row selection:
