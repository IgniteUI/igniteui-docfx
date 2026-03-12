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

これを実現するには、コンテンツをテンプレート化する列の `<igx-grid-lite-column>...</igx-grid-lite-column>` 内で **`<ng-template>`** を使用します。

```html
<igx-grid-lite-column field="avatar" header="Avatar">
    <ng-template igxGridLiteCell let-value>
        <igx-avatar shape="circle" alt="User avatar" [src]="value">
        </igx-avatar>
    </ng-template>
</igx-grid-lite-column>
```

**`IgxGridLiteCellTemplateDirective`** をインポートする必要もあります。

```typescript
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';
```

それを `imports` 配列に追加します。

```typescript
imports: [ IgxGridLiteCellTemplateDirective ]
```

## フォーマッタ関数として使用する

簡単なシナリオでは、必要に応じてフォーマット済みの値を返すだけで済みます。以下は数値をロケール通貨形式で表示する例です。

```typescript
public formatter = new Intl.NumberFormat('en-150', {
  style: 'currency',
  currency: 'EUR'
});

/** 値 `value = 123456.789` に対してカスタム通貨形式を返します。 */
protected formatCurrency = (value: number) => {
  return this.formatter.format(value); // => "€123,456.79"
};
```

データ ソース内の異なるフィールドの値を組み合わせることも可能です。
<!-- TODO: 
Refer to the API documentation for **`GridLiteCellContext`** for more information. -->

```typescript
public formatter = new Intl.NumberFormat('en-150', {
  style: 'currency',
  currency: 'EUR'
});

/** 製品から得た合計金額をカスタム通貨で返します。 */
protected formatCurrency = (value: number, unitsSold: number) => {
  return this.formatter.format(value * unitsSold);
};
```

```html
<igx-grid-lite-column field="price" header="Price" dataType="number">
    <ng-template igxGridLiteCell let-value let-row="row">
        {{formatCurrency(value, row.data.sold)}}
    </ng-template>
</igx-grid-lite-column>
```

## カスタム DOM テンプレート

**`<ng-template>`** 内で **`igniteui-angular`** のコンポーネントを使用する以外にも、セル コンテナー内にレンダリングされる独自の DOM テンプレートを作成することもできます。

標準の DOM 要素だけでなく、他のライブラリの Web コンポーネントもテンプレート化できます。たとえば、次のコード スニペットでは、**`igniteui-webcomponents`** から提供される rating コンポーネントを使用しています。これを適切に使用するには、以下で説明するいくつかの手順を実行する必要があります。

```typescript
// カスタム テンプレート用の外部コンポーネントをインポートします
import {
    defineComponents,
    IgcRatingComponent
} from 'igniteui-webcomponents';

// サンプルで使用できるようにそれらを定義します
defineComponents(
    IgcRatingComponent
);
```

```html
<!-- テンプレートで Web Components の rating コンポーネントを使用します -->
<igx-grid-lite-column field="rating" header="Customer Rating" dataType="number">
    <ng-template igxGridLiteCell let-value>
        <igc-rating
            [value]="value"
            readonly
            min="0"
            max="5">
        </igc-rating>
    </ng-template>
</igx-grid-lite-column>
```

>[!NOTE]
>テンプレートが複雑であればあるほど、パフォーマンス コストが増加します。パフォーマンスが重要な場合は複雑な DOM 構造を避けてください。

## セル コンテキスト オブジェクト

カスタム セル レンダラーには **`GridLiteCellContext`** オブジェクトがパラメータｖとして渡され、以下のプロパティを持ちます。

```typescript
/**
 * 行セル テンプレート コールバックのコンテキスト オブジェクトです。
 */
export interface IgxGridLiteCellTemplateContext<T extends object> {
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
  
  $implicit: PropertyType<T, K>;
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
