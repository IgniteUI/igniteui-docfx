---
title: Radial Gauge コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Radial Gauge コンポーネントは、針、目盛り、範囲、およびラベルなどの視覚要素を提供し、定義済みの図形およびスケールを表示できます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular グリッド, Angular データグリッド, Angular グリッドコントロール, Angular グリッドコンポーネント, Angular ラジアル ゲージ コンポーネント, Angular ラジアル ゲージ
_language: ja
---

## Radial Gauge

Radial Gauge コンポーネントは、針、目盛り、範囲、ラベルなどの視覚要素をサポートし、定義済みの図形やスケールを表示できます。

### デモ

Radial Gauge コンポーネントは、ゲージを表示するデータ ビジュアライゼーション ツールです。スケール、目盛り、ラベル、針、および範囲などの複数の視覚要素を含むことができます。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれています。アニメーションは、`transitionDuration` プロパティの設定で簡単にカスタマイズできます。

以下のサンプルは、同じゲージでいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<div class="sample-container loading" style="height: 350px">
    <iframe id="radial-gauge-animation-iframe" src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-animation-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

gauges パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-gauges**

### 必要なモジュール

[`IgxRadialGauge`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgauge.html) は、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxRadialGaugeModule } from "igniteui-angular-gauges/ES5/igx-radial-gauge-module";

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

以下のコードは針およびスケールで 3 つの比較範囲を含むラジアル ゲージを作成する方法を紹介します。

```html
 <igx-radial-gauge height="400px" width="400px"
    value="25"
    interval="5"
    minimumValue="0"
    maximumValue="100">
    <igx-radial-gauge-range startValue="0"
                            endValue="30"
                            brush="red">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="30"
                            endValue="60"
                            brush="yellow">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="60"
                            endValue="100"
                            brush="green">
    </igx-radial-gauge-range>
</igx-radial-gauge>
```

<div class="divider--half"></div>

## 構成可能な要素

### バッキング

ゲージには、スケールの後ろ側に描かれた背景図形があり、図形はゲージの背景として動作します。

バッキング要素はラジアル ゲージ コントロールの背景と境界線を表します。常に最初に描画される要素で針、ラベルやメモリなどの残りの要素はその上のオーバーレイです。

バッキングは、円形またはフィットにできます。円形の場合は 360 度の円形のゲージが作成されますが、一方フィット図形の場合は `scaleStartAngle` および `scaleEndAngle` プロパティで円弧部分が塗りつぶされます。これには、`backingShape` プロパティを設定します。

```html
<igx-radial-gauge
    backingShape="Fitted"
    backingBrush="#fcfcfc"
    backingOutline="DodgerBlue"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15

    scaleStartAngle=135 scaleEndAngle=45

    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="radial-gauge-backing-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-backing' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-backing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### スケール

スケールは視覚要素で、`minimumValue` と `maximumValue` 値を設定してゲージの値範囲全体を強調表示できます。バッキングとともにゲージの全体的な図形を定義します。`scaleStartAngle` と `scaleEndAngle` プロパティは、スケールの円弧の境界線を定義します。`scaleSweepDirection` プロパティが、スケールが時計回りまたは反時計回りのどちらの方向に動くかを指定します。`scaleBrush`、`scaleStartExtent`、`scaleEndExtent` プロパティを設定してスケールの外観をカスタマイズできます。

```html
<igx-radial-gauge
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="DodgerBlue"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575

    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="radial-gauge-scale-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-scale' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-scale-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### ラベル

ゲージ ラベルは `minimumValue` と `maximumValue` の値の間で指定された間隔で数値を表示する視覚要素です。0 はゲージ中央、1 はゲージ バッキングの外側範囲を表す `labelExtent` プロパティで小数を使用してラベルの配置を設定できます。`fontBrush` や `font` など、さまざまなスタイル プロパティを設定してラベルをカスタマイズできます。

```html
<igx-radial-gauge
    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="DodgerBlue"

    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=100 interval=10>
</igx-radial-gauge>
```

 <div class="sample-container loading" style="height: 320px">
    <iframe id="radial-gauge-labels-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-labels' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-labels-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 目盛

目盛は、ラジアル ゲージの中央から放射状に表示される細い線です。目盛には、主目盛および副目盛の 2 種類があり、主目盛りは `minimumValue` と `maximumValue` の間の `interval` に表示されます。また`minorTickCount` プロパティは、隣接する 2 つの主目盛間の副目盛の数を指定します。目盛りの長さは、`tickStartExtent`、`tickEndExtent`、 `minorTickStartExtent`、`minorTickEndExtent` に少数値 (0 から 1 の間) を設定して制御できます。

```html
<igx-radial-gauge
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="DodgerBlue"

    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="DarkViolet"

    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="radial-gauge-tickmarks-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-tickmarks' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-tickmarks-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 範囲

範囲に `minimumValue` や `maximumValue` プロパティで指定した連続値の境界を強調表示します。開始値と終了値を指定してゲージに複数の範囲を追加でき、各範囲には、`brush` や `outline` などのカスタマイズ プロパティがあります。または、`rangeBrushes` や `rangeOutlines` プロパティを範囲の色リストに設定することもできます。

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10

    rangeBrushes ="red, yellow, green"
    rangeOutlines="red, yellow, green">
   <igx-radial-gauge-range
       startValue=5  endValue=15 brush="red">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=15  endValue=35 brush="yellow">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=35  endValue=45 brush="green">
   </igx-radial-gauge-range>
</igx-radial-gauge>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="radial-gauge-ranges-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-ranges' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-ranges-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 針

ゲージ針は、ゲージの設定値を示す視覚要素です。針は、あらかじめ定義されたいくつかの図形の中から選択でき、ピボット図形をゲージの中心に配置できます。またピボット図形は、事前に定義された図形の 1 つを使用します。オーバーレイとアンダーレイを含むピボット図形には、図形に適用する別のピボット ブラシがあります。

サポートされている針の形とキャップは、`needleShape` と `needlePivotShape` プロパティで設定します。

ゲージのインタラクティブ モードを有効 (`IsNeedleDraggingEnabled` プロパティを使用) にするとユーザーは `minimumValue` と `maximumValue` の値間で針をドラッグして値を変更できるようになります。

```html
<igx-radial-gauge
    value=50
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="radial-gauge-needle-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-needle' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-needle-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめています。プロジェクトに簡単にコピーしてブレットグラフのすべての機能を再現できます。

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="#c6c6c6"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575

    value=70
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1

    interval=10
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="Black"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="Black"

    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="Black"

    backingShape="Fitted"
    backingBrush="#ededed"
    backingOutline="Gray"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15

    rangeBrushes ="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232">
    <igx-radial-gauge-range
        startValue=20 endValue=40
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
    <igx-radial-gauge-range
        startValue=40 endValue=60
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
</igx-radial-gauge>
```
