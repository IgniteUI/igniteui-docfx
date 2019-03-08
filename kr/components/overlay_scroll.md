---
title: Overlay Service - Scroll Strategies
_description: Explanation and example about the Overlay Service's IScrollStrategy interface and the classes that implement it.
_language: kr
---

## Scroll strategies

Scroll strategies determines how the scrolling will be handled in the provided IgxOverlayService. There are four scroll strategies:
1. **NoOperation** - does nothing. 
2. **Block** - the component do not scroll with the window. The event is canceled. No scrolling happens.
3. **Close** - uses a tolerance and closes an expanded component upon scrolling if the tolerance is exceeded.
4. **Absolute** - scrolls everything.

## Usage

Every scroll strategy has the following method used to :
 - [`initialize`] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html#initialize) - initializes the scroll strategy. It needs a reference to the document, overlay service and the id of the component rendered
 - [`attach`] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html#attach) - attaches the scroll strategy to the specified element or to the document
 - [`detach`] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html#detach) - detaches the scroll strategy

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```
<div class="divider--half"></div>

### Getting Started
The position strategy is passed as a property in the [`overlaySettings`] ({environment:angularApiUrl}/interfaces/overlaysettings.html) parameter when the [`overlay.show()`] ({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method is called:
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

To change the scroll strategy used by the overlay, override the [`scrollStrategy`] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html) property of the [`overlaySettings`] ({environment:angularApiUrl}/interfaces/overlaysettings.html) object passed to the overlay:
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
The scroll strategies can be passed through the [`overlaySettings`] ({environment:angularApiUrl}/interfaces/overlaysettings.html) object in order to determine how the overlay should handle scrolling.
The demo below illustrates the difference between the separate [`scrollStrategies`] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html):
<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-scroll-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-scroll-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-scroll-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

### Modal
The [`overlaySettings`] ({environment:angularApiUrl}/interfaces/overlaysettings.html) object also allows a boolean property, [`modal`] ({environment:angularApiUrl}/interfaces/overlaysettings.html#modal), to be passed. This controls how the overlay will be display:
If the [`modal`] ({environment:angularApiUrl}/interfaces/overlaysettings.html#modal) property is `false`, the element will be attached to the DOM foreground but everything will still be active and interactable - e.g. scrolling, clicking, etc.
If the [`modal`] ({environment:angularApiUrl}/interfaces/overlaysettings.html#modal) property is `true`, the element will be attached to the DOM foreground and an overlay blocked will wrap behind it, stopping propagation of all events:

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-scroll-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-scroll-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-scroll-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

## API References

* [IScrollStrategy] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html)
