---
title: Month Picker Component
_description: The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Month Picker components, Angular Month Picker controls
_language: kr
---

## Month Picker
<p class="highlight">The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view. The component allows single selection, customizable display format and supports localization.</p>

### Month Picker Demo
<div class="sample-container loading" style="height: 620px">
    <iframe id="monthpicker-sample-1-iframe" src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
To get started with the **Ignite UI for Angular Month Picker**, let's first import the `IgxCalendarModule` in the application's AppModule, typically this is the **app.module.ts** file. Note that the [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxCalendarModule],
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
Set a date to [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) using the [`value`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#value) input.

```typescript
// month-picker-sample.component.ts

public date: Date = new Date(Date.now());
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
Change the month picker display format, using the [`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions) inputs.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date(Date.now());
public numericFormatOptions = {
        month: "2-digit",
        year: "numeric"
};
```

Here is an example of modifying the default format options of the month picker:
<div class="sample-container loading" style="height: 600px">
    <iframe id="monthpicker-sample-2-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Localization
Use the [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale) input, to customize the month picker localization.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date(Date.now());
public locale: "fr";
public formatOptions = {
        month: "long",
        year: "numeric"
};
```

Here is an example of localizing the month picker component:
<div class="sample-container loading" style="height: 620px">
    <iframe id="monthpicker-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
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
