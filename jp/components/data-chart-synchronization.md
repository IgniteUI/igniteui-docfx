---
title: Angular データ チャート | データ可視化ツール | 同期化 | インフラジスティックス
_description: ズーム操作、パン操作および十字線イベントを含む複数のインフラジスティックスの Angular チャート コントロール間で同期します。$Product Name$のグラフ同期機能について説明します。
_keywords: Angular charts, data chart, synchronization, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 同期化, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular 同期

Ignite UI for Angular データチャート コンポーネントは、複数のチャート間のズーム、パン、および十字線イベントの調整に関して同期をとることができます。これは、データソースが軸に関して似ているか同じであると仮定して、複数のチャートの同じ領域を可視化するのに役立ちます。

## Angular 同期の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-chart-synchronization-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 同期の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

チャートの同期にはデフォルトで 4 つのオプションがあり、水平方向のみ、垂直方向のみ、その両方を同期、あるいは同期なしを選択することもできます。

チャートのセットを同期する場合は、それらに `SyncChannel` プロパティに同じ名前を割り当ててから、`SynchronizeHorizontally` と `SynchronizeVertically` プロパティを対応するブール値に設定して、チャートを水平または垂直に同期するかどうかを指定できます。

垂直または水平に同期するには、[`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) または [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) プロパティをそれぞれ `true` に設定する必要があります。他のチャートに依存している同期チャートは、このプロパティ設定に関係なく、ズームできます。

## コード スニペット

以下のコード スニペットは、Ignite UI for Angular データチャートのチャート コントロールのペアを同期する方法を示しています。

```html
<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>

<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>
```
