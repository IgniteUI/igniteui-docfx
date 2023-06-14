---
title: Angular Month Picker Component – Ignite UI for Angular
_description:  The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view. Try it now.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Month Picker components, Angular Month Picker controls
---

# Angular Month Picker Component Overview
<p class="highlight">The Ignite UI for Angular Month Picker component provides an easy and intuitive way to select a specific month and year using a month-year calendar view. The component allows you bind it's value to a date object, and users can change the month and year portion of the date object through the month picker component UI. It also supports localization.</p>

## Angular Month Picker Example
What you see here is a basic Angular Month Picker example with a the component's default view, enabling users to select the year and the month.  

<code-view style="height: 620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/monthpicker-sample-1" alt="Angular Month Picker Example">
</code-view>

## Getting Started with Ignite UI for Angular Month Picker

To get started with the Ignite UI for Angular Month Picker component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The first step is to import the `IgxCalendarModule` inside our **app.module.ts** file. 

>[!NOTE]
> The [**IgxMonthPickerComponent**]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) also depends on the [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) and the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
// import { IgxCalendarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxMonthPickerComponent` as a standalone dependency, or use the [`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxMonthPickerComponent } from 'igniteui-angular';
// import { IgxMonthPickerComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-month-picker></igx-month-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IgxMonthPickerComponent]
    /* or imports: [BrowserAnimationsModule, HammerModule, IGX_CALENDAR_DIRECTIVES] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Calendar module or Month Picker component imported, you can start using the `igx-month-picker` component.

> [!NOTE]
> Note that the [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) uses the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI for localization and formatting of dates.
> Consider using the [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

## Using the Angular Month Picker

To add the Angular Month Picker in a template, use the following code:

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker></igx-month-picker>
```

### Setting date
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

### Formatting
Change the month picker display format, using the [`formatOptions`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#formatoptions) inputs.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public numericFormatOptions = {
    month: '2-digit'
};
```

### Localization
Use the [`locale`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#locale) input, to customize the Ignite UI for Angular Month Picker localization.

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public locale: 'fr';
public formatOptions = {
    month: 'long'
};
```

Here is an example of localizing and formatting the month picker component:

<code-view style="height: 680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/monthpicker-sample-3" >
</code-view>


## Keyboard navigation
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

## Styling
To get started with styling the month picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 
The month picker uses the calendar's theme, so we have to create a new theme that extends the [`calendar-theme`]({environment:sassApiUrl}/index.html#function-calendar-theme) and use some of its parameters to style the month picker's items:

```scss
$my-calendar-theme: calendar-theme(
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

### Including themes

<div class="divider"></div>

The next step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include calendar($my-calendar-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include calendar($my-calendar-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include css-vars($my-calendar-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include css-vars($my-calendar-theme);
}
```

After everything's done, your component should look like this:

### Demo


<code-view style="height: 600px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/monthpicker-styling" >
</code-view>


## API References
<div class="divider--half"></div>

* [IgxMonthPickerComponent]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-calendar-theme)

<div class="divider--half"></div>

## Theming Dependencies
<div class="divider--half"></div>

* [IgxCalendar Theme]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
