---
title: Angular Map | Data Visualization Tools | Esri Maps | Infragistics
_description: The Map allows you to display imagery from Esri Street Maps. View the demo and usage for more
_keywords: map, Ignite UI for Angular, Infragistics, imagery tiles, Esri, Arc GIS
_language: kr
mentionedTypes: ["XamGeographicMap"]
---

# Angular Displaying Imagery from Esri Maps

The [`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxarcgisonlinemapimagery.html) is a free geographic imagery mapping service created by Esri. It provides over 40 styles of geographic imagery tiles of the world. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## Demo

<code-view style="height: 500px" alt="Angular geo map display esri imagery"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/display-esri-imagery"
                                                 github-src="maps/geo-map/display-esri-imagery">
</code-view>


<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display geographic imagery from Esri Maps in [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) using [`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxarcgisonlinemapimagery.html).

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
