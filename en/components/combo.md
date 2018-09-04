---
title: Combo Component
_description: The igx-combo provides a powerful input, combining features of the basic HTML input, select and the IgniteUI for Angular igx-drop-down controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls
---

## Combo
<p class="highlight">
The igx-combo component provides a powerful input, combining the features of the basic HTML `input`, select and the IgniteUI for Angular `igx-drop-down` components.<br />
The combo component provides easy **[filtering](combo_features.md#filtering)** and **multiple selection** of items, **[grouping](combo_features.md#grouping)** and adding **[custom values](combo_features.md#custom-values)** to the dropdown list.<br />
**[Custom templates](combo_templates.md)** could be provided in order to customize different areas of the components, such as items, header, footer, etc.<br />
The `igx-combo` component is integrated with the **[Template Driven Forms](input_group.md)** and **[Reactive Forms](input_group_reactive_forms.md)**.<br />
The `igx-combo` exposes intuitive **keyboard navigation** and it is **accessibility compliant**.<br />
Drop Down items are **virtualized**, which guarantees smooth work, even if the `igx-combo` is bound to data source with a lot of items.
</p>
<div class="divider"></div>

### Demo
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The `IgxComboComponent` allows you to search and select items from the list. The combo uses the `IgxDropDownComponent` internally as an item container. To get started with the Ignite UI for Angular Combo, let's first import the **IgxComboModule** in our **app.module.ts** file:

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

Then in the template bind the `igx-combo` with some data and define `valueKey` and `displayKey` corresponding to entities from the `localData` data source:

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
> Note: If `displayKey` is omitted then `valueKey` entity will instead be used as item text.

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

## API

### Inputs
<div class="divider--half"></div>

| Name                     | Description                                       | Type                        |
|--------------------------|---------------------------------------------------|-----------------------------|
|  `id`                    | combo id                                          | string                      |
|  `data`                  | combo data source                                 | any                         |
|  `value`                 | combo value                                       | string                      |
|  `allowCustomValue`      | enables/disables combo custom value                | boolean                     |
|  `filterable`            | enables/disables combo drop down filtering - enabled by default                  | boolean                     |
|  `valueKey`              | combo value data source property                  | string                      |
|  `displayKey`            | combo display data source property                | string                      |
|  `groupKey`              | combo item group                                  | string                      |
|  `virtualizationState`   | defines the current state of the virtualized data. It contains `startIndex` and `chunkSize`      | `IForOfState`               |
|  `width `                | defines combo width                               | string                      |
|  `itemsMaxHeight `       | defines drop down maximum height                  | number                      |
|  `itemsWidth `           | defines drop down width                           | string                      |
|  `itemHeight `           | defines drop down item height                     | number                      |
|  `placeholder `          | defines the "empty value" text                    | string                      |
|  `searchPlaceholder `    | defines the placeholder text for search input     | string                      |
|  `collapsed`             | gets drop down state                              | boolean                     |
|  `disabled`              | defines whether the control is active or not      | boolean                     |
|  `ariaLabelledBy`        | defines label ID related to combo                 | string                      |
|  `type`                  | defines type of combo - "line", "box", "border", "search"                                        | string                      |
|  `valid`                 | gets if control is valid, when used in a form     | boolean                     |


### Outputs
<div class="divider--half"></div>

| Name                | Description                                                             | Cancelable   | Parameters                              |
|------------------   |-------------------------------------------------------------------------|------------- |-----------------------------------------|
| `onSelectionChange` | Emitted when item selection is changing, before the selection completes | true         | { oldSelection: `Array<any>`, newSelection: `Array<any>`, event: Event } |
| `onSearchInput`     | Emitted when the search input's event is triggered             | false        | { searchValue: `string` }               |
| `onAddition`        | Emitted when an item is being added to the data collection              | false        | { oldCollection: `Array<any>`, addedItem: `<any>`, newCollection: `Array<any>` }|
| `onDataPreLoad`     | Emitted when new chunk of data is loaded from the virtualization        | false        | { event: Event }                        |
| `onOpening`   | Emitted before the dropdown is opened                                   | false        | { event: Event }                        |
| `onOpened`    | Emitted after the dropdown is opened                                    | false        | { event: Event }                        |
| `onClosing`   | Emitted before the dropdown is closed                                   | false        | { event: Event }                        |
| `onClosed`    | Emitted after the dropdown is closed                                    | false        | { event: Event }                        |

### Methods
<div class="divider--half"></div>

| Name             | Description                 | Return type          | Parameters                  |
|----------------- |-----------------------------|----------------------|-----------------------------|
| `open`           | Opens drop down             | `void`               | `None`                      |
| `close`          | Closes drop down            | `void`               | `None`                      |
| `toggle`         | Toggles drop down           | `void`               | `None`                      |
| `selectedItems`  | Get current selection state | `Array<any>`         | `None`                      |
| `selectItems`    | Select defined items        | `void`               | items: `Array<any>`, clearCurrentSelection: `boolean` |
| `deselectItems`  | Deselect defined items      | `void`               | items: `Array<any>`         |
| `selectAllItems` | Select all (filtered) items | `void`               | ignoreFilter?: `boolean` - if `true` selects **all** values |
| `deselectAllItems` | Deselect (filtered) all items | `void`           | ignoreFilter?: `boolean` - if `true` deselects **all** values |

## Known Issues

- Combo input that displays the selected items is not editable, however due to a browser specifics in IE and FireFox the cursor is visible
- Backspace works in disabled combo in IE
- Combo is not having input for sizing its height. In the future `IgxInputGroup` will expose an option that allows custom sizing and then `IgxCombo` will use the same functionality for proper styling and better consistency.

### Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo_features.md)
* [Combo Remote Binding](combo_remote.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)