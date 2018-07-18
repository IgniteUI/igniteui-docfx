---
title: Radial Gauge コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Radial Gauge コンポーネントは、針、目盛り、範囲、およびラベルなどの視覚要素を提供し、定義済みの図形およびスケールを表示できます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular グリッド, Angular データグリッド, Angular グリッドコントロール, Angular グリッドコンポーネント, Angular ラジアル ゲージ コンポーネント, Angular ラジアル ゲージ
_language: ja
---
## Radial Gauge

Ignite UI for Angular の Radial Gauge コンポーネントは、針、目盛り、範囲、ラベルなどの視覚要素をサポートし、定義済みの図形およびスケールを表示できます。

### デモ

このゲージは、スケール、針、目盛 (1 組)、ラベル (1 組) をサポートします。またラジアル ゲージ コントロールのすべての変更でアニメーションの機能が強化されています。アニメーションは、`transitionDuration` プロパティの設定で簡単にカスタマイズできます。針の図形パラメータを微調整して、多数の形状の針を作ることができます。以下のサンプルは、同じゲージでいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<div class="sample-container" style="height: 350px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

`minimumValue` と `maximumValue` 値を設定してスケールを作成し、`value` プロパティを設定して針の値を設定します。ゲージは、スケールの視覚的な合図である範囲もサポートします。

ゲージには、スケールの後ろ側に描かれた背景図形があり、図形はゲージの背景として動作します。背景を真円やその他の変形した円形にできます。また、スケールをスイープできるように背景を固定することができ、ゲージのスケールの一部の背景にバッキングを提供することもできます。

ゲージの針は、あらかじめ定義されたいくつかの図形の中から選択できます。ゲージの中心に位置されるピボット図形です。またピボット図形は、事前に定義された図形の 1 つを使用します。オーバーレイとアンダーレイを含むピボット図形には、図形に適用する別のピボット ブラシがあります。

### 依存関係

gauges パッケージをインストールするときに core パッケージもインストールする必要があります。

`npm install ignite-angular-gauges ignite-angular-core`

ラジアル ゲージが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxRadialGaugeModule_ をインポートする必要があります。

```typescript
// app.module.ts
import { IgxRadialGaugeModule } from 'ignite-angular-gauges/ES5/igx-radial-gauge-module';

@NgModule({
    imports: [
        ...
        IgxRadialGaugeModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

以下のコードは針およびスケールで 3 つの比較範囲を含むラジアル ゲージを作成する方法を紹介します。

```html
<igx-radial-gauge height="400px" width="400px"
    value=25
    interval=5
    minimumValue=0
    maximumValue=50>
    <igx-radial-graph-range startValue="0"
                            endValue="30"
                            brush="red"/>
    <igx-radial-graph-range startValue="30"
                            endValue="60"
                            brush="yellow"/>
    <igx-radial-graph-range startValue="60"
                            endValue="100"
                            brush="green"/>
</igx-radial-gauge>
```

<div class="divider--half"></div>

## 構成可能な要素

### バッキング

バッキング要素はラジアル ゲージ コントロールの背景と境界線を表します。常に最初に描画される要素で針、ラベルやメモリなどの残りの要素はその上のオーバーレイです。

この領域は、`backingShape` プロパティの設定で円形またフィットのいずれかにカスタマイズできます。円形の場合は 360 度の円形のゲージが作成されますが、一方フィット図形の場合は `scaleStartAngle` および `scaleEndAngle` プロパティで円弧部分が塗りつぶされます。

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

<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-backing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### スケール

スケールはゲージで値の全範囲を強調表示する視覚的な要素です。バッキングとともにゲージの全体的な図形を定義します。`scaleStartAngle` と `scaleEndAngle` プロパティは、スケールの円弧の境界線を定義します。`scaleSweepDirection` プロパティが、スケールが時計回りまたは反時計回りのどちらの方向に動くかを指定します。`scaleBrush`、`scaleStartExtent`、`scaleEndExtent` プロパティを設定してスケールの外観をカスタマイズできます。

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
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-scale' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
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

    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10>
</igx-radial-gauge>
```
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-labels' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 目盛
目盛は、ラジアル ゲージの中央から放射状に表示される細い線です。目盛には、主目盛および副目盛の 2 種類があります。主目盛りは `minimumValue` と `maximumValue` の間の `interval` に表示されます。`minorTickCount` プロパティを使用して、隣接する 2 つの主目盛間の副目盛の数を指定します。目盛りの長さは、`tickStartExtent`、`tickEndExtent`、 `minorTickStartExtent`、`minorTickEndExtent` に少数値 (0 から 1 の間) を設定して制御できます。

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
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-tickmarks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
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
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-ranges' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 針
ゲージの針は、ゲージの設定値を表すために使用される視覚要素で、針キャップのオーバーレイまたはアンダーレイなどのゲージの針のピボット ポイントで構成されます。サポートされている針の形とキャップは、`needleShape` と `needlePivotShape` プロパティで設定します。

ゲージのインタラクティブ モードを有効 (`isNeedleDraggingEnabled` プロパティを使用) にするとユーザーは `minimumValue` と `maximumValue` の値間で針をドラッグして値を変更できるようになります。

```html
<igx-radial-gauge
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
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-needle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>
