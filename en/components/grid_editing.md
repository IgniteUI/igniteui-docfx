---
title: Grid Editing - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing
---

### Grid Editing

The Grid component in ignite UI for Angular provides you a default cell templates for editable columns which are based on the data type of the column. In addition you can define your own custom templates for editable columns and override default behaviour for commiting and discarding changes in the cell value .

#### Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

In order to be able to enter edit mode for specific cell, you should first set that the column is **editable**. If you want to use the data type specific *edit templates* you should also specify the column **dataType** property. So let's now see what are default templates for each type:

 - For `string` data type, default template use **igxInput**
 - For `number` data type, default template use **igxInput type="number"**, so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded.
 - For `date` data type, default template use **igx-datePicker**
 - For `boolean` data type, default template use **igx-checkbox**

You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:
 - on double click;
 - on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
 - on key press `enter`;
 - on key press `F2`;

You can exit edit mode **without commiting** the changes in one of the following ways:
 - on key press `Escape`;
 - when you perform *sorting*, *filtering* and *searching* operations;

You can exit edit mode and **commit** the changes in one of the following ways:
 - on key press `Enter`;
 - on key press `F2`;
 - on key press `Tab`;
 - on single click to another cell - when you click to another cell in the grid your changes in cell value will be submited.

> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally, click outside the grid, resize or pin column or go to another page.

You can also modify the cell value and through IgxGrid API:

```typescript
...
    public updateCell() {
        this.grid1.updateCell(70, 0, 'ReorderLevel');
    }
...
```
Please notice that if the cell you want to update is outside grid's display container the new value will not be submitted.

Another way to update cell is directly through update method of IgxCellComponent:

```typescript
...
    public updateCell() {
        const cell = this.grid1.getCellByColumn(0, 'ReorderLevel');
        cell.update(70);
    }
...
```
If you want to define a custom template which will be applied when the cell is edit mode, you can see the documentation for [Grid Columns configuration](grid.md#columns-configuration).

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Searching](grid_search.md)