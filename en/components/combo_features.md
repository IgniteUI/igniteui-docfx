---
title: Combo Features
_description: Combo control exposes several of features including data and value binding, custom values, filtering, grouping, etc. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Features, Angular Combo Features, Angular Combo Data Binding, Angular Combo Value Binding, Angular Combo Data Filtering, Angular Combo Grouping, Angular Combo Custom Values
---

## Combo Features
<p class="highlight">
Combo control exposes several features including data and value binding, **[custom values](combo_features.md#custom-values)**, **[filtering](combo_features.md#filtering)**, **[grouping](combo_features.md#grouping)**, etc. 
</p>
<div class="divider"></div>

### Demo
The following demo demonstrates some of the combo features that are enabled/disabled at runtime:

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
To get started with the Ignite UI for Angular Combo import the `IgxComboModule` in the **app.module.ts** file. For the following sample the [igx-switch](switch.md) component is used and in addition we will need the `IgxSwitchModule` also:

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

The demo uses [igx-switch]({environment:angularApiUrl}/classes/igxswitchcomponent.html) component to toggle [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) properties' values. Note that grouping is enabled/disabled by setting [groupKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#groupkey) to corresponding data source entity or setting it to empty string.
```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" displayKey="field" valueKey="field"
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

Basic usage of [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) bound to a local data source, defining [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey):

```html
<igx-combo [data]="lData" valueKey="ProductID" displayKey="ProductName"></igx-combo>
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

> [!Note]
> If [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) is omitted then [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) entity will be used instead.


Follow this [topic](combo_remote.md) for more details about binding [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) with remote data.


## Selection
The combo handles selection differently, depending on its [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) property.

### Selection with valueKey
If a `[valueKey]` is provided, all of the combo's selection events will be handled with the value of the items' `valueKey` property.
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
 - [`selectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems), [`deselectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#deselectitems), [`selectAllItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectallitems), [`deselectAllItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#deselectallitems) - these methods should be called with the corresponding `valueKey` property values if `[valueKey]` is specified for the combo.
 - [`onSelectionChange`]({environment:angularApiUrl}/classes/igxcombocomponent.html#onselectionchange) - the `newSelection`, `oldSelection`, `added` and `removed` arrays of the [`IComboSelectionChangeEventArgs`]({environment:angularApiUrl}/interfaces/icomboselectionchangeeventargs.html) will hold the corresponding values of the items. 

### Selection without valueKey
When no `[valueKey]` is provided, the combo handles selection based on **equality (===)**.
If the data is of a primitive type (e.g. `string`, `number`), the provided array to selection methods should contain only the values that you'd like to select. For example:
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
> If the data is comprised of primitive types (e.g. `string` or `number`), **do not** pass a `[valueKey]` to the combo.

If the data is of a more complex type (e.g. `object`), the array provided to selection methods should contain a **reference** to the entries you'd like to select.
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

### Demo

The difference between the two ways of binding data can be seen in the demo below:

<div class="sample-container loading" style="height: 600px;">
    <iframe id="combo-binding-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-binding" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

## Custom Overlay Settings
The Combo allows users to change the way the list of items is shown. This can be done by defining custom [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) and passing them to the Combo's [`overlaySettings`]({environment:angularApiUrl}/classes/igxcombocomponent.html#overlaysettings) Input:

```typescript
// custom.component.ts
export class CustomOverlayCombo {
    ...
    public customSettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy({ openAnimation: scaleInCenter, closeAnimation: scaleOutCenter }),
        modal: true,
        closeOnOutsideClick: true,
    };
}
```

```html
<!-- custom.component.html -->
<igx-combo [data]="items" [overlaySettings]="customSettings"></igx-combo>
```

For example, with the above settings, the Combo's list will display centered, using [GlobalPositionStrategy](overlay_position.md#global):

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-overlay-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-overlay" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-overlay-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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
<div class="divider--half"></div>

* IgxComboComponent [**API Reference**]({environment:angularApiUrl}/classes/igxcombocomponent.html) and
[**Themes Reference**]({environment:sassApiUrl}/index.html#themes-mixin-igx-combo).

## Additional Resources
<div class="divider--half"></div>

* [Combo Remote Binding](combo_remote.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)
* [IgxSwitch](switch.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
