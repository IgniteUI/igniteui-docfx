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
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validator-service" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validator-service" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}

### Configure via reactive forms

We expose the `FormGroup` that will be used for validation when editing starts on a row/cell via a `onFormGroupCreate` event. You can modify it by adding your own validators for the related fields:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
```ts
    public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }
```
}

@@if (igxName === 'IgxTreeGrid') {
```ts
   public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }
```
}

You can decide to write your own validator function, or use one of the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions).


## Validation service API

The grid exposes a validation service via the `validation` property.
That service has the following public APIs:
- `validity` - returns if the grid validation state is valid.
- `getInvalid` - returns records with invalid states.
- `clear` - clears state for record by id or clears all state if no id is provided.

Invalid states will persis until the validation errors in them are fixed according to the validation rule or they are cleared.

## Validation triggers

Validation will be triggered in the following scenarios:

- While editing via the cell editor based on the grid's `validationTrigger`. Either on `change` while typing in the editor, or on `blur` when the editor loses focus or closes.
- When updating cells/rows via the API - `updateRow`, `updateCell` etc..
- When using batch editing and the `undo`/`redo` API of the transaction service.

> Note: Validation will not trigger for records that have not been edited via user input or via the editing API.

## Angular @@igComponent Validation Customization Options

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
      <div *ngIf="cell.errors?.['phoneFormat']">
        Please enter correct phone format
      </div>
  </ng-template>
</igx-column>
```

### Prevent exiting edit mode on invalid state

In some cases you may want to disallow submiting an invalid value in the data.
In that scenarios you can use the `cellEdit` or `rowEdit` events and cancel the event in case the new value is invalid.
Both events' arguments have a `isValid` property and can be canceled accordingly.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid (cellEdit)='cellEdit($event)' ...>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid (cellEdit)='cellEdit($event)' ...>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid (cellEdit)='cellEdit($event)' ...>
```
}

```ts
public cellEdit(evt) {
  if (!evt.valid) {
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
<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validator-service-extended" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:610px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validator-service-extended" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}

### Cross-field validation

In some scenarios validation of one field may depend on the value of another field in the record.
In that case a custom validator can be used to compare the values in the record via their shared `FormGroup`.

@@if (igxName === 'IgxGrid') {

```ts
export function employeeValidator(minDealsRatio: number, formGroup: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let returnObject = {};
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const actualSalesControl = formGroup.get('actual_sales');

        // Validate dates
        const curDate = new Date();
        if (createdOnRecord.value > curDate) {
            // The created on date shouldn't be greater than current date.
            returnObject = { ...returnObject, ...{ createdInvalid: { value: createdOnRecord.value } }};
        }
        if (lastActiveRecord.value > curDate) {
            // The last active date shouldn't be greater than current date.
            returnObject = { ...returnObject, ...{ lastActiveInvalid: { value: lastActiveRecord.value } }};
        }
        if (createdOnRecord.value > lastActiveRecord.value) {
            // The created on date shouldn't be greater than last active date.
            returnObject = { ...returnObject, ...{ createdLastActiveInvalid: { value: createdOnRecord.value } }};
        }

        // Validate deals
        const dealsRatio = calculateDealsRatio(winControl.value, loseControl.value);
        if (actualSalesControl.value === 0 && dealsRatio > 0) {
            returnObject = { ...returnObject, ...{ salesZero: { value: actualSalesControl.value } }};
        }
        if (actualSalesControl.value > 0 && dealsRatio == 0 ) {
            returnObject = { ...returnObject, ...{ salesNotZero: { value: actualSalesControl.value } }};
        }
        if (dealsRatio < minDealsRatio) {
            returnObject = { ...returnObject, ...{ dealsRatio: { value: dealsRatio } }};
        }

        return Object.entries(returnObject).length == 0 ? null : returnObject;
    };
}

export function calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;
}

```

The below sample demonstrates a cross-field validation between different field of the same record. It checks the dates validity compared to the current date and between the active and created on date of the record as well as the deals won/lost ration for each employee. All errors are collected in a separate pinned column that shows that the record is invalid and displays the related errors.

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [employeeValid]="minDealsRatio" [pinned]="true" [width]="'50px'">
            <ng-template igxCell let-cell="cell" class="validatorCell">
                <div *ngIf="getValidRow(cell)" style="margin-right: '-10px';">
                    <img width="18" src="assets/images/grid/active.png" title="Ok" />
                </div>
            </ng-template>
            <ng-template igxCellValidationError let-cell='cell'>
                <div *ngIf="cell.errors?.['createdInvalid']">
                    The registration date cannot be in the future.
                </div>
                <div *ngIf="cell.errors?.['lastActiveInvalid']">
                    The last active date cannot be in the future.
                </div>
                <div *ngIf="cell.errors?.['createdLastActiveInvalid']">
                    The registration date cannot be greater than the last active date.
                </div>
                <div *ngIf="cell.errors?.['salesZero']">
                    The actual sales cannot be 0 when the deals ratio is greater than 0.
                </div>
                <div *ngIf="cell.errors?.['salesNotZero']">
                    The actual sales cannot be greater than 0 when the deals ratio is 0.
                </div>
                <div *ngIf="cell.errors?.['dealsRatio']">
                    The deals ratio cannot be {{ minDealsRatio }} or less.
                </div>
            </ng-template>
  </igx-column>
```

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-validator-service-cross-cell" alt="Angular @@igComponent Cross-field Validation Example">
</code-view>

<div class="divider--half"></div>

}

@@if (igxName === 'IgxHierarchicalGrid') {

  Cross-field validators can be added to the formGroup on the `formGroupCreated` event. In them multiple fields can be compared for validity.

  ```ts
  public formCreateCustomerHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.addressValidator());
    }

    public formCreateOrderHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.dateValidator());
    }

    public addressValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }
            return returnObject;
        }
    }

    public dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const orderDate = formGroup.get('OrderDate').value;
            const shippedDate = formGroup.get('ShippedDate').value;
            if (new Date(shippedDate) < new Date(orderDate)) {
                returnObject['invalidRange'] = true;
            }
            return returnObject;
        }
    }
  ```

The multi-field errors can then be displayed in a separate pinned column.

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'50px'">
        <ng-template igxCell let-cell="cell">
            <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/active.png"/>
            </div>
            <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
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

Errors and the detailed messages can be determined based on the row and cell's validity.

```ts
    public isRowValid(cell: IgxGridCell) {
        const hasErrors = !!cell.row.errors || cell.row.cells.some(x => !!x.errors);
        return !hasErrors;
    }

    public stateMessage(cell: IgxGridCell) {
        const messages = [];
        const row = cell.row;
        if  (row.errors?.invalidAddress) {
            messages.push('The address information is invalid. City does not match the Country.');
        }
        if  (row.errors?.invalidRange) {
            messages.push('The ShippedDate cannot be before the OrderDate.');
        }
        const cellValidationErrors = row.cells.filter(x => !!x.errors);
        if (cellValidationErrors && cellValidationErrors.length > 0) {
            const fields = cellValidationErrors.map(x => x.column.field).join(',');
            messages.push('The following fields are required: ' + fields);
        }

        if (messages.length === 0) {
            // no errors
            return ['Valid'];
        }
        return messages;
    }
```

The below sample demonstrates cross-field validation in a Hierarchical Grid for both the root and child data.

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-cross-field-validation" alt="Angular @@igComponent Cross-field Validation Example">
</code-view>

<div class="divider--half"></div>
}



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