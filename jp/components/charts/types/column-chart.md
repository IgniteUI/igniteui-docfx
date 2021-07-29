---
title: Angular 縦棒チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 縦棒チャート
_keywords: Angular Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics, Angular チャート, 縦棒チャート, 縦棒グラフ, 垂直棒チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries"]
_language: ja
---

# Angular 縦棒チャート

Ignite UI for Angular 縦棒チャート、縦棒グラフ、または垂直棒チャートは、さまざまなカテゴリのデータの頻度、カウント、合計、または平均を、幅は同じで高さが異なる縦棒でエンコードされたデータによってすばやく比較するために使用される最も一般的なカテゴリ チャート タイプの 1 つです。これらの縦棒は、チャートの下から上へデータ ポイント値に向かって伸びています。縦棒チャートは[棒チャート](bar-chart.md)と非常によく似ていますが、縦棒チャートは垂直方向 (上下) で描画され、[棒チャート](bar-chart.md)は水平方向 (左から右) または時計回りに 90 度回転します。

## Angular 縦棒チャートの例

Ignite UI for Angular カテゴリ縦棒チャートは、複数のデータ ソースのデータ項目をカテゴリにグループ化し、それらを縦棒または長方形として描画します。値は Y 軸に表示され、カテゴリは X 軸に表示されます。

次の例に示すように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) をColumn列挙型に設定することで、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのタイプのチャートを作成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="Angular 複数ソースの縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## 縦棒チャートの推奨事項

### 縦棒チャートのユース ケース

縦棒チャートにはいくつかのユース ケースがあります:

-   関連するカテゴリのデータ値を比較する必要がある場合。
-   一定期間のデータを比較する必要がある場合。
-   同じデータ セットに正の値だけでなく負の値も表示する必要がある場合。
-   パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合。

### 縦棒チャートのベスト プラクティス:

-   データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する。
-   時系列データを左から右へ並べ替える。

### 以下の場合に縦棒チャートを使用しないでください:

-   多くの (10 または 12 以上) シリーズのデータがある場合。チャートが読みやすいことを確認する必要があります。

### 縦棒チャートのデータ構造:

-   データ モデルには少なくとも 1 つの数値プロパティを含む必要があります。
-   データ モデルにはラベルのためのオプションの文字列または日時プロパティを含むことができます。
-   データ ソースに少なくとも 1 つのデータ項目を含む必要があります。

## 単一シリーズの Angular 縦棒チャート

縦棒シリーズは、カテゴリ シリーズのグループに属し、チャートの下から上へデータ ポイント値に向かって延びる四角形のコレクションを使用して描画されます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source"
           alt="単一シリーズの Angular 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの Angular 縦棒チャート

縦棒チャートは、比較のためにカテゴリごとに複数の列を描画できます。[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="複数シリーズの Angular 縦棒チャート"           github-src="charts/category-chart/column-chart-multiple-sources" >
</code-view>

<div class="divider--half"></div>

## Angular 縦棒チャートのスタイル設定

Angular 縦棒チャートには、外観のスタイル設定と変更のための多くのオプションがあります。たとえば、以下のサンプルは、縦棒の外観を変更し、[マーカー テンプレート](../features/chart-markers.md)を使用して、対応する列の上 (または下) に項目の値を表示する方法を示しています。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-styling"
           alt="Angular 縦棒チャートのスタイル設定"
           github-src="charts/category-chart/column-chart-styling">
</code-view>

<div class="divider--half"></div>

## 高度なタイプの縦棒チャート

次のセクションでは、簡略化された API を使用した [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールの代わりに [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールを使用して作成できる、より高度なタイプの Angular 縦棒チャートについて説明します。

## Angular ウォーターフォール チャート

ウォーターフォール チャートはカテゴリ チャートのグループに属し、連続するデータポイント間の差を示す垂直列のコレクションを使用して描画されます。値の正/負の変化を区別するため、列は色分けされます。ウォーターフォール チャートは、外観が[範囲縦棒チャート](column-chart.md#angular-範囲縦棒チャート)に似ていますが、各データ ポイントに必要な数値データ列は 2 つでなく 1 つのみです。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxWaterfallSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwaterfallseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           alt="Angular ウォーターフォール チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で[カテゴリ縦棒チャート](column-chart.md#angular-縦棒チャートの例)に似ています。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも Y 軸の正の側にグループ化され、負の値は Y 軸の負の側にグループ化されます。積層型縦棒チャートは[積層型棒チャート](stacked-chart.md#angular-積層型棒チャート)と同じデータプロットの概念を使用していますが、データ ポイントは横の線 (X 軸) に沿ってではなく、縦の線 (Y 軸) に沿って積層されます。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="Angular 積層型縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% 縦棒チャート

積層型 100% 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で[積層型縦棒チャート](stacked-chart.md#angular-積層型縦棒チャート)と同じです。データを直接表現するのでなく、積層型 100 縦棒は、データ ポイント内のすべての値の合計の割合でデータを表します。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="Angular 積層型 100% 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 範囲縦棒チャート

Ignite UI for Angular 範囲縦棒チャートは、範囲チャートのグループに属し、従来の[カテゴリ縦棒チャート](column-chart.md#angular-縦棒チャートの例)のように下から伸びるのではなく、チャートのプロット領域の中央に表示できる垂直の長方形を使用して描画されます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数の項目を比較します。範囲値は Y 軸に表示され、カテゴリは X 軸に表示されます。

範囲縦棒チャートは、範囲が塗りつぶされた領域ではなく垂直柱の集まりで表されること以外は[範囲エリア チャート](area-chart.md#angular-範囲エリア-チャート)と同じです。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           alt="Angular 範囲縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## Angular ラジアル縦棒チャート

ラジアル縦棒チャートは、[ラジアル チャート](radial-chart.md)のグループに属し、チャートの中心からデータ ポイントの位置に向かって伸びる長方形のコレクションを使用して描画されます。これは[カテゴリ縦棒チャート](column-chart.md#angular-縦棒チャートの例)と同じデータ プロットの概念を使用していますが、データ ポイントを横の線に並べるのではなく、データ ポイントを円でラップします。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="Angular ラジアル縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [棒チャート](bar-chart.md)
-   [複合チャート](composite-chart.md)
-   [ラジアル チャート](radial-chart.md)
-   [積層型チャート](stacked-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ    | コントロール名                                                                                                                                                | API メンバー                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 縦棒          | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) | [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) = [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) |
| ラジアル縦棒      | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html)                                                                                                                            |
| 範囲縦棒        | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html)                                                                                                                              |
| 積層型縦棒       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)                                                                                                                          |
| 積層型 100% 縦棒 | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)                                                                                                                    |
| ウォーターフォール   | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxWaterfallSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwaterfallseriescomponent.html)                                                                                                                                  |
