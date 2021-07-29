---
title: Overlay サービス - スクロール ストラテジ
_description: オーバレイ サービスの IScrollStrategy インターフェイスと実装するクラスについての説明とその例です。
_language: ja
---

# スクロール ストラテジ (スクロール方法)

スクロール方法は指定された `IgxOverlayService` でスクロールを処理する方法を決定します。4 つのスクロール方法があります。
1. **NoOperation** -  何もしません。
2. **Block** - イベントはキャンセルされ、コンポーネントはウィンドウと共にスクロールしません。
3. **Close** - 許容値を使用して許容範囲を超えた場合にスクロールで展開したコンポーネントを閉じます。
4. **Absolute** - すべてをスクロールします。

## 使用方法

各スクロール方法は以下のメソッドがあります。
 - [`initialize`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html#initialize) - スクロール方法を初期化します。ドキュメントへの参照、オーバーレイ サービスへの参照、および描画されるコンポーネントの id が必要です。
 - [`attach`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html#attach) - スクロール方法を指定した要素またはドキュメントにアタッチします。
 - [`detach`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html#detach) - スクロール方法をデタッチします。

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```
<div class="divider--half"></div>

### 作業の開始
ポジション ストラテジは、[`overlay.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドが呼ばれたときに [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) パラメーターのプロパティとして渡されます。
```typescript
// Initializing and using overlay settings
const overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new AbsoluteScrollStrategy(), //Passes the scroll strategy
    modal: true,
    closeOnOutsideClick: true
}
const overlayId = overlay.attach(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

オーバーレイで使用するスクロール方法の変更は、オーバーレイに渡される [`overlaySettings`] ({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトの [`scrollStrategy`] ({environment:angularApiUrl}/interfaces/iscrollstrategy.html) プロパティをオーバーライドします。ストラテジーがすでにアタッチされている場合は、以前に生成された ID をデタッチする必要があります:
```typescript
// overlaySettings is an existing object of type OverlaySettings
// to override the scroll strategy
const newOverlaySettings = Object.assing({}, overlaySettings);
Object.assing(newOverlaySettings, {
    scrollStrategy: new CloseScrollStrategy()
})
const overlayId = overlay.attach(dummyElement, newOverlaySettings);
overlay.show(overlayId);
```
<div class="divider--half"></div>

### 依存関係

以下は、スクロール ストラテジをインポートする方法です。

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```

### スクロール方法
オーバーレイのスクロールの処理方法を決定するためにスクロール方法を [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトによって渡すことができます。
以下のデモは複数の [`scrollStrategies`]({environment:angularApiUrl}/interfaces/iscrollstrategy.html) を紹介します。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-scroll-sample-2" >
</code-view>

<div class="divider--half"></div>

## モーダル
[`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトにブール値 ([`modal`]({environment:angularApiUrl}/interfaces/overlaysettings.html#modal)) を渡すことができます。これはオーバーレイが表示される方法を制御します。
- [`modal`]({environment:angularApiUrl}/interfaces/overlaysettings.html#modal) プロパティが `false` の場合、要素は DOM 前景にアタッチされますが、すべての要素がまだアクティブで操作可能 (スクロール、クリックなど) です。
- [`modal`]({environment:angularApiUrl}/interfaces/overlaysettings.html#modal) プロパティが `true` の場合、要素が DOM 前景にアタッチされ、背景の要素が非アクティブなため操作不能となり、すべてのイベントが中止されます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-scroll-sample-1" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
* [IScrollStrategy]({environment:angularApiUrl}/interfaces/iscrollstrategy.html)

## その他のリソース
* [オーバーレイ メイン トピック](overlay.md)
* [配置ストラテジ](overlay-position.md)
* [スタイル設定](overlay-styling.md)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)