---
title: Angular データ チャート | データ可視化ツール | 散布ポリゴン チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して散布ポリゴン チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, scatter polygon charts, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 散布ポリゴン チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','ShapeColumnSeries','ScatterPolygonSeries']
_language: ja
---

# Angular 散布ポリゴン チャート

 Ignite UI for Angular 散布ポリライン チャートは、形状の配列 (X または Y 座標の配列) を取得するシェイプ チャートのグループに属します。このシリーズは、その形状の配列をデカルト (x, y) システムのポリゴンのコレクションとしてレンダリングします。

散布図シリーズは科学データの強調領域でよく使用されますが、ダイアグラム、青写真、さらには建物の間取り図のプロットにも使用できます。

## Angular 散布ポリゴン チャートの例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-scatter-polygon-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polygon-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 散布ポリゴン チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-polygon-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

## Required Data

[`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、散布シェイプシリーズの  [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxshapeseriesbasecomponent.html#shapememberpath) プロパティにマッピングする必要がある 1 つのシェイプ データ列 (Xまたは Y 座標の配列) を含める必要があります。

上記データ要件を満たすデータソースとして [SampleShapeData](data-chart-data-sources-shape.md) を使用できます。

```ts
public dataSource: any[] = SampleShapeData.create();
```

## モジュールの要件

[`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   DataChartCoreModule        
-   DataChartScatterCoreModule
-   DataChartScatterModule   
-   DataChartInteractivityModule
-   ScatterPolygonSeriesModule
    <!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterPolygonSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

## コード例

このコードは、[`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polygon-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polygon-series>
 </igx-data-chart>
```

```html
 <igc-data-chart
    width="700px"
    height="500px">
    <igc-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igc-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igc-scatter-polygon-series
        name="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        shape-member-path="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igc-scatter-polygon-series>
 </igc-data-chart>
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
