---
title: データ チャート|可視化ツール|Ignite UI for Angular |インフラジスティックス|放射型状円チャート
_description: 複合チャート ビューを作成するために、同じプロット エリアに視覚要素の複数のインスタンスを表示するラジアル円チャートを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','RadialPieSeries']
_language: ja
---

## 放射型状円チャート

Ignite UI for Angular 放射状円チャートは放射状チャートのグループに属し、チャートの中心からデータポイントの位置に向かって伸びる円スライスを使用します。[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) は、データ ポイントの複数シリーズを分類する概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-pie-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

Angular データチャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)

### データの要件

[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、財務軸 ([`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) の [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath) プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。

上記データ要件を満たすデータソースとして [SampleRadialData](data-chart-data-sources-radial.md) を使用できます。

```ts
public dataSource: any[] = SampleRadialData.create();
```

### モジュールの要件

[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) は以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from "igniteui-angular-charts/ES5/igx-category-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxRadialPieSeries } from "igniteui-angular-charts/ES5/igx-radial-pie-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartRadialCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-core-module";
import { IgxDataChartRadialModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

### コード例

このコードは、[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department"></igx-category-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-radial-pie-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-pie-series>
 </igx-data-chart>
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
