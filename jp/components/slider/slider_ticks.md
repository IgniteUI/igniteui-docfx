---
title: Slider コンポーネント
_description: Ignite UI for Angular Slider コントロールは、ブラウザー間で統一したエクスペリエンスおよび値選択の入力機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Slider コンポーネント, Angular Slider コントロール
_language: ja
---

## Slider Ticks
**スライダー目盛り**は、特定の時間枠、曜日など、データ可視化を簡単に行う方法を提供します。この新しい機能を使用すると、どのデータが残っているかを確認するためにスライダーを操作する必要がなくなります。また、目盛りと目盛りラベルの配置と方向の制御に関して、高い柔軟性があり、**目盛り**の**オン/オフ**を切り替えたり、**プライマリ**、**セカンダリ**、またはその**両方**を選択したりできます。さらに、この機能は、プライマリ目盛りラベル、セカンダリ目盛りラベル、またはその両方をオンまたはオフにする方法を提供し、水平から垂直 (上から下 (90) または下から上 (-90)) で回転形式を変更することもできます。

### 使用方法
はじめに、[Ignite UI for Angular で作業を開始](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html)を完了してください。

セットアップの準備ができたら、**IgxSliderModule** を **app.module.ts** ファイルに含める必要があります。

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
#### 下目盛り
シンプルなものから始めて、特定のシーケンス内のすべての偶数を表示するスライダーの下の**目盛り**を有効にします。

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

スライダーの下の目盛りを見てみましょう。まず、[`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) を true に設定することにより、機能全体が有効になります。[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) を 6 に設定すると（レンダリングが0から始まるため）、すべてのプライマリ**目盛り**をスライダーの下に定義して均等に配置します。[`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) の設定は少し異なり、2 つの**プライマリ**間の4つのセカンダリ目盛りを定義し、計算が正しい場合、21 **目盛り**がすべてレンダリングされます。



#### セカンダリ目盛りを無効にし、プライマリ目盛りを回転します。
以下のサンプルでは、​​すべての**セカンダリ ラベル**が無効になり、すべての**プライマリ ラベル**が回転します。 

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

**値**を 2 つの入力に対して双方向でデータバインドします。
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

上記の例に従えば、[`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) を **false** に設定するとすべての**セカンダリ目盛りラベル**が無効になり、[`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) 列挙のBottomToTop（-90）プロパティを [`tickLabelsOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticklabelsorientation) 入力に渡すと回転が行われると簡単に判断できます。

#### プライマリ目盛りを無効にして、方向を変更します。
次に、**目盛り**の方向がどのように変化するかと、**プライマリ**の表示を見てみましょう。

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
表示される 2 つのボタンを使用して、スライダーの**値**を制御/更新できます。次に**目盛り**の向きの処理について説明します。 

```typescript
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

方向は [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) 入力によって、**Bottom** から **Mirror** に変更されました。これにより、**目盛り**の表示がミラーされて、上下に表示されます。 

#### 表示ラベル付きの上目盛り
意図的に**つまみラベル**が非表示になっている場合、[`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) が **Top** または **Mirror** に設定されていて目盛りラベルが表示される場合があります。このようにして、ユーザー エクスペリエンスの低下と 2 つのラベルの重複を防止できます。このようなケースについて以下の例で詳しく説明します。

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

ここでは、**目盛り**の**向き**を変更し、スライダーの上部に配置します。インタラクションに基づいて表示される**つまみラベル**はありません。

#### ラベル ビューを含むスライダー 目盛り
この機能は、**ラベル ビュー**機能にも合わせられています。以下はコード例です。

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

ここでは、設定が反映されないため、[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) は設定されていません。コレクションの**長さ**が優先され、コレクションの **長さ** が優先されます。これは、[`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) を設定できないという意味ではありません。すべての**セカンダリ目盛り**は、**ラベル**なしで空になります。

#### テンプレート目盛りラベル
最後に、**目盛りラベル**にカスタム テンプレートを提供する方法と、[`テンプレート コンテキスト`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context)が提供するものを確認します。

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
[`IgxTickLabelTemplateDirective`]({environment:angularApiUrl}/classes/igxticklabeltemplatedirective.html) を `ng-template` に適用すると、すべての**目盛りラベル**にテンプレートを割り当てます。 

> [!NOTE]
> コンテキストは各目盛りごとに実行されます。

つまり、次への参照を提供します。 
  * 対応する各目盛りの**値**
  * 目盛りが**プライマリ**の場合:
  * **目盛り**インデックス。
  * そして、[`ラベル`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labels) コレクションがある場合: 

```typescript
  public tickLabel(value, primary, index) {
      if (primary) {
          return Math.round(value);
      }

      return value;
  }
```

上記の **tickLabel** コールバックでは、すべての**プライマリ**目盛りの値が丸められています。 

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
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
