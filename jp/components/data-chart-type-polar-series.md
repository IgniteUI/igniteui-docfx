---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 極座標シリーズ

このトピックは、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの極座標 シリーズのさまざまなタイプについて説明します。極座標シリーズは、デカルト（x、y）座標系の代わりに極座標（角度、半径）座標シリーズを使用してチャートにデータをプロットする一連のシリーズです。つまり、極座標シリーズは[散布シリーズ](data-chart-type-scatter-point-series.md) の概念を使用して、水平線に沿って伸びるのではなく円の周りを囲みます。このシリーズのグループは、極座標系を使用して複数の異なるデータのシリーズ内の項目間の関係を示すために使用されます。

極座標シリーズでは、データの不均等な散らばりやデータの塊に注意が向けられます。これらは科学的なデータ (風の方向と速度、磁場の強さと方向、太陽系内の物体の位置など) をプロットするためによく使用され、予測結果と収集データの偏差を強調することができます。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 極座標シリーズのタイプ

データチャートは、以下のタイプの極座標シリーズをサポートしています。

| シリーズ名                                                                                                                                        | 説明                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html)             | 極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合で囲まれ、塗りつぶされた多角形を表示します        |
| [`IgxPolarSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineareaseriescomponent.html) | 極座標（角度/半径）座標にあるデータ ポイントを結ぶ滑らかな/補間された線の集合で囲まれ、塗りつぶされた多角形を表示します |
| [`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html)         | 極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ滑らかな/補間された集合を表示します。               |
| [`IgxPolarScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html)       | 極座標 (角度/半径) 座標にあるデータ ポイントを表すマーカーの集合を表示します。                    |
| [`IgxPolarLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)             | 極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合を表示します。                      |

### 軸の要件

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールは、さまざまな軸タイプを提供しますが、極座標シリーズの特定のタイプでは以下の軸タイプのみ使用できます。

| シリーズ タイプ                                                                                                                                     | 半径軸タイプ                                                                                                                               | 角度軸タイプ                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html)             | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineareaseriescomponent.html) | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html)         | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html)       | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |
| [`IgxPolarLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)             | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html) |

### データの要件

極座標シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列やリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートは極座標シリーズを描画しません。
-   すべてのデータ項目には、極座標シリーズの `AngleMemberPath` および `RadiusMemberPath` プロパティを使用してマッピングする必要がある少なくとも2つの数値データ列 ([`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html) など）を含める必要があります。

極座標シリーズのデータポイントの位置は、「極」と呼ばれる、固定方向からの角度 (角度座標) と固定点 (デカルト座標の原点に類似) からの距離 (半径座標) によって決まります。極から始まり外側に向かう線は、角度軸のグリッド線 ([`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html))、極を囲む同心円は半径軸のグリッド線 ([`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)) です。

上記データ要件を満たすデータソースとして [SamplePolarData](data-chart-data-sources-polar.md) を使用できます。

```ts
this.state = { dataSource: SamplePolarData.create() }
```

### モジュールの要件

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) には以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericAngleAxis } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxPolarAreaSeries } from "igniteui-angular-charts/ES5/igx-polar-area-series";
import { IgxPolarLineSeries } from "igniteui-angular-charts/ES5/igx-polar-line-series";
import { IgxPolarSplineSeries } from "igniteui-angular-charts/ES5/igx-polar-spline-series";
import { IgxPolarSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-polar-spline-area-series";
import { IgxPolarScatterSeries } from "igniteui-angular-charts/ES5/igx-polar-scatter-series";
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

このコードは、[`IgxPolarLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-line-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-line-series>
 </igx-data-chart>
```

上記のコードを使って [`IgxPolarLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html) をレンダリングしたい極座標シリーズの名前で置き換えて他のタイプの極座標 シリーズを作成することもできます。

### その他のリソース

-   [軸タイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャートの凡例](data-chart-legends.md)
-   [シリーズのマーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
