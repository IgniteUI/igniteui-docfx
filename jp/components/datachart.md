---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
mentionedTypes: ['XamDataChart']
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## データ チャート

[`IgxDataChart`](datachart.md) は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 必要なモジュール

[`IgxDataChart`](datachart.md) は、以下のモジュールが必要です。

```ts
// data chart's modules required for all series:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
// scatter series' modules:
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
// scatter series elements:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
import { IgxBubbleSeries } from "igniteui-angular-charts/ES5/igx-bubble-series";
import { IgxSizeScale } from "igniteui-angular-charts/ES5/igx-size-scale";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";

@NgModule({
    imports: [
        ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

<div class="divider--half"></div>

### サポートされるシリーズ

[`IgxDataChart`](datachart.md) コントロールは、[カテゴリ シリーズ](datachart_series_types_category.md)、[ファイナンシャル シリーズ](datachart_series_types_financial.md)、[極座標シリーズ](datachart_series_types_polar.md)、[ラジアル シリーズ](datachart_series_types_radial.md)、[エリア シリーズ](datachart_series_types_range.md)、[散布シリーズ](datachart_series_types_scatter_bubble.md)、[図形シリーズ](datachart_series_types_shape.md) を含む 65 種類以上のシリーズをサポートします。サポートされている [Series](datachart_series_types.md) のタイプとそれらの使用方法のリストについては、シリーズのトピックを参照してください。

### サポートされる軸

[`IgxDataChart`](datachart.md) コントロールは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。   これらのタイプの軸の使用方法については、[Series](datachart_series_types.md) と [Axis](datachart_axis_types.md) のトピックを参照してください。

| 軸タイプ               | サポートされるシリーズ タイプ                                                                                                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | [Category ](datachart_series_types_category.md) グループの [`IgxBarSeriesComponent`](datachart.md) のみ                                                                                                   |
| CategoryXAxis      | すべての [ファイナンシャル シリーズ](datachart_series_types_financial.md)、[エリア シリーズ](datachart_series_types_range.md)、[カテゴリ シリーズ](datachart_series_types_category.md) ([`IgxBarSeriesComponent`](datachart.md) 以外) |
| TimeXAxis          | すべての [ファイナンシャル シリーズ](datachart_series_types_financial.md)、[エリア シリーズ](datachart_series_types_range.md)、[カテゴリ シリーズ](datachart_series_types_category.md) ([`IgxBarSeriesComponent`](datachart.md) 以外) |
| OrdinalTimeXAxis   | すべての [ファイナンシャル シリーズ](datachart_series_types_financial.md)、[エリア シリーズ](datachart_series_types_range.md)、[カテゴリ シリーズ](datachart_series_types_category.md) ([`IgxBarSeriesComponent`](datachart.md) 以外) |
| PercentChangeYAxis | すべての [ファイナンシャル シリーズ](datachart_series_types_financial.md)、[エリア シリーズ](datachart_series_types_range.md)、[カテゴリ シリーズ](datachart_series_types_category.md)、[散布シリーズ](datachart_series_types_scatter_bubble.md)、[図形シリーズ](datachart_series_types_shape.md)       |
| NumericYAxis       | すべての [散布シリーズ](datachart_series_types_scatter_bubble.md)、[図形シリーズ](datachart_series_types_shape.md)、[ファイナンシャル シリーズ](datachart_series_types_financial.md)、[エリア シリーズ](datachart_series_types_range.md)、[カテゴリ シリーズ](datachart_series_types_category.md)       |
| NumericXAxis       | [カテゴリ シリーズ](datachart_series_types_category.md) グループのすべての [散布シリーズ](datachart_series_types_scatter_bubble.md)、[図形シリーズ](datachart_series_types_shape.md)、BarSeries                                                                                         |
| NumericAngleAxis   | すべての [極座標シリーズ](datachart_series_types_polar.md)                                                                                                                                                                                                          |
| NumericRadiusAxis  | すべての [極座標シリーズ](datachart_series_types_polar.md) と [ラジアル シリーズ](datachart_series_types_radial.md)                                                                                                                                                          |
| CategoryAngleAxis  | すべての [ラジアル シリーズ](datachart_series_types_radial.md)                                                                                                                                                                                                       |

### 使用方法

データチャートモジュールがインポートされたので、次のステップはチャートをデータにバインドすることです。すべてのシリーズを正しく表示するには、特定の数と種類のデータ列が必要です。[データソース](datachart_data_sources.md) のトピックで、系列の種類ごとにデータソースを見つけることができます。

次のコードスニペットは、散布 [`IgxBubbleSeriesComponent`](datachart.md) を作成し、それを [SampleScatterStats](datachart_data_sources_stats.md) データにバインドする方法を示しています。

> [!NOTE]
>
> チャートコンポーネントにデータソースを設定すると、すべてのシリーズに適用されますが、データチャートに追加された各シリーズに異なるデータソースを設定することもできます。

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" />
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" />
    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita"
        [dataSource]="data"  />
 </igx-data-chart>
```

<div class="divider--half"></div>

### その他のリソース

-   [軸のタイプ](datachart_axis_types.md)
-   [軸の共有](datachart_axis_sharing.md)
-   [軸設定](datachart_axis_settings.md)
-   [チャート凡例](datachart_chart_legends.md)
-   [シリーズ マーカー](datachart_series_markers.md)
-   [シリーズ タイプ](datachart_series_types.md)
