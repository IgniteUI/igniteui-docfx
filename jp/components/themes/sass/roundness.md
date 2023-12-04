---
title: 丸み
_description: Ignite UI for Angular は、border-radius を変更してコンポーネントの形を変更できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ 
_language: ja
---

# 丸み
<p class="highlight">Ignite UI for Angular では、丸みを 0 から 1 の間の値に設定してコンポーネントの形を変更できます。</p>
<div class="divider"></div>

## 概要
境界半径 (border-radius) は、コンポーネントのテーマ スキーマで定義されます (以下の例を参照)。この方法で定義されたコンポーネントの境界半径は、[theme]({environment:sassApiUrl}/index.html#mixin-theme) ミックスインの `$roundness` パラメーター、または `--ig-radius-factor` と呼ばれる単一の CSS 変数を介して制御できます。

```scss
$light-toast: (
    ...,
    border-radius: (rem(26px), rem(0), rem(26px)),
);
```

上記の例からわかるように、[Toast]({environment:sassApiUrl}/index.html#variable-light-toast) のコンポーネント スキーマは、境界半径を 3 つの値のリストとして定義します。最初の値はデフォルトの境界半径です (`$roundness` または `--ig-radius-factor` が宣言されていない場合など)。2 番目の値は、許容される最小境界半径を示します (`$roundness` または `--ig-radius-factor` が `0` に設定されている場合など)。3 番目の値は、許容される最大境界半径を示します(`$roundness` または `--ig-radius-factor` が `1` に設定されている場合など)。トースト コンポーネントでは、デフォルト値と最大値が一致します。`$roundness` または `--ig-radius Factor` に割り当てられた 0 から 1 までの値は、トーストの境界半径を最大値のパーセンテージとして設定します。たとえば、値を `.5` に設定すると、トースト コンポーネントの境界半径が、許容される最大境界半径の 50% になります (13 ピクセル)。

```scss
// Make all components sharp by setting the roundness parameter to 0.
@include theme(
    ...,
    $roundness: 0
);
```

### 使用方法
上記の例のトーストのデフォルト値を変更できます。

トーストが結果のテーマの `$roundness` または `--ig-radius-factor` 変数の影響を受けたい場合は、Ignite UI for Angular パッケージで提供される `border-radius` 関数を使用します。

```scss
// Change the default, min and max values,
// while preserving customization via $roundness or --ig-radius-factor.
$toast-theme: (
    ...,
    border-radus: border-radius(rem(4px), rem(4px), rem(16px))
);

@include css-vars($toast-theme);
```

border-radius を `--ig-radius-factor` の変更の影響を受けずに定数値にしたい場合は、それを border-radius パラメーターに直接渡すだけです。

```scss
// Will be unaffected by changes to $roundess or --ig-radius-factor.
$toast-theme: (
    ...,
    border-radus: rem(4px)
);

@include css-vars($toast-theme);
```

<div class="divider--half"></div>

### ベースライン境界半径の値
以下の表は、マテリアル スキーマで定義されているコンポーネントの境界半径値の一部の抜粋を示しています。

| **コンポーネント**          | **Min/Max 境界** | **デフォルトの境界** |
|------------------------|--------------------|--------------------|
| **Button(Flat)**       |  0 / 20px          | 4px                |
| **Button(Contained)**  |  0 / 20px          | 4px                |
| **button(Fab)**        |  12px / 28px       | 28px               |
| **button(Icon)**       |  0 / 18px          | 18px               |
| **Button-group**       |  0 / 20px          | 4px                |
| **Chip**               |  0 / 20px          | 4px                |
| **Card**               |  0 / 24px          | 4px                |
| **Carousel**           |  0 / 36px          | 0                  |
| **Dialog**             |  0 / 36px          | 4px                |
| **Drop-down**          |  0 / 20px          | 4px                |
| **Expansion panel**    |  0 / 16px          | 0                  |
| **input(Border)**      |  0 / 20px          | 4px                |
| **input(Box)**         |  0 / 20px          | 4px 4px 0 0        |
| **input(Search)**      |  0 / 20px          | 4px                |
| **List**               |  0 / 24px          | 0                  |
| **List item**          |  0 / 24px          | 0                  |
| **Navdrawer**          |  0 / 36px          | 0                  |
| **Snackbar**           |  0 / 24px          | 4px                |
| **Tooltip**            |  0 / 16px          | 4px                |
| **Toast**              |  0 / 26px          | 26px               |

各テーマのデフォルトおよび最小/最大半径値を確認するには、各コンポーネントの [スキーマ]({environment:sassApiUrl}/index.html) ドキュメントを参照してください。

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
