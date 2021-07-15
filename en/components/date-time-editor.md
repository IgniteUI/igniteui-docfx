---
title: Date Time Editor Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Date Time Editor Directive allows the user to handle date and time using a Date Object.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Date Time Editor Directive, Angular Date Time Directive control, Date Time Editor, Angular Date Time Directive
---

# Date Time Editor Directive
<p class="highlight">The Ignite UI for Angular Date Time Editor Directive allows the user to set and edit the date and time in a chosen input element. The user can edit the date or time portion, using an editable masked input. Additionally, one can specify a desired display and input format, as well as min and max values to utilize validation.</p>
<div class="divider"></div>

## Angular Date Time Editor Directive Example

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datetime-basic" alt="Angular Date Time Editor Directive Example">
</code-view>

<div class="divider--half"></div>


## Usage
To get started with the Ignite UI for Angular Date Time Directive, let's first import the `IgxDateTimeEditorModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDateTimeEditorModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDateTimeEditorModule ],
    ...
})
export class AppModule {}
```

To use an input as a date time editor, set an igxDateTimeEditor directive and a valid date object as value. In order to have complete editor look and feel, wrap the input in an [input group](input-group.md). This will allow you to not only take advantage of the following directives [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html), [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix), [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html), but will cover common scenarios when dealing with form inputs as well.

### Binding 
A basic configuration scenario setting a Date object as a [`value`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#value):
```typescript
public date = new Date();
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [value]="date" />
</igx-input-group>
```

To create a two-way data-binding, set an `ngModel`:
```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [(ngModel)]="date"/>
</igx-input-group>
```
<div class="divider--half"></div>

#### <a name="iso">Binding to ISO strings</a>
The `IgxDateTimeEditorDirective` accepts an [`ISO 8601`](https://tc39.es/ecma262/#sec-date-time-string-format) strings.

The string can be a full `ISO` string, in the format `YYYY-MM-DDTHH:mm:ss.sssZ` or it could be separated into date-only and time-only portions.

##### Date-only
If a date-only string is bound to the directive, it needs to follow the format - `YYYY-MM-DD`. This applies only when binding a string value to the directive, the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) is still used when typing values in the editor and it does not have to be in the same format. Additionally, when binding a date-only string, the directive will prevent time shifts by coercing the time to be `T00:00:00`.

##### Time-only
Time-only strings are normally not defined in the `ECMA` specification, however to allow the directive to be integrated in scenarios which require time-only solutions, it supports the 24 hour format - `HH:mm:ss`. The 12 hour format is not supported. Please also note that this applies for _bound values only_.

##### Full ISO string
If a full `ISO` string is bound, the directive will parse it only if all elements required by [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) are provided.

All falsy values, including `InvalidDate` will be parsed as `null`. Incomplete date-only, time-only, or full `ISO` strings will be parsed as `InvalidDate`.

### Keyboard Navigation
Date Time Editor Directive has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Arrow Left</kbd> / <kbd>Right</kbd> - navigates between date sections. On <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Right</kbd> it goes to the end of the section. If already there it goes to the end of next section if any. It works in a similar fashion in the opposite direction.

- <kbd>Arrow Up</kbd> / <kbd>Down</kbd> - increment/decrement date portions. See related [`spinLoop`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#spinloop)

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - set the current day and time in the editor.

## Examples

### Display and input format
The [`IgxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) supports different display and input formats.

It uses Angular's [`DatePipe`](https://angular.io/api/common/DatePipe), which allows it to support predefined format options, such as `shortDate` and `longDate`. It can also accept a constructed format string using characters supported by the `DatePipe`, e.g. `EE/MM/yyyy`. Notice that formats like `shortDate`, `longDate`, etc., can be used as [`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayformat) only. Also, if no [`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayformat) is provided, the editor will use the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) as its [`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayformat).

To set a specific input format, pass it as a string to the IgxDateTimeEditor directive. This will set both the expected user input format and the [mask](mask.md) for the editor. Additionally, the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) is locale based, so if none is provided, the editor will default to the one used by the browser.

```html
<igx-input-group>
    <input type="text" igxInput [displayFormat]="'shortDate'" [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

The table bellow shows formats that are supported by the directive's [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat):
| Format | Description |
|:-------:|:-----------|
| `d` | Date, will be coerced with a leading zero while editing. |
| `dd` | Date with an explicitly set leading zero. |
| `M` | Month, will be coerced with a leading zero while editing. |
| `MM` | Month with an explicitly set leading zero. |
| `yy` | Short year format. |
| `yyyy` | Full year format. |
| `h` | Hours in 12-hour format, will be coerced with a leading zero while editing. |
| `hh` | Hours in 12-hour format with an explicitly set leading zero. |
| `H` | Hours in 24-hour format, will be coerced with a leading zero while editing. |
| `HH` | Hours in 24-hour format, with an explicitly set leading zero. |
| `m` | Minutes, will be coerced with a leading zero while editing. |
| `mm` | Minutes with an explicitly set leading zero. |
| `tt` | AM/PM section for 12-hour format. |

> Note: The `IgxDateTimeEditorDirective` directive supports IME input. When typing in an Asian language input, the control will display input method compositions and candidate lists directly in the control’s editing area, and immediately re-flow surrounding text as the composition ends.

### Min max value
You can specify [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxvalue) properties to restrict input and control the validity of the ngModel.
```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
``` 

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" [(ngModel)]="date"/>
</igx-input-group>

```
The [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minvalue) and [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxvalue) inputs can also be of type `string`, see [Binding to ISO strings](#iso).

### <a name="increment-decrement">Increment and decrement </a>
[`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive exposes public [`increment`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#decrement) methods. They increment or decrement a specific [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) of the currently set date and time and can be used in a couple of ways.

In the first scenario, if no specific [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) is passed to the method, a default [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) will increment or decrement, based on the specified [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) and the internal directive implementation. In the second scenario, you can explicitly specify what [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) to manipulate as it may suite different requirements.
Also, both methods accept an optional `delta` parameter of type `number` which can be used to set the increment/decrement step.

You may compare both in the following sample:
<code-view style="height:150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datetime-advanced" >
</code-view>

<div class="divider--half"></div>

Additionally, `spinDelta` is an input property of type [`DatePartDeltas`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) and it can be used to apply a different delta to each date time segment. It will be applied when spinning with the keyboard, as well as when spinning with the [`increment`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#decrement) methods, as long as they don't have the `delta` parameter provided since it will take precedence over `spinDelta`.

### In Angular Forms
The Date Time Editor Directive supports all of the form directives from the core FormsModule [`NgModel`](https://angular.io/api/forms/NgModel) and [`ReactiveFormsModule`](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). This also includes the [Forms `Validators`](https://angular.io/api/forms/Validators) functions. The following example illustrates the use of the `required` validator in a Template-driven Form.

> Note: If needed, you can revert back to a valid state by handling the `validationFailed` event and changing the `newValue` property of the available arguments.

Template-driven form example:
```html
<form>
    <igx-input-group>
        <input igxInput type="text" [(ngModel)]="date" name="form" required
            (valueChanged)="onValueChanged($event)" (validationFailed)="onValidationFailed($event)"
            [igxDateTimeEditor]="'dd/MM/yyyy'" [minValue]="minDate" [maxValue]="maxDate" [isSpinLoop]="false" />
    </igx-input-group>
</form>
<div class="divider--half"></div>
```

### Text Selection
You can force the component to select all of the input text on focus using [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html). Find more info on [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) at [Label & Input](label-input.md#focus--text-selection).

```html
<igx-input-group>
    <input igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [igxTextSelection]="true"/>
</igx-input-group>
```

> NOTE: In order for the component to work properly, it is crucial to set [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) after the [`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive. The reason for this is both directives operate on the input `focus` event so text selection should happen after the mask is set.

## Styling 
For details check out the [`Input Group styling guide`](input-group.md#styling).
<div class="divider--half"></div>

## API References
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

<div class="divider--half"></div>


## Additional Resources
Related topics:
* [Mask](mask.md)
* [Label & Input](label-input.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)


Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
