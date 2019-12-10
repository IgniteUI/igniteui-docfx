---
title: データ グリッド|可視化ツール|Ignite UI for Angular |Infragistics |財務
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
_language: ja
---

## ファイナンシャル OHLC チャート

`OHLC` 表示モードの Ignite UI for Angular 金融価格チャートは、株価をプロットし、各日の株価の高値、安値、始値、終値を表示するために使用されます。各データ ポイントは、左と右の両側に水平の垂直線を伴った縦の線としてプロットされます。垂直の線は投資の高値と安値の間の範囲を示します。垂直の線の上部は取引期間中の最大の高値を示し、垂直の線の下部は取引期間中の最安値を示します。水平の線は投資の始値と終値の間の範囲を示します。垂直線の左側の水平の線はセッションの開始値を示します。垂直の線の右側の水平の線はセッションの終値を示します。

### サンプル

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-ohlc-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-ohlc-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-ohlc-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 軸の要件

Angular データ チャートコンポーネントはさまざまなタイプの軸を提供しますが、すべての財務シリーズでは、[`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) を Y 軸として、[`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、または [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) を X 軸としてのみ使用できます。

### データの要件

ファイナンシャル シリーズには、以下のデータ要件があります。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースは、少なくともデータ項目を 1 つ含む必要があり、含まない場合はデータ チャートでファイナンシャル シリーズを描画しません。
-   すべてのデータ項目には、財務軸の `Label` プロパティ ([`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など) にマッピングされるデータ列 (文字列または日時) が少なくとも1つ含まれている必要があります。
-   すべてのデータ項目は、ファイナンシャル シリーズのプロパティ使用してマップされる 5 つの数値データ列を含む必要があります。 [`openMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#openmemberpath)、[`highMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#highmemberpath), [`lowMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#lowmemberpath)、[`closeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#closememberpath)、[`volumeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#volumememberpath)。

上記データ要件を満たすデータソースとして [SampleFinancialData](data-chart-data-sources-financial.md) を使用できます。

```ts
public dataSource: any[] = SampleFinancialData.create();
```

### モジュールの要件

ファイナンシャル シリーズには以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
// series' modules:
import { IgxFinancialPriceSeries } from "igniteui-angular-charts/ES5/igx-financial-price-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxFinancialPriceSeriesModule,
        // ...
    ]
})
```

### コード例

[`IgxFinancialPriceSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html) でデータ チャートのインスタンスを作成する方法を示します。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-financial-price-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="OHLC"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

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
