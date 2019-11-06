---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
mentionedTypes: ['XamDataChart']
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## データ チャート

[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 必要なモジュール

[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) は、以下のモジュールが必要です。

```ts
// data chart's modules required for all series:

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
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

<div class="divider--half"></div>

### サポートされるシリーズ

[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールは、[カテゴリ シリーズ](data-chart-type-category-series.md)、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[極座標シリーズ](data-chart-type-polar-series.md)、[ラジアル シリーズ](data-chart-type-radial-series.md)、[エリア シリーズ](data-chart-type-range-series.md)、[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md) を含む 65 種類以上のシリーズをサポートします。サポートされている [Series](data-chart-series-types.md) のタイプとそれらの使用方法のリストについては、シリーズのトピックを参照してください。

### サポートされる軸

[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。   これらのタイプの軸の使用方法については、[Series](data-chart-series-types.md) と [Axis](data-chart-axis-types.md) のトピックを参照してください。

| 軸タイプ               | サポートされるシリーズ タイプ                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | [Category ](data-chart-type-category-series.md) グループの [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) のみ                                                                                                   |
| CategoryXAxis      | すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[エリア シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外) |
| TimeXAxis          | すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[エリア シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外) |
| OrdinalTimeXAxis   | すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[エリア シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外) |
| PercentChangeYAxis | すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[エリア シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md)、[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md)                              |
| NumericYAxis       | すべての [散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md)、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[エリア シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md)                              |
| NumericXAxis       | [カテゴリ シリーズ](data-chart-type-category-series.md) グループのすべての [散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md)、BarSeries                                                                                                                |
| NumericAngleAxis   | すべての [極座標シリーズ](data-chart-type-polar-series.md)                                                                                                                                                                                                                                 |
| NumericRadiusAxis  | すべての [極座標シリーズ](data-chart-type-polar-series.md) と [ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                 |
| CategoryAngleAxis  | すべての [ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                                                              |

### 使用方法

データチャートモジュールがインポートされたので、次のステップはチャートをデータにバインドすることです。すべてのシリーズを正しく表示するには、特定の数と種類のデータ列が必要です。[データソース](data-chart-data-sources.md) のトピックで、系列の種類ごとにデータソースを見つけることができます。

次のコードスニペットは、散布 [`IgxBubbleSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) を作成し、それを [SampleScatterStats](data-chart-data-sources-stats.md) データにバインドする方法を示しています。

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

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [軸設定](data-chart-axis-settings.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
