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

**Ignite UI for Angular** は、コンポーネント全体のテーマにグローバル テーマをデフォルトで使用します。アプリでユース ケースに合わせてコンポーネントにスコープしたテーマを作成できます。ここでは 1 ファイルにすべてのテーマを含みます。グローバル テーマを生成するために 2 つの mixins `igx-core` と `igx-theme` を含みます。`igx-core` は引数を受け取りません。`igx-theme` は数個受け取ります。

| 名前              |  型   | デフォルト            | 説明                                                                           |
| :---------------: | :-----: | :---------------:  | :-----------------------------------------------------------------------------------: |
| `$palette`        | map     | undefined          | パレット マップは、すべてのコンポーネントのデフォルト テーマで使用されます。             |
| `$schema`         | map     | $light-schema      | The schema used as basis for styling the components.                                  |
| `$exclude`        | list    | ( )                | グローバル テーマから除外されるコンポーネント テーマのリスト。                     |
| `$legacy-support` | boolean | `true`             | テーマ設定の方法を決定 - false に設定し、テーマは CSS 変数で設定します。 |

<div class="divider"></div>

企業のプライマリおよびセカンダリの色を使用するカスタム グローバル テーマを作成します。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/lib/core/styles/themes/index";

$primary-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
  $primary: $primary-color,
  $secondary: $secondary-color
);

// IMPORTANT: Make sure you always include igx-core first!
@include igx-core();
// Pass the color palette we generated to the igx-theme mixin
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

### Light and Dark Themes

In addition to the more powerful `igx-theme` mixin, we include two additional global theme mixins for fast bootstrapping of *__light__* and *__dark__* themes. Those mixins are `igx-light-theme` and `igx-dark-theme`.

Here's a quick showcase of how you can create a light and dark theme for your application

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
Ideally you would be applying `.light-theme` and `.dark-theme` CSS classes somewhere high in your application DOM tree. Your `app-root` element is a good candidate for that.

### ブラウザー サポート
<div class="divider--half"></div>

`$igx-legacy-support` の値は、コンポーネントのテーマが動作する方法を決定するため大変重要です。値を `true` に設定した場合、各コンポーネント スタイルのルールの値がビルド時にテーマで定義されたハード値に設定されます。`$igx-legacy-support` の値を`false` に設定した場合もスタイル ルールは `:root` スコープまたは一番近いブロック スコープで定義された CSS 変数を検索します。

一般的なルールは、Internet Explorer 11 をサポートするかどうかに基づいて `$legacy-support` の値を設定します。IE11 をサポートする場合、`$legacy-support` 値を `true` (デフォルト) に設定します。それ以外の場合、値を `false` に設定すると、テーマで CSS 変数が必要です。

### API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)
* [Palette]({environment:sassApiUrl}/index.html#function-igx-palette)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

コンポーネント テーマの作成方法:

* [コンポーネント テーマ](component-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)