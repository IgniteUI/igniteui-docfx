---
title: Angular チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート トレンドライン
_keywords: Angular Charts, Trendlines, Infragistics, Angular チャート, トレンドライン, インフラジスティックス
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート トレンドライン

Ignite UI for Angular チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) (積層型シリーズ、シェイプ シリーズ、範囲シリーズを除く) でサポートされています。

トレンドラインはデフォルトでオフになっていますが、[`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) プロパティを設定することで有効にできます。また、ブラシ、期間、太さなど、トレンドラインの複数の外観プロパティを変更できます。

トレンドラインを有効にすると、ダッシュ配列を適用することもできます。これを行うには、`TrendLineDashArray` プロパティを数値の配列に設定します。数値配列は、トレンドラインの破線の長さを表します。

# Angular チャート トレンドラインの例

次のサンプルは、**QuinticFit** トレンドラインが最初に適用された、2013 年から 2017 年までの Microsoft の株価トレンドを示す [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) を示しています。適用されるトレンドラインのタイプを変更できるドロップダウンがあり、可能なすべてのトレンドライン タイプがそのドロップダウン内に一覧表示されます。

<code-view style="height: 500px" alt="Angular トレンドラインの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/trendlines"
                                                 github-src="charts/financial-chart/trendlines">
</code-view>


<div class="divider--half"></div>

# Angular チャート トレンドラインのダッシュ配列の例

次のサンプルは、`TrendLineDashArray` プロパティを介して適用された **QuarticFit** 破線トレンドラインを持つ [`IgxFinancialPriceSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html) を示す [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) を示しています。

<code-view style="height: 500px" alt="Angular トレンドラインの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/dash-array-trendline"
                                                 github-src="charts/data-chart/dash-array-trendline">
</code-view>


<div class="divider--half"></div>

# Angular チャートト レンドライン レイヤー

[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) は、ターゲット シリーズに対して単一のトレンドライン タイプを表示するように設計されたシリーズ タイプです。これと既存のシリーズ タイプの既存のトレンド ライン機能との違いは、[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) はシリーズ タイプであるため、チャートの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) コレクションに複数のトレンド ラインを追加して、同じシリーズに複数のトレンド ラインを添付できることです。また、これまでできなかったトレンドラインを凡例に表示する ことも可能です。

### トレンドライン レイヤーの使用

[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) が正しく動作するには、[`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html#targetSeries) と [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html#trendLineType) を指定する必要があります。利用可能なさまざまなトレンドラインのタイプは、シリーズで利用可能なトレンドラインと同じです。

凡例に [`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) を表示する場合は、`UseLegend` プロパティを **true** に設定します。

### トレンドライン レイヤーのスタイル設定

デフォルトでは、[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) は [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html#targetSeries) と同じ色の破線で描画されます。これは、[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) のさまざまなスタイル設定プロパティを使用して構成できます。

描画されるトレンドラインの色を変更するには、`Brush` プロパティを設定します。あるいは、`UseIndex` プロパティを **true** に設定することもできます。これにより、[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) がチャートの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) コレクションに配置されているインデックスに基づいて、チャートの [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#brushes) パレットからブラシが取得されます。

[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) の表示方法は、`AppearanceMode` プロパティと `ShiftAmount` プロパティを使用して変更することもできます。`ShiftAmount` は、-1.0 から 1.0 の範囲の値を受け取り、「Shift」 で終わるオプションに適用する 「シフト」 の量を決定します。

`AppearanceMode` プロパティのオプションは次のとおりです。

- `Auto`: デフォルトでは DashPattern 列挙体になります。
- `BrightnessShift`: トレンドラインは [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html#targetSeries) ブラシを取得し、指定された `ShiftAmount` に基づいて明るさを変更します。
- `DashPattern`: トレンドラインは破線として表示されます。ダッシュの頻度は、[`IgxTrendLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html) の `DashArray` プロパティを使用して変更できます。
- `OpacityShift`: トレンドラインは [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html#targetSeries) ブラシを取得し、指定された `ShiftAmount` に基づいて不透明度を変更します。
- `SaturationShift`: トレンドラインは [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtrendlinelayercomponent.html#targetSeries) ブラシを取得し、指定された `ShiftAmount` に基づいてその彩度を変更します。

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャートのハイライト表示](chart-highlighting.md)

## API リファレンス

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コンポーネントと [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) コンポーネントは、次の API プロパティを共有します:

- [`trendLineBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineBrushes)
- [`trendLinePeriod`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLinePeriod)
- [`trendLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineThickness)
- [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType)

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントでは、シリーズのほとんどのタイプに次の API プロパティがあります:

- [`trendLineBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#trendLineBrush)
- [`trendLineDashArray`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#trendLineDashArray)
- [`trendLinePeriod`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#trendLinePeriod)
- [`trendLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#trendLineThickness)
- [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#trendLineType)
