---
title: Overlay Service - Positioning Strategies
_description: Explanation and example about the Overlay Service's IPositionStrategy interface and the classes that implement it.
---

# Position strategies

Position strategies determine where to display the content in the provided `IgxOverlayService`. By default, the content is shown in the middle of the screen.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

### Basic usage

Position strategies allow you to display content, in the overlay, in a large number of available combinations. To start using different position strategies you should first include the necessary dependencies for each strategy used like this:

```typescript
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ContainerPositionStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy
} from 'igniteui-angular';
```

Then specify the position strategy to be used by the overlay. The position strategy is passed in as a property in the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) parameter when the [`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method is called. In the example bellow we are changing the default `GlobalPositionStrategy` with `ConnectedPositionStrategy`:

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

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

### Creating position strategy with predefined position settings

Each position strategy has its own position settings. This setting determines how the content will be shown. In the example bellow we are creating a new `PositionSettings` object. Using it we force the overlay to show the content starting from the top right point of the provided `target` - the `buttonElement`. The direction in which the content will be shown is set to top left. Then we create a new `ConnectedPositionStrategy` and pass in the `PositionSettings`.

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

### Changing an existing position strategy

You can also change the position strategy, used by the overlay, by overriding the [`positionStrategy`]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) property of the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object that is passed in to the overlay:

```typescript
    const myPositionStrategy = new AutoPositionStrategy();
    overlay.show(overlayId, { positionStrategy: myPositionStrategy }); 
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

### Changing existing position settings

To change the position settings of an already existing strategy, override any of the settings of that strategy:
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

### Offsetting the overlay content

To offset the content along the corresponding axis by a provided amount:
```typescript
    // deltaX and deltaY determine by how much the content will be offset compared to its' previous position
   const deltaX: number = 30;
   const deltaY: number = 15;
    overlay.setOffset(this._overlayId, deltaX, deltaY);
```

## Position strategies

There are five position strategies:

1. **Global** - Positions the content based on the directions passed in through [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html). These are Top/Middle/Bottom for [`verticalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#verticaldirection) and Left/Center/Right for [`horizontalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#horizontaldirection). Defaults to:

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

2. **Container** - Positions the content as `GlobalPositionStrategy`. Instead of position related to the screen `ContainerPositionStrategy` positions the content related to the provided in `OverlaySettings` `outlet`. Defaults to:

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

3. **Connected** - Positions the element based on the directions and start point passed in through [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html). It is possible to either pass a start point (type [`Point`]({environment:angularApiUrl}/classes/point.html)) or an `HTMLElement` as a positioning base. Defaults to:

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

4. **Auto** - Positions the element the same way as the **Connected** positioning strategy. It also calculates a different starting point in case the element goes partially out of the view port. The **Auto** strategy will initially try to show the element as the **Connected** strategy does. If the element goes out of the view port **Auto** will flip the starting point and the direction, i.e. if the direction is 'bottom', it will switch it to 'top' and so on. After the flipping, if the element is still out of the view port, **Auto** will use the initial directions and the starting point, to push the element into the view port. For example - if the element goes out of the right side of the view port, by 50px, **Auto** will push it by 50px to the left. Afterwards, if the element is partially out of the view port, then its height or width were greater than the view port's, **Auto** will align the element's left/top edge with the view port's left/top edge. Defaults to:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

5. **Elastic** - Positions the element as in **Connected** positioning strategy and re-sizes the element to fit inside of the view port (re-calculating width and/or height) in case the element is partially out of view. [`minSize`]({environment:angularApiUrl}/interfaces/positionsettings.html#minsize) can be passed in [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) to prevent resizing if it would put the element's dimensions below a certain threshold. Defaults to:

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       | minSize               |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|-----------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |{ width: 0, height: 0 }|
<div class="divider"></div>

> [!NOTE]
> Will not try to resize the element if the strategy is using  HorizontalDirection = Center / VerticalDirection = Middle.
> [!NOTE]
> The overlay element **will be** resized, but the positioning strategy **does not** handle `overflow`. For example, if the element needs to have `overflow-y` when resized, incorporate the appropriate style to provide that.

## API References

* [IPositionStrategy]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)
