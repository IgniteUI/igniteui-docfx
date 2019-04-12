---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Map

The map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="map-overview-sample-iframe" src='{environment:demosBaseUrl}/maps/map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="map-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The map control allows you to render geographic imagery from Bing Maps™, Open Street Maps, and ArcGIS Maps. Also, it supports creation of maps from other geographic imagery sources such as Map Quest©. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's `series` property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

The map provides customizable shape templates that can be styled conditionally based on data values. It also provides customizable marker templates for displaying geographic locations as cities, airports, earthquakes, or points of interest.

### Dependencies

When installing the map package, the core package must also be installed.

**npm install igniteui-Angular-maps igniteui-Angular-core**

The map is exported as an `NgModule`, you need to import the _IgxMapModule_ inside your
`AppModule`:

<!-- -->

<!-- -->

```typescript
// app.module.ts
import {IgxMapModule} from 'igniteui-Angular-maps/ES5/igx-map-module'

@NgModule({
    imports: [
        // ...
        IgxMapModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### Usage

Now that the map module is imported, next step is to bind it to data.

#### Loading Geo-spatial Data from Shape Files

In the map control, the `ShapefileConverter` class loads geo-spatial data from shape files and converts it to a collection of `ShapefileRecord` objects. Geographic series can be bound to this collection and render geo-spatial data. For more information see the Binding Shape Files with Geospatical Data topic.

The following code demonstrates how to load a shape file that contains locations of major cities in the world.
