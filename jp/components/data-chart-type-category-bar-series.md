---
title: データ チャート|可視化ツール|Ignite UI for Angular |インフラジスティックス|棒チャート
_description: 同じプロット領域に視覚要素の複数インスタンスを表示する棒チャートを作成し、複合チャート ビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
_language: ja
---

## 棒チャート

Ignite UI for Angular 棒チャートはカテゴリ チャートのグループに属し、チャートの左から右にデータ ポイントの値に向かって伸びる長方形のコレクションを使用して描画されます。[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) は、[`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) と同じデータ プロットの概念を使用していますが、データ ポイントは、水平 (x 軸) でなく垂直軸 (y 軸) に沿って拡大します。つまり、棒チャートは柱状チャートのように描画されますが、時計回りに 90 度回転します。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-bar-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)

### データの要件

[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、財務軸 ([`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) の `ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。

上記データ要件を満たすデータソースとして [SampleCategoryData](data-chart-data-sources-category.md) を使用できます。

```ts
public dataSource: any[] = SampleCategoryData.create();
```

### モジュールの要件

[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) を作成するには、次のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
// series' modules:
import { IgxBarSeries } from "igniteui-angular-charts/ES5/igx-bar-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### コード例

このコードは、[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

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

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズの注釈](data-chart-series-annotations.md)
-   [シリーズの強調表示](data-chart-series-highlighting.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズのツールチップ](data-chart-series-tooltips.md)
-   [シリーズ トレンドライン](data-chart-series-trendlines.md)
-   [シリーズ タイプ](data-chart-series-types.md)
