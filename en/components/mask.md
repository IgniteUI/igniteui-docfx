---
title: Mask Directive
_description: The Mask directive is intended to provide means for controlling user input and formatting the visible value based on configurable mask rules.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular mask directive, Mask, Directive, Mask Editor, Angular Mask Editor
---

##Mask
<p class="highlight">The Ignite UI for Angular Mask directive provides a convenient way to format user input through configurable mask rules. Masks are important when the input should obey a specific format, like for example a phone number. They also provide a visual clue for the end user what is expected as input.</p>
<div class="divider--half"></div>

### Mask Demo
<div class="sample-container loading" style="height: 500px">
    <iframe id="mask-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="mask-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
To get started with the Ignite UI for Angular Mask directive, let's first import the **IgxMaskModule** and **IgxInputModule** in our **app.module.ts** file. **IgxInputModule** is not required; it is used later in the examples. The **igxMask** directive can be used with any Angular input control.

```typescript
// app.module.ts

...
import { IgxMaskModule } from 'igniteui-angular/main';
import { IgxInputModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxMaskModule],
    imports: [..., IgxInputModule],
    ...
})
export class AppModule {}
```

<div class="divider--half"></div>

#### Supported Built-in Mask Rules


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

 <input igxInput name="phone" type="text" [igxMask]="'(####) 00-00-00 Ext. 9999'"/>
```

If the sample is configured properly, an input with the applied formatting mask appears.

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="mask-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Bind to Formatted/Raw Value
Use the `includeLiterals` input to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, `includeLiterals` is set to *false* and the raw value is used.

```html
<!--sample.component.html-->

<div>
  <igx-switch class="switch-style" [(ngModel)]="includeLiterals" (change)="clear()">
    <div style="width: 150px">Include Literals</div>
  </igx-switch>
  <input igxInput #ssn name="socialSecurityNumber" type="text" [igxMask]="'###-##-####'" [(ngModel)]="socialSecurityNumber"
    [includeLiterals]="includeLiterals" />
  <p>Value: {{ socialSecurityNumber }}</p>
</div>
```

```typescript
// sample.component.ts

public socialSecurityNumber: string = "123-45-6789";
public includeLiterals: boolean = true;

public clear() {
    this.socialSecurityNumber = "";
}
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="mask-sample3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="mask-sample3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Validate Masked Values
In addition to setting a mask to an input, you can validate the entered value as well. The following example implements masks, validation and notification for invalid data using the Mask directive and Snack Bar component.

```html
<!--sample.component.html-->

<div class="sample-wrapper">
  <section class="sample-content">
      <article class="sample-column">
        <form class="input-sample" action="/" method="POST">
          <h4>Personal Data</h4>
          <br />
          <div class="igx-form-group">
            <input igxInput name="name" type="text" [(ngModel)]="person.name" required  />
            <label igxLabel for="name">Name*</label>
          </div>
          <div class="igx-form-group">
              <input igxInput #dateInput name="birthday" type="text" [igxMask]="'00/00/0000'" [(ngModel)]="person.birthday" (blur)="validateDate(dateInput, snackbar)"/>
              <label igxLabel for="email">Birthday</label>
          </div>
          <div class="igx-form-group">
            <input igxInput #ssn name="socialSecurityNumber" type="text" [igxMask]="'###-##-####'" [(ngModel)]="person.socialSecurityNumber" (blur)="validateSSN(ssn, snackbar)"/>
            <label igxLabel for="socialSecurityNumber">Social Security Number</label>
          </div>
          <igx-snackbar #snackbar></igx-snackbar>
        </form>
      </article>
    </section>
</div>
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
    input.focus();
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
