---
title: Angular データ チャート | データ可視化ツール | 散布バブル チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して散布バブル チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, scatter bubble charts, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 散布図バブル チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','BubbleSeries']
_language: ja
---

# Angular 散布図 - バブル シリーズ

このトピックは、コード例を示して Angular データ チャート コンポーネントで散布 [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) 使用する方法を説明します。このシリーズ
データをプロットするためにデカルト座標系 (x, y) を使用する[散布図 - マーカーシリーズ](data-chart-type-scatter-point-series.md) に似ています。このシリーズはスケールされたバブルの集まりとしてデータを表示します。それぞれがその位置を決定する一対の数値X / Y値とそのサイズを決定する 3 番目の値を持ちます。

## Angular 散布図 - バブル シリーズの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-bubble-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 散布図 - バブル シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 軸の要件

Angular データ チャート コンポーネントにはさまざまな種類の軸がありますが、[`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) では [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) と [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) のみ使用できます。

## データの要件

[`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、[`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#xmemberpath)、[`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#ymemberpath)、[`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusmemberpath) プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SampleScatterStats](data-chart-data-sources-stats.md) を使用できます。

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## モジュールの要件

散布バブル シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   DataChartCoreModule        
-   DataChartScatterCoreModule
-   DataChartScatterModule   
-   DataChartInteractivityModule
-   NumberAbbreviatorModule
    <!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxBubbleSeries } from 'igniteui-angular-charts';
import { IgxSizeScale } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxCustomPaletteBrushScale } from 'igniteui-angular-charts';
import { BrushSelectionMode } from 'igniteui-angular-charts';
import { MarkerType } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';

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

## コード例

このコードは、[`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>

    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita">
    </igx-bubble-series>
 </igx-data-chart>
```

## バブル形状

BubbleSeries  の外観は、[Markers](data-chart-series-markers.md) プロパティの使用やバブルの形状を定義済みの形状の 1 つに変更してカスタマイズすることができます。次に例を示します。

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

```ts
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

## バブル半径スケール

[`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusscale) は、バブルのサイズを決定する BubbleSeries のオプション機能です。この機能は、[`IgxSizeScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html) オブジェクトを介して実装できます。半径スケールが設定されると、最小のバブルは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html#minimumvalue) と等しくなり、最大のバブルは [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html#maximumvalue) と等しくなり、すべての残りのバブルはそれに応じて拡大/縮小されます。サイズ スケールはリニアと対数のどちらでもかまいません。半径スケールが設定されていない場合、各バブルのサイズは [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusmemberpath) プロパティにマップされたデータ列の値と等しくなります。

```ts
const sizeScale = new IgxSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

## バブル塗りつぶしスケール

[`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillscale) は、単一の [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) 内のカラーパターンを決定するオプション機能です。このシリーズは、以下の塗りつぶしスケールをサポートします。

-   [`IgxValueBrushScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvaluebrushscalecomponent.html) は、[`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillmemberpath) プロパティにマップされたデータ列の値のセットを使用して、バブルの補間ブラシを決定します。またユーザー指定の [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvaluebrushscalecomponent.html#minimumvalue) や [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvaluebrushscalecomponent.html#maximumvalue) を持つこともできます。このスケールで範囲が設定されると、範囲外になる値を持つバブルが [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#brushes) コレクションからブラシを取得せずに、色も付けられません。
-   [`IgxCustomPaletteBrushScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettebrushscalecomponent.html) は、[`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#brushes) コレクションからブラシを選択するバブル マーカーのインデックスを使用します。[`brushSelectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettebrushscalecomponent.html#brushselectionmode) プロパティが `Select` enumerable値に設定されている場合、バブルは順番に色付けされ、`Interpolate` に設定されます。ブラシは、バブルのインデックスとコレクション内のブラシの数に基づいて補間されます。

```ts
const brushScale = new IgxValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgxCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズのツールチップ](data-chart-series-tooltips.md)
-   [シリーズ トレンドライン](data-chart-series-trendlines.md)
-   [シリーズ タイプ](data-chart-series-types.md)
