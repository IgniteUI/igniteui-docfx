---
title: Overlay Service
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
---

## Overlay
<p class="highlight">
The overlay service provides an easy and quick way to dynamically render content in the foreground of an app. The content to be rendered as well as the way it is renders (e.g. placement, animations, scroll and click behaviors) are highly configurable and able to match all of the possible scenarios. 
The overlay service is fully integrated in the toggle directive.
</p>
<div class="divider--half"></div>

## Getting Started

To use the `IgxOverlayService` it needs to be imported in the component. `Inject` a reference to it in the component's `constructor`:
```typescript
import { IgxOverlayService } from `igniteui-angular`;

...

export class MyOverlayComponent {
    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    )
}

...
```

### Displaying overlay content

The overlay service can be used to dynamically display a `HTMLNode` or even an Angular Component by attaching it to the overlay DOM.

After a reference to the Overlay service is established, it can be used to dynamically show/hide content. For example, we can pass an Angular Component in the show function:

```typescript

// in my-overlay-component.component.ts
import { MyDynamicComponent } from './my-dynamic-component.component.ts';

export class MyOverlayComponent {

    ... 
    // a reference to the OverlayService is defined via @Inject in the constructor
    // under this.overlayService

    public showInOverlay() {
        this.overlayService.show(MyDynamicComponent);
    }
}
```

```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
...
<button (click)="showInOverlay()">Show Overlay</button>
</div>

```
<div class="divider--half"></div>

The overlay service `show()` method accepts 2 arguments, the first one being the content that should be rendered in the overlay. There are a couple of different scenarios how the content can be passed:
  - A component definition (illustrated in the sample above) - When passing a component in as the first argument, the overlay service creates a new instance of that component and dynamically attaches it to the `overlay` DOM.
  - An existing piece of DOM - Any view that is already rendered on the page can be passed through the overlay service and be rendered in the overlay DOM. Using this approach will:
    - Get the reference to the passed view from Angular 
    - Detach the view from the DOM and leave an anchor in its place
    - Re-attach the view to the overlay, using the `show()` method settings or falling back to the default overlay settings
    - On close, will re-attach the view back to the original location in the DOM
  - A newly created HTML node - for instance, an HTMLElement created by `document.createElement()` can be passed to the `show()` method an be dynamically created in the overlay DOM.
<div class="divider--half"></div>

### Demo - Dynamic attach - Component
In the below demo, we can pass the IgxCard [demo](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html#card-demo) through the overlay service `show()` method to dynamically attach it to the DOM in a modal container.


<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

### Configuring overlay settings

The overlay service `show()` method also accepts an object of the `OverlaySettings` type which configures the way the conent is shown. If no such object is provided, the Overlay service will use its default settings to render the passed content.

For example, if we want the content to be positioned relative to an element, we can pass a different `positioningStrategy` for the overlay's `show()` method, e.g. `ConnectedPositioningStrategy`. In order to configure how the component is shown, we need to first create an `OverlaySettings` object:
```typescript
// in my-overlay-component.component.ts
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public showInOverlay() {
        this.overlayService.show(MyDynamicComponent, {
            positionStrategy: new ConnectedPositioningStrategy({ target: this.myAnchorButton })
        });
    }
}
```
```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="showInOverlay()">Show Overlay</button>
</div>

```
Clicking on the button will now show `MyDynamicComponent` positioned relative to the button.
<div class="divider--half"></div>

### Hiding the overlay

The `IgxOverlayService.hide()` method removes the content from the overlay and, if applicable, re-attaches it to the original location in the DOM. 

All of the elements rendered by the overlay service have a unique ID assigned to them by the service. The `IgxOverlayService.show()` method returns the identifier of the rendered content. In order to remove content from the overlay, that ID needs to be passed to the overlay's `hide()` method.

We can modify the previously defined overlay method to not only show but also hide the overlay element
```typescript
// in my-overlay-component.component.ts
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    private _overlayShown = false; // Is the component rendered in the Overlay?

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public toggleOverlay() {
        if (!this._overlayShown) { // If the element is not visible, show it
            this._overlayId = this.overlayService.show(MyDynamicComponent, {
                positionStrategy: new ConnectedPositioningStrategy({ target: this.myAnchorButton })
            }); // The show method returns an ID that can be used to reference the shown content
        } else { // If the element is not visible, hide it
            this.overlayService.hide(this._overlayId); // Find and remove the component from the overlay container
        }
        this._overlayShown = !this._overlayShown;
    }
}
```
```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="toggleOverlay()">Toggle Overlay</button>
</div>
```
### Demo - Dynamic attach - Settings

Using the `overlaySettings` parameter of the `show()` method, we can change how the content is shown - e.g. where the content is positioned, how the scroll should behave, is the container modal or not

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-sample-main-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>


If *no* `overlaySettings` are configured, the toggled element falls back to *default display settings*:
```typescript
defaultOverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };
```
<div class="divider--half"></div>

### Integration with igxToggle 
The `IgxToggleDirective` is fully integrated with the `IgxOverlayService`. As such, the toggle's `toggle()` method allows for custom overlay settings to be passed when toggling content.

An example of how to pass configuration settings to the toggle's method is shown below:
```html
<!-- In example.component.html -->
<div class='example-div--container' style='width: 400px; height; 120px'>
    <button igxToggle (click)="callToggle()" class='example-div--button__initial'>Click me!</button>
    <div [class]="collapsed ? 'hidden ' : 'exmaple-div--toggleElement'" style='width: 100%; height: 100%;'>
        This content is toggle-able!
    </div>
</div>
```

```typescript
// In example.component.ts
@Component({
    selector: `example-component`,
    template: `example.component.html`
})
export class ExampleComponent {
    @ViewChild(IgxToggleDirective)
    private toggleDirective: IgxToggleDirective;

    public get collapsed(): boolean {
        return this.toggleDirective.collapsed;
    }

    public callToggle(): void {
        const overlaySettings: OverlaySettings = {
            positionStrategy: new AutoPositionStrategy(),
            scrollStrategy: new BlockScrollStrategy(),
            modal: true,
            closeOnOutsideClick: false
        }
        this.toggleDirective.toggle(true, overlaySettings)
    }
}
```
<div class="divider--half"></div>

## API

### Properties

 `IPositionStrategy`

   | Name               | Description                                         | Type                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |positionSettings    | Settings to apply to this position strategy         | PositionSettings                    |
<div class="divider"></div>

 `OverlaySettings`

   | Name               | Description                                         | Type                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |positionStrategy    | Position strategy to use with this settings         | IPositionStrategy                   |
   |scrollStrategy      | Scroll strategy to use with this settings           | IScrollStrategy                     |
   |modal               | Set if the overlay should be in modal mode          | boolean                             |
   |closeOnOutsideClick | Set if the overlay should closed on outside click   | boolean                             |
<div class="divider--half"></div>

 `PositionSettings`

   | Name               | Description                                         | Type                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |target              | Attaching target for the component to show          | Point | HTMLElement                 |
   |horizontalDirection | Direction in which the component should show        | HorizontalAlignment                 |
   |verticalDirection   | Direction in which the component should show        | VerticalAlignment                   |
   |horizontalStartPoint| Target's starting point                             | HorizontalAlignment                 |
   |verticalStartPoint  | Target's starting point                             | VerticalAlignment                   |
   |openAnimation       | Animation applied while overlay opens               | AnimationReferenceMetadata          |
   |closeAnimation      | Animation applied while overlay closes              | AnimationReferenceMetadata          |

### Methods

`IgxOverlayService`

   | Name            | Description                                                                     | Parameters |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |show             | Shows the provided component on the overlay                                     |component, id?, overlaySettings?|
   |hide             | Remove the provided native element of for the component with provided id        |id          |
   |hideAll          | Remove the all native elements and hides the overlay                            |-           |
   |reposition       | Repositions the native element of the component with provided id                |id          |
<div class="divider"></div>

 `IPositionStrategy`

   | Name            | Description                                                                     | Parameters |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |position         | Positions provided element                                                      |element     |
<div class="divider"></div>

 `IScrollStrategy`

   | Name            | Description                                                                     | Parameters |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |initialize       | Initialize the strategy. Should be called once                                  |document, overlayService, id|
   |attach           | Attaches the strategy                                                           |-           |
   |detach           | Detaches the strategy                                                           |-           |
<div class="divider"></div>

 `static methods`

   | Name                        | Description                                                         | Parameters |
   |-----------------------------|---------------------------------------------------------------------|------------|
   |getPointFromPositionsSettings| Calculates the point from which the overlay should start showing    |settings    |
<div class="divider"></div>

### Events


`IgxOverlayService`

   | Name        | Description                        | Cancelable | Parameters |
   |-------------|------------------------------------|------------|------------|
   |onOpening    | Emitted on before overlay shows    | false      |            |
   |onOpened     | Emitted after overlay shows        | false      |            |
   |onClosing    | Emitted before overlay hides       | false      |            |
   |onClosed     | Emitted after  overlay hides       | false      |            |
<div class="divider--half"></div>

## Assumptions and Limitations</a>
Up to now there are no known limitations.

## Additional Resources
* [Position strategies](overlay_position.md)
* [Scroll strategies](overlay_scroll.md)