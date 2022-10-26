<!-- --- -->
<!-- title: Theming コンポーネント - ネイティブ Angular | Ignite UI for Angular -->
<!-- _description: Ignite UI for Angular Theming コンポーネントは SASS によって開発されます。API は簡単で、単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。 -->
<!-- _keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular Theming -->
<!-- _language: ja-->
<!-- --- -->

# テーマ
Ignite UI for Angular を使用すると、CSS 変数を使用してすべてのコンポーネント テーマのスタイルを変更できます。本当に深く掘り下げたい場合は、強力な Sass テーマ エンジンを提供します。これにより、特定のデザイン言語に合わせた、最新のすべてのブラウザーで機能するグローバル コンポーネント テーマを作成できます。

>[!NOTE] 
> このドキュメントでは、バージョン 12 以降の Ignite UI for Angular のテーマ システムについて説明します。バージョン 12 以降、**CSS 変数は、グローバルおよびコンポーネント テーマを変更するための推奨される方法です**。
> バージョン 12 より前のバージョンと同様に、Sass テーマ ライブラリを引き続き使用できます。

## 基本的な使用方法

Ignite UI for Angular には、パッケージの一部として次のテーマが含まれています:
    - Material
    - Bootstrap
    - Fluent
    - Indigo

すべてのテーマには、ライト バリエーションとダーク バリエーションがあり、デフォルトで左から右 (LTR) および右から左 (RTL) のコンテンツがサポートされています。アプリケーションでバンドルされているテーマの使用を開始する最も簡単な方法は、`angular.json` 構成で CSS テーマ ファイルへのパスを指定することです。たとえば、ダーク マテリアル テーマを使用する場合は、次のようにテーマ ファイルへのパスを含めます:

```json
"styles": [
  "node_modules/igniteui-angular/styles/igniteui-angular-dark.css",
  "src/styles.css"
]
```

>[!NOTE]
> `ng add igniteui-angular` パッケージをインストールした場合は、すでに `igniteui-angular.css` が styles 配列に追加されていることに気付くでしょう。

styles フォルダーに含まれるテーマの完全なリストは次のとおりです:

| テーマ名                  | パス                                                                       |
|-----------------------------|----------------------------------------------------------------------------|
| **Material Light**          | `node_modules/igniteui-angular/styles/igniteui-angular.css`                |
| **Material Dark**           | `node_modules/igniteui-angular/styles/igniteui-angular-dark.css`           |
| **Bootstrap Light**         | `node_modules/igniteui-angular/styles/igniteui-bootstrap-light.css`        |
| **Bootstrap Dark**          | `node_modules/igniteui-angular/styles/igniteui-bootstrap-dark.css`         |
| **Material Dark Green**     | `node_modules/igniteui-angular/styles/igniteui-dark-green.css`             |
| **Fluent Light**            | `node_modules/igniteui-angular/styles/igniteui-fluent-light.css`           |
| **Fluent Dark**             | `node_modules/igniteui-angular/styles/igniteui-fluent-dark.css`            |
| **Fluent Light Excel**      | `node_modules/igniteui-angular/styles/igniteui-fluent-light-excel.css`     |
| **Fluent Dark Excel**       | `node_modules/igniteui-angular/styles/igniteui-fluent-dark-excel.css`      |
| **Fluent Light Word**       | `node_modules/igniteui-angular/styles/igniteui-fluent-light-word.css`      |
| **Fluent Dark Word**        | `node_modules/igniteui-angular/styles/igniteui-fluent-dark-word.css`       |
| **Indigo Light**            | `node_modules/igniteui-angular/styles/igniteui-indigo-light.css`           |
| **Indigo Dark**             | `node_modules/igniteui-angular/styles/igniteui-indigo-dark.css`            |

ご覧のとおり、かなりの量のテーマを備えた Ignite UI for Angular を提供しています。

ただし、これでテーマの話は終わりではありません。すべてのテーマは Sass ソースからコンパイルされ、強力なテーマ エンジンを使用して構築されています。このエンジンには Sass の `mixins` と `functions` が含まれており、その多くは公開されているため、アプリケーションのすべてのコンポーネントを完全に再設計できます。

Sass が適切でない場合は、[カスタム CSS プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties)、または CSS 変数として知られているものを使用してコンパイルされたテーマを簡単に変更できるようにしました。Sass を CSS 変数と組み合わせて使用することもできます。

## グローバル変数

上記の CSS テーマのいずれかを調べると、`:root` ルール スコープにかなりの数の CSS 変数が含まれていることがわかります。 `colors`、`shadows`、`typography` 、および `configuration` の変数が含まれています。これらの変数のいずれかを変更すると、テーマの全体的なルック アンド フィールをカスタマイズでき、逆にコンポーネントをカスタマイズできます。

テーマを変更するときにほとんどの人が探しているのは、コンポーネントで使用されるデフォルト カラーを変更することです。

プライマリ カラーとセカンダリ カラーを変更したい場合は、`styles.css` ファイルに次のように入力するだけです。

```css
/* styles.css */
:root {
  --ig-primary-h: 105deg;
  --ig-primary-s: 29%;
  --ig-primary-l: 56%;

  --ig-secondary-h: 259deg;
  --ig-secondary-s: 63%;
  --ig-secondary-l: 24%;
}
```

これらのカラー変数の名前を分解してみましょう。`ig` プレフィックスは、この変数が Ignite UI for Angular テーマの一部であることを示す一意の識別子としてあり、`primary` は `color` パレットの名前であり、`h`、`s`、および ` l` 色相、彩度、明度です。ドキュメントの [パレット](./palettes.md) セクションでパレットについて詳しく見ていきます。今のところ知っておく必要があるのは、色相、彩度、および明度の CSS 変数からすべて生(成されるさまざまな色合いまたは _variants_ を含むいくつかの基本色 (primary、secondary、success、info など) があることだけです。`500` のカラー バリエーションは、色相、彩度、および明度の主要な表現値と見なされます。たとえば、プライマリ 500 カラー バリアントは `--ig-primary-500: hsla(var(--ig-primary-h), var(--ig-primary-s), var(--ig-primary-l), var(--ig-primary-a))` として宣言されます。

このアプローチに従うと、パレット全体を完全に見直すことができます。

>[!WARNING]
> 一部のコンポーネントは、パレットのカラーを使用しません。そのような場合、カラーを変更するには、コンポーネントの CSS 変数を直接ターゲットにする必要があります。
> どのパレットのカラーがどのコンポーネントで使用されているかを確認するには、コンポーネントの[ドキュメント]({environment:sassApiUrl}/index.html#variable-_light-avatar)を参照してください。

同様に、`エレベーション` (シャドウ) の変更も同様に簡単です。25 のエレベーション レベル (0〜24) が含まれています。
これらの変数がどのように見えるかを簡略化したバージョンを次に示します。

```css
/* styles.css */
:root {
  --ig-elevation-0: none;
  --ig-elevation-1: 0 1px 3px 0 rgba(0, 0, 0, 0.26),
                    0 1px 1px 0 rgba(0, 0, 0, 0.12),
                    0 2px 1px -1px rgba(0, 0, 0, 0.08);
  /* ... */
  --ig-elevation-24: 0 11px 15px -7px rgba(0, 0, 0, 0.26),
                  0 24px 38px 3px rgba(0, 0, 0, 0.12),
                  0 9px 46px 8px rgba(0, 0, 0, 0.08);
}
```

これらは基本的に積層された CSS [`box-shadow`](https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow) 宣言です。それらを他の有効な `box-shadow` 値に置き換えることができます。エレベーション レベルの数値が高いほど、シャドウが大きくなります。この場合も、コンポーネントごとに異なるエレベーション レベルが使用されます。コンポーネントが使用するエレベーション レベルを確認するには、[コンポーネントのドキュメント]({environment:sassApiUrl}/index.html#variable-_light-avatar)を参照してください。ドキュメントの[エレベーション](./elevations.md)でエレベーションを詳しく見ていきます。

## 構成

テーマのグローバルな動作を構成できる変数がいくつかあります:

#### 丸み

すべてのコンポーネントの半径係数を構成するには、`--ig-radius-factor` 変数の値を変更できます。デフォルト値は 1 です。これは、コンポーネント テーマ全体でデフォルトの半径係数が使用されることを意味します。

例:

```css
/* Makes all components appear blocky in shape */
:root {
  --ig-radius-factor: 0;
}
```

#### エレベーション係数

すべてのコンポーネントのエレベーション係数を構成するには、`--ig-elevation-factor` 変数の値を変更できます。デフォルト値は 1 です。これは、コンポーネント テーマ全体でデフォルトのエレベーションが使用されることを意味します。

例:

```css
/* Makes all components appear flat (no-shadows) */
:root {
  --ig-elevation-factor: 0;
}
```

## コンポーネント変数

すべてのコンポーネントは、コンポーネント固有の CSS 変数を使用してテーマを変更する機能を提供します。各コンポーネントは、同じプロパティを変更する 2 つの変数を公開します。公開された変数は、`global` および `local` と考えることができます。どちらも同じ方法でコンポーネントのテーマを変更します。唯一の違いは、`global` 変数には `igx-[component-name]` プレフィックスが変数名に付加されており、親セレクターから子コンポーネントのスタイルを設定するために使用できますが、`local` 変数は、コンポーネント インスタンスに固有です。

例を見てみましょう。アバターの背景を変更したいとします。アバターは、背景を変更する次の CSS 変数を探します。

```css
/* styles.css */
:root {
  --igx-avatar-background: black;
}

igx-avatar {
  --background: orange;
}
```

上記のスニペットは、すべてのアバターの背景を orange カラーに設定します。

アバター コンポーネントは、最初に `--background` 変数を探します。明示的に設定されている場合は、その値を取ります。つまり、`local` 変数の優先度は高く、タグ セレクターまたは `igx-avatar` をターゲットとするその他のセレクターを使用して、`igx-avatar` に直接適用された場合に**のみ**機能します。
グローバル `--igx-avatar-background` はフォールバック変数と考えることができます。ローカルの `--background` が明示的にオーバーライドされていない場合にのみ使用されます。

好奇心旺盛な方のために、これがアバターの内部でどのように実装されているかを次に示します:

```css
igx-avatar {
  --background: var(--igx-avatar-background, var(--ig-gray-400));
  background: var(--background);
}
```

通常、コンポーネントのすべてのインスタンスに変更を適用する場合は _global_ 変数を使用しますが、_local_ 変数は特定のコンポーネント インスタンスを対象とし、常にグローバル変数をオーバーライドします。

次の例を見てみましょう。

```html
<!-- app.component.html -->
<igx-avatar>AB</igx-avatar>
<igx-avatar>CD</igx-avatar>
<app-contacts></app-contacts>
```

```html
<!-- contacts.component.html -->
<igx-avatar>EF</igx-avatar>
<igx-avatar>GH</igx-avatar>
```

```css
/* styles.css */
:root {
  --igx-avatar-background: lavender;
}
```

```css
/* contacts.component.css */
igx-avatar {
  --background: purple;
}
```

アバター `AB` と `CD` は、グローバルに設定された _lavender_ カラーを背景として使用しますが、アバター `EF` と `GH` は _purple_ 背景を持ちます。

**各コンポーネントには、コンポーネント ドキュメントのスタイル セクションにすべてのテーマ プロパティが記載されています。**

テーマ設定を開始するために必要なのはこれだけです。グローバルおよびローカル コンポーネント テーマを作成することにより、グローバル パレットのカラー、高さを変更したり、コンポーネント テーマのプロパティを変更したりできます。詳細を知りたい場合は、**パレット**、**エレベション**、**タイポグラフィ**、**Sass を使用したテーマ**などのトピックをご覧ください。

## その他のリソース

関連トピック:

- [パレット](./palettes.md)
- [エレベーション](./elevations.md)
- [タイポグラフィ](./typography.md)
- [Sass のテーマ](./sass/index.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
