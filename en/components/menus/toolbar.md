---
title: Angular Toolbar Component | Ignite UI for Angular
_description: See how you can easily get started with Angular Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toolbar components, Angular Toolbar controls
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
---

# Angular Toolbar Overview

The Angular Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) or [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## Angular Toolbar Example

<code-view style="height: 600px" alt="Angular Toolbar Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/actions-built-in-category-chart"
                                                 github-src="charts/toolbar/actions-built-in-category-chart">
</code-view>


## Dependencies

<!-- Angular, WebComponents, React -->

Install the Ignite UI for Angular layouts, inputs, charts and core packages:

```cmd
npm install igniteui-angular-layouts
npm install igniteui-angular-inputs
npm install igniteui-angular-charts
npm install igniteui-angular-core
```

The following modules are required when using the [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) with the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component and it's features.

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

### Tool Actions

The following is a list of the different [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) items that you can add to the Toolbar.

*   [`IgxToolActionButtonComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionbuttoncomponent.html)
*   [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)
*   [`IgxToolActionIconButtonComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconbuttoncomponent.html)
*   [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html)
*   [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)
*   [`IgxToolActionNumberInputComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionnumberinputcomponent.html)
*   [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)

Each of these tools exposes an `OnCommand` event that is triggered by mouse click.

New and existing tools can be repositioned and marked hidden using the [`overlayId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayId), [`beforeId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#beforeId) and [`afterId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterId) properties on the [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) object. ToolActions also expose a [`visibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#visibility) property.

The following example demonstrates hiding both the built-in **ZoomReset** and **AnalyzeMenu** menu tool actions. A new instance of the **ZoomReset** tool action is added and placed within the **ZoomMenu** by using the the [`afterId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterId) property and assigning that to **ZoomOut**. This will ensure the new Reset tool is displayed at the bottom of the **ZoomMenu**.

<code-view style="height: 600px" alt="Angular Toolbar Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/layout-actions-for-data-chart"
                                                 github-src="charts/toolbar/layout-actions-for-data-chart">
</code-view>


### Angular Data Chart Integration

The Angular Toolbar contains a `Target` property. This is used to link a component, such as the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) as shown in the code below:

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

Several pre-existing [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) items and menus become available when the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) is linked with the Toolbar. Here is a list of the built-in Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) Tool Actions and their associated [`overlayId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayId):

Zooming Actions

*   `ZoomReset`: A [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) that invokes the [`resetZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#resetZoom) method on the chart to reset the zoom level to it's default position.
*   `ZoomMenu`: A [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) that exposes two [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) items to invoke the [`zoomIn`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#zoomIn) and [`zoomOut`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#zoomOut) methods on the chart for increasing/decreasing the chart's zoom level.

Trend Actions

*   `AnalyzeMenu`: A [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) that contains several options for configuring different options of the chart.
*   `AnalyzeHeader`: A sub section header.
*   `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
    *   `LinesHeader`: A sub menu section header for the following three tools:
        *   `MaxValue`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the maximum value of the series.
        *   `MinValue`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the minimum value of the series.
        *   `Average`:  A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the average value of the series.
*   `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) plot area.
    *   `TrendsHeader`: A sub menu section header for the following three tools:
        *   **Exponential**: A [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) that sets the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) on each series in the chart to **ExponentialFit**.
        *   **Linear**: A [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) that sets the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) on each series in the chart to **LinearFit**.
        *   **Logarithmic**: A [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html) that sets the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) on each series in the the chart to **LogarithmicFit**.
*   `HelpersHeader`: A sub section header.
*   `SeriesAvg`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that adds or removes a [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) to the chart's series collection using the [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) of type [`Average`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Average).
*   `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)'s plot area.
    *   `ValueLabelsHeader`: A sub menu section header for the following tools:
        *   `ShowValueLabels`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles data point values by using a [`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html).
        *   `ShowLastValueLabel`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles final value axis annotations by using a [`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html).
*   `ShowCrosshairs`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles mouse-over crosshair annotations via the chart's [`crosshairsDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsDisplayMode) property.
*   `ShowGridlines`: A [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html) that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

*   `CopyAsImage`: A [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) that exposes an option to copy the chart to the clipboard.
*   `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three paramters to pass in this method. The first is the icon collection name defined on the tool eg. [`iconCollectionName`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#iconCollectionName). The second is the name of the icon defined on the tool eg. [`iconName`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#iconName), followed by adding the SVG string.

```html
<igx-tool-action-label
    title="Custom Icon"
    iconName="CustomIcon"
    iconCollectionName="CustomCollection">
</igx-tool-action-label>
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';
  
  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

### Vertical Orientation

By default the Angular Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the [`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#orientation) property.

```html
<igx-toolbar orientation="Vertical" />
```

The following example demonstrates the vertical orientation of the Angular Toolbar. <code-view style="height: 600px" alt="Angular Verical Orientation"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/layout-in-vertical-orientation"
                                                 github-src="charts/toolbar/layout-in-vertical-orientation">
</code-view>


<!-- ## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `Toolbar`.

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- The following example demonstrates the various theme options that can be applied.
`sample="/charts/toolbar/theming", height="600", alt="Angular Toolbar Styling/Theming"` -->

## API References

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)

## Additional Resources

*   [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
*   [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
