---
title: Angular ラジアル ゲージ チャート | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular ラジアル ゲージコ ントロールを使用して、魅力的なデータ可視化とダッシュボードを作成し、豊富なスタイルと対話機能を KPI で実現できます。Ignite UI for Angular ラジアル ゲージの設定可能な要素について説明します。
_keywords: Radial Gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks, ラジアル ゲージ, インフラジスティックス, アニメーション, ラベル, 針, スケール, 範囲, 目盛
mentionedTypes: ['XamRadialGauge', 'XamRadialGaugeRange']
_language: ja
---

# Angular ラジアル ゲージの概要

Angular Radial Gauge コンポーネントは、針、目盛り、範囲、ラベルなどの視覚要素をサポートし、定義済みの図形やスケールを表示できます。

## Angular ラジアル ゲージの例

Ignite UI for Angular Radial Gauge コンポーネントは、ゲージを表示するデータ ビジュアライゼーション ツールです。スケール、目盛り、ラベル、針、および範囲などの複数の視覚要素を含むことができます。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれています。アニメーションは、[`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#transitionduration) プロパティの設定で簡単にカスタマイズできます。

以下のサンプルは、同じゲージでいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:dvDemosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ラジアル ゲージの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

gauges コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
</pre>

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html) を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   RadialGaugeModule
    <!-- end: Blazor -->

```ts
// app.module.ts
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeComponent } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule,
        IgxRadialGaugeComponent
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## 使用方法

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

## バッキング

ゲージには、スケールの後ろ側に描かれた背景図形があり、図形はゲージの背景として動作します。

バッキング要素はラジアル ゲージ コントロールの背景と境界線を表します。常に最初に描画される要素で針、ラベルやメモリなどの残りの要素はその上のオーバーレイです。

バッキングは、円形またはフィットにできます。円形の場合は 360 度の円形のゲージが作成されますが、一方フィット図形の場合は [`scaleStartAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scalestartangle) および [`scaleEndAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scaleendangle) プロパティで円弧部分が塗りつぶされます。これには、[`backingShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#backingshape) プロパティを設定します。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-backing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## スケール

スケールは視覚要素で、[`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minimumvalue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#maximumvalue) 値を設定してゲージの値範囲全体を強調表示できます。バッキングとともにゲージの全体的な図形を定義します。[`scaleStartAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scalestartangle) と [`scaleEndAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scaleendangle) プロパティは、スケールの円弧の境界線を定義します。[`scaleSweepDirection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scalesweepdirection) プロパティが、スケールが時計回りまたは反時計回りのどちらの方向に動くかを指定します。[`scaleBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scalebrush)、[`scaleStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scalestartextent)、[`scaleEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#scaleendextent) プロパティを設定してスケールの外観をカスタマイズできます。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-scale-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## ラベル

ゲージ ラベルは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minimumvalue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#maximumvalue) の値の間で指定された間隔で数値を表示する視覚要素です。0 はゲージ中央、1 はゲージ バッキングの外側範囲を表す [`labelExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#labelextent) プロパティで小数を使用してラベルの配置を設定できます。[`fontBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#fontbrush) や [`font`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#font) など、さまざまなスタイル プロパティを設定してラベルをカスタマイズできます。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-labels-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## 目盛

目盛は、ラジアル ゲージの中央から放射状に表示される細い線です。目盛には、主目盛および副目盛の 2 種類があり、主目盛りは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minimumvalue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#maximumvalue) の間の [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#interval) に表示されます。また [`minorTickCount`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minortickcount) プロパティは、隣接する 2 つの主目盛間の副目盛の数を指定します。目盛りの長さは、[`tickStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#tickstartextent)、[`tickEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#tickendextent)、[`minorTickStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minortickstartextent)、[`minorTickEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minortickendextent) に少数値 (0 から 1 の間) を設定して制御できます。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-tickmarks-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## 範囲

範囲に [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minimumvalue) や [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#maximumvalue) プロパティで指定した連続値の境界を強調表示します。開始値と終了値を指定してゲージに複数の範囲を追加でき、各範囲には、[`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugerangecomponent.html#brush) や [`outline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugerangecomponent.html#outline) などのカスタマイズ プロパティがあります。または、[`rangeBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#rangebrushes) や [`rangeOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#rangeoutlines) プロパティを範囲の色リストに設定することもできます。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-ranges-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## 針

ゲージ針は、ゲージの設定値を示す視覚要素です。針は、あらかじめ定義されたいくつかの図形の中から選択でき、ピボット図形をゲージの中心に配置できます。またピボット図形は、事前に定義された図形の 1 つを使用します。オーバーレイとアンダーレイを含むピボット図形には、図形に適用する別のピボット ブラシがあります。

サポートされている針の形とキャップは、[`needleShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#needleshape) と [`needlePivotShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#needlepivotshape) プロパティで設定します。

ゲージのインタラクティブ モードを有効 ([`isNeedleDraggingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#isneedledraggingenabled) プロパティを使用) にするとユーザーは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#minimumvalue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#maximumvalue) の値間で針をドラッグして値を変更できるようになります。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-needle-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## まとめ

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
