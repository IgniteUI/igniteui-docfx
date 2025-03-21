---
title: Angular Map | Data Visualization Tools | Map Overview | Infragistics
_description: Use Infragistics' Angular JavaScript map to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps. View the Ignite UI for Angular map demos!
_keywords: Angular map, geographic map, imagery tiles, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamGeographicMap", "Series"]
---

# Angular Map Overview

The Ignite UI for Angular map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

# Angular Map Example

The following sample demonstrates how display data in [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) using [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) also known as Bubble Series.

<code-view style="height: 500px" alt="Angular geo map type scatter bubble series"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/type-scatter-bubble-series"
                                                 github-src="maps/geo-map/type-scatter-bubble-series">
</code-view>


<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's Series property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) can be added for plotting geographic locations such as cities and the [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

<!-- Angular, React, WebComponents -->

## Dependencies

The Angular geographic map component, you need to first install these packages:

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
npm install --save igniteui-angular-maps
```

<!-- end: Angular, React, WebComponents -->

## Component Modules

The [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) requires the following modules, however the DataChartInteractivityModule is only required for mouse interactions, such as panning and zooming the map content.

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

## Usage

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

<div class="divider--half"></div>

## Additional Resources

You can find more information about related Angular map features in these topics:

*   [Geographic Map Navigation](geo-map-navigation.md)

<!-- - [Geographic Map Imagery](geo-map-display-imagery-types.md) -->

*   [Using Scatter Symbol Series](geo-map-type-scatter-symbol-series.md)
*   [Using Scatter Proportional Series](geo-map-type-scatter-bubble-series.md)
*   [Using Scatter Contour Series](geo-map-type-scatter-contour-series.md)
*   [Using Scatter Density Series](geo-map-type-scatter-density-series.md)
*   [Using Scatter Area Series](geo-map-type-scatter-area-series.md)
*   [Using Shape Polygon Series](geo-map-type-shape-polygon-series.md)
*   [Using Shape Polyline Series](geo-map-type-shape-polyline-series.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
*   [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)
*   [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
*   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
*   [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
*   [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
*   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
*   [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
