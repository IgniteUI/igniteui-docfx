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
Ignite UI for Angular のコンテキストでのパレットは [Sass Maps](https://sass-lang.com/documentation/values/maps) として宣言され、マップのキーはパレットのカラー (`primary`、`secondary`、`surface` など) になります。各カラーはマップ自体であり、すべてのカラー バリエーションがキーとしてリストされます。これらのカラー バリエーションに割り当てられる値は、すべてのコンポーネント テーマで使用される実際のカラーです。すべてのパレット マップは、パレット関数によってプログラムで生成されます。関数は `primary`、` secondary`、`surface`、`gray`、`info`、` success`、`warn`、そして `error` のカラーの引数を受け付けます。`primary` のカラーが通常あなたのブランド カラーです。ほとんどの場合、igx-navbar コンポーネントなどの静的要素のスタイルを設定するために使用されます。`secondary` カラーは、ボタン、スイッチ、スライダーなどの操作可能な要素に使用されるカラーです。
`surface` カラーは、カード、メニュー、日付/時間ピッカー、バナー シートなどの一部のコンポーネントの背景色として使用されます。必要な引数は、`primary`、`secondary`、および `surface` カラーに関する引数のみです。`surface`、`gray`、`info`、`success`、`warn`、および `error` カラー引数のデフォルト値は定義済みのセットからの値です。

カラー パレットを作成するには、グローバル テーマの基本ファイルとなる _scss_ ファイルを作成します。_`_variables.scss`_ と呼びます。

```scss
// _variables.scss

$melon-palette: palette(
    $primary: #2ab759,
    $secondary: #f96a88,
    $surface: #e5e5e5
);
```

>[!WARNING]
> `$primary`、`$secondary`、`surface`、またはその他のカラーに渡す値は、**color タイプである必要があります**。CSS 変数は Sass ビルド時に解決できないため、引数として渡すことはできません。

すべてのカラー バリエーションを含むパレットを作成しました。各バリエーションには自動的に作成されたテキストのコントラスト カラーが含まれます。CSS 変数を使用したパレットに関するドキュメントをまだ読んでいない場合は、[こちら](../palettes.md)を参照してください。パレットのすべてのカラー バリエーションに関する情報が含まれています。

`palette` 関数は、ビルド時に `.scss` ドキュメントで再利用できるカラーを作成するために内部的に多くの機能を果たします。この関数は豊かなカラー マップを作成するという点で優れていますが、カラー バリエーションを生成するためのアルゴリズムは厳密であり、ニーズに完全に一致しない場合があります。コンポーネント テーマは、パレットの生成方法に関係なく、マップの形状のみに関係します。

パレットを手動で作成する場合、または関数を生成するパレットを作成する場合は、パレット マップを取得します。

```scss
$handmade-palette: (
    'primary': (
        '50': #e6eff8,
        '50-contrast': black,
        '100': #bfd7f2,
        '100-contrast': black,
        '200': #98bfec,
        '200-contrast': black,
        '300': #85b5e9,
        '300-contrast': white,
        '400': #73a6e4,
        '400-contrast': white,
        '500': #6797de,
        '500-contrast': white,
        '600': #3681dd,
        '600-contrast': white,
        '700': #357fda,
        '700-contrast': white,
        '800': #306dc8,
        '800-contrast': white,
        '900': #284ea8,
        '900-contrast': white,
        'A100': #98bfec,
        'A100-contrast': white,
        'A200': #73a6e4,
        'A200-contrast': white,
        'A400': #3681dd,
        'A400-contrast': white,
        'A700': #284ea8,
        'A700-contrast': white
    ),
    'secondary': (
        '50': #fef7e2,
        '50-contrast': black,
        '100': #fdeab7,
        '100-contrast': black,
        '200': #fbdd89,
        '200-contrast': black,
        '300': #fad15c,
        '300-contrast': black,
        '400': #f9c63f,
        '400-contrast': black,
        '500': #f7bd32,
        '500-contrast': white,
        '600': #f6b02d,
        '600-contrast': white,
        '700': #f49e2a,
        '700-contrast': white,
        '800': #f38e28,
        '800-contrast': white,
        '900': #f38e28,
        '900-contrast': white,
        'A100': #fbdd89,
        'A100-contrast': black,
        'A200': #f9c63f,
        'A200-contrast': black,
        'A400': #f6b02d,
        'A400-contrast': white,
        'A700': #f38e28,
        'A700-contrast': white
    ),
    'gray': (
        '50': #fff,
        '50-contrast': black,
        '100': #fafafa,
        '100-contrast': black,
        '200': #f5f5f5,
        '200-contrast': black,
        '300': #f0f0f0,
        '300-contrast': black,
        '400': #dedede,
        '400-contrast': black,
        '500': #b3b2b2,
        '500-contrast': black,
        '600': #979696,
        '600-contrast': white,
        '700': #7b7a7a,
        '700-contrast': white,
        '800': #404040,
        '800-contrast': white,
        '900': #1a1a1a,
        '900-contrast': white
    ),
    'info': (
        '500': rgb(18, 118, 211),
        '500-contrast': black
    ),
    'success': (
        '500': rgb(76, 184, 96),
        '500-contrast': black
    ),
    'warn': (
        '500': rgb(251, 178, 60),
        '500-contrast': black
    ),
    'error': (
        '500': rgb(255, 20, 75),
        '500-contrast': black
    ),
    'surface': (
        '500': rgb(255, 255, 255),
        '500-contrast': black
    )
);

```

>[!WARNING]
> マップ キーを文字列として明示的に引用符で囲んで設定することが重要です (例: `'primary'`、`'secondary'`、`'gray'`)。同じことがすべてのカラー バリエーションにも当てはまります (例: `500`、`500-contrast`)。

<div class="divider"></div>

## 事前定義されたパレット
事前定義されたライト パレットとダーク パレットを提供します。これをスキーマと一緒に使用して、コンポーネントのテーマを作成できます。

- ライト パレット
  - `$light-material-palette`
  - `$light-fluent-excel-palette`
  - `$light-fluent-word-palette`
  - `$light-fluent-palette`
  - `$light-bootstrap-palette`
  - `$light-indigo-palette`
- ダーク パレット
  - `$dark-material-palette`
  - `$dark-fluent-excel-palette`
  - `$dark-fluent-word-palette`
  - `$dark-fluent-palette`
  - `$dark-bootstrap-palette`
  - `$dark-indigo-palette`

すべてのライト パレットを選択したライト スキーマと組み合わせたり、またはその逆にすべてのダーク パレットをニーズとビジョンに最も一致すると思われるダーク スキーマと組み合わせたりできます。

## グレースケール カラー

`primary` と `secondary` パレットのように、グレーの色合いを生成するために使用される `palette` 関数のカラーを提供できます。`gray` パレットの生成に使用されるデフォルトのカラーは `#000` (`black`)。`gray` のカラー バリエーションは、コンポーネント全体のテキストのカラーを設定するために使用されます。値の変更は、アプリケーションの背景または表面のカラーを変更する場合に役立ちます。たとえば、アプリケーションで暗い背景を使用する場合、`gray` カラーを `white` に設定すると、すべてのテキストのカラーは `white` の色合いに基づいて強制されます。

グレーのの色合いに `white` を使用するパレットを生成するには:

```scss
// Import the Ignite UI themes library first
$company-color: #2ab759; /* Some green shade I like */
$secondary-color: #f96a88; /* Watermelon pink */
$surface-color: #e5e5e5 /* Light gray for backgrounds/ */
$grayscale-base: #fff; /* Used to generate shades of gray */

$my-color-palette: palette(
    $primary: $company-color,
    $secondary: $secondary-color,
    $surface: $surface-color,
    $gray: $grayscale-base
);
```

<div class="divider"></div>

## カラー バリエーション

`color` 関数を提供します。関数は 4 つの引数 (`palette`、`color`、`variant`、`opacity`) を受け取ります。

```scss
// Get the primary color as CSS variable reference to the 500 color variant
$my-primary-500: color();

// Get the primary color as CSS variable reference to the 600 color variant
$my-primary-600: color($variant: 600);

// Get the primary color as CSS variable reference to the 600 color variant with .5 opacity
$my-primary-600-opacity: color($variant: 600, $opacity: .5);

// Get the secondary A700 color variant as a HEX value from $my-palette
$my-primary-A700: color($my-palette, 'secondary', 'A700');

// Get the warn 500 color variant as HEX value from $my-palette
$my-warning-color: color($my-palette, 'warn');



.my-awesome-class {
    background: $my-primary-600;
    border-color: $my-primary-A700;
}

.warning-bg {
    background: $my-warning-color;
}
```

`$palette` 引数を省略すると、対応する CSS 変数バリエーションを参照する文字列が取得されます。`$color` および/または `$variant` を指定しない場合、それぞれ `primary` および `500` に割り当てられます。

<div class="divider"></div>

## コントラスト テキスト カラー

カラー バリエーションを取得する方法と同様に、関数 `contrast-color` を使用してパレット内の各カラー バリエーションのコントラスト テキスト カラーを取得する方法があります。この関数は、`color` 関数と同じタイプと数の引数を受け入れます。

```scss
$my-primary-800: color($my-palette, 'primary', 600);
$my-primary-800-text: contrast-color($my-palette, 'primary', 600);

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
- `$prefix` - 生成されたクラス名に連結するプレフィックス文字列。デフォルトは 'igx' です。
- `$suffix` - 生成されたクラス名に連結するサフィックス文字列。
- `$palette` - 使用しするパレット。

たとえば、要素に背景色を適用する CSS クラスを生成する場合、以下を実行できます:

```scss
@include color-classes(
    $prop: 'background-color',
    $prefix: 'bg'
);
```
上記のコードは、パレットの各カラー バリエーションに CSS クラスを生成します。たとえば、`primary` パレットの `500` カラー バリエーションには、`.bg-primary-500` クラスが与えられます。

```html
<div class="bg-primary-500">...</div>
```

<div class="divider--half"></div>

## CSS 変数

ドキュメントの [CSS 変数](../palettes.md)セクションでカラー パレットについて読むと、すべてのパレット カラーが CSS 変数として含まれています。`theme` ミックスインを使用してテーマを生成するたびに内部で行います。`theme` は本体で `palette` ミックスインを呼び出します。パレットを取得し、パレット内のカラーを CSS 変数に変換します。

このパレットは、カスタム パレット カラーを CSS 変数として含める場合に使用します。

以下はその例です。

```scss
$my-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
  $surface: #e5e5e5
);

@include palette($my-palette);
```

## API リファレンス
* [パレット]({environment:sassApiUrl}/palettes#function-palette)
* [パレット カラーの取得]({environment:sassApiUrl}/palettes#function-color) 
* [コントラスト カラーの取得]({environment:sassApiUrl}/palettes#function-contrast-color)
* [カラー クラスの生成]({environment:sassApiUrl}/utilities#mixin-color-classes)
* [スキーマ](./schemas.md)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
