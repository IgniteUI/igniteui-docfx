---
title: How to use igxBaseTransaction, igxTransaction, igxHierarchical transaction services
_description: 
_keywords: Ignite UI for Angular, transaction
---

## How to use igxBaseTransaction, igxTransaction, igxHierarchicalTransaction services

### Using igxBaseTransaction

Our grid module provides a very basic implementation of the Transaction service (`igxBaseTransaction`) with just pending session functionality allowing for Row Editing feature. By using `startPending()` and `endPending()` Row editing can combine multiple per-cell operations into a single change. This means editing multiple cells of a single record creates a single transaction and you can handle just the row edit event.

With the accumulated state being a partial object, we can also use the service to check which cell has been edited and build UI around that.

A detailed example of how you may use `igxBaseTransaction` to enable Row Editing is provided in the following topics:
* [Grid Row Editing](grid/row_editing.md)
* [Tree Grid Row Editing](treegrid/row_editing.md)
* [Hierarchical Grid Row Editing](hierarchicalgrid/row_editing.md)

### General information on igxTransactionService and igxHierarchicalTransactionService

`igxTransactionService` and `igxHierarchicalTransactionService` are injectable middlewares, that implement the `TransactionService` interface. A component may use those to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

`igxTransactionService` and `igxHierarchicalTransactionService` work with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode, while row transaction is created, when the row exits edit mode. But in both cases the state of the grid edits consist of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.

### Using igxTransactionService

`igxTransactionService` extends `IgxBaseTransactionService`.

You need to define the `igxTransactionService` as a provider for the igxGrid or for some of its parent components in order to have Batch Editing feature enabled.

You may find a detailed example of how igxGrid with Batch Editing is implemented in the following topic:
* [Grid Batch Editing](grid/batch_editing.md)

### Using igxHierarchicalTransactionService

`igxHierarchicalTransactionService` extends `IgxTransactionService`.

If you want to achieve Batch Editing using the igxTreegrid or the igxHierarchicalGrid, you need to define the `IgxHierarchicalTransactionService` as a provider for the grid or for some of its parent components.

You may find a detailed examples of how igxTreeGrid and igxHierarchicalGrid with Batch Editing are implemented in the following topics:
* [Tree Grid Batch Editing](treegrid/batch_editing.md)
* [Hierarchical Grid Batch Editing](hierarchicalgrid/batch_editing.md)
