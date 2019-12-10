---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 散布図 - マーカーシリーズ

このトピックでは、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールのさまざまな種類の散布マーカーシリーズについて説明します。散布マーカー シリーズは、デカルト座標系 (x、y) を使用して各データ項目のマーカーをプロットする一連のシリーズです。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 散布マーカー シリーズのタイプ

以下の表は、すべてのタイプの散布マーカー シリーズとその説明をまとめたものです。

| シリーズ名                                                                                                                                    | 説明                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)             | `XMemberPath` および `YMemberPath` プロパティにマップされたデータポイントのマーカーを表示します。 |
| [`IgxScatterLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)     | マーカーに加えて、各データ ポイント間に直線を表示します。                                   |
| [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) | マーカーに加えて、各データ ポイント間を補間する滑らかな線を表示します。                            |

### 軸の要件

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールはさまざまな軸タイプを提供しますが、散布マーカー シリーズで使用できるのは以下のタイプの軸のみです。

| シリーズ タイプ                                                                                                                                 | YAxis タイプ                                                                                                                  | XAxis タイプ                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)             | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |
| [`IgxScatterLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |
| [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |

### データの要件

散布マーカーシリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、`XMemberPath` と `YMemberPath`  プロパティにマップされる 2 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SamplePolarData](data-chart-data-sources-stats.md) を使用できます。

```ts
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### モジュールの要件

散布マーカー シリーズは以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterSeries } from "igniteui-angular-charts/ES5/igx-scatter-series";
import { IgxScatterLineSeries } from "igniteui-angular-charts/ES5/igx-scatter-line-series";
import { IgxScatterSplineSeries } from "igniteui-angular-charts/ES5/igx-scatter-spline-series";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

### コード例

このコードは、[`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>
    <igx-scatter-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal">
    </igx-scatter-series>
 </igx-data-chart>
```

[`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) を置き換えることで [`IgxScatterLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html) または [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) を作成するために上記のコードを使用することもできます。

### シリーズの外観

[Markers](data-chart-series-markers.md) プロパティを使用してマーカーの外観をカスタマイズできます。マーカーごとに `Brush` と `Thickness` のビジュアルを変更することもできます。以下のこのコードスニペットは、これらのプロパティの使用方法を示しています。

```html
<igx-scatter-series
 name="series1"
 brush="Blue"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-series>
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズのツールチップ](data-chart-series-tooltips.md)
-   [シリーズ トレンドライン](data-chart-series-trendlines.md)
-   [シリーズ タイプ](data-chart-series-types.md)
