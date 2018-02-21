---
title: Slider Component
_description: Ignite UI for Angular Slider control provides a rich input for value selection and delivers consistent experience across browsers.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Slider components, Angular Slider controls
---

##Slider
<p class="highlight">The Ignite UI for Angular Slider component allows selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider types.</p>
<div class="divider"></div>

### Slider Demo
<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

###Usage
To get started with the Ignite UI for Angular Slider, let's first import the **IgxSliderModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxSliderModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxSliderModule],
    ...
})
export class AppModule {}
```

####Continuous Slider
Let's start with a simple continuous slider. First, specify the slider type by setting the `isContinuous` input to true. Next, define the minimum and maximum values using `minValue` and `maxValue`. We also bind the slider `value` to a property in our component called "volume".

> [!NOTE]
> Continuous slider does not display ticks and bubble label for the current value.

```html
<!--sample.component.html-->

<igx-slider id="slider" [minValue]="0" [maxValue]="100" [isContinuous]=true [(ngModel)]="volume" ></igx-slider>
<label igxLabel for="slider">Volume: {{volume}}</label>
```

```typescript
// sample.component.ts 

// Set an initial value
public volume = 20;
```

If the sample is configured properly, dragging the slider thumb should update the label below and the slider value should be limited between the specified minimum and maximum values:

<div class="sample-container loading" style="height: 140px">
    <iframe id="slide-sample-2-iframe" src='{environment:demosBaseUrl}/slider-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

####Discrete Slider
By default, the Ignite UI for Angular Slider is discrete. Discrete slider provides visualization of the current value with a numeric label (bubble).

You can use a discrete slider with predefined steps to track only meaningful values for the user. For example, the discrete slider can visualize rating from 0 to 5 or completion percentage from 0% to 100%.

In the following example, we define a discrete slider that displays values from 0% to 100%. The `step` is set to 10. We also bind the slider `value` to a property in our component called "completion" to allow two way binding with an input component.

```html
<!--sample.component.html-->

<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>
<div class="igx-form-group">
    <input igxInput id="percentInput" type="text" [value]="task.completion / 100 | percent" (blur)="updateTask($event.target)" />
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
    <iframe id="slide-sample-3-iframe" src='{environment:demosBaseUrl}/slider-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

####Range Slider
To visualize a range filter for example, use a range slider. To achieve this, set the slider `type` to `RANGE`. Next, we bind the slider value to an object of type PriceRange. That object has two properties for lower and upper range values.

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
    <iframe id="slide-sample-4-iframe" src='{environment:demosBaseUrl}/slider-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

In some cases, values near to the minimum and maximum are not appropriate. You can further provide a useful range to limit the user choice along with setting `minValue` and `maxValue`. This can be done by setting `lowerBound` and `upperBound`. Now, the user will not be able to move the thumb in the range of 0 to 100 and in the range of 900 to 1000.

```html
<!--sample.component.html-->

<igx-slider [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(ngModel)]="priceRange" [lowerBound]="100" [upperBound]="900" ></igx-slider>
```

<div class="sample-container loading" style="height: 120px">
    <iframe id="slide-sample-5-iframe" src='{environment:demosBaseUrl}/slider-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
    <iframe id="slide-sample-1-final-iframe" src='{environment:demosBaseUrl}/slider-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="slide-sample-1-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### API Summary
The following tables summarize some of the useful **igx-slider** component inputs and outputs.

#### SliderType
The following slider types are available in the **igx-slider** component:

| Name | Description |
| :--- | :---------- |
| `SLIDER` | Specify a slider with a single thumb. |
| `RANGE` | Specify a range slider with multiple thumbs, which can mark the range. |
<div class="divider--half"></div>

#### IRangeSliderValue

| Name | Type | Description |
| :--- | :--- | :---------- |
| `lower` | number | The lower value of the range slider. |
| `upper` | number | The upper value of the range slider. |
<div class="divider--half"></div>

#### Inputs
The following inputs are available in the **igx-slider** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `disabled` | boolean | Disables/enables the interactions with slider. |
| `isContinuous` | boolean | By default, `isContinuous` is false. When set to true, marks the slider as continuous. |
| `lowerBound` | number | Specifies the lower boundary of the slider value. If not set, it is the same as the `minValue`. |
| `maxValue` | number | Specifies the maximum slider value. |
| `minValue` | number | Specifies the minimum slider value. |
| `step` | number | Specifies the incremental/decremental step of the value when dragging the thumb. By default, the step is 1, and step should not be less or equal than 0. |
| `thumbLabelVisibilityDuration` | number | Specifies how long the thumbs labels are visible in milliseconds. By default, the duration is 750 milliseconds. |
| `type` | [SliderType](#slidertype) | Specifies the slider type - single or range. |
| `upperBound` | number | Specifies the upper boundary of the slider value. If not set, it is the same as the `maxValue`. |
| `value` | number\|[IRangeSliderValue](#irangeslidervalue) | Specifies the slider value. If the slider is of type `SLIDER`, the value is number. By default, if not set, the value is the same as `lowerBound`. If the slider type is `RANGE`, the value is an object containing lower and upper properties for the range values. By default, if not set, the lower value is the same as `lowerBound`. By default, if not set, the upper value is the same as `upperBound`.
<div class="divider--half"></div>

#### Outputs
The following outputs are available in the **igx-slider** component:

| Name | Description |
| :--- | :--- |
| `onValueChange`  | Emits an event when the user has stopped interacting with the thumb and the value has changed.  |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)