---
title: How to use the Transaction service
_description: 
_keywords: Ignite UI for Angular, transaction
---

## How to use the Transaction service

You may get advantage of the Transaction Service when using any component that needs to preserve the state of its data source and to commit many transactions at once. 

When working with the Ignite Ui for Angular grid components, you may use the `igxTransactionService` and `igxHierarchicalTransactionService` that are integrated with the grids and provide batch editing out of the box. However, if you need to use transactions with any other Ignite UI for Angular or custom component, you may again use the `igxTransactionService` and implement similar behavior. 

In this topic we will use `igxList` component to demonstrate how to enable transactions.

In our html template, we define an igxList component:

```
<igx-list>
    <igx-list-item [isHeader]="true">Wishlist</igx-list-item>
    <ng-template ngFor [ngForOf]="this.wishlist" let-item>
        <igx-list-item igxRipple igxRippleTarget=".igx-list__item-content">
            <p igxListLineTitle>{{item.name}}</p>
            <p igxListLineSubTitle>Costs: {{item.price}}</p>
        </igx-list-item>
    </ng-template>
</igx-list>
```

Below the list component, we add a form with five buttons:

```
 <button #add igxButton (click)="onAdd($event)" [disabled]="addDisabled" class="add">Add
    New</button>
<button #edit igxButton (click)="onEdit($event)" class="edit"
    [disabled]="editDisabled || wishlist.length < 2">Edit
    Second</button>
<button #delete igxButton (click)="onDelete($event)"
    [disabled]="deleteDisabled || wishlist.length === 0">Delete
    First</button>
<button igxButton (click)="onCommit($event)">Commit Transactions</button>
<button #clear igxButton (click)="onClear($event)" class="clear">Clear Transactions</button>
```

The `add` button adds a new item. The `edit` button changes the value of the second item. The `delete` button removes the first item and the `clear` button clears the transaction log.

We will show the pending transactions inside a chips area:

```
<igx-chips-area>
    <ng-template ngFor let-transaction [ngForOf]="this.transactions.getTransactionLog()">
        <igx-chip>
            <div class="chip-content">
                <igx-icon>{{setIcon(transaction)}}</igx-icon>
                <span class="chip-text">{{transaction.newValue.name}} -
                    {{transaction.newValue.price}}</span>
            </div>
        </igx-chip>
    </ng-template>
</igx-chips-area>
```

In our `ts` file, we should import `igxTransactionService` from the `igniteui-angular` library:

`import { IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";`

Our class constructor should look like this:

`constructor(private _transactions: IgxTransactionService<Transaction, State>) { ... }`

When we click the `add` button, we add a new transaction to the Transaction log, providing the `id`, the `TransactionType` and the `newValue` properties: 

```
const item: IItem = { id: 4, name: "Yacht", price: "A lot!" };
this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });
```

At this moment, our transaction is added to the transaction log, we see the new chip is added to the chips area but the change is still not committed. The data source is not changed yet. We may do additional changes to the list and commit them at once when we are ready.

To update an existing item, we will add a transaction of type `UPDATE` to the Transaction log. In our example, we change only the price of the second item in the list:

```
const newPrice = "54$";
this.transactions.add({
    id: 2, type: TransactionType.UPDATE, newValue: { name: "Apple", price: newPrice }
}, this.wishlist[1]);
```

By clicking the `delete` button we will remove the first item in the list - a transaction of type `DELETE` will be added to the Transaction log.

```
 this.transactions.add({
    id: 1, type: TransactionType.DELETE, newValue: { name: this.name, price: this.price }
}, this.wishlist[0]);
```

Once we are done with all our changes, we may commit them all at once using the `commit` method of the `igxTransactionService`. It applies all transactions over the provided data:

`this.transactions.commit(this.wishlist);`

At any point of our interaction with the list, we may clear the Transaction log, using the `clear` method.

`this._transactions.clear();`

For a better user experience, we will provide visual clues of what item is added, edited or deleted in the list. We will color the newly added record green, the record that is to be removed in red and th updated record in blue:

```
public applyColor(item?: IItem): string {
    const states = this.transactions.getAggregatedChanges(true);
    for (const transaction of states) {
        if (item && transaction.newValue.id === item.id) {
            return this.getColor(transaction);
        }
    }

    return null;
}
```

The `getColor` function looks like this:

```
public getColor(transaction: Transaction): string {
    switch (transaction.type) {
        case TransactionType.ADD:
            return "green";
        case TransactionType.DELETE:
            return "red";
        case TransactionType.UPDATE:
            return "blue";
        default:
            return null;
    }
}
```