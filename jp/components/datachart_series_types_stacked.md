---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 積層シリーズ

このトピックは、`IgxDataChart` コントロールの積層シリーズのさまざまなタイプについて説明します。積層シリーズは、データを受け取り、それを水平線 (ColumnSeriesなど) または垂直線 (BarSeriesなど) に沿って伸びるデータポイントの集まりとしてレンダリングするチャートシリーズの最も単純で最も一般的な形式のグループです。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

積層シリーズごとに独自の `IgxSeriesComponent` コレクションがあり、StackedFragmentSeries 要素を配置できます。これらのフラグメントは、チャートの実際のレンダリングを構成するものであり、`ValueMemberPath` を受け入れる要素です。

### 積層シリーズのタイプ

次の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名                        | 説明                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `StackedAreaSeries`          | このシリーズタイプは、線の下の領域が塗りつぶされて重なり合うようにして、線分 (StackedFragmentSeries) で接続された点のコレクションを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                    |
| `StackedBarSeries`           | 個々のデータを互いに積層された棒に表示します。カテゴリは垂直方向に配置され、値は水平方向に積層されます。このシリーズは通常、データ シリーズの経時的な変化の表示、または複数の項目を比較するために使用されます。                                                                                                                  |
| `StackedColumnSeries`        | 個々のデータをそれぞれ上に積層された列に表示します。カテゴリは水平方向、値は垂直方向に積層されます。このシリーズは通常、データ シリーズの経時的な変化の表示、または複数の項目を比較するために使用されます。                                                                                                                    |
| `StackedLineSeries`          | このシリーズタイプは、互いの上に積み重ねられた線分 (`StackedFragmentSeries`) で接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                                  |
| `StackedSplineAreaSeries`    | このシリーズタイプは、スプラインの下の領域が塗りつぶされ、積み重ねられた状態で、スプラインセグメントの滑らかな曲線  (`StackedFragmentSeries`) で接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。 |
| `StackedSplineSeries`        | このシリーズ タイプは、互いに積み重ねられたスプライン セグメントの滑らかな曲線 (StackedFragmentSeries) によって接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。                  |
| `Stacked100AreaSeries`       | このシリーズは、y 軸の値の取り扱いを除いて、すべての点で StackedAreaSeries と同じです。データを直接的に表す代わりに、`Stacked100AreaSeries` は、データ ポイント内のすべての値の合計の割合でデータを表示します。                                                                                            |
| `Stacked100BarSeries`        | このシリーズは `StackedBarSeries` タイプと同じですが、データを直接表示するのではなく、カテゴリ内のすべての値のパーセントでデータを表示する機能が追加されています。                                                                                                                               |
| `Stacked100ColumnSeries`     | このシリーズは `StackedColumnSeries` タイプと同じですが、データを直接表現するのではなく、カテゴリ内のすべての値のパーセントでデータを表現するという追加機能があります。                                                                                                                           |
| `Stacked100LineSeries`       | このシリーズは、y軸上の値の取り扱いを除いて、あらゆる点で `StackedLineSeries` と同じです。`Stacked100LineSeries` は、データを直接表現するのではなく、データポイント内のすべての値の合計に対するパーセントでデータを表現します。                                                                                    |
| `Stacked100SplineAreaSeries` | このシリーズは、y 軸上の値の取り扱いを除いて、あらゆる点で `StackedSplineAreaSeries` と同じです。`Stacked100SplineAreaSeries` は、データを直接表現するのではなく、データ ポイント内のすべての値の合計に対するパーセントでデータを表現します。                                                                      |
| `Stacked100SplineSeries`     | このシリーズは、y軸上の値の取り扱いを除いて、あらゆる点で `StackedSplineSeries` と同じです。`Stacked100SplineSeries` は、データを直接表現するのではなく、データ ポイント内のすべての値の合計に対するパーセントでデータを表現します。                                                                               |

### 軸の要件

`IgxDataChart` コントロールはさまざまな種類の軸を提供しますが、積み上げシリーズで使用できるのは次の種類の軸のみです。

| シリーズ タイプ                     | YAxis タイプ                  | XAxis タイプ                                                                          |
| ---------------------------- | -------------------------- | ---------------------------------------------------------------------------------- |
| `StackedAreaSeries`          | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                         |
| `StackedBarSeries`           | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `StackedColumnSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `StackedLineSeries`          | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `StackedSplineAreaSeries`    | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `StackedSplineSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `Stacked100AreaSeries`       | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                         |
| `Stacked100BarSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `Stacked100ColumnSeries`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `Stacked100LineSeries`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `Stacked100SplineAreaSeries` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |
| `Stacked100SplineSeries`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`、`IgxOrdinalTimeXAxisComponent`、`IgxTimeXAxisComponent` |

### データの要件

積層シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで積層シリーズがレンダリングされません。
-   すべてのデータ項目には、財務軸 (CategoryXAxis など) の Label プロパティにマッピングする必要があるデータ列 (文字列または日時) を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、積層シリーズの `IgxSeriesComponent` コレクションに追加する `StackedFragmentSeries` の `ValueMemberPath` プロパティを使用してマッピングする必要がある少なくとも 1 つの数値データ列を含める必要があります。

### 必要なモジュール

散布 シリーズは以下のモジュールが必要です。

```typescript
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxStackedAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-area-series";
import { IgxStackedBarSeries } from "igniteui-angular-charts/ES5/igx-stacked-bar-series";
import { IgxStackedColumnSeries } from "igniteui-angular-charts/ES5/igx-stacked-column-series";
import { IgxStackedLineSeries } from "igniteui-angular-charts/ES5/igx-stacked-line-series";
import { IgxStackedSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-area-series";
import { IgxStackedSplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-series";
import { IgxStacked100AreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series";
import { IgxStacked100BarSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series";
import { IgxStacked100ColumnSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series";
import { IgxStacked100LineSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series";
import { IgxStacked100SplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-area-series"
import { IgxStacked100SplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-series";
import { IgxStacked100SplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-area-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category--module';
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";

@NgModule({
    imports: [
        ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
        ...
    ]
})
```

### コード例 - 積層柱状シリーズ

このコードは、`StackedColumnSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。上記のコードを使って `StackedColumnSeries` をレンダリングしたいシリーズの名前で置き換えて他のタイプのカテゴリ シリーズを作成することもできます。

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

### コード例 - 積層棒シリーズ

 `StackedBarSeries` は、`CategoryYAxis` と `IgxNumericXAxisComponent` を使用するという点で異なるタイプの軸を必要とするため、`StackedColumnSeries` を任意のシリーズ名に置き換えることができるという規則の例外です。このコードは、`StackedBarSeries` を使用してデータチャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

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
