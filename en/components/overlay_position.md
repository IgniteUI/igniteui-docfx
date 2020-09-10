---
title: Overlay Service - Positioning Strategies
_description: Explanation and example about the Overlay Service's IPositionStrategy interface and the classes that implement it.
---

# Positioning Strategies

Position strategies determine where the content is displayed in the provided `IgxOverlayService`. By default, the content is positioned in the middle of the screen.

#### Demo

<div class="sample-container loading" style="height: 350px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

### Strategies Overview

There are five positioning strategies:

#### Global
Positions the content, based on the directions passed in through [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html). These are Left/Center/Right for [`horizontalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#horizontaldirection) and Top/Middle/Bottom for [`verticalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#verticaldirection). Defaults are:
    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

#### Container
Positions the content as `GlobalPositionStrategy`. Instead of position related to the screen `ContainerPositionStrategy` positions the content related to the provided in `OverlaySettings` `outlet`. Defaults are:
    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

#### Connected
Positions the element based on the directions and start point passed in through [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html). It is possible to either pass a start point (type [`Point`]({environment:angularApiUrl}/classes/point.html)) or an `HTMLElement` as a positioning base. Defaults are:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

#### Auto
Positions the element the same way as the **Connected** positioning strategy. It also calculates a different starting point in case the element goes partially out of the viewport. The **Auto** strategy will initially try to show the element like the **Connected** strategy does. If the element goes out of the viewport **Auto** will flip the starting point and the direction, i.e. if the direction is 'bottom', it will switch it to 'top' and so on. After flipped, if the element is still out of the viewport, **Auto** will use the initial directions and the starting point, to push the element into the viewport. For example - if the element goes out of the right side of the viewport, by 50px, **Auto** will push it by 50px to the left. Afterwards, if the element is partially out of the viewport, then its height or width were greater than the viewport's, **Auto** will align the element's left/top edge with the viewport's left/top edge. Defaults are:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

#### Elastic
Positions the element like the **Connected** positioning strategy and re-sizes the element to fit inside the view port (re-calculating width and/or height) in case the element is partially out of view. [`minSize`]({environment:angularApiUrl}/interfaces/positionsettings.html#minsize) can be passed in [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) to prevent resizing if it would put the element's dimensions below a certain threshold. Defaults are:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint      minSize               |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|-----------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |{ width: 0, height: 0 }|
<div class="divider"></div>

> [!NOTE]
> It won't try to resize the element if the strategy is using  HorizontalDirection = Center / VerticalDirection = Middle.
> [!NOTE]
> The overlay element **will be** resized, but the positioning strategy **does not** handle `overflow`. For example, if the element needs to have `overflow-y` when resized, incorporate the appropriate style to provide that.

### Usage

Position strategies allow you to display content in the overlay in various combinations. To start using different position strategies, you should first include the necessary dependencies for each strategy used like this:

```typescript
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ContainerPositionStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy
} from 'igniteui-angular';
```

Then specify the positioning strategy to be used by the overlay. The position strategy is passed in as a property in the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) parameter when the [`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method is called. In the example below we are changing the default `GlobalPositionStrategy` with `ConnectedPositionStrategy`:

```typescript
// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    // Pass in the positioning strategy
    positionStrategy: new ConnectedPositioningStrategy({
        // Set the target where content should be shown
        target: this.buttonElement.nativeElement
    })
};
const overlayId = overlay.attach(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-position-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

### Positioning Settings

Each positioning strategy has its own positioning settings. These settings determine how the content will be shown. In the example below, we are creating a new `PositionSettings` object. Using it we force the overlay to show the content starting from the top right point of the provided `target` - the `buttonElement`. The direction in which the content is shown is set to top-left. Then we create a new `ConnectedPositionStrategy` and pass it the `positionSettings`.

```typescript
const positionSettings: PositionSettings = {
    target: buttonElement.nativeElement,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Top,
    horizontalDirection: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Top
};

const strategy = new ConnectedPositioningStrategy(positionSettings);

// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    // Pass in the positioning strategy
    positionStrategy: strategy
};
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, overlaySettings);
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

#### Changing Strategies

You can also change the positioning strategy, used by the overlay, by overriding the [`positionStrategy`]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) property of the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object that is passed to the overlay:

```typescript
const myPositionStrategy = new AutoPositionStrategy();
overlay.show(overlayId, { positionStrategy: myPositionStrategy }); 
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

#### Changing Settings

To change the position settings of an already existing strategy, override any of the settings in it:
```typescript
// overlaySettings is an existing object of type OverlaySettings
// overlaySettings.positionStrategy is an existing PositionStrategy with settings of type PositionSettings
Object.assign(overlaySettings.positionStrategy.settings, {
    target: dummyHTMLElement,
    horizontalStartPoint: HorizontalAlignment.Left,
    horizontalDirection: HorizontalAlignment.Left
});
// the element will now start to the left of the target (dummyHTMLElement)
// and will align itself to the left
overlay.show(overlayId, overlaySettings);
```

#### Offsetting Content

To offset the content along the corresponding axis by a provided amount:
```typescript
// deltaX and deltaY determine by how much the content will be offset compared to its' previous position
const deltaX: number = 30;
const deltaY: number = 15;
overlay.setOffset(this._overlayId, deltaX, deltaY);
```

### API References

* [IPositionStrategy]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)

### Additional Resources
* [Overlay Main Topic](overlay_main.md)
* [Scroll Strategies](overlay_scroll.md)
* [Styling Topic](overlay_styling.md)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
