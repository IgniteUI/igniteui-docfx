---
title: Angular Data Chart | Data Visualization Tools | Navigation | Infragistics
_description: Navigate Infragistics' Angular charts by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Angular graph navigation capabilities!
_keywords: Angular charts, data chart, navigation, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Navigation

The Ignite UI for Angular charts allows for interactive panning and zooming via the mouse, keyboard and touch.

## Angular Chart Navigation Example

The following example shows all of the available panning and zooming options that are available. You can interact with the example by using the buttons, or select your desired options using the dropdowns or checkboxes.

<code-view style="height: 600px" alt="Angular Navigation Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/chart-navigation"
                                                 github-src="charts/data-chart/chart-navigation">
</code-view>


<div class="divider--half"></div>

Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Chart Navigation with User Interactions

Whether or not zooming is on by default depends on the chart you are using. If you are using [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), it is on by default, but it is not in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). In order to enable or disable navigation in the UI, you need to set either the [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled) and/or the [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled) properties of the chart, depending on the direction that you wish to enable or disable zooming.

It is also possible to zoom or pan simply by clicking the mouse or using touch. The [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property of the data chart determines what happens on mouse click or touch events. This property defaults to `DragZoom` and when set to this with zooming enabled, clicking and dragging will place a preview rectangle over the plot area that will become the zoomed area of the chart. This [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property can also be set to either `DragPan` to allow panning or `None` to prevent these operations.

## Chart Navigation with Touch, Mouse and Keyboard

Navigation in the Angular data chart can happen with either touch, the mouse or the keyboard. The following operations can be invoked using touch, mouse or keyboard operations by default:

*   **Panning**: Using <kbd>🡐</kbd> <kbd>🡒</kbd> <kbd>🡑</kbd> <kbd>🡓</kbd> arrow keys on the keyboard or holding the <kbd>SHIFT</kbd> key, clicking and dragging with the mouse or pressing and moving your finger via touch.
*   **Zoom In**: Using the <kbd>PAGE UP</kbd> key on the keyboard, rolling the mouse wheel up, or pinching to zoom in via touch.
*   **Zoom Out**: Using the <kbd>PAGE DOWN</kbd> key on the keyboard, rolling the mouse wheel down, or pinching to zoom out via touch.
*   **Fit to Chart Plot Area**: Using the <kbd>HOME</kbd> key on the keyboard. There is no mouse or touch operation for this.
*   **Area Zoom**: Click and drag the mouse within the plot area with the [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property set to its default - `DragZoom`.

The zoom and pan operations can also be enabled by using modifier keys by setting the [`dragModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#dragModifier) and [`panModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#panModifier) properties, respectively. These properties can be set to the following modifier keys, and when pressed, the corresponding operation will be executed:

| Modifier Value | Corresponding Key |
| ---------------|------------------ |
| `Shift`        | <kbd>SHIFT</kbd> |
| `Control`      | <kbd>CTRL</kbd> |
| `Windows`      | <kbd>WIN</kbd> |
| `Apple`        | <kbd>APPLE</kbd> |
| `None`         | no keys |

## Chart Navigation with Scrollbars

The chart can be scrolled by enabling the [`verticalViewScrollbarMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#verticalViewScrollbarMode) and [`horizontalViewScrollbarMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#horizontalViewScrollbarMode) properties.

These can be configured to the following options

*   `Persistent` - The scrollbars always stay visible, as long as the chart is zoomed in, and fade away when fully zoomed out.
*   `Fading` - The scrollbars disappear after use and reappear when the mouse is near their location.
*   `FadeToLine` - The scrollbars are reduced to a thinner line when zooming is not in use.
*   `None` - Default, no scrollbars are shown.

The following example demonstrates enabling scrollbars.

<code-view style="height: 600px" alt="Angular Navigation Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/scrollbars"
                                                 github-src="charts/financial-chart/scrollbars">
</code-view>


<div class="divider--half"></div>

## Chart Navigation through Code

> \[!Note]
> Code navigation of the chart can only be used for the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control.

The Angular data chart provides several navigation properties that are updated each time a zoom or pan operation happens in the chart. You can also set each of these properties to zoom or pan the data chart programmatically. The following is a list of these properties:

*   [`windowPositionHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionHorizontal): A numeric value describing the X portion of the content view rectangle displayed by the data chart.
*   [`windowPositionVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionVertical): A numeric value describing the Y portion of the content view rectangle displayed by the data chart.
*   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect): A `Rect` object representing a rectangle that represents the portion of the chart that is currently in view. For example, a [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) of "0, 0, 1, 1" would be the entirety of the data chart.
*   [`windowScaleHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#windowScaleHorizontal): A numeric value describing the width portion of the content view rectangle displayed by the data chart.
*   [`windowScaleVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#windowScaleVertical): A numeric value describing the height portion of the content view rectangle displayed by the data chart.

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Tooltips](chart-tooltips.md)
*   [Chart Trendlines](chart-trendlines.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction)
*   [`dragModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#dragModifier)
*   [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled)
*   [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled)
*   [`panModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#panModifier)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
