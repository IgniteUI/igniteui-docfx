---
title: Map | Data Visualization Tools | Ignite UI for Angular | Bing Maps | Infragistics
_description: The Map allows you to display imagery from Bing Maps. View the demo and usage for more
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Displaying Imagery from Bing Maps

The [`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) is geographic imagery mapping service provided by Microsoft® company. It provides 3 styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a> web site. The Ignite UI for Angular map component can display geographic imagery from Bing Maps in the map’s background content using the [`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) class.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-bing-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-bing-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-bing-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

The following code snippet shows how to display geographic imagery from Bing Maps in [`IgxGeographicMapComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) using [`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html).

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { BingMapsMapImagery } from "igniteui-angular-maps/ES5/igx-bing-maps-map-imagery";
// ...
const tileSource = new BingMapsMapImagery();
let tileUri = tileSource.actualBingImageryRestUri;

// resolving BingMaps uri based on HTTP protocol of hosting website
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

this.map.backgroundContent = tileSource;
```

### Properties

The following table summarized properties of the [`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) class:

| Property Name                                                                                                         | Property Type                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`apiKey`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html#apikey)             | string                                                                                                           | Represents the property for setting an API key required for the Bing Maps imagery service. You must obtain this key from the <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> website.                                                                                                                                                                                                                                                                                         |
| [`imageryStyle`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html#imagerystyle) | [`BingMapsImageryStyle`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/bingmapsimagerystyle.html) | Represents the property for setting the Bing Maps imagery tiles map style. This property can be set to the following [`BingMapsImageryStyle`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/bingmapsimagerystyle.html) enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> AerialWithLabels - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul> |
| `BingImageryRestUri`                                                                                                  | string                                                                                                           | Represents the property for setting the Bing Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.                                                                                                                                                                                                                                                                                                   |
| `CultureName`                                                                                                         | string                                                                                                           | Represents a property for setting the culture name for the tile source.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `IsDeferredLoad`                                                                                                      | boolean                                                                                                          | Represents the property that specifies whether or not the Bing Maps service should auto-initialized upon the assignment of valid property values.                                                                                                                                                                                                                                                                                                                                                                 |
| `IsInitialized`                                                                                                       | boolean                                                                                                          | Represents the property that is set to True occurs when geographic imagery tiles from Bing Maps service have been initialized and they are ready for rendering in the map component.                                                                                                                                                                                                                                                                                                                              |
| `SubDomains`                                                                                                          | `SubDomainsCollection`                                                                                           | Represents an image collection of URI sub domains                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `TilePath`                                                                                                            | string                                                                                                           | Represents a property that sets the map tile image URI, this is the actual location of the Bing Maps                                                                                                                                                                                                                                                                                                                                                                                                              |
