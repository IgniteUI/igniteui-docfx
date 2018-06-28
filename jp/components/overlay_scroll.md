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

### 使用方法

```typescript
this.scrollStrategy.initialize(document, overlayService, id);
this.scrollStrategy.attach();
this.scrollStrategy.detach();
```

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
### 依存関係

以下は、スクロール ストラテジーをインポートする方法です。

```typescript
import { NoOpScrollStrategy } from "./scroll/NoOpScrollStrategy";
```

### API

#### メソッド

##### IScrollStrategy

| 名前            | 説明                                                                     | パラメーター |
|-----------------|---------------------------------------------------------------------------------|------------|
|initialize       | ストラテジーを初期化します。1 度のみ呼び出します。                                  |document, overlayService, id|
|attach           | ストラテジーをアタッチします。                                                           |-           |
|detach           | ストラテジーをデタッチします。                                                         |-           |
