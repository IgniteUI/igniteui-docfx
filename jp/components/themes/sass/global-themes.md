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

### Core ミックスイン
<div class="divider--half"></div>

| 名前                      | タイプ    | デフォルト設定 | 説明                                                               |
| :-----------------------: | :-----: | :-----: | :-----------------------------------------------------------------------: |
| `$print-layout`           | boolean | true    | 印刷にスタイルを含めるか除外します。                                  |
| `$enhanced-accessibility` | boolean | false   | コンポーネントの色およびその他のプロパティをアクセスしやすい値に切り替えます。 |


### Theme ミックスイン
<div class="divider--half"></div>

| 名前          | タイプ    | デフォルト設定                  | 説明                                                                                                  |
| :-----------: | :-----: | :----------------------: | :----------------------------------------------------------------------------------------------------------: |
| `$palette`    | map     | `null`                   | パレット マップは、すべてのコンポーネントのデフォルト テーマで使用されます。                                       |
| `$schema`     | map     | `$light-material-schema` | コンポーネントのスタイル設定に基づいて使用されるスキーマ。                                                         |
| `$exclude`    | list    | `()`                     | グローバル テーマから除外されるコンポーネント テーマのリスト。                                             |
| `$roundness`  | Number  | `null`                   | すべてのコンポーネントのグローバルな丸み係数 (値は 0〜1 の任意の小数にすることができます) を設定します。 |
| `$elevation`  | boolean | `true`                   | テーマのすべてのコンポーネントのエレベーションのオン/オフを切り替えます。                                                     |
| `$elevations` | Map     | `$material-elevations`   | すべてのコンポーネント テーマで使用されるエレベーション マップ。                                                        |

会社のプライマリ カラー、セカンダリ カラー、サーフェス カラーを使用するカスタム グローバル テーマを作成しましょう。

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759;
$secondary-color: #f96a88;
$surface-color: #fff;

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color,
    $surface: $surface-color
);

// IMPORTANT: Make sure you always include core first!
@include core();
@include typography();
// Pass the color palette we generated to the theme mixin.
@include theme($my-color-palette);
```

`core` と `theme` ミックスインが何をするか説明しましょう。`core` ミックスインは、強化されたアクセシビリティ (色弱ユーザーに適した色など) やすべてのコンポーネントの印刷スタイルの追加など、いくつかの構成を処理します。`theme` ミックスインには、個々のコンポーネント スタイル (除外リストにあるものを除く) が含まれ、コンポーネントの `$exclude` リストにリストされていないパレット、スキーマ、エレベーション、および丸みを構成します。

> [!IMPORTANT]
> `theme` の前に `core` を含めることが不可欠です。`core` ミックスインは、`theme` ミックスインが正しく機能するために必要なすべての基本定義を提供します。

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

また、Material、Fluent、Indigo、Bootstrap の 4 つのテーマには、*__light__* バージョンと *__dark__* バージョンも用意されています。 

いずれかのバージョンを使用するには、[theme]({environment:sassApiUrl}/themes#mixin-theme) ミックスインに渡すだけです。

*__Light__*
```scss
@include core();
@include typography(
    $font-family: $material-typeface,
    $type-scale: $material-type-scale
);
@include theme(
    $schema: $light-material-schema,
    $palette: $light-material-palette,
);
```
*__Dark__*
```scss
@include core();
@include typography(
    $font-family: $material-typeface,
    $type-scale: $material-type-scale
);
@include theme(
    $schema: $dark-material-schema,
    $palette: $dark-material-palette,
);
```

### 使用可能なテーマ
Ignite UI for Angular には、事前定義されたテーマのセットから選択するオプションがあります。
以下の表では、すぐに使用できるすべての定義済みテーマを示します。

| テーマ                                                             | スキーマ                             | カラー パレット                                                                          |
| ----------------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| [**Material Light**](presets/material.md#default-theme)           |  `$light-material-schema`          | $light-material-palette                                                                |
| [**Material Dark**](presets/material.md#material-dark-theme)      |  `$dark-material-schema`           | $dark-material-palette                                                                 |
| [**Fluent Light**](presets/fluent.md)                             | `$light-fluent-schema`             | $light-fluent-palette <br> $light-fluent-excel-palette <br> $light-fluent-word-palette |
| [**Fluent Dark**](presets/fluent.md#fluent-dark-theme)            |  `$dark-fluent-schema`             | $dark-fluent-palette <br> $dark-fluent-excel-palette <br> $dark-fluent-word-palette    |
| [**Bootstrap Light**](presets/bootstrap.md)                       | `$light-bootstrap-schema`          | $light-bootstrap-palette                                                               |
| [**Bootstrap Dark**](presets/bootstrap.md#bootstrap-dark-theme)   |  `$dark-bootstrap-schema `         | $dark-bootstrap-palette                                                                |
| [**Indigo Light**](presets/indigo.md)                             | `$light-indigo-schema`             | $light-indigo-palette                                                                  |
| [**Indigo Dark**](presets/indigo.md#indigo-dark-theme)            |   `$dark-indigo-schema `           | $dark-indigo-palette                                                                   |


## その他のリソース
<div class="divider--half"></div>

各コンポーネント テーマの作成する方法:

* [コンポーネント テーマ](component-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
