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

### Usage

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```

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
### Dependencies

To use the any of the scroll strategies import it like this:

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```

### API

#### Methods

##### IScrollStrategy

| Name            | Description                                                                     | Parameters |
|-----------------|---------------------------------------------------------------------------------|------------|
|initialize       | Initialize the strategy. Should be called once                                  |document, overlayService, id|
|attach           | Attaches the strategy                                                           |-           |
|detach           | Detaches the strategy                                                           |-           |
