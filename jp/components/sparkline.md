---
title: Angular スパークライン | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular スパークライン チャート コントロールを使用して、グリッド セルやスタンドアロンなどのコンパクトなレイアウトで描画します。Ignite UI for Angular スパークライン チャートの設定可能な要素について説明します。
_keywords: Sparkline, Ignite UI for Angular, Infragistics, WinLoss, Area, Column, スパークライン, インフラジスティックス, エリア, 列
mentionedTypes: ['XamSparkline', 'SparklineDisplayType', 'TrendLineType']
_language: ja
---

# Angular スパークラインの概要

Ignite UI for Angular スパークライン コンポーネントは、軽量なチャート コントロールです。グリッド セル内などのコンパクトなレイアウト内でのレンダリングを目的としていますが、単独でレンダリングすることもできます。

スパークライン コントロールには、チャートの種類、マーカー、範囲、トレンドライン、不明な値のプロット、ツールチップなど、構成およびカスタマイズが可能ないくつかの視覚的要素とそれに対応する機能があります。

## Angular スパークラインの例

<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular スパークラインの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz　で表示
    </button>
</div>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

Ignite UI for Angular スパークライン コンポーネントを使用するには、以下のパッケージをインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

Angular スパークライン コンポーネントには、以下のモジュールのインポートが必要です。

```ts
// app.module.ts
import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxSparklineCoreModule } from "igniteui-angular-charts";
import { SparklineDisplayType } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxSparklineCoreModule,
        IgxSparklineModule
        // ...
    ]
})
export class AppModule {}
```

## スパークラインのタイプ

Ignite UI for Angular スパークライン コンポーネントは、以下のスパークライン タイプをサポートしています。

-   [`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#area)
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#column)
-   [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line)
-   [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss)

タイプは [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) プロパティの設定により定義されます。[`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) プロパティが指定されていない場合は、既定では [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) 型が表示されます。

[`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) スパークライン タイプは、柱状のチャート タイプです。ここでは、各列の値はデータセットの正の最大値 (正の値の場合) または負の最小値 (負の値の場合) に等しくなり、多くの場合 Win または Loss  (または似たような相反する概念) を意味します。[`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) スパークラインを正しく表示するには、データセットには正の値と負の値が必要です。

[`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) スパークラインが、数値のコレクションにバインドできる [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) タイプなどの他のタイプと同じデータにバインドされている場合、スパークライン コンポーネントはそのコレクションから最大値と最小値の 2 つの値を選択し、それらの値に基づいてスパークラインをレンダリングします。

```html
<igx-sparkline height="200px" width="400px"
    [dataSource]="data"
    valueMemberPath="Value"
    displayType="Area" />
```

<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## マーカー

Ignite UI for Angular スパークライン コンポーネントを使用すると、マーカーをシリーズ上の円形のアイコンとして表示して、X/Y 座標に基づいて個々のデータポイントを示すことができます。マーカーは、表示タイプが Line、Area、および Column のスパークラインに設定できます。[`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) 型のスパークラインは、現在マーカーを設定できません。既定では、マーカーは表示されません。

スパークライン内のマーカーは、以下の場所を任意に組み合わせて配置できます。

-   `すべて`: スパークライン内のすべてのデータ ポイントにマーカーを表示します。
-   `低値`: 最低値のデータ ポイントにマーカーを表示します。最小値に複数の点がある場合は、その値を持つ各点に表示されます。
-   `高値`: 最低値のデータ ポイントにマーカーを表示します。最高値に複数のポイントがある場合は、その値を持つ各ポイントに表示されます。
-   `始値`: スパークラインの最初のデータポイントにマーカーを表示します。
-   `終値`: スパークラインの最後のデータ ポイントにマーカーを表示します。
-   `負数`: スパークラインにプロットされた負のデータ点にマーカーを表示します。

上記のすべてのマーカーは、色、可視性、およびサイズの観点で関連マーカー タイプのプロパティを使用してカスタマイズできます。たとえば、上記の `Low` マーカーは、[`lowMarkerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkerbrush)、[`lowMarkerVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkervisibility)、[`lowMarkerSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkersize) の各プロパティを持ちます。

```html
<igx-sparkline
    highMarkerVisibility="Visible"
    lowMarkerVisibility="Visible"
    firstMarkerVisibility="Visible"
    lastMarkerVisibility="Visible"
    negativeMarkerVisibility="Visible"
    markerVisibility="Collapsed"
    markerSize="10"
    firstMarkerSize="10"
    lastMarkerSize="10"
    lowMarkerSize="10"
    highMarkerSize="10"
    negativeMarkerSize="10"/>
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-markers-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-markers' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-markers-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## 標準範囲

Ignite UI for Angular スパークライン コンポーネントの通常の範囲機能は、データが視覚化されているときに定義済みの意味のある範囲を表す水平方向の縞模様です。標準範囲は、指定した色のアウトラインで網掛けエリアとして設定できます。

通常の範囲は、最大データ ポイントよりも広い場合もあれば、それを超える場合もあります。また、しきい値インジケータとして機能するように、スパークラインの [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) 表示タイプと同じ幅にすることもできます。正常範囲の幅は、正常範囲を表示するために最低限必要な以下の 3 つのプロパティによって決まります。

-   [`normalRangeVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangevisibility): 標準範囲が表示されるかどうか。
-   [`normalRangeMaximum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangemaximum): 範囲の下境界線。
-   [`normalRangeMinimum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangeminimum): 範囲の上境界線。

既定では、標準範囲は表示されません。有効にすると、標準範囲は薄い灰色の外観で表示されますが、[`normalRangeFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangefill) プロパティを使用して構成することもできます。

DisplayNormalRangeInFront プロパティを設定することで、スパークライン コンポーネントのプロットされたシリーズの前または後ろに標準範囲を表示するかどうかを設定することもできます。

```html
<igx-sparkline
    normalRangeVisibility="Visible"
    normalRangeMinimum="1"
    normalRangeMaximum="4"
    normalRangeFill="rgba(88, 88, 88, 0.4)"
    displayNormalRangeInFront="true" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-normal-range-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-normal-range' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-normal-range-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## トレンドライン

Ignite UI for Angular スパークライン コンポーネントは、実際のスパークライン レイヤーの上に別のレイヤーとして表示される一連のトレンドラインをサポートしています。近似曲線を表示するには、[`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#trendlinetype) プロパティを使用します。

近似曲線は、チャートがバインドされているデータの値を使用して、[`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#trendlinetype) プロパティで指定されたアルゴリズムに従って計算されます。

近似曲線は一度に 1 つだけ表示でき、デフォルトでは近似曲線は表示されません。

サポートされている近似曲線のリストは以下にあります。

-   [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#none)
-   [`CubicFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#cubicfit)
-   [`CumulativeAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#cumulativeaverage)
-   [`ExponentialAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#exponentialaverage)
-   [`ExponentialFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#exponentialfit)
-   [`LinearFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#linearfit)
-   [`LogarithmicFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#logarithmicfit)
-   [`ModifiedAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#modifiedaverage)
-   [`PowerLawFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#powerlawfit)
-   [`QuadraticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quadraticfit)
-   [`QuarticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quarticfit)
-   [`QuinticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quinticfit)
-   [`SimpleAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#simpleaverage)
-   [`WeightedAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#weightedaverage)

以下のコード例は、Ignite UI for Angular スパークライン コンポーネントで近似曲線を有効にする方法を示しています。

```html
<igx-sparkline
    trendLineThickness="3"
    trendLinePeriod="5"
    trendLineType="ExponentialFit"
    trendLineBrush="gray" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## 不明な値の補間

Ignite UI for Angular スパークライン コンポーネントは、不明な値を検出し、指定された補間アルゴリズムを介して不明な値のためのスペースを描画することができます。データに null 値が含まれていて、この機能を使用しない場合、つまり補間が指定されていない場合、不明な値はプロットされません。

未知の値をプロットするために、スパークライン コンポーネントの [`unknownValuePlotting`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#unknownvalueplotting) プロパティを設定することができます。

```html
<igx-sparkline
    unknownValuePlotting="LinearInterpolate" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-unknown-values-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-unknown-values-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>


<div class="divider--half"></div>

## データ グリッドのスパークライン

Ignite UI for Angular スパークライン コンポーネントは、データ グリッドのテンプレート列またはテンプレートをサポートする他のコンポーネントに埋め込むことができます。以下のコード例ではその方法を示します。

```html
<igx-grid #grid1 [data]="data | async"
[height]="'500px'" width="100%" [autoGenerate]='false' >
    <!-- ... -->
    <igx-column [field]="'OrderHistory'" [width]="'160px'" header="Order History" >
        <ng-template igxCell let-val>
            <igx-sparkline height="50px" width="150px"
            [dataSource]="val"
            valueMemberPath="Sold"
            displayType="Line"
            lineThickness="2"
            brush="rgb(21, 190, 6)"  >
            </igx-sparkline>
        </ng-template>
    </igx-column>
    <!-- ... -->
</igx-grid>
```

<div class="sample-container loading" style="height: 530px">
    <iframe id="sparkline-grid-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-grid' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-grid-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

