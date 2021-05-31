---
title: Angular 棒チャートとグラフ | Ignite UI for Angular
_description: Angular 棒チャートは、さまざまなカテゴリのデータの頻度、カウント、合計、または平均をすばやく比較するために使用される最も一般的なカテゴリ チャート タイプの 1 つです。無料でお試しください。
_keywords: Angular Charts, Bar Chart, Bar Graph, Horizontal Chart, Infragistics, Angular チャート, 棒チャート, 棒グラフ, 水平チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "BarSeries", "StackedBarSeries", "Stacked100BarSeries"]
_language: ja
---

# Angular 棒チャート

Ignite UI for Angular 棒チャート、棒グラフ、または水平棒チャートは、さまざまなカテゴリのデータの頻度、カウント、合計、または平均を、同じ高さで長さが異なる水平棒でエンコードされたデータとすばやく比較するために使用される最も一般的なカテゴリ チャート タイプの 1 つです。これらは、時間の経過とともに、項目の価値の変化を示すのに理想的です。データは、チャートの左から右にデータ ポイントの値に向かって伸びる長方形のコレクションを使用して表されます。棒チャートは[縦棒チャート](column-chart.md)と非常によく似ていますが、棒チャートは時計回りに 90 度回転して描画されるため、向きが水平方向 (左から右) であり、[縦棒チャート](column-chart.md)は垂直方向 (上下) です。

## Angular 棒チャートの例

Ignite UI for Angular カテゴリ棒チャートは、複数のデータ ソースのデータ項目をカテゴリにグループ化し、水平の棒または長方形として描画します。値は X 軸に表示され、カテゴリは Y 軸に表示されます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データ ソースを複数の [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources"
           alt="Angular 複数ソースの棒チャート" >
</code-view>

<div class="divider--half"></div>

## 棒チャートの推奨事項

## Angular 棒チャートはプロジェクトに適していますか?

Angular 棒チャートには、データまたはデータを使用して正しいストーリーを伝える方法に基づいたいくつかの種類が含まれています:

-   グループ化された棒チャート
-   積層型棒チャート
-   極座標型棒チャート
-   積層型 100 棒チャート

### 棒チャートのユースケース

チャートを選択するための一般的なユースケースはいくつかあります:

-   時間の経過に伴う傾向またはデータのカテゴリの数値の変化を表示したい場合
-   1 つ以上のデータ系列のデータ値を比較したい場合
-   部分と全体の比較を表示したい場合
-   カテゴリの上位または下位のパーセンテージを表示したい場合
-   サブカテゴリにグループ化された複数のデータ ポイントの分析 (積層型棒)

これらのユースケースは、一般的に次のシナリオで使用されます:

-   セールス マネージメント
-   インベントリ マネージメント
-   株価チャート
-   数値または時系列値を比較する任意の文字列値

### 棒チャートのベスト プラクティス

-   数値軸を 0 から開始します。
-   棒には単色を使用します。
-   各棒を区切るスペースが棒自体の幅の 1/2 であることを確認します。
-   ランキング、または順序付けられたカテゴリ (項目) の比較は、昇順または降順で並べ替えられていることを確認します。
-   読みやすくするために、Y 軸 (チャートの左側のラベル) のカテゴリ値を右揃えにします。

### 以下の場合に棒チャートを使用しないでください:

-   データが多すぎるため、Y 軸がスペースに収まらないか、判読できません。
-   詳細な時系列分析が必要なときは、時系列を含む[折れ線チャート](line-chart.md)を検討してください。

### 棒チャートのデータ構造:

-   データソースはデータ項目の配列またはリストである必要があります。
-   データ ソースに少なくとも 1 つのデータ項目を含む必要があります。
-   リストには、少なくとも 1 つのデータ列 (文字列または日時) が含まれている必要があります。
-   リストには、少なくとも 1 つの数値データ列が含まれている必要があります。

<div class="divider--half"></div>

## 単一シリーズの Angular 棒チャート

棒チャートは、カテゴリ シリーズのグループに属し、チャートの左から右へデータ ポイント値に向かって延びる四角形のコレクションを使用して描画されます。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-single-source"
           alt="Angular 単一シリーズの Angular 棒チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの Angular 棒チャート

棒チャートは、比較のためにカテゴリごとに複数の棒を描画できます。この例では、棒チャートは人気のある映画フランチャイズの興行収益を比較しています。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを複数の [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources"
           alt="Angular 複数シリーズの Angular 棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 棒チャートのスタイル設定

棒チャートのスタイルを設定でき、パーセント比較を示すために各棒に[注釈値](../features/chart-annotations.md)を使用できます。[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) にバインドし、[`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html) を追加します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-styling"
           alt="Angular 棒チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型棒チャート

積層型棒チャート、または積層型棒グラフは、チャートの横棒にさまざまなサイズのフラグメントを表示することにより、さまざまなカテゴリのデータの構成を比較するために使用されるカテゴリ チャートの一種です。各棒または積層フラグメントの長さは、その全体的な値に比例します。

積層型棒チャートは、データを表すデータ ポイントが水平方向に隣り合って積み重ねられ、データを視覚的にグループ化するという点で、棒チャートとは異なります。各積層は正の値と負の値の両方を含みます。すべての正の値は X 軸の正の側にグループ化され、すべての負の値は X 軸の負の側にグループ化されます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart"
           alt="Angular 積層型棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% 棒チャート

Angular 積層型 100% 棒チャートは、X 軸 (チャートの下のラベル) の値の処理を除いて、すべての点で Angular 積層型棒チャートと同じです。データを直接表現するのでなく、積層型棒チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart"
           alt="Angular 積層型 100 棒チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [縦棒チャート](column-chart.md)
-   [折れ線チャート](line-chart.md)
-   [スプライン チャート](spline-chart.md)
-   [積層型チャート](stacked-chart.md)

## API メンバー

以下は、上記のセクションで説明されている API メンバーのリストです。

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   `DataSource`
-   [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)
-   [`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html)
-   [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)
-   [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html)
-   [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)
