---
title: Angular Map | Data Visualization Tools | Displaying Bing Imagery | Infragistics
_description: Use Infragistics' Angular to display imagery from Microsoft Bing Maps. View Ignite UI for Angular map tutorials!
_keywords: Angular map, bing maps, Ignite UI for Angular, Infragistics, imagery tile source, map background
mentionedTypes: ['XamGeographicMap', 'BingMapsMapImagery']
---

# Angular Displaying Imagery from Bing Maps

The Angular [`IgxBingMapsMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html) is geographic imagery mapping service provided by Microsoft® company. It provides 3 styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a> web site. The Ignite UI for Angular map component can display geographic imagery from Bing Maps in the map’s background content using the [`IgxBingMapsMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html) class.

## Angular Displaying Imagery from Bing Maps Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-bing-imagery" 
           alt="Angular Displaying Imagery from Bing Maps Example" 
           github-src="maps/geo-map/display-bing-imagery">
</code-view>

<div class="divider--half"></div>

## Code Snippet

The following code snippet shows how to display geographic imagery tiles from Bing Maps in Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) using [`IgxBingMapsMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html) class.

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

The following table summarized properties of the [`IgxBingMapsMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html) class:

| Property Name                                                                                                                                                  | Property Type                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`apiKey`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#apikey)                         | string                                                                                                                                     | Represents the property for setting an API key required for the Bing Maps imagery service. You must obtain this key from the <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> website.                                                                                                                                                                                                                                                                                                                   |
| [`imageryStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#imagerystyle)             | [`BingMapsImageryStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/bingmapsimagerystyle.html) | Represents the property for setting the Bing Maps imagery tiles map style. This property can be set to the following [`BingMapsImageryStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/bingmapsimagerystyle.html) enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> AerialWithLabels - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul> |
| [`bingImageryRestUri`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#bingimageryresturi) | string                                                                                                                                     | Represents the property for setting the Bing Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.                                                                                                                                                                                                                                                                                                                             |
| [`cultureName`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#culturename)               | string                                                                                                                                     | Represents a property for setting the culture name for the tile source.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`isDeferredLoad`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#isdeferredload)         | boolean                                                                                                                                    | Represents the property that specifies whether or not the Bing Maps service should auto-initialized upon the assignment of valid property values.                                                                                                                                                                                                                                                                                                                                                                                           |
| [`isInitialized`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#isinitialized)           | boolean                                                                                                                                    | Represents the property that is set to True occurs when geographic imagery tiles from Bing Maps service have been initialized and they are ready for rendering in the map component.                                                                                                                                                                                                                                                                                                                                                        |
| [`subDomains`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#subdomains)                 | `SubDomainsCollection`                                                                                                                     | Represents an image collection of URI sub domains                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`tilePath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbingmapsmapimagery.html#tilepath)                     | string                                                                                                                                     | Represents a property that sets the map tile image URI, this is the actual location of the Bing Maps                                                                                                                                                                                                                                                                                                                                                                                                                                        |
