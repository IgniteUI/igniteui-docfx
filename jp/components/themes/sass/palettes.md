---
title: パレット
_description: 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# パレット
<p class="highlight">Ignite UI for Angular テーマ エンジンは、カラーを生成および取得するためのいくつかの関数とミックスインを提供します。</p>
<div class="divider"></div>

## 概要
Ignite UI for Angular のコンテキストでのパレットは [Sass Maps](https://sass-lang.com/documentation/values/maps) として宣言され、マップのキーはパレットのカラー (`primary`、`secondary`、`grays` など) になります。各カラーはマップ自体であり、すべてのカラー バリアントがキーとしてリストされます。これらのカラー バリアントに割り当てられる値は、すべてのコンポーネント テーマで使用される実際のカラーです。すべてのパレット マップは、パレット関数によってプログラムで生成されます。この関数は、`primary`、`secondary`、`grays`、`surface`、`info`、`success`、`warn`、および `error` カラーの引数を受け取ります。`primary` カラーは通常、ブランド カラーです。`igx-navbar` など、主に静的要素をスタイル設定するために使用されます。secondary カラーは、ボタン、スイッチ、スライダーなどの操作可能な要素で使用される secondary カラーです。必須の引数は、`primary` と `secondary` カラーの引数です。surface カラーは、カード、メニュー、日付/タイムピッカー、バナーシートなどのようないくつかのコンポーネントの '表面' にカラーを付けるために使われます。デフォルトでは、`surface`、`grays`、`info`、`success`、`warn`、`error` は、定義済みのカラーのセットです。

カラー パレットを作成するには、グローバル テーマの基本ファイルとなる _scss_ ファイルを作成します。_"_variables.scss"_ と呼びます。

```scss
// _variables.scss

// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$melon-palette: igx-palette(
    $primary: #2ab759,
    $secondary: #f96a88,
);
```

>[!WARNING]
> `$primary`、`$secondary`、またはその他のカラーに渡す値は、**color 型である必要があります**。CSS 変数は Sass ビルド時に解決できないため、引数として渡すことはできません。

すべてのカラー バリアントを含むパレットを作成しました。各バリアントには自動的に作成されたテキストのコントラスト カラーが含まれます。CSS 変数を使用したパレットに関するドキュメントをまだ読んでいない場合は、[こちら](../palettes.md)を参照してください。パレットのすべてのカラー バリアントに関する情報が含まれています。

`igx-palette` 関数は、ビルド時に `.scss` ドキュメントで再利用できるカラーを作成するために内部的に多くの機能を果たします。この関数は豊かなカラー マップを作成するという点で優れていますが、カラー バリアントを生成するためのアルゴリズムは厳密であり、ニーズに完全に一致しない場合があります。コンポーネント テーマは、パレットの生成方法に関係なく、マップの形状のみに関係します。

パレットを手動で作成する場合、または関数を生成するパレットを作成する場合は、パレット マップを取得します。

```scss
$handmade-palette: (
    primary: (
        50: #c0c0ff,
        '50-contrast': black,
        100: #a7a7fa,
        '100-contrast': black,
        200: #6d6df1,
        '200-contrast': black,
        300: #3c3cf2,
        '300-contrast': white,
        400: #1d1df7,
        '400-contrast': white,
        500: blue,
        '500-contrast': white,
        600: #0000e5,
        '600-contrast': white,
        700: #0000d2,
        '700-contrast': white,
        800: #0000be,
        '800-contrast': white,
        900: #0000a8,
        '900-contrast': white,
        'A100': #55f,
        'A100-contrast': white,
        'A200': #2727ff,
        'A200-contrast': white,
        'A400': #0000eb,
        'A400-contrast': white,
        'A700': #00a,
        'A700-contrast': white
    ),
    secondary: (
        50: #ffc0c0,
        '50-contrast': black,
        100: #faa7a7,
        '100-contrast': black,
        200: #f16d6d,
        '200-contrast': black,
        300: #f23c3c,
        '300-contrast': black,
        400: #f71d1d,
        '400-contrast': black,
        500: var(--some-dynamic-color),
        '500-contrast': black,
        600: #e50000,
        '600-contrast': white,
        700: #d20000,
        '700-contrast': white,
        800: #be0000,
        '800-contrast': white,
        900: #a80000,
        '900-contrast': white,
        'A100': #f55,
        'A100-contrast': black,
        'A200': #ff2727,
        'A200-contrast': black,
        'A400': #eb0000,
        'A400-contrast': white,
        'A700': #a00,
        'A700-contrast': white
    ),
    grays: (
        50: rgba(0, 0, 0, .02),
        '50-contrast': black,
        100: rgba(0, 0, 0, .04),
        '100-contrast': black,
        200: rgba(0, 0, 0, .08),
        '200-contrast': black,
        300: rgba(0, 0, 0, .12),
        '300-contrast': black,
        400: rgba(0, 0, 0, .26),
        '400-contrast': black,
        500: rgba(0, 0, 0, .38),
        '500-contrast': black,
        600: rgba(0, 0, 0, .54),
        '600-contrast': white,
        700: rgba(0, 0, 0, .62),
        '700-contrast': white,
        800: rgba(0, 0, 0, .74),
        '800-contrast': white,
        900: rgba(0, 0, 0, .87),
        '900-contrast': white
    ),
    info: (
        500: #1377d5,
        '500-contrast': black
    ),
    success: (
        500: #4eb862,
        '500-contrast': black
    ),
    warn: (
        500: #fbb13c,
        '500-contrast': black
    ),
    error: (
        500: #ff134a,
        '500-contrast': black
    ),
    surface: (
        500: #fff,
        '500-contrast': black
    )
);
```
<div class="divider"></div>

## デフォルトのパレット
`igx-theme` ミックスインは、引数の 1 つとしてパレット (前のセクションを参照) を使用します。渡されたパレットはグローバルな `$default-palette` 変数に割り当てられます。この変数に保存されたパレットは、パレットが必要であるがユーザーによって明示的に提供されない場合、Sass ライブラリ全体で代替パレットとして使用されます。

この知識を活用して、アプリケーション内の複数の Sass ドキュメントで同じパレットを再利用できます。

たとえば、以下の Sass ファイルをアプリに含めることができます。

```scss
// src/styles/_variables.scss

$my-palette: igx-palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

$default-palette: $my-palette;
```

メインの styles ファイル:
```scss
// src/styles/styles.scss
@import '~igniteui-angular/src/lib/core/styles/themes/index';
@import 'variables';

@include igx-theme($palette: $my-palette);
```

コンポーネントの `.scss` ファイル:
```scss
@import '../styles/styles/variables';

:host {
  background: igx-color($variant: 900);
}
```

これにより、`_variables.scss` ファイルで宣言された同じパレットがすべての Sass ファイルで使用されます。

## グレースケール カラー

`primary` と `secondary` パレットのように、グレーの色合いを生成するために使用される `igx-palette` 関数のカラーを提供できます。`grays` パレットの生成に使用されるデフォルトのカラーは `#000` (`black`)。`grays` のカラー バリアントは、コンポーネント全体のテキストのカラーを設定するために使用されます。値の変更は、アプリケーションの背景または表面のカラーを変更する場合に役立ちます。たとえば、アプリケーションで暗い背景を使用する場合、`grays` カラーを `white` に設定すると、すべてのテキストのカラーは `white` の色合いに基づいて強制されます。

グレーのの色合いに `white` を使用するパレットを生成するには:

```scss
// Import the Ignite UI themes library first
$company-color: #2ab759; /* Some green shade I like */
$secondary-color: #f96a88; /* Watermelon pink */
$grayscale-base: #fff; /* Used to generate shades of gray */

$my-color-palette: igx-palette(
    $primary: $company-color,
    $secondary: $secondary-color,
    $grays: $grayscale-base
);
```

<div class="divider"></div>

## カラー バリアント

`igx-color` 関数を提供します。関数は、`palette`、`color`、および `variant` の 3 つの引数を受け取ります。

```scss
// Get the primary 500 color variant from $default-palette
$my-primary-500: igx-color();

// Get the primary 600 color variant from $default-palette
$my-primary-600: igx-color($variant: 600);

// Get the secondary A700 color variant from $my-palette
$my-primary-A700: igx-color($my-palette, 'secondary', 'A700');

// Get the warn color from $my-palette
$my-warning-color: igx-color($my-palette, 'warn');

.my-awesome-class {
    background: $my-primary-600;
    border-color: $my-primary-A700;
}

.warning-bg {
    background: $my-warning-color;
}
```

`$palette` 引数を省略すると、`$default-palette` に保存されている値が使用されます。`$color` および/または `$variant` を指定しない場合、それぞれ `primary` および `500` に割り当てられます。

<div class="divider"></div>

## コントラスト テキスト カラー

カラー バリアントを取得する方法と同様に、パレットの各カラー バリアントのコントラスト テキスト カラーを取得する方法があります。

```scss
$my-primary-800: igx-color($my-palette, 'primary', 600);
$my-primary-800-text: igx-contrast-color($my-palette, 'primary', 600);

// sample usage
.my-awesome-article {
    color: $my-primary-800-text;
    background: $my-primary-800;
}
```

<div class="divider"></div>

## カラー クラス

CSS クラスを使用して Web 要素 (テキストや背景など) にカラーを適用する場合もあります。パレットの各カラーの CSS クラスを生成できるミックスインがあります。

ミックスインは、CSS クラス名とパレットのカラーを渡す CSS プロパティを制御できるいくつかの引数を取得します。

- `$prop` - カラーに割り当てられる CSS プロパティ。
- `$prefix` - 生成されたクラス名に連結するプレフィックス文字列。デフォルトは `igx` です。
- `$suffix` - 生成されたクラス名に連結するサフィックス文字列。
- `$palette` - 使用しするパレット。

たとえば、要素に背景色を適用する CSS クラスを生成する場合、以下を実行できます:

```scss
@include igx-color-classes(
    $prop: 'background-color',
    $prefix: 'bg'
);
```
上記のコードは、パレットの各カラー バリアントに CSS クラスを生成します。たとえば、 `primary` パレットの `500` カラー バリアントには、`.igx-primary-500-bg` クラスが与えられます。

```html
<div class="bg-primary-500">...</div>
```

<div class="divider--half"></div>

## CSS 変数

ドキュメントの [CSS 変数](../palettes.md)セクションでカラー パレットについて読むと、すべてのパレット カラーが CSS 変数として含まれています。`igx-theme` ミックスインを使用してテーマを生成するたびに内部で行います。`igx-theme` は本体で `igx-palette-vars` ミックスインを呼び出します。パレットを取得し、パレット内のカラーを CSS 変数に変換します。 

このパレットは、カスタム パレット カラーを CSS 変数として含める場合に使用します。

以下はその例です。

```scss
$my-palette: igx-palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

@include igx-palette-vars($my-palette);
```

## API リファレンス
* [パレット]({environment:sassApiUrl}/index.html#function-igx-palette)
* [パレット カラーの取得]({environment:sassApiUrl}/index.html#function-igx-color)
* [コントラスト カラーの取得]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [カラー クラスの生成]({environment:sassApiUrl}/index.html#mixin-igx-color-classes)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
