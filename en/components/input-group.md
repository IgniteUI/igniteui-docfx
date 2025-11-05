---
title: Angular Input Group Component | Ignite UI for Angular
_description: The Input Group component in Ignite UI for Angular allows for easy-to-use and aesthetic forms, simplicity with inputting data, and provides mitigation for handling validation and errors.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Native Angular Components, Angular Label component, Angular Label control, Angular Input component, Angular Input control, Input component, Input control, Label component, Label control, Angular Input Group component, Angular Input Group control, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

# Angular Input Group Component Overview

The `IgxInputGroupComponent` allows the user to enhance input elements like input, select, textarea, etc. This can be achieved by adding custom content like text, icons, buttons, custom validation, floating label, etc., on either side of them, as a prefix, suffix, or hint.

## Angular Input Group Example

<code-view style="height:100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1/" alt="Angular Input Group Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Input Group

To get started with the Ignite UI for Angular Input Group component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxInputGroupModule` in your **app.module.ts** file.

Note that the `IgxInputGroupComponent` also depends on the Angular **FormsModule** in order to have a working Template Driven Form:

```typescript
// app.module.ts

import { FormsModule } from '@angular/forms';
import { IgxInputGroupModule } from 'igniteui-angular';
// import { IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package


@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxInputGroupComponent` as a standalone dependency, or use the [`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/input-group/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';
// import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Phone</label>
        <input igxInput [(ngModel)]="value" name="phone" type="tel" maxlength="9" />
        <igx-icon igxSuffix>phone</igx-icon>
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, FormsModule]
    /* or imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxIconComponent, IgxSuffixDirective, FormsModule] */
})
export class HomeComponent {
    public value = '123456789';
}
```

Now that you have the Ignite UI for Angular Input Group module or directives imported, you can start using the `igx-input-group` component.

> [!NOTE]
> To use any of the directives `igxInput`, `igxLabel`, `igx-prefix`, `igx-suffix` or `igx-hint`, you have to wrap them in an `<igx-input-group>` container.

## Using the Angular Input Group

### Label & Input

You can read about the [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html) and [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) directives as well as their validation, data binding and API in a separate topic [here](label-input.md).

### Prefix & Suffix

The `igx-prefix` or `igxPrefix` and `igx-suffix` or `igxSuffix` directives can contain or be attached to HTML elements, strings, icons or even other components. In the following sample we will create a new input field with a string **prefix** and an icon **suffix**:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" maxlength="9" />
    <igx-icon igxSuffix>phone</igx-icon>
</igx-input-group>
```

<code-view style="height:110px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-3/" alt="Angular Input Group Example">
</code-view>

<div class="divider--half"></div>

### Hints

The [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) directive provides a helper text placed below the input. It can be at the beginning or at the end of the input depending on the value of the [`position`]({environment:angularApiUrl}/classes/igxhintdirective.html#position) property. Let's add a hint to our phone input:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

This is how the phone field with hint looks:
<code-view style="height:110px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-4/" alt="Angular Input Group Example">
</code-view>

<div class="divider--half"></div>

### Input Types & Input Group Type Token

The input group styles can be altered by using the [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) property of the [`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) component. The input group component supports the following types: `line` (default if type is not specified), `border`, `box`, and `search`. The `line`, `border`, and `box` types are made specifically for the `Material Design` themes. Setting those types with other themes will not have any effect on how the input group looks.
An example of setting a specific type declaratively:

```html
<igx-input-group type="border">
```

Using the [IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) injection token allows to specify a type on an application level for all input-group instances. It provides an easy way to style all related components at once.
To set the type, use the [IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) injection token to create a DI provider.

```typescript
providers: [{provide: IGX_input-group_TYPE, useValue: 'box' }]
```

>[!NOTE]
>The [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) property has precedence over a [IGX_INPUT_GROUP_TYPE]({environment:angularApiUrl}/index.html#igx_input_group_type), thus a token value can be overridden on a component level if the type property is set explicitly.
>Most of the `igniteui-angular` form controls use input-group component internally, or allow for a custom template. Setting a global token will affect these components as well.

Ignite UI for Angular also provides styling for the input of `type="file"` and it supports all the input group types and themes, just add this to your template:

```html
<igx-input-group>
    <input igxInput type="file" multiple />
</igx-input-group>
```

<code-view style="height:695px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-5/" >
</code-view>

### Input Group Theme

The input group component supports several themes - `material`, `fluent`, `bootstrap`, and `indigo-design`; The [`theme`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#theme) is automatically set during component initialization and is inferred from the currently used stylesheet. If you plan to support several themes in your application with runtime switching, you can explicitly set the theme using the `theme` Input property.

```html
<igx-input-group theme="fluent">...</igx-input-group>
```

### Typed Forms

The Ignite UI for Angular Input Group component can be used inside strictly typed reactive forms which are the default ones as of Angular 14. To find out more about the typed forms, you can check [Angular official documentation](https://angular.io/guide/typed-forms).

<code-view style="height:770px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/typed-form/" >
</code-view>

## Validation

The following samples demonstrate how to configure input validation when using [template-driven](https://angular.io/guide/forms) or [reactive forms](https://angular.io/guide/reactive-forms).

### Template-Driven Forms

Template-driven form validation is achieved by adding validation attributes, i.e., `required`, `minlength`, etc., to the `input` element.

```html
<form>
    <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" required />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" required email />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" required minlength="8" />
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit">Submit</button>
</form>
```

The `required` attribute adds an asterisk next to the label, indicating that this field must be filled in. Furthermore, when the `input` has additional validation applied to it, such as `email` and `minlength`, this could allow the developer to notify the end user for additional requirements via the [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) directive.

The following example uses two-way data binding and demonstrates how to inspect the control's state by exporting the `ngModel` to a local variable.

```html
<form #login="ngForm">
    ...
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password"
            [(ngModel)]="user.password" #password="ngModel" required minlength="8" />
        <igx-hint *ngIf="password.errors?.minlength">Password should be at least 8 characters</igx-hint>
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit">Submit</button>
</form>
```

The user should not be able to submit the form if any of the form controls in it are invalid. This could be achieved by enabling/disabling the submit button based on the form's state.

The following example demonstrates how to inspect the form's state by exporting the `ngForm` to a local variable.

```html
<form #registrationForm="ngForm">
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" [(ngModel)]="user.email" #email="ngModel" required email />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>
    ...

    <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

The result from the above configurations could be seen in the below sample. Start typing into the Email and Password fields and you will notice that the [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) is shown if the entered values are invalid. The sample also demonstrates how to toggle the password's visibility by using the [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) and the [`igx-suffix`](#prefix--suffix) directive.

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/template-driven-form-validation/" >
</code-view>

### Reactive Forms

Reactive form validation is achieved by adding validator functions directly to the form control model in the component class. After creating the control in the component class, it should be associated with a form control element in the template.

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        username: ['', { nonNullable: true, validators: [Validators.required] }],
        email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] }],
        password: ['', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }]
    });
}
```

```html
<form [formGroup]="registrationForm">
    <igx-input-group>
        <label igxLabel for="username">Username</label>
        <input igxInput name="username" type="text" formControlName="username" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" formControlName="password" />
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit">Submit</button>
</form>
```

Similar to the template-driven form sample, when having additional validation like `email` and `minlength`, an [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) directive could be used to notify the end user if the validation has failed.

The following example demonstrates how to access the control through a `get` method and inspect its state. It also demonstrates how to enable/disable the submit button by inspecting the state of the `FormGroup`.

```ts
public get email() {
    return this.registrationForm.get('email');
}

public get password() {
    return this.registrationForm.get('password');
}
```

```html
<form [formGroup]="registrationForm">
    ...
    <igx-input-group>
        <label igxLabel for="email">Email</label>
        <input igxInput name="email" type="email" formControlName="email" />
        <igx-hint *ngIf="email.errors?.email">Please enter a valid email</igx-hint>
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="password">Password</label>
        <input igxInput name="password" type="password" formControlName="password" />
        <igx-hint *ngIf="password.errors?.minlength">Password should be at least 8 characters</igx-hint>
    </igx-input-group>

    <button igxButton="contained" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

The result from the above configurations could be seen in the below sample. Similar to the template-driven form sample, it also demonstrates how to toggle the password's visibility by using the [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) and the [`igx-suffix`](#prefix--suffix) directive.

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/reactive-form-validation/" >
</code-view>

### Custom Validators

Some input fields may require custom validation and this could be achieved via custom validators. When the value is invalid, the validator will generate a set of errors that could be used to display a specific error message.

Below is an example of a simple custom reactive form validator that validates if the entered email address contains a predefined value and generates different errors based on where the value occurs.

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }],
        ...
    });
}

private emailValidator(val: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();
        const localPartRegex = new RegExp(`(?<=(${val})).*[@]`);
        const domainRegex = new RegExp(`(?<=[@])(?=.*(${val}))`);
        const returnObj: ValidatorErrors = {};

        if (value && localPartRegex.test(value)) {
            returnObj.localPart = true;
        }
        if (value && domainRegex.test(value)) {
            returnObj.domain = true;
        }

        return returnObj;
    }
}
```

### Cross-Field Validation

In some scenarios, the validation of one control may depend on the value of another one. To evaluate both controls in a single custom validator the validation should be performed in a common ancestor control, i.e., the `FormGroup`. The validator retrieves the child controls by calling the `FormGroup`'s `get` method, compares the values and if the validation fails, a set of errors is generated for the `FormGroup`.

This will set only the form's state to invalid. To set the control's state, we could use the [`setErrors`](https://angular.io/api/forms/AbstractControl#seterrors) method and add the generated errors manually. Then, when the validation is successful, the errors could be removed by using the [`setValue`](https://angular.io/api/forms/AbstractControl#setvalue) method that will rerun the control's validation for the provided value.

The below example demonstrates a cross-field validation where the Password should not contain the Email address and the Repeat password should match the Password.

```ts
private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.get('email');
        const password = control.get('password');
        const repeatPassword = control.get('repeatPassword');
        const returnObj: ValidatorErrors = {};

        if (email.value
            && password.value
            && password.value.toLowerCase().includes(email.value)) {
            password.setErrors({ ...password.errors, containsEmail: true });
            returnObj.containsEmail = true;
        }

        if (password
            && repeatPassword
            && password.value !== repeatPassword.value) {
            repeatPassword.setErrors({ ...repeatPassword.errors, mismatch: true });
            returnObj.mismatch = true;
        }

        if (!returnObj.containsEmail && password.errors?.containsEmail) {
            password.setValue(password.value);
        }

        if (!returnObj.mismatch && repeatPassword.errors?.mismatch) {
            repeatPassword.setValue(repeatPassword.value);
        }

        return returnObj;
    }
}
```

To add the custom validator to the `FormGroup` it should be passed as a second argument when creating the form.

```ts
public registrationForm: FormGroup<User>;

constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        email: ['', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }],
        ...
    },
    {
        validators: [this.passwordValidator()]
    });
}
```

The below sample demonstrates how the built-in validators could be used in combination with the custom `emailValidator` and cross-field `passwordValidator` from the previous examples.

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/reactive-form-custom-validation/" >
</code-view>

## Styling

### Input Group Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<div class="theme-switcher-wrapper">
  <!-- Theme Switcher Radios and Labels -->
  <input type="radio" name="theme" id="material" checked>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent">
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap">
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo">
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
        <table class="collapsible-table">
            <thead>
                <tr>
                    <th>Primary Property</th>
                    <th>Dependent Property</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$box-background</strong></summary></details></td>
                    <td>$box-background-hover</td>
                    <td>Hover background for the input box</td>
                </tr>
                <tr class="dependent"><td></td><td>$box-background-focus</td><td>Focus background for the input box</td></tr>
                <tr class="dependent"><td></td><td>$box-disabled-background</td><td>Disabled state background</td></tr>
                <tr class="dependent"><td></td><td>$placeholder-color</td><td>Placeholder text color</td></tr>
                <tr class="dependent"><td></td><td>$hover-placeholder-color</td><td>Hover color for placeholder text</td></tr>
                <tr class="dependent"><td></td><td>$idle-text-color</td><td>Default text color</td></tr>
                <tr class="dependent"><td></td><td>$filled-text-color</td><td>Text color when input is filled</td></tr>
                <tr class="dependent"><td></td><td>$filled-text-hover-color</td><td>The input text color in the filled state on hover</td></tr>
                <tr class="dependent"><td></td><td>$focused-text-color</td><td>Text color when input is focused</td></tr>
                <tr class="dependent"><td></td><td>$idle-secondary-color</td><td>Secondary text color when idle</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Text color for prefix inside the input box</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-color--filled</td><td>Text color for filled prefix</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-color--focused</td><td>Text color for focused prefix</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Text color for suffix inside the input box</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-color--filled</td><td>Text color for filled suffix</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-color--focused</td><td>Text color for focused suffix</td></tr>
                <tr class="dependent"><td></td><td>$disabled-placeholder-color</td><td>Placeholder color when input is disabled</td></tr>
                <tr class="dependent"><td></td><td>$disabled-text-color</td><td>Text color when input is disabled</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$idle-bottom-line-color</strong></summary></details></td>
                    <td>$hover-bottom-line-color</td>
                    <td>Hover color for the bottom line under the input</td>
                </tr>
                <tr class="dependent"><td></td><td>$focused-bottom-line-color</td><td>Focused color for the bottom line</td></tr>
                <tr class="dependent"><td></td><td>$focused-secondary-color</td><td>The label color in the focused state</td></tr>
                <tr class="dependent"><td></td><td>$border-color</td><td>The border color for input groups of type border</td></tr>
                <tr class="dependent"><td></td><td>$focused-border-color</td><td>The focused input border color for input groups of type border</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$border-color</strong></summary></details></td>
                    <td>$hover-border-color</td>
                    <td>Hover color for the input border</td>
                </tr>
                <tr class="dependent"><td></td><td>$focused-border-color</td><td>Border color when input is focused</td></tr>
                <tr class="dependent"><td></td><td>$focused-secondary-color</td><td>The label color in the focused state</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$input-prefix-background</strong></summary></details></td>
                    <td>$input-prefix-color</td><td>Text color for prefix inside the input box</td>
                </tr>
                <tr class="dependent"><td></td><td>$input-prefix-background--filled</td>
                    <td>The background color of an input prefix in the filled state</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-background--focused</td><td>The background color of an input prefix in the focused state</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$input-suffix-background</strong></summary></details></td>
                    <td>$input-suffix-color</td><td>Text color for suffix inside the input box</td>
                </tr>
                <tr class="dependent"><td></td><td>$input-suffix-background--filled</td>
                    <td>The background color of an input suffix in the filled state</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-background--focused</td><td>The background color of an input suffix in the focused state</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$search-background</strong></summary></details></td>
                    <td>$placeholder-color</td>
                    <td>Placeholder text color inside the search input</td>
                </tr>
                <tr class="dependent"><td></td><td>$hover-placeholder-color</td><td>Hover color for placeholder text</td></tr>
                <tr class="dependent"><td></td><td>$idle-text-color</td><td>Text color for the search input</td></tr>
                <tr class="dependent"><td></td><td>$idle-secondary-color</td><td>Secondary text color when idle</td></tr>
                <tr class="dependent"><td></td><td>$filled-text-color</td><td>Text color when search input is filled</td></tr>
                <tr class="dependent"><td></td><td>$filled-text-hover-color</td><td>Hover text color when search input is filled</td></tr>
                <tr class="dependent"><td></td><td>$focused-text-color</td><td>Text color when search input is focused</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Prefix color inside search</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Suffix color inside search</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-color--filled</td><td>Prefix color when input is filled</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-color--filled</td><td>Suffix color when input is filled</td></tr>
                <tr class="dependent"><td></td><td>$input-prefix-color--focused</td><td>Prefix color when input is focused</td></tr>
                <tr class="dependent"><td></td><td>$input-suffix-color--focused</td><td>Suffix color when input is focused</td></tr>
                <tr class="dependent"><td></td><td>$search-disabled-background</td><td>Background when search input is disabled</td></tr>
                <tr class="dependent"><td></td><td>$disabled-placeholder-color</td><td>Placeholder color when disabled</td></tr>
                <tr class="dependent"><td></td><td>$disabled-text-color</td><td>Text color when disabled</td></tr>
            </tbody>
        </table>
    </div>
    <!-- Fluent Theme Table -->
    <div class="theme-table fluent">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$border-color</strong></summary></details></td>
                <td>$hover-border-color</td>
                <td>Hover color for the input border</td>
            </tr>
            <tr class="dependent"><td></td><td>$focused-border-color</td><td>Border color when input is focused</td></tr>
            <tr class="dependent"><td></td><td>$focused-secondary-color</td><td>The label color in the focused state</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$input-prefix-background</strong></summary></details></td>
            <td>$input-suffix-background</td>
            <td>The background color of an input suffix in the idle state</td>
          </tr>
          <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Text color for prefix inside the input box</td></tr>
          <tr class="dependent"><td></td><td>$input-prefix-color--filled</td><td>Text color for filled prefix</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$input-suffix-background</strong></summary></details></td>
            <td>$input-prefix-background</td>
            <td>The background color of an input prefix in the idle state</td>
          </tr>
          <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Text color for suffix inside the input box</td></tr>
          <tr class="dependent"><td></td><td>$input-suffix-color--filled</td><td>Text color for filled suffix</td></tr>
        </tbody>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$search-background</strong></summary></details></td>
                <td>$placeholder-color</td>
                <td>Placeholder text color inside the search input</td>
            </tr>
            <tr class="dependent"><td></td><td>$hover-placeholder-color</td><td>Hover color for placeholder text</td></tr>
            <tr class="dependent"><td></td><td>$idle-secondary-color</td><td>Secondary text color when idle</td></tr>
            <tr class="dependent"><td></td><td>$idle-text-color</td><td>Text color for the search input</td></tr>
            <tr class="dependent"><td></td><td>$filled-text-color</td><td>Text color when search input is filled</td></tr>
            <tr class="dependent"><td></td><td>$filled-text-hover-color</td><td>Hover text color when search input is filled</td></tr>
            <tr class="dependent"><td></td><td>$focused-text-color</td><td>Text color when search input is focused</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Prefix color inside search</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Suffix color inside search</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color--filled</td><td>Prefix color when input is filled</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color--filled</td><td>Suffix color when input is filled</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color--focused</td><td>Prefix color when input is focused</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color--focused</td><td>Suffix color when input is focused</td></tr>
            <tr class="dependent"><td></td><td>$search-disabled-background</td><td>Background when search input is disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-placeholder-color</td><td>Placeholder color when disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-text-color</td><td>Text color when disabled</td></tr>
        </tbody>
      </table>
    </div>
    <!-- Bootstrap Theme Table -->
    <div class="theme-table bootstrap">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$border-color</strong></summary></details></td>
                <td>$focused-border-color</td>
                <td>Border color when input is focused</td>
            </tr>
            <tr class="dependent"><td></td><td>$focused-secondary-color</td><td>The label color in the focused state</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$input-prefix-background</strong></summary></details></td>
            <td>$input-suffix-background</td>
            <td>The background color of an input suffix in the idle state</td>
          </tr>
          <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Text color for prefix inside the input box</td></tr>
          <tr class="dependent"><td></td><td>$input-prefix-color--filled</td><td>Text color for filled prefix</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$input-suffix-background</strong></summary></details></td>
            <td>$input-prefix-background</td>
            <td>The background color of an input prefix in the idle state</td>
          </tr>
          <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Text color for suffix inside the input box</td></tr>
          <tr class="dependent"><td></td><td>$input-suffix-color--filled</td><td>Text color for filled suffix</td></tr>
        </tbody>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$search-background</strong></summary></details></td>
                <td>$placeholder-color</td>
                <td>Placeholder text color inside the search input</td>
            </tr>
            <tr class="dependent"><td></td><td>$hover-placeholder-color</td><td>Hover color for placeholder text</td></tr>
            <tr class="dependent"><td></td><td>$idle-secondary-color</td><td>Secondary text color when idle</td></tr>
            <tr class="dependent"><td></td><td>$idle-text-color</td><td>Text color for the search input</td></tr>
            <tr class="dependent"><td></td><td>$filled-text-color</td><td>Text color when search input is filled</td></tr>
            <tr class="dependent"><td></td><td>$filled-text-hover-color</td><td>Hover text color when search input is filled</td></tr>
            <tr class="dependent"><td></td><td>$focused-text-color</td><td>Text color when search input is focused</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Prefix color inside search</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Suffix color inside search</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color--filled</td><td>Prefix color when input is filled</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color--filled</td><td>Suffix color when input is filled</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color--focused</td><td>Prefix color when input is focused</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color--focused</td><td>Suffix color when input is focused</td></tr>
            <tr class="dependent"><td></td><td>$search-disabled-background</td><td>Background when search input is disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-placeholder-color</td><td>Placeholder color when disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-text-color</td><td>Text color when disabled</td></tr>
        </tbody>
      </table>
    </div>
    <!-- Indigo Theme Table -->
    <div class="theme-table indigo">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$idle-bottom-line-color</strong></summary></details></td>
                <td>$hover-bottom-line-color</td>
                <td>Hover color for the bottom line under the input</td>
            </tr>
            <tr class="dependent"><td></td><td>$focused-bottom-line-color</td><td>Focused color for the bottom line</td></tr>
        </tbody>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$border-color</strong></summary></details></td>
                <td>$hover-border-color</td>
                <td>Hover color for the input border</td>
            </tr>
            <tr class="dependent"><td></td><td>$focused-border-color</td><td>Border color when input is focused</td></tr>
        </tbody>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$input-prefix-background</strong></summary></details></td>
                <td>$input-prefix-color</td><td>Text color for prefix inside the input box</td>
            </tr>
            <tr class="dependent"><td></td><td>$input-prefix-background--filled</td>
                <td>The background color of an input prefix in the filled state</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-background--focused</td><td>The background color of an input prefix in the focused state</td></tr>
        </tbody>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$input-suffix-background</strong></summary></details></td>
                <td>$input-suffix-color</td><td>Text color for suffix inside the input box</td>
            </tr>
            <tr class="dependent"><td></td><td>$input-suffix-background--filled</td>
                <td>The background color of an input suffix in the filled state</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-background--focused</td><td>The background color of an input suffix in the focused state</td></tr>
        </tbody>
        <tbody class="group">
            <tr class="primary">
                <td><details><summary><strong>$search-background</strong></summary></details></td>
                <td>$placeholder-color</td>
                <td>Placeholder text color inside the search input</td>
            </tr>
            <tr class="dependent"><td></td><td>$hover-placeholder-color</td><td>Hover color for placeholder text</td></tr>
            <tr class="dependent"><td></td><td>$box-background-hover</td><td>Hover background for search input</td></tr>
            <tr class="dependent"><td></td><td>$idle-text-color</td><td>Text color for the search input</td></tr>
            <tr class="dependent"><td></td><td>$filled-text-color</td><td>Text color when search input is filled</td></tr>
            <tr class="dependent"><td></td><td>$filled-text-hover-color</td><td>Hover text color when search input is filled</td></tr>
            <tr class="dependent"><td></td><td>$focused-text-color</td><td>Text color when search input is focused</td></tr>
            <tr class="dependent"><td></td><td>$input-prefix-color</td><td>Prefix color inside search</td></tr>
            <tr class="dependent"><td></td><td>$input-suffix-color</td><td>Suffix color inside search</td></tr>
            <tr class="dependent"><td></td><td>$search-disabled-background</td><td>Background when search input is disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-placeholder-color</td><td>Placeholder color when disabled</td></tr>
            <tr class="dependent"><td></td><td>$disabled-text-color</td><td>Text color when disabled</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


The first thing we need to do, in order to get started with the input group styling, is to include the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

To customize the appearance of input groups, you can create a new theme by extending the [`input-group-theme`]({environment:sassApiUrl}/themes#function-input-group-theme). This approach allows you to override only the parameters you want to change, while the rest are automatically handled by the base theme.

Even by specifying just a few core parameters—like colors for the border or background—you'll get a fully styled input group with consistent state-based styles (hover, focus, etc.) applied for you.

Here’s a simple example:

```scss
$custom-input-group: input-group-theme(
    $box-background: #57a5cd,
    $border-color: #57a5cd,
);
```

The last step is to include the newly created theme:

```scss
@include css-vars($custom-input-group);
```

### Demo

<code-view style="height:230px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-style/" >
</code-view>

>[!NOTE]
>If your page includes multiple types of input groups — such as `box`, `border`, `line`, or `search` — it's best to scope your theme variables to the specific input group type.
<br>For example:<br>
Use `.igx-input-group--box` when styling box-style inputs.
Use `.igx-input-group--search` when targeting search inputs.
This helps prevent style conflicts between different input types.
For instance, setting a dark `$box-background` globally could cause the borders of border or line inputs to become invisible (usually appearing white).

<div class="divider--half"></div>

### Styling with Tailwind

You can style the input group using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-input-group`, `dark-input-group`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [input-group-theme]({environment:sassApiUrl}/themes#function-input-group-theme). The syntax is as follows:

```html
<article class="sample-column">
    <igx-input-group class="!light-input-group ![--box-background:#A3C7B2] ![--focused-secondary-color:#3A5444]" type="box">
        <igx-prefix>+359</igx-prefix>
        <label igxLabel for="phone">Phone</label>
        <input type="tel" igxInput name="phone" />
        <igx-suffix>
            <igx-icon>phone</igx-icon>
        </igx-suffix>
        <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
    </igx-input-group>

    <igx-input-group class="!light-input-group ![--border-color:#7B9E89]" type="border">
        ...
    </igx-input-group>

    <igx-input-group class="!light-input-group ![--search-background:#A3C7B2] ![--focused-secondary-color:#3A5444]" type="search">
        ...
    </igx-input-group>
</article>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your inputs should look like this:

<div class="sample-container loading" style="height:350px">
    <iframe id="input-group-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/data-entries/input-group-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

- [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
- [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
- [IgxInputGroup Types]({environment:angularApiUrl}/index.html#IgxInputGroupType)
- [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
- [IgxInputGroupComponent Styles]({environment:sassApiUrl}/themes#function-input-group-theme)

## Theming Dependencies

- [IgxButton Theme]({environment:sassApiUrl}/themes#function-button-theme)
- [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>

Related topics:

- [Label & Input](label-input.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
