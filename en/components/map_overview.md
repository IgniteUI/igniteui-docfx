---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Map

The Ignite UI for Angular map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-overview-iframe" src='{environment:demosBaseUrl}/maps/geo-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's `IgxSeriesComponent` property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

### Dependencies

To use the geographic map component, you need to first install these packages:

-   **npm install --save igniteui-Angular-core**
-   **npm install --save igniteui-Angular-charts**
-   **npm install --save igniteui-Angular-maps**

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

Now that the map module is imported, next step is to create geographic map. The following code demonstrates how to do this and enable zooming in the map.
