---
title: オーバーレイ サービス - 配置ストラテジ
_description: オーバーレイ サービスの IPositionStrategy インターフェイスとそれを実装するクラスに関する説明と例の紹介。
_language: ja
---

# 配置ストラテジ

配置ストラテジは、提供された `IgxOverlayService` でコンポーネントを表示する場所を決定します。デフォルトでコンテンツは画面の中央に配置されます。

## Angular 配置ストラテジの例


<code-view style="height: 350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" alt="Angular 配置ストラテジの例">
</code-view>

<div class="divider--half"></div>

## ストラテジの概要

5 つの配置ストラテジがあります。

### Global
[`positionSettings`]({environment:angularApiUrl}/interfaces/positionsettings.html) を介して渡された指示に基づいてコンテンツを配置します。 [`horizontalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#horizontalDirection) に Left/Center/Right、[`verticalDirection`]({environment:angularApiUrl}/interfaces/positionsettings.html#verticalDirection) に Top/Middle/Bottom があります。デフォルトは:

| horizontalDirection        | verticalDirection        |
|:---------------------------|:-------------------------|
| HorizontalAlignment.Center | VerticalAlignment.Middle |
<div class="divider"></div>

### Container
コンテンツを `GlobalPositionStrategy` として配置します。`ContainerPositionStrategy`は画面に関連する位置ではなく、`OverlaySettings` `outlet`で提供されるコンテンツに関連する位置にコンテンツを配置します。デフォルトは:

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
**Connected** ポジション ストラテジと同じ方法で要素を配置します。要素が部分的にビューポートから出た場合を考慮して、異なる開始点も計算します。**Auto** ストラテジは最初に **Connected** ストラテジと同じように要素を表示しようとします。要素がビューポートから出た場合 **Auto** は開始点と方向を反転します。つまり、方向が 'bottom' の場合、要素は 'top' に切り替わります。反転後、要素がまだビューポートの外である場合、**Auto** は要素をビューポートに入れるために初期の方向と開始点を使用します。たとえば、エレメントがビューポートの右側から 50 ピクセル分外に出た場合、**Auto** はそれを 50 ピクセル分左へずらします。その後、要素がビューポートから部分的に外れている場合、そしてその高さまたは幅がビューポートのものより大きい場合、**Auto** は要素の左端/上端をビューポートの左端/上端に揃えます。デフォルトは:

| target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       |
|:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|
| new Point(0, 0) | HorizontalAlignment.Right | VerticalAlignment.Bottom | HorizontalAlignment.Left | VerticalAlignment.Bottom |
<div class="divider"></div>

### Elastic
要素の一部が表示範囲外の場合、**Connected** 配置ストラテジのように要素を配置し、要素をビュー ポートに収まるように (幅や高さの再計算により) サイズ変更します。 [`minSize`]({environment:angularApiUrl}/interfaces/positionsettings.html#minSize) を [`positionSettings`]({environment:angularApiUrl}/interfaces/positionSettings.html)  へ渡して要素のサイズが特定のしきい値を下回るようなサイズ変更を防ぐことができます。デフォルトは:

| target          | horizontalDirection       |  verticalDirection       | horizontalStartPoint     | verticalStartPoint       | minSize               |
|:----------------|:--------------------------|:-------------------------|:-------------------------|:-------------------------|:----------------------|
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
// import { AutoPositionStrategy, 
//    ConnectedPositioningStrategy, 
//    ContainerPositionStrategy,
//    ElasticPositionStrategy,
//    GlobalPositionStrategy } from '@infragistics/igniteui-angular'; for licensed package

```

次に、オーバーレイで使用される配置ストラテジを指定します。[`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドが呼び出されると、配置ストラテジは [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) パラメーターのプロパティとして渡されます。以下の例では、デフォルトの `GlobalPositionStrategy` を `ConnectedPositionStrategy` で変更しています。

```typescript
// Initialize and use overlay settings
const overlaySettings: OverlaySettings = {
    // Set the target where content should be shown
    target: this.buttonElement.nativeElement,
    // Pass in the positioning strategy
    positionStrategy: new ConnectedPositioningStrategy()
};
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings); 
``` 
<div class="divider"></div>


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-position-sample-1" >
</code-view>

<div class="divider--half"></div>

## 配置設定

各配置ストラテジには、固有の配置設定があります。この設定により、コンテンツの表示方法が決まります。以下の例では、新しい `PositionSettings` オブジェクトを作成しています。これを使用して、オーバーレイに、指定された `target` (`buttonElement`) の右上の点から始まるコンテンツを強制的に表示します。コンテンツが表示される方向は左上に設定されます。次に、新しい `ConnectedPositionStrategy` を作成し、`positionSettings` を渡します。

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
this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings);
```


<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-position-sample-2" >
</code-view>

<div class="divider--half"></div>

### ストラテジの変更

オーバーレイに渡される [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトの [`positionStrategy`]({environment:angularApiUrl}/interfaces/ipositionstrategy.html) プロパティをオーバーライドすることにより、オーバーレイで使用される配置ストラテジを変更することもできます。

```typescript
const myPositionStrategy = new AutoPositionStrategy();
overlay.attach(element, { positionStrategy: myPositionStrategy }); 
```

<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-position-sample-3" >
</code-view>

<div class="divider--half"></div>

### 設定の変更

既存ストラテジのポジション設定の変更は、そのストラテジの設定のいずれかをオーバーライドします。ストラテジがすでにアタッチされている場合は、以前に生成された ID をデタッチする必要があります:
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
const overlayId = overlay.attach(overlayId, overlaySettings);
overlay.show(overlayId);
```

### コンテンツのオフセット

`setOffset` メソッドを使用すると、対応する軸に沿って指定された量だけコンテンツの位置を正確に調整できます。さらに、オプションの `offsetMode` パラメーターをサポートしており、オフセット値の適用方法を制御できます。

```typescript
// deltaX and deltaY determine the amount by which the content will be offset.
// Using OffsetMode.Add to add the values (default behavior)
const deltaX: number = 30;
const deltaY: number = 15;
overlay.setOffset(this._overlayId, deltaX, deltaY, OffsetMode.Add);
```

```typescript
// deltaX and deltaY determine the exact position to set the content to, relative to its target element.
// Using OffsetMode.Set to set the offset to specific values
const deltaX: number = 30;
const deltaY: number = 15;
overlay.setOffset(this._overlayId, deltaX, deltaY, OffsetMode.Set);
```

## API リファレンス

* [IPositionStrategy]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)

## その他のリソース
* [オーバーレイ メイン トピック](overlay.md)
* [スクロール ストラテジ](overlay-scroll.md)
* [スタイル設定](overlay-styling.md)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/themes#function-overlay-theme)
