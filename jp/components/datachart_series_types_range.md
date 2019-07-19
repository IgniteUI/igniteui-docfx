---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## エリア シリーズ

このトピックでは、[`IgxDataChart`](datachart_series_types_range.md) コントロールのさまざまな種類のエリア シリーズについて説明します。エリア シリーズは、2 つの数値データ列を使用し、それらを水平方向に引き伸ばされたデータポイントのコレクションとしてレンダリングする一連のチャート シリーズです ([`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md) など)。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### エリア シリーズのタイプ

次の表は、すべての種類のエリア シリーズとその説明を示しています。

| シリーズ名                                                                                                         | 説明                                                                                |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md)     | データポイントの High / Low 値のペア間の塗りつぶされた領域/範囲を表示します。                                     |
| [`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) | カテゴリは横に並べられ、値は縦に並べられます。高値/低値のデータポイント間の個別の列に離散データを表示します。カテゴリは水平方向、値は垂直方向にプロットされます。 |

### 軸の要件

[`IgxDataChart`](datachart_series_types_range.md) コントロールはさまざまな軸タイプを提供しますが、エリア シリーズで使用できるのは以下のタイプの軸のみです。

| Series タイプ                                                                                                    | YAxis タイプ                                                                                           | XAxis タイプ                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md)     | [`IgxNumericYAxisComponent`](datachart_series_types_range.md) | [`IgxCategoryXAxisComponent`](datachart_series_types_range.md), [`IgxOrdinalTimeXAxisComponent`](datachart_series_types_range.md), [`IgxTimeXAxisComponent`](datachart_series_types_range.md) |
| [`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) | [`IgxNumericYAxisComponent`](datachart_series_types_range.md) | [`IgxCategoryXAxisComponent`](datachart_series_types_range.md), [`IgxOrdinalTimeXAxisComponent`](datachart_series_types_range.md), [`IgxTimeXAxisComponent`](datachart_series_types_range.md) |

### データの要件

エリア シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートはエリア シリーズを描画しません。
-   すべてのデータ項目には、カテゴリ軸の `Label` プロパティにマッピングする必要があるラベルデータ列（文字列または日時）を少なくとも1つ含める必要があります（[`IgxCategoryXAxisComponent`](datachart_series_types_range.md) など）。
-   すべてのデータ項目には、極座標シリーズの `HighMemberPath` と `LowMemberPath` プロパティを使用してマッピングする必要がある少なくとも2つの数値データ列 ([`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md) など）を含める必要があります。

上記データ要件を満たすデータソースとして [SampleRangeData](datachart_data_sources_range.md) を使用できます。

```ts
this.state = { dataSource: SampleRangeData.create() }
```

### モジュールの要件

極座標シリーズを使用するには、ロード中にアプリに以下のモジュールをインポートする必要があります。

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
// series' modules:
import { IgxRangeAreaSeries } from "igniteui-angular-charts/ES5/igx-range-area-series";
import { IgxRangeColumnSeries } from "igniteui-angular-charts/ES5/igx-range-column-series";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";

@NgModule({
    imports: [
        ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        ...
    ]
})
```

### コード例

このコードは、[`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
 </igx-data-chart>
```

[`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) を置き換えることで [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md) を作成するために上記のコードを使用することもできます。

### その他のリソース

-   [軸のタイプ](datachart_axis_types.md)
-   [軸の共有](datachart_axis_sharing.md)
-   [チャート凡例](datachart_chart_legends.md)
-   [シリーズの注釈](datachart_series_annotations.md)
-   [シリーズの強調表示](datachart_series_highlighting.md)
-   [シリーズ マーカー](datachart_series_markers.md)
-   [シリーズのツールチップ](datachart_series_tooltips.md)
-   [シリーズ トレンドライン](datachart_series_trendlines.md)
-   [シリーズ タイプ](datachart_series_types.md)
