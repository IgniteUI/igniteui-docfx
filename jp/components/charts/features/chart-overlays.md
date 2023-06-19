---
title: Angular チャート オーバーレイ | データ可視化ツール | 値オーバーレイ | インフラジスティックス
_description: Ignite UI for Angular チャート コントロールの値オーバーレイ機能を使用して、単一の数値に水平線または垂直線を配置します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 値オーバーレイ, インフラジスティックス
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャートのオーバーレイ

Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) を使用すると、[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

## Angular 値オーバーレイの例

次の例は、いくつかの水平値オーバーレイがプロットされた[縦棒チャート](../types/column-chart.md)を示しています。

<code-view style="height: 600px" alt="Angular 値オーバーレイの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/series-value-overlay"
                                                 github-src="charts/data-chart/series-value-overlay">
</code-view>


<div class="divider--half"></div>

## Angular 値オーバーレイのプロパティ

データバインディングに `DataSource` を使用する他のシリーズ タイプとは異なり、値オーバーレイは `ValueMemberPath` プロパティを使用して単一の数値をバインドします。さらに、値オーバーレイでは、使用する単一の [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#axis) を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります。

数値の X 軸または Y 軸を使用する場合、`ValueMemberPath` プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。カテゴリ X または Y 軸を使用する場合、`ValueMemberPath` は、値オーバーレイを表示するカテゴリのインデックスを反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) 外観プロパティは、[`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) から継承されているため、例えば [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush) と [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#thickness) を使用でき、他のタイプのシリーズと同じように機能します。

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) に軸注釈を表示して、所有する軸にオーバーレイの値を表示することもできます。これを示すために、[`isAxisAnnotationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#isaxisannotationenabled) プロパティを true に設定できます。

## Angular 値線

Angular チャート コンポーネントは、値の線を使用して、最小値、最大値、平均値などのデータのさまざまな焦点を示す機能も公開します。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) および [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) コンポーネントに `ValueLayer` を適用するには、チャート上で `ValueLines` プロパティを設定します。このプロパティは、`ValueLayerValueMode` 列挙体のコレクションを受け取ります。複数の `ValueLayerValueMode` 列挙をチャートの `ValueLines` コレクションに追加することで、同じチャート内で複数の値レイヤーを組み合わせたりできます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) では、これは、チャートの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) コレクションに `ValueLayer` を追加し、次に `ValueMode` プロパティを `ValueLayerValueMode` 列挙の 1 つに設定することによって行われます。これらの各列挙とその意味を以下に示します。

*   `Auto`: `ValueLayerValueMode` 列挙体のデフォルト値モード。
*   `Average`: 複数の値の線を適用して、チャートにプロットされた各系列の平均値を呼び出します。
*   `GlobalAverage`: 単一の値線を適用して、チャート内のすべての系列値の平均を呼び出します。
*   `GlobalMaximum`: 単一の値線を適用して、チャート内のすべての系列値の絶対最大値を呼び出します。
*   `GlobalMinimum`: 単一の値線を適用して、チャート内のすべての系列値の絶対最小値を呼び出します。
*   `Maximum`: チャートにプロットされた各系列の最大値を示すために、複数の値線を適用する可能性があります。
*   `Minimum`: チャートにプロットされた各系列の最小値を示すために、複数の値線を適用する可能性があります。

`ValueLayer` 要素を使用するときに特定のシリーズが考慮されないようにする場合は、レイヤーに `TargetSeries` プロパティを設定できます。これにより、レイヤーは定義したシリーズを強制的にターゲットにするようになります。単一の [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) 内に必要な数の `ValueLayer` 要素を含めることができます。

次のサンプルは、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) 内のさまざまな `ValueLines` の使用法を示しています。

<code-view style="height: 600px" alt="Angular 値線の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/value-lines"
                                                 github-src="charts/category-chart/value-lines">
</code-view>


<div class="divider--half"></div>

## Angular ファイナンシャル オーバーレイ

Angular [株価チャート](../types/stock-chart.md)に組み込みのファイナンシャル オーバーレイとインジケーターをプロットすることもできます。

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

*   [チャート注釈](chart-annotations.md)
*   [縦棒チ株価チャートャート](../types/area-chart.md)
*   [折れ線チャート](../types/line-chart.md)
*   [株価チャート](../types/stock-chart.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   `ItemsSource`
*   [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html)
*   [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#axis)
*   [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush)
*   `IsAxisAnnotationsEnabled`
*   [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html)
*   [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#thickness)
*   `ValueLayer`
*   `ValueLayerValueMode`
*   `ValueLines`
