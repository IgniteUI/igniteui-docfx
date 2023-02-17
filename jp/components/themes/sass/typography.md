---
title: タイポグラフィ
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700 
_language: ja 
---

# タイポグラフィ
<p class="highlight">Ignite UI for Angular タイポグラフィ Sass モジュールは、アプリケーションのすべてのコンポーネント、特定のタイポグラフィのスケールやコンポーネントを変更できます。</p>
<div class="divider"></div>

## 概要
アプリケーションで複数のタイポグラフィ `scales` を定義でき、スケール カテゴリを共有できます。`scale category` は、`type styles` のセットで `font-family`、`font-size`、`font-weight`、`line-height`、`letter-spacing`、`text-transform` に関する情報を含みます。

Ignite UI for Angular は、テーマごとに 4 つのデフォルトのタイプ スケールを公開します: `$material-type-scale`、`$fluent-type-scale`、`$bootstrap-type-scale`、`$indigo-type-scale` です。これらは、`typography` ミックスインでタイポグラフィ スタイルを設定するために使用します。ただし、追加のタイプ スケールを作成できます。

多くの場合、タイポグラフィを少し変更するだけで済みます。CSS 変数のドキュメントの[タイポグラフィ](../typography.md) セクションを最初に読んでおくことを推奨します。Sass を使用してタイポグラフィを変更する必要があるのは、タイポグラフィ スケール全体に関連するより深い変更を行う場合のみです。

## 使用方法
> [!IMPORTANT]
> デフォルトではタイポグラフィ スタイルを適用しません。アプリケーションでタイポグラフィを使用するには、最上位要素に `ig-typography` CSS クラスを設定し、ベース `.scss` ファイルに `typography` ミックスインを含める必要があります。

[Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) を Ignite UI for Angular のマテリアル テーマのデフォルトフォントとして選択しました。使用にはフォントをホストするか Google フォントからのフォントを含む必要があります。

```html
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet">
```

カテゴリ スタイルをタイプ スケールに  (またはタイプス ケールをカテゴリ スタイルへ) 設定または取得するための複数のミックスインと関数があります。以下はミックスインと関数です。

- `type-style` [関数] - タイプ スケール カテゴリで使用されるスタイル ルールのセットを返します。
- `type-scale` [関数] - 13 スタイルカテゴリのセットを返します。
- `type-scale-category` [関数] - タイプ スケールとカテゴリのスタイル ルールのマップを返します。
- `type-style` [ミックスイン] - スタイル ルールを特定のタイプ スケールとカテゴリからセレクターへ追加します。
- `type-style-vars` [ミックスイン] - セレクターに特定のタイプ スタイルからスタイル ルールを追加します。
- `typography` [ミックスイン] - グローバル アプリケーション タイポグラフィ スタイルを定義します。

次に上記の各ミックスインと関数の機能について説明します。

### タイプ スタイル
`type-style` 関数はインターフェイスのような関数で特定の引数をスケール カテゴリのスタイル セットの一部として渡します。たとえば、`h1` スケール カテゴリに新しいスタイル ルールのセットを定義する場合などです。以下はコード例です。

```scss
$h1-style: type-style(
    $font-size: 112px,
    $font-weight: 600,
    $line-height: 96px,
    ...
);
```

### タイプ スケール
タイプ スケールは、スケール カテゴリとして使用される 13 のタイポグラフィ スタイルのマップを生成します。新しいタイプ スケールを生成するには、次の手順を実行します。

```scss
$my-type-scale: type-scale(...);
```

> [!IMPORTANT]
> 13 のスケール カテゴリごとにタイプ スタイルを指定する必要があります。上記のように、`type-style` 関数を使用してスタイルを生成できます。

```scss
$my-type-scale: type-scale($h1: $h1-style, [$h2...$overline]);
```

既存のタイプ スケールを拡張して変更できます。`$material-type-scale` の `h1` タイプ スタイルを変更するには、次のようにします。

```scss
$my-type-scale: extend(
  $material-type-scale, 
  (
    h1: type-style(...)
  )
);
```

タイプ スタイルをスケールに追加するのも同様に簡単です。

```scss
$my-type-category: type-style(
    $font-weight: 600,
    $font-size: 42px,
    $text-transform: uppercase,
    ...
);

$my-type-scale: extend(
  $my-type-scale, 
  (
    'my-category': $my-type-category
  )
);
```

### タイポグラフィ ミックスイン

タイポグラフィミックスインは、ネイティブ h1-h6 と p 要素の外観を含むアプリケーションのグローバル タイポグラフィ スタイルを定義します。

現在 2 引数を受け付けます。
- `$font-family` - グローバル フォント ファミリがアプリケーションで使用されます。
- `$type-scale` - デフォルト タイプ スケールがアプリケーションで使用されます。

タイポグラフィ スタイルを使用するには、`core` ミックスインの後、`theme` ミックスインの前に `typography` ミックスインを含めます。上記で定義したタイプ スケール `$my-type-scale` の利点を活用するためにデフォルト タイプ スケールにしました。

```scss
@include typography(
    $font-family: $material-typeface,
    $type-scale: $my-type-scale,
);
```

type-scale と同様のタイプ フェイスの 4 つの変数を公開します - `$material-typeface`、`$fluent-typeface`、`$bootstrap-typeface`、および `$indigo-typeface` です。`typography` ミックスインを含む場合、タイプ スケールと組み合わせて使用できます。

## カスタム タイプ スタイル設定
`type-style` ミックスインは、特定のタイプ スケールからスケール カテゴリのスタイル ルールを取得するために使用できます。更にその他のスタイル ルールも追加できます。

```scss
.my-fancy-h1 {
    @include type-style('h1') {
        color: royalblue;
    }
}
```

上記のコードは、`royalblue` カラーに設定した `color` プロパティと `$my-type-scale` の `h1` スケール カテゴリのすべてのスタイル ルールを含むクラス スタイル セクター `.my-fancy-h1` を生成します。任意の要素のクラスを `.my-fancy-h1` に設定した場合、その他の `h1` 要素と同様の外観ですが色は `royalblue` になります。

## コンポーネント タイポグラフィ

Ignite UI for Angular のほとんどのコンポーネントは、テキストのスタイル設定にスケール カテゴリを使用します。たとえば、`igx-card` 紺ポーン干支は以下のスケール カテゴリを使用します。
- `h6` - カード タイトルのスタイル設定に使用します。
- `subtitle-2` - カードのサブタイトルと小タイトルのスタイル設定に使用します。
- `body-2` - カード テキスト コンテンツのスタイル設定に使用します。

カードのテキスト スタイルの変更には 2 つの方法があります。タイポグラフィ ミックスインへ渡す**マテリアル タイプ スケール**の `h6`、`subtitle-2`、`body-2` をすべてまたはそのいずれかを変更し、カードのタイトルを小さくしたい場合、`h6` スケール カテゴリの font-size を変更します。

```scss
// Create a custom h6 scale category style
$my-h6: type-style($font-size: 12px);

// Create a custom type scale with the modified h6
$my-type-scale: extend($material-type-scale, (h6: $my-h6));

// Pass the custom scale to the global typography mixin
@include typography($type-scale: $my-type-scale);
```

> [!WARNING] 
> 上記コードは `h6` スケール カテゴリをグローバルに変更するため、`h6` を使用するすべてのコンポーネントのルックアンドフィールに影響します。すべての `h6` 要素の外観が同じになるため、アプリ全体が統一した外観になります。`h6` の変更を特定のコンポーネント (`igx-card` コンポーネントなど) にのみ適用する場合があります。すべてのコンポーネントにタイポグラフィ ミックスインがあり、カテゴリ構成を受け入れます。

```scss
// Create a custom h6 scale category style
$my-h6: type-style($font-size: 12px);

// You can specify which categories from the type sale the card uses
$card-categories: (
    title: 'h6',
    title-small: 'subtitle-2',
    subtitle: 'subtitle-2',
    content: 'body-2',
);

.my-cool-card {
  // Overwrite the 'h6' type style for this scope
  @include type-style-vars('h6', $my-h6);

  // Pass the custom card catergories to the card typography mixin
  @include card-typography($card-categories);
}
```

`$my-type-scale` スケールに `h6` カテゴリの変更を渡した場合に `typography` ミックスインは含まれなくなります。あとは、作成したカスタム h6 スタイルを `type-style-vars` ミックスインに渡すだけです。

## CSS クラス

タイプ スケール カテゴリに基づいてすべてのコンポーネントにテキスト スタイルの追加する他、デフォルトの h1-h6 と p 要素のスタイルも設定します。これにより、スタイル設定からセマンティクスを分離できます。たとえば、`typography` の使用時に `h1` タグにデフォルトのスタイル設定がある場合も `ig-typography__h3` クラスを使用して `h3` に変更できます。

```html
<h1 class="ig-typography__h3">Some text</h1>
```

以下は、デフォルトで提供される全 CSS クラス一覧です。

- `ig-typography__h1`
- `ig-typography__h2`
- `ig-typography__h3`
- `ig-typography__h4`
- `ig-typography__h5`
- `ig-typography__h6`
- `ig-typography__subtitle-1`
- `ig-typography__subtitle-2`
- `ig-typography__body-1`
- `ig-typography__body-2`
- `ig-typography__button`
- `ig-typography__caption`
- `ig-typography__overline`

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
