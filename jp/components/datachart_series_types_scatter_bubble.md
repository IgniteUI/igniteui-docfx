---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 散布図 - バブル シリーズ

このトピックは、コード例を示して `IgxDataChart` コントロールで散布 `BubbleSeries` 使用する方法を説明します。このシリーズ
データをプロットするためにデカルト座標系 (x, y) を使用する[散布図 - マーカーシリーズ](datachart_series_types_scatter_marker.md)に似ています。このシリーズはスケールされたバブルの集まりとしてデータを表示します。それぞれがその位置を決定する一対の数値X / Y値とそのサイズを決定する 3 番目の値を持ちます。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

`IgxDataChart` コントロールにはさまざまな種類の軸がありますが、`BubbleSeries` では `IgxNumericYAxisComponent` と `IgxNumericYAxisComponent` のみ使用できます。

### データの要件

`BubbleSeries` には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、`XMemberPath`、`YMemberPath`、`RadiusMemberPath` プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SamplePolarData](datachart_data_sources_stats.md) を使用できます。

```typescript
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### モジュールの要件

<!-- Angular -->

散布バブル シリーズは以下のモジュールを要求します。

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxBubbleSeries } from "igniteui-angular-charts/ES5/igx-bubble-series";
import { IgxSizeScale } from "igniteui-angular-charts/ES5/igx-size-scale";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxCustomPaletteBrushScale } from "igniteui-angular-charts/ES5/igx-custom-palette-brush-scale";
import { BrushSelectionMode } from "igniteui-angular-charts/ES5/BrushSelectionMode";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
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

このコードは、`BubbleSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
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
     radiusMemberPath="GdpPerCapita" />
 </igx-data-chart>
```

### バブル形状

BubbleSeries  の外観は、[Markers](datachart_series_markers.md) プロパティの使用やバブルの形状を定義済みの形状の 1 つに変更してカスタマイズすることができます。次に例を示します。

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
/>
```

### バブル半径スケール

`RadiusScale` は、バブルのサイズを決定する BubbleSeries のオプション機能です。この機能は、`SizeScale` オブジェクトを介して実装できます。半径スケールが設定されると、最小のバブルは `MinimumValue` と等しくなり、最大のバブルは `MaximumValue` と等しくなり、すべての残りのバブルはそれに応じて拡大/縮小されます。サイズ スケールはリニアと対数のどちらでもかまいません。半径スケールが設定されていない場合、各バブルのサイズは `RadiusMemberPath` プロパティにマップされたデータ列の値と等しくなります。

### バブル塗りつぶしスケール

`FillScale` は、単一の `BubbleSeries` 内のカラーパターンを決定するオプション機能です。このシリーズは、以下の塗りつぶしスケールをサポートします。

-   `ValueBrushScale` は、`FillMemberPath` プロパティにマップされたデータ列の値のセットを使用して、バブルの補間ブラシを決定します。またユーザー指定の `MinimumValue` や `MaximumValue` を持つこともできます。このスケールで範囲が設定されると、範囲外になる値を持つバブルが `Brushes` コレクションからブラシを取得せずに、色も付けられません。
-   `CustomPaletteBrushScale` は、`Brushes` コレクションからブラシを選択するバブル マーカーのインデックスを使用します。`BrushSelectionMode` プロパティが `Select` enumerable値に設定されている場合、バブルは順番に色付けされ、`Interpolate` に設定されます。ブラシは、バブルのインデックスとコレクション内のブラシの数に基づいて補間されます。

### その他のリソース

-   [軸のタイプ](datachart_axis_types.md)
-   [軸の共有](datachart_axis_sharing.md)
-   [チャート凡例](datachart_chart_legends.md)
-   [シリーズ マーカー](datachart_series_markers.md)
-   [シリーズのツールチップ](datachart_series_tooltips.md)
-   [シリーズ トレンドライン](datachart_series_trendlines.md)
-   [シリーズ タイプ](datachart_series_types.md)
