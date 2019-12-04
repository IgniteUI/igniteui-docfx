---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## トレンドライン

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールは、シリーズにバインドされたデータの傾向を識別するのに役立つ傾向線をサポートしています。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでは、チャート ナビゲーションがデフォルトで無効になっています。それらを設定するために、トレンドラインを表示したい対応するシリーズに [`TrendLineType`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html) プロパティを設定できます。ブラシ、ピリオド、太さ、破線の配列など、トレンドラインの複数の外観プロパティを変更できます。

近似曲線は、積層シリーズとエリア シリーズを除くすべてのシリーズでサポートされています。以下は、一連のチャートで使用できるトレンドラインのリストです。

-   [`None`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#none)
-   [`CubicFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#cubicfit)
-   [`CumulativeAverage`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#cumulativeaverage)
-   [`ExponentialAverage`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#exponentialaverage)
-   [`ExponentialFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#exponentialfit)
-   [`LinearFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#linearfit)
-   [`LogarithmicFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#logarithmicfit)
-   [`ModifiedAverage`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#modifiedaverage)
-   [`PowerLawFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#powerlawfit)
-   [`QuadraticFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quadraticfit)
-   [`QuarticFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quarticfit)
-   [`QuinticFit`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quinticfit)
-   [`SimpleAverage`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#simpleaverage)
-   [`WeightedAverage`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#weightedaverage)

次のコードスニペットは、[`TrendLineType`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html) コントロールのシリーズに近似曲線を追加する方法を示しています。

```html
<igx-data-chart  [dataSource]="data"
    height="400px"
    width="100%">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-financial-price-series
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit">
    </igx-financial-price-series>

</igx-data-chart>
```
