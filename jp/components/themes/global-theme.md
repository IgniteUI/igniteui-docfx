---
title: グローバル テーマ
_description: Ignite UI for Angular Theming コンポーネントは SASS で開発されます。使用が簡単な API は単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular テーマ
_language: ja
---

## グローバル テーマ
<div class="highlight">グローバル テーマは、カスタム カラー パレットを使用するテーマをすばやく生成します。カラー パレットは、コンポーネント専用に作成されたカスタム テーマを持たないすべてのコンポーネントにプロパゲートされます。</div>
<div class="divider"></div>

### 概要
アプリケーション プロジェクトに _`igniteui-angular.css`_ ファイルを追加した場合、削除してください。_`My-app-theme.scss`_ ファイルを使用してアプリケーションのすべてのコンポーネント用にグローバル テーマを生成します。

**Ignite UI for Angular** は、コンポーネント全体のテーマにグローバル テーマをデフォルトで使用します。アプリでユース ケースに合わせてコンポーネントにスコープしたテーマを作成できます。ここでは 1 ファイルにすべてのテーマを含みます。グローバル テーマの生成には 2 つの mixins `igx-core` と `igx-theme` を含みます。両方の mixins は数個の引数を受け取ります。

#### igx-core  

| 名前                 |  型    | デフォルト            | 説明                                                                           |
| :---------------:    | :-----:  | :---------------:  | :-----------------------------------------------------------------------------------: |
| `$print-layout`      | boolean  | true               | 印刷にスタイルを含めるか除外します。                                               |
| `$direction`         | Keyword  | ltr                | すべてのコンポーネントのコンテンツの向きを指定します。 `ltr` または `rtl` に指定できます。 

#### igx-theme  

| 名前              |  型   | デフォルト            | 説明                                                                                                    |
| :---------------: | :-----: | :---------------:  | :------------------------------------------------------------------------------------------------------------: |
| `$palette`        | map     | 未定義          | パレット マップは、すべてのコンポーネントのデフォルト テーマで使用されます。                                         |
| `$schema`         | map     | $light-schema      | コンポーネントのスタイル設定に基づいて使用されるスキーマ。                                                           |
| `$exclude`        | list    | ( )                | グローバル テーマから除外されるコンポーネント テーマのリスト。                                               |
| `$legacy-support` | boolean | `false`             | テーマ設定の方法を決定 - true の場合、テーマはハードコーディングされた値で設定されます。                          |
| `$roundness`      | Number  |  null              | すべてのコンポーネントのグローバルな丸み係数 (値は0〜1の任意の小数にすることができます) を設定します。   |
| `$elevation`      | boolean | `true`             | エレベーションが構成されたコンポーネントのグローバル エレベーションを設定します。                                           |


企業のプライマリおよびセカンダリの色を使用するカスタム グローバル テーマを作成します。

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

//重要: 必ず最初に igx-core を含めてください。
@include igx-core();
//生成したカラーパレットを igx-theme mixin に渡します。
@include igx-theme($my-color-palette);
```

次に `igx-core` と `igx-theme` mixins について説明します。`igx-core` mixin は、グローバル エレベーション、グローバル タイポグラフィなどすべての必須パーツを読み込みます。`igx-theme` は、グローバル変数 `$default-palette` をパレット マップに設定します。また、グローバル変数 `$igx-legacy-support` を `$legacy-support` の値に設定します。`igx-theme` mixin は、コンポーネントの `$exclude` リストに載っていない各コンポーネント スタイルも含みます。 

> [!IMPORTANT]
> `igx-theme` の前に `igx-core` を含むと効果的です。`igx-core` は `igx-theme` に必要なすべての基本定義を提供します。

### コンポーネントの除外
<div class="divider--half"></div>

`igx-theme` mixin は、グローバル テーマ スタイルから除外されるコンポーネント名のリストを提供します。例えば、`igx-avatar` および `igx-badge` に含まれるすべてのスタイルを完全に削除してカスタム スタイルを提供したい場合、コンポーネントのリストを渡して達成することができます。

```scss
// ...
$unnecessary: (igx-avatar, igx-badge);

@include igx-theme($my-color-palette, $exclude: $unnecessary);
```

更にアプリで使用しないコンポーネントがある場合、`$exclude` のリストに追加して生成される CSS のサイズを縮小することができます。

### Light と Dark テーマ

`Igx-theme` mixin に加えグローバル テーマ mixins を追加しました。*__light__* および *__dark__* テーマのブート ストラップにグローバル テーマ mixins が含まれます。これらの mixins は `igx-light-theme` と `igx-dark-theme` です。

以下は light と dark テーマを作成する方法を示すショーケースです。

```scss
.light-theme {
    @include igx-light-theme($default-palette);
}

.dark-theme {
    background: #333;
    color: #fff;

    @include igx-dark-theme($default-palette);
}
```
アプリケーション DOM ツリーの上位にある `.light-theme` と `.dark-theme` の CSS クラスを適用し、`app-root` 要素が推奨されます。

#### 使用可能なテーマ
Ignite UI for Angular には、事前定義されたテーマのセットから選択するオプションがあります。
以下の表では、すぐに使用できるすべての定義済みテーマを示します。

| テーマ                                                                        | Mixin                                                                                             |  スキーマ                   |  カラーパレット                                            | 利用可能バージョン |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------|-----------------------------------------------------------|----------------------|
| [**Material (base)**](./themes-list/material.html)                           |  [igx-theme()]({environment:sassApiUrl}/index.html#mixin-igx-theme)                               | `$light-schema          ` | $default-palette                                          |      **all**         |
| [**Material (light)**](./themes-list/material.html)                          |  [igx-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)                   | `$light-material-schema          ` | $light-material-palette                                          |      **6.2 +**       |
| [**Material (dark)**](./themes-list/material.html)                           |  [igx-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)                     | `$dark-material-schema           ` | $dark-material-palette                                             |      **6.2 +**       |
| [**Fluent**](./themes-list/fluent.html)                                      |  [igx-fluent-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-fluent-light-theme)                 | `$light-fluent-schema   ` | $light-fluent-excel-palette <br> $light-fluent-word-palette           |      **8.2 +**       |
| [**Fluent (dark)**](./themes-list/fluent.html)                               |  [igx-fluent-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-fluent-dark-theme)       | `$dark-fluent-schema    ` | $dark-fluent-excel-palette <br> $dark-fluent-word-palette |      **8.2 +**       |
| [**Bootstrap**](./themes-list/bootstrap.html)                                |  [igx-bootstrap-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-light-theme)            | `$light-bootstrap-schema` | $light-bootstrap-palette                                        |      **9.0 +**       |
| [**Bootstrap (dark)**](./themes-list/bootstrap.html)                         |  [igx-bootstrap-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-dark-theme)  | `$dark-bootstrap-schema ` | $dark-bootstrap-palette                                   |      **9.0 +**       |
| [**Indigo**](./themes-list/indigo.html)                                |  [igx-indigo-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-indigo-light-theme)            | `$light-indigo-schema` | $light-indigo-palette                                        |      **10.1 +**       |
| [**Indigo (dark)**](./themes-list/indigo.html)                         |  [igx-indigo-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-indigo-dark-theme)  | `$dark-indigo-schema ` | $dark-indigo-palette                                   |      **10.1 +**       |

> [!NOTE]
> すべてのハイレベルなテーマ mixin は、基本の `igx-theme` mixin をラップすることに注意してください。

すべてのテーマ mixin は、独自のテーマを作成するための開始ポイントとして使用できます。`igx-bootstrap-light-theme` mixin を使用して、新しいテーマを作成しましょう。

```scss
//最初に Ignite UI テーマ ライブラリをインポートします。
@import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #b71053;
$secondary-color: #6c757d; 

$my-color-palette: igx-palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

//重要: 必ず最初に igx-core を含めてください。
@include igx-core();
//生成したカラーパレットを igx-bootstrap-theme mixin に渡します。
@include igx-bootstrap-light-theme($my-color-palette);
```

### ブラウザー サポート
<div class="divider--half"></div>

`$igx-legacy-support` の値は、コンポーネントのテーマの動作を決定するため大変重要です。値を `true` に設定した場合、各コンポーネントのスタイルのルールの値はビルド時にテーマで定義されたハードコーディングされた値に設定されます。`$igx-legacy-support` の値を`false` に設定した場合も、スタイル ルールは `:root` スコープまたは一番近いブロックのスコープで定義された CSS 変数を検索します。

一般的なルールは、Internet Explorer 11 をサポートするかどうかに基づいて `$legacy-support` の値を設定します。IE11 をサポートする場合、`$legacy-support` 値を `true` に設定します。それ以外の場合、値を `false` (デフォルト) に設定すると、テーマで CSS 変数が必要です。

### API の概要
* [Global テーマ]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)
* [Palette]({environment:sassApiUrl}/index.html#function-igx-palette)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

コンポーネント テーマの作成方法:

* [コンポーネント テーマ](component-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
