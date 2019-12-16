---
title: Angular Select | Material Select | IgniteUI for Angular | Infragistics
_description: Learn how to configure an Angular select. The Material select provides an input with Angular dropdown list allowing single item selection of the angular combobox.
_keywords:  angular select, igniteui for angular, infragistics
---

## Select
The Ignite UI for Angular Select component allows a single item selection from a dropdown list of items with specialized positioning. This Material based form control offers quick items list navigation, including selection based on a single or multiple characters match. 

## Simple Select Demo
<div class="sample-container loading" style="height: 430px;">
    <iframe id="select-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>


## Usage
To get started with the [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html), first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

Then you need to import the `IgxSelectModule`:
```typescript
// app.module.ts

...
import { IgxSelectModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSelectModule],
    ...
})
export class AppModule {}
```

Then all that is needed is to define an `<igx-select>` and several items. We use an [`IgxSelectItemComponent`]({environment:angularApiUrl}/classes/igxselectitemcomponent.html) to display the items that `igx-select` operates on.
```html
<!-- define items declaratively -->
<igx-select>
    <label igxLabel>Simple Select</label>
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
    <igx-select-item value="Mango">Mango</igx-select-item>
</igx-select>
```

Another way to do it would be to use a collection of the items that we want to display with the [ngForOf](https://angular.io/api/common/NgForOf) directive:

```typescript
public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
```

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Simple Select</label>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
Additionally, the above sample illustrates two-way data-binding via `ngModel`. What is more, you can use the Select component in [`Angular Forms`](#select-in-angular-forms).


By default, the select component will use the selected item's element `innerText` to be displayed in the input field. In cases with more complex item templates, you can explicitly set the `text` property to specify what to display in the input field when this item is selected. For example:

```html
<igx-select>
    <igx-select-item *ngFor="let item of items" [value]="item.value" [text]="item.text">
        {{item.text}} ( {{item.count}} )
    </igx-select-item>
</igx-select>

```
To see `text` property in action with a bit more complicated item template, check the below grouping sample [Select with Groups](#select-with-groups).


### Label, Prefix and Suffix
The Select supports the following directives applicable to the [Input Group](input_group.md):

- `igxLabel` - No need to set the `for` property, as linking with the Select input is handled automatically via `aria-labelledby`.
- `igx-prefix`/`igxPrefix`
- `igx-suffix`/`igxSuffix` - Note the built-in toggle button suffix will always be displayed last.

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Pick a fruit</label>
    <igx-prefix>
        <span class="bio-prefix">BIO</span>
    </igx-prefix>
    <igx-suffix *ngIf="selected">
        <igx-icon (click)="clearSelection($event)">clear</igx-icon>
    </igx-suffix>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

<div class="sample-container loading" style="height: 350px;">
    <iframe id="select-input-directives-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-input-directives" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-input-directives-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

> [!NOTE]
If no [`placeholder`]({environment:angularApiUrl}/classes/igxselectcomponent.html#placeholder) is specified for the Select component and there is no selection made, the `igxLabel` will transition and appear where you would expect the placeholder to be.

### Templating toggle button
The default arrow can be replaced by a nested template marked with the `igxSelectToggleIcon` directive or setting a `TemplateRef` to the [`toggleIconTemplate`]({environment:angularApiUrl}/classes/igxselectcomponent.html#toggleicontemplate) property.
```html
<igx-select #select>
    ...
    <ng-template igxSelectToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'add_circle' : 'add_circle_outline'}}</igx-icon>
    </ng-template>
    ...
<igx-select>
```

## Features
### Select Actions
#### Open
Focusing with the keyboard on `igx-select` will not cause it to open.
With focus set on `igx-select` you can use `Space`, `Enter` or `ALT + Up/Down Arrow` keys to open it.
- `igx-select` will also open if you left click with your mouse on it or if you left click on the drop-down button.

#### Close
When the `igx-drop-down` is opened, you can close it by doing one of the following:
- select an item from the drop-down list
- press `ALT + UP/Down Arrow` keys
- press any of `Enter`, `Space`, `Esc` or `Tab` keys
- It is also possible to close the drop-down by left-clicking with the mouse on the drop-down button or if you left-click outside of the drop-down list (input blur).

### Keyboard Navigation
`igx-select` has intuitive keyboard navigation that makes it easy to select items without having to touch the mouse.

- When the drop-down list is opened you can navigate through the items using the `Up/Down Arrow` keys, as long as there are items left in the direction you are trying to navigate to. Furthermore, pressing `Home` or `End` will navigate to the first and last items in the list.
- When the drop-down list is opened you can iteratively navigate through all items that begin with a certain character, by pressing the corresponding key, this is *case insensitive* and will cause the focus to spin between all matches.
- When the drop-down list is opened you can navigate to a *specific* item by rapidly typing in the first few characters of the item you wish to go to.
    - *Note that the speed at which you type in matters.*
- When the drop-down list is opened, you can navigate through the items using the `Home` and `End` keys.
- When the drop-down list is opened, navigation with `Up/Down Arrow` keys starts from the selected item, if any. Otherwise, it starts from the first item in the list.
- When the drop-down list is closed you can cycle between its items using the `Up/Down Arrow` keys.
- When the drop-down list is closed you can also navigate through all items that begin with a specific character, it works the same as if it was opened.
- When the drop-down list is closed you can also navigate to a *specific* item by rapidly typing in its first few characters. The behavior is the same as when the drop-down is opened.
- When the drop-down is closed character key navigation is also case insensitive.
- When the drop-down is closed character key navigation does not change selection when pressing characters that have no matching item(s).

### Item Selection
An item from the drop-down list can be selected by:
- Left mouse click.
- `Enter` key when the respective item is focused.
- `Space` key when the respective item is focused.
- Setting the value property in the code.
- Setting the item's `selected` property.
- The *first* enabled item in the drop-down list is focused if there is no selected item.
- The input box is populated with the selected item's value.
- The input box's text is updated when the selected item changes.
- The input box is not populated with the text of an item that is focused but not selected.
- No text is appended to the input box when no item is selected and value is not set or does not match any item.
- Selection is cleared when setting the value property to a non-existing item.
- Disabled items are not selectable.
- Selection is removed if the selected option gets deleted.
- When there are items with duplicated values, the first one gets selected.

>[!NOTE]
> `igx-select` supports a *single* selection of items only.

### Event emitting
Since `igx-select` extends `igx-drop-down`, it also makes good use of its events which include:

#### Opened event
- Emitted when the drop-down is fully opened.

You can make use of the `onOpened` event like so:
```html
<igx-select (onOpened)="handleOpened($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

#### Opening/Closing events
- Emitted on:
    - input click
    - select toggle button click (app scenario)
- Triggered on key interaction

 The `onOpening` and `onClosing` events are fired *before* the animation finishes playing, i.e. before the drop-down is fully **opened** or **closed**. They can also be canceled by setting the `cancel` property to `true` in the event handler function.

```html
<igx-select (onOpening)="handleOpening($event)" (onClosing)="handleClosing($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

#### Selection event
- Emitted when the item selection is changing (when you attempt to select a new item). It is emitted *before* the selection completes, i.e. before the new item is selected.
- Emitted when an item is selected by a mouse click.
- Emitted when an item is selected by `Enter`, `Space` keys.
- Emitted when setting the value property.
- Emitted when setting an item's `selected` property.

```html
<igx-select (onSelection)="handleSelection($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
    <igx-select-item [value]="Pear">Pear</igx-select-item>
</igx-select>
```

#### Closed event
- Emitted on clicking outside of the component, when the drop-down is fully closed.

You can make use of the `onClosed` event like so:
```html
<igx-select (onClosed)="handleClosed($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

You put all your *handler* functions inside of your *class*:
```typescript
export class MyClass {
    /* --- */
    private handleOpening(event: CancelableEventArgs): void {
        // do something
    }
    /* --- */
    private handleSelection(event: ISelectionEventArgs): void {
        // do something
    }
    /* --- */
    private handleClosed(event: any): any {
        // do something
        // return something
    }
    /* --- */
    private handleClosing(event: CancelableEventArgs): void {
        // cancel the closing event
        event.cancel = true;
    }
    /* --- */
}
```
- Please note that the above examples are for demonstration purposes only and are not meant to abide by any code standards.

### Positioning Strategy
`igx-select` has its own positioning strategy called the `SelectPositioningStrategy`.
It extends the [*ConnectedPositioningStrategy*]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) and allows `igx-select` to position its drop-down list in different ways, relative to the input field. This means that the drop-down will always position itself so that the text in the input is matched by the selected item's text.

In the following example we are defining custom overlay settings using the `SelectPositioningStrategy` so you first have to import it alongside the [*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html):
```typescript
import { SelectPositioningStrategy, OverlaySettings } from 'igniteui-angular';
```

From there you have to initialize an [*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html) object and pass in the `SelectPositioningStrategy`. And finally, in the positioning strategy's constructor, you pass in a [*ViewChild*](https://angular.io/api/core/ViewChild) that references the `IgxSelectComponent` from your template.

All of it looks like this:
```typescript
@ViewChild(IgxSelectComponent)
public select: IgxSelectComponent;

public customOverlaySettings: OverlaySettings = {
    positionStrategy: new SelectPositioningStrategy(
        this.select
    ),
    scrollStrategy: new AbsoluteScrollStrategy()
};
```
As you can see there is also a `scrollStrategy` property that is present in the `customOverlaySettings` object. This ensures that the scrolling functionality of the drop-down works as expected. The scroll will appear every time the total height of all items in the list exceeds the drop-down's height.

Another thing worth mentioning is that `igx-select` uses the `SelectPositioningStrategy` by default.
> You can pass a [variety of positioning strategies]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) to the `positionStrategy` property.

### Select With Groups
<div class="sample-container loading" style="height: 470px;">
    <iframe id="select-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-2" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

To help visually separate item groups, select component supports item grouping by wrapping items in an `<igx-select-item-group>`.
This works best with hierarchical data that can be iterated to declare the components. In the following example, each group has a `label` and a collection of `items`:
```typescript
    public greengrocery: Array<{ label: string, items: Array<{ type: string, origin: string }> }> = [
            { label: "Fruits", items:[
                    { type: "Apple", origin: "local" },
                    { type: "Orange", origin: "import" },
                    { type: "Banana", origin: "import"}
                ]
            },
            { label: "Vegetables", items: [
                    { type: "Cucumber", origin: "local" },
                    { type: "Potato", origin: "import" },
                    { type: "Pepper", origin: "local" }
                ]
            }
        ];
```

Then in your template file you can iterate over the greengrocery objects and access their items accordingly:
```html
<igx-select>
    <igx-select-item-group *ngFor="let group of greengrocery" [label]="group.label">
        <igx-select-item *ngFor="let item of group.items" [value]="item.type" [text]="item.type">
            {{item.type}}
            <igx-icon title="Local product" class="icon" color="green" *ngIf="item.origin === 'local';else templateImport">local_shipping</igx-icon>
            <ng-template #templateImport>
                <igx-icon title="Import product" class="icon" color="orange">flight</igx-icon>
            </ng-template>
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```

### Select Header & Footer
<div class="sample-container loading" style="height: 610px;">
    <iframe id="select-header-footer-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-header-footer" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-header-footer-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

Currently, there are no default header and footer templates for the `igxSelect` component. However, you can define own header AND/OR footer template and mark it respectively with `IgxSelectHeaderDirective` or `IgxSelectFooterDirective`. As these are custom templates, you should define the styling as well.

In this example, there are both header and footer ng-templates defined. In the header there is a basic filtering implemented via [`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html). The footer includes static summary of all of the items based on a delivery method.

```html
    <igx-select>
        <label igxLabel>Pick your fruit</label>
            <igx-select-item *ngFor="let fruit of fruits" [value]="fruit.type" [text]="fruit.type" [ngSwitch]="fruit.delivery">
                {{fruit.type}}
                <igx-icon *ngSwitchCase="'flight'">flight</igx-icon>
                <igx-icon *ngSwitchCase="'train'">train</igx-icon>
                <igx-icon *ngSwitchCase="'boat'">directions_boat</igx-icon>
            </igx-select-item>
        <ng-template igxSelectHeader>
            <div class="custom-select-header">
                <span class="sample-template-heading">DELIVERY METHOD</span>
                <igx-buttongroup (click)="filter($event.target.title)">
                        <button igxButton title="flight"><igx-icon title="flight">flight</igx-icon></button>
                        <button igxButton title="train"><igx-icon title="train">train</igx-icon></button>
                        <button igxButton title="boat"><igx-icon title="boat">directions_boat</igx-icon></button>
                </igx-buttongroup>
            </div>
        </ng-template>
        <ng-template igxSelectFooter>
            <div class="custom-select-footer">
                <span class="sample-template-heading">TOTAL</span>
                <div class="sample-template-icons">
                    <span class="sample-template-icons__item">
                        <igx-icon title="flight" [class.important-icon]="selected ==='flight'">flight</igx-icon>
                        {{flightCount}}
                    </span>
                    <span class="sample-template-icons__item">
                        <igx-icon title="train" [class.important-icon]="selected === 'train'">train</igx-icon>
                        {{trainCount}}
                    </span>
                    <span class="sample-template-icons__item">
                        <igx-icon title="boat" [class.important-icon]="selected  === 'boat'">directions_boat</igx-icon>
                        {{boatCount}}
                    </span>
                </div>
            </div>
        </ng-template>
    </igx-select>
```

### Select In Angular Forms
The `Select` component supports all of the form directives from the core FormsModule [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. The following example illustrates the use of the `required` validator in a Template-driven Form.

Template-driven form example:
```html
<form>
    <igx-select [(ngModel)]="selected" required>
        <label igxLabel>Pick a fruit</label>
        <igx-select-item *ngFor="let fruit of fruits" [value]="fruit">
            {{item}}
        </igx-select-item>
    </igx-select>
</form>
```

Since we are using two-way binding, your class should look something like this:
```typescript
export class MyClass {
    public fruits: string[] = ["Orange", "Apple", "Banana", "Mango"];
    public selected: string = "Apple";
}
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="select-form-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-form" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-form-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

> [!NOTE]
In order to see the `required` asterisk `*` as well, there has to be a label set.

### Select With Custom Overlay Settings
With `igx-select` you are not bound to use any of the [*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html) that we provide, instead you may create settings of your own and pass them to it.

<div class="sample-container loading" style="height: 260px;">
    <iframe id="select-sample-4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-4" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

To do this you first define your template like so:
```html
<igx-select [overlaySettings]="customOverlaySettings">
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>
```
- Where the `overlaySettings` property is bound to your custom settings.

Inside of your class, you would have something along the lines of:
```typescript
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public select: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana", "Mango", "Tomato"];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            target: this.select.inputGroup.element.nativeElement,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```
You can see that we create a [*PositionSettings*]({environment:angularApiUrl}/interfaces/positionsettings.html) object that is directly passed to our [*ConnectedPositioningStrategy*]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html), it is not required to do it, but since we want to define a custom positioning, we use them to override the strategy's default settings.

- You can set all settings inside of the [*ngOnInit*](https://angular.io/api/core/OnInit) hook and this will automatically affect your template upon the component's generation.

> Note that you can also pass in a customized [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) object to the `igx-select`'s open function.  

With your template looking like this:
```html
<igx-select>
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>

<button (click)="onClick($event)"></button>
```
Your class should look something like this:
```typescript
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.select.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```
- We should mention that if you pass the custom settings both as an argument in the `open` function as well as into the template, `igx-select` will use the ones provided *in the `open` function*. However, if you bind the settings to an internal event, such as `onOpening` or `onOpened` then `igx-select` will use the settings that are provided in the template.

## Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the **igx-select** appearance. 
Since `igx-select` extends `igx-drop-down`, it also makes good use of its existing `igx-drop-down` styling, so you can directly refer to the [igx-drop-down styling guide](drop_down.md#styling) for details.
On top of that, `IgxSelect` includes an `IgxInputGroup` as well, so any styling to the input-group will affect the `IgxSelect` component. You can refer to [igx-input-group styling guide](input_group.md#styling) for details.

### Code snippets
We are going to use the following:
```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
$my-primary-color:#FFC314;
$my-secondary-color: #7344df;
$my-info-color: #ffffff;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);

$custom-select-theme: igx-drop-down-theme(
    $background-color: igx-color($my-color-palette, "secondary", 100),
    $header-text-color: igx-color($my-color-palette, "secondary", 600),
    $item-text-color: igx-color($my-info-color, "info"),

    $selected-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-item-text-color: igx-color($my-color-palette, "info"),
    $selected-hover-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-hover-item-text-color: igx-color($my-color-palette, "info"),
    $selected-focus-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-focus-item-text-color: igx-color($my-color-palette, "info"),

    $focused-item-background: igx-color($my-color-palette, "secondary", 300),
    $focused-item-text-color: igx-color($my-color-palette, "info"),

    $hover-item-background: igx-color($my-color-palette, "info"),
    $hover-item-text-color: igx-color($my-color-palette, "secondary", 600)
);

// Pass our custom-select-theme to the `igx-drop-down` mixin
    @include igx-drop-down($custom-select-theme);
```

> [!NOTE]
> The [**IgxSelect**]({environment:angularApiUrl}/classes/igxselectcomponent.html) component uses [IgxOverlay](overlay_main.md) to hold and display the `igx-select-items` list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check the [`IgxOverlay styling guide`](overlay_styling.md).

### Demo
<div class="sample-container loading" style="height:450px">
    <iframe id="select-styling-iframe" src='{environment:demosBaseUrl}/data-entries/select-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

## API Reference 
[**IgxSelectComponent**]({environment:angularApiUrl}/classes/igxselectcomponent.html)  
[**IgxSelectItemComponent**]({environment:angularApiUrl}/classes/igxselectitemcomponent.html)  
[**IgxDropDownComponent**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)  
[**IgxDropDownItemComponent**]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html)  
[**OverlaySettings**]({environment:angularApiUrl}/interfaces/overlaysettings.html)  
[**ConnectedPositioningStrategy**]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html)  
[**GlobalPositionStrategy**]({environment:angularApiUrl}/classes/globalpositionstrategy.html#constructor)  
[**AbsoluteScrollStrategy**]({environment:angularApiUrl}/classes/absolutescrollstrategy.html)  
[**PositionSettings**]({environment:angularApiUrl}/interfaces/positionsettings.html)

## Additional Resources
[**NgModel**](https://angular.io/api/forms/NgModel)
[**ViewChild**](https://angular.io/api/core/ViewChild)
[**ngForOf**](https://angular.io/api/common/NgForOf)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
