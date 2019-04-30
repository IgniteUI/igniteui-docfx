---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 散布図 - 等高線シリーズ

このトピックは、コード例を示して `IgxDataChart` コントロールで `ScatterContourSeries` を使用する方法を説明します。このシリーズ
各点に数値が割り当てられた X および Y データの三角測量に基づいて色付きの等高線を描画します。このシリーズのタイプはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。`ScatterContourSeries` は `ScatterAreaSeries` とよく似ていますが、塗りつぶしスケールを使用して色付けされた等高線としてデータを表し、散布エリア シリーズはカラースケールを使用して補間された面としてデータを表します。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-type-contour-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-contour-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

`IgxDataChart` コントロールにはさまざまな種類の軸がありますが、ScatterContourSeries では `IgxNumericYAxisComponent` と `IgxNumericYAxisComponent` のみ使用できます。

### データの要件

 `ScatterContourSeries` には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、`XMemberPath`、`YMemberPath`、`ValueMemberPath` プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SamplePolarData](datachart_data_sources_scatter.md) を使用できます。

```typescript
this.state = { dataSource: SampleScatterData.create() }
```

### モジュールの要件

散布等高線シリーズには、次のモジュールが必要です。

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterContourSeries } from "igniteui-angular-charts/ES5/igx-scatter-contour-series";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxLinearContourValueResolver } from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

### コード例

このコードは、`ScatterContourSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" />
    <igx-numeric-y-axis name="yAxis" />
    <igx-scatter-contour-series
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="X"
     yMemberPath="Y"
     colorMemberPath="Z" />
 </igx-data-chart>
```

### 等高線の塗りつぶしスケール

`ScatterContourSeries` の `FillScale` プロパティを使用して等高線の塗りブラシを解決します。

提供されている `ValueBrushScale` クラスはほとんどの色付けのニーズを満たすはずですが、このクラスから継承して独自の色付けのロジックを指定することができます。以下の表は `ScatterContourSeries` の面のカラーリングに影響する `ValueBrushScale` プロパティをリストします。

-   `Brushes` は、輪郭を塗りつぶすためのブラシのコレクションを設定します。
-   `Brushes` は、ブラシを割り当てるための最大値を設定します。指定した値がこの値より大きい場合は透明になります。
-   `MinimumValue` は、ブラシを割り当てるための最小値を設定します。指定した値がこの値より小さい場合は透明になります。

### 等高線値リゾルバー

`ScatterContourSeries` は、`ValueMemberPath` プロパティにマップされた項目の最小値と最大値の間を等間隔でちょうど 10 本の等高線を使用して描画します。これより多くの等高線が必要な場合、またはこれより少ない等高線が必要な場合、等高線の数を持つ `LinearContourValueResolver` を `ScatterContourSeries` の `ValueResolver` プロパティに割り当てることができます。

以下のコードは、`ScatterContourSeries` の等高線の数を構成する方法を示します。

### その他のリソース

-   [軸のタイプ](datachart_axis_types.md)
-   [チャート凡例](datachart_chart_legends.md)
-   [シリーズ タイプ](datachart_series_types.md)
