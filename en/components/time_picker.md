---
title: Time Picker Component
_description: Add the functionality to select a time from a dialog to your web application with Ignite UI for Angular Time Picker control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Time Picker components, Angular Time Picker controls
---

## Time Picker
<p class="highlight">The Ignite UI for Angular Time Picker component displays an input or a pop-up with spin sections that lets users pick time. It supports custom time formatting.</p>
<div class="divider"></div>

### Time Picker Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Ignite UI for Angular Time Picker, let's first import the **IgxTimePickerModule** in our **app.module.ts** file. Note that the IgxTimePicker is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### Default

To add time picker, in the template of our meeting component we can add the following code to get the default time picker:

```html
<!--meeting.component.html-->

<igx-time-picker ></igx-time-picker>
```
And there we have it:
<div class="sample-container loading" style="height:250px">
    <iframe id="time-picker-sample-1-iframe" src='{environment:demosBaseUrl}/time-picker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Setting value

We could set a value using the value input. Just add a date:

```typescript
public date: Date = new Date(Date.now());
```

Then use the `value` input in the template:

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

If we want to use a two-way data-binding, we could just use `ngModule` like this:

```html
<igx-time-picker [(ngModel)]="date"><</igx-time-picker>
```

#### Change delta and spin mode

If we want to change the delta of the items we should set the `itemsDelta` and for the spin mode we should use the `isSpinLoop`:

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Validation

We can set `minValue` and `maxValue` to limit the user. We also should handle the `onInvalidValueSelected` in order to notify the user if an invalid time is selected. Note
that the min/max values should follow the `format`:

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular/main';

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

public show(toast) {
    toast.show();
}

public onValidationFailed(timepicker){
    this.show(this.toast);
}
```

```html
<igx-time-picker format="HH:mm" [vertical]="true" [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
<igx-toast #toast message="Value must be between 09:00 and 18:00"></igx-toast>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API Summary
The following tables summarize some of the useful **igx-time-picker** component inputs, outputs and methods.

#### Inputs
The following inputs are available in the **igx-time-picker** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `okButtonLabel` | string | Renders OK button with custom name, which commits the selected time, and fill the timePicker input. By default `okButtonLabel` is set to `OK`. |
| `cancelButtonLabel` | string | Renders cancel button with custom name, which closes the dialog. By default `cancelButtonLabel` is set to `Cancel`. |
| `value` | Date | Gets/Sets the value of the timePicker. |
| `isDisabled` | boolean | Disable the timePicker. |
| `itemsDelta`| object | Gets/Sets the delta for hour and minute items. By default `itemsDelta` is set to `{hours:1, minutes:1}`. Note! This cannot be set run time. |
| `minValue` | string | Gets/Sets minimum value. It should follow the `format` of the timePicker. |
| `maxValue` | string | Gets/Sets maximum value. It should follow the `format` of the timePicker. |
| `vertical` | boolean | Gets/Sets the orientation of the timePicker. By default `vertical` is set to `false`. |
| `format` | string | Gets/Sets format of time while timePicker has no focus. By default `format` is set to `hh:mm tt`. Note! This cannot be set run time.
List of time-flags:
"h": hours field in 12-hours format without leading zero
"hh": hours field in 12-hours format with leading zero
"H": hours field in 24-hours format without leading zero
"HH": hours field in 24-hours format with leading zero
"m": minutes field without leading zero
"mm": minutes field with leading zero
"tt": 2 characters of string which represents AM/PM field |
| `isSpinLoop` | boolean | Determines the spin behavior. By default `isSpinLoop` is set to true. Note! This cannot be set run time. |

<div class="divider--half"></div>

#### Outputs
The following outputs are available in the **igx-time-picker** component:

| Name | Description |
| :--- | :--- |
| `onValueChanged` | Emitted when selection is made. The event contains the selected value. Returns `{newValue: Date}` |
| `onValidationFailed` | Emitted when an invalid value is being set. Returns `{timePicker: any, currentValue: Date, setThroughUI: boolean}` |
| `onOpen` | Emitted when a timePicker is being opened. |

#### Methods
The following methods are available in the **igx-time-picker** component:

| Signature | Return Type | Description |
| :--- | :--- | :--- |
-| `okButtonClick()` | `void` | If current value is valid selects it and closes the dialog. |
-| `cancelButtonClick()` | `void` | Closes the dialog without selecting the current value. |
-| `hoursInView()` | `string[]` | Returns an array of the hours currently in view. |
-| `minutesInView()` | `string[]` | Returns an array of the minutes currently in view. |
-| `ampmInView()` | `string[]` | Returns an array of the ampm currently in view. |
-| `scrollHourIntoView(item: string)` | `void` | Scrolls a hour item into view. |
-| `scrollMinuteIntoView(item: string)` | `void` | Scrolls a minute item into view. |
-| `scrollAmPmIntoView(item: string)` | `void` | Scrolls a period item into view. |


#### Getters
The following getters are available on the **igx-time-picker** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `displayTime` | `string` | Returns the displayed time. |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)