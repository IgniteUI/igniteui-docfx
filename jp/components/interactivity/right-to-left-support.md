---
title: Ignite UI for Angular フレームワーク & 機能 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular によって ARIA アクセシビリティと文字表記の方向を設定する方法を説明します。
_keywords: aria support, aria サポート, a11y, ignite ui for angular, infragistics, インフラジスティックス
---

# 右から左 (RTL) サポート

## RTL サポート
フレームワークのほとんどのコンポーネントで、新しい RTL テーマを介した**右から左 (RTL)** がサポートされます。

**CSS ベース**のプロジェクトの場合、`node_modules/igniteui-angular/styles/igniteui-angular-rtl.css` を `angular.json` スタイル コレクションに追加します。

**Sass ベース**のプロジェクトの場合、ルート スタイルシートの `igx-core` mixin に `$direction` を渡します。

例:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

現在、以下コンポーネントは RTL 機能の一部をサポートしています。

* Grid (igx-grid)
* Tabs (igx-tabs)

## RTL の例
このセクションでは、フレームワークのアクセシビリティ (ARIA) サポートと、コンポーネントの`文字表記の方向`の簡単な管理を示します。

<div class="divider--half"></div>
<div class="sample-container loading" style="height: 600px">
    <iframe id="calendar-rtl-sample-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-rtl-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular RTL Support Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-rtl-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-rtl-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>


## 右から左方向 (RTL) の有効化

`Ignite UI for Angular` ライブラリは、`html` または `body` タグの `dir` 属性を設定した場合のみ `文字表記の方向`操作の影響を受けます。また、ランタイムの変更は検出されないことに注意してください。

次の例に移動します。

### 手順 1 - 両方のタグで 'dir' 属性を設定します。

```html
<html dir="rtl">
...
  <body dir="ltr">
  </body>
</html>
```

上記の場合、`body` タグの内部属性タグが優先されます。

### 手順 2 - それぞれの方向の[テーマ エンジン](../../themes/index.md)に通知します。

そのためには、[igx-core]({environment:sassApiUrl}/index.html#mixin-igx-core) mixin の `$direction` パラメーターを設定します。

```scss 
@include igx-core($direction: rtl);
```

コンテンツを調整する手順はこれですべてになります。


