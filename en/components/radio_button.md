---
title: Radio Component
_description: With Ignite UI for Angular Radio Button control, developers can seamlessly present lists of options for users to select for better UI.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Radio Button components, Angular Radio Button controls
---

##Radio Button
<p class="highlight">The Ignite UI for Angular Radio Button component allows the user to select a single option from an available set of options that are listed side by side.</p>
<div class="divider"></div>

### Radio Button Demo
<div class="sample-container" style="height:300px">
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
import { IgxRadioModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {}
```
To get a simple radio button, add the following code inside the compnent template:

```html
<igx-radio>
    Simple radio button
</igx-radio>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container" style="height: 150px">
<iframe src='{environment:demosBaseUrl}/radio-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

###Properties
Radio buttons are only useful when added in a group.
So let's enhance the code above by adding four radio buttons, each responsible for applying a certain color as a backgroung. We will bind the backgroundColor property of the containing div element to the component's selectedColor peroprty. You will notice that selectedColor also participates in a two way binding through the NgModel directive, therefore its value is updated each time the user selects a different radio button (color).

```typescript
// radiogroup.component.ts
...
title = "Select Background";

public colors = ['Yellow', 'Red', "Green", "Transparent"];

public selectedColor: string = this.colors[3];

```

```html
<!--radiogroup.component.html-->

<h2>{{title}}</h2>
<div [style.background-color]="selectedColor">
    <igx-radio *ngFor="let color of colors" 
                name="color group" 
                checked="selectedColor" 
                [value] = "color" 
                [(ngModel)]="selectedColor">
        <div>{{color}}</div>
    </igx-radio>
</div>
```

Pay attention that before using the ngModel directive in a two-way data binding, you must import the FormsModule and add it to the NgModule's imports list.

Try it! The final result would be something like that:

<div class="sample-container" style="height: 300px">
<iframe src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### API Summary

####Inputs
The following inputs are available on the **igx-switch** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | bool | The value of the radio button. |

<div class="divider"></div>

####Outputs
The following outputs are available on the **igx-switch** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `change` | EventEmitter | Emits an event when the radio is clicked. 

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)








