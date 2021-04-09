@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 一括編集 | Angular CRUD | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular のグリッド UI 編集および Material UI テーブルを使用した Angular CRUD を使用して、基になるデータに影響を与えずにデータを操作できます。
_keywords: angular crud, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 一括編集 | Angular CRUD | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular のグリッド UI 編集および Material UI テーブルを使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。
_keywords: angular crud, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Grid 一括編集 | Angular CRUD | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular のグリッド UI 編集および Material UI テーブルを使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。
_keywords: angular crud, ignite ui for angular, infragistics
_language: ja
---
}

# @@igComponent 一括編集とトランザクション

@@if (igxName === 'IgxGrid') {
igxGrid の一括編集機能は、[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、igxTransactionService の概要と実装方法の詳細を確認してください。

以下は、igxGrid コンポーネントで一括編集を有効にする方法の詳細な例です。
}
@@if (igxName === 'IgxTreeGrid') {
IgxTreeGrid の一括編集機能は、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、igxHierarchicalTransactionService の概要と実装方法の詳細を確認してください。

以下は、IgxTreeGrid コンポーネントで一括編集を有効にする方法の詳細な例です。
}
@@if (igxName === 'IgxHierarchicalGrid') {
IgxHierarchicalGrid の一括編集機能は、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、igxHierarchicalTransactionService の概要と実装方法の詳細を確認してください。

[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) と [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) を使用した場合も各アイランドに個別のトランザクション ログを累積させるには、代わりにサービス ファクトリが必要です。エクスポートされると [`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory) として利用できます。 

以下は、IgxHierarchicalGrid コンポーネントで一括編集を有効にする方法の詳細な例です。
}

## Angular @@igComponent 一括編集とトランザクションの例

@@if (igxName === 'IgxGrid') {
以下のサンプルは、グリッドにプロバイダーのトランザクションがあり、行編集が有効にされています。行編集全体を確定後にトランザクションが追加されるようにします。


<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-batch-editing" alt="Angular @@igComponent 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
以下は、トランザクションでプロバイダーとして一括編集を有効にし、また行編集を有効にする方法です。行編集全体を確定後にトランザクションが追加されるようにします。サンプルではフラット データソースを使用します。


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-batchediting" alt="Angular @@igComponent 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing" alt="Angular @@igComponent 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>
}

> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

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
    IgxHierarchicalTransactionService, IgxTreeGridComponent } from "igniteui-angular";

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
<igx-tree-grid #treeGrid [data]="data" primaryKey="employeeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true>
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
    <igx-hierarchical-grid igxPreventDocumentScroll #hierarchicalGrid class="hgrid" [data]="localdata" [primaryKey]="'Artist'"
        [rowEditable]="true" [height]="'580px'" [width]="'100%'">
        <igx-column field="Artist" header="Artist" [editable]="false" [dataType]="'string'"></igx-column>
        <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
        </igx-column>
        ...
        <igx-row-island [key]="'Albums'" #layout1 [primaryKey]="'Album'" [rowEditable]="true">
            <igx-grid-toolbar></igx-grid-toolbar>
            ...
            <ng-template igxToolbarCustomContent let-grid="grid">
                <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo(grid)">Undo</button>
                <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo(grid)">Redo</button>
            </ng-template>
        </igx-row-island>
    </igx-hierarchical-grid>
</app-hierarchical-grid-with-transactions>
...
<div class="buttons-row">
    <div class="buttons-wrapper">
        <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
        <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
    </div>
</div>
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
        /* exit edit mode */
        this.gridRowEditTransaction.endEdit(/* commit the edit transaction */ false);
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
        /* exit edit mode */
        this.treeGrid.endEdit(/* commit the edit transaction */ false);
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
    @ViewChild("layout1", { static: true })
    private layout1: IgxRowIslandComponent;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    
    ...
    
    public get undoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canUndo;
    }

    public get redoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0 || this.hasChildTransactions;
    }

    public get hasChildTransactions(): boolean {
        return this.layout1.hgridAPI.getChildGrids()
            .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
    }
    
    ...
    
    public undo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode */
        grid.endEdit(/* commit the edit transaction */ false);
        grid.transactions.undo();
    }

    public redo(grid: IgxHierarchicalGridComponent) {
        grid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.localdata);
        this.layout1.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
    }

    public discard() {
        this.hierarchicalGrid.transactions.clear();
        this.layout1.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.clear();
        });
    }
}
```
}

> [!NOTE] 
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、グリッドは編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endedit) を呼び出すことです。

@@if (igxName === 'IgxTreeGrid') {
グリッド内の親ノードの削除にはいくつかの特徴があります。階層データを使用している場合、親を削除すると子も削除されます。フラットデータを使用している場合、グリッドの [`cascadeOnDelete`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cascadeondelete) プロパティを使用して必要な動作を設定できます。このプロパティは、親が削除されたときに子レコードを削除するかどうかを示します (デフォルトでは true に設定されています)。
}

> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) プロパティを無効にすると @@igComponent を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。

## API リファレンス

@@if (igxName === 'IgxGrid') {
* [transactions]({environment:angularApiUrl}/classes/@@igTypeDoc.html#transactions)
* [igxTransactionService]({environment:angularApiUrl}/classes/igxtransactionservice.html)
}
@@if (igxName === 'IgxTreeGrid') {
* [HierarchicalTransactionService]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) 
* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
}
@@if (igxName === 'IgxHierarchicalGrid') {
* [igxHierarchicalTransactionServiceFactory]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory)
}

## その他のリソース

* [@@igComponent 概要](@@igMainTopic.md)
* [@@igComponent 編集](editing.md)
* [@@igComponent 行編集](row-editing.md)
* [@@igComponent 行追加](row-adding.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)