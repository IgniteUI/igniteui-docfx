---
title: Batch Editing | Transaction Service | Ignite UI for Angular | Infragistics
_description: Learn about the hierarchy of the Transaction Service class, that allows implementing batch editing when executing Angular CRUD operations on your components.
_keywords: batch editing, igniteui for angular, infragistics
---

# Transaction Service class hierarchy

## Transaction, State, Transaction Log

The Transaction is the main building block of the [Transaction service]({environment:angularApiUrl}/classes/igxtransactionservice.html). The Transaction is actually every operation that you execute on the data. The [`Transaction`]({environment:angularApiUrl}/interfaces/transaction.html) interface defines three properties: [`id`]({environment:angularApiUrl}/interfaces/transaction.html#id), [`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) and [`type`]({environment:angularApiUrl}/interfaces/transaction.html#type).

The [`id`]({environment:angularApiUrl}/interfaces/transaction.html#id) of the Transaction should be unique per data record and defines the record that this transaction is affecting. The [`type`]({environment:angularApiUrl}/enums/transactiontype.html#type) may be any of the three transaction types: `ADD`, `DELETE` and `UPDATE`, depending what operation you execute. The [`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) contains the value of the new record in case you are adding an `ADD` transaction. If you are updating an existing record, the [`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) would contain the changes only. You may have several transactions of `UPDATE` type with same id. If you are deleting a record, the [`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) will contain the value of the deleted record. 

You can see an example of how adding each type of transaction looks like in the [How to use the Transaction service](transaction-how-to-use.md) topic.

Every time you add a Transaction, it is added to the transaction log and undo stack. All the changes in the transaction log are then accumulated per record. From that point, the service maintains an aggregated [`State`]({environment:angularApiUrl}/interfaces/state.html). The [`State`]({environment:angularApiUrl}/interfaces/state.html) consists of unique records and every record may be of one of the supported transaction types, mentioned above.

While adding transactions you may turn on pending transactions by calling [`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending). All subsequent transactions will be accumulated in single transaction until you call [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending). If you pass `true` to [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) all accumulated transactions will be added as a single transaction in the transaction log and in the undo stack.

## Using igxBaseTransaction

Our grid module provides a very basic implementation of the Transaction service ([`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)) with just pending session functionality allowing for Row Editing feature. By using [`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) and [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) Row editing can combine multiple per-cell operations into a single change. This means editing multiple cells of a single record creates a single transaction and you can handle just the row edit event.

With the accumulated state being a partial object, we can also use the service to check which cell has been edited and build UI around that.

The [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) has no undo stack so it does not provide undo/redo functionality.

A detailed example of how you may use [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) to enable Row Editing is provided in the following topics:
* [Grid Row Editing](grid/row-editing.md)
* [Tree Grid Row Editing](treegrid/row-editing.md)
* [Hierarchical Grid Row Editing](hierarchicalgrid/row-editing.md)

## General information on igxTransactionService and igxHierarchicalTransactionService

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) are injectable middlewares, that implement the [`Transaction Service`]({environment:angularApiUrl}/interfaces/transactionservice.html) interface. A component may use those to accumulate changes without affecting the underlying data. The provider exposes API to *access*, *manipulate* (undo and redo) and *discard or commit* one or all changes to the data.

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) work with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode. When row editing starts the grid sets its transaction service in pending state by calling [`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending). Each edited cell is added to the pending transaction log and is not added to the main transaction log. When the row exits edit mode all the changes are added to the main transaction log and to the undo log as a single transaction.

In both cases (cell editing and row editing) the state of the grid edits consists of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once or per id. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.

## Using igxTransactionService

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) extends [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html).

You need to define the [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) as a provider for the igxGrid or for some of its parent components in order to have Batch Editing feature enabled.

The [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) provides an undo stack so you may get advantage of the undo/redo functionality. The Undo stack is actually an array that contains arrays of transactions. When using the [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html), you may check the [`canUndo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#canundo) accessor in order to understand if there are any transactions in the Undo stack. If there are - you may use the [`undo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#undo) method to remove the last transaction and [`redo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#redo) to apply the last undone transaction.

You may find a detailed example of how igxGrid with Batch Editing is implemented in the following topic:
* [Grid Batch Editing](grid/batch-editing.md)

## Using igxHierarchicalTransactionService

[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) extends [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html).

The [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) is designed to handle the relations between parents and children in [`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) and [`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) so that a new record will be added to the place you expect when adding an `ADD` transaction. And when you delete a parent record, its' children will be promoted to the higher level of hierarchy, or will be deleted with their parent, based on the data type and the [`cascadeOnDelete`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#cascadeondelete) property of the grid.

If you want to achieve Batch Editing using the [`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) or the [`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html), you need to define the [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) as a provider for the grid or for some of its parent components.

In your application, you may want to handle the scenario where the user tries to add a child record to a parent record that is already deleted and is waiting for the transaction to be committed. The Transaction Service will not allow adding a record to a parent that is to be deleted and an error message will be shown in the Console. However, you may check if a parent is to be deleted and implement your own alert to the user using the following code:
```typescript
    const state = this.transactions.getState(parentRecordID);
    if (state && state.type === TransactionType.DELETE) {
        // Implement your logic here
    }
```

You may find a detailed examples of how [`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) and [`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) with Batch Editing are implemented in the following topics:
* [Tree Grid Batch Editing](treegrid/batch-editing.md)
* [Hierarchical Grid Batch Editing](hierarchicalgrid/batch-editing.md)

## Additional Resources
<div class="divider--half"></div>

* [Transaction Service API]({environment:angularApiUrl}/interfaces/transactionservice.html)
* [Transaction Service](transaction.md)
* [How to use the Transaction service](transaction-how-to-use.md)
* [Grid Batch Editing](grid/batch-editing.md)
* [Tree Grid Batch Editing](treegrid/batch-editing.md)
* [Hierarchical Grid Batch Editing](hierarchicalgrid/batch-editing.md)
