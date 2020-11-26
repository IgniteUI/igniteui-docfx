---
title: Angular データ チャート | データ可視化ツール & テーブル | インフラジスティックス
_description: データ チャート コンポーネントは、視覚要素の複数インスタンスを持つ複合チャート ビューを作成します。データ可視化を向上させます。
_keywords: Angular charts, data chart, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart', 'SeriesType']
_language: ja
---

# Angular データ チャート

Angular データ チャートは、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。データ チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。

## Angular データ チャートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular データ チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

データ チャート パッケージをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

Angular データ チャート コンポーネントを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   DataChartCoreModule
-   DataChartScatterCoreModule,
-   DataChartScatterModule,
-   NumberAbbreviatorModule
    <!-- end: Blazor -->

```ts
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxNumberAbbreviatorModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';
import { IgxBubbleSeriesComponent } from 'igniteui-angular-charts';
import { IgxNumericXAxisComponent } from 'igniteui-angular-charts';
import { IgxNumericYAxisComponent } from 'igniteui-angular-charts';
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxNumberAbbreviatorModule
    ]
})
export class AppModule { /* ... */ }
```

<div class="divider--half"></div>

## サポートされるシリーズ

Angular データ チャート コンポーネントは、[Category シリーズ](data-chart-type-category-series.md), [Financial シリーズ](data-chart-type-financial-series.md)、[Polar シリーズ](data-chart-type-polar-series.md)、[Radial シリーズ](data-chart-type-radial-series.md)、[Range Series](data-chart-type-range-series.md)、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md) を含む 65 種類以上のシリーズをサポートします。サポートされている [Series](data-chart-series-types.md) のタイプとそれらの使用方法のリストについては、シリーズのトピックを参照してください。

## サポートされる軸

Angular データ チャート コンポーネントは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。   これらのタイプの軸の使用方法については、[Series](data-chart-series-types.md) と [Axis](data-chart-axis-types.md) のトピックを参照してください。

| 軸タイプ               | サポートされるシリーズ タイプ                                                                                                                                                                                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | [Category シリーズ ](data-chart-type-category-series.md) グループの [`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) のみ                                                                                                        |
| CategoryXAxis      | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) を除く)   |
| TimeXAxis          | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) を除く)   |
| OrdinalTimeXAxis   | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) を除く)   |
| PercentChangeYAxis | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md)、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)                      |
| NumericYAxis       | すべての [Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md)                      |
| NumericXAxis       | [Category シリーズ](data-chart-type-category-series.md) グループのすべての [Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)、[`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) |
| NumericAngleAxis   | すべての [極座標シリーズ](data-chart-type-polar-series.md)                                                                                                                                                                                                                                          |
| NumericRadiusAxis  | すべての [極座標シリーズ](data-chart-type-polar-series.md) と [ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                          |
| CategoryAngleAxis  | すべての [ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                                                                       |

## 使用方法

データチャートモジュールがインポートされたので、以下のステップはチャートをデータにバインドすることです。すべてのシリーズを正しく表示するには、特定の数と種類のデータ列が必要です。[Data Sources](data-chart-data-sources.md) のトピックで、系列の種類ごとにデータソースを見つけることができます。

以下のコード スニペットは、散布 [`bubble`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bubble) を作成し、それを [SampleScatterStats](data-chart-data-sources-stats.md) データにバインドする方法を示しています。

> [!NOTE]
>
> チャートコンポーネントにデータソースを設定すると、すべてのシリーズに適用されますが、データチャートに追加された各シリーズに異なるデータソースを設定することもできます。

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" ></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" ></igx-numeric-y-axis>
    <igx-bubble-series
        name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        [dataSource]="data"  ></igx-bubble-series>
 </igx-data-chart>
```

<div class="divider--half"></div>

### その他のリソース

-   [軸タイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [軸の設定](data-chart-axis-settings.md)
-   [チャートの凡例](data-chart-legends.md)
-   [シリーズのマーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
