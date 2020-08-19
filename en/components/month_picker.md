---
title: Month Picker Component
_description: The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Month Picker components, Angular Month Picker controls
---

## Month Picker
<p class="highlight">
    The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view. The component allows single selection, customizable display format and supports localization.
</p>

### Month Picker Demo
<div class="sample-container loading" style="height: 620px">
    <iframe id="monthpicker-sample-1-iframe" src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="monthpicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Usage

The first step is to import the `IgxCalendarModule` inside our **app.module.ts** file. Note that the [`IgxCalendar`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) also depends on the **BrowserAnimationsModule** and on the **HammerModule** for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

You will usually also import the [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) in the AppComponent file (or your editor will auto-import them for you) when declaring types that are part of the month picker API:

```typescript
import { IgxMonthPickerComponent } from "igniteui-angular";
...

@ViewChild('monthPicker', { read: IgxMonthPickerComponent }) public monthPicker: IgxMonthPickerComponent;
```

> [!NOTE]
> Note that the [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) uses the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI for localization and formatting of dates.
> Consider using the [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

To add a month picker in a template, use the following code:

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker></igx-month-picker>
```

#### Setting date
Set a date to [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) using the [`value`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#value) input.

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
```

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [value]="date"></igx-date-picker>
```

To create a two-way data-binding, set `ngModel` like this:

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date"></igx-date-picker>
```

#### Formatting
Change the month picker display format, using the [`formatOptions`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#formatoptions) inputs.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public numericFormatOptions = {
        month: "2-digit"
};
```

#### Localization
Use the [`locale`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#locale) input, to customize the month picker localization.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public locale: "fr";
public formatOptions = {
        month: "long"
};
```

Here is an example of localizing and formatting the month picker component:
<div class="sample-container loading" style="height: 680px">
    <iframe id="monthpicker-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="monthpicker-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Keyboard navigation
- When the **igxMonthPicker** component is focused, use
    - <kbd>PageUp</kbd> key to move to the previous year,
    - <kbd>PageDown</kbd> key to move to the next year,
    - <kbd>Home</kbd> key to focus the first month of the current year,
    - <kbd>End</kbd> key to focus the last month of the current year,
    - <kbd>Tab</kbd> key to navigate through the sub-header buttons.

- When `<` (previous) or `>` (next) year button (in the sub-header) is focused, use
    - <kbd>Space</kbd> or <kbd>Enter</kbd> key to scroll into view the next or previous year.

- When years button (in the sub-header) is focused, use 
    - <kbd>Space</kbd> or <kbd>Enter</kbd> key to open the years view,
    - <kbd>Right</kbd> or <kbd>Left</kbd> arrow key to scroll the previous/next year into view.

- When a month inside the months view is focused, use 
    - Arrow keys to navigate through the months,
    - <kbd>Home</kbd> key to focus the first month inside the months view,
    - <kbd>End</kbd> key to focus the last month inside the months view,
    - <kbd>Enter</kbd> key to select the currently focused month and close the view,
    - <kbd>Tab</kbd> key to navigate through the months.

### Styling
To get started with styling the month picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 
The month picker uses the calendar's theme, so we have to create a new theme that extends the [`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) and use some of its parameters to style the month picker's items:

```scss
$my-calendar-theme: igx-calendar-theme(
  $border-radius: 15px,
  $content-background: #011627,
  $picker-background-color: #011627,
  $month-current-text-color: #ECAA53,
  $month-hover-background: #ECAA53,
  $year-current-text-color: #ECAA53,
  $year-hover-text-color: #D37B08,
  $picker-arrow-color: #ECAA53,
  $picker-text-hover-color: #D37B08,
  $picker-arrow-hover-color: #D37B08,
  $picker-text-color: #ECAA53
);
```

#### Including themes

<div class="divider"></div>

The next step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-calendar($my-calendar-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-calendar($my-calendar-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($my-calendar-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($my-calendar-theme);
}
```

After everything's done, your component should look like this:

#### Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="monthpicker-styling-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="monthpicker-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxMonthPickerComponent]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
