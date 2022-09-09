---
title: Angular Map | Data Visualization Tools | Displaying ESRI Imagery |  Infragistics
_description: Use Infragistics' Angular to display imagery from ESRI maps. View Ignite UI for Angular map tutorials!
_keywords: Angular map, ESRI, Ignite UI for Angular, Infragistics, imagery tile source, map background
mentionedTypes: ['XamGeographicMap']
---

# Angular Displaying Imagery from Esri Maps

The [`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html) is a free geographic imagery mapping service created by <a href="https://www.esri.com/" target="_blank">Esri</a> company. It provides over 40 styles of geographic imagery tiles of the world and some thematic tiles for the USA. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## Angular Displaying Imagery from Esri Maps Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery"
           alt="Angular Displaying Imagery from Esri Maps Example"
           github-src="maps/geo-map/display-esri-imagery">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/maps/geo-map/display-esri-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/maps/geo-map/display-esri-imagery?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display Angular geographic imagery tiles from Esri imagery servers in [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) using [`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html) class.

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

## API Members

-   [`IgxArcGISOnlineMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxarcgisonlinemapimagery.html)
-   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html)
