---
title: オーバーレイ サービス - ポジショニング ストラテジ
_description: オーバーレイ サービスの IPositionStrategy インターフェイスとそれを実装するクラスに関する説明と例の紹介。
_language: ja
---

# ポジション ストラテジ

ポジション ストラテジは、`IgxOverlayService` でコンテンツを表示する場所を決定します。デフォルトでコンテンツは画面の中央に表示されます。

## デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

### 基本的な使用方法

ポジション ストラテジを使用して、オーバーレイでさまざまな組み合わせのコンテンツを表示できます。他のポジション ストラテジの使用を開始するには、最初に次のように使用される各ストラテジに必要な依存関係を含める必要があります。

```typescript
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ContainerPositionStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy
} from 'igniteui-angular';
```

次に、オーバーレイで使用されるポジション ストラテジを指定します。[`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) メソッドが呼び出されると、ポジション ストラテジは [`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) パラメーターのプロパティとして渡されます。以下の例では、デフォルトの `GlobalPositionStrategy` を `ConnectedPositionStrategy` で変更しています。

```typescript
    // Initialize and use overlay settings
    const overlaySettings: OverlaySettings = {
        // Pass in the positioning strategy
        positionStrategy: new ConnectedPositioningStrategy({
            // Set the target where content should be shown
            target: this.buttonElement.nativeElement
        })
    };
    const overlayId = overlay.attach(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 定義済みの位置設定でポジション ストラテジを作成する

各ポジション ストラテジには、固有のポジション設定があります。この設定により、コンテンツの表示方法が決まります。以下の例では、新しい `PositionSettings` オブジェクトを作成しています。これを使用して、オーバーレイに、指定されたターゲット (buttonElement) の右上の点から始まるコンテンツを強制的に表示します。コンテンツが表示される方向は左上に設定されます。次に、新しい `ConnectedPositionStrategy` を作成し、`PositionSettings` を渡します。

```typescript
const positionSettings: PositionSettings = {
    target: buttonElement.nativeElement,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Top,
    horizontalDirection: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Top
};

const strategy = new ConnectedPositioningStrategy(positionSettings);

// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    // Pass in the positioning strategy
    positionStrategy: strategy
};
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, overlaySettings);
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 既存のポジション ストラテジを変更する

オーバーレイに渡される [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトの [`positionStrategy`]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) プロパティをオーバーライドすることにより、オーバーレイで使用されるポジション ストラテジを変更することもできます。

```typescript
    const myPositionStrategy = new AutoPositionStrategy();
    overlay.show(overlayId, { positionStrategy: myPositionStrategy }); 
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 既存ポジションの設定変更

既存ストラテジのポジション設定の変更は、そのストラテジの設定のいずれかをオーバーライドします。
```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // overlaySettings.positionStrategy is an existing PositionStrategy with settings of type PositionSettings
    Object.assign(overlaySettings.positionStrategy.settings, {
        target: dummyHTMLElement,
        horizontalStartPoint: HorizontalAlignment.Left,
        horizontalDirection: HorizontalAlignment.Left
    });
    // the element will now start to the left of the target (dummyHTMLElement)
    // and will align itself to the left
    overlay.show(overlayId, overlaySettings);
```

## ポジション ストラテジ

5 つのポジション ストラテジがあります。

1. **Global** - [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) を介して渡された指示に基づいてコンテンツを配置します。これらは、[`verticalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#verticaldirection)  の場合は Top/Middle/Bottom、[`horizontalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#horizontaldirection) の場合は Left/Center/Right です。デフォルト値:

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

2. **コンテナ** - コンテンツを `GlobalPositionStrategy` として配置します。画面に関連する位置の代わりに、`ContainerPositionStrategy` は、`OverlaySettings` `outlet` で提供されるコンテンツに関連するコンテンツを配置します。デフォルト値:

    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

3. **接続済み** - [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) から渡された方向と開始点に基づいて要素を配置します。開始点 ([`Point`]({environment:angularApiUrl}/classes/point.html)) または `HTMLElement` を位置決めベースとして渡すことができます。デフォルト値:

    | ターゲット          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

4. **Auto** - **Connected** ポジション ストラテジと同じ方法で要素を配置します。要素が部分的にビューポートから出た場合を考慮して、異なる開始点も計算します。**Auto** ストラテジは最初に **Connected** ストラテジと同じように要素を表示しようとします。要素がビューポートから出た場合 **Auto** は開始点と方向を反転します。つまり、方向が 'bottom' の場合、要素は 'top' に切り替わります。反転後、要素がまだビューポートのものである場合、**Auto** は要素をビューポートにプッシュするために初期方向と開始点を使用します。たとえば、エレメントがビューポートの右側から 50 ピクセル分外に出た場合、**Auto** はそれを 50 ピクセル分左へプッシュします。その後、要素がビューポートから部分的に外れている場合、その高さまたは幅がビューポートより大きい場合、**Auto** は要素の左端/上端をビューポートの左端/上端に揃えます。デフォルト値:
    | ターゲット          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

5. **Elastic** - **接続された**ポジション ストラテジのように要素を配置し、要素が部分的に見えなくなった場合にビューポートの内側に収まるように要素のサイズを変更します (幅や高さを再計算します)。[`minSize`]({environment:angularApiUrl}/interfaces/positionsettings.html#minsize) を [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) に渡すと、要素のサイズが特定のしきい値を下回る場合のサイズ変更を防止できます。デフォルト値:

    | ターゲット          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       | minSize               |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|-----------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom|{ width: 0, height: 0 }|
<div class="divider"></div>

> [!NOTE]
> ストラテジが HorizontalDirection = Center / VerticalDirection = Middle を使用している場合、要素をサイズ変更しないようにします。
> [!NOTE]
> オーバーレイ要素はサイズ変更**されます**が配置ストラテジは `overflow` をハンドルしません。たとえば、サイズ変更時の要素に `overflow-y` が必要な場合、適切なスタイルを組み込んで提供します。

## API リファレンス

* [IPositionStrategy]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)
