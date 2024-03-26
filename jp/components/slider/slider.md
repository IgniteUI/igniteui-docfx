---
title: Angular Slider |  Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular の Angular Slider でつまみラックを使用して、特定の範囲で選択を構成する方法を紹介します。
_keywords: angular slider, angular sliderコンポーネント, angular range slider コンポーネント, angular range input コンポーネント, angular ui コンポーネント, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular Slider (スライダー) コンポーネントの概要
<p class="highlight">Ignite UI for Angular Slider は、つまみをトラックで移動して指定した範囲内で値を選択できるフォーム コンポーネントです。トラックは連続またはステップとして定義でき、スライダーは単一値または範囲 (下限値と上限値) スライダーのタイプを選択できるように構成できます。</p>

<div class="divider"></div>

## Angular Slider の例

<code-view style="height: 250px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-1" alt="Angular Slider 例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Slider を使用した作業の開始

Ignite UI for Angular Slider コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](../general/getting-started.md)」 トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxSliderModule` をインポートします。

>[!WARNING]
>このコンポーネントは、**オプションで** [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を利用できます。タッチ操作が正しく動作するために、アプリケーションのルート モジュールにインポートできます。

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxSliderModule } from 'igniteui-angular';
// import { IgxSliderModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSliderModule, HammerModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxSliderComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_SLIDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/slider/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_SLIDER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SLIDER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SLIDER_DIRECTIVES, FormsModule]
    /* or imports: [IgxSliderComponent, FormsModule] */
})
export class HomeComponent {
    public task: Task;
}
```

スタンドアロン コンポーネントを使用する場合、[`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を `app.config` ファイルにインポートする必要があります。

```typescript
//app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HammerModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HammerModule),
    provideRouter(appRoutes)
  ],
};
```

Ignite UI for Angular Slider モジュールまたはディレクティブをインポートしたので、`igx-slider` コンポーネントの使用を開始できます。

## Angular Slider の使用

### 不連続スライダー
デフォルトで Slider コンポーネントは不連続タイプに設定されています。不連続スライダーで現在値は数値ラベル (バブル) で可視化されます。バブルはスライダーのつまみにカーソルを合わせると表示されます。
定義済みステップを持つ不連続スライダーを使用すると、有意な値のみを選択可能にすることができます。

以下の例では、0% から 100% までの値を表示する不連続スライダーを定義し、[`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) を増減ごとに 10% に設定します。
Angular [`ngModel`](https://angular.io/guide/built-in-directives#ngModel) を使用して、スライダーの [`value`]({environment:angularApiUrl}/classes/igxslidercomponent.html#value) をコンポーネントの 「completion」 プロパティにバインドすると、入力コンポーネントと双方向バインディングを設定します。

```html
<!--sample.component.html-->

<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>
<igx-input-group type="border">
    <input igxInput id="percentInput" type="number" [(ngModel)]="task.completion" />
    <label igxLabel for="percentInput">Task Completion</label>
    <igx-suffix>%</igx-suffix>
</igx-input-group>
```

```typescript
// sample.component.ts 
import { Component, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxSliderComponent } from 'igniteui-angular';
// import { IgxInputDirective, IgxSliderComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-sample',
    styleUrls: ['./sample.component.scss'],
    templateUrl: './sample.component.html'
})
export class SampleComponent {
    public task = {
        completion: 10
    };

    constructor() { }
}
```

2 つのコンポーネント間の双方向データ バインディングが表示されます。


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-3" >
</code-view>


### 連続スライダー
最初に、[`continuous`]({environment:angularApiUrl}/classes/igxslidercomponent.html#continuous) 入力を true に設定し、スライダー タイプを指定します。次に、[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxValue) プロパティを設定し、最小値および最大値を定義します。 

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


<code-view style="height: 140px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-2" >
</code-view>


### 範囲スライダー
最初に、スライダーの [`type`]({environment:angularApiUrl}/classes/igxslidercomponent.html#type) を [`RANGE`]({environment:angularApiUrl}/enums/slidertype.html#range) に設定します。次に、スライダー値を `lower` と `upper` 値のプロパティを持つオブジェクトにバインドします。

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000" 
    [(lowerValue)]="priceRange.lower"
    [(upperValue)]="priceRange.upper">
</igx-slider>

<igx-input-group type="border">
    <label igxLabel for="lowerRange">From</label>
    <igx-prefix>$</igx-prefix>
    <input igxInput id="lowerRange" type="number" [(ngModel)]="priceRange.lower" />
</igx-input-group>

<igx-input-group type="border">
    <label igxLabel for="upperRange">To</label>
    <igx-prefix>$</igx-prefix>
    <input igxInput id="upperRange" type="number" [(ngModel)]="priceRange.upper" />
</igx-input-group>
```

```typescript
// sample.component.ts
import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';
// import { IgxSliderType } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-sample',
  styleUrls: ['./sample.component.scss'],
  templateUrl: './sample.component.html'
})
export class SampleComponent {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
```


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-4" >
</code-view>

>[!NOTE]
> RANGE タイプのスライダーを使用する場合、`ngModel` へのバインディングはスライダーからモデルを更新する方向でのみ動作します。両方の値に双方向バインディングを使用するには、`lowerValue` と `upperValue` バインディングを利用できます。


最大値および最小値に近い値が適切でない場合があります。[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minValue) と [`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxValue) の設定以外に、ユーザー選択を更に制限するための範囲も設定できます。 
これは、[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerBound) および [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperBound) プロパティで設定します。この設定により、0 ～ 100 および 900 ～ 1000 の範囲でつまみを移動できなくなります。

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000"
    [(lowerValue)]="priceRange.lower"
    [(upperValue)]="priceRange.upper"
    [lowerBound]="100" 
    [upperBound]="900">
</igx-slider>
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-5" >
</code-view>


### ラベル モード
ここまでで目盛りでのみ数値を表示しましたが、基本的な値の配列を使用することで、情報を提示するために使用できる別の方法があります。
>[!NOTE]
> 初期値の配列には少なくとも 2 つの値を含める必要があり、含めない場合は `labelsView` が有効になりません。

このルールに対応する定義ができたら、`labels` 入力プロパティに渡す準備ができました。これは、データを`トラック`全体に均等に分散させることによって処理します。ラベル値は、コレクション内で定義したすべての初期値を表します。それらは、[lowerLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerLabel) または [upperLabel]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperLabel) のいずれかを要求することによって、API を通じていつでもアクセスできます。

>[!NOTE]
> [`labelsView`]({environment:angularApiUrl}/classes/igxslidercomponent.html#labelsView) が有効になっているときは、[`maxValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#maxValue)、[`minValue`]({environment:angularApiUrl}/classes/igxslidercomponent.html#minValue)、[`step`]({environment:angularApiUrl}/classes/igxslidercomponent.html#step) の入力が制御されることに注意してください。 

もう 1 つの重要な要素は、`labelsView` が有効になっているときに `slider` が更新プロセスを処理する方法です。
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


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-sample-6" >
</code-view>


上記のサンプルからわかるように、`境界`の設定はまだ有効な操作です。[`lowerBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#lowerBound) と [`upperBound`]({environment:angularApiUrl}/classes/igxslidercomponent.html#upperBound) に対応すると、スライドできる範囲が制限されます。

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
スライダーの目盛りを有効にするには、[`showTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#showTicks) を **true** に設定します。
[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryTicks) を使用してプライマリ目盛りの数を設定します。
[`SecondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryTicks) を使用してセカンダリ目盛りの数を設定します。

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


<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/discrete-slider-ticks-bottom" >
</code-view>



### ラベルの向きと表示状態
以下のサンプルでは、[`secondaryTickLabels`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryTickLabels) を **false** に設定して、すべての**セカンダリ ラベル**を無効にします。  

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


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-ticks-bottomtotop-labels" >
</code-view>


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

位置の変更は [`ticksOrientation`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksOrientation) 入力から行われ、**Bottom** (デフォルト) から **Mirror** に変更されました。
これが**目盛り**の外観に反映され、スライダーの上部または下部に表示します。 

```typescript

  // The available options are: Top, Bottom and Mirror
  public ticksOrientation = TicksOrientation.Mirror;
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-secondary-ticks-mirror" >
</code-view>


> [!NOTE]
> [`ticksOrientaion`]({environment:angularApiUrl}/classes/igxslidercomponent.html#ticksOrientaion) が **Top** または **Mirror** に設定され、**目盛りラベル**が表示されている場合、**つまみラベル**は意図的に非表示になります。このようにして、ユーザー エクスペリエンスの低下と 2 つのラベルの重複を防止できます。

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


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-timeframe" >
</code-view>


いずれにしても反映されないため、ここでは、[`primaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#primaryTicks) は設定されていません。コレクションの **長さ** が優先されます。これは、[`secondaryTicks`]({environment:angularApiUrl}/classes/igxslidercomponent.html#secondaryTicks) を設定できないことを意味しません。すべての**セカンダリ目盛り**は、**ラベル**なしで空になります。

### テンプレートのラベル
最後に、**目盛りラベル**にカスタム テンプレートを提供する方法と、[`テンプレート コンテキスト`]({environment:angularApiUrl}/classes/igxtickscomponent.html#context) が提供するものを確認します。

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


<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-tick-labels-template" >
</code-view>


## スタイル設定
スライダー コンポーネントのデフォルト スタイル設定を変更するには、新しいテーマを作成します。

### デモ
これは、新しいテーマを適用した結果です。


<code-view style="height: 240px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/slider-styling-sample" >
</code-view>


### コンポーネント テーマの作成
はじめに、[カスタム パレット](../themes/palettes.md)を作成します。
コンポーネント テーマを作成し、カスタム パレットを適用します。 
```scss
// In app-slider-styling.component.scss

// Create slider theme.
$custom-slider-theme: slider-theme(
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
コンポーネント テーマを適用するには、`css-vars` ミックスインをインクルードし、`$custom-slider-theme` マップを渡します。
```scss
// In app-slider-styling.component.scss

// Pass our custom-slider-theme to `css-vars` mixin.
// The `:host` here makes sure that all the theming will affect only this slider component.
:host {
  @include css-vars($custom-slider-theme);
}
```

## API リファレンス
<div class="divider--half"></div>

* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSliderComponent スタイル]({environment:sassApiUrl}/index.html#function-slider-theme)
* [SliderType]({environment:angularApiUrl}/enums/slidertype.html)
* [IRangeSliderValue]({environment:angularApiUrl}/interfaces/irangeslidervalue.html)
* [TicksOrientation]({environment:angularApiUrl}/enums/ticksorientation.html)
* [TickLabelsOrientation]({environment:angularApiUrl}/enums/ticklablesorientation.html)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
