---
title: Angular ラジアル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular ラジアル チャート
_keywords: Angular Charts, Radial Chart, Infragistics, Angular チャート, ラジアル チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "RadialLineSeries", "Series"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular ラジアル チャート

Ignite UI for Angular ラジアル チャートは、データを取得し、円の周囲でラップされるデータ ポイントのコレクションとしてデータを描画するチャートのグループです (水平方向の線に沿って拡大するのではなく)。ラジアル チャートはチャートの範囲の最小から最大までのカテゴリのリストもマッピングし、カテゴリ グループ化メカニズムをサポートします。

## Angular ラジアル エリア チャート

Ignite UI for Angular ラジアル エリア チャートは、データ ポイントを結ぶ直線のコレクションによってバインドされた塗りつぶされた多角形の形をしています。このチャートは、[エリア チャート](area-chart.md)と同じデータ プロットの概念を使用しますが、データ ポイントを水平方向に引き伸ばすのではなく、円形の軸の周りにラップします。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialareaseriescomponent.html) にバインドします。

<code-view style="height: 600px" alt="Angular ラジアル エリア チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-area-chart"
                                                 github-src="charts/data-chart/radial-area-chart">
</code-view>


<div class="divider--half"></div>

## Angular ラジアル縦棒チャート

ラジアル縦棒チャートは、チャートの中心からデータ ポイントの位置に向けて広がる矩形のコレクションを使用して表示されます。これは[縦棒チャート](column-chart.md)と同じデータ プロットの概念を使用していますが、データ ポイントを水平方向に引き伸ばすのではなく、データ ポイントを円でラップします。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialcolumnseriescomponent.html) にバインドします:

<code-view style="height: 600px" alt="Angular ラジアル縦棒チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-column-chart"
                                                 github-src="charts/data-chart/radial-column-chart">
</code-view>


<div class="divider--half"></div>

## Angular ラジアル折れ線チャート

Ignite UI for Angular ラジアル折れ線チャートは、データ ポイントを結ぶ直線のコレクションとして描画されます。このチャートは、[折れ線チャート](line-chart.md)と同じデータ プロットの概念を使用しますが、データ ポイントを水平方向に引き伸ばすのではなく、円形の軸の周りにラップします。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradiallineseriescomponent.html) にバインドします:

<code-view style="height: 600px" alt="Angular ラジアル折れ線チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-line-chart"
                                                 github-src="charts/data-chart/radial-line-chart">
</code-view>


<div class="divider--half"></div>

## Angular ラジアル円チャート

ラジアル円チャートは、チャートの中心からデータ ポイントの位置に向けて広がる円スライスを使用します。このチャート タイプは、複数の一連のデータ ポイントを分類するという概念を採用しており、データ ポイントを水平線に沿って引き伸ばすのではなく、円形の軸に沿ってラップします。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialpieseriescomponent.html) にバインドします:

<code-view style="height: 600px" alt="Angular ラジアル円チャート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-pie-chart"
                                                 github-src="charts/data-chart/radial-pie-chart">
</code-view>


<div class="divider--half"></div>

## Angular ラジアル チャートのスタイル設定

ラジアル チャートを作成したら、線の色、マーカーの種類、またはそれらのマーカーのアウトライン色の変更など、スタイルをさらにカスタマイズしたい場合があります。

この例は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールのスタイルをカスタマイズする方法を示しています。

<code-view style="height: 600px" alt="Angular ラジアル エリア チャートのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-area-chart-styling"
                                                 github-src="charts/data-chart/radial-area-chart-styling">
</code-view>


<div class="divider--half"></div>

## Angular ラジアル チャートの設定

さらに、ラベルはチャートの近くまたは広い位置に表示されるように設定できます。これは、[`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) の [`labelMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html#labelMode) プロパティで設定できます。

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

*   [エリア チャート](area-chart.md)
*   [縦棒チャート](column-chart.md)
*   [ドーナツ チャート](donut-chart.md)
*   [折れ線チャート](line-chart.md)
*   [円チャート](pie-chart.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialareaseriescomponent.html)
*   [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialcolumnseriescomponent.html)
*   [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradiallineseriescomponent.html)
*   [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxradialpieseriescomponent.html)
*   `ItemsSource`
*   `AngleAxisName`
*   `ValueAxisName`
*   [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxanchoredradialseriescomponent.html#valueMemberPath)
*   [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html)
*   [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericradiusaxiscomponent.html)
