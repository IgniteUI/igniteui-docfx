---
title: Angular Slider |  Ignite UI for Angular | Infragistics
_description: Learn how to configure a selection in a given range by using the thumb track with Angular Slider part of Ignite UI for Angular. Choose between singe and range slider types
_keywords: angular slider, angular slider component, angular range slider component, angular range input component, angular ui components, igniteui for angular, infragistics
---

# Angular Slider Component Overview
<p class="highlight">The Ignite UI for Angular Slider is a form component which allows selection in a given range by moving a thumb along a track. The track can be defined as continuous or stepped and the slider can be configured so users can choose between single value and range (lower and upper value) slider types.</p>

## Angular Slider Example

<code-view style="height: 250px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-1" alt="Angular Slider Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Slider

To get started with the Ignite UI for Angular Slider component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](../general/getting-started.md) topic.

The next step is to import the `IgxSliderModule` in your **app.module.ts** file.

>[!WARNING]
>**This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**. It can be imported in the root module of the application in order for touch interactions to work as expected.**.

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxSliderModule } from 'igniteui-angular';
// import { IgxSliderModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSliderModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSliderComponent` as a standalone dependency, or use the [`IGX_SLIDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/slider/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_SLIDER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SLIDER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SLIDER_DIRECTIVES, FormsModule]
    /* or imports: [IgxSliderComponent, FormsModule] */
})
export class HomeComponent {
    public task: Task;
}
```

When using standalone components, [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) should be imported in the `app.config` file.

```typescript
//app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HammerModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HammerModule),
    provideRouter(appRoutes)
  ],
};
```

Now that you have the Ignite UI for Angular Slider module or directives imported, you can start using the `igx-slider` component.

## Using the Angular Slider

### Discrete Slider
By default, the Slider Component is set to discrete type. A discrete slider provides a visualization of the current value with a numeric label (bubble). The bubble can be shown upon hovering on the slider thumb.  
You can also use the slider with predefined steps to track only meaningful values for the user.  

In the following example, we define a discrete slider that displays values from 0% to 100% and the [`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) is set to 10% per increment/decrement.  
We also bind the slider [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) to a property in our component called "completion", using Angular [`ngModel`](https://angular.io/guide/built-in-directives#ngModel), to allow two way binding with an input component.

```html
<!--sample.component.html-->

<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>
<igx-input-group type="border">
    <input igxInput id="percentInput" type="number" [(ngModel)]="task.completion" />
    <label igxLabel for="percentInput">Task Completion</label>
    <igx-suffix>%</igx-suffix>
</igx-input-group>
```

```typescript
// sample.component.ts 
import { Component, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxSliderComponent } from 'igniteui-angular';
// import { IgxInputDirective, IgxSliderComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-sample',
    styleUrls: ['./sample.component.scss'],
    templateUrl: './sample.component.html'
})
export class SampleComponent {
    public task = {
        completion: 10
    };

    constructor() { }
}
```

We should now see two-way data binding between our two components.


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-3" >
</code-view>


### Continuous Slider
First, specify the slider type by setting the [`continuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#continuous) input to true. Next, define the minimum and maximum values using [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minValue) and [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxValue).  

> [!NOTE]
> Continuous slider doesn't have step indicators over the track and visible thumb labels during interaction.

```html
<!--sample.component.html-->

<igx-slider 
    id="slider" 
    [minValue]="0" 
    [maxValue]="100" 
    [continuous]=true 
    [(ngModel)]="volume">
    </igx-slider>
<label igxLabel for="slider">Volume: {{volume}}</label>
```

Lets also bind the slider [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) to a property in our component called "volume".

```typescript
// sample.component.ts 

// Set an initial value
public volume = 20;
```

If the sample is configured properly, dragging the slider thumb should update the label below and the slider value should be limited between the specified minimum and maximum values:


<code-view style="height: 140px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-2" >
</code-view>


### Range Slider
First, set the slider [`type`]({environment:angularApiUrl}/classes/igxslidercomponent.html#type) to [`RANGE`]({environment:angularApiUrl}/enums/slidertype.html#range). Next, we bind the slider value to an object with properties for `lower` and `upper` values. 

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000" 
    [(lowerValue)]="priceRange.lower"
    [(upperValue)]="priceRange.upper">
</igx-slider>

<igx-input-group type="border">
    <label igxLabel for="lowerRange">From</label>
    <igx-prefix>$</igx-prefix>
    <input igxInput id="lowerRange" type="number" [(ngModel)]="priceRange.lower" />
</igx-input-group>

<igx-input-group type="border">
    <label igxLabel for="upperRange">To</label>
    <igx-prefix>$</igx-prefix>
    <input igxInput id="upperRange" type="number" [(ngModel)]="priceRange.upper" />
</igx-input-group>
```

```typescript
// sample.component.ts
import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';
// import { IgxSliderType } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-sample',
  styleUrls: ['./sample.component.scss'],
  templateUrl: './sample.component.html'
})
export class SampleComponent {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
```


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-4" >
</code-view>

>[!NOTE]
> When using a slider of type RANGE, binding to `ngModel` will work only in the direction of updating the model from the slider. In order to use two-way binding for both values, you can take advantage of the `lowerValue` and `upperValue` bindings.

In some cases, values near to the minimum and maximum are not appropriate. You can further provide a useful range to limit the user choice along with setting [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minValue) and [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxValue). 
This can be done by setting [`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerBound) and [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperBound). Now, the user will not be able to move the thumb in the range of 0 to 100 and in the range of 900 to 1000.

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000"
    [(lowerValue)]="priceRange.lower"
    [(upperValue)]="priceRange.upper"
    [lowerBound]="100" 
    [upperBound]="900">
</igx-slider>
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-5" >
</code-view>


### Labels mode
We've seen only numbers in the thumbs so far, although there is another approach that you could use in order to present information - by using an array of primitive values.
>[!NOTE]
> Your array of primitive values should contains at least two values, otherwise `labelsView` won't be enabled.

Once we have the definition that corresponds to the preceding rule, we are ready to give it to the `labels` **input** property, which would handle our data by spreading it equally over the `track`. Now, label values represent every primitive value we've defined in our collection. They could be accessed at any time through the API by requesting either [lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel) or [upperLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperLabel).

>[!NOTE]
> Please take into account the fact that when [`labelsView`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labelsView) is enabled, your control over the [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxValue), [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minValue) and [`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) inputs will be taken. 

Another important factor is the way that the `slider` handles the update process when `labelsView` is enabled.
It simply operates with the `index(es)` of the colleciton, which respectively means that the `value`, `lowerBound` and `upperBound` **properties** control the `track` by following/setting them (`index(es)`).

```html
<!--sample.component.html-->
<igx-slider #slider3 [type]="sliderType" [labels]="labels" [lowerBound]="1" [upperBound]="5">
    <ng-template igxSliderThumbFrom let-value let-labels="labels">
        <span class="ellipsis">{{ labels[value.lower] }}</span>
    </ng-template>
    <ng-template igxSliderThumbTo let-value let-labels="labels">
        <span class="ellipsis">{{ labels[value.upper] }}</span>
    </ng-template>
</igx-slider>
```

```typescript
// sample.component.ts
public sliderType: SliderType = SliderType.RANGE;
public labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-6" >
</code-view>


As we see from the sample above, setting `boundaries` is still a valid operation. Addressing [`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) and [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound), limits the range you can slide through.

### Lables templating
During the showcase above, we've intentionally shown how we can provide our custom `label` template, by using both  [igxSliderThumbFrom]({environment:angularApiUrl}/interfaces/igxSliderThumbFrom.html) and [igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) directives. Intuitively we can assume that [igxSliderThumbFrom]({environment:angularApiUrl}/interfaces/igxSliderThumbFrom.html) corresponds to the  [lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel) and [igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) to the [upperLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperLabel). <br>
The [context]({environment:angularApiUrl}/classes/igxslidercomponent.html#context) here gives us implicitly a reference to the `value` **input** property and explicitly a reference to the `labels` **input** if `labelsView` is enabled.

```html
  <ng-template igxSliderThumbFrom let-value let-labels="labels">
    <span class="ellipsis">{{ labels[value.lower] }}</span>
  </ng-template>
  <ng-template igxSliderThumbTo let-value let-labels="labels">
      <span class="ellipsis">{{ labels[value.upper] }}</span>
  </ng-template>
```

## Slider Tick Marks & labels
**Slider tick marks**, provide a new and more appealing way for data visualization, like a particular timeframe, days of the week and more. With this new functionality, the users are not obliged to interact with the Angular Slider in order to see what data range is being represented. It is extremely flexible, with regards to the control over positioning and orientation of the **tick marks** and **tick labels**. The **ticks** can be turned **on/off**, as well as can be toggled between **primary**, **secondary** or **both**. In addition, this feature provides a way to turn **on/of** **primary**, **secondary** **tick labels** or both. **Tick labels** can change their rotation form **horizontal** to **vertical** (**top to bottom** (90) or **bottom to top** (-90)).

### Enable ticks
We can enable the **ticks** of the slider by setting the [`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showTicks) to **true**.    
Use [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryTicks) to set the number of primary ticks.  
Use [`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryTicks) to set the number of secondary ticks.

```html
<!--sample.component.html-->

<igx-slider 
    id="slider" 
    [maxValue]="100" 
    [step]="10"
    [showTicks]="true" 
    [primaryTicks]="3" 
    [secondaryTicks]="4">
</igx-slider>
```

```typescript
// sample.component.ts 

// Change slider type initial value
public type = SliderType.RANGE;
```


<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/discrete-slider-ticks-bottom" >
</code-view>



### Labels orientation and visibility.
In the following sample we disable all **secondary labels** by setting [`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryTickLabels) to **false**.  

```html
<igx-slider
    [step]="10"
    [type]="type"
    [maxValue]="100"
    [continuous]="true"
    [showTicks]="true"
    [primaryTicks]="3"
    [secondaryTicks]="4"
    [secondaryTickLabels]="false"
    [tickLabelsOrientation]="labelsOrientation">
</igx-slider>
```
We also rotate all viable labels by setting the [`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) to [`BottomToTop`]({environment:angularApiUrl}/enums/ticklabelsorientation.html)
```
```typescript
... 
{
    public type = SliderType.RANGE:
    public labelsOrientation = TickLabelsOrientation.BottomToTop;
}
...
```


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-ticks-bottomtotop-labels" >
</code-view>


### Ticks position
Let’s move on and see how to change the position of the **ticks**.

```html
<div class="slider-container">
    <igx-slider
        [maxValue]="20"
        [showTicks]="true"
        [secondaryTicks]="21"
        [primaryTickLabels]="false"
        [ticksOrientation]="ticksOrientation">
    </igx-slider>
</div>
```

The position change has come from the [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksOrientation) input, which is changed from **Bottom**(default) to **Mirror**. 
This mirrors the visualization of the **ticks** and displays them above and below the slider.

```typescript

  // The available options are: Top, Bottom and Mirror
  public ticksOrientation = TicksOrientation.Mirror;
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror" >
</code-view>


> [!NOTE]
> When the [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksOrientaion) is set to **Top** or **Mirror** and there are visible **tick labels** the **thumb label** is hidden intentionally. This prevents a bad user experience and overlapping between the two labels.

### Slider ticks with labels view
This example show how the tick labels and the thumb label works together.

```html
<igx-slider
    [labels]="labels"
    [showTicks]="true"
    [secondaryTicks]="3"
></igx-slider>
```
```typescript
  public type: SliderType = SliderType.RANGE;
  public labels = ["04:00", "08:00", "12:00", "16:00", "20:00", "00:00"];
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-timeframe" >
</code-view>


Here, the [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryTicks) input has not been set, because it won’t be reflected in any way. The **length** of the collection takes precedence over it. This does not mean that [`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryTicks) cannot be set. All **secondary ticks** will be empty (without any **labels**).

### Template labels
Lastly, we will see how we can provide a custom template for the **tick labels** and what the [`template context`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) provides.

```html
<igx-slider
    [showTicks]="true"
    [primaryTicks]="3"
    [secondaryTicks]="3">
    <ng-template igxSliderTickLabel let-value let-primary="isPrimary" let-idx="index">
        {{ tickLabel(value, primary, idx) }}
    </ng-template>
</igx-slider>
```
Applying [`IgxTickLabelTemplateDirective`]({environment:angularApiUrl}/classes/igxticklabeltemplatedirective.html) to the `ng-template` assigns the template over all **tick labels**. 

> [!NOTE]
> The [`context`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) executes per each tick.

Which means that it provides a reference to: 
  * each corresponding tick **value**
  * If that tick is **primary**.
  * **tick** index.
  * And the [`labels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labels) collection if we have such one. 

```typescript
  public tickLabel(value, primary, index) {
      if (primary) {
          return Math.round(value);
      }

      return value;
  }
```

In the **tickLabel** callback above, we are rounding the **value** of every **primary** tick. 


<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-tick-labels-template" >
</code-view>

## Styling

To customize the Slider, you first need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next, we have to create a new theme that extends the `slider-theme` and pass the parameters which we'd like to change. By providing just the `$track-color` or `$thumb-color` parameter, the theme will automatically generate all related colors for the track and thumb, and their various interaction states.

You can also override additional properties, such as tick colors and labels, for more precise control.

```scss
$custom-slider-theme: slider-theme(
  $thumb-color: #ff7400,
  $tick-label-color: #b246c2,
  $tick-color: #b246c2
);
```

The last step is to include the newly created component theme in our application.

```scss
@include css-vars($custom-slider-theme);
```

### Demo

This is the final result from applying our new theme.

<code-view style="height: 240px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-styling-sample" >
</code-view>

## API References
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-slider-theme)
* [SliderType]({environment:angularApiUrl}/variables/IgxSliderType-1.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)
* [TicksOrientation]({environment:angularApiUrl}/classes/IgxSliderComponent.html#ticksOrientation)
* [TickLabelsOrientation]({environment:angularApiUrl}/classes/IgxSliderComponent.html#tickLabelsOrientation)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
