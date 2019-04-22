---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## ラジアル シリーズ

このトピックは、`IgxDataChart` コントロールのラジアル シリーズのさまざまなタイプについて説明します。ラジアル シリーズは、[カテゴリ シリーズ](datachart_series_types_category.md)のように水平線に沿って伸びるのではなく、円の周りを囲んだデータポイントのコレクションとしてデータをレンダリングするシリーズのグループです。ラジアル シリーズは、チャートの範囲の最小から最大までのカテゴリのリストもマッピングし、カテゴリシリーズと同じカテゴリグループ化メカニズムをサポートします。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### ラジアル シリーズのタイプ

次の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名                    | 説明                                                               |
| ------------------------ | ---------------------------------------------------------------- |
| `RadialAreaSeries`       | ラジアル (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合で囲まれ、塗りつぶされた多角形を表示します          |
| `RadialSplineAreaSeries` | ラジアル (角度/半径) 座標にあるデータ ポイントを結ぶ滑らかな/補間された線の集合で囲まれ、塗りつぶされた多角形を表示します |
| `RadialSplineSeries`     | ラジアル (角度/半径) 座標にあるデータ ポイントを結ぶ滑らかな/補間された線の集合を表示します。               |
| `RadialScatterSeries`    | 極座標 (角度/半径) 座標にあるデータ ポイントを表すマーカーの集合を表示します。                       |
| `RadialLineSeries`       | 極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合を表示します。                         |

### 軸の要件

`IgxDataChart` コントロールはさまざまな軸タイプを提供しますが、ラジアル シリーズで使用できるのは以下のタイプの軸のみです。

| シリーズ タイプ             | 半径軸タイプ                          | 角度軸タイプ                          |
| -------------------- | ------------------------------- | ------------------------------- |
| `RadialAreaSeries`   | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |
| `RadialPieSeries`    | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |
| `RadialColumnSeries` | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |
| `RadialLineSeries`   | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |

### データの要件

極座標シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートはラジアル シリーズをレンダリングしません。
-   すべてのデータ項目には、財務軸 (`IgxCategoryXAxisComponent` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   データ項目は、カテゴリシリーズ (`RadialAreaSeries` など) の `ValueMemberPath` プロパティを使用してマップする数値データ列を少なくとも 1 列含む必要があります。

上記データ要件を満たすデータソースとして [SampleRadialData](datachart_data_sources_radial.md) を使用できます。

```typescript
this.state = { dataSource: SampleRadialData.create() }
```

### モジュールの要件

<!-- Angular -->

ラジアル シリーズを使用するには、データチャート モジュールの読み込みと登録の際にアプリケーションに次のモジュールをインポートする必要があります。

```typescript
// axis' modules:
import { IgxCategoryAngleAxis } from "igniteui-angular-charts/ES5/igx-category-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxRadialAreaSeries } from "igniteui-angular-charts/ES5/igx-radial-area-series";
import { IgxRadialLineSeries } from "igniteui-angular-charts/ES5/igx-radial-line-series";
import { IgxRadialPieSeries } from "igniteui-angular-charts/ES5/igx-radial-pie-series";
import { IgxRadialColumnSeries } from "igniteui-angular-charts/ES5/igx-radial-column-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartRadialCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-core-module";
import { IgxDataChartRadialModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

### コード例

このコードは、`RadialAreaSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department" />
    <igx-numeric-radius-axis name="radiusAxis" />
    <igx-radial-pie-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis"/>
 </igx-data-chart>
```

上記のコードを使って `RadialAreaSeries` をレンダリングしたい極座標シリーズの名前で置き換えて他のタイプの極座標 シリーズを作成することもできます。

### その他のリソース

-   [軸タイプ](datachart_axis_types.md)
-   [軸の共有](datachart_axis_sharing.md)
-   [チャートの凡例](datachart_chart_legends.md)
-   [シリーズのマーカー](datachart_series_markers.md)
-   [シリーズ タイプ](datachart_series_types.md)
