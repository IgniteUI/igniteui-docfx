---
title: Date Range Picker Component - Native Angular | Ignite UI for Angular
_description: The Date Range Picker component allows you to choose a date range by defining its start and end date. You can select a range from a calendar UI.
_keywords: Angular Date Range Picker, Date Range Picker, Date Picker
---

# Date Range Picker Component

The Ignite UI for Angular Date Range Picker Component displays a month-view calendar that lets the end-user select a date range by defining its start and end date. The calendar's UI is shown either in a dialog (default) or as a dropdown upon user interaction with the calendar icon that is part of the input field. In addition, the component provides an advanced setup option, exposing two separate editable input fields. The component supports locales and custom date formatting.

## Angular Date Range Picker Example

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/basic-daterangepicker" alt="Angular Date Range Picker Example">
</code-view>

<div class="divider--half"></div>


## Usage

### First Steps
To get started with the Ignite UI for Angular Date Range Picker Component, let's first import the `IgxDateRangePickerModule` in the **app.module.ts** file.

As `IgxDateRangePicker` uses the [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), it also has a dependency on the **BrowserAnimationsModule** and the **HammerModule** for touch interactions, so they need to be added to the `AppModule` as well:

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

### Display Date Range Picker
To instantiate a date range picker in its default mode, use the following code:

```html
<igx-date-range-picker [value]="range"></igx-date-range-picker>
```

```typescript
public range: DateRange = { start: new Date(2020, 4, 20), end: new Date(2020, 4, 25) };
```

>Note: The Date Range Picker value is of type [`DateRange`]({environment:angularApiUrl}/interfaces/daterange.html), which contains a start and an end date.

To create a two-way data-binding, use `ngModel`:
```html
<igx-date-range-picker [(ngModel)]="range"></igx-date-range-picker>
```

### Projecting components

To enrich the default Date Range Picker UX, the component allows projecting child components - the same as in the [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html): [`igxLabel`](label-input.md), [`IgxHint`](input-group.md#hints), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix), excluding [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html). More detailed information about this can be found in the [Label & Input](label-input.md) topic.

In addition, the Date Range Picker can be configured to project [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) - a component that controls the calendar toggle and can be modified as shown in the [Calendar toggle](#calendar-toggle) section.

```html
<igx-date-range-picker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
    <igx-hint *ngIf="dateRangePicker.invalid">
        Please choose start and end date!
    </igx-hint>
</igx-date-range-picker>
```

### Display Separate Editable Inputs
The Date Range Picker component also allows configuring two separate inputs for start and end date. This can be achieved by using the [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) and [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) as children of the date range picker, as shown in the demo below:

```html
<igx-date-range-picker [(ngModel)]="range">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```
- Both the [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) and [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) extend the existing [`IgxInputGroupComponent`](input-group.md). For such a configuration to work, defining an [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) is required. In addition, all other components and directives available to the [`IgxInputGroupComponent`](input-group.md) can also be used.
- In order to enable date editing for both inputs, you need to decorate them with [`igxDateTimeEditor`](date-time-editor.md) directive.


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-start-end" >
</code-view>

<div class="divider--half"></div>

### User Experience

In a default configuration, with a single read-only input, the calendar can be opened by clicking anywhere in the input, including the calendar icon. When there are two separate inputs for start and end date, the calendar can only be opened from the calendar icon, since both inputs are editable by default.

When the calendar is visible, a range can be selected by choosing the start and end dates. Picking a date will set the start and end date, until a second date is chosen. If there is a selected range, clicking any other date from the calendar will start a new range selection. 

Start and end date are separated by a hyphen when shown in the component's read-only input. When defining different inputs for start and end, they are separated by the `to` preposition. The latter can be localized or overwritten via a template. See the [Templating](#templating) example below, for more details.

## Examples

### Label
To define the label for the date range picker the [`igxLabel`](label-input.md) directive should be used as shown in the snippet below:

```html
<igx-date-range-picker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
</igx-date-range-picker>
```

### Calendar toggle
In the default configuration, with a single read-only input, a default calendar icon is shown as a prefix. The calendar icon can be changed or redefined using the [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) component. It can be decorated with either [`igxPrefix`](input-group.md#prefix--suffix) or [`igxSuffix`](input-group.md#prefix--suffix), which will define its position - at the start of the input or at the end respectively. To change the default position and show the icon as a suffix, you need to do the following:

```html
<igx-date-range-picker>
    <igx-picker-toggle igxSuffix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
</igx-date-range-picker>
```

When a Date Range Picker has two separate inputs, for start and end dates, it doesn't expose a calendar icon by default. The [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) should be manually added as a child of the [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) or [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) like so:

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

### Dropdown mode

The [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) component has two modes - dialog (default) and dropdown. To switch to dropdown mode, do the following:

```html
<igx-date-range-picker [mode]="'dropdown'"></igx-date-range-picker>
```


<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-mode" >
</code-view>

<div class="divider--half"></div>

The range value is set when dates are picked from the calendar. You will notice that in dropdown mode, the `Done` button is not available.

### Keyboard Navigation
> Note: Use the demos for [Dropdown mode](#dropdown-mode) and [Display Separate Editable Inputs](#display-separate-editable-inputs) to try the keyboard combinations defined below.

Opening and closing the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) calendar UI with the keyboard is available only for `dropdown` mode and can be triggered via the key combinations below:

- <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> - Opens the dropdown containing the calendar UI and focuses it
- <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> - Closes the dropdown and focuses the input field (range start input field when two separate inputs are used)
- <kbd>Esc</kbd> - Closes the dropdown and focuses the input field (range start input field when two separate inputs are used)

Keyboard navigation within the calendar UI of the Date Range Picker is available in all modes and configurations. When the calendar is opened it takes focus and the following keyboard combinations can be used:

- <kbd>Enter</kbd> selects start and end dates
- <kbd>PageUp</kbd>, <kbd>PageDown</kbd>, <kbd>Shift</kbd> + <kbd>PageUp</kbd>, <kbd>Shift</kbd> + <kbd>PageDown</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Tab</kbd> - navigate the calendar

The [calendar keyboard navigation](calendar.md#keyboard-navigation) section contains all keyboard combinations that can be used in the calendar.

When two separate inputs are used, [keyboard navigation](date-time-editor.md#keyboard-navigation) for the [`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive is also applicable to the Date Range Picker component:

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Arrow Left</kbd> / <kbd>Right</kbd> - navigates between date sections. On <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Right</kbd> it goes to the end of the section. If already there it goes to the end of the next section. It works the same way in the opposite direction.
- <kbd>Arrow Up</kbd> / <kbd>Down</kbd> - increments/decrements date portions.
- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - sets the current day and time in the editor.

<div class="divider--half"></div>

### Formatting

The Date Range Picker Component supports different display and input formats.

The display format of the value can be one of the listed Angular [DatePipe](https://angular.io/api/common/DatePipe) formats. This allows it to support predefined format options, such as `shortDate` and `longDate`.

The `inputFormat` property accepts a constructed format string using characters supported by the DatePipe, e.g. `MM/dd/yyyy`, but doesn't support predefined format options, such as `shortDate` and `longDate`. If the `inputFormat` property is not defined then the [Angular locale ID](https://angular.io/api/core/LOCALE_ID) token is used when building it.

```html
<igx-date-range-picker [(ngModel)]="range" required 
    inputFormat="dd/MM/yyyy" displayFormat="`shortDate`">
</igx-date-range-picker>
```

> Note: The `IgxDateRangePicker` now supports IME input. When composition ends, the control converts the wide-character numbers to ASCII characters.
### Forms and Validation
The Date Range Picker Component supports all directives from the core [FormsModule](https://angular.io/api/forms/FormsModule), [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl), [`FormGroup`](https://angular.io/api/forms/FormGroup), etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. In addition, the component's [min and max values](#min-and-max-values) also act as form validators.

The [NgModel](https://angular.io/api/forms/NgModel) and validators can be set on the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) or on the individual start and end date inputs.

The following snippets and examples illustrate the use of the `required` validator in a Template-driven form.

First, we need to set up the model for a single read-only range component, which is done on the component level:

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <label igxLabel>Period</label>
</igx-date-range-picker>
```

The same configuration can be used when setting two separate inputs. Note that in this case, validation is also applied to both inputs.

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

When using two separate inputs, it is possible to set the model and required properties on each input. Note that validation is specific for each individual input.

```html
<igx-date-range-picker>
    <igx-date-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-start>
    <igx-date-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-end>
</igx-date-range-picker>
```


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-validation" >
</code-view>

<div class="divider--half"></div>

### Min and max values
You can specify [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxvalue) properties to restrict the user input by disabling calendar dates that are outside the range defined by those values.

```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
```

```html
<igx-date-range-picker [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
</igx-date-range-picker>
```

```html
<igx-date-range-picker [minValue]="minDate" [maxValue]="maxDate">
    <igx-date-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-start>
    <igx-date-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-end>
</igx-date-range-picker>
```

The `IgxDateRangePickerComponent` is also a validator which means it controls its validity internally using `minValue` and `maxValue`. You can also access both of them through `ngModel`:
```html
<igx-date-range-picker #dateRangePicker="ngModel" [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
    <igx-date-start>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-start>
    <igx-date-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-end>
</igx-date-range-picker>

<!-- minValue & maxValue will be true if the current range does not satisfy them -->
<div *ngIf="dateRangePicker.minValue || dateRangePicker.maxValue">
    <p>Value not in range.</p>
</div>
```

### Templating

When two editors are used, the default separator can be replaced using the [`igxDateRangeSeparator`]({environment:angularApiUrl}/classes/igxdaterangeseparatordirective.html) directive. Here is how to change the date separator to a hyphen `-`:

```html
<igx-date-range-picker>
    <igx-date-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-start>
    <ng-template igxDateRangeSeparator>-</ng-template>
    <igx-date-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-end>
</igx-date-range-picker>
```

## Styling

To get started with styling the `igxDateRangePicker`, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The Date Range Picker Component exposes `igx-date-range-picker-theme` and utilizes several components and directives, including `igxInputGroupComponent`, `igxCalendar` and `igxOverlay`. Any global styling for the aforementioned components and directives will affect the `igxDateRangeComponent`. As the Date Range Picker Component uses the input group and calendar themes, we have to create new themes that extend the [`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) and [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) and use some of their parameters to style the date range picker in conjunction with the date range picker theme. We will use a single custom color palette to define the colors to use across all themes:

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
$custom-calendar-theme: igx-calendar-theme(
    $palette: $custom-palette,
    $date-current-text-color: $today-text,
    $border-radius: 0.5,
    $date-border-radius: 0.5
);
```

### Using CSS variables
The last step is to pass the custom themes:

```scss
@include igx-css-vars($custom-date-range-theme);
@include igx-css-vars($custom-input-group-theme);
@include igx-css-vars($custom-calendar-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate it using `::ng-deep`. To prevent the custom theme from leaking into other components, be sure to include the `:host` selector before `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-date-range-picker($custom-date-range-theme);
        @include igx-input-group($custom-input-group-theme);
        @include igx-calendar($custom-calendar-theme);
    }
}
```

### Scoping Styles
Regarding style scoping, you should refer to both styling sections [Overlay Scoped Component Styles](overlay-styling.md#scoped-component-styles) and [Input Group Scoping Styles](input-group.md#styling) as they provide more information.


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/styled-daterangepicker" >
</code-view>


## Application Demo
The demo below defines a form for flight tickets that uses the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html). If no dates are selected, an [`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html) is used to display a validation error. The selection of the dates is restricted by the [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxvalue) properties of the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html)


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/flight-booking" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxDateRangePickerComponent]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## Theming Dependencies

* [IgxCalendar Theme]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)

## Additional Resources
Related topics:
* [Date Time Editor](date-time-editor.md)
* [Label & Input](label-input.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Date Picker](date-picker.md)


Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
