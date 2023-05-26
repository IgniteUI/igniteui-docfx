---
title: Angular チャート ツールチップ | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート ツールチップ
_keywords: Angular Charts, Tooltips, Infragistics, Angular チャート, ツールチップ, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート ツールチップ

Angular チャートでは、ツールチップはバインドされたデータに関する詳細を提供し、エンドユーザーがデータ ポイントにカーソルを合わせるとポップアップで表示されます。ツールチップは、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントでサポートされています。

## Angular チャート ツールチップのタイプ

次の例は、開始時に [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype) プロパティを "Default" に設定することでツールチップが有効にした[縦棒チャート](../types/column-chart.md)を示しています。このプロパティはサンプルで構成可能であり、次のいずれかのオプションに設定できます。

<code-view style="height: 500px" alt="Angular ツールチップ タイプの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/column-chart-with-tooltips"
                                                 github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>


<div class="divider--half"></div>

[`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype) プロパティは構成可能であり、次のいずれかのオプションに設定できます。

| プロパティの値     | 説明 |
| -------------------|---------------- |
| [`Default`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#default) ツールチップ | ツールチップは、ポインタがその上に位置されると、単一の項目のツールチップを表示します。 |
| [`Data`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#data) ツールチップ | チャートのすべてのシリーズのデータ ツールチップを表示します。 |
| [`Item`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#item) ツールチップ | ツールチップは、ポインタが位置されているカテゴリの各データ項目のツールチップを表示します。 |
| [`Category`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#category) ツールチップ | ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。 |

<div class="divider--half"></div>

## Angular チャート ツールチップ テンプレート

組み込みタイプのツールチップがいずれも要件に一致しない場合は、独自のツールチップを作成して、シリーズ タイトル、データ値、および軸値を表示およびスタイル設定できます。次のセクションでは、さまざまなタイプの Angular チャートでこれを行う方法を示します。

## カテゴリ チャートのカスタム ツールチップ

この例は、Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コントロールですべてのシリーズのカスタム ツールチップを作成する方法を示しています。Angular [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) コントロールのカスタム ツールチップにも同じロジックを適用できることに注意してください。

<code-view style="height: 500px" alt="Angular ツールチップ テンプレート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/tooltip-template"
                                                 github-src="charts/category-chart/tooltip-template">
</code-view>


<div class="divider--half"></div>

## データ チャートのカスタム ツールチップ

この例は、Angular データ チャート コントロールで各シリーズのカスタム ツールチップを作成する方法を示しています。

<code-view style="height: 500px" alt="Angular ツールチップ テンプレート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/tooltip-template"
                                                 github-src="charts/data-chart/tooltip-template">
</code-view>


<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

*   [チャート注釈](chart-annotations.md)
*   [チャート マーカー](chart-markers.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

*   [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コンポーネントと [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) コンポーネントは、次の API プロパティを共有します:

*   [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype)

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントでは、以下の API コンポーネントおよびプロパティを使用できます:

*   [`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html)
*   [`IgxItemToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemtooltiplayercomponent.html)
*   [`IgxCategoryToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorytooltiplayercomponent.html)
*   `ShowDefaultToolTip`
