---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic CSV Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding CSV Files with Geographic Locations

With the Ignite UI for Angular map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-data-csv-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-csv' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-csv-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Data Example

Here is an example of data from CSV file:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

### Code Snippet

The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded CSV file with geographic locations.
