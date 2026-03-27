---
title: Angular Hierarchical Grid Grid での一括編集とトランザクション - インフラジスティックス
_description: Angular Hierarchical Grid Grid を使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。デモと例をお試しください。
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
_language: ja
---

# Angular Hierarchical Grid 一括編集とトランザクション


IgxHierarchicalGrid の一括編集機能は、[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) に基づいています。[`トランザクション サービス クラス階層`](../transaction-classes.md)トピックに従って、`igxTransactionService` の概要と、その実装方法の詳細を確認してください。





[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) を [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) と一緒に使用し、アイランドごとに個別のトランザクション ログを蓄積するには、代わりにサービス ファクトリを提供する必要があります。[`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory) として使用できるようになります。


以下は、Hierarchical Grid コンポーネントに対して一括編集を有効にする方法の詳細な例です。

## Angular Hierarchical Grid 一括編集とトランザクションの例

以下のサンプルは、hierarchicalGrid にプロバイダーのトランザクションがあり、[`batchEditing`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#batchEditing) と行編集が有効にされています。行編集全体を確定後にトランザクションが追加されるようにします。




<code-view style="height:680px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing/" alt="Angular Hierarchical Grid 一括編集とトランザクションの例">
</code-view>

<div class="divider--half"></div>


> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

`IgxHierarchicalGridModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...
})
export class AppModule {}
```

次に、Hierarchical Grid から `batchEditing` を有効にします。

```html
<igx-hierarchical-grid [data]="data" [batchEditing]="true">
  ...
</igx-hierarchical-grid>
```

これにより、igx-hierarchical-grid に `Transaction` サービスの適切なインスタンスが提供されます。適切な `TransactionService` は `TransactionFactory` を通じて提供されます。この内部実装の詳細については、[トランザクション トピック](../transaction-classes.md#トランザクション-ファクトリ)を参照してください。

一括編集を有効にした後、バインドされたデータ ソースと [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable) を true に設定して `IgxHierarchicalGrid` を定義し、バインドします。





```html
<igx-hierarchical-grid #hierarchicalGrid [batchEditing]="true" [data]="data" [primaryKey]="'Artist'"
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
...
<div class="buttons-row">
    <div class="buttons-wrapper">
        <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
        <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
    </div>
</div>
...

```






以下のコード例は、[`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API (undo、redo、commit) の使用方法を示します。

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    public undo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: any) {
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



> [!NOTE]
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、`Hierarchical Grid` は編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) を呼び出すことです。



> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable) プロパティを無効にすると `Hierarchical Grid` を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。


## API リファレンス




- [igxHierarchicalTransactionServiceFactory]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory)


## その他のリソース

- [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
- [Hierarchical Grid 概要](hierarchical-grid.md)
- [Hierarchical Grid 編集](editing.md)
- [Hierarchical Grid 行編集](row-editing.md)
- [Hierarchical Grid 行追加](row-adding.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)