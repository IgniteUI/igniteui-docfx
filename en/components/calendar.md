---
title: Angular Calendar | Calendar | Infragistics
_description: Create an intuitive calendar for applications to display date information, and users to input date information with Ignite UI for Angular Calendar component.
_keywords: angular calendar, angular component, ignite ui for angular
---

# Angular Calendar
<p class="highlight">The Ignite UI for Angular Calendar component, developed as a native [Angular component](https://angular.io/guide/architecture#components), provides an easy and intuitive ways to display date information. Users can choose from three different selection modes - single selection, multi selection or range selection.</p>

## Angular Calendar Example
<div class="divider--half"></div>

<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-5" alt="Angular Calendar Example">
</code-view>


## Usage

### First Steps

To get started with the Calendar component, first you need to import the `IgxCalendarModule` in the **app.module.ts** file.

Note that the [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) also depends on the **BrowserAnimationsModule** and the **HammerModule** for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

> [!WARNING]
> The [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) uses the [Intl Web API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) for localization and formatting of dates.
Consider using [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

## Examples

### Single Selection Calendar

Instantiating the `IgxCalendarComponent` is as easy as placing its selector element in the template. This will display the current month in the single selection calendar mode.

```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
```

### Multi Selection

We can easily change the default mode using the [`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) property:

```html
<!-- app.component.html -->
<!-- Multi selection mode -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```


<code-view style="height: 420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-1" >
</code-view>


### Range Selection

Following the same approach, we can switch to range selection mode:

```html
<!-- app.component.html -->
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```


<code-view style="height: 420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-8" >
</code-view>


> [!NOTE]
> Notice that the calendar header is not rendered when the selection is either `multi` or `range`.

### Localization and Formatting

Due to their very nature, localization and formatting are essential to any calendar. In the `IgxCalendarComponent` those are controlled and customized through the following properties - [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale), [`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions), [`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatviews), [`weekStart`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#weekstart).

Let's go ahead and try those along with other customizations from the `IgxCalendarComponent API`. First thing we need to set is the `weekStart`, which controls the starting day of the week. It defaults to 0, which corresponds to Sunday, so we will set a value of 1 for Monday. In the markup below we are also binding the `formatOptions` and `formatViews` properties to customize the display formatting. Finally, we are binding the `locale` property to a value, based on the user's location choice:

```html
<!-- app.component.html -->
<igx-select #select [(ngModel)]="locale">
    <igx-select-item *ngFor="let locale of locales" [value]="locale">
        {{ locale }}
    </igx-select-item>
</igx-select>

<igx-calendar #calendar
    [weekStart]="1"
    [locale]="locale"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews">
</igx-calendar>
```
All property values should be set in the AppCоmponent file:

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locales = ["EN", "DE", "FR", "AR", "ZH"];
public locale = "EN";

public ngOnInit() {
    this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
    this.formatViews = { day: true, month: true, year: true };
}
```

If everything went well, we should now have a calendar with customized dates display, that also changes the locale representation, based on the user location. Let's have a look at it:


<code-view style="height: 620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-2" >
</code-view>


### Disabled dates
This section demonstrates the usage of [`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) functionality. For this purpose, different single dates or ranges can be added to an array and then passed to the `disabledDates` descriptor.

The [`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) is used to specify a range that is going to be disabled.

Let's create a sample that is disabling the dates between the 3rd and the 8th of the current month:

```typescript
export class CalendarSample6Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: this.range }];
    }
}
```

These configurions should have the following result:


<code-view style="height: 480px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-6" >
</code-view>


### Special dates
The [`specialDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) feature is using almost the same configuration principles as the `disabledDates`. The ability to select and focus `specialDates` is what differs them from the `disabled` ones.

Let's add some `specialDates` to our `igxCalendar`. In order to do this, we have to create a [`DateRangeDescriptor`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html) item of type [`DateRangeType.Specific`]({environment:angularApiUrl}/enums/daterangetype.html#specific) and pass an array of dates as a [`dateRange`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html#daterange):

```typescript
export class CalendarSample7Component {
    @ViewChild("calendar", { static: true })
    public calendar: IgxCalendarComponent;
    @ViewChild("alert", { static: true })
    public dialog: IgxDialogComponent;
    public range = [];

    public selectPTOdays(dates: Date[]) {
        this.range = dates;
    }

    public submitPTOdays(eventArgs) {
        this.calendar.specialDates =
            [{ type: DateRangeType.Specific, dateRange: this.range }];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        ...
    }
}
```

```html
<igx-calendar #calendar weekStart="1"
    selection="multi"
    (onSelection)="selectPTOdays($event)">
</igx-calendar>
<igx-dialog #alert title="Request Time Off"
    leftButtonLabel="OK"
    (onLeftButtonSelect)="alert.close()">
</igx-dialog>
<button igxButton="raised" (click)="submitPTOdays($event)">Submit Request</button>
```

The following demo illustrates a calendar with a vacation request option:


<code-view style="height: 450px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-7" >
</code-view>


### Week numbers

You can now use [`showWeekNumbers`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#showWeekNumbers) input to show the week numbers for both Calendar and DatePicker components.

```html

<!-- app.component.html -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```
The following demo illustrates a calendar with enabled week numbers:


<code-view style="height: 420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-1" >
</code-view>


## Calendar Events
Let's explore the events emitted by the calendar:
- [`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) - emitted when selecting date(s) in the calendar.
- [`viewDateChanged`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#viewdatechanged) - emitted every time when the presented month/year is changed - for example after navigating to the `next` or `previous` month.
- [`activeViewChanged`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#activeviewchanged) - emitted after the active view is changed - for example after the user has clicked on the `month` or `year` section in the header.

```html
<!-- app.component.html -->
<igx-calendar #calendar
    (onSelection)="onSelection($event)"
    (viewDateChanged)="viewDateChanged($event)"
    (activeViewChanged)="activeViewChanged($event)">
</igx-calendar>
```
The [`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) event is suitable to build input validation logic. Use the code from below to alert the user if selection exceeds 5 days, and then reset the selection:

```typescript
// app.component.ts
...
public onSelection(dates: Date[]) {
    if (dates.length > 5) {
        this.calendar.selectedDates = [];
        // alert the user
    }
}
public viewDateChanged(event: IViewDateChangeEventArgs) {
    // use event.previousValue to get previous month/year that was presented.
    // use event.currentValue to get current month/year that is presented.
}

public activeViewChanged(event: CalendarView) {
    // use CalendarView[event] to get the current active view (DEFAULT, YEAR or DECADE)
}
```

Use the demo below to play around (change selection, navigate through months and years) and see the events logged real time:

<code-view style="height: 420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-3" >
</code-view>



## Views
There are separate views provided by the `IgxCalendarModule` that can be used independently:
- Days View - [`igx-days-view`]({environment:angularApiUrl}/classes/igxdaysviewcomponent.html)


<code-view style="height: 420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-days-view" >
</code-view>


- Months View - [`igx-months-view`]({environment:angularApiUrl}/classes/igxmonthsviewcomponent.html)


<code-view style="height: 520px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-months-view" >
</code-view>


- Years View - [`igx-years-view`]({environment:angularApiUrl}/classes/igxyearsviewcomponent.html)


<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-years-view" >
</code-view>


## Keyboard navigation
If you traverse the page using *Tab key* you should keep in mind that based on [W3 accessability recommendations](https://www.w3.org/TR/wai-aria-practices/#layoutGrid) the *igxCalendarComponent* now introduces the following tab stops:
- Previous month button
- Month selection button
- Year selection button
- Next month button
- Selected date, Current date, First focusable (not disabled) date in the days view

In a Calendar that contains more than one selected dates, only the first date will be introduced as a tab stop. For example, in the multi-selection calendar if you have selected the dates: *13/10/2020*, *17/10/2020* and *21/10/2020* only *13/10/2020* will be accessible during tab navigation; in the calendar with range selection only the first date of the selected range will be part of the *page tab sequence*.

>[!NOTE]
> Behavioral change, from *v10.2.0* - Tab key navigation in the *days view* is no longer available. In order to navigate between the dates in the *date view* you should use the *arrow keys*.

When the `igxCalendar` component is focused, use:
- <kbd>PageUp</kbd> key to move to the previous month,
- <kbd>PageDown</kbd> key to move to the next month,
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> keys to move to the previous year,
- <kbd>Shift</kbd> + <kbd>PageDown</kbd> keys to move to the next year,
- <kbd>Home</kbd> key to focus the first day of the current month  or first month in view
- <kbd>End</kbd> key to focus the last day of the current month or last month in view

When the `prev` or the `next` month buttons (in the subheader) are focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to scroll into view the next or previous month.

When the `months` button (in the subheader) is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the months view.

When the `year` button (in the subheader) is focused, use:
- <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the decade view.

When a `day` inside the current month is focused:
- Use *Arrow keys* to navigate through the days. Note: The disabled dates will be skipped.
- Focus will be persisted on the current month that is in the view, while navigation **from**/**to** the **last day**/**first day** of the month.
- THe kb navigation would be continuous, which means that it will go through all months while navigating with the arrows.
- Use <kbd>Enter key</kbd> to select the currently focused day.

When a `month` inside the months view is focused, use:
- Arrow keys to navigate through the months.
- <kbd>Home</kbd> key to focus the first month inside the months view.
- <kbd>End</kbd> key to focus the last month inside the months view.
- <kbd>Enter</kbd> key to select the currently focused month and close the view.

When an `year` inside the decade view is focused, use:
- <kbd>Arrow up</kbd> and <kbd>Arrow down</kbd> keys to navigate through the years,
- <kbd>Enter</kbd> key to select the currently focused year and close the view.

>[!NOTE]
>Following version 8.2.0, keyboard navigation will not focus days that are outside of current month, but will rather change the month in view.

## Multi View Calendar
Multiview calendar supports all three types of selection. Use the [`monthsViewNumber`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#monthsviewnumber) input to set the number of displayed months, which will be shown horizontally in a flex container. There is no limit on the max value set. While using a multi view calendar, you may want to hide the days that do not belong to the current month. You are able to do it with the [`hideOutsideDays`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#hideoutsidedays) property.  Keyboard navigation moves to next/previous months when those are in view.


<code-view style="height: 540px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/multiview-calendar" >
</code-view>


## Styling

To get started with styling the calendar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) and accepts some of the default theme's parameters.

```scss
$custom-calendar-theme: igx-calendar-theme(
  $header-background: #345779,
  $content-background: #fdfdfd,
  $header-text-color: #ffffff,
  $date-current-text-color: #2dabe8,
  $picker-arrow-color: #2dabe8,
  $date-selected-text-color: #fdfdfd,
  $date-current-bg-color: #fdfdfd,
  $picker-arrow-hover-color:  #345779,
  $year-current-text-color: #2dabe8,
  $year-hover-text-color: #2dabe8,
  $month-current-text-color: #2dabe8,
  $month-hover-text-color: #2dabe8,
  $picker-text-color: #2dabe8,
  $picker-text-hover-color:  #345779
);
```

### Using CSS variables

The last step is to pass the custom calendar theme:

```scss
 @include igx-css-vars($custom-calendar-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

If the component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-calendar($custom-calendar-theme);
  }
}
```


<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-styling-sample" >
</code-view>


## API References
<div class="divider--half"></div>

* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [DateRangeType]({environment:angularApiUrl}/enums/daterangetype.html)
* [DateRangeDescriptor]({environment:angularApiUrl}/interfaces/daterangedescriptor.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
