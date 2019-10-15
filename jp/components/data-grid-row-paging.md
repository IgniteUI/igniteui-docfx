---
title: React Data Grid |Table コントロール|Ignite UI for Angular |ページング|Infragistics
_description: Ignite UI for Angular Table / Gridコンポーネントは、ユーザーがデータのコレクションをバインドできるように、グリッドドメインの複雑さを管理可能な API に単純化します。
_keywords: react table, Ignite UI for Angular, infragistics, paging
_language: ja
---

## ページング

ページングは​​現在 Ignite UI for Angular Data Table / Data Grid 自体には実装されていませんが、データソースを動的に切り替えることで同様の結果を得ることができます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 概要

上記のデモでは、ページングが​​ Ignite UI for Angular Data Grid に組み込まれていないため、データの配列を取り込み、そのデータの一部をページとして出力するように設計されたカスタム Pager コンポーネントを作成しました。このページデータは Ignite UI for Angular Data Grid に提供され、自動的にその新しいデータが表示されます。

Pager コンポーネントの `pageChanged` イベントは、ページが変更されたときにそれを通知し、新しいページのデータを提供します。サンプルはこのデータを受け取り、表示用にグリッドに渡します。
