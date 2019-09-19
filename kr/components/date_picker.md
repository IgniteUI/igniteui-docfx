---
title: Date Picker Component
_description: Add the functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Date Picker components, Angular Date Picker controls
_language: kr
---

## Date Picker
<p class="highlight">The Ignite UI for Angular Date Picker component displays a month-view calendar that lets users to pick a single date in read-only mode or provides an editable input with dropdown calendar to modify the date in edit mode. It supports locales and custom date formatting. The component can display today and cancel buttons in read-only mode.</p>
<div class="divider"></div>

### Date Picker Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
By default, the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) allows you to pick a date from a calendar. The picker uses the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) internally as a calendar. To get started with the Ignite UI for Angular Date Picker, let's first import the `IgxDatePickerModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDatePickerModule],
    ...
})
export class AppModule {}
```

To add the date picker in a template, use the following code:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker></igx-date-picker>
```

The result is as follows:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

#### Setting date
Set a date to [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) using the [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) input. Just add a date:

```typescript
// date-picker-sample.component.ts

public date: Date = new Date(Date.now());
```

Then, use the [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) input in the template:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date"></igx-date-picker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

To create a two-way data-binding, set `ngModel` like this:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

#### Adding buttons
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) supports 'Today' button, which selects the current day from the calendar. 'Cancel' button could be enabled as well.

To enable the buttons in a template, use the [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) and [`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel) inputs and set the buttons text:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-date-picker>
```

#### Setting Multi View mode
Using the [`monthsViewNumber`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#monthsviewnumber) input the number of displayed months in the calendar is set. To hide the days that do not belong to the current month, use the [`hideOutsideDays`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#hideoutsidedays).


Here you can see the buttons:
<div class="sample-container loading" style="height: 680px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

#### Custom formatting
By default, the display value is formatted based on the specified [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale). You could use your own formatter though. To achieve this, add a formatter function:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

And then use the [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) input of the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html):

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

Here is the formatted date:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-4" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

#### Editable mode
By default, the date picker is displayed in read-only mode. To change it to editable mode, set the [`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) input to `editable`.

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker mode="editable"></igx-date-picker>
```

You can further customize the editable date picker, configuring the following date picker inputs:

| Input | Type | Description | 
| ------------- |:-------------:|:-------------:| 
| [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) | `string` | Configures the date display format. Accepts formats containing valid symbols and combinations that can be applied on Angular Date Pipe. For more information, check [DatePipe](https://angular.io/api/common/DatePipe) documentation. The following pre-defined format options are supported as well - shortDate, mediumDate, longDate and fullDate. |
| [`mask`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mask)|`string`| Configures the date editor mask. Accepts combinations of the numeric representations of the d, M and y symbols and arbitrary separators - for example dd-MM-y. The editor doesn't accept the literal representation of MMM, MMMM and MMMMM. Valid masks for the day part are: d and dd, for the month part - M and MM and for the year part - y, yy and yyyy.|
| [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#isspinloop) | `boolean` | Configures the continuos spin loop when using the <kbd>UP</kbd> and <kbd>DOWN</kbd> arrow keys in the editor. If set to false, date part spinning stops when min/max date/month is reached. By default, the spin loop is infinite.|
| [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) | `string` | When setting the locale property in editable date picker, have in mind that only the en-US locale data comes with Angular. To localize dates in another language, you must import the corresponding locale data. See the [I18n](https://angular.io/guide/i18n#i18n-pipes) guide for more information.|


> Note: If both [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) and [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) inputs are set, the editable date picker ignores the [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) input.

The editable date picker provides the following outputs to handle entering of disabled and invalid dates:

| Output | Arguments | Description | 
| ------------- |:-------------:|:-------------:|
| [`onDisabledDate`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#ondisableddate) | [`IDatePickerDisabledDateEventArgs`]({environment:angularApiUrl}/interfaces/idatepickerdisableddateeventargs.html) | Fires when the user types/spins a disabled date in the date picker editor. |
| [`onValidationFailed`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#onvalidationfailed) | [`IDatePickerValidationFailedEventArgs`]({environment:angularApiUrl}/interfaces/idatepickervalidationfailedeventargs.html) | Fires when the user types/spins invalid date in the date picker editor. |

##### Keyboard Navigation
* To open the date picker drop down: 
    * <kbd>SPACE</kbd>
    * <kbd>ALT</kbd> + <kbd>DOWN</kbd> 
*  To close the date picker drop down:
    * <kbd>ESC</kbd>
    * <kbd>ALT</kbd> + <kbd>UP</kbd> 
*  To increment a date part:
    * Focus on a date part + <kbd>UP</kbd> 
*  To decrement a date part:
    * Focus on a date part + <kbd>DOWN</kbd> 

<div class="sample-container loading" style="height: 650px;">
    <iframe id="date-picker-dropdown" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-dropdown" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-dropdown" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Templating Dialog Mode Date Picker

The Date Picker's input group look can be customized. To do that, we need to decorate the nested ng-template inside the date picker with `IgxDatePickerTemplate` directive. The ng-template context exposes the following members:

| Members | Description | 
| ------------- |:-------------:| 
| [`openDialog`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#opendialog) | Method that can be used to open the date picker dialog |
| [`disabled`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#disabled) | Controls date picker disabled state |
| [`disabledDates`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#disableddates) | Contains disabled dates |
| [`displayData`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaydata) | Contains the formatted value when date picker is in read-only mode |
| [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) | Contains display format when date picker is in editable mode |
| [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#isspinloop) | Controls continuos spin loop when date picker is in editable mode |
| [`label`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#label) | Contains the input label text |
| [`labelVisibility`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#labelvisibility) | Controls the input label text visibility |
| [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) | Contains the locale used for formatting and displaying the dates |
| [`mask`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mask) | Contains the mask when date picker is in editable mode |
| [`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) | Contains the date picker mode |
| [`specialDates`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#specialDates) | Contains special dates |
| [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) | Contains the real value |

You could use those by declaring a variables in the ng-template element.

In the following example we modify the default label "Date" and add a second icon as suffix. Below the input group, a label is set to display the real date picker value:

```html
<igx-date-picker [value]="date">
    <ng-template igxDatePickerTemplate let-openDialog="openDialog" let-value="value" let-displayData="displayData">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>favorite</igx-icon>
            </igx-prefix>
            <label igxLabel>My Custom Date<</label>
            <input igxInput [value]="displayData" />
            <igx-suffix>
                <igx-icon>today</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-date-picker>
```
```typescript
public date: Date = new Date(Date.now());
```

Here is the retemplated input group:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-6" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-6" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

#### Templating Dropdown Mode Date Picker
All the information mentioned in the <a href="#templating-dialog-mode-date-picker">Templating Dialog Mode Date Picker</a> section can be applied when re-templating a dropdown date picker. The only requirement is that an HTML element should be passed to the `openDialog(target)`, and that element will be used as a positioning target for the drop down that is being spawned.

<div class="sample-container loading" style="height: 650px;">
    <iframe id="date-picker-sample-7" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-7" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-7" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

#### Custom button action
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) supports predefined 'Today' and ‘Cancel’ buttons, but custom actions buttons can be added as well. To do that, wrap the buttons in `ng-template` marked with the `igxDatePickerActions` directive selector.

In the example below, two custom action buttons are included to switch to months and years calendar view.

```html
<!-- sample.component.html -->
 <igx-date-picker mode="dropdown" #picker [(ngModel)]="date">
    <ng-template igxDatePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="monthsView(picker)">months view</button>
            <button igxButton="flat" (click)="yearsView(picker)">years view</button>
        </div>
    </ng-template>
</igx-date-picker>
```

```typescript
// sample.component.ts
...
public date = new Date();
public monthsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewYear();
}

public yearsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewDecade();
}
...
```

The result is as follows:
<div class="sample-container loading" style="height: 680px;">
    <iframe id="date-picker-sample-8" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-8" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-8" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Internationalization
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) supports locales. You can set them using the [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) input. Using the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) templates for header (`igxCalendarHeader`) and subheader (`igxCalendarSubheader`), you can specify the look of your header and subheader. More information on how to use these templates you can find in the [**IgxCalendarComponent**](calendar.md) topic. Here is how a date picker with Japanese locale definition would look like:

```html
<igx-date-picker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
    <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-date-picker>
```

> [!NOTE]
> Keep in mind that for Internet Explorer and Edge browsers the date parts will be empty strings, because both browsers don't implement the Intl API providing this functionality. (See [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts))

To support those browsers we are going to use alternative template using [ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) directive:

```html
<!-- app.component.html-->
<igx-date-picker id="date-picker" locale="ja-JP" [value]="date" #component>
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-format>
            {{ format.month.combined | titlecase }} {{ format.day.combined }} {{ format.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
            <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-format>
            {{ getDatePart(format, component, 'month') | titlecase }} {{ getDatePart(format, component, 'day') }} {{ getDatePart(format, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span class="date__el" (click)="format.yearView()">{{ getDatePart(format, component, 'year') }}</span>
            <span class="date__el" (click)="format.monthView()">{{ getDatePart(format, component, 'month') }}</span>
        </ng-template>
    </ng-template>
</igx-date-picker>
```
Note that **ngIf** evaluates the value of the **formatParts** expression to control which template to use. Let's have a look at the alernative **#parseTemplate** template: the expressions in the curly brackets invokes the **getDatePart** method that returns the evaluated value, in our case this is a formatted date part (year, weekday, month, etc.). The parameters passed to the **getDatePart** are necessary so that formatting is based on the [**IgxDatePickerComponent**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) locale and format options:

```typescript
// app.component.ts
public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
public formatParts: boolean = this.intlDateTimeFormat.formatToParts;

public getDatePart(val: any, component: any, datePart: string) {
    const date = val.date as Date;
    const locale = component.locale;
    const formatOptions: Intl.DateTimeFormatOptions = {};
    formatOptions[datePart] = component.formatOptions[datePart];

    return date.toLocaleString(locale, formatOptions);

    // instead of toLocaleString we can use Intl.DateTimeFormat.format as well:
    // const partFormatter = new Intl.DateTimeFormat(locale, formatOptions);
    // return partFormatter.format(date);
}
```

The result is as follows:
<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-5" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz ????</button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)