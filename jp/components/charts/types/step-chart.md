---
title: Angular ステップ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular ステップ チャート
_keywords: Angular Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics, Angular チャート, ステップ チャート, ステップ エリア チャート, ステップ折れ線チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "ChartType"]
_language: ja
---

# Angular ステップ チャート

Ignite UI for Angular ステップ チャートは連続する垂直線と水平線で接続されたポイントのコレクションとして描画されるカテゴリ チャートのグループに属しています。ステップ エリア チャートの場合、線の下の領域が塗りつぶされます。値は y 軸に表示され、カテゴリは x 軸に表示されます。ステップ チャートは、一定期間の変化量を強調したり、複数の項目を比較したりします。

## Angular ステップ エリア チャート

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでステップ エリア チャートを作成するには、以下の例のように、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `StepArea` 値に設定します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="複数ソースの Angular ステップ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## Angular ステップ折れ線チャート

Angular ステップ折れ線チャートは、線の下の領域が塗りつぶされていないことを除いて、ステップ エリア チャートと非常によく似ています。

次の例に示すように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `StepLine` 値に設定することで、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでステップ折れ線チャートを作成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="複数ソースの Angular ステップ折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## Angular ステップ チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたステップ チャートが必要な場合は、以下に示すように、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールの [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markertypes)、[`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerbrushes)、[`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlines)、折れ線の [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#brushes)、および折れ線の [`outlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#outlines) プロパティを構成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-styling"
           alt="Angular ステップ折れ線チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [折れ線チャート](line-chart.md)
-   [チャート マーカー](../features/chart-markers.md)

## API メンバー

以下は、上記のセクションで説明されている API メンバーのリストです。

-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype)
-   `StepArea`
-   `StepLine`
-   [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#brushes)
-   [`outlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#outlines)
-   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerbrushes)
-   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlines)
-   [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markertypes)
