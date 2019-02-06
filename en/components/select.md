---
title: IgxSelect - Native Angular | Ignite UI for Angular
_description: The igxSelect provides an input with drop-down list allowing selection of a single item.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular IgxSelect Component, IgxSelect
---

## Select
The `IgxSelectComponent` allows you to select a single item from a drop-down list, by using the mouse or the keyboard to quickly navigate through them. Using the `igxSelect` you can also iterate selection through all items based on the input of a specific character or multiple characters.

## Simple Select Demo
<div class="sample-container loading" style="height: 260px;">
    <iframe id="select-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

>[!WARNING]
>To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the installation topic.


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

Then in your template you need to bind it with some data like so:
```html
<igx-select>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
Notice that we use an `IgxSelectItemComponent` to display the items that `igx-select` operates on. The `IgxSelectItemComponent` extends the [*IgxDropDownItemComponent*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html) with additional functionality that is specific to the `igx-select`, which in turn allows for a smooth integration with the [*IgxDropdownComponent*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdowncomponent.html).

## Features

### IgxSelect Actions
#### Open
Focusing with the keyboard on `igx-select` will not cause it to open.
With focus set on `igx-select` you can use `Space`, `Enter` or `ALT + Up/Down Arrow` to open it.

- `igx-select` will also open if you left click with your mouse on it or if you left click on the drop-down button.

#### Close
When the `igx-drop-down` is opened, you can close it by doing one of the following:
- select an item from the drop-down list
- press `ALT + UP/Down Arrow` keys
- press any of `Enter`, `Space` or `Esc` keys
    - It is also possible to close the drop-down by left-clicking with the mouse on the drop-down button or if you lef-click outside of the drop-down list.

### Keyboard Navigation
`igx-select` has intuitive keyboard navigation that makes it easy to select items without having to touch the mouse.

- When the drop-down list is opened you can navigate through the items using the `Up/Down Arrow` keys as long as there are list items.
- When the drop-down list is opened you can iteratively navigate through all items that begin with a certain character, by pressing the corresponding key, this is *case insensitive* and will cause the focus to spin between all matches.
- When the drop-down list is opened you can navigate to a *specific* item by rapidly typing in the first few characters of the item you wish to go to.
    - *Note that the speed at which you type in matters.*
- When the drop-down list is opened, you can navigate through the items using the `Home` and `End` keys.
- When the drop-down list is opened, navigation with `Up/Down Arrow` keys starts from the selected item, if any or the first item in the list, otherwise.
- When the drop-down list is closed you can cycle between its items using the `Up/Down Arrow` keys.
- When the drop-down list is closed you can also navigate through all items that begin with a specific character, it works the same as if it was opened.
- When the drop-down list is closed you can also navigate to a *specific* item by rapidly typing in its first few characters. The behaviour is the same as when the drop-down is opened.

#### Event emitting
- Open event is emitted on an item click.
- Open/Close events are emitted on input click.
- Open/Close events are emitted on toggle button click.
- Open/Close events are triggered on key interaction.
- Close event is emitted on clicking outside of the component.

### Item Selection
An item from the drop-down list can be selected by:
- left mouse click
- `Enter` key when the respective item is focused
- `Space` key when the respective item is focused
- setting the value property in the code

### Positioning Strategy
`igx-select` has its own positioning strategy called the `SelectPositioningStrategy`.
It extends the [*ConnectedPositioningStrategy*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html) and allows `igx-select` to position its drop-down list in different ways, relative to the input field.

In order to use the `SelectPositioningStrategy`, you first have to import it alongside the [*OverlaySettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) which are going to use it:
```ts
import { SelectPositioningStrategy, OverlaySettings } from 'igniteui-angular';
```

From there you have to initialize an [*OverlaySettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) object and pass in the `SelectPositioningStrategy`. And finally in the positioning strategy's constructor you pass in a [*ViewChild*](https://angular.io/api/core/ViewChild) that references the `IgxSelectComponent` from your template.
All of it looks like this:
```ts
@ViewChild(IgxSelectComponent)
public igxSelect: IgxSelectComponent;

public customOverlaySettings: OverlaySettings = {
    modal: false,
    closeOnOutsideClick: true,
    positionStrategy: new SelectPositioningStrategy(
        this.igxSelect
    ),
    scrollStrategy: new AbsoluteScrollStrategy()
};
```
As you can see there is also a `scrollStrategy` property that is present in the `customOverlaySettings` object. This ensures that the scrolling functionality of the drop-down works as expected. The scroll will appear every time the total height of all items in the list exceeds the drop-down's height.
- The `modal` and `closeOnOutsideClick` properties are optional and have default values respectively `false` and `true`.

### Select With Groups
<div class="sample-container loading" style="height: 260px;">
    <iframe id="select-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

Thanks to the fact that `igx-select` extends `igx-drop-down` it also has a built-in support for *groups*. 

In order to make use of this functionality, you first need to define a [*ViewChild*](https://angular.io/api/core/ViewChild) and pass it to the [*OverlaySettings*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) - the same as with the previous example. The only difference here would be the data that has to be passed to `igx-select`, which in this case should look something like this:
```ts
    public items: any[] = [
        { field: "Fruits", header: true },
        { field: "Apple" },
        { field: "Orange" },
        { field: "Banana" },
        { field: "Vegetables", header: true },
        { field: "Cucumber" },
        { field: "Potato" },
        { field: "Pepper" }
    ];
```
You would notice that now we pass in objects that have certain properties, such as `field` and `header`. This is because the `IgxSelectItemComponent` has functionality that allows it to receive specific styling inside the drop-down list. This functionality comes inherited from the [*IgxDropDownItemComponent*](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html).

### Selet In A Form
<div class="sample-container loading" style="height: 260px;">
    <iframe id="select-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

`igx-select` can also be put inside of a `form` element and in order to do that, you first have to create the template for your control and add the items that it will be displaying:

```html
  <igx-select  [(ngModel)]="selected">
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
  </igx-select>
```

Since we are using two-way binding, inside of your class you should have the following line alongside everything else:
```ts
  public selected: any = "Apple";
```

You may also notice that in the above sample we have a *prefix* on the input field, this is because `igx-select` supports both prefixes and suffixes. You can read more about them [*here*](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html).


## Manual

- The IgxSelect's list shows/hides in a timely manner with a large amount of items.
- Focus is changed in a timely manner when navigating via the keyboard.
- The user may have more than one IgxSelect controls on the same page.
- The IgxSelect's list content should not "flicker" when opening.

## API Reference
[**IgxSelectModule**]()  
[**IgxSelectComponent**]()  
[**IgxSelectItemComponent**]()  
[**IgxDropDownComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdowncomponent.html)  
[**IgxDropDownItemComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html)  
[**OverlaySettings**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html)  
[**ConnectedPositioningStrategy**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html)  
[**SelectPositioningStrategy**]()  
[**AbsoluteScrollStrategy**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/absolutescrollstrategy.html)  

## Additional Resources
[**Specification**](https://github.com/IgniteUI/igniteui-angular/wiki/IgxSelect-Specification#31-keyboard-navigation)  
[**NgModel**](https://angular.io/api/forms/NgModel)  
[**Angular Select**](https://material.angular.io/components/select/overview)  
