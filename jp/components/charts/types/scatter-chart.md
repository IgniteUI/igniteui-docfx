---
title: Angular 散布図 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 散布図
_keywords: Angular Charts, Scatter Chart, Infragistics, Angular チャート, 散布図, インフラジスティックス
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries"]
_language: ja
---

# Angular 散布図

Ignite UI for Angular 散布図は、異なる一連のデータ内の項目間の関係を示したり、数値の x 座標と y 座標を使用してデータ項目をプロットしたりするチャートのグループに属しています。このチャートは、データの不均等な散らばりやデータの塊に注意が向けられます。科学データのプロットによく用いられ、予測結果からの収集データの偏差を強調表示できます。また、データを時シリーズに (データが時系列でない場合であっても) 構成するためにも使用できます。

## Angular 散布マーカー チャート

Angular 散布図は、マーカーのコレクションとして描画されます。各マーカーには、デカルト座標系での位置を決定する 1 対の数値 X/Y 値があります。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-point-chart"
           alt="Angular 散布マーカー チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 散布折れ線チャート

Angular は、直線で接続されたマーカーのコレクションとして描画され、各マーカーにはデカルト座標系での位置を決定する X/Y の数値のペアがあります。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-line-chart"
           alt="Angular 散布折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 散布スプライン チャート

Angular は、曲線スプラインで接続されたマーカーのコレクションとして描画され、各マーカーにはデカルト座標系での位置を決定する X/Y の数値のペアがあります。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-line-chart"
           alt="Angular 散布スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 散布高密度チャート

Angular 散布高密度 (HD) チャートを使用して、わずかな読み込み時間で数千から数百万のデータ ポイントに及ぶ散布データをバインドして表示します。このチャート タイプは非常に多くのポイント用に設計されているため、フル サイズのマーカーではなく小さな点として視覚化され、データ ポイントのクラスターを表すより高い色密度を使用してデータが最も多い領域を表示します。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxhighdensityscatterseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-hd-series"
           alt="Angular 散布 HD チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 散布エリア チャート

Angular 散布エリア チャートは各ポイントに割り当てられた数値を使って、X および Y データの三角形分割に基づいて、色付きのサーフェスを描画します。このチャートはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series"
           alt="Angular 散布エリア チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 散布等高線チャート

Angular 散布等高線チャートは、X データと Y データの三角形分割に基づいて、各ポイントに数値データ値が割り当てられた色付きの等高線を描画します。このチャートはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterContourSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattercontourseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-contour-series"
           alt="Angular 散布等高線チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [バブル チャート](bubble-chart.md)
-   [折れ線チャート](line-chart.md)
-   [スプライン チャート](spline-chart.md)
-   [シェープ チャート](shape-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ | コントロール名                                                                                                                                        | API メンバー                                                                                                                                                                     |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 散布マーカー   | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)                       |
| 散布折れ線    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)               |
| 散布スプライン  | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxScatterSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html)           |
| 高密度散布    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxhighdensityscatterseriescomponent.html) |
| 散布エリア    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html)               |
| 散布等高線    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxScatterContourSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattercontourseriescomponent.html)         |
