---
title: Angular Slider |  Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular の Angular Slider でつまみラックを使用して、特定の範囲で選択を構成する方法を紹介します。
_keywords: angular slider, igniteui for angular, インフラジスティックス
_language: ja
---

## Slider Overview and Configuration
<p class="highlight">Ignite UI for Angular Slider コンポーネントを使用すると、つまみをトラックで移動して指定した範囲内で値選択を許可します。トラックを連続またはステップに定義でき、単一または範囲によってスライダーのタイプを選択できます。</p>
<div class="divider"></div>

### Slider デモ
<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/slider-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

>[!WARNING]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for user interactions to work as expected.**.

Slider コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに **IgxSliderModule** をインポートします。

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
簡易な連続スライダーを使用します。最初に、[`continuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#continuous) プロパティを true に設定し、スライダー タイプを指定します。次に、[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue) プロパティを設定し、最小値および最大値を定義します。また、スライダーの [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) をコンポーネントの "volume" プロパティにバインドします。

> [!NOTE]
> 連続スライダーには、トラック上にステップ インジケーターはなく、操作中に表示されるつまみラベルもありません。

```html
<!--sample.component.html-->

<igx-slider id="slider" [minValue]="0" [maxValue]="100" [continuous]=true [(ngModel)]="volume" ></igx-slider>
<label igxLabel for="slider">Volume: {{volume}}</label>
```

```typescript
// sample.component.ts 

// Set an initial value
public volume = 20;
```

サンプルの構成後、スライダーのつまみをドラッグするとラベルを更新しますが、スライダー値は指定した最小値および最大値の間に制限されます。

<div class="sample-container loading" style="height: 140px">
    <iframe id="slide-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/slider-sample-2" class="lazyload"></iframe>
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

<div class="sample-container loading" style="height: 170px">
    <iframe id="slide-sample-3-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/slider-sample-3" class="lazyload"></iframe>
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

<div class="sample-container loading" style="height: 120px">
    <iframe id="slide-sample-4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/slider-sample-4" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

最大値および最小値に近い値が適切でない場合があります。[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) と [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue) の設定以外に、ユーザー選択を更に制限するための範囲も設定できます。これは、[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) および [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound) プロパティで設定します。この設定により、0 ～ 100 および 900 ～ 1000 の範囲でつまみを移動できなくなります。

```html
<!--sample.component.html-->

<igx-slider [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(ngModel)]="priceRange" [lowerBound]="100" [upperBound]="900" ></igx-slider>
```

<div class="sample-container loading" style="height: 120px">
    <iframe id="slide-sample-5-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/slider-sample-5" class="lazyload"></iframe>
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


<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/slider-sample-1" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider"></div>

#### ラベル モード
ここまでで目盛りでのみ数値を表示しましたが、基本的な値の配列を使用することで、情報を提示するために使用できる別の方法があります。
>[!NOTE]
> 初期値の配列には少なくとも 2 つの値を含める必要があり、含めない場合は `labelsView` が有効になりません。

このルールに対応する定義ができたら、`labels` 入力プロパティに渡す準備ができました。これは、データを`トラック`全体に均等に分散させることによって処理します。ラベル値は、コレクション内で定義したすべての初期値を表します。それらは、[lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel) または [upperLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperLabel) のいずれかを要求することによって、API を通じていつでもアクセスできます。

>[!NOTE]
> [`labelsView`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labelsviewenabled) が有効になっているときは、[`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue)、[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue)、[`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) の入力が制御されることに注意してください。 

もう 1 つの重要な要素は、`labelsView` が有効になっているときに`スライダー`が更新プロセスを処理する方法です。
これは単にコレクションの`インデックス`で動作します。それぞれ、`value`、`lowerBound` および `upperBound` プロパティがフォロー/設定することでトラックを制御することを意味します (`インデックス`)。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-6-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

上記のサンプルからわかるように、`境界`の設定はまだ有効な操作です。[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) と [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound) に対応すると、スライドできる範囲が制限されます。

#### ラベルのテンプレート化
上記では、[igxSliderThumbFrom]({environment:angularApiUrl}/interfaces/igxSliderThumbFrom.html) ディレクティブと [igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) ディレクティブの両方を使用して、カスタム `label` テンプレートを提供する方法を意図的に示しました。直感的に [igxSliderThumbFrom]({environment:angularApiUrl}/interfaces/igxSliderThumbFrom.html) は [lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel)に対応し、[igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) は [igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) に対応すると想定できます。 <br>
ここでの[コンテキスト]({environment:angularApiUrl}/classes/igxslidercomponent.html#context)は、暗黙的に `value` 入力プロパティへの参照を、そして `labelsView` が有効な場合は明示的に `labels` 入力への参照を与えます。

```html
  <ng-template igxSliderThumbFrom let-value let-labels="labels">
    <span class="ellipsis">{{ labels[value.lower] }}</span>
  </ng-template>
  <ng-template igxSliderThumbTo let-value let-labels="labels">
      <span class="ellipsis">{{ labels[value.upper] }}</span>
  </ng-template>
```
### Known Limitations

### API まとめ
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)

###その他のリソース

* [Slider の目盛り](slider_ticks.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
