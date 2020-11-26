---
title: Angular ファイナンシャル チャート | パフォーマンス | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャート コントロールを使用して数百万の財務データ ポイントを高速に描画します。Ignite UI for Angular チャートの高いパフォーマンスを是非お試しください。
_keywords: Angular charts, financial chart, stock chart, performance, Ignite UI for Angular, Infragistics, data binding, Angular チャート, ファイナンシャル チャート, 株価チャート, パフォーマンス, インフラジスティックス、データ バインディング
mentionedTypes: ['FinancialChart', 'FinancialChartType', 'FinancialOverlayType', 'FinancialChartVolumeType', 'MarkerType', 'FinancialChartXAxisMode', 'FinancialChartZoomSliderType', 'FinancialChartYAxisMode', 'DomainChart' ]
_language: ja
---

# Angular チャートのパフォーマンス

Angular Financial Chart  コンポーネントは大量のデータ ポイントの描画で高いパフォーマンスを実現します。以下のデモは 20 年間のデータをバインドし、ローソク足チャートで 1 日間隔の在庫価格を示します。

## Angular チャートのパフォーマンスの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-performance-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-performance' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular チャートのパフォーマンスの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-performance-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>
<div class="divider--half"></div>

以下のコードはファイナンシャル チャートを大量のデータにバインドします。

```ts
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

チャートのパフォーマンスに影響を及ぼす Angular 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

-   コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。Angular の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。
-   チャートに Angular が自動でデータ変更を通知する代わりに、バインドされたデータが変更された方法をコンポーネントに通知できます。デルタ通知の処理は、Angular が変更検出を実行する際に 100 万のレコードを含む配列のすべての変更を比較するより効果的に実行できます。バインドしたデータの変更をチャートに通知する方法の詳細については、チャートの `notify*` メソッドを参照してください。
-   Angular がデバッグ モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合、`--prod` 版を使用して serve または build してください。

<!-- -->

また、アプリケーションのパフォーマンスを最適化する場合、ファイナンシャル チャートの以下の機能に注意してください。

## チャート タイプ

[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) オプションの設定はチャート パフォーマンスに影響します。

-   [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#line) - 簡単に描画できるチャート タイプです。大量のデータ ポイントの描画や複数のデータ ソースをプロットする場合に使用することをお勧めします。
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#column) - [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#line) チャート タイプより描画が複雑です。単一の数値を持つデータ項目を描画する場合の使用することをお勧めします。
-   [`Bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#bar) - [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#column) チャート タイプより描画が複雑です。OHLC 数値を持つデータ項目を描画する場合に使用することをお勧めします。
-   [`Candle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#candle) - [`Bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#bar) チャート タイプより描画が複雑です。OHLC 数値を持つデータ項目を描画する場合にも推薦されます。

## ボリューム タイプ

[`volumeType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#volumetype) オプションの設定はチャート パフォーマンスに影響します。

-   [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#line) - 描画する一番安いボリューム タイプです。データ ポイントの大量を描画するか、複数のデータ ソースをプロットする場合に使用することをお勧めします。
-   [`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartvolumetype.html#area) - [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#line) ボリューム タイプより描画に手間がかかります。
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#column) - [`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartvolumetype.html#area) ボリューム タイプより描画に手間がかかります。1 つ ～ 3 つの在庫の出来高データを描画する場合に使用することをお勧めします。
-   [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartvolumetype.html#none) - ボリューム ペインは表示しません。

## マーカー タイプ

[`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/markertype.html) オプションを `none` に設定すると他のタイプより描画する項目の量が少なくなります。

## 凡例の表示

[`isLegendVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#islegendvisible) オプションを `false` に設定すると凡例が描画されないためパフォーマンスが向上します。

## ズーム スライダー タイプ

[`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) オプションを `none` に設定すると、チャート パフォーマンスを向上し、その他のインジケーターおよびボリューム ペインのために垂直スペースを利用可能になります。

## チャート ペイン

[`FinancialIndicatorType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialindicatortype.html) および [`FinancialOverlayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialoverlaytype.html) オプションを使用して複数のペインを設定した場合、パフォーマンスが低下する可能性があり、少数の財務指標および単一の財務オーバーレイを使用することをお勧めします。

## X 軸モード

[`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode) オプションの設定はチャート パフォーマンスに影響します。

-   [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) - ファイナンシャル チャートで使用できる最も簡易な X 軸です。データ範囲のギャップ (週末または休日など) の描画が必要ない場合に使用することをお勧めします。
-   [`Time`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#time)  - ファイナンシャル チャートで [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) より手間がかかります。データ範囲のギャップ (週末または休日など) の描画が必要な場合に使用することをお勧めします。

## Y 軸モード

パフォーマンスを向上させるには、[`PercentChange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#percentchange) モードよりオプションが少ない [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode)  オプションの `numeric` に設定してください。

## 注釈

Callout Annotations ([`calloutsVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#calloutsvisible)) または Final Value Annotations ([`finalValueAnnotationsVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#finalvalueannotationsvisible)) はファイナンシャル チャートのパフォーマンスを低下させます。

## 軸ビジュアル

デフォルトで、ファイナンシャル チャートのパフォーマンスが最適化されています。ただし、以下のオプションの追加などチャート ビジュアルを有効化することによりパフォーマンスが低下する場合があります。

-   [`xAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistitle)
-   [`yAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitle)
-   [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstroke)
-   [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstroke)
-   [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstroke)
-   [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstroke)
-   [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstroke)
-   [`yAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstroke)
-   [`xAxisLabel`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabel)
-   [`yAxisLabel`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabel)
-   [`xAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstroke)
-   [`yAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstroke)
-   [`xAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstrip)
-   [`yAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstrip)
-   [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval)

<div class="divider--half"></div>

### その他のリソース

<div class="divider--half"></div>

-   [大規模データのバインド](financial-chart-high-volume.md)
-   [リアルタイムにデータをバインド](financial-chart-high-frequency.md)
-   [複数データ ソースのバインド](financial-chart-multiple-data.md)
