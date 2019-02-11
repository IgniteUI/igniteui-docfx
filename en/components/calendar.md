---
title: Calendar Component
_description: Create an intuitive calendar for applications to display date information, and users to input date information with Ignite UI for Angular Calendar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Calendar components, Angular Calendar controls
---

## Calendar
<p class="highlight">The Ignite UI for Angular Calendar component is developed as a native [Angular component](https://angular.io/guide/architecture#components). Use it to provide your application with three easy and intuitive ways to display date information. Users can select a single date, multiple dates or pick a range of dates.</p>

### Calendar Demo
<div class="sample-container loading" style="height: 730px">
    <iframe id="calendar-sample-5-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Usage
To get started with the **Ignite UI for Angular Calendar**, let's first import the [**IgxCalendarModule**]({environment:angularApiUrl}/classes/igxcalendarmodule.html) in the application's AppModule, typically this is the **app.module.ts** file. Note that the [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```
You will usually also import the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) in the AppComponent file (or your editor will auto-import them for you) when declaring types that are part of the calendar API:

```typescript
import { IgxCalendarComponent } from 'igniteui-angular';
...

@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
```

> [!WARNING]
> Note that the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) uses the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI for localization and formatting of dates.
> Consider using the [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

### Selection
Instantiating the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) is as easy as placing its selector element in the template. This will display the current month in the calendar and use single selection mode. We switch to any of the other selection modes - `multi` and `range`, by setting the [`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) property:
```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
<!-- Multi selection mode -->
<igx-calendar selection="multi"></igx-calendar>
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```
Notice that the calendar header is not rendered when the selection is either `multi` or `range`:
<div class="sample-container" style="height: 730px">
    <iframe id="calendar-sample-1-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

###Localization and formatting

Due to their very nature, localization and formatting are essential to any calendar. In the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) those are controlled and customized through the following properties - [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale), [`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions), [`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatviews).
<br>
Let's go ahead and try those along with other customizations from the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) API. Say we are having visitors on our page coming from countries from EFTA (European Free Trade Association) countries, so we need to display the calendar in the corresponding culture. First thing we need to set is the [`weekstart`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#weekstart), which controls the starting day of the week. It defaults to 0, which corresponds to Sunday, so we set a value of 1.

In the markup below we are also binding the [`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions) and [`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatviews) properties to customize the display formatting. Finally we are binding the [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale) property to a value, based on the user's location choice:

```html
<!-- app.component.html -->
<igx-calendar #calendar
    weekstart="1"
    [locale]="locale"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews">
</igx-calendar>
<select id="locations" (change)="changeLocale($event)">...</select>
```
All property values are set in the AppCоmponent file:

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locale: string;
public select: HTMLSelectElement;

public ngOnInit() {
    this.select = document.getElementById("locations") as HTMLSelectElement;
    this.locale = this.select.value;
    this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
    this.formatViews = { day: true, month: true, year: true };
}

// change the calendar locale
public changeLocale(event) {
    this.locale = event.target.value;
}
```

Great, we should now have a calendar with customized dates display that also changes the locale representation based on the user location. Let's have a look at it:

<div class="sample-container" style="height: 570px">
    <iframe id="calendar-sample-2-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Events
Let's build on top of that sample a bit. We will require the user to enter a date range that does not exceed 5 days. We need to change the [`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) mode of the calendar to "range" and prompt the user to correct the selection, if the range is not valid. To do this we will use the [`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) event:

```html
<!-- app.component.html -->
<igx-calendar #calendar
    ...
    selection="range"
    (onSelection)="verifyRange($event)">
</igx-calendar>
```

The value passed in the [`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) event is the collection of dates selected, so we can read its length to base our logic upon it. If we alert the user for the invalid selection, we also reset the selection to contain only the first date from the range using the [`selectDate`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selectdate) method:

```typescript
// app.component.ts
...
public verifyRange(dates: Date[]) {
    if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
    }
}
```

Let's try this out by playing around with selecting ranges:
<div class="sample-container" style="height: 460px">
    <iframe id="calendar-sample-3-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Templating

We have seen how to make use of the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) API (properties, events, methods) so that we configure the calendar per our requirements and interact with it programatically. Now we want to go further and customize its look, benefiting from the header and subheader templating capabilities.

To do that we need to decorate a ng-template inside the calendar with **igxCalendarHeader** or **igxCalendarSubheader** directive and use the context returned to customize the way the date is displayed.
The template decorated with the **igxCalendarHeader** directive is rendered only when the calendar selection is set to single. The **igxCalendarSubheader** is available in all selection modes.

In our example we slightly modify the default template and will make the header display the full date and modify the subheader to include the weekday:

```html
<!-- app.component.html-->
<igx-calendar>
    <!-- Modify the header to display the month (in titlecase), day and weekday -->
    <ng-template igxCalendarHeader let-parts>
        {{ parts.month.combined | titlecase }} {{parts.day.combined }} {{ parts.weekday.combined }}
    </ng-template>
    <ng-template igxCalendarSubheader let-parts>
        <span class="date__el" (click)="parts.monthView()">{{ parts.month.combined }}</span>
        <span class="date__el" (click)="parts.yearView()">{{ parts.year.combined }}</span>
    </ng-template>
</igx-calendar>
```
> [!NOTE]
> Keep in mind that for Internet Explorer and Edge browsers the date parts will be empty strings, because neither implement the Intl API providing this functionality. (See [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts))

To support those browsers we are going to use alternative template using [ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) directive:

```html
<!-- app.component.html-->
<igx-calendar #component locale="fr">
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-parts>
            {{ parts.month.combined | titlecase }} {{ parts.day.combined }} {{ parts.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-parts>
            <span class="date__el" (click)="parts.monthView()">{{ parts.month.combined }}</span>
            <span class="date__el" (click)="parts.yearView()">{{ parts.year.combined }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl parts-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-parts>
            {{ getDatePart(parts, component, 'month') | titlecase }} {{ getDatePart(parts, component, 'day') }} {{ getDatePart(parts, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-parts>
            <span class="date__el" (click)="parts.monthView()">{{ getDatePart(parts, component, 'month') }}</span>
            <span class="date__el" (click)="parts.yearView()">{{ getDatePart(parts, component, 'year') }}</span>
        </ng-template>
    </ng-template>
</igx-calendar>
```
Note that **ngIf** evaluates the value of the **formatParts** expression to control which template to use. Let's have a look at the alernative **#parseTemplate** template: the expressions in the curly brackets invokes the **getDatePart** method that returns the evaluated value, in our case this is a formatted date part (year, weekday, month, etc.). The parameters passed to the **getDatePart** are necessary so that formatting is based on the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) locale and format options:

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

Having implemented this conditional templating and date parsing we should get consistent formatting across all browsers, let's verify that:

<div class="sample-container" style="height: 570px">
    <iframe id="calendar-sample-4-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Disabled dates
This section demonstrates the usage of [`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) functionallity. Different `single dates` or `range` elements could be added to Array, and passed to the [`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) descriptor.

```typescript
this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: [
    new Date(2018, 8, 2),
    new Date(2018, 8, 8)
])];
```

The [`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) is used to specify the range that is going to be disabled. For example, [`DateRangeType.Between`]({environment:angularApiUrl}/enums/daterangetype.html#between) will disable the dates between two specific dates in Array. Code snippet above.
Check the API table below for all available [`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) values.

This feature is covering the situations when we may need to restrict some dates to be selectable and focusable.

Let's create a sample that is disabling dates within specific range of dates:

```typescript
export class CalendarSample6Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Specific, dateRange: this.range }];
    }
}

```

This is the result.

<div class="sample-container" style="height: 480px">
    <iframe id="calendar-sample-6-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-6' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


### Special dates

[`Special dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) feature is using almost the same configuration principles as [`Disabled dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates). The difference here is dates `styling` and `interaction`. You are able to select and focus [`Special dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates).

Lets add a [`Special dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) to our [`igxCalendar`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), we are going to create a [`DateRangeDescriptor`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html) item of type [`DateRangeType.Specific`]({environment:angularApiUrl}/enums/daterangetype.html#specific) and pass array of dates as [`dateRange`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html#daterange):

```typescript
export class CalendarSample7Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    @ViewChild(IgxSnackbarComponent) public snackbar: IgxSnackbarComponent;
    public range = [];

    ...
    public selectPTOdays(dates: Date[]) {
        this.range = dates;
    }

    public submitPTOdays(eventArgs) {
        this.calendar.specialDates =
            [{ type: DateRangeType.Specific, dateRange: this.range)];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        ...
    }
}
```

```html
<article class="sample-column calendar-wrapper">
    <span>Request Time Off</span>
    <igx-calendar #calendar
        selection="multi"
        (onSelection)="selectPTOdays($event)">
    </igx-calendar>
    <button igxButton="raised" (click)="submitPTOdays($event)">Submit Request</button>
</article>
```

We are going to use the selected dates array to define `Special dates` descriptor.

Result:

<div class="sample-container" style="height: 540px">
    <iframe id="calendar-sample-7-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-7' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-7-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Keyboard navigation
When the [**igxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) component is focused:
- `PageUp` will move to the previous month.
- `PageDown` will move to the next month.
- `Shift + PageUp` will move to the previous year.
- `Shift + PageDown` will move to the next year.
- `Home` will focus the first day of the current month that is in view.
- `End` will focus the last day of the current month that is in view.

When a day inside the current month is focused:
- Arrow keys will navigate through the days.
- `Enter` will select the currently focused day.
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [DateRangeType]({environment:angularApiUrl}/enums/daterangetype.html)
* [DateRangeDescriptor]({environment:angularApiUrl}/interfaces/daterangedescriptor.html)

