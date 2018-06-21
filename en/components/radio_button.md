---
title: Radio Component
_description: With Ignite UI for Angular Radio Button control, developers can seamlessly present lists of options for users to select for better UI.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Radio Button components, Angular Radio Button controls
---

##Radio Button
<p class="highlight">The Ignite UI for Angular Radio Button component allows the user to select a single option from an available set of options that are listed side by side.</p>
<div class="divider"></div>

### Radio Button Demo
<div class="sample-container" style="height: 384px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

At its core the radio button component allows for a single option selection. The default styling is done according to the selection controls specification as per the Material Design guidelines.
To get started with the Ignite UI for Angular Radio, let's first import the **IgxRadioModule** in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxRadioModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {
    public selected: any;
}
```
To get a started with some radio buttons, add the following code inside the component template:

```html
<igx-radio [(ngModel)]="selected" value="option1">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2">Option 2</igx-radio>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container" style="height: 88px">
    <iframe src='{environment:demosBaseUrl}/radio-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

###Properties
Radio buttons are only useful when added in a group. Let's enhance the code above by adding four radio buttons, each responsible for applying a certain color as a background. We will bind the backgroundColor property of a div element to the component's selectedColor property. You will notice that selectedColor also participates in a two way binding relation through the NgModel directive, therefore its value is updated each time the user selects a different radio button(color).

```typescript
// radiogroup.component.ts
...
public title = "Select Background";

public colors = [{
    hex: "#f06a2f",
    name: "Carrot"
}, {
    hex: "#ff134a",
    name: "Watermelon"
}, {
    hex: "#7bc96f",
    name: "Grass"
},
{
    hex: "transparent",
    name: "No color"
}];

public selectedColor: string = this.colors[3].hex;
```

```html
<!--radiogroup.component.html-->
<igx-radio *ngFor="let color of colors" 
    name="color" 
    [value]="color.hex" 
    [(ngModel)]="selectedColor">
    {{color.name}}
</igx-radio>

<div class="box" [style.background-color]="selectedColor"></div>
```

Pay attention that before using the ngModel directive in a two-way data binding, you must import the FormsModule and add it to the NgModule's imports list.

Try it! The final result would be something like that:

<div class="sample-container" style="height: 384px">
    <iframe src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### API Summary

####Inputs
The following inputs are available on the **igx-radio** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `@Input()` id |    string   | The unique `id` attribute to be used for the radio button. If you do not provide a value, it will be auto-generated. |
| `@Input()` labelId |    string   | The unique `id` attribute to be used for the radio button label. If you do not provide a value, it will be auto-generated. |
| `@Input()` name |  string | The `name` attribute to be used for the radio button. |
| `@Input()` value | any | The value to be set for the radio button. |
| `@Input()` tabindex | number | Specifies the tabbing order of the radio button. |
| `@Input()` checked | boolean | Specifies the checked state of the radio button. |
| `@Input()` required | boolean | Specifies the required state of the radio button. |
| `@Input()` disabled | boolean | Specifies the disabled state of the radio button. |
| `@Input()` disableRipple | boolean | Specifies the whether the ripple effect should be disabled for the radio button. |
| `@Input()` labelPosition | string or enum RadioLabelPosition | Specifies the position of the text label relative to the radio button element. Possible values are "before" and "after". |
| `@Input("aria-labelledby")` ariaLabelledBy | string | Specify an external element by id to be used as label for the radio button. |
<div class="divider"></div>

####Outputs
The following outputs are available on the **igx-radio** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `@Output()` change | EventEmitter<IChangeRadioEventArgs> | Emitted when the radio button checked value changes. |
<div class="divider"></div>

####Methods
The following methods are available on the **igx-radio** component:
| Name | Description|
| :--- | :--- |
| select | Selects the radio button. |
<div class="divider"></div>

###Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
