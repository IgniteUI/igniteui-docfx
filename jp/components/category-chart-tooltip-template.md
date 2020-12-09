---
title: Angular チャートおよびグラフ | データ可視化ツール | ツールチップ テンプレート | インフラジスティックス
_description: インフラジスティックスの Angular チャートのツールチップを使用して、重要なデータを表示します。インフラジスティックスの Ignite UI for Angular グラフ チュートリアルを是非お試しください!
_keywords: Angular charts, category chart, tooltip template, Ignite UI for Angular, Infragistics, Angular チャート, カテゴリ チャート, ツールチップ テンプレート, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---

# Angular ツールチップ テンプレート

Angular カテゴリ チャート コンポネントは、各シリーズ タイプにデフォルト ツールチップを提供します。デフォルト ツールチップは特定のシリーズ項目に関連するすべての情報を表示します。これはシリーズ タイトル、データ値、および軸値を含みます。シリーズのスタイルと一致します。デフォルトのツールチップが適切でない場合、 ツールチップのコンテンツおよびルック アンド フィールをカスタマイズできます。

## Angular ツールチップ テンプレートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-template-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ツールチップ テンプレートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-template-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

以下のコードのようにツールチップ コンテンツは、ツールチップ用のテンプレートを作成してカスタマイズできます。

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
   <div>
      <span> {{item.Country}} energy use: <br/></span>
      <span> Coal :{{item.Coal | number}}<br/></span>
      <span> Oil :{{item.Oil | number}}<br/></span>
      <span> Gas :{{item.Gas | number}}<br/></span>
      <span> Nuclear :{{item.Nuclear | number}}<br/></span>
      <span> Hydro :{{item.Hydro | number}}<br/></span>
    </div>
</ng-template>

<div class="chart">
    <igx-category-chart height="100%" width="100%"
        [dataSource]="data" chartTitle="Energy Production"
        subtitle="by Country"
        [tooltipTemplate]="valueTooltip"
        [chartType]="chartType">
    </igx-category-chart>
</div>
```
