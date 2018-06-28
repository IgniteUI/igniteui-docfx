---
title: Combo Component
_description: The igx-combo provides a powerful input, combining features of the basic HTML input, select and the IgniteUI for Angular igx-drop-down controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls
---

## Combo
<p class="highlight">
The igx-combo component provides a powerful input, combining the features of the basic HTML input, select and the IgniteUI for Angular igx-drop-down components.
The combo component provides easy filtering and selection of multiple items, grouping and adding custom values to the dropdown list.
Custom templates could be provided in order to customize different areas of the components, such as items, header, footer, etc.
The combo component is integrated with the Template Driven and Reactive Forms.
The igx-combo exposes intuitive keyboard navigation and it is accessibility compliant.
Drop Down items are virtualized, which guarantees smooth work, even if the igx-combo is bound to data source with a lot of items.
</p>
<div class="divider"></div>

### Combo Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

## Usage
The `IgxComboComponent` allows you to search and select items from the list. The combo uses the `IgxDropDownComponent` internally as a items container. To get started with the Ignite UI for Angular Combo, let's first import the **IgxComboModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxComboModule],
    ...
})
export class AppModule {}
```

Then in the template we place the combo:

```html
<igx-combo [data]="localData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

The result is as follows:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Features

### Data Binding

Basic usage of `igx-combo` bound to a local data source, defining `valueKey` and `displayKey`:

```html
<igx-combo [data]="localData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

> Note: If `displayKey` is omitted them `valueKey` entity will be used instead.


Remote binding, defining `valueKey` and `displayKey`, and exposing `onDataPreLoad` that allows to load new chunk of remote data to the combo (see the sample above as a reference):

```html
<igx-combo [data]="remoteData | async" (onDataPreLoad)="dataLoading($event)" [valueKey]="'ProductID'" [displayKey]="'ProductName'" ></igx-combo>
```

```typescript
public ngOnInit() {
    this.remoteData = this.remoteService.remoteData;
}

public ngAfterViewInit() {
    this.remoteService.getData(this.combo.virtualizationState, (data) => {
        this.combo.totalItemCount = data.count;
    });
}

public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        this.prevRequest = this.remoteService.getData(this.combo.virtualizationState, () => {
            this.cdr.detectChanges();
            this.combo.triggerCheck();
        });
    }
```

> Note: In order to have combo with remote data, what you need is to have a service that retrieves data chunks from a server.
What the combo exposes is a `virtualizationState` property that gives state of the combo - first index and the number of items that needs to be loaded.
The service, should inform the combo for the total items that are on the server - using the `totalItemCount` property.

### Value Binding

If we want to use a two-way data-binding, we could just use `ngModel` like this:

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

### Filtering
By default filtering in the combo is enabled. It can be disabled using the following code:

```html
<igx-combo [filterable]="false"></igx-combo>
```

<div class="divider--half"></div>

<div class="divider--half"></div>

### Custom Values
If the custom values are enabled, the missing item could be added using the UI of the combo.

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

### Disabled
You can disable combo using the following code:

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

### Grouping
Defining a combo's groupKey option will group the items, according to the provided key.

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

<div class="divider--half"></div>

### Templates
Custom templates for different areas of the igx-combo component can be defined, including items, header, footer, empty list and adding button.
When defining one of the templates below, you need to reference them using the following predefined names:

Defining item template:
```html
<igx-combo>
	<ng-template #itemTemplate let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
			<span class="region">Region: {{ display.region }}</span>
		</div>
	</ng-template>
</igx-combo>
```

Defining header template:

```html
<igx-combo>
    <ng-template #headerTemplate>
        <div class="header-class">Custom header</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

Defining footer template:

```html
<igx-combo>
    <ng-template #footerTemplate>
        <div class="footer-class">Custom footer</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

Defining empty template:

```html
<igx-combo>
    <ng-template #emptyTemplate>
        <span>List is empty</div>
    </ng-template>
</igx-combo>
```

Defining add template:

```html
<igx-combo>
    <ng-template #addItemTemplate>
        <span>Add town</span>
    </ng-template>
</igx-combo>
```
<div class="divider--half"></div>

### Integration with Template Driven and Reactive Forms

Template Forms:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="input-group-sample-6-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/input-group-sample-6" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="input-group-sample-6-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


Reactive Forms:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Cascading Scenario

The following sample demonstrates cascading igx-drop-down and igx-combo components

<div class="sample-container loading" style="height: 540px;">
    <iframe id="cascading-combos-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/cascading-combos" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


## Keyboard Navigation

When igxCombo is closed and focused:
- `ArrowDown` or `Alt` + `ArrowDown` will open the combo drop down and will move focus to the search input.

When igxCombo is opened and search input is focused:
- `ArrowUp` or `Alt` + `ArrowUp` will close the combo drop down and will move focus to the closed combo.
- `ArrowDown` will move focus from the search input to the first list item.If list is empty and custom values are enabled will move it to the Add new item button.
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

- `Space` and `Enter` will add new item with valueKey and displayKey equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if list is empty will be moved to the search input.

## API

### Inputs
<div class="divider--half"></div>

| Name                     | Description                                       | Type                        |
|--------------------------|---------------------------------------------------|-----------------------------|
|  `id`                    | combo id                                          | string                      |
|  `data`                  | combo data source                                 | any                         |
|  `value`                 | combo value                                       | string                      |
|  `allowCustomValue`      | enable/disables combo custom value                | boolean                     |
|  `valueKey`              | combo value data source property                  | string                      |
|  `displayKey`            | combo display data source property                | string                      |
|  `groupKey`              | combo item group                                  | string                      |
|  `virtualizationState`   | defines he current state of the virtualized data. It contains `startIndex` and `chunkSize`      | `IForOfState`               |
|  `totalItemCount`        | total count of the virtual data items, when using remote service                                | number                      |
|  `width `                | defines combo width                               | string                      |
|  `height`                | defines combo height                              | string                      |
|  `itemsMaxHeight `       | defines drop down height                          | string                      |
|  `itemsMaxWidth `        | defines drop down width                           | string                      |
|  `itemHeight `           | defines drop down item height                     | string                      |
|  `placeholder `          | defines the "empty value" text                    | string                      |
|  `searchPlaceholder `    | defines the placeholder text for search input     | string                      |
|  `collapsed`             | gets drop down state                              | boolean                     |
|  `disabled`              | defines whether the control is active or not      | boolean                     |
|  `ariaLabelledBy`        | defines label ID related to combo                 | boolean                     |
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
| `dropDownOpening`   | Emitted before the dropdown is opened                                   | false        | { event: Event }                        |
| `dropDownOpened`    | Emitted after the dropdown is opened                                    | false        | { event: Event }                        |
| `dropDownClosing`   | Emitted before the dropdown is closed                                   | false        | { event: Event }                        |
| `dropDownClosed`    | Emitted after the dropdown is closed                                    | false        | { event: Event }                        |

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

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)