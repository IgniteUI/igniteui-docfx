---
title: Overlay サービス
_description: ページのその他すべてのコンポーネント/HTML コンテンツの上にコンテンツを配置するサービスを提供します。サービスの構成には堅牢な API が利用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular オーバーレイ サービス コンポーネント
_language: ja
---

## Overlay の概要
<p class="highlight">
`IgxOverlayService` は、`IgxToggle` ディレクティブに完全に統合されています。toggle ディレクティブを使用する場合、`overlaySettings` パラメーターを toggle の toggle の `toggle()` メソッドに設定してコンテンツが描画された場合の切り替え方法を変更できます。
</p>
<div class="divider--half"></div>

## Overlay デモ
<p class="highlight">
以下のデモは、オーバーレイ要素の表示方法を変更するためにオーバーレイ サービス `overlaySettings` を扱う方法を示します。
</p>
<div class="sample-container loading" style="height: 600px">
    <iframe id="overlay-sample-main-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

## 使用方法

`overlaySettings` を設定*しない*場合、toggle 要素は*デフォルトの表示設定*に戻ります。
```typescript
defaultOverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };
```

以下は、toggle メソッドの設定を渡す方法の例です。
```html
<!-- In example.component.html -->
<div class='example-div--container' style='width: 400px; height; 120px'>
    <button igxToggle (click)="callToggle()" class='example-div--button__initial'>Click me!</button>
    <div [class]="collapsed ? 'hidden ' : 'exmaple-div--toggleElement'" style='width: 100%; height: 100%;'>
        This content is toggle-able!
    </div>
</div>
```

```typescript
// In example.component.ts
@Component({
    selector: `example-component`,
    template: `example.component.html`
})
export class ExampleComponent {
    @ViewChild(IgxToggleDirective)
    private toggleDirective: IgxToggleDirective;

    public get collapsed(): boolean {
        return this.toggleDirective.collapsed;
    }

    public callToggle(): void {
        const overlaySettings: OverlaySettings = {
            positionStrategy: new AutoPositionStrategy(),
            scrollStrategy: new BlockScrollStrategy(),
            modal: true,
            closeOnOutsideClick: false
        }
        this.toggleDirective.toggle(true, overlaySettings)
    }
}
```
<div class="divider--half"></div>

## API

### プロパティ

 `IPositionStrategy`

   | 名前               | 説明                                         | 型                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |positionSettings    | この配置方法を適用する設定。         | PositionSettings                    |


 `OverlaySettings`

   | 名前               | 説明                                         | 型                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |positionStrategy    | この設定で使用するための配置方法。       | IPositionStrategy                   |
   |scrollStrategy      | この設定で使用するためのスクロール方法。          | IScrollStrategy                     |
   |modal               | オーバーレイがモーダルモードであるかどうかを設定。         | boolean                             |
   |closeOnOutsideClick | オーバーレイがアウトサイド クリックで閉じるかどうかを設定。  | boolean                             |


 `PositionSettings`

   | 名前               | 説明                                        | 型                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |target              | 表示するターゲットのアタッチ ターゲット。         | Point \| HTMLElement                 |
   |horizontalDirection | コンポーネントが表示される方向。       | HorizontalAlignment                 |
   |verticalDirection   | コンポーネントが表示される方向。       | VerticalAlignment                   |
   |horizontalStartPoint| ターゲットの開始ポイント。                             | HorizontalAlignment                 |
   |verticalStartPoint  | ターゲットの開始ポイント。                             | VerticalAlignment                   |
   |openAnimation       | オーバーレイが開いている間に適用されるアニメーション。             | AnimationReferenceMetadata          |
   |closeAnimation      | オーバーレイが閉じている間に適用されるアニメーション。            | AnimationReferenceMetadata          |

### メソッド

`IgxOverlayService`

   | 名前           | 説明                                                                     | パラメーター |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |show             | オーバーレイで指定したコンポーネントを表示します。                                     |component, overlaySettings?|
   |hide             | 指定 ID のコンポーネントのネイティブ要素を削除します。        |id          |
   |hideAll          | すべてのネイティブ要素を削除してオーバーレイを非表示にします。                        |-           |
   |reposition       | 指定 ID のコンポーネントのネイティブ要素を再配置します。                |id          |


 `IPositionStrategy`

   | 名前            | 説明                                                                    | パラメーター |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |position         | 指定した要素を配置します。                                                      |element     |


 `IScrollStrategy`

   | 名前            | 説明                                                                     | パラメーター |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |initialize       | ストラテジーを初期化します。1 度のみ呼び出します。                                 |document, overlayService, id|
   |attach           | ストラテジーをアタッチします。                                                    |-           |
   |detach           | ストラテジーをデタッチします。                                                          |-           |


 `static methods`

   | 名前                        | 説明                                                         | パラメーター |
   |-----------------------------|---------------------------------------------------------------------|------------|
   |getPointFromPositionsSettings| オーバーレイの表示を開始するポイントを計算します。    |settings    |

### イベント


`IgxOverlayService`

   | 名前        | 説明                        | キャンセル可能 | パラメーター |
   |-------------|------------------------------------|------------|------------|
   |onOpening    | オーバーレイを表示する前に発生されます。    | false      |            |
   |onOpened     | オーバーレイを表示した後に発生されます。       | false      |            |
   |onClosing    | オーバーレイを非表示にする前に発生されます。       | false      |            |
   |onClosed     | オーバーレイを非表示にした後に発生されます。       | false      |            |


## 前提事項と制限</a>
既知の制限はありません。

## その他のリソース
* [配置方法](overlay_position.md)
* [スクロール方法](overlay_scroll.md)