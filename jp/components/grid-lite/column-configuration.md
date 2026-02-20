---
title: Angular Grid Lite 列の構成 | Ignite UI for Angular | MIT ライセンス
_description: Grid Lite 列の構成と列のプロパティ。オープン ソースの Angular Grid Lite をお試しください。軽量でありながら、必要な機能がすべて搭載されています。
_keywords: 列の構成, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# 列の構成

列は、グリッド内の列子コンポーネントを使用して宣言的に定義されます。`field` プロパティは、列識別子として機能するため、列に必須の唯一のプロパティです。グリッド行内の関連データをマッピングしてレンダリングするためにも使用されます。

```html
<igc-grid-lite [data]="data">
  <igc-grid-lite-column
    field="account"
    header="Account Number"
    ...
  ></igc-grid-lite-column>
  <!-- Additional columns -->
</igc-grid-lite>
```

## データ ソースに基づく設定

グリッドは、`autoGenerate` が true に設定されている場合、提供されたデータ ソースに基づいて列の構成を推測することをサポートします。データ内のレコードに基づいて、適切な `field` および `dataType` プロパティを推測しようとします。

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```

```html
<igc-grid-lite auto-generate [data]="data"></igc-grid-lite>
```

前のスニペットでは、グリッドは次と同等の列を自動的に作成します:

```html
<igc-grid-lite [data]="data">
  <igc-grid-lite-column field="entryId" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="source" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="ts" data-type="number"></igc-grid-lite-column>
</igc-grid-lite>
```

追加のカスタマイズを行わずに一部のデータをすばやくレンダリングする場合に便利です。

>[!NOTE]
>これはグリッドが初めて DOM に追加されたときに一度だけ実行されます。空のデータ ソースを渡すか、遅延バインドされたデータ ソース (HTTP リクエストなど) を使用すると、通常列設定は空になります。既存の列設定が存在する場合、このプロパティは無視されます。データ ソースに基づいて列構成を自動生成する方法の詳細については、[データ バインディング](./binding.md)のトピックを参照してください。

## 追加の列設定

列は、さらにいくつかのプロパティを公開します。

### 列の幅

デフォルトでは列幅は `minmax(136px, 1fr)` で、最小 136px、最大は Grid Lite の利用可能幅の 1 単位です。この方法により、列は流動的でレスポンシブになり、グリッド幅の変更に対応できます。

列の幅を変更するには、列の `width` プロパティを使用します。

```html
<igc-grid-lite-column field="price" width="250px"></igc-grid-lite-column>
```

このプロパティは<a href="https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#数値、長さ、パーセント値" target="_blank">有効な CSS 長さ単位</a>を受け入れます.

### 列の非表示

列の `hidden` プロパティを設定することで、列を非表示/表示できます。

```html
<igc-grid-lite-column field="price" hidden></igc-grid-lite-column>
```

### 列のリサイズ

Grid Lite コンポーネントの各列は、列要素の `resizable` プロパティを設定することで、サイズ変更可能に構成できます。

```html
<igc-grid-lite-column field="price" resizable></igc-grid-lite-column>
```

列がサイズ変更可能に設定されている場合、列ヘッダー右端をドラッグして幅を増減できます。リサイズ領域をダブルクリックすると、自動調整がトリガーされ、セルやヘッダーの最大コンテンツに合わせて幅が設定されます。

>[!NOTE]
>「流動的」幅 (fr、%、など) の列は、グリッドのリサイズ時に予期せぬ動作をする場合があります。アプリケーションのシナリオによっては、ユーザーがレイアウトのズレを経験しないように、「固定」単位を使用する方がよい場合があります。

以下のサンプルでは、さまざまな列プロパティと、それがレンダリングされたグリッドにどのように反映されるかを試すことができます。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-dynamic/" alt="Angular Grid Lite 列のダイナミック構成">
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