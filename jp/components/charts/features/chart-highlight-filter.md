---
title: Angular チャート強調表示フィルター | データ可視化 | インフラジスティックス
_description: Infragistics の Angular チャート強調表示フィルター
_keywords: Angular Charts, Highlighting, Filtering, Infragistics, Angular チャート, 強調表示, フィルターリング, インフラジスティックス
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular Chart 強調表示フィルター

Ignite UI for Angular Chart コンポーネントは、プロットされたデータのサブセットを表示できるようにすることで、これらのチャートにプロットされた系列の視覚化を強化できるデータ強調表示オーバーレイをサポートしています。これを有効にすると、列シリーズおよびエリア シリーズ タイプの場合は不透明度を下げて全体セットが表示され、線シリーズ タイプの場合は破線が表示されることで、データのサブセットが強調表示されます。これは、データセットの目標値と実際の値などを視覚化するのに役立ちます。以下の例で、この機能を説明します。

<code-view style="height: 500px" alt="Angular 強調表示フィルターの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/chart-highlight-filter-multiple-series"
                                                 github-src="charts/data-chart/chart-highlight-filter-multiple-series">
</code-view>


データ強調表示機能は [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) および [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) でサポートされていますが、これらのコントロールの動作の性質上、それぞれ異なる方法で構成されることに注意してください。ただし、この機能で変わらない点は、強調表示を表示したい場合は `HighlightedValuesDisplayMode` プロパティを `Overlay` に設定する必要があることです。以下では、強調表示フィルター機能のさまざまな設定について説明します。

## DataChart での強調表示フィルターの使用

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) では、強調表示フィルター API の多くは主に、強調表示するデータのサブセットを表すコレクションに `HighlightedItemsSource` プロパティを設定することによって、シリーズ自体で発生します。`HighlightedItemsSource` 内の項目の数は、強調表示するシリーズの `ItemsSource` にバインドされているデータの数と一致する必要があります。カテゴリ シリーズの場合は、デフォルトで強調表示パスとして定義した `ValueMemberPath` が使用されます。このページの上部にあるサンプルでは、​​[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) の `HighlightedItemsSource` を使用してオーバーレイを表示しています。

シリーズの `HighlightedItemsSource` と `ItemsSource` の間でスキーマが一致しない場合は、シリーズの `HighlightedValueMemberPath` プロパティを使用してこれを構成できます。さらに、シリーズ自体の `ItemsSource` を強調表示ソースとして使用し、サブセットを表すデータ項目にパスを設定したい場合は、これを行うことができます。これは、`HighlightedItemsSource` を提供せずに、`HighlightedValueMemberPath` プロパティをそのパスに設定するだけで行われます。

列およびエリア シリーズ の場合の不透明度の低減は、シリーズの `HighlightedValuesFadeOpacity` プロパティを設定することで構成できます。オーバーレイをまったく表示したくない場合は、`HighlightedValuesDisplayMode` プロパティを `Hidden` に設定することもできます。

強調表示フィルターによって表示されるシリーズの部分は、チャートの凡例レイヤーとツールチップ レイヤーに個別に表示されます。`HighlightedTitleSuffix` を設定することで、ツールチップと凡例に表示されるタイトルを構成できます。これにより、指定した値がシリーズの [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#chartTitle) の末尾に追加されます。

次の例は、`HighlightedValueMemberPath` を使用した [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロール内のデータ強調表示オーバーレイ機能の使用法を示しています。

<code-view style="height: 500px" alt="Angular 強調表示フィルターの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/chart-highlight-filter"
                                                 github-src="charts/data-chart/chart-highlight-filter">
</code-view>


## CategoryChart での強調表示フィルターの使用

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) 強調表示フィルターは、`InitialHighlightFilter` プロパティを設定することによってチャート上で発生します。[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) は、デフォルトで、基になるデータ項目のすべてのプロパティを考慮します。そのため、データのサブセットをフィルタリングできるようにデータをグループ化および集計できるように、チャート上でも [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups) を定義する必要があります。[`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups) を基になるデータ項目の値パスに設定して、重複した値を持つパスでグループ化することができます。

<!-- Unsure of this part. Need to review -->

<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) と同様に、`HighlightedValuesDisplayMode` プロパティも [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) で公開されます。オーバーレイを表示したくない場合は、このプロパティを `Hidden` に設定できます。

以下の例は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コントロール内でのデータ強調表示オーバーレイ機能の使用法を示しています。

<code-view style="height: 500px" alt="Angular 強調表示フィルターの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/chart-highlight-filter"
                                                 github-src="charts/category-chart/chart-highlight-filter">
</code-view>


<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください。

*   [チャートの強調表示](chart-highlighting.md)
*   [チャートのデータ ツールチップ](chart-data-tooltip.md)
*   [チャートのデータ集計](chart-data-aggregations.md)

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

| [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) プロパティ                    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) プロパティ |
| ----------------------------------------------|---------------------------|
| `CategoryChart.HighlightedItemsSource`        | `Series.HighlightedItemsSource`  |
| `CategoryChart.HighlightedTitleSuffix`        | `Series.HighlightedTitleSuffix`  |
| `CategoryChart.HighlightedValueMemberPath`    | `Series.HighlightedValueMemberPath`     |
| `CategoryChart.HighlightedValuesDisplayMode`  | `Series.HighlightedValuesDisplayMode`   |
| `CategoryChart.HighlightedValuesFadeOpacity`  | `Series.HighlightedValuesFadeOpacity`   |
| `CategoryChart.HighlightedValuesDisplayMode`  | `Series.HighlightedValuesDisplayMode`   |
| `CategoryChart.InitialHighlightFilter`        |  |
| [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups)                 |  |
