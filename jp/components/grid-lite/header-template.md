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
<igx-grid-lite-column field="price" header="Price per item"></igx-grid-lite-column>
```

>[!NOTE]
>ヘッダー テンプレートが提供されている場合、`header` は無視されます。
## ヘッダー テンプレートによるカスタマイズ

セル テンプレートと同様に、カスタム テンプレート レンダラーを渡して、列ヘッダー内に独自の DOM を作成できます。

```typescript
// そのためのディレクティブをインポートします -> IgxGridLiteHeaderTemplateDirective
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteHeaderTemplateDirective } from 'igniteui-angular/grids/lite';

// そのためのディレクティブをインポートします
 imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective, // セルをテンプレート化するため
    IgxGridLiteHeaderTemplateDirective // ヘッダーをテンプレート化するため
],
```

```html
<igx-grid-lite-column field="rating" dataType="number">
    <!-- ヘッダーをテンプレート化するための igxGridLiteHeader ディレクティブ -->
    <ng-template igxGridLiteHeader let-value>
        <h3>⭐ Rating ⭐</h3>
    </ng-template>

    <!-- セルをテンプレート化するための igxGridLiteCell ディレクティブ -->
    <ng-template igxGridLiteCell let-value>
        <igc-rating [value]="value" readonly step="0.01" min="0" max="5">
        </igc-rating>
    </ng-template>
</igx-grid-lite-column>
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
