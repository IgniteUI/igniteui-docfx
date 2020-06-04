---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Map Overview

The Ignite UI for Angular map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-overview-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) can be added for plotting geographic locations such as cities and the [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

### Dependencies

To use the geographic map component, you need to first install these packages:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
npm install --save igniteui-angular-maps
</pre>

### Required Modules

The [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) requires the following modules, however the Ig$DataChartInteractivityModule is only required for mouse interactions, such as panning and zooming the map content.

```ts
// app.module.ts
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxGeographicMapModule,
		IgxDataChartInteractivityModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-overview",
  styleUrls: ["./map-overview.component.scss"],
  templateUrl: "./map-overview.component.html"
})

export class MapOverviewComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
```

<div class="divider--half"></div>

### Usage

Now that the map module is imported, next step is to create geographic map. The following code demonstrates how to do this and enable zooming in the map.

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>
```
