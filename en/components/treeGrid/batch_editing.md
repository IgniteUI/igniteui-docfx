---
title: Grid Batch Editing - Native Angular | Ignite UI for Angular
_description: TransactionService is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control,Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
---

## Tree Grid Batch Editing

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

The [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) works with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode, while row transaction is created, when the row exits edit mode. But in both cases the state of the grid edits consist of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.



### Demo

The following sample demonstrates a scenario, where the grid has the Transaction as provider and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.



<div class="divider--half"></div>

> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows and their last states.

## Usage




> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) property will modify grid to create transactions on cell change and will not expose row editing overlay in the UI.

## API References

* [`transactions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#transactions)

* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)



### Additional Resources

* [IgxTreeGridComponent Overview](grid.md)
* [IgxTreeGridComponent Editing](editing.md)
* [IgxTreeGridComponent Row Editing](row_editing.md)