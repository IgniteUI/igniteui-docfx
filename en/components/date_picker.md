---
title: Date Picker Component
_description: Add the functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Date Picker components, Angular Date Picker controls
---

## Date Picker
<p class="highlight">The Ignite UI for Angular Date Picker component displays a month-view calendar or a pop-up calendar that lets users pick a single date. It supports locales and custom date formatting. The component can display a today and cancel buttons.</p>
<div class="divider"></div>

### Date Picker Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The `IgxDatePickerComponent` allows you to pick a date from a calendar. The picker uses the `IgxCalendarComponent` internally as a calendar. To get started with the Ignite UI for Angular Date Picker, let's first import the **IgxDatePickerModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDatePickerModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxDatePickerModule],
    ...
})
export class AppModule {}
```

Then in our template we place the date picker:

```html
<igx-datePicker></igx-datePicker>
```

The result is as follows:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Setting date
We could set a date to our `IgxDatePickerComponent` using the `value` input. Just add a date:

```typescript
public date: Date = new Date(Date.now());
```

Then use the `value` input in the template:

```html
<igx-datePicker [value]="date"></igx-datePicker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

If we want to use a two-way data-binding, we could just use `ngModule` like this:

```html
<igx-datePicker [(ngModel)]="date"></igx-datePicker>
```

#### Adding buttons
The `IgxDatePickerComponent` supports a today button which selects the current day from the calendar. Cancel button could be enabled too. Here is how we can enable the buttons in our template:

```html
<igx-datePicker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-datePicker>
```

Here you can see the buttons:
<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Custom formatting
By default our date will be formatted based on the `locale` we set. We could use our own formatter though. To achieve this add a formatter function:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

And then use the `formatter` input of the `IgxDatePickerComponent`:

```html
<igx-datePicker [value]="date" [formatter]="formatter"></igx-datePicker>
```

Here is the formatted date:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Internationalization
The `IgxDatePickerComponent` supports locales. You can set them using the `locale` input. Using the `IgxCalendarComponent` templates for header (`igxCalendarHeader`) and subheader (`igxCalendarSubheader`), you can specify the look of your header and subheader. More information on how to use these templates you can find in the `IgxCalendarComponent` [documentation](calendar.md). Here is how a date picker with Japanese locale definition would look like:

```html
<igx-datePicker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
    <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-datePicker>
```

> [!NOTE]
> Mind that both in Internet Explorer and Edge all of the date parts will be empty strings as both browsers don't implement the Intl API providing this functionality. (See [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts))

To support those browsers we are going to use alternative template using [ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) directive:

```html
<!-- app.component.html-->
<igx-datePicker id="date-picker" locale="ja-JP" [value]="date" #component>
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
</igx-datePicker>
```
Note that **ngIf** evaluates the value of the **formatParts** expression to control which template to use. Let's have a look at the alernative **#parseTemplate** template: the expressions in the curly brackets invokes the **getDatePart** method that returns the evaluated value, in our case this is a formatted date part (year, weekday, month, etc.). The parameters passed to the **getDatePart** are necessary so that formatting is based on the **IgxDatePickerComponent** locale and format options:

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
    <iframe id="date-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API

#### Inputs
<div class="divider--half"></div>

| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `value` | `Date` | Sets the selected date. |
| `todayButtonLabel` | `string` | Renders today button with custom name, which selects today's date from calendar, and fill the datePicker input. |
| `cancelButtonLabel` | `string` | Renders cancel button with custom name, which closes the calendar. |
| `formatter` | `function` | Applied custom formatter on the selected or passed date. |
| `isDisabled` | `boolean` | Disables the datePicker. |
| `weekStart`| `Number \| WEEKDAYS` | Sets on which day the week starts. |
| `locale` | `string` | Sets the locale used for formatting and displaying the dates in the calendar. For more information check out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) page for valid formats. |
| `formatOptions` | `Object` | The format options passed along with the `locale` property used for formatting the dates. |
| `formatViews` | `Object` | The format views passed along with the `locale` property used for formatting dates. |

#### Outputs
<div class="divider--half"></div>

| Name | Return Type | Description |
|:--:|:---|:---|
| `onSelection` | `Date` | Fired when selection is made in the calendar. The event contains the selected value(s) based on the type of selection the component is set to |
| `onOpen`  | `datePicker` | Emitted when a datePicker calendar is being opened.  |

#### Methods
<div class="divider--half"></div>

| Name   | Arguments | Return Type | Description |
|:----------:|:------|:------|:------|
| `selectDate` | `date: Date` | `void` | Change the calendar selection. Calling this method will emit the `onSelection` event. |

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)