---
title: Angular ファイナンシャル チャート | リアルタイム データ | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャート コントロールを使用して数百万のデータ ポイントを高速に描画します。Ignite UI for Angular チャートの高いパフォーマンスを是非お試しください。
_keywords: Angular charts, financial chart, stock chart, data binding, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, 株価チャート, データ バインディング, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---

# Angular リアルタイム データにバインド

Angular Financial Chart コンポーネントはリアルタイムでデータの描画をすばやく処理できるコントロールです。以下のサンプルでは、Financial Chart のデータが高頻度で更新されています。

## Angular リアルタイム データ バインドの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular リアルタイム データ バインドの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## コード例

高頻度でデータを更新する Angular Financial Chart コンポーネントを作成するには、データ ソースの最初のデータ項目を削除し、新しいデータ項目をデータの最後に追加します。また、チャートに変更について通知するために [`notifyRemoveItem`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#notifyremoveitem) および [`notifyInsertItem`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#notifyinsertitem) 関数を呼び出します。バインドしたデータの変更をチャートに通知する方法の詳細については、ファイナンシャル チャートの `notify*` メソッドを参照してください。

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

<div class="divider--half"></div>

### その他のリソース

<div class="divider--half"></div>

-   [チャートのパフォーマンス](financial-chart-performance.md)
-   [大量のデータのバインド](financial-chart-high-volume.md)
-   [複数データ ソースへのバインド](financial-chart-multiple-data.md)
