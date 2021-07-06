---
title: Angular ポイント チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular ポイント チャート
_keywords: Angular Charts, Point Chart, Infragistics, Angular チャート, ポイント チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "ChartType", "Legend"]
_language: ja
---

# Angular ポイント チャート

Ignite UI for Angular ポイント チャートは、ポイントのコレクションを描画します。値は Y 軸 (左側のラベル) に表示され、カテゴリは X 軸 (下部のラベル) に表示されます。これらのチャートは、プロットされた値の合計を表示することにより、一定期間の変化量を強調したり、複数の項目や全体の一部の関係を比較したりします。

## Angular ポイント チャートの例

[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールで Angular  ポイント チャートを作成するには、以下の例のように、データを `DataSource` プロパティにバインドし、[`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) プロパティを `Point` 値に設定します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           alt="Angular ポイント チャートの例" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの Angular ポイント チャート

次の例では、Angular ポイント チャートは、2009 年 から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。Y 軸 (チャートの左側のラベル) には、更新された電力のテラワット時 (Twh) 値が表示され、X 軸 (チャートの下部のラベル) には、年が表示されます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-single-source"
           alt="単一シリーズの Angular ポイント チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの Angular ポイント チャート

Angular ポイント チャートを使用すると、複数のシリーズを組み合わせて時間の経過に伴う変化を比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、ポイント チャートは追加データに合わせて自動的に更新されます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           alt="複数シリーズの Angular ポイント チャート" >
</code-view>

<div class="divider--half"></div>

## Angular ポイント チャートのスタイル設定

Angular ポイント チャートを設定したら、マーカーとそのアウトライン、ブラシ、太さを変更するなど、スタイルをさらにカスタマイズします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-styling"
           alt="ポイント チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## 高度なタイプのポイント チャート

次のトピックに従って、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) コントロールの代わりに [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールを使用して、より高度なタイプの Angular ポイント チャートを作成できます。

-   [散布バブル チャート](bubble-chart.md)
-   [散布マーカー チャート](scatter-chart.md#angular-散布マーカー-チャート)
-   [散布高密度チャート](scatter-chart.md#angular-散布高密度チャート)
-   [極座標型マーカー チャート](polar-chart.md#angular-極座標型マーカー-チャート)

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

-   [チャートのパフォーマンス](../features/chart-performance.md)
-   [チャート マーカー](../features/chart-markers.md)

## API メンバー

以下は、上記のセクションで説明されている API メンバーのリストです。

-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype)
-   [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markertypes)
-   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#markeroutlines)
-   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#markerbrushes)
-   `MarkerThickness`
