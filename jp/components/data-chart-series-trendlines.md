---
title: Angular データ チャート | データ可視化ツール | トレンドライン | インフラジスティックス
_description: インフラジスティックスの $Platform Short$ チャートのトレンドラインを使用して、シリーズにバインドされたデータのトレンドを識別します。Ignite UI for Angular グラフのトレンドライン機能をお試しください!
_keywords: Angular charts, data chart, trendlines, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, トレンドライン, インフラジスティックス
mentionedTypes: ['XamDataChart', 'AreaSeries', 'BarSeries','ColumnSeries', 'PointSeries','SplineSeries','StepAreaSeries','WaterfallSeries']
_language: ja
---

# Angular トレンドライン

Angular データ チャート コンポーネントは、シリーズにバインドされたデータの傾向を識別するのに役立つトレンドラインをサポートしています。

## Angular トレンドラインの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-trendlines"
           alt="Angular トレンドラインの例"
           github-src="charts/data-chart/series-trendlines">
</code-view>

<div class="divider--half"></div>

Angular データ チャート コンポーネントでは、チャート ナビゲーションがデフォルトで無効になっています。それらを設定するために、トレンドラインを表示したい対応するシリーズに [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#trendlinetype) プロパティを設定できます。ブラシ、ピリオド、太さ、破線の配列など、トレンドラインの複数の外観プロパティを変更できます。

近似曲線は、積層シリーズとエリア シリーズを除くすべてのシリーズでサポートされています。以下は、一連のチャートで使用できるトレンドラインのリストです。

-   `None`
-   `CubicFit`
-   `CumulativeAverage`
-   `ExponentialAverage`
-   `ExponentialFit`
-   `LinearFit`
-   `LogarithmicFit`
-   `ModifiedAverage`
-   `PowerLawFit`
-   `QuadraticFit`
-   `QuarticFit`
-   `QuinticFit`
-   `SimpleAverage`
-   `WeightedAverage`

以下のコード スニペットは、Angular データ チャート コンポネントのシリーズに近似曲線を追加する方法を示しています。

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
