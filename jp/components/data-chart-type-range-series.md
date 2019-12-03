---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## エリア シリーズ

このトピックでは、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールのさまざまな種類のエリア シリーズについて説明します。エリア シリーズは、2 つの数値データ列を使用し、それらを水平方向に引き伸ばされたデータポイントのコレクションとしてレンダリングする一連のチャート シリーズです ([`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) など)。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### エリア シリーズのタイプ

次の表は、すべての種類のエリア シリーズとその説明を示しています。

| シリーズ名                                                                                                                                | 説明                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html)     | データポイントの High / Low 値のペア間の塗りつぶされた領域/範囲を表示します。                                     |
| [`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) | カテゴリは横に並べられ、値は縦に並べられます。高値/低値のデータポイント間の個別の列に離散データを表示します。カテゴリは水平方向、値は垂直方向にプロットされます。 |

### 軸の要件

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールはさまざまな軸タイプを提供しますが、エリア シリーズで使用できるのは以下のタイプの軸のみです。

| Series タイプ                                                                                                                           | YAxis タイプ                                                                                                                  | XAxis タイプ                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html)     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |

### データの要件

エリア シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートはエリア シリーズを描画しません。
-   すべてのデータ項目には、カテゴリ軸の `Label` プロパティにマッピングする必要があるラベルデータ列（文字列または日時）を少なくとも1つ含める必要があります（[`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など）。
-   すべてのデータ項目には、極座標シリーズの `HighMemberPath` と `LowMemberPath` プロパティを使用してマッピングする必要がある少なくとも2つの数値データ列 ([`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) など）を含める必要があります。

上記データ要件を満たすデータソースとして [SampleRangeData](data-chart-data-sources-range.md) を使用できます。

```ts
this.state = { dataSource: SampleRangeData.create() }
```

### モジュールの要件

極座標シリーズを使用するには、ロード中にアプリに以下のモジュールをインポートする必要があります。

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
// series' modules:
import { IgxRangeAreaSeries } from "igniteui-angular-charts/ES5/igx-range-area-series";
import { IgxRangeColumnSeries } from "igniteui-angular-charts/ES5/igx-range-column-series";
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

このコードは、[`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

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

[`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) を置き換えることで [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) を作成するために上記のコードを使用することもできます。

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
