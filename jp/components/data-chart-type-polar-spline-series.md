---
title: データ チャート|可視化ツール|Ignite UI for Angular |Infragistics |極座標スプライン チャート
_description: 複合チャート ビューを作成するために、同じプロット エリアに視覚要素の複数のインスタンスを表示する極座標スプライン チャートを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'PolarSplineSeries']
_language: ja
---

## 極座標スプライン チャート

Ignite UI for Angular 極座標スプライン チャートは、極座標チャートのグループに属し、極座標 (角度/半径) 座標系のデータ ポイントを接続するスプライン ラインのコレクションを使用してレンダリングされます。[`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) は [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) と同じデータ プロットの概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。他のシリーズ タイプと同じように、複数の [`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) は同じデータ チャートにプロットでき、データセットの相違点を示すために互いにオーバーレイできます。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)

### データの要件

[`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、極座標シリーズの [`angleMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#anglememberpath) と [`radiusMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#radiusmemberpath) プロパティを使用してマッピングする必要がある少なくとも 2 つの数値データ列 ([`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) など）を含める必要があります。

極座標シリーズのデータポイントの位置は、「極」と呼ばれる、固定方向からの角度 (角度座標) と固定点 (デカルト座標の原点に類似) からの距離 (半径座標) によって決まります。極から始まって外側を指す線は角度軸 ([`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)) のグリッド線で、極を囲む同心円状の輪は半径軸 ([`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)) のグリッド線です。

上記データ要件を満たすデータソースとして [SamplePolarData](data-chart-data-sources-polar.md) を使用できます。

```ts
public dataSource: any[] = SamplePolarData.create();
```

### モジュールの要件

[`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) は以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericAngleAxis } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxPolarSplineSeries } from "igniteui-angular-charts/ES5/igx-polar-spline-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartPolarCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-polar-core-module";
import { IgxDataChartPolarModule } from "igniteui-angular-charts/ES5/igx-data-chart-polar-module";

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

### コード例

このコードは、[`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
<igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-spline-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-spline-series>
</igx-data-chart>
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
