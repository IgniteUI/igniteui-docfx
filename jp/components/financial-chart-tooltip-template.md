---
title: ファイナンシャル チャート|データ可視化ツール|Ignite UI for Angular|Infragistics|ツールチップ テンプレート
_description: 簡単な API を使用して財務データを可視化するには、ファイナンシャル チャート コンポーネントを使用します。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: financial chart, Ignite UI for Angular, infragistics
_language: ja
---

## ツールチップ テンプレート

`XamFinancialChart` コントロールは、シリーズの種類ごとに既定のツールチップを提供します。デフォルト ツールチップは特定のシリーズ項目に関連するすべての情報を表示します。これはシリーズ タイトル、データ値、および軸値を含みます。シリーズのスタイルと一致します。デフォルトのツールチップが適切でない場合、 ツールチップのコンテンツおよびルック アンド フィールをカスタマイズできます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-tooltip-template-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-template-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

以下のコードのようにツールチップ コンテンツは、ツールチップ用のテンプレートを作成してカスタマイズできます。

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
    <div>
        <span [style.color]="series.actualBrush">{{series.title}}</span>
        <span> stock opened on {{item.time | date}} with a value of ${{item.open | number}} and closed with a value of ${{item.close | number}}.</span>
    </div>
</ng-template>

<igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    [tooltipTemplate]="valueTooltip" >
</igx-financial-chart>
```
