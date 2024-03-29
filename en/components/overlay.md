---
title: Angular Overlay Service – Ignite UI for Angular | Infragistics
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
---

# Overlay
<p class="highlight">
The overlay service provides an easy and quick way to dynamically render content in the foreground of an app. The content to be rendered, also the way it renders (e.g. placement, animations, scroll and click behaviors) are highly configurable and able to match all of the possible scenarios. 
The overlay service is fully integrated in the toggle directive.
</p>
<div class="divider--half"></div>

## Angular Overlay Example


<code-view style="height: 350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" alt="Angular Overlay Example">
</code-view>

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
    ) {}
}

...
```

## Displaying Content

The overlay service can be used to dynamically display an `HTMLNode` or even an Angular Component by attaching it to the overlay DOM.

After a reference to the Overlay service is established, it can be used to dynamically show/hide content. For example, we can pass an Angular Component in the `attach` method. This will generate a unique ID, which we can pass to the `show` method to display the component. When displaying an Angular Component a second mandatory parameter `ViewContainerRef` should be passed in the `attach` method.

```typescript

// my-overlay-component.component.ts
import { MyDynamicComponent } from '../my-dynamic-component/my-dynamic-component.component';

@Component({...})
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
        private viewContainerRef: ViewContainerRef
    ) {}

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, this.viewContainerRef);
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

@Component({...})
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
  - `attach(component, viewContainerRef, settings?)`

The first parameter in both overloads is mandatory and represents the content that will be shown in the overlay. There are a couple of different scenarios how the content can be passed:
  - A component definition - When passing a component in as the first argument, the overlay service creates a new instance of that component and dynamically attaches its `ElementRef` to the `overlay` DOM. This method also accepts a second mandatory parameter `ViewContainerRef` which is a reference to the container where the created component's host view will be inserted.
  - An `ElementRef` to an existing DOM element (illustrated in the sample above) - Any view that is already rendered on the page can be passed through the overlay service and be rendered in the overlay DOM.

In both cases the [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method will:
  - Get the reference to the passed view from Angular
  - Detach the view from the DOM and leave an anchor in its place
  - Re-attach the view to the overlay using the provided [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) or falling back to the default overlay ones

Calling then [`show(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) will play the open animation, if there is any, and will show the attached content. Calling [`hide(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) will play close animation, if there is any, and will hide the attached content.

Finally calling [`detach(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#detach) method will re-attach the view back to its original location in the DOM. If a component was provided to the [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method calling [`detach(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#detach) will destroy the created instance.

<div class="divider--half"></div>

## Attaching Components
In the below demo, we can pass the [IgxCard](card.md#angular-card-example) component through the Overlay Service's [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method to generate an ID. Then we call the [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method with the provided ID to dynamically attach the card to the DOM in a modal container.



<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" >
</code-view>

<div class="divider--half"></div>

## Overlay Settings

The [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method also accepts an object of the [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) type, which configures the way the content is shown. If no such object is provided, the Overlay Service will use its default settings to render the passed content.

For example, if we want the content to be positioned relative to an element, we can pass a different [`target`]({environment:angularApiUrl}/interfaces/overlaysettings.html#target) and [`positioningStrategy`]({environment:angularApiUrl}/interfaces/overlaysettings.html#positioningStrategy) to the [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method, e.g. [`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html). In order to configure how the component is shown, we need to create an [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) object first:
```typescript
// my-overlay-component.component.ts
// import the ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
// import { ConnectedPositioningStrategy } from '@infragistics/igniteui-angular'; for licensed package
...
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, this.viewContainerRef, {
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

The [`IgxOverlayService.createAbsolutePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createAbsolutePositionSettings) and [`IgxOverlayService.createRelativePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createRelativePositionSettings) methods provide an easy way to create an [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) based on a predefined settings sets.

The [`IgxOverlayService.createAbsolutePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createAbsolutePositionSettings) method creates non-modal [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) with [`GlobalPositionStrategy`]({environment:angularApiUrl}/classes/globalpositionstrategy.html) or [`ContainerPositionStrategy`]({environment:angularApiUrl}/classes/containerpositionstrategy.html) in case the `outlet` parameter is provided. The `AbsolutePosition` enumeration defines the possible positions to choose from: `Center`, `Top` or `Bottom`. The default position is `Center`.

```typescript
const globalOverlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(AbsolutePosition.Top);
```

The [`IgxOverlayService.createRelativePositionSettings()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#createRelativePositionSettings) method creates [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) with [`AutoPositionStrategy`]({environment:angularApiUrl}/classes/autopositionstrategy.html), [`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) or [`ElasticPositionStrategy`]({environment:angularApiUrl}/classes/elasticpositionstrategy.html). Accepts target, position and strategy. The `target` is the attaching point or element for the component to show. The `position` is a `RelativePosition` enumeration with the following options: `Above`, `Below`, `Before`, `After` and `Default`. The `Default` option positions the element below the target, left aligned. The position strategy can be set through the `RelativePositionStrategy` enumeration, which default value is `Auto`.

```typescript
const targetElement = this.myAnchorButton.nativeElement;
const connectedOverlaySettings = IgxOverlayService.createRelativeOverlaySettings(
        targetElement,
        RelativePosition.Above,
        RelativePositionStrategy.Connected);
```

### Demo


<code-view style="height: 750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-preset-settings-sample" >
</code-view>


<div class="divider--half"></div>

## Hiding the Overlay

The [`hide(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) hides the overlay content. All of the elements rendered by the overlay service have a unique ID, assigned to them by the service. The [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method returns the identifier of the rendered content. To hide the content this ID needs to be passed to the overlay's [`hide(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) method. To hide all overlays [`hideAll()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hideAll) method could be called.

When rendered content is not needed anymore [`detach(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#detach) method should be called. This method removes the content from the overlay and, if applicable, re-attaches it to its original location in the DOM. [`detach(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#detach) method also accepts as mandatory parameter the ID generated from [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) method. To remove all the overlays [`detachAll()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#detachAll) method could be called.

We can modify the previously defined overlay method to not only show but also hide the overlay element
```typescript
// my-overlay-component.component.ts
// add an import for the definion of ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
// import { ConnectedPositioningStrategy } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class MyOverlayComponent implements OnDestroy {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    private _overlayShown = false; // Is the component rendered in the Overlay?

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public toggleOverlay() {
        if (!this._overlayShown) { // If the element is not visible, show it
            //  generate ID
            if (!this._overlayId) {
                this._overlayId = this.overlayService.attach(MyDynamicComponent, this.viewContainerRef, {
                    target: this.myAnchorButton.nativeElement,
                    positionStrategy: new ConnectedPositioningStrategy({
                        closeOnOutsideClick: false, // overlay will not close on outside clicks
                        modal: false // overlay content will not be rendered in a modal dialog
                    }) // The attach method returns an ID that can be used to reference the shown content
                });
            }

            this.overlayService.show(this._overlayId);
        } else {
            this.overlayService.hide(this._overlayId); // If element if visible, hide it
        }
        this._overlayShown = !this._overlayShown;
    }

    // finally detach overlay content
    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
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


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-2" >
</code-view>

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
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-overlay-theme)

## Additional Resources
* [Position Strategies](overlay-position.md)
* [Scroll Strategies](overlay-scroll.md)
* [Styling Topic](overlay-styling.md)
