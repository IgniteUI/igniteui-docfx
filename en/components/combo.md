---
title: Combo Component
_description: The igx-combo provides a powerful input, combining features of the basic HTML input, select and the IgniteUI for Angular igx-drop-down controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls
---

# Combo
<p class="highlight">

The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component provides a powerful input, combining the features of the basic HTML `input`, select and the IgniteUI for Angular [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) components.<br />
The combo component provides easy **[filtering](combo_features.md#filtering)** and **multiple selection** of items, **[grouping](combo_features.md#grouping)** and adding **[custom values](combo_features.md#custom-values)** to the dropdown list.<br />
**[Custom templates](combo_templates.md)** could be provided in order to customize different areas of the components, such as items, header, footer, etc.<br />
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component is integrated with the **[Template Driven Forms](input_group.md)** and **[Reactive Forms](input_group_reactive_forms.md)**.<br />
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) exposes intuitive **keyboard navigation** and it is **accessibility compliant**.<br />
Drop Down items are **virtualized**, which guarantees smooth work, even if the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) is bound to data source with a lot of items.
</p>
<div class="divider"></div>

## Demo
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

## Usage
The [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) allows you to search and select items from the list. The combo uses the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) internally as an item container. 

To get started with the combo component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxComboModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule],
    ...
})
export class AppModule {}
```

Then in the template bind the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) with some data.

```typescript
export class ComboDemo implements OnInit {
    public cities: { name: string, id: string }[] = [];

    public ngOnInit() {
        this.cities = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01'}, ...];
    }
}
```

```html
<igx-combo [data]="cities"></igx-combo>
```

Our combo is now bound to the array of cities.

### Data value and display properties

With the above configuration, since the combo is bound to an array of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The control exposes two `@Input` properties - [`valueKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [`displayKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey)

 - `valueKey`: **Optional. Recommended for object arrays.** Specifies which property of the data entries is stored for the combo's selection. If `valueKey` is omitted, the combo value will use references to the data entries (i.e. the selection will be an array of entries from `combo.data`).
 - `displayKey`: **Required for object arrays.** Specifies which property is used for the items' text. If no value is specified for `displayKey`, the combo will use the specified `valueKey` (if any). 

In our case, we want the combo to *display* the `name` of each city and, for the combo *value*, store the `id` of each city. We do this by providing these properties to the combo's `displayKey` and `valueKey`, respectively:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id">
```

The combo is now bound to the data and will display a list of items when initialized. Users can mark items as selected via mouse and keyboard interactions, causing the combo to visually update to reflect the current selection (displaying the selected items in its input and highlighting them as selected in the list). The combo selection can be accessed either through [two-way binding](#two-way-binding) or through the [selection API](#selection). 

> [!Note]
> When the data source is comprised of a simple type (e.g. `string[]`, `number[]`), **do not** specify a `valueKey` and `displayKey`.

### Two-Way Binding

The combo fully supports two way data binding with `[(ngModel)]` as well use in [template driven](https://angular.io/guide/forms) and [reactive](https://angular.io/guide/reactive-forms) forms. We can pass an array of items of the same type as the ones in the combo's selection ([based on `valueKey`](#data-value-and-display-properties)) and any time either changes, the other is updated accordingly.

For example, if we follow up with the configurations from the earlier examples:

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```
```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: string[] = ["BG01", "UK01"];
}
```
With this setup, the cities *Sofia* and *London* will initially be selected. Any further changes in the combo's selection will be reflected in the `selectedCities` array.

Two-way binding can also be achieved without a specified `valueKey`.
For example, if `valueKey` is omitted, the bound model will be the following:

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: { name: string, id: string }[] = [this.cities[0], this.cities[1]];
}
```

### Selection
The combo exposes API that allows getting and manipulating the current selection state of the control. 

One way to get the combo's selection is via the [`selectedItems()`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selecteditems) method. It returns an array of values which correspond to the selected items, depending on the [specified `valueKey`](#data-value-and-display-properties) (if any).

In our *cities* example, `selectedItems` will return an array of the selected cities' `id`s:

```typescript
export class MyCombo {
    ...
    public selectedItems: string[] = this.combo.selectedItems();
}
```

Using the selection API, you can also change the combo's selected items without having the user interact with the control - via a button click, as a response to an Observable changing, etc.

For example, let's revisit the *cities* example and see how we can implement a button that selects a set of cities, using the combo's [`selectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems) method:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```
```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: true })
    public combo: IgxComboComponent;
    ...
    selectFavorites(): void {
        this.combo.selectItems(['UK01', 'BG01']);
    }
}
```

When clicking the button, the cities *London* and *Sofia* will be added to the combo's selection.

The combo also fires an event every time its selection changes - [`onSelectionChange()`]({environment:angularApiUrl}/classes/igxcombocomponent.html#onselectionchange). The emitted event arguments, [`IComboSelectionChangeEventArgs`]({environment:angularApiUrl}/interfaces/icomboselectionchangeeventargs.html), contain information about the selection prior to the change, the current selection, what items were added and removed. The event can also be cancelled, preventing it from updating the selection with the new array of items.

Binding to the event can be done through the proper `@Output` on the `igx-combo` tag:
```html
<igx-combo [data]="cities" displayKey="name" valueKey="id" (onSelectionChange)="handleCityChange($event)">
```
For example, a page could be displaying a statistic for all selected cities. If a cities is added or removed from that selection, we can fire a handler that properly adds/removes the city to the statistic visualization:

```typescript
export class MyExampleCombo {
    ...
    handleCityChange(event: IComboSelectionChangeEventArgs): void {
        for (const item of event.added) {
            this.addToVisualization(item);
        }
        for (const item of event.removed) {
            this.removeFromVisualization(item);
        }
    }
}
```

### Usage Demo

In the demo below, you can see a side-by-side comparison of the different ways a combo can be bound to data:

<div class="sample-container loading" style="height: 600px;">
    <iframe id="combo-binding-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-binding" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

<div class="divider--half"></div>

## Features
Combo control exposes the following features:
    - Data Binding - local data and [remote data](combo_remote.md)
    - [Value Binding](combo_features.md#value-binding)
    - [Filtering](combo_features.md#filtering)
    - [Grouping](combo_features.md#grouping)
    - [Custom values](combo_features.md#custom-values)
    - [Templates](combo_templates.md)
    - Integration with [Template Driven Forms](input_group.md) and [Reactive Forms](input_group_reactive_forms.md)

## Single Selection
By default, the Combo control provides multiple selection. The example below demonstrates how to achieve single selection in the component by attaching a handler to the `onSelectionChange` event:

```html
<igx-combo [data]="lData" (onSelectionChange)="singleSelection($event)"></igx-combo>
```

```typescript
public singleSelection(event: IComboSelectionChangeEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-single-selection-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-single-selection" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-single-selection-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-single-selection-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

## Keyboard Navigation

When igxCombo is closed and focused:
- `ArrowDown` or `Alt` + `ArrowDown` will open the combo drop down and will move focus to the search input.

When igxCombo is opened and search input is focused:
- `ArrowUp` or `Alt` + `ArrowUp` will close the combo drop down and will move focus to the closed combo.

- `ArrowDown` will move focus from the search input to the first list item. If list is empty and custom values are enabled will move it to the Add new item button.
  > Note: Any other key stroke will be handled by the input.

When igxCombo is opened and list item is focused:
- `ArrowDown` will move to next list item. If the active item is the last one in the list and custom values are enabled then focus will be moved to the Add item button.

- `ArrowUp` will move to previous list item. If the active item is the first one in the list then focus will be moved back to the search input.

- `End` will move to last list item.

- `Home` will move to first list item.

- `Space` will select/deselect active list item.

- `Enter` will confirm the already selected items and will close the list.

- `Esc` will close the list.

When igxCombo is opened, allow custom values are enabled and add item button is focused:

- `Enter` will add new item with valueKey and displayKey equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if list is empty will be moved to the search input.

## Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the **igx-combo** appearance. 
Since `igx-combo` extends `igx-drop-down`, it also makes good use of its existing `igx-drop-down` styling, so you can directly refer to the [igx-drop-down styling guide](drop_down.md#styling) for details.
On top of that, `IgxCombo` includes an `IgxInputGroup` as well, so any styling to the input-group will affect the `IgxCombo` component. You can refer to [igx-input-group styling guide](input_group.md#styling) for details.
`IgxCheckbox` is yet another related component. For details check [`igx-checkbox styling guide`](checkbox.md#styling).

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

$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: igx-color($my-color-palette, "secondary", 100),
    $header-text-color: igx-color($my-color-palette, "secondary", 600),
    $item-text-color: igx-color($my-info-color, "info", 100),

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

// igx-combo-theme exposes several parameters on top of the igx-drop-down-theme.
// change $search-separator-border-color to one matching better our purple theme
$custom-combo-theme: igx-combo-theme(
    $search-separator-border-color: igx-color($my-color-palette, "secondary", 600)
);
```

### Applying
All that's left is to properly scope our newly created themes. Here we will assume you want to style a particular `IgxCombo` so the other components of this type in your application will not be affected by the custom themes. For details regarding applying theme globally or scoped, you can refer to [igx-drop-down styling guide](drop_down.md#applying)

```scss
// Pass our custom-drop-down-theme and custom-combo-theme to respectively `igx-drop-down` and igx-combo mixins.
:host {
   ::ng-deep {
           @include igx-drop-down($custom-drop-down-theme);
           @include igx-combo($custom-combo-theme);
   }
}
```

> [!NOTE]
> The [**IgxCombo**]({environment:angularApiUrl}/classes/igxcombocomponent.html) component uses [IgxOverlay](overlay_main.md) to hold and display the `igx-combo-items` list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check: [`IgxOverlay styling guide`](overlay_styling.md).

### Demo
<div class="sample-container loading" style="height:410px">
    <iframe id="combo-styling" src='{environment:demosBaseUrl}/lists/combo-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

<div class="divider--half"></div>

## API
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#themes-mixin-igx-combo)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Known Issues

- Combo input that displays the selected items is not editable, however due to a browser specifics in IE and FireFox the cursor is visible
- Backspace works in disabled combo in IE
- Combo is not having input for sizing its height. In the future [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)  will expose an option that allows custom sizing and then [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) will use the same functionality for proper styling and better consistency.

> [!NOTE]
> `igxCombo` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxCombo`. For more details see [igxForOf Known Issues](for_of.html#known-limitations) section.

### Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo_features.md)
* [Combo Remote Binding](combo_remote.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) 

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
