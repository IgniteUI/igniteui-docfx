---
title: Slider コンポーネント
_description: Ignite UI for Angular Slider コントロールは、ブラウザー間で統一したエクスペリエンスおよび値選択の入力機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Slider コンポーネント, Angular Slider コントロール
_language: ja
---

## Slider Ticks
**Slider ticks**, provide a new and more attractive way for data visualization, like a particular timeframe, days of the week and more. With this new functionality the users are not obligated to interact with the slider in order to see what data stays behind. It is extremely flexible, in regards of the control over positioning and orientation of the **ticks** and **tick labels**. The **ticks** can be turned **on/off**, as well as pick between **primary**, **secondary** or **both**. Additionally this feature provides a way to  turn **on/of** **primary**, **secondary** **tick labels** or both, they can even change their rotation form **horizontal** to **vertical** (**top to bottom** (90) or **bottom to top** (-90)).

### Usage
Before we start, make sure that you have gone through the **Ignite UI for Angular** [getting started](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html) section.

Once the set up is ready, the **IgxSliderModule** needs to be included in the **app.module.ts** file

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="discrete-slider-ticks-bottom-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

Let’s look at the ticks below the slider. Firstly the whole feature is enabled by setting [`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) to **true**. Then setting [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) to six (because the rendering starts from 0), defines and spreads all primary **ticks** equally below the slider. [`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) set up works a little bit different. It defines four secondary ticks between every two **primary** and if the calculation is right, 21 **ticks** will be rendered totally.



#### Disable secondary ticks and rotate primary ones.
In the next sample all **secondary labels** are disabled and all **primary labels** rotated. 

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

Just to make it more interesting the **value** has been two-way data-bound to two inputs.
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-ticks-bottomtotop-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

Following the example above, it is easy to determine that setting [`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) to **false** disable all **secondary tick labels**, and passing **BottomToTop**(-90) property of [`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) enumeration to [`tickLabelsOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticklabelsorientation) input does the rotation.

#### Disable primary ticks and change their orientation
Let’s move on and see how the orientation  of the **ticks** is changed as well as their **primary** visibility.

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
The two buttons above are used just to control/update slider's **value**, but let's focus on the **ticks** manipulation. 

```typescript
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

The change of the orientation has come from [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) input, which was changed from **Bottom**(default) to **Mirror**. This mirrors the visualization of the **ticks** and duplicates them at the top as well. 

#### Top ticks with visible labels
There is an edge case where **thumb label** is hidden intentionally, and it is when [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) is set to **Top** or **Mirror** and there are any visible **tick labels**. This prevents a bad user experience and overlap between the two labels. To gain a better view over that scenario let’s see the example below.

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-primary-ticks-top-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

We haven’t done anything special here, except that we’ve changed the **orientation** of the **ticks** and positioned them at the top of the slider. We can see that, there isn’t any **thumb label** that is popping up.

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-timeframe-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

Here, the [`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) hasn't been set, because it won’t be reflected in any way. The **length** of the collection takes precedence and control over it. This does not mean that we are not able to set any [`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks). We are, but all **secondary ticks** will be empty(without any **labels**), which makes them seem more as some sort of indicators between the **primary ticks**.

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
Applying [`IgxTickLabelTemplateDirective`]({environment:angularApiUrl}/classes/igxticklabeltemplatedirective.html) to the `ng-template` gives as control over all **tick labels**. 

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

From the **tackLabel** callback above, we can see that every **primary** tick **value** has been rounded. 

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-tick-labels-template-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-tick-labels-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-tick-labels-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [TicksOrientation]({environment:angularApiUrl}/enums/ticksorientation.html)
* [TickLabelsOrientation]({environment:angularApiUrl}/enums/ticklablesorientation.html)

###その他のリソース

* [Slider の概要](slider.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* Ignite UI for Angular **フォーラム** (英語)
* Ignite UI for Angular **GitHub** (英語)
