---
title: Angular Map | Data Visualization Tools | Bing Maps | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics, imagery tiles, Bing Maps
---

# Angular Binding Imagery from Bing Maps

Bing Maps is Microsoft’s® licensed geographic imagery mapping service. This geographic imagery service is accessible directly on the <a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a>  web site. The Ignite UI for Angular map component displays geographic imagery from Bing Maps in the map’s background content using the [`IgxBingMapsMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html) class. However, by default the map component displays geographic imagery from the Open Street Maps in the map background content requiring you to configure the control to display Bing Maps’ geographic imagery. Prior to using Bing Maps’ geographic imagery, you must register and obtain a Bing Map API key from <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> You must use the Bing Maps’ API key to set the BingMapsMapImagery object’s ApiKey property.

## Demo

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-bing-imagery"  >
</code-view>

<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display geographic imagery tiles from Bing Maps in [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) using [`IgxBingMapsMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html) class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxBingMapsMapImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxBingMapsMapImagery();
tileSource.apiKey = "YOUR_BING_MAPS_API_KEY";
tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels; // or
tileSource.imageryStyle = BingMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = BingMapsImageryStyle.Road;

// resolving BingMaps uri based on HTTP protocol of hosting website
let tileUri = tileSource.actualBingImageryRestUri;
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

this.map.backgroundContent = tileSource;
```

## Properties

The following table summarized data structures required for each type of geographic series :

| Property Name                                                                                                                                                  | Property Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`apiKey`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#apikey)                         | string                       | Represents the property for setting an API key required for the Bing Maps imagery service. You must obtain this key from the <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> website.                                                                                                                                                                                             |
| [`bingImageryRestUri`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#bingimageryresturi) | string                       | Represents the property for setting the Bing Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.                                                                                                                                                                                                       |
| [`cultureName`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#culturename)               | string                       | Represents a property for setting the culture name for the tile source.                                                                                                                                                                                                                                                                                                                                               |
| [`imageryStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#imagerystyle)             | BingMapsImageryStyle         | Represents the property for setting the Bing Maps imagery tiles map style. This property can be set to the following BingMapsImageryStyle enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> AerialWithLabels - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul> |
| [`isDeferredLoad`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#isdeferredload)         | Boolean                      | Represents the property that specifies whether or not the Bing Maps service should auto-initialized upon the assignment of valid property values.                                                                                                                                                                                                                                                                     |
| [`isInitialized`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#isinitialized)           | Boolean                      | Represents the property that is set to True occurs when geographic imagery tiles from Bing Maps service have been initialized and they are ready for rendering in the map component.                                                                                                                                                                                                                                  |
| [`subDomains`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#subdomains)                 | ObservableCollection<string> | Represents an image collection of URI sub domains                                                                                                                                                                                                                                                                                                                                                                     |
| [`tilePath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#tilepath)                     | string                       | Represents a property that sets the map tile image URI, this is the actual location of the Bing Maps                                                                                                                                                                                                                                                                                                                  |

## Code Snippet

The following code snippet shows how to display geographic imagery from Bing Maps in the background content of the map component.
