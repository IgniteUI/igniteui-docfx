---
title: Angular Grid Lite 列の構成 | Ignite UI for Angular | MIT ライセンス
_description: Grid Lite 列の構成と列のプロパティ。オープンソースの Angular Grid Lite をお試しください。軽量でありながら、必要な機能がすべて搭載されています。
_keywords: 列の構成, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# 列の構成

列は **`columns`** プロパティで定義され、タイプは **`ColumnConfiguration<T>[]`** です。**`key`** は、列識別子として **`ColumnConfiguration<T>`** に唯一必要なプロパティです。グリッド行内の関連データをマッピングしてレンダリングするためにも使用されます。

```typescript
const accountColumn: ColumnConfiguration<T> = {
  key: 'account',

  /* 追加の構成が続きます */
  ...
};
```

>[!NOTE]
>原則として、**Column** プロパティはレンダリング間で同じ参照を保持すべきです。列は定義として扱われ、グリッドのマウント後に変更するのは明示的に必要な場合のみが推奨されます。不要な変更を行うと、幅やレンダラーなどの状態が失われたり、追加のレンダー サイクルが発生してパフォーマンス低下につながる可能性があります。使用する技術スタックに応じて、配列を適切なレンダリング関数の外で作成するか、メモ化してください。

## データ ソースに基づく設定

グリッドは提供されたデータ ソースに基づき、列設定を推測できます。データ レコードに基づき適切な  **`key`** と **`type`** プロパティを推測します。

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```

```xml
<igc-grid-lite auto-generate .data=${data}></igc-grid-lite>
```

前のスニペットを実行すると、グリッドの列構成は次のようになります:

```typescript
[
  { key: 'entryId', type: 'string' },
  { key: 'source', type: 'string' },
  { key: 'ts', type: 'number' },
];
```

追加のカスタマイズを行わずに一部のデータをすばやくレンダリングする場合に便利です。

>[!NOTE]
>これはグリッドが初めて DOM に追加されたときに一度だけ実行されます。空のデータ ソースを渡すか、遅延バインドされたデータ ソース (HTTP リクエストなど) を使用すると、通常列設定は空になります。既存の列設定が存在する場合、このプロパティは無視されます。データ ソースに基づいて列構成を自動生成する方法の詳細については、[データ バインディング](./binding.md)のトピックを参照してください。

## 追加の列設定

列構成オブジェクトは、さらにいくつかのプロパティを公開します。

### 列の幅

デフォルトでは列幅は `minmax(136px, 1fr)` で、最小 136px、最大は Grid Lite の利用可能幅の 1 単位です。この方法により、列は流動的でレスポンシブになり、グリッド幅の変更に対応できます。

列の幅を変更するには、**`ColumnConfiguration`** オブジェクトの **`width`** プロパティを使用します。

```typescript
{
  ...
  width: '250px'
}
```

このプロパティは<a href="https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#数値、長さ、パーセント値" target="_blank">有効な CSS 長さ単位</a>を受け入れます.

### 列の非表示

列を非表示/表示するには、列構成オブジェクトの **hidden** プロパティを設定します。

```typescript
{
  ...,
  hidden: true
}
```

### Column Resize

Grid Lite コンポーネントの各列は、列定義で **`resizable`** プロパティを設定することでサイズ変更可能にできます。

```typescript
{
  ...
  resizable: true
}
```

列がサイズ変更可能に設定されている場合、列ヘッダー右端をドラッグして幅を増減できます。リサイズ領域をダブルクリックすると、自動調整がトリガーされ、セルやヘッダーの最大コンテンツに合わせて幅が設定されます。

>[!NOTE]
>「流動的」幅 (fr、%、など) の列は、グリッドのリサイズ時に予期せぬ動作をする場合があります。アプリケーションのシナリオによっては、ユーザーがレイアウトのズレを経験しないように、「固定」単位を使用する方がよい場合があります。

以下のサンプルでは、さまざまな列プロパティと、それがレンダリングされたグリッドにどのように反映されるかを試すことができます。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-dynamic" alt="Angular Grid Lite 列のダイナミック構成">
</code-view>

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [データ バインディング](binding.md)
- [ソート](sorting.md)
- [フィルタリング](filtering.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)