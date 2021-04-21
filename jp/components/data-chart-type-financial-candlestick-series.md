---
title: Angular データ チャート | データ可視化ツール | ファイナンシャル ローソク足 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用してファイナンシャルローソク足チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, financial candlestick, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, ファイナンシャル ローソク足, インフラジスティックス
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries','PriceDisplayType','CategoryXAxis']
_language: ja
---

# Angular ファイナンシャル ローソク足チャート

[`Candlestick`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/pricedisplaytype.html#candlestick) モードの Ignite UI for Angular 金融価格チャートは、株価をプロットし、各日の株価の高値、安値、始値、終値を表示するために使用します。各データ ポイントは、上下の両方に垂直線で垂直列としてプロットされます。垂直の線は投資の高値と安値の間の範囲を示します。垂直線の上部はセッション中の最高価格を示し、垂直線の下部はセッション中の最低価格を示します。垂直列は、投資の始値と終値の間の範囲を示します。開始値と終了値の間で正の値がある場合はシリーズの [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) を使用して列が満たされ、負の値がある場合は Series の [`negativeBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#negativebrush) を使用して列が満たされます。

## Angular ファイナンシャル ローソク足チャートの例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-candlestick-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-candlestick-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ファイナンシャル ローソク足チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-candlestick-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、すべての財務シリーズでは、[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) をY 軸として、[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、または [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) を X 軸としてのみ使用できます。

## Required Data

以下は、ファイナンシャル シリーズ、インジケーター、オーバーレイのデータ要件です。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースは、少なくともデータ項目を 1 つ含む必要があり、含まない場合はデータ チャートでファイナンシャル シリーズを描画しません。
-   すべてのデータ項目には、財務軸の [`label`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#label) プロパティ ([`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など) にマッピングされるデータ列 (文字列または日時) が少なくとも1つ含まれている必要があります。
-   すべてのデータ項目は、ファイナンシャル シリーズのプロパティ使用してマップされる 5 つの数値データ列を含む必要があります。 [`openMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#openmemberpath)、[`highMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#highmemberpath), [`lowMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#lowmemberpath)、[`closeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#closememberpath)、[`volumeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#volumememberpath)。

上記データ要件を満たすデータソースとして [SampleFinancialData](data-chart-data-sources-financial.md) を使用できます。

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## モジュールの要件

ファイナンシャル シリーズを作成するには、以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
import { IgxBollingerBandsOverlay } from 'igniteui-angular-charts';
import { IgxMedianPriceIndicator } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxFinancialPriceSeriesModule } from 'igniteui-angular-charts';

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

## コード例

このコードは、[`IgxFinancialPriceSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html)、[`IgxBollingerBandsOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html)、[`IgxMedianPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmedianpriceindicatorcomponent.html) でデータ チャートのインスタンスを作成する方法を示します。これらのシリーズは同じ X-Axis と Y-Axis を使用しますが複数軸を使用して異なるシリーズに割り当てることができます。詳細については、[軸共有と複数軸](data-chart-axis-sharing.md)トピックを参照してください。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-bollinger-bands-overlay
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-bollinger-bands-overlay>

    <igx-financial-price-series
        name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Candlestick"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-median-price-indicator
        name="series3"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Line"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-median-price-indicator>
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
