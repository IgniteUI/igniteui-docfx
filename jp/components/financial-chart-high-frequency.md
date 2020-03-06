---
title: ファイナンシャル チャート | データ可視化ツール | Ignite UI for Angular | インフラジスティックス | リアルタイム データ
_description: 簡単な API を使用して財務データを視覚化するには、ファイナンシャル チャート コンポーネントを使用します。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: financial chart, Ignite UI for Angular, infragistics, ファイナンシャル チャート, インフラジスティックス
mentionedTypes: ['XamFinancialChart']
_language: ja
---

## リアルタイム データにバインド

Angular Financial Chart コンポーネントはリアルタイムでデータの描画をすばやく処理できるコントロールです。以下のサンプルでは、Financial Chart のデータが高頻度で更新されています。

### サンプル

<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コード例

高頻度でデータを更新する Angular Financial Chart コンポーネントを作成するには、データ ソースの最初のデータ項目を削除し、新しいデータ項目をデータの最後に追加します。また、チャートに変更について通知するために `notifyRemoveItem` および `notifyInsertItem` 関数を呼び出します。バインドしたデータの変更をチャートに通知する方法の詳細については、ファイナンシャル チャートの `notify*` メソッドを参照してください。

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
