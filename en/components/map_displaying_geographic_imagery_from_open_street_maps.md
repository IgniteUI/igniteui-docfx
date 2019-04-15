---
title: Map | Data Visualization Tools | Ignite UI for Angular | Open Street Maps | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Displaying Geographic Imagery from Open Street Maps

The Open Street Maps is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on www.openstreetmap.org web site.
By the default, the Ignite UI for Angular map component displays geographic imagery from the Open Street Maps in the map background content using the OpenStreetMapImagery class. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="map-displaying-geographic-imagery-from-open-street-maps-iframe" src='{environment:demosBaseUrl}/maps/map-displaying-geographic-imagery-from-open-street-maps' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="map-displaying-geographic-imagery-from-open-street-maps-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the `OpenStreetMapImagery` object which provides geographic imagery tile from the Open Street Maps.
