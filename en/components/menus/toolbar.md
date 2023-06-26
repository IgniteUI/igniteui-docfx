---
title: Angular Toolbar Component | Ignite UI for Angular
_description: See how you can easily get started with Angular Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toolbar components, Angular Toolbar controls
mentionedTypes: ["Toolbar", "DomainChart", "CategoryChart", "XamDataChart"]
---

# Angular Toolbar Overview

The Angular Toolbar component is a companion conainer for UI operations to interact both standalone or with the Angular Data Chart & [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) components. This allows you to easily choose from a preset of properites on the eg. [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with predefined SVG icons, but it also gives you the ability to create custom tools for your project. Benefiting from a number of attributes, you can define or change the icon in use or apply different actions to it. The [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) will display it's own SVG icons.

## Angular Toolbar Example

<code-view style="height: 600px" alt="Angular Toolbar Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/actions-built-in-data-chart"
                                                 github-src="charts/toolbar/actions-built-in-data-chart">
</code-view>


## Dependencies

<!-- Angular, WebComponents, React -->

Install the Ignite UI for Angular layouts, inputs,  charts and core packages:

```cmd
npm install igniteui-angular-layouts
npm install igniteui-angular-inputs
npm install igniteui-angular-charts
npm install igniteui-angular-core
```

The following modules are required when using both the [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) with the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component and it's features.

```ts
import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule  } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxToolbarModule,
        IgxDataChartToolbarModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartAnnotationModule,
        IgxDataChartInteractivityModule,
        IgxDataChartCategoryTrendLineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgxToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule  } from 'igniteui-react-charts';

IgxToolbarModule.register();
IgrDataChartToolbarModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();
```

<!-- end:Angular, WebComponents, React -->

## Usage

### Angular Data Chart integration

The Angular Toolbar contains a `Target` property. This is used to link another component such as the DataChart.

```html
  <div class="legend">
    <igx-toolbar
      name="toolbar"
      [target]="chart"
      #toolbar>
    </igx-toolbar>
  </div>
  <div class="container fill">
    <igx-data-chart
    name="chart"
    #chart>
  </igx-data-chart>
```

Several pre-existing [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) items and menus become available when the chart is linked with the Toolbar. The following names are a list of Tool/Tool [`overlayId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayid) names necessary for further customization such as adding, editing, toggling visibility of tools. These names can be assinged to the [`overlayId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayid), [`beforeId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#beforeid) and [`afterId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterid).

Here is a list of the provided Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) Tool Actions and their associated `OverlayId`:

Zooming Actions

*   `ZoomReset`: [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) performs [`resetZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#resetzoom) on the chart for resetting the zoom level to it's default position.
*   `ZoomMenu`: `ToolActionIconMenu` exposes two [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) items to perform  [`zoomIn`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#zoomin) and [`zoomOut`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#zoomout) on the chart for increasing/decreasing the chart's zoom level.

Trend Actions

*   `AnalyzeMenu`: `ToolActionIconMenu` contains several options for configuring the chart.
*   `AnalyzeHeader`: sub section header `OverlayId`
*   `LinesMenu`: sub menu `OverlayId`
    *   `LinesHeader`: sub menu section header `OverlayId`
        *   `MaxValue`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) - displays a dashed horizontal line along the yAxis at the maximum value.
        *   `MinValue`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)- displays a dashed horizontal line along the yAxis at the minimum value.
        *   `Average`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) - displays a dashed horizontal line along the yAxis at the average value.
*   `TrendsMenu`: [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)
    *   `TrendsHeader`: sub section header `OverlayId`
        *   `Exponential`: [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) - sets the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendlinetype) on the chart to `ExponentialFit`.
        *   `Linear`: [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) - sets the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendlinetype) on the chart to `LinearFit`.
        *   `Logarithmic`: [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) - sets the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendlinetype) on the chart to `LogarithmicFit`.
*   `HelpersHeader`: sub section header `OverlayId`
*   `SeriesAvg`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) - adds a series to the `ValueLines` using the `ValueLayerValueMode` of type `Average`.
*   `ValueLabelsMenu`:  [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)
    *   `ValueLabelsHeader`: sub menu section header `OverlayId`
        *   `ShowValueLabels`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) - displays data point values via the chart's [`calloutsVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#calloutsvisible) property.
        *   `ShowLastValueLabel`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) - displays final value callouts via the chart's [`finalValueAnnotationsVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#finalvalueannotationsvisible) property.
*   `ShowCrosshairs`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) - displays the crosshair annotation via the chart's [`crosshairsDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsdisplaymode) property triggered on mouse hover.
*   `ShowGridlines`: [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) used to display extra gridlines via the [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxismajorstroke) property.

### Tool Actions

The following is a list of [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) items you can add to the Toolbar.

*   [`IgxToolActionButtonComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionbuttoncomponent.html)
*   [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)
*   [`IgxToolActionIconButtonComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconbuttoncomponent.html)
*   `ToolActionIconMenu`
*   [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)
*   [`IgxToolActionNumberInputComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionnumberinputcomponent.html)
*   [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)

Each of these tools exposes an `OnCommand` event that can be triggered upon interacting with them as a mouse click.

New and existing tools can be repositioned and marked hidden using the `OverlayId`, `BeforeId` and `AfterId` properties on the [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) object. ToolActions also expose a [`visibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#visibility) property.

The following example demonstrates hiding both the `ZoomReset` and `Analyze Menu` menu tool actions. A new instance of the `ZoomReset` tool action is added and placed within the `ZoomMenu` by using the the [`afterId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterid) property and assinging that to [`zoomOut`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#zoomout). This will ensure the new Reset tool is displayed at the bottom of the `ZoomMenu`.

<code-view style="height: 600px" alt="Angular Toolbar Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/layout-actions-for-data-chart"
                                                 github-src="charts/toolbar/layout-actions-for-data-chart">
</code-view>


### Vertical Orientation

By default the Angular Toolbar is shown in the horizontal [`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#orientation) position but also has the ability to shown vertically.

<!-- The following example demonstrates the vertical orientation of the Angular Toolbar.
`sample="/charts/toolbar/layout-in-vertical-orientation", height="600", alt="Angular Verical Orientation"` -->

## Styling/Theming

The icon component can be styled by using it's [`baseTheme`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#basetheme) property directly to the [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html). The following example demonstrates the various theme options that can be applied.

<code-view style="height: 600px" alt="Angular Toolbar Styling/Theming"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/theming"
                                                 github-src="charts/toolbar/theming">
</code-view>


## API References

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)

## Additional Resources

*   [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
*   [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
