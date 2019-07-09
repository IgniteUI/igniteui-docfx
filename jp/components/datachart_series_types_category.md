---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## カテゴリ シリーズ

このトピックは、[`IgxDataChart`](/components/datachart_series_types_category.html) コントロールのファイナカテゴリ シリーズのさまざまなタイプについて説明します。カテゴリ シリーズは、データを取り入れてそれを水平線 ([`IgxColumnSeriesComponent`](/components/datachart_series_types_category.html) など) または垂直線 ([`IgxBarSeriesComponent`](/components/datachart_series_types_category.html) など) に沿って延ばしたデータ ポイントのコレクションとして描画するチャート シリーズの中でも、もっとも簡単で一般的な形のグループです。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-category-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### カテゴリ シリーズのタイプ

次の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名                                                                                                       | 概要                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxAreaSeriesComponent`](/components/datachart_series_types_category.html)             | その下の領域が塗りつぶされる線で接続された、均等に配置された一連の点を表示します。カテゴリは水平に配置され、値は垂直に配置されます。                                                                                                                            |
| [`IgxBarSeriesComponent`](/components/datachart_series_types_category.html)               | 個々のデータを別々の行に表示します。他のシリーズとは異なり、カテゴリは縦に並べられ、値は横にプロットされます。つまり、このシリーズは [`IgxColumnSeriesComponent`](/components/datachart_series_types_category.html) に似てますが、時計回りに90度回転されます。 |
| [`IgxColumnSeriesComponent`](/components/datachart_series_types_category.html)         | 個々のデータを別々の列に表示します。カテゴリは水平方向、値は垂直方向にプロットされます。データ シリーズの経時的な変化を表示、または複数の項目を比較するために使用します。                                                                                                         |
| [`IgxLineSeriesComponent`](/components/datachart_series_types_category.html)             | 直線で結ばれた均等に配置された点のセットを表示します。経時的に連続的に変化するデータまたは情報を示すために使用します。ポイントの間の関係を強調する必要がある場合に役立ちます。                                                                                                       |
| [`IgxPointSeriesComponent`](/components/datachart_series_types_category.html)           | 線で結ばずにデータポイントの位置にマーカーを表示します。これらのマーカーの形状は、`markerType` プロパティを使用して変更されます。                                                                                                                       |
| [`IgxSplineSeriesComponent`](/components/datachart_series_types_category.html)         | データ表示を向上させるためにスプライン補間を使用して生成した滑らかな線で接続された、均等に配置された点のセットを表示します。                                                                                                                                |
| [`IgxSplineAreaSeriesComponent`](/components/datachart_series_types_category.html) | データの表示を向上させるためのスプライン補間とスムージングの追加機能を持つ [`IgxAreaSeriesComponent`](/components/datachart_series_types_category.html) タイプ。                                                    |
| [`IgxStepLineSeriesComponent`](/components/datachart_series_types_category.html)     | [`IgxLineSeriesComponent`](/components/datachart_series_types_category.html) と同じですが、値が点間の最短経路をトレースする直線ではなく、段階的に連続する垂直線と水平線で接続されている点が異なります。                                 |
| [`IgxStepAreaSeriesComponent`](/components/datachart_series_types_category.html)     | [`IgxStepLineSeriesComponent`](/components/datachart_series_types_category.html) と同じですが、連続する垂直線と水平線がデータポイント間の変化を段階的に進行させるのではなく、値より下の領域が塗りつぶされる点が異なります。                 |
| [`IgxWaterfallSeriesComponent`](/components/datachart_series_types_category.html)   | ポイントの集合を、連続するデータ ポイントの値同士の差異を示す垂直列として表示します。列は色でコード化され、値が正の変化であるか負の変化であるかを区別します。カテゴリは水平方向、値は垂直方向にプロットされます。データ ポイントの経時的な変化を表示、または複数の項目を比較するために使用します。                                            |

### 軸の要件

 [`IgxDataChart`](/components/datachart_series_types_category.html) コントロールは、さまざまな軸タイプを提供しますが、カテゴリ シリーズの特定のタイプでは以下の軸タイプのみ使用できます。

| シリーズ タイプ                                                                                                    | YAxis タイプ                                                                                             | XAxis タイプ                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxBarSeriesComponent`](/components/datachart_series_types_category.html)               | [`IgxCategoryYAxisComponent`](/components/datachart_series_types_category.html) | [`IgxNumericXAxisComponent`](/components/datachart_series_types_category.html)                                                                                                                                                                                                               |
| [`IgxAreaSeriesComponent`](/components/datachart_series_types_category.html)             | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxColumnSeriesComponent`](/components/datachart_series_types_category.html)         | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxLineSeriesComponent`](/components/datachart_series_types_category.html)             | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxSplineSeriesComponent`](/components/datachart_series_types_category.html)         | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxSplineAreaSeriesComponent`](/components/datachart_series_types_category.html) | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxStepAreaSeriesComponent`](/components/datachart_series_types_category.html)     | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxStepLineSeriesComponent`](/components/datachart_series_types_category.html)     | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |
| [`IgxWaterfallSeriesComponent`](/components/datachart_series_types_category.html)   | [`IgxNumericYAxisComponent`](/components/datachart_series_types_category.html)   | [`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html), [`IgxOrdinalTimeXAxisComponent`](/components/datachart_series_types_category.html), [`IgxTimeXAxisComponent`](/components/datachart_series_types_category.html) |

### データの要件

カテゴリシリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースには少なくとも1つのデータ項目が含まれている必要があります。そうでない場合、チャートはカテゴリ シリーズをレンダリングしません。
-   すべてのデータ項目には、財務軸 ([`IgxCategoryXAxisComponent`](/components/datachart_series_types_category.html) など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   データ項目は、カテゴリシリーズ ([`IgxLineSeriesComponent`](/components/datachart_series_types_category.html) など) の `ValueMemberPath` プロパティを使用してマップする数値データ列を少なくとも 1 列含む必要があります。

上記データ要件を満たすデータソースとして [SampleCategoryData](datachart_data_sources_category.md) を使用できます。

```ts
this.state = { dataSource: SampleCategoryData.create() }
```

### モジュールの要件

カテゴリシリーズには以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxAreaSeries } from "igniteui-angular-charts/ES5/igx-area-series";
import { IgxBarSeries } from "igniteui-angular-charts/ES5/igx-bar-series";
import { IgxColumnSeries } from "igniteui-angular-charts/ES5/igx-column-series";
import { IgxLineSeries } from "igniteui-angular-charts/ES5/igx-line-series";
import { IgxPointSeries } from "igniteui-angular-charts/ES5/igx-point-series";
import { IgxSplineSeries } from "igniteui-angular-charts/ES5/igx-spline-series";
import { IgxSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-spline-area-series";
import { IgxStepAreaSeries } from "igniteui-angular-charts/ES5/igx-step-area-series";
import { IgxStepLineSeries } from "igniteui-angular-charts/ES5/igx-step-line-series";
import { IgxWaterfallSeries } from "igniteui-angular-charts/ES5/igx-waterfall-series";
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

### コード例 - 列シリーズ

このコードは、 [`IgxColumnSeriesComponent`](/components/datachart_series_types_category.html)  でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-column-series>
 </igx-data-chart>
```

### コード例 - バーシリーズ

上記のコードを使って  [`IgxColumnSeriesComponent`](/components/datachart_series_types_category.html)  をレンダリングしたいシリーズの名前で置き換えて他のタイプのカテゴリ シリーズを作成することもできます。ただし、 [`IgxBarSeriesComponent`](/components/datachart_series_types_category.html)  は、他のタイプの軸が必要なため、この規則の例外となります。このコードは、[`IgxBarSeriesComponent`](/components/datachart_series_types_category.html) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis"></igx-numeric-x-axis>
    <igx-category-y-axis name="yAxis" label="Year"></igx-category-y-axis>
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-bar-series>
 </igx-data-chart>
```

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
