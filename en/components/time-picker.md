---
title: Angular Time Picker Component | Ignite UI for Angular
_description: The Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners which is then mirrored in the input field. Try it now
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Time Picker component, Angular Time Picker control, Time Picker, Angular Time Picker
---

# Angular Time Picker Overview
<p class="highlight">The time picker component allows users to input or select time portions of a `Date` object from a dropdown or dialog with spinners, which is then mirrored in the input field. In dropdown mode, which is the default one, the input field is editable and users can also edit selected time.</p>

<div class="divider--half"></div>

<p>The time picker component has different built-in templates for displaying a clock button, as well as features like validation, custom time formatting, and more.</p>

## Angular Time Picker Example
In general, users can enter a preferred time either through text input or by choosing a time value from an Angular Time Picker dropdown. The basic Angular Time Picker example below shows how users can easily enter the value with the help of the dropdown or by using the keyboard.

<code-view style="height:540px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-dropdown" >
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Time Picker

To get started with the Ignite UI for Angular Time Picker component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxTimePickerModule` in your **app.module.ts** file.

>[!NOTE]
>The IgxTimePicker is also dependent on both the **BrowserAnimationsModule** and **optionally** the **HammerModule** for touch interactions. They need to be added to the AppModule as well.

```typescript
// app.module.ts

...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';
// import { IgxTimePickerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTimePickerComponent` as a standalone dependency, or use the [`IGX_TIME_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/time-picker/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_TIME_PICKER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TABS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-time-picker [(ngModel)]="time"></igx-time-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TIME_PICKER_DIRECTIVES, FormsModule]
    /* or imports: [IgxTimePickerComponent, FormsModule] */
})
export class HomeComponent {
    public time: Date;
}
```

Now that you have the Ignite UI for Angular Time Picker module or directives imported, you can start using the `igx-time-picker` component.

## Using the Angular Time Picker

### Default

To add the time picker in a template, use the following code:

```html
<!--meeting.component.html-->
<igx-time-picker></igx-time-picker>
```

The output should be the same as the one in the demo.

<div class="divider--half"></div>

### Binding
The Time Picker in Angular can be bound to either a Date object or time-only string value in `ISO 8601` format by setting the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) property or `ngModel`.

First create a time string in `ISO 8601` format:

```typescript
public time = '09:15:30';
```

Then use the `ngModel` to create a two-way data-binding:

```html
<igx-time-picker [(ngModel)]="time"></igx-time-picker>
```

or set [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input in the template:

```html
<igx-time-picker [value]="time"></igx-time-picker>
```

To use it in a reactive form you need to set a `formControlName` on the picker
```html
<form [formGroup]="form">
    <igx-time-picker formControlName="timePicker"></igx-time-picker>
</form>
```

```typescript
export class SampleFormComponent {
    // ...
    public form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            timePicker: ['', Validators.required]
        });
    }
}
```

### Projecting components
The time picker component allows projecting child components - the same as in the [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html): [`igxLabel`](label-input.md), [`IgxHint`](input-group.md#hints), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix), excluding [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html). More detailed information about this can be found in the [Label & Input](label-input.md) topic.

In the default configuration, a dropdown/dialog toggle icon is shown as a prefix. It can be changed or redefined using the [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) component. It can be decorated with either [`igxPrefix`](input-group.md#prefix--suffix) or [`igxSuffix`](input-group.md#prefix--suffix), which will define its position - at the start of the input or at the end respectively.

In the following example we have added a custom label and hint and changed the default toggle icon position to be displayed as a suffix:

```html
<igx-time-picker [(ngModel)]="date" mode="dialog" [inputFormat]="'hh:mm'">
    <label igxLabel>Home Time </label>
    <igx-picker-toggle igxSuffix>
        <igx-icon>home</igx-icon>
    </igx-picker-toggle>
    <igx-hint>{{date.toLocaleString()}}</igx-hint>
</igx-time-picker>
```
```typescript
public date: Date = new Date();
```

And here's our templated Ignite UI for Angular Time Picker:

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" >
</code-view>

## Custom action buttons
The [`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) supports action button customization. To achieve that, wrap the buttons in `ng-template` marked with the [`igxPickerActions`]({environment:angularApiUrl}/classes/igxpickeractionsdirective.html) directive selector.

In the example below, custom action buttons are added for 'CANCEL', 'DONE' and 'NOW' actions.

```html
<!-- sample.component.html -->

<igx-time-picker #picker format="hh:mm" mode="dropdown">
    <ng-template igxTimePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="picker.cancelButtonClick()">cancel</button>
            <button igxButton="flat" (click)="picker.okButtonClick()">done</button>
            <button igxButton="flat" (click)="selectNow(picker)">now</button>
        </div>
    </ng-template>
</igx-time-picker>
```

```typescript
// sample.component.ts
...
public selectNow(timePicker: IgxTimePickerComponent) {
    timePicker.value = new Date();
    timePicker.close();
}
...
```

And there we have it, a re-templated time picker with dropdown, custom actions and two-way binding support:

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-6" >
</code-view>

<div class="divider--half"></div>

## Customizing the toggle and clear icons
The [`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) can be configured with [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) and [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html), these can be used to change the toggle and clear icons without having to add your own click handlers.

```html
 <igx-time-picker>
    <label igxLabel>Select time</label>
    <igx-picker-toggle igxPrefix>
        <igx-icon>snooze</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>delete</igx-icon>
    </igx-picker-clear>
</igx-time-picker>
```

### Keyboard Navigation
* Users can navigate the component's time portions via the keyboard <kbd>Up</kbd> and <kbd>Down</kbd> arrow keys or by scrolling in the input field and in the dropdown/dialog. Navigation in the input is possible regardless of the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) or [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue), while navigation in the dropdown/dialog will be restricted within the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) range.
* The time picker dropdown can be opened either by toggle icon click, <kbd>Space</kbd> key or <kbd>Alt</kbd> + <kbd>Down</kbd> keys press. In dialog mode this can be done by input click.
* <kbd>Enter</kbd> key press or mouse click outside the dropdown/dialog applies the selection and closes the dropdown/dialog.
* Pressing the <kbd>Escape</kbd> key cancels the selection and closes the dropdown/dialog.
* When entered a new value while dropdown is closed, click outside of the time picker or press <kbd>Tab</kbd> to move the focus so that the value is accepted.

## Examples
### Dialog Mode
The default time picker mode is editable dropdown mode. To change the time picker mode to read-only dialog mode, set the [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) input to [`dialog`]({environment:angularApiUrl}/index.html#pickerinteractionmode):

```typescript
// timePickerDropdown.component.ts

import { PickerInteractionMode } from 'igniteui-angular';
// import { PickerInteractionMode } from '@infragistics/igniteui-angular'; for licensed package
...
public mode = PickerInteractionMode.Dialog;
```

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker [mode]="mode"></igx-time-picker>
```

or just change the [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) in the time picker like this:

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker mode="dialog"></igx-time-picker>
```

In dialog mode, the dialog header displays the currently selected time in the picker's [`input format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#inputformat). You can change the header position by setting the [`headerOrientation`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#headerOrientation) property.

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" alt="Angular Time Picker Example">
</code-view>

<div class="divider--half"></div>

When the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) are set the dialog displays the time within that range only. See the [Min max value](#min-max-value) example below, for more details.

### Display and input format
The time picker component supports different display and input formats.

The display format is the format of the value when in edit mode and can be one of the listed Angular [DatePipe](https://angular.io/api/common/DatePipe) formats. This allows it to support predefined format options, such as `shortTime` and `longTime`.

The input format is the format of the value when not in edit mode and the format, in which the time portions are displayed in the dropdown/dialog. The `inputFormat` property accepts a constructed format string using characters supported by the DatePipe, e.g. `hh:mm:ss`, but doesn't support predefined format options, such as `shortTime` and `longTime`. If the `inputFormat` property is not defined, it defaults to `hh:mm tt`.
Alternatively, if the [`inputFormat`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#inputFormat) property is not set, the input format will be inferred from the [`displayFormat`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#displayFormat) in case it can be parsed as containing numeric date-time parts only.

```html
<igx-time-picker
    [(ngModel)]="time"
    [inputFormat]="`hh:mm:ss`"
    [displayFormat]="`shortTime`">
</igx-time-picker>
```
>[!NOTE]
> The `IgxTimePicker` now supports IME input. When composition ends, the control converts the wide-character numbers to ASCII characters.

### Increment and decrement
The time picker exposes public [`increment`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#decrement) methods, which accept two optional parameters: the `DatePart` to be modified and the `delta` by which it will be changed. If not specified the `DatePart` defaults to `Hours` and the `delta` defaults to [`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsDelta).

You can find a sample that illustrates the use of both methods at [Date Time Editor Directive](date-time-editor.md#increment-decrement).

### Forms and Validation
The time picker component supports all directives from the core FormsModule [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). This also includes the [Forms Validators](https://angular.io/api/forms/Validators) functions. In addition, the component's [min and max values](#min-max-value) also act as form validators.

The [Reactive Forms Integration](angular-reactive-form-validation.md) sample demonstrates how to use the igxTimePicker in Reactive Forms.

#### Min max value
You can specify [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) to restrict the user input, in which case the dropdown/dialog will display the time within that range only. In dropdown mode however, it is still possible for the user to type in an invalid time. You can handle the [`validationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#validationFailed) event in order to notify the user if that happens.

>[!NOTE]
>The min/max values should be a Date object or a time-only string in the `ISO 8601` format:

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular';
// import { IgxTimePickerModule, IgxToastModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule, IgxToastModule],
    ...
})
export class AppModule {}

// app.component.ts

public time = '10:00:00';
public min = '09:15:30';
public max = '18:15:30';

@ViewChild('toast', { static: true })
private toast;

public onValidationFailed() {
    this.toast.open();
}
```

```html
<igx-time-picker
	[(ngModel)]="time"
    [itemsDelta]="{hours:2, minutes:5}"
    [inputFormat]="'hh:mm:ss tt'"
    [headerOrientation]="true"
    [minValue]="min"
    [maxValue]="max"
	(onValidationFailed)="onValidationFailed()">
	<label igxLabel>Meeting Start</label>
</igx-time-picker>

<igx-toast #toast message="Value must be between 09:15:30 AM and 06:15:30 PM"></igx-toast>

```

The dropdown displays values within the min/max range (09:15:30 AM~06:15:30 PM) based on the items delta. A toast is added to show a message when an invalid time has been typed in.

 >[!NOTE]
>The displayed values for each time portion in the dropdown/dialog are calculated based on the items delta always starting from zero. If the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) does not match the items delta, the displayed values will start/end from the next/last possible value that matches the threshold.

And there we have it:

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" >
</code-view>

<div class="divider--half"></div>

#### Using date and time picker together
In some cases when the [`IgxDatePicker`](date-picker.md) and the IgxTimePicker are used together, we might need them to be bound to one and the same Date object value.

To achieve that in template driven forms, use the `ngModel` to bind both components to the same Date object.

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/template-driven-form" >
</code-view>

<div class="divider--half"></div>

In reactive forms, we can handle the [`valueChange`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#valueChange) event of each component and update the value of the other.

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/reactive-form" >
</code-view>

<div class="divider--half"></div>

## Styling

To get started with styling the time picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`time-picker-theme`]({environment:sassApiUrl}/index.html#function-dialog-theme) and accepts parameters that style the time picker.

```scss
$my-time-picker-theme: time-picker-theme(
  $text-color: #e4c8a5,
  $hover-text-color: #ecaa53,
  $selected-text-color: #ecaa53,
  $header-background: #ecaa53,
  $background-color: #011627
);
```

>[!NOTE]
>In order to style any additional components that are used as part of the time picker window's content (such as the [`IgxButton`](button.md)), an additional theme should be created that is specific to the respective component and is placed under the dialog window's scope only (so it does not affect the rest of the application).

Since the time picker window uses the [`IgxOverlayService`](overlay.md), in order for our custom theme to reach down the time picker window that we want to style, we will provide a specific outlet where the dialog window will be placed in the DOM when it is visible.

The items in our time picker **are not** descendants of our component `host` - they are currently being displayed in the default overlay outlet, at the end of the `document` body. Changing this is done by making use of the [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) property in the `overlaySettings`. The `outlet` controls where the overlay container should be rendered.

Here, we can pass a reference to the element where we'd like our container to be:

```html
<igx-time-picker #picker [overlaySettings]="{ outlet: element }">
</igx-time-picker>
```

```typescript
export class TimepickerStylingComponent {
    constructor(public element: ElementRef) {
    }
}
```

Now, the time picker's items are properly rendered **inside** of our component's host, which means that our custom theme will take effect:

>[!NOTE]
>In order to learn more about the various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay.md), you can take a look at the [Overlay styling topic](overlay-styling.md).

```scss
 @include css-vars($my-time-picker-theme);
```
>[!WARNING]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
  ::ng-deep {
    @include css-vars($my-time-picker-theme);
  }
}
```

### Demo

<code-view style="height: 600px;"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-styling" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent Styles]({environment:sassApiUrl}/index.html#function-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-overlay-theme)

## Theming Dependencies
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-input-group-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-overlay-theme)

## Additional Resources
* [Date Time Editor](date-time-editor.md)
* [Label & Input](label-input.md)
* [Reactive Forms Integration](angular-reactive-form-validation.md)

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

