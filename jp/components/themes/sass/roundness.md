---
title: 丸み
_description: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ 
_language: ja
---

# 丸み
<p class="highlight">Ignite UI for Angular では、丸みを 0 から 1 の間の値に設定してコンポーネントの形を変更できます。</p>
<div class="divider"></div>

## 概要
丸みは、他のプロパティと同様に、以下の例に示すようにコンポーネントのテーマまたはスキーマで設定されます。

```scss
$_material-shape-button: (
    border-radius: .2
);
```

上記の例のように [Button テーマ]({environment:sassApiUrl}/index.html#function-igx-button-theme)のコンポーネント スキーマはすべてのボタン タイプのデフォルトの border-radius を定義します。

次の例を見てみましょう。 

デフォルトの `border-radius` 値は `.2` に設定され、最終的に 4px が設定されます。0 から 1 の間のこの小数部は、許容される丸みの最小値と最大値を表します。0 は最小の境界線半径 (0px) で 1 は最大 (20px) です。ピクセルの最小値と最大値は、Sass テーマの各コンポーネントで定義されます。

フラクションのみに制限することはしません。ピクセル、相対単位 (em または rem) など任意の単位を使用して、明示的な境界線半径の制限を上書きできます。

フラクションを使用する場合、テーマ エンジンによって各コンポーネントの min と max の値に自動的に制限されます。

## 使用方法 
上記の例のボタンのデフォルト値を変更できます。

テーマ ミックスインの使用:
```scss
$my-button-theme: igx-button-theme(
    $border-radius: .5 .2 .5 .2, // resolves to 10px 4px 10px 4px
);

@include igx-button($my-button-theme);
```

コンポーネント スキーマの使用:
```scss
$my-flat-button: extend(
    $_material-flat-button,
    (
        border-radius: .5 .2 .5 .2
    )
);

$my-light-schema: extend(
    $_material-light-schema, 
    (
        igx-button: $my-flat-button
    )
);

@include igx-theme(
    $palette: $light-material-palette,
    $schema: $my-light-schema
);
```

以下は上記コード スニペットの結果です。

<div class="sample-container loading" style="height: 250px">
    <iframe id="buttons-roundness-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/buttons-roundness-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-roundness-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-roundness-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

## ベースラインの丸み
以下のテーブルは、各コンポーネントのデフォルトの丸み、およびその最小境界と最大境界を示しています。

|                     | **角の形を変更できるか？** | **Min/Max 境界** | **ベースライン テーマ値** |
|---------------------|----------------------------|------------------------|---------------------------|
| **Button(Flat)**    | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **Button(Raised)**  | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **button(Fab)**     | 〇; 〇; 〇; 〇;        | 12px - 28px            | 28px                      |
| **button(Icon)**    | 〇; 〇; 〇; 〇;        | 0 - 18px               | 18px                      |
| **Button-group**    | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **Chip**            | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **Card**            | 〇; 〇; 〇; 〇;        | 0 - 24px               | 4px                       |
| **Carousel**        | 〇; 〇; 〇; 〇;        | 0 - 36px               | 0                         |
| **Dialog**          | 〇; 〇; 〇; 〇;        | 0 - 36px               | 4px                       |
| **Drop-down**       | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **Expansion panel** | 〇; 〇; 〇; 〇;        | 0 - 16px               | 0                         |
| **input(Border)**   | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **input(Box)**      | 〇; 〇; x; x;          | 0 - 20px               | 4px 4px 0 0               |
| **input(Search)**   | 〇; 〇; 〇; 〇;        | 0 - 20px               | 4px                       |
| **List**            | 〇; 〇; 〇; 〇;        | 0 - 24px               | 0                         |
| **List item**       | 〇; 〇; 〇; 〇;        | 0 - 24px               | 0                         |
| **Navdrawer**       | 〇; 〇; 〇; 〇;        | 0 - 36px               | 0                         |
| **Snackbar**        | 〇; 〇; 〇; 〇;        | 0 - 24px               | 4px                       |
| **Tooltip**         | 〇; 〇; 〇; 〇;        | 0 - 16px               | 4px                       |
| **Toast**           | 〇; 〇; 〇; 〇;        | 0 - 26px               | 26px                      |


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
