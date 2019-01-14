---
title: Layout Manager ディレクティブ
_description: Ignite UI for Angular Layout Manager ディレクティブはさまざまなレスポンシブで移動可能なユーザー インターフェイス スタイルを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Layout Manager コンポーネント, Angular Layout Manager コントロール
_language: ja
---

## Layout Manager

<p class="highlight">Ignite UI for Angular Layout ディレクティブは、適用されたコンテナーの子要素のレイアウト方向を指定する機能を提供します。レイアウトを垂直方向または水平方向に設定や折り返し、両端揃え、配置の制御も可能です。</p>
<div class="divider"></div>

### Layout デモ

<div class="sample-container loading" style="height: 2460px">
    <iframe id="layout-sample-iframe" src='{environment:demosBaseUrl}/layouts/layout' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

[**igxLayout**]({environment:angularApiUrl}/classes/igxlayoutdirective.html) ディレクティブをコンテナー要素に適用して子要素のレイアウト方向を指定します。水平方向は [`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="row"`、垂直方向は [`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="column"` です。

**注**: [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) ディレクティブはそのコンテナーの**直下**の子のフロー方向に影響します。

<div class="divider--half"></div>

### ネスト

[`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) ディレクティブを [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) 親内の要素に使用して、特定のフレックスボックス プロパティを制御します。
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxLayoutDirective]({environment:angularApiUrl}/classes/igxlayoutdirective.html)
* [IgxFlexDirective]({environment:angularApiUrl}/classes/igxflexdirective.html)