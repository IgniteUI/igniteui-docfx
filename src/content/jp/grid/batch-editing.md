---
title: Angular Grid Grid での一括編集とトランザクション - インフラジスティックス
_description: Angular Grid Grid を使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。デモと例をお試しください。
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
_language: ja
---

# Angular Grid 一括編集とトランザクション


IgxGrid の一括編集機能は、[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、`igxTransactionService` の概要と、その実装方法の詳細を確認してください。





以下は、Grid コンポーネントに対して一括編集を有効にする方法の詳細な例です。

## Angular Grid 一括編集とトランザクションの例

以下のサンプルは、grid にプロバイダーのトランザクションがあり、[`batchEditing`]({environment:angularApiUrl}/classes/igxgridcomponent.html#batchEditing) と行編集が有効にされています。行編集全体を確定後にトランザクションが追加されるようにします。


<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-batch-editing/" alt="Angular Grid 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>




> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

`IgxGridModule` を **app.module.ts** ファイルにインポートします。

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

次に、Grid から `batchEditing` を有効にします。

```html
<igx-grid [data]="data" [batchEditing]="true">
  ...
</igx-grid>
```

これにより、igx-grid に `Transaction` サービスの適切なインスタンスが提供されます。適切な `TransactionService` は `TransactionFactory` を通じて提供されます。この内部実装の詳細については、[トランザクション トピック](../transaction-classes.md#トランザクション-ファクトリ)を参照してください。

一括編集を有効にした後、バインドされたデータ ソースと [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) を true に設定して `IgxGrid` を定義し、バインドします。



```html
<igx-grid #grid [batchEditing]="true" [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
    [rowEditable]="true">
    ...
</igx-grid>
...
<button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog(dialogGrid)">Commit</button>
...

```






以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo、redo、commit) の使用方法を示します。

```typescript
export class GridBatchEditingSampleComponent {
    @ViewChild('grid', { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;

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
}
```





> [!NOTE]
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、`Grid` は編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) を呼び出すことです。



> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) プロパティを無効にすると `Grid` を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。



## 一括編集のリモート ページング デモ

[完全なデモ構成をご覧ください](remote-data-operations.md#一括編集のリモート-ページング)。

<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/remote-paging-batch-editing/" >
</code-view>


## API リファレンス


- [transactions]({environment:angularApiUrl}/classes/igxgridcomponent.html#transactions)
- [igxTransactionService]({environment:angularApiUrl}/classes/igxtransactionservice.html)




## その他のリソース

- [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
- [Grid 概要](grid.md)
- [Grid 編集](editing.md)
- [Grid 行編集](row-editing.md)
- [Grid 行追加](row-adding.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)