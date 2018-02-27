---
title: テーマ
_description: テーマ
_keywords: テーマ
_language: ja
---

## テーマ

<p class="highlight">Ignite UI for Angular は **<a href="http://sass-lang.com/" target="_blank">Sass</a>** 関数および mixins をセットで提供します。アプリケーション全体または特定の部分のみをスタイル設定することができます。</p>
<div class="divider"></div>

### テーマの概要

Ignite UI for Angular はコンポーネントのデザインを**<a href="https://material.io/guidelines/material-design/introduction.html" target="_blank">マテリアル デザイン ガイドライン</a>**に基づき、Google によって作成されたコンポーネントの色、サイズ、およびルックアンドフィールにできるだけ近づけるようデザインしています。

テーマのアプローチは、複数のシンプルな概念に基づきます。

#### パレット

最初の概念は色パレットです。ビジュアル ツールでは、アプリケーションを差別化する色があります。マテリアル デザイン ガイドラインは基本色のさまざまな色合いおよび輝度がある定義済みの色パレットをお勧めします。色の調和、そして背景色および前景のテキスト色にコントラストをつけます。 これは色を制限することにもなります。ブランド化と一致するカスタム パレットを使用することができないため、ユーザーが提供される基本色からマテリアル デザインのようなパレットを生成するアルゴリズムを使用します。また、パレットで各色合いにコントラスト テキスト色を生成します。

#### テーマ

2 つ目の概念はテーマです。パレットは通常テーマで使用します。各コンポーネントにはテーマがあり、アプリケーション全体および含まれる各コンポーネントをスタイル設定するグローバル テーマもあります。生成したパレットをグローバル テーマへ渡すと残りは自動で処理されます。各コンポーネントのスタイルをカスタマイズできます。このトピックの下部セクションで説明されます。

#### タイポグラフィ

最後の概念はタイポグラフィです。デフォルトで使用されるタイポグラフィがありますが、アプリケーションのスタイル設定をカスタマイズできます。タイポグラフィはスタイル設定で重要です。アプリケーションで見出し、サブ見出し、段落テキストのフォント ファミリ、サイズ、ウェイトを変更するメソッドを提供します。

> [!NOTE]
> テーマに [**Sass**](https://github.com/sass/node-sass) が**必要**です。

### 色パレットの生成

テーマ ライブラリは Sass に基づいて実装されます。アプリケーションをブートストラップするために **<a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">Ignite UI CLI</a>** を使用した場合、**angular-cli.json** 構成ファイルでスタイル拡張子を _scss_ に設定すると、CLI は Sass スタイルをコンパイルします。Ignite UI CLI を使用しなかった場合、ビルダーを Sass スタイルをコンパイルするために構成する必要があります。

パレットは `primary`、`secondary`、`info`、`success`、`warn`、および `error` 色の引数を受けます。`primary` 色はアプリケーションでよく使用される原色です。`secondary` 色は、ボタン、スイッチ、スライダーなどの操作可能な要素で使用される二次色です。`primary` および `secondary` 色は必須な引数です。`info`、`success`、`warn`、および `error` 色引数のデフォルト値は定義済みのセットからの値です。

色パレットを作成するには、グローバル テーマの基本ファイルになる _scss_ ファイルを作成します。_"my-app-theme.scss"_ を名前付けます。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/core/styles/themes/index";

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
  $primary: $company-color,
  $secondary: $secondary-color
);
```

生成されたパレットに 74 色含まれています。2 色のみを指定して 74 色が設定されました。その他の 72 色はどうやって決定されたのでしょうか？

色の生成方法は重要なためここで説明します。`primary` および `secondary` 色を提供した後、その色のシェードおよびアクセント色を生成しました。パレットで `primary` および `secondary` 色のための 2 つのサブパレットがあります。各サブパレットには、原色に基づいた 12 色のバリエーションがあります。12 色中 4 色は原色より明るいシェードで、4 はより暗い色です。残りの 4 色は原色の「アクセント」バージョンです。各パレットに原色を含む 13 色があります。

W各サブパレットで多くの色があるため、適切な色を選択するための数値システムがあります。サブパレットの各色に数値が割り当てられています。原色に `500` を割り当てます。より明るいシェードは `100` ～ `400` です。より暗いシェードは `600` ～ `900` です。アクセント色は `A100`、`A200`、`A400`、および `A700` の文字列名があります。説明した色は 72 色中 26 色のみです。もう 1 つサブパレットがあります。グレー色で構成され、`grays` と呼ばれます。その他 2 つの色サブパレットと同じですが、アクセント バリエーションは含みません。26 色と 9 色で合計 35 色について説明しました。まだ 74 色で多く残っています。その他の 39 色がどのように決定されたのでしょうか。最後の色について説明しましょう。`info`、`success`、`warn`、および `error` の 4 つの色があります。その他 35 色があります。`primary`、`secondary`、および `grays` サブパレットの色数が 35 です。その他の 35 色は `primary`、`secondary`、および `grays` サブパレットの色のコントラスト テキスト色です。

パレットの色にアクセスする方法については？

<div class="divider"></div>

#### サブパレット色の取得

`igx-color` 関数を提供します。`palette`、`color`、および `variant` の 3 つの引数を取得します。

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

#### コントラスト テキスト色の取得

サブパレット色の取得と同じように、サブパレットの色のコントラスト テキスト色を取得できます。

```scss
$my-primary-800: igx-color($my-palette, "primary", 600);
$my-primary-800-text: igx-contrast-color($my-palette, "primary", 600);
// sample usage

.my-awesome-article {
  background: $my-primary-800;
  color: $my-primary-800-text;
}
```

### テーマの生成

アプリケーション プロジェクトで _"igniteui-angular.css"_ ファイルを含んだ場合、削除してください。カスタム テーマを生成するために _"my-app-theme.scss"_ ファイルを使用します。

このトピックの最初の例から始めます。ここでは、`igx-core` および `igx-theme` の 2 つの mixins を含みます。`igx-core` は引数を受け付けません。ただし、`igx-theme` は `$palette` および `$exclude` の 2 つの引数を受け付けます。ここでは `$palette` 引数について説明します。

> [!IMPORTANT]
> `igx-core` を `igx-theme` の前に含む必要があります。`igx-core` mixin は `igx-theme` の基本定義を提供します。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/core/styles/themes/index";

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
  $primary: $company-color,
  $secondary: $secondary-color
);

// IMPORTANT: Make sure you always include igx-core first!
@include igx-core();
// Pass the color palette we generated to the igx-theme mixin
@include igx-theme($my-color-palette);
```

これで完了です。アプリケーションが新しく生成されたパレットからの色を使用します。

<div class="divider"></div>

### タイポグラフィのカスタマイズ (WIP)

現在のリリースで、カスタムタイポグラフィの定義はアプリケーションのフォント ファミリに制限されます。機能は今後追加される予定ですが、これはアプリケーションでタイポグラフィをカスタマイズする堅牢性を提供することが目的です。

タイポグラフィをカスタマイズするには、`igx-typography` mixin を使用します。単一の `config` 引数を取得します。

> [!IMPORTANT]
> `igx-core` の後に `igx-typography` を含むと効果的です。今後のリリースで条件が変わることがあります。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/core/styles/themes/index";
// IMPORTANT: Make sure you always include igx-core first!
@include igx-core();
@include igx-theme();

//Include after igx-core
@include igx-typography($config: (font-family: "Comic Sans MS"));
```
