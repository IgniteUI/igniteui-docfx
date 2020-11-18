---
title: Angular Slider |  Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular の Angular Slider でつまみラックを使用して、特定の範囲で選択を構成する方法を紹介します。
_keywords: angular slider, igniteui for angular, インフラジスティックス
_language: ja
---

# Slider 概要と構成
<p class="highlight">Ignite UI for Angular Slider コンポーネントを使用すると、つまみをトラックで移動して指定した範囲内で値選択を許可します。トラックを連続またはステップに定義でき、単一または範囲によってスライダーのタイプを選択できます。</p>
<div class="divider"></div>

## Angular Slider の例
<div class="sample-container loading" style="height: 250px">
    <iframe id="slide-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/slider-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

>[!WARNING]
>**このコンポーネントでは、タッチ操作が正しく動作するために、アプリケーションのルート モジュールに [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) をインポートする必要があります。**.

Slider コンポーネントを初期化するには、 **IgxSliderModule** を **app.module.ts** ファイルにインポートします。

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

### 範囲スライダー
デフォルトで Slider コンポーネントは不連続タイプに設定されています。不連続スライダーで現在値は数値ラベル (バブル) で可視化されます。バブルは常に表示されているか、スライダーのつまみにカーソルを合わせると表示されます。
定義済みステップを持つ不連続スライダーを使用すると、有意な値のみを選択可能にすることができます。

以下の例では、0% から 100% までの値を表示する不連続スライダーを定義し、[`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) を 10 に設定します。
スライダーの [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) をコンポーネントの 「completion」 プロパティにバインドすると、入力コンポーネントと双方向バインディングを設定します。

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

2 つのコンポーネント間の双方向データ バインディングが表示されます。

<div class="sample-container loading" style="height: 160px">
    <iframe id="slide-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

### 連続スライダー
最初に、[`continuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#continuous) 入力を true に設定し、スライダー タイプを指定します。次に、[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue) プロパティを設定し、最小値および最大値を定義します。 

> [!NOTE]
> 連続スライダーには、トラック上にステップ インジケーターがなく、操作中に表示されるつまみラベルがありません。

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

また、スライダーの [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) をコンポーネントの 「volume」 プロパティにバインドします。

```typescript
// sample.component.ts 

// Set an initial value
public volume = 20;
```

サンプルの構成後、スライダーのつまみをドラッグするとラベルを更新しますが、スライダー値は指定した最小値および最大値の間に制限されます。

<div class="sample-container loading" style="height: 140px">
    <iframe id="slide-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

### 範囲スライダー
最初に、スライダーの [`type`]({environment:angularApiUrl}/classes/igxslidercomponent.html#type) を [`RANGE`]({environment:angularApiUrl}/enums/slidertype.html#range) に設定します。次にスライダー値を PriceRange 型のオブジェクトにバインドします。
そのオブジェクトに上限および下限のプロパティがあります。

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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

最大値および最小値に近い値が適切でない場合があります。[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minvalue) と [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxvalue) の設定以外に、ユーザー選択を更に制限するための範囲も設定できます。 
これは、[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) および [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound) プロパティで設定します。この設定により、0 ～ 100 および 900 ～ 1000 の範囲でつまみを移動できなくなります。

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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

### ラベル モード
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
    <iframe id="slide-sample-6-final-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-sample-6' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slide-sample-6-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slide-sample-6-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

上記のサンプルからわかるように、`境界`の設定はまだ有効な操作です。[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerbound) と [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperbound) に対応すると、スライドできる範囲が制限されます。

### ラベルのテンプレート化
上記では、[igxSliderThumbFrom]({environment:angularApiUrl}/interfaces/igxSliderThumbFrom.html) ディレクティブと [igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) ディレクティブの両方を使用して、カスタム `label` テンプレートを提供する方法を意図的に示しました。直感的に [igxSliderThumbFrom]({environment:angularApiUrl}/interfaces/igxSliderThumbFrom.html) は [lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel)に対応し、[igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) は [igxSliderThumbTo]({environment:angularApiUrl}/interfaces/igxSliderThumbTo.html) に対応すると想定できます。 <br>
ここでの [context]({environment:angularApiUrl}/classes/igxslidercomponent.html#context) は、暗黙的に `value` 入力プロパティへの参照を、そして `labelsView` が有効な場合は明示的に `labels` 入力への参照を与えます。

```html
  <ng-template igxSliderThumbFrom let-value let-labels="labels">
    <span class="ellipsis">{{ labels[value.lower] }}</span>
  </ng-template>
  <ng-template igxSliderThumbTo let-value let-labels="labels">
      <span class="ellipsis">{{ labels[value.upper] }}</span>
  </ng-template>
```

## Slider 目盛りとラベル
**Slider 目盛り**は、特定の時間枠、曜日など、データ可視化を簡単に行うことができます。この新しい機能は、データの表示範囲を確認するための Angular Slider の操作が必要なくなります。**目盛り**と**目盛り ラベル**の配置と方向の制御に関して、高い柔軟性があります。**目盛り**の**オン/オフ**を切り替えたり、**プライマリ**、**セカンダリ**、または**その両方**を選択したりできます。さらに、この機能は、**プライマリ目盛りラベル**、**セカンダリ目盛りラベル**、またはその両方を**オン/オフ**にする方法を提供します。**目盛りラベル**は**水平**から**垂直** (**上から下** (90) または**下から上** (-90)) に向きを変更することもできます。

### 目盛りの有効化
スライダーの目盛りを有効にするには、[`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showticks) を **true** に設定します。    
[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) を使用してプライマリ目盛りの数を設定します。
[`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) を使用してセカンダリ目盛りの数を設定します。

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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="discrete-slider-ticks-bottom-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="discrete-slider-ticks-bottom-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>


### ラベルの向きと表示状態
以下のサンプルでは、[`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticklabels) を **false** に設定して、すべての**セカンダリ ラベル**を無効にします。  

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
[`TickLabelsOrientation`]({environment:angularApiUrl}/enums/ticklabelsorientation.html#range) を [`BottomToTop`]({environment:angularApiUrl}/enums/ticklabelsorientation.html) に設定してすべての表示ラベルを回転します。
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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-ticks-bottomtotop-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-ticks-bottomtotop-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

### 目盛りの位置
次に、**目盛り**の位置を変更する方法を見てみましょう。

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

位置の変更は [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) 入力から行われ、**Bottom** (デフォルト) から **Mirror** に変更されました。 
これが**目盛り**の外観に反映され、スライダーの上部または下部に表示します。 

```typescript

  // The available options are: Top, Bottom and Mirror
  public ticksOrientation = TicksOrientation.Mirror;
```

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-secondary-ticks-mirror-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-secondary-ticks-mirror-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

> [!NOTE]
> [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksorientation) が **Top** または **Mirror** に設定され、**目盛りラベル**が表示されている場合、**つまみラベル**は意図的に非表示になります。このようにして、ユーザー エクスペリエンスの低下と 2 つのラベルの重複を防止できます。

### ラベル ビューを含むスライダー目盛り
この例では、目盛りラベルとつまみラベルがどのように一緒に機能するかを示します。

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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-timeframe-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-timeframe-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

いずれにしても反映されないため、ここでは、[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryticks) は設定されていません。コレクションの **長さ** が優先されます。これは、[`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryticks) を設定できないことを意味しません。すべての**セカンダリ目盛り**は、**ラベル**なしで空になります。

### テンプレートのラベル
最後に、**目盛りラベル**にカスタム テンプレートを提供する方法と、 [`テンプレート コンテキスト`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) が提供するものを確認します。

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
[`IgxTickLabelTemplateDirective`]({environment:angularApiUrl}/classes/igxticklabeltemplatedirective.html) を `ng-template` に適用すると、テンプレートがすべての**目盛りラベル**に割り当てられます。 

> [!NOTE]
> [`context`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) は各目盛りごとに実行されます。

つまり、次への参照を提供します。 
  * 対応する各目盛りの**値**
  * 目盛りが**プライマリ**の場合
  * **目盛り**インデックス
  * そして、[`labels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labels) コレクションがある場合。

```typescript
  public tickLabel(value, primary, index) {
      if (primary) {
          return Math.round(value);
      }

      return value;
  }
```

上記の **tickLabel** コールバックから、各**プライマリ**目盛りの**値**を丸めていることがわかります。 

<div class="sample-container loading" style="height: 140px">
    <iframe id="slider-tick-labels-template-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-tick-labels-template' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-tick-labels-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-tick-labels-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

## スタイル設定
スライダー コンポーネントのデフォルト スタイル設定を変更するには、新しいテーマを作成します。

### デモ
これは、新しいテーマを適用した結果です。

<div class="sample-container loading" style="height: 240px">
    <iframe id="slider-styling-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="slider-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="slider-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

### コンポーネント テーマの作成
はじめに、[カスタム パレット](../themes/palette.md)を作成します。
コンポーネント テーマを作成し、カスタム パレットを適用します。 
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

#### コンポーネント テーマの適用
コンポーネント テーマを適用するには、`igx-css-vars` mixin をインクルードし、`$custom-slider-theme` マップを渡します。
```scss
// In app-slider-styling.component.scss

// Pass our custom-slider-theme to `igx-css-vars` mixin.
// The `:host` here makes sure that all the theming will affect only this slider component.
:host {
  @include igx-css-vars($custom-slider-theme);
}
```

## API リファレンス
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)
* [TicksOrientation]({environment:angularApiUrl}/enums/ticksorientation.html)
* [TickLabelsOrientation]({environment:angularApiUrl}/enums/ticklablesorientation.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
