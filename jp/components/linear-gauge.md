---
title: Angular リニア ゲージ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular リニア ゲージ コントロールを使用して、シンプルで簡潔なビューでデータを可視化します。Ignite UI for Angular リニア ゲージの設定可能な要素について説明します。
_keywords: linear gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks, リニア ゲージ, インフラジスティックス, アニメーション, ラベル, 針, スケール, 範囲, 目盛
mentionedTypes: ["XamLinearGauge"]
namespace: Infragistics.Controls.Gauges
_language: ja
---

# Angular リニア ゲージの概要

Ignite UI for Angular リニア ゲージ コンポーネントを使用すると、リニア ゲージの形式でデータを視覚化できます。[`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html) は、スケールおよび 1 つ以上の範囲と比較した値のシンプルで簡潔なビューを提供します。1 つのスケール、1 セットの目盛り、および 1 セットのラベルをサポートします。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれており、アニメーションでは、[`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#transitionDuration) プロパティの設定で簡単にカスタマイズできます。また構成可能な向きや方向、視覚要素やツールチップなどがサポートされます。

## Angular リニア ゲージの例

以下のサンプルは、同じ [`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html) でいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<code-view style="height: 155px" alt="Angular リニア ゲージの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/animation"
                                                 github-src="gauges/linear-gauge/animation">
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

Angular gauge コンポーネントをインストールするときに core パッケージもインストールする必要があります。

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html) を作成するには、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxLinearGaugeModule
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## 使用方法

以下のコードは針およびスケールで 3 つの比較範囲を含むリニア ゲージを作成する方法を紹介します。

```html
 <igx-linear-gauge width="700px"
                   height="30px"
                   minimumValue="5"
                   maximumValue="55"
                   value="43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="15"
                            endValue="30"
                            brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="30"
                            endValue="55"
                            brush="green">
    </igx-linear-graph-range>
 </igx-linear-gauge>
```

<div class="divider--half"></div>

## 針

これは、コンポーネントで表示されるプライマリ メジャーでバーで可視化されます。あるいは以下で示す図形のほとんどすべてをカスタマイズすることもできます。

```html
 <igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100 interval=10
    value=50
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

<code-view style="height: 125px" alt="Angular リニア ゲージのneedle"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/needle"
                                                 github-src="gauges/linear-gauge/needle">
</code-view>


## 針のハイライト

リニア ゲージを変更して、2 番目の針を表示できます。これにより、メイン針の [`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#value) の不透明度が低く表示されます。これを有効にするには、まず [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#highlightValueDisplayMode) を Overlay に設定し、次に [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#highlightValue) を適用します。

```html
<igx-linear-gauge
    #linearGauge
    height="80px" 
    width="400px"
    value=70
    minimumValue=0 
    maximumValue=100 
    interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    needleBrush="Blue"
    highlightValueDisplayMode="Overlay"
    highlightValue=25
    isHighlightNeedleDraggingEnabled=true>
</igx-linear-gauge>
```

<code-view style="height: 125px" alt="Angular リニア ゲージの針のハイライト"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/highlight-needle"
                                                 github-src="gauges/linear-gauge/highlight-needle">
</code-view>


## 範囲

範囲はスケールで指定した値の範囲をハイライト表示する視覚的な要素です。その目的は、パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

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

<code-view style="height: 125px" alt="Angular リニア ゲージの範囲"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/ranges"
                                                 github-src="gauges/linear-gauge/ranges">
</code-view>


## 目盛

目盛は、リニア ゲージを読み取りやすくするために、目盛の間隔でスケールを分割して見せる役割を果たします。

主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、およびスタイルは、対応するプロパティを設定し制御できます。

補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100
    interval=10
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

<code-view style="height: 125px" alt="Angular リニア ゲージの目盛"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/tickmarks"
                                                 github-src="gauges/linear-gauge/tickmarks">
</code-view>


## ラベル

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

<code-view style="height: 125px" alt="Angular リニア ゲージのラベル"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/labels"
                                                 github-src="gauges/linear-gauge/labels">
</code-view>


## バッキング

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

<code-view style="height: 125px" alt="Angular リニア ゲージのバッキング"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/backing"
                                                 github-src="gauges/linear-gauge/backing">
</code-view>


## スケール

スケールはゲージで値の全範囲をハイライト表示する視覚的な要素です。外観やスケールの図形のカスタマイズ、更にスケールを反転 ([`isScaleInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#isScaleInverted) プロパティを使用) させて、すべてのラベルを左から右ではなく、右から左へ描画することもできます。

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

<code-view style="height: 125px" alt="Angular リニア ゲージのスケール"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/linear-gauge/scale"
                                                 github-src="gauges/linear-gauge/scale">
</code-view>


## まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめています。プロジェクトに簡単にコピーしてブレットグラフのすべての機能を再現できます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1

    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="Black"
    needleOutline="Black"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07

    isScaleInverted=false
    scaleBrush="Gray"
    scaleOutline="Gray"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
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

<div class="divider--half"></div>

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   [`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html)
*   [`IgxLinearGraphRangeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargraphrangecomponent.html)

## その他のリソース

その他のゲージ タイプの詳細については、以下のトピックを参照してください。

*   [ブレット グラフ](bullet-graph.md)
*   [ラジアル ゲージ](radial-gauge.md)
