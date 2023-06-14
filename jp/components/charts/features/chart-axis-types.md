---
title: Angular 軸タイプ | データの視覚化 | インフラジスティックス
_description: インフラジスティックスの Angular 軸タイプ
_keywords: Angular 軸, オプション, タイトル, ラベル, ギャップ, オーバーラップ, 範囲, スケール, モード, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular 軸タイプ

Ignite UI for Angular カテゴリ チャートは、[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) および [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) タイプを 1 つだけ使用します。同様に、Ignite UI for Angular ファイナンシャル チャートは、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) タイプと [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) タイプを 1 つだけ使用します。ただし、Ignite UI for Angular データ チャートは複数の軸タイプをサポートしており、[軸の位置](chart-axis-layouts.md#軸位置の例)を設定してチャートの任意の側に配置したり、\[軸交差]\(chart-axis-layouts.md

## デカルト軸

デカルト軸を持つ [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) では3 種類の X 軸を使用して水平 (X 軸) および垂直 (X 軸) 方向にデータをプロットすることが可能です。
([`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html)、[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html)、および [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html)) と 2 種類の Y 軸 ([`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) および [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html))。

### カテゴリ X 軸

[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) は、そのデータを一連のカテゴリ データ項目として扱います。文字列や数値など、ほぼすべてのタイプのデータを表示できます。この軸に数値をプロットする場合、この軸は離散軸であり、連続ではないことに注意してください。これは、各カテゴリ データ項目がその前のデータ項目から等距離に配置されることを意味します。また、項目は軸のデータ ソースに表示される順序でプロットされます。

[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) では、データをプロットするために `DataSource` と [`label`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#label) を提供する必要があります。通常、次のタイプの系列をプロットするために [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) と共に使用されます。

| カテゴリ シリーズ  | 積層型シリーズ | ファイナンシャル シリーズ |
|------------------|----------------|--------------------|
| - [`IgxAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxareaseriescomponent.html) <br> - [`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html) <br> - [`IgxLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) <br> -  [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html)  <br> - [`IgxSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineseriescomponent.html) <br>  -  [`IgxSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineareaseriescomponent.html) <br> -  [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsteplineseriescomponent.html) <br> -  [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstepareaseriescomponent.html) <br> - [`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangeareaseriescomponent.html) <br> - [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangecolumnseriescomponent.html) <br> - [`IgxWaterfallSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxwaterfallseriescomponent.html) | -  [`IgxStackedAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedareaseriescomponent.html) <br> -  [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html) <br> -  [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html) <br> -  [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineseriescomponent.html) <br> -  [`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100areaseriescomponent.html) <br> -  [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html) <br> -  [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html) <br> -  [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineseriescomponent.html) <br> <br> <br> <br> | - [`IgxFinancialPriceSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html) <br> -  [`IgxBollingerBandsOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbollingerbandsoverlaycomponent.html) <br> -  [`IgxForceIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxforceindexindicatorcomponent.html) <br> -  [`IgxMedianPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmedianpriceindicatorcomponent.html) <br> - [`IgxMassIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmassindexindicatorcomponent.html)  <br> - [`IgxRelativeStrengthIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrelativestrengthindexindicatorcomponent.html) <br> - [`IgxStandardDeviationIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstandarddeviationindicatorcomponent.html) <br> -  [`IgxTypicalPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtypicalpriceindicatorcomponent.html) <br> <br> <br> <br> |

次の例は、上記のスタイル設定プロパティの使用法を示しています:

<code-view style="height: 500px" alt="Angular カテゴリ X 軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/stacked-column-chart"
                                                 github-src="charts/data-chart/stacked-column-chart">
</code-view>


### カテゴリ Y 軸

[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) は、上記の [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) と非常によく似た働きをしますが、水平ではなく垂直に配置されます。また、この軸では、データをプロットするために `DataSource` と [`label`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#label) を提供する必要があります。[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) は通常 [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html)  と組み合わせて次のタイプのシリーズをプロットするために使用されます。

*   [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html)
*   [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)
*   [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html)

次の例は、[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) タイプの使用法を示しています:

<code-view style="height: 500px" alt="Angular カテゴリ Y 軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/bar-chart-multiple-sources"
                                                 github-src="charts/data-chart/bar-chart-multiple-sources">
</code-view>


### 数値 X 軸

[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) は、そのデータを連続的に変化する数値データ項目として扱います。この軸のラベルは、X 軸に沿って水平に配置されます。[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ラベルの位置は、[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) と組み合わせた場合にサポートされるさまざまな [ScatterSeries](../types/scatter-chart.md) (散布シリーズ) の `XMemberPath` プロパティに依存します。または、[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html) と組み合わせた場合、これらのラベルは、[`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html)、[`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)、および [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html) の `ValueMemberPath` に対応して配置されます。

[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) は、次のタイプのシリーズと互換性があります:

*   [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbarseriescomponent.html)
*   [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html)
*   [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html)
*   [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)
*   [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html)
*   [`IgxScatterSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html)
*   [`IgxScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html)
*   [`IgxScatterContourSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html)
*   [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolylineseriescomponent.html)
*   [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolygonseriescomponent.html)
*   [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedbarseriescomponent.html)
*   [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100barseriescomponent.html)

次の例は、[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) の使用法を示しています:

<code-view style="height: 500px" alt="Angular 数値 X 軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/type-scatter-hd-series"
                                                 github-src="charts/data-chart/type-scatter-hd-series">
</code-view>


### 数値 Y 軸

[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) は、そのデータを連続的に変化する数値データ項目として扱います。この軸のラベルは、Y 軸に沿って垂直に配置されます。[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ラベルの位置は、[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) と組み合わせた場合にサポートされるさまざまな [ScatterSeries](../types/scatter-chart.md) (散布シリーズ) の `YMemberPath` プロパティに依存します。または、[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryyaxiscomponent.html) と組み合わせた場合、これらのラベルは、上記の表に記載されているカテゴリまたは積層シリーズの `ValueMemberPath` に対応して配置されます。財務シリーズのいずれかを使用している場合、Open/High/Low/Close のパスと使用しているシリーズ タイプに対応して配置されます。

[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) は、次のタイプのシリーズと互換性があります:

| カテゴリ シリーズ  | 積層型シリーズ | ファイナンシャル シリーズ | 散布シリーズ |
|------------------|----------------|------------------|----------------|
| - [`IgxAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxareaseriescomponent.html) <br> - [`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html) <br> - [`IgxLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) <br> -  [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html)  <br> - [`IgxSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineseriescomponent.html) <br>  -  [`IgxSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsplineareaseriescomponent.html) <br> -  [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsteplineseriescomponent.html) <br> -  [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstepareaseriescomponent.html) <br> - [`IgxRangeAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangeareaseriescomponent.html) <br> - [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrangecolumnseriescomponent.html) <br> - [`IgxWaterfallSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxwaterfallseriescomponent.html) <br> | -  [`IgxStackedAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedareaseriescomponent.html) <br> -  [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedcolumnseriescomponent.html) <br> -  [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedlineseriescomponent.html) <br> -  [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstackedsplineseriescomponent.html) <br> -  [`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100areaseriescomponent.html) <br> -  [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100columnseriescomponent.html) <br> -  [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100lineseriescomponent.html) <br> -  [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstacked100splineseriescomponent.html) <br> | - [`IgxFinancialPriceSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html) <br> -  [`IgxBollingerBandsOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbollingerbandsoverlaycomponent.html) <br> -  [`IgxForceIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxforceindexindicatorcomponent.html) <br> -  [`IgxMedianPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmedianpriceindicatorcomponent.html) <br> - [`IgxMassIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmassindexindicatorcomponent.html)  <br> - [`IgxRelativeStrengthIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxrelativestrengthindexindicatorcomponent.html) <br> - [`IgxStandardDeviationIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxstandarddeviationindicatorcomponent.html) <br> -  [`IgxTypicalPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtypicalpriceindicatorcomponent.html) <br> | - [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) <br> - [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html) <br> -  [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html) <br>  - [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html) <br> -  [`IgxScatterSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html) <br> -  [`IgxScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html) <br> -  [`IgxScatterContourSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html) <br> -  [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolylineseriescomponent.html)  <br> -  [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterpolygonseriescomponent.html)  <br> |

次の例は、[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) の使用法を示しています:

<code-view style="height: 500px" alt="Angular 数値 Y 軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-line-chart"
                                                 github-src="charts/data-chart/scatter-line-chart">
</code-view>


### 時間 X 軸

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) は、そのデータを、日付でソートされた一連のデータ項目として扱います。この軸タイプのラベルは日付であり、日付間隔に従ってフォーマットおよび配置できます。この軸の日付範囲は、`DateTimeMemberPath` を使用してマップされたデータ列の日付値によって決定されます。これは、`DataSource` とともに、この軸タイプでデータをプロットするために必要です。

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) は、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) コンポーネントの X 軸タイプです。

#### 時間 X 軸のブレーク

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) には、[`breaks`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html#breaks) (ブレーク) を使用してデータの間隔を除外するオプションがあります。その結果、ラベルとプロットされたデータは除外された間隔では表示されません。たとえば、勤務日/休業日、休日、週末などです。[`IgxTimeAxisBreakComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html) のインスタンスを軸の `Breaks` コレクションに追加し、一意の [`start`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html#start)、[`end`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html#end)、および [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisbreakcomponent.html#interval) を使用して構成できます。

#### 時間 X 軸の書式設定

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) には、[`IgxTimeAxisLabelFormatComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) オブジェクトのコレクションを表す `LabelFormats` プロパティがあります。コレクションに追加された各 [`IgxTimeAxisLabelFormatComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) は、一意の [`format`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#format) (書式) と [`range`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#range) (範囲) を割り当てる役割を果たします。これは、データを年からミリ秒にドリルダウンし、チャートに表示される時間の範囲に応じてラベルを調整する場合に特に役立ちます。

[`IgxTimeAxisLabelFormatComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) の [`format`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#format) プロパティは、特定の表示範囲に使用する形式を指定します。[`IgxTimeAxisLabelFormatComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) の [`range`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html#range) プロパティは、軸ラベルの形式が別の形式に切り替わる表示範囲を指定します。たとえば、範囲が 10 日と 5 時間に設定された 2 つの [`IgxTimeAxisLabelFormatComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxislabelformatcomponent.html) 要素がある場合、軸の表示範囲が 10 日未満になるとすぐに、5 時間形式に切り替わります。

#### 時間 X 軸の間隔

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) は、カテゴリ軸と数値軸の従来の [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval) プロパティを [`IgxTimeAxisIntervalComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html) 型の `Intervals` コレクションに置き換えます。コレクションに追加された各 [`IgxTimeAxisIntervalComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html) は、一意の [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval)、[`range`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#range)、および [`intervalType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervaltype) を割り当てる役割を果たします。これは、データを年単位からミリ秒単位にドリルダウンして、チャートに表示される時間の範囲に応じてラベル間に一意の間隔を設ける場合に特に役立ちます。これらのプロパティの説明は次のとおりです。

*   [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval): 使用する間隔を指定します。[`intervalType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervaltype) プロパティに関連付けられています。たとえば、[`intervalType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervaltype) が `Days` に設定されている場合、[`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval) で指定される数値は日数になります。
*   [`range`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#range): 軸間隔が別の間隔に切り替わる可視範囲を指定します。たとえば、範囲が 10 日間および 5 時間に設定された 2 つの TimeAxisInterval がある場合、軸の表示範囲が 10 日間より短くなる際に 5 時間範囲の間隔に変更します。
*   [`intervalType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#intervaltype): [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimeaxisintervalcomponent.html#interval) プロパティの時間単位を指定します。

## 極座標軸

極座標軸を持つ [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) により、チャートの中心から外側 (半径軸) およびチャートの中心の周り (角度軸) にデータをプロットできます。

### カテゴリ角度軸

[`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) は、そのデータを一連のカテゴリ データ項目として扱います。この軸のラベルは、その順序での位置に従って円の端に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。

[`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) は通常、[ラジアル シリーズ](../types/radial-chart.md)をプロットするために [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) と共に使用されます。

次の例は、[`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) タイプの使用法を示しています:

<code-view style="height: 500px" alt="Angular カテゴリ角度軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-area-chart"
                                                 github-src="charts/data-chart/radial-area-chart">
</code-view>


### 数字角度軸

[`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) は、そのデータを連続的に変化する数値データ項目として扱います。この軸領域のラベルは、円形プロットの中心から始まる半径線に沿って配置されます。[`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) のラベルの位置は、[極座標シリーズ](../types/polar-chart.md) オブジェクトの `RadiusMemberPath` プロパティまたは[ラジアル シリーズ](../types/radial-chart.md) オブジェクトの `ValueMemberPath` プロパティを使用してマップされたデータ列の値によって異なります。

[`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) は、[`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) と共に使用して[ラジアル シリーズ](../types/radial-chart.md)をプロットするか、[`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) と共に使用して[極座標シリーズ](../types/polar-chart.md)をプロットすることができます。

次の例は、[`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericangleaxiscomponent.html) タイプの使用法を示しています:

<code-view style="height: 500px" alt="Angular 数字角度軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/polar-scatter-chart"
                                                 github-src="charts/data-chart/polar-scatter-chart">
</code-view>


### 数字半径軸

[`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) は、データを連続的に変化する数値データ項目として扱います。この軸のラベルは、円形プロットの周りに配置されます。ラベルの位置は、対応する極座標シリーズの `AngleMemberPath` プロパティを使用してマップされたデータ列の値によって異なります。

[`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) を [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) と共に使用して、[極座標シリーズ](../types/polar-chart.md)をプロットできます。

次の例は、[`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html) タイプの使用法を示しています:

<code-view style="height: 500px" alt="Angular 数字半径軸の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/polar-line-chart"
                                                 github-src="charts/data-chart/polar-line-chart">
</code-view>


## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください:

*   [軸グリッド線](chart-axis-gridlines.md)
*   [軸レイアウト](chart-axis-layouts.md)
*   [軸オプション](chart-axis-options.md)
