---
title: Angular  Angular データ チャート | データ可視化ツール | 同期化 | インフラジスティックス
_description: ズーム操作、パン操作および十字線イベントを含む複数のインフラジスティックスの Angular チャート コントロール間で同期します。Ignite UI for Angular のグラフ同期機能について説明します。
_keywords: Angular charts, data chart, synchronization, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 同期化, インフラジスティックス
mentionedTypes: ["XamDataChart"]
_language: ja
---

# Angular チャート同期化

$ ProductName$ データ チャートを使用すると、複数のチャート間のズーム、パン、および十字線イベントの調整に関して同期をとることができます。これは、データソースが軸に関して似ているか同じであると仮定して、複数のチャートの同じ領域を視覚化するのに役立ちます。

## Angular チャート同期化の例

このサンプルは、2 つの Angular データ チャートの同期を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization"
           alt="Angular チャート同期化の例"
           github-src="charts/data-chart/chart-synchronization">
</code-view>

<div class="divider--half"></div>

## チャート同期化のプロパティ

チャートの同期にはデフォルトで 4 つのオプションがあり、水平方向のみ、垂直方向のみ、その両方を同期、あるいは同期なしを選択することもできます。

チャートのセットを同期する場合は、それらに `SyncChannel` プロパティに同じ名前を割り当ててから、`SynchronizeHorizontally` と `SynchronizeVertically` プロパティを対応するブール値に設定して、チャートを水平または垂直に同期するかどうかを指定できます。

垂直または水平に同期するには、[`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) または [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) プロパティをそれぞれ `true` に設定する必要があります。他のチャートに依存している同期チャートは、このプロパティ設定に関係なく、ズームできます。

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled)
-   [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled)
-   `SyncChannel`
-   `SynchronizeHorizontally`
-   `SynchronizeVertically`
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
