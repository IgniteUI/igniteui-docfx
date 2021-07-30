---
title: Angular ファイナンシャル チャート | ツールチップ テンプレート | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャートのツールチップを使用して重要なデータを表示します。Ignite UI for Angular グラフ チュートリアルを是非お試しください!
_keywords: Angular charts, financial chart, stock chart, tooltip templates, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, 株価チャート, ツールチップ テンプレート, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---

# Angular ツールチップ テンプレート

Angular Financial Chart コンポーネントは、シリーズの種類ごとに既定のツールチップを提供します。デフォルト ツールチップは特定のシリーズ項目に関連するすべての情報を表示します。これはシリーズ タイトル、データ値、および軸値を含みます。シリーズのスタイルと一致します。デフォルトのツールチップが適切でない場合、ツールチップのコンテンツおよびルック アンド フィールをカスタマイズできます。

## Angular ツールチップ テンプレートの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-template"
           alt="Angular ツールチップ テンプレートの例"
           github-src="charts/financial-chart/tooltip-template">
</code-view>

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
