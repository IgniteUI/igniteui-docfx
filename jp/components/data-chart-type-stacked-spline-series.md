---
title: データ チャート|可視化ツール|Ignite UI for Angular |インフラジスティックス|積層型スプライン チャート
_description: 複合チャート ビューを作成するために、同じプロット エリアに視覚要素の複数のインスタンスを表示する積層型スプライン チャートを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','StackedSplineSeries']
namespace: Infragistics.Controls.Charts
_language: ja
---

## 積層型スプライン チャート

Ignite UI for Angular 積層型スプライン チャートは、カテゴリ チャートのグループに属し、スプライン セグメントの滑らかな曲線  ([`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) が互いに積み重ねられた点のコレクションを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-spline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) には、[`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) 要素を配置できる独自の [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションがあります。これらのフラグメントは、チャートの実際のレンダリングを構成するものであり、`ValueMemberPath` を受け取る要素です。

### 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)
-   [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)
-   [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)
-   [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

### データの要件

[`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、財務軸 ([`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、[`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) の [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加する [`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) の [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html#valuememberpath) プロパティを使用してマップする必要がある少なくとも 1 つの数値データ列が含まれている必要があります。

### モジュールの要件

[`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) を作成するには、次のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
// series' modules:
import { IgxStackedSplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";

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

### コード例

このコードは、[`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-spline-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-spline-series>

</igx-data-chart>
```
