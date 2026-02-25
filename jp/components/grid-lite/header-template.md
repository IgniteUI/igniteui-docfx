---
title: Angular Grid Lite ヘッダー テンプレート | Ignite UI for Angular | MIT ライセンス
_description: カスタム Grid Lite 列ヘッダー レンダラーを構成およびカスタマイズします。オープン ソースの Angular Grid Lite を使用してアプリケーションを構築できます。今すぐお試しください。
_keywords: ヘッダー テンプレート, {Platform}, {ComponentKeywords}, {ProductName}, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# 列ヘッダーのカスタマイズ

セル テンプレートと同様に、列ヘッダーも目的のユース ケースに合わせてカスタマイズできます。`header`プロパティを通じてテキスト ラベルを渡したり、本格的なカスタム テンプレートを提供したりできます。

## ヘッダー テキストによるカスタマイズ

デフォルトでは、列はラベル テキストに `field` プロパティを使用します。ラベルをカスタマイズするには、`header` プロパティをより人間に読みやすい形式に設定します。

```html
<igc-grid-lite-column field="price" header="Price per item"></igc-grid-lite-column>
```

>[!NOTE]
>`headerTemplate` が指定されている場合、`header` は無視されます。

## ヘッダー テンプレートによるカスタマイズ

セル テンプレートと同様に、カスタム テンプレート レンダラーを渡して、列ヘッダー内に独自の DOM を作成できます。

```typescript
import { html } from 'lit';

protected headerTemplate(_params: IgcHeaderContext<T>) {
    return html`<h3>⭐ Rating ⭐</h3>`;
}
```

```html
<igc-grid-lite>
    <igc-grid-lite-column field="rating" [headerTemplate]="headerTemplate"></igc-grid-lite-column>
</igc-grid-lite>
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-headers/" alt="Angular Grid Lite 列構成ヘッダー">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [セル テンプレート](cell-template.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
