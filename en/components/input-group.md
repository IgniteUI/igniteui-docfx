---
title: Angular Input Groups Component | Ignite UI for Angular
_description: The Input Groups component in Ignite UI for Angular allows for easy-to-use and aesthetic forms, simplicity with inputting data, and provides mitigation for handling validation and errors.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Label components, Angular Label controls, Angular Input components, Angular Input controls, Input component, Input control, Label component, Label control, Angular Input Group components, Angular Input Group controls, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

# Input Group
<p class="highlight">The `IgxInputGroup` allows the user to enhance input elements like input, select, textarea, etc. by adding custom content like text, icons, buttons, custom validation, etc. on either side of them, as a prefix, suffix or hint.</p>
<div class="divider--half"></div>

## Angular Input Group Example

<code-view style="height:100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1" alt="Angular Input Group Example">
</code-view>

<div class="divider--half"></div>

## Usage
To get started with the Input Group component, first you need to import the `IgxInputGroupModule` from the `igniteui-angular` toolkit.

Note that the `IgxInputGroup` also depends on the **FormsModule** in order to have a working Template Driven Form:

```typescript
// app.module.ts

...
import { IgxInputGroupModule } from 'igniteui-angular';
// import { IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package
import { FormsModule } from '@angular/forms';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

> [!NOTE]
> To use any of the directives `igxInput`, `igxLabel`, `igx-prefix`, `igx-suffix` or `igx-hint`, you have to wrap them in an `<igx-input-group>` container.

## Examples

### Label & Input
You can read about the [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html) and [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) directives as well as their validation, data binding and API in a separate topic [here](label-input.md).

### Prefix & Suffix
The `igx-prefix` or `igxPrefix` and `igx-suffix` or `igxSuffix` directives can contain or be attached to HTML elements, strings, icons or even other components. In the following sample we will create a new input field with a string **prefix** and an icon **suffix**:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-icon igxSuffix>phone</igx-icon>
</igx-input-group>
```

<div class="sample-container loading" style="height:100px">
<iframe class="lazyload" id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
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
<div class="sample-container loading" style="height:110px">
<iframe class="lazyload" id="input-group-sample-4-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-4' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
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
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-5" >
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
           iframe-src="{environment:demosBaseUrl}/data-entries/typed-form" >
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

    <button igxButton="raised" igxRipple type="submit">Submit</button>
</form>
```

The `required` attribute adds an asterisk next to the label, indicating that this field must be filled in. Furthermore, when the `input` has additional validation applied to it, such as `email` and `minlength`, this could allow the developer to notify the end user for additional requirements via the [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) directive.

The following example uses two-way data binding and demonstrates how to inspect the control's state by exporting the `ngModel` to a local variable.

```html
<form>
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

    <button igxButton="raised" igxRipple type="submit">Submit</button>
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

    <button igxButton="raised" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

The result from the above configurations could be seen in the below sample. Start typing into the Email and Password fields and you will notice that the [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) is shown if the entered values are invalid. The sample also demonstrates how to toggle the password's visibility by using the [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) and the [`igx-suffix`](#prefix--suffix) directive.

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/template-driven-form-validation" >
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

    <button igxButton="raised" igxRipple type="submit">Submit</button>
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

    <button igxButton="raised" igxRipple type="submit" [disabled]="!registrationForm.valid">Submit</button>
</form>
```

The result from the above configurations could be seen in the below sample. Similar to the template-driven form sample, it also demonstrates how to toggle the password's visibility by using the [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) and the [`igx-suffix`](#prefix--suffix) directive.

<code-view style="height:480px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/reactive-form-validation" >
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
           iframe-src="{environment:demosBaseUrl}/data-entries/reactive-form-custom-validation" >
</code-view>

## Styling

The first thing we need to do, in order to get started with the input group styling, is to include the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Next, we have to create a new theme that extends the [`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) and pass the parameters which we'd like to change:

```scss
$custom-input-group: input-group-theme(
  $filled-text-color: #288a54,
  $focused-text-color: #174f30,
  $idle-text-color: #288a54,
  $idle-bottom-line-color: #288a54,
  $interim-bottom-line-color: #288a54,
  $hover-bottom-line-color: #288a54,
  $focused-secondary-color: #174f30,
  $box-background: #eeeeee
);
```

### Using CSS variables

The last step is to include the newly created theme:

```scss
@include css-vars($custom-input-group);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use the [input group mixin]({environment:sassApiUrl}/index.html#mixin-igx-input-group), since it doesn't support CSS variables.

However, if we just leave the include statement, as shown in the previous step, our styles will not properly apply - while our text color has properly changed, the bottom border and the background remain the same. This is because our component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation. The `input` and `label` elements are part of that view, so their styles are applied correctly. The bottom border, on the other hand, is generated by the `igx-input-group` component and is **not** affected by the styles of our component.

In order to style the border, we have to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, we also need to make sure that we scope the styles with a `:host` selector before the `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include input-group($custom-input-group);
    }
}
```

### Demo


<code-view style="height:120px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-style" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputGroup Types]({environment:angularApiUrl}/index.html#IgxInputGroupType)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-input-group-theme)

## Theming Dependencies
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Related topics:

* [Label & Input](label-input.md)
* [Reactive Forms Integration](angular-reactive-form-validation.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
