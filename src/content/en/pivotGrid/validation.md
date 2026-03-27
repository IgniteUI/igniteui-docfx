---
title: Editing and Validation in Angular Pivot Grid - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular Pivot Grid. See demos & examples!
_keywords: angular validation, ignite ui for angular, infragistics
_license: commercial
---

# Angular Pivot Grid Editing and Validation

The Pivot Grid's editing exposes a built-in validation mechanism of user input when editing cells/rows. It extends the [Angular Form validation](https://angular.io/guide/form-validation) functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.

## Configuration

### Configure via template-driven configuration

We extend some of the Angular Forms validator directives to directly work with the `IgxColumn`. The same validators are available as attributes to be set declaratively in `igx-column`. The following validators are supported out-of-the-box:

- required
- min
- max
- email
- minlength
- maxlength
- pattern

To validate that a column input would be set and the value is going to be formatted as an email, you can use the related directives:

```html
<igx-column [field]="email" [header]="User E-mail" required email></igx-column>
```

The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a Pivot Grid.




### Configure via reactive forms

We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:










You can decide to write your own validator function, or use one of the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions).


## Validation service API

The grid exposes a validation service via the [`validation`]({environment:angularApiUrl}/classes/IgxGridComponent.html#validation) property.
That service has the following public APIs:

- [`valid`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#valid) - returns if the grid validation state is valid.
- [`getInvalid`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#getInvalid) - returns records with invalid states.
- [`clear`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#clear) - clears state for record by id or clears all state if no id is provided.
- [`markAsTouched`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#markAsTouched) - marks the related record/field as touched.

Invalid states will persist until the validation errors in them are fixed according to the validation rule or they are cleared.

## Validation triggers

Validation will be triggered in the following scenarios:

- While editing via the cell editor based on the grid's [`validationTrigger`]({environment:angularApiUrl}/classes/IgxGridComponent.html#validationTrigger). Either on `change` while typing in the editor, or on `blur` when the editor loses focus or closes.
- When updating cells/rows via the API - [`updateRow`]({environment:angularApiUrl}/classes/IgxGridComponent.html#updateRow), [`updateCell`]({environment:angularApiUrl}/classes/IgxGridComponent.html#updateCell) etc..
- When using batch editing and the [`undo`]({environment:angularApiUrl}/classes/IgxTransactionService.html#undo)/[`redo`]({environment:angularApiUrl}/classes/IgxTransactionService.html#redo) API of the transaction service.

> Note: Validation will not trigger for records that have not been edited via user input or via the editing API. Visual indicators on the cell will only shown if the related input is considered touched - either via user interaction or via the `markAsTouched` API of the validation service.

## Angular Pivot Grid Validation Customization Options

### Set a custom validator

You can define your own validation directive to use on a `<igx-column>` in the template.

```ts
@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneFormatDirective, multi: true }]
})
export class PhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}
```

Once it is defined and added in your app module you can set it declaratively to a given column in the grid:

```html
<igx-column phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b" ...>
```

### Change default error template

You can define your own custom error template that will be displayed in the error tooltip when the cell enters invalid state.
This is useful in scenarios where you want to add your own custom error message or otherwise change the look or content of the message.

```html
<igx-column ... >
  <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
      <ng-container *ngTemplateOutlet="defaultErr">
      </ng-container>
      <div *ngIf="cell.validation.errors?.['phoneFormat']">
        Please enter correct phone format
      </div>
  </ng-template>
</igx-column>
```

### Prevent exiting edit mode on invalid state

In some cases you may want to disallow submitting an invalid value in the data.
In that scenarios you can use the [`cellEdit`]({environment:angularApiUrl}/classes/IgxGridComponent.html#cellEdit) or [`rowEdit`]({environment:angularApiUrl}/classes/IgxGridComponent.html#rowEdit) events and cancel the event in case the new value is invalid.
Both events' arguments have a [`valid`]({environment:angularApiUrl}/interfaces/IGridEditEventArgs.html#valid) property and can be canceled accordingly. How it is used can be seen in the [Cross-field Validation example](#cross-field-example)






```ts
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```

### Example

The below example demonstrates the above-mentioned customization options.





## Cross-field validation

In some scenarios validation of one field may depend on the value of another field in the record.
In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.








### Cross-field example







<div class="divider--half"></div>

## Styling

Using the [Ignite UI for Angular Theme Library](../themes/index.md), we can alter the default validation styles while editing.

In the example below, we will make use of the exposed template for validation message, which pops out in a tooltip and overriding the error color to modify the default looks of the validation.
We will also style the background of the invalid rows to make them more distinct.

### Import theme

The easiest way to style and access css variables is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Include the styles

In order to change the error color you can use the css variable `--ig-error-500`:

```scss
--ig-error-500: 34, 80%, 63%;
```

### Custom Templates

Changing the default error template allows setting custom classes and styles:

```html
<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
  <div class="validator-container">
    <ng-container *ngTemplateOutlet="defaultErr">
    </ng-container>
  </div>
</ng-template>
```

### Invalid row and cell styles

Rows and cells provide API for the developers to know if a row or cell is invalid and what kind of errors are active.








### Demo








<div class="divider--half"></div>


## API References

- [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## Known Issues and Limitations

|Limitation|Description|
| --- | --- |
| When `validationTrigger` is blur, `editValue` and validation will trigger only after editor is blurred. | Reason is that this utilizes the formControl's [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) property. This determines the event on which the formControl will update and trigger related validators. |

## Additional Resources

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Pivot Grid Overview](pivot-grid.md)
- [Pivot Grid Editing](editing.md)
- [Pivot Grid Row Editing](row-editing.md)
- [Pivot Grid Row Adding](row-adding.md)
- [Pivot Grid Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
