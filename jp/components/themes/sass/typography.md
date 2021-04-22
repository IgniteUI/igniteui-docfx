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

Ignite UI for Angular は、テーマごとに 4 つのデフォルトのタイプ スケールを公開します: `$material-type-scale`、`$fluent-type-scale`、`$bootstrap-type-scale`、`$indigo-type-scale` です。これらは、`igx-typography` ミックスインでタイポグラフィ スタイルを設定するために使用します。ただし、追加のタイプ スケールを作成できます。

多くの場合、タイポグラフィを少し変更するだけで済みます。CSS 変数のドキュメントの[タイポグラフィ](./typography.md) セクションを最初に読んでおくことを推奨します。Sass を使用してタイポグラフィを変更する必要があるのは、タイポグラフィ スケール全体に関連するより深い変更を行う場合のみです。

## 使用方法
> [!IMPORTANT]
> デフォルトではタイポグラフィ スタイルを適用しません。アプリケーションでタイポグラフィを使用するには、最上位要素に `igx-typography` CSS クラスを設定し、ベース `.scss` ファイルに `igx-typography` ミックスインを含める必要があります。

[Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) を Ignite UI for Angular のマテリアル テーマのデフォルトフォントとして選択しました。使用にはフォントをホストするか Google フォントからのフォントを含む必要があります。

```html
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet">
```

カテゴリ スタイルをタイプ スケールに  (またはタイプス ケールをカテゴリ スタイルへ) 設定または取得するための複数のミックスインと関数があります。以下はミックスインと関数です。

- `igx-type-style` [関数] - タイプ スケール カテゴリで使用されるスタイル ルールのセットを返します。
- `igx-type-scale` [関数] - 13 スタイルカテゴリのセットを返します。
- `igx-type-scale-category` [関数] - タイプ スケールとカテゴリのスタイル ルールのマップを返します。
- `igx-type-style` [ミックスイン] - スタイル ルールを特定のタイプ スケールとカテゴリからセレクターへ追加します。
- `igx-typography` [ミックスイン] - グローバル アプリケーション タイポグラフィ スタイルを定義します。


次に上記の各ミックスインと関数の機能について説明します。

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
> `$font-family`、`$letter-spacing` など、渡さないパラメーターは、スタイルを作成する各カテゴリの `$material-type-scale` で指定された値で自動的に設定されます。

### タイプ スケール
タイプ スケールは、13 のスケール カテゴリを含むタイプ スタイルのマップです。
新しい タイプ マップを生成するには、以下を入力します。

```scss
$my-type-scale: igx-type-scale();
```

コードは、`igx-typography` ミックスインがデフォルトで使用する `$material-type-scale` と同じマップを生成します。

いくつか変更を加えたタイプ スケールを生成した前の例で定義した `$h1-style` を使用できます。

```scss
$my-type-scale: igx-type-scale($h1: $h1-style);
```

`$my-type-scale` は、`h1` カテゴリ スケールに指定した変更を含む変更済みのタイプ スケールを保存します。 

> [!NOTE]
> 13 カテゴリ スケールは、それぞれにタイプ スタイルを渡して自由に変更できます。 

既存のタイプカテゴリの変更に加えて、新しいカテゴリを追加することもできます。

```scss
$my-type-category: igx-type-style(
    $font-weight: 600,
    $font-size: 42px,
    $text-transform: uppercase
);

$my-type-scale: extend($my-type-scale, (
    'my-category': $my-type-category
));
```

### タイポグラフィ ミックスイン

タイポグラフィミックスインは、ネイティブ h1-h6 と p 要素の外観を含むアプリケーションのグローバル タイポグラフィ スタイルを定義します。

現在 3 引数を受け付けます。
- `$font-family` - グローバル フォント ファミリがアプリケーションで使用されます。
- `$type-scale` - デフォルト タイプ スケールがアプリケーションで使用されます。

タイポグラフィ スタイルを使用するには、`igx-core` ミックスインの後、`igx-theme` ミックスインの前に `igx-typography` ミックスインを含めます。上記で定義したタイプ スケール `$my-type-scale` の利点を活用するためにデフォルト タイプ スケールにしました。

```scss
@include igx-typography(
    $font-family: $material-typeface,
    $type-scale: $my-type-scale,
);
```
type-scale と同様のタイプ フェイスの 4 つの変数を公開します - `$material-typeface`、`$fluent-typeface`、`$bootstrap-typeface`、および `$indigo-typeface` です。`igx-typography` ミックスインを含む場合、タイプ スケールと組み合わせて使用できます。

## カスタム タイプ スタイル設定
`igx-type-style` ミックスインは、特定のタイプ スケールからスケール カテゴリのスタイル ルールを取得するために使用できます。更にその他のスタイル ルールも追加できます。

```scss
.my-fancy-h1 {
    @include igx-type-style($my-type-scale, 'h1') {
        color: royalblue;
    }
}
```

上記のコードは、`royalblue` カラーに設定した `color` プロパティと `$my-type-scale` の `h1` スケール カテゴリのすべてのスタイル ルールを含むクラス スタイル セクター `.my-fancy-h1` を生成します。任意の要素のクラスを `.my-fancy-h1` に設定した場合、その他の `h1` 要素と同様の外観ですが色は `royalblue` になります。

## コンポーネント タイポグラフィ

Ignite UI for Angular のほとんどのコンポーネントは、テキストのスタイル設定にスケール カテゴリを使用します。たとえば、`igx-card` 紺ポーン干支は以下のスケール カテゴリを使用します。
- `h5` - カード タイトルのスタイル設定に使用します。
- `subtitle-2` - カードのサブタイトルと小タイトルのスタイル設定に使用します。
- `body-2` - カード テキスト コンテンツのスタイル設定に使用します。

カードのテキスト スタイルの変更には 2 つの方法があります。タイポグラフィ ミックスインへ渡す **マテリアル タイプ スケール** の `h5`、`subtitle-2`、`body-2` をすべてまたはそのいずれかを変更し、カードのタイトルを小さくしたい場合、`h5` スケール カテゴリの font-size を変更します。

```scss
// Create a custom h5 scale category style
$my-h5: igx-type-style($font-size: 18px);

// Create a custom type scale with the modified h5
$my-type-scale: igx-type-scale($h5: $my-h5);

// Pass the custom scale to the global typography mixin
@include igx-typography($type-scale: $my-type-scale);
```

> [!WARNING] 
> 上記コードは `h5` スケール カテゴリをグローバルに変更するため、`h5` を使用するすべてのコンポーネントのルックアンドフィールに影響します。すべての `h5` 要素の外観が同じになるため、アプリ全体が統一した外観になります。`h5` の変更を特定のコンポーネント (`igx-card` コンポーネントなど) にのみ適用する場合があります。すべてのコンポーネントにタイポグラフィ ミックスインがあり、タイプ スケール自体およびカテゴリ構成を受け入れます。

```scss
// Create a custom h5 scale category style
$my-h5: igx-type-style($font-size: 18px);

// Create a custom type scale with the modified h5
$my-type-scale: igx-type-scale($h5: $my-h5);

// Pass the custom scale to the card typography mixin only
@include igx-card-typography($type-scale: $my-type-scale);
```

`$my-type-scale` スケールに `h5` カテゴリの変更を渡した場合に `igx-typography` ミックスインは含まれなくなります。作成したカスタム スケールを `igx-card-typography` ミックスインへ渡します。`$my-type-scale` スケールを使用するコンポーネントはカードのみになります。

タイポグラフィ スタイル ミックスインは、特定のセレクターにスコープできます。カスタムのカード タイポグラフィをクラス名が `my-cool-card` のすべての `igx-card` コンポーネントに適用する場合、

```scss
//...
.my-cool-card {
    @include igx-card-typography($type-scale: $my-type-scale);
}
```

タイポグラフィ コンポーネント ミックスインは、2 つ目の引数 - `$categories` を取得します。コンポーネントのどのパーツがどのタイポグラフィ スケール カテゴリを使用するかを構成するために使用されます。たとえば、カスタム カードのタイトルに`h5` 以外のスケールカテゴリを使用する場合にも変更できます。

```scss
@include igx-card-typography(
    $type-scale: $my-type-scale,
    $categories: (
        title: 'h6'
    )
);
```

カード コンポーネントは、`overline` スケール カテゴリ をタイトルのスタイル設定に使用します。ユーザーは異なるタイプ スケールをカードの各テキスト部分に割り当ててカード タイポグラフィ全体を見直すことができます。

## CSS クラス

タイプ スケール カテゴリに基づいてすべてのコンポーネントにテキスト スタイルの追加する他、デフォルトの h1-h6 と p 要素のスタイルも設定します。これにより、スタイル設定からセマンティクスを分離できます。たとえば、`igx-typography` の使用時に `h1` タグにデフォルトのスタイル設定がある場合も `igx-typography__h3` クラスを使用して `h3` に変更できます。

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
