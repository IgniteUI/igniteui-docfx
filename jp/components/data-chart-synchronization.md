---
title: データ チャート | 可視化ツール | Ignite UI for Angular | Infragistics | 同期
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: データチャート, Ignite UI for Angular, Infragistics
_language: ja
---

## チャートの同期

Ignite UI for Angular データチャート コンポーネントを使用すると、複数のチャート間のズーム、パン、および十字線イベントの調整に関して同期をとることができます。これは、データソースが軸に関して似ているか同じであると仮定して、複数のチャートの同じ領域を視覚化するのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

チャートの同期にはデフォルトで 4 つのオプションがあり、水平方向のみ、垂直方向のみ、その両方を同期、あるいは同期なしを選択することもできます。

チャートのセットを同期する場合は、それらに `SyncChannel` プロパティに同じ名前を割り当ててから、`SynchronizeHorizontally` と `SynchronizeVertically` プロパティを対応するブール値に設定して、チャートを水平または垂直に同期するかどうかを指定できます。

垂直または水平に同期するには、`IsHorizontalZoomEnabled` または `IsVerticalZoomEnabled` プロパティをそれぞれ `true` に設定する必要があります。他のチャートに依存している同期チャートは、このプロパティ設定に関係なく、ズームできます。

### コード スニペット - チャートの同期

次のコードスニペットは、Ignite UI for Angular データチャートのチャート コントロールのペアを同期する方法を示しています。

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
