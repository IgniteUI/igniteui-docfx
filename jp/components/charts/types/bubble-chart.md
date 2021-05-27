---
title: Angular バブル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックス の Angular バブル チャート
_keywords: Angular Charts, Bubble Chart, Infragistics, Angular チャート, バブル チャート, インフラジスティックス
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries"]
_language: ja
---

# Angular バブル チャート

Ignite UI for Angular バブル チャートは[散布図]（scatter-chart.md）の一種で、可変スケーリングのマーカーを表示して、いくつかの異なる一連のデータ内の項目間の関係を表したり、x 座標と y 座標を使用してデータ項目をプロットしたりします。データ ポイントのこれらの座標は、2 つの数値データ列によって決定されます。バブル チャートは、データの不均一な間隔またはクラスターに注意を向けます。このチャートは、科学データのプロットによく用いられ、予測結果からの収集データの偏差を強調表示できます。バブル チャートには、[散布図チャート](scatter-chart.md#angular-散布マーカー-チャート)の多くの特性がありますが、さまざまな半径スケール サイズを持つオプションがあります。

## Angular バブル チャートの例

次の例に示すように、[`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) と 2 つの数値軸を使用して、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでバブル チャートを作成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-multiple-sources"
           alt="Angular バブル チャートの例" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの Angular バブル チャート

以下の例に示すように、データを [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) の `DataSource` プロパティにバインドし、その [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#xmemberpath)、[`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#ymemberpath)、[`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusmemberpath) プロパティを使用してデータ列をマップできます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-single-source"
           alt="単一シリーズの  Angular バブル チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの Angular バブル チャート

Angular バブル チャートでは、次の例に示すように、複数のデータ ソースのバインドは、新しい各データ ソースを追加の  [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) の `DataSource` プロパティに設定することで機能します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-multiple-sources"
           alt="複数シリーズの Angular バブル チャート" >
</code-view>

<div class="divider--half"></div>

## Angular バブル チャートのスタイル設定

Angular バブル チャートでは、[`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markertype) プロパティを使用してバブル マーカーの形状をカスタマイズし、[`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusscale) プロパティを使用してサイズをカスタマイズし、[`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markerbrush)、[`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markeroutline)、[`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markerthickness) プロパティを使用して外観をカスタマイズできます。さらに、[`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillmemberpath) プロパティと [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillscale) プロパティを使用して、データ列に基づいてバブル マーカーにカラーを付けることもできます。この例では、上記のプロパティの使用法を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-styling"
           alt="Angular バブル チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

-   [散布図](scatter-chart.md)
-   [シェープ チャート](shape-chart.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html)
-   [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)
-   `DataSource`
-   [`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillmemberpath)
-   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillscale)
-   [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markertype)
-   [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markerbrush)
-   [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markeroutline)
-   [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markerthickness)
-   [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusscale)
-   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusmemberpath)
-   [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#xmemberpath)
-   [`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#ymemberpath)
