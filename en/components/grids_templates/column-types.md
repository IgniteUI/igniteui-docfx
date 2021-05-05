@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Types | Data Types | Ignite UI for Angular | Infragistics
_description: Start using the predefined column types of Angular UI Grid, set any of the number, currency, percent, boolean and date types for default handling of both cell and editing templates
_keywords: column data type, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Types | Data Types | Ignite UI for Angular | Infragistics
_description: Start using the predefined column types of Angular UI Tree Grid, set any of the number, currency, percent, boolean and date types for default handling of both cell and editing templates
_keywords: column data type, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Types | Data Types | Ignite UI for Angular | Infragistics
_description: Start using the predefined column types of Angular UI Hierarchical Grid, set any of the number, currency, percent, boolean and date types for default handling of both cell and editing templates
_keywords: column data type, ignite ui for angular, infragistics
---
}

# @@igComponent Column Types

Ignite UI for Angular @@igComponent provides a default handling of *number*, *string*, *date*, *boolean*, *currency* and *percent* column data types, based on which the appearance of the default and editing templates will be present.


@@if (igxName === 'IgxGrid') {
## Angular Column Types Example


<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-column-data-types" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
}
@@if (igxName === 'IgxHierarchicalGrid') {
}

## Default template
If you want to enable a data type-specific template, you should set the column [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) input otherwise the column will be treated as a string column since that is the default value for column dataType. Let's see what are the default templates for each type.

### String
This column [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) is not changing the appearance or format of the cell value.

### Number
If the [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) is set to *number*, the cell value will be formatted based on application or grid's [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) settings, as well as when [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) property is specified. Then the number format will be changed based on them, for example it might change the:
 - Number of digits after the decimal point
 - Decimal separator with `,` or `.`

```ts
public options = {
  digitsInfo: '1.4-4',
};
public formatOptions = this.options;
```

```html
<igx-column [pipeArgs]="formatOptions" [dataType]="'number'">
</igx-column>
```
### DateTime, Date and Time
The appearance of the date portions will be set (e.g. day, month, year) based on [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) format or [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) input. The pipe arguments can be used to specify a custom [date format](https://angular.io/api/common/DatePipe#pre-defined-format-options) or [timezone](https://angular.io/api/common/DatePipe#parameters):
 - **format** - The default value for formatting the date is 'mediumDate'. Other available options are 'short', 'long', 'shortDate', 'fullDate', 'longTime', 'fulLTime' and etc. This is a full list of all available [pre-defined format options](https://angular.io/api/common/DatePipe#pre-defined-format-options).
 - **timezone** - The user's local system timezone is the default value. The timezone offset or standard GMT/UTC or continental US timezone abbreviation can also be passed. Different timezone examples which will display the corresponding time of the location anywhere in the world:


```ts
public formatDateOptions = {
    /** The date/time components that a date column will display, using predefined options or a custom format string. */
    /** e.g 'dd/mm/yyyy' or 'shortDate' **/
    format: 'longDate',
    /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
    timezone: 'GMT'
};
public formatOptions = this.options;
```

```html
<igx-column [pipeArgs]="formatDateOptions" [dataType]="'date'">
</igx-column>
```

Available timezones:

| Timezone                  | Value                     |
|---------------------------| ------------------------- |
| Alpha Time Zone           |‘UTC+1’                    |
| Australian Central Time   |‘UTC+9:30/ +10:30’         |
| Arabia Standard Time      |‘UTC+3’                    |
| Central Standard Time     |‘UTC-6’                    |
| China Standard Time       |‘UTC+8’                    |
| Delta Time Zone           |‘UTC+4’                    |
| Greenwich Mean Time       |‘UTC+0’                    |
| Gulf Standard Time        |‘UTC+4’                    |
| Hawaii Standard Time      |‘UTC-10’                   |
| India Standard Time       |‘UTC+4’                    |

<div class="divider--half"></div>


The @@igComponent accepts date values of type *Date object*, *Number (milliseconds)*, *An ISO date-time string*. This section shows [how to configure a custom display format](@@if (igxName !== 'IgxGrid') {../grid/}grid.md#custom-display-format).

As you can see in the sample, we specify a different format options in order to showcase the available formats for the specific column type. For example, below you can find the format options for the *time* portion of the date object:

```ts
// Time format with equivalent example
public timeFormats = [
    { format: "shortTime", eq: "'h:mm a'" },
    { format: "mediumTime", eq: "'h:mm:ss a'"},
    { format: "longTime", eq: "'h:mm:ss a z'"},
    { format: "fullTime", eq: "'h:mm:ss a zzzz'"},
];
```

#### Cell editing
When it comes to cell editing based on the column type a different editor will appear:
- dateTime - [IgxDateTimeEditor directive]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) will be used. This editor will give you a mask directions for the input elements part of the DateTime object.
- date - [IgxDatePicker component]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) will be used. 
- time - [IgxTimePicker component]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) will be used. 

#### Filtering
The same editors listed above will be used when it comes to Quick Filtering/Excel-style Filtering. These are the following filtering operands that each type exposes:
- dateTime and date - Equals, Does Not Equal, Before, After, Today, Yesterday, This Month, Last Month, Next Month, This Year, Last Year, Next Year, Empty, Not Empty, Null, Not Null;
- time - At, Not At, Before, After, At or Before, At or After, Empty, Not Empty, Null, Not Null;

#### Summaries
The available Summary operands will be **Count**, **Earliest** (date/time) and **Latest** (date/time).

#### Sorting

Time type column sorts based on the time portion of the object, ms will be disregarded.
Date type column sorts based on the date portion, disregards the time portion.
DateTime column sorts based on the full date
### Boolean

The default template is using material icons for visualization of boolean values - 'clear' icon for *false* values and 'check' icon for *true* values. As for the editing template, it is using [igx-checkbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) component.

```html
<igx-column [dataType]="'boolean'">
</igx-column>
```

### Currency

#### Default template
The default template will show a numeric value with currency symbol that would be either prefixed or suffixed. Both currency symbol location and number value formatting is based on the provided Application [`LOCALE_ID`](https://angular.io/api/core/LOCALE_ID) or @@igComponent [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale).

*By using LOCALE_ID*
```ts
import { LOCALE_ID } from '@angular/core';
...

 @Component({
    selector: 'app-component.sample',
    templateUrl: 'grid-component.sample.html',
    providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]
})
```

*By using Grid's locale*
```html
<igx-grid [locale]="'fr-FR'" [data]="data">
</igx-grid>
```

By using the [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) input the end-user can customize the number format by *decimal point*, *currencyCode* and *display*.

```ts
public options = {
  digitsInfo: '3.4-4',
  currencyCode: 'USD',
  display: 'symbol-narrow'
};
public formatOptions = this.options;
```

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatOptions"
    [dataType]="'currency'">
</igx-column>
```

| Parameter                 | Description                                                |
|---------------------------| -------------------------                                  |
| digitsInfo                | Represents Decimal representation of currency value        |
| currencyCode              | ISO 4217 currency code                                     |
| display*                  | Displays the value by narrow or wide symbol                |

*display - for the default en-US locale, the code USD can be represented by the narrow symbol $ or the wide symbol US$.

Upon editing of cell's value the *currency symbol* will be visible as suffix or prefix. More about that could be found in the official [Cell editing topic](cell-editing.md#cell-editing-templates).

> When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)


### Percent

Default template is showing the percent equivalent of the underlying numeric value. The displayed cell value is a multiplied result by display factor of '100' - for example, as the default factor is 100 and the "value" passed to the cell is 0.123, then the displayed cell value will be "12.3%".

When it comes to cell editing, the value will be the same as the data source value - the display factor is '1'. Upon editing of the cell a preview of the percent value will be shown as a suffix element.For example, while editing '0.0547' the preview element will show '5.47%'.

```ts
public options = {
    /**
    * Decimal representation options, specified by a string in the following format:
    * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
    * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
    * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
    * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
    */
    digitsInfo: '2.2-3'
};
public formatPercentOptions = this.options;
```

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatPercentOptions"
    [dataType]="'percent'">
</igx-column>
```

> Note: When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)

## Default editing template

See the editing templates part of [@@igComponent Editing topic](editing.md#editing-templates)

## Custom editing template and formatter

Custom template and column formatter definition will always take precedence over the column data type set:

### Custom template

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" [dataType]="'currency'">
    <igx-column [field]="'OrderDate'" [dataType]="'currency'" [pipeArgs]="formatDateOptions" [editable]="true">
        <ng-template let-value>
            {{ value | currency:'USD':'symbol':'1.0-0'}}
        </ng-template>
    </igx-column>
</igx-grid>
```

### Column formatter

```ts
 // Through column formatter property
public formatCurrency(value: number) {
    return `Dollar sign {value.toFixed(0)}`;
}

init(column: IgxColumnComponent, template) {
switch (column.field) {
    ...
    case "Open Price":
    column.formatter = this.formatCurrency;
    break;
    default:
    return;
}
```

## API References

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* Column [pipeArgs]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs)
* @@igComponent [locale]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale)
* Column [dataType]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype)

## Additional Resources
<div class="divider--half"></div>

* For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)
* [@@igComponent overview topic](@@igMainTopic.md)
* [Editing topic](editing.md)
* [Summaries topic](summaries.md)
