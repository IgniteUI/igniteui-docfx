---
title: マップ | データ可視化ツール | Ignite UI for Angular | Esri マップ | Infragistics
_description: 地図では、Esri Street Maps の画像を表示できます。デモと使い方をもっと見る
_keywords: map, Ignite UI for Angular, infragistics, マップ,
mentionedTypes: ['XamGeographicMap']
_language: ja
---

## Esri Maps から地理的画像を表示

[`ArcGISOnlineMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/arcgisonlinemapimagery.html) は、Esri によって作成された無料の地理的画像マッピング サービスです。世界の地理的画像タイルの 40 スタイル以上を提供します。この地理的画像サービスは、<a href="http://www.bing.com/maps" target="blank"> www.bing.com/maps</a> Web サイトから直接アクセスできます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-esri-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-esri-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### コード スニペット

以下のコード スニペットは、ArcGISOnlineMapImagery を使用して XamGeographicMap で Esri Maps からの地理的画像を表示する方法を示します。

また、Esri Maps のすべてのスタイルを定義する EsriUtility を使用することもできます。
