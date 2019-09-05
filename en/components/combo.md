---
title: Combo Component
_description: The igx-combo provides a powerful input, combining features of the basic HTML input, select and the IgniteUI for Angular igx-drop-down controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls
---

## Combo
<p class="highlight">

The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component provides a powerful input, combining the features of the basic HTML `input`, select and the IgniteUI for Angular [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) components.<br />
The combo component provides easy **[filtering](combo_features.md#filtering)** and **multiple selection** of items, **[grouping](combo_features.md#grouping)** and adding **[custom values](combo_features.md#custom-values)** to the dropdown list.<br />
**[Custom templates](combo_templates.md)** could be provided in order to customize different areas of the components, such as items, header, footer, etc.<br />
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component is integrated with the **[Template Driven Forms](input_group.md)** and **[Reactive Forms](input_group_reactive_forms.md)**.<br />
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) exposes intuitive **keyboard navigation** and it is **accessibility compliant**.<br />
Drop Down items are **virtualized**, which guarantees smooth work, even if the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) is bound to data source with a lot of items.
</p>
<div class="divider"></div>

### Demo
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The [IgxComboComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) allows you to search and select items from the list. The combo uses the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) internally as an item container. To get started with the Ignite UI for Angular Combo, let's first import the `IgxComboModule` in our **app.module.ts** file:

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

Then in the template bind the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) with some data and define [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) corresponding to entities from the `localData` data source:

```html
<igx-combo [data]="lData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

```typescript
import { localData } from "./local-data";

export class ComboDemo implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```
> Note: If [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) is omitted then [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) entity will instead be used as item text.

<div class="divider--half"></div>

## Selection
The combo handles selection differently, depending on its [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) property.

### Selection with valueKey
If a `valueKey` is provided, all of the combo's selection events will be handled with the value of the items' `valueKey` property.
For example, if we have the following combo defined:
 ```html
 <igx-combo [data]="towns" valueKey="id"></igx-combo>
 ``` 
 ```typescript
 export class MyBoundCombo {
	@ViewChild(IgxComboComponent, { static: false, read: IgxComboComponent })
	public combo: IgxComboComponent; 
	public towns: { name: string, id: string } = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
 }
 ```

Selection is handled using **only the `id` property** (specified in the `valueKey` input) of the items:
```typescript
    // set
    this.combo.selectItems(["UK01", "UK02", "UK03"]);
    // get
    const selectedItems: string[] = this.combo.selectedItems();
```
As you can see, the call to [`selectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems) is done with an array of `string`s (since that's expected to be in the `id` field of entries in `towns: Towns[]`) and `selectedItems` returns a `string[]`, containing the `id`s of the selected towns.

The above is true for **all** of the combo events and methods that are related to the selection:
 - [`selectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems), [`deselectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#deselectitems), [`selectAllItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectallitems), [`deselectAllItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#deselectallitems) - these methods should be called with the corresponding `valueKey` property values if `valueKey` is specified for the combo.
 - [`onSelectionChange`]({environment:angularApiUrl}/classes/igxcombocomponent.html#onselectionchange) - the `newSelection`, `oldSelection`, `added` and `removed` arrays of the [`IComboSelectionChangeEventArgs`]({environment:angularApiUrl}/interfaces/icomboselectionchangeeventargs.html) will hold the corresponding values of the items. 

### Selection without valueKey
When no `valueKey` is provided, the combo handles selection based on **equality (===)**.
If the data is of a primitive type (e.g. `string`, `number`), the provided array to selection methods should contain only the values that you would like to select. For example:
```html
<igx-combo [data]="fibonacci"></igx-combo>
```
```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: false })
    public combo: IgxComboComponent;
    public fibonacci = [1,1,2,3,5,8,13,21...];
}
```
Selection is handled by just passing the value we want selected:
```typescript
    // set
    this.combo.selectItems([2,3,13]);
    // get
    const selectedItems: number[] = this.combo.selectedItems(); 
```
> [!NOTE]
> If the data is comprised of primitive types (e.g. `string` or `number`), **do not** pass a `valueKey` to the combo.

If the data is of a more complex type (e.g. `object`), the array provided to selection methods should contain a **reference** to the entries you would like to select.
For example:

```html
<igx-combo [data]="towns"></igx-combo>
```
```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: false })
    public combo: IgxComboComponent;
    public towns: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
}
```

Selection is handled by passing **references** to the entries we want selected:
```typescript
    // set
    this.combo.selectItems([this.combo.towns[0], this.combo.towns[3]]);
    // get
    const selectedItems: { name: string, id: string }[] = this.combo.selectedItems();
```

Depending on whether or not a `valueKey` is defined, the combo also handles [value binding](#value-binding) differently as well.

## Value Binding

As mentioned in the [selection](#selection) section, binding the combo with `[(ngModel)]` is done differently, depending on the combo's [`valueKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) property.

### Value Binding with valueKey
Most commonly, when binding the combo's selection to a model, you'll only need a specific property from the combo's selected items. In this case, a specific property can be passed in the combo's `valueKey` input. The property bound to the control's `[(ngModel)]` will now be an array, containing only **that specific property** of the selected items.

For example, if we have the following configuration of a combo **with** a defined `valueKey`:
```html
<igx-combo [data]="towns" [(ngModel)]="selectedTowns" valueKey="id"></igx-combo>
```
```typescript
export class MyCombo {
    public towns: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedItems: string[] = ["BG01", "UK01"];
}
```
The property bound with `[(ngModel)]` will be an array, containing the `id`s of the selected towns.

### Value Binding without valueKey
If you need your combo's `[(ngModel)]` binding to work with the **entry** from the `data` array, this can be achieved by **not** specifying a `valueKey` for the control. That way, the combo selection and binding will be handled with **equality (===)**.

For example, if we have the following configuration of a combo **without** a defined `valueKey`:
```html
<igx-combo [data]="towns" [(ngModel)]="selectedTowns"></igx-combo>
```
```typescript
export class MyCombo {
    public towns: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedItems: { name: string, id: string }[] = [this.towns[0], this.towns[1]];
}
```
The property bound to `[(ngModel)]` will be an array, containing **references** to the objects from the `towns` array (that is also bound to the `data`).

### Binding Demo

The difference between the two ways of binding data can be seen in the demo below:

<div class="sample-container loading" style="height: 600px;">
    <iframe id="combo-binding-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-binding" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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