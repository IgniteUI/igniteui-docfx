---
title: Transaction Service
_description: 
_keywords: Ignite UI for Angular, transaction
---


## Transaction Service

The Transaction Service is an injectable middleware (through Angular's DI) that a component may use to accumulate changes without immediately affecting the underlying data.
    <img src="https://cdn-images-1.medium.com/max/800/1*O-6DidcFW_XCSqgKRfXf_Q.png"
        style="display:flex;max-height:400px;margin:auto auto 20px auto;" />

The Transaction Service allows adding a transaction, committing or clearing all changes. As it keeps a detailed log, it can also execute undo and redo operations.

Every time you execute an operation (transaction), it is added to the transaction log and undo stack. All the changes in the transaction log are then accumulated per record. From that point, the service maintains an aggregated state that consists only of add/update/delete operations for unique records.

We have built three classes on top of the Transaction Service that provide the user with the ability to commit all the changes he has made, while working with the Ignite UI for Angular controls, at once. Those classes are `igxBaseTransactionService`, `igxTransactionService` and `igxHierarchicalTransactionService`.

The `igxTransactionService` and `igxHierarchicalTransactionService` are fully integrated in our igxGrid, igxHierarchicalGrid and igxTreeGrid controls. You may find detailed examples of using those controls with transactions enabled in the following topics:
* [igxGrid Batch Editing and Transactions](grid/batch_editing.md)
* [igxHierarchicalGrid Batch Editing and Transactions](hierarchicalgrid/batch_editing.md)
* [igxTreeGrid Batch Editing and Transactions](treegrid/batch_editing.md)

A more detailed overview of the opportunities that the Transaction Service provides may be found in our ["Building a transaction service for managing large scale editing experiences" blog](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e)

## Related Topics

* [How to use igxBaseTransaction, igxTransaction, igxHierarchical transaction](transaction-how-to.md)
* [Implementing Transaction service (with igxList)](transaction-implement.md)
