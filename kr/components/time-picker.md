---
title: Time Picker Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners which is then mirrored in the input field. Try it now
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Time Picker component, Angular Time Picker control, Time Picker, Angular Time Picker
_language: kr---

## Angular Time Picker Overview
<p class="highlight">In following the design and functionality of the Date Picker, Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners, which is then mirrored in the input field. In addition, the user can edit the time value, using an editable masked input with a dropdown.</p>
<div class="divider"></div>

<p>As one of the most commonly used UI components for today’s web applications, the Angular Time Picker, also known as Angular Time Picker, provides developers with a variety of features that provide with the ability to customize the component to create the best UX and UI experience for the users to interact with the component. There are different built-in templates for displaying a clock button, as well as features like validation, custom time formatting, and more. </p>

### Time Picker Example
In general, users can enter a preferred time either through text input or by choosing a time value from an Angular Time Picker dropdown. The basic Angular Time Picker example below shows how users can easily enter the value with the help of the dropdown or by using the keyboard. 

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" >
</code-view>

<div class="divider--half"></div>

### How To Use Angular Time Picker Component With Ignite UI

To get started with the Ignite UI for Angular Time Picker, let's first import the `IgxTimePickerModule` in the **app.module.ts** file. Note that the IgxTimePicker is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### Default

To add the time picker, use the following code:

```html
<!--meeting.component.html-->
<igx-time-picker ></igx-time-picker>
```

And here's our templated Ignite UI for Angular Time Picker:

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" >
</code-view>

<div class="divider--half"></div>

#### Setting value

Set a value using the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input. Just add a date:

```typescript
public date: Date = new Date(Date.now());
```

Then use the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input in the template:

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

And there we have it:

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-2" >
</code-view>

<div class="divider--half"></div>

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


The result is as follows:

<code-view style="height: 580px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-8" >
</code-view>

<div class="divider--half"></div>

#### Change delta and spin mode

To change the delta of the items, set the [`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) input. To change the spin mode, use the [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) input:

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

And there we have it:

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-3" >
</code-view>

<div class="divider--half"></div>

#### Validation

Set [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) to limit the user input. You can handle the [`onValidationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#onvalidationfailed) in order to notify the user if an invalid time is selected. 

>Note that the min/max values should follow the [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format):

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

public min: string = "09:00";
public max: string = "18:00";

@ViewChild("toast")
private toast: ElementRef;    

public open(toast) {
    toast.open();
}

public onValidationFailed(timepicker){
    this.open(this.toast);
}
```

```html
<igx-time-picker format="HH:mm" [vertical]="true" [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
<igx-toast #toast message="Value must be between 09:00 and 18:00"></igx-toast>
```

And there we have it:

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" >
</code-view>

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
The user now will be able to type, edit or delete the time value in the input in both 12- and 24-hour formats. 

**Dropdown Mode Keyboard Navigation**

When the mouse caret is positioned at the hours, minutes or AM/PM placeholders and pressing the <kbd>Up</kbd> arrow key or using `Mouse Wheel Up`, the hours/minutes are increased. Pressing the <kbd>Down</kbd> arrow key or `Mouse Wheel Down` is used for the reversed operation. 

Note that if the time picker's [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) or [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) are set and [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) is false, the time scrolling will stop at the specified min/max hour/minute value.

**Keyboard Operations:**

* To `Open`the dropdown, there are the following options - click on the clock icon, press <kbd>Space</kbd> or combination of <kbd>Alt</kbd> + <kbd>Down</kbd> keys.
* To `Accept` and `Close` the dropdown press <kbd>Escape</kbd> or <kbd>Enter</kbd> key.
* Clicking with the mouse outside of the time picker will also `Accept` the value entered and `Close` the dropdown.
* If the dropdown is not opened and a new value is typed, to `Accept` it - click outside of the time picker or press <kbd>Tab</kbd> to move the focus.

And there we have it:

<code-view style="height:540px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-dropdown" >
</code-view>

<div class="divider--half"></div>

#### Templating Input Group

We have seen how to make use of the  API (properties, events, methods) so that we configure the time picker per our requirements and interact with it programmatically. Now we want to go further and customize its input group look.

To do that, we need to decorate the nested ng-template inside the time picker with IgxTimePickerTemplate directive. ng-template context exposes the following members: [`openDialog`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#opendialog) method can be used to open the time picker dialog; [`displayTime`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#displaytime) property contains the formatted value; [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) contains the real value. You could use those by declaring a variables in the ng-template element.

In the following example we modify the default label "Time" and add a second icon as suffix. Below the input group we're using a label to display the real time picker value:

```html
<igx-time-picker [value]="date">
    <ng-template igxTimePickerTemplate let-openDialog="openDialog" let-value="value" let-displayTime="displayTime">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>home</igx-icon>
            </igx-prefix>
            <label igxLabel>Home Time </label>
            <input igxInput [value]="displayTime" />
            <igx-suffix>
                <igx-icon>access_alarm</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-time-picker>
```
```typescript
public date: Date = new Date(Date.now());
```

And there we have it:

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" >
</code-view>


#### Templating Input Group - dropdown mode

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
public today: Date = new Date(Date.now());
```

Note that `displayTime` property, exposed in the template context, is **read-only**. In the example above it is used in combination with the input element **blur** event in order to achieve two-way binding.

```typescript
public today: Date = new Date(Date.now());

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

And there we have it, a re-templated Ignite UI for Angular Time Picker with dropdown and two-way binding support:

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-6" >
</code-view>


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
    timePicker.value = new Date(Date.now());
    timePicker.close();
}
...
```

The result is as follows:

<code-view style="height: 580px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-7" >
</code-view>

<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent Styles]({environment:sassApiUrl}/index.html#function-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-overlay-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)