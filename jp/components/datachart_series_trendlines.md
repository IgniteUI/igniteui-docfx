---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## トレンドライン

[`IgxDataChart`](datachart_series_trendlines.md) コントロールは、シリーズにバインドされたデータの傾向を識別するのに役立つ傾向線をサポートしています。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

[`IgxDataChart`](datachart_series_trendlines.md) コントロールでは、チャート ナビゲーションがデフォルトで無効になっています。それらを設定するために、トレンドラインを表示したい対応するシリーズに [`TrendLineType`](datachart_series_trendlines.md) プロパティを設定できます。ブラシ、ピリオド、太さ、破線の配列など、トレンドラインの複数の外観プロパティを変更できます。

近似曲線は、積層シリーズとエリア シリーズを除くすべてのシリーズでサポートされています。以下は、一連のチャートで使用できるトレンドラインのリストです。

-   [`None`](datachart_series_trendlines.md)
-   [`CubicFit`](datachart_series_trendlines.md)
-   [`CumulativeAverage`](datachart_series_trendlines.md)
-   [`ExponentialAverage`](datachart_series_trendlines.md)
-   [`ExponentialFit`](datachart_series_trendlines.md)
-   [`LinearFit`](datachart_series_trendlines.md)
-   [`LogarithmicFit`](datachart_series_trendlines.md)
-   [`ModifiedAverage`](datachart_series_trendlines.md)
-   [`PowerLawFit`](datachart_series_trendlines.md)
-   [`QuadraticFit`](datachart_series_trendlines.md)
-   [`QuarticFit`](datachart_series_trendlines.md)
-   [`QuinticFit`](datachart_series_trendlines.md)
-   [`SimpleAverage`](datachart_series_trendlines.md)
-   [`WeightedAverage`](datachart_series_trendlines.md)

次のコードスニペットは、[`TrendLineType`](datachart_series_trendlines.md) コントロールのシリーズに近似曲線を追加する方法を示しています。

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
