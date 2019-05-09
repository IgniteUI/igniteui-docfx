---
title: Overlay サービス - スクロール ストラテジ
_description: オーバレイ サービスの IPositionStrategy インターフェイスと実装するクラスについての説明とその例です。
_language: ja
---

## ポジション ストラテジ

ポジション ストラテジは、IgxOverlayService のコンポーネントを表示する位置を決定する方法が 3 通りあります。

1. **Global** - [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html)を介して渡される方向に基づいて要素を配置します。[`verticalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#verticaldirection) には Top/Middle/Bottom、 [`horizontalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#horizontaldirection) には Left/Center/Right があります。

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

2. **Connected** - [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) を介して渡される方向と開始点に基づいて要素を配置します。開始ポイント ([`Point`]({environment:angularApiUrl}/classes/point.html) 型) または配置ベースとして `HTMLElement` を渡すことができます。以下はデフォルトの設定です。

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

3. **Auto** - **Connected** ポジション ストラテジと同じ方法で要素を配置します。要素が部分的にビューポートから出た場合を考慮して、異なる開始点も計算します。**Auto** ストラテジは最初に **Connected** ストラテジと同じように要素を表示しようとします。要素がビューポートから出た場合 **Auto** は開始点と方向を反転します。つまり、方向が 'bottom' の場合、要素は 'top' に切り替わります。反転後、要素がまだビューポートのものである場合、**Auto ** は要素をビューポートにプッシュするために初期方向と開始点を使用します。たとえば、エレメントがビューポートの右側から 50 ピクセル分外に出た場合、**Auto** はそれを 50 ピクセル分左プッシュします。その後、要素がビューポートから部分的に外れている場合、その高さまたは幅がビューポートのものより大きい場合、**Auto** は要素の左端/上端をビューポートの左端/上端に揃えます。デフォルト値：

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

> [!NOTE]
> ストラテジが HorizontalDirection = Center / VerticalDirection = Middle を使用している場合、要素を再配置しないようにします。

4. **Elastic** - **Connected** 配置ストラテジとして要素を配置し、要素の一部が表示範囲外の場合に要素をサイズ変更してビューポイント内 (幅と高さまたはそのいずれかを再計算) にフィットさせます。[`minSize`]({environment:angularApiUrl}/interfaces/positionsettings.html#minsize) を `positionSettings` へ渡して要素のディメンションが特定のしきい値以下の場合にサイズ変更します。デフォルト値は:
    
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       | minSize               |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|-----------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |{ width: 0, height: 0 }|
<div class="divider"></div>

> [!NOTE]
> ストラテジが HorizontalDirection = Center / VerticalDirection = Middle を使用している場合、要素をサイズ変更しないようにします。
> [!NOTE]
> オーバーレイ要素はサイズ変更**されます**が配置ストラテジは `overflow` をハンドルしません。たとえば、サイズ変更時の要素に `overflow-y` が必要な場合、適切なスタイルを組み込んで提供します。 

## 使用方法
既存のボタンを基にターゲットとして要素を配置することにより、始点がボタンの下または左角になります。
```typescript
const positionSettings: PositionSettings = {
    target: buttonElement.nativeElement,
    horizontalDirection: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Bottom,
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Bottom
};

const strategy = new ConnectedPositioningStrategy(positionSettings);
strategy.position(contentWrapper, size);
```

### 作業の開始
ポジション ストラテジは、[`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドが呼ばれたときに [`overlaySettings`] ({environment:angularApiUrl}/interfaces/overlaysettings.html) パラメーターのプロパティとして渡されます。

```typescript
    // Initializing and using overlay settings
    const overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(), // Passes the positioning strategy
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    }
    const overlayId = overlay.attach(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

オーバーレイで使用するポジション ストラテジの変更は、オーバーレイに渡される [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトの [`positionStrategy`]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) プロパティをオーバーライドします。
```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // to override the position strategy
    const positionStrategy = new AutoPositionStrategy();
    overlay.show(overlayId, { positionStrategy }); 
```
<div class="divider"></div>

既存の配置設定を変更するには、変更したいストラテジの設定をオーバーライドします。

```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // overlaySettings.positionStrategy is an existing PositionStrategy with settings of type PositionSettings
    // to override the position setting of an existing PositionStrategy
    Object.assign(overlaySettings.positionStrategy.settings, {
        target: dummyHTMLElement,
        horizontalStartPoint: HorizontalAlignment.Left,
        horizontalDirection: HorizontalAlignment.Left
    });
    overlay.show(overlayId, overlaySettings);
    // the element will now start to the left of the target (dimmyHTMLElement)
    // and will align itself to the left
```
<div class="divider--half"></div>

### 依存関係

必要に応じてポジション ストラテジをインポートできます。

```typescript
import {AutoPositionStrategy, GlobalPositionStrategy, ConnectedPositioningStrategy, ElasticPositionStrategy } from 'igniteui-angular';
```

## デモ

### 水平方向または垂直方向
配置設定で水平方向または垂直方向を設定すると、コンテンツの配置を決定します。配置方法によってコンテンツは、ターゲット コンテナー ([`AutoPositionStrategy`] ({environment:angularApiUrl}/classes/autopositionstrategy.html)、[`ElasticPositionStrategy`]({environment:angularApiUrl}/classes/elasticpositionstrategy.html)、[`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html))、またはドキュメント ([`GlobalPositioningStrategy`]({environment:angularApiUrl}/classes/globalpositionstrategy.html)) のボディに関連して配列します。

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>

上記サンプルは、表示要素の `overflow` が処理されます。

```typescript
// in overlay.component.ts
export class MyExampleOverlayComponent {
    ... 
    // subscribe to overlay toggle emitters
    public ngOnInit() {
        const applyStyle = (overflow) => { this.overlayElement.nativeElement.style.overflow = overflow};
        this.overlay.onOpening.subscribe(() => {applyStyle('auto'); });
        this.overlay.onClosed.subscribe(() => {applyStyle(''); });
    }
    ...
    // unsub on destroy
    public ngOnDestroy() {
        this.overlay.onOpening.unsubscribe();
        this.overlay.onClosed.unsubscribe();
    }

}
```

### 水平または垂直開始点
配置設定で水平開始点または垂直開始点を設定すると、コンテンツの開始位置を決定します。開始ポイントは [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) に渡された [`target`]({environment:angularApiUrl}/interfaces/positionsettings.html#target) が `HTMLElement` の場合のみ効果があり、[`AutoPositionStrategy`] ({environment:angularApiUrl}/classes/autopositionstrategy.html)、[`ElasticPositionStrategy`]({environment:angularApiUrl}/classes/elasticpositionstrategy.html)、[`ConnectedPositioningStrategy`] ({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) でのみ使用できます。
以下のデモで、オーバーレイ要素は選択した開始点に基づいてターゲット要素に配置します。方向は常に [`HorizontalAlignment.Right`] ({environment:angularApiUrl}/enums/horizontalalignment.html#right)、[`VerticalAlignment.Bottom`] ({environment:angularApiUrl}/enums/verticalalignment.html#bottom) です。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-position-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>


## API リファレンス

* [IPositionStrategy]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)
