---
title: Radial Gauge コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular の Radial Gauge コンポーネントは、針、目盛り、範囲、およびラベルなどの視覚要素を提供し、定義済みの図形およびスケールを表示できます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular グリッド, Angular データグリッド, Angular グリッドコントロール, Angular グリッドコンポーネント, Angular ラジアル ゲージ コンポーネント, Angular ラジアル ゲージ
_language: ja
---
## Radial Gauge

Ignite UI for Angular の Radial Gauge コンポーネントは、針、目盛り、範囲、およびラベルなどの視覚要素を提供し、定義済みの図形およびスケールを表示できます。

### デモ

<div class="sample-container" style="height: 550px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/radial-gauge-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

`minimumValue` および `maximumValue` 値を設定してスケールを作成し、`value` プロパティを設定すると、針の値を設定します。ゲージは、スケールの視覚的な合図である範囲もサポートします。

ゲージには、スケールの後ろ側に描かれた背景図形があり、図形はゲージの背景として動作します。背景を真円やその他変形した円形にできます。また、スケールをスイープできるように背景を固定することができ、ゲージのスケールの一部の背景にバッキングを提供することもできます。

ゲージの針は、あらかじめ定義されたいくつかの図形の中から選択できます。ゲージの中心に位置されるピボット図形です。またピボット図形は、事前に定義された図形の 1 つを使用します。オーバーレイとアンダーレイを含むピボット図形には、図形に適用する別のピボット ブラシがあります。

このゲージは、1 つのスケール、1 つの針、1 組の目盛、および 1 組のラベルをサポートします。実際にラジアル ゲージ コントロールに対する変更によって、アニメーションの機能が強化されています。アニメーションは、`transitionDuration` プロパティの設定で高度なカスタマイズができます。針の図形パラメータを微調整して、多数の形状の針を作ることができます。

### 依存関係

gauges パッケージをインストールするときに core パッケージもインストールする必要があります。

`npm install ignite-angular-gauges, ignite-angular-core`

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
 <igx-radial-gauge value = "50"
                   scaleStartExtent = "0"
                   scaleEndExtent = "100">
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

ラジアル ゲージ コンポーネントでは、以下の視覚要素が特徴です。(下図を参照)。

![](../images/Radial_Gauge_2.png)

**背景** (1, 2)
円で表示されるラジアル ゲージ コントロールの背景セクションには、ゲージに追加される針や目盛など、さまざまな要素があります。

この領域は、`backingShape` プロパティの設定で円形またフィットのいずれかにカスタマイズできます。円形の場合は 360 度の円形のゲージが作成されますが、一方フィット図形の場合はスケールの範囲を円弧として塗りつぶされた円のセグメントが作成されます。

**ラベル** (3)
ゲージ ラベルはスケールで指定された間隔で数値を表示する視覚要素です。

**目盛** (4, 10)
ラジアル ゲージの目盛は、指定された間隔の線でゲージに表示される視覚要素です。
目盛には、主目盛および副目盛の 2 種類があります。MinorTickCount プロパティを使用して、隣接する 2 つの主目盛間の副目盛の数を指定します。

**範囲** (5)
範囲は、ゲージ スケール上の指定された最小値と最大値によってバインドされた、連続した値のセットを強調表示します。複数のブラシを指定し、開始と終了の値に沿って複数の範囲をスケールに追加できます。

**スケール** (6)
スケールはゲージの値を視覚的に示すために使用され、ラジアル ゲージで値の範囲を定義します。目盛と範囲はすべて要素で、スケールに追加できます。

**針** (7, 8, 9)
ゲージの針は、ゲージの設定値を表すために使用される視覚要素で、針キャップのオーバーレイまたはアンダーレイなどのゲージの針のピボット ポイントで構成されます。

サポートされている針の図形とキャップは、`needleShape` と `needlePivotShape` プロパティで設定します。
