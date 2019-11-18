---
title: React Data Grid |Table コントロール|Ignite UI for Angular |セルのアクティブ化|Infragistics
_description: Ignite UI for Angular Table / Gridコンポーネントは、ユーザーがデータのコレクションをバインドできるように、グリッドドメインの複雑さを管理可能な API に単純化します。
_keywords: react table, Ignite UI for Angular, infragistics
_language: ja
---

## セルのアクティブ化

Ignite UI for Angular Data Table / Data Grid は、グリッドのセルを介したキーボードナビゲーションを可能にするセルアクティベーション機能をサポートします。これは、グリッドの `ActivationMode` プロパティを `Cell` に設定することによってアクティブになります。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### キーボード ナビゲーション

グリッドの `ActivationMode` プロパティを `Cell` に設定すると、グリッド内のさまざまなキーボードナビゲーションオプションが有効になります。以下は、現在押されているセルに対する各キーの押下/組み合わせとそれらが持つ効果についての説明です。

-   `上矢印キー`: 1 つ上のセルに移動します。
-   `下矢印キー`: 1 つ下のセルに移動します。
-   `左矢印キー`: 現在の行でセルを 1 つ左に移動します。
-   `右矢印キー`: 現在の行でセルを 1 つ右に移動します。
-   `Page Up`: グリッドを 1 ビューポート ページ上にスクロールします。
-   `Page Down`: グリッドを 1 ビューポート ページ下にスクロールします。
-   `Tab`: アクティブ セルを右の次のセルに移動するか、その行の最後のセルに達した場合、次の行の一番左のセルに移動します。
-   `Shift + Tab`: アクティブセルを左の次のセルに移動するか、またはその行の最初のセルに達した場合、前の行の一番右のセルに移動します。
-   `Ctrl + 上矢印キー`: 列の一番上のセルに移動します。
-   `Ctrl + 下矢印キー`: 列の一番下のセルに移動します。
-   `Ctrl + 左矢印キー`: 列の一番左のセルに移動します。
-   `Ctrl + 右矢印キー`: 列の一番右のセルに移動します。
-   `Ctrl + Home`: グリッド内の左上のセルに移動します。
-   `Ctrl + End`: グリッド内の右下のセルに移動します。

### コード スニペット

以下は、グリッドでセルのアクティブ化を実装する方法を示しています。
