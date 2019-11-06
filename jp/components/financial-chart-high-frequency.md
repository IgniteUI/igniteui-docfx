---
title: Financial Chart - リアルタイム データ
_description: Ignite UI for Angular Financial Chart コンポーネントは簡易な API を使用してファイナンシャル データを表示できます。ユーザーがデータにバインド後にチャートがデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Financial Chart
_language: ja
---

## リアルタイム データにバインド

[`IgxFinancialChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchart.html) コントロールはリアルタイムでデータの描画をすばやく処理できるコントロールです。以下のデモでは、Financial Chart のデータが高頻度で更新されています。

### デモ

<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### コード例

高頻度でデータを更新するファイナンシャル チャート コントロールを作成するには、データ ソースの最初のデータ項目を削除し、新しいデータ項目をデータの最後に追加します。また、チャートに変更について通知するために `notifyRemoveItem` および `notifyInsertItem` 関数を呼び出します。バインドしたデータの変更をチャートに通知する方法の詳細については、ファイナンシャル チャートの `notify*` メソッドを参照してください。

以下の例は、高頻度のデータ更新について Financial Chart を通知する方法を紹介します。

```ts
private tick(): void {
    const newVal = this.getValue();
    const oldVal = this.data[0];

    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);

    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);
}
```

<div class="divider--half"></div>

### その他のリソース

<div class="divider--half"></div>

-   [チャートのパフォーマンス](financial-chart-performance.md)
-   [大量のデータのバインド](financial-chart-high-volume.md)
-   [複数データ ソースへのバインド](financial-chart-multiple-data.md)
