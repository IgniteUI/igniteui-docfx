---
title: Cascading Scenario
_description: The igx-combo and igx-select exposes events, properties and methods that allows to easily construct cascading scenario using one of the controls or both of them.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls, Angular Cascading Combo, Angular Select, Angular Cascading Scenario
_language: kr
---

## Cascading Scenario
<p class="highlight">

The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) and [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) exposes events, properties and methods that allows to easily construct cascading scenario, either using one of the controls or both of them.
</p>
<div class="divider"></div>

### Demo

The following sample demonstrates scenario, using two [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) and [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) components:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="cascading-combos-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/cascading-combos" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

### Usage
To get started import the `IgxComboModule`, `IgxSelectModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule, IgxSelectModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxSelectModule],
    ...
})
export class AppModule {}
```

In the sample below are used an [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) and two [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) components. The API of the both components are used to get selected item from one and load data source for the next either select or combo, clear selection or reset data source.

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
        this.location.towns = [this.townData[0]];
    }
}
```

## Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo-features.md)
* [Combo Remote Binding](combo-remote.md)
* [Combo Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [IgxOverlay]({environment:angularApiUrl}/classes/igxoverlayservice.html)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)