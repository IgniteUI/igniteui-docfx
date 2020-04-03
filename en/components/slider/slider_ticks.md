---
title: Tick Marks | Thumb Track |  Ignite UI for Angular | Infragistics
_description: Learn how to configure the Ignite UI for Angular slider tick marks, and improve your data visualization by using angular slider step with convenient thumb track
_keywords: tick marks, igniteui for angular, infragistics
---

## Slider Tick Marks
**Slider tick marks**, provide a new and more appealing way for data visualization, like a particular timeframe, days of the week and more. With this new functionality, the users are not obliged to interact with the Angular Slider in order to see what data range is being represented. It is extremely flexible, with regards to the control over positioning and orientation of the **tick marks** and **tick labels**. The **ticks** can be turned **on/off**, as well as can be toggled between **primary**, **secondary** or **both**. In addition, this feature provides a way to turn **on/of** **primary**, **secondary** **tick labels** or both. **Tick labels** can change their rotation form **horizontal** to **vertical** (**top to bottom** (90) or **bottom to top** (-90)).

### Usage
Before we start, make sure that you have gone through the **Ignite UI for Angular** [getting started](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html) section.

Once the set up is ready, the **IgxSliderModule** needs to be included in the **app.module.ts** file.

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
#### Bottom Ticks
Let’s start with something simple and enable slider **ticks** below the slider and show every **even** number within a particular sequence.

```html
<!--sample.component.html-->

<igx-slider id="slider" [maxValue]="50" [step]="10" [type]="type" [showTicks]="true" [primaryTicks]="6" [secondaryTicks]="4"></igx-slider>
```

```typescript
// sample.component.ts 

// Change slider type initial value
public type = SliderType.RANGE;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="discrete-slider-ticks-bottom-iframe" data-src='{environment:demosBaseUrl}/interactions/discrete-slider-ticks-bottom' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="discrete-slider-ticks-bottom-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Let’s look at the ticks below the slider. Firstly, the whole feature is enabled by setting [`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) to **true**. Then setting [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) to six, because the rendering starts from 0, defines and spreads all primary **ticks** evenly below the slider track. [`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) set up works a little differently. It defines four secondary ticks between two **primary** ones and if the calculation is right, 21 **ticks** will be rendered in total.



#### Disable secondary ticks and rotate primary ones.
In the following sample all **secondary labels** are disabled and all **primary labels** rotated. 

```html
<igx-slider
    [maxValue]="50"
    [continuous]="true"
    [type]="type"
    [showTicks]="true"
    [primaryTicks]="6"
    [secondaryTicks]="4"
    [secondaryTickLabels]="false"
    [tickLabelsOrientation]="labelsOrientation"
    [(ngModel)]="priceRange"></igx-slider>
```

To expand the scenario, the **value** has been two-way data-bound to two inputs.
```html
  <div class="wrapper">
      <igx-input-group>
          <input igxInput id="lowerPrice" type="text" [ngModel]="priceRange.lower | currency" />
          <label igxLabel for="lowerPrice">Lower price:</label>
      </igx-input-group>
      <igx-input-group>
          <input igxInput id="upperPrice" type="text" [ngModel]="priceRange.upper | currency" />
          <label igxLabel for="upperPrice">Upper price:</label>
      </igx-input-group>
  </div>

```
```typescript
... {
public type = SliderType.RANGE:
public labelsOrientation = TickLabelsOrientation.BottomToTop;
public priceRange: PriceRange = new PriceRange(20, 40);
...
}

export class PriceRange {
    constructor(public lower: number, public upper: number) {}
}

```

<div class="sample-container loading" style="height: 240px">
    <iframe id="slider-ticks-bottomtotop-labels-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-ticks-bottomtotop-labels' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-ticks-bottomtotop-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Following the example above, you can quickly determine that setting [`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) to **false** disables all **secondary tick labels**, and passing **BottomToTop**(-90) property of the [`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) enumeration to the [`tickLabelsOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticklabelsorientation) input, rotates the labels.

#### Disable primary ticks and change their orientation
Let’s move on and see how to change the orientation of the **ticks** and their **primary** visibility.

```html
<button igxButton="fab" igxRipple="white" (click)="decrease()">
    <igx-icon fontSet="material">keyboard_arrow_left</igx-icon>
</button>
<div class="slider-container">
    <igx-slider
        [maxValue]="20"
        [showTicks]="true"
        [secondaryTicks]="21"
        [secondaryTickLabels]="false"
        [ticksOrientation]="ticksOrientation"></igx-slider>
</div>
<button igxButton="fab" igxRipple="white" (click)="increase()">
    <igx-icon fontSet="material">keyboard_arrow_right</igx-icon>
</button>
```
The two buttons above are used just to control/update slider's **value**, but let's focus on the **ticks** orientation manipulation. 

```typescript
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The orientation change has come from the [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) input, which is changed from **Bottom**(default) to **Mirror**. This mirrors the visualization of the **ticks** and displays them above and below. 

#### Top ticks with visible labels
There is a scenario where the **thumb label** is hidden intentionally, and it is when [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) is set to **Top** or **Mirror** and there are visible **tick labels**. This prevents a bad user experience and overlap between the two labels. To gain a better view over that scenario let’s see the example below.

```html
<igx-slider
    [maxValue]="10"
    [showTicks]="true"
    [primaryTicks]="11"
    [ticksOrientation]="ticksOreintation"
></igx-slider>
```
```typescript
public ticksOrientation = TicksOrientation.Top;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-primary-ticks-top-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-primary-ticks-top' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-primary-ticks-top-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

We haven’t done anything special here, except that we’ve changed the **orientation** of the **ticks** and positioned them at the top of the slider. We can see that, there isn’t any **thumb label** that displayed upon interaction.

#### Slider ticks with labels view
The feature has been aligned with the **labels view** feature as well. Let's see how.

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
    <iframe id="slider-timeframe-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-timeframe' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-timeframe-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Here, the [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) input has not been set, because it won’t be reflected in any way. The **length** of the collection takes precedence over it. This does not mean that [`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) cannot be set. All **secondary ticks** will be empty (without any **labels**).

#### Template tick labels
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
    <iframe id="slider-tick-labels-template-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-tick-labels-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-tick-labels-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [TicksOrientation]({environment:angularApiUrl}/enums/ticksorientation.html)
* [TickLabelsOrientation]({environment:angularApiUrl}/enums/ticklablesorientation.html)

###Additional Resources

* [Slider overview](slider.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
