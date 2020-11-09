---
title: Overlay Service
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
---

# Overlay
<p class="highlight">
The overlay service provides an easy and quick way to dynamically render content in the foreground of an app. The content to be rendered, also the way it renders (e.g. placement, animations, scroll and click behaviors) are highly configurable and able to match all of the possible scenarios. 
The overlay service is fully integrated in the toggle directive.
</p>
<div class="divider--half"></div>

## Demo

<div class="sample-container loading" style="height: 350px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

## Getting Started

First we need to import the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) in the component and `inject` a reference to it in the component's constructor:
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

## Displaying Content

The overlay service can be used to dynamically display an `HTMLNode` or even an Angular Component by attaching it to the overlay DOM.

After a reference to the Overlay service is established, it can be used to dynamically show/hide content. For example, we can pass an Angular Component in the `attach` method. This will generate a unique ID, which we can pass to the `show` method to display the component:

```typescript

// my-overlay-component.component.ts
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
<!-- my-overlay-component.component.html -->
<div class='content'>
...
    <button (click)="showInOverlay()">Show Overlay</button>
</div>

```

If we want to pass an already existing `ElementRef` from the page to the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html), we can do it as follows:

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
    <button (click)="showInOverlay()">Show Overlay</button>
</div>
<div>
    <img #exampleImage width='200px' src='../assets/example.png' title='Click Me!'>
</div>
```

```typescript
// my-overlay-component.component.ts
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

The Overlay Service's [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method has two overloads:
  - `attach(element, settings?)`
  - `attach(component, settings?, moduleRef?)`

The first parameter in both overloads is mandatory and represents the content that will be shown in the overlay. There are a couple of different scenarios how the content can be passed:
  - A component definition - When passing a component in as the first argument, the overlay service creates a new instance of that component and dynamically attaches it to the `overlay` DOM. If `moduleRef` is provided the service will use the module's `ComponentFactoryResolver` and `Injector` when creating the `ComponentRef` instead of the root ones.
  - An `ElementRef` to an existing DOM element (illustrated in the sample above) - Any view that is already rendered on the page can be passed through the overlay service and be rendered in the overlay DOM. Using this approach when [`show(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) is called, overlay will:
    - Get the reference to the passed view from Angular 
    - Detach the view from the DOM and leave an anchor in its place
    - Re-attach the view to the overlay, using the [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method settings or falling back to the default overlay settings
    - On close, it will re-attach the view back to it's original location in the DOM
<div class="divider--half"></div>

## Attaching Components
In the below demo, we can pass the [IgxCard](card.md#card-demo) component through the Overlay Service's [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method to generate an ID. Then we call the [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method with the provided ID to dynamically attach the card to the DOM in a modal container.


<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

## Overlay Settings

The [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method also accepts an object of the [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) type, which configures the way the content is shown. If no such object is provided, the Overlay Service will use its default settings to render the passed content.

For example, if we want the content to be positioned relative to an element, we can pass a different [`target`]({environment:angularApiUrl}/interfaces/overlaysettings.html#target) and [`positioningStrategy`]({environment:angularApiUrl}/interfaces/overlaysettings.html#positionstrategy) to the [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method, e.g. [`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html). In order to configure how the component is shown, we need to create an [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object first:
```typescript
// my-overlay-component.component.ts
// import the ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
...
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, {
                target: this.myAnchorButton.nativeElement,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
        this.overlayService.show(this._overlayId);
    }
}
```
```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="showInOverlay()">Show Overlay</button>
</div>
```
Clicking on the button will now show `MyDynamicComponent` positioned relative to the button.

## Preset Overlay Settings

The [`IgxOverlayService.createAbsolutePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createabsolutepositionsettings)] and [`IgxOverlayService.createRelativePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createrelativepositionsettings)] methods provide an easy way to create an [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) based on a predefined settings sets.

The [`IgxOverlayService.createAbsolutePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createabsolutepositionsettings)] method creates non-modal [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) with [`GlobalPositionStrategy`]({environment:angularApiUrl}/classes/globalpositionstrategy.html) or [`ContainerPositionStrategy`]({environment:angularApiUrl}/classes/containerpositionstrategy.html) in case the `outlet` parameter is provided. The `AbsolutePosition` enumeration defines the possible positions to choose from: `Center`, `Top` or `Bottom`. The default position is `Center`.

```typescript
const globalOverlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(AbsolutePosition.Top);
```

The [`IgxOverlayService.createRelativePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createrelativepositionsettings)] method creates [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) with [`AutoPositionStrategy`]({environment:angularApiUrl}/classes/autopositionstrategy.html), [`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) or [`ElasticPositionStrategy`]({environment:angularApiUrl}/classes/elasticpositionstrategy.html). Accepts target, position and strategy. The `target` is the attaching point or element for the component to show. The `position` is a `RelativePosition` enumeration with the following options: `Above`, `Below`, `Before`, `After` and `Default`. The `Default` option positions the element below the target, left aligned. The position strategy can be set through the `RelativePositionStrategy` enumeration, which default value is `Auto`.

```typescript
const targetElement = this.myAnchorButton.nativeElement;
const connectedOverlaySettings = IgxOverlayService.createRelativeOverlaySettings(
        targetElement,
        RelativePosition.Above,
        RelativePositionStrategy.Connected);
```

### Demo

<div class="sample-container loading" style="height: 750px">
    <iframe id="overlay-preset-settings-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-preset-settings-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-preset-settings-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-preset-settings-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>

<div class="divider--half"></div>

## Hiding the Overlay

The [`IgxOverlayService.hide()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) method removes the content from the overlay and, if applicable, re-attaches it to it's original location in the DOM. 

All of the elements rendered by the overlay service have a unique ID, assigned to them by the service. The [`IgxOverlayService.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method returns the identifier of the rendered content. To remove content from the overlay, that ID needs to be passed to the overlay's [`hide()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) method.

We can modify the previously defined overlay method to not only show but also hide the overlay element
```typescript
// my-overlay-component.component.ts
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
                    target: this.myAnchorButton.nativeElement,
                    positionStrategy: new ConnectedPositioningStrategy({
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
<!-- my-overlay-component.component.html -->
<div class='content'>
...
    <button #myAnchorButton (click)="toggleOverlay()">Toggle Overlay</button>
</div>
```
## Attaching Settings

Using the [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) parameter of the [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method, we can change how the content is shown - e.g. where the content is positioned, how the scroll should behave and if the container is modal or not

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>


If **no** [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) are configured, the toggled element gets the **default display settings**:

```typescript
defaultOverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: true,
    closeOnOutsideClick: true,
    closeOnEscape: false
};
```
<div class="divider--half"></div>

## Integration with igxToggle 
The [`IgxToggleDirective`]({environment:angularApiUrl}/classes/igxtoggledirective.html) is fully integrated with the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html). As such, the Toggle Directive's [`toggle()`]({environment:angularApiUrl}/classes/igxtoggledirective.html#toggle) method allows for custom overlay settings to be passed when toggling the content.

An example of how to pass configuration settings to the toggle's method is shown below:
```html
<!-- In example.component.html -->
<div>
    <button igxToggle (click)="callToggle()">Click me!</button>
    <div [style.visibility]="collapsed ? 'hidden ' : 'visible'">
        This content is toggle-able!
    </div>
</div>
```

```typescript
// example.component.ts
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

## Assumptions and Limitations
If you show the overlay in an outlet, and if the outlet is a child of an element with transform, perspective or filter set in the CSS you won't be able to show the modal overlay. The reason for this is if one of the above mentioned CSS properties is set, the browser creates a new containing block and the overlay is limited to this containing block, as described [here](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed).

## API References
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Additional Resources
* [Position Strategies](overlay-position.md)
* [Scroll Strategies](overlay-scroll.md)
* [Styling Topic](overlay-styling.md)
