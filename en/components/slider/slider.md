---
title: Angular Slider |  Ignite UI for Angular | Infragistics
_description: Learn how to configure a selection in a given range by using the thumb track with Angular Slider part of Ignite UI for Angular. Choose between singe and range slider types
_keywords: angular slider, igniteui for angular, infragistics
---

## Slider Overview and Configuration
<p class="highlight">The Ignite UI for Angular Slider component allows selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider types.</p>
<div class="divider"></div>

### Slider Demo
<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/slider-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

>[!WARNING]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for user interactions to work as expected.**.

To get started with the Slider component, first you need to import the **IgxSliderModule** in our **app.module.ts** file:

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

#### Discrete Slider
By default, the Ignite UI for Angular Slider is discrete. Discrete slider provides visualization of the current value with a numeric label (bubble).

You can use a discrete slider with predefined steps to track only meaningful values for the user. For example, the discrete slider can visualize rating from 0 to 5 or completion percentage from 0% to 100%.

In the following example, we define a discrete slider that displays values from 0% to 100%. The [`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) is set to 10. We also bind the slider [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) to a property in our component called "completion" to allow two way binding with an input component.

```html
<!--sample.component.html-->

<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>
<div class="igx-form-group">
    <input 
        igxInput 
        id="percentInput" 
        type="number" 
        [value]="task.completion" (blur)="updateTask($event.target)" />
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

If the sample is configured properly, dragging the slider thumb should update the input value and modifying the input value should update the slider value.

<div class="sample-container loading" style="height: 170px">
    <iframe id="slide-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Continuous Slider 
First, specify the slider type by setting the [`continuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#continuous) input to `true`.  
Next, define the minimum and maximum values using [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue). We also bind the slider [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) to a property in our component called "volume".

> [!NOTE]
> Continuous slider doesn't have step indicators over the track and visible thumb labels during interaction.

```html
<!--sample.component.html-->

<igx-slider
    id="slider" 
    [minValue]="10" 
    [maxValue]="90" 
    [continuous]=true 
    [(ngModel)]="volume">
</igx-slider>
<label igxLabel for="slider">Volume: {{volume}}</label>
```

```typescript
// sample.component.ts 

// Set an initial value
public volume = 20;
```

If the sample is configured properly, dragging the slider thumb should update the label below and the slider value should be limited between the specified minimum and maximum values:

<div class="sample-container loading" style="height: 140px">
    <iframe id="slide-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

####Range Slider
To visualize a range filter for example, use a range slider. To achieve this, set the slider [`type`]({environment:angularApiUrl}/classes/igxslidercomponent.html#type) to [`RANGE`]({environment:angularApiUrl}/enums/slidertype.html#range). Next, we bind the slider value to an object of type PriceRange. That object has two properties for lower and upper range values.

```html
<!--sample.component.html-->

<igx-slider [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(ngModel)]="priceRange"></igx-slider>
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
    <iframe id="slide-sample-4-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

In some cases, values near to the minimum and maximum are not appropriate. You can further provide a useful range to limit the user choice along with setting [`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue). This can be done by setting [`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) and [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound). Now, the user will not be able to move the thumb in the range of 0 to 100 and in the range of 900 to 1000.

```html
<!--sample.component.html-->

<igx-slider [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(ngModel)]="priceRange" [lowerBound]="100" [upperBound]="900" ></igx-slider>
```

<div class="sample-container loading" style="height: 120px">
    <iframe id="slide-sample-5-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-5' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Let's add two inputs in addition and bind them to the lower and upper range slider values. Thus, we can visualize and modify current slider values.

```html
<!--sample.component.html-->

<div class="wrapper">
    <div class="igx-form-group">
        <input igxInput id="lowerInput" type="text" [ngModel]="priceRange.lower | currency" (blur)="updatePriceRange($event.target)" />
        <label igxLabel for="lowerInput">Lower price:</label>
    </div>
    <div class="igx-form-group">
        <input igxInput id="upperInput" type="text" [ngModel]="priceRange.upper | currency" (blur)="updatePriceRange($event.target)" />
        <label igxLabel for="upperInput">Upper price:</label>
    </div>
</div>
```

```typescript
// sample.component.ts

public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case "lowerInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
        }
        break;
      }
      case "upperInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(prevPriceRange.lower, event.value);
        }
        break;
      }
    }
}

```
If the sample is configured properly, the final result should look like that:

<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

#### Labels mode
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
    <iframe id="slide-sample-6-final-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-6' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-6-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

As we see from the sample above, setting `boundaries` is still a valid operation. Addressing [`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) and [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound), limits the range you can slide through.

#### lables templating
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

### API References
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)

###Additional Resources

* [Slider ticks](slider_ticks.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
