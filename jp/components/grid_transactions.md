---
title: Grid トランザクション - ネイティブ Angular | Ignite UI for Angular
_description: TransactionService はミドルウェアプロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
_language: ja
---

## Grid トランザクション

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) はセル編集と行編集の両方と動作します。行編集の終了時に行トランザクションが追加された場合、セル編集のトランザクションはセルが編集モードを終了したときに追加されます。グリッド編集のステートは、すべての行を編集済み、追加済み、削除済み、そして最後のステートで構成されます。これらは後でインスペクト、操作、サブミットを一度に行います。個々のセルまたは行の変更を集めて、編集モードに基づいてデータ行/レコードごとに蓄積します。

### デモ

以下のサンプルは、グリッドにプロバイダーのトランザクションがあり、行編集が有効されています。行編集全体を確定後にトランザクションが追加されるようにします。

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-transaction-sample-iframe" src='{environment:demosBaseUrl}/grid-transaction' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-transaction-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法
**app.module.ts** ファイルの [`IgxGridModule`]({environment:angularApiUrl}/classes/igxgridmodule.html) をインポートします。

```typescript
// app.module.ts

...
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxGridModule],
    ...
})
export class AppModule {}
```

グリッドに igxTransactionService 定義する必要があります。

```typescript
import { Component } from "@angular/core";
import { IgxGridTransaction, IgxTransactionService } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class GridWithTransactionsComponent { }

```

注: `IgxGridTransaction` はグリッドで定義されたインジェクション トークンです。

データソースにバインドするグリッドを定義をして [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) を true に設定します。

```html
<app-grid-with-transactions>
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <ng-template igxCellEditor let-cell="cell">
                <input name="units" [(ngModel)]="cell.value" style="color: black" />
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</app-grid-with-transactions>
```

以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html) API (undo, redo, commit) の使用方法を示します。

```typescript
import { Component, ViewChild } from "@angular/core";
import { data } from "./data";

import { IgxGridComponent, IgxToggleDirective, Transaction } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-transaction-sample.component.css`],
    templateUrl: "grid-transaction-sample.component.html"
})
export class GridTransactionSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    @ViewChild(IgxToggleDirective) public toggle: IgxToggleDirective;

    public currentActiveGrid: { id: string, transactions: any[] } = { id: "", transactions: [] };

    public data: any[];
    private addProductId: number;

    constructor() {
        this.data = data;
        this.addProductId = this.data.length + 1;
    }

    public addRow(gridID) {
        const currentGrid: IgxGridComponent = this.gridRowEditTransaction;
        currentGrid.addRow({
            CategoryID: this.getRandomInt(1, 10),
            Discontinued: this.getRandomInt(1, 10) % 2 === 0,
            OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
            .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: "Product with index " + this.getRandomInt(0, 20),
            QuantityPerUnit: (this.getRandomInt(1, 10) * 10).toString() + " pcs.",
            ReorderLevel: this.getRandomInt(10, 20),
            SupplierID: this.getRandomInt(1, 20),
            UnitPrice: this.getRandomInt(10, 1000),
            UnitsInStock: this.getRandomInt(1, 100),
            UnitsOnOrder: this.getRandomInt(1, 20)
        });
        this.refresh();
    }

    public deleteRow(event, gridID, rowID) {
        this.gridRowEditTransaction.deleteRow(rowID);
    }

    public undo(gridID) {
        this.gridRowEditTransaction.transactions.undo();
        this.refresh();
    }

    public redo(gridID) {
        this.gridRowEditTransaction.transactions.redo();
        this.refresh();
    }

    public openCommitDialog(gridID) {
        this.toggle.open();
    }
    public commit() {
        this.gridRowEditTransaction.transactions.commit(this.data);
        this.toggle.close();
    }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private refresh(): void {
        const grid = this.gridRowEditTransaction;
        (grid as any)._pipeTrigger++;
        (grid as any).cdr.markForCheck();
    }
}

```
> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティを無効にするとグリッドを変更してセル変更でトランザクションを作成します。

## API

* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)

### メソッド


* [`aggregatedState`]({environment:angularApiUrl}/classes/igxtransactionservice.html#aggregatedstate)
* [`getAggregatedValue`]({environment:angularApiUrl}/classes/igxtransactionservice.html#getaggregatedvalue)
* [`getState`]({environment:angularApiUrl}/classes/igxtransactionservice.html#getstate)
* [`add`]({environment:angularApiUrl}/classes/igxtransactionservice.html#add)
* [`getTransactionLog`]({environment:angularApiUrl}/classes/igxtransactionservice.html#gettransactionlog)
* [`clear`]({environment:angularApiUrl}/classes/igxtransactionservice.html#clear)
* [`commit`]({environment:angularApiUrl}/classes/igxtransactionservice.html#commit)
* [`undo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#undo)
* [`redo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#redo)

### その他のリソース

* [Grid の概要](grid.md)
* [Grid 編集](grid_editing.md)
* [グリッドの行編集テンプレート](grid_row_editing.md)