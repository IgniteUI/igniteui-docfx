---
title: オーバーレイ サービス - 配置ストラテジ
_description: オーバーレイ サービスの IPositionStrategy インターフェイスとそれを実装するクラスに関する説明と例の紹介。
_language: ja
---

# 配置ストラテジ

配置ストラテジは、提供された `IgxOverlayService` でコンポーネントを表示する場所を決定します。デフォルトでコンテンツは画面の中央に配置されます。

## Angular 配置ストラテジの例

<div class="sample-container loading" style="height: 350px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);" alt="Angular 配置ストラテジの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## ストラテジの概要

5 つの配置ストラテジがあります。

### Global
[`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) を介して渡された指示に基づいてコンテンツを配置します。 [`horizontalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#horizontaldirection) に Left/Center/Right、[`verticalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#verticaldirection) に Top/Middle/Bottom があります。デフォルトは:
    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

### Container
コンテンツを `GlobalPositionStrategy` として配置します。
`ContainerPositionStrategy`は画面に関連する位置ではなく、`OverlaySettings` `outlet`で提供されるコンテンツに関連する位置にコンテンツを配置します。デフォルトは:
    | horizontalDirection        | verticalDirection        |
    |:---------------------------|:-------------------------|
    | HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

### Connected
[`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) からの開始点と [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) から渡された方向に基づいて要素を配置します。開始点 ([`Point`]({environment:angularApiUrl}/classes/point.html)) または `HTMLElement` を配置決めのベースとして渡すことができます。デフォルトは:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

### Auto
**Connected** ポジション ストラテジと同じ方法で要素を配置します。
要素が部分的にビューポートから出た場合を考慮して、異なる開始点も計算します。**Auto** ストラテジは最初に **Connected** ストラテジと同じように要素を表示しようとします。要素がビューポートから出た場合 **Auto** は開始点と方向を反転します。つまり、方向が 'bottom' の場合、要素は 'top' に切り替わります。
反転後、要素がまだビューポートの外である場合、**Auto** は要素をビューポートに入れるために初期の方向と開始点を使用します。たとえば、エレメントがビューポートの右側から 50 ピクセル分外に出た場合、**Auto** はそれを 50 ピクセル分左へずらします。その後、要素がビューポートから部分的に外れている場合、そしてその高さまたは幅がビューポートのものより大きい場合、**Auto** は要素の左端/上端をビューポートの左端/上端に揃えます。デフォルトは:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

### Elastic
要素の一部が表示範囲外の場合、**Connected** 配置ストラテジのように要素を配置し、要素をビュー ポートに収まるように (幅や高さの再計算により) サイズ変更します。 [`minSize`]({environment:angularApiUrl}/interfaces/positionsettings.html#minsize) を [`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html)  へ渡して要素のサイズが特定のしきい値を下回るようなサイズ変更を防ぐことができます。デフォルトは:
    | target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint      minSize               |
    |:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|-----------------------|
    | new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |{ width: 0, height: 0 }|
<div class="divider"></div>

> [!NOTE]
> ストラテジが HorizontalDirection = Center / VerticalDirection = Middle を使用している場合、要素はサイズ変更されません。
> [!NOTE]
> オーバーレイ要素はサイズ変更**されます**が配置ストラテジは `overflow` を**処理しません**。たとえば、サイズ変更時の要素に `overflow-y` が必要な場合、適切なスタイルを組み込んで提供します。

## 使用方法

配置ストラテジを使用して、オーバーレイでさまざまな組み合わせのコンテンツを表示できます。他のポジション ストラテジの使用を開始するには、最初に次のように使用される各ストラテジに必要な依存関係を含める必要があります。

```typescript
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ContainerPositionStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy
} from 'igniteui-angular';
```

次に、オーバーレイで使用される配置ストラテジを指定します。[`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドが呼び出されると、配置ストラテジは [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) パラメーターのプロパティとして渡されます。以下の例では、デフォルトの `GlobalPositionStrategy` を `ConnectedPositionStrategy` で変更しています。

```typescript
// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    // Set the target where content should be shown
        target: this.buttonElement.nativeElement
    // Pass in the positioning strategy
    positionStrategy: new ConnectedPositioningStrategy()
};
const overlayId = overlay.attach(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-position-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 配置設定

各配置ストラテジには、固有の配置設定があります。この設定により、コンテンツの表示方法が決まります。以下の例では、新しい `PositionSettings` オブジェクトを作成しています。これを使用して、オーバーレイに、指定された `target` (`buttonElement`) の右上の点から始まるコンテンツを強制的に表示します。コンテンツが表示される方向は左上に設定されます。次に、新しい `ConnectedPositionStrategy` を作成し、`PositionSettings` を渡します。

```typescript
const positionSettings: PositionSettings = {
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Top,
    horizontalDirection: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Top
};

const strategy = new ConnectedPositioningStrategy(positionSettings);

// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    target: buttonElement.nativeElement,
    // Pass in the positioning strategy
    positionStrategy: strategy
};
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, overlaySettings);
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### ストラテジの変更

オーバーレイに渡される [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトの [`positionStrategy`]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) プロパティをオーバーライドすることにより、オーバーレイで使用される配置ストラテジを変更することもできます。

```typescript
const myPositionStrategy = new AutoPositionStrategy();
overlay.show(overlayId, { positionStrategy: myPositionStrategy }); 
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="overlay-position-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-position-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 設定の変更

既存ストラテジのポジション設定の変更は、そのストラテジの設定のいずれかをオーバーライドします。
```typescript
// overlaySettings is an existing object of type OverlaySettings
// overlaySettings.positionStrategy is an existing PositionStrategy with settings of type PositionSettings
Object.assign(overlaySettings.positionStrategy.settings, {
    horizontalStartPoint: HorizontalAlignment.Left,
    horizontalDirection: HorizontalAlignment.Left
});
overlaySettings.target = dummyHTMLElement;
// the element will now start to the left of the target (dummyHTMLElement)
// and will align itself to the left
overlay.show(overlayId, overlaySettings);
```

### コンテンツのオフセット

対応する軸に沿って指定した量のみコンテンツをオフセットする方法:
```typescript
// deltaX and deltaY determine by how much the content will be offset compared to its' previous position
const deltaX: number = 30;
const deltaY: number = 15;
overlay.setOffset(this._overlayId, deltaX, deltaY);
```

## API リファレンス

* [IPositionStrategy]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)

## その他のリソース
* [オーバーレイ メイン トピック](overlay.md)
* [スクロール ストラテジ](overlay-scroll.md)
* [スタイル設定](overlay-styling.md)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
