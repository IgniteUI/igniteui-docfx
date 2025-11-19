---
title: Angular Dashboard Tile Component | Ignite UI for Angular | commercial license
_description: See how you can easily get started with Angular Dashboard Tile Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dashboard components, Angular Dashboard Tile controls
_license: commercial
mentionedTypes: ["Toolbar", "CategoryChart", "XamDataChart", "XamRadialGauge", "XamLinearGauge", "XamGeographicMap"]
---

# Angular Dashboard Tile <label class="badge badge--preview">PREVIEW</label>

The Angular Dashboard Tile is a automatic data visualization component which determines via analysis of a DataSource collection/array or single data point what would be the most appropriate visualization to display. It then also provides a further suite of tools in its embedded [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) that let you alter the visualization that is presented in a variety of ways.

A wide variety of visualizations may be selected for display depending on the shape of the provided data including, but not limited to: Category Charts, Radial and Polar Charts, Scatter Charts, Geographic Maps, Radial and Linear Gauges, Financial Charts and Stacked Charts.

Interacting with the chart type menu in the toolbar will allow for selecting a different visualization among the list of likely candidates.

## Angular Dashboard Tile Example

<code-view style="height: 600px" alt="Angular Dashboard Tile Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/local-data-source-dashboard"
                                                 github-src="charts/dashboard-tile/local-data-source-dashboard">
</code-view>


## Dependencies

<!-- Angular, WebComponents, React -->

Install the following packages in the Ignite UI for Angular toolset:

```cmd
npm install igniteui-angular-charts
npm install igniteui-angular-core
npm install igniteui-angular-dashboards
npm install igniteui-angular-gauges
npm install igniteui-angular-data-grids
npm install igniteui-angular-inputs
npm install igniteui-angular-layouts
npm install igniteui-angular-maps
```

The following modules are suggested when using the Dashboard Tile component:

```ts
import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxRadialGaugeDashboardTileModule,
         IgxLinearGaugeDashboardTileModule, IgxGeographicMapDashboardTileModule,
         IgxPieChartDashboardTileModule } from "igniteui-angular-dashboards";

@NgModule({
    imports: [
        IgxDataChartDashboardTileModule,
        IgxRadialGaugeDashboardTileModule,
        IgxLinearGaugeDashboardTileModule,
        IgxGeographicMapDashboardTileModule,
        IgxPieChartDashboardTileModule,
        IgxDashboardTileModule
    ]
})
export class AppModule {}
```

<!-- end:Angular, WebComponents, React -->

## Usage

Depending on what you bind the Dashboard Tile's `DataSource` property to will determine which visualization you see by default, as the control will evaluate the data you bind and then choose a visualization from the Ignite UI for Angular toolset to show. The data visualization controls that are included to be shown in the Dashboard Tile are the following:

- [IgxCategoryChart](charts/chart-overview.md)
- [IgxDataChart](charts/chart-overview.md)
- [IgxDataPieChart](charts/types/data-pie-chart.md)
- [IgxGeographicMap](geo-map.md)
- [IgxLinear Gauge](linear-gauge.md)
- [IgxRadialGauge](radial-gauge.md)

The data visualization that is chosen by default is mainly dependent on the schema and the count of the `DataSource` that you have bound. For example, if you bind a single numeric value, you will get a [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html), but if you bind a collection of value-label pairs that are easy to distinguish from each other, you will likely get a `XamDataPieChart`. If you bind an `DataSource` that has more value paths, you will receive a [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with multiple column series or line series, depending mainly on the count of the collection bound. You can also bind to a `ShapeDataSource` or data the appears to contain geographic points to receive a [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html).

You are not locked into a single visualization when you bind the `DataSource`, and you can tell the control that you want to see a particular visualization by setting its `VisualizationType` property. For example, if you specifically wanted to see a line chart, you could define the Dashboard Tile like so:

<!-- TODO SAMPLE -->

<code-view style="height: 600px" alt="Angular Dashboard Tile Gauge Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/gauge-dashboard"
                                                 github-src="charts/dashboard-tile/gauge-dashboard">
</code-view>


The visualization or properties of the visualization are also configurable using the [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) at the top of the control. This [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) has the default tools for the current visualization with the addition of four Dashboard Tile specific ones, highlighted below:

<img src="../images/dashboard-tile-toolbar.png" alt="Dashboard Tile Toolbar" />

From left to right:

- The first tool will show a data grid with the `DataSource` provided to the control. This is a toggle tool, so if you click it again after showing the grid, it will revert to the visualization.
- The second tool allows you to configure the settings of the current data visualization.
- The third tool allows you to change the current visualization, allowing you to plot a different series type or show a different type of visualization altogether. This can be set on the control by setting the `VisualizationType` property, mentioned above.
- The last tool allows you to configure which properties on your underlying data item are included for the control. You can configure this by setting the [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedProperties) or [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedProperties) collection on the control.

This demo demonstrates dashboard tile integration with the Angular Pie Chart. The toolbar options at the top right provides access to styling and changing the data visualization.

<code-view style="height: 600px" alt="Angular Dashboard Tile Pie Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/pie-dashboard"
                                                 github-src="charts/dashboard-tile/pie-dashboard">
</code-view>


This demo demonstrates dashboard tile integration with the Angular Geographic Map. The toolbar options at the top right provides access to styling and changing the data visualization.

<code-view style="height: 600px" alt="Angular Dashboard Tile Map Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/map-dashboard"
                                                 github-src="charts/dashboard-tile/map-dashboard">
</code-view>


## API References

- [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
- [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html)
- [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
- [`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html)
- [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)

## Additional Resources

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
