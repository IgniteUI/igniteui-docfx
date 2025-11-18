---
title: Theming コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular テーマ コンポーネントは SASS によって開発されます。API は簡単で、単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular Theming
_license: MIT
_language: ja
---

## テーマ

コードの少数行で、コンポーネントのテーマを簡単に変更できます。SASS によって開発されるため、API は簡単で、単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。

### テーマの概要

Ignite UI for Angular はコンポーネントのデザインを**<a href="https://material.io/guidelines/material-design/introduction.html" target="_blank">マテリアル デザイン ガイドライン</a>**に基づき、Google によって作成されたコンポーネントの色、サイズ、およびルックアンドフィールにできるだけ近づけるようデザインしています。

テーマのアプローチは、複数のシンプルな概念に基づきます。

#### パレット

最初の概念は色パレットです。ビジュアル ツールでは、アプリケーションを差別化する色があります。マテリアル デザイン ガイドラインは基本色のさまざまな色合いおよび輝度がある定義済みの色パレットを推奨します。色の調和、そして背景色および前景のテキスト色にコントラストをつけます。一方、これは色を制限することにもなります。具体的に、ブランド化と一致するカスタム パレットを使用することができないことがあります。そのため、ユーザーに提供される基本色からマテリアル デザインのようなパレットを生成するアルゴリズムを作成しました。また、パレットで各色合いにコントラスト テキスト色を生成します。

#### テーマ

2 つ目の概念はテーマです。パレットは通常テーマで使用します。各コンポーネントにはテーマがあり、アプリケーション全体および含まれる各コンポーネントをスタイル設定するグローバル テーマもあります。生成したパレットをグローバル テーマへ渡すと残りは自動で処理されます。各コンポーネントのスタイルを個別にカスタマイズすることもできます。この方法はトピックの下部セクションで説明します。

#### タイポグラフィ

最後の概念はタイポグラフィです。デフォルトで使用されるタイポグラフィもありますが、アプリケーションのスタイル設定をさらにカスタマイズできます。タイポグラフィはスタイル設定で中心的な役割を担います。アプリケーションで見出し、サブ見出し、段落テキストのフォント ファミリ、サイズ、ウェイトを変更するメソッドを提供します。

> [!NOTE]
> テーマには [**Sass**](https://github.com/sass/node-sass) が**必要**です。

### 色パレットの生成

テーマ ライブラリは Sass に基づいて実装されます。アプリケーションをブートストラップするために **<a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">Ignite UI CLI</a>** を使用した場合、**angular.json** 構成ファイルでスタイル拡張子を _scss_ に設定すると、CLI は Sass スタイルをコンパイルします。Ignite UI CLI を使用しなかった場合、ビルダーを Sass スタイルをコンパイルするために構成する必要があります。

パレットは `primary`、`secondary`、`surface`、`info`、`success`、`warn`、および `error` カラーの引数を受け取ります。primary カラーはアプリケーション全体で最も目立つカラーになります。secondary カラーは、ボタン、スイッチ、スライダーなどの操作可能な要素に使用されるカラーです。surface カラーは、一部のコンポーネントの背景色として使用されます。必要な引数は、`primary`、`secondary`、および `surface` カラーに関する引数のみです。`info`、`success`、`warn`、および `error` カラー引数のデフォルト値は定義済みのセットからの値です。

色パレットを作成するには、グローバル テーマの基本ファイルになる _scss_ ファイルを作成します。_"my-app-theme.scss"_ と名前付けます。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink
$surface-color: #e5e5e5; // Light gray

$my-color-palette: palette(
  $primary: $company-color,
  $secondary: $secondary-color,
  $surface: $surface-color
);
```

生成されたパレットには 216 カラーが含まれています。3 カラーのみを指定して 216 カラーになりました。その他の 213 カラーはどうやって決定されたのでしょうか？
重要なカラーの生成方法を更に詳しく説明します。`primary`、`secondary` および `secondary` カラーを提供した後、そのカラーのシェードおよびアクセント カラーを生成しました。パレットに `primary`、`secondary` および `surface` カラーのための 3 つのサブパレットが生成されます。各サブパレットには、原色に基づいた 13 カラーのバリエーションがあります。13 カラー中 5 カラーは元のカラーより明るいシェードで、4 はより暗いカラーです。残りの 4 カラーは元のカラーの「アクセント」バージョンです。各パレットに元のカラーを含む 14 カラーがあります。

各サブパレットに多数のカラーがあるため、適切なカラーを選択するための数値システムがあります。サブパレットの各カラーに数値が割り当てられています。元のカラーに `500` を割り当てます。より明るい色合いは `50` ～ `400` です。より暗い色合いは `600` ～ `900` です。アクセント カラーは `A100`、`A200`、`A400`、および `A700` の文字列名があります。説明したカラーは 216 カラー中 42 カラーのみです。サブパレットがもう 1 つあります。グレー カラーで構成され、`grays` と呼ばれます。他の 2 つのカラー サブパレットと同じですが、アクセント バリエーションは含まれません。以上 42 カラーと 10 カラーで合計 52 カラーについて説明しました。まだ 216 カラーで多く残っています。その他の 164 カラーがどのように決定されたのでしょうか。最後のカラーについて説明しましょう。更に info、success、warn、error の 4 カラーがあります。その他 56 カラーがあります。`primary`、`secondary`、`surface`、`info`、`success`、`warn`、`error`、`grays` サブパレットの数はちょうど 108 で、216 カラーの半分です。残りの半分のカラーは、各カラー バリエーションのコントラスト テキスト カラーであり、変数名にはすべてサフィックスとして `-contrast` が付いており、黒または白のいずれかになります。

一方、パレットの任意の色にどのようにアクセスするのでしょうか。

<div class="divider"></div>

#### サブパレット カラーの取得

`color` 関数を提供します。関数は、`palette`、`color`、および `variant` の 3 つの引数を受け取ります。

```scss
$my-primary-600: color($my-color-palette, "primary", 600);
$my-primary-A700: color($my-color-palette, "secondary", "A700");
$my-warning-color: color($my-color-palette, "warn");
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

サブパレット カラーの取得と同じように、サブパレットの色のコントラスト テキスト色を取得できます。

```scss
$my-primary-800: color($my-palette, "primary", 600);
$my-primary-800-text: contrast-color($my-palette, "primary", 600);
// sample usage

.my-awesome-article {
  background: $my-primary-800;
  color: $my-primary-800-text;
}
```

### テーマの生成

アプリケーション プロジェクトに _"igniteui-angular.css"_ ファイルを追加した場合、削除してください。カスタム テーマを生成するために _"my-app-theme.scss"_ ファイルを使用します。

このトピックの最初の例から始めます。ただし、今回は `core` と `theme` の 2 つのミックスインを組み込む予定です。現時点では `core` は引数を受け入れません。`theme` は、`$palette`、`$schema`、`$exclude`、`$roundness`、`$elevation`、`$elevations` など、いくつかのオプションを受け入れます。ここでは `$palette` 引数について説明します。

> [!IMPORTANT]
> `core` を `theme` の前に含める必要があります。`core` ミックスインは `theme` の基本定義を提供します。

```scss
// 最初に IgniteUI テーマ ライブラリをインポートします
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink
$surface-color: #e5e5e5; // Light gray

$my-color-palette: palette(
  $primary: $company-color,
  $secondary: $secondary-color,
  $surface: $surface-color
);

// 重要: 必ず最初に core を含めてください。
@include core();
// 生成したカラー パレットを theme ミックスインに渡します
@include theme($my-color-palette);
```

これで完了です。アプリケーションは新しく生成されたパレットからの色を使用します。



今回のリリースで、カスタム タイポグラフィの定義はアプリケーションのフォント ファミリの更新に限られています。機能は今後追加される予定ですが、これはアプリケーションでタイポグラフィをカスタマイズする堅牢性を提供することが目的です。

タイポグラフィをカスタマイズするには、`typography` ミックスインを使用します。単一の `config` 引数を取得します。

> [!IMPORTANT]
> `core` の後に `typography` を含める必要があります。今後のリリースで条件が変わることがあります。

```scss
// 最初に IgniteUI テーマ ライブラリをインポートします
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';

// 重要: 必ず最初に core を含めてください。
@include core();
//theme の前にタイポグラフィを含めます
@include typography(
  $config: (
    font-family: "Comic Sans MS",
  )
);
@include theme($default-palette);
```
