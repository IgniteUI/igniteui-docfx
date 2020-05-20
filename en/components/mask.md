---
title: Mask Directive Component - Native Angular | Ignite UI for Angular
_description: With the Mask Directive in Ignite UI for Angular, the developer can control user input and format the visible value based on configurable mask rules, providing different input options and ease in use and configuration.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular mask directive, Mask, Directive, Mask Editor, Angular Mask Editor
---

##Mask

By applying [`igxMask`]({environment:angularApiUrl}/classes/igxmaskdirective.html) directive on a **text input field**, the developer can control user input and format the visible value, based on configurable mask rules. It provides different input options and ease in use and configuration.

### Mask Demo
<div class="sample-container loading" style="height: 330px">
    <iframe id="mask-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/mask-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
[`igxMask`]({environment:angularApiUrl}/classes/igxmaskdirective.html) directive is used on an input of type **text**.

To get started with the Mask directive, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxMaskModule` and `IgxInputGroupModule` in our **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxMaskModule, IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxMaskModule]
    ...
})
export class AppModule {}
```

<div class="divider--half"></div>

#### Supported Built-in Mask Rules
<div class="divider--half"></div>

| Mask Character | Description |
| :--- | :--- |
| 0 | requires a digit (0-9) |
| 9 | requires a digit (0-9) or a space |
| # | requires a digit (0-9), plus (+), or minus (-) sign |
| L | requires a letter (a-Z) |
| ? | requires a letter (a-Z) or a space |
| A | requires an alphanumeric (0-9, a-Z) |
| a | requires an alphanumeric (0-9, a-Z) or a space |
| & | any keyboard character (excluding space) |
| C | any keyboard character |

#### Apply Mask on Input
In the following example, we apply a phone number with an extension mask to an input.

```html
<!--sample.component.html-->

<igx-input-group>
    <igx-prefix>
        <igx-icon>phone</igx-icon>
    </igx-prefix>
    <label igxLabel>Phone</label>
    <input igxInput type="text" [igxMask]="'(####) 00-00-00 Ext. 9999'"/>
</igx-input-group>
```

If the sample is configured properly, an input with the applied formatting mask appears.

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-2" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Bind to Formatted/Raw Value
Use the [`includeLiterals`]({environment:angularApiUrl}/classes/igxmaskdirective.html#includeliterals) input to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, [`includeLiterals`]({environment:angularApiUrl}/classes/igxmaskdirective.html#includeliterals) is set to *false* and the raw value is used.

```html
<!--sample.component.html-->

<igx-switch [(ngModel)]="includeLiterals" (change)="clear()">
    Include Literals
</igx-switch>

<igx-input-group>
    <label igxLabel>
        Social Security Number
    </label>
    <input #ssn name="socialSecurityNumber" type="text"
        igxInput
        [igxMask]="'###-##-####'"
        [(ngModel)]="socialSecurityNumber"
        [includeLiterals]="includeLiterals" />
</igx-input-group>

<p *ngIf="socialSecurityNumber.length > 0">Value: {{ socialSecurityNumber }}</p>
```

```typescript
// sample.component.ts

public socialSecurityNumber: string = "123-45-6789";
public includeLiterals: boolean = true;

public clear() {
    this.socialSecurityNumber = "";
}
```

<div class="sample-container loading" style="height: 160px">
    <iframe id="mask-sample3-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-3" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Validate Masked Values
In addition to setting a mask to an input, you can validate the entered value as well. The following example implements masks, validation and notification for invalid data using the Mask directive and Snack Bar component.

```html
<!--sample.component.html-->

<form class="mask-sample" action="/" method="POST">
    <h4 class="form-title">Personal Data</h4>

    <igx-input-group>
        <label igxLabel for="name">Name</label>
        <input igxInput name="name" type="text" 
            [(ngModel)]="person.name" required />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Birthday</label>
        <input igxInput #dateInput name="birthday" type="text"
            [igxMask]="'00/00/0000'"
            [(ngModel)]="person.birthday"
            (blur)="validateDate(dateInput, snackbar)" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="socialSecurityNumber">Social Security Number</label>
        <input igxInput #ssn name="socialSecurityNumber" type="text"
            [igxMask]="'###-##-####'"
            [(ngModel)]="person.socialSecurityNumber"
            (blur)="validateSSN(ssn, snackbar)" />
    </igx-input-group>

    <igx-snackbar #snackbar></igx-snackbar>
</form>
```

```typescript
// sample.component.ts

public person: Person;

constructor() {
    this.person = {
        birthday: null,
        name: "John Doe",
        socialSecurityNumber: ""
    };
}

public ngOnInit() {}

public validateDate(dateInput, snackbar) {
    if (!this.isDateValid(dateInput.value)) {
        this.notify(snackbar, "Invalid Date", dateInput);
    }
}

public validateSSN(ssnInput, snackbar) {
    if (!this.isSSNValid(ssnInput.value)) {
        this.notify(snackbar, "Invalid SSN", ssnInput);
    }
}

private isDateValid(date) {
    return (new Date(date).toLocaleString() !== "Invalid Date");
}

private isSSNValid(ssn) {
    const ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
    return (ssn.match(ssnPattern));
}

private notify(snackbar, message, input) {
    snackbar.message = message;
    snackbar.show();
}
```

```typescript
// person.ts

export class Person {
    constructor(
        public name: string,
        public socialSecurityNumber: string,
        public birthday: Date
      ) {  }
}
```

#### Text Selection
You can force the component to select all of the input text on focus using [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html). Find more info on `igxTextSelection` at [Label & Input](label_input.md#focus--text-selection).

```html
<igx-input-group>
    <input igxInput [igxMask]="'###-##-####'" [igxTextSelection]="true"/>
</igx-input-group>
```

> NOTE: In order for the component to work properly, it is crucial to set `igxTextSelection` after the `igxMask` directive. The reason for this is both directives operate on the input `focus` event so text selection should happen after the mask is set.

#### Apply additional formatting on focus and blur
In addition to the default mask behavior, the user can implement his own custom pipes and take advantage of the [`focusedValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#focusedvaluepipe) and [`displayValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#displayvaluepipe) input properties, to transform the value to a desired output when the input gets or loses focus. This will not affect the underlying model value. Let's demonstrate how this can be achieved!

Implement two pipes that will append/remove a '%' sign at the end of the displayed value:
```typescript
@Pipe({ name: 'displayFormat' })
export class DisplayFormatPipe implements PipeTransform {
    transform(value: any): string {
        let val = value;
        if (val.indexOf('%') === -1) {
            val += '%';
        }
        return val;
    }
}

@Pipe({ name: 'inputFormat' })
export class InputFormatPipe implements PipeTransform {
    transform(value: any): string {
        let val = value;
        if (val.indexOf('%') !== -1) {
            val = val.replace(new RegExp('%', 'g'), '');
        }
        return val;
    }
}
```

Pass an instance of each pipe to the [`focusedValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#focusedvaluepipe) and [`displayValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#displayvaluepipe) input properties as follows:

```typescript
value = 1230;
displayFormat = new DisplayFormatPipe();
inputFormat = new InputFormatPipe();
```
```html
<igx-input-group>
    <label igxLabel for="email">Increase</label>
    <input igxInput type="text" [(ngModel)]="value"
                                [igxMask]="'00.00'"
                                [focusedValuePipe]="inputFormat"
                                [displayValuePipe]="displayFormat"/>
</igx-input-group>
```

As a result, a '%' sign should be appended to the value on blur (i.e. when the user clicks outside the input) and will be removed once the input gets focus!

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-4" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Adding a placeholder
The user can also take advantage of the [`placeholder`]({environment:angularApiUrl}/classes/igxmaskdirective.html#placeholder) input property, which serves the purpose of the native input placeholder attribute. If no value is provided for the [`placeholder`]({environment:angularApiUrl}/classes/igxmaskdirective.html#placeholder), the value set for the mask is used.

```typescript
value = null;
```
```html
<igx-input-group>
    <label igxLabel>Date</label>
    <input igxInput type="text" [(ngModel)]="value"
                                [igxMask]="'00/00/0000'"
                                [placeholder]="'dd/mm/yyyy'"/>
</igx-input-group>
```

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample5-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-5" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxMaskDirective]({environment:angularApiUrl}/classes/igxmaskdirective.html)
* [IgxSnackbarComponent]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
