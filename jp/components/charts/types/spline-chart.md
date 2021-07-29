---
title: Angular スプライン チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular スプライン チャート
_keywords: Angular Charts, Spline Chart, Infragistics, Angular チャート, スプライン チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "XamDataChart", "SplineSeries", "StackedSplineSeries", "Stacked100SplineSeries"]
_language: ja
---

# Angular スプライン チャート

Ignite UI for Angular スプライン チャートは、スプラインのスムーズなカーブに接続された点のコレクションとして描画されるカテゴリ チャートのグループに属しています。値は y 軸に表示され、カテゴリは x 軸に表示されます。スプライン チャートは時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。スプライン チャートは、データ ポイントを接続する線がデータの表示を改善するためのスプライン補間とスムージング機能を持つこと以外のすべての面で[折れ線チャート](line-chart.md)と同じです。

## Angular スプライン チャートの例

次の例は、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを Spline 列挙型に設定することにより、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールで Angular スプライン チャートを作成する方法を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           alt="Angular 複数ソースのスプライン チャート" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの Angular スプライン チャート

以下の例に示すように、スプライン チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Spline` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-single-source"
           alt="単一シリーズの Angular スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの Angular スプライン チャート

スプライン チャートを使用すると、複数のシリーズを組み合わせて、時間の経過とともにどのように変化するかを比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、チャートは追加データに合わせて自動的に更新されます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Spline` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           alt="複数シリーズの Angular スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## Angular スプライン チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたスプライン チャートが必要な場合は、以下に示すように、マーカー、マーカー ブラシ、マーカー アウトライン、シリーズ ブラシ、シリーズ アウトラインを構成できます。

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Spline` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-styling"
           alt="Angular スプライン チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## 高度なタイプのスプライン チャート

次のセクションでは、簡略化された API を使用した [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールの代わりに [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールを使用して作成できる、より高度なタイプの Angular スプライン チャートについて説明します。

## Angular 積層型スプライン チャート

以下の例に示すように、積層型スプライン チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           alt="Angular 積層型スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## Angular 積層型 100% スプライン チャート

積層型 100 スプライン チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型スプライン チャートと同じです。データを直接表現するのでなく、積層型 100% スプライン チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでこのチャート タイプを作成するには、以下の例のように、データを [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html) にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           alt="Angular 積層型 100 スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [折れ線チャート](spline-chart.md)
-   [極座標チャート](polar-chart.md)
-   [ラジアル チャート](radial-chart.md)
-   [積層型チャート](stacked-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

| チャート タイプ       | コントロール名                                                                                                                                                | API メンバー                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| スプライン          | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) | [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) = `Spline`              |
| 積層型スプライン       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)       |
| 積層型 100% スプライン | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html) |
