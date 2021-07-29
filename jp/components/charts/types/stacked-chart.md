---
title: Angular 積層型チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 積層型チャート
_keywords: Angular Charts, Stacked Chart, Stacked 100% Chart, Infragistics, Angular チャート, 積層型チャート, 積層型 100% チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "StackedAreaSeries", "Stacked100AreaSeries", "StackedBarSeries", "Stacked100BarSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "StackedLineSeries", "Stacked100LineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "StackedSplineAreaSeries", "Stacked100SplineAreaSeries"]
_language: ja
---

# Angular 積層型チャート

Ignite UI for Angular 積層型チャートは、データ項目の複数の値を積層エリア/ポリゴン、棒、縦棒、折れ線、またはスプラインとして描画するチャートの特別なグループに属しています。。標準の積層型チャートはデータ項目の実際の値を描画しますが、積層型 100% チャートは値を合計値のパーセンテージとして描画します。

## Angular 積層型チャート タイプ

次の例では、ドロップダウンを使用して、Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールで使用可能なさまざまなタイプの積層型チャートをすべて切り替えることができます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-chart-types"
           alt="Angular 積層型チャートのタイプ" >
</code-view>

<div class="divider--half"></div>

以下のセクションは Ignite UI for Angular 積層型チャートの個々のタイプを示します。

## Angular 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、[エリア チャート](area-chart.md)とすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html) にバインドします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart"
           alt="Angular 積層型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100 エリア チャート

このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合積層されたすべての要素を均等に表すことをお勧めします。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html) にバインドします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart"
           alt="Angular 積層型 100 エリア チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型棒チャート

積層型棒チャート、または積層型棒グラフは、チャートの横棒にさまざまなサイズのフラグメントを表示することにより、さまざまなカテゴリのデータの構成を比較するために使用されるカテゴリ チャートの一種です。各棒または積層フラグメントの長さは、その全体的な値に比例します。

積層型棒チャートは、データを表すデータ ポイントが水平方向に隣り合って積み重ねられ、データを視覚的にグループ化するという点で、[棒チャート](bar-chart.md)とは異なります。各積層は正の値と負の値の両方を含みます。すべての正の値は X 軸の正の側にグループ化され、すべての負の値は X 軸の負の側にグループ化されます。

積層型棒チャートのこの例では、数値の X 軸 (チャートの下部のラベル) とカテゴリの Y 軸 (チャートの左側のラベル) があります。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart"
           alt="Angular 積層型 棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% 棒チャート

Angular 積層型 100% 棒チャートは、X 軸 (チャートの下のラベル) の値の処理を除いて、すべての点で Angular 積層型棒チャートと同じです。データを直接表現するのでなく、積層型棒チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。

積層型 100% 棒チャートのこの例では、Energy Product (エネルギー積) の値は、水平棒のフラグメント内のすべてのデータの 100% 値として表示されます。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart"
           alt="Angular 積層型 100 棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で[縦棒チャート](column-chart.md)と同じです。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも Y 軸の正の側にグループ化され、負の値は Y 軸の負の側にグループ化されます。積層型縦棒チャートは積層型棒チャートと同じデータプロットの概念を使用していますが、データ ポイントは横の線 (X 軸) に沿ってではなく、縦の線 (Y 軸) に沿って積層されます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="Angular 積層型縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% 縦棒チャート

積層型 100% 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型縦棒チャートと同じです。データを直接表現するのでなく、積層型 100% 縦棒チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。

以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="Angular 積層型 100 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型折れ線チャート

積層型折れ線チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-line-chart"
           alt="Angular 積層型折れ線チャート"
           github-src="charts/data-chart/stacked-line-chart">
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% 折れ線チャート

積層型 100% 折れ線チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型折れ線チャートと同じです。データを直接表現するのでなく、積層型 100% 折れ線チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-line-chart"
           alt="Angular 積層型 100 折れ線チャート"
           github-src="charts/data-chart/stacked-100-line-chart">
</code-view>

<div class="divider--half"></div>

## Angular 積層型スプライン エリア チャート

積層型スプライン エリア チャートは、曲線スプライン セグメントで接続されたポイントのコレクションを使用して描画され、曲線スプラインの下の領域が塗りつぶされ、互いに重ねて表示されます。積層型スプライン エリア チャートは、[エリア チャート](area-chart.md)とすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積み重なっていることです。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html) にバインドします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart"
           alt="Angular 積層型 スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% スプライン エリア チャート

積層型 100% スプライン エリア チャートは、y 軸の値の処理を除いて、すべての点で積層型スプラインエリア チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン エリア チャートは、特定のデータ ポイント内のすべての値の合計の割合でデータを表します。チャートは、時間の経過とともに変化する全体の一部を表す場合があります。たとえば、生産元に関連する国のエネルギー消費量。このような場合、積層されたすべての要素を均等に表すことをお勧めします。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100SplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart"
           alt="Angular 積層型 100 スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型スプライン チャート

積層型スプライン チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           alt="Angular 積層型 スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% スプライン チャート

積層型 100% スプライン チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型スプライン チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           alt="Angular 積層型 100 スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [棒チャート](bar-chart.md)
-   [縦棒チャート](column-chart.md)
-   [折れ線チャート](line-chart.md)
-   [スプライン チャート](spline-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ           | コントロール名                                                                                                                                        | API メンバー                                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 積層型エリア             | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html)                   |
| 積層型棒               | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)                     |
| 積層型縦棒              | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)               |
| 積層型折れ線             | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html)                   |
| 積層型スプライン           | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)               |
| 積層型スプライン エリア       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html)       |
| 積層型 100% エリア       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100AreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html)             |
| 積層型 100% 棒         | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html)               |
| 積層型 100% 縦棒        | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)         |
| 積層型 100% 折れ線       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html)             |
| 積層型 100% スプライン     | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html)         |
| 積層型 100% スプライン エリア | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100SplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) |
