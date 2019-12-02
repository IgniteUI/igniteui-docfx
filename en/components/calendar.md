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
To get started with the Calendar component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxCalendarModule` in the application's AppModule, typically this is the **app.module.ts** file. Note that the [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

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

> [!NOTE]
> Note that the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) uses the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI for localization and formatting of dates.
> Consider using the [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

#### Selection
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

<div class="sample-container loading" style="height: 730px">
    <iframe id="calendar-sample-1-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Localization and formatting

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

<div class="sample-container loading" style="height: 570px">
    <iframe id="calendar-sample-2-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Events
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
<div class="sample-container loading" style="height: 460px">
    <iframe id="calendar-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Templating

We have seen how to make use of the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) API (properties, events, methods) so that we configure the calendar per our requirements and interact with it programmatically. Now we want to go further and customize its look, benefiting from the header and subheader templating capabilities.

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

<div class="sample-container loading" style="height: 570px">
    <iframe id="calendar-sample-4-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Disabled dates
This section demonstrates the usage of [`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) functionality. Different `single dates` or `range` elements could be added to Array, and passed to the [`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) descriptor.

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

<div class="sample-container loading" style="height: 480px">
    <iframe id="calendar-sample-6-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-6' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Special dates

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

<div class="sample-container loading" style="height: 540px">
    <iframe id="calendar-sample-7-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-7' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-7-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Views
There are separate views provided by the `IgxCalendarModule` that can be used independently:
- Days View - [`igx-days-view`]({environment:angularApiUrl}/classes/igxdaysviewcomponent.html)
- Months View - [`igx-months-view`]({environment:angularApiUrl}/classes/igxmonthsviewcomponent.html)
- Years View - [`igx-years-view`]({environment:angularApiUrl}/classes/igxyearsviewcomponent.html)

<div class="sample-container loading" style="height: 540px">
    <iframe id="calendar-views-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-views' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-views-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Keyboard navigation
When the [**igxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) component is focused, use:
- <kbd>PageUp</kbd> key to move to the previous month,
- <kbd>PageDown</kbd> key to move to the next month,
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> keys to move to the previous year,
- <kbd>Shift</kbd> + <kbd>PageDown</kbd> keys to move to the next year,
- <kbd>Home</kbd> key to focus the first day of the current month  or first month in view
- <kbd>End</kbd> key to focus the last day of the current month or last month in view
- <kbd>Tab</kbd> key to navigate through the subheader buttons;

When `prev` or `next` month buttons (in the subheader) are focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to scroll into view the next or previous month.

When `months` button (in the subheader) is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the months view.

When `year` button (in the subheader) is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the decade view.

When a day inside the current month is focused, use:
- Arrow keys to navigate through the days,
- Arrow keys to navigate to previous/next month as well,
- Navigating next from last day in current month or previous from first day in current month, will move focus to next/previos month that is in view.
- Navigating next from last day in last visible current month or previous from first day in first current month, will change the months in view.
- <kbd>Enter</kbd> key to select the currently focused day.

When a month inside the months view is focused, use:
- Arrow keys to navigate through the months,
- <kbd>Home</kbd> key to focus the first month inside the months view,
- <kbd>End</kbd> key to focus the last month inside the months view,
- <kbd>Enter</kbd> key to select the currently focused month and close the view.

When an year inside the decade view is focused, use:
- Arrow keys to navigate through the years,
- <kbd>Enter</kbd> key to select the currently focused year and close the view.

>[!NOTE]
 >Following version 8.2.0, keyboard navigation will not focus days that are outside of current month, but will rather change the month in view.

<div class="divider--half"></div>


### Multi View Calendar
Using the [`monthsViewNumber`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#monthsviewnumber) input the number of displayed months is set. There is no limit on the max value set, and the months are displayed in a flex container horizontally. Showing a multi view calendar, you may want to hide the days that do not belong to the current month, using the [`hideOutsideDays`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#hideoutsidedays). Multiview calendar supports all three types of selection. Keyboard navigation moves to next/previous months when those are in view.

Result:

<div class="sample-container loading" style="height: 540px">
    <iframe id="multiview-calendar" data-src='{environment:demosBaseUrl}/scheduling/multiview-calendar' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="multiview-calendar" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>

### Styling

To get started with styling the calendar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) and accepts the `$header-background` `$content-background`, `$header-text-color`, `$date-current-text-color`, `$picker-arrow-color`, `$picker-arrow-hover-color`,`$year-current-text-color`, `$year-hover-text-color`, `$month-current-text-color`, `$month-hover-text-color`, `$picker-text-color` and the `$picker-text-hover-color` parameters.

```scss
$my-calendar-theme: igx-calendar-theme(
  $header-background: #345779,
  $content-background: #fdfdfd,
  $header-text-color: #ffffff,
  $date-current-text-color: #2dabe8,
  $picker-arrow-color: #2dabe8,
  $picker-arrow-hover-color: #000000,
  $year-current-text-color: #2dabe8,
  $year-hover-text-color: #2dabe8,
  $month-current-text-color: #2dabe8,
  $month-hover-text-color: #2dabe8,
  $picker-text-color: #2dabe8,
  $picker-text-hover-color: #000000
);
```
The last step is to **include** the component mixins: 

```scss
 @include igx-calendar($my-calendar-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](./themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-calendar($my-calendar-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$blue-color: #345779;
$light-gray-color: #fdfdfd;

$my-custom-palette: igx-palette(
    $primary: $blue-color,
    $secondary: $light-gray-color
);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$my-calendar-theme: igx-calendar-theme(
  $header-background: igx-color($my-custom-palette, "primary", 500),
  $content-background: igx-color($my-custom-palette, "secondary", 500),
  $header-text-color: igx-color($my-custom-palette, "secondary", 50),
  $date-current-text-color: igx-color($my-custom-palette, "primary", 50),
  $picker-arrow-color: igx-color($my-custom-palette, "primary", 50),
  $picker-arrow-hover-color: igx-color($my-custom-palette, "grays", 900),
  $year-current-text-color: igx-color($my-custom-palette, "primary", 50),
  $year-hover-text-color: igx-color($my-custom-palette, "primary", 50),
  $month-current-text-color: igx-color($my-custom-palette, "primary", 50),
  $month-hover-text-color: igx-color($my-custom-palette, "primary", 50),
  $picker-text-color: igx-color($my-custom-palette, "primary", 50),
  $picker-text-hover-color: igx-color($my-custom-palette, "grays", 900),
  $date-selected-background: igx-color($my-custom-palette, "primary", 500),
  $date-selected-text-color: igx-color($my-custom-palette, "secondary", 500)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](./themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](./themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-calendar`]({environment:sassApiUrl}/index.html#variable-_light-calendar):  

```scss
// Extending the light calendar schema
$custom-calendar-schema: extend($_light-calendar,
    (
        header-background: (igx-color: ('primary', 500)),
        content-background: (igx-color: ('secondary', 500)),
        header-text-color: (igx-color: ('secondary', 50)),
        date-current-text-color: (igx-color: ('primary', 50)),
        picker-arrow-color: (igx-color: ('primary', 50)),
        picker-arrow-hover-color: (igx-color: ('grays', 900)),
        year-current-text-color: (igx-color: ('primary', 50)),
        year-hover-text-color: (igx-color: ('primary', 50)),
        month-current-text-color: (igx-color: ('primary', 50)),
        month-hover-text-color: (igx-color: ('primary', 50)),
        picker-text-color: (igx-color: ('primary', 50)),
        picker-text-hover-color: (igx-color: ('grays', 900)),
        date-selected-background: (igx-color: ('primary', 500)),
        date-selected-text-color: (igx-color: ('secondary', 500))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-calendar: $custom-calendar-schema
    )
);

// Defining our custom theme with the custom schema
$my-calendar-theme: igx-calendar-theme(
  $palette: $my-custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="calendar-styling-sample-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [DateRangeType]({environment:angularApiUrl}/enums/daterangetype.html)
* [DateRangeDescriptor]({environment:angularApiUrl}/interfaces/daterangedescriptor.html)

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
