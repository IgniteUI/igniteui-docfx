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

## Search input focus
`autoFocusSearch` property controls if the search input should receive focus when a combo is opened. When the property is `true` (by default), the combo's search box is focused on open. When set to `false`, the focus goes to the combo's items container. For mobile devices, this can be used to prevent the software keyboard from popping up when opening the combo.

```html
<igx-combo [autoFocusSearch]="false"></igx-combo>
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
