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

#### デモ

<div class="sample-container loading" style="height: 350px">
    <iframe id="overlay-position-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-position-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### はじめに

はじめに、[`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) をインポートし、コンポーネントへの参照をコンポーネントのコンストラクターに`注入`する必要があります。
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

### コンテンツの表示

オーバーレイ サービスでオーバーレイ DOM にアタッチすると `HTMLNode` または Angular コンポーネントを動的に表示できます。

Overlay サービスへの参照を追加した後、コンテンツを動的に表示/非表示できます。たとえば、Angular コンポーネントは `attach` メソッドで渡せます。これは一意の ID を生成し、`show` メソッドに渡してコンポーネントを表示します。

```typescript

// my-overlay-component.component.ts
import { MyDynamicComponent } from '../my-dynamic-component/my-dynamic-component.component';

export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service
    ... 
    // a reference to the OverlayService is defined via @Inject in the constructor
    // under this.overlayService

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent);
        }
        this.overlayService.show(this._overlayId);
    }
}
```

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
    <button (click)="showInOverlay()">Show Overlay</button>
</div>

```

ページの既存の `ElementRef` から [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) へ渡す場合は以下の手順に従ってください。

```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
    <button (click)="showInOverlay()">Show Overlay</button>
</div>
<div>
    <img #exampleImage width='200px' src='../assets/example.png' title='Click Me!'>
</div>
```

```typescript
// my-overlay-component.component.ts
import { Inject, ViewChild } from '@angular/core'
export class MyOverlayComponent {
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    @ViewChild('exampleImage', {read: ElementRef})
    private exampleImage: ElementRef;
    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(this.exampleImage);
        }
        this.overlayService.show(this._overlayId);
    }
}
```
<div class="divider--half"></div>

Overlay サービスの [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドには 2 つのオーバーロードがあります。
  - `attach(element, settings?)`
  - `attach(component, settings?, moduleRef?)`

オーバーロードの最初のパラメーターは必須でオーバーレイに表示されるコンテンツを表します。以下は、コンテンツを渡す場合の例です。
  - コンポーネント定義 - コンポーネントを最初の引数として渡す場合、オーバーレイ サービスがそのコンポーネントの新しいインスタンスを作成し、動的に`オーバーレイ` DOM にアタッチします。`moduleRef` を指定した場合、サービスは `ComponentRef` を作成する際にルートのものではなくモジュールの `ComponentFactoryResolver` と `Injector` を使用します。
  - `ElementRef` から既存の DOM 要素 (上記のサンプルを参照) - ページで既に描画されたビューはオーバーレイ サービスで渡して、オーバーレイ DOM で描画できます。[`show(id)`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) を呼び出したときにこの方法を使用するとオーバーレイは:
    - Angular から渡されるビューへの参照を取得します。 
    - ビューを DOM からデタッチし、そこにアンカーを追加します。
    - [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) メソッド設定またはデフォルトのオーバーレイ設定を使用してビューをオーバーレイにアタッチします。
    - 閉じた後、ビューを DOM にある元の位置にアタッチします。
<div class="divider--half"></div>

### コンポーネントのアタッチ
閉じた後、ビューを DOM にある元の位置にアタッチします。以下のデモでは、[IgxCard](card.md#card-デモ) コンポーネントをオーバーレイ サービスの [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドに渡し、IDを生成します。次に、提供された ID で [`show()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) メソッドを呼び出し、カードをモーダル コンテナで DOM にアタッチします。


<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-sample-main-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### オーバーレイ設定

[`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドは [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) 型のオブジェクトを受け取ります。このオブジェクトはコンテンツの表示方法を構成します。このオブジェクトが指定されていない場合、Overlay サービスは渡されたコンテンツを描画するためにデフォルト設定を使用します。

たとえば、コンテンツを要素に相対的に配置するには、オーバーレイの [`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) メソッドに別の [`target`]({environment:angularApiUrl}/interfaces/overlaysettings.html#target) と [`positioningStrategy`]({environment:angularApiUrl}/interfaces/overlaysettings.html#positionstrategy) ([`ConnectedPositioningStrategy`]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) など) を渡します。コンポーネントの表示方法を構成するには、最初に [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトを作成します。
```typescript
// my-overlay-component.component.ts
// import the ConnectedPositioningStategy class
import { ConnectedPositioningStrategy } from 'igniteui-angular';
...
export class MyOverlayComponent {

    @ViewChild(`myAnchorButton`)
    private myAnchorButton: ElementRef;
    private _overlayId = ''; // The unique identifier assigned to the component by the Overlay service

    public showInOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicComponent, {
                target: this.myAnchorButton.nativeElement,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
        this.overlayService.show(this._overlayId);
    }
}
```
```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
<button #myAnchorButton (click)="showInOverlay()">Show Overlay</button>
</div>

```
ボタンをクリックすると、ボタンに相対的に配置される `MyDynamicComponent` を表示します。
<div class="divider--half"></div>

### オーバーレイの非表示

[`IgxOverlayService.hide()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) メソッドはコンテンツをオーバーレイからコンテンツを削除し、DOM の元の位置に再度アタッチします。

すべてのオーバーレイ サービスで描画される要素にサービスによって割り当てられた一意の ID があります。[`IgxOverlayService.attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドは描画されるコンテンツの識別子を返します。オーバーレイからコンテンツを削除するには、その ID をオーバーレイの [`hide()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#hide) メソッドに渡します。

以前に定義されたオーバーレイ メソッドをオーバーレイ要素を表示して非表示するために変更できます。
```typescript
// my-overlay-component.component.ts
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
            //  generate ID
            if (!this._overlayId) {
                this._overlayId = this.overlayService.attach(MyDynamicComponent, {
                    target: this.myAnchorButton.nativeElement,
                    positionStrategy: new ConnectedPositioningStrategy({
                        closeOnOutsideClick: false, // overlay will not close on outside clicks
                        modal: false // overlay content will not be rendered in a modal dialog
                    }) // The attach method returns an ID that can be used to reference the shown content
                });
            }

            this.overlayService.show(this._overlayId);
        } else { // If the element is visible, hide it
            this.overlayService.hide(this._overlayId); // Find and remove the component from the overlay container
        }
        this._overlayShown = !this._overlayShown;
    }
}
```
```HTML
<!-- my-overlay-component.component.html -->
<div class='content'>
...
    <button #myAnchorButton (click)="toggleOverlay()">Toggle Overlay</button>
</div>
```
### アタッチ設定

[`attach()`]({environment:angularApiUrl}/classes/igxoverlayservice.html#attach) メソッドの [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) パラメーターを使用してコンテンツの表示方法を変更できます。たとえば、コンテンツの配置、スクロールの動作、およびコンテナーがモーダルかどうかを設定できます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-sample-main-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/interactions/overlay-sample-main-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-sample-main-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>


[`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) が指定されていない場合、切り替えた要素はデフォルト表示設定を使用します。

```typescript
defaultOverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: true,
    closeOnOutsideClick: true,
    closeOnEscape: false
};
```
<div class="divider--half"></div>

### igxToggle との統合
[`IgxToggleDirective`]({environment:angularApiUrl}/classes/igxtoggledirective.html) は [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) と完全に統合されます。コンテンツの切り替えで Toggle ディレクティブの [`toggle()`]({environment:angularApiUrl}/classes/igxtoggledirective.html#toggle) メソッドにカスタム オーバーレイ設定を渡すことができます。

構成設定をトグルのメソッドに渡す方法は以下の例で紹介されます。
```html
<!-- In example.component.html -->
<div>
    <button igxToggle (click)="callToggle()">Click me!</button>
    <div [style.visibility]="collapsed ? 'hidden ' : 'visible'">
        This content is toggle-able!
    </div>
</div>
```

```typescript
// example.component.ts
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
        this.toggleDirective.toggle(overlaySettings)
    }
}
```
<div class="divider--half"></div>

### 仮定と制限
アウトレットにオーバーレイを表示する際にアウトレットが CSS で変換、視点、またはフィルターが設定された要素の子である場合、モーダル オーバーレイが表示されません。これは、上記のいずれかの CSS プロパティが設定された際にブラウザーが新しく含まれるブロックを作成して[こちら](https://developer.mozilla.org/ja-JP/docs/Web/CSS/position#fixed)のようにオーバーレイがこのブロックに制限されるためです。

### API リファレンス
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## その他のリソース
* [配置方法](overlay_position.md)
* [スクロール方法](overlay_scroll.md)
* [スタイル設定](overlay_styling.md)
