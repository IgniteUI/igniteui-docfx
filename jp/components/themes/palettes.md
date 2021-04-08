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

Ignite UI for Angular は、`primary`、`secondary`、`grays`、`info`、`success`、`warn`、`error`、および `surface` の 8 つの基本カラーの CSS 変数として 80 カラー以上のバリアントを公開します。

`primary`、`secondary`、および `grays` カラーは [2014 Material Design カラー パレット](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)に従います。これらのカラーが以下のバリアントを含みます:

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
上記の表に示すように、`grays` カラーには `A100`、`A200`、`A400`、および `A700` バリアントは含まれませんが、`primary` および `secondary` カラーには 14 カラー バリアントすべてが含まれます。2014 Material Design カラー パレットに含まれない `info`、`success`、`warn`、`error`、`surface` の 5つのカラーを追加しました。これらのカラーには 1 つのカラー バリアント (`500`) のみがあります。

上記のカラーに加えて、各カラー バリアントに **Level AAA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 準拠の `contrast` カラーも含まれています。つまり、対応する `contrast` カラー バリアントをベースカラー バリアントの前景カラーとして安全に使用できます。

> [!NOTE]
> コントラスト カラーは、Sass テーマ エンジンによってビルド時に生成されます。CSS 変数をオーバーライドしても、対応するコントラスト カラーは更新されません。

以下は、Light Material パレットで宣言された `primary` カラーの抜粋です。

```css
:root {
  --igx-primary-h: 204deg;
  --igx-primary-s: 100%;
  --igx-primary-l: 50%;
  --igx-primary-a: 1;
  --igx-primary-50: hsla(
                      var(--igx-primary-h), 
                      calc(var(--igx-primary-s) * 1.23),
                      calc(var(--igx-primary-l) * 1.78), 
                      var(--igx-primary-a)
                    );
  --igx-primary-100: hsla(
                      var(--igx-primary-h), 
                      calc(var(--igx-primary-s) / 1.25),
                      calc(var(--igx-primary-l) * 1.66),
                      var(--igx-primary-a)
                    );
  --igx-primary-200: hsla(
                      var(--igx-primary-h),
                      calc(var(--igx-primary-s) * .64),
                      calc(var(--igx-primary-l) * 1.43),
                      var(--igx-primary-a)
                    );
  // ...
  --igx-primary-50-contrast: black;
  --igx-primary-100-contrast: black;
  --igx-primary-200-contrast: black;
  // ...
}
```

すべてのカラー バリアントは、`-i-gx-primary-h`、`-i-gx-primary-s`、`--igx-primary-l`、および `--igx-primary-a` の 4 つのベース変数から派生しています。これらの変数はそれぞれ、単カラーの [HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation) 部分を保持します。HSLA は、`hue` (色相)、`saturation` (彩度)、`lightness` (明度)、および `alpha` (アルファ) を表します。カラーを説明するために使用されるもう 1 つのカラー スキームです。`primary`、`secondary`、その他のカラーのすべてのバリアントを実行時に変更できるため、この方法を使用することにしました。

## パレットの定義

パレットからカラーのバリアントを変更したい場合は、スタイルシートで HSLA 値をオーバーライドできます。たとえば、プライマリ カラーを変更するのは簡単です。

```css
/* The HSLA representation of orange (#ffa500) */
/* hsla(38.8,100%,50%, 1); */
:root {
  --igx-primary-h: 38.8deg; 
  --igx-primary-s: 100%; 
  --igx-primary-l: 50%; 
  --igx-primary-a: 1; 
}
```

これにより、他のすべてのプライマリ バリアントが自動的に更新されます。

各カラーのカラー バリアントは単色です。これは、すべてのカラー バリアントが HSLA 変数から生成されるためです。任意のカラー スキームを使用してのみ個々のカラーをオーバーライドできます。

```css
:root {
  --igx-primary-600: darkorange;
}
```

これを行う場合は注意してください。

```css
:root {
  --igx-primary-500: orange;
  --igx-primary-600: blue;
}
```

一部のコンポーネント テーマが複数のカラー バリアントを使用するため、予期しない結果になる場合があります。単色パレットを中心にすべてのコンポーネント テーマをデザインしました。

## スコープ

パレットでカラーをオーバーライドする方法は比較的簡単です。_global_ パレットを更新するには、アプリケーションの `styles.css` ファイルの `:root` セレクターにカラー バリアントをスコープします。

たとえば、企業のプライマリ カラーが `#9f349c` で、そのプライマリ カラー バリアントを作成するとします。1 つのオプションは、[マテリアル カラー ツール](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)を使用してすべてのカラー バリアントを生成することです。以下はツールで生成されたカラーを宣言する方法です。

```css
:root {
  --igx-primary-50: #f3e6f2;
  --igx-primary-100: #e2c0e0;
  --igx-primary-200: #d096cd;
  --igx-primary-300: #d096cd;
  --igx-primary-400: #bd6db9;
  --igx-primary-500: #9f349c;
  --igx-primary-600: #923095;
  --igx-primary-700: #81298d;
  --igx-primary-800: #722584;
  --igx-primary-900: #561d74;
}
```
このアプローチは、実行時に HSLA スキームからカラー バリアントを作成するために使用する `calc` 関数を無視しますが、選択したパレットを指定できます。

マテリアル カラー ツールは、各カラー バリアントのコントラストカラーを提供しません。特定のカラーを他のカラーと組み合わせて使用した場合に十分なコントラストがあるかどうかを判断するのに役立つツールが多数あります。各カラー バリアントのコントラストカラーを決定する際に、Chrome の組み込みのコントラスト チェッカーを使用できます。ビルド時にカラー パレットを生成する Sass 関数を提供します。選択したカラーからすべてのカラー バリアントとそのコントラスト カラーを自動で生成する場合は、ドキュメントの「[Sass を使用したパレット](./sass/palettes.md)」セクションを参照してください。

単一のグローバル パレット以外に、他の CSS セレクターにスコープされる複数のパレットを作成することもできます。たとえば、青と赤のパレットをクラス セレクターにスコープできます。

```css
/* styles.css */

/* cornflowerblue hsl(218.5,79.2%,66.1%) */
.blue-theme {
  --igx-primary-h: 218.5deg; 
  --igx-primary-s: 79.2%; 
  --igx-primary-l: 66.1%; 
  --igx-primary-a: 1; 
}

/* brick red hsl(351.7,57%,52.5%) */
.red-theme {
  --igx-primary-h: 351.7deg; 
  --igx-primary-s: 57%; 
  --igx-primary-l: 52.5%; 
  --igx-primary-a: 1; 
}
```

```html
<app-component class="blue-theme"></app-component>
```

class 属性の値を `blue-theme` から `red-theme` に変更することで、アプリケーションのカラーを簡単に変更できます。

この方法は、個々のコンポーネントのパレット カラーをオーバーライドする場合にも機能します。複数のパレットを作成したくないが、コンポーネントで使用されるパレットのカラーを変更したい場合があります。

ボタン、カレンダー、および入力グループコンポーネントのテーマを見てみましょう。それらはすべて、無効な背景として _grays_ カラーの _100_ バリアントを使用します。無効な背景を設定する個々のプロパティをオーバーライドすることによって各コンポーネントのテーマをカスタマイズできます。または 3 つすべての _grays 100_ パレットのカラーをオーバーライドすることで、3 つのすべての無効な背景色を変更できます。

```css
igx-avatar,
igx-button,
igx-calendar {
  --igx-grays-100: lightgray;
}
```

## 明暗 (Dark/Light)

Ignite UI for Angular のパレットは、テーマが明るいまたは暗いかを示します。最も影響を与える 2 つのカラーは、`grays` と `surface` です。すべてのテーマの `grays` カラー バリアントは、`#fff` などの非常に明るい色合いまたは `#222` などの非常に暗い色合いに基づいています。明るいテーマには暗い色合いの `grays` に基づいたグレー カラーのバリアントがあり、暗いテーマは反対です。すべての `grays` カラーのバリアントは白い色合いです。これらの `grays` カラーは、他のカラー (通常は `surface` カラー) に対して表示されます。テーマを適切に表示するために、`surface` のカラーは常にグレースケールの `grays` の反対側に設定します。

以下は、RGBA カラー スペースで表される light および dark テーマのすべての `grays` と `surface` カラー バリアントのリストです。

*Material Light:*
```css
:root {
  /* surface is set to white */
  --igx-surface-500: #fff;

  /* grays are based on black to contrast the surface color */
  --igx-grays-50: rgba(0, 0, 0, 0.02);
  --igx-grays-100: rgba(0, 0, 0, 0.04);
  --igx-grays-200: rgba(0, 0, 0, 0.08);
  --igx-grays-300: rgba(0, 0, 0, 0.12);
  --igx-grays-400: rgba(0, 0, 0, 0.26);
  --igx-grays-500: rgba(0, 0, 0, 0.38);
  --igx-grays-600: rgba(0, 0, 0, 0.54);
  --igx-grays-700: rgba(0, 0, 0, 0.62);
  --igx-grays-800: rgba(0, 0, 0, 0.74);
  --igx-grays-900: rgba(0, 0, 0, 0.87);
}
```

*Material Dark:*
```css
:root {
  /* surface is a dark shade of gray */
  --igx-surface-500: #222;

  /* grays are based on white to contrast the surface color */
  --igx-grays-50: rgba(255, 255, 255, 0.02);
  --igx-grays-100: rgba(255, 255, 255, 0.04);
  --igx-grays-200: rgba(255, 255, 255, 0.08);
  --igx-grays-300: rgba(255, 255, 255, 0.12);
  --igx-grays-400: rgba(255, 255, 255, 0.26);
  --igx-grays-500: rgba(255, 255, 255, 0.38);
  --igx-grays-600: rgba(255, 255, 255, 0.54);
  --igx-grays-700: rgba(255, 255, 255, 0.62);
  --igx-grays-800: rgba(255, 255, 255, 0.74);
  --igx-grays-900: rgba(255, 255, 255, 0.87);
}
```

`grays` と `surface` カラー バリアントはほとんどのコンポーネントで使用されているため、外観全体に大きな影響を与えます。 

## その他のカラー

ここまでで、`primary`、`secondary`、`greys`、`surface` のカラー バリアントと、それらをオーバーライドする方法を説明しました。さらに 4 つのカラーがあります - `info`、`success`、`warn`、`error`。通常、異なる状態のカラーを設定するために使用されます。たとえば、`igx-input-group` コンポーネントは、入力検証状態でこれらのカラーを使用します。

```css
:root {
  --igx-info-500: blue;
  --igx-success-500: green;
  --igx-warn-500: orange;
  --igx-error-500: red;
}
```

## その他のリソース

関連トピック:

- [Sass を使用したパレット](./sass/palettes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
