---
title: Angular Map | Data Visualization Tools | Displaying Open Street Maps Imagery | Infragistics
_description: Use Infragistics' Angular to display imagery from OSM maps. View Ignite UI for Angular map tutorials!
_keywords: Angular map, OSM, Ignite UI for Angular, Infragistics, imagery tile source, map background
mentionedTypes: ["XamGeographicMap"]
---

# Angular Displaying Imagery from Open Street Maps

The Angular [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxopenstreetmapimagery.html) is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for Angular map component already displays geographic imagery from the Open Street Maps. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## Angular Displaying Imagery from Open Street Maps Example

<code-view style="height: 500px" alt="Angular Displaying Imagery from Open Street Maps Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/display-osm-imagery"
                                                 github-src="maps/geo-map/display-osm-imagery">
</code-view>


<div class="divider--half"></div>

## Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxopenstreetmapimagery.html) object which provides geographic imagery from  OpenStreetMap© contributors.

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

## API References

*   `BackgroundContent`
*   [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxopenstreetmapimagery.html)
