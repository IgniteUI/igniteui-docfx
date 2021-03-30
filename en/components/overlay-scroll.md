---
title: Overlay Service - Scroll Strategies
_description: Explanation and example about the Overlay Service's IScrollStrategy interface and the classes that implement it.
---

# Scroll Strategies

The scroll strategy determines how the scrolling is handled in the provided `IgxOverlayService`. There are four scroll strategies:
1. **NoOperation** - does nothing. 
2. **Block** - the event is canceled and the component does not scroll with the window.
3. **Close** - uses a tolerance and closes an expanded component upon scrolling if the tolerance is exceeded.
4. **Absolute** - scrolls everything.

## Usage

Every scroll strategy has the following methods:
 - [`initialize`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html#initialize) - initializes the scroll strategy. It needs a reference of the document, the overlay service and the id of the component rendered
 - [`attach`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html#attach) - attaches the scroll strategy to the specified element or to the document
 - [`detach`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html#detach) - detaches the scroll strategy

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```
<div class="divider--half"></div>

### Getting Started
The scroll strategy is passed as a property in the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) parameter when the [`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method is called:
```typescript
// Initializing and using overlay settings
const overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new AbsoluteScrollStrategy(), //Passes the scroll strategy
    modal: true,
    closeOnOutsideClick: true
}
const overlayId = overlay.attach(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

To change the scrolling strategy, used by the overlay, override the [`scrollStrategy`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html) property of the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object passed to the overlay:
```typescript
// overlaySettings is an existing object of type OverlaySettings
// to override the scroll strategy
const newOverlaySettings = Object.assing({}, overlaySettings);
Object.assing(newOverlaySettings, {
    scrollStrategy: new CloseScrollStrategy()
})
overlay.show(overlayId, newOverlaySettings); 
```
<div class="divider--half"></div>

### Dependencies

To use the any of the scroll strategies, import it like this:

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```

### Scroll Strategies
The scroll strategies can be passed to the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object to determine how the overlay should handle scrolling.
The demo below illustrates the difference between the separate [`scrollStrategies`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html):

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-scroll-sample-2" >
</code-view>

<div class="divider--half"></div>

## Modal
The [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object also allows a boolean property ([`modal`]({environment:angularApiUrl}/interfaces/overlaysettings.html#modal)) to be passed. This controls how the overlay will be displayed:
- If the [`modal`]({environment:angularApiUrl}/interfaces/overlaysettings.html#modal) property is `false`, the element will be attached to the DOM foreground but everything will still be active and interactable - e.g. scrolling, clicking, etc.
- If the [`modal`]({environment:angularApiUrl}/interfaces/overlaysettings.html#modal) property is `true`, the element will be attached to the DOM foreground and an overlay blocker will wrap behind it, stopping propagation of all events:


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-scroll-sample-1" >
</code-view>

<div class="divider--half"></div>

## API References
* [IScrollStrategy]({environment:angularApiUrl}/interfaces/iscrollstrategy.html)

## Additional Resources
* [Overlay Main Topic](overlay.md)
* [Position strategies](overlay-position.md)
* [Styling Topic](overlay-styling.md)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)