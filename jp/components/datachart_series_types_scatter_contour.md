---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 散布図 - 等高線シリーズ

このトピックは、コード例を示して [`IgxDataChart`](/angular-apis/typescript/latest/classes/igxdatachart.html) コントロールで [`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) を使用する方法を説明します。このシリーズ
各ポイントに数値が割り当てられた X および Y データの三角測量に基づいて色付きの等高線を描画します。このシリーズのタイプはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。[`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) は [`IgxScatterAreaSeriesComponent`](/angular-apis/typescript/latest/classes/igxscatterareaseriescomponent.html) とよく似ていますが、塗りつぶしスケールを使用して色付けされた等高線としてデータを表し、散布エリア シリーズはカラースケールを使用して補間された面としてデータを表します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-contour-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-contour-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

[`IgxDataChart`](/angular-apis/typescript/latest/classes/igxdatachart.html) コントロールにはさまざまな種類の軸がありますが、ScatterContourSeries では [`IgxNumericYAxisComponent`](/angular-apis/typescript/latest/classes/igxnumericyaxiscomponent.html) と [`IgxNumericYAxisComponent`](/angular-apis/typescript/latest/classes/igxnumericyaxiscomponent.html) のみ使用できます。

### データの要件

 [`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、`XMemberPath`、`YMemberPath`、[`valueMemberPath`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html#valuememberpath) プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SamplePolarData](datachart_data_sources_scatter.md) を使用できます。

```ts
this.state = { dataSource: SampleScatterData.create() }
```

### モジュールの要件

散布等高線シリーズには、次のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterContourSeries } from "igniteui-angular-charts/ES5/igx-scatter-contour-series";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxLinearContourValueResolver } from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

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

### コード例

このコードは、[`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-contour-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-contour-series>
 </igx-data-chart>
```

### 等高線の塗りつぶしスケール

[`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) の [`fillScale`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html#fillscale) プロパティを使用して等高線の塗りブラシを解決します。

提供されている [`IgxValueBrushScaleComponent`](/angular-apis/typescript/latest/classes/igxvaluebrushscalecomponent.html) クラスはほとんどの色付けのニーズを満たすはずですが、このクラスから継承して独自の色付けのロジックを指定することができます。以下の表は [`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) の面のカラーリングに影響する [`IgxValueBrushScaleComponent`](/angular-apis/typescript/latest/classes/igxvaluebrushscalecomponent.html) プロパティをリストします。

-   `Brushes` は、輪郭を塗りつぶすためのブラシのコレクションを設定します。
-   `Brushes` は、ブラシを割り当てるための最大値を設定します。指定した値がこの値より大きい場合は透明になります。
-   [`minimumValue`](/angular-apis/typescript/latest/classes/igxvaluebrushscalecomponent.html#minimumvalue) は、ブラシを割り当てるための最小値を設定します。指定した値がこの値より小さい場合は透明になります。

### 等高線値リゾルバー

[`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) は、[`valueMemberPath`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html#valuememberpath) プロパティにマップされた項目の最小値と最大値の間を等間隔でちょうど 10 本の等高線を使用して描画します。これより多くの等高線が必要な場合、またはこれより少ない等高線が必要な場合、等高線の数を持つ [`IgxLinearContourValueResolverComponent`](/angular-apis/typescript/latest/classes/igxlinearcontourvalueresolvercomponent.html) を [`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) の [`valueResolver`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html#valueresolver) プロパティに割り当てることができます。

以下のコードは、[`IgxScatterContourSeriesComponent`](/angular-apis/typescript/latest/classes/igxscattercontourseriescomponent.html) の等高線の数を構成する方法を示します。

### その他のリソース

-   [軸のタイプ](datachart_axis_types.md)
-   [チャート凡例](datachart_chart_legends.md)
-   [シリーズ タイプ](datachart_series_types.md)
