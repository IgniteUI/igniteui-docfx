---
title: Map |データ可視化ツール|Ignite UI for Angular |Esri マップ|インフラジスティックス
_description: Map (マップ) で Esri Street Maps の画像を表示できます。サンプルと使い方をご覧ください。
_keywords: map, Ignite UI for Angular, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

## Esri Maps から地理的画像を表示

[`ArcGISOnlineMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/arcgisonlinemapimagery.html) は、Esri によって作成された無料の地理的画像マッピング サービスです。世界の地理的画像タイルの 40 スタイル以上を提供します。この地理的画像サービスは、<a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> に直接アクセスして利用できます。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-esri-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-esri-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コード スニペット

以下のコード スニペットは、[`ArcGISOnlineMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/arcgisonlinemapimagery.html) を使用して [`IgxGeographicMapComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) で Esri Maps からの地理的画像を表示する方法を示します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { ArcGISOnlineMapImagery } from "igniteui-angular-maps/ES5/igx-arc-gis-online-map-imagery";
// ...
public map: IgxGeographicMapComponent;

const tileSource = new ArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";
this.map.backgroundContent = tileSource;
```

また、Esri Maps のすべてのスタイルを定義する EsriUtility を使用することもできます。
