---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic JSON Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding JSON Files with Geographic Locations

With the Ignite UI for Angular map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-binding-data-json-points-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-data-json-points' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-json-points-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

The following code loads and binds `GeographicHighDensityScatterSeries` in the map component to an array of objects created from loaded CSV file with geographic locations.
