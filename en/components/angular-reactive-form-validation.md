---
title: Angular reactive form validation – Ignite UI for Angular
_description: Angular form validation is a process of verifying if inputs entered by a user into a web-form are correct. Check how to do it with Ignite UI for Angular reactive forms.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Reactive Forms, Angular Forms
---

# Angular reactive form validation 

## What are reactive forms in Angular?

Reactive forms in Angular provide a direct access to the underlying form object model, offering an immutable and explicit approach to handling form inputs. As the values of those inputs change in time, the state of the form is managed by reactive forms, relying on fixed or inflexible methods. 

Which means that, each time a change is triggered to the data model, the so-called observable operators return a new data model, instead of updating the already existing one again and again. And that keeps the state of a form clean. 

Angular reactive forms are considered extremely scalable, reusable, and robust due to their:

**Immutability**

Reactive forms in Angular provide an immutable or fixed data structure. Once the state of the underlying model is altered, you get a new “version” of this particular model which is updated. It has new values but remains aligned with all the (UI) controls in any moment.

**Better testability**

Testing is pretty straightforward with reactive forms and requires less setup. When it comes to large applications this is very beneficial. Here, you get a synchronous access to streams of input and the possibility to test the form and data models without having to render UI.

**Predictability**

Reactive forms are built around observable streams which track every unique change in the form and allow you to access input values synchronously (thanks to the well-structured data flow). Which, in turn, makes reactive forms highly predictable.

**Consistent & structured data flow**

The data flow in Angular reactive forms is well-structured because the form logic is led by the component class. This enables you to add validator functions directly to the FormControl instance in the component class. Whenever a change occurs, Angular calls these functions.


## What is angular form validation? 
Angular form validation is an integral technical process that verifies if any input provided by a user into a web-form is correct and complete. You can manage validation in a template-driven approach or with Angular reactive forms. Based on what is entered, the form will either allow users to proceed or will display a specific error message to help the user know where they went wrong with their data input. 

Depending on which validator failed, the on-screen error message gives feedback, indicating what is wrong and what exactly needs to be filled in or re-entered as data. In general, apps use forms to allow users to perform data-entry tasks like signing up, logging in, updating online profiles, submitting sensitive information, and more.  

Angular runs form validation every time the value of a form input is changed and to confirm if data inputs filled in a web-form by a user are accurate and complete. To do that properly, Angular calls a list of validators which are run on every change that occurs.  

Validation of user-input from the UI can be done either with template-driven forms or with Angular reactive forms. Both of these forms are built on the following base classes:
* FormControl
* FormGroup
* FormArray  
* ControlValueAccessor

## Angular reactive form validation
Reactive forms deliver a model-driven approach to managing form inputs, the values of which change with respect to time. Because reactive forms are built on a component class, Angular reactive form validation happens by adding validator functions directly to the form control model in the component class.  

When the value is valid, validators return `null`. If the value is invalid, validators generate a set of errors, and you can display a specific error message on the screen.

There are built-in validators such as `required`, `minlength`, `maxlength` etc. However, you can also create your own validators.

A simple custom reactive form validator can look like this:
```typescript
import { Directive, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[dateValueValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DateValueValidatorDirective, multi: true }]
})
export class DateValueValidatorDirective implements Validator {
    public validate(control: AbstractControl): ValidationErrors | null {
        if (!this.isDate(control.value)) {
            return { value: true };
        }

        return null;
    }

    private isDate(value: unknown): value is Date {
        return value instanceof Date
            && !isNaN(value.getTime());
    }
}
```

Also a validator can be asynchronous:
```typescript
import { Directive, OnInit } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
    selector: '[dateValueAsyncValidator]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: DateValueAsyncValidatorDirective, multi: true }]
})
export class DateValueAsyncValidatorDirective implements AsyncValidator {
    public validate(control: AbstractControl): Observable<ValidationErrors | null> {
        if (!this.isDate(control.value)) {
            return of({ value: true });
        }

        return of(null);
    }

    private isDate(value: unknown): value is Date {
        return value instanceof Date
            && !isNaN(value.getTime());
    }
}
```

## Angular Reactive form validation example
Let’s see how you can set up reactive form validation in practice with this Angular form validation example.

It is a quick demo of a pretty standard booking form for a movie. It shows what happens if one or several of the form inputs are incomplete and you can see how the specific error message is visualized.

For the purposes of our example of Angular reactive form validation, the fields which are required include: movie, full name, email, and genre. Unless you get all of them completed, you won’t be able to proceed with your booking and the `book button` will remain disabled.

So, if you enter values for movie title, full name, phone, and email, they will be highlighted in green. But if you forget to select `favorite genre`, this field will be highlighted in red, indicating incomplete value inputs. Once the values are all set right, the field will be highlighted in green, indicating correct value inputs. The `book button` will be activated and the form can be successfully submitted afterwards.

<code-view style="height: 850px;"
    data-demos-base-url="{environment:demosBaseUrl}"
    iframe-src="{environment:demosBaseUrl}/data-entries/reactive-forms"
    alt="Angular Reactive Forms Integration Example">
</code-view>

<div class="divider--half"></div>

## Angular form group validation
Form groups are basically a group of multiple related `FormControlls` that enable you to access the state of the encapsulated controls. Angular from group validation helps you track the value of group controls or a form as well as to track validation of the state of the form control. `FormGroup` is used with `FormControl`. 

## Why would you need Angular form custom validation?
With custom validators you can address different functionality and ensure the values in a form meet certain criteria, which sometimes isn’t possible to do when using built-in validators only. If you want to validate a phone number or a specific password pattern, it’s best to create custom validator and rely on Angular form custom validation.

With reactive forms, generating such is just as easy as writing a new function. And for model-driven forms (such is the reactive form in Angular) we create custom validation functions and send them to the `FormControl` constructor.

Below you can see how to write and implement a custom form validator in your reactive form.

```typescript
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({/* ... */})
export class MyComponent implements OnInit {
    public form: FormGroup;

    public ngOnInit(): void {
        this.form = new FormGroup({
            datePicker: new FormControl('', [Validators.required, this.dateValidator(new Date())])
        });
    }

    private dateValidator(val: Date): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (this.isDate(control.value)
                || this.valGreaterThanDate(control.value, val)) {
                return { value: true };
            }

            return null;
        }
    }

    private valGreaterThanDate(value: Date, date: Date): boolean {
        const value1 = new Date(value).setHours(0, 0, 0, 0);
        const value2 = new Date(date).setHours(0, 0, 0, 0);
        return value.getTime() > date.getTime();
    }

    private isDate(value: unknown): value is Date {
        return value instanceof Date
            && !isNaN(value.getTime());
    }
}
```

## Additional Resources
<div class="divider--half"></div>

Related topics:
* [Combo](combo.md)
* [Select](select.md)
* [Input Group](input-group.md)
* [Date Picker](date-picker.md)
* [Time Picker](time-picker.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
