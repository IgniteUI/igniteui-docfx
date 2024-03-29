---
title: Angular Chart Animations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Animations
_keywords: Angular Charts, Animations, Infragistics
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Animations

Animations allows you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the origin of y-axis.

Animations are disabled in the Ignite UI for Angular Charts, but they can be enabled by setting the [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isTransitionInEnabled) property to true. From there, you can set the [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration) property to determine how long your animation should take to complete and the [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode) to determine the type of animation that takes place.

## Angular Chart Animation Example

The following example depicts a [Line Chart](../types/line-chart.md) with an animation set to the default [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode) - "Auto." The drop-down and slider at the top in this example will allow you to modify the [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode) and [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration), respectively, so that you can see what the different supported animations look like at different speeds.

<code-view style="height: 500px" alt="Angular Configuration Options Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/line-chart-with-animations"
                                                 github-src="charts/category-chart/line-chart-with-animations">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Chart Highlighting](chart-highlighting.md)
*   [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isTransitionInEnabled)
*   [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration)
*   [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode)
