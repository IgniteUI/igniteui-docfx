---
title: Cascading Scenario
_description: The igx-combo and igx-drop-down exposes events, properties and methods that allows to easily construct cascading scenario using one of the controls or both of them.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls, Angular Cascading Combo, Angular Drop Down, Angular Cascading Scenario
_language: kr
---

## Cascading Scenario
<p class="highlight">

The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) and [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) exposes events, properties and methods that allows to easily construct cascading scenario, either using one of the controls or both of them.
</p>
<div class="divider"></div>

### Demo

The following sample demonstrates scenario, using two [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) and [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) components:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="cascading-combos-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/cascading-combos" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
To get started import the [IgxComboModule]({environment:angularApiUrl}/classes/igxcombomodule.html), [IgxDropDownModule]({environment:angularApiUrl}/classes/igxdropdownmodule.html), [IgxIconModule]({environment:angularApiUrl}/classes/igxiconmodule.html), [IgxInputGroupModule]({environment:angularApiUrl}/classes/igxinputgroupmodule.html) in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule],
    ...
})
export class AppModule {}
```

In the sample below are used an [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) and two [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) components along with corresponding input elements. The API of the both components are used to get selected item from one and load data source for the next either drop down or combo, clear selection or reset data source.

```html

<div class="combo-container">
    <igx-input-group type="box" #inputGroupCountry style="width: 300px;" (click)="toggleDDCountry()">
        <input igxInput #inputCountry name="inputCountry" type="text" [(ngModel)]="country" readonly placeholder="Choose Country..."
            [igxDropDownItemNavigation]="dropdownCountry"/>
        <igx-suffix><igx-icon>{{arrowCountry}}</igx-icon></igx-suffix>
    </igx-input-group>
    <igx-drop-down #dropdownCountry width="300px"
        (onSelection)="selectCountry($event)" (onClosed)="onCountryClosed()">
        <igx-drop-down-item *ngFor="let c of countryData">
            {{ c }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>

<div class="combo-container">
    <igx-input-group type="box" #inputGroupProvince style="width: 300px;" (click)="toggleDDProvince()" [disabled]="disabledProvince">
        <input igxInput #inputProvince name="inputProvince" type="text" [(ngModel)]="province" readonly placeholder="Choose Province..."
            [igxDropDownItemNavigation]="dropdownProvince"/>
        <igx-suffix><igx-icon>{{arrowProvince}}</igx-icon></igx-suffix>
    </igx-input-group>
    <igx-drop-down #dropdownProvince width="300px"
        (onSelection)="selectProvince($event)" (onClosed)="onProvinceClosed()">
        <igx-drop-down-item *ngFor="let p of provinceData">
            {{ p }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>

<div class="combo-container">
    <igx-combo #comboTown width="300px" [itemsMaxHeight]="225"
        [data]="townData" [disabled]="true"
        placeholder="Choose Town..." searchPlaceholder="Search..."
        [allowCustomValues]="false">
    </igx-combo>
</div>

```

```typescript
import { Component, ViewChild } from "@angular/core";
import { ConnectedPositioningStrategy, IgxComboComponent, IgxDropDownComponent, IgxInputGroupComponent, NoOpScrollStrategy, OverlaySettings } from "igniteui-angular";
import { data } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./cascading-combos.component.scss"],
    templateUrl: "./cascading-combos.component.html"
})
export class CascadingCombos {

    @ViewChild("inputGroupCountry", { read: IgxInputGroupComponent}) public inputGroupCountry: IgxInputGroupComponent;
    @ViewChild("inputGroupProvince", { read: IgxInputGroupComponent}) public inputGroupProvince: IgxInputGroupComponent;
    @ViewChild("inputCountry") public inputCountry: HTMLInputElement;
    @ViewChild("inputProvince") public inputProvince: HTMLInputElement;
    @ViewChild("dropdownCountry", { read: IgxDropDownComponent}) public dropdownCountry: IgxDropDownComponent;
    @ViewChild("dropdownProvince", { read: IgxDropDownComponent}) public dropdownProvince: IgxDropDownComponent;
    @ViewChild("comboTown", { read: IgxComboComponent }) public comboTown: IgxComboComponent;
    public arrowCountry = "arrow_drop_down";
    public arrowProvince = "arrow_drop_down";
    public disabledProvince = true;

    public countryData: any[] = [];
    public provinceData: any[] = [];
    public townData: any[] = [];
    public country: string;
    public province: string;
    public town: string;
    private _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new NoOpScrollStrategy()
    };

    constructor() {
        this.countryData = Object.keys(data);
    }

    public toggleDDCountry() {
        this._overlaySettings.positionStrategy.settings.target = this.inputGroupCountry.element.nativeElement;
        this.dropdownCountry.toggle(this._overlaySettings);
        this.arrowCountry = "arrow_drop_up";
    }

    public toggleDDProvince() {
        this._overlaySettings.positionStrategy.settings.target = this.inputGroupProvince.element.nativeElement;
        this.dropdownProvince.toggle(this._overlaySettings);
        this.arrowProvince = "arrow_drop_up";
    }

    public selectCountry(args) {
        this.disabledProvince = false;
        this.country = Object.keys(data)[args.newSelection.index];
        this.provinceData = Object.keys(data[this.country]);
        this.province = "";
        this.comboTown.deselectAllItems();
    }

    public selectProvince(args) {
        this.arrowProvince = "arrow_drop_down";
        this.comboTown.disabled = false;
        this.province = this.provinceData[args.newSelection.index];
        this.townData = data[this.country][this.province];
        this.comboTown.deselectAllItems();
    }

    public onCountryClosed() {
        this.arrowCountry = "arrow_drop_down";
    }

    public onProvinceClosed() {
        this.arrowProvince = "arrow_drop_down";
    }
}
```
> Note: The [igx-overlay]({environment:angularApiUrl}/classes/igxoverlayservice.html) position strategy is used to show drop down below input and emulate a single selection combo.

## Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo_features.md)
* [Combo Remote Binding](combo_remote.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [IgxOverlay]({environment:angularApiUrl}/classes/igxoverlayservice.html)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)