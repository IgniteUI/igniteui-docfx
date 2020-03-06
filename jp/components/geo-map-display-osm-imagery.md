---
title: マップ | データ可視化ツール | Ignite UI for Angular | Open Street マップ | インフラジスティックス
_description: Map (マップ) で Esri Street Maps の画像を表示できます。サンプルと使い方を参照してください。
_keywords: map, Ignite UI for Angular, Infragistics, マップ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

## オープン ストリート マップ画像の表示

[`OpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/openstreetmapimagery.html) は、世界中の OpenStreetMap© のコントリビューターが共同で作成した無料の地理的画像マッピングサービスです。これは、構成オプションなしで、道路地図スタイル限定で世界の地理的画像を提供します。この地理的画像サービスは、<a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> に直接アクセスして利用できます。
デフォルトでは、Ignite UI for Angular マップ コンポーネントには、Open Street Maps の地理的画像が既に表示されています。したがって、Open Street Maps から地理的画像を表示するように、コントロールを構成する必要はありません。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-osm-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-osm-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="geo-map-display-osm-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コード スニペット

このコード例では、マップ コンポーネントの `BackgroundContent` を OpenStreetMap© コントリビューターの地理画像を提供する [`OpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/openstreetmapimagery.html) オブジェクトに明示的に設定します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxOpenStreetMapImagery } from 'igniteui-angular-maps';
// ...
public map: IgxGeographicMapComponent;

const tileSource = new IgxOpenStreetMapImagery();
this.map.backgroundContent = tileSource;
```
