---
title: Date Picker Component
_description: Add the functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Date Picker components, Angular Date Picker controls
---

# Date Picker
<p class="highlight">The Ignite UI for Angular Date Picker Component displays a month-view calendar that lets the users to pick a single date or provides an editable input for modifying the date in a dropdown mode. It supports locales and custom date formatting.</p>

### Demo
<div class="sample-container loading" style="height: 550px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Usage

#### First Steps
To get started with the Date Picker component, first you need to import the `IgxDatePickerModule` in our **app.module.ts** file. 

As the picker uses the [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), it is also dependent on the **BrowserAnimationsModule** and on the **HammerModule** for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts

...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxDatePickerModule],
    ...
})
export class AppModule {}
```

#### Display Date Picker
To add a date picker in its default `dialog mode`, use the following code:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker></igx-date-picker>
```

### Examples

#### Setting date
To set a date to the `IgxDatePickerComponent`, first add a date using the following code:

```typescript
// date-picker-sample.component.ts

public date: Date = new Date(Date.now());
```

Then, use the [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) input in the template:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date"></igx-date-picker>
```

The result is as follows:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Dropdown mode
By default, the date picker is displayed in a read-only dialog mode. To change it to editable dropdown mode, set the [`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) input to [`dropdown`]({environment:angularApiUrl}/enums/interactionmode.html#dropdown).

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker mode="dropdown"></igx-date-picker>
```

You can further customize the drop-down date picker, configuring the following inputs:

| Input | Type | Description | 
| ------------- |:-------------:|:-------------:| 
| [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) | `string` | Configures the date display format. Accepts formats containing valid symbols and combinations that can be applied on Angular Date Pipe. For more information, check [DatePipe](https://angular.io/api/common/DatePipe) documentation. The following pre-defined format options are supported as well - shortDate, mediumDate, longDate and fullDate. |
| [`mask`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mask)|`string`| Configures the date editor mask. Accepts combinations of the numeric representations of the d, M and y symbols and arbitrary separators - for example dd-MM-y. The editor doesn't accept the literal representation of MMM, MMMM and MMMMM. Valid masks for the day part are: d and dd, for the month part - M and MM and for the year part - y, yy and yyyy.|
| [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#isspinloop) | `boolean` | Configures the continuous spin loop when using the <kbd>UP</kbd> and <kbd>DOWN</kbd> arrow keys in the editor. If set to false, date part spinning stops when min/max date/month is reached. By default, the spin loop is infinite.|
| [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) | `string` | When setting the `locale` property in editable drop-down date picker, have in mind that only the en-US locale data comes with Angular. To localize dates in another language, you must import the corresponding locale data. See the [I18n](https://angular.io/guide/i18n#i18n-pipes) guide for more information.|


> [!NOTE]
> If both [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) and [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) inputs are set, the drop-down date picker ignores the [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) input.

The editable drop-down date picker provides the following outputs to handle the input of disabled and invalid dates:

| Output | Arguments | Description | 
| ------------- |:-------------:|:-------------:|
| [`onDisabledDate`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#ondisableddate) | [`IDatePickerDisabledDateEventArgs`]({environment:angularApiUrl}/interfaces/idatepickerdisableddateeventargs.html) | Fires when the user types/spins a disabled date in the date picker editor. |
| [`onValidationFailed`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#onvalidationfailed) | [`IDatePickerValidationFailedEventArgs`]({environment:angularApiUrl}/interfaces/idatepickervalidationfailedeventargs.html) | Fires when the user types/spins invalid date in the date picker editor. |

##### Keyboard Navigation
* To open the date picker drop-down: 
    * <kbd>SPACE</kbd> key
    * <kbd>ALT</kbd> + <kbd>DOWN</kbd> keys
*  To close the date picker drop-down:
    * <kbd>ESC</kbd> key
    * <kbd>ALT</kbd> + <kbd>UP</kbd>  keys
*  To increment a date part:
    * Focus on a date part + <kbd>UP</kbd> key
*  To decrement a date part:
    * Focus on a date part + <kbd>DOWN</kbd> key

In the next sample we will set the display format to longDate (equivalent to 'MMMM d, y') and the date editor mask to 'dd-MM-y':

```html
<igx-date-picker mode="dropdown"
                 format="longDate" 
                 mask="dd-MM-y">
</igx-date-picker>
```

<div class="sample-container loading" style="height: 500px;">
    <iframe id="date-picker-dropdown" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-dropdown" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-dropdown" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-dropdown" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Adding buttons
The `IgxDatePickerComponent` can display 'today' and 'cancel' buttons.

To enable them in a template, use the [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) and the [`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel) inputs.

We can also create a two-way data-binding using an `ngModel`:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-date-picker>
```

#### Multi View mode
The multiview date picker supports both the `dropdown` and the `dialog` modes.

Use the [`monthsViewNumber`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#monthsviewnumber) input to set the number of displayed months in the calendar. To hide the days that do not belong to the current month, use the [`hideOutsideDays`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#hideoutsidedays) property.

```html
<!-- date-picker-sample.component.html -->

<label>Dialog Mode</label>
<igx-date-picker [monthsViewNumber]="2" [hideOutsideDays]="true"></igx-date-picker>
       
<label>Drop Down Mode</label>
<igx-date-picker mode="dropdown" [monthsViewNumber]="2" [hideOutsideDays]="true"></igx-date-picker>
```

The following sample demonstrates the usage of the date picker's modes, buttons, and two-way data binding:
<div class="sample-container loading" style="height: 680px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Custom action buttons
The `IgxDatePickerComponent` supports predefined 'Today' and ‘Cancel’ buttons, but custom actions buttons can be added as well. To do that, wrap the buttons in an `ng-template`, marked with the `igxDatePickerActions` directive selector.

In the example below, two custom action buttons are included to switch to months and years calendar view.

```html
<!-- sample.component.html -->
<igx-date-picker #picker [(ngModel)]="date">
    <ng-template igxDatePickerActions>
        <div class="action-buttons">
            <button igxButton="flat" (click)="monthsView(picker)">months view</button>
            <button igxButton="flat" (click)="yearsView(picker)">years view</button>
        </div>
    </ng-template>
</igx-date-picker>
```

```typescript
// sample.component.ts
public date = new Date();
public monthsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewYear();
}

public yearsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewDecade();
}
```

<div class="sample-container loading" style="height: 680px;">
    <iframe id="date-picker-sample-8" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-8" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-sample-8" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-8" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Custom formatting
By default, the display value is formatted based on the specified [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) property. You could use your own formatter, though, by adding a formatter function:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

Then use the [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) input of the `IgxDatePickerComponent`:

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

Here is the formatted date:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-4" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Templating 

#### Dialog Mode Date Picker

The Date Picker's input group look can be customized using some of the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) properties, exposed by the `ng-template` context. To do that, first we need to wrap the input group in an `ng-template` and decorate it with the `IgxDatePickerTemplate` directive. Then we can declare variables inside the `ng-template` element.

In the following example we modify the default label "Date" and change the preffix icon. Below the input group, a label displays the real date picker value:

```html
<igx-date-picker [value]="date">
    <ng-template igxDatePickerTemplate 
                 let-openDialog="openDialog" 
                 let-value="value" 
                 let-displayData="displayData">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>event_note</igx-icon>
            </igx-prefix>
            <label igxLabel>Date Picker</label>
            <input igxInput [value]="displayData"/>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-date-picker>
```

Here is the retemplated input group:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-6" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-6" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="date-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Dropdown Mode Date Picker
All the information mentioned in the <a href="#dialog-mode-date-picker">Templating Dialog Mode Date Picker</a> section can also be applied when re-templating a dropdown date picker. The only requirement is to pass an HTML element to the `openDialog(target)` so this element can be used as a positioning target for the drop down that is being spawned.

In the following example we change the default icon and move it to the end of the input. There is also a label below the input group displaying the date picker value:

```html
<igx-date-picker [value]="currentDate" mode="dropdown">
    <ng-template igxDatePickerTemplate 
                 let-openDialog="openDialog" 
                 let-value="value"
                 let-displayData="displayData">
        <igx-input-group>
            <input #dropDownTarget igxInput [value]="displayData" (blur)="changeDate($event)"/>
            <igx-suffix (click)="openDialog(dropDownTarget)">
                <igx-icon>event_note</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </ng-template>
</igx-date-picker>
<label>Date: {{ currentDate | date:'longDate'}}</label>
<igx-snackbar #snackbar></igx-snackbar>
```

<div class="sample-container loading" style="height: 550px;">
    <iframe id="date-picker-sample-7" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-7" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="date-picker-sample-7" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-7" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Internationalization
The localization of the `IgxDatePickerComponent` can be controlled through its [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) input. Using the `igxCalendarHeader` and the `igxCalendarSubheader` templates, provided by the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), you can specify the look of your header and subheader. More information on how to use these templates can be found in the [**IgxCalendarComponent**](calendar.md) topic.

Here is how a date picker with Japanese locale definition would look like:

```html
<igx-date-picker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span (click)="format.yearView()">{{ format.year.combined }}</span>
    <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-date-picker>
```

> [!NOTE]
> Keep in mind that for Internet Explorer and Edge browsers the date parts will be empty strings, because both browsers don't implement the Intl API providing this functionality. (See [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts))

To support those browsers we are going to use an alternative template and the [ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) directive:

```html
<!-- app.component.html-->
<igx-date-picker id="date-picker" locale="ja-JP" [value]="date" #component>
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-format>
            {{ format.month.combined | titlecase }} 
            {{ format.day.combined }} 
            {{ format.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span (click)="format.yearView()">{{ format.year.combined }}</span>
            <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-format>
            {{ getDatePart(format, component, 'month') | titlecase }} 
            {{ getDatePart(format, component, 'day') }} 
            {{ getDatePart(format, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span (click)="format.yearView()">{{ getDatePart(format, component, 'year') }}</span>
            <span (click)="format.monthView()">{{ getDatePart(format, component, 'month') }}</span>
        </ng-template>
    </ng-template>
</igx-date-picker>
```
Note that **ngIf** evaluates the value of the **formatParts** expression to control which template to use. Let's have a look at the alternative **#parseTemplate** template: the expressions in the curly brackets invokes the **getDatePart** method that returns the evaluated value, in our case this is a formatted date part (year, weekday, month, etc.). The parameters passed to the **getDatePart** are necessary so that formatting is based on the [**IgxDatePickerComponent**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) locale and format options:

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
    <iframe id="date-picker-sample-5" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-5" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Styling
To get started with styling the date picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The date picker uses the calendar's theme, so we have to create a new theme that extends the [`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) and use some of its parameters to style the date picker's items:

```scss
$custom-datepicker-theme: igx-calendar-theme(
    $header-background: #345779,
    $content-background: #fdfdfd,
    $header-text-color: #ffffff,
    $date-current-text-color: #2dabe8,
    $picker-arrow-color: #2dabe8,
    $date-selected-text-color: #fdfdfd,
    $date-current-bg-color: #fdfdfd,
    $picker-arrow-hover-color: #345779,
    $year-current-text-color: #2dabe8,
    $year-hover-text-color: #2dabe8,
    $month-current-text-color: #2dabe8,
    $month-hover-text-color: #2dabe8,
    $picker-text-color: #2dabe8,
    $picker-text-hover-color: #345779,
);
```

#### Using CSS variables 

The last step is to pass the custom date picker theme: 

```scss
@include igx-css-vars($custom-datepicker-theme);
```

#### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-calendar($custom-datepicker-theme);
    }
}
```

<div class="sample-container loading" style="height:500px">
    <iframe id="datepicker-styling-sample-iframe" src='{environment:demosBaseUrl}/scheduling/datepicker-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="datepicker-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="datepicker-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)