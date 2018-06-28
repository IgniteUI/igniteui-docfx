---
title: Overlay サービス - スクロール ストラテジー
_description: オーバレイ サービスの IPositionStrategy インターフェイスと実装するクラスについての説明とその例です。
_language: ja
---

## ポジション ストラテジー

ポジション ストラテジーは、IgxOverlayService のコンポーネントを表示する位置を決定する方法が 3 通りあります。

1. **Global** - `positionSettings`を介して渡される方向に基づいて要素を配置します。`verticalDirection` には Top/Middle/Bottom、 `horizontalDirection` には Left/Center/Right があります。

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<br/>

2. **Connected** - `positionSettings` を介して渡される方向と開始点に基づいて要素を配置します。開始ポイント (`Point` 型) または配置ベースとして `HTMLElement` を渡すことができます。以下はデフォルトの設定です。

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<br/>

3. **Auto** - **Connected** ポジション ストラテジーとして要素を配置し、要素が表示外となった場合はビューポート (異なる開始ポイントを算出) に要素を再配置します。以下はデフォルトの設定です。

    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |

*注*: HorizontalDirection = Center / VerticalDirection = Middle を使用している場合、要素を再配置を試みません。

### 使用方法
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
ポジション ストラテジーは、`overlay.show()` メソッドが呼ばれたときに `overlaySettings` パラメーターのプロパティとして渡されます。
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
オーバーレイで使用するポジション ストラテジーの変更は、オーバーレイに渡される `overlaySettings` オブジェクトの `positionStrategy` プロパティをオーバーライドします。
```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // to override the position strategy
    const newOverlaySettings = Object.assing({}, overlaySettings);
    Object.assing(newOverlaySettings, {
        positionStrategy: new AutoPositionStrategy()
    })
    overlay.show(dummyElement, newOverlaySettings); 
```
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

### 依存関係

必要に応じてポジション ストラテジーをインポートできます。

```typescript
import {AutoPositionStrategy, GlobalPositionStrategy, ConnectedPositioningStrategy } from './position/global-position-strategy';
```

### API

##### メソッド
| ポジション ストラテジー | 名前                                         | 説明                                     |
|:------------------|:---------------------------------------------|:------------------------------------------------|
| Global            | `position(contentElement)`                   | 水平および垂直の方向に基づいて要素を配置します。|
| Connected         | `position(contentElement, size{})`           | 使用するポジション ストラテジーと渡されたサイズに基づいて要素を配置します。|
| Auto              | `position(contentElement, size{}, document?)`| 使用するポジション ストラテジーと渡されたサイズに基づいて要素を配置します。|

#### PositionSettings
| 名前               | 型                        | 説明 |
| :----------------- | :-------------------------- | :---------- |
|target              | Point | HTMLElement         | 使用するポジション ストラテジーと渡されたサイズに基づいて要素を配置します。          |
|horizontalDirection | HorizontalAlignment         | コンポーネントが表示される方向。       |
|verticalDirection   | VerticalAlignment           |　コンポーネントが表示される方向。        |
|horizontalStartPoint| HorizontalAlignment         | ターゲットの開始ポイント。                             |
|verticalStartPoint  | VerticalAlignment           | ターゲットの開始ポイント。　　　　                             |
|openAnimation       | AnimationReferenceMetadata  | オーバーレイが開いている間に適用されるアニメーション。               |
|closeAnimation      | AnimationReferenceMetadata  | オーバーレイが閉じている間に適用されるアニメーション。              |
