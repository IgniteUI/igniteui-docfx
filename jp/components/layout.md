---
title: Layout Manager ディレクティブ
_description: Ignite UI for Angular Layout Manager ディレクティブはさまざまなレスポンシブで移動可能なユーザー インターフェイス スタイルを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Layout Manager コンポーネント, Angular Layout Manager コントロール
_language: ja
---

# Layout Manager
<p class="highlight">Ignite UI for Angular Layout ディレクティブは、適用されたコンテナーの子要素のレイアウト方向を指定する機能を提供します。レイアウトを垂直方向または水平方向に設定や折り返し、両端揃え、配置の制御も可能です。</p>
<div class="divider"></div>

## Angular Layout Manager の例
<div class="divider--half"></div>


<code-view style="height: 580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-sample" alt="Angular Layout Manager 例">
</code-view>


<div class="divider--half"></div>

## 使用方法

コンテナ要素で [**igxLayout**]({environment:angularApiUrl}/classes/igxlayoutdirective.html) ディレクティブを使用して、子要素のレイアウト方向を指定します。

<div class="divider--half"></div>

### 水平方向 

[`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="row"` を使用します。

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-direction-row" >
</code-view>


<div class="divider--half"></div>

### 垂直方向 

[`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="column"` を使用します。

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-direction-column" >
</code-view>


<div class="divider--half"></div>

**注**: 順序を反転するには、[`igxLayoutReverse`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#reverse)`="true"` を使用します。

<div class="divider--half"></div>

### 要素の順序をカスタマイズ
`igxFlexOrder` を使用して要素の順序をカスタマイズします。


<code-view style="height: 110px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-custom-order" >
</code-view>


<div class="divider--half"></div>

### 要素の間隔を変更

[`igxLayoutJustify`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#justify)`="space-between | space-around"` を使用して、要素の間隔を変更します。

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-content-space" >
</code-view>


<div class="divider--half"></div>

### 要素を主軸に沿って配置
[`igxLayoutJustify`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#justify)`="flex-start | center | flex-end"` を使用して、要素を主軸に沿って配置します。

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-justify-content" >
</code-view>


<div class="divider--half"></div>

### 要素を交差軸に沿って配置
[`igxLayoutItemAlign`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#itemalign)`="flex-start | center | flex-end"` を使用して、要素を交差軸に沿って配置します。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-align-items" >
</code-view>


<div class="divider--half"></div>

### 要素をラップ
[`igxLayoutWrap`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#wrap)`="wrap"` を使用して要素をラップすることもできます。

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-wrap" >
</code-view>


**注**: [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) ディレクティブはそのコンテナーの**直下**の子のフロー方向に影響します。

<div class="divider--half"></div>

## ネスト
[`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) ディレクティブを [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) 親内の要素に使用して、特定のフレックスボックス プロパティを制御します。
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxLayoutDirective]({environment:angularApiUrl}/classes/igxlayoutdirective.html)
* [IgxFlexDirective]({environment:angularApiUrl}/classes/igxflexdirective.html)