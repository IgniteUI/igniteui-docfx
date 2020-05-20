---
title: Date Range Picker Component - Native Angular | Ignite UI for Angular
_description: The Date Range Picker component allows you to choose a date range consists of start and end date. You can select a range from a calendar UI.
_keywords: Angular Date Range Picker, Date Range Picker, Date Picker
---

## Date Range Picker Component

The Ignite UI for Angular Date Range Component displays a month-view calendar that lets the user pick a date range, consisting of start and end date. The calendar can be displayed using a toggle, shown at the leftmost part of the component, and has two modes - dialog(default) and dropdown. In addition, the component provides an advanced setup option, exposing two editable input fields where you can edit the dates. It supports locales and custom date formatting.

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

As `IgxDateRangePicker` uses the [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html), it is also dependent on the **BrowserAnimationsModule** and on the **HammerModule** for touch interactions, so they need to be added to the `AppModule` as well:

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
To add a date range picker in `dialog mode` (the default mode), use the following code:

```html
<igx-date-range-picker value="range"></igx-date-range-picker>
```

```typescript
public range: DateRange = { start: new Date(2020, 4, 20), end: new Date(2020, 4, 25) };
```

>Note: The Date Range Picker value is of type [`DateRange`](({environment:angularApiUrl}/interfaces/daterange.html)), which contains a start and an end date.

To create a two-way data-binding, use `ngModel`:
```html
<igx-date-range [(ngModel)]="range"></igx-date-range>
```

#### Display Separate Editable Inputs
The Date Range component also allows configuring two separate inputs for start and end dates. This can be achieved by using the [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) and [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) as children of the date range picker, like shown in the demo below.

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

<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-start-end-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-start-end" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-start-end-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Projecting components

In order to enrich the default Date Range Picker UX the component allows projecting child components - the same as in the [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html): [`igxLabel`](label_input.md), [`IgxHint`](input_group.md#hints), [`igxPrefix`](input_group.md#prefix--suffix), [`igxSuffix`](input_group.md#prefix--suffix), excluding [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html). Follow the [Label & Input](label_input.md) topic for more information about those components.

In addition to the components above, the Date Range Picker can be configured to project [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) - a component that controls the calendar toggle and can be modified as shown in the [Calendar toggle](#calendar-toggle) section.

```html
<igx-date-range-picker #dateRangePicker="ngModel" [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
    <igx-hint *ngIf="dateRangePicker.invalid">
        Please choose start and end date!
    </igx-hint>
</igx-date-range-picker>
```

Both the [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) and [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) extend the existing [`IgxInputGroupComponent`](input_group.md). In order for this configuration to work, defining an [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) is required. In addition, other child components can be also used, like [`igxLabel`](label_input.md), [`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html), [`igxPrefix`](input_group.md#prefix--suffix), [`igxSuffix`](input_group.md#prefix--suffix). To enable date editing for both inputs, you need to decorate the inputs with [`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive, as shown in the code snippet below:

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

#### User Experience

In the default, single read-only input configuration, the calendar can be opened by clicking anywhere in the input, including the calendar toggle. When there are two separate inputs for start and end date, those are editable and the calendar can only be opened from the calendar toggle.

When the calendar is opened, a range can be selected by choosing the start and end dates. Picking the start date will set the same value for the end date until a different end date is chosen. Selecting the same day twice will deselect that day.

Start and end date are separated by `-` when shown in the component's read-only input. When defining different inputs for start and end, they are separated by the `to` preposition. The latter is localizable and can be overwritten with a template. Follow the [Templating](#templating) example below, for more details.

### Examples

#### Label
To define a label for the date range picker the [`igxLabel`](label_input.md) directive should be used, like shown in the snippet below:

```html
<igx-date-range-picker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
</igx-date-range-picker>
```

#### Calendar toggle
By default, in a single read-only mode, the default calendar toggle is provided as a prefix. For development ease, the calendar toggle itself can be changed or redefined using the [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) component. It can be decorated with either [`igxPrefix`](input_group.md#prefix--suffix) or [`igxSuffix`](input_group.md#prefix--suffix), which will define its position - either at the start of the input or at the end. To change the default toggle position and display it as a suffix, the following code can be used:

```html
<igx-date-range-picker>
    <igx-picker-toggle igxSuffix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
</igx-date-range-picker>
```

When the Date Range Picker has two separate inputs, for start and end dates, it doesn't expose a calendar toggle by default. The [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) should be manually added as a child for the [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) or [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html), as shown below:

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

#### Dropdown mode

The [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) component has two modes - dialog (default) and dropdown. To switch to the optional dropdown mode, see the snippet below:

```html
<igx-date-range [mode]="'dropdown'"></igx-date-range>
```

<div class="sample-container loading" style="height:500px">
    <iframe id="daterangepicker-mode-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-mode" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-mode-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

When in dropdown mode, the `Done` button is not available. In either the dropdown or the dialog mode, the value is set when dates are picked from the calendar.

#### Keyboard Navigation
> Note: Use the demos for [Dropdown mode](#dropdown-mode) and [Separate Editable Inputs](separate-editable-inputs) to try the keyboard combinations defined in this topic section.

To open/close the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) calendar using keyboard shortcuts, the [`mode`]([`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#mode)) should be set to `dropdown`.

- <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> - Opens the dropdown calendar and focuses it
- <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> - Closes the dropdown and focuses the input field (start input in two inputs mode)
- <kbd>Esc</kbd> - Closes the dropdown and focuses the input field (start input in two inputs mode)

Keyboard navigation for the Date Range Picker calendar is available in all modes and configurations. When the calendar is opened it takes focus and the following keyboard combinations can be used:

- <kbd>Enter</kbd> selects start and end dates
- <kbd>PageUp</kbd>, <kbd>PageDown</kbd>, <kbd>Shift</kbd> + <kbd>PageUp</kbd>, <kbd>Shift</kbd> + <kbd>PageDown</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Tab</kbd> - to navigate the calendar

The [calendar keyboard navigation](calendar.md#keyboard-navigation) section contains all keyboard combinations that can be used in the calendar.

When two separate inputs are defined then [keyboard navigation](date_time_editor.md#keyboard-navigation) of the [`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive is also applicable for the Date Range Picker component:

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Arrow Left</kbd> / <kbd>Right</kbd> - navigates between date sections. On <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Right</kbd> it goes to the end of the section. If already there it goes to the end of next section if any. It works in a similar fashion in the opposite direction.
- <kbd>Arrow Up</kbd> / <kbd>Down</kbd> - increments/decrements date portions.
- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - sets the current day and time in the editor.

<div class="divider--half"></div>

#### Formatting

The Date Range picker supports different display and input formats.

The format of the value can be one of the listed Angular [DatePipe](https://angular.io/api/common/DatePipe) formats, which allows it to support predefined format options, such as `shortDate` and `longDate`.

The `inputFormat` property accepts a constructed format string using characters supported by the DatePipe, e.g. `MM/dd/yyyy`, but doesn't support predefined format options, such as `shortDate` and `longDate`. If the `inputFormat` property is not specified defined then the [Angular locale ID](https://angular.io/api/core/LOCALE_ID) token is used when building the input format.

```html
<igx-date-range-picker [(ngModel)]="range" required inputFormat="dd/MM/yyyy" displayFormat="dd/MM/yy">
</igx-date-range-picker>
```


#### Forms and Validation
The Date Range Picker Component supports all directives from the core FormsModule [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. In addition, the component's [min and max values](#min-and-max-values) also acts as form validators.

The [NgModel](https://angular.io/api/forms/NgModel) and validators can be set on the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) component or on the individual start and end date inputs.

The following 3 snippets and example illustrates the use of the `required` validator in a Template-driven form.

The first snippet sets up the model for a single read-only range component, which is done on the component level:

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

When using two separate inputs, it is possible to set the model and required properties on each input. This is shown in the example below. Note that validation is specific for each individual input.

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

<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-validation-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-validation" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-validation-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Min and max values
You can specify [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxvalue) properties to restrict the user input by disabling calendar dates that are outside the range defined by those values.

```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 12, 1);
```

```html
<igx-date-range-picker [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
</igx-date-range-picker>
```

```html
<igx-date-range>
    <igx-date-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required [minValue]="minDate">
    </igx-date-start>
    <igx-date-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required [maxValue]="maxDate">
    </igx-date-end>
</igx-date-range>
```

#### Templating

 When two editors are defined then the default separator (`to`), can be templated using the [`igxDateSeparator`]({environment:angularApiUrl}/classes/igxdateseparator.html) directive. The following example changes the date separator to `-`:

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

#### Using CSS variables
The last step is to pass the custom themes:

```scss
@include igx-css-vars($custom-date-range-theme);
@include igx-css-vars($custom-input-group-theme);
@include igx-css-vars($custom-calendar-theme);
```

#### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep`. To prevent the custom theme from leaking into other components, be sure to include the `:host` selector before `::ng-deep`:

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
Regarding styles scoping, you should refer to both styling sections [Overlay Scoped Component Styles](overlay_styling.md#scoped-component-styles) and [Input Group Scoping Styles](input_group.md#scoping-styles) as they provide more information.

<div class="sample-container loading" style="height:600px">
    <iframe id="styled-daterangepicker-iframe" src='{environment:demosBaseUrl}/scheduling/styled-daterangepicker' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="styled-daterangepicker-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Application Demo
The demo below defines a form for flight tickets that uses the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html). If no dates are selected, an [`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html) is used to display a validation error. The selection of the dates is restricted by the [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxvalue) properties of the [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html)

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
