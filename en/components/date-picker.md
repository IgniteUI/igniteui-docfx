---
title: Angular Date Picker | Date Picker | Infragistics
_description: Learn how to use a functionality to select a date from a calendar to your web application with Ignite UI for Angular Date Picker control.
_keywords: angular date picker, angular component, ignite ui for angular
---

# Angular Date Picker
The Ignite UI for Angular Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The picker also supports a `dialog` mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

## Angular Date Picker Example
<!-- TODO: datepicker sample with several options enabled -->
<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" alt="Angular Date Picker Example">
</code-view>
<div class="divider--half"></div>

## Usage

### First Steps
To get started with the Date Picker component, first you need to import the `IgxDatePickerModule` in the module that you would like to use it in, for our example we will be using the **app.module.ts** file. 

>[!NOTE]
> As the picker uses the [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), it is also dependent on the **BrowserAnimationsModule** and on the **HammerModule** for touch interactions, so they need to be added to the module as well:

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
To instantiate a Date Picker in its default `dropdown` state, use the following code:

```html
<igx-date-picker>
    <label igxLabel>Date</label>
</igx-date-picker>
```

### Options
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
More information about this can be found in [DateTime Editor's ISO section](date-time-editor.md#iso).

Two-way binding is possible through `ngModel`:
```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

As well as through the `value` input:
```html
<igx-date-picker [(value)]="date"></igx-date-picker>
```

Additionally, `formControlName` can be set on the picker, to use it in a reactive form:
```html
<form [formGroup]="form">
    <igx-date-picker formControlName="datePicker"></igx-date-picker>
</form>
```

```typescript
export class SampleFormComponent {
    // ...
    public form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            datePicker: ['', Validators.required]
        });
    }
}
```

> [!NOTE]
> The picker always returns a `Date` value, this means that If it is model bound or two-way bound to a string variable, after a new date has been chosen, it will be of type `Date`.

### Projecting components
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) allows the projection of child components that the [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) supports (with the exception of [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)) - [`igxLabel`](label-input.md), [`IgxHint`](input-group.md#hints), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix). More detailed information about this can be found in the [Label & Input](label-input.md) topic.

```html
<igx-date-picker #datePicker>
    <igx-icon igxSuffix (click)="datePicker.open()">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```
The above sample will add an additional toggle icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other. 

#### Customizing the toggle and clear icons 
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) can be configured with [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) and [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html), these can be used to change the toggle and clear icons without having to add your own click handlers.

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

#### Custom action buttons
The picker's action buttons can be modified in two ways:
- the button's text can be changed using the [`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel)) and the [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) input properties:
```html
<igx-date-picker [todayButtonLabel]="'今日'" [cancelButtonLabel]="'キャンセル'"></igx-date-picker>
```

- the whole buttons can be templated using the [`igxPickerActions`]({environment:angularApiUrl}/classes/igxpickeractionsdirective.html) directive:
With it you gain access to the date picker's [`calendar`](calendar.md) and all of its members:
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
| <kbd>Space</kbd> | Displays the calendar pop-up and focuses it |
| <kbd>Alt</kbd> + <kbd>&darr;</kbd> | Displays the calendar pop-up and focuses it |
| <kbd>Esc</kbd> | Closes the calendar pop-up and focuses the input field |
| <kbd>Enter</kbd> | Closes the calendar pop-up, selecting the focused date and moves the focus to the input field |
| <kbd>Alt</kbd> + <kbd>&uarr;</kbd> | Closes the calendar pop-up and focuses the input field |

Since the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)` uses the [`IgxDateTimeEditorDirective`](date-time-editor.md) it inherits its keyboard navigation.

## Examples

### Dialog Mode
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) also supports a `dialog` mode:
```html
<igx-date-picker [mode]="'dropdown'"></igx-date-picker>
```
<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" >
</code-view>

<div class="divider--half"></div>

### Display and input format
[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) and [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) property is used when the picker is in `dropdown` mode and it governs the input's editable mask, as well as its placeholder (if none is set). Additionally, the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the picker will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) on the other hand uses Angular's [`DatePipe`](https://angular.io/api/common/DatePipe) and is used to format the picker's input when it is not focused. If no [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) is provided, the picker will use the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) as its [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat).

More information about these can be found in the [`IgxDateTimeEditor`](date-time-editor.md#examples) examples section.

<code-view style="height: 680px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" >
</code-view>

<div class="divider--half"></div>

### Increment and decrement
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) exposes [`increment`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#decrement) methods. Both of which come from the  [`IgxDateTimeEditorDirective`](date-time-editor.md#increment-decrement) and can be used for incrementing and decrementing a specific [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) of the currently set date.

```html
<igx-date-picker #datePicker>
    <igx-icon igxPrefix (click)="datePicker.increment(DatePart.Month, 3)">keyboard_arrow_up</igx-icon>
    <igx-icon igxPrefix (click)="datePicker.decrement(DatePart.Year. 4)">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```

It also has as a [`spinDelta`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#spindelta) input property which can be used to increment or decrement a specific date part of the currently set date. 
```html
<igx-date-picker [spinDelta]="{date: 2, month: 3, year: 4}"></igx-date-picker>
```

### In Angular Forms
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) supports all directives from the core [FormsModule](https://angular.io/api/forms/FormsModule), [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl), [`FormGroup`](https://angular.io/api/forms/FormGroup), etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. In addition, the component's [`minValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#maxvalue) properties act as form validators.

You can see the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) in a reactive form by visiting our [Reactive Forms Integration](input-group-reactive-forms.md) topic.

#### Using date and time picker together
In some cases when the IgxDatePicker and the [`IgxTimePicker`](time-picker.md) are used together, we might need them to be bound to one and the same Date object value.

To achieve that in template driven forms, use the `ngModel` to bind both components to the same Date object.

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/template-driven-form" >
</code-view>

<div class="divider--half"></div>

In reactive forms, we can handle the [`valueChange`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#valuechange) event of each component and update the value of the other.

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/reactive-form" >
</code-view>

<div class="divider--half"></div>

### Calendar Specific settings
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) uses the [`IgxCalendarComponent`](calendar.md) and you can modify some of its settings via the properties that the date picker exposes. Some of these include [`displayMonthsCount`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaymonthscount) which allows more than one calendar to be displayed when the picker expands, [`weekStart`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#weekstart) which determines the starting day of the week, [`showWeekNumbers`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#showweeknumbers) which shows the number for each week in the year and more.

## Internationalization
The localization of the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) can be controlled through its [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) input. Additionally, using the `igxCalendarHeader` and the `igxCalendarSubheader` templates, provided by the [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), you can specify the look of your header and subheader. More information on how to use these templates can be found in the [**IgxCalendarComponent**](calendar.md) topic.

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

## Styling
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

### Using CSS variables 

The last step is to pass the custom date picker theme: 

```scss
@include igx-css-vars($custom-datepicker-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-calendar($custom-datepicker-theme);
    }
}
```

<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-styling-sample" >
</code-view>

## API References
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## Theming Dependencies
<div class="divider--half"></div>

* [IgxCalendar Theme]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)


## Additional Resources
* [Time Picker](time-picker.md)
* [Date Time Editor](date-time-editor.md)
* [Date Range Picker](date-range-picker.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
