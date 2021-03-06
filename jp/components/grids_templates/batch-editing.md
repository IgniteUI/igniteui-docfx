---
title: Angular @@igComponent 一括編集 | Angular CRUD | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular @@igComponent 一括編集および Material UI テーブルを使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。
_keywords: angular crud, ignite ui for angular, infragistics
_language: ja
---

# @@igComponent 一括編集とトランザクション

@@if (igxName === 'IgxGrid') {
@@igxName の一括編集機能は、[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、`igxTransactionService` の概要と、その実装方法の詳細を確認してください。
}

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
@@igxName の一括編集機能は、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、`igxHierarchicalTransactionService` の概要と、その実装方法の詳細を確認してください。
}
@@if (igxName === 'IgxHierarchicalGrid') {

[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) を [`@@igxName`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) と一緒に使用し、アイランドごとに個別のトランザクション ログを蓄積するには、代わりにサービス ファクトリを提供する必要があります。[`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory) として使用できるようになります。
}

以下は、@@igComponent コンポーネントに対して一括編集を有効にする方法の詳細な例です。

## Angular @@igComponent 一括編集とトランザクションの例

以下のサンプルは、@@igObjectRef にプロバイダーのトランザクションがあり、行編集が有効にされています。行編集全体を確定後にトランザクションが追加されるようにします。

@@if (igxName === 'IgxGrid') {
<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-batch-editing" alt="Angular @@igComponent 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
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

次に、トランザクション サービスを @@igComponent のプロバイダーとして定義する必要があります。

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
import { Component } from "@angular/core";
import { IgxGridTransaction, IgxHierarchicalTransactionService } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-with-transactions",
    template: '<ng-content></ng-content>'
})
export class TreeGridWithTransactionsComponent { }

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
@@if (igxName === 'IgxGrid') {
> [!NOTE]
> デフォルトでは、`@@igxName` のモジュールに `IgxGridTransaction` インジェクション トークンが定義されています。このトークンは [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を提供します。このサービスを提供することで、`@@igxName` は行編集を実行できます。`@@igxName` でトランザクションを有効にするには、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) を指定する必要があります。これは、コンポーネントの `providers` 配列で実行できます。ただし、各 `@@igxName` には独自のトランザクション サービスが必要なため、コンポーネントの本体に複数の `@@igxNames` が定義されている場合、各 `@@igxName` はトランザクション サービスを提供するコンポーネントにカプセル化される必要があります。上記のサンプルでは、`@@igxName` は `GridWithTransactionsComponent` コンポーネントでラップされています。後者では、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) は、その `providers` 配列で提供されます。
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> デフォルトでは、`@@igxName` のモジュールに `IgxGridTransaction` インジェクション トークンが定義されています。このトークンは [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を提供します。このサービスを提供することで、`@@igxName` は行編集を実行できます。`@@igxName` でトランザクションを有効にするには、`@@igxName` [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) を指定する必要があります。これは、コンポーネントの `providers` 配列で実行できます。ただし、各 `@@igxName` には独自のトランザクション サービスが必要なため、コンポーネントの本体に複数の `@@igxNames` が定義されている場合、各 `@@igxName` はトランザクション サービスを提供するコンポーネントにカプセル化される必要があります。上記のサンプルでは、`@@igxName` は `TreeGridWithTransactionsComponent` コンポーネントでラップされています。後者では、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、その `providers` 配列で提供されます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> デフォルトでは、`@@igxName` のモジュールに `IgxGridTransaction` インジェクション トークンが定義されています。このトークンは [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を提供します。このサービスを提供することで、`@@igxName` は行編集を実行できます。`@@igxName` でトランザクションを有効にするには、`@@igxName` [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) を指定する必要があります。これは、コンポーネントの `providers` 配列で実行できます。ただし、各 `@@igxName` には独自のトランザクション サービスが必要なため、コンポーネントの本体に複数の `@@igxNames` が定義されている場合、各 `@@igxName` はトランザクション サービスを提供するコンポーネントにカプセル化される必要があります。上記のサンプルでは、`@@igxName` は `HierarchicalGridWithTransactionsComponent` コンポーネントでラップされています。後者では、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、その `providers` 配列で提供されます。
}
次に `@@igxName` をバインドしたデータ ソースで定義し、[`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) を true に設定してバインドします。

@@if (igxName === 'IgxGrid') {
```html
<app-grid-with-transactions>
    <igx-grid #grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        ...
    </igx-grid>
</app-grid-with-transactions>
...
<button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog(dialogGrid)">Commit</button>
...

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="employeeID" foreignKey="PID"
    width ="100%" height ="500px" rowEditable=true>
    ...
</igx-tree-grid>
...
    <button igxButton (click)="addRow()">Add Root Level Row</button>
    <button igxButton [disabled]="!treeGrid.transactions.canUndo" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!treeGrid.transactions.canRedo" (click)="redo()">Redo</button>
    <button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1"
        (click)="openCommitDialog()">Commit</button>
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<app-hierarchical-grid-with-transactions>
    <igx-hierarchical-grid #hierarchicalGrid [data]="data" [primaryKey]="'Artist'"
        [height]="'580px'" [width]="'100%'" [rowEditable]="true" >
        ...
        <igx-row-island #childGrid [key]="'Albums'" [primaryKey]="'Album'" [rowEditable]="true">
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
    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo()
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.toggle.close();
    }
    ...
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
    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }
    ...
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo、redo、commit) の使用方法を示します。

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    ...
    public undo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }
}
```
}

> [!NOTE] 
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、`@@igComponent` は編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endedit) を呼び出すことです。

@@if (igxName === 'IgxTreeGrid') {
`@@igComponent` 内の親ノードの削除にはいくつかの特徴があります。階層データを使用している場合、親を削除すると子も削除されます。フラットデータを使用している場合、`@@igComponent` の [`cascadeOnDelete`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cascadeondelete) プロパティを使用して必要な動作を設定できます。このプロパティは、親が削除されたときに子レコードを削除するかどうかを示します (デフォルトでは true に設定されています)。
}

> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) プロパティを無効にすると `@@igComponent` を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。

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