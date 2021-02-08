---
title: Angular マップ | データ可視化ツール | ESRI 画像の表示 | インフラジスティックス
_description: インフラジスティックスの Angular を使用して ESRI Maps からの画像を表示します。Ignite UI for Angular マップ チュートリアルを是非お試しください!
_keywords: Angular map, ESRI, Ignite UI for Angular, Infragistics, imagery tile source, map background, Angular マップ, ESRI, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# Angular Esri Maps から地理的画像を表示

[`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html) は、<a href="https://www.esri.com/" target="_blank">Esri</a> によって作成された無料の地理的画像マッピング サービスです。世界の地理的画像タイルの 40 スタイル以上を提供します。この地理的画像サービスは、<a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> に直接アクセスして利用できます。

## Angular Esri Maps から地理的画像を表示の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-esri-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Esri Maps から地理的画像を表示の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-esri-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## コード スニペット

以下のコード スニペットは、[`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html) クラスを使用して [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) で Esri 画像サーバーからの Angular 地理的画像タイルを表示する方法を示します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxArcGISOnlineMapImagery } from 'igniteui-angular-maps';
// ...
public geoMap: IgxGeographicMapComponent;

const tileSource = new IgxArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

this.geoMap.backgroundContent = tileSource;
```

## Esri ユーティリティ

また、Esri 画像サーバーのすべてのスタイルを定義する [EsriUtility](geo-map-resources-esri.md) を使用することもできます。

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
public geoMap: IgxGeographicMapComponent;

const tileSource = new IgxArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

this.geoMap.backgroundContent = tileSource;
```
