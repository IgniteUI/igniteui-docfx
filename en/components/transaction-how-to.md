---
title: igxBaseTransaction, igxTransaction and igxHierarchical transaction explained
_description: 
_keywords: Ignite UI for Angular, transaction
---

## igxBaseTransaction, igxTransaction and igxHierarchical transaction explained

### Transaction, State, Transaction Log

The Transaction is the main building block of the Transaction service. The Transaction is actually every operation that you execute on the data. The `Transaction` interface defines three properties: `id`, `newValue` and `type`.

The `id` of the Transaction should be unique and defines the record that this transaction is affecting. The `type` may be any of the three transaction types: `ADD`, `DELETE` and `UPDATE`, depending what operation you execute. The `newValue` contains the value of the new record in case you are adding an `ADD` transaction. If you are editing an existing record, the `newValue` would contain the changes only. If you are deleting a record, the `newValue` will contain the value of the deleted record. 

You may see an example of how adding each type of transaction looks like in the [How to use the Transaction service](transaction-example.md) topic.

Every time you add a Transaction, it is added to the transaction log and undo stack. All the changes in the transaction log are then accumulated per record. From that point, the service maintains an aggregated `State`. The `State` consists of unique records and every record may be of one of the supported transaction types, mentioned above.

While adding transactions you may turn on pending transactions by calling `startPending`. All subsequent transactions will be accumulated in single transaction until you call `endPending`. If you pass `true` to `endPending` all accumulated transactions will be added as a single transaction in the transaction log and in the undo stack.

### Using igxBaseTransaction

Our grid module provides a very basic implementation of the Transaction service (`igxBaseTransactionService`) with just pending session functionality allowing for Row Editing feature. By using `startPending()` and `endPending()` Row editing can combine multiple per-cell operations into a single change. This means editing multiple cells of a single record creates a single transaction and you can handle just the row edit event.

With the accumulated state being a partial object, we can also use the service to check which cell has been edited and build UI around that.

The `igxBaseTransactionService` has no undo stack so it does not provide undo/redo functionality.

A detailed example of how you may use `igxBaseTransaction` to enable Row Editing is provided in the following topics:
* [Grid Row Editing](grid/row_editing.md)
* [Tree Grid Row Editing](treegrid/row_editing.md)
* [Hierarchical Grid Row Editing](hierarchicalgrid/row_editing.md)

### General information on igxTransactionService and igxHierarchicalTransactionService

`igxTransactionService` and `igxHierarchicalTransactionService` are injectable middlewares, that implement the `TransactionService` interface. A component may use those to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all changes or a single change to the data.

`igxTransactionService` and `igxHierarchicalTransactionService` work with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode. When row editing starts the grid set transaction service in pending state by calling `startPendting`. Each edited cell is added to the pending transaction log and is not added to the main transaction log. When the row exits edit mode all the changes are added to the main transaction log and to the undo log as a single transaction.

In both cases (cell editing and row editing) the state of the grid edits consist of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once or per id. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.

### Using igxTransactionService

`igxTransactionService` extends `IgxBaseTransactionService`.

You need to define the `igxTransactionService` as a provider for the igxGrid or for some of its parent components in order to have Batch Editing feature enabled.

The `igxTransactionService` provides an undo stack so you may get advantage of the undo/redo functionality. The Undo stack is actually an array that contains array of transactions. When using the `igxTransactionService`, you may check the `canUndo` accessor in order to understand if there are any transactions in the Undo stack. If it does - you may use the `undo` method to remove the last transaction and `redo` to apply the last undone transaction.

You may find a detailed example of how igxGrid with Batch Editing is implemented in the following topic:
* [Grid Batch Editing](grid/batch_editing.md)

### Using igxHierarchicalTransactionService

`igxHierarchicalTransactionService` extends `IgxTransactionService`.

The `igxHierarchicalTransactionService` is designed to handle the relations between parents and children in `igxHierarchicalGrid` and `igxTreeGrid` so that a new record will be added to the place you expect when adding an `ADD` transaction. And when you delete a parent record, its' children will be promoted to the higher level of hierarchy, or will be deleted with their parent, based on the data type and the `cascadeOnDelete` property of the grid.

If you want to achieve Batch Editing using the igxTreegrid or the igxHierarchicalGrid, you need to define the `IgxHierarchicalTransactionService` as a provider for the grid or for some of its parent components.

In your application, you may want to handle the scenario where the user tries to add a child record to a parent record that is already deleted and is waiting for the transaction to be committed. The Transaction Service will not allow adding a record to a parent that is to be deleted and an error message will be shown in the Console. However, you may check if a parent is to be deleted and implement your own alert to the user using the following code:
```
    const state = this.transactions.getState(parentRecordID);
    if (state && state.type === TransactionType.DELETE) {
        // Implement your logic here
    }
```

You may find a detailed examples of how igxTreeGrid and igxHierarchicalGrid with Batch Editing are implemented in the following topics:
* [Tree Grid Batch Editing](treegrid/batch_editing.md)
* [Hierarchical Grid Batch Editing](hierarchicalgrid/batch_editing.md)
