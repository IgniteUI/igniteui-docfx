---
title: Overlay サービス - スクロール ストラテジー
_description: オーバレイ サービスの IScrollStrategy インターフェイスと実装するクラスについての説明とその例です。
_language: ja
---

## スクロール ストラテジー

スクロール ストラテジーは、IgxOverlayService でスクロールが処理される方法を決定する以下の 4 つがあります。
1. **NoOperation** -  何もしません。
2. **Block** - コンポーネントはウィンドウでスクロールしません。イベントはキャンセルされてスクロールは発生しません。
3. **Close** - 許容値を使用して許容範囲を超えた場合にスクロールで展開したコンポーネントを閉じます。
4. **Absolute** - すべてをスクロールします。

## 使用方法

各スクロール方法は以下のメソッドがあります。
 - `initialize` - スクロール方法を初期化します。ドキュメントへの参照、オーバーレイ サービスへの参照、および描画されるコンポーネントの id が必要です。
 - `attach` - スクロール方法を指定した要素またはドキュメントにアタッチします。
 - `detach` - スクロール方法をデタッチします。

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```

<div class="divider--half"></div>

### 作業の開始
ポジション ストラテジーは、`overlay.show()` メソッドが呼ばれたときに `overlaySettings` パラメーターのプロパティとして渡されます。
```typescript
    // Initializing and using overlay settings
    const overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(), //Passes the scroll strategy
        modal: true,
        closeOnOutsideClick: true
    }
    overlay.show(dummyElement, overlaySettings); 
``` 
<div class="divider"></div>

オーバーレイで使用するスクロール方法の変更は、オーバーレイに渡される `overlaySettings` オブジェクトの `scrollStrategy`プロパティをオーバーライドします。
```typescript
    // overlaySettings is an existing object of type OverlaySettings
    // to override the scroll strategy
    const newOverlaySettings = Object.assing({}, overlaySettings);
    Object.assing(newOverlaySettings, {
        scrollStrategy: new CloseScrollStrategy()
    })
    overlay.show(dummyElement, newOverlaySettings); 
```
<div class="divider--half"></div>

### 依存関係

以下は、スクロール ストラテジーをインポートする方法です。

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```

## デモ
### スクロール方法
オーバーレイのスクロールの処理方法を決定するためにスクロール方法を `overlaySettings` オブジェクトによって渡すことができます。
以下のデモは複数の `scrollStrategies` を紹介します。
<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-scroll-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-scroll-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-scroll-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### モーダル
`overlaySettings` オブジェクトに `modal` ブール値を渡すことができます。これはオーバーレイが表示される方法を制御します。
`modal` プロパティが `false` の場合、要素は DOM 前景にアタッチされますが、すべての要素がまだアクティブで操作可能 (スクロール、クリックなど) です。
`modal` プロパティが `true` の場合、要素が DOM 前景にアタッチされ、背景の要素が非アクティブなため操作不能となり、すべてのイベントが中止されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-scroll-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-scroll-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-scroll-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

## API

### メソッド

| 名前            | 説明                                                                     | パラメーター |
|-----------------|---------------------------------------------------------------------------------|------------|
|initialize       | ストラテジーを初期化します。1 度のみ呼び出します。                                  |document, overlayService, id|
|attach           | ストラテジーをアタッチします。                                                           |-           |
|detach           | ストラテジーをデタッチします。                                                         |-           |
