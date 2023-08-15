---
title: テーマ ライブラリの構成
_description: Ignite UI for Angular テーマは、テーマ エンジンの動作を構成できるいくつかのグローバル変数を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular Theming
_language: ja
---

# 構成

<div class="highlight">Ignite UI for Angular テーマ ライブラリは、テーマ エンジンの動作を構成できるいくつかの入力引数変数を公開します。</div>
<div class="divider"></div>

## レガシーのサポート

Ignite UI for Angular の開発は、Internet Explorer 11 がまだ関連していた 2016 年に始まりました。一部のユーザーはまだ IE11 に依存しています。私たちのテーマ エンジンは、同じ API を使用して、エバーグリーンのブラウザと古いブラウザのスタイルを同じように作成できるように構築されています。単一のグローバル変数 `$igx-legacy-support` に基づいて、エンジンの動作を構成できます。デフォルトでは `false` に設定されていますが、宣言をシャドウすることができます。この変数の値は、`theme` ミックスインで `$legacy-support` パラメーターを指定するときにも暗黙的に設定されます。

> [!WARNING]
> `$legacy-support` オプションは igniteui-angular 13.0.x で削除されました。IE11 およびレガシー ブラウザーのサポートはバージョン 13 で削除され、このオプションは無効になりました。

例:

```scss
// グローバルな $igx-legacy-support 変数を true に設定します
@include theme(
  $legacy-support: true
);
```

これは、`styles.scss` ファイルで作成しているテーマのレガシー サポートをオフにするデフォルトの方法です。`app.component.scss` ファイルなど、特定のコンポーネントにスコープされたスタイルがある場合は、そこでもレガシー サポートを指定する必要があります。

```scss
// app.component.scss
$igx-legacy-support: true;

$color: color($light-material-palette, 'primary', 900);
```

すべてのグローバル構成変数を格納するプロジェクトの `styles` ディレクトリに `_variables.scss` ファイルを作成することをお勧めします。このようにして、すべてのスタイル ファイルに構成をインポートするだけです。

## グローバル変数

メインのテーマ モジュールで転送されるグローバル Sass 変数のリストは以下のとおりです。

| 変数名 | 説明                                                                 |
|:-------------:|:---------------------------------------------------------------------------:|
| `$components` | すべてのコンポーネント テーマのレジスタを格納します。tree-shaking に使用されます。            |
| `$dropped-themes`  | ドロップされたテーマのレジスタを格納します。tree-shaking に使用されます。  |

## スクロールバーのスタイル設定

Ignite UI for Angular テーマには、アプリケーション内のすべてのスクロールバーの幅や色を変更できるカスタム スクロールバー スタイルが付属しています。含まれているスタイルを適用するには、ルート アプリ コンポーネントを含む要素に `ig-scrollbar` クラスを設定してください。

スクロールバーをさらにカスタマイズするには、既存の [`scrollbar-theme`]({environment:sassApiUrl}/index.html#function-scrollbar-theme) を拡張し、`$schema`、`$thumb-background`、`$track-background`、および `$scrollbar-size` パラメーターを受け入れる新しいテーマを作成できます。

```scss
// app.component.scss
$my-scrollbar-theme: scrollbar-theme($thumb-background: black, $track-background: gray);

@include scrollbar($my-scrollbar-theme);
```
パラメーターをスクロールバー関数に直接適用して、追加のテーマの作成を防ぐこともできます。
```scss
// app.component.scss
@include scrollbar(scrollbar-theme($scrollbar-size: 16px));
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
