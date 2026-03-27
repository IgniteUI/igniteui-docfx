---
title: Angular Tree Grid Grid での一括編集とトランザクション - インフラジスティックス
_description: Angular Tree Grid Grid を使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。デモと例をお試しください。
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
_language: ja
---

# Angular Tree Grid 一括編集とトランザクション




IgxTreeGrid の一括編集機能は、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、`igxHierarchicalTransactionService` の概要と、その実装方法の詳細を確認してください。



以下は、Tree Grid コンポーネントに対して一括編集を有効にする方法の詳細な例です。

## Angular Tree Grid 一括編集とトランザクションの例

以下のサンプルは、treeGrid にプロバイダーのトランザクションがあり、[`batchEditing`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#batchEditing) と行編集が有効にされています。行編集全体を確定後にトランザクションが追加されるようにします。



<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-batchediting/" alt="Angular Tree Grid 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>



> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

`IgxTreeGridModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTreeGridModule],
    ...
})
export class AppModule {}
```

次に、Tree Grid から `batchEditing` を有効にします。

```html
<igx-tree-grid [data]="data" [batchEditing]="true">
  ...
</igx-tree-grid>
```

これにより、igx-tree-grid に `Transaction` サービスの適切なインスタンスが提供されます。適切な `TransactionService` は `TransactionFactory` を通じて提供されます。この内部実装の詳細については、[トランザクション トピック](../transaction-classes.md#トランザクション-ファクトリ)を参照してください。

一括編集を有効にした後、バインドされたデータ ソースと [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable) を true に設定して `IgxTreeGrid` を定義し、バインドします。




```html
<igx-tree-grid #treeGrid [batchEditing]="true" [data]="data" primaryKey="employeeID" foreignKey="PID"
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






以下のコード例は、[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) API (undo、redo、commit) の使用方法を示します。

```typescript
export class TreeGridBatchEditingSampleComponent {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;

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
}
```




> [!NOTE]
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、`Tree Grid` は編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) を呼び出すことです。


`Tree Grid` 内の親ノードの削除にはいくつかの特徴があります。階層データを使用している場合、親を削除すると子も削除されます。フラットデータを使用している場合、`Tree Grid` の [`cascadeOnDelete`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#cascadeOnDelete) プロパティを使用して必要な動作を設定できます。このプロパティは、親が削除されたときに子レコードを削除するかどうかを示します (デフォルトでは true に設定されています)。


> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable) プロパティを無効にすると `Tree Grid` を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。


## API リファレンス



- [HierarchicalTransactionService]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html)
- [rowEditable]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable)
- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)



## その他のリソース

- [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
- [Tree Grid 概要](tree-grid.md)
- [Tree Grid 編集](editing.md)
- [Tree Grid 行編集](row-editing.md)
- [Tree Grid 行追加](row-adding.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)