---
title: Angular シェープ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular シェープ チャート
_keywords: Angular Charts, Shape Chart, Infragistics, Angular チャート, シェープ チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "ScatterPolygonSeries", "ScatterPolylineSeries"]
_language: ja
---

# Angular シェープ チャート

Ignite UI for Angular シェープ チャートは、一連の形状 (1 つまたは複数の X/Y 座標の配列) をとり、それらをデカルト (x、y) 座標系のポリゴンまたはポリラインのコレクションとして描画するチャートのグループです。シェープ チャートは科学データの強調領域でよく使用されますが、ダイアグラム、青写真、さらには建物の間取り図のプロットにも使用できます。

## Angular 散布ポリゴン チャート

Angular 散布ポリゴン チャートは、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) を使用して、デカルト (x、y) 座標系でポリゴンの配列または配列の配列を描画します。このチャートは、プロット図、青写真、さらには建物の間取り図の塗りつぶし図形に使用できます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polygon-series"
           alt="Angular 散布ポリゴン チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 散布ポリライン チャート

Angular 散布ポリライン チャートは、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) を使用して、デカルト (x、y) 座標系でポリラインの配列または配列の配列を描画します。このチャートは、プロット図、青写真、さらには建物の間取り図のアウトラインに使用できます。また、大量の要素間の複雑な関係を視覚化することもできます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polyline-series"
           alt="Angular 散布ポリライン チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [折れ線チャート](line-chart.md)
-   [散布チャート](scatter-chart.md)

## API メンバー

以下は、上記のセクションで説明された API メンバーのリストです。

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)
-   [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html)
-   `DataSource`
-   [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxshapeseriesbasecomponent.html#shapememberpath)
-   [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)
-   `YAxisName`
-   `XAxisName`
