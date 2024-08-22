---
title: Angular チャートのハイライト表示 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャートのハイライト表示
_keywords: Angular Charts, Highlighting, Infragistics, Angular チャート, ハイライト表示, インフラジスティックス
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

## Angular チャートのハイライト表示の例

以下の例は、Angular チャートで使用できるさまざまなハイライト表示オプションを示しています。

<code-view style="height: 500px" alt="Angular チャートのハイライト表示の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/annotations-highlighting"
                                                 github-src="charts/category-chart/annotations-highlighting">
</code-view>


<div class="divider--half"></div>

# Angular チャートのハイライト表示モードと動作

すべての Angular チャートは、さまざまなハイライト表示オプションをサポートしています。[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode) は、プロット領域に描画されたシリーズ/データ項目にマウスを合わせたときに明るくまたはフェードするように設定できます。[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior) は、ハイライト表示の効果をトリガーするために、直接または最も近いデータ項目に設定できます。ハイライト表示のモードと動作は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールでサポートされており、ハイライト表示機能を使用するための同じ API を備えています。

以下の例は、[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode) Angular チャートを示しています。

<code-view style="height: 500px" alt="Angular ハイライト表示モードの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/highlighting-mode"
                                                 github-src="charts/category-chart/highlighting-mode">
</code-view>


以下の例は、[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior) Angular チャートを示しています。

<code-view style="height: 500px" alt="Angular ハイライト表示モードの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/highlighting-behavior"
                                                 github-src="charts/category-chart/highlighting-behavior">
</code-view>


# Angular チャート凡例のハイライト表示

すべての Angular チャートは、凡例のハイライト表示をサポートしています。[`legendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#legendHighlightingMode) を有効にすると、マウスが凡例マーカー項目にカーソルを合わせると、描画されたシリーズがプロット領域でハイライト表示されます。凡例のハイライト表示は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールでサポートされており、ハイライト表示機能を使用するための同じ API を備えています。

以下の例は、凡例シリーズハイライト表示の Angular チャートを示しています。

<code-view style="height: 500px" alt="Angular ハイライト表示モードの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/legend-highlighting"
                                                 github-src="charts/category-chart/legend-highlighting">
</code-view>


## ハイライト表示レイヤー

Ignite UI for Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) は、データ項目にカーソルを合わせると 3 種類のハイライト表示を有効にできます。

1.  シリーズ ハイライトは、ポインターがデータ ポイント上ある場合に、マーカーまたは列で表される単一のデータ ポイントをハイライトします。これは、[`isSeriesHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#isSeriesHighlightingEnabled) プロパティを true に設定することで有効になります。

2.  項目ハイライトは、その位置に縞模様の図形を描画したりマーカーを描画したりすることでシリーズの項目をハイライト表示します。これは、[`isItemHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isItemHighlightingEnabled) プロパティを true に設定することで有効になります。

3.  カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。これは、[`isCategoryHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isCategoryHighlightingEnabled) プロパティを true に設定することで有効になります。

以下の例は、Angular チャートで使用できるさまざまなハイライト表示レイヤーを示しています。

<code-view style="height: 500px" alt="Angular ハイライト表示の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/column-chart-with-highlighting"
                                                 github-src="charts/category-chart/column-chart-with-highlighting">
</code-view>


## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

*   [チャート アニメーション](chart-animations.md)
*   [チャート注釈](chart-annotations.md)
*   [チャート ツールチップ](chart-tooltips.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

*   [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode)
*   [`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior)
*   `LegendHighlightingBehavior`
*   [`isCategoryHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isCategoryHighlightingEnabled)
*   [`isItemHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isItemHighlightingEnabled)
*   [`isSeriesHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#isSeriesHighlightingEnabled)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
