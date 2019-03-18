---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 散布図シリーズ

このトピックは、`IgxDataChart` コントロールの図形シリーズのさまざまなタイプについて説明します。散布図シリーズは、一連の形状 (1 つまたは複数の X/Y 座標の配列) をとり、それらをデカルト (x、y) 座標系のポリゴン (ScatterPolygonSeries) またはポリライン (ScatterPolylineSeries) のコレクションとして描画するチャート シリーズのグループです。

散布図シリーズは科学データの強調領域でよく使用されますが、ダイアグラム、青写真、さらには建物の間取り図のプロットにも使用できます。

### デモ

<div class="sample-container" style="height: 400px">
    <iframe id="data-chart-type-shape-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-shape-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-shape-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### シェイプ シリーズの種類

次の表は、すべての種類のシェイプ シリーズとその説明を示しています。

| シリーズ名                   | 説明                                                                              |
| ----------------------- | ------------------------------------------------------------------------------- |
| `ScatterPolygonSeries`  | `ShapeMemberPath` プロパティにマッピングされた各図形の多角形を表示します。国境などの図形をレンダリングするのに便利です。           |
| `ScatterPolylineSeries` | `ShapeMemberPath` プロパティにマッピングされた各図形のポリラインを表示します。ネットワークグラフのように断線をレンダリングするのに便利です。 |

### 軸の要件

`IgxDataChart` コントロールはさまざまな軸タイプを提供しますが、ラジアル シリーズで使用できるのは以下のタイプの軸のみです。

| シリーズ タイプ                | YAxis タイプ                  | XAxis タイプ                  |
| ----------------------- | -------------------------- | -------------------------- |
| `ScatterPolygonSeries`  | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |
| `ScatterPolylineSeries` | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |

### データの要件

散布シェイプ シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列やリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
-   すべてのデータ項目には、スキャッタシェイプシリーズの `ShapeMemberPath` プロパティにマッピングする必要がある1つのシェイプデータ列（XまたはY座標の配列）を含める必要があります (`ScatterPolygonSeries` など)

上記データ要件を満たすデータソースとして [SampleShapeData](datachart_data_sources_shape.md) を使用できます。

```typescript
this.state = { dataSource: SampleShapeData.create() }
```

### モジュールの要件

<!-- Angular -->

散布図形シリーズを使用するには、データチャート モジュールの読み込みと登録の際にアプリケーションに次のモジュールをインポートする必要があります。

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterPolygonSeries } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series";
import { IgxScatterPolylineSeries } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartShapeCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-core-module";
import { IgxDataChartShapeModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

### コード例

このコードは、`ShapeColumnSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" />
    <igx-numeric-y-axis name="yAxis" />
    <igx-scatter-polygon-series
     name="series1"
     shapeMemberPath="Points"
     title="House Floor Plan"
     brush="Gray"
     outline="Black" />
 </igx-data-chart>
```

`ScatterPolygonSeries` を置き換えることで `ScatterPolylineSeries` を作成するために上記のコードを使用することもできます。

### その他のリソース

-   [軸タイプ](datachart_axis_types.md)
-   [軸の共有](datachart_axis_sharing.md)
-   [チャートの凡例](datachart_chart_legends.md)
-   [シリーズのマーカー](datachart_series_markers.md)
-   [シリーズ タイプ](datachart_series_types.md)
