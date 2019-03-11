@@if (igxName === 'IgxGrid') {
---
title: Grid 一括編集 - ネイティブ Angular |Ignite UI for Angular
_description: TransactionService は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, セル編集, 行編集, 一括更新, 一括編集, トランザクション
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid 一括編集 - ネイティブ Angular |Ignite UI for Angular
_description: TransactionService は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, セル編集, 行編集, 一括更新, 一括編集, トランザクション
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid 一括編集 - ネイティブ Angular |Ignite UI for Angular
_description: TransactionService は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント,  Angular Hierarchical Grid, Angular Hierarchical  Table, Angular Hierarchical  Grid コンポーネント, Angular Hierarchical Table コントロール, Angular Hierarchical  Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical  Grid, Angular 高パフォーマンス Hierarchical Table, セル編集, 行編集, 一括更新, 一括編集, トランザクション
---
}

### @@igComponent Batch Editing

@@if (igxName !== 'IgxTreeGrid') {
[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) はセル編集と行編集の両方で動作します。行編集の終了時に行トランザクションが追加された場合、セル編集のトランザクションはセルが編集モードを終了したときに追加されます。グリッド編集のステートは、すべての行を編集済み、追加済み、削除済み、そして最後のステートで構成されます。これらは後でインスペクト、操作、サブミットを一度に行います。個々のセルまたは行の変更を集めて、編集モードに基づいてデータ行/レコードごとに蓄積します。
}
@@if (igxName === 'IgxTreeGrid') {
[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。

[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) はセル編集と行編集の両方で動作します。行編集の終了時に行トランザクションが追加された場合、セル編集のトランザクションはセルが編集モードを終了したときに追加されます。グリッド編集のステートは、すべての行を編集済み、追加済み、削除済み、そして最後のステートで構成されます。これらは後でインスペクト、操作、サブミットを一度に行います。個々のセルまたは行の変更を集めて、編集モードに基づいてデータ行/レコードごとに蓄積します。

一括編集では、複数レコードの**追加/更新/削除**してすべての変更を一度にコミットすることが可能です。変更がコミットされる前は各編集済みのレコードのビジュアル表示があり、エンドユーザーは更新済みと削除済みの項目を確認できます。更にコミット前の変更を管理する基に**戻す/やり直し**機能を公開します。

一括編集機能を使用するには igniteui-angular から [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) をインポートする必要があります。トランザクションは、適用された変更をトランザクション ログとして蓄積し、各変更済みの行とその状態を保持するプロバイダーです。
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) を使用した場合も各アイランドに個別のトランザクション ログを累積させるには、代わりにサービス ファクトリが必要です。エクスポートされて ['IgxHierarchicalTransactionServiceFactory']({environment:angularApiUrl}/classes/igxhierarchicaltransactionservicefactory.html) として利用できます。
}

#### デモ

@@if (igxName === 'IgxGrid') {
以下のサンプルは、グリッドにプロバイダーのトランザクションがあり、行編集が有効されています。行編集全体を確定後にトランザクションが追加されるようにします。

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
以下は、トランザクションでプロバイダーとして一括編集を有効にし、また行編集を有効にする方法です。行編集全体を確定後にトランザクションが追加されるようにします。サンプルではフラット データソースを使用します。

<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-batchediting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:680px">
    <iframe id="hierarchical-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>
}

> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

### 使用方法

`@@igxNameModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

igxTransactionService を @@igComponent として、またはその親コンポーネントとして定義する必要があります。

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxTransactionService, IgxTreeGridComponent } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-batch-editing-sample",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent { }

```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component } from "@angular/core";
import { IgxHierarchicalTransactionServiceFactory } from "igniteui-angular";
@Component({
    providers: [ IgxHierarchicalTransactionServiceFactory ],
    selector: "app-hierarchical-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class HierarchicalGridWithTransactionsComponent { }
```
}
> [!NOTE]
> `IgxGridTransaction` はグリッドで定義されたインジェクション トークンです。

次に @@igComponent をバインドしたデータソースで定義し、[`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) を true に設定してバインドします。

@@if (igxName === 'IgxGrid') {
```html
<app-grid-with-transactions>
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        ...
    </igx-grid>
</app-grid-with-transactions>
...
<button igxButton [disabled]="!undoEnabled" (click)="undo()">Undo</button>
<button igxButton [disabled]="!redoEnabled" (click)="redo()">Redo</button>
...
<button igxButton (click)="commit()">Commit</button>
<button igxButton (click)="discard()">Discard</button>
...

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="employeeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true columnHiding=true>
    ...
</igx-tree-grid>
...
    <button igxButton (click)="addRow()">Add Root Level Row</button>
    <button igxButton [disabled]="!undoEnabled" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!redoEnabled" (click)="redo()">Redo</button>
    <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog()">Commit</button>
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<app-hierarchical-grid-with-transactions>
    <igx-hierarchical-grid #parentGridProducts [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-row-island #rowIslandShipments [key]="'Shipments'" [primaryKey]="'ShipmentID'" [rowEditable]="true">
        </igx-row-island>
    </igx--hierarchical-grid>
</app-hierarchical-grid-with-transactions>
...
<button igxButton [disabled]="!productsUndoEnabled" (click)="productsUndo()">Undo Products</button>
<button igxButton [disabled]="!productsRedoEnabled" (click)="productsRedo()">Redo Products</button>
<button igxButton [disabled]="!shipmentsUndoEnabled" (click)="shipmentsUndo()">Undo Shipments</button>
<button igxButton [disabled]="!shipmentsRedoEnabled" (click)="shipmentsRedo()">Redo Shipments</button>
...
<button igxButton (click)="productsCommit()">Commit Products</button>
<button igxButton (click)="productsDiscard()">Discard Products</button>
<button igxButton (click)="shipmentsCommit()">Commit Shipments</button>
<button igxButton (click)="shipmentsDiscard()">Discard Shipments</button>
...

```
}

@@if (igxName === 'IgxGrid') {
以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo、redo、commit) の使用方法を示します。

```typescript
...
export class GridBatchEditingSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    ...
    public get undoEnabled(): boolean {
        return this.gridRowEditTransaction.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.gridRowEditTransaction.transactions.canRedo;
    }

    public undo() {
        this.gridRowEditTransaction.transactions.undo();
    }

    public redo() {
        this.gridRowEditTransaction.transactions.redo();
    }

    public commit() {
        this.gridRowEditTransaction.transactions.commit(this.data);
        this.toggle.close();
    }

    public discard() {
        this.gridRowEditTransaction.transactions.clear();
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
以下のコード例は、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) API (undo、redo、commit) の使用方法を示します。
```typescript
...
export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    ...
    public addRow() {
        this.treeGrid.addRow({
            PID: -1,
            Title: "Junior Sales Representative",
            employeeID: this.data.length + this.nextRow++,
            firstName: "John",
            lastName: "Doe"
        });
    }

    public addChildRow(id) {
        this.treeGrid.addRow(
            {
                Title: "Sales Manager",
                employeeID: this.data.length + this.nextRow++,
                firstName: `Added `,
                lastName: "Added"
            },
            id);
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    public undo() {
        this.treeGrid.transactions.undo();
    }

    public redo() {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
        this.dialog.close();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
       return this.treeGrid.transactions.canRedo;
    }

    public openCommitDialog() {
        this.dialog.open();
        this.dialogGrid.reflow();
    }

    public get hasTransactions(): boolean {
        return this.treeGrid.transactions.getAggregatedChanges(false).length > 0;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo、redo、commit) の使用方法を示します。

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    @ViewChild("parentGridProducts", { read: IgxHierarchicalGridComponent }) public parentGridProducts: IgxHierarchicalGridComponent;
    @ViewChild("rowIslandShipments", { read: IgxRowIslandComponent }) public rowIslandShipments: IgxRowIslandComponent;
    ...
    public get productsUndoEnabled(): boolean {
        return this.parentGridProducts.transactions.canUndo;
    }
    public get productsRedoEnabled(): boolean {
        return this.parentGridProducts.transactions.canRedo;
    }
    public get shipmentsUndoEnabled(): boolean {
        return this.rowIslandShipments.transactions.canUndo;
    }
    public get shipmentsRedoEnabled(): boolean {
        return this.rowIslandShipments.transactions.canRedo;
    }
    public productsUndo() {
        this.parentGridProducts.transactions.undo();
    }
    public productsRedo() {
        this.parentGridProducts.transactions.redo();
    }
    public shipmentsUndo() {
        this.rowIslandShipments.transactions.undo();
    }
    public shipmentsRedo() {
        this.rowIslandShipments.transactions.redo();
    }
    public productsCommit() {
        this.parentGridProducts.transactions.commit(this.data);
    }
    public productsDiscard() {
        this.parentGridProducts.transactions.clear();
    }
     public shipmentsCommit() {
        this.rowIslandShipments.transactions.commit(this.data);
    }
    public shipmentsDiscard() {
        this.rowIslandShipments.transactions.clear();
    }
}
```
}

> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) プロパティを無効にすると @@igComponent を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。

### API リファレンス

@@if (igxName === 'IgxGrid') {
* [`transactions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#transactions)
* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)
}
@@if (igxName === 'IgxTreeGrid') {
* [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) 
* [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`igxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservicefactory.html)
}

### その他のリソース

* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Row Editing](row_editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
