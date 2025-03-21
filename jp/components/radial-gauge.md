---
title: Angular ラジアル ゲージ チャート | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular ラジアル ゲージコ ントロールを使用して、魅力的なデータ可視化とダッシュボードを作成し、豊富なスタイルと対話機能を KPI で実現できます。Ignite UI for Angular ラジアル ゲージの設定可能な要素について説明します。
_keywords: Radial Gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks, ラジアル ゲージ, インフラジスティックス, アニメーション, ラベル, 針, スケール, 範囲, 目盛
mentionedTypes: ["XamRadialGauge", "XamRadialGaugeRange"]
namespace: Infragistics.Controls.Gauges
_language: ja
---

# Angular ラジアル ゲージの概要

Angular Radial Gauge コンポーネントは、針、目盛り、範囲、ラベルなどの視覚要素をサポートし、定義済みの図形やスケールを表示できます。[`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) には、アニメーション化されたトランジションのサポートも組み込まれています。アニメーションは、[`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#transitionDuration) プロパティの設定で簡単にカスタマイズできます。

## Angular ラジアル ゲージの例

以下のサンプルは、同じ [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) でいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<code-view style="height: 375px" alt="Angular ラジアル ゲージの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/animation"
                                                 github-src="gauges/radial-gauge/animation">
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

gauge コンポーネントをインストールするときに core パッケージもインストールする必要があります。

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) を作成するには、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule
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

バッキングは、円形またはフィットにできます。円形の場合は 360 度の円形のゲージが作成されますが、一方フィット図形の場合は [`scaleStartAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartAngle) および [`scaleEndAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndAngle) プロパティで円弧部分が塗りつぶされます。これには、[`backingShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#backingShape) プロパティを設定します。

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

<code-view style="height: 320px" alt="Angular ラジアル ゲージのバッキング"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/backing"
                                                 github-src="gauges/radial-gauge/backing">
</code-view>


## スケール

スケールは視覚要素で、[`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) 値を設定してゲージの値範囲全体をハイライト表示できます。バッキングとともにゲージの全体的な図形を定義します。[`scaleStartAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartAngle) と [`scaleEndAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndAngle) プロパティは、スケールの円弧の境界線を定義します。[`scaleSweepDirection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleSweepDirection) プロパティが、スケールが時計回りまたは反時計回りのどちらの方向に動くかを指定します。[`scaleBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleBrush)、[`scaleStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartExtent)、[`scaleEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndExtent) プロパティを設定してスケールの外観をカスタマイズできます。

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

<code-view style="height: 320px" alt="Angular ラジアル ゲージのスケール"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/scale"
                                                 github-src="gauges/radial-gauge/scale">
</code-view>


## ラベルとタイトル

ゲージ ラベルは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) の値の間で指定された間隔で数値を表示する視覚要素です。0 はゲージ中央、1 はゲージ バッキングの外側範囲を表す [`labelExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#labelExtent) プロパティで小数を使用してラベルの配置を設定できます。[`fontBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#fontBrush) や [`font`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#font) など、さまざまなスタイル プロパティを設定してラベルをカスタマイズできます。

これらの針のラベルにはそれぞれ、[`titleExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleExtent)、[`titleAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleAngle)、`SubtitleFontSize`、[`highlightLabelBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelBrush) など、フォント、角度、ブラシ、ゲージの中心からの距離を変更するために適用できるさまざまなスタイル属性があります。

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

<code-view style="height: 320px" alt="Angular ラジアル ゲージのラベル"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/labels"
                                                 github-src="gauges/radial-gauge/labels">
</code-view>


## タイトルとサブタイトル

[`titleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText) プロパティと [`subtitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText) プロパティが使用可能であり、どちらも針のカスタム テキストを表示するために使用できます。あるいは、[`titleDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleDisplaysValue) と [`subtitleDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleDisplaysValue) を true に設定すると、針の値が表示され、[`titleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText) と [`subtitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText) がオーバーライドされます。したがって、タイトルにカスタム テキストを使用しながらサブタイトルで値を表示したり、その逆を行ったりすることができます。

以下に説明するように針のハイライトが表示されている場合は、[`highlightLabelText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelText) を介してカスタム テキストを表示できます。それ以外の場合は、[`highlightLabelDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelDisplaysValue) を有効にしてその値を表示できます。

```html
<igx-radial-gauge
    titleText="Global Sales"
    subtitleText="2024">
</igx-radial-gauge>
```

## オプティカル スケーリング

ラジアル ゲージのラベルとタイトルにより、スケーリングを変更できます。これを有効にするには、まず [`opticalScalingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingEnabled) を true に設定します。次に、ラベルが 100% のオプティカル スケーリングを持つサイズを管理する [`opticalScalingSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingSize) を設定できます。ゲージのサイズが大きくなると、ラベルのフォントも大きくなります。たとえば、このプロパティが 500 に設定され、ゲージのピクセル単位のサイズが 2 倍の 1000 になると、ラベルのフォント サイズは 200% 大きくなります。

<code-view style="height: 500px" alt="Angular ラジアル ゲージのオプティカル スケーリング"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/optical-scaling"
                                                 github-src="gauges/radial-gauge/optical-scaling">
</code-view>


## 目盛

目盛は、ラジアル ゲージの中央から放射状に表示される細い線です。目盛には、主目盛および副目盛の 2 種類があり、主目盛りは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) の間の [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#interval) に表示されます。また [`minorTickCount`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickCount) プロパティは、隣接する 2 つの主目盛間の副目盛の数を指定します。目盛りの長さは、[`tickStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#tickStartExtent)、[`tickEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#tickEndExtent)、[`minorTickStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickStartExtent)、[`minorTickEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickEndExtent) に少数値 (0 から 1 の間) を設定して制御できます。

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

<code-view style="height: 320px" alt="Angular ラジアル ゲージの目盛"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/tickmarks"
                                                 github-src="gauges/radial-gauge/tickmarks">
</code-view>


## 範囲

範囲に [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) や [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) プロパティで指定した連続値の境界をハイライト表示します。開始値と終了値を指定してゲージに複数の範囲を追加でき、各範囲には、[`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html#brush) や [`outline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html#outline) などのカスタマイズ プロパティがあります。または、[`rangeBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#rangeBrushes) や [`rangeOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#rangeOutlines) プロパティを範囲の色リストに設定することもできます。

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

<code-view style="height: 320px" alt="Angular ラジアル ゲージの範囲"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/ranges"
                                                 github-src="gauges/radial-gauge/ranges">
</code-view>


## 針

ゲージ針は、ゲージの設定値を示す視覚要素です。針は、あらかじめ定義されたいくつかの図形の中から選択でき、ピボット図形をゲージの中心に配置できます。またピボット図形は、事前に定義された図形の 1 つを使用します。オーバーレイとアンダーレイを含むピボット図形には、図形に適用する別のピボット ブラシがあります。

サポートされている針の形とキャップは、[`needleShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#needleShape) と [`needlePivotShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#needlePivotShape) プロパティで設定します。

ゲージのインタラクティブ モードを有効 ([`isNeedleDraggingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#isNeedleDraggingEnabled) プロパティを使用) にするとユーザーは [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) の値間で針をドラッグして値を変更できるようになります。

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

<code-view style="height: 320px" alt="Angular ラジアル ゲージの針"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/needle"
                                                 github-src="gauges/radial-gauge/needle">
</code-view>


## 針のハイライト

ラジアル ゲージを変更して、2 番目の針を表示できます。これにより、メイン針の [`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#value) の不透明度が低く表示されます。これを有効にするには、まず [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValueDisplayMode) を Overlay に設定し、次に [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValue) を適用します。

```html
<igx-radial-gauge #radialGauge
    labelExtent=0.65
    labelInterval=10
    highlightValueDisplayMode="Overlay"
    highlightValue=50
    highlightLabelDisplaysValue=true
    highlightLabelSnapsToNeedlePivot=true
    isHighlightNeedleDraggingEnabled=true
    height="100%" width="100%"
    minimumValue=0 value=30
    maximumValue=100 interval=10  >
</igx-radial-gauge>
```

<code-view style="height: 320px" alt="Angular ラジアル ゲージの針のハイライト"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/highlight-needle"
                                                 github-src="gauges/radial-gauge/highlight-needle">
</code-view>


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

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)
*   [`IgxRadialGaugeRangeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html)

## その他のリソース

その他のゲージ タイプの詳細については、以下のトピックを参照してください。

*   [ブレット グラフ](bullet-graph.md)
*   [リニア ゲージ](linear-gauge.md)
