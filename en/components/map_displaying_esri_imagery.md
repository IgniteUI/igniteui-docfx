---
title: Map | Data Visualization Tools | Ignite UI for Angular | Open Street Maps | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Displaying Imagery from Esri Maps

The [`ArcGISOnlineMapImagery`](/angular-apis/typescript/latest/classes/arcgisonlinemapimagery.html) is a free geographic imagery mapping service created by Esri. It provides over 40 styles of geographic imagery tiles of the world. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-displaying-esri-imagery-iframe" src='{environment:demosBaseUrl}/maps/geo-map-displaying-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-displaying-esri-imagery-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

The following code snippet shows how to display geographic imagery from Esri Maps in [`IgxGeographicMapComponent`](/angular-apis/typescript/latest/classes/igxgeographicmapcomponent.html) using [`ArcGISOnlineMapImagery`](/angular-apis/typescript/latest/classes/arcgisonlinemapimagery.html).

Also, you can use the [EsriUtility](map_resources_esri.md) which defines all styles of Esri Maps.
