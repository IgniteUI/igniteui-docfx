---
title: タイポグラフィ
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700
_language: ja
---

# タイポグラフィ

<p class="highlight">Ignite UI for Angular のタイポグラフィは、[マテリアル タイプ システム (英語)](https://material.io/design/typography/the-type-system.html#)をモデルにしています。邪魔にならないオプションで、CSS のみを使用してタイプ スタイルを変更できます。</p>
<div class="divider"></div>

## 概要
タイプ システムは、**タイプ スケール**でほとんどのコンポーネントで使用されている **13 の異なるカテゴリ タイプ スタイル**で構成されます。エンドユーザーはすべてのスケール カテゴリの完全な再利用、調整ができます。

以下は、Ignite UI for Angular のマテリアル テーマで定義される 13 カテゴリ スタイルすべてのリストです。
| **スケール カテゴリ** | **フォント ファミリ** | **フォントの太さ** | **フォント サイズ** | **テキストの変換** | **文字間隔** | **線の高さ** | **CSS クラス**                |
|--------------------|-----------------|-----------------|---------------|--------------------|--------------------|-----------------|------------------------------|
| **h1**             | Titillium Web   | 300             | 6 rem         | none (なし)               | -.09375 rem        | 7 rem           | `igx-typography__h1`         |
| **h2**             | Titillium Web   | 300             | 3.75 rem      | none (なし)               | -.0312 rem         | 4.4375 rem      | `igx-typography__h2`         |
| **h3**             | Titillium Web   | 400             | 3 rem         | none (なし)               | 0                  | 3.5625 rem      | `igx-typography__h3`         |
| **h4**             | Titillium Web   | 400             | 2.125 rem     | none (なし)               | .015625 rem        | 2.5 rem         | `igx-typography__h4`         |
| **h5**             | Titillium Web   | 400             | 1.5 rem       | none (なし)               | 0                  | 1.75 rem        | `igx-typography__h4`         |
| **h6**             | Titillium Web   | 600             | 1.25 rem      | none (なし)               | .009375 rem        | 1.5 rem         | `igx-typography__h4`         |
| **subtitle-1**     | Titillium Web   | 400             | 1 rem         | none (なし)               | .009375 rem        | 1.5 rem         | `igx-typography__subtitle-1` |
| **subtitle-2**     | Titillium Web   | 600             | .875 rem      | none (なし)               | .00625 rem         | 1.5 rem         | `igx-typography__subtitle-2` |
| **body-1**         | Titillium Web   | 400             | 1 rem         | none (なし)               | .03125 rem         | 1.75 rem        | `igx-typography__body-1`     |
| **body-2**         | Titillium Web   | 400             | .875 rem      | none (なし)               | .015625 rem        | 1.25 rem        | `igx-typography__body-2`     |
| **button**         | Titillium Web   | 600             | .875 rem      | uppercase (大文字)          | .046875            | 1 rem           | `igx-typography__button`     |
| **caption**        | Titillium Web   | 400             | .75 rem       | none (なし)               | .025 rem           | 1 rem           | `igx-typography__caption`    |
| **overline**       | Titillium Web   | 400             | .625 rem      | uppercase (大文字)          | .09375 rem         | 1 rem           | `igx-typography__overline`   |

<div class="divider"></div>

各テーマは独自のタイプ スケールを定義します。つまり、Material、Fluent、Boostrap、および Indigo の各テーマに独自のタイプ スケールがあります。これらはすべて同じスケール カテゴリを共有しますが、異なるフォント ファミリ、太さ、サイズ、テキスト変換、文字間隔、線の高さを持つことができます。

## 使用方法
> [!IMPORTANT]
> デフォルトではタイポグラフィ スタイルを適用しません。アプリケーションでインフラジスティックスのタイポグラフィを使用するには、`igx-typography` CSS をトップ レベルの要素に設定する必要があります。そのすべての子がタイポグラフィ スタイルを使用するようになります。

Ignite UI for Angular のマテリアル テーマのデフォルト フォントは [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) です。使用にはフォントをホストするか Google フォントからのフォントを含む必要があります。

```html
<link
  href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700"
  rel="stylesheet"
/>
```

body 要素で `igx-typography` クラスを設定してタイポグラフィ スタイルを有効にします。

```html
<!-- index.html -->
<body class="igx-typography">
  <app-root></app-root>
</body>
```

### フォント ファミリの変更

すべてのコンポーネントでフォント ファミリを変更するには、`igx-typography` クラスを希望の font-family 値で上書きします。

```css
/* styles.css */
.igx-typography {
    font-family: "Open Sans", sans-serif;
}
```

## タイプ スタイル

タイプ スタイルは、Ignite UI for Angular のほとんどのコンポーネントで内部的に使用されます。たとえば、ボタン コンポーネントはボタン タイプのスタイルを使用するとドキュメントに記載されています。つまり、含まれる `igx-typography__button` クラスを上書きすることによって、ボタン コンポーネントのタイポグラフィをコピーして変更できます。

マテリアル テーマのボタンのテキストを常に小文字に変更するとします。

```css
.igx-typography .igx-typography__button {
    text-transform: lowercase;
}
```

```html
<!-- app.component.html -->
<button [igxButton] class="igx-typography__button">Flat</button>
```

一部のコンポーネントには、テンプレートに多くの要素が埋め込まれています。CSS クラスを使用して直接変更するには、注意が必要です。この記事の作成時点では、このようなコンポーネントのタイポグラフィを完全に変更する唯一の方法は、[Sass タイポグラフィ](./sass/typography.md) ミックスインにフォールバックする必要があります。CSS 変数を使用して個々のコンポーネントのタイポグラフィを変更するより良い方法の提供に取り組んでいます。

<div class="divider"></div>

## その他のリソース

- [Sass を使用したタイポグラフィ](./sass/typography.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
