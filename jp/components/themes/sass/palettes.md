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

$melon-palette: palette(
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
        50: to-hsl(#e6eff8),
        '50-contrast': black,
        100: to-hsl(#bfd7f2),
        '100-contrast': black,
        200: to-hsl(#98bfec),
        '200-contrast': black,
        300: to-hsl(#85b5e9),
        '300-contrast': white,
        400: to-hsl(#73a6e4),
        '400-contrast': white,
        500: to-hsl(#6797de),
        '500-contrast': white,
        600: to-hsl(#3681dd),
        '600-contrast': white,
        700: to-hsl(#357fda),
        '700-contrast': white,
        800: to-hsl(#306dc8),
        '800-contrast': white,
        900: to-hsl(#284ea8),
        '900-contrast': white,
        'A100': to-hsl(#98bfec),
        'A100-contrast': white,
        'A200': to-hsl(#73a6e4),
        'A200-contrast': white,
        'A400': to-hsl(#3681dd),
        'A400-contrast': white,
        'A700': to-hsl(#284ea8),
        'A700-contrast': white
    ),
    secondary: (
        50: to-hsl(#fef7e2),
        '50-contrast': black,
        100: to-hsl(#fdeab7),
        '100-contrast': black,
        200: to-hsl(#fbdd89),
        '200-contrast': black,
        300: to-hsl(#fad15c),
        '300-contrast': black,
        400: to-hsl(#f9c63f),
        '400-contrast': black,
        500: to-hsl(#f7bd32),
        '500-contrast': white,
        600: to-hsl(#f6b02d),
        '600-contrast': white,
        700: to-hsl(#f49e2a),
        '700-contrast': white,
        800: to-hsl(#f38e28),
        '800-contrast': white,
        900: to-hsl(#f38e28),
        '900-contrast': white,
        'A100': to-hsl(#fbdd89),
        'A100-contrast': black,
        'A200': to-hsl(#f9c63f),
        'A200-contrast': black,
        'A400': to-hsl(#f6b02d),
        'A400-contrast': white,
        'A700': to-hsl(#f38e28),
        'A700-contrast': white
    ),
    grays: (
        50: to-hsl(#fff),
        '50-contrast': black,
        100: to-hsl(#fafafa),
        '100-contrast': black,
        200: to-hsl(#f5f5f5),
        '200-contrast': black,
        300: to-hsl(#f0f0f0),
        '300-contrast': black,
        400: to-hsl(#dedede),
        '400-contrast': black,
        500: to-hsl(#b3b2b2),
        '500-contrast': black,
        600: to-hsl(#979696),
        '600-contrast': white,
        700: to-hsl(#7b7a7a),
        '700-contrast': white,
        800: to-hsl(#404040),
        '800-contrast': white,
        900: to-hsl(#1a1a1a),
        '900-contrast': white
    ),
    info: (
        500: to-hsl(rgb(18, 118, 211)),
        '500-contrast': black
    ),
    success: (
        500: to-hsl(rgb(76, 184, 96)),
        '500-contrast': black
    ),
    warn: (
        500: to-hsl(rgb(251, 178, 60)),
        '500-contrast': black
    ),
    error: (
        500: to-hsl(rgb(255, 20, 75)),
        '500-contrast': black
    ),
    surface: (
        500: to-hsl(rgb(255, 255, 255)),
        '500-contrast': black
    )
);

:root {
    --igx-primary-a: 1;
    --igx-secondary-a: 1;
    --igx-info-a: 1;
    --igx-success-a: 1;
    --igx-warn-a: 1;
    --igx-error-a: 1;
    --igx-grays-a: 1;
    --igx-surface-a: 1;
}
```
<div class="divider"></div>

`to-hsl()` 関数は、色空間に関係なく色を受け取り、その色相、彩度、明度をカンマ区切りのリストで返します。このリストは、パレット内の各シェードの CSS 変数を宣言するときに使用されます。各パレット カラー (primary、secondary、grays など) の `alpha` 値は個別に初期化する必要があります。

## 事前定義されたパレット
事前定義されたライト パレットとダーク パレットを提供します。これをスキーマと一緒に使用して、コンポーネントのテーマを作成できます。

- ライト パレット
  - $light-material-palette
  - $light-fluent-excel-palette
  - $light-fluent-word-palette
  - $light-fluent-palette
  - $light-bootstrap-palette
  - $light-indigo-palette
- ダーク パレット
  - $dark-material-palette
  - $dark-fluent-excel-palette
  - $dark-fluent-word-palette
  - $dark-fluent-palette
  - $dark-bootstrap-palette
  - $dark-indigo-palette

また、使用できるいくつかの追加パレットも提供しています。

- 追加のライト パレット
  - $light-green-palette
  - $light-purple-palette
- 追加のダーク パレット
  - $dark-green-palette
  - $dark-purple-palette

すべてのライト パレットを選択したライト スキーマと組み合わせたり、またはその逆にすべてのダーク パレットをニーズとビジョンに最も一致すると思われるダーク スキーマと組み合わせたりできます。

## デフォルトのパレット
`theme` ミックスインは、引数の 1 つとしてパレット (前のセクションを参照) を使用します。渡されたパレットはグローバルな `$default-palette` 変数に割り当てられます。この変数に保存されたパレットは、パレットが必要であるがユーザーによって明示的に提供されない場合、Sass ライブラリ全体で代替パレットとして使用されます。

この知識を活用して、アプリケーション内の複数の Sass ドキュメントで同じパレットを再利用できます。

たとえば、以下の Sass ファイルをアプリに含めることができます。

```scss
// src/styles/_variables.scss

$my-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

$default-palette: $my-palette;
```

メインの styles ファイル:
```scss
// src/styles/styles.scss
@use 'variables' as *;

@include theme($palette: $my-palette);
```

コンポーネントの `.scss` ファイル:
```scss
@use '../styles/styles/variables' as *;

:host {
  background: color($variant: 900);
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

$my-color-palette: palette(
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
$my-primary-500: color();

// Get the primary 600 color variant from $default-palette
$my-primary-600: color($variant: 600);

// Get the secondary A700 color variant from $my-palette
$my-primary-A700: color($my-palette, 'secondary', 'A700');

// Get the warn color from $my-palette
$my-warning-color: color($my-palette, 'warn');

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
$my-primary-800: color($my-palette, 'primary', 600);
$my-primary-800-text:contrast-color($my-palette, 'primary', 600);

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
@include color-classes(
    $prop: 'background-color',
    $prefix: 'bg'
);
```
上記のコードは、パレットの各カラー バリアントに CSS クラスを生成します。たとえば、`primary` パレットの `500` カラー バリアントには、`.bg-primary-500` クラスが与えられます。

```html
<div class="bg-primary-500">...</div>
```

<div class="divider--half"></div>

## CSS 変数

ドキュメントの [CSS 変数](../palettes.md)セクションでカラー パレットについて読むと、すべてのパレット カラーが CSS 変数として含まれています。`theme` ミックスインを使用してテーマを生成するたびに内部で行います。`theme` は本体で `palette-vars` ミックスインを呼び出します。パレットを取得し、パレット内のカラーを CSS 変数に変換します。 

このパレットは、カスタム パレット カラーを CSS 変数として含める場合に使用します。

以下はその例です。

```scss
$my-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

@include palette-vars($my-palette);
```

## API リファレンス
* [パレット]({environment:sassApiUrl}/index.html#function-igx-palette)
* [パレット カラーの取得]({environment:sassApiUrl}/index.html#function-igx-color)
* [コントラスト カラーの取得]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [カラー クラスの生成]({environment:sassApiUrl}/index.html#mixin-color-classes)
* [スキーマ](./schemas.md)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
