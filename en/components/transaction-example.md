---
title: How to use the Transaction service
_description: 
_keywords: Ignite UI for Angular, transaction
---

## How to use the Transaction service

You may get advantage of the Transaction Service when using any control that needs to preserve state and to commit many transactions at once. 

When working with the Ignite Ui for Angular grid controls, you may use the `igxTransactionService` and `igxHierarchicalTransactionService` that are integrated with the grids and provide batch editing out of the box. However, if you need to use transactions with any other Ignite UI for Angular control, you may use the `igxTransactionService` and implement similar behavior. 

You may use the `igxTransactionService` with any custom control that you create and in this topic we will use `igxList` component to demonstrate how to enable transactions.

In our html template, below the list control, we add a form with four buttons:

`
<form #buttonsForm class="options">
    <button #add igxButton (click)="onAdd($event)" class="add">Add New Item</button>
    <button #edit igxButton (click)="onEdit($event)" class="edit">Edit Second item</button>
    <button #delete igxButton (click)="onDelete($event)">Delete First item</button>
    <button #clear igxButton (click)="onClear($event)" class="clear">Clear Transactions</button>
</form>
`

The `add` button adds a new item at the top of the list. The `edit` button changes the value of the second item. The `delete` button removes the first item and the `clear` button clears the transaction log.

In our `ts` file, we should import `igxTransactionService` from the `igniteui-angular` library:

`import { IgxButtonDirective, IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";`

Our class constructor should look like this:

`constructor(private _transactions: IgxTransactionService<Transaction, State>) { ... }`

When we click the `add` button, we add a new transaction to the Transaction log, providing the `id`, the `TransactionType` and the `newValue` properties: 

`this._transactions.add({ id: 2, type: TransactionType.ADD, newValue: person });`

At this moment, our transaction is added to the transaction log, we see the new item is added to the list that we are manipulating but the change is still not committed. We may do additional changes to the list and commit them at once when we are ready.

To update an existin item, we will add a transaction of type `UPDATE` to the Transaction log. In our example. we change the second item of the list:

`this._transactions.add({ id: 3, type: TransactionType.UPDATE, newValue: { age: newAge } }, this.people[1]);`

By clicking the `delete` button we will remove the first item in the list - a transaction of type `DELETE` will be added to the Transaction log.

`this._transactions.add(
        { id: 1, type: TransactionType.DELETE, newValue: { name: this.name, age: this.age } }, this.people[0]);
    }`

Once we are done with all our changes, we may commit them all at once using the `commit` method of the `igxTransactionService`. It applies all transactions over the provided data:

`this._transactions.commit(this.people);`

At any point of our interaction with the list, we may clear the Transaction log, using the `clear` method.

`this._transactions.clear();`
