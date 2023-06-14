---
title: Angular 軸オプション | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 軸オプション
_keywords: Angular Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics, Angular 軸, オプション, タイトル, ラベル, 間隔, 重複, 範囲, スケール, モード, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular 軸オプション

すべての Ignite UI for Angular チャートで、軸はタイトル、ラベル、範囲などの視覚的構成のプロパティを提供します。これらの機能は、以下の例で示されています。

## 軸タイトルの例

Angular チャートの軸タイトル機能を使用すると、チャートにコンテキスト情報を追加できます。さまざまなフォントスタイル、色、マージン、および配置を適用するなど、さまざまな方法で軸タイトルの外観をカスタマイズできます。

<code-view style="height: 450px" alt="Angular 軸タイトルの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-titles"
                                                 github-src="charts/category-chart/axis-titles">
</code-view>


<div class="divider--half"></div>

## 軸ラベルの例

Angular チャートは、チャートで表示されるラベルの構成、書式設定、およびラベル フォントのスタイル設定を制御することが可能です。軸ラベルの回転角度、マージン、水平および垂直方向の配置、色、余白、および表示設定を変更できます。次の例は、これらの軸の機能を使用する方法を示しています。

<code-view style="height: 450px" alt="Angular 軸ラベルの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-labels"
                                                 github-src="charts/category-chart/axis-labels">
</code-view>


<div class="divider--half"></div>

## 軸ラベルの管理

チャートの軸には、所有する軸のラベルに使用可能なスペースの量に関する拡張計算を実行する機能があります。この拡張された計算により、軸は、指定された軸に対してより多くのラベルを表示するために、指定されたスペースの量を最適化できます。

この拡張された計算は、オプトインする必要があるものです。これは、[`useEnhancedIntervalManagement`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#useenhancedintervalmanagement) プロパティを true に設定することで実行できます。次に、軸の [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#interval) プロパティを手動で設定せずに、軸のディメンションに収まるだけの数のラベルを表示したい場合は、軸の [`enhancedIntervalPreferMoreCategoryLabels`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#enhancedintervalprefermorecategorylabels) プロパティを true に設定できます。

チャートには、ラベルが割り当てられたスペースに収まらない場合にラベルの自動回転を考慮する機能と、ラベルが収まるようにプロット領域に自動マージンを適用する機能もあります。これは、最初にチャートの [`autoMarginAndAngleUpdateMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#automarginandangleupdatemode) プロパティを `SizeChanging` または `SizeChangingAndZoom` に設定することで最初にオプトインできるものです。これにより、必要に応じて、ラベルに適用された自動マージンと角度をいつ再評価するかがチャートに通知されます。

[`autoMarginAndAngleUpdateMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#automarginandangleupdatemode) を設定した後、[`shouldAutoExpandMarginForInitialLabels`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#shouldautoexpandmarginforinitiallabels) プロパティを true に設定して自動マージンをオプトインするか [`shouldConsiderAutoRotationForInitialLabels`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#shouldconsiderautorotationforinitiallabels) プロパティを true に設定して自動回転を行うことができます。[`autoExpandMarginExtraPadding`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#autoexpandmarginextrapadding) と [`autoExpandMarginMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#autoexpandmarginmaximumvalue) を設して、それぞれ追加のスペースまたは可能な最大マージンを提供することにより、適用される自動マージンをさらにカスタマイズすることもできます。

## 軸範囲の例

チャートでは数値軸または時間軸の範囲の最小値と最大値を定義できます。範囲の最小値は軸の最小値で、範囲の最大値は軸の最大値です。これらは、[`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) および [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) オプションを設定することによって設定されます。

既定では、Angular チャートは、データ内の対応する最小値と最大値に基づいて、数値と時間軸の範囲の最小値と最大値を計算しますが、この自動計算は、データセットには適していません。たとえば、データの最小値が 850 の場合、[`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) を 800 に設定してください。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができます。[`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) プロパティを使用して、同じ方法を軸の最小値と最大値に適用することができます。

<code-view style="height: 450px" alt="Angular 軸範囲の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-range"
                                                 github-src="charts/category-chart/axis-range">
</code-view>


<div class="divider--half"></div>

## 軸モードとスケール

[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) および [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでは、[`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic) プロパティが true に設定されている場合はデータを Y 軸に沿って対数スケールでプロットするか、このプロパティが false (デフォルト価値) に設定されている場合は線形スケールでプロットするかを選択できます。

[`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxislogarithmbase) プロパティを使用すると、対数スケールのベースをデフォルト値の 10 から他の整数値に変更できます。[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) とコントロールを使用すると、[`Numeric`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#numeric) モードと [`PercentChange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#percentchange) モードを提供する [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode) プロパティを使用して、Y 軸に沿ってデータをどのように表現するかを選択できます。[`Numeric`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#numeric) モードは正確な値でデータをプロットし、[`PercentChange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#percentchange) モードは提供された最初のデータ ポイントに対する変化率としてデータを表示します。デフォルト値は [`Numeric`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#numeric) モードです。

[`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode) プロパティに加えて、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールには X 軸に [`Time`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#time) モードと [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) モードを提供する [`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode) プロパティがあります。[`Time`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#time) モードはデータのギャップを X 軸にスペースを用いて描画します。つまり、週末または休日に株取引がないことを示します。[`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) モードはデータがない日付領域を縮小します。デフォルト値は [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) モードです。

<code-view style="height: 450px" alt="Angular 軸範囲の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/axis-types"
                                                 github-src="charts/financial-chart/axis-types">
</code-view>


<div class="divider--half"></div>

## 軸間隔の例

Angular チャートの [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) プロパティは、プロットされた系列の縦棒または棒間のスペースの量を決定します。このプロパティは、0.0 から 1.0 までの数値を受け入れます。値は、シリーズ間の利用可能なピクセル数からのギャップの相対幅を表します。このプロパティを 0 に設定すると、シリーズ間にギャップがレンダリングされず、1 に設定すると最大ギャップがレンダリングされます。

Angular チャートの [`xAxisMaximumGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxismaximumgap) プロパティは、許可される最大ギャップ値を決定します。このデフォルトは 1.0 に設定されていますが、[`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) の設定に応じて変更できます。

Angular チャートの [`xAxisMinimumGapSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminimumgapsize) プロパティは、可能であれば、カテゴリ間のギャップに使用する最小のピクセル数を決定します。

以下の例は、ニューヨーク市のセントラル パークの摂氏の平均最高気温を示しています。これは、[`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) が最初に 1 に設定された[縦棒チャート](../types/column-chart.md)で表されているため、列の間にカテゴリ全体の幅があります。スライダーを使用すると、この例のギャップを構成して、さまざまな値の効果を確認できます。

<code-view style="height: 450px" alt="Angular 軸間隔の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-gap"
                                                 github-src="charts/category-chart/axis-gap">
</code-view>


<div class="divider--half"></div>

## 軸重複の例

Angular チャートの [`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap) プロパティを使用すると、プロットされた系列の描画された縦棒または棒の重複を設定できます。このプロパティは、-1.0 から 1.0 までの数値を受け入れます。値は、各シリーズ専用の使用可能なピクセル数からの相対的な重なりを表します。このプロパティを負の値 (-1.0 まで) に設定すると、カテゴリが互いから離れてしまい、それらの間にギャップが生じます。逆に、このプロパティを正の値 (最大 1.0) に設定すると、カテゴリが互いに重なります。値が 1 の場合、チャートはカテゴリを互いの上に表示します。

以下の例は、フランチャイズの世界の興行収入の合計とシリーズで最も収益の高い映画を比較した、世界で最も収益の高い映画フランチャイズの比較を示しています。これは、[`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap) が最初に 1 に設定された[縦棒チャート](../types/column-chart.md)で表されており、列は完全に重なり合います。スライダーを使用すると、この例の重複を構成して、さまざまな値の効果を確認できます。

<code-view style="height: 450px" alt="Angular 軸重複の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-overlap"
                                                 github-src="charts/category-chart/axis-overlap">
</code-view>


<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

*   [軸グリッド線](chart-axis-gridlines.md)
*   [軸レイアウト](chart-axis-layouts.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

| [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)                                         | [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)       | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)        |
| ------------------------------------------------------ | ---------------------- | ---------------------- |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#maximumvalue)             | [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue)    | [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue)    |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#minimumvalue)             | [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue)    | [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue)    |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`isLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#islogarithmic)            | [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic)   | [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic)   |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`logarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#logarithmbase)            | [`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxislogarithmbase)   | [`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxislogarithmbase)   |
| `Axes` ➔ [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) ➔ [`gap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#gap)                     | なし                   | [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap)             |
| `Axes` ➔ [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) ➔ [`overlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#overlap)                 | なし                   | [`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap)         |
| `Axes` ➔ [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)                                  | [`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode)            | なし                   |
| `Axes` ➔ [`IgxPercentChangeYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html)                         | [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode)            | なし                   |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ `labelSettings.angle`      | [`yAxisLabelAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelangle)      | [`yAxisLabelAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelangle)      |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ `labelSettings.angle`      | [`xAxisLabelAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelangle)      | [`xAxisLabelAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelangle)      |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ `labelSettings.textColor`  | `YAxisLabelForeground` | `YAxisLabelForeground` |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ `labelSettings.textColor`  | `XAxisLabelForeground` | `XAxisLabelForeground` |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ `labelSettings.visibility` | [`yAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelvisibility) | [`yAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelvisibility) |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ `labelSettings.visibility` | [`xAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelvisibility) | [`xAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelvisibility) |
