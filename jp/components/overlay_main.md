---
title: Overlay サービス
_description: ページのその他すべてのコンポーネント/HTML コンテンツの上にコンテンツを配置するサービスを提供します。サービスの構成には堅牢な API が利用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular オーバーレイ サービス コンポーネント
_language: ja
---

## Overlay
<p class="highlight">
オーバーレイ サービスはアプリケーションの前景にコンテンツを動的な描画をサポートします。描画するコンテンツおよび描画方法 (配置、アニメーション、スクロールおよびクリック動作など) を構成できます。
このオーバーレイ サービスは Toggle ディレクティブと完全に統合されています。
</p>
<div class="divider--half"></div>

## 使用方法

IgxOverlayService を使用するには、コンポーネントにインポートします。 サービスへの参照をコンポーネントの `constructor` に注入します。
```typescript

import { Inject } from '@angular/core'
import { IgxOverlayService } from `igniteui-angular`;

...

export class MyOverlayComponent {
    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    )
}

...
```

### オーバーレイ コンテンツの表示

オーバーレイ サービスでオーバーレイ DOM にアタッチすると `HTMLNode` または Angular コンポーネントを動的に表示できます。

Overlay サービスへの参照を追加した後、コンテンツを動的に表示/非表示できます。たとえば、Angular コンポーネントを show 関数で渡せます。

```typescript

// in my-overlay-component.component.ts
import { MyDynamicComponent } from '../my-dynamic-component/my-dynamic-component.component';

export class MyOverlayComponent {

    ... 
    // a reference to the OverlayService is defined via @Inject in the constructor
    // under this.overlayService

    public showInOverlay() {
        this.overlayService.show(MyDynamicComponent);
    }
}
```

```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
...
<button (click)="showInOverlay()">Show Overlay</button>
</div>

```

ページの既存の `ElementRef` から `IgxOverlayService` へ渡す場合は以下の手順に従ってください。

```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
  <button (click)="showInOverlay()">Show Overlay</button>
</div>
<div>
    <img #exampleImage width='200px' src='../assets/example.png' title='Click Me!'>
</div>
```

```typescript
// in my-overlay-component.component.ts
import { Inject, ViewChild } from '@angular/core'
export class MyOverlayComponent {

    @ViewChild('exampleImage', {read: ElementRef})
    private exampleImage: ElementRef;
    public showInOverlay() {
        this.overlayService.show(this.exampleImage);
    }
}
```
<div class="divider--half"></div>

オーバーレイ サービスの `show()` メソッドは 2 つの引数を受け取ります。最初の引数はオーバーレイに描画するコンテンツです。
  - 上記の例などのコンポーネント定義 - コンポーネントを最初の引数として渡す場合、オーバーレイ サービスがそのコンポーネントの新しいインスタンスを作成し、動的にオーバーレイ DOM にアタッチします。
  - 既存 DOM 要素へ `ElementRef` - ページで描画されるビューをオーバーレイ サービスに渡す場合、オーバーレイ DOM に描画されます。この方法を使用する場合:
    - Angular から渡されるビューへの参照を取得します。
    - ビューを DOM からデタッチし、そこにアンカーを追加します。
    - `show()` メソッド設定またはデフォルトのオーバーレイ設定を使用してビューをオーバーレイにアタッチします。
    - 閉じた後、ビューを DOM にある元の位置にアタッチします。
<div class="divider--half"></div>

### デモ - 動的なアタッチ - コンポーネント
以下のデモで、IgxCard [デモ](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/card.html#card-デモ) をオーバーレイ サービスの show() メソッドに渡して、モーダル コンテナーで DOM に動的にアタッチします。


<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### オーバーレイ設定の構成

オーバーレイ サービスの `show()` メソッドは `OverlaySettings` 型のオブジェクトを受け取ります。このオブジェクトはコンテンツの表示方法を構成します。このオブジェクトが指定されていない場合、Overlay サービスは渡されたコンテンツを描画するためにデフォルト設定を使用します。

たとえば、コンテンツを要素に相対的に配置するには、オーバーレイの `show()` メソッドに別の `positioningStrategy` (`ConnectedPositioningStrategy` など) を渡します。コンポーネントの表示方法を構成するには、`OverlaySettings` オブジェクトを作成します。
```typescript
// in my-overlay-component.component.ts
// add an import for the definion of ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
...
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public showInOverlay() {
        this.overlayService.show(MyDynamicComponent, {
            positionStrategy: new ConnectedPositioningStrategy({ target: this.myAnchorButton.nativeElement })
        });
    }
}
```
```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="showInOverlay()">Show Overlay</button>
</div>

```
ボタンをクリックすると、ボタンに相対的に配置される `MyDynamicComponent` を表示します。
<div class="divider--half"></div>

### オーバーレイの非表示

`IgxOverlayService.hide()`メソッドはコンテンツをオーバーレイからコンテンツを削除し、DOM の元の位置に再度アタッチします。

すべてのオーバーレイ サービスで描画される要素にサービスによって割り当てられた一意の ID があります。`IgxOverlayService.show()` メソッドは描画されるコンテンツの識別子を返します。オーバーレイからコンテンツを削除するには、その ID をオーバーレイの `hide()` メソッドに渡します。

以前に定義されたオーバーレイ メソッドをオーバーレイ要素を表示して非表示するために変更できます。
```typescript
// in my-overlay-component.component.ts
// add an import for the definion of ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
...
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    private _overlayShown = false; // Is the component rendered in the Overlay?

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;

    public toggleOverlay() {
        if (!this._overlayShown) { // If the element is not visible, show it
            this._overlayId = this.overlayService.show(MyDynamicComponent, {
                positionStrategy: new ConnectedPositioningStrategy({ target: this.myAnchorButton.nativeElement }),
                closeOnOutsideClick: false, // overlay will not close on outside clicks
                modal: false // overlay content will not be rendered in a modal dialog
            }); // The show method returns an ID that can be used to reference the shown content
        } else { // If the element is not visible, hide it
            this.overlayService.hide(this._overlayId); // Find and remove the component from the overlay container
        }
        this._overlayShown = !this._overlayShown;
    }
}
```
```HTML
<!-- in my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="toggleOverlay()">Toggle Overlay</button>
</div>
```
### デモ - 動的なアタッチ - 設定

`show()` メソッドの `overlaySettings` パラメーターを使用してコンテンツの表示方法を変更できます。たとえば、コンテンツの配置、スクロールの動作、およびコンテナーがモーダルかどうかを設定できます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/overlay-sample-main-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

`overlaySettings` が指定されていない場合、切り替えた要素はデフォルト表示設定を使用します。

```typescript
defaultOverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };
```
<div class="divider--half"></div>

### igxToggle との統合
`IgxToggleDirective` は `IgxOverlayService` と完全に統合されます。コンテンツの切り替えでトグルの `toggle()` メソッドにカスタム オーバーレイ設定を渡すことができます。

構成設定をトグルのメソッドに渡す方法は以下の例で紹介されます。

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
   |`positionSettings`    | この配置方法を適用する設定。         | `PositionSettings`                    |
<div class="divider"></div>

 `OverlaySettings`

   | 名前               | 説明                                         | 型                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |`positionStrategy`    | この設定で使用するための配置方法。       | `IPositionStrategy`                   |
   |`scrollStrategy`      | この設定で使用するためのスクロール方法。          | `IScrollStrategy`                     |
   |`modal`               | オーバーレイがモーダルモードであるかどうかを設定。         | `boolean`                             |
   |`closeOnOutsideClick` | オーバーレイがアウトサイド クリックで閉じるかどうかを設定。  | `boolean`                             |
   |outlet              | オーバーレイをアタッチするアウトレット コンテナを設定 (デフォルトは `body`)。 | IgxOverlayOutletDirective \| ElementRef |
<div class="divider--half"></div>

 `PositionSettings`

   | 名前               | 説明                                        | 型                                |
   |--------------------|-----------------------------------------------------|-------------------------------------|
   |`target`              | 表示するターゲットのアタッチ ターゲット。         | `Point` \| `HTMLElement`                 |
   |`horizontalDirection` | コンポーネントが表示される方向。       | `HorizontalAlignment`                 |
   |`verticalDirection`   | コンポーネントが表示される方向。       | `VerticalAlignment`                   |
   |`horizontalStartPoint`| ターゲットの開始ポイント。                             | `HorizontalAlignment`                 |
   |`verticalStartPoint`  | ターゲットの開始ポイント。                             | `VerticalAlignment`                   |
   |`openAnimation`       | オーバーレイが開いている間に適用されるアニメーション。             | `AnimationReferenceMetadata`          |
   |`closeAnimation`      | オーバーレイが閉じている間に適用されるアニメーション。            | `AnimationReferenceMetadata`          |

### メソッド

`IgxOverlayService`

   | 名前           | 説明                                                                     | パラメーター |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |`show`             | オーバーレイで指定したコンポーネントを表示します。                                     |`component, overlaySettings?`|
   |`hide`             | 指定 ID のコンポーネントのネイティブ要素を削除します。        |`id`          |
   |`hideAll`          | すべてのネイティブ要素を削除してオーバーレイを非表示にします。                        |-           |
   |`reposition`       | 指定 ID のコンポーネントのネイティブ要素を再配置します。                |`id`          |
<div class="divider"></div>

 `IPositionStrategy`

   | 名前            | 説明                                                                    | パラメーター |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |`position`         | 指定した要素を配置します。                                                      |`element`     |
<div class="divider"></div>

 `IScrollStrategy`

   | 名前            | 説明                                                                     | パラメーター |
   |-----------------|---------------------------------------------------------------------------------|------------|
   |`initialize`       | ストラテジーを初期化します。1 度のみ呼び出します。                                 |`document, overlayService, id`|
   |`attach`           | ストラテジーをアタッチします。                                                    |-           |
   |`detach`           | ストラテジーをデタッチします。                                                          |-           |
<div class="divider"></div>

 `static methods`

   | 名前                        | 説明                                                         | パラメーター |
   |-----------------------------|---------------------------------------------------------------------|------------|
   |`getPointFromPositionsSettings`| オーバーレイの表示を開始するポイントを計算します。    |`settings`    |
<div class="divider"></div>

### イベント


`IgxOverlayService`

   | 名前          | Description                         | Cancelable | Parameters |
   |---------------|-------------------------------------|------------|------------|
   |`onOpening`    | オーバーレイが表示される前に発生されます。        | false      |            |
   |`onOpened`     | オーバーレイが表示された後に発生されます。         | false      |            |
   |`onClosing`    | オーバーレイが非表示になる前に発生されます。       | false      |            |
   |`onClosed`     | オーバーレイが非表示になった後に発生されます。         | false      |            |
   |`onAnimation`  | アニメーションを開始する前に発生されます。 | false      |            |
<div class="divider--half"></div>

## 前提事項と制限</a>
アウトレットにオーバーレイを表示する際にアウトレットが変換で要素の子、視点、フィルター css の場合、モーダル オーバレイが表示されません。これは、上記いずれかの css プロパティが設定された場合にブラウザーが新しく含まれるブロックを作成して [here] (https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) のようにオーバーレイがこのブロックに制限されるためです。

## その他のリソース
* [配置方法](overlay_position.md)
* [スクロール方法](overlay_scroll.md)