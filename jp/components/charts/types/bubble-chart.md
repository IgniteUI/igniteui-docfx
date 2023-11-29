---
title: Angular バブル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックス の Angular バブル チャート
_keywords: Angular Charts, Bubble Chart, Infragistics, Angular チャート, バブル チャート, インフラジスティックス
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular バブル チャート

Ignite UI for Angular バブル チャートは[散布図](scatter-chart.md)の一種で、可変スケーリングのマーカーを表示して、いくつかの異なる一連のデータ内の項目間の関係を表したり、x 座標と y 座標を使用してデータ項目をプロットしたりします。データ ポイントのこれらの座標は、2 つの数値データ列によって決定されます。バブル チャートは、データの不均一な間隔またはクラスターに注意を向けます。このチャートは、科学データのプロットによく用いられ、予測結果からの収集データの偏差を強調表示できます。バブル チャートには、[散布図チャート](scatter-chart.md#angular-散布マーカー-チャート)の多くの特性がありますが、さまざまな半径スケール サイズを持つオプションがあります。

## Angular バブル チャートの例

次の例に示すように、[`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) と 2 つの数値軸を使用して、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールで Ignite UI for Angular バブル チャートを作成できます。

<code-view style="height: 600px" alt="Angular バブル チャートの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-multiple-sources"
                                                 github-src="charts/data-chart/scatter-bubble-chart-multiple-sources">
</code-view>


<div class="divider--half"></div>

## 単一シリーズの Angular バブル チャート

以下の例に示すように、データを [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) の `ItemsSource` プロパティにバインドし、その [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#xMemberPath)、[`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#yMemberPath)、[`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusMemberPath) プロパティを使用してデータ列をマップできます。

<code-view style="height: 600px" alt="単一シリーズの Angular バブル チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-single-source"
                                                 github-src="charts/data-chart/scatter-bubble-chart-single-source">
</code-view>


<div class="divider--half"></div>

## 複数シリーズの Angular バブル チャート

Angular バブル チャートでは、次の例に示すように、複数のデータ ソースのバインドは、新しい各データ ソースを追加の [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) の `ItemsSource` プロパティに設定することで機能します。

<code-view style="height: 600px" alt="複数シリーズの Angular バブル チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-multiple-sources"
                                                 github-src="charts/data-chart/scatter-bubble-chart-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular バブル チャートのスタイル設定

Angular バブル チャートでは、[`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerType) プロパティを使用してバブル マーカーの形状をカスタマイズし、[`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusScale) プロパティを使用してサイズをカスタマイズし、[`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerBrush)、[`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerOutline)、[`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerThickness) プロパティを使用して外観をカスタマイズできます。さらに、[`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillMemberPath) プロパティと [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillScale) プロパティを使用して、データ列に基づいてバブル マーカーにカラーを付けることもできます。この例では、上記のプロパティの使用法を示しています。

<code-view style="height: 600px" alt="Angular バブル チャートのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-styling"
                                                 github-src="charts/data-chart/scatter-bubble-chart-styling">
</code-view>


<div class="divider--half"></div>

## その他のリソース

*   [散布図](scatter-chart.md)
*   [シェープ チャート](shape-chart.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html)
*   [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)
*   `ItemsSource`
*   [`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillMemberPath)
*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillScale)
*   [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerType)
*   [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerBrush)
*   [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerOutline)
*   [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerThickness)
*   [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusScale)
*   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusMemberPath)
*   [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#xMemberPath)
*   [`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#yMemberPath)
