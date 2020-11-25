---
title: Angular Map | Data Visualization Tools | Esri Maps | Infragistics
_description: The Map allows you to display imagery from Esri Street Maps. View the demo and usage for more
_keywords: map, Ignite UI for Angular, Infragistics, imagery tiles, Esri, Arc GIS
mentionedTypes: ['XamGeographicMap']
---

# Angular Displaying Imagery from Esri Maps

The [`IgxArcGISOnlineMapImagery`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html) is a free geographic imagery mapping service created by Esri. It provides over 40 styles of geographic imagery tiles of the world. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-esri-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-esri-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display geographic imagery from Esri Maps in [`IgxGeographicMapComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) using [`IgxArcGISOnlineMapImagery`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html).

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

## Esri Utility

Alternatively, you can use the [EsriUtility](geo-map-resources-esri.md) which defines all styles provided by Esri imagery servers.

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
