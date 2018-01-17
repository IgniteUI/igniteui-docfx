---
title: Date Picker Component
_description: Add the functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Date Picker components, Angular Date Picker controls
---

##Date Picker
<p class="highlight">The Ignite UI for Angular Date Picker component displays a month-view calendar or a pop-up calendar that lets users pick a single date. The control can focus on the current date and has a cancel button.</p>
<div class="divider"></div>

### Date Picker Demo
<div class="sample-container" style="height: 720px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:demosBaseUrl}/datepicker"></iframe>
</div>
<div class="divider--half"></div>

### Usage
```typescript
import { IgxDatePickerComponent } from "igniteui-angular";
```

####Basic initialization
<div class="divider--half"></div>

```html
<igx-datePicker></igx-datePicker>
```
Custom formatter function with passed initial date and locale.

```html
<igx-datePicker [formatter]="customFormatter" [value]="dateValue" [locale]="'en-US'"></igx-datePicker>
```

####Adding Buttons
<div class="divider--half"></div>

```html
<igx-datePicker [cancelButtonLabel]="'Close'"[todayButtonLabel]="'Today'"></igx-datePicker>
```

####Disabled state
You also have the ability to disable the datePicker.

```html
<igx-datePicker [isDisabled]="false"></igx-datePicker>
```

####Settings
DatePicker with first day of week set to Monday and an event handler when selection is done.

```html
<igx-datePicker [weekStart]="1" (onSelection)="eventHandler($event)"></igx-datePicker>
```

####Binding
The DatePicker also supports binding through `ngModel` if two-way date-binding is needed.

```html
<igx-datePicker [(ngModel)]="myDateValue"></igx-datePicker>
```
<div class="divider"></div>

### API

#### Inputs
<div class="divider--half"></div>

| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `todayBottonLabel` | `string` | Renders today button with custom name, which selects today's date from calendar, and fill the datePicker input. |
| `cancelButtonLabel` | `string` | Renders cancel button with custom name, which closes the calendar. |
| `formatter` | `function` | Applied custom formatter on the selected or passed date. |
| `isDisabled` | `boolean` | Disable the datePicker. |
| `weekStart`| `Number \| WEEKDAYS` | Sets on which day will the week start. |
| `locale` | `string` | Sets the locale used for formatting and displaying the dates in the calendar. For more information check out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) page for valid formats. |
| `formatOptions` | `Object` | The format options passed along with the `locale` property used for formatting the dates. |

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
