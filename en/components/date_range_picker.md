---
title: Date Range Picker Component - Native Angular | Ignite UI for Angular
_description: The Date Range Picker component allows you to choose a date range consists of start and end date. You can select a range from a calendar UI.
_keywords: Angular Date Picker, Date Range Picker, Angular Date Picker, Date Range Picker
---

## Date Range Picker Component

The Ignite UI for Angular Date Range Component displays a month-view calendar that lets the users pick a date range, consisting of start and end date. When the component is in a dropdown mode then editable input is provided for modifying the date. In addition, the component provides an advanced setup exposing two editable input fields. It supports locales and custom date formatting.

<div class="sample-container loading" style="height:600px">
    <iframe id="basic-daterangepicker-iframe" src="{environment:demosBaseUrl}/scheduling/basic-daterangepicker" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="basic-daterangepicker-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Usage

#### First Steps
To get started with the Ignite UI for Angular Date Range Picker Component, let's first import the `IgxDateRangePickerModule` in the **app.module.ts** file.

As `IgxDateRangePicker` uses the [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), it is also dependent on the **BrowserAnimationsModule** and on the **HammerModule** for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts

...
import { IgxDateRangePickerModule } from 'igniteui-angular';
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    ...
    imports: [..., IgxDateRangePickerModule, BrowserAnimationsModule, HammerModule],
    ...
})
export class AppModule {}
```

#### Display Date Range Picker
To add the default single read-only date range picker, in `dialog mode`, use the following code:

```html
<igx-date-range-picker value="range"></igx-date-range-picker>
```

```typescript
public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
```

>Note: Date Range Picker value is of type `DateRange`, which contains of start and end dates.

To create a two-way data-binding, set an ngModel:
```html
<igx-date-range [(ngModel)]="range"></igx-date-range>
```

#### Separate Editable Inputs
The Date Range component also allows configuring two separate inputs for start and end dates.

<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-start-end-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-start-end" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-start-end-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

This can be achieved by using the `IgxDateRangeStartComponent` and `IgxDateRangeEndComponent` as child components of the date range picker.

```html
<div class="date-range-picker-wrapper">
    <igx-date-range-picker [(ngModel)]="range">
        <igx-date-range-start>
            <input igxInput igxDateTimeEditor type="text">
            <igx-picker-toggle igxPrefix>
                <igx-icon>calendar_today</igx-icon>
            </igx-picker-toggle>
        </igx-date-range-start>
        <igx-date-range-end>
            <input igxInput igxDateTimeEditor type="text">
        </igx-date-range-end>
    </igx-date-range-picker>
</div>

```

#### User Interaction

In the default, single read-only input configuration, the calendar can be opened by clicking anywhere in the input, including the calendar icon. When there are two defined inputs for start date and end date, then input is editable and calendar can be only opened from the calendar icon.

When the calendar is opened, a range can be selected by choosing the start and end dates. Picking the start date will set the same value for the end date until a different end date is chosen. In the last case, picking an already selected day will clear selection.

Start and end date are separated by `-` when shown in the component's read-only input. When defining different inputs for start and end, they are separated by the `to` preposition. The latter is localizable and can be overwritten with a template. Follow the [Templating](#templating) example below, for more details.

#### Projection of child components

The Date Range Picker component allows projecting the following child components: [`igxLabel`](label_input.md),[`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html), `igxPrefix`, `igxSuffix` and `igxPickerToggle`.

```html
<igx-date-range-picker #dateRangePicker="ngModel" [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
    <igx-hint *ngIf="dateRangePicker.invalid">
        Please choose start and end date!
    </igx-hint>
</igx-date-range-picker>
```

When two seperate inputs are defined this is done using the `IgxDateRangeStartComponent` and `IgxDateRangeEndComponent`, which are extending the existing `IgxInputGroupComponent`. This means they also can contain and can project `IgxInput`, [`igxLabel`](label_input.md),[`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html), `igxPrefix` and `igxSuffix`. In order to have date functionalities, the projected `IgxInput` should be decorated with [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive, as shown in the code snippet below:

```html
<igx-date-range-picker [(ngModel)]="range">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor type="text">
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_today</igx-icon>
        </igx-picker-toggle>
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```

### Examples

#### Label
To define a label for the range date picker the [`igxLabel`](label_input.md) directive should be used, like shown in the snippet below:

```html
<igx-date-range-picker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
</igx-date-range-picker>
```

For more usage of projected components check the [Application Demo](#application-demo) at the end, where [`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html) is used.

#### Calendar icon
By default, in a single read-only mode, the default calendar icon is provided as an prefix. For developer ease, the calendar icon itself can be changed or newly defined using the `igxPickerToggle` component. It can be decorated with either `igxPrefix` or `igxSuffix`, which will define its position - either at the start of the input or at the end. For changing the default icon position and putting the icon as a suffix the following code can be used:

```html
<igx-date-range-picker>
    <igx-picker-toggle igxSuffix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
</igx-date-range-picker>
```

When Date Range Picker has two separate inputs for start and end dates, it doesn't expose icon by default, which means that it should be added manually, as shown below.

```html
<igx-date-range-picker>
    <igx-date-range-start>
        ...
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_view_day</igx-icon>
        </igx-picker-toggle>
        ...
    </igx-date-range-start>
    <igx-date-range-end>
        ...
    </igx-date-range-end>
</igx-date-range-picker>
```
The demo shows that in that case `igx-date-range-start` can be defined as child of the `IgxDateRangeStartComponent` and `IgxDateRangeEndComponent`.

#### Dropdown mode

The `igx-date-range-picker` component has two modes - dialog(default) and dropdown. The define the dropdown mode, use the snippet below:

```html
<igx-date-range mode="dropdown"></igx-date-range>
```

<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-mode-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-mode" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-mode-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

When in drop down mode the `Done` button is not available, but in both modes value is set when dates are picked from the calendar.

#### Keyboard Navigation

Keyboard navigation is available only for `dropdown` `mode` of the `igx-date-range-picker` component. Use the demo above to try the following keyboard combinations.

When the focus and cursor are in a input then the [keyboard navigation](date_time_editor.md#keyboard-navigation) of the `igx-date-time-editor` directive is applicable also here:

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Arrow Left</kbd> / <kbd>Right</kbd> - navigates between date sections. On <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Right</kbd> it goes to the end of the section. If already there it goes to the end of next section if any. It works in a similar fashion in the opposite direction.
- <kbd>Arrow Up</kbd> / <kbd>Down</kbd> - increment/decrement date portions.
- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - set the current day and time in the editor.

To open `igx-date-range-picker` calendar:

- <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> - Opens the drop-down calendar and focuses it
- <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> - Closes the drop-down and focuses the input field (start input in two inputs mode)
- <kbd>Esc</kbd> - Closes the drop-down and focuses the input field (start input in two inputs mode)

To navigate calendar use the same [keyboard navigation](calendar.md#keyboard-navigation) combinations, available for the `igx-calendar`:

- <kbd>Enter</kbd> selects start and end dates
- <kbd>PageUp</kbd> key to move to the previous month,
- <kbd>PageDown</kbd> key to move to the next month,
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> keys to move to the previous year,
- <kbd>Shift</kbd> + <kbd>PageDown</kbd> keys to move to the next year,
- <kbd>Home</kbd> key to focus the first day of the current month  or first month in view
- <kbd>End</kbd> key to focus the last day of the current month or last month in view
- <kbd>Tab</kbd> key to navigate through the subheader buttons;

<div class="divider--half"></div>

#### Formatting

Date Range picker supports different display and input formats.

The display format value can be one of the defined by Angular [DatePipe](https://angular.io/api/common/DatePipe). Input Format doesn't support predefined format options, such as `shortDate` and `longDate`, but accepts a constructed format string using characters supported by the DatePipe, e.g. `MM/dd/yyyy`.

The [`formatter`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#formatter) function can be used for defining a custom format, different from those above.

When in the application the [Angular locale ID](https://angular.io/api/core/LOCALE_ID) token is used then RangeDatePicker is taking this into account as its default locale.

#### Forms and Validation
The Date Range Picker Component supports all of the form directives from the core FormsModule [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. The following example illustrates the use of the `required` validator in a Template-driven Form.

The [NgModel](https://angular.io/api/forms/NgModel) and `required` can be set on `RangeDatePicker` component as well on the individual start and end date inputs. For the configuration with separate start and end inputs, model and `required` can be set both ways, but will not work if set at the same time - it should be either on the component or on the inputs.

The value is of type `DateRange`. Validation happens on any of the following [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) events.

<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-validation-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-validation" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-validation-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

Below you can find the three different configurations shown in the demo above.

The first snippet setups model for a single read-only range component and it is done on a component level:

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <label igxLabel>Period</label>
</igx-date-range-picker>
```

The same configuration can be used when setting two separate inputs. Note that in those case validation also is applied for both inputs.

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <igx-date-range-start>
        <label igxLabel>Start Date</label>
        <input igxInput igxDateTimeEditor type="text">
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_today</igx-icon>
        </igx-picker-toggle>
    </igx-date-range-start>
    <igx-date-range-end>
        <label igxLabel>End Date</label>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```

When having two separate inputs then it is possible to set model and `required` on each individual input. This is shown in the example below and note that validation is specific for each individual input.

```html
<igx-date-range>
    <igx-date-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-start>
    <igx-date-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-end>
</igx-date-range>
```

#### Min max value
You can specify [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxvalue) properties to restrict input and control the validity of the ngModel.

```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 12, 1);
```

```html
<igx-date-range-picker [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
</igx-date-range-picker>
```

Setting min and max values will disable calendar dates that are outside the minimum and maximum range.

#### Templating

When two editors are defined then the default separator, the `to` preposition, can be templated. The following example changes date separator to `-`:

```html
<igx-date-range>
    <igx-date-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-start>
    <ng-template igxDateSeparator>-</ng-template>
    <igx-date-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-end>
</igx-date-range>
```

### Styling

To get started with styling the `igxDateRangePicker`, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Date Range Picker Component exposes `igx-date-range-picker-theme` and utilizes several components and directives, including `igxInputGroupComponent`, `igxCalendar` and `igxOverlay`. Any global styling for the above will affect the `igxDateRangeComponent`. As the Date Range Picker Component uses the input group's and calendar's theme, we have to create new themes that extend the [`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme), [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) and use some of their parameters to style the date range picker in conjunction with the date range picker's own theme. We will use a single custom color palette to define the colors to use across all themes:

```scss
// COMMON
$purple: #9E379F;
$blue: #61AEDB;

$custom-palette: igx-palette($primary: $blue, $secondary: $purple);

$today-text: igx-color($custom-palette, "primary", 500);
$text-color: igx-color($custom-palette, "secondary", 200);
$color-focused: igx-color($custom-palette, "secondary", 500);

// DATE-RANGE
$custom-date-range-theme: igx-date-range-picker-theme(
    $label-color: $color-focused
);

// INPUT GROUP
$custom-input-group-theme: igx-input-group-theme(
  $palette: $custom-palette,
  $filled-text-color: $text-color,
  $idle-text-color: $text-color,
  $focused-text-color: $color-focused,
  $hover-bottom-line-color: $color-focused,
  $idle-bottom-line-color: $purple
);

// CALENDAR
$roundness: 0.5;
$custom-calendar-theme: igx-calendar-theme(
    $palette: $custom-palette,
    $date-current-text-color: $today-text,
    $border-radius: $roundness,
    $date-border-radius: $roundness
);
```

#### Using CSS variables
The last step is to pass the custom themes:

```scss
    @include igx-css-vars($custom-date-range-theme);
    @include igx-css-vars($custom-input-group-theme);
    @include igx-css-vars($custom-calendar-theme);
```

#### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-date-range-picker($custom-date-range-theme);
        @include igx-input-group($custom-input-group-theme);
        @include igx-calendar($custom-calendar-theme);
    }
}
```

#### Scoping Styles
Regarding scoping styles, you should refer to both styling sections [Overlay Scoped Component Styles](overlay_styling.md#scoped-component-styles) and [Input Group Scoping Styles](input_group.md#scoping-styles) as they provide more insights.

<div class="sample-container loading" style="height:600px">
    <iframe id="styled-daterangepicker-iframe" src='{environment:demosBaseUrl}/scheduling/styled-daterangepicker' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="styled-daterangepicker-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Application Demo
In the demo below defines form for flight tickets that uses `igxDateRangePicker` component.

<div class="sample-container loading" style="height:600px">
    <iframe id="flight-booking-iframe" src="{environment:demosBaseUrl}/scheduling/flight-booking" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="flight-booking-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxDateRangePickerComponent]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

### Additional Resources
Related topics:
* [Date Time Editor](date_time_editor.md)
* [Label & Input](label_input.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Date Picker](date_picker.md)


Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)