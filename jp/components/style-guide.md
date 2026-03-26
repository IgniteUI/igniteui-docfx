# スタイル ガイド

## 色

<div class="sg-palette">
    <div class="sg-color-block sg-color-block--primary">
        <strong>Primary</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--secondary-1">
        <strong>Secondary 1</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--secondary-2">
        <strong>Secondary 2</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--accent">
        <strong>Accent </strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--info">
        <strong>Info</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--success">
        <strong>Success</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--warning">
        <strong>Warning</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--error">
        <strong>Error</strong>
        <span></span>
    </div>
</div>

## バッジ

<div class="sg-flex-row sg-align-i-center sg-badges">
    <div class="new__badge">NEW</div>
    <div class="updated__badge">UPDATED</div>
</div>

## 太字、斜体、取り消し線

このテキストは**太字**です。  
このテキストは_斜体_です。  
このテキストは~~取り消し線~~です。

## 見出し

<div class="h1"> 見出しテキスト h1</div>
<div class="h2"> 見出しテキスト h2</div>
<div class="h3"> 見出しテキスト h3</div>
<div class="h4"> 見出しテキスト h4</div>
<div class="h5"> 見出しテキスト h5</div>
<div class="h5"> 見出しテキスト h6</div>

## 段落

デフォルトでは、Markdown は二重改行で段落を追加します。
単独の改行はそのまま同じ行にラップされます。
1 行を区切るソフト<a href="#">リターン</a>を使用する場合は、行末に 2 つのスペースを追加します。

この行は末尾に段落区切りがあります (後に空行あり)。

この 2 行は、行末に二重スペースがないため、
1 行として表示されます。

次の行は末尾にソフト ブレークがあります (末尾に 2 つのスペース)  
この行は直後の次の行に続きます。
この行は末尾に段落区切りがあります (後に空行あり)。

## リンク

[jp.infragistics.com](https://jp.infragistics.com/)

[別のトピックへのリンク](general/getting-started.md)

[内部リンク](#色)

## ブロック引用
>
> <div class="h4">見出しは単独で改行されます</div>
> 見出しはブロック要素であり自動的に改行されるため、
行継続文字は不要です。
テキスト行のみ、単一行の改行には二重スペースが必要です。

## 順序なしリスト

- アイテム 1
- アイテム 2
- アイテム 3

## 順序付きリスト

1. **アイテム 1**  
   アイテム 1 は本当に重要です。
2. **アイテム 2**  
   アイテム 2 は別の意味で重要です。

## インライン コード

`x =1 to 10` のような構造化されたステートメントは、シングル バック ティックを使用してコード化できます (<a href="#"><code>structures</code></a>)。

## コード ブロック

```scss
:host {
    ::ng-deep {
        // comment
        @include splitter($custom-splitter-theme);
    }
}
```

## アラート
>
> [!WARNING]
> これはメモのテキストです。  
> 2 行にわたっています。
> [!NOTE]
> 1 行の注記です。
> [!IMPORTANT]
> 帽子をかぶることを忘れないでください！

## テーブル

| テスト | テスト                                                    | テスト | テスト | テスト |
|------|---------------------------------------------------------|------|------|------|
| 値  | テーブルメニューを使用して必要なサイズのテーブルを設定します。 | 値  | 値  | 値  |
| 値  | テーブルメニューを使用して必要なサイズのテーブルを設定します。 | 値  | 値  | 値  |
| 値  | テーブルメニューを使用して必要なサイズのテーブルを設定します。 | 値  | 値  | 値  |


## ページ ページネーション

<ul class="pagination">
    <li class="page-item first disabled">
        <a class="page-link">最初</a>
    </li>
    <li class="page-item prev disabled">
        <a class="page-link">前へ</a>
    </li>
    <li class="page-item active">
        <a class="page-link">1</a>
    </li>
    <li class="page-item">
        <a class="page-link">2</a>
    </li>
    <li class="page-item">
        <a class="page-link">3</a>
    </li>
    <li class="page-item next">
        <a class="page-link">次へ</a>
    </li>
    <li class="page-item last">
        <a class="page-link">最後</a>
    </li>
</ul>

## 詳細

<div class="fancy-details">
    <details>
        <summary>概要テキスト</summary>
        <p>このスタイルを実現するには、<code>details</code> を <code>.fancy-details</code> クラスの div でラップする必要があります。</p>
    </details>
    <details>
        <summary>概要テキスト</summary>
        <p>このスタイルを実現するには、<code>details</code> を <code>.fancy-details</code> クラスの div でラップする必要があります。</p>
    </details>
</div>
