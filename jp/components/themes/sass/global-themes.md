---
title: グローバル テーマ
_description: Ignite UI for Angular テーマ コンポーネントは SASS で開発されます。使用が簡単な API は単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular テーマ コンポーネント, Angular テーマ
_language: ja
---

# グローバル テーマ
<div class="highlight">グローバルテーマを使用すると、カスタム カラー パレット、スキーマ、およびエレベーションを使用するテーマをすばやく生成できます。カラー パレット、スキーマ、およびエレベーションは、コンポーネント専用に作成されたカスタム テーマを持たないすべてのコンポーネントにプロパゲートされます。</div>
<div class="divider"></div>

## 概要
アプリケーション プロジェクトに `igniteui-angular.css` ファイルを追加した場合、削除してください。`my-app-theme.scss` ファイルを使用してアプリケーションのすべてのコンポーネント用にグローバル テーマを生成します。

**Ignite UI for Angular** は、コンポーネント全体のテーマにグローバル テーマをデフォルトで使用します。アプリでユース ケースに合わせてコンポーネントにスコープしたテーマを作成できます。ここでは 1 ファイルにすべてのテーマを含みます。
グローバル テーマの生成には 2 つのミックスイン `core` と `theme` を含みます。両方のミックスインは数個の引数を受け取ります。 

###core  
<div class="divider--half"></div>

|           名前            |  タイプ   | デフォルト設定 |                                説明                                |
| :-----------------------: | :-----: | :-----: | :-----------------------------------------------------------------------: |
|      `$print-layout`      | boolean |  true   |                 印刷にスタイルを含めるか除外します。                  |
| `$enhanced-accessibility` | boolean |  false  | コンポーネントの色およびその他のプロパティをアクセスしやすい値に切り替えます。 |


###theme  
<div class="divider--half"></div>

|     名前      |  タイプ   |         デフォルト設定          |                                                 説明                                                  |
| :-----------: | :-----: | :----------------------: | :----------------------------------------------------------------------------------------------------------: |
|  `$palette`   |   map   |           null           |                    パレット マップは、すべてのコンポーネントのデフォルト テーマで使用されます。                    |
|   `$schema`   |   map   | `$light-material-schema` |                             コンポーネントのスタイル設定に基づいて使用されるスキーマ。                             |
|  `$exclude`   |  list   |            ()            |                       グローバル テーマから除外されるコンポーネント テーマのリスト。                       |
| `$roundness`  | Number  |            1             | すべてのコンポーネントのグローバルな丸み係数 (値は 0〜1 の任意の小数にすることができます) を設定します。 |
| `$elevation`  | boolean |          `true`          |                           テーマのすべてのコンポーネントのエレベーションのオン/オフを切り替えます。                           |
| `$elevations` |   Map   |  `$material-elevations`  |                            すべてのコンポーネント テーマで使用されるエレベーション マップ。                             |

企業のプライマリおよびセカンダリの色を使用するカスタム グローバル テーマを作成します。

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always includecore first!
@include core();
// Add the typography styles before the main theme.
@include typography();
// Pass the color palette we generated to thetheme mixin.
@include theme($my-color-palette);
```

`core` と `theme` ミックスインが何をするか説明しましょう。`core` ミックスインは、強化されたアクセシビリティ (色弱ユーザーに適した色など) やすべてのコンポーネントの印刷スタイルの追加など、いくつかの構成を処理します。`theme` ミックスインには、個々のコンポーネント スタイル (除外リストにあるものを除く) が含まれ、コンポーネントの `$exclude` リストにリストされていないパレット、スキーマ、エレベーション、および丸みを構成します。

> [!IMPORTANT]
> `theme` の前に `core` と `typography` を含めることが不可欠です。`core` および `typography` ミックスインは、`theme` ミックスインが正しく機能するために必要なすべての基本定義を提供します。

## コンポーネントの除外
<div class="divider--half"></div>

`theme` ミックスインは、グローバル テーマ スタイルから除外されるコンポーネント名のリストを提供します。たとえば、`igx-avatar` および `igx-badge` に含まれるすべてのスタイルを完全に削除したい場合は (生成される CSS の量を減らすか、独自のカスタム スタイルを提供する場合)、以下のようなコンポーネントのリストを渡すことで可能です。

```scss
// ...
$unnecessary: (igx-avatar, igx-badge);

@include theme($my-color-palette, $exclude: $unnecessary);
```

アプリが一部のコンポーネントを使用しない場合は、`$exclude` リストに追加することをお勧めします。

逆を行うことができます - 以下の方法を使用して、必要なコンポーネント スタイルのみを含めます。

```scss
@use 'sass:map';

@function include($items, $register) {
    @return map.keys(map.remove($register, $items...));
}

$allowed: (igx-avatar, igx-badge);

@include theme(
    $exclude: include($allowed, $components)
);
```

## 明暗テーマ (Light/Dark)

`theme` ミックスインに加えグローバル テーマ ミックスインを追加しました。**明暗**テーマのブート ストラップにグローバル テーマ ミックスインが含まれます。これらのミックスイン は `light-theme` と `dark-theme` です。

明暗テーマを作成する方法を示すショーケースです。

```scss
.light-theme {
    @include light-theme($light-material-palette);
}

.dark-theme {
    background: #333;
    color: #fff;

    @include dark-theme($light-material-palette);
}
```

理想的には、アプリケーション DOM ツリーの上位要素に `.light-theme` または `.dark-theme` クラスを設定します。`app-root` 要素が適切です。

### 使用可能なテーマ
Ignite UI for Angular には、事前定義されたテーマのセットから選択するオプションがあります。
以下の表では、すぐに使用できるすべての定義済みテーマを示します。

| テーマ                                                             | ミックスイン                                                                                      | スキーマ                             | カラー パレット                                                                          | 利用可能バージョン |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------- | -------------------- |
| [**Material (base)**](presets/material.md)                        | [theme()]({environment:sassApiUrl}/index.html#mixin-theme)                                 | `$light-material-schema          ` | null                                                                                   | **すべて**              |
| [**Material (light)**](presets/material.md#material-light-theme)  | [light-theme()]({environment:sassApiUrl}/index.html#mixin-light-theme)                     | `$light-material-schema          ` | $light-material-palette                                                                | **6.2 +**            |
| [**Material (dark)**](presets/material.md#material-dark-theme)    | [dark-theme()]({environment:sassApiUrl}/index.html#mixin-dark-theme)                       | `$dark-material-schema           ` | $dark-material-palette                                                                 | **6.2 +**            |
| [**Fluent**](presets/fluent.md)                                   | [fluent-light-theme()]({environment:sassApiUrl}/index.html#mixin-fluent-light-theme)       | `$light-fluent-schema   `          | $light-fluent-palette <br> $light-fluent-excel-palette <br> $light-fluent-word-palette | **8.2 +**            |
| [**Fluent (dark)**](presets/fluent.md#fluent-dark-theme)          | [fluent-dark-theme()]({environment:sassApiUrl}/index.html#mixin-fluent-dark-theme)         | `$dark-fluent-schema    `          | $dark-fluent-palette <br> $dark-fluent-excel-palette <br> $dark-fluent-word-palette    | **8.2 +**            |
| [**Bootstrap**](presets/bootstrap.md)                             | [bootstrap-light-theme()]({environment:sassApiUrl}/index.html#mixin-bootstrap-light-theme) | `$light-bootstrap-schema`          | $light-bootstrap-palette                                                               | **9.0 +**            |
| [**Bootstrap (dark)**](presets/bootstrap.md#bootstrap-dark-theme) | [bootstrap-dark-theme()]({environment:sassApiUrl}/index.html#mixin-bootstrap-dark-theme)   | `$dark-bootstrap-schema `          | $dark-bootstrap-palette                                                                | **9.0 +**            |
| [**Indigo**](presets/indigo.md)                                   | [indigo-light-theme()]({environment:sassApiUrl}/index.html#mixin-indigo-light-theme)       | `$light-indigo-schema`             | $light-indigo-palette                                                                  | **10.1 +**           |
| [**Indigo (dark)**](presets/indigo.md#indigo-dark-theme)          | [indigo-dark-theme()]({environment:sassApiUrl}/index.html#mixin-indigo-dark-theme)         | `$dark-indigo-schema `             | $dark-indigo-palette                                                                   | **10.1 +**           |

> [!NOTE]
> すべてのハイレベルなテーマ ミックスインは、基本の `theme` ミックスインをラップすることに注意してください。

すべてのテーマ ミックスインは、独自のテーマを作成するための開始ポイントとして使用できます。`bootstrap-light-theme` ミックスインを使用して、新しいテーマを作成しましょう。

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #b71053;
$secondary-color: #6c757d; 

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always includecore first!
@include core();
// Pass the color palette we generated to thebootstrap-theme mixin
@include bootstrap-light-theme($my-color-palette);
```

## ブラウザー サポート
<div class="divider--half"></div>

Ignite UI for Angular 13 より前のバージョンでは、`$igx-legacy-support` の値が、コンポーネントのテーマの動作を決定するため大変重要です。値を `true` に設定した場合、各コンポーネントのスタイルのルールの値はビルド時にテーマで定義されたハードコーディングされた値に設定されます。`$igx-legacy-support` の値を `false` に設定した場合も、スタイル ルールは `:root` スコープまたは一番近いブロックのスコープで定義された CSS 変数を検索します。

`$legacy-support` の値を設定する一般的なルールは、Internet Explorer 11 をサポートするかどうかによって決定されます。IE11 をサポートする場合、`$legacy-support` 値を `true` に設定します。それ以外の場合、値を `false` (デフォルト) に設定すると、テーマで CSS 変数が必要です。IE11 以前のブラウザーのサポートは、Ignite UI for Angular 13 で削除されました。

## API の概要
* [Global テーマ]({environment:sassApiUrl}/index.html#mixin-theme)
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-dark-theme)
* [パレット]({environment:sassApiUrl}/index.html#function-igx-palette)

<div class="divider--half"></div>

## その他のリソース
<div class="divider--half"></div>

各コンポーネント テーマの作成する方法:

* [コンポーネント テーマ](component-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
