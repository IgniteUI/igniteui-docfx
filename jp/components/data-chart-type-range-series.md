---
title: Angular データ チャート | データ可視化ツール | 範囲チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、範囲エリア、範囲柱状などの範囲チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, range charts, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 範囲チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular エリア シリーズ

このトピックでは、Angular データ チャート コンポーネントコントロールのさまざまな種類のエリア シリーズについて説明します。エリア シリーズは、2 つの数値データ列を使用し、それらを水平方向に引き伸ばされたデータポイントのコレクションとしてレンダリングする一連のチャート シリーズです ([`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) など)。

## Angular エリア シリーズの例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular エリア シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">Stackblitz で表示
    </button>


</div>

<div class="divider--half"></div>

## エリア シリーズのタイプ

以下の表は、すべての種類のエリア シリーズとその説明を示しています。

| シリーズ名                                                                                                                                                          | 説明                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html)     | データポイントの High / Low 値のペア間の塗りつぶされた領域/範囲を表示します。                                     |
| [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) | カテゴリは横に並べられ、値は縦に並べられます。高値/低値のデータポイント間の個別の列に離散データを表示します。カテゴリは水平方向、値は垂直方向にプロットされます。 |

## 軸の要件

Angular データ チャート コンポーネントはさまざまな軸タイプを提供しますが、エリア シリーズで使用できるのは以下のタイプの軸のみです。

| Series タイプ                                                                                                                                                     | YAxis タイプ                                                                                                                                            | XAxis タイプ                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html)     | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |

## データの要件

エリア シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートはエリア シリーズを描画しません。
-   すべてのデータ項目には、カテゴリ軸の [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) プロパティにマッピングする必要があるラベルデータ列（文字列または日時）を少なくとも1つ含める必要があります（[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など）。
-   すべてのデータ項目には、極座標シリーズの `HighMemberPath` と `LowMemberPath` プロパティを使用してマッピングする必要がある少なくとも2つの数値データ列 ([`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) など）を含める必要があります。

上記データ要件を満たすデータソースとして [SampleRangeData](data-chart-data-sources-range.md) を使用できます。

```ts
public dataSource: any[] = SampleRangeData.create();
```

## モジュールの要件

範囲シリーズを作成するには、以下のモジュールが必要です。

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxRangeAreaSeries } from 'igniteui-angular-charts';
import { IgxRangeColumnSeries } from 'igniteui-angular-charts';
// data chart's modules:

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

このコードは、[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) でデータ チャートのインスタンスを作成し、データソースにバインドする方法を説明します。

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

[`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) を置き換えることで [`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) を作成するために上記のコードを使用することもできます。

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
