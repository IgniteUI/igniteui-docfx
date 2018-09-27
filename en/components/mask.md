---
title: Mask Directive Component - Native Angular | Ignite UI for Angular
_description: With the Mask Directive in Ignite UI for Angular, the developer can control user input and format the visible value based on configurable mask rules, providing different input options and ease in use and configuration.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular mask directive, Mask, Directive, Mask Editor, Angular Mask Editor
---

##Mask

By applying `igxMask` directive on a **text input field**, the developer can control user input and format the visible value, based on configurable mask rules. It provides different input options and ease in use and configuration.

### Mask Demo
<div class="sample-container loading" style="height: 330px">
    <iframe id="mask-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
`igxMask` directive is used on an input of type **text**.
To get started with the Ignite UI for Angular Mask directive, let's first import the **IgxMaskModule** and **IgxInputGroupModule** in our **app.module.ts** file.

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
    <iframe id="mask-sample2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Bind to Formatted/Raw Value
Use the `includeLiterals` input to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, `includeLiterals` is set to *false* and the raw value is used.

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
    <iframe id="mask-sample3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
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
        <input igxInput name="name" type="text" required
        [(ngModel)]="person.name" />
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

### API Summary
The following tables summarize some of the useful **igxMask** directive inputs and outputs.

<div class="divider--half"></div>

#### Inputs
The following inputs are available for the **igxMask** directive:

| Name | Type | Description |
| :--- | :--- | :--- |
| `igxMask` | string | Specifies the current input mask. |
| `promptChar` | string | Specifies the character representing a fillable spot in the mask. By default, the prompt char is "_". |
| `includeLiterals` | boolean | Specifies if the bound value includes the formatting symbols.  |

<div class="divider--half"></div>

#### Outputs
The following outputs are available for the **igxMask** directive:

| Name | Description |
| :--- | :--- |
| `onValueChange`  | Emits an event each time the value changes. The event parameter provides `rawValue` and `formattedValue` properties. |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
