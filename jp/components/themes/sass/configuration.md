---
title: テーマ ライブラリの構成
_description: Ignite UI for Angular テーマは、テーマ エンジンの動作を構成できるいくつかのグローバル変数を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular Theming
_language: ja
---

# 構成

<div class="highlight">Ignite UI for Angular テーマ ライブラリは、テーマ エンジンの動作を構成できるいくつかの入力引数変数を公開します。</div>
<div class="divider"></div>

## グローバル変数

メインのテーマ モジュールで転送されるグローバル Sass 変数のリストは以下のとおりです。

| 変数名 | 説明                                                                 |
|:-------------:|:---------------------------------------------------------------------------:|
| `$components` | すべてのコンポーネント テーマのレジスタを格納します。tree-shaking に使用されます。            |
| `$dropped-themes`  | ドロップされたテーマのレジスタを格納します。tree-shaking に使用されます。  |

## スクロールバーのスタイル設定

Ignite UI for Angular テーマには、アプリケーション内のすべてのスクロールバーの幅や色を変更できるカスタム スクロールバー スタイルが付属しています。含まれているスタイルを適用するには、ルート アプリ コンポーネントを含む要素に `ig-scrollbar` クラスを設定してください。

スクロールバーをさらにカスタマイズするには、[`scrollbar-theme`]({environment:sassApiUrl}/index.html#function-scrollbar-theme) 関数を使用して新しいスクロールバー スタイルを作成します。この関数は、スクロールバーのスタイル変更に関する引数を受け入れます。スクロールバーのサイズ、カラー、境界線、最小高さなどをカスタマイズできます。

```scss
// app.component.scss
// Here we set the scrollbar to have size of 16px, scrollbar thumb to be in color pink, and scrolblar track to be in color green
$my-scrollbar-theme: scrollbar-theme($sb-size: 16px, $sb-thumb-bg-color: pink, $sb-track-bg-color: green);

// We use 'css-vars' mixin for generating the css variables with the new scrollbar values.
@include css-vars($my-scrollbar-theme);
```

<div class="divider"></div>

## その他のリソース
概念の学習:

* [パレット](./palettes.md)
* [タイポグラフィ](./typography.md)
* [エレベーション](./elevations.md)
* [スキーマ](./schemas.md)
* [アニメーション](./animations.md)

アプリケーション全体のテーマを作成する方法の詳細:
* [グローバル テーマ](./global-themes.md)

コンポーネント固有のテーマを作成する方法の詳細:
* [コンポーネント テーマ](./component-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
