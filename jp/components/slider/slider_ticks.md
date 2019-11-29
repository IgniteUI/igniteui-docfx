---
title: Slider Component
_description: Ignite UI for Angular Slider control provides a rich input for value selection and delivers consistent experience across browsers.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Slider components, Angular Slider controls
---

## Slider Ticks
**Slider ticks**, provide a new and more attractive way for data visualization. More specifically, we could use that feature to present a particular timeframe, days of the week and more. With this new functionality we are not obligated to interact with the slider in order to see what data stays behind. It is extremely flexible. The user has a full control over the positioning of the **ticks** and **tick labels**. We can turn on/off them, as well as pick between primary, secondary or both. Users also can turn on/of primary, secondary **tick labels** or both, even they can change their rotation form **horizontal** to **vertical** (**top to bottom** (90) or **bottom to top** (-90)).

### Usage
To get started with the Slider component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```

The next step is to import the **IgxSliderModule** in our **app.module.ts** file:

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
Let’s start with something simple and enable slider **ticks** below the slider that shows every even number within a particular sequence.

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

Let’s look at the ticks below the slider. Firstly we need to enable the whole feature by setting [`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) to true, then we will be able to manipulate the representation. Setting [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) to six (because the rendering starts from 0), defines and spreads all primary **ticks** equally below the slider. [`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) set up works a little bit different. It defines four secondary ticks between every two primary ticks and if our calculation is right, at the end we will have 21 **ticks** totally.



#### Disable secondary ticks and rotate primary ones.
The next sample demonstrates how we can disable all **secondary tick labels** and rotate the **primary** ones. 

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

Just to make the sample more interesting we will two-way data bind the **value**.
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

Here we are just disabling the **secondary tick labels** by setting [`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) to **false** and rotate the **primary** ones by changing the [`tickLabelsOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticklabelsorientation) to **BottomToTop**(-90) through [`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) enumeration.

#### Disable primary ticks and change their orientation
Let’s move on and change the orientation of the **ticks** itself and see how we can have only **secondary ticks** enabled without any **tick labels**.

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
The two buttons you see could be used to control/update slider's **value**, but let's focus on the **ticks** manipulation. 

```typescript
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

In order to change the orientation, we have used [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) input, which we changed from **Bottom**(default) to **Mirror**. This mirrors the visualization of the **ticks** and duplicates them at the top as well. 

#### Top ticks with visible labels
There is an edge case where our **thumb label** is hidden intentionally, and it is when [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) is set to **Top** or **Mirror** and there are any visible **tick labels**. In this way, we prevent a bad user experience and overlap between the two labels. To gain a better view over that scenario let’s see the example below.

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

We haven’t done anything special here, except that we’ve changed the **orientation** of the **ticks** and positioned them at the top of the slider. As we saw, there isn’t any **thumb label** that is popping up.

#### Slider ticks with labels view
As we said, the feature is extremely flexible and it works with the **labels view** feature as well. Let’s see how.

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

Here we do not set [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks), because it won’t be reflected in any way, because the **length** of the collection takes control over it. This does not mean that we are not able to set any [`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks). We are, but they will be just empty **ticks** which would serve as some sort of indicators between the **primary ticks**.

#### Template tick labels
Lastly we will see how we can provide a custom template for our **tick labels** and what our [`context`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) provides.

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
Setting to the template [`IgxTickLabelTemplateDirective`]({environment:angularApiUrl}/classes/igxticklabeltemplatedirective.html) says that this is the template we need to look for when we render our **tick labels**. 

> [!NOTE]
> The [`context`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) is provided to each tick independently.

Which means that it gives us a reference to: 
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

From the **tackLabel** callback above, we can see that we round each **primary** tick **value**. 

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
