---
title: Linear Gauge コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Linear Gauge コンポーネントを使用すると、値をスケールまたは複数の範囲に比較することを表示します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular リニア ゲージ コンポーネント, Angular リニア ゲージ
_language: ja
---
## Linear Gauge

Ignite UI for Angular の Linear Gauge コンポーネントは、値とスケールまたは複数の範囲に対する比較を表示します。

### デモ

<div class="sample-container" style="height: 550px">
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

## 論理領域

リニア ゲージ コンポーネントの表示領域は、論理的に予約領域とグラフ領域に区別されます。

![](../images/Linear_Gauge_1.png)
 
各領域はコンポーネントの一部の視覚要素に関連した異なる目的があります。

**予約領域** (1)

この領域は以下のように拡張します。

* スケール全域 -
    * 水平方向: 予約領域がコンポーネントの下端から開始され、ラベルのフォントのサイズなどの書式設定に従い、番号ラベルと同じ高さまで上に広がります。

    * 垂直方向: 予約領域がコンポーネントの左端から開始され、スケール測定番号の大きさおよびラベルのフォントのサイズなどの書式設定に従い、番号ラベルと同じ幅まで右に広がります。

予約領域は水平方向または垂直方向でスケールのラベルに表示するスペースを提供します。予約領域は方向に基づいて自動的にサイズ変更し、方向によってラベルを表示するスペース要件が変更されます。

**グラフ領域** (2)  

リニア ゲージの針、目盛、範囲、オプションで番号ラベルを表示する領域です。ラベルを除く視覚要素の範囲関連のプロパティはすべてその端に対して測定されます。

グラフ領域のスプレッド:

**スケールに沿った方向** - スケールの開始位置および終了位置は、両方ともグラフ領域の始点側の端 (水平方向の左端または垂直方向の下端) に対して測定されます。

**スケール全域** - グラフ領域は、予約領域の端 (水平方向でグラフ領域の下端または垂直方向でグラフ領域の左端) から開始されます。予約領域の境界線で接しているグラフ領域の端は、スケールの一部の視覚要素の範囲関連プロパティに対する、スケール全域に視覚要素を配置するための参照点としての役割を果たします。

## 構成可能な視覚要素
リニア ゲージ コンポーネントは、以下の視覚要素が特徴です(下の図を参照)。
 
![](../images/Linear_Gauge_2.png)

**針** (3) - コンポーネントにより表示される主要なメジャーで、バーとして可視化されます。

**比較範囲** (4) - 範囲は、スケール上で指定した値の領域を強調表示する視覚的な要素です。パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

**目盛** (5) - 目盛は、リニア ゲージを読み取りやすくするために目盛の間隔でスケールを分割して見せる役割を果たします。

主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、スタイルは、対応するプロパティを設定し制御できます。

補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

**スケール ラベル** (6) - スケールのメジャーを示します。

**境界線** (7) - コンポーネントのディメンションを視覚的に区切る線です。

**背景** (8) – 視覚要素が配置された背景のパターンおよび色を設定できます。

