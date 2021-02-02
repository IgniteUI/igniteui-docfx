---
title: Angular データ チャート | データ可視化ツール | 積層型チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、積層型エリア チャート、積層型棒チャートなどの積層型チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, stacked charts, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 積層型チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','StackedColumnSeries']
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular 積層シリーズ

このトピックは、Angular データ チャート コンポーネントの積層シリーズのさまざまなタイプについて説明します。積層シリーズは、データを受け取り、それを水平線 ([`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) など) または垂直線 ([`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) など) に沿って伸びるデータポイントの集まりとしてレンダリングするチャートシリーズの最も単純で最も一般的な形式のグループです。

## Angular 積層シリーズの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 積層シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

積層シリーズごとに独自の [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションがあり、StackedFragmentSeries 要素を配置できます。これらのフラグメントは、チャートの実際のレンダリングを構成するものであり、`ValueMemberPath` を受け入れる要素です。

## 積層シリーズのタイプ

以下の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名                                                                                                                                                                            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxStackedAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html)                   | このシリーズタイプは、線の下の領域が塗りつぶされて重なり合うようにして、線分 (StackedFragmentSeries) で接続された点のコレクションを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                                                                                                                                                                                                                                                    |
| [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)                     | 個々のデータを互いに積層された棒に表示します。カテゴリは垂直方向に配置され、値は水平方向に積層されます。このシリーズは通常、データ シリーズの経時的な変化の表示、または複数の項目を比較するために使用されます。                                                                                                                                                                                                                                                                                                                                                  |
| [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)               | 個々のデータをそれぞれ上に積層された列に表示します。カテゴリは水平方向、値は垂直方向に積層されます。このシリーズは通常、データ シリーズの経時的な変化の表示、または複数の項目を比較するために使用されます。                                                                                                                                                                                                                                                                                                                                                    |
| [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html)                   | このシリーズタイプは、互いの上に積み重ねられた線分 ([`IgxStackedFragmentSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) で接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                                                                                                                   |
| [`IgxStackedSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html)       | このシリーズタイプは、スプラインの下の領域が塗りつぶされ、積み重ねられた状態で、スプラインセグメントの滑らかな曲線  ([`IgxStackedFragmentSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) で接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                                                                                  |
| [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)               | このシリーズ タイプは、互いに積み重ねられたスプライン セグメントの滑らかな曲線 (StackedFragmentSeries) によって接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                                                                                                                                                                                                                                                  |
| [`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html)             | このシリーズは、y 軸の値の取り扱いを除いて、すべての点で StackedAreaSeries と同じです。データを直接的に表す代わりに、[`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html) は、データ ポイント内のすべての値の合計の割合でデータを表示します。                                                                                                                                                                              |
| [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html)               | このシリーズは [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) タイプと同じですが、データを直接表示するのではなく、カテゴリ内のすべての値のパーセントでデータを表示する機能が追加されています。                                                                                                                                                                                                                     |
| [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)         | このシリーズは [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) タイプと同じですが、データを直接表現するのではなく、カテゴリ内のすべての値のパーセントでデータを表現するという追加機能があります。                                                                                                                                                                                                              |
| [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html)             | このシリーズは、y軸上の値の取り扱いを除いて、あらゆる点で [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html) と同じです。[`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html) は、データを直接表現するのではなく、データポイント内のすべての値の合計に対するパーセントでデータを表現します。                           |
| [`IgxStacked100SplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) | このシリーズは、y 軸上の値の取り扱いを除いて、あらゆる点で [`IgxStackedSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html) と同じです。[`IgxStacked100SplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) は、データを直接表現するのではなく、データ ポイント内のすべての値の合計に対するパーセントでデータを表現します。 |
| [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html)         | このシリーズは、y軸上の値の取り扱いを除いて、あらゆる点で [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) と同じです。[`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html) は、データを直接表現するのではなく、データ ポイント内のすべての値の合計に対するパーセントでデータを表現します。                  |

## 軸の要件

Angular データ チャート コンポーネントはさまざまな種類の軸を提供しますが、積み上げシリーズで使用できるのは以下の種類の軸のみです。

| シリーズ タイプ                                                                                                                                                                         | YAxis タイプ                                                                                                                                              | XAxis タイプ                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`IgxStackedAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html)                   | [`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) | [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)                                                                                                                                                                                                                                                                                                               |
| [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)                     | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)               | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html)                   | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html)       | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)               | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html)             | [`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) | [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)                                                                                                                                                                                                                                                                                                               |
| [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html)               | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)         | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html)             | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100SplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html)         | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |

## データの要件

積層シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで積層シリーズがレンダリングされません。
-   すべてのデータ項目には、財務軸 (CategoryXAxis など) の Label プロパティにマッピングする必要があるデータ列 (文字列または日時) を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、積層シリーズの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加する [`IgxStackedFragmentSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) の [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html#valuememberpath) プロパティを使用してマッピングする必要がある少なくとも 1 つの数値データ列を含める必要があります。

## モジュールの要件

積層シリーズを作成するには、以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
import { IgxStackedColumnSeries } from 'igniteui-angular-charts';
import { IgxStackedLineSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineSeries } from 'igniteui-angular-charts';
import { IgxStacked100AreaSeries } from 'igniteui-angular-charts';
import { IgxStacked100BarSeries } from 'igniteui-angular-charts';
import { IgxStacked100ColumnSeries } from 'igniteui-angular-charts';
import { IgxStacked100LineSeries } from 'igniteui-angular-charts';
import { IgxStacked100SplineAreaSeries } from 'igniteui-angular-charts'
import { IgxStacked100SplineSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxDataChartStackedModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
        // ...
    ]
})
```

## コード例 - 積層柱状シリーズ

このコードは、[`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) でデータ チャートのインスタンスを作成し、データソースにバインドする方法を説明します。上記のコードを使って [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) をレンダリングしたいシリーズの名前で置き換えて他のタイプのカテゴリ シリーズを作成することもできます。

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-column-series>

</igx-data-chart>
```

## コード例 - 積層棒シリーズ

 [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) は、[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) と [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) を使用するという点で異なるタイプの軸を必要とするため、[`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) を任意のシリーズ名に置き換えることができるという規則の例外です。このコードは、[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) を使用してデータ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>

</igx-data-chart>
```
