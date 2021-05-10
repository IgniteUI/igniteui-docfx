---
title: Angular Date Picker | Date Picker | Infragistics
_description: Learn how to use a functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: angular date picker, angular component, ignite ui for angular
---

# Angular Date Picker
The Ignite UI for Angular Date Picker Component displays a month-view calendar that lets the users pick a single date from a calendar UI. It als provides an editable input for modifying the date while in `dropdown` mode.

## Angular Date Picker Example
<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" alt="Angular Date Picker Example">
</code-view>
<div class="divider--half"></div>

## Usage

### First Steps
To get started with the Date Picker component, first you need to import the `IgxDatePickerModule` in the module that you would like to use it in, for our example we will be using the **app.module.ts** file. 

As the picker uses the [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), it is also dependent on the **BrowserAnimationsModule** and on the **HammerModule** for touch interactions, so they need to be added to the module as well:

```typescript
...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [ 
        ...,
        IgxDatePickerModule,
        BrowserAnimationsModule,
        HammerModule,
        ...
    ],
    ...
})
export class AppModule {}
```

### Display Date Picker
To instantiate a Date Picker in its default state, use the following code:

```html
<igx-date-picker></igx-date-picker>
```

### Bindings
The `IgxDatePickerComponent` can be bound to a `date` or a `string`.

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

```typescript
public date = new Date(2000, 0, 1);
```

If a string is bound to the picker, it needs to be a date-only string in the `ISO 8601` format:
```html
<igx-date-picker [value]="'2000-01-01'"></igx-date-picker>
```

Two-way binding is also possible, like so:
```html
<igx-date-picker [(value)]="date"></igx-date-picker>
```

Or through `ngModel`:
```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

> [!NOTE]
> The picker always returns a `Date` value, this means that If it is model bound or two-way bound to a string variable, after a new date has been chosen, it will be of type `Date`.

### Templating

The `IgxDatePickerComponent` allows the projection of child components, the same that the  [`IgxInputGroupComponent`]({input-group.md) supports (with the exception of [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)) - [`igxLabel`](label-input.md), [`IgxHint`](input-group.md#hints), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix). More detailed information about this can be found in the [Label & Input](label-input.md) topic.

In addition, the `IgxDatePickerComponent` can be configured with `IgxPickerToggleComponent` and `IgxPickerClearComponent`, these can be used to change the toggle and clear icons.

```html
 <igx-date-picker>
    <label igxLabel>Select a Date</label>
    <igx-picker-toggle igxPrefix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>delete</igx-icon>
    </igx-picker-clear>
</igx-date-picker>
```

Also, the picker's action buttons can be modified in two ways:
- if you want to change the buttons' text, you can do so using the `todayButtonLabel` and the `cancelButtonLabel` input properties
- if you want to completely change the buttons, you can do so using the `igxPickerActions` directive:
With it you gain access to the date picker's `calendar` and all of its members:
```html
<igx-date-picker>
    <ng-template igxPickerActions let-calendar>
        <button igxButton="flat" (click)="calendar.viewDate = today">Today</button>
    </ng-template>
</igx-date-picker>
```

### Keyboard Navigation

Opening and closing the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)'s calendar UI with the keyboard is available only for `dropdown` mode and can be triggered via the key combinations below:

|Keys|Description|
|----|-----------|
| <kbd>Space</kbd> | Opens the dropdown/dialog calendar and focuses it |
| <kbd>Alt</kbd> + <kbd>&darr;</kbd> | Opens the dropdown calendar and focuses it |
| <kbd>Esc</kbd> | Closes the dropdown/dialog and focuses the last focused input field |
| <kbd>Enter</kbd> | Closes the dropdown/dialog, selecting the focused date and moves the focus to the input field |
| <kbd>Alt</kbd> + <kbd>&uarr;</kbd> | Closes the dropdown/dialog and focuses the input field |

## Examples

### Dialog Mode - sample

### Display and input format - snippet + locale

### Increment and decrement (delta) - point to DateTimeEditor

### In Angular Forms - point to Reactive Forms Integration sample
    #### Min max value

### Calendar Specific settings - calendar topic reference and API reference

## Styling - datepicker-styling-sample/timepicker-styling.component

## API References

## Additional Resources
