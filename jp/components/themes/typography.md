---
title: Typography
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700 
_language: ja
---

# タイポグラフィ 
<p class="highlight">Ignite UI for Angular Typography Sass モジュールは、アプリケーション全体、特定ののタイポグラフィのスケールやコンポーネントを変更できます。</p>
<div class="divider"></div>

Ignite UI for Angular は、マテリアル デザインの仕様で説明されるように[タイプ システム](https://material.io/design/typography/the-type-system.html#)に準拠します。タイプ システムは、***タイプ スケール***でほとんどのコンポーネントで使用されている **13 の異なるカテゴリ タイプ スタイル**で構成されます。エンドユーザーはすべてのスケール カテゴリの完全な再利用、調整ができます。

以下は、Ignite UI for Angular で定義される 13 カテゴリ スタイルすべてのリストです。
| **スケール カテゴリ** | **フォント ファミリ** | **フォント ウェイト** | **フォント サイズ** | **テキスト変換** | **文字スペース** | **行の高さ** |
|----------------|-----------------|-----------------|---------------|--------------------|--------------------|-----------------|
| **h1** | Titillium Web | 300 | 6 rem | none | -.09375 rem | 7 rem |
| **h2** | Titillium Web | 300 | 3.75 rem | none | -.0312 rem | 4.4375 rem |
| **h3** | Titillium Web | 400 | 3 rem | none | 0 | 3.5625 rem |
| **h4** | Titillium Web | 400 | 2.125 rem | none | .015625 rem | 2.5 rem |
| **h5** | Titillium Web | 400 | 1.5 rem | none | 0 | 1.75 rem |
| **h6** | Titillium Web | 600 | 1.25 rem | none | .009375 rem | 1.5 rem |
| **subtitle-1** | Titillium Web | 400 | 1 rem | none | .009375 rem | 1.5 rem |
| **subtitle-2** | Titillium Web | 600 | .875 rem | none | .00625 rem | 1.5 rem |
| **body-1** | Titillium Web | 400 | 1 rem | none | .03125 rem | 1.75 rem |
| **body-2** | Titillium Web | 400 | .875 rem | none | .015625 rem | 1.25 rem |
| **button** | Titillium Web | 600 | .875 rem | uppercase | .046875 | 1 rem |
| **caption** | Titillium Web | 400 | .75 rem | none | .025 rem | 1 rem |
| **overline** | Titillium Web | 400 | .625 rem | uppercase | .09375 rem | 1 rem |

<div class="divider"></div>

アプリケーションで複数の `scales` を定義でき、スケール カテゴリを共有できます。`scale category` は、`type styles` のセットで `font-family`、`font-size`、`font-weight`、`line-height`、`letter-spacing`、`text-transform` に関する情報を含みます。

Ignite UI for Angular は、初期のタイポグラフィのスタイルを設定するために `igx-typography` mixin で順番に使用される`$default-type-scale` (上記の表を参照) を定義します。ただしユーザーは、`igx-typography` mixin で使用するために異なるタイプスケールを渡すことができます。

## 使用方法
> [!IMPORTANT]
> デフォルトではタイポグラフィ スタイルを適用しません。アプリケーションでインフラジスティックスのタイポグラフィを使用するには、`igx-typography` CSS をトップ レベルの要素に設定する必要があります。そのすべての子がタイポグラフィ スタイルを使用するようになります。

Ignite UI for Angular のデフォルト フォントは [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) です。使用にはフォントをホストするか Google フォントからのフォントを含む必要があります。

```html
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet">
```

カテゴリ スタイルをタイプ スケールに  (またはタイプス ケールをカテゴリ スタイルへ) 設定または取得するための複数の mixins と関数があります。以下は mixins と関数です。

- `igx-type-style` [関数] - タイプ スケール カテゴリで使用されるスタイル ルールのセットを返します。
- `igx-type-scale` [関数] - 13 スタイルカテゴリのセットを返します。
- `igx-type-scale-category` [関数] - タイプ スケールとカテゴリのスタイル ルールのマップを返します。
- `igx-type-style` [mixin] - スタイル ルールを特定のタイプ スケールとカテゴリからセレクターへ追加します。
- `igx-typography` [mixin] - グローバル アプリケーション タイポグラフィ スタイルを定義します。


次に上記の各 mixins と関数の機能について説明します。

### タイプ スタイル
`igx-type-style` 関数はインターフェイスのような関数で特定の引数をスケール カテゴリのスタイル セットの一部として渡します。たとえば、`h1` スケール カテゴリに新しいスタイル ルールのセットを定義する場合などです。以下はコード例です。

```scss
$h1-style: igx-type-style(
    $font-size: 112px,
    $font-weight: 600,
    $line-height: 96px
);
```

> [!NOTE]
> `$font-family`, `letter-spacing` などの渡さないプロパティは、スタイルを使用したいカテゴリの `$default-type-scale` で指定したデフォルト値で自動的に置き換えられます。


### タイプ スケール

タイプ スケールは、すべての 13 スケール カテゴリのタイプ スタイルのマップです。新しいタイプ マップの生成は、以下の Sass を記述します。

```scss
$my-type-scale: igx-type-scale();
```

コードは、`igx-typography` mixin がデフォルトで使用する `$default-scale-map` と同じマップを生成します。

いくつか変更を加えたタイプ スケールを生成した前の例で定義した `$h1-style` を使用できます。

```scss
$my-type-scale: igx-type-scale($h1: $h1-style);
```

 `$my-type-scale` は、`h1` カテゴリ スケールに指定した変更を含む変更済みのタイプ スケールを保存します。 

> [!NOTE]
> 13 カテゴリ スケールは、それぞれにタイプ スタイルを渡して自由に変更できます。 

### タイポグラフィ Mixin

タイポグラフィ mixin は、ネイティブ h1-h6 と p 要素の外観を含むアプリケーションのグローバル タイポグラフィ スタイルを定義します。

現在 2 引数を受け付けます。
- `$font-family` - グローバル フォント ファミリがアプリケーションで使用されます。
- `$type-scale` - デフォルト タイプ スケールがアプリケーションで使用されます。

デフォルト タイポグラフィを上書きする場合、`igx-core` mixin の後に `igx-typography` mixin を含む必要があります。上記で定義したタイプ スケール `$my-type-scale` の利点を活用するためにデフォルト タイプ スケールにしました。

```scss
@include igx-typography(
    $font-family: "'Roboto', sans-serif",
    $type-scale: $my-type-scale,
);
```

## カスタム タイプ スタイル設定
`igx-type-style` mixin は、特定のタイプ スケールからスケール カテゴリのスタイル ルールを取得するために使用できます。更にその他のスタイル ルールも追加できます。

```scss
.my-fancy-h1 {
    @include igx-type-style($my-type-scale, 'h1') {
        color: royalblue;
    }
}
```

上記のコードは、`royalblue` 色に設定した `color` プロパティと `$my-type-scale` の `h1` スケール カテゴリのすべてのスタイル ルールを含むクラス スタイル セクター `.my-fancy-h1` を生成します。任意の要素のクラスを `.my-fancy-h1` に設定した場合、その他の `h1` 要素と同様の外観ですが色は `royalblue` になります。

## コンポーネント タイポグラフィ

Ignite UI for Angular のほとんどのコンポーネントは、テキストのスタイル設定にスケール カテゴリを使用します。たとえば、`igx-card` 紺ポーン干支は以下のスケール カテゴリを使用します。
- `h5` - カード タイトルのスタイル設定に使用します。
- `subtitle-2` - カードのサブタイトルと小タイトルのスタイル設定に使用します。
- `body-2` - カード テキスト コンテンツのスタイル設定に使用します。

カードのテキスト スタイルの変更には 2 つの方法があります。タイポグラフィ mixin へ渡す ***デフォルト タイプ スケール*** の `h5`、`subtitle-2`、`body-2` をすべてまたはそのいずれかを変更し、カードのタイトルを小さくしたい場合、`h5` スケールカテゴリの font-size を変更します。

```scss
// Create a custom h5 scale category style
$my-h5: igx-type-style($font-size: 18px);

// Create a custom type scale with the modified h5
$my-type-scale: igx-type-scale($h5: $my-h5);

// Pass the custom scale to the global typography mixin
@include igx-typography($type-scale: $my-type-scale);
```

上記コードは `h5` スケール カテゴリをグローバルに変更するため、`h5`を使用するすべてのコンポーネントのルックアンドフィールに影響します。すべての `h5` 要素の外観が同じになるため、アプリ全体が統一した外観になります。`igx-card` コンポーネントのように `h5` を特定のコンポーネントのみに適用したい場合、カテゴリ構成同様にタイプ スケール自体を受け付ける各コンポーネントのタイポグラフィ mixin を使用します。

```scss
// Create a custom h5 scale category style
$my-h5: igx-type-style($font-size: 18px);

// Create a custom type scale with the modified h5
$my-type-scale: igx-type-scale($h5: $my-h5);

// Pass the custom scale to the card typography mixin only
@include igx-card-typography($type-scale: $my-type-scale);
```

`$my-type-scale` スケールに `h5` カテゴリの変更を渡した場合に `igx-typography` mixin は含まれなくなります。作成したカスタム スケールを `igx-card-typography` mixin へ渡します。`$my-type-scale` スケールを使用するコンポーネントはカードのみになります。

タイポグラフィ スタイル mixins は、特定のセレクターにスコープできます。カスタムのカード タイポグラフィをクラス名が `my-cool-card` のすべての `igx-card` コンポーネントに適用する場合、 

```scss
//...
.my-cool-card {
    @include igx-card-typography($type-scale: $my-type-scale);
}
```

タイポグラフィ コンポーネント mixins は、2 つ目の引数 - `$categories` を取得します。コンポーネントのどのパーツがどのタイポグラフィ スケール カテゴリを使用するかを構成するために使用されます。たとえば、カスタム カードのタイトルに`h5` 以外のスケールカテゴリを使用する場合にも変更できます。

```scss
@include igx-card-typography(
    $type-scale: $my-type-scale,
    $categories: (
        title: 'h6'
    )
);
```

カード コンポーネントは、`overline` スケール カテゴリ をタイトルのスタイル設定に使用します。
ユーザーは異なるタイプ スケールをカードの各テキスト部分に割り当ててカード タイポグラフィ全体を見直すことができます。

## CSS クラス

タイプ スケール カテゴリに基づいてすべてのコンポーネントにテキスト スタイルの追加する他、デフォルトの h1-h6 と p 要素のスタイルも設定します。また、スタイル設定とセマンティックスは区別します。たとえば、`igx-typography` の使用時に `h1` タグにデフォルトのスタイル設定がある場合も `igx-typography__h3` クラスを使用して `h3` に変更できます。

```html
<h1 class="igx-typography__h3">Some text</h1>
```

以下は、デフォルトで提供される全 CSS クラス一覧です。

- `igx-typography__h1`
- `igx-typography__h2`
- `igx-typography__h3`
- `igx-typography__h4`
- `igx-typography__h5`
- `igx-typography__h6`
- `igx-typography__subtitle-1`
- `igx-typography__subtitle-2`
- `igx-typography__body-1`
- `igx-typography__body-2`
- `igx-typography__button`
- `igx-typography__caption`
- `igx-typography__overline`

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
