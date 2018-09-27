---
title: Time Picker Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners which is then mirrored in the input field. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Time Picker component, Angular Time Picker control, Time Picker, Angular Time Picker
---

## Time Picker
<p class="highlight">In following the design and functionality of the Date Picker, Ignite UI for Angular Time Picker component allows the user to select time from a dialog with spinners which is then mirrored in the input field.</p>
<div class="divider"></div>

### Time Picker Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Ignite UI for Angular Time Picker, let's first import the [**IgxTimePickerModule**]({environment:angularApiUrl}/classes/igxtimepickermodule.html) in our **app.module.ts** file. Note that the IgxTimePicker is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

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

To add time picker, in the template of our meeting component we can add the following code to get the default time picker:

```html
<!--meeting.component.html-->

<igx-time-picker ></igx-time-picker>
```

And there we have it:
<div class="sample-container loading" style="height:540px">
    <iframe id="timepicker-sample-1-iframe" src='{environment:demosBaseUrl}/timepicker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Setting value

We could set a value using the value input. Just add a date:

```typescript
public date: Date = new Date(Date.now());
```

Then use the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input in the template:

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

If we want to use a two-way data-binding, we could just use `ngModel` like this:

```html
<igx-time-picker [(ngModel)]="date"></igx-time-picker>
```

#### Change delta and spin mode

If we want to change the delta of the items we should set the [`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) and for the spin mode we should use the [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop):

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Validation

We can set [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) to limit the user input. We also should handle the [`onValidationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#onvalidationfailed) in order to notify the user if an invalid time is selected. Note that the min/max values should follow the [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format):

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Templating Input Group

We have seen how to make use of the  API (properties, events, methods) so that we configure the time picker per our requirements and interact with it programatically. Now we want to go further and customize its input group look.

To do that we need to decorate the nested ng-template inside the time picker with IgxTimePickerTemplate directive. ng-template context exposes the following members: [`openDialog`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#opendialog) method can be used to open the time picker dialog; `displayValue` property contains the formatted value; `value` contains the real value. You could use those by declaring a variables in the ng-template element.

In the following example we modify the default label "Time" add a second icon as suffix. Below the input group we're using a label to display the real time picker value:

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
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
* [IgxIconModule]({environment:angularApiUrl}/classes/igxiconmodule.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupModule]({environment:angularApiUrl}/classes/igxinputgroupmodule.html)
* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxPrefixDirective]({environment:angularApiUrl}/classes/igxprefixdirective.html)
* [IgxSuffixDirective]({environment:angularApiUrl}/classes/igxsuffixdirective.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerModule]({environment:angularApiUrl}/classes/igxtimepickermodule.html)
* [IgxTimePickerTemplateDirective]({environment:angularApiUrl}/classes/igxtimepickertemplatedirective.html)

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)