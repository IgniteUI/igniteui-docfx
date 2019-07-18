---
title: Overlay Service
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
---

## Overlay
<p class="highlight">
The overlay service provides an easy and quick way to dynamically render content in the foreground of an app. The content to be rendered as well as the way it renders (e.g. placement, animations, scroll and click behaviors) are highly configurable and able to match all of the possible scenarios. 
The overlay service is fully integrated in the toggle directive.
</p>
<div class="divider--half"></div>

## Getting Started

To use the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) it needs to be imported in the component. `Inject` a reference to it in the component's constructor:
```typescript

import { Inject } from '@angular/core'
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

After a reference to the Overlay service is established, it can be used to dynamically show/hide content. For example, we can pass an Angular Component in the `attach` function. This will generate unique ID. We can pass then this ID to `show` function to display the component:

```typescript

// in my-overlay-component.component.ts
import { MyDynamicComponent } from '../my-dynamic-component/my-dynamic-component.component';

export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    ... 
    // a reference to the OverlayService is defined via @Inject in the constructor
    // under this.overlayService

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent);
        }
        this.overlayService.show(this._overlayId);
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

If we want to pass an already existing `ElementRef` from the page to the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html), we can do it as follows:

```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
  <button (click)="showInOverlay()">Show Overlay</button>
</div>
<div>
    <img #exampleImage width='200px' src='../assets/example.png' title='Click Me!'>
</div>
```

```typescript
// in my-overlay-component.component.ts
import { Inject, ViewChild } from '@angular/core'
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    @ViewChild('exampleImage', {read: ElementRef})
    private exampleImage: ElementRef;
    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(this.exampleImage);
        }
        this.overlayService.show(this._overlayId);
    }
}
```
<div class="divider--half"></div>

The overlay service [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) has two overloads:
  - `attach(element, settings?)`
  - `attach(component, settings?, moduleRef)`

The first parameter in both overloads is mandatory and represents the content that should be shown in the overlay. There are a couple of different scenarios how the content can be passed:
  - A component definition (illustrated in the sample above) - When passing a component in as the first argument, the overlay service creates a new instance of that component and dynamically attaches it to the `overlay` DOM. If `moduleRef` is provided the service will use the module's `ComponentFactoryResolver` and `Injector` when creating the `ComponentRef` instead of the root ones.
  - An `ElementRef` to an existing DOM element - Any view that is already rendered on the page can be passed through the overlay service and be rendered in the overlay DOM. Using this approach when [`show(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) is called, overlay will:
    - Get the reference to the passed view from Angular 
    - Detach the view from the DOM and leave an anchor in its place
    - Re-attach the view to the overlay, using the [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method settings or falling back to the default overlay settings
    - On close, will re-attach the view back to the original location in the DOM
<div class="divider--half"></div>

### Demo - Dynamic attach - Component
In the below demo, we can pass the [IgxCard](card.md#card-demo) through the overlay service [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method to optain an ID. Then we call [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method with provided ID to dynamically attach the card to the DOM in a modal container.


<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

### Configuring overlay settings

The overlay service [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method also accepts an object of the [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) type which configures the way the content is shown. If no such object is provided, the Overlay service will use its default settings to render the passed content.

For example, if we want the content to be positioned relative to an element, we can pass a different [`positioningStrategy`]({environment:angularApiUrl}/interfaces/overlaysettings.html#positionstrategy) for the overlay's [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method, e.g. [`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html). In order to configure how the component is shown, we need to first create an [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object:
```typescript
// in my-overlay-component.component.ts
// add an import for the definion of ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
...
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, {
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.myAnchorButton.nativeElement
                })
            });
        }
        this.overlayService.show(this._overlayId);
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

The [`IgxOverlayService.hide()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) method removes the content from the overlay and, if applicable, re-attaches it to the original location in the DOM. 

All of the elements rendered by the overlay service have a unique ID assigned to them by the service. The [`IgxOverlayService.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method returns the identifier of the rendered content. In order to remove content from the overlay, that ID needs to be passed to the overlay's [`hide()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) method.

We can modify the previously defined overlay method to not only show but also hide the overlay element
```typescript
// in my-overlay-component.component.ts
// add an import for the definion of ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
...
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    private _overlayShown = false; // Is the component rendered in the Overlay?

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public toggleOverlay() {
        if (!this._overlayShown) { // If the element is not visible, show it
            //  generate ID
            if (!this._overlayId) {
                this._overlayId = this.overlayService.attach(MyDynamicComponent, {
                    positionStrategy: new ConnectedPositioningStrategy({
                        target: this.myAnchorButton.nativeElement,
                        closeOnOutsideClick: false, // overlay will not close on outside clicks
                        modal: false // overlay content will not be rendered in a modal dialog
                    }) // The attach method returns an ID that can be used to reference the shown content
                });
            }

            this.overlayService.show(this._overlayId);
        } else { // If the element is visible, hide it
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

Using the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) parameter of the [`attach()`] ({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method, we can change how the content is shown - e.g. where the content is positioned, how the scroll should behave, is the container modal or not

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>


If *no* [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) are configured, the toggled element falls back to *default display settings*:
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
The [`IgxToggleDirective`]({environment:angularApiUrl}/classes/igxtoggledirective.html) is fully integrated with the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html). As such, the toggle's [`toggle()`]({environment:angularApiUrl}/classes/igxtoggledirective.html#toggle) method allows for custom overlay settings to be passed when toggling content.

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
        this.toggleDirective.toggle(overlaySettings)
    }
}
```
<div class="divider--half"></div>

## API

* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Assumptions and Limitations
If you show the overlay in an outlet, and if the outlet is child of element with transform, perspective or filter css set you will be not able to show modal overlay. The reason for this is when one of above mentioned css properties is set the browser creates a new containing block and the overlay is limited to this containing block, as described [here](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed).


## Additional Resources
* [Position strategies](overlay_position.md)
* [Scroll strategies](overlay_scroll.md)
