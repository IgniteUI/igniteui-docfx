---
title: Angular データ チャート | データ可視化ツール | 軸共有 | インフラジスティックス
_description: インフラジスティックスの $Platform Short$ チャート コントロールにより、複数の軸を同じプロット エリアに表示できます。複数の軸を持つ Ignite UI for Angular グラフを作成します!
_keywords: Angular charts, data chart, axis sharing, Ignite UI for Angular, Infragistics, multiple axes, Angular チャート, データ チャート, 軸共有, インフラジスティックス, 複数軸
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
_language: ja
---

# Angular 軸共有と複数軸

 Angular データ チャート コンポーネントの同じプロット領域に複数の軸を共有して追加できます。すべての軸に対して、チャートプロット領域に関連して位置を指定できます。広範囲の値 (株価や株取引量など) を持つ多くのデータソースをプロットする場合は、複数の軸を使用するのが一般的なシナリオです。

## Angular 軸共有と複数軸の例

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 軸共有と複数軸の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-sharing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## コード例

このコードは、2 つのシリーズ間で共有される 2 つの [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) と 1 つの [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) で Ignite UI for Angular データ チャートを作成する方法を示します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="sharedXAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="rightYAxis" labelLocation="OutsideRight"></igx-numeric-y-axis>
    <igx-numeric-y-axis  name="leftYAxis" labelLocation="OutsideLeft"></igx-numeric-y-axis>

    <igx-financial-price-series
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-money-flow-index-indicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-money-flow-index-indicator>

 </igx-data-chart>
```

### その他のリソース

-   [軸タイプ](data-chart-axis-types.md)
-   [シリーズ タイプ](data-chart-series-types.md)
