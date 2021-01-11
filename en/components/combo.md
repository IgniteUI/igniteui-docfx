---
title: Angular Combobox Component | Data binding combobox | Infragistics
_description: The Ignite UI for Angular ComboBox provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: angular combobox, ignite ui for angular, infragistics
---

# Angular ComboBox Overview

The Angular ComboBox component represents a drop-down list that provides editable functionalities, allowing users to choose an option from a predefined list. The Ignite UI for Angular Combo Component provides also filtering capabilities, single and multiple selections of items, grouping and adding custom values to a dropdown list. It can be used as an alternative to the HTML select tag and has several out-of-the-box features such as data binding (local and remote), filtering, grouping, custom templates, custom values, and more.


## Angular ComboBox Example

In this Angular ComboBox example, you can see how users can filter items and perform single or multiple selection with the provided data. In addition, the ComboBox expose keyboard navigation and custom styling capabilities.

<div class="divider--half"></div>
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-main-sample" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-main" onload="onSampleIframeContentLoaded(this);" alt="Angular combobox example as an alt text" alt="Angular ComboBox Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-main-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-main-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Angular ComboBox Features

The combo control exposes the following features:
    - Data Binding - local data and [remote data](combo-remote.md)
    - [Value Binding](combo-features.md#value-binding)
    - [Filtering](combo-features.md#filtering)
    - [Grouping](combo-features.md#grouping)
    - [Custom Values](combo-features.md#custom-values)
    - [Templates](combo-templates.md)
    - Integration with [Template Driven Forms](input-group.md) and [Reactive Forms](input-group-reactive-forms.md)

## Usage

To get started with the Combo component, first you need to import the `IgxComboModule` in your **app.module.ts** file:

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

Our combo is now bound to the array of cities.

### Data value and display properties

Since the combo is bound to an array of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The control exposes two `@Input` properties - [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey):

 - `valueKey` - *Optional, recommended for object arrays* - Specifies which property of the data entries will be stored for the combo's selection. If `valueKey` is omitted, the combo value will use references to the data entries (i.e. the selection will be an array of entries from `combo.data`).
 - `displayKey` - *Required for object arrays* - Specifies which property will be used for the items' text. If no value is specified for `displayKey`, the combo will use the specified `valueKey` (if any). 

In our case, we want the combo to display the `name` of each city and the combo value to store the `id` of each city. Therefore, we are providing these properties to the combo's `displayKey` and `valueKey`, respectively:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
```

> [!Note]
> When the data source is comprised of a simple type (e.g. `string[]`, `number[]`), **do not** specify a `valueKey` and `displayKey`.

### Two-Way Binding

The combo component fully supports two-way data-binding with `[(ngModel)]` as well as usage in [template driven](https://angular.io/guide/forms) and [reactive](https://angular.io/guide/reactive-forms) forms. The combo selection can be accessed either through two-way binding or through the [selection API](#selection). We can pass an array of items of the same type as the ones in the combo's selection (based on `valueKey`) and any time one changes, the other is updated accordingly.

In the following example, the cities Sofia and London will initially be selected. Any further changes in the combo's selection will reflect on the `selectedCities` array.

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: string[] = ["BG01", "UK01"];
}
```

<div class="sample-container loading" style="height: 550px;">
    <iframe id="combo-valuekey-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-valuekey" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-valuekey-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-valuekey-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Two-way binding can also be achieved without a specified `valueKey`. For example, if `valueKey` is omitted, the bound model will look like this:

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: { name: string, id: string }[] = [this.cities[0], this.cities[1]];
}
```

<div class="sample-container loading" style="height: 600px;">
    <iframe id="combo-binding-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-binding" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Selection API

The combo component exposes API that allows getting and manipulating the current selection state of the control. 

One way to get the combo's selection is via the [selectedItems()]({environment:angularApiUrl}/classes/igxcombocomponent.html#selecteditems) method. It returns an array of values which correspond to the selected items, depending on the specified [valueKey](#data-value-and-display-properties) (if any).

In our example, `selectedItems` will return an array of the selected cities' `id`s:

```typescript
export class MyCombo {
    ...
    public selectedItems: string[] = this.combo.selectedItems();
}
```

Using the selection API, you can also change the combo's selected items without user interaction with the control - via a button click, as a response to an Observable changing, etc. For example, we can implement a button that selects a set of cities, using the [selectItems()]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems) method:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```

When clicking the button, the cities London and Sofia will be added to the combo's selection:

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

The combo also fires an event every time its selection changes - [onSelectionChange()]({environment:angularApiUrl}/classes/igxcombocomponent.html#onselectionchange). The emitted event arguments, [IComboSelectionChangeEventArgs]({environment:angularApiUrl}/interfaces/icomboselectionchangeeventargs.html), contain information about the selection prior to the change, the current selection and the items that were added or removed. The event can also be cancelled, preventing the selection update with the new array of items.

Binding to the event can be done through the proper `@Output` property on the `igx-combo` tag:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"
           (onSelectionChange)="handleCityChange($event)">
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

## Single Selection

By default, the combo control provides multiple selection. The example below demonstrates how to achieve single selection in the component by attaching a handler to the `onSelectionChange` event:

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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-single-selection-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-single-selection-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Keyboard Navigation

When igxCombo is closed and focused:
- `ArrowDown` or `Alt` + `ArrowDown` will open the combo drop down and will move focus to the search input.

When igxCombo is opened and search input is focused:
- `ArrowUp` or `Alt` + `ArrowUp` will close the combo drop down and will move focus to the closed combo.

- `ArrowDown` will move focus from the search input to the first list item. If the list is empty and custom values are enabled will move it to the Add new item button.
  
> [!NOTE]
> Any other key stroke will be handled by the input.

When igxCombo is opened and list item is focused:
- `ArrowDown` will move to the next list item. If the active item is the last one in the list and custom values are enabled, the focus will be moved to the Add item button.

- `ArrowUp` will move to the previous list item. If the active item is the first one in the list, the focus will be moved back to the search input.

- `End` will move to the last list item.

- `Home` will move to the first list item.

- `Space` will select/deselect the active list item.

- `Enter` will confirm the already selected items and will close the list.

- `Esc` will close the list.

When igxCombo is opened, allow custom values are enabled and add item button is focused:

- `Enter` will add a new item with valueKey and displayKey equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if the list is empty, will be moved to the search input.


## Angular ComboBox Styling

Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the drop-down appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [igx-combo-theme]({environment:sassApiUrl}/index.html#function-igx-combo-theme) and accepts the `$search-separator-border-color` parameter: 
```scss
$custom-combo-theme: igx-combo-theme(
    $search-separator-border-color: #1a5214
);
```

The [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) uses the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) internally as an item container. It also includes the [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) and the [IgxCheckbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) components. Creating new themes that extend theirs and scoping them under the respective classes will let you drill deeper and change the combo styles more: 

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

### Using CSS Variables 

The last step is to include the component's theme.

```scss
:host {
    @include igx-css-vars($custom-combo-theme);
    @include igx-css-vars($custom-drop-down-theme);
    @include igx-css-vars($custom-checkbox-theme);
}
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [Emulated](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-combo($custom-combo-theme);
        @include igx-drop-down($custom-drop-down-theme);
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```

> [!NOTE]
> The [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component uses the [IgxOverlay](overlay.md) service to hold and display the combo items list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check the [IgxOverlay Styling Guide](overlay-styling.md).

> [!Note]
> The default `type` of the IgxCombo is `box` unlike the [IgxSelect](select.md) where it is `line`.

### Demo
<div class="sample-container loading" style="height:410px">
    <iframe id="combo-styling" src='{environment:demosBaseUrl}/lists/combo-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

## Known Issues

- The combo input that displays the selected items is not editable. However, due to browser specifics in IE and FireFox, the cursor is visible.
- Backspace works in disabled combo in IE.
- The combo does not have input for sizing its height. In the future, the [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) component will expose an option that allows custom sizing, and then the [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) will use the same functionality for proper styling and better consistency.

> [!NOTE]
> The `igxCombo` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for the combo. For more details see [igxForOf Known Issues](for-of.html#known-limitations) section.

## API Summary
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

Additional components and/or directives with relative APIs that were used:

* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) 
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo-features.md)
* [Combo Remote Binding](combo-remote.md)
* [Combo Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Cascading Scenario](combo-cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
