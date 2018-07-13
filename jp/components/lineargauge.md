---
title: Linear Gauge コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Linear Gauge コンポーネントを使用すると、値をスケールまたは複数の範囲に比較することを表示します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular リニア ゲージ コンポーネント, Angular リニア ゲージ
_language: ja
---
## Linear Gauge

Ignite UI for Angular の Linear Gauge コンポーネントは、値とスケールまたは複数の範囲に対する比較を表示します。

### デモ

<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-sample-iframe" src='{environment:demosBaseUrl}/linear-gauge-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

リニア ゲージの機能には構成可能な向きや方向、視覚要素などがあります。このコンポーネントは、アニメーション トランジションがサポートされます。

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

## 構成可能な視覚要素

**針** - コンポーネントにより表示される主要なメジャーで、バーとして可視化されます。

```html
 <igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    needleShape = "Needle"
    needleBrush = "red">
</igx-linear-gauge>
```

**比較範囲** - 範囲は、スケール上で指定した値の領域を強調表示する視覚的な要素です。パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50 >
    <igx-linear-graph-range
        startValue=0 endValue=30
        brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=30 endValue=70
        brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=70 endValue=100
        brush="green">
    </igx-linear-graph-range>
</igx-linear-gauge>
```

**目盛** - 目盛は、リニア ゲージを読み取りやすくするために目盛の間隔でスケールを分割して見せる役割を果たします。

主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、スタイルは、対応するプロパティを設定し制御できます。

補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    minorTickEndExtent = 0.10
    minorTickStartExtent = 0.20
    tickStartExtent = 0.25
    tickEndExtent = 0.05
    tickStrokeThickness = 2>
</igx-linear-gauge>
```

**ラベル** - スケールのメジャーを示します。

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    interval = 10
    labelInterval = 10>
</igx-linear-gauge>
```

**背景** – 視覚要素が配置された背景のパターンおよび色を設定できます。

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    backingBrush = "#ffffff"
    backingOutline = "#d1d1d1"
    backingStrokeThickness = 0>
</igx-linear-gauge>
```

