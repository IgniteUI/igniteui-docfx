---
title: Calendar Component
_description: Create an intuitive calendar for applications to display date information, and users to input date information with Ignite UI for Angular Calendar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Calendar components, Angular Calendar controls
---

##Calendar
<p class="highlight">The Ignite UI for Angular Calendar component provides three easy, intuitive ways for applications to display date information. Users can input dates, select a single date, or pick a range of dates.</p>
<div class="divider"></div>

### Calendar Demo
<div class="sample-container" style="height:900px">
    <iframe src='https://www.infragistics.com/angular-demos/calendar' width="100%" height="100%" seamless frameBorder="0"></inframe>
</div>
<div class="divider--half"></div>

### Usage
```typescript
import { IgxCalendarComponent } from "igniteui-js-blocks";
```

Basic initialization
```html
<igx-calendar></igx-calendar>
```

A range selection calendar with first day of week set to Monday and an event
handler when selection is done.
```html
<igx-calendar weekStart="1" selection="range" (onSelection)="eventHandler($event)"></igx-calendar>
```

The calendar also supports binding through `ngModel` if two-way data-bind is needed.
```html
<igx-calendar [(ngModel)]="myDateValue"></igx-calendar>
```
<div class="divider--half"></div>

### Keyboard navigation
When the **igxCalendar** component is focused:
- `PageUp` will move to the previous month.
- `PageDown` will move to the next month.
- `Shift + PageUp` will move to the previous year.
- `Shift + PageDown` will move to the next year.
- `Home` will focus the first day of the current month that is into view.
- `End` will focus the last day of the current month that is into view.

When a day inside the current month is focused:
- Arrow keys will navigate through the days.
- `Enter` will select the currently focused day.
<div class="divider--half"></div>

### API

#### Inputs
<div class="divider--half"></div>

| Name       |      Type      |  Description |
|:----------:|:-------------|:------|
| `weekStart`| `Number \| WEEKDAYS` | Sets on which day will the week start. |
| `locale` | `string` | Sets the locale used for formatting and displaying the dates in the calendar. For more information check out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) page for valid formats. |
| `selection` | `string` | Sets the type of selection in the calendar. Valid values are `single` (default), `multi` and `range` |
| `viewDate` | `Date` | Sets the year/month that will be presented in the default view when the calendar renders. By default it is the current year/month.   |
| `value` | `Date \| Date[]` | Gets/Sets the current value of the calendar widget. Both multi-selection and range selection return an array of selected dates. |
| `formatOptions` | `Object` | The format options passed along with the `locale` property used for formatting the dates. |

#### Outputs
<div class="divider--half"></div>

| Name | Return Type | Description |
|:--:|:---|:---|
| `onSelection` | `Date \| Date[]` | Fired when selection is made in the calendar. The event contains the selected value(s) based on the type of selection the component is set to |

#### Methods
<div class="divider--half"></div>

| Name   | Arguments | Return Type | Description |
|:----------:|:------|:------|:------|
| `selectDate` | `date: Date \| Date[]` | `void` | Change the calendar selection. Calling this method will emit the `onSelection` event. |
<div class="divider--half"></div>
