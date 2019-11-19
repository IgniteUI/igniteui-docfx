---
title: Map | Data Visualization Tools | Ignite UI for Angular | Esri Maps | Infragistics
_description: The Map allows you to display imagery from Esri Street Maps. View the demo and usage for more
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Displaying Imagery from Esri Maps

The [`ArcGISOnlineMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/arcgisonlinemapimagery.html) is a free geographic imagery mapping service created by Esri. It provides over 40 styles of geographic imagery tiles of the world. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-esri-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-esri-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

The following code snippet shows how to display geographic imagery from Esri Maps in [`IgxGeographicMapComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) using [`ArcGISOnlineMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/arcgisonlinemapimagery.html).

Also, you can use the [EsriUtility](geo-map-resources-esri.md) which defines all styles of Esri Maps.
