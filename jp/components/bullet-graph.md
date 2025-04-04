---
title: Angular ブレット グラフ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular ブレット グラフ コントロールを使用すると、範囲を表示し、複数の測定値を比較するダッシュボードを作成できます。インフラジスティックスのデータ視覚化ツールを是非お試しください!
_keywords: Angular Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics, ブレット グラフ, インフラジスティックス, Angular ブレット グラフ, アニメーション, ラベル, ニードル, スケール, 範囲, 目盛, インフラジスティックス
mentionedTypes: ["XamBulletGraph"]
namespace: Infragistics.Controls.Gauges
_language: ja
---

# Angular ブレット グラフの概要

Angular Bullet Graph コンポーネントは、目盛り上でメジャーの比較を簡潔にリニアで表示します。

ブレット グラフ コンポーネントは、きれいなデータ表現を作成するための多数の機能をサポートします。ブレット グラフは、目標に対する進捗状況、評価の範囲、複数の測定比較を表現する際に最も効率的で効果的なグラフの 1 つです。ブレット グラフは、水平または垂直のわずかな領域で、ゴールに至る進捗、評価の範囲、複数の測定比較を表現するための最も効率的で効果的な方法の 1 つです。

## Angular ブレット グラフの例

以下のサンプルは、同じ [`IgxBulletGraphComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html) でいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<code-view style="height: 155px" alt="Angular ブレット グラフの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/animation"
                                                 github-src="gauges/bullet-graph/animation">
</code-view>


<div class="divider--half"></div>

このゲージは、スケール、針、目盛 (1 組)、ラベル (1 組) をサポートします。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれています。アニメーションは、[`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#transitionDuration) プロパティの設定で簡単にカスタマイズできます。
ブレット グラフの機能には構成可能な向きや方向、視覚要素やツールチップなどがあります。

<!-- Angular, React, WebComponents -->

## 依存関係

gauge パッケージのインストール時に core パッケージもインストールする必要があります。

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxBulletGraphComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html) を作成するには、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxBulletGraphModule
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## 使用方法

以下のコードは、ブレット グラフ コンポーネントを作成し、パフォ―マンス バーと比較目盛マーカー、および 3 つの比較範囲をスケールに構成します。

```html
 <igx-bullet-graph height="100"
                   width="300"
                   minimumValue="5"
                   maximumValue="55"
                   value="35"
                   targetValue="43">
        <igx-linear-graph-range startValue="0"
                                endValue="15"
                                brush="#828181">
        </igx-linear-graph-range>
        <igx-linear-graph-range startValue="15"
                                endValue="30"
                                brush="#AAAAAA">
        </igx-linear-graph-range>
        <igx-linear-graph-range startValue="30"
                                endValue="55"
                                brush="#D0D0D0">
        </igx-linear-graph-range>
 </igx-bullet-graph>
```

<div class="divider--half"></div>

## 比較メジャー

ブレットグラフは、パフォーマンス値とターゲット値の 2 つのメジャーを表示できます。

パフォーマンス値は、コンポーネントで表示されるプライマリ メジャーでグラフ全体の長さに沿って拡張するバーとして表示されます。ターゲット値は、パフォーマンス値が比較の対象とするメジャーでパフォーマンス バーの向きに対して直角に交わる小さなブロックとして表示されます。

```html
<igx-bullet-graph
    value=50
    valueBrush="DodgerBlue"
    valueStrokeThickness=1
    valueInnerExtent=0.5
    valueOuterExtent=0.65
    targetValue=80
    targetValueBreadth=10
    targetValueBrush="LimeGreen"
    targetValueOutline="LimeGreen"
    targetValueStrokeThickness=1
    targetValueInnerExtent=0.3
    targetValueOuterExtent=0.85
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100>
</igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular ブレット グラフ メジャー"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/measures"
                                                 github-src="gauges/bullet-graph/measures">
</code-view>


## ハイライト値

バレット グラフのパフォーマンス値をさらに変更して、進捗状況をハイライト値として表示することもできます。これにより、[`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#value) が低い不透明度で表示されます。良い例としては、[`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#value) が 50 で、[`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValue) が 25 に設定されている場合です。これは、[`targetValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#targetValue) の値が何に設定されているかに関係なく、50% のパフォーマンスを表します。これを有効にするには、まず [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValueDisplayMode) を Overlay に設定し、次に [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValue) を [`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#value) よりも低い値に適用します。

```html
<igx-bullet-graph
    #bulletGraph
    height="80px" 
    width="400px"
    value=70 
    targetValue=90
    minimumValue=0 
    maximumValue=100 
    interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    highlightValueDisplayMode="Overlay"
    highlightValue=25>
  </igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular バレット グラフの針のハイライト"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/highlight-needle"
                                                 github-src="gauges/bullet-graph/highlight-needle">
</code-view>


## 比較範囲

範囲はスケールで指定した値の範囲をハイライト表示する視覚的な要素です。その目的は、パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=80 interval=10
    maximumValue=100 targetValue=90
    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=0 endValue=40
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=70
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=70 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
</igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular ブレット グラフの範囲"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/ranges"
                                                 github-src="gauges/bullet-graph/ranges">
</code-view>


## 目盛

目盛は、ブレット グラフを読み取りやすくするために、目盛の間隔でスケールを分割して見せる役割を果たします。

*   主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、およびスタイルは、対応するプロパティを設定し制御できます。
*   補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70
    maximumValue=100 targetValue=90
    interval=10
    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.2
    tickEndExtent=0.075
    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.1
    minorTickStartExtent=0.2
    minorTickStrokeThickness=1>
</igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular  ブレット グラフの目盛"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/tickmarks"
                                                 github-src="gauges/bullet-graph/tickmarks">
</code-view>


## ラベル

ラベルはスケールのメジャーを示します。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular ブレット グラフのラベル"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/labels"
                                                 github-src="gauges/bullet-graph/labels">
</code-view>


## バッキング

バッキング要素はブレット グラフ コントロールの背景と境界線を表します。常に最初に描画される要素でラベルやメモリなどの残りの要素は互いにオーバーレイします。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular ブレット グラフのバッキング"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/background"
                                                 github-src="gauges/bullet-graph/background">
</code-view>


## スケール

スケールはゲージで値の全範囲をハイライト表示する視覚的な要素です。外観やスケールの図形のカスタマイズ、更にスケールを反転 ([`isScaleInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#isScaleInverted) プロパティを使用) させて、すべてのラベルを左から右ではなく、右から左へ描画することもできます。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    isScaleInverted=false
    scaleBackgroundBrush="DodgerBlue"
    scaleBackgroundOutline="DarkViolet"
    scaleBackgroundThickness=2
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-bullet-graph>
```

<code-view style="height: 125px" alt="Angular ブレット グラフのスケール"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph/scale"
                                                 github-src="gauges/bullet-graph/scale">
</code-view>


## まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめています。プロジェクトに簡単にコピーしてブレットグラフのすべての機能を再現できます。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100
    isScaleInverted=false
    scaleBackgroundBrush="Gray"
    scaleBackgroundOutline="Gray"
    scaleBackgroundThickness=2
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    value=50
    valueBrush="Black"
    valueStrokeThickness=1
    valueInnerExtent=0.5
    valueOuterExtent=0.65
    targetValue=80
    targetValueBreadth=7.5
    targetValueBrush="Black"
    targetValueOutline="Black"
    targetValueStrokeThickness=1
    targetValueInnerExtent=0.3
    targetValueOuterExtent=0.85

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.2
    tickEndExtent=0.075

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.1
    minorTickStartExtent=0.2
    minorTickStrokeThickness=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=20 endValue=40
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=60
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=60 endValue=90
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
</igx-bullet-graph>
```

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   [`IgxBulletGraphComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html)
*   [`IgxLinearGraphRangeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargraphrangecomponent.html)

## その他のリソース

その他のゲージ タイプの詳細については、以下のトピックを参照してください。

*   [リニア ゲージ](linear-gauge.md)
*   [ラジアル ゲージ](radial-gauge.md)
