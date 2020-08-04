---
title: 一括編集 | Angular Crud | Ignite UI for Angular | インフラジスティックス
_description: トランザクション サービスを使用して、Ignite UI Angular コンポーネントの一括編集を構成し、それらに対して CRUD 操作を実行する方法。
_keywords:  batch editing, igniteui for angular, infragistics, 一括編集,
_language: ja
---

## トランザクション サービスの使用方法

データソースの状態を保持し、一度に多くのトランザクションをコミットする必要があるコンポーネントを使用する場合、[`Transaction Service`]({environment:angularApiUrl}/interfaces/transactionservice.html) を利用できます。 

Ignite UI for Angular グリッドコンポーネントの [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、グリッドと統合して、追加設定なしに一括編集機能が使用できます。ただし、その他の Ignite UI for Angular またはカスタムコンポーネントでトランザクションを使用する必要がある場合は、再度 [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) を使用して、同様の動作を実装できます。

#### デモ

このトピックでは、[`igxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) コンポーネントを使用して、トランザクションを有効にする方法を示します。トランザクションを追加する方法、[pipe](https://angular.io/guide/pipes) を介してデータを変換する方法、およびコミットされようとしている変更をユーザーに表示するするためにビューを視覚的に更新する方法を示します。

<div class="sample-container loading" style="height:550px">
    <iframe id="transaction-base-sample-iframe" src='{environment:demosBaseUrl}/services/transaction-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="transaction-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="transaction-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### トランザクション サービスを含む

#### トランザクション サービスをプロジェクトに含む

アプリケーションに `IgxTransactionService` を含めるには、2 つのオプションがあります。最初の方法は、上記のデモで行われているように、アプリケーションの `AppModule` または他の親モジュールに追加することです。

```typescript
@NgModule({
    ...
    providers: [
        IgxTransactionService
    ]
})
export class AppModule { }
```

もう 1 つのオプションは、トランザクション サービスが使用されるコンポーネントで提供することです。

```typescript
@Component({
    selector: "transaction-base",
    styleUrls: ["./transaction-base.component.scss"],
    templateUrl: "transaction-base.component.html",
    providers: [IgxTransactionService]
})
export class TransactionBaseComponent { }
```

#### コンポーネントにトランザクション サービスを注入する

`ts` ファイルは、アプリケーションで必要となる [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) を `igniteui-angular` ライブラリからインポートし、[`State`]({environment:angularApiUrl}/interfaces/state.html) および [`Transaction`]({environment:angularApiUrl}/interfaces/transaction.html) インターフェイスと [`TransactionType`]({environment:angularApiUrl}/enums/TransactionType.html) enumをインポートする必要があります。

```typescript
import { IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
```

次にトランザクション サービスをコンストラクターにインポートします。

```typescript
constructor(private _transactions: IgxTransactionService<Transaction, State>) { ... }
```

### igxList の定義

html テンプレートで [`igxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) コンポーネントに **edit**、**delete**、および **add** 処理を定義して、リストとそのアイテムを変更します。

```html
<igx-list>
    <igx-list-item [isHeader]="true">Wishlist</igx-list-item>
    <igx-list-item *ngFor="let item of this.wishlist | transactionBasePipe"
        [ngClass]="{ deleted: isDeleted(item.id), edited: isEdited(item.id) }">
        <p igxListLineTitle>{{item.name}}</p>
        <p igxListLineSubTitle>Costs: {{item.price}}</p>
        <igx-icon igxListAction (click)="onEdit()" *ngIf="item.id === 1 && item.price !== '$999'">edit</igx-icon>
        <igx-icon igxListAction (click)="onDelete()" *ngIf="item.id === 2 && !isDeleted(item.id)">delete</igx-icon>
    </igx-list-item>
    <button igxButton (click)="onAdd()" [disabled]="itemAdded(4)">Add New</button>
</igx-list>
```

### 保留中の変更のパイプ

上記のリスト コンポーネントは、`transactionBasePipe` を使用して、元のデータに影響を与えることなく、ウィッシュ リスト内のアイテムへの変更を表示します。パイプは以下のようになります。

```typescript
@Pipe({
    name: "transactionBasePipe",
    pure: false
})
export class TransactionBasePipe implements PipeTransform {
    /**
     * @param transactions Injected Transaction Service.
     */
    constructor(public transactions: IgxTransactionService<Transaction, State>) { }

    public transform(data: WishlistItem[]) {
        // the pipe should NOT operate on the original dataset
        // we create a copy of the original data and then use it for visualization only
        const _data = [...data];
        const pendingStates = this.transactions.getAggregatedChanges(false);

        for (const state of pendingStates) {
            switch (state.type) {
                case TransactionType.ADD:
                    // push the newValue property of the current `ADD` state
                    _data.push(state.newValue);
                    break;
                case TransactionType.DELETE:
                    // pipe doesn't delete items because the demo displays them with a different style
                    // the record will be deleted once the state is committed
                    break;
                case TransactionType.UPDATE:
                    const index = _data.findIndex(x => x.id === state.id);
                    // merge changes with the item into a new object
                    // to avoid modifying the original data item
                    _data[index] = Object.assign({}, _data[index], state.newValue);
                    break;
                default:
                    return _data;
            }
        }

        return _data;
    }
}
```

### 編集、削除、機能の追加

#### 編集機能の定義

2 番目のリスト アイテムには、アイテムのデータを更新する編集ボタンが含まれています。
```html
<igx-icon igxListAction (click)="onEdit()" *ngIf="item.id === 1 && item.price !== '$999'">edit</igx-icon>
```

`onEdit` イベント ハンドラー内でボタンが押されると、'UPDATE’ トランザクションが作成されます。 

```typescript
public onEdit(): void {
    const newPrice = "$999";
    // there can be multiple `UPDATE` transactions for the same item `id`
    // the `newValue` property should hold only the changed properties
    const editTransaction: Transaction = {
        id: this.wishlist[0].id,
        type: TransactionType.UPDATE,
        newValue: { price: newPrice }
    };
    // provide the first wishlist item as a `recordRef` argument
    this.transactions.add(editTransaction, this.wishlist[0]);
}
```

さらに、未保存の編集のアイテムをチェックする機能があります。

```typescript
public isEdited(id): boolean {
    const state = this.transactions.getState(id);
    return state && state.type === TransactionType.UPDATE;
}
```

#### 削除機能の定義

3 番目のリスト アイテムには、アイテムのデータを削除する削除ボタンが含まれています。

```html
<igx-icon igxListAction (click)="onDelete()" *ngIf="item.id === 2 && !isDeleted(item.id)">delete</igx-icon>
```


`onDelete` イベント ハンドラー内でボタンが押されると、「DELETE」トランザクションが作成されます。 

```typescript
public onDelete(): void {
    // after a `DELETE` transaction, no further changes should be made for the same `id`
    // the `newValue` property should be set to `null` since we do not change any values,
    const deleteTransaction: Transaction = {
        id: this.wishlist[1].id,
        type: TransactionType.DELETE,
        newValue: null
    };
    // provide the second wishlist item as a `recordRef` argument
    this.transactions.add(deleteTransaction, this.wishlist[1]);
}
```

さらに、保存されていない削除のアイテムをチェックする機能があります。

```typescript
public isDeleted(id): boolean {
    const state = this.transactions.getState(id);
    return state && state.type === TransactionType.DELETE;
}
```

#### 追加機能の定義

リストの最後に [追加] ボタンが追加され、リストに新しいアイテムが追加されます。

```html
<button igxButton (click)="onAdd()" [disabled]="itemAdded(4)">Add New</button>```
```

`onAdd` イベント ハンドラー内でボタンが押されると、'ADD' トランザクションが作成されます。

```typescript
public onAdd(): void {
    // it must have a unique 'id' property
    const item: WishlistItem = { id: 4, name: "Yacht", price: "A lot!" };

    // in an `ADD` transaction you do not need to provide a `recordRef` argument,
    // since there is nothing to refer to yet
    this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });
}
```

さらに、保存されていない追加項目をチェックする機能があります。

```typescript
public itemAdded(id: number): boolean {
    const found = this.transactions.getState(id) || this.wishlist.find(x => x.id === 4);
    return !!found;
}
```

### トランザクション ログ

デモでは、ログ内の保留中のトランザクションを示します。

```html
<div>
    <h5>Transaction Log</h5>
    <div *ngFor="let transaction of this.getTransactionLog()">
        {{transaction.type.toUpperCase()}} -> {{transaction.name}} Costs: {{transaction.price}}
    </div>
</div>
```

```typescript
public getTransactionLog(): any[] {
    return this.transactions.getTransactionLog().map(transaction => {
        const item = this.wishlist.find(x => x.id === transaction.id);
        return Object.assign({ type: transaction.type }, item, transaction.newValue);
    });
}
```

リストの現在の状態の表現も追加します。保留中のトランザクションがコミットされる前のデータの様子を示します。

```html
<div>
    <h5>Data Items</h5>
    <div *ngFor="let item of this.wishlist">
        <div>{{item.name}} - {{item.price}}</div>
    </div>
</div>
```

### 保留されたトランザクションをコミット

すべての変更が完了したら、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) の [`commit`]({environment:angularApiUrl}/classes/igxtransactionservice.html#commit) メソッドを使用して、一度にすべてをコミットできます。指定されたデータにすべてのトランザクションを適用します。

```html
<button igxButton="raised" (click)="onCommit()" [disabled]="this.getTransactionLog().length === 0">Commit Transactions</button>
```

```typescript
public onCommit(): void {
    // the `commit` function expects the original data array as its parameter
    this.transactions.commit(this.wishlist);
}

```

### 保留されたトランザクションのクリア

リストとのやり取りのどの時点でも、[`clear`]({environment:angularApiUrl}/classes/igxtransactionservice.html#clear) メソッドを使用して、トランザクション ログをクリアできます。

```html
<button igxButton="raised" (click)="onClear()" [disabled]="this.getTransactionLog().length === 0">Clear Transactions</button>
```

```typescript
public onClear(): void {
    this.transactions.clear();
}

