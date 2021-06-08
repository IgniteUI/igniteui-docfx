---
title: Angular チャート オーバーレイ | データ可視化ツール | 値オーバーレイ | インフラジスティックス
_description: Ignite UI for Angular チャート コントロールの値オーバーレイ機能を使用して、単一の数値に水平線または垂直線を配置します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 値オーバーレイ, インフラジスティックス
mentionedTypes: ["XamDataChart", "ValueOverlay"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャートのオーバーレイ

Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) を使用すると、[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

## Angular 値オーバーレイの例

次の例は、いくつかの水平値オーバーレイがプロットされた[縦棒チャート](../types/column-chart.md)を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="Angular 値オーバーレイの例"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

## Angular 値オーバーレイのプロパティ

データバインディングに `DataSource` を使用する他のシリーズ タイプとは異なり、値オーバーレイは `ValueMemberPath` プロパティを使用して単一の数値をバインドします。さらに、値オーバーレイでは、使用する単一の [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axis) を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります。

数値の X 軸または Y 軸を使用する場合、`ValueMemberPath` プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。カテゴリ X または Y 軸を使用する場合、`ValueMemberPath` は、値オーバーレイを表示するカテゴリのインデックスを反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) 外観プロパティは、[`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) から継承されているため、例えば [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) と [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness) を使用でき、他のタイプのシリーズと同じように機能します。

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) に軸注釈を表示して、所有する軸にオーバーレイの値を表示することもできます。これを示すために、[`isAxisAnnotationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#isaxisannotationenabled) プロパティを true に設定できます。

## Angular ファイナンシャル オーバーレイ

Angular [株価チャート](../types/stock-chart.md)に組み込みのファイナンシャル オーバーレイとインジケーターをプロットすることもできます。

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

-   [チャート注釈](chart-annotations.md)
-   [縦棒チ株価チャートャート](../types/area-chart.md)
-   [折れ線チャート](../types/line-chart.md)
-   [株価チャート](../types/stock-chart.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   `DataSource`
-   [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html)
-   [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axis)
-   [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush)
-   `IsAxisAnnotationsEnabled`
-   [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html)
-   [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness)
