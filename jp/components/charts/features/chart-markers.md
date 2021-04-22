---
title: Angular チャート マーカー | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート マーカー
_keywords: Angular Charts, Markers, Infragistics, Angular チャート, マーカー, インフラジスティックス
mentionedTypes: ["CategoryChart"]
_language: ja
---

# Angular チャート マーカー

Ignite UI for Angular マーカーは、カテゴリ チャートのプロット領域にデータ ポイントの値を表示する視覚要素です。値が主グリッド線と副グリッド線の間にある場合も指定したデータ ポイントの値をただちに識別できるようユーザーをサポートします。

# Angular チャート マーカーの例

次の例では、[折れチャート](../types/line-chart.md)は、2009 年から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。マーカーが [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/markertype.html) プロパティを "Circle" に設定して有効になっています。

マーカーのカラーは、以下のサンプルの [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerbrushes)プロパティと [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlines) プロパティを設定することによっても管理されます。このサンプルでは、ドロップダウンを使用してマーカーと [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) を構成できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options"
           alt="Angular 構成オプションの例"
           github-src="charts/category-chart/marker-options">
</code-view>

<div class="divider--half"></div>

# Angular チャート マーカー テンプレート

以下の例に示すように、マーカー プロパティに加えて、`XamCategoryChart` コントロールで描画されたシリーズの `MarkerTemplate` プロパティに関数を設定することで、独自のマーカーを実装できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-templates"
           alt="Angular チャート マーカーのテンプレート"
           github-src="charts/category-chart/marker-templates">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

-   [チャート注釈](chart-annotations.md)
-   [チャート強調表示](chart-highlighting.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerbrushes)
-   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlines)
-   [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/markertype.html)
-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
