---
title: Cascading Scenario
_description: The igx-combo and igx-select exposes exposes events, properties and methods that allows users to easily construct cascading scenarios, either using one of the controls or both of them.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls, Angular Cascading Combo, Angular Select, Angular Cascading Scenario
_language: en
---

# Cascading Scenario
<p class="highlight">
The Ignite UI for Angular Combo and Select components expose events, properties and methods that allow users to easily construct cascading scenarios, either using one of the controls or both of them.
</p>

## Angular Cascading Scenario Example
The following sample demonstrates a scenario where the [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) and the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) components are used together:


<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/cascading-combos" alt="Angular Cascading Scenario Example">
</code-view>

<div class="divider--half"></div>

## Usage

### First Steps
To get started, first you need to import the `IgxComboModule` and the `IgxSelectModule` in your **app.module.ts** file:

```typescript
import { IgxComboModule, IgxSelectModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxSelectModule],
    ...
})
export class AppModule {}
```

### Template Configuration
The APIs of both components are used to get the selected item from one and load data source for the next component either select or combo, as well as clear selection and reset data source.

```html
<igx-select type="box" #cntr placeholder="Choose Country..."
    (onSelection)="selectCountry($event)" [(ngModel)]="location.country">
    <igx-select-item *ngFor="let c of countryData" [value]="c"> {{ c }} </igx-select-item>
</igx-select>
<igx-select type="box" #prvnc placeholder="Choose Province..." [disabled]="!cntr.value"
    (onSelection)="selectProvince($event)" [(ngModel)]="location.province">
    <igx-select-item *ngFor="let p of provinceData" [value]="p"> {{ p }} </igx-select-item>
</igx-select>
<igx-combo #twn [itemsMaxHeight]="225" [data]="townData" [disabled]="!prvnc.value"
    placeholder="Choose Town..." searchPlaceholder="Search..." [allowCustomValues]="false"
    [(ngModel)]="location.towns">
</igx-combo>

```

### Component Definition
```typescript
import { Component } from "@angular/core";
import { data } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./cascading-combos.component.scss"],
    templateUrl: "./cascading-combos.component.html"
})
export class CascadingCombos {
    public location: { country: string, province: string, towns: string[] } = { country: "", province: "", towns: [] };
    public data = data;
    public countryData = [];
    public provinceData = [];
    public townData = [];

    constructor() {
        this.countryData = Object.keys(data);
    }

    public selectCountry(args) {
        this.provinceData = Object.keys(this.data[args.newSelection.value]);
        this.location.province = "";
        this.location.towns = [];
    }

    public selectProvince(args) {
        this.townData = this.data[this.location.country][args.newSelection.value];
        this.location.towns = [];
    }
}
```

## API Summary
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

Additional components and/or directives with relative APIs that were used:
* [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html)  

## Additional Resources
<div class="divider--half"></div>

* [Combo Component](combo.md)
* [Combo Features](combo-features.md)
* [Combo Remote Binding](combo-remote.md)
* [Combo Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)