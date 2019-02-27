---
title: Grid 一括編集 - ネイティブ Angular | Ignite UI for Angular
_description: TransactionService は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (undo と redo)、すべて破棄または確定のための API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, セル編集, 行編集, 一括更新, 一括編集, トランザクション
_language: ja
---

## Grid 一括編集

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用する注入可能なミドルウェアです。プロバイダーは、データのアクセス、変更の操作 (元に戻す、やり直し)、すべて破棄または確定のための API を公開します。

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) はセル編集と行編集の両方と動作します。行編集の終了時に行トランザクションが追加された場合、セル編集のトランザクションはセルが編集モードを終了したときに追加されます。グリッド編集のステートは、すべての行を編集済み、追加済み、削除済み、そして最後のステートで構成されます。これらは後でインスペクト、操作、サブミットを一度に行います。個々のセルまたは行の変更を集めて、編集モードに基づいてデータ行/レコードごとに蓄積します。

### デモ

以下のサンプルは、グリッドにプロバイダーのトランザクションがあり、行編集が有効されています。行編集全体を確定後にトランザクションが追加されるようにします。

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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

igxTransactionService を グリッドのプロバイダーとして、またはその親コンポーネントとして定義する必要があります。

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
> [!NOTE]
> IgxGridTransaction` はグリッドで定義されるインジェクション トークンです。


データソースにバインドするグリッドを定義をして [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) を true に設定してバインドします。

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

以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo, redo, commit) の使用方法を示します。

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
> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティを無効にするとグリッドを変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。

## API リファレンス

* [`transactions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#transactions)

* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)

### その他のリソース

* [Grid の概要](grid.md)
* [Grid 編集](editing.md)
* [グリッドの行編集テンプレート](row_editing.md)