---
title: ZoomSlider | Data Visualization Tools | Ignite UI for Angular | Data Binding | Infragistics
_description: Use the zoombar within the data chart to easily display a subset of data. It is displayed with two handles representing minimum and maximum values.
mentionedTypes: ['ZoomSlider, XamDataChart']
---

### Zoom Slider

The ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="zoomslider-overview-iframe" src='{environment:demosBaseUrl}/zoomslider/zoomslider-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="zoomslider-overview" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Usage

Feature	Description

-   Scrollbar navigation

    Users can change scale and scroll through ranges of data using the built-in capabilities of the ZoomSlider scrollbar.

-   Panning and zooming

    Users can adjust the display scale by dragging the edges of the thumb pad to either make the current display cover a larger range (zoom out) or a smaller range (zoom in).

-   Multiple user interaction options

    All mouse user interactions are redundantly supported through touch and most of them – through the keyboard. For details, see User Interactions and Usability.

-   Touch support	

    On touch-enabled devices, users can enjoy the full ZoomSlider functionality. All mouse interactions are supported in touch environment.

-   Out-of-the box integration with other controls

    The ZoomSlider control supports igDataChart control out-of the box.

-   Extensibility	

    The ZoomSlider control supports DataChart control out-of the box. 

-   Configurable zoom-range window	

    The initial zoom-range window width and position, as well as its minimum size, are configurable. 

### Dependencies

When installing the chart package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### Required Modules

The [`IgxZoomSliderComponent`](zoomslider_overview.md) requires the following modules:

```ts
import { IgxZoomSliderModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-module";
import { IgxZoomSliderComponent} from 'igniteui-angular-charts/ES5/igx-zoom-slider-component';

@NgModule({
    imports: [
        // ...
        IgxZoomSliderModule,
        // ...
    ]
})
export class AppModule {}
```

### Code Snippet

The following code demonstrates how to setup the ZoomSlider.

```html
<igx-zoom-slider  
  width="100%"
  height="150px">
</igx-zoom-slider>
```

<div class="divider--half"></div>
