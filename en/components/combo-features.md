---
title: Combo Features
_description: Combo control exposes several of features including data and value binding, custom values, filtering, grouping, etc. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Features, Angular Combo Features, Angular Combo Data Binding, Angular Combo Value Binding, Angular Combo Data Filtering, Angular Combo Grouping, Angular Combo Custom Values
---

# Combo Features
<p class="highlight">
The Ignite UI for Angular Combo control exposes several features including data and value binding, custom values, filtering, grouping, etc. 
</p>

## Angular Combo Features Example
The following demo demonstrates some of the igx-combo features that are enabled/disabled at runtime:


<code-view style="height: 440px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/combo-features" alt="Angular Combo Features Example">
</code-view>

<div class="divider--half"></div>

## Usage

### First Steps
To get started with the Combo component, first you need to import the `IgxComboModule` in your **app.module.ts** file. Our sample also uses the [igx-switch]({environment:angularApiUrl}/classes/igxswitchcomponent.html) component to toggle combo properties' values, so we will need the `IgxSwitchModule` as well:

```typescript
import { IgxComboModule, IgxSwitchModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        IgxSwitchModule,
        ...
    ]
})
export class AppModule {}
```

### Template Configuration

```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" displayKey="field" valueKey="field"
        [allowCustomValues]="customValues"
        [filterable]="filterable"
        [showSearchCaseIcon]="showSearchCaseIcon"
        [disabled]="disabled">
    </igx-combo>
</div>
<div class="switch-container">
    <igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch>
    <igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch>
    <igx-switch [(ngModel)]="disabled">Disable Combo</igx-switch>
    <igx-switch [(ngModel)]="filterable">Enable Filtering</igx-switch>
    <igx-switch *ngIf="filterable" [(ngModel)]="showSearchCaseIcon">Show Case-sensitive Icon</igx-switch>
</div>
```

### Component Definition
Note that grouping is enabled/disabled by setting the [groupKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#groupkey) property to a corresponding data source entity or setting it to an empty string.

```typescript
    @ViewChild("combo", { read: IgxComboComponent }) public combo: IgxComboComponent;

    public filterable = true;
    public showSearchCaseIcon = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? "region" : "";
    }
```

## Features

### Data Binding
The following code snippet illustrates a basic usage of the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) bound to a local data source. The [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) specifies which property of the data entries will be stored for the combo's selection and the [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) specifies which property will be used for the combo text:

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
> If the `displayKey` property is omitted then the `valueKey` entity will be used instead.

Follow the [Combo Remote Binding topic](combo-remote.md) for more details about binding the combo component with remote data.

### Custom Overlay Settings
The combo component allows users to change the way a list of items is shown. This can be done by defining [Custom OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) and passing them to the [Combo's OverlaySettings]({environment:angularApiUrl}/classes/igxcombocomponent.html#overlaysettings) input:

```typescript
export class CustomOverlayCombo {
    ...
    public customSettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(
            { 
                openAnimation: scaleInCenter,
                closeAnimation: scaleOutCenter 
            }),
        modal: true,
        closeOnOutsideClick: true,
    };
}
```

```html
<igx-combo [data]="items" [overlaySettings]="customSettings"></igx-combo>
```

If everything is set up correctly, the combo's list will display centered, using the [GlobalPositionStrategy](overlay-position.md#global):


<code-view style="height: 440px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/combo-overlay" >
</code-view>


<div class="divider--half"></div>

> [!Note]
> The igx-combo component uses the [AutoPositionStrategy]({environment:angularApiUrl}/classes/autopositionstrategy.html) as a default position strategy.

### Filtering
By default, filtering in the combo is enabled. It can be disabled by setting the [filterable]({environment:angularApiUrl}/classes/igxcombocomponent.html#filterable) property to false.

Filtering options can be further enhanced by enabling the search case sensitivity. To display the case-sensitive icon in the search input, set the [showSearchCaseIcon]({environment:angularApiUrl}/classes/igxcombocomponent.html#showsearchcaseicon) property to true:

```html
<igx-combo [filterable]="false" [showSearchCaseIcon]="true"></igx-combo>
```

<div class="divider--half"></div>

### Custom Values
The [allowCustomValues]({environment:angularApiUrl}/classes/igxcombocomponent.html#allowcustomvalues) property controls whether custom values can be added to the collection. If it is enabled, a missing item could be included using the UI of the combo.

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

### Search Input Focus
The combo's [autoFocusSearch]({environment:angularApiUrl}/classes/igxcombocomponent.html#autofocussearch)  property controls if the search input should receive focus when a combo is opened. By default, the property is set to `true`. When set to `false`, the focus goes to the combo's items container. For mobile devices, this can be used to prevent the software keyboard from popping up when opening the combo.

```html
<igx-combo [autoFocusSearch]="false"></igx-combo>
```

<div class="divider--half"></div>

### Disable Combo
You can disable a combo using the following code:

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

### Grouping
Defining a combo's `groupKey` option will group the items, according to the provided key:

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

<div class="divider--half"></div>

## API Summary
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

Additional components and/or directives with relative APIs that were used:
* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [Combo Component](combo.md)
* [Combo Remote Binding](combo-remote.md)
* [Combo Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Cascading Scenario](combo-cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
