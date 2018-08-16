---
title: Combo Features
_description: Combo control exposes several of features including data and value binding, custom values, filtering, grouping, etc. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Features, Angular Combo Features, Angular Combo Data Binding, Angular Combo Value Binding, Angular Combo Data Filtering, Angular Combo Grouping, Angular Combo Custom Values
---

## Combo Features
<p class="highlight">
Combo control exposes several features including data and value binding, custom values, filtering, grouping, etc. 
</p>
<div class="divider"></div>

### Demo
The following demo demonstrates some of the combo features that are enabled/disabled at runtime:

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
To get started with the Ignite UI for Angular Combo import the **IgxComboModule** in the **app.module.ts** file. For the following sample the `igx-switch` component is used and in addition we will need the **IgxSwitchModule** also:

```typescript
// app.module.ts

...
import { IgxComboModule, IgxSwitchModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxSwitchModule],
    ...
})
export class AppModule {}
```

The demo uses `igx-switch` component to toggle `igx-combo` properties' values. Note that grouping is enabled/disabled by setting `groupKey` to corresponding data source entity or setting it to empty string.
```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" [displayKey]="'field'" [valueKey]="'field'"
        [allowCustomValues]="customValues"
        [filterable]="filterable"
        [disabled]="disabled">
    </igx-combo>
</div>
<div class="switch-container">
    <igx-switch [(ngModel)]="filterable">Enable Filtering</igx-switch><br />
    <igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch><br />
    <igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch><br />
    <igx-switch [(ngModel)]="disabled">Disabled</igx-switch>
</div>
```

```typescript
    @ViewChild("combo", { read: IgxComboComponent }) public combo: IgxComboComponent;

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? "region" : "";
    }
```

## Data Binding

Basic usage of `igx-combo` bound to a local data source, defining `valueKey` and `displayKey`:

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

> Note: If `displayKey` is omitted then `valueKey` entity will be used instead.


Follow this [topic](combo_remote.md) for more details about binding `igx-combo` with remote data.

## Value Binding

For two-way data-binding, the `ngModel` can be used like shown below:

```html
<igx-combo #combo [(ngModel)]="values"></igx-combo>
```

```typescript
@ViewChild('combo', { read: IgxComboComponent }) public combo: IgxComboComponent;
get values() {
    return this.combo.selectedItems();
}
set values(newValues: Array<any>) {
    this.combo.selectItems(newValues);
}
```

<div class="divider--half"></div>

## Filtering
By default filtering in the combo is enabled. It can be disabled using the following code:

```html
<igx-combo [filterable]="false"></igx-combo>
```

<div class="divider--half"></div>

<div class="divider--half"></div>

## Custom Values
If the custom values are enabled, the missing item could be added using the UI of the combo.

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

## Disabled
You can disable combo using the following code:

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

## Grouping
Defining a combo's groupKey option will group the items, according to the provided key.

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

<div class="divider--half"></div>

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
|  `height`                | defines combo height                              | string                      |
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

## Additional Resources
<div class="divider--half"></div>

* [Combo Remote Binding](combo_remote.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)