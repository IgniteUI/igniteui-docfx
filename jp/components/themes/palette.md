---
title: パレット
_description: 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

## パレット

### 概要

パレットは `primary`、` secondary`、 `grays`、` surface`、 `info`、` success`、 `warn`、そして ` error` の色の引数を受け付けます。`primary` の色が通常あなたのブランド カラーです。ほとんどの場合、igx-navbar コンポーネントなどの静的要素のスタイルを設定するために使用されます。二次色は、ボタン、スイッチ、スライダーなどのように動作可能な要素に使用されるものです。唯一必要な引数は `primary` と `secondary` 色のものです。表面色は、カード、メニュー、日付/タイムピッカー、バナーシートなどのようないくつかのコンポーネントの '表面' に色を付けるために使われます。デフォルトでは、`surface`、`grays`、`info`、`success`、`warn`、`error` は、定義済みの色のセットです。

カラー パレットを作成するには、グローバル テーマの基本ファイルになる _scss_ ファイルを作成します。_"my-app-theme.scss"_ と名前付けます。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/lib/core/styles/themes/index";

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
  $primary: $company-color,
  $secondary: $secondary-color
);
```

生成されたパレットには 74 色が含まれています。2 色のみを指定して 74 色が設定されました。次にその他の 41 色を決定する方法を示します。

重要な色の生成方法を更に詳しく説明します。`primary` および `secondary` 色を提供した後、その色の色合いおよびアクセント カラーを生成しました。パレットに `primary` および `secondary` 色のための 2 つのサブパレットが生成されます。各サブパレットには、原色に基づいた 12 色のバリエーションがあり、12 色中 4 色は原色より明るい色合いで、4 はより暗い色です。残りの 4 色は原色の「アクセント」バージョンで各パレットに原色を含む 13 色があります。

各サブパレットには非常に多くの色がありますが、サブパレットの各色に数値が割り当てられているため、それぞれの色を識別する方法はとても簡単です。原色に `500` を割り当てます。より明るい色合いは `50` ～ `400` です。より暗い色合いは `600` ～ `900` です。アクセント色は `A100`、`A200`、`A400`、および `A700` の文字列名があります。ここまでで色は 43 色中 28 色のみで、サブパレットがもう 1 つあります。グレー色で構成され、`grays` と呼ばれます。他の 2 つのカラー サブパレットと同じですが、アクセント バリエーションは含まれません。以上 28 色と 10 色で合計 38 色について説明しましたが、これで 43 色、残り 5 色あります。 最後の色について説明しましょう。`surface`、`info`、`success`、`warn`、`error` に 5 つの色を追加することもできます。

次にパレットの任意の色にアクセスする方法を示します。

<div class="divider"></div>

### サブパレットの色

`igx-color` 関数を提供します。関数は、`palette`、`color`、および `variant` の 3 つの引数を受け取ります。

```scss
$my-primary-600: igx-color($my-palette, "primary", 600);
$my-primary-A700: igx-color($my-palette, "secondary", "A700");
$my-warning-color: igx-color($my-palette, "warn");
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
$my-primary-800: igx-color($my-palette, "primary", 600);
$my-primary-800-text: igx-contrast-color($my-palette, "primary", 600);
// sample usage

.my-awesome-article {
  background: $my-primary-800;
  color: $my-primary-800-text;
}
```

### デフォルト色

#### 基本色
<article class="row">
    <div class="col-md-4 col-sm-12">
        <div class="color-container primary-color">
            <h4 class="color-title">Primary Color</h4>
            <div class="color-values">
                <span class="variable">$ocean-blue</span>
                <span class="hex">#0375BE</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container secondary-color">
            <h4 class="color-title">Secondary Color</h4>
            <div class="color-values">
                <span class="variable">$vivid-cerise</span>
                <span class="hex">#E41C77</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container accent-color">
            <h4 class="color-title">Accent Color</h4>
            <div class="color-values">
                <span class="variable">$yellow-orange</span>
                <span class="hex">#FBB13C</span>
            </div>
        </div>
    </div>
</article>

<div class="divider"></div>

#### サポート カラー
<article class="row">
    <div class="col-md-4 col-sm-12">
        <div class="color-container success-color">
            <h4 class="color-title">Success Color</h4>
            <div class="color-values">
                <span class="variable">$success-color</span>
                <span class="hex">#4CAF50</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container warn-color">
            <h4 class="color-title">Warning Color</h4>
            <div class="color-values">
                <span class="variable">$warn-color</span>
                <span class="hex">#FBB13C</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container error-color">
            <h4 class="color-title">Error Color</h4>
            <div class="color-values">
                <span class="variable">$error-color</span>
                <span class="hex">#F44336</span>
            </div>
        </div>
    </div>
</article>

<div class="divider"></div>

#### カラー パレット
<article class="color-palettes row">
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container primary-color">
            <h4 class="color-title">Primary Color</h4>
            <div class="color-values">
                <span class="variable">500 ($primary-color)</span>
                <span class="hex">#0375BE</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100</span>
                <span class="hex">#82CEFF</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">#70C0F5</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">#1D8CD3</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400</span>
                <span class="hex">#0A80CC</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($primary-color)</span>
                <span class="hex">#0375BE</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600</span>
                <span class="hex">#0166A7</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">#015A94</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800</span>
                <span class="hex">#014E80</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900</span>
                <span class="hex">#01416A</span>
            </div>
        </div>
    </div>
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container secondary-color">
            <h4 class="color-title">Secondary Color</h4>
            <div class="color-values">
                <span class="variable">500 ($secondary-color)</span>
                <span class="hex">#E41C77</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100</span>
                <span class="hex">#FCC5DE</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">#E17FAB</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">#DC5491</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400</span>
                <span class="hex">#DF3683</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($secondary-color)</span>
                <span class="hex">#E41C77</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600</span>
                <span class="hex">#DC0A6A</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">#D30160</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800</span>
                <span class="hex">#BF0157</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900</span>
                <span class="hex">#A5044D</span>
            </div>
        </div>
    </div>
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container accent-color">
            <h4 class="color-title">Accent Color</h4>
            <div class="color-values">
                <span class="variable">500 ($accent-color)</span>
                <span class="hex">#FBB13C</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100</span>
                <span class="hex">#FCF0DD</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">#F4D4A2</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">#F2C173</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400</span>
                <span class="hex">#F6B856</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($accent-color)</span>
                <span class="hex">#FBB13C</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600</span>
                <span class="hex">#FFA81E</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">#FFA10C</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800</span>
                <span class="hex">#F69701</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900</span>
                <span class="hex">#E08901</span>
            </div>
        </div>
    </div>
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container gray-color">
            <h4 class="color-title">Gray Color</h4>
            <div class="color-values">
                <span class="variable">500 ($gray)</span>
                <span class="hex">rgba(0, 0, 0, .38)</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100 ($off-white)</span>
                <span class="hex">rgba(0, 0, 0, .04)</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">rgba(0, 0, 0, .08)</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">rgba(0, 0, 0, .12)</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400 ($lightgray)</span>
                <span class="hex">rgba(0, 0, 0, .26)</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($gray)</span>
                <span class="hex">rgba(0, 0, 0, .38)</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600 ($darkgray)</span>
                <span class="hex">rgba(0, 0, 0, .54)</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">rgba(0, 0, 0, .62)</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800 ($off-black)</span>
                <span class="hex">rgba(0, 0, 0, .74)</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900 ($black)</span>
                <span class="hex">rgba(0, 0, 0, .87)</span>
            </div>
        </div>
    </div>
</article>