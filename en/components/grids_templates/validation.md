---
title: Editing and Validation in Angular @@igComponent - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular @@igComponent. See demos & examples!
_keywords: angular validation, ignite ui for angular, infragistics
---

# Angular @@igComponent Editing and Validation
The @@igComponent's editing exposes a reactive forms style validation of user input when editing cells/rows. It extends [Angular's reactive forms](https://angular.io/guide/reactive-forms) validation functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.

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

The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a @@igComponent.
@@if (igxName === 'IgxGrid') {
<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-validator-service" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/grid-validator-service" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/grid-validator-service" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}

### Configure via reactive forms

We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `onFormGroupCreate` event. You can modify it by adding your own validators for the related fields:

```html
<igx-grid (onFormGroupCreate)='formCreateHandler($event)' ...>
```

```ts
public formCreateHandler(formGroup: FormGroup) {
  // add a validator
  const faxRecord = formGroup.get('fax');
  faxRecord.addValidators(...);
}
```
You can decide to write your own validator function, or use one of the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions).


## Angular @@igComponent Validation Customization Options

### Set a custom validator

You can define your own validation directive to use on a `<igx-column>` in the template.
Note that it needs to extend the `IgxColumnValidator` class.

```ts
 @Directive({
    selector: '[forbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective extends IgxColumnValidator {
    @Input('forbiddenName')
    public forbiddenNameString = '';

    validate(control: AbstractControl): ValidationErrors | null {
        return this.forbiddenNameString ? forbiddenNameValidator(new RegExp(this.forbiddenNameString, 'i'))(control)
            : null;
    }
}
```

Once it is defined and added in your app module you can set it declaratively to a given column in the grid:

```html
<igx-column forbiddenName='josh' ...>
```

### Change default error template

You can define your own custom error template that will be displayed in the error tooltip when the cell enters invalid state.
This is useful in scenarios where you want to add your own custom error message or otherwise change the look or content of the message.

```html
<igx-column ... >
  <ng-template igxCellValidationError let-cell='cell'>
    <div *ngIf="cell.formGroup?.get(cell.column?.field).errors?.['forbiddenName']">
      This name is forbidden.
    </div>
  </ng-template>
</igx-column>
```

### Prevent exiting edit mode on invalid state

In some cases you may want to disallow submiting an invalid value in the data.
In that scenarios you can use the `cellEdit` or `rowEdit` events and cancel the event in case the new value is invalid.
Both events' arguments have a `isValid` property and can be canceled accordingly.

```
<igx-grid (cellEdit)='cellEdit($event)' ...>
```

```
public cellEdit(evt) {
  if (!evt.isValid) {
    evt.cancel = true;
  }
}
```

### Example

The below example demonstrates the above-mentioned customization options.

@@if (igxName === 'IgxGrid') {
<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-validator-service-extended" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/grid-validator-service-extended" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/grid-validator-service-extended" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}

## Integration with Transaction service

Validation states are stored as part of the transaction service.
When `batchEditing` is enabled all methods that affect the state such as `commit`, `clear`, `undo`, `redo` will also update the validity state of cells in the grid.
When `batchEditing` is disabled, validation states will still be persisted until `clear` is called.

The following public apis are exposed in the base transaction to get/set validation related transactions and states:

- [getInvalidTransactionLog]({environment:angularApiUrl}/interfaces/igxbasetransactionservice.html#getInvalidTransactionLog) - Returns invalid transactions.
- [addValidation]({environment:angularApiUrl}/interfaces/igxbasetransactionservice.html#addValidation) - Adds provided transaction with validation status.
- [getAggregatedValidationState]({environment:angularApiUrl}/interfaces/igxbasetransactionservice.html#getAggregatedValidationState) - Returns the validation state of the record with provided id.
- [getAggregatedValidationChanges]({environment:angularApiUrl}/interfaces/igxbasetransactionservice.html#getAggregatedValidationChanges)- Returns aggregated validation changes from all transactions

We do not disallow submitting invalid values in the data out of the box. It's up to you to decide how to handle invalid transactions.

## API References

* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxColumnComponent](({environment:angularApiUrl}/classes/igxcolumncomponent.html))
* [ValidatorsDirective](({environment:angularApiUrl}/classes/validatorsdirective.html))


## Additional Resources

* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Row Editing](row-editing.md)
* [@@igComponent Row Adding](row-adding.md)
* [@@igComponent Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)