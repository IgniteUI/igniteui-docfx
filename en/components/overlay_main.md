---
title: Overlay Service
_description: Provides a service which enables developers to position content above all other component/html content of the page. Comes with a robust API allowing for precise configuration of the service.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Overlay Service component
---

### Usage

The `IgxOverlayService` is fully integrated in the `IgxToggle` directive. When using the toggle directive, a developer can provide an optional `overlaySettings` parameter to the toggle's `toggle()` method in order to change the way the toggled content if rendered. If *no* `overlaySettings` are configured, the toggled element falls back to *default display settings*:
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


## <a name='assumptions-and-limitations'>4. Assumptions and Limitations</a>
Up to now there are no known limitations.


## <a name='tests'>5. Test Scenarios

### Automated

Test with several different fixed window sizes.

**I. Positioning Strategy**

1) **GlobalPositioningStrategy** (show components, by default, in the window center).
* igx-overlay is rendered on top of all other views/components (any previously existing html on the page) etc.
* igx-overlay covers the whole window 100% width and height.
* The shown component is inside the contend div, which is inside wrapper div as a last child.
* The shown component, by default, is in the center of igx-overlay (visible window).
* When adding more than one component to show in igx-overlay:
    - When adding a new instance of a component with the same options, it is rendered exactly on top of the previous one.
    - When adding a component near the visible window borders (left, right, up, down), it should be rendered, by default, in the center of igx-overlay (visible window) and no scrollbars should appear.
* If the shown component is bigger than the visible window, by default it should be centered and the corresponding scrollbars should appear.

2) **ConnectedPositioningStrategy** (show components based on a specified target (point or Html element), horizontal and vertical alignment, and horizontal and vertical starting diraction)
* igx-overlay is rendered on top of all other views/components (any previously existing html on the page) etc.             
* igx-overlay covers the whole window 100% width and height.
* The shown component is child element of the contend div, which is inside wrapper div.
* the shown component is positioned according to the options passed (target / alignment / starting position / animations).
* If using a ConnectedPositioningStrategy without passing options, the omitted default to (Window top left corner shown in bottom right direction).
* When adding more than one component to show in igx-overlay:
    - When adding a new instance of component with the same options, it is rendered exactly on top of the previous one.
    - When adding a new component it should be rendered where expected based on the options.
    - When adding a component near the visible window borders (left, right, up, down) it should be partially hidden and depending on the scroll strategy used:
        * for NoOpScrollStrategy: scrolling should not be affected in any way.
        * for CloseScrollStrategy: on a scroll the component should hide.
        * for BlockScrollStrategy: it should be partially hidden. When scrolling, no scrolling should happen.
        * for AbsoluteScrollStrategy: it should be partially hidden but can scroll it into view. Component persist state. (example: expanded DropDown remains expanded).

3) **AutoPositionStrategy** (fit the shown component into the visible window.)
* igx-overlay is rendered on top of all other views/components (any previously existing html on the page) etc.             
* igx-overlay covers the whole window 100% width and height.
* The shown component is inside  contend div, which is inside wrapper div.
* igx-overlay displays each shown component based on the options specified if the component fits into the visible window.
* The component repositioned and rendered correctly in the window even when the rendering options passed should result in otherwise a partially hidden component. No scrollbars should appear.
* igx-overlay margins should be rendered correctly
* igx-overlay displays each shown component in the browser’s visible window and tries to fit it in case of AutoPosition.
* When adding more than one component to show in igx-overlay:
    - When the options used fit the component in the window - adding a new instance of the component with the same options will render it on top of the previous one.
    - When the options used will not fit the component in the window and AutoPosition is used - adding a new instance of the component with the same options, will render it on top of the previous one.(For both scenarios when options used fit the component in the window and when AutoPosition is used to fit the component) 
* When adding a component like Menu that has a sub-menu near the visible window, upon opening the submenu, no scrollbar will appear but the submenus are rearranged in order to fit in the visible window. 
* If the width/height allows, the submenu should be show in the window and if not, it should be positioned in the window.

**II. Scroll Strategy**
1) **NoOperation**
* Does nothing. 

2) **Block**
* The component do not scroll with the window. The event is canceled. No scrolling happens.
* The component shown in igx-overlay do not change its state. For example, an expanded DropDown stays expanded during a scrolling attempt.  

3) **Close** (Uses a tolerance and closes an expanded component upon scrolling if the tolerance is exceeded.(example: DropDown or Dialog component collapse/closes after scrolling 10px for example.)
* Till tolerance scrolling happens.
* The component shown in igx-overlay do not change its state until it exceeds the scrolling tolerance set. 
* The component shown in igx-overlay changes its state when it exceeds the scrolling tolerance set (an expanded DropDown, Menu, DatePicker, etc. collapses).

4) **Absolute**
* Scrolls everything.
* Components persist open state.