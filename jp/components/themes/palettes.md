---
title: パレット
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# パレット

<p class="highlight">Ignite UI for Angular は、アプリケーションで一貫した方法でカラーを更新できる CSS 変数を公開します。</p>
<div class="divider"></div>

## 概要

Ignite UI for Angular は、`primary`、`secondary`、`gray`、`info`、`success`、`warn`、`error`、および `surface` の 8 つの基本カラーの CSS 変数として 80 カラー以上のバリアントを公開します。

`primary`、`secondary`、および `gray` カラーは [2014 Material Design カラー パレット](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)に従います。これらのカラーが以下のバリアントを含みます:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">すべて</th>
        <th colspan="4" style="text-align: center !important">Primary および Secondary のみ</th>
    </tr>
    <tr>
        <td>**50**</td>
        <td>**100**</td>
        <td>**200**</td>
        <td>**300**</td>
        <td>**400**</td>
        <td>**500**</td>
        <td>**600**</td>
        <td>**700**</td>
        <td>**800**</td>
        <td>**900**</td>
        <td>*A100*</td>
        <td>*A200*</td>
        <td>*A400*</td>
        <td>*A700*</td>
    </tr>
</table>

<div class="divider--half"></div>
上記の表に示すように、`gray` カラーには `A100`、`A200`、`A400`、および `A700` バリアントは含まれませんが、`primary` および `secondary` カラーには 14 カラー バリアントすべてが含まれます。2014 Material Design カラー パレットに含まれない `info`、`success`、`warn`、`error`、`surface` の 5つのカラーを追加しました。

上記のカラーに加えて、各カラー バリアントに **Level AAA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 準拠の `contrast` カラーも含まれています。つまり、対応する `contrast` カラー バリアントをベースカラー バリアントの前景カラーとして安全に使用できます。

> [!NOTE]
> コントラスト カラーは、Sass テーマ エンジンによってビルド時に生成されます。CSS 変数をオーバーライドしても、対応するコントラスト カラーは更新されません。

以下は、Light Material パレットで宣言された `primary` カラーの抜粋です。

```css
:root {
  --ig-primary-h: 204deg;
  --ig-primary-s: 100%;
  --ig-primary-l: 50%;
  --ig-primary-a: 1;
  --ig-primary-50: hsla(
                      var(--ig-primary-h), 
                      calc(var(--ig-primary-s) * 1.23),
                      calc(var(--ig-primary-l) * 1.78), 
                      var(--ig-primary-a)
                    );
  --ig-primary-100: hsla(
                      var(--ig-primary-h), 
                      calc(var(--ig-primary-s) * 0.8),
                      calc(var(--ig-primary-l) * 1.66),
                      var(--ig-primary-a)
                    );
  --ig-primary-200: hsla(
                      var(--ig-primary-h),
                      calc(var(--ig-primary-s) * 0.64),
                      calc(var(--ig-primary-l) * 1.43),
                      var(--ig-primary-a)
                    );
  // ...
  --ig-primary-50-contrast: black;
  --ig-primary-100-contrast: black;
  --ig-primary-200-contrast: black;
  // ...
}
```

すべてのプライマリ カラー バリアントは、`--ig-primary-h`、`--ig-primary-s`、`--ig-primary-l`、および `--ig-primary-a` の 4 つのベース変数から派生しています。これらの変数はそれぞれ、単カラーの [HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation) 部分を保持します。HSLA は、`hue` (色相)、`saturation` (彩度)、`lightness` (明度)、および `alpha` (アルファ) を表します。カラーを説明するために使用されるもう 1 つのカラー スキームです。`primary`、`secondary`、その他のカラーのすべてのバリアントを実行時に変更できるため、この方法を使用することにしました。

## パレットの定義

パレットからカラーのバリアントを変更したい場合は、スタイルシートで HSLA 値をオーバーライドできます。たとえば、プライマリ カラーを変更するのは簡単です。

```css
/* The HSLA representation of orange (#ffa500) */
/* hsla(38.8,100%,50%, 1); */
:root {
  --ig-primary-h: 38.8deg; 
  --ig-primary-s: 100%; 
  --ig-primary-l: 50%; 
  --ig-primary-a: 1; 
}
```

これにより、他のすべてのプライマリ バリアントが自動的に更新されます。

各カラーのカラー バリアントは単色です。これは、すべてのカラー バリアントが HSLA 変数から生成されるためです。

## スコープ

パレットでカラーをオーバーライドする方法は比較的簡単です。_global_ パレットを更新するには、アプリケーションの `styles.css` ファイルの `:root` セレクターにカラー バリアントをスコープします。

たとえば、企業のプライマリ カラーが `#9f349c` で、そのプライマリ カラー バリアントを作成するとします。Here's how you would go about doing this.
First get the HEX representation of the color in the HSLA color space. In this case it's 302deg for hue, 51% for saturation, 41% for lightness and 1 for alpha. Having derived the HSLA values, all you need to do to update the primary palette to this color is replace the global h, s, and l values for the primary palette:

```css
:root {
  --ig-primary-h: 302deg;
  --ig-primary-s: 51%;
  --ig-primary-l: 41%;
}
```

This will not automatically calculate the contrast color for each primary color variant. 特定のカラーを他のカラーと組み合わせて使用した場合に十分なコントラストがあるかどうかを判断するのに役立つツールが多数あります。各カラー バリアントのコントラストカラーを決定する際に、Chrome の組み込みのコントラスト チェッカーを使用できます。ビルド時にカラー パレットを生成する Sass 関数を提供します。選択したカラーからすべてのカラー バリアントとそのコントラスト カラーを自動で生成する場合は、ドキュメントの「[Sass を使用したパレット](./sass/palettes.md)」セクションを参照してください。

単一のグローバル パレット以外に、他の CSS セレクターにスコープされる複数のパレットを作成することもできます。たとえば、青と赤のパレットをクラス セレクターにスコープできます。

```css
/* styles.css */

/* cornflowerblue hsl(218.5,79.2%,66.1%) */
.blue-theme {
  --ig-primary-h: 218.5deg; 
  --ig-primary-s: 79.2%; 
  --ig-primary-l: 66.1%; 
  --ig-primary-a: 1; 
}

/* brick red hsl(351.7,57%,52.5%) */
.red-theme {
  --ig-primary-h: 351.7deg; 
  --ig-primary-s: 57%; 
  --ig-primary-l: 52.5%; 
  --ig-primary-a: 1; 
}
```

```html
<app-component class="blue-theme"></app-component>
```

class 属性の値を `blue-theme` から `red-theme` に変更することで、アプリケーションのカラーを簡単に変更できます。

この方法は、個々のコンポーネントのパレット カラーをオーバーライドする場合にも機能します。複数のパレットを作成したくないが、コンポーネントで使用されるパレットのカラーを変更したい場合があります。

Let's look at the material avatar component theme. It uses the _400_ variant of the _gray_ color for its background. Now, we can customize the theme by overriding the property responsible for setting the background, or we could change the disabled background color for it by overriding the _gray 400_ palette color:

```css
igx-avatar {
  --ig-gray-400: 146deg, 36%, 64%;
}
```

## 明暗 (Dark/Light)

>[!WARNING]
> 前景色と背景色に最も大きな影響を与える色は、`gray` と `surface` です。ほとんどの場合、これら 2 つの色は互いに対比して表示されます。そのため、`surface` の色は常に `gray` と対照的である必要があります。

Ignite UI for Angular のパレットは、テーマが明るいまたは暗いかを示します。最も影響を与える 2 つのカラーは、`gray` と `surface` です。すべてのテーマの `gray` カラー バリアントは、`#fff` などの非常に明るい色合いまたは `#222` などの非常に暗い色合いに基づいています。明るいテーマには暗い色合いの `gray` に基づいたグレー カラーのバリアントがあり、暗いテーマは反対です。すべての `gray` カラーのバリアントは白い色合いです。これらの `gray` カラーは、他のカラー (通常は `surface` カラー) に対して表示されます。テーマを適切に表示するために、`surface` のカラーは常にグレースケールの `gray` の反対側に設定します。

To make this a bit clearer, below is a list of some `gray` and `surface` color variants in both a light and a dark theme:

*Material Light:*
```css
:root {
  /* surface is set to white, i.e. ligthness 100% */
  --ig-surface-h: 0deg;
  --ig-surface-s: 0%;
  --ig-surface-l: 100%;
  --ig-surface-a: 1;
  --ig-gray-h: 0deg;

  /* grays are based on black to contrast the surface color */
  --ig-gray-h: 0%;
  --ig-gray-s: 0%;
  --ig-gray-900: var(--ig-gray-h), var(--ig-gray-s), 13%;
}
```

*Material Dark:*
```css
:root {
  /* surface is a dark shade of gray, i.e. lightness only at 13% */
  --ig-surface-h: 0deg;
  --ig-surface-s: 0%;
  --ig-surface-l: 13%;
  --ig-surface-a: 1;

  /* grays are based on white to contrast the surface color */
  --ig-gray-h: 0deg;
  --ig-gray-s: 0%;
  --ig-gray-900: var(--ig-gray-h), var(--ig-gray-s), 98%;
}
```

`gray` と `surface` カラー バリアントはほとんどのコンポーネントで使用されているため、外観全体に大きな影響を与えます。 

## その他のカラー

ここまでで、`primary`、`secondary`、`gray`、`surface` のカラー バリアントと、それらをオーバーライドする方法を説明しました。さらに 4 つのカラーがあります - `info`、`success`、`warn`、`error`。通常、異なる状態のカラーを設定するために使用されます。たとえば、`igx-input-group` コンポーネントは、入力検証状態でこれらのカラーを使用します。
They can be changed as the first three variants. Just update their `h`, `s`, and `l` variables. 

## その他のリソース

関連トピック:

- [Sass を使用したパレット](./sass/palettes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
