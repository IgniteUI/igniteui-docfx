---
title: Angular Calendar | Calendar | Infragistics
_description: Create an intuitive calendar for applications to display date information, and users to input date information with Ignite UI for Angular Calendar component.
_keywords: Angular Calendar, Ignite UI for Angular, Infragistics
---

# Angular Calendar Overview

The Ignite UI for Angular Calendar component provides an easy and intuitive way to display date information. Users can choose from three different selection modes - single selection, multiple selection or range selection.

## Angular Calendar Example

<div class="divider--half"></div>

<code-view style="height: 480px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-overview"
           alt="Angular Calendar Example"
           github-src="scheduling/calendar/overview">
</code-view>

## Usage

To get started with the Calendar component, first you need to install Ignite UI for Angular package by typing the following command:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageComponents}
</pre>

The next step is to import the [`IgcCalendarComponent`]({environment:wcApiUrl}/classes/igccalendarcomponent.html):

### Single Selection Calendar

Instantiating the `IgcCalendarComponent` is as easy as placing it in the html. This will display the current month in single selection mode.

### Multiple Selection

We can easily change the default mode using the [`selection`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#selection) property:

<code-view style="height: 370px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-multiple-selection"
           alt="Angular Calendar Multiple Selection Example"
           github-src="scheduling/calendar/multiple-selection ">
</code-view>

### Range Selection

Following the same approach, we can switch to `range` selection mode:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-range-selection"
           alt="Angular Calendar Range Selection Example"
           github-src="scheduling/calendar/range-selection">
</code-view>

### Active View and Date

The Calendar component allows you to switch between three different views: days, months and years. The [`activeView`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#activeView) property of the component reflects the current view. By default, the Calendar displays the current date when loaded initially. You could modify this by setting the [`activeDate`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#activeDate) property. The `activeDate` property also reflects the changes of the currently visible date made by the end user.

### Header Options

By default, the Calendar component renders a header area which contains information about the selected dates. You could hide the header by setting the [`hasHeader`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#hasHeader) property to `false`. You could also configure `vertical` or `horizontal` orientation of the header using the [`headerOrientation`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#headerOrientation) property.

> [!NOTE]
> Please note that the Calendar header is not rendered when the selection is `multiple`.
>
> [!NOTE]
> Please note that the Calendar DOM properties use `camelCase` naming while their corresponding HTML attributes are using `kebab-case`. For example the `headerOrientation` property corresponds to the `header-orientation` attribute.

The Ignite UI for Angular Calendar component exposes a `title` slot which allows you to customize the title of the header.

The following sample demonstrates the above configuration:

<code-view style="height: 370px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-header"
           alt="Angular Calendar Header Example"
           github-src="scheduling/calendar/header">
</code-view>

### Localization and Formatting

Due to their very nature, localization and formatting are essential to any calendar. In the `IgcCalendarComponent` those are controlled and customized through the following properties - [`locale`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#locale), [`formatOptions`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#formatOptions), [`weekStart`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#weekStart).

Let's go ahead and try those along with other customizations. First thing we need to set is the `weekStart`, which controls the starting day of the week. It defaults to `sunday`, so we will set it to `monday`. We will also customize the `formatOptions` property which specifies the options used to format the months and the weekdays in the Calendar views. Finally, we will set the `locale` property to a value, based on the user's location choice:

If everything went well, we should now have a Calendar with customized display, that also changes the locale representation, based on the user selection. Let's have a look at it:

<code-view style="height: 520px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-formatting"
           alt="Angular Calendar Formatting Example"
           github-src="scheduling/calendar/formatting">
</code-view>

### Disabled dates

In some cases you would want to have disabled dates in the Calendar which can't be selected by the end user. This functionality is achieved by using the [`disabledDates`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#disabledDates) property. The `disabledDates` property is an array of `DateRangeDescriptor` objects. Each descriptor has a `type` and optionally a `dateRange` which is an array of `Date` objects.

These are the available options for the `type` property:

-   `After` - disables the dates after the first date in the `dateRange`
-   `Before` - disables the dates before the first date in the `dateRange`
-   `Between` - disables the dates between the first and the second date in the `dateRange`
-   `Specific` - disables the dates specified in the `dateRange` array
-   `Weekdays` - disables all weekdays
-   `Weekends` - disables all weekends

Let's create a sample that is disabling the dates between the 3rd and the 8th of the current month:

```ts
const today = new Date(Date.now());
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: range }];
```

These configurations should have the following result:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-disabled-dates"
           alt="Angular Calendar Disabled Dates Example"
           github-src="scheduling/calendar/disabled-dates">
</code-view>

### Special dates

The [`specialDates`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#specialDates) property is using almost the same configuration principles as the `disabledDates`. The special dates have a highlighted look and feel and unlike the disabled ones can be selected.

Let's add some special dates to our Calendar. In order to do this, we will create a `DateRangeDescriptor` and pass the dates between the 3rd and the 8th of the current month:

```ts
const today = new Date();
const range = [
    new Date(today.getFullYear(), today.getMonth(), 3),
    new Date(today.getFullYear(), today.getMonth(), 8)
];

this.calendar.specialDates = [{ type: DateRangeType.Between, dateRange: range }];
```

The following demo illustrates a Calendar with a vacation request option:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-special-dates"
           alt="Angular Calendar Special Dates Example"
           github-src="scheduling/calendar/special-dates">
</code-view>

### Week numbers

You can use the [`showWeekNumbers`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#showWeekNumbers) property to show the week numbers of the Calendar component. You can do this by using its corresponding boolean attribute `show-week-numbers` like this:

The following demo illustrates a Calendar with enabled week numbers:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-week-numbers"
           alt="Angular Calendar Week Numbers Example"
           github-src="scheduling/calendar/week-numbers">
</code-view>

### Multiple Months

Using the [`visibleMonths`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#visibleMonths) property you can display more than one month when the Calendar is in days view. When multiple months are displayed you can configure whether you want to stack them vertically or horizontally using the [`orientation`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#orientation) property. By default the `orientation` property is set to `horizontal`.

The Calendar displays leading and trailing dates from the previous and the next months. You could hide these dates by setting the [`hideOutsideDays`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#hideOutsideDays) property to `true` or using its corresponding boolean attribute `hide-outside-days`.

The following sample demonstrates the multiple months configuration:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-multiple-months"
           alt="Angular Calendar Multiple Months Example"
           github-src="scheduling/calendar/multiple-months">
</code-view>

### Size

You could control the size and spacing of the Calendar inner elements by changing its [`size`]({environment:wcApiUrl}/classes/igccalendarcomponent.html#size) property. The default `size` value is `large`.

<code-view style="height: 520px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-size"
           alt="Angular Calendar Size Example"
           github-src="scheduling/calendar/size">
</code-view>

### Events

The Calendar component emits the `igcChange` event when the selected dates are changed by the end user. You can subscribe to the event like this:

```ts
this.calendar.addEventListener('igcChange', ev => console.log(ev.detail));
```

## Keyboard navigation

If you traverse the page using the <kbd>Tab</kbd> key you should keep in mind that based on [W3 accessability recommendations](https://www.w3.org/TR/wai-aria-practices/#layoutGrid) the `IgcCalendarComponent` introduces the following tab stops:

-   Month selection button
-   Year selection button
-   Previous button
-   Next button
-   Active date element

When a **day/month/year** in the `IgcCalendarComponent` component is focused, use:

-   <kbd>PageUp</kbd> key to move to the previous month/year/years page.
-   <kbd>PageDown</kbd> key to move to the next month/year/years page.
-   <kbd>Home</kbd> key to focus the first day of the current month/first month in view/first year in view.
-   <kbd>End</kbd> key to focus the last day of the current month/last month in view/last year in view.
-   <kbd>Arrow</kbd> keys to navigate through the days/months/years. Navigating before the first item and after the last item will switch the view to the next/previous month/year/years page.

When a **day** inside the `days` view is focused, use:

-   <kbd>Shift</kbd> + <kbd>PageUp</kbd> keys to move to the previous year.
-   <kbd>Shift</kbd> + <kbd>PageDown</kbd> keys to move to the next year.
-   <kbd>Space</kbd> or <kbd>Enter</kbd> key to select the currently focused day.

When a **month** inside the `months` view is focused, use:

-   <kbd>Space</kbd> or <kbd>Enter</kbd> key to change the `activeDate` to the currently focused month and switch to `days` view.

When an **year** inside the `years` view is focused, use:

-   <kbd>Space</kbd> or <kbd>Enter</kbd> key to change the `activeDate` to the currently focused year and switch to `months` view.

When the **previous** or the **next** buttons (in the subheader) are focused, use:

-   <kbd>Space</kbd> or <kbd>Enter</kbd> key to switch to the previous/next month/year/years page.

When the **month** button (in the subheader) is focused, use:

-   <kbd>Space</kbd> or <kbd>Enter</kbd> key to switch to `months` view.

When the **year** button (in the subheader) is focused, use:

-   <kbd>Space</kbd> or <kbd>Enter</kbd> key to switch to `years` view.

## Styling

The Calendar component exposes CSS parts for almost all of its inner elements. The following table lists all CSS parts exposed by the Calendar:

| Name                | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| header              | The header element.                                                   |
| header-title        | The header title element.                                             |
| header-date         | The header date element.                                              |
| content             | The content element which contains the views and navigation elements. |
| navigation          | The navigation container element.                                     |
| months-navigation   | The months navigation button element.                                 |
| years-navigation    | The years navigation button element.                                  |
| years-range         | The years range element.                                              |
| navigation-buttons  | The navigation buttons container.                                     |
| navigation-button   | Previous/next navigation button.                                      |
| days-view-container | The days view container element.                                      |
| days-view           | Days view element.                                                    |
| months-view         | The months view element.                                              |
| years-view          | The years view element.                                               |
| days-row            | Days row element.                                                     |
| label               | Week header label element.                                            |
| week-number         | Week number element.                                                  |
| week-number-inner   | Week number inner element.                                            |
| date                | Date element.                                                         |
| date-inner          | Date inner element.                                                   |
| first               | The first selected date element.                                      |
| last                | The last selected date element.                                       |
| inactive            | Inactive date element.                                                |
| hidden              | Hidden date element.                                                  |
| weekend             | Weekend date element.                                                 |
| range               | Range selected element.                                               |
| special             | Special date element.                                                 |
| disabled            | Disabled date element.                                                |
| single              | Single selected date element.                                         |
| preview             | Range selection preview date element.                                 |
| month               | Month element.                                                        |
| month-inner         | Month inner element.                                                  |
| year                | Year element.                                                         |
| year-inner          | Year inner element.                                                   |
| selected            | Indicates selected state. Applies to date, month and year elements.   |
| current             | Indicates current state. Applies to date, month and year elements.    |

Using these CSS parts we can customize thе appearance of the Calendar component like this:

```css
igc-calendar::part(header) {
    background: #345779;
}

igc-calendar::part(date-inner selected),
igc-calendar::part(month-inner selected),
igc-calendar::part(year-inner selected) {
    background: #345779;
    border-color: #345779;
}

igc-calendar::part(date-inner current),
igc-calendar::part(navigation-button):hover,
igc-calendar::part(navigation-button):focus,
igc-calendar::part(months-navigation):hover,
igc-calendar::part(months-navigation):focus,
igc-calendar::part(years-navigation):hover,
igc-calendar::part(years-navigation):focus {
    color: #2dabe8;
}

igc-calendar::part(date-inner current selected),
igc-calendar::part(month-inner current selected),
igc-calendar::part(year-inner current selected) {
    box-shadow: inset 0 0 0 0.0625rem white, 0 0 0 0.0625rem #345779;
    color: white;
}
```

The following sample demonstrates the above CSS configuration:

<code-view style="height: 480px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/scheduling/calendar-styling"
           alt="Angular Calendar Styling Example"
           github-src="scheduling/calendar/styling">
</code-view>

## API References

-   [IgcCalendarComponent]({environment:wcApiUrl}/classes/igccalendarcomponent.html)
-   [IgcRadioComponent]({environment:wcApiUrl}/classes/igcradiocomponent.html)
-   [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/igcradiogroupcomponent.html)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

-   [Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
-   [Angular **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
