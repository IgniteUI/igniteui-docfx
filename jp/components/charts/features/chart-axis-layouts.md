---
title: Angular 軸レイアウト | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 軸レイアウト
_keywords: Angular Axis, Layouts, Infragistics, Angular 軸, レイアウト, インフラジスティックス
mentionedTypes: [ "CategoryChart", "XamDataChart" ]
_language: ja
---

# Angular 軸レイアウト

すべての Ignite UI for Angular チャートには、位置、間隔、重複などの多くの軸レイアウト オプションを構成するオプションが含まれているほか、軸を共有して同じチャートに複数の軸を含めることができます。これらの機能は、以下の例で示されています。

> 注: 次の例は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) および [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールに適用されます。

## 軸間隔の例

Angular チャートの [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) プロパティは、プロットされた系列の縦棒または棒間のスペースの量を決定します。このプロパティは、0.0 から 1.0 までの数値を受け入れます。値は、シリーズ間の利用可能なピクセル数からのギャップの相対幅を表します。このプロパティを 0 に設定すると、シリーズ間にギャップがレンダリングされず、1 に設定すると最大ギャップがレンダリングされます。

以下の例は、ニューヨーク市のセントラル パークの摂氏の平均最高気温を示しています。これは、[`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) が最初に 1 に設定された[縦棒チャート](../types/column-chart.md)で表されているため、列の間にカテゴリ全体の幅があります。スライダーを使用すると、この例のギャップを構成して、さまざまな値の効果を確認できます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gap"
           alt="Angular 軸間隔の例"
           github-src="charts/category-chart/axis-gap">
</code-view>

<div class="divider--half"></div>

## 軸重複の例

Angular チャートの [`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap) プロパティを使用すると、プロットされた系列の描画された縦棒または棒の重複を設定できます。このプロパティは、-1.0 から 1.0 までの数値を受け入れます。値は、各シリーズ専用の使用可能なピクセル数からの相対的な重なりを表します。このプロパティを負の値 (-1.0 まで) に設定すると、カテゴリが互いから離れてしまい、それらの間にギャップが生じます。逆に、このプロパティを正の値 (最大 1.0) に設定すると、カテゴリが互いに重なります。値が 1 の場合、チャートはカテゴリを互いの上に表示します。

以下の例は、フランチャイズの世界の興行収入の合計とシリーズで最も収益の高い映画を比較した、世界で最も収益の高い映画フランチャイズの比較を示しています。これは、[`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap) が最初に 1 に設定された[縦棒チャート](../types/column-chart.md)で表されており、列は完全に重なり合います。スライダーを使用すると、この例の重複を構成して、さまざまな値の効果を確認できます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-overlap"
           alt="Angular 軸重複の例"
           github-src="charts/category-chart/axis-overlap">
</code-view>

<div class="divider--half"></div>

## 軸位置の例

すべての軸に対して、チャートのプロット領域に関連して軸の位置を指定できます。Angular チャートの `XAxisLabelLocation` プロパティを使用すると、x 軸の線とそのラベルをプロット領域の上または下に配置できます。同様に、[`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxislabellocation) プロパティを使用して、プロット領域の左側または右側に y 軸を配置できます。

以下の例は、2009 年以降に生成された再生可能電力量を[折れ線チャート](../types/line-chart.md)で示しています。チャートのプロット領域の内側または外側の左側または右側にラベルを配置したときに軸がどのように見えるかを視覚化できるように、[`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxislabellocation) を構成できるドロップダウンがあります。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-locations"
           alt="Angular 軸位置の例"
           github-src="charts/category-chart/axis-locations">
</code-view>

<!-- ## 軸方向の例

TODO add info/example of 4 charts with all possible combinations of XAxisIsInverted and YAxisIsInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## 軸の高度なシナリオ

より高度な軸レイアウト シナリオでは、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) を使用して軸を共有したり、同じタイプの複数の軸を追加したり、特定の値で軸を交差させたりすることができます。次の例は、これらの機能の使用方法を示しています。

## 軸共有の例

Angular データ チャートの同じプロット領域に複数の軸を共有して追加できます。[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) を共有し、複数の [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) を追加して、さまざまな値 (株価や株取引量など) を持つ多くのデータ ソースをプロットするのが一般的なシナリオです。

以下の例は、[株価チャート](../types/stock-chart.md)と[縦棒チャート](../types/column-chart.md)をプロットした株価および株取引量チャートを示しています。この場合、左側の Y 軸は[縦棒チャート](../types/column-chart.md)で使用され、右側の Y 軸は[株価チャート](../types/stock-chart.md)、X 軸は 2 つの間で共有されます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing"
           alt="Angular 軸共有の例"
           github-src="charts/data-chart/axis-sharing">
</code-view>

<div class="divider--half"></div>

## 軸交差の例

Angular データ チャートでは、プロット領域内に軸を配置し、特定の値で交差させることもできます。たとえば、x 軸と y 軸の両方で `CrossingAxis` プロパティと `CrossingValue` プロパティを設定して、原点が 0,0 で 交差するように軸線と軸ラベルを描画することにより、三角関数チャートを作成できます。

以下の例は、[散布スプライン チャート](../types/scatter-chart.md)で表される Sin と Cos 波を示します。X 軸と Y 軸は (0、0) 原点で交差します。この場合、提供されるスライダーを使用して、X 軸と Y 軸が交差する位置を構成できます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-crossing"
           alt="Angular 軸交差の例"
           github-src="charts/data-chart/axis-crossing">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

-   [軸グリッド線](chart-axis-gridlines.md)
-   [軸オプション](chart-axis-options.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   `CrossingAxis`
-   `CrossingValue`
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)
-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
-   [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap)
-   `XAxisLabelLocation`
-   [`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap)
-   [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxislabellocation)
