---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Map

The Ignite UI for Angular map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-overview-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, [`IgxGeographicSymbolSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) can be added for plotting geographic locations such as cities and the [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

### Dependencies

To use the geographic map component, you need to first install these packages:

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**
-   **npm install --save igniteui-angular-maps**

### Required Modules

The [`IgxGeographicMap`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmap.html) requires the following modules:

```ts
// app.module.ts
import {IgxMapModule} from "igniteui-angular-maps/ES5/igx-geographic-map-module";

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
