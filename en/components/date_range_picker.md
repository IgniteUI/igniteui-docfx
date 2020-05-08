---
title: Range Date Picker
_description: 
_keywords: 
---

## Range Date Picker Component

The `igx-date-range-picker` component allows you to select a range of dates from a calendar UI or editable input fields.

<div class="sample-container loading" style="height:600px">
    <iframe id="basic-daterangepicker-iframe" src="{environment:demosBaseUrl}/scheduling/basic-daterangepicker" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="basic-daterangepicker-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Usage
To get started with the Ignite UI for Angular Date Range Picker Directive, let's first import the `IgxDateRangePickerModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDateRangePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDateRangePickerModule ],
    ...
})
export class AppModule {}
```


To use an input as a date time editor, set an igxDateTimeEditor directive and a valid date object as value. In order to have complete editor look and feel, wrap the input in an [input group](input_group.md). This will allow you to not only take advantage of the following directives [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html), [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html), `igx-prefix`, `igx-suffix`, [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html), but cover common scenarios when dealing with form inputs as well.

#### Binding

##### Single Input
A basic configuration scenario setting a Date object as a [`value`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#value):

Mentioning projection and Form integration

```typescript
public date = new Date();
```

```html
<igx-date-range value="range"></igx-date-range>
```

To create a two-way data-binding, set an ngModel:
```html
<igx-date-range [(ngModel)]="range"></igx-date-range>
```


##### Seperate Start Date and End Date Inputs
each with separate ngModel binding
<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-start-end-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-start-end" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-start-end-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Formatting

displayFormat, inputFormat, formatter,

angular locale id https://angular.io/api/core/LOCALE_ID - default local - default locale
<div class="divider--half"></div>

### Validation
<div class="sample-container loading" style="height:600px">
    <iframe id="daterangepicker-validation-iframe" src="{environment:demosBaseUrl}/scheduling/daterangepicker-validation" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-validation-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Templating
Changing icon to be as a suffix of the end date. This will demonstrate the usage of the directives igxDateRangePrefixIcon and igxDateRangeSuffixIcon. No more prefix/suffixes will be added. (only code snippet)
<div class="divider--half"></div>

### Keyboard Navigation

Drop down only opens

Alt + Down Arrow - Opens the drop-down calendar and focuses it
Alt + Up Arrow - Closes the drop-down and focuses the input field (start input in two inputs mode)
Esc - Closes the drop-down and focuses the input field (start input in two inputs mode)


editors navigation - link date editor

calendar navigation - link calendar

<div class="divider--half"></div>

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
    <iframe id="daterangepicker-styling-iframe" src='{environment:demosBaseUrl}/scheduling/styled-daterangepicker' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="daterangepicker-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Advanced Demo
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