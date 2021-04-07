---
title: CSS 変数を使用したテーマ設定
_description: Ignite UI for Angular テーマ エンジンは、パレットの各色相の基本色とコントラスト テキスト色からマテリアル デザインのようなパレットを生成するアルゴリズムを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular テーマ コンポーネント, Angular テーマ
_language: ja
---

# CSS 変数を使用したテーマ設定
<p class="highlight">Ignite UI for Angular テーマ エンジンは、パレットの各色相の基本色とコントラスト テキスト カラーからマテリアル デザインのようなパレットを生成するアルゴリズムを提供します。</p>
<div class="divider"></div>

## 概要

Ignite UI for Angular のテーマは、図形、影、タイポグラフィ、および **カラー** によって定義されます。テーマの カラーを変更するデフォルトの方法は、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) 関数によって生成されたパレットを [igx-theme]({environment:sassApiUrl}/index.html#mixin-igx-theme) mixin に渡すことです。このパレットには、すべて HEX/rgba  カラー値で表される 40 を超える色合い (ビルド時に生成) が含まれます。これらの値は、ビルド時にコントラスト カラーを自動的に生成するために、個々のコンポーネント テーマによって順番に使用されます。たとえば、エンボス加工されたボタンは、背景に `secondary` カラーを使用します。`secondary` カラーが明るい色相に設定されている場合、エンボス加工されたボタンは、WCAG AAA アクセシビリティ要件に準拠するコントラスト カラーにテキストのカラーを自動的に計算します。この機能は、Grid や Calendar などのより複雑なコンポーネントで真に優れています。これは素晴らしいことですが、このアプローチには 1 つの大きな欠点があります。カスタム CSS プロパティのように、Sass ビルド時に不明なカラーへの参照を [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) 関数に渡すことができません。

一部のユーザーは、実行時にコンポーネント テーマのカラーを変更できることを望んでおり、`$legacy-support` をオフにして作成されたテーマのカスタム CSS 変数を公開することでそれを許可しています。明らかに、実行時にカラーの値が再計算されないため、これによってコントラストカラーが自動的に生成されることはありません。

この記事では、ユーザーがカスタム CSS プロパティ (CSS 変数) を個々のコンポーネント テーマに渡して、`Bootstrap` や `Angular Material` などの他のフレームワークによって生成された外部パレットでもカラーを別のパレットに接続できるようにする方法について詳しく説明します。

コンポーネントのスキーマまたはテーマを変更することで、任意のカスタム CSS プロパティを値として使用できるようになります。

以下は、[avatar]({environment:angularApiUrl}/classes/igxavatarcomponent.html) コンポーネントの例です。

まず、パレットのカラーを CSS 変数として特定のスコープに含めるようにしてください。この場合、ルート スコープが使用されます:

```scss
@include igx-palette-vars($light-material-palette, $contrast: true);
```

### カスタム テーマ スキーマの使用

次に、カラーを取得するための [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数 (デフォルト) の代わりに、CSS 変数を使用するカスタム avatar スキーマを作成し、それを [igx-avatar-theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) に渡します:

```scss
@include igx-core();
@include igx-theme($palette: $light-material-palette);

$custom-avatar-schema: extend($_light-avatar, (
   icon-background: var(--igx-grays-400),
   icon-color: var(--igx-grays-800),
   initials-background: var(--igx-grays-400),
   initials-color: var(--igx-grays-800)
));

@include igx-avatar(
    igx-avatar-theme(
        $schema: $custom-avatar-schema,
    )
);
```

これで、すべての avatar が`グローバル CSS パレット変数`を使用するようになります。これにより、JavaScript を使用して実行時にそれらを変更できます。たとえば `icon-color` のようなカラーを省略した場合、`var(--igx-avatar-icon-color)` に解決される [$_light-avatar]({environment:sassApiUrl}/index.html#variable-_light-avatar) スキーマで宣言された値にフォールバックするため、コンソールに警告やエラーは表示されません。

### グローバル コンポーネント テーマの宣言

2 番目のアプローチは前のアプローチと似ていますが、新しいカスタム スキーマを作成する代わりに、値を [igx-avatar-theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) 関数に直接渡すことができます。

```scss
@include igx-avatar(
    igx-avatar-theme(
        $icon-background: var(--igx-primary-500),
        $icon-color: var(--igx-grays-800),
        $initials-background: var(--igx-grays-400),
        $initials-color: var(--igx-grays-800)
    )
);
```

ただし、この方法では、ビルド時に CSS 変数参照を使用できないため、たとえば `$icon-color` プロパティを渡さないと警告がスローされます。

### 外部テーマでの使用

次のコード スニペットは、Ignite UI for Angular コンポーネントで Bootstrap 4 のカラーを使用する方法を示しています: 

```scss
@import "~bootstrap/scss/bootstrap";

:host {
    // Include the Bootstrap theme colors
    @each $color, $value in $theme-colors {
        --#{$color}: #{$value};
    }

    ::ng-deep {
        @include igx-avatar(igx-avatar-theme(
            $initials-background: var(--primary),
            $initials-color: var(--dark),
            $icon-background: var(--info),
            $icon-color: var(--light)
        ));
    }
}
```

### デモ


<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-css-variables" alt="Angular アバターの例">
</code-view>


## API 参照
<div class="divider--half"></div>

* [Light コンポーネント スキーマ]({environment:sassApiUrl}/index.html#variable-light-schema)
* [Dark コンポーネント スキーマ]({environment:sassApiUrl}/index.html#variable-dark-schema)
* [パレット カラーの取得]({environment:sassApiUrl}/index.html#function-igx-color)
* [コントラスト カラーの取得]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [カラー クラスの生成]({environment:sassApiUrl}/index.html#mixin-igx-color-classes)

## その他のリソース
<div class="divider--half"></div>

関連トピック:
* [パレット](palette.md)
* [スキーマ](schemas.md)
* [Global テーマ](global-theme.md)
* [コンポーネント テーマ](component-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

