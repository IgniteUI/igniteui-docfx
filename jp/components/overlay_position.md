---
title: Overlay サービス - スクロール ストラテジー
_description: オーバレイ サービスの IPositionStrategy インターフェイスと実装するクラスについての説明とその例です。
_language: ja
---

## ポジション ストラテジー

ポジション ストラテジーは、IgxOverlayService のコンポーネントを表示する位置を決定する方法が 3 通りあります。

1. **Global** - [`positionSettings`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html)を介して渡される方向に基づいて要素を配置します。[`verticalDirection`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html#verticaldirection) には Top/Middle/Bottom、 [`horizontalDirection`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html#horizontaldirection) には Left/Center/Right があります。

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

2. **Connected** - [`positionSettings`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html) を介して渡される方向と開始点に基づいて要素を配置します。開始ポイント ([`Point`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/point.html) 型) または配置ベースとして `HTMLElement` を渡すことができます。以下はデフォルトの設定です。

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

3. **Auto** - **Connected** ポジション ストラテジーとして要素を配置し、要素が表示外となった場合はビューポート (異なる開始ポイントを算出) に要素を再配置します。以下はデフォルトの設定です。

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>
*注*: HorizontalDirection = Center / VerticalDirection = Middle を使用している場合、要素を再配置を試みません。

## 使用方法
ターゲットとする既存ボタンに基づいて要素を配置し、開始点をボタンの下角または左角にします。

```typescript
const positionSettings: PositionSettings = {
    target: buttonElement.nativeElement,
    horizontalDirection: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Bottom,
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Bottom
};

const strategy =  new ConnectedPositioningStrategy(positionSettings);
strategy.position(contentWrapper, size);
```

### 作業の開始
ポジション ストラテジーは、[`overlay.show()`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/igxoverlayservice.html#show) メソッドが呼ばれたときに [`overlaySettings`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) パラメーターのプロパティとして渡されます。

```typescript
    // Initializing and using overlay settings
    const overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    }
    overlay.show(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

オーバーレイで使用するポジション ストラテジーの変更は、オーバーレイに渡される [`overlaySettings`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) オブジェクトの [`positionStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/ipositionstrategy.html) プロパティをオーバーライドします。

```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // to override the position strategy
    const positionStrategy = new AutoPositionStrategy();
    overlay.show(dummyElement, { positionStrategy }); 
```
<div class="divider"></div>

既存の配置設定を変更するには、変更したいストラテジーの設定をオーバーライドします。

```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // overlaySettings.positionStrategy is an existing PositionStrategy with settings of type PositionSettings
    // to override the position setting of an existing PositionStrategy
    Object.assign(overlaySettings.positionStrategy.settings, {
        target: dummyHTMLElement,
        horizontalStartPoint: HorizontalAlignment.Left,
        horizontalDirection: HorizontalAlignment.Left
    });
    overlay.show(dummyElement, overlaySettings);
    // the element will now start to the left of the target (dimmyHTMLElement)
    // and will align itself to the left
```
<div class="divider--half"></div>

### 依存関係

必要に応じてポジション ストラテジーをインポートできます。

```typescript
import {AutoPositionStrategy, GlobalPositionStrategy, ConnectedPositioningStrategy } from './position/global-position-strategy';
```

## デモ

### 水平方向または垂直方向

配置設定で水平方向または垂直方向を設定すると、コンテンツの配置を決定します。配置に基づいて、コンテンツがターゲットのコンテナー ([`AutoPositionStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/autopositionstrategy.html) および  [`ConnectedPositioningStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html)) に相対して配置するか、ドキュメントの本体 ([`GlobalPositioningStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/globalpositionstrategy.html)) に相対して配置します。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-position-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider"></div>

### 水平または垂直開始点
配置設定で水平開始点または垂直開始点を設定すると、コンテンツの開始位置を決定します。
開始点は、[`positionSettings`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html) に渡された [`target`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html#target) が `HTMLElement` で、[`AutoPositionStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/autopositionstrategy.html) または [`ConnectedPositioningStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html) が設定された場合のみに影響します。
以下のデモで、オーバーレイ要素は選択した開始点に基づいてターゲット要素に配置します。方向は常に [`HorizontalAlignment.Right`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/enums/horizontalalignment.html#right) および [`VerticalAlignment.Bottom`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/enums/verticalalignment.html#bottom) です。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-position-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-position-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider"></div>

## API

* [`IPositionStrategy`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/ipositionstrategy.html)
* [`PositionSettings`] ({environment:infragisticsBaseUrl}/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html)
