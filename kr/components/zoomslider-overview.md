---
title: Angular ZoomSlider | Data Visualization Tools | Data Binding | Infragistics
_description: Use the ZoomSlider within the data chart to easily display a subset of data. It is displayed with two handles representing minimum and maximum values.
mentionedTypes: ['ZoomSlider, XamDataChart']
---

# Zoom Slider

The ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart or CategoryChart.

## Demo


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/zoomslider-overview" >
</code-view>


<div class="divider--half"></div>

## Usage

| Feature Name                      | Description                                                                                                                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scrollbar navigation              | Users can change scale and scroll through ranges of data using the built-in capabilities of the ZoomSlider scrollbar.                                                      |
| Panning and zooming               | Users can adjust the display scale by dragging the edges of the thumb pad to either make the current display cover a larger range (zoom out) or a smaller range (zoom in). |
| Multiple user interaction options | All mouse user interactions are redundantly supported through touch and most of them – through the keyboard. For details, see User Interactions and Usability.             |
| Touch support                     | On touch-enabled devices, users can enjoy the full ZoomSlider functionality. All mouse interactions are supported in touch environment.                                    |
| Extensibility                     | The ZoomSlider control supports DataChart control out-of the box.                                                                                                          |
| Configurable zoom-range window    | The initial zoom-range window width and position, as well as its minimum size, are configurable.                                                                           |

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the chart package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**
    <!-- end: Angular, React, WebComponents -->

## Required Modules

The [`IgxZoomSliderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxzoomslidercomponent.html) requires the following modules:

```ts
import { IgxZoomSliderModule } from 'igniteui-angular-charts';
import { IgxZoomSliderComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxZoomSliderModule,
        // ...
    ]
})
export class AppModule {}
```

## Code Snippet

The following code demonstrates how to setup the ZoomSlider.

```html
<igx-zoom-slider
  width="100%"
  height="150px">
</igx-zoom-slider>
```

<div class="divider--half"></div>
