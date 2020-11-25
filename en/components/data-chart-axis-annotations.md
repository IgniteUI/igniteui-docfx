---
title: Angular Data Chart | Data Visualization Tools | Axis Annotations | Infragistics
_description: Infragistics' Angular charts control allows you to add annotations to your Angular chart axes, such as Crosshair layer, final value layer and value overlay. Improve your Angular charts and visualizations with Ignite UI for Angular
_keywords: Angular charts, data chart, axis annotations, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','LineSeries','ValueOverlay','CrosshairLayer']
---

# Angular Axis Annotations

In the Ignite UI for Angular data chart component, you are able to add annotations to your axes to show particular values at different points on that axis. This can help you to visualize things such as final series values, overlay values, and values corresponding to crosshairs in the chart.

## Angular Axis Annotations Example

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Axis Annotations Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

In the Ignite UI for Angular data chart, the following are the series and layers that support axis annotations:

-   [`IgxCrosshairLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html)
-   [`IgxFinalValueLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html)
-   [`IgxValueOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html)

You can enable the axis annotations by setting the [`isAxisAnnotationEnabled`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#isaxisannotationenabled) property of the corresponding layer or overlay to `true`. In doing so, this will place a box on the corresponding owning axis or axes with the value that that particular overlay or layer represents at the point that it is currently at. For example, with the [`IgxCrosshairLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html), these annotations can appear on both the X and Y axes and will move around and change as you scroll around the plot area.

The [`isAxisAnnotationEnabled`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#isaxisannotationenabled) property does not exist on the [`IgxFinalValueLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html), as this layer is an axis annotation in itself and has no other visualization other than the annotation on the axis.

You can customize the axis annotations in background, value precision, outline, padding, stroke (outline) thickness, and text color. These can be set using the [`axisAnnotationBackground`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationbackground), [`axisAnnotationInterpolatedValuePrecision`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationinterpolatedvalueprecision), [`axisAnnotationOutline`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationoutline), axis annotation padding ([`axisAnnotationPaddingBottom`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingbottom),[`axisAnnotationPaddingLeft`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingleft),[`axisAnnotationPaddingRight`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingright),[`axisAnnotationPaddingTop`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationpaddingtop)),

[`axisAnnotationStrokeThickness`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationstrokethickness), and [`axisAnnotationTextColor`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationtextcolor) properties, respectively. In addition to these properties, there is also an [`axisAnnotationFormatLabel`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axisannotationformatlabel) event that you can use to fully customize what exactly is shown in [`IgxValueOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) axis annotations.

Note, the [`IgxCrosshairLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html) has the ability to show annotations on both the X and Y axis. These can be customized individually, and as such, each of the above properties exist, but with either an "xAxis" or a "yAxis" placed in front of the name. For example, [`xAxisAnnotationBackground`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#xaxisannotationbackground) or [`yAxisAnnotationTextColor`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#yaxisannotationtextcolor). In addition `XAxisAnnotationFormatLabel` and `YAxisAnnotationFormatLabel` event that you can use to fully customize what exactly is shown in [`IgxCrosshairLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html) axis annotations.

## Code Example

This code demonstrates how to create a Ignite UI for Angular data chart with each of the layers and the overlay with axis annotations enabled for each. In this case, the [`IgxFinalValueLayerComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html) is also customized to have a yellow text color.

```html
<igx-data-chart [dataSource]="data" width="100%" height="500px">
    <igx-category-x-axis #xAxis label="label"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="value"></igx-column-series>

    <igx-value-overlay [axis]="yAxis" isAxisAnnotationEnabled=true thickness=3 value=85></igx-value-overlay>

    <igx-crosshair-layer isAxisAnnotationEnabled=true></igx-crosshair-layer>

    <igx-final-value-layer axisAnnotationTextColor="Yellow"></igx-final-value-layer>
</igx-data-chart>
```

### Additional Resources

-   [Data Chart Series Annotations](data-chart-series-annotations.md)
-   [Value Overlay](data-chart-value-overlay.md)
