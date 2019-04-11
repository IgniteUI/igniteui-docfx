---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## カテゴリ シリーズ

このトピックは、`IgxDataChart` コントロールのファイナカテゴリ シリーズのさまざまなタイプについて説明します。カテゴリ シリーズは、データを取り入れてそれを水平線 (`IgxColumnSeriesComponent` )など) または垂直線 (`BarSeries` など) に沿って延ばしたデータ ポイントのコレクションとして描画するチャート シリーズの中でも、もっとも簡単で一般的な形のグループです。

### デモ

<div class="sample-container" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-category-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### カテゴリ シリーズのタイプ

次の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名                          | 概要                                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IgxAreaSeriesComponent`       | その下の領域が塗りつぶされる線で接続された、均等に配置された一連の点を表示します。カテゴリは水平に配置され、値は垂直に配置されます。                                                                                 |
| `BarSeries`                    | 個々のデータを別々の行に表示します。他のシリーズとは異なり、カテゴリは縦に並べられ、値は横にプロットされます。つまり、このシリーズは `IgxColumnSeriesComponent` に似てますが、時計回りに90度回転されます。                               |
| `IgxColumnSeriesComponent`     | 個々のデータを別々の列に表示します。カテゴリは水平方向、値は垂直方向にプロットされます。データ シリーズの経時的な変化を表示、または複数の項目を比較するために使用します。                                                              |
| `IgxLineSeriesComponent`       | 直線で結ばれた均等に配置された点のセットを表示します。経時的に連続的に変化するデータまたは情報を示すために使用します。ポイントの間の関係を強調する必要がある場合に役立ちます。                                                            |
| `IgxPointSeriesComponent`      | 線で結ばずにデータポイントの位置にマーカーを表示します。これらのマーカーの形状は、`markerType` プロパティを使用して変更されます。                                                                            |
| `IgxSplineSeriesComponent`     | データ表示を向上させるためにスプライン補間を使用して生成した滑らかな線で接続された、均等に配置された点のセットを表示します。                                                                                     |
| `IgxSplineAreaSeriesComponent` | データの表示を向上させるためのスプライン補間とスムージングの追加機能を持つ `IgxAreaSeriesComponent` タイプ。                                                                                |
| `IgxStepLineSeriesComponent`   | `IgxLineSeriesComponent` と同じですが、値が点間の最短経路をトレースする直線ではなく、段階的に連続する垂直線と水平線で接続されている点が異なります。                                                             |
| `IgxStepAreaSeriesComponent`   | `IgxStepLineSeriesComponent` と同じですが、連続する垂直線と水平線がデータポイント間の変化を段階的に進行させるのではなく、値より下の領域が塗りつぶされる点が異なります。                                                 |
| `IgxWaterfallSeriesComponent`  | ポイントの集合を、連続するデータ ポイントの値同士の差異を示す垂直列として表示します。列は色でコード化され、値が正の変化であるか負の変化であるかを区別します。カテゴリは水平方向、値は垂直方向にプロットされます。データ ポイントの経時的な変化を表示、または複数の項目を比較するために使用します。 |

### 軸の要件

 `IgxDataChart` コントロールは、さまざまな軸タイプを提供しますが、カテゴリ シリーズの特定のタイプでは以下の軸タイプのみ使用できます。

| シリーズ タイプ                       | YAxis タイプ                  | XAxis タイプ                                                                            |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------ |
| `BarSeries`                    | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `IgxAreaSeriesComponent`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxColumnSeriesComponent`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxLineSeriesComponent`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxSplineSeriesComponent`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxSplineAreaSeriesComponent` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxStepAreaSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxStepLineSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxWaterfallSeriesComponent`  | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |

### データの要件

カテゴリシリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースには少なくとも1つのデータ項目が含まれている必要があります。そうでない場合、チャートはカテゴリ シリーズをレンダリングしません。
-   すべてのデータ項目には、財務軸 (`IgxCategoryXAxisComponent` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   データ項目は、カテゴリシリーズ (`IgxLineSeriesComponent` など) の `ValueMemberPath` プロパティを使用してマップする数値データ列を少なくとも 1 列含む必要があります。

上記データ要件を満たすデータソースとして [SampleCategoryData](datachart_data_sources_category.md) を使用できます。

```typescript
this.state = { dataSource: SampleCategoryData.create() }
```

### モジュールの要件

<!-- Angular -->

カテゴリ シリーズを使用するために、読み込み時に以下のモジュールをアプリへインポートしてデータチャートモジュールを登録する必要があります。

```typescript
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxAreaSeriesModule  } from 'igniteui-angular-charts/ES5/igx-area-series-module';
import { IgxBarSeriesModule  } from 'igniteui-angular-charts/ES5/igx-bar-series-module';
import { IgxColumnSeriesModule  } from 'igniteui-angular-charts/ES5/igx-column-series-module';
import { IgxLineSeriesModule  } from 'igniteui-angular-charts/ES5/igx-line-series-module';
import { IgxPointSeriesModule  } from 'igniteui-angular-charts/ES5/igx-point-series-module';
import { IgxSplineSeriesModule  } from 'igniteui-angular-charts/ES5/igx-spline-series-module';
import { IgxSplineAreaSeriesModule  } from 'igniteui-angular-charts/ES5/igx-spline-area-series-module';
import { IgxStepAreaSeriesModule  } from 'igniteui-angular-charts/ES5/igx-step-area-series-module';
import { IgxStepLineSeriesModule  } from 'igniteui-angular-charts/ES5/igx-step-line-series-module';
import { IgxWaterfallSeriesModule  } from 'igniteui-angular-charts/ES5/igx-waterfall-series-module';
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category--module';

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### コード例 - 列シリーズ

このコードは、 `IgxColumnSeriesComponent`  でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year" />
    <igx-numeric-y-axis  name="yAxis" />
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </igx-data-chart>
```

### コード例 - バーシリーズ

上記のコードを使って  `IgxColumnSeriesComponent`  をレンダリングしたいシリーズの名前で置き換えて他のタイプのカテゴリ シリーズを作成することもできます。ただし、 `BarSeries`  は、他のタイプの軸が必要なため、この規則の例外となります。このコードは、`BarSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis" />
    <igx-category-y-axis name="yAxis" label="Year" />
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
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
