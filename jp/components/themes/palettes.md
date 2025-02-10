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

Ignite UI for Angular は、`primary`、`secondary`、`surface`、`gray`、`info`、`success`、`warn` および `error` の 8 つの基本カラーの CSS 変数として 80 カラー以上のバリエーションを公開します。

`primary`、`secondary`、および `gray` カラーは [2014 Material Design カラー パレット](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)に従います。これらのカラーが以下のバリエーションを含みます:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">すべて</th>
        <th colspan="4" style="text-align: center !important"><b>Primary および Secondary のみ</b></th>
    </tr>
    <tr>
        <td>50</td>
        <td>100</td>
        <td>200</td>
        <td>300</td>
        <td>400</td>
        <td>500</td>
        <td>600</td>
        <td>700</td>
        <td>800</td>
        <td>900</td>
        <td><b>A100</b></td>
        <td><b>A200</b></td>
        <td><b>A400</b></td>
        <td><b>A700</b></td>
    </tr>
</table>

<div class="divider--half"></div>

上記の表に示すように、`gray` カラーには `A100`、`A200`、`A400`、および `A700` バリエーションは含まれませんが、`primary` および `secondary` カラーには 14 カラー バリエーションすべてが含まれます。2014 Material Design カラー パレットに含まれない `info`、`success`、`warn`、`error`、`surface` の 5つのカラーを追加しました。

上記のカラーに加えて、各カラー バリエーションに **Level AA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 準拠の `contrast` カラーも含まれています。つまり、対応する `contrast` カラー バリエーションをベースカラー バリエーションの前景カラーとして安全に使用できます。

> [!NOTE]
> コントラスト カラーは、メイン変数のカラー (primary、secondary など) に基づいて、Sass テーマ設定エンジンによってビルド時に生成されます。

以下は、Light Material パレットで宣言された `primary` 変数カラーの抜粋です。

```css
:root {
  //...
  --ig-primary-500: #09f;
  --ig-primary-500-contrast: black;
  --ig-primary-600: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.89));
  --ig-primary-600-contrast: black;
  --ig-primary-700: hsl(from var(--ig-primary-500) h calc(s * 1.26) calc(l * 0.81));
  //...
  --ig-secondary-400: hsl(from var(--ig-secondary-500) h calc(s * 0.875) calc(l * 1.08));
  --ig-secondary-400-contrast: black;
  --ig-secondary-500: #df1b74;
  --ig-secondary-500-contrast: white;
  --ig-secondary-600: hsl(from var(--ig-secondary-500) h calc(s * 1.26) calc(l * 0.89));
  --ig-secondary-600-contrast: white;
  //...
}
```

すべてのプライマリ カラー バリエーションは、1 つの基本変数カラー バリエーション `--ig-primary-500` から派生します。他のカラー変数 (`--ig-secondary-500`、`--ig-surface-500` など) にも同様のことが当てはまります。他のバリエーションは、メイン変数カラー バリエーション `500` を受け取り、割り当てられた変数バリエーション (`600`、`700` など) に応じて `saturation` と `lightness` を変更する相対カラー関数 `hsl()` によって生成されます。`primary`、`secondary`、`surface`、またはその他のカラーのすべてのバリエーションを実行時に変更できるため、この方法を使用することにしました。

> [!WARNING]
> コントラスト カラーは他の部分のように CSS 実行時に生成されないため、メイン カラー バリエーション (`500`) を変更しても、コントラスト カラーは更新されません。手動で変更する必要があります。この動作は今後のリリースで改善され、コントラスト カラーも CSS 実行時に計算されるようになります。

## パレットの定義

パレットにあるカラーのバリアントを変更したい場合は、その `500` カラー バリエーションをオーバーライドできます。たとえば、プライマリ カラーを変更するのは簡単です。

```css
:root {
  --ig-primary-500: #09f;
}
```

これにより、他のすべてのプライマリ バリアントが自動的に更新されます。

各カラーのカラー バリエーションは単色です。これは、すべてのカラー バリエーションが相対カラー関数 `hsl()` を使用して生成されるためです。

## スコープ

パレットでカラーをオーバーライドする方法は比較的簡単です。_global_ パレットを更新するには、アプリケーションの `styles.css` ファイルの `:root` セレクターにカラー バリエーションをスコープします。

たとえば、企業のプライマリ カラーが `#9f349c` で、そのプライマリ カラー バリアントを作成するとします。必要なのは、`--ig-primary-500` 変数を、RGB、HEX などの任意のカラー値タイプの目的のカラーに置き換えることだけです。

```css
:root {
  --ig-primary-500: #9f349c;
}
```

これにより、各基本カラー バリエーションが自動的に変更されます。

単一のグローバル パレット以外に、他の CSS セレクターにスコープされる複数のパレットを作成することもできます。たとえば、青と赤のパレットをクラス セレクターにスコープできます。

```css
/* styles.css */

.blue-theme {
    --ig-primary-500: #0008ff;
}

.red-theme {
    --ig-primary-500: #ff0400;
}
```

```html
<app-component class="blue-theme"></app-component>
```

class 属性の値を `blue-theme` から `red-theme` に変更することで、アプリケーションのカラーを簡単に変更できます。

この方法は、個々のコンポーネントのパレット カラーをオーバーライドする場合にも機能します。複数のパレットを作成したくないが、コンポーネントで使用されるパレットのカラーを変更したい場合があります。

マテリアル アバター コンポーネント テーマを見てみましょう。背景に _gray_ 色の _400_ バリエーションを使用します。これで、背景の設定を担当するプロパティをオーバーライドしてテーマをカスタマイズできます。または、_gray 400_ パレット カラーをオーバーライドして、無効な背景色を変更できます。

```css
igx-avatar {
  --ig-gray-400: #efefef;
}
```

## 明暗 (Dark/Light)

>[!WARNING]
> 前景色と背景色に最も大きな影響を与える色は、`gray` と `surface` です。ほとんどの場合、これら 2 つの色は互いに対比して表示されます。そのため、`surface` の色は常に `gray` と対照的である必要があります。

Ignite UI for Angular のパレットは、テーマが明るいまたは暗いかを示します。最も影響を与える 2 つのカラーは、`gray` と `surface` です。すべてのテーマの `gray` カラー バリエーションは、`#fff` などの非常に明るい色合いまたは `#222` などの非常に暗い色合いに基づいています。明るいテーマには暗い色合いの `gray` に基づいたグレー カラーのバリエーションがあり、暗いテーマは反対です。すべての `gray` カラーのバリエーションは白い色合いです。これらの `gray` カラーは、他のカラー (通常は `surface` カラー) に対して表示されます。テーマを適切に表示するために、`surface` のカラーは常にグレースケールの `gray` の反対側に設定します。

これをもう少し明確にするために、明るいテーマと暗いテーマの両方での `gray` と `surface` のカラー バリエーションのリストを以下に示します:

*Material Light:*
```css
:root {
  //...
  /* surface is set to light color*/
  --ig-surface-500: white;
  //...
  /* grays are based on dark gray to contrast the surface color */
  --ig-gray-500: hsl(0, 0%, 62%);
  //...
}
```

*Material Dark:*
```css
:root {
  //...
  /* surface is set to dark color*/
  --ig-surface-500: #222;
  //...
  /* grays are based on light gray to contrast the surface color */
  --ig-gray-500: hsl(0, 0%, 74%);
  //...
}
```

`gray` と `surface` カラー バリエーションはほとんどのコンポーネントで使用されているため、外観全体に大きな影響を与えます。

## その他のカラー

ここまでで、`primary`、`secondary`、`gray`、`surface` のカラー バリエーションと、それらをオーバーライドする方法を説明しました。さらに 4 つのカラーがあります - `info`、`success`、`warn`、`error`。通常、異なる状態のカラーを設定するために使用されます。たとえば、`igx-input-group` コンポーネントは、入力検証状態でこれらのカラーを使用します。
これらは他のカラー バリエーションと同様に変更できます。`500` バリエーションを設定するだけで、他のすべてのバリエーションが生成されます。

```css
:root {
    --ig-info-500: #1377d5;
    --ig-success-500: #4eb862;
    --ig-warn-500: #faa419;
    --ig-error-500: #ff134a;
}
```

## その他のリソース

関連トピック:

- [Sass を使用したパレット](./sass/palettes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
