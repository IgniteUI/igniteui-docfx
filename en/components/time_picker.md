---
title: Time Picker Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners which is then mirrored in the input field. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Time Picker component, Angular Time Picker control, Time Picker, Angular Time Picker
---

# Time Picker
<p class="highlight">In following the design and functionality of the Date Picker, Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners, which is then mirrored in the input field. In addition, the user can edit the time value, using an editable masked input with a dropdown.</p>
<div class="divider--half"></div>

#### Demo
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

The first step is to import the `IgxTimePickerModule` in the **app.module.ts** file. 

>[!NOTE]
>The IgxTimePicker is also dependent on both the **BrowserAnimationsModule** and **HammerModule** for touch interactions. They need to be added to the AppModule as well.

```typescript
// app.module.ts

...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### Default

To add the time picker in a template, use the following code:

```html
<!--meeting.component.html-->
<igx-time-picker></igx-time-picker>
```

The output should be the same as the one in the demo.

<div class="divider--half"></div>

#### Setting value

Set a value using the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input. Just add a date:

```typescript
public date: Date = new Date();
```

Then use the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input in the template:

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

To create a two-way data-binding, set `ngModel` like this:

```html
<igx-time-picker [(ngModel)]="date"></igx-time-picker>
```

#### Setting format
To set the time format, use the [`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format) option.

The table below lists valid time display formats:

| Format | Description |
|:-------:|:-----------|
| `h` | Formats the hours field in 12-hours format without leading zero (1..12). | 
| `hh` | Formats the hours field in 12-hours format with leading zero (01..12). | 
| `H` | Formats the hours field in 24-hours format without leading zero (0..23). | 
| `HH` | Formats the hours field in 24-hours format with leading zero (00..23). | 
| `m` | Formats the minutes field without leading zero (0..59). |
| `mm` | Formats the minutes field with leading zero (00..59). |
| `tt` | Represents the AM/PM field. |

#### Custom label
By placing an `igxlabel` inside a `<label>` tag nested in the component, the default label can be changed to a custom one:

````html
<!-- timepicker-label.component.html -->
<igx-time-picker>
    <label igxLabel>Meeting Start</label>
</igx-time-picker>
````

You can see what the custom label will look like in the validation sample found in the Validation section.


#### Change delta and spin mode

To change the delta of the items, set the [`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) input. To change the spin mode, use the [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) input:

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

#### Validation

Set [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) to limit the user input. You can handle the [`onValidationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#onvalidationfailed) in order to notify the user if an invalid time is selected. 

>[!NOTE]
>The min/max values should follow the [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format):

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule, IgxToastModule],
    ...
})
export class AppModule {}

// app.component.ts

public min: string = "09:15:30 AM";
public max: string = "06:15:30 PM";

@ViewChild("toast", { static: true })
private toast;

public onValidationFailed() {
    this.toast.show();
}
```

```html
<igx-time-picker
	[itemsDelta]="{hours:1, minutes:5}"
	format="HH:mm tt"
	[vertical]="true"
	[minValue]="min"
	[maxValue]="max"
	(onValidationFailed)="onValidationFailed()">
	<label igxLabel>Meeting Start</label>
</igx-time-picker>

<igx-toast #toast message="Value must be between 09:15:30 AM and 06:15:30 PM"></igx-toast>

```

A toast is added to show a message when an invalid time is selected. The range is (09:15:30 AM~06:15:30 PM) and the time parts outside it will be grayed out. Also we changed the delta of the items and the time format so you can see how that looks like.

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-4" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Dropdown mode

When you add the time picker to your project, its default mode is read-only dialog mode. To change the time picker mode to editable dropdown mode, set the [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) input to [`dropdown`]({environment:angularApiUrl}/enums/interactionmode.html#dropdown):

```typescript
// timePickerDropdown.component.ts

import { InteractionMode } from 'igniteui-angular';
...
public mode = InteractionMode.DropDown;
```

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker [mode]="mode"></igx-time-picker>
```

or just change the [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) in the time picker like this:

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker mode="dropdown"></igx-time-picker>
```

The user will now be able to type, edit or delete the time value in the input in both 12- and 24-hour formats. 

**Keyboard Navigation**

When the mouse caret is positioned at the hours, minutes or AM/PM placeholders and pressing the <kbd>Up</kbd> arrow key or using `Mouse Wheel Up`, the hours/minutes are increased. Pressing the <kbd>Down</kbd> arrow key or `Mouse Wheel Down` is used for the reversed operation. 

>[!NOTE]
>If the time picker's [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) or [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) are set and [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) is false, the time scrolling will stop at the specified min/max hour/minute value.

**Keyboard Operations:**

* To `Open`the dropdown, there are the following options - click on the clock icon, press <kbd>Space</kbd> or combination of <kbd>Alt</kbd> + <kbd>Down</kbd> keys.
* To `Accept` and `Close` the dropdown press <kbd>Escape</kbd> or <kbd>Enter</kbd> key.
* Clicking with the mouse outside of the time picker will also `Accept` the value entered and `Close` the dropdown.
* If the dropdown is not opened and a new value is typed, to `Accept` it - click outside of the time picker or press <kbd>Tab</kbd> to move the focus.

And there we have it:
<div class="sample-container loading" style="height:540px">
    <iframe id="timepicker-dropdown-iframe" data-src='{environment:demosBaseUrl}/scheduling/timepicker-dropdown' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="timepicker-dropdown-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-dropdown-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Templated Input Group

We have seen how to make use of the  API (properties, events, methods) so that we configure the time picker per our requirements and interact with it programmatically. Now we want to go further and customize its input group look.

To do that, we need to decorate the nested ng-template inside the time picker with IgxTimePickerTemplate directive. ng-template context exposes the following members: [`openDialog`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#opendialog) method can be used to open the time picker dialog; [`displayTime`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#displaytime) property contains the formatted value; [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) contains the real value. You could use those by declaring a variables in the ng-template element.

In the following example we modify the default label "Time" and add a second icon as suffix. We also use `igx-hint` in the input group to display the real time picker value:

```html
<igx-time-picker [value]="date">
    <ng-template
        igxTimePickerTemplate
        let-openDialog="openDialog"
        let-value="value"
        let-displayTime="displayTime">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>home</igx-icon>
            </igx-prefix>
            <label igxLabel>Home Time </label>
            <input igxInput [value]="displayTime" />
            <igx-suffix>
                <igx-icon>access_alarm</igx-icon>
            </igx-suffix>
            <igx-hint>{{value}}</igx-hint>
        </igx-input-group>
    </ng-template>
</igx-time-picker>
```
```typescript
public date: Date = new Date();
```

And here's our templated time picker:
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-5" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="time-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Templated Dropdown Mode

All the information mentioned in the <a href="#templating-input-group">Templating Input Group</a> section can be applied when re-templating a dropdown mode time picker. The only requirement is that an HTML element should be passed to the `openDialog(target)`, and that element will be used as a positioning target for the drop down that is being spawned.

```html
<igx-time-picker #picker [value]="today" format="HH:mm" mode="dropdown">
    <ng-template igxTimePickerTemplate let-openDialog="openDialog" let-value="value" let-displayTime="displayTime">
        <igx-input-group>
            <input #dropDownTarget igxInput [value]="displayTime" (blur)="onBlur(dropDownTarget.value, value, picker)"/>
            <igx-suffix>
                <igx-icon (click)="openDialog(dropDownTarget)">access_time</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </ng-template>
</igx-time-picker>
```
```typescript
public today: Date = new Date();
```

>[!NOTE]
>The `displayTime` property, exposed in the template context, is **read-only**. In the example above it is used in combination with the input element **blur** event in order to achieve two-way binding.

```typescript
public today: Date = new Date();

public onBlur(inputValue: string, value: Date, picker: IgxTimePickerComponent) {
    const parts = inputValue.split(/[\s:]+/);

    const hour = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    if (picker.validHourEntries.indexOf(hour) !== -1 && picker.validMinuteEntries.indexOf(minutes) !== -1) {
        value.setHours(hour, minutes);
    } else {
        throw new Error("This is not a valid hour.");
    }
}
```



#### Custom button action
The [`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) supports adding of custom actions buttons. To achieve that, wrap the buttons in `ng-template` marked with the `igxTimePickerActions` directive selector.

In the example below, custom action buttons are added for 'CANCEL', 'OK' and 'NOW' actions.

```html
<!-- sample.component.html -->

<igx-time-picker #picker format="HH:mm" mode="dropdown">
    <ng-template igxTimePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="picker.cancelButtonClick()">cancel</button>
            <button igxButton="flat" (click)="picker.okButtonClick()">ok</button>
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
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-6" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-6" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="time-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Styling

To get started with styling the time picker, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-time-picker-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) and accepts parameters that style the time picker.

```scss
$my-time-picker-theme: igx-time-picker-theme(
  $text-color: #E4C8A5,
  $hover-text-color: #ECAA53,
  $selected-text-color: #ECAA53,
  $header-background: #ECAA53,
  $header-hour-text-color: #011627,
  $header-time-period-color: #011627,
  $background-color: #011627
);
```

>[!NOTE]
>In order to style any additional components that are used as part of the time picker window's content (such as the [`IgxButton`](button.md)), an additional theme should be created that is specific to the respective component and is placed under the dialog window's scope only (so it does not affect the rest of the application).

Since the time picker window uses the [`IgxOverlayService`](overlay_main.md), in order for our custom theme to reach down the time picker window that we want to style, we will provide a specific outlet where the dialog window will be placed in the DOM when it is visible.

The items in our time picker **are not** descendants of our component `host` - they are currently being displayed in the default overlay outlet, at the end of the `document` body. Changing this is done by making use of the [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) property in the `overlaySettings`. The `outlet` controls where the overlay container should be rendered.

Here, we can pass a reference to the element where we'd like our container to be:

```html
<igx-time-picker #picker [overlaySettings]="{ outlet: element }">
</igx-time-picker>
```

```typescript
export class TimepickerStylingComponent {
    ...
    constructor(public element: ElementRef) {
    }
}
```

Now, the time picker's items are properly rendered **inside** of our component's host, which means that our custom theme will take effect:

>[!NOTE]
>In order to learn more about the various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay_main.md), you can take a look at this [link](overlay_main.md#styling).

#### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **theme** like that:

```scss
 @include igx-time-picker($my-time-picker-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-time-picker($my-time-picker-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($my-time-picker-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($my-time-picker-theme);
}
```

#### Demo
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-styling" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-styling" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="time-picker-styling" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
