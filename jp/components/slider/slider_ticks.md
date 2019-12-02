---
title: Slider コンポーネント
_description: Ignite UI for Angular Slider コントロールは、ブラウザー間で統一したエクスペリエンスおよび値選択の入力機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Slider コンポーネント, Angular Slider コントロール
_language: ja
---

## スライダー目盛り
スライダー目盛りは、データを視覚化する方法の 1 つです。具体的には、その機能を使用して、特定の時間枠、曜日などを表示できます。この新しい機能を使用すると、どのデータが残っているかを確認するためにスライダーを操作する必要がなくなります。非常に柔軟です。ユーザーは、目盛りと目盛りラベルの位置を完全に制御できます。これらのオン/オフを切り替えたり、プライマリ、セカンダリ、またはその両方を選択したりできます。また、ユーザーは、水平から垂直 (上から下(90) または下から上 (-90)) に回転形式を変更できる場合でも、プライマリ、セカンダリ目盛りラベル、またはその両方をオンまたはオフにできます。

### 使用方法
Slider コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```

次に、**app.module.ts** ファイルに  **IgxSliderModule** をインポートします。

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
#### 下の目盛り
単純なものから始めて、特定のシーケンス内のすべての偶数を表示するスライダーの下のスライダー**目盛り**を有効にします。

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

スライダーの下の目盛りを見てみましょう。まず、[`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) を true に設定して機能全体を有効にします。次に、表現を操作できるようになります。[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) を 6 に設定すると (レンダリングが 0 から始まるため)、すべてのプライマリ**目盛り**をスライダーの下に均等に定義して広げます。[`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) のセットアップは少し異なります。これは、2 つのプライマリ目盛りごとに 4 つのセカンダリ目盛りを定義します。計算が正しければ、最終的には 21 目盛りになります。



#### セカンダリ目盛りを無効にし、プライマリ目盛りを回転します。
次のサンプルは、すべての**セカンダリ 目盛り ラベル**を無効にし、**プライマリ**ラベルを回転させる方法を示しています。 

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

サンプルをより面白くするために、双方向データで**値**をバインドします。
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

ここでは、[`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) を **false** に設定してセカンダリ目盛り ラベルを無効にし、[`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) 列挙体を介して [`tickLabelsOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticklabelsorientation) を **BottomToTop**(-90) に変更して**プライマリ**目盛り ラベルを回転しています。

#### プライマリ 目盛りを無効にし、方向を変更します。
次に、目盛り自体の方向を変更して、**目盛り ラベル**なしで**セカンダリ 目盛り**のみを有効にする方法を見てみましょう。

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
表示される 2 つのボタンを使用して、スライダーの**値**を制御/更新できますが、**目盛り**の操作に焦点を当てましょう。

```typescript
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

方向を変更するために、[`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) 入力を使​​用しました。これは、**Bottom**(デフォルト) から **Mirror** に変更しましたこれにより、**目盛り**の視覚化が反映され、上部にも複製されます。

#### 表示ラベル付きの上位目盛り
まれに、**つまみラベル**が意図的に非表示になっている場合があります。これは [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) が **Top** または **Mirror** に設定されていて、目盛りラベルが表示されている場合です。このようにして、ユーザー エクスペリエンスの低下と 2 つのラベルの重複を防ぎます。よりよく理解するために、以下の例を見てみましょう。

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

ここでは、**目盛り**の**向き**を変更し、スライダーの上部に配置します。ポップアップ表示される**つまみラベル**はありません。

#### ラベル ビューを含むスライダー目盛り
この機能は非常に柔軟であり、**ラベル ビュー**機能でも動作します。以下はコード例です。

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

コレクションの**長さ**で制御しますが反映されないため、[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) は設定しません。これは、[`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) を設定できないという意味ではありません。それらは空の**目盛り**で、**プライマリ目盛り**間のある種のインジケーターとして機能します。

#### テンプレート目盛りラベル
最後に、**目盛りラベル**のカスタム テンプレートを提供する方法と、[`コンテキスト`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context)が提供するものを確認します。

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
テンプレート [`IgxTickLabelTemplateDirective`]({environment:angularApiUrl}/classes/igxticklabeltemplatedirective.html) に設定すると、これが**目盛りラベル**をレンダリングするときに探す必要があるテンプレートであることが確認できます。 

> 注:
> [`コンテキスト`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context)は各目盛りに個別に提供されます。

これは、以下への参照を提供します。 
  * 対応する各目盛りの**値**
  * 目盛りが**プライマリ**の場合:
  * **目盛り**インデックス。
  * そして、[`ラベル`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labels)コレクションがある場合: 

```typescript
  public tickLabel(value, primary, index) {
      if (primary) {
          return Math.round(value);
      }

      return value;
  }
```

上記の **tackLabel** コールバックから、各プライマリ目盛りの値を丸めていることがわかります。

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
