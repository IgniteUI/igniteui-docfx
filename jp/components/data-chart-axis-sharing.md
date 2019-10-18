---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 軸共有と複数軸

 [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールの同じプロット領域に複数の軸を共有して追加できます。すべての軸に対して、チャートプロット領域に関連して位置を指定できます。広範囲の値 (株価や株取引量など) を持つ多くのデータソースをプロットする場合は、複数の軸を使用するのが一般的なシナリオです。

### デモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-sharing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### コード例

このコードは、2 つのシリーズ間で共有される 2 つの [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) と 1 つの [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) でデータ チャートを作成する方法を示します。

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

-   [軸のタイプ](data-chart-axis-types.md)
-   [シリーズ タイプ](data-chart-series-types.md)
