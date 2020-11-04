---
title: Radio and Radio Group
_description: With Ignite UI for Angular Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Radio Button components, Angular Radio Button controls, Angular Radio Group component, Angular Radio Group control
_language: kr
---

## Radio & Radio Group
<p class="highlight">The Ignite UI for Angular Radio Button component allows the user to select a single option from an available set of options that are listed side by side.</p>
<div class="divider"></div>

### Radio Button

#### Radio Button Demo
<div class="sample-container loading" style="height: 384px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/data-entries/radio-sample-2' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### Radio Button Usage

At its core the radio button component allows for a single option selection. The default styling is done according to the selection controls specification as per the Material Design guidelines.
To get started with the Ignite UI for Angular Radio, let's first import the `IgxRadioModule` in the **app.module.ts** file:

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

<div class="sample-container loading" style="height: 88px">
    <iframe data-src='{environment:demosBaseUrl}/data-entries/radio-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

#### Radio Button Properties
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

<div class="sample-container loading" style="height: 384px">
    <iframe data-src='{environment:demosBaseUrl}/data-entries/radio-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

### Radio Group
<p class="highlight">The Ignite UI for Angular Radio Group directive provides a grouping container that allows better control over the child [`igxRadio`]({environment:angularApiUrl}/classes/igxradiocomponent.html) components and supports template-driven and reactive forms.</p>
<div class="divider"></div>

#### Radio Group Demo
<div class="sample-container loading" style="height: 320px">
    <iframe id="radio-group-sample-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-group-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="radio-group-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### Radio Group Usage

The Radio Group Directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxRadioModule` in the **app.module.ts** file:

```typescript
// app.module.ts
...
import { IgxRadioModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
```
To get a started, create an [**igxRadioGroup**]({environment:angularApiUrl}/classes/igxradiogroupdirective.html) and add several [**igxRadio**]({environment:angularApiUrl}/classes/igxradiocomponent.html) components. 

Note that, setting the [`igx-radio-group`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html) [`name`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html#name) property is **mandatory**.

```html
<!--radio-group.component.html-->
<igx-radio-group name="fruitsRadioGroup">
    <igx-radio class="radio-sample" *ngFor="let fruit of fruits" value="{{fruit}}">
        {{fruit}}
    </igx-radio>
</igx-radio-group>
```

```typescript
// radio-group.component.ts
public fruits = ["Apple", "Mango", "Banana", "Orange"];
```

### API References
<div class="divider--half"></div>

* [IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)
* [IgxRadioGroupDirective]({environment:angularApiUrl}/classes/igxradiogroupdirective.html)
* [IgxRadioComponent Styles]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
