---
title: テーマ ライブラリの構成
_description: Ignite UI for Angular テーマは、テーマ エンジンの動作を構成できるいくつかのグローバル変数を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular Theming
_language: ja
---

# 構成

<div class="highlight">Ignite UI for Angular テーマ ライブラリは、テーマ エンジンの動作を構成できるいくつかのグローバル変数を提供します。</div>
<div class="divider"></div>

## レガシーのサポート

Ignite UI for Angular の開発は、Internet Explorer 11 がまだ関連していた 2016 年に始まりました。一部のユーザーはまだ IE11 に依存しています。私たちのテーマ エンジンは、同じ API を使用して、エバーグリーンのブラウザと古いブラウザのスタイルを同じように作成できるように構築されています。単一のグローバル変数 `$igx-legacy-support` に基づいて、エンジンの動作を構成できます。デフォルトでは `false` に設定されていますが、宣言をシャドウすることができます。この変数の値は、`igx-theme` ミックスインで `$legacy-support` パラメーターを指定するときにも暗黙的に設定されます。

例:

```scss
// styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';

// Sets the global $igx-legacy-support variable to true
@include igx-theme(
  $legacy-support: true
);
```

これは、`styles.scss` ファイルで作成しているテーマのレガシー サポートをオフにするデフォルトの方法です。`app.component.scss` ファイルなど、特定のコンポーネントにスコープされたスタイルがある場合は、そこでもレガシー サポートを指定する必要があります。

```scss
// app.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';

$igx-legacy-support: true;

$color: igx-color($default-palette, 'primary', 900);
```

すべてのグローバル構成変数を格納するプロジェクトの `styles` ディレクトリに `_variables.scss` ファイルを作成することをお勧めします。このようにして、すべてのスタイル ファイルに構成をインポートするだけです。

## デフォルト パレット

もう 1 つのグローバル変数は `$default-palette` です。`$igx-legacy-support` と同様に、パレットを `igx-theme` ミックスインに渡すと暗黙的に設定されます。この変数は、パレットが明示的に提供されていない場合に、テーマ関数とミックスインによってデフォルトで使用されるパレットを設定します。

たとえば、`igx-color` 関数は特定のパレットで呼び出されない場合があります。その場合、`$default-palette` に割り当てられた値がカラーを取得するために使用されます。

デフォルトのパレットは、その宣言をシャドウイングすることでいつでも変更できます。

```scss
// styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';

$my-palette: igx-palette(
  $primary: red, 
  $secondary: blue
);

// Sets the global $default-palette variable 
// the value stored in $my-palette
@include igx-theme(
  $palette: $my-palette
);
```

これで、`$my-palette` を `$default-palette` に割り当てて、`_variables.scss` ファイルに保存できます。次に、`$default-palette` または `$my-palette` のいずれかをテーマ ミックスインに渡します。

```scss
// _variables.scss

$legacy-support: true;

$my-palette: igx-palette(
  $primary: red, 
  $secondary: blue
);

$default-palette: $my-palette;
$igx-legacy-support: $legacy-support;
```

```scss
// styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@import './variables';

@include igx-theme(
  $palette: $my-palette,
  $legacy-support: $legacy-support
);
```

## 方向

`$igx-legacy-support` や `$default-palette` と同様に、生成されたスタイルの方向 (left-to-right と right-to-left) を変更できます。グローバル `$direction` 変数を設定することにより、デフォルトの方向を LTR から RTL に変更できます。


```scss
// _variables.scss
//...

$direction: rtl;
```

`igx-core` ミックスインで指定することにより、グローバル テーマの方向を設定できます。

```scss
// styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@import './variables';

@include igx-core(
  $direction: $direction
);
```

## グローバル変数

Angular が `node-sass` のサポートを終了するとすぐに、Sass モジュールに切り替えます。それまでの間、依存しているグローバル変数がいくつかあります。Sass ファイルでそれらを上書きしないように注意してください。

これらの変数のリストは次のとおりです。

| 変数名 | 説明                                                                 |
|:-------------:|:---------------------------------------------------------------------------:|
| `$components` | すべてのコンポーネント テーマのレジスタを格納します。tree-shaking に使用されます。            |
| `$keyframes`  | すべてのキーフレーム アニメーション ミックスインのレジスタを格納します。tree-shaking に使用されます。  |


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
