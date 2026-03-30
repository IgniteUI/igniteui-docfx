---
title: Angular Grid Lite テーマ設定 | Ignite UI for Angular | MIT ライセンス
_description: Ignite UI for Angular で Grid Lite のスタイル設定は、容易かつ迅速に行えます。デモと例をお試しください。オープン ソース コンポーネントをお試しになり、次のアプリを構築してください。
_keywords: スタイル設定, テーマ設定, {Platform}, {ComponentKeywords}, {ProductName}, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# スタイルとテーマ

Grid Lite には、Bootstrap、Material、Fluent、Indigo の 4 つのテーマが用意されています。グリッドおよび UI コンポーネントにはテーマが組み込まれていますが、パレット、タイポグラフィ、その他のグローバル設定にはグローバル スタイルシートが必要です。

## 基本テーマの読み込み

プロジェクトのタイプ、セットアップ、ビルド構成に応じて、以下のいずれかのファイルを組み込む方法が異なります。フレームワーク/ビルドツールを使用している場合は、外部スタイルを出力バンドルに追加する方法についてドキュメントを参照してください。

原則として、`themes` フォルダーをアセット ディレクトリにコピーし、index.html からテーマをリンクするだけで構いません。

```html
<link rel="stylesheet" href="./assets/themes/light/bootstrap.css"
```

| テーマ     | バリアント | パス                                                           |
| --------- | ------- | -------------------------------------------------------------- |
| Bootstrap | Light   | node_modules/igniteui-webcomponents/themes/light/bootstrap.css |
| Bootstrap | Dark    | node_modules/igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material  | Light   | node_modules/igniteui-webcomponents/themes/light/material.css  |
| Material  | Dark    | node_modules/igniteui-webcomponents/themes/dark/material.css   |
| Fluent    | Light   | node_modules/igniteui-webcomponents/themes/light/fluent.css    |
| Fluent    | Dark    | node_modules/igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo    | Light   | node_modules/igniteui-webcomponents/themes/light/indigo.css    |
| Indigo    | Dark    | node_modules/igniteui-webcomponents/themes/dark/indigo.css     |

<!--
In the sample below, you can preview all the default base themes.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/styling-config-themes/" alt="Angular Grid Lite Styling Config Themes">
</code-view>

-->

## カスタム テーマの作成

`igniteui-grid-lite` パッケージに同梱のデフォルト テーマ以外に、プロジェクトのアイデンティティやブランディングに合わせて独自のテーマを作成・変更できます。

---

SCSS と CSS インターフェイスの両方のドキュメントと使用方法については、<a href="https://github.com/IgniteUI/igniteui-theming#readme" target="_blank">Ignite UI テーマ パッケージ</a> wiki を参照してください。


---

```scss
@use 'node_modules/igniteui-theming' as *;

// Our dark theme
$my_dark_palette: palette(
  $primary: #dab785,
  $secondary: #d5896f,
  $surface: #031d44,
  $gray: #04395e,
);

// Our light theme
$my-light-palette: palette(
  $primary: #c1292e,
  $secondary: #f1d302,
  $surface: #fdfffc,
  $gray: #235789,
);

.custom-light {
  @include palette($my_light_palette);
  @include typography('"Roboto Condensed", sans-serif', $bootstrap-type-scale);
}

.custom-dark {
  @include palette($my_dark_palette);
  @include typography('"Merriweather Sans", sans-serif', $bootstrap-type-scale);
}
```

以下は、上記のカスタム テーマの例です。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/styling-custom/" alt="Angular Grid Lite スタイル設定のカスタム テーマ">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`
-->

## その他のリソース

- [列の構成](column-configuration.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
