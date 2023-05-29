---
title: Angular ステップ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular ステップ チャート
_keywords: Angular Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics, Angular チャート, ステップ チャート, ステップ エリア チャート, ステップ折れ線チャート, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", 'Series']
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular ステップ チャート

Ignite UI for Angular ステップ チャートは連続する垂直線と水平線で接続されたポイントのコレクションとして描画されるカテゴリ チャートのグループに属しています。ステップ エリア チャートの場合、線の下の領域が塗りつぶされます。値は y 軸に表示され、カテゴリは x 軸に表示されます。ステップ チャートは、一定期間の変化量を強調したり、複数の項目を比較したりします。

## Angular ステップ エリア チャート

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コントロールでステップ エリア チャートを作成するには、以下の例のように、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#charttype) プロパティを **StepArea** 列挙型に設定します。

<code-view style="height: 600px" alt="複数ソースの Angular ステップ エリア チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/step-area-multiple-sources"
                                                 github-src="charts/category-chart/step-area-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular ステップ折れ線チャート

Angular ステップ折れ線チャートは、線の下の領域が塗りつぶされていないことを除いて、ステップ エリア チャートと非常によく似ています。

次の例に示すように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#charttype) プロパティを [`StepLine`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNcategorycharttype.html#stepline) 値に設定することで、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コントロールでステップ折れ線チャートを作成できます。

<code-view style="height: 600px" alt="複数ソースの Angular ステップ折れ線チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/step-line-multiple-sources"
                                                 github-src="charts/category-chart/step-line-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular ステップ チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたステップ チャートが必要な場合は、以下に示すように、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コントロールの [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markertypes)、[`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerbrushes)、[`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markeroutlines)、折れ線の [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#brushes)、および折れ線の [`outlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#outlines) プロパティを構成できます。

<code-view style="height: 600px" alt="Angular ステップ折れ線チャートのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/step-line-styling"
                                                 github-src="charts/category-chart/step-line-styling">
</code-view>


<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

*   [エリア チャート](area-chart.md)
*   [折れ線チャート](line-chart.md)
*   [チャート マーカー](../features/chart-markers.md)

## API リファレンス

以下は、上記のセクションで説明されている API メンバーのリストです。

*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#charttype)
*   [`StepArea`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNcategorycharttype.html#steparea)
*   [`StepLine`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNcategorycharttype.html#stepline)
*   [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#brushes)
*   [`outlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#outlines)
*   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerbrushes)
*   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markeroutlines)
*   [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markertypes)
