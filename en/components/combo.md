---
title: Angular Combobox Component | Data binding combobox | Infragistics
_description: The Ignite UI for Angular ComboBox provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: angular combobox, ignite ui for angular, infragistics
---

# Angular ComboBox Overview

The Angular ComboBox component represents a drop-down list that provides editable functionalities, allowing users to choose an option from a predefined list. The Ignite UI for Angular ComboBox Component provides also filtering capabilities, selections of items, grouping and adding custom values to a dropdown list. It can be used as an alternative to the HTML select tag and has several out-of-the-box features such as data binding (local and remote), filtering, grouping, custom templates, custom values, and more.


## Angular ComboBox Example

In this Angular ComboBox example, you can see how users can filter items and perform selection with the provided data. In addition, the ComboBox exposes keyboard navigation and custom styling capabilities.

<div class="divider--half"></div>

<code-view style="height: 400px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-main" alt="Angular ComboBox Example">
</code-view>


## Angular ComboBox Features

The combobox control exposes the following features:
    - Data Binding - local data and [remote data](combo-remote.md)
    - [Value Binding](combo-features.md#data-binding)
    - [Filtering](combo-features.md#filtering)
    - [Grouping](combo-features.md#grouping)
    - [Custom Values](combo-features.md#custom-values)
    - [Templates](combo-templates.md)
    - Integration with [Template Driven Forms](input-group.md) and [Reactive Forms](angular-reactive-form-validation.md)

## Usage

To get started with the ComboBox component, first you need to import the `IgxComboModule` in your **app.module.ts** file:

```typescript
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        ...
    ]
})
export class AppModule {}
```

Then, in the template, you should bind the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) with some data.

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

Our combobox is now bound to the array of cities.

### Data value and display properties

Since the combobox is bound to an array of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The control exposes two `@Input` properties - [valueKey]({environment:angularApiUrl}/classes/IgxComboComponent.html#valueKey) and [displayKey]({environment:angularApiUrl}/classes/IgxComboComponent.html#displayKey):

 - `valueKey` - *Optional, recommended for object arrays* - Specifies which property of the data entries will be stored for the combobox's selection. If `valueKey` is omitted, the combobox value will use references to the data entries (i.e. the selection will be an array of entries from `igxCombo.data`).
 - `displayKey` - *Required for object arrays* - Specifies which property will be used for the items' text. If no value is specified for `displayKey`, the combobox will use the specified `valueKey` (if any).

In our case, we want the combobox to display the `name` of each city and the combobox value to store the `id` of each city. Therefore, we are providing these properties to the combobox's `displayKey` and `valueKey`, respectively:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
```

> [!Note]
> When the data source is comprised of a simple type (e.g. `string[]`, `number[]`), **do not** specify a `valueKey` and `displayKey`.

### Two-Way Binding

The combobox component fully supports two-way data-binding with `[(ngModel)]` as well as usage in [template driven](https://angular.io/guide/forms) and [reactive](https://angular.io/guide/reactive-forms) forms. The combobox selection can be accessed either through two-way binding or through the [selection API](#selection-api). We can pass an array of items of the same type as the ones in the combobox's selection (based on `valueKey`) and any time one changes, the other is updated accordingly.

In the following example, the cities Sofia and London will initially be selected. Any further changes in the combobox's selection will reflect on the `selectedCities` array.

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: 'Sofia', id: 'BG01' }, { name: 'London', id: 'UK01' }, ...];
    public selectedCities: string[] = ['BG01', 'UK01'];
}
```


<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-valuekey" >
</code-view>


Two-way binding can also be achieved without a specified `valueKey`. For example, if `valueKey` is omitted, the bound model will look like this:

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: 'Sofia', id: 'BG01' }, { name: 'London', id: 'UK01' }, ...];
    public selectedCities: { name: string, id: string }[] = [this.cities[0], this.cities[1]];
}
```


<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-binding" >
</code-view>


### Selection API

The combobox component exposes API that allows getting and manipulating the current selection state of the control.

One way to get the combobox's selection is via the [selection]({environment:angularApiUrl}/classes/igxcombocomponent.html#selection) property. It returns an array of values which correspond to the selected items, depending on the specified [valueKey](#data-value-and-display-properties) (if any).

In our example, `selection` will return an array of the selected cities' `id`s:

```typescript
export class MyCombo {
    ...
    public selection: string[] = this.combo.selection;
}
```

Using the selection API, you can also change the combobox's selected items without user interaction with the control - via a button click, as a response to an Observable changing, etc. For example, we can implement a button that selects a set of cities, using the [select()]({environment:angularApiUrl}/classes/igxcombocomponent.html#select) method:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```

When clicking the button, the cities London and Sofia will be added to the combobox's selection:

```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: true })
    public combo: IgxComboComponent;
    ...
    selectFavorites(): void {
        this.combo.select(['UK01', 'BG01']);
    }
}
```

The combobox also fires an event every time its selection changes - [selectionChanging()]({environment:angularApiUrl}/classes/IgxComboComponent.html#selectionChanging). The emitted event arguments, [IComboSelectionChangingEventArgs]({environment:angularApiUrl}/interfaces/icomboselectionchangingeventargs.html), contain information about the selection prior to the change, the current selection and the items that were added or removed. The event can also be cancelled, preventing the selection update with the new array of items.

Binding to the event can be done through the proper `@Output` property on the `igx-combo` tag:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"
           (selectionChanging)="handleCityChange($event)">
</igx-combo>
```

In the following example, when a city is added or removed from the selection, a handler that updates the statistic visualization is fired:

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

<div class="divider--half"></div>

## Keyboard Navigation

When combobox is closed and focused:
- `ArrowDown` or `Alt` + `ArrowDown` will open the combobox's drop down and will move focus to the search input.

When combobox is opened and search input is focused:
- `ArrowUp` or `Alt` + `ArrowUp` will close the combobox's drop down and will move focus to the closed combobox.

- `ArrowDown` will move focus from the search input to the first list item. If the list is empty and custom values are enabled will move it to the Add new item button.

> [!NOTE]
> Any other key stroke will be handled by the input.

When combobox is opened and list item is focused:
- `ArrowDown` will move to the next list item. If the active item is the last one in the list and custom values are enabled, the focus will be moved to the Add item button.

- `ArrowUp` will move to the previous list item. If the active item is the first one in the list, the focus will be moved back to the search input.

- `End` will move to the last list item.

- `Home` will move to the first list item.

- `Space` will select/deselect the active list item.

- `Enter` will confirm the already selected items and will close the list.

- `Esc` will close the list.

When combobox is opened, allow custom values are enabled and add item button is focused:

- `Enter` will add a new item with `valueKey` and `displayKey` equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if the list is empty, will be moved to the search input.


## Angular ComboBox Styling

Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the combobox appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [igx-combo-theme]({environment:sassApiUrl}/index.html#function-igx-combo-theme) and accepts the `$search-separator-border-color` parameter:
```scss
$custom-combo-theme: igx-combo-theme(
    $search-separator-border-color: #1a5214
);
```

The [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) uses the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) internally as an item container. It also includes the [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) and the [IgxCheckbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) components. Creating new themes, that extend these components' themes, and scoping them under the respective classes will let you change the combobox styles:

```scss
$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: #d9f5d6,
    $header-text-color: #1a5214,
    $item-text-color: #1a5214,

    $focused-item-background: #72da67,
    $focused-item-text-color: #1a5214,
    $hover-item-background: #a0e698,
    $hover-item-text-color: #1a5214,

    $selected-item-background: #a0e698,
    $selected-item-text-color: #1a5214,
    $selected-hover-item-background: #72da67,
    $selected-hover-item-text-color: #1a5214,
    $selected-focus-item-background: #72da67,
    $selected-focus-item-text-color: #1a5214,
);

$custom-checkbox-theme: igx-checkbox-theme(
    $border-radius: 10px,
    $fill-color: #1a5214,
    $empty-color: #1a5214,
);
```

The last step is to include the component's theme.

```scss
:host {
    @include igx-css-vars($custom-combo-theme);
    @include igx-css-vars($custom-drop-down-theme);
    @include igx-css-vars($custom-checkbox-theme);
}
```

> [!NOTE]
> The [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component uses the [IgxOverlay](overlay.md) service to hold and display the combobox items list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check the [IgxOverlay Styling Guide](overlay-styling.md).

> [!Note]
> The default `type` of the `IgxCombo` is `box` unlike the [IgxSelect](select.md) where it is `line`.

### Demo

<code-view style="height:410px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-styling" >
</code-view>


<div class="divider--half"></div>

## Known Issues

- The combobox input that displays the selected items is not editable. However, due to browser specifics in FireFox, the cursor is visible.
- The combobox does not have input for sizing its height. In the future, the [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) component will expose an option that allows custom sizing, and then the [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) will use the same functionality for proper styling and better consistency.

> [!NOTE]
> The combobox uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for the combobox. For more details see [igxForOf Known Issues](for-of.md#known-limitations) section.

## API Summary
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html)
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

Additional components and/or directives with relative APIs that were used:

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)

## Theming Dependencies
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxCheckbox Theme]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Additional Resources
<div class="divider--half"></div>

* [ComboBox Features](combo-features.md)
* [ComboBox Remote Binding](combo-remote.md)
* [ComboBox Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](angular-reactive-form-validation.md)
* [Single Select ComboBox](simple-combo.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
