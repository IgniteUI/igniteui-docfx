---
title: Linear Gauge コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Linear Gauge コンポーネントを使用すると、値をスケールまたは複数の範囲に比較することを表示します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular リニア ゲージ コンポーネント, Angular リニア ゲージ
_language: ja
---
## Linear Gauge

Ignite UI for Angular の Linear Gauge コンポーネントは、値とスケールまたは複数の範囲に対する比較を表示します。

### デモ

リニア ゲージ コンポーネントは、データをリニア ゲージ形式で可視化するコントロールです。スケールおよび 1 つ以上の範囲と比較した値をシンプルで簡潔に表示することが可能で、スケール、針、目盛 (1 組)、ラベル (1 組) がサポートされます。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれており、アニメーションでは、`transitionDuration` プロパティの設定で簡単にカスタマイズできます。
また構成可能な向きや方向、視覚要素やツールチップなどがサポートされます。

以下のサンプルは、同じゲージでいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-animation-iframe" src='{environment:demosBaseUrl}/linear-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-animation-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 依存関係
gauges パッケージをインストールするときに core パッケージもインストールする必要があります。

`npm install ignite-angular-gauges ignite-angular-core`

リニア ゲージが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxLinearGaugeModule_ をインポートする必要があります。

```typescript
// app.module.ts
import { IgxLinearGaugeModule } from 'ignite-angular-gauges/ES5/igx-linear-gauge-module';

@NgModule({
    imports: [
        ...
        IgxLinearGaugeModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

以下のコードは針およびスケールで 3 つの比較範囲を含むリニア ゲージを作成する方法を紹介します。

```html
 <igx-linear-gauge width="70px"
                   height="300px"
                   minimumValue = "5"
                   maximumValue = "55"
                   value = "43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            brush="red"/>
    <igx-linear-graph-range startValue="15"
                            endValue="30"
                            brush="yellow"/>
    <igx-linear-graph-range startValue="30"
                            endValue="55"
                            brush="green"/>
 </igx-linear-gauge>
```

<div class="divider--half"></div>

## 構成可能な要素

### 針
これは、コンポーネントで表示されるプライマリ メジャーでバーで可視化されます。あるいは以下で示す図形のほとんどすべてをカスタマイズすることもできます。

```html
 <igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10

    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07>
</igx-linear-gauge>
```
<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-needle-iframe" src='{environment:demosBaseUrl}/linear-gauge-needle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-needle-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 比較範囲
範囲はスケールで指定した値の範囲を強調表示する視覚的な要素です。その目的は、パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10

    rangeBrushes="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232" >
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```
<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-ranges-iframe" src='{environment:demosBaseUrl}/linear-gauge-ranges' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-ranges-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 目盛
目盛は、リニア ゲージを読み取りやすくするために、目盛の間隔でスケールを分割して見せる役割を果たします。

主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、およびスタイルは、対応するプロパティを設定し制御できます。

補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10

    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05

    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1>
</igx-linear-gauge>
```
<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-tickmarks-iframe" src='{environment:demosBaseUrl}/linear-gauge-tickmarks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-tickmarks-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### ラベル
ラベルはスケールのメジャーを示します。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-linear-gauge>
```

<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-labels-iframe" src='{environment:demosBaseUrl}/linear-gauge-labels' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### バッキング
バッキング要素はブレット グラフ コントロールの背景と境界線を表します。常に最初に描画される要素でラベルやメモリなどの残りの要素は互いにオーバーレイします。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10

    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-linear-gauge>
```

<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-backing-iframe" src='{environment:demosBaseUrl}/linear-gauge-backing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-backing-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### スケール
スケールはゲージで値の全範囲を強調表示する視覚的な要素です。外観やスケールの図形のカスタマイズ、更にスケールを反転 (`isScaleInverted` プロパティを使用) させて、すべてのラベルを左から右ではなく、右から左へ描画することもできます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10

    isScaleInverted=false
    scaleBrush="DodgerBlue"
    scaleOutline="DarkViolet"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-linear-gauge>
```

<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-scale-iframe" src='{environment:demosBaseUrl}/linear-gauge-scale' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-scale-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>
