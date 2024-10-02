---
title: Angular チャート データ ツールチップ | データ視覚化ツール | インフラジスティックス
_description: データ ツールチップ レイヤーで Infragistics Ignite UI for Angular チャートをお試しください!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics, Angular チャート, チャート凡例, 凡例, 凡例タイプ, インフラジスティックス
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート データ ツールチップ

Ignite UI for Angular では、**DataToolTip** は、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。さらに、シリーズの行と値の列をフィルタリングし、値をスタイル設定し、書式を設定するための [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) の多くの構成プロパティを提供します。このツールチップ タイプは、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントのプロット領域内でマウスを動かすと更新されます。

## Angular データ ツールチップのプロパティ

[`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) のすべてのプロパティには **DataToolTip** のプレフィックスが付けられ、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) および [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) コンポーネントの API で公開されます。ただし、ラジアル チャート、極座標チャート、散布図で使用する場合は、[`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) のインスタンスを作成し、それを [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントのシリーズ コレクションに追加する必要があります。

## Angular データ ツールチップの要素

**DataToolTip** は、3 種類の行と 4 種類の列のセットを使用してコンテンツを表示します。

### Angular データ ツールチップの行

**DataToolTip** の行には、ヘッダー行、シリーズ行、および集計行が含まれます。

ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、[`dataToolTipHeaderText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipHeaderText) プロパティを使用して変更できます。

シリーズ行は、実際には、チャートにプロットされた各シリーズに対応する行のセットにすることができます。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と単位が表示されます。

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の [`dataToolTipSummaryTitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryTitleText) プロパティを使用して変更できます。また、[`dataToolTipSummaryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryType) プロパティを使用して、シリーズ値の合計、最小、最大、または平均を集計行に表示するかどうかをカスタマイズできます。

次の例は、集計が適用されたデータ ツールチップを示しています。

<code-view style="height: 450px" alt="Angular カテゴリ チャート データ ツールチップの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-tooltip"
                                                 github-src="charts/category-chart/data-tooltip">
</code-view>


### Angular データ ツールチップの列

[`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html) の列には、タイトル、ラベル、値、および単位の列が含まれます。チャートの各シリーズには、凡例の [`dataToolTipIncludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns) または [`dataToolTipExcludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns) コレクションに応じて、ラベル、値、および単位の複数の列を含めることができます。

タイトル列には、チャートにプロットされた各 [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) の [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#title) プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。

ラベル列には、ツールチップの [`dataToolTipIncludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns) または [`dataToolTipExcludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns) コレクション内のさまざまなプロパティパスの名前または省略形が表示されます。

値の列には、一連の値が省略形のテキストとして表示されます。この省略形は、[`dataToolTipValueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatAbbreviation) プロパティを使用して書式設定でき、このプロパティを `Auto` または `Shared` に設定することですべての数値に同じ省略形を適用できます。または、ユーザーは `Independent`、`Kilo`、`Million` などの他の省略形を選択できます。省略値の精度は、最小桁数と最大桁数にそれぞれ [`dataToolTipValueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMinFractions) と [`dataToolTipValueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions) を使用して制御されます。

単位の列には、省略記号や単位のテキストが表示されます。これらは、すべての列に [`dataToolTipUnitsText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsText) を設定するか、チャートの各系列で次のプロパティを使用して、**DataToolTip** で設定できます:

*   カテゴリ シリーズ (例: ColumnSeries):
    *   ValueMemberAsLegendUnit="K"
*   財務物価シリーズ:
    *   OpenMemberAsLegendUnit="K"
    *   LowMemberAsLegendUnit="K"
    *   HighMemberAsLegendUnit="K"
    *   CloseMemberAsLegendUnit="K"
*   範囲シリーズ:
    *   LowMemberAsLegendUnit="K"
    *   HighMemberAsLegendUnit="K"
*   ラジアル シリーズ:
    *   ValueMemberAsLegendUnit="km"
*   極座標シリーズ:
    *   RadiusMemberAsLegendUnit="km"
    *   AngleMemberAsLegendUnit="degrees"

上記のプロパティには、前述のラベル列のテキストを決定するための **MemberAsLegendLabel** で終わる対応するプロパティがあります。

[`dataToolTipIncludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns) および [`dataToolTipExcludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns) コレクションに含まれる列は、通常、基になるデータ項目の値パスに対応しますが、ファイナンシャル シリーズには、正しくプロットするために必要な `High`、`Low`、`Open`、`Close` パス、および、いくつかの特別なパスを含めるオプションがあります 。ツールチップ内に `TypicalPrice`、`Change`、および `Volume` オプションを表示することができます。

次の例は、Open、High、Low、Close、および Change の列が追加されたデータ ツールチップを示しています。

<code-view style="height: 450px" alt="Angular ファイナンシャル チャート データ ツールチップの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/data-tooltip"
                                                 github-src="charts/financial-chart/data-tooltip">
</code-view>


## Angular データ チャートのデータ ツールチップのグループ化

[`dataLegendGroup`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dataLegendGroup) は、すべてのタイプのシリーズで、データ凡例内のシリーズ グループを分類する文字列に設定できます。各グループには、別のシリーズ グループが表示される前に、独自の集計行が表示されます。デフォルトでは、DataLegend はグループ名を非表示にしますが、[`groupRowVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupRowVisible) プロパティを true に設定するとグループ名を表示できます。データ ツールチップ レイヤーで [`groupingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html#groupingMode) を 「Grouped」 に設定し、[`labelDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelDisplayMode) を 「Visible」 に設定する必要があります。

<code-view style="height: 450px" alt="Angular データ ツールチップのグループ化"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-tooltip-grouping"
                                                 github-src="charts/data-chart/data-tooltip-grouping">
</code-view>


## Angular カテゴリ チャート & ファイナンシャル チャートのデータ ツールチップのグループ化と配置

[`dataToolTipGroupingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupingMode) プロパティを `Grouped` または `Individual` に設定して、複数のシリーズのコンテンツを 1 つのツールチップにグループ化するか、各シリーズのコンテンツを複数のツールチップに分割することができます。`Grouped` モードでは、[`dataToolTipGroupedPositionModeX`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeX) プロパティと [`dataToolTipGroupedPositionModeY`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeY) プロパティを設定することにより、ツールチップが表示される場所をカスタマイズできます。これにより、ツールチップの水平方向と垂直方向の配置を、マウス位置に最も近いシリーズ ポイントに追従させるか、プロット領域の端に固定するかをカスタマイズできます。

次の例は、チャートの右上に配置されたデータ ツールチップを示しています。

<code-view style="height: 450px" alt="Angular カテゴリ チャート データツールチップの配置の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-tooltip-positioning"
                                                 github-src="charts/category-chart/data-tooltip-positioning">
</code-view>


## Angular データ ツールチップ値の書式設定

**DataToolTip** は、その [`dataToolTipValueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatAbbreviation) プロパティを使用して、大きな数の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。[`dataToolTipValueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMinFractions) および [`dataToolTipValueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions) を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。

次の例は、最小分数と最大分数が設定された **DataToolTip** を示しています。

<code-view style="height: 450px" alt="Angular カテゴリ チャート データ ツールチップの小数の書式設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-tooltip-formatting-decimals"
                                                 github-src="charts/category-chart/data-tooltip-formatting-decimals">
</code-view>


## Angular データ ツールチップの値モード

レイヤーの [`dataToolTipValueFormatMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMode) プロパティを変更することにより、**DataToolTip** 内の値のデフォルトの 10 進表示を通貨表示に変更できます。**DataToolTip** は、[`dataToolTipValueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatCulture) プロパティを使用し、対応するカルチャ タグに設定することにより、表示されている通貨記号のカルチャを変更する機能も公開します。たとえば、次のサンプルは、[`dataToolTipValueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatCulture) が 「en-GB」 に設定されたチャートを示しています。

<code-view style="height: 450px" alt="Angular ファイナンシャル チャート データ ツールチップの通貨の書式設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/data-tooltip-formatting-currency"
                                                 github-src="charts/financial-chart/data-tooltip-formatting-currency">
</code-view>


## Angular データ ツールチップのスタイル設定

**DataToolTip** は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティ名は、Title、Label、Value、Units で始まり、テキストの色、フォント、およびマージンのスタイルを設定できます。たとえば、これらのそれぞれのテキストの色を設定する場合は、[`dataToolTipTitleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipTitleTextColor)、[`dataToolTipLabelTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipLabelTextColor)、[`dataToolTipValueTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueTextColor)、および [`dataToolTipUnitsTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsTextColor) プロパティを設定します。

次の例は、上記のスタイル設定プロパティの使用法を示しています:

<code-view style="height: 450px" alt="Angular ファイナンシャル チャート データ ツールチップのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/data-tooltip-styling-props"
                                                 github-src="charts/financial-chart/data-tooltip-styling-props">
</code-view>


ツールチップのグループ化部分を含むいくつかのプロパティが公開されています。

*   `GroupTextMargin`
*   [`groupTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupTextColor)
*   `GroupTextFontSize`
*   `GroupTextFontFamily`
*   `GroupTextFontStyle`
*   `GroupTextFontStretch`
*   `GroupTextFontWeight`
*   `HeaderTextMargin`
*   [`headerTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerTextColor)
*   `HeaderTextFontSize`
*   `HeaderTextFontFamily`
*   `HeaderTextFontStyle`
*   `HeaderTextFontStretch`
*   `HeaderTextFontWeight`

## API リファレンス

*   [`dataToolTipExcludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipExcludedColumns)
*   [`dataToolTipGroupedPositionModeX`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeX)
*   [`dataToolTipGroupedPositionModeY`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupedPositionModeY)
*   [`dataToolTipGroupingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipGroupingMode)
*   [`dataToolTipHeaderText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipHeaderText)
*   [`dataToolTipIncludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipIncludedColumns)
*   [`dataToolTipLabelTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipLabelTextColor)
*   [`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html)
*   [`dataToolTipSummaryTitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryTitleText)
*   [`dataToolTipSummaryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipSummaryType)
*   [`dataToolTipTitleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipTitleTextColor)
*   [`dataToolTipUnitsTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsTextColor)
*   [`dataToolTipUnitsText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipUnitsText)
*   [`dataToolTipValueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatAbbreviation)
*   [`dataToolTipValueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatCulture)
*   [`dataToolTipValueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions)
*   [`dataToolTipValueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMaxFractions)
*   [`dataToolTipValueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMinFractions)
*   [`dataToolTipValueFormatMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueFormatMode)
*   [`dataToolTipValueTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#dataToolTipValueTextColor)
*   `MemberAsLegendLabel`
