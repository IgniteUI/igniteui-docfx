---
title: Radio and Radio Group
_description: With Ignite UI for Angular Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Radio Button components, Angular Radio Button controls, Angular Radio Group component, Angular Radio Group control
---

# Radio & Radio Group

## Radio Button
<p class="highlight">The Ignite UI for Angular Radio Button component allows the user to select a single option from an available set of options that are listed side by side.</p>

## Angular Radio & Radio Group Example

<code-view style="height: 90px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-sample-1" alt="Angular Radio & Radio Group Example">
</code-view>

<div class="divider--half"></div>

### Usage

To get started with the Radio Button component, first you have to import the `IgxRadioModule` inside your `AppModule` file:

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

Radio buttons can be displayed using the following code inside the component template:

```html
<igx-radio [(ngModel)]="selected" value="option1">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2">Option 2</igx-radio>
```

### Label

The `labelPosition` property can be used to change the default position of the label in the radio component. Users can choose between `before` and `after`. If not specified, the label will be placed after the radio button.

```html
<igx-radio [(ngModel)]="selected" value="option1" labelPosition="before">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2" labelPosition="before">Option 2</igx-radio>
```

<div class="sample-container loading" style="height: 90px">
    <iframe id="radio-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Properties
Let's enhance the previous sample by adding four radio buttons, each responsible for applying a certain color as a background. We will bind the backgroundColor property of a div element to the component's selectedColor property. You will notice that selectedColor also participates in a two way binding relation through the `NgModel` directive, therefore its value is updated each time the user selects a different radio button (color).

```typescript
// radiogroup.component.ts
...
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

<div [style.background-color]="selectedColor">
    ...
</div>
```

Pay attention that if you don't use the `NgModel` directive in a two-way data binding, you must import the `FormsModule` and add it to the NgModule's imports list.

The final result would be something like that:


<code-view style="height: 450px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-sample-2" >
</code-view>


## Styling

To get started with styling the radio buttons, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-radio-theme`]({environment:sassApiUrl}/index.html#function-igx-radio-theme) and accepts some of the default theme's parameters:


```scss
$custom-radio-theme: igx-radio-theme(
    $disabled-color: lightgray,
    $empty-color:  #345779,
    $fill-color: #2dabe8,
    $fill-color-hover: #2dabe8,
    $fill-hover-border-color: #2dabe8
);
```

### Using CSS variables 

The last step is to pass the custom radio theme in our application: 

```scss
@include igx-css-vars($custom-radio-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-radio($custom-radio-theme);
    }
}
```


<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-styling-sample" >
</code-view>

<div class="divider--half"></div>

## Radio Group
<p class="highlight">The Ignite UI for Angular Radio Group directive provides a grouping container that allows better control over the child radio components and **supports template-driven and reactive forms.**</p>
<div class="divider"></div>

### Demo

<code-view style="height: 260px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-group-sample" >
</code-view>

<div class="divider--half"></div>

### Usage

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

To get started, create an [`igxRadioGroup`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html) and add several [`igxRadio`]({environment:angularApiUrl}/classes/igxradiocomponent.html) components. 

Note that, setting a [`name`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html#name) property for the radio group is **mandatory**.

```html
<!--radio-group.component.html-->
<igx-radio-group name="fruitsRadioGroup">
    <igx-radio *ngFor="let fruit of fruits" value="{{fruit}}">
        {{fruit}}
    </igx-radio>
</igx-radio-group>
```

```typescript
// radio-group.component.ts
public fruits = ["Apple", "Mango", "Banana", "Orange"];
```

### Alignment
Use the [`alignment`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html#alignment) input property to change the orientation of the `igxRadio` components in the radio group. Users can choose between `horizontal` and `vertical`. By default the radio group alignment is horizontal.

```typescript
//sample.component.ts
import { RadioGroupAlignment } from "igniteui-angular";
...
public alignment = RadioGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->
<igx-radio-group [alignment]="alignment">
    <igx-radio [(ngModel)]="selected" value="London">London</igx-radio>
    <igx-radio [(ngModel)]="selected" value="New York">New York</igx-radio>
    <igx-radio [(ngModel)]="selected" value="Tokyo">Tokyo</igx-radio>
    <igx-radio [(ngModel)]="selected" value="Sofia">Sofia</igx-radio>
</igx-radio-group>
```


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-group-vertical" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxRadioGroupDirective]({environment:angularApiUrl}/classes/igxradiogroupdirective.html)
* [IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)
* [IgxRadioComponent Styles]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
