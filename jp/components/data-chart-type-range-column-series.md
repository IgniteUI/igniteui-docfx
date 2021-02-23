---
title: Angular データ チャート | データ可視化ツール | 範囲縦棒チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して範囲縦棒チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, range column charts, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 範囲縦棒チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular 範囲縦棒チャート

Ignite UI for Angular 範囲縦棒チャートは、範囲チャートのグループに属し、線の間の領域が塗りつぶされた 2 本の線を使用してレンダリングされます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数のアイテムを比較します。範囲値は y 軸に表示され、カテゴリは x 軸に表示されます。[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) は、範囲が塗りつぶされた領域ではなく垂直柱の集まりで表されること以外は [`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) と同じです。

## Angular 範囲縦棒チャートの例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-column-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 範囲縦棒チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) で使用できるのは以下のタイプの軸のみです。

-   [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)
-   [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)
-   [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

## データの要件

[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) には以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) がレンダリングされません。
-   すべてのデータ項目には、カテゴリ軸の [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) プロパティにマッピングする必要があるラベルデータ列（文字列または日時）を少なくとも1つ含める必要があります ([`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など)。
-   すべてのデータ項目には、[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) の `HighMemberPath` プロパティと `LowMemberPath` プロパティを使用してマップする必要がある少なくとも 2 つの数値データ列が含まれている必要があります。

上記データ要件を満たすデータソースとして [SampleRangeData](data-chart-data-sources-range.md) を使用できます。

```ts
public dataSource: any[] = SampleRangeData.create();
```

## モジュールの要件

[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) を作成するには、以下のモジュールが必要です。

```ts
// in app.module.ts file
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxRangeColumnSeries } from 'igniteui-angular-charts';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

## コード例

このコードは、[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) を使用して Ignite UI for Angular データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
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
