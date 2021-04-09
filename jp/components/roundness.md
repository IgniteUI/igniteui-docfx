---
title: 角の丸み付け
_description: Ignite UI for Angular は、border-radius を変更してコンポーネントの形を変更できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# 角の丸み付け
<p class="highlight">Ignite UI for Angular は、border-radius を変更してコンポーネントの形を変更できます。</p>

<div class="divider--half"></div>

## 概要
他のプロパティ同様 border radius は、以下の例のようにテーマ スキーマを介して設定されます。 

```scss
$_light-button: (
    border-radius: .2
);
```

上記の例のように [Button テーマ]({environment:sassApiUrl}/index.html#function-igx-button-theme) のコンポーネント スキーマはすべてのボタン タイプのデフォルトの border-radius を定義します。

次の例を見てみましょう。
`border-radius` のデフォルト値は 0.2 に設定されており、最後に 4 px に解決され、実際には 0 から 20px の間のフラクションです。0 が最小の border-radius で、20px は最大です。

フラクションのみに制限することはしません。ピクセル、em や rem のような関連ユニットなど任意のユニットを使用して、明示的な border radius の制限を上書きできます。

フラクションを使用する場合、テーマ エンジンによって各コンポーネントの min と max の境界に自動的に制限されます。

## 使用方法
上記の例のボタンのデフォルト値を変更できます。

```scss
// In the context of the button the min and max values are 0 - 20px, 
// For all baseline values see the table at the bottom of the page

// will resolve to 10px
$flatBtn: igx-button-theme(
    $border-radius: .5 
);

// Will resolve to 30px
$raisedBtn: igx-button-theme(
    $border-radius: 30px
);

// Will resolve to 10%
$fabBtn: igx-button-theme(
    $border-radius: 10%
);

// Will resolve to 10px 4px 10px 4px
$iconBtn: igx-button-theme(
    $border-radius: .5 .2 .5 .2
);

.flat {
    @include igx-button($flatBtn);
}

.raised {
    @include igx-button($raisedBtn);
}

.fab {
    @include igx-button($fabBtn);
}

.icon {
    @include igx-button($iconBtn);
}
```

以下は上記コードスニペットの結果です。


<code-view style="height: 250px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-roundness-sample" >
</code-view>

<div class="divider--half"></div>


## ベースライン円形値
以下のテーブルは、各コンポーネントのデフォルト border-radius とその min と max 境界を示します。

|                        | **角の形を変更できるか？** | **Min/Max 境界** | **ベースライン テーマ値** |
|------------------------|----------------------------|-----------------------|---------------------------|
| **Button(Flat)**       | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Button(Raised)**     | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **button(Fab)**        | Yes; Yes; Yes; Yes;        | 12px - 28px           | 28px                      |
| **button(Icon)**       | Yes; Yes; Yes; Yes;        | 0 - 18px              | 18px                      |
| **Button-group**       | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Chip**               | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Card**               | Yes; Yes; Yes; Yes;        | 0 - 24px              | 4px                       |
| **Carousel**           | Yes; Yes; Yes; Yes;        | 0 - 36px              | 0                         |
| **Dialog**             | Yes; Yes; Yes; Yes;        | 0 - 36px              | 4px                       |
| **Drop-down**          | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Expansion panel**    | Yes; Yes; Yes; Yes;        | 0 - 16px              | 0                         |
| **input(Border)**      | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **input(Box)**         | Yes; Yes; No; No;          | 0 - 20px              | 4px 4px 0 0               |
| **input(Search)**      | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **List**               | Yes; Yes; Yes; Yes;        | 0 - 24px              | 0                         |
| **List item**          | Yes; Yes; Yes; Yes;        | 0 - 24px              | 0                         |
| **Navdrawer**          | Yes; Yes; Yes; Yes;        | 0 - 36px              | 0                      |
| **Snackbar**           | Yes; Yes; Yes; Yes;        | 0 - 24px              | 4px                       |
| **Tooltip**            | Yes; Yes; Yes; Yes;        | 0 - 16px              | 4px                       |
| **Toast**              | Yes; Yes; Yes; Yes;        | 0 - 26px              | 26px                       |


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
