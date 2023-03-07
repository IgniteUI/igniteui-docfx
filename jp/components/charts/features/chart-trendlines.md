---
title: Angular チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート トレンドライン
_keywords: Angular Charts, Trendlines, Infragistics, Angular チャート, トレンドライン, インフラジスティックス
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート トレンドライン

Ignite UI for Angular チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) (積層型シリーズ、シェイプ シリーズ、範囲シリーズを除く) でサポートされています。

トレンドラインはデフォルトでオフになっていますが、[`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlinetype) プロパティを設定することで有効にできます。また、ブラシ、期間、太さなど、トレンドラインの複数の外観プロパティを変更できます。

# Angular チャート トレンドラインの例

次のサンプルは、[`QuinticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quinticfit) トレンドラインが最初に適用された、2013 年から 2017 年までの Microsoft の株価トレンドを示す [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) を示しています。適用されるトレンドラインのタイプを変更できるドロップダウンがあり、可能なすべてのトレンドライン タイプがそのドロップダウン内に一覧表示されます。

<code-view style="height: 500px" alt="Angular トレンドラインの例"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
                                        github-src="charts/financial-chart/trendlines">
</code-view>


<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

*   [チャート注釈](chart-annotations.md)
*   [チャート強調表示](chart-highlighting.md)

## API リファレンス

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コンポーネントと [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コンポーネントは、次の API プロパティを共有します:

*   [`trendLineBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlinebrushes)
*   [`trendLinePeriod`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlineperiod)
*   [`trendLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlinethickness)
*   [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlinetype)

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コンポーネントでは、シリーズのほとんどのタイプに次の API プロパティがあります:

*   `TrendLineBrush`
*   [`trendLinePeriod`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlineperiod)
*   [`trendLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlinethickness)
*   [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#trendlinetype)
