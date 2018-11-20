---
title: Date Picker Component
_description: Add the functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Date Picker components, Angular Date Picker controls
_language: kr
---

## Date Picker
<p class="highlight">The Ignite UI for Angular Date Picker component displays a month-view calendar or a pop-up calendar that lets users pick a single date. It supports locales and custom date formatting. The component can display a today and cancel buttons.</p>
<div class="divider"></div>

### Date Picker Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) allows you to pick a date from a calendar. The picker uses the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) internally as a calendar. To get started with the Ignite UI for Angular Date Picker, let's first import the [**IgxDatePickerModule**]({environment:angularApiUrl}/classes/igxdatepickermodule.html) in our **app.module.ts** file:

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

Then in our template we place the date picker:

```html
<igx-date-picker></igx-date-picker>
```

The result is as follows:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### Setting date
We could set a date to our [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) using the [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) input. Just add a date:

```typescript
public date: Date = new Date(Date.now());
```

Then use the [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) input in the template:

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

If we want to use a two-way data-binding, we could just use `ngModule` like this:

```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

#### Adding buttons
The  [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) supports a today button which selects the current day from the calendar. Cancel button could be enabled too. Here is how we can enable the buttons in our template:

```html
<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-date-picker>
```

Here you can see the buttons:
<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### Custom formatting
By default our date will be formatted based on the [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) we set. We could use our own formatter though. To achieve this add a formatter function:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

And then use the [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) input of the The  [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html):

```html
<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

Here is the formatted date:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### Templating Input Group

The Date Picker's input group look can be customized. To do that we need to decorate the nested ng-template inside the date picker with `IgxDatePickerTemplate` directive. ng-template context exposes the following members: `openDialog` method can be used to open the date picker dialog; [`displayData`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaydata) property contains the formatted value; [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) contains the real value. You could use those by declaring a variables in the ng-template element.

In the following example we modify the default label "Date" add a second icon as suffix. Bellow the input group we're using a label to display the real date picker value:

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
    <iframe id="date-picker-sample-6" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-6" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
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
    <iframe id="date-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)