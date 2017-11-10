---
title: Radio Component
_description: With Ignite UI for Angular Radio Button control, developers can seamlessly present lists of options for users to select for better UI.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Radio Button components, Angular Radio Button controls
---

##Radio Button
<p class="highlight">The Ignite UI for Angular Radio Button component renders a set of radio buttons to allow the user make a choice and submit data. The user is able to select just one from the available options.</p>
<div class="divider"></div>

### Usage

A number of options, attributes and events are available to customize the component look and feel and the way the radio button is working.

```html
<igx-radio
    *ngFor="let item of ['Foo', 'Bar', 'Baz']"
    value="{{item}}"
    name="group"
    [(ngModel)]="user.favouriteVarName">
    {{item}}
</igx-radio>
```

The above markup will render three radio buttons, one for each item of the ['Foo', 'Bar', 'Baz'] array. The'value' property is mapped to the input element value attribute,
while the content of the <igx-radio> tag is what gets displayed in the label associated with the input.
<div class="divider--half"></div>

###Properties
You can assign unique id's by using the 'id' property and use the 'name' property to group buttons together.

The rest of the properties are also standard and control the tabIndex, disabled and checked attributes of the input element that gets rendered:

```html
<igx-radio
    id="{{user.id}}"
    value="{{user.manHours}}"
    [tabIndex]="50"
    [disabled]="false"
    [checked]="false"
    [(ngModel)]="user.favouriteVarName">
    {{item}}
</igx-radio>
```
<div class="divider--half"></div>

###Events
You can attach to a change event using `(onchange)="doAlert($event)"`:

```html
<igx-radio
	value="{{user.id}}"
	tabIndex="50"
	(change)="doAlert($event)"
	(focus)="doAlert($event)"
	(blur)="doAlert($event)"
	[(ngModel)]="user.favouriteVarName">
	{{user.name}}
</igx-radio>
```

```typescript
import { Component } from "@angular/core";
import { IgxRadioModule } from "../../src/radio/radio";

@Component({
    selector: "radio-button",
    templateUrl: "radio-button.html"
})
export class RadioSampleComponent {
    user = {
        name: 'John Doe',
        favouriteVarName: 'Foo',
        id: 12,
    };

    doAlert() {
        alert("Thank you for selecting this option ! !");
    }
}
```
<div class="divider--half"></div>

### Radio Button Demo
<div class="sample-container" style="height:600px">
<iframe src='https://embed.plnkr.co/a2Zmf05zcAX1hiE6OwxY/?show=preview&sidebar=false' width="100%" height="100%" seamless frameBorder="0"></inframe>
</div>