---
title: Editing and Validation in Angular Tree Grid - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular Tree Grid. See demos & examples!
_keywords: angular validation, ignite ui for angular, infragistics
_license: commercial
---

# Angular Tree Grid Editing and Validation

The Tree Grid's editing exposes a built-in validation mechanism of user input when editing cells/rows. It extends the [Angular Form validation](https://angular.io/guide/form-validation) functionality to allow easier integration with a well known functionality. When the state of the editor changes, visual indicators are applied to the edited cell.

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

The following sample demonstrates how to use the prebuilt `required`, `email` and `min` validator directives in a Tree Grid.


<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validator-service/" alt="Angular Tree Grid Validation Basic Example">
</code-view>

<div class="divider--half"></div>



### Configure via reactive forms

We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `formGroupCreated` event. You can modify it by adding your own validators for the related fields:






```html
<igx-tree-grid (formGroupCreated)='formCreateHandler($event)' ...>
```







```ts
   public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }
```



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

## Angular Tree Grid Validation Customization Options

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






```html
<igx-tree-grid (cellEdit)='cellEdit($event)' ...>
```



```ts
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```

### Example

The below example demonstrates the above-mentioned customization options.



<code-view style="height:570px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validator-service-extended/" alt="Angular Tree Grid Custom Validation Example">
</code-view>

<div class="divider--half"></div>



## Cross-field validation

In some scenarios validation of one field may depend on the value of another field in the record.
In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.








The below sample demonstrates a cross-field validation between different field of the same record. It checks that a specified City for a person is in the Country currently set and vice versa. Also check if the age for a person was 18 already when it was hired.

The next lines of code show the cross-field validator function, which contains comparisons described above and sets the related errors.

```ts
private rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};
        
        const age = formGroup.get('Age');
        const hireDate = formGroup.get('HireDate');
        if((new Date().getFullYear() - new Date(hireDate.value).getFullYear()) + 18 >= age.value) {
            returnObject['ageLessHireDate'] = true;
        }

        const city = formGroup.get('City');
        const country = formGroup.get('Country');
        const validCities = this.countryData.get(country.value);
        if (!validCities || !validCities[city.value]) {
            returnObject['invalidAddress'] = true;
        }

        return returnObject;
    };
}
```

The cross-field validator can be added to the `formGroup` of the row from [`formGroupCreated`]({environment:angularApiUrl}/classes/IgxGridComponent.html#formGroupCreated) event, which returns the new `formGroup` for each row when entering edit mode:

```html
<igx-tree-grid igxPreventDocumentScroll #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID"
    foreignKey="ParentID" [width]="'100%'" [height]="'500px'" [rowEditable]="true" [pinning]="pinningConfig"
    (formGroupCreated)="formCreateHandler($event)">
    <!-- ... -->
</igx-tree-grid>

```

```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

The different errors are displayed in a templated cell that combines all errors in a single tooltip. Depending on the row valid state different icon is displayed:

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'150px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin: 'auto';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin: 'auto';">
            <img width="18" src="assets/images/grid/expired.png"/>
        </div>
        <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
            <div *ngFor="let message of stateMessage(cell)">
                {{message}}
            </div>
        </div>
    </ng-template>
</igx-column>
```

The error messages are gathered in the `stateMessage` function, which gathers the errors for each cell, because each column could have templated form validations and then checks the errors for the row itself, which come from the custom `rowValidator`.

```typescript
public stateMessage(cell: CellType) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors...
        }
    });

    if (row.validation.errors?.ageLessHireDate) {
        messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
    }
    if (row.validation.errors?.invalidAddress) {
        messages.push(`Selected \`City\` does not match the \`Country\`.`);
    }

    if (messages.length === 0 && this.isRowValid(cell)) {
        messages.push('OK');
    }

    return messages;
}
```



### Cross-field example






The below sample demonstrates the cross-field validation in action.

<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-cross-field-validator-service/" alt="Angular Tree Grid Cross-field Validation Example">
</code-view>


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







```ts
public rowStyles = {
    background: (row: RowType) => row.cells.find(c => c.validation.errors !== null && c.validation.errors !== undefined) ? '#FF000033' : '#00000000'
};
public cellStyles = {
  'invalid-cell': (rowData, columnKey) => {
      const pKey = this.treeGrid.primaryKey;
      const cell = this.treeGrid.getCellByKey(rowData[pKey], columnKey);
      return cell && cell.validation.status === 'INVALID';
  }
}
```

```html
<igx-tree-grid [rowStyles]="rowStyles">
  <igx-column *ngFor="let c of columns" [field]="c.field" [dataType]="c.dataType" [header]="c.label" [required]="c.required" [cellClasses]="cellStyles">
```




### Demo








<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validation-style/" >
</code-view>



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
- [Tree Grid Overview](tree-grid.md)
- [Tree Grid Editing](editing.md)
- [Tree Grid Row Editing](row-editing.md)
- [Tree Grid Row Adding](row-adding.md)
- [Tree Grid Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
