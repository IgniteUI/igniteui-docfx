---
title: Overlay Service - Scroll Strategies
_description: Explanation and example about the Overlay Service's IScrollStrategy interface and the classes that implement it.
---

## Scroll strategies

Scroll strategies determines how the scrolling will be handled in the provided IgxOverlayService. There are four scroll strategies:
1. **NoOperation** - does nothing. 
2. **Block** - the component do not scroll with the window. The event is canceled. No scrolling happens.
3. **Close** - uses a tolerance and closes an expanded component upon scrolling if the tolerance is exceeded.
4. **Absolute** - scrolls everything.

## Usage

Every scroll strategy has the following method used to :
 - `initialize` - initializes the scroll strategy. It needs a reference to the document, overlay service and the id of the component rendered
 - `attach` - attaches the scroll strategy to the specified element or to the document
 - `detach` - detaches the scroll strategy
```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```
<div class="divider--half"></div>

### Getting Started
The position strategy is passed as a property in the `overlaySettings` parameter when the `overlay.show()` method is called:
```typescript
    // Initializing and using overlay settings
    const overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(), //Passes the scroll strategy
        modal: true,
        closeOnOutsideClick: true
    }
    overlay.show(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

To change the scroll strategy used by the overlay, override the `scrollStrategy` property of the `overlaySettings` object passed to the overlay:
```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // to override the scroll strategy
    const newOverlaySettings = Object.assing({}, overlaySettings);
    Object.assing(newOverlaySettings, {
        scrollStrategy: new CloseScrollStrategy()
    })
    overlay.show(dummyElement, newOverlaySettings); 
```
<div class="divider--half"></div>

### Dependencies

To use the any of the scroll strategies import it like this:

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```


## Demos 
#### Scroll Strategies
The scroll strategies can be passed through the `overlaySettings` object in order to determine how the overlay should handle scrolling.
The demo below illustrates the difference between the separate `scrollStrategies`:
<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-scroll-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-scroll-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="overlay-scroll-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

### Modal
The `overlaySettings` object also allows a boolean property, `modal`, to be passed. This controls how the overlay will be display:
If the `modal` property is `false`, the element will be attached to the DOM foreground but everything will still be active and interactable - e.g. scrolling, clicking, etc.
If the `modal` property is `true`, the element will be attached to the DOM foreground and an overlay blocked will wrap behind it, stopping propagation of all events:

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-scroll-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-scroll-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="overlay-scroll-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

## API

### Methods

| Name            | Description                                                                     | Parameters |
|-----------------|---------------------------------------------------------------------------------|------------|
|initialize       | Initialize the strategy. Should be called once                                  |document, overlayService, id|
|attach           | Attaches the strategy                                                           |-           |
|detach           | Detaches the strategy                                                           |-           |
