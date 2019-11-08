---
title: Angular データ グリッド | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
mentionedTypes: ['XamDataGrid']
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular グリッド, Angular Grid コントロール, Angular Grid 例, Angular Grid コンポーネント, Angular IgrLiveGrid
_language: ja
---

## Angular テーブル行の選択

Angular Data Table / Data Grid は、単一行または複数行の選択をサポートしています。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 概要

[`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html) での選択は行レベルで有効になり、グリッドの `selectionMode` オプションを使用して構成できます。このプロパティには、以下にリストされている 3 つの異なるオプションがあります。

-   `None`: 選択は有効にされていません。
-   `SingleRow`: 単一行の選択が有効です。
-   `MultipleRow`: 複数行の選択が可能になります。

`MultipleRow` に設定すると、複数行を選択するために CTRL キーを押す必要はありません。各行は、その特定の行をクリックしたときに選択または選択解除されます。

### コード スニペット

以下は、[`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html) で複数選択を有効にする方法を示しています。
