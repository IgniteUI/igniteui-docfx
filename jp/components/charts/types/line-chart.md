---
title: Angular 折れ線チャートとグラフ | Ignite UI for Angular
_description: Angular 折れ線チャートは、数百万のデータポイントに及ぶ大量のデータを処理し、数ミリ秒ごとに更新することができます。無料でお試しください。
_keywords: Angular Charts, Line Chart, Line Graph, Infragistics, Angular チャート, 折れ線チャート, 折れ線グラフ, インフラジスティックス
mentionedTypes: ["CategoryChart", "XamDataChart", "Legend", "PolarLineSeries", "RadialLineSeries", "StackedLineSeries", "Stacked100LineSeries"]
_language: ja
---

# Angular 折れ線チャート

Ignite UI for Angular 折れ線チャート (または折れ線グラフ) は、カテゴリ チャートの一種で、一定期間にわたる 1 つ以上の数量の直線セグメントで接続されたポイントで表される連続データ値を示します。トレンドの表示や比較分析によく使用されます。Y 軸 (左側のラベル) は数値を示し、X 軸 (下側のラベル) は時系列または比較カテゴリを示します。比較する 1 つ以上のデータセットを含めることができます。これはチャートで複数の線として描画されます。

## Angular 折れ線チャートの例

次の例では、Angular 折れ線チャートは、2009 年 から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。Y 軸 (チャートの左側のラベル) には、更新された電力のテラワット時 (TWh) 値が表示され、X 軸 (チャートの下部のラベル) には、年が表示されます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Line` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources"
           alt="Angular 複数ソースの折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## 折れ線チャートの推奨事項

## Angular 折れ線チャートはプロジェクトに適していますか?

-   [エリア チャート](area-chart.md)とは異なり、折れ線チャートは X 軸 (下軸) と線の間の領域を塗りつぶしません。
-   Angular 折れ線チャートは、データ ポイントをつなぐ線にスプライン補間とデータの表示を改善するスムージングがないこと以外は、Angular [スプライン チャート](spline-chart.md)と同じです。

折れ線チャートには、データに基づいて複数のバリアントがあります。以下が含まれます。

-   階層型折れ線チャート
-   積層型折れ線チャート
-   ステップ折れ線チャート
-   極座標型折れ線チャート
-   積層型 100 折れ線チャート

### 折れ線チャートのユースケース

折れ線チャートを選択するための一般的なユースケースはいくつかあります:

-   パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合
-   経時的なトレンドを比較する必要がある場合
-   2 つ以上のデータ シリーズの違いを表示したい場合
-   個別のカテゴリの部分対全体の累積比較を表示したい場合
-   比較解析のために 1 つ以上のカテゴリのデータ トレンドを表示する必要がある場合
-   詳細な時系列データを可視化する必要がある場合

### 折れ線チャートのベスト プラクティス:

-   データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する
-   時系列データを左から右へ並べ替える
-   実線などの視覚属性を使用して一連のデータを表示する

### 以下の場合に折れ線チャートを使用しないでください。

-   多くの (7 または 10 以上) シリーズのデータがある場合チャートを読みやすくすることが目標である場合
-   時系列データの値は同じ (同じ期間のデータ) である場合; 重複した行を区別できなくなります。

### 折れ線チャートのデータ構造:

-   データ ソースはデータ項目の配列またはリスト (単一シリーズの場合) である必要があります。
-   データ ソースは、配列の配列またはリストのリスト (複数シリーズの場合) である必要があります。
-   データ ソースに少なくとも 1 つのデータ項目を含む必要があります
-   すべてのデータ項目には、少なくとも 1 つのデータ列 (文字列または日時) が含まれている必要があります。
-   すべてのデータ項目には少なくとも 1 つの数値データ列が含まれている必要があります。

## 単一シリーズの Angular 折れ線チャート

以下の例に示すように、Angular 折れ線チャートは、2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Line` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-single-source"
           alt="単一シリーズの Angular 折れ線チャート"
           github-src="charts/category-chart/chart-single-source">
</code-view>

<div class="divider--half"></div>

## 複数シリーズの Angular 折れ線チャート

Angular 折れ線チャートを使用すると、複数のシリーズを組み合わせて時間の経過に伴う変化を比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、折れ線チャートは追加データに合わせて自動的に更新されます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Line` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources"
           alt="複数シリーズの Angular 折れ線チャート"
           github-src="charts/category-chart/line-chart-multiple-sources'">
</code-view>

<div class="divider--half"></div>

## ライブ データの Angular 折れ線チャート

Angular 折れ線チャートは、次のデモに示すように、数百万に及ぶデータ ポイントを含む大量データを処理し、それらを数ミリ秒ごとに更新できます。

この例では、選択した間隔でライブ データを Angular 折れ線チャートにストリーミングしています。データ ポイントを 5,000 から 100 万に設定し、チャートを更新してチャートを描画するデバイスに基づいてスケールを最適化できます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Line` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="Angular ライブ データの Angular 折れ線チャートの例"
           github-src="charts/category-chart/high-frequency">
</code-view>

<div class="divider--half"></div>

## Angular 折れ線チャートのスタイル設定

チャートを設定したら、線の色の変更、凡例のフォント ファミリの変更、軸ラベルのサイズの増加など読みやすくするためにスタイル設定をカスタマイズできます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Line` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-styling"
           alt="Angular 折れ線チャートのスタイル設定"
           github-src="charts/category-chart/line-chart-styling">
</code-view>

<div class="divider--half"></div>

## 高度なタイプの折れ線チャート

次のセクションでは、簡略化された API を使用した [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールの代わりに [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールを使用して作成できる、より高度なタイプの Angular 折れ線チャートについて説明します。

## Angular 積層型折れ線チャート

積層型折れ線チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。 [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html) にバインドします:

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
           alt="Angular 積層型 100% 折れ線チャート"
           github-src="charts/data-chart/stacked-100-line-chart">
</code-view>

<div class="divider--half"></div>

## Angular ラジアル折れ線チャート

ラジアル折れ線チャートはラジアル チャートのグループに属し、データ ポイントを接続する直線のコレクションによってバインドされた塗りつぶしなしのポリゴンの形状を持っています。このグラフ チャートは、折れ線チャートと同じデータ プロットの概念を使用しますが、データ ポイントを水平方向に引き伸ばすのではなく、円形の軸の周りにラップします。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           alt="Angular ラジアル折れ線チャート"
           github-src="charts/data-chart/radial-line-chart">
</code-view>

<div class="divider--half"></div>

## Angular 極座標型折れ線チャート

極座標折れ線チャートは極座標チャートのグループに属し、極座標 (角度/半径) のデータ ポイントを結ぶ直線のコレクションを使用して描画されます。極座標チャートは、[散布折れ線チャート](scatter-chart.md)と同じデータ プロットの概念を使用しますが、視覚化によってデータ ポイントがを水平方向に引き伸ばされるのではなく、円の周りにラップされる点が異なります。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-line-series"
           alt="Angular 極座標型折れ線チャート"
           github-src="charts/data-chart/type-polar-line-series">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [縦棒チャート](column-chart.md)
-   [極座標チャート](polar-chart.md)
-   [ラジアル チャート](radial-chart.md)
-   [スプライン チャート](spline-chart.md)
-   [積層型チャート](stacked-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ     | コントロール名                                                                                                                                                | API メンバー                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 折れ線          | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) | [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) = `Line`            |
| 極座標折れ線       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)           |
| ラジアル折れ線      | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html)         |
| 積層型折れ線       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStackedLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html)       |
| 積層型 100% 折れ線 | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStacked100LineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html) |
