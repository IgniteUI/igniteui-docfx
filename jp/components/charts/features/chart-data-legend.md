---
title: Angular チャート データの凡例 | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックス Ignite UI for Angular チャートでデータ凡例を使用する
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics, Angular チャート、チャート凡例、凡例、凡例タイプ、インフラジスティックス
mentionedTypes: ["XamCategoryChart", "DataLegend", "Series"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular データ凡例

Ignite UI for Angular では、`DataLegend` は [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) のように機能するコンポーネントですが、シリーズの値の表示や、シリーズの行と値の列のフィルタリング、値のスタイルと書式を設定するための多くの構成プロパティを提供します。この凡例は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) のプロット領域内でマウスを移動すると更新され、ユーザーのマウス ポインターがプロット領域を離れたときに最後にホバーされたポイントを記憶する永続的な状態になります。このコンテンツは、3 種類の行と 4 種類の列のセットを使用して表示されます。

## Angular データ凡例の行

`DataLegend` の行には、ヘッダー行、シリーズ行、および集計行が含まれます。

ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、`HeaderText` プロパティを使用して変更できます。

シリーズ行は、実際には、チャートにプロットされた各シリーズに対応する行のセットにすることができます。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と単位が表示されます。

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の `SummaryText` プロパティを使用して変更できます。また、`SummaryType` プロパティを使用して、シリーズ値の合計、最小、最大、または平均を集計行に表示するかどうかをカスタマイズできます。

## Angular データ凡例の列

`DataLegend` の左から右への列には、タイトル列、値列、および単位列が含まれます。

タイトル列には、チャートにプロットされたさまざまな [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) の [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#title) プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。

値の列には、一連の値が省略形のテキストとして表示されます。このテキストは、`ValueFormatAbbreviation` プロパティを使用してフォーマットでき、このプロパティを `Auto` または `Shared` に設定することで、すべての数値に同じ省略形を適用できます。または、ユーザーは `Independent`、`Kilo`、`Million` などの他の省略形を選択できます。省略値の処理は、最小桁数と最大桁数にそれぞれ `ValueFormatMinFractions` と `ValueFormatMaxFractions` を使用して制御されます。

単位列には、省略記号や単位テキストが表示されます。これらは、すべての列に `UnitText` を設定するか、チャートの各シリーズで次のプロパティを使用して、`DataLegend` で設定できます:

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

    -   ValueMemberAsLegendUnit="K"
    -   AngleMemberAsLegendUnit="K"

-   極座標シリーズ:
    -   RadiusMemberAsLegendUnit="K"
    -   AngleMemberAsLegendUnit="K"

## Angular データ凡例のスタイル設定

`DataLegend` は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティ名は、Title、Label、Value、Units で始まり、テキストの色、フォント、およびマージンのスタイルを設定できます。たとえば、これらのそれぞれのテキストの色を設定する場合は、`TitleTextColor`、`LabelTextColor`、`ValueTextColor`、および `UnitsTextColor` プロパティを設定します。

## Angular データ凡例値の書式設定

`DataLegend` は、`ValueFormatAbbreviation` プロパティを使用して、大きな数値の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。

`ValueFormatMinFractions` および `ValueFormatMaxFractions` を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。

## Angular データ凡例の値モード

コントロールの `ValueFormatMode` プロパティを変更することにより、`DataLegend` 内の値のデフォルトの 10 進表示を通貨に変更することができます。`DataLegend` は、その `ValueFormatCulture` プロパティに対応するカルチャ タグを設定することにより、表示されている通貨記号のカルチャを変更する機能も公開します。たとえば、次のサンプルは、`ValueFormatCulture` が 「en-GB」 に設定されたチャートを示しています:

## Angular データ凡例のスタイル設定イベント

`DataLegend` には、対応する行を描画するときに発生する 3 つのイベントがあります。それらのイベントを、その使用目的とあわせて以下に示します:

-   `StyleHeaderRow`: このイベントは、ヘッダー行を描画するときに 1 回発生します。
-   `StyleSeriesRow`: このイベントは、シリーズの行ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
-   `StyleSummaryRow`: このイベントは、集計行を描画するときに 1 回発生します。

上記の各イベントは、引数として [`IgxDataLegendStylingRowEventArgs`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendstylingroweventargs.html) パラメーターを公開します。これにより、各項目のテキスト、テキストの色、および行の全体的な可視性をカスタマイズできます。イベント引数は、イベント固有のプロパティも公開します。たとえば、`StyleSeriesRow` イベントはシリーズごとに発生するため、イベント引数は、シリーズを表す行の、シリーズ インデックスとシリーズ タイトルを返します。
