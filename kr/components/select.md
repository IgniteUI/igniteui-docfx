---
title: IgxSelect - Native Angular | Ignite UI for Angular
_description: The igxSelect provides an input with drop-down list allowing selection of a single item.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular IgxSelect Component, IgxSelect
_language: kr
---

## Select
The `IgxSelectComponent` allows you to select a single item from a drop-down list by using the mouse or the keyboard to quickly navigate through them. By using `igx-select` you can also iterate selection through all items based on the input of a specific character or multiple characters.

## Simple Select Demo
<div class="sample-container loading" style="height: 430px;">
    <iframe id="select-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

>[!WARNING]
>To start using Ignite UI for Angular components, in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [*getting started*](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started.html) topic.


## Usage
To get started with `igx-select` you first need to import the `IgxSelectModule`:
```ts
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

In your class you need to have a collection of the items that you want to display when the drop-down opens:
```ts
public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
```

Then in your template you need to bind it with said items like so:
```html
<igx-select>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
Notice that we use an `IgxSelectItemComponent` to display the items that `igx-select` operates on. The `IgxSelectItemComponent` extends the [*IgxDropDownItemComponent*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html) with additional functionality that is specific to the `igx-select-item`.

## Features
### IgxSelect Actions
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
- When the drop-down list is closed you can also navigate to a *specific* item by rapidly typing in its first few characters. The behaviour is the same as when the drop-down is opened.
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
> `igx-select` supports *single* selection of items only.

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
    - select expand/collapse button click (app scenario)
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
```ts
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
It extends the [*ConnectedPositioningStrategy*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html) and allows `igx-select` to position its drop-down list in different ways, relative to the input field. This means that the drop-down will always position itself so that the text in the input is matched by the selected item's text.

In the following example we are defining custom overlay settings using the `SelectPositioningStrategy` so you first have to import it alongside the [*OverlaySettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html):
```ts
import { SelectPositioningStrategy, OverlaySettings } from 'igniteui-angular';
```

From there you have to initialize an [*OverlaySettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) object and pass in the `SelectPositioningStrategy`. And finally in the positioning strategy's constructor you pass in a [*ViewChild*](https://angular.io/api/core/ViewChild) that references the `IgxSelectComponent` from your template.

All of it looks like this:
```ts
@ViewChild(IgxSelectComponent)
public igxSelect: IgxSelectComponent;

public customOverlaySettings: OverlaySettings = {
    positionStrategy: new SelectPositioningStrategy(
        this.igxSelect
    ),
    scrollStrategy: new AbsoluteScrollStrategy()
};
```
As you can see there is also a `scrollStrategy` property that is present in the `customOverlaySettings` object. This ensures that the scrolling functionality of the drop-down works as expected. The scroll will appear every time the total height of all items in the list exceeds the drop-down's height.

Another thing worth mentioning is that `igx-select` uses the `SelectPositioningStrategy` by default.
> You can pass a variety of positioning strategies to the *positionStrategy* property, you can find them [*here*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipositionstrategy.html). 

### Select With Groups
<div class="sample-container loading" style="height: 450px;">
    <iframe id="select-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-2" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

Thanks to the fact that `igx-select` extends `igx-drop-down` it also has a built-in support for *groups*. 

In order to make use of this functionality you need to change the data that will be passed to `igx-select`, which in this case should look something like this:
```ts
public items: any[] = [
    { type: "Fruits", fruits: [ "Apple", "Orange", "Banana" ] },
    { type: "Vegetables", vegetables: [ "Cucumber", "Potato", "Pepper" ] }
];
```

You would notice that now we pass in objects that have certain properties, such as `type` and `fruits`. This is because the `IgxSelectItemComponent` has functionality that allows it to receive specific styling inside the drop-down list. This functionality comes inherited from the [*IgxDropDownItemComponent*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html).

Then in your template file you can iterate over these objects and access their properties accordingly:
```html
<igx-select>
    <igx-select-item-group *ngFor="let item of items" [label]="item.type">
        <igx-select-item *ngFor="let fruit of item.fruits" 
        [value]="fruit">
            {{fruit}}
        </igx-select-item>

        <igx-select-item *ngFor="let vegetable of item.vegetables" 
        [value]="vegetable">
            {{vegetable}}
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```

### Select In A Form
<div class="sample-container loading" style="height: 450px;">
    <iframe id="select-sample-3-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-3" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

`igx-select` can also be put inside of a `form` element and in order to do that, you first have to create the template for your control and add the items that it will be displaying:

```html
<igx-select [(ngModel)]="selected">
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
</igx-select>
```

Another way to do it would be to simply pass in a collection of the items that we want to display to the [*ngForOf*](https://angular.io/api/common/NgForOf) directive:
```html
<igx-select [(ngModel)]="selected">
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

Since we are using two-way binding, your class should look something like this:
```ts
export class MyClass {
  public selected: string = "Apple";
}
```

You may also notice that in the above sample we have a *prefix* on the input field, this is because `igx-select` supports both prefixes and suffixes. You can read more about them [*here*](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input-group.html).
- The items' list default exapansion panel arrow uses `IgxSuffix` and it can be changed by the user.
- If more than one `IgxSuffix` is used, the expansion arrow will be displayed always last.

### Select With Custom Overlay Settings
With `igx-select` you are not bound to use any of the [*OverlaySettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) that we provide, instead you may create settings of your own and pass them to it.

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

Inside of your class you would have something along the lines of:
```ts
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana", "Mango", "Tomato"];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            target: this.igxSelect.inputGroup.element.nativeElement,
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
You can see that we create a [*PositionSettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html) object that is directly passed to our [*ConnectedPositioningStrategy*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html), it is not required to do it, but since we want to define a custom positioning, we use them to override the strategy's default settings.

- You can set all settings inside of the [*ngOnInit*](https://angular.io/api/core/OnInit) hook and this will automatically affect your template upon the component's generation.

> Note that you can also pass in a customized [OverlaySettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) object to the `igx-select`'s open function.  

With your tempalte looking like this:
```html
<igx-select>
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>

<button (click)="onClick($event)"></button>
```
Your class should look something like this:
```ts
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.igxSelect.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```
- We should mention that if you pass the custom settings both as an argument in the `open` function as well as into the template, `igx-select` will use the ones provided *in the `open` function*. However, if you bind the settings to an internal event, such as `onOpening` or `onOpened` then `igx-select` will use the settings that are provided in the template.

## API Reference 
[**IgxSelectComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxselectcomponent.html)  
[**IgxSelectItemComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxselectitemcomponent.html)  
[**IgxDropDownComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdowncomponent.html)  
[**IgxDropDownItemComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html)  
[**OverlaySettings**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html)  
[**ConnectedPositioningStrategy**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html)  
[**GlobalPositionStrategy**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/globalpositionstrategy.html#constructor)  
[**AbsoluteScrollStrategy**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/absolutescrollstrategy.html)  
[**PositionSettings**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html)

## Additional Resources
[**NgModel**](https://angular.io/api/forms/NgModel)  
[**ViewChild**](https://angular.io/api/core/ViewChild)  
[**ngForOf**](https://angular.io/api/common/NgForOf)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
