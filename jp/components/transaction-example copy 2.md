---
title: How to use the Transaction service
_description: 
_keywords: Ignite UI for Angular, transaction
---

## How to use the Transaction service

You may get advantage of the [`Transaction Service`]({environment:angularApiUrl}/interfaces/transactionservice.html) when using any component that needs to preserve the state of its data source and to commit many transactions at once. 

When working with the Ignite Ui for Angular grid components, you may use the [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) that are integrated with the grids and provide batch editing out of the box. However, if you need to use transactions with any other Ignite UI for Angular or custom component, you may again use the [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) and implement similar behavior.

#### Demo

In this topic we will use [`igxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) component to demonstrate how to enable transactions. We will demonstrate how to add transactions, how to transform the data through a [pipe](https://angular.io/guide/pipes) and how to visually update the view in order to let the user see the changes that are about to be committed.

<div class="sample-container loading" style="height:650px">
    <iframe id="transaction-base-sample-iframe" src='{environment:demosBaseUrl}/services/transaction/transaction-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="transaction-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

In our html template, we define an [`igxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) component:

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

We will also add a list that will represent the current state of our data. It will show how the data looks before the pending transactions are committed:

```
<igx-list>
    <igx-list-item [isHeader]="true">Wishlist (with transactions)</igx-list-item>
    <ng-template ngFor [ngForOf]="this.wishlist | transactionBasePipe" let-item>
        <igx-list-item igxRipple igxRippleTarget=".igx-list__item-content">
            <p [ngStyle]="{'color': applyColor(item)}" igxListLineTitle>{{item.name}}</p>
            <p [ngStyle]="{'color': applyColor(item)}" igxListLineSubTitle>Costs: {{item.price}}</p>
        </igx-list-item>
    </ng-template>
</igx-list>
```

As you see, we use a pipe named `transactionBasePipe` to transform the transactions. Here is how the pipe looks like:

```
@Pipe({
    name: "transactionBasePipe",
    pure: false
})
export class TransactionBasePipe implements PipeTransform {
    constructor(public transactions: IgxTransactionService<Transaction, State>) { }

     public transform(data: IItem[]) {
        const _data = [...data];
        const states = this.transactions.getAggregatedChanges(false);
        for (const state of states) {
            switch (state.type) {
                case TransactionType.ADD:
                    _data.push(state.newValue);
                    break;
                // we do not directly operate on records, we just style them
                // it will be deleted once it's committed
                case TransactionType.DELETE:
                    break;
                case TransactionType.UPDATE:
                    const record = _data.find(r => r.id === state.id);
                    Object.assign(record, state.newValue);
                    break;
            }
        }

         return _data;
    }
}
```

We should not forget to add the pipe to `@NgModule` inside `services.module.ts` file.

In our `ts` file, we should import [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) from the `igniteui-angular` library:

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

Once we are done with all our changes, we may commit them all at once using the [`commit`]({environment:angularApiUrl}/classes/igxtransactionservice.html#commit) method of the [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html). It applies all transactions over the provided data:

`this.transactions.commit(this.wishlist);`

At any point of our interaction with the list, we may clear the Transaction log, using the [`clear`]({environment:angularApiUrl}/classes/igxtransactionservice.html#clear) method.

`this._transactions.clear();`

For a better user experience, we will provide visual clues of what item is added, edited or deleted in the list. We will color the newly added record green, the record that is to be removed in red and the updated record in blue:

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

If we look at the code of the chips, representing the pending transactions, we will see we are setting an icon like this:
`<igx-icon>{{setIcon(transaction)}}</igx-icon>`
Let us see how the `setIcon` function is defined in our example:

```
public setIcon(transaction: Transaction): string {
    switch (transaction.type) {
        case TransactionType.ADD:
            return "check";
        case TransactionType.DELETE:
            return "delete";
        case TransactionType.UPDATE:
            return "edit";
        default:
            return null;
    }
}
```

You may examine the example and see how all these work together to provide smooth user experience, allowing for reviewing and committing many changes at once.