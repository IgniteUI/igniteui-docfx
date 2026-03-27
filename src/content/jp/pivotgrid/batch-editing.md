---
title: Angular Pivot Grid Grid での一括編集とトランザクション - インフラジスティックス
_description: Angular Pivot Grid Grid を使用した Angular CRUD を使用して、基のデータに影響を与えずにデータを操作できます。デモと例をお試しください。
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
_language: ja
---

# Angular Pivot Grid 一括編集とトランザクション






以下は、Pivot Grid コンポーネントに対して一括編集を有効にする方法の詳細な例です。

## Angular Pivot Grid 一括編集とトランザクションの例

以下のサンプルは、pivotGrid にプロバイダーのトランザクションがあり、[`batchEditing`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#batchEditing) と行編集が有効にされています。行編集全体を確定後にトランザクションが追加されるようにします。





> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

`IgxPivotGridModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxPivotGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxPivotGridModule],
    ...
})
export class AppModule {}
```

次に、Pivot Grid から `batchEditing` を有効にします。

```html
<igx-pivot-grid [data]="data" [batchEditing]="true">
  ...
</igx-pivot-grid>
```

これにより、igx-pivot-grid に `Transaction` サービスの適切なインスタンスが提供されます。適切な `TransactionService` は `TransactionFactory` を通じて提供されます。この内部実装の詳細については、[トランザクション トピック](../transaction-classes.md#トランザクション-ファクトリ)を参照してください。

一括編集を有効にした後、バインドされたデータ ソースと [`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) を true に設定して `IgxPivotGrid` を定義し、バインドします。









> [!NOTE]
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、`Pivot Grid` は編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) を呼び出すことです。



> [!NOTE]
> [`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) プロパティを無効にすると `Pivot Grid` を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。


## API リファレンス





## その他のリソース

- [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
- [Pivot Grid 概要](pivot-grid.md)
- [Pivot Grid 編集](editing.md)
- [Pivot Grid 行編集](row-editing.md)
- [Pivot Grid 行追加](row-adding.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)