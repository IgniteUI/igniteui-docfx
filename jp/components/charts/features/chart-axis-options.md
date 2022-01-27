---
title: Angular 軸オプション | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 軸オプション
_keywords: Angular Axis, Options, Title, Labels, Range, Scale, Mode, Infragistics, Angular 軸, オプション, タイトル, ラベル、範囲, スケール, モード, インフラジスティックス
mentionedTypes: ["CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular 軸オプション

すべての Ignite UI for Angular チャートで、軸はタイトル、ラベル、範囲などの視覚的構成のプロパティを提供します。これらの機能は、以下の例で示されています。

## Angular 軸タイトル

Angular チャートの軸タイトル機能を使用すると、チャートにコンテキスト情報を追加できます。さまざまなフォントスタイル、色、マージン、および配置を適用するなど、さまざまな方法で軸タイトルの外観をカスタマイズできます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-titles"
           alt="Angular 軸タイトルの例"
           github-src="charts/category-chart/axis-titles">
</code-view>

<div class="divider--half"></div>

## Angular 軸ラベル

Angular チャートは、チャートで表示されるラベルの構成、書式設定、およびラベル フォントのスタイル設定を制御することが可能です。軸ラベルの回転角度、マージン、水平および垂直方向の配置、色、余白、および表示設定を変更できます。次の例は、これらの軸の機能を使用する方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-labels"
           alt="Angular 軸ラベルの例"
           github-src="charts/category-chart/axis-labels">
</code-view>

<div class="divider--half"></div>

## Angular 軸範囲

チャートでは数値軸または時間軸の範囲の最小値と最大値を定義できます。範囲の最小値は軸の最小値で、範囲の最大値は軸の最大値です。これらは、[`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) および [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) オプションを設定することによって設定されます。

既定では、Angular チャートは、データ内の対応する最小値と最大値に基づいて、数値と時間軸の範囲の最小値と最大値を計算しますが、この自動計算は、データセットには適していません。たとえば、データの最小値が 850 の場合、[`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) を 800 に設定してください。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができます。[`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) プロパティを使用して、同じ方法を軸の最小値と最大値に適用することができます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-range"
           alt="Angular 軸範囲の例"
           github-src="charts/category-chart/axis-range">
</code-view>

<div class="divider--half"></div>

## Angular 軸モードとスケール

[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) および [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでは、[`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic) プロパティが true に設定されている場合はデータを Y 軸に沿って対数スケールでプロットするか、このプロパティが false (デフォルト価値) に設定されている場合は線形スケールでプロットするかを選択できます。

[`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxislogarithmbase) プロパティを使用すると、対数スケールのベースをデフォルト値の 10 から他の整数値に変更できます。[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) とコントロールを使用すると、[`Numeric`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#numeric) モードと [`PercentChange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#percentchange) モードを提供する [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode) プロパティを使用して、Y 軸に沿ってデータをどのように表現するかを選択できます。[`Numeric`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#numeric) モードは正確な値でデータをプロットし、[`PercentChange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#percentchange) モードは提供された最初のデータ ポイントに対する変化率としてデータを表示します。デフォルト値は [`Numeric`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartyaxismode.html#numeric) モードです。

[`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode) プロパティに加えて、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールには X 軸に [`Time`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#time) モードと [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) モードを提供する [`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode) プロパティがあります。[`Time`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#time) モードはデータのギャップを X 軸にスペースを用いて描画します。つまり、週末または休日に株取引がないことを示します。[`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) モードはデータがない日付領域を縮小します。デフォルト値は [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) モードです。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types"
           alt="Angular 軸範囲の例"
           github-src="charts/financial-chart/axis-types">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

-   [軸グリッド線](chart-axis-gridlines.md)
-   [軸レイアウト](chart-axis-layouts.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

| [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)           | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `YAxisMaxmumValue`                                                                                                                                                 | `YAxisMaxmumValue`                                                                                                                                                 |
| [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue)   | [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue)   |
| [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic) | [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic) |
| [`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxislogarithmbase) | [`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxislogarithmbase) |
| [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode)                  |                                                                                                                                                                    |
| [`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode)                  |                                                                                                                                                                    |
