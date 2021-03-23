---
title: Angular Map | Data Visualization Tools | Open Street Maps | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics, imagery tiles, OpenStreetMap
---

# Angular Binding Imagery from Open Street Maps

The Open Street Maps is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for Angular map component displays geographic imagery from the Open Street Maps in the map background content using the OpenStreetMapImagery class. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## Demo

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-osm-imagery"  >
</code-view>

<div class="divider--half"></div>

## Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html) object which provides geographic imagery tile from the Open Street Maps.
