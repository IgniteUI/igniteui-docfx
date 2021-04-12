---
title: Theming コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Theming コンポーネントは SASS によって開発されます。API は簡単で、単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular Theming
_language: ja
---

## テーマ

コードの少数行で、コンポーネントのテーマを簡単に変更できます。SASS によって開発されるため、API は簡単で、単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。

### テーマの概要

Ignite UI for Angular はコンポーネントのデザインを**<a href="https://material.io/guidelines/material-design/introduction.html" target="_blank">マテリアル デザイン ガイドライン</a>**に基づき、Google によって作成されたコンポーネントの色、サイズ、およびルックアンドフィールにできるだけ近づけるようデザインしています。

テーマのアプローチは、複数のシンプルな概念に基づきます。

#### パレット

最初の概念は色パレットです。ビジュアル ツールでは、アプリケーションを差別化する色があります。マテリアル デザイン ガイドラインは基本色のさまざまな色合いおよび輝度がある定義済みの色パレットを推奨します。色の調和、そして背景色および前景のテキスト色にコントラストをつけます。 一方、これは色を制限することにもなります。具体的に、ブランド化と一致するカスタム パレットを使用することができないことがあります。そのため、ユーザーに提供される基本色からマテリアル デザインのようなパレットを生成するアルゴリズムを作成しました。また、パレットで各色合いにコントラスト テキスト色を生成します。

#### テーマ

2 つ目の概念はテーマです。パレットは通常テーマで使用します。各コンポーネントにはテーマがあり、アプリケーション全体および含まれる各コンポーネントをスタイル設定するグローバル テーマもあります。生成したパレットをグローバル テーマへ渡すと残りは自動で処理されます。各コンポーネントのスタイルを個別にカスタマイズすることもできます。この方法はトピックの下部セクションで説明します。

#### タイポグラフィ

最後の概念はタイポグラフィです。デフォルトで使用されるタイポグラフィもありますが、アプリケーションのスタイル設定をさらにカスタマイズできます。タイポグラフィはスタイル設定で中心的な役割を担います。アプリケーションで見出し、サブ見出し、段落テキストのフォント ファミリ、サイズ、ウェイトを変更するメソッドを提供します。

> [!NOTE]
> テーマには [**Sass**](https://github.com/sass/node-sass) が**必要**です。

### 色パレットの生成

テーマ ライブラリは Sass に基づいて実装されます。アプリケーションをブートストラップするために **<a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">Ignite UI CLI</a>** を使用した場合、**angular-cli.json** 構成ファイルでスタイル拡張子を _scss_ に設定すると、CLI は Sass スタイルをコンパイルします。Ignite UI CLI を使用しなかった場合、ビルダーを Sass スタイルをコンパイルするために構成する必要があります。

パレットは `primary`、`secondary`、`info`、`success`、`warn`、および `error` 色の引数を受け取ります。`primary` 色はアプリケーションでよく使用される原色です。`secondary` 色は、ボタン、スイッチ、スライダーなどの操作可能な要素で使用される二次色です。`primary` および `secondary` 色は必須の引数です。`info`、`success`、`warn`、および `error` 色引数のデフォルト値は定義済みのセットからの値です。

色パレットを作成するには、グローバル テーマの基本ファイルになる _scss_ ファイルを作成します。_"my-app-theme.scss"_ と名前付けます。

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

生成されたパレットには 74 色が含まれています。2 色のみを指定して 74 色が設定されました。その他の 72 色はどのように決定されるのでしょうか？

重要な色の生成方法を更に詳しく説明します。`primary` および `secondary` 色を提供した後、その色のシェードおよびアクセント色を生成しました。パレットに `primary` および `secondary` 色のための 2 つのサブパレットが生成されます。各サブパレットには、原色に基づいた 12 色のバリエーションがあり、12 色中 4 色は原色より明るいシェードで、4 はより暗い色です。残りの 4 色は原色の「アクセント」バージョンで各パレットに原色を含む 13 色があります。

各サブパレットには多くの色があるため、適切な色を選択するための数値システムがあります。原色は `500`、明るいシェードは `100` ～ `400`、より暗いシェードは `600` ～ `900` です。アクセント色は `A100`、`A200`、`A400`、および `A700` の文字列名があります。以上で色は 72 色中 26 色ですが、他にグレー色で構成される `grays` と呼ばれるサブパレットがあります。他の色サブパレットと同じですが、アクセント バリエーションは含まれません。26 色と 9 色で合計 35 色となり、全 74 色中まだ 39 色が残っています。残りの色には、`info`、`success`、`warn`、および `error` の 4 色があります。その他 35 色があり、`primary`、`secondary`、および `grays` サブパレットの色数が 35 です。その他の 35 色は `primary`、`secondary`、および `grays` サブパレットの色のコントラスト テキスト色です。

一方、パレットの任意の色にどのようにアクセスするのでしょうか。

<div class="divider"></div>

#### サブパレット色の取得

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

アプリケーション プロジェクトに _"igniteui-angular.css"_ ファイルを追加した場合、削除してください。カスタム テーマを生成するために _"my-app-theme.scss"_ ファイルを使用します。

このトピックの最初の例から始めます。ここでは、`igx-core` および `igx-theme` の 2 つのミックスインを追加します。`igx-core` は引数を受け取りません。ただし、`igx-theme` は `$palette` および `$exclude` の 2 つの引数を受け取ります。ここでは `$palette` 引数について説明します。

> [!IMPORTANT]
> `igx-core` を `igx-theme` の前に含める必要があります。`igx-core` mixin は `igx-theme` の基本定義を提供します。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/lib/core/styles/themes/index";

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

これで完了です。アプリケーションは新しく生成されたパレットからの色を使用します。

<div class="divider"></div>

### タイポグラフィのカスタマイズ (WIP)

今回のリリースで、カスタム タイポグラフィの定義はアプリケーションのフォント ファミリの更新に限られています。機能は今後追加される予定ですが、これはアプリケーションでタイポグラフィをカスタマイズする堅牢性を提供することが目的です。

タイポグラフィをカスタマイズするには、`igx-typography` mixin を使用します。単一の `config` 引数を取得します。

> [!IMPORTANT]
> `igx-core` の後に `igx-typography` を含める必要があります。今後のリリースで条件が変わることがあります。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/lib/core/styles/themes/index";
// IMPORTANT: Make sure you always include igx-core first!
@include igx-core();
@include igx-theme($default-palette);

//Include after igx-core
@include igx-typography($config: (font-family: "Comic Sans MS"));
```
