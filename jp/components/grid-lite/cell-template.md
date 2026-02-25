---
title: Angular Grid Lite セル テンプレート | Ignite UI for Angular | MIT ライセンス
_description: カスタム Grid Lite セル レンダラーを構成およびカスタマイズします。オープン ソースの Angular Grid Lite を使用してアプリを作成できます。今すぐお試しください。
_keywords: セル テンプレート, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# 列セル テンプレート

デフォルトでは、グリッドは列のフィールドを使用してセル内の値を文字列としてレンダリングします。これは基本的なシナリオでは問題ありませんが、レンダリングされる出力をカスタマイズしたい場合や、最終的な出力が異なるデータ フィールドの組み合わせである場合は、セル テンプレートをカスタマイズできます。

列の `cellTemplate` プロパティを設定することで、これを実現できます。

```typescript
protected cellTemplate(params: IgcCellContext<T, K>) {
    // テンプレートの結果を返す
}
```

```html
<igc-grid-lite>
    <igc-grid-lite-column field="price" [cellTemplate]="cellTemplate"></igc-grid-lite-column>
</igc-grid-lite>
```

## フォーマッタ関数として使用する

簡単なシナリオでは、必要に応じてフォーマット済みの値を返すだけで済みます。以下は数値をロケール通貨形式で表示する例です。

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

/** 値 `value = 123456.789` に対してカスタム通貨形式を返します。 */
protected cellTemplate = (params) => asCurrency(params.value); // => "€123,456.79"
```

データ ソース内の異なるフィールドの値を組み合わせることも可能です。
<!-- TODO: 
Refer to the API documentation for **`GridLiteCellContext`** for more information. -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

/** 価格が 99.99 の品目 10 個の注文に対してカスタム通貨形式を返します。 */
protected cellTemplate = ({value, row}) => asCurrency(value * row.data.count); // => "€999.90"
```

```html
<igc-grid-lite>
    <igc-grid-lite-column field="price" [cellTemplate]="cellTemplate"></igc-grid-lite-column>
</igc-grid-lite>
```

## カスタム DOM テンプレート

**`cellTemplate`** プロパティを値フォーマッタとして使用する以外に、独自の DOM テンプレートを作成することもできます。これはセルコンテナー内にレンダリングされます。

<a href="https://lit.dev/" target="_blank">Lit</a> の機能と<a href="https://lit.dev/docs/templates/expressions/" target="_blank">タグ付きテンプレート構文</a>を再利用して宣言的な DOM フラグメントを作成しています。

標準の DOM 要素だけでなく、他のライブラリの Web コンポーネントもテンプレート化できます。

```typescript
// Lit パッケージから `html` タグ関数をインポートします。
import { html } from "lit";

// グリッド内の `rating` 値を表すために別の Web コンポーネントを使用します。
protected cellTemplate = ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`;
```

```html
<igc-grid-lite>
    <igc-grid-lite-column field="rating" [cellTemplate]="cellTemplate"></igc-grid-lite-column>
</igc-grid-lite>
```

>[!NOTE]
>テンプレートが複雑であればあるほど、パフォーマンス コストが増加します。パフォーマンスが重要な場合は複雑な DOM 構造を避けてください。

## セル コンテキスト オブジェクト

カスタム セル レンダラーには **`GridLiteCellContext`** オブジェクトがパラメータｖとして渡され、以下のプロパティを持ちます。

```typescript
/**
 * 行セル テンプレート コールバックのコンテキスト オブジェクトです。
 */
export interface GridLiteCellContext<
  T extends object,
  K extends Keys<T> = Keys<T>
> {
  /**
   * テンプレートのセル要素の親要素です。
   */
  parent: GridLiteCell<T>;
  /**
   * セルを含む行要素です。
   */
  row: GridLiteRow<T>;
  /**
   * この列の現在の構成です。
   */
  column: ColumnConfiguration<T, K>;
  /**
   * このセルに対するデータ ソースの値です。
   */
  value: PropertyType<T, K>;
}
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-simple/" alt="Angular Grid Lite 列の基本構成">
</code-view>

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [ソート](sorting.md)
- [フィルタリング](filtering.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
