---
title: React Data Grid | Table Controls | Ignite UI for Angular | Cell Activation | Infragistics
_description: The Ignite UI for Angular Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: react table, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid', 'GridActivationMode']
---

## Cell Activation

The Ignite UI for Angular Data Table / Data Grid supports a cell activation feature that will enable keyboard navigation through the cells of the grid. This is activated by setting the [`activationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#activationmode) property of the grid to [`Cell`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridactivationmode.html#cell).

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Keyboard Navigation

After setting the [`activationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#activationmode) property of the grid to [`Cell`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/gridactivationmode.html#cell), this will enable a range of keyboard navigation options in the grid. Below is a description of each of the key presses / combinations and the effect they will have relative to the currently activated cell:

-   <b>Arrow Key Up</b>: Navigate one cell up.
-   <b>Arrow Key Down</b>: Navigate one cell down.
-   <b>Arrow Key Left</b>: Navigate one cell to the left on the current row only.
-   <b>Arrow Key Right</b>: Navigate one cell to the right on the current row only.
-   <b>Page Up</b>: Scroll the grid one viewport page up.
-   <b>Page Down</b>: Scroll the grid one viewport page down.
-   <b>Tab</b>: Move the active cell to the next cell to the right, or the left-most cell of the next row if the last cell of that row is reached.
-   <b>Shift + Tab</b>: Move the active cell to the next cell to the left, or the right-most cell of the previous row if the first cell of that row is reached.
-   <b>Ctrl + Arrow Key Up</b>: Move to the top cell in the column.
-   <b>Ctrl + Arrow Key Down</b>: Move to the bottom cell in the column.
-   <b>Ctrl + Arrow Key Left</b>: Move to the left-most cell in the row.
-   <b>Ctrl + Arrow Key Right</b>: Move to the right-most cell in the row.
-   <b>Ctrl + Home</b>: Move to the top-left cell in the grid.
-   <b>Ctrl + End</b>: Move to the bottom-right cell in the grid.

### Code Snippet

The following demonstrates how to implement cell activation in the grid:
