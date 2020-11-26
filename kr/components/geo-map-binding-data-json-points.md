---
title: Angular Map | Data Visualization Tools | Geographic JSON Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics
---

# Angular Binding JSON Files with Geographic Locations

With [`IgxGeographicMapComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html), you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

## Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-data-json-points-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-json-points' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-json-points-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

## Data Example

Here is an example of data from JSON file:

```ts
[
 { "n": "Sydney Island", "y": -16.68972, "x": 139.45917 },
 { "n": "Sydney Creek", "y": -16.3, "x": 128.95 },
 { "n": "Mount Sydney", "y": -21.39864, "x": 121.193 },
 // ...
]
```

## Code Snippet

The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded JSON file with geographic locations:
