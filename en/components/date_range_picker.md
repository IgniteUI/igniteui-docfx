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
For details check out the [`Input Group styling guide`](input_group.md#styling).
<div class="divider--half"></div>

### Advanced Demo
<div class="sample-container loading" style="height:600px">
    <iframe id="flight-booking-iframe" src="{environment:demosBaseUrl}/scheduling/flight-booking" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="flight-booking-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Additional Resources
Related topics:
* [Date Time Editor](date_time_editor.md)
* [Label & Input](label_input.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Date Picker](date_picker.md)


Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)