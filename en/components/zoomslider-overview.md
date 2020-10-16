---
title: Angular ZoomSlider | Data Visualization Tools | Navigation | Zooming | DataChart | Data Binding | Infragistics
_description: Use Infragistics' Angular zoom slider control to easily display a subset of data with two handles representing minimum and maximum values. Improve your data visualization with Ignite UI for Angular zoom slider!
_keywords: zoom slider, Ignite UI for Angular, Infragistics, data chart
mentionedTypes: ['ZoomSlider, XamDataChart']
---

## Angular Zoom Slider Overview

The Angular ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart or CategoryChart.

## Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="zoomslider-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/zoomslider-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="zoomslider-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


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

When installing the Angular chart component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## Required Modules

The [`IgxZoomSliderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxzoomslidercomponent.html) requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   ZoomSliderModule
    <!-- end: Blazor -->

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
