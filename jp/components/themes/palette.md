---
title: パレット
_description: 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

## パレット
<p class="highlight">Ignite UI for Angular テーマ エンジンは、色を生成および取得するためのいくつかの機能と mixins を提供します。</p>
<div class="divider"></div>

### 概要

パレットは `primary`、` secondary`、 `grays`、` surface`、 `info`、` success`、 `warn`、そして ` error` の色の引数を受け付けます。`primary` の色が通常あなたのブランド カラーです。ほとんどの場合、igx-navbar コンポーネントなどの静的要素のスタイルを設定するために使用されます。二次色は、ボタン、スイッチ、スライダーなどのように動作可能な要素に使用されるものです。唯一必要な引数は `primary` と `secondary` 色のものです。表面色は、カード、メニュー、日付/タイムピッカー、バナーシートなどのようないくつかのコンポーネントの '表面' に色を付けるために使われます。デフォルトでは、`surface`、`grays`、`info`、`success`、`warn`、`error` は、定義済みの色のセットです。

カラー パレットを作成するには、グローバル テーマの基本ファイルになる _scss_ ファイルを作成します。_"my-app-theme.scss"_ と名前付けます。

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$company-color: #2ab759; /* Some green shade I like */
$secondary-color: #f96a88; /* Watermelon pink */

$my-color-palette: igx-palette(
    $primary: $company-color,
    $secondary: $secondary-color
);
```

生成されたパレットには 43 色が含まれています。2 色のみを指定して 43 色が設定されました。次にその他の 41 色を決定する方法を示します。

重要な色の生成方法を更に詳しく説明します。`primary` および `secondary` 色を提供した後、その色の色合いおよびアクセント カラーを生成しました。パレットに `primary` および `secondary` 色のための 2 つのサブパレットが生成されます。各サブパレットには、原色に基づいた 13 色のバリエーションがあり、13 色中 5 色は原色より明るい色合いで、4 はより暗い色です。残りの 4 色は原色の「アクセント」バージョンで各パレットに原色を含む 14 色があります。

各サブパレットには非常に多くの色がありますが、サブパレットの各色に数値が割り当てられているため、それぞれの色を識別する方法はとても簡単です。原色に `500` を割り当てます。より明るい色合いは `50` ～ `400` です。より暗い色合いは `600` ～ `900` です。アクセント色は `A100`、`A200`、`A400`、および `A700` の文字列名があります。ここまでで色は 43 色中 28 色のみで、サブパレットがもう 1 つあります。グレー色で構成され、`grays` と呼ばれます。他の 2 つのカラー サブパレットと同じですが、アクセント バリエーションは含まれません。以上 28 色と 10 色で合計 38 色について説明しましたが、これで 43 色、残り 5 色あります。 最後の色について説明しましょう。`surface`、`info`、`success`、`warn`、`error` に 5 つの色を追加することもできます。

次にパレットの任意の色にアクセスする方法を示します。

<div class="divider"></div>

### グレースケール パレット

`primary` と ` secondary` パレットのように、灰色の色調を生成するために使用される `igx-palette` 関数の色を提供できます。`grays` パレットの生成に使用されるデフォルトの色は `#000` (`black`)。`grays` パレットは、コンポーネント全体のテキストの色を設定するために使用されます。値の変更は、アプリケーションの背景を変更する場合に役立ちます。たとえば、アプリケーションで暗い背景を使用する場合、`grays` の色を `white` に設定すると、すべてのテキストの色は `white` の色調に基づいて強制されます。

`grays` パレットの色調を設定するために `white` を使用するパレットを生成する方法:

```scss
// Import the IgniteUI themes library first
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

### サブパレットの色

`igx-color` 関数を提供します。関数は、`palette`、`color`、および `variant` の 3 つの引数を受け取ります。

```scss
$my-primary-600: igx-color($my-palette, 'primary', 600);
$my-primary-A700: igx-color($my-palette, 'secondary', 'A700');
$my-warning-color: igx-color($my-palette, 'warn');
// sample usage

.my-awesome-class {
    background: $my-primary-600;
    border-color: $my-primary-A700;
}

.warning-bg {
    background: $my-warning-color;
}
```

<div class="divider"></div>

### コントラスト テキスト色の取得

サブパレットの色の取得と同じように、サブパレットの色のコントラスト テキスト色を取得できます。

```scss
$my-primary-800: igx-color($my-palette, 'primary', 600);
$my-primary-800-text: igx-contrast-color($my-palette, 'primary', 600);
// sample usage

.my-awesome-article {
    background: $my-primary-800;
    color: $my-primary-800-text;
}
```

<div class="divider"></div>

### Color クラス

CSS クラスを使用して Web 要素 (テキストや背景など) に色を適用することを好む人もいます。パレットの各色の CSS クラスを生成できる mixin があります。

mixin は、CSS クラス名とパレットの色を渡す css プロパティを制御できるいくつかの引数を取得します。

- `$prop` - 色に割り当てられる CSS プロパティ。
- `$prefix` - 生成されたクラス名に連結するプレフィックス文字列。デフォルトは `igx` です。
- `$suffix` - 生成されたクラス名に連結するサフィックス文字列。

たとえば、要素に背景色を適用する CSS クラスを生成する場合、以下を実行できます:

```scss
@include igx-color-classes(
    $prop: 'background-color',
    $suffix: 'bg'
);
```
上記のコードは、パレットの各色バリアントに CSS クラスを生成します。たとえば、 `primary` パレットの `500` 色バリアントには、`.igx-primary-500-bg` クラスが与えられます。

<div class="divider--half"></div>

### API リファレンス
* [パレット]({environment:sassApiUrl}/index.html#function-igx-palette)
* [パレット色の取得]({environment:sassApiUrl}/index.html#function-igx-color)
* [コントラスト色の取得]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [カラー クラスの生成]({environment:sassApiUrl}/index.html#mixin-igx-color-classes)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
