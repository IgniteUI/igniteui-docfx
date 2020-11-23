---
title: Angular Slider |  Ignite UI for Angular | Infragistics
_description: Learn how to configure a selection in a given range by using the thumb track with Angular Slider part of Ignite UI for Angular. Choose between singe and range slider types
_keywords: angular slider, igniteui for angular, infragistics
---

# Slider Overview and Configuration
<p class="highlight">The Ignite UI for Angular Slider component allows selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider types.</p>
<div class="divider"></div>

## Angular Slider Example
<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/slider-sample-1" onload="onSampleIframeContentLoaded(this);" alt="Angular Slider Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

>[!WARNING]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for user interactions to work as expected.**.

To get started with the Slider component, you need to import the **IgxSliderModule** in to the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxSliderModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSliderModule],
    ...
})
export class AppModule {}
```

### Discrete Slider
By default, the Slider Component is set to discrete type. A discrete slider provides a visualization of the current value with a numeric label (bubble). The bubble can be visible all the time or it can be shown upon hovering on the slider thumb.  
You can also use the slider with predefined steps, for example, to track only meaningful values for the user.  

In the following example, we define a discrete slider that displays values from 0% to 100% and the [`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) is set to 10.  
We also bind the slider [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) to a property in our component called "completion" to allow two way binding with an input component.

```html
<!--sample.component.html-->

<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>
<div class="igx-form-group">
    <input igxInput id="percentInput" type="text" [value]="task.completion" (blur)="updateTask($event.target)" />
    <label igxLabel for="percentInput">Task Completion</label>
</div>
```

```typescript
// sample.component.ts 

public task: Task = new Task(10);

updateTask(event) {
    if (!isNaN(parseInt(event.value, 10))) {
        this.task.completion = event.value;
    } else {
        event.value = this.task.completion;
    }
}

...

class Task {
  constructor (
      public completion: number
  ) {
  }
}
```

We should now see two-way data binding between our two components.

<div class="sample-container loading" style="height: 160px">
    <iframe id="slide-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Continuous Slider
First, specify the slider type by setting the [`continuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#continuous) input to true. Next, define the minimum and maximum values using [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue).  

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

<div class="sample-container loading" style="height: 140px">
    <iframe id="slide-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Range Slider
First, set the slider [`type`]({environment:angularApiUrl}/classes/igxslidercomponent.html#type) to [`RANGE`]({environment:angularApiUrl}/enums/slidertype.html#range). Next, we bind the slider value to an object of type PriceRange. 
That object has two properties for lower and upper range values.

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000" 
    [(ngModel)]="priceRange">
    </igx-slider>
```

```typescript
// sample.component.ts

public sliderType = SliderType;
public priceRange: PriceRange = new PriceRange(200, 800);

...

class PriceRange {
  constructor(
    public lower: number,
    public upper: number,
  ) {
  }
}

```

<div class="sample-container loading" style="height: 120px">
    <iframe id="slide-sample-4-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

In some cases, values near to the minimum and maximum are not appropriate. You can further provide a useful range to limit the user choice along with setting [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue). 
This can be done by setting [`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) and [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound). Now, the user will not be able to move the thumb in the range of 0 to 100 and in the range of 900 to 1000.

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000" 
    [(ngModel)]="priceRange" 
    [lowerBound]="100" 
    [upperBound]="900">
    </igx-slider>
```

<div class="sample-container loading" style="height: 120px">
    <iframe id="slide-sample-5-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-5' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Labels mode
We've seen only numbers in the thumbs so far, although there is another approach that you could use in order to present information - by using an array of primitive values.
>[!NOTE]
> Your array of primitive values should contains at least two values, otherwise `labelsView` won't be enabled.

Once we have the definition that corresponds to the preceding rule, we are ready to give it to the `labels` **input** property, which would handle our data by spreading it equally over the `track`. Now, label values represent every primitive value we've defined in our collection. They could be accessed at any time through the API by requesting either [lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel) or [upperLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperLabel).

>[!NOTE]
> Please take into account the fact that when [`labelsView`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labelsviewenabled) is enabled, your control over the [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue), [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) and [`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) inputs will be taken. 

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

<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-6-final-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-6' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-6-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-6-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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
We can enable the **ticks** of the slider by setting the [`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) to **true**.    
Use [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) to set the number of primary ticks.  
Use [`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) to set the number of secondary ticks.

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

<div class="sample-container loading" style="height: 140px">
    <iframe id="discrete-slider-ticks-bottom-iframe" data-src='{environment:demosBaseUrl}/interactions/discrete-slider-ticks-bottom' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="discrete-slider-ticks-bottom-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="discrete-slider-ticks-bottom-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


### Labels orientation and visibility.
In the following sample we disable all **secondary labels** by setting [`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) to **false**.  

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

<div class="sample-container loading" style="height: 240px">
    <iframe id="slider-ticks-bottomtotop-labels-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-ticks-bottomtotop-labels' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-ticks-bottomtotop-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-ticks-bottomtotop-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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

The position change has come from the [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) input, which is changed from **Bottom**(default) to **Mirror**. 
This mirrors the visualization of the **ticks** and displays them above and below the slider.

```typescript

  // The available options are: Top, Bottom and Mirror
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> [!NOTE]
> When the [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) is set to **Top** or **Mirror** and there are visible **tick labels** the **thumb label** is hidden intentionally. This prevents a bad user experience and overlapping between the two labels.

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

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-timeframe-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-timeframe' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-timeframe-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-timeframe-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Here, the [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) input has not been set, because it won’t be reflected in any way. The **length** of the collection takes precedence over it. This does not mean that [`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) cannot be set. All **secondary ticks** will be empty (without any **labels**).

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

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-tick-labels-template-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-tick-labels-template' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-tick-labels-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-tick-labels-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Styling
Lets change the default styles of our slider component by creating a new theme for it.

### Demo
This is the final result from applying our new theme.

<div class="sample-container loading" style="height: 240px">
    <iframe id="slider-styling-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Creating a component theme
First we need to [create a custom palette](../themes/palette.md)
Now let's create our component theme and pass that custom palette to it.
```scss
// In app-slider-styling.component.scss

// Create slider theme.
$custom-slider-theme: igx-slider-theme(
    $track-color: #ff7400,
    $track-hover-color: #ff7400,

    $thumb-color: #ff7400,

    $base-track-color: #ddd,
    $base-track-hover-color: #ccc,

    $tick-label-color: #b246c2,
    $tick-label-color-tall: #ff7400,

    $tick-color: #b246c2,
    $tick-color-tall: #ff7400,
);
```

#### Applying the component theme
Now to apply the component theme all that's left is to include `igx-css-vars` mixin and pass the `$custom-slider-theme` map.
```scss
// In app-slider-styling.component.scss

// Pass our custom-slider-theme to `igx-css-vars` mixin.
// The `:host` here makes sure that all the theming will affect only this slider component.
:host {
  @include igx-css-vars($custom-slider-theme);
}
```

## API References
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)
* [TicksOrientation]({environment:angularApiUrl}/enums/ticksorientation.html)
* [TickLabelsOrientation]({environment:angularApiUrl}/enums/ticklablesorientation.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
