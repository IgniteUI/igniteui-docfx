---
title: Angular Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' Angular to display imagery from Microsoft Azure Maps. View Ignite UI for Angular map tutorials!
_keywords: Angular map, azure maps, Ignite UI for Angular, Infragistics, imagery tile source, map background
mentionedTypes: ["XamGeographicMap", "AzureMapsImagery"]
---

# Angular Displaying Imagery from Azure Maps

The Angular `AzureMapsImagery` is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The Ignite UI for Angular map component can display geographic imagery from Azure Maps in the map’s background content using the `AzureMapsMapImagery` class.

## Angular Displaying Imagery from Azure Maps Example

<img src="../images/general/AzureMapsImagery.png" />

<div class="divider--half"></div>

<code-view style="height: 600px" alt="Angular Displaying Imagery from Azure Maps Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/display-azure-imagery"
                                                 github-src="maps/geo-map/display-azure-imagery">
</code-view>


## Code Snippet

The following code snippet shows how to display geographic imagery tiles from Azure Maps in Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) using `AzureMapsMapImagery` class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxAzureMapsImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxAzureMapsImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImagery.Satellite; // or
tileSource.imageryStyle = AzureMapsImagery.TerraOverlay; // or
tileSource.imageryStyle = AzureMapsImagery.Road; //or Traffic & Weather etc.

this.map.backgroundContent = tileSource;
```

## Properties

The following table summarized properties of the `AzureMapsImagery` class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|`ImageryStyle`|`AzureMapsImagery`|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following `AzureMapsImageryStyle` enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> LabelsRoad - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul>|
|`AzureImageryRestUri`|string|Represents the property for setting the Azure Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.|
|`CultureName`|string|Represents a property for setting the culture name for the tile source.|
|`IsDeferredLoad`|boolean|Represents the property that specifies whether or not the Azure Maps service should auto-initialized upon the assignment of valid property values.|
|`IsInitialized`|boolean|Represents the property that is set to True occurs when geographic imagery tiles from Azure Maps service have been initialized and they are ready for rendering in the map component.|
|`SubDomains`|`SubDomainsCollection`|Represents an image collection of URI sub domains|
|`TilePath`|string|Represents a property that sets the map tile image URI, this is the actual location of the Azure Maps|

## API References

*   `AzureMapsImagery`
*   `AzureMapsImagery`
*   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
