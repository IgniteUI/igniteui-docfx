---
title: Slider コンポーネント
_description: Ignite UI for Angular Slider コントロールは、ブラウザー間で統一したエクスペリエンスおよび値選択の入力機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Slider コンポーネント, Angular Slider コントロール
_language: ja
---

## Slider
<p class="highlight">Ignite UI for Angular Slider コンポーネントを使用すると、つまみをトラックで移動して指定した範囲内で値選択を許可します。トラックを連続またはステップに定義でき、単一または範囲によってスライダーのタイプを選択できます。</p>
<div class="divider"></div>

### Slider デモ
<div class="sample-container" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[「**インストール**」](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)のトピックで手順を参照できます。

### 使用方法

Ignite UI for Angular Slider を初期化する前に、[**IgxSliderModule**]({environment:angularApiUrl}/classes/igxslidermodule.html) を **app.module.ts** ファイルにインポートします。

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

#### 連続スライダー
簡易な連続スライダーを使用します。最初に、[`isContinuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#iscontinuous) プロパティを true に設定し、スライダー タイプを指定します。次に、[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue) プロパティを設定し、最小値および最大値を定義します。また、スライダーの [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) をコンポーネントの "volume" プロパティにバインドします。

> [!NOTE]
> 連続スライダーは、現在の値に目盛りおよびバブル ラベルを表示しません。

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

サンプルの構成後、スライダーのつまみをドラッグするとラベルを更新しますが、スライダー値は指定した最小値および最大値の間に制限されます。

<div class="sample-container" style="height: 140px">
    <iframe id="slide-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### 不連続スライダー

デフォルトで Ignite UI for Angular Slider は不連続です。不連続スライダーで現在値は数値ラベル (バブル) で可視化されます。

定義済みステップを持つ不連続スライダーを使用すると、有意な値のみを選択可能にすることができます。たとえば、不連続スライダーは 0 から 5 までの評価、または 0% から 100% までの進行状況を可視化できます。

次の例では、0% から 100% までの値を表示する不連続スライダーを定義します。[`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) は 10 に設定されます。スライダーの [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) をコンポーネントの "completion" プロパティにバインドすると、入力コンポーネントと双方向バインディングを設定します。

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

サンプルを構成した後、スライダーのつまみをドラッグすると入力値を更新し、入力値を変更するとスライダー値を更新します。

<div class="sample-container" style="height: 170px">
    <iframe id="slide-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### 範囲スライダー

範囲フィルターなどを可視化する場合、範囲スライダーを使用します。スライダーの [`type`]({environment:angularApiUrl}/classes/igxslidercomponent.html#type) を [`RANGE`]({environment:angularApiUrl}/enums/slidertype.html#range) に設定します。次にスライダー値を PriceRange 型のオブジェクトにバインドします。そのオブジェクトに上限および下限のプロパティがあります。

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

<div class="sample-container" style="height: 120px">
    <iframe id="slide-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

最大値および最小値に近い値が適切でない場合があります。[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) と [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue) の設定以外に、ユーザー選択を更に制限するための範囲も設定できます。これは、[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) および [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound) プロパティで設定します。この設定により、0 ～ 100 および 900 ～ 1000 の範囲でつまみを移動できなくなります。

```html
<!--sample.component.html-->

<igx-slider [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(ngModel)]="priceRange" [lowerBound]="100" [upperBound]="900" ></igx-slider>
```

<div class="sample-container" style="height: 120px">
    <iframe id="slide-sample-5-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>


2 つの入力を追加し、スライダーの上限および下限にバインドします。このように、スライダー値を可視化して変更できます。

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
サンプルを構成した後、結果は以下のようになります。


<div class="sample-container" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/slider-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider"></div>

### API まとめ
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)