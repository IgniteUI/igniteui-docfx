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

<div class="sample-container loading" style="height: 580px">
    <iframe id="layout-sample-iframe" src='{environment:demosBaseUrl}/layouts/layout-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Layout Manager 例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

## 使用方法

コンテナ要素で [**igxLayout**]({environment:angularApiUrl}/classes/igxlayoutdirective.html) ディレクティブを使用して、子要素のレイアウト方向を指定します。

<div class="divider--half"></div>

### 水平方向 

[`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="row"` を使用します。
<div class="sample-container loading" style="height: 180px">
    <iframe id="layout-direction-row-iframe" src='{environment:demosBaseUrl}/layouts/layout-direction-row' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-direction-row-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-direction-row-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 垂直方向 

[`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="column"` を使用します。
<div class="sample-container loading" style="height: 300px">
    <iframe id="layout-direction-column-iframe" src='{environment:demosBaseUrl}/layouts/layout-direction-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-direction-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-direction-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

**注**: 順序を反転するには、[`igxLayoutReverse`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#reverse)`="true"` を使用します。

<div class="divider--half"></div>

### 要素の順序をカスタマイズ
`igxFlexOrder` を使用して要素の順序をカスタマイズします。

<div class="sample-container loading" style="height: 110px">
    <iframe id="layout-custom-order-iframe" src='{environment:demosBaseUrl}/layouts/layout-custom-order' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-custom-order-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-custom-order-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 要素の間隔を変更

[`igxLayoutJustify`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#justify)`="space-between | space-around"` を使用して、要素の間隔を変更します。
<div class="sample-container loading" style="height: 180px">
    <iframe id="layout-content-space-iframe" src='{environment:demosBaseUrl}/layouts/layout-content-space' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-content-space-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-content-space-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 要素を主軸に沿って配置
[`igxLayoutJustify`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#justify)`="flex-start | center | flex-end"` を使用して、要素を主軸に沿って配置します。
<div class="sample-container loading" style="height: 180px">
    <iframe id="layout-justify-content-iframe" src='{environment:demosBaseUrl}/layouts/layout-justify-content' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-justify-content-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-justify-content-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 要素を交差軸に沿って配置
[`igxLayoutItemAlign`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#itemalign)`="flex-start | center | flex-end"` を使用して、要素を交差軸に沿って配置します。
<div class="sample-container loading" style="height: 400px">
    <iframe id="layout-align-items-iframe" src='{environment:demosBaseUrl}/layouts/layout-align-items' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-align-items-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-align-items-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 要素をラップ
[`igxLayoutWrap`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#wrap)`="wrap"` を使用して要素をラップすることもできます。
<div class="sample-container loading" style="height: 180px">
    <iframe id="layout-wrap-iframe" src='{environment:demosBaseUrl}/layouts/layout-wrap' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="layout-wrap-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="layout-wrap-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

**注**: [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) ディレクティブはそのコンテナーの**直下**の子のフロー方向に影響します。

<div class="divider--half"></div>

## ネスト
[`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) ディレクティブを [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) 親内の要素に使用して、特定のフレックスボックス プロパティを制御します。
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxLayoutDirective]({environment:angularApiUrl}/classes/igxlayoutdirective.html)
* [IgxFlexDirective]({environment:angularApiUrl}/classes/igxflexdirective.html)