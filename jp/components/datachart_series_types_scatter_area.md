---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 散布図 - エリア シリーズ

このトピックは、コード例を示して `IgxDataChart` コントロールで `ScatterAreaSeries` を使用する方法を説明します。このシリーズは、各ポイントに数値が割り当てられた X および Y データの三角測量に基づいて色付きの表面を描画します。このシリーズのタイプはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。`ScatterAreaSeries` は `ScatterContourSeries` と同様ですが、同じ値を持つデータポイントを接続する等線の置換に補完で色つきサーフェス エリアとしてデータを表します。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-type-area-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-area-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

`IgxDataChart` コントロールにはさまざまな種類の軸がありますが、`ScatterAreaSeries` では `IgxNumericYAxisComponent` と `IgxNumericYAxisComponent` のみ使用できます。

### データの要件

`ScatterAreaSeries` には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、`XMemberPath`、`YMemberPath`、そして `ColorMemberPath` プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SamplePolarData](datachart_data_sources_scatter.md) を使用できます。

```typescript
this.state = { dataSource: SampleScatterData.create() }
```

### モジュールの要件

散布エリア シリーズは以下のモジュールを要求します。

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterAreaSeries } from "igniteui-angular-charts/ES5/igx-scatter-area-series";
import { IgxCustomPaletteColorScale } from "igniteui-angular-charts/ES5/igx-custom-palette-color-scale";
import { ColorScaleInterpolationMode } from "igniteui-angular-charts/ES5/ColorScaleInterpolationMode";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
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

このコードは、`ScatterAreaSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" />
    <igx-numeric-y-axis name="yAxis" />
    <igx-scatter-area-series
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="X"
     yMemberPath="Y"
     colorMemberPath="Z" />
 </igx-data-chart>
```

### カラー スケール

`ScatterAreaSeries` の `ColorScale` プロパティを使用して、ポイントの値を解決し、シリーズの面を塗りつぶします。色は、ピクセル単位の三角ラスタライザーを三角測量データに適用することによって、サーフェスの図形の周りをなめらかに補間します。サーフェスの描画がピクセル単位であるため、カラー スケールはブラシではなく色を使用します。

提供されている `CustomPaletteColorScale` クラスはほとんどの色付けのニーズを満たすはずですが、`ColorScale` 抽象クラスから継承して独自の色付けのロジックを指定することができます。

以下の表は `ScatterAreaSeries` の面のカラ―リングに影響する `CustomPaletteColorScale` プロパティをリストします。

-   `Palette` は、選択する、または補間する色のコレクションを設定します。
-   `InterpolationMode` は、パレットから色を取得するメソッドを設定します。
-   `MaximumValue` は、色を割り当てるための最大値を設定します。指定した値がこの値より大きい場合は透明になります。
-   `MinimumValue` は、色を割り当てるための最小値を設定します。指定した値がこの値より小さい場合は透明になります。

### その他のリソース

-   [軸タイプ](datachart_axis_types.md)
-   [チャートの凡例](datachart_chart_legends.md)
-   [シリーズ タイプ](datachart_series_types.md)
