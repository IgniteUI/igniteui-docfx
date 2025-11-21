---
title: Angular Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart User Annotations
_keywords: Angular Charts, User Annotations, Infragistics
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart User Annotation Layer <label class="badge badge--preview">PREVIEW</label>

In Ignite UI for Angular, you can annotate the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html). The following topic explains, with examples, how you can utilize the [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

<code-view style="height: 500px" alt="Angular Trendlines Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/user-annotation-layer"
                                                 github-src="charts/data-chart/user-annotation-layer">
</code-view>


> \[!Note]
> This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the [`isUserAnnotationsEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#isUserAnnotationsEnabled) property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="Angular user-annotation-create"/>

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="Angular user-annotation-delete"/>

When adding one of these user annotations via the `XamToolbar`, the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html):

| Property | Type | Description |
|------------|---------|-------------|
|[`annotationData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationData)|`string`|This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip.|
|[`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId)|`string`|This read-only property returns the unique string ID of the user annotation.|
|[`badgeColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#badgeColor)|`string`|This property gets or sets the color to use for the badge in the user annotation.|
|[`badgeImageUri`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#badgeImageUri)|`string`|This property gets or sets a path to an image to use for the badge in the user annotation.|
|[`dialogSuggestedXLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#dialogSuggestedXLocation)|`double`|This property gets a recommended X location to show a dialog based on the location that the user annotation was added.|
|[`dialogSuggestedYLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#dialogSuggestedYLocation)|`double`|This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.|
|[`label`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#label)|`string`|This property gets or sets the label to be shown in the user annotation.|
|[`mainColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#mainColor)|`string`|This property gets or sets the color to be used to fill the background of the user annotation.|

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#finishAnnotationFlow) method on the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#cancelAnnotationFlow) and passing the [`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the [`IgxUserAnnotationLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) programmatically, you can invoke two different methods on the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to put the chart into a mode where you can add or remove a user annotation. These methods are named [`startCreatingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation) and [`startDeletingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startDeletingAnnotation), respectively.

After invoking [`startCreatingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation), you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#finishAnnotationFlow) method on the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#cancelAnnotationFlow) and passing the [`annotationId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) collection as a [`IgxUserAnnotationLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html). The [`IgxUserAnnotationLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) has an [`annotations`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#annotations) collection that can store [`IgxUserSliceAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxusersliceannotation.html), [`IgxUserStripAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserstripannotation.html) and [`IgxUserPointAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserpointannotation.html) elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's [`annotationData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserbaseannotation.html#annotationData) property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.

## API References

The following is a list of API members mentioned in the above sections:

*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`isUserAnnotationsEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#isUserAnnotationsEnabled)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).`SeriesViewer.UserAnnotationInformationRequested`
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).`SeriesViewer.userAnnotationToolTipContentUpdating`
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`cancelAnnotationFlow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#cancelAnnotationFlow)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`startCreatingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`startDeletingAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startDeletingAnnotation)
*   [`IgxUserAnnotationInformation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html)
*   [`IgxUserSliceAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxusersliceannotation.html)
*   [`IgxUserStripAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserstripannotation.html)
*   [`IgxUserPointAnnotation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserpointannotation.html)
*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Chart Data Annotations](chart-data-annotations.md)
