---
title: Overlay Service
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
---

## Overlay Description
<p class="highlight">
The `IgxOverlayService` is fully integrated in the `IgxToggle` directive. When using the toggle directive, a developer can provide an optional `overlaySettings` parameter to the toggle's `toggle()` method in order to change the way the toggled content if rendered.
</p>
<div class="divider--half"></div>

## Overlay Demo
<div class="sample-container loading" style="height: 600px">
    <iframe id="overlay-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="overlay-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

If *no* `overlaySettings` are configured, the toggled element falls back to *default display settings*:
```typescript
defaultOverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };
```

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


 `OverlaySettings`

   | Name               | Description                                         | Type                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |positionStrategy    | Position strategy to use with this settings         | IPositionStrategy                   |
   |scrollStrategy      | Scroll strategy to use with this settings           | IScrollStrategy                     |
   |modal               | Set if the overlay should be in modal mode          | boolean                             |
   |closeOnOutsideClick | Set if the overlay should closed on outside click   | boolean                             |


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


 `IPositionStrategy`

   | Name            | Description                                                                     | Parameters |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |position         | Positions provided element                                                      |element     |


 `IScrollStrategy`

   | Name            | Description                                                                     | Parameters |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |initialize       | Initialize the strategy. Should be called once                                  |document, overlayService, id|
   |attach           | Attaches the strategy                                                           |-           |
   |detach           | Detaches the strategy                                                           |-           |


 `static methods`

   | Name                        | Description                                                         | Parameters |
   |-----------------------------|---------------------------------------------------------------------|------------|
   |getPointFromPositionsSettings| Calculates the point from which the overlay should start showing    |settings    |

### Events


`IgxOverlayService`

   | Name        | Description                        | Cancelable | Parameters |
   |-------------|------------------------------------|------------|------------|
   |onOpening    | Emitted on before overlay shows    | false      |            |
   |onOpened     | Emitted after overlay shows        | false      |            |
   |onClosing    | Emitted before overlay hides       | false      |            |
   |onClosed     | Emitted after  overlay hides       | false      |            |


## Assumptions and Limitations</a>
Up to now there are no known limitations.

## Additional Resources
* [Position strategies](overlay_position.md)
* [Scroll strategies](overlay_scroll.md)