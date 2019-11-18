---
title: Angular データ グリッド | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
mentionedTypes: ['XamDataGrid']
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Grid Control, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid
_language: ja
---

## Angular テーブル行のピン固定

 Angular Data Table / Data Grid では、キーまたは基本データ ソースの項目を使用した行のピン固定が可能です。行を固定するとその行がグリッドの最上部に複製され、薄い灰色の背景で固定されたままになり、実際の行は低い不透明度でレンダリングされます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

グリッド コントロールでターゲット行の基本データ項目をグリッドの pinnedItems コレクションに追加して行をピン固定できます。

### API を使用した行ピン固定
