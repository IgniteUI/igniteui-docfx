---
title: Angular データ チャート | データ可視化ツール | 積層型棒チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して積層型棒チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, stacked bar charts, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 積層型棒チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','StackedBarSeries']
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular 積層型棒チャート

Ignite UI for Angular 積層型棒チャートは、カテゴリ チャートのグループに属し、互いに積み重ねられた長方形のコレクション ([`IgxStackedFragmentSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) を使用して描画されます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも x 軸の正の側にグループ化され、負の値は x 軸の負の側にグループ化されます。[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) は [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) と同じデータ プロットの概念を使用しますが、データポイントは垂直線 (y軸) ではなく水平線 (x軸) に沿って積み重ねられます。つまり、積層棒チャートは積層縦棒チャートのように描画されますが、時計回りに 90 度回転します。

## Angular 積層型棒チャートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-bar-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 積層型棒チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) には、[`IgxStackedFragmentSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) 要素を配置できる独自の [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションがあります。これらのフラグメントは、チャートの実際のレンダリングを構成するものであり、`ValueMemberPath` を受け取る要素です。

## 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)

## データの要件

[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、財務軸 ([`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) など) の [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
-   すべてのデータ項目には、[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)' の [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに追加する [`IgxStackedFragmentSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) の [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html#valuememberpath) プロパティを使用してマップする必要がある少なくとも 1 つの数値データ列が含まれている必要があります。

## モジュールの要件

[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) を作成するには、以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
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

## コード例

このコードは、[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

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
