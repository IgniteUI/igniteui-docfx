---
title: Angular Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Annotations
_keywords: Angular Charts, Annotations, Infragistics
mentionedTypes: ["XamCategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
---

# Angular Chart Annotations

The Angular chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## Angular Annotations Example

The following example demonstrates the annotation layers that are available on the Angular chart. Click on the checkboxes to turn each layer on and off.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-annotations"
           alt="Angular Annotations Example"
           github-src="charts/category-chart/line-chart-with-annotations">
</code-view>

<div class="divider--half"></div>

Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Angular Crosshair Layer

The [`IgxCrosshairLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html) renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines. 

Crosshair types include:

-   Horizontal
-   Vertical
-   Both

The chart's crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis. 

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series on the chart component. To achieve this, set the [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#targetseries) property.  

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.  

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-crosshair-layer-styling"
           alt="Angular Crosshair Layer Styling"
           github-src="charts/data-chart/crosshair-layer-styling">
</code-view>

<div class="divider--half"></div>

## Angular Final Value Layer

The [`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html) of the category chart component provides a quick view along the axis of the ending value displayed in a series. 

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#targetseries) property.  

You can also customize this annotation by setting the following properties:

-   [`axisAnnotationBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationbackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
-   [`axisAnnotationTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationtextcolor): This property is used to choose the brush for the annotation's text color.
-   [`axisAnnotationOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationoutline): This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-final-value-layer-styling"
           alt="Angular Final Value Layer Styling"
           github-src="charts/data-chart/final-value-layer-styling">
</code-view>

<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

## Angular Callout Layer

The [`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html) displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users. 

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#targetseries) property.

You can also customize this annotation by setting the following properties:

-   [`calloutLeaderBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#calloutleaderbrush): This property is used to choose the brush for the leader lines for the callouts for the layer.
-   [`calloutOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#calloutoutline): This property is used to choose the brush for the annotation's outline color.
-   [`calloutBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#calloutbackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
-   [`calloutTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#callouttextcolor): This property is used to choose the brush for the annotation's text color.
-   [`calloutStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#calloutstrokethickness): This property is used to choose the thickness for the callout backing.

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-callout-layer-styling"
           alt="Angular Callout Layer Styling"
           github-src="charts/data-chart/callout-layer-styling">
</code-view>

<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info">
</igx-category-chart>
```

## API Members

The following is a list of API members mentioned in the above sections:

-   `CrosshairsSnapToData`
-   `XamCategoryChart`
