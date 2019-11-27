---
title: データ チャート|可視化ツール|Ignite UI for Angular |インフラジスティックス|スプライン チャート
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するスプライン チャートを作成し、複合チャート ビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
_language: ja
---

## スプライン チャート

Ignite UI for Angular スプライン チャートはカテゴリ チャートのグループに属し、スプラインの滑らかな曲線で接続されたポイントのコレクションを使用してレンダリングされます。値は y 軸に表示され、カテゴリは x 軸に表示されます。[`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) は時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。Angular スプライン チャートは、データ ポイントを接続するラインにスプライン補間とデータの表示を改善するスムージングがあること以外は Angular 折れ線チャートと同じです。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-spline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)
-   [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)
-   [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)
-   [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

### データの要件

[`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、財務軸 ([`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、[`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) の `ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。

上記データ要件を満たすデータソースとして [SampleCategoryData](data-chart-data-sources-category.md) を使用できます。

```ts
public dataSource: any[] = SampleCategoryData.create();
```

### モジュールの要件

[`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) は以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
// series' modules:
import { IgxSplineSeries } from "igniteui-angular-charts/ES5/igx-spline-series";
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

このコードは、[`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-spline-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-spline-series>
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
