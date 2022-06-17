---
title: Angular チャート データの凡例 | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックス Ignite UI for Angular チャートでデータ凡例を使用する
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics, Angular チャート、チャート凡例、凡例、凡例タイプ、インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular データ凡例

Ignite UI for Angular では、[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) は [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) のように機能するコンポーネントですが、シリーズの値の表示や、シリーズの行と値の列のフィルタリング、値のスタイルと書式を設定するための多くの構成プロパティを提供します。この凡例は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) のプロット領域内でマウスを移動すると更新され、ユーザーのマウス ポインターがプロット領域を離れたときに最後にホバーされたポイントを記憶する永続的な状態になります。このコンテンツは、3 種類の行と 4 種類の列のセットを使用して表示されます。

## Angular データ凡例の行

[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) の行には、ヘッダー行、シリーズ行、および集計行が含まれます。

ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、[`headerText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#headertext) プロパティを使用して変更できます。

シリーズ行は、実際には、チャートにプロットされた各シリーズに対応する行のセットにすることができます。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と単位が表示されます。

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の [`summaryTitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#summarytitletext) プロパティを使用して変更できます。また、[`summaryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#summarytype) プロパティを使用して、シリーズ値の合計、最小、最大、または平均を集計行に表示するかどうかをカスタマイズできます。

次の例は、集計が適用された [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend"
           alt="Angular カテゴリ チャート データ凡例の例"
           github-src="charts/category-chart/data-legend">
</code-view>

## Angular データ凡例の列

[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) の列には、タイトル、ラベル、値、および単位の列が含まれます。チャートの各シリーズには、凡例の [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#includedcolumns) または [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#excludedcolumns) コレクションに応じて、ラベル、値、および単位の複数の列を含めることができます。

タイトル列には、チャートにプロットされたさまざまな [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) の [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#title) プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。

ラベル列には、凡例の [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#includedcolumns) または [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#excludedcolumns) コレクション内のさまざまなプロパティパスの名前または省略形が表示されます。

値の列には、一連の値が省略形のテキストとして表示されます。この省略形は、[`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatabbreviation) プロパティを使用して書式設定でき、このプロパティを `Auto` または `Shared` に設定することですべての数値に同じ省略形を適用できます。または、ユーザーは `Independent`、`Kilo`、`Million` などの他の省略形を選択できます。省略値の精度は、最小桁数と最大桁数にそれぞれ [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatminfractions) と [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmaxfractions) を使用して制御されます。

単位列には、省略記号や単位テキストが表示されます。これらは、すべての列に `UnitText` を設定するか、チャートの各シリーズで次のプロパティを使用して、[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) で設定できます:

-   カテゴリ シリーズ (例: ColumnSeries)
    -   ValueMemberAsLegendUnit="K"
-   財務物価シリーズ:
    -   OpenMemberAsLegendUnit="K"
    -   LowMemberAsLegendUnit="K"
    -   HighMemberAsLegendUnit="K"
    -   CloseMemberAsLegendUnit="K"
-   範囲シリーズ:
    -   LowMemberAsLegendUnit="K"
    -   HighMemberAsLegendUnit="K"
-   ラジアル シリーズ:
    -   ValueMemberAsLegendUnit="km"
-   極座標シリーズ:
    -   RadiusMemberAsLegendUnit="km"
    -   AngleMemberAsLegendUnit="degrees"

上記の各プロパティには、前述のラベル列のテキストを判別するための対応する `MemberAsLegendLabel` プロパティもあります。

[`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#includedcolumns) および [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#excludedcolumns) コレクションに含まれる列は、通常、基になるデータ項目の値パスに対応しますが、ファイナンシャル シリーズには、正しくプロットするために必要な `High`、`Low`、`Open`、`Close` パス、および、いくつかの特別なパスを含めるオプションがあります 。凡例内に `TypicalPrice`、`Change`、および `Volume` オプションを表示することができます。

次の例は、Open、High、Low、Close、および Change の列が追加された [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend"
           alt="Angular ファイナンシャル チャート データ凡例の例"
           github-src="charts/financial-chart/data-legend">
</code-view>

## Angular データ凡例のスタイル設定

[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティ名は、Title、Label、Value、Units で始まり、テキストの色、フォント、およびマージンのスタイルを設定できます。たとえば、これらのそれぞれのテキストの色を設定する場合は、[`titleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#titletextcolor)、[`labelTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#labeltextcolor)、[`valueTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valuetextcolor)、および [`unitsTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#unitstextcolor) プロパティを設定します。

次の例は、上記のスタイル設定プロパティの使用法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-styling-props"
           alt="Angular データ凡例のスタイル設定"
           github-src="charts/financial-chart/data-legend-styling-props">
</code-view>

## Angular データ凡例値の書式設定

[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) は、[`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatabbreviation) プロパティを使用して、大きな数値の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。

[`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatminfractions) および [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmaxfractions) を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。

次の例は、[`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatminfractions) と [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmaxfractions) が設定された [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend-formatting-decimals"
           alt="Angular データ凡例の小数の書式設定"
           github-src="charts/category-chart/data-legend-formatting-decimals">
</code-view>

## Angular データ凡例の値モード

コントロールの [`valueFormatMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmode) プロパティを変更することにより、[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) 内の値のデフォルトの 10 進表示を通貨に変更することができます。[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) は、その [`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatculture) プロパティに対応するカルチャ タグを設定することにより、表示されている通貨記号のカルチャを変更する機能も公開します。

たとえば、次の例は、[`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatculture) が「en-GB」に設定されたチャートを示しています:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-formatting-currency"
           alt="Angular 通貨の書式設定"
           github-src="charts/financial-chart/data-legend-formatting-currency">
</code-view>

## Angular データ凡例のスタイル設定イベント

[`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) には、対応する行を描画するときに発生する 5 つのイベントがあります。それらのイベントを、その使用目的とあわせて以下に示します:

-   `StyleHeaderRow`: このイベントは、ヘッダー行を描画するときに 1 回発生します。
-   `StyleSeriesRow`: このイベントは、シリーズの行ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
-   `StyleSeriesColumn`: このイベントは、シリーズの列ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
-   `StyleSummaryRow`: このイベントは、集計行を描画するときに 1 回発生します。
-   `StyleSummaryColumn`: このイベントは、集計列を描画するときに 1 回発生します。

上記の各イベントは、引数として [`IgxDataLegendStylingRowEventArgs`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendstylingroweventargs.html) パラメーターを公開します。これにより、各項目のテキスト、テキストの色、および行の全体的な可視性をカスタマイズできます。イベント引数は、イベント固有のプロパティも公開します。たとえば、`StyleSeriesRow` イベントはシリーズごとに発生するため、イベント引数は、シリーズを表す行の、シリーズ インデックスとシリーズ タイトルを返します。
