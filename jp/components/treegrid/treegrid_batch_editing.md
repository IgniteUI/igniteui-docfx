---
title: Tree Grid 一括編集 - ネイティブ Angular | Ignite UI for Angular
_description:  TransactionService は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid 
_language: ja
---

## Tree Grid 一括編集 

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。 プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) はセル編集と行編集の両方と動作します。行編集の終了時に行トランザクションが追加された場合、セル編集のトランザクションはセルが編集モードを終了したときに追加されます。グリッド編集のステートは、すべての行を編集済み、追加済み、削除済み、そして最後のステートで構成されます。これらは後でインスペクト、操作、サブミットを一度に行います。個々のセルまたは行の変更を集めて、編集モードに基づいてデータ行/レコードごとに蓄積します。

一括編集では、複数レコードの**追加/更新/削除**してすべての変更を一度にコミットすることが可能です。変更がコミットされる前は各編集済みのレコードのビジュアル表示があり、エンドユーザーは更新済みと削除済みの項目を確認できます。更にコミット前の変更を管理する**基に戻す/やり直し**機能を公開します。

一括編集機能を使用するには igniteui-angular から [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) をインポートする必要があります。トランザクションは、適用された変更をトランザクション ログとして蓄積し、各変更済みの行とその状態を保持するプロバイダーです。

### デモ

以下は、トランザクションでプロバイダーとして一括編集を有効にし、また行編集を有効にする方法です。行編集全体を確定後にトランザクションが追加されるようにします。サンプルではフラット データソースを使用します。

<div class="sample-container loading" style="height:890px">
    <iframe id="tree-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-batch-edit' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>


> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

**app.module.ts** ファイルの [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html) をインポートします。

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```
igxTransactionService をツリー グリッドのプロバイダーとして、またはその親コンポーネントとして定義する必要があります。

```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxTransactionService, IgxTreeGridComponent } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-tree-grid-batch-editing-sample.component",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent {

```
> [!NOTE]
> `IgxGridTransaction` はグリッドで定義されたインジェクション トークンです。


データソースにバインドするツリー グリッドを定義をして [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) を true に設定してバインドします。

```html
    <igx-tree-grid #treeGrid [data]="data" primaryKey="EmployeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true columnHiding=true>
        ...
    </igx-tree-grid>
    ...
        <button igxButton (click)="addRow('treeGrid')">Add Row</button>
        <button igxButton [disabled]="!undoEnabled" (click)="undo('treeGrid')">Undo</button>
        <button igxButton [disabled]="!redoEnabled" (click)="redo('treeGrid')">Redo</button>
        <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog('treeGrid')">Commit</button>
    ...
```

以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo, redo, commit) の使用方法を示します。

```typescript

export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    ...
    public deleteRow(event, gridID, rowID) {
        this.treeGrid.deleteRow(rowID);
    }

    public undo(gridID) {
        this.treeGrid.transactions.undo();
    }

    public redo(gridID) {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
       return this.treeGrid.transactions.canRedo;
    }

```

> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティを無効にするとグリッドを変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。


### API リファレンス

* [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 
* [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)
* [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)


### その他のリソース

<div class="divider--half"></div>

* [Data Grid](../grid/grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)








