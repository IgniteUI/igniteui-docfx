---
title: Toggle コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Toggle ディレクティブを使用すると、トグル コンテナーを開く、操作、アニメーションに適用、および閉じることができます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Toggle ディレクティブ, Angular Toggle コントロール, Angular Toggle コンポーネント
_language: ja
---

## Toggle

[`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) ディレクティブを使用すると、トグル コンテナーを開く、操作、アニメーションに適用、および閉じることができます。すべてのトグル コンポーネントは [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) または [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を内部に実装します。[`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) ディレクティブがその他のコンポーネントを制御する間にドロップダウンなどのトグルに基づくコンポーネントおよびビューを実装できます。

### Toggle デモ

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/interactions/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
</div>

## 使用方法

Toggle は、簡単に開閉できるボックスにコンテンツをラップします。

Toggle ディレクティブを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** に **IgxToggleModule** をインポートします。また、[**igxButton**]({environment:angularApiUrl}/classes/igxbuttondirective.html) ディレクティブを使用するため、**IgxButtonModule** も **app.module.ts** にインポートする必要があります。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

コンポーネントのテンプレートで、トグル可能になる要素にディレクティブを適用します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle>
    <section class="toggle-section">
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Strawberries</li>
            <li>Raspberry</li>
            <li>Cherry</li>
        </ul>
    </section>
</div>
```

このコンテンツを表示/非表示にするには、[open]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) または [close]({environment:angularApiUrl}/classes/igxtoggledirective.html#close) メソッドを呼び出します。

```typescript
import { IgxToggleDirective } from 'igniteui-angular'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggle() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

以下は結果です:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
</div>

次のサンプルでは、さまざまな配置方法を使用してコンテンツをボタンの下に表示します。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<div class="sample-wrapper">
  <article class="sample-column">
    <button class="toggle-button" #button igxButton="raised" (click)="toggle()">Toggle</button>
    <div class="toggle-content" igxToggle>
      <section class="toggle-section">
          <h2>Box</h2>
      </section>
    </div>
  </article>
</div>
```

[`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) は、[**IgxOverlayService**](overlay_main.md) を使用し、コンテンツの表示方法を制御するために [`open`]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) および [`toggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html#toggle) メソッドが任意のオーバーレイ設定を受け取ります。省略した場合は、上のサンプルのようにデフォルトのオーバーレイ設定が使用されます。

```typescript
// template.component.ts

...
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild("button") public igxButton: ElementRef;
    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    public _overlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };
    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
```


<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe-1" data-src='{environment:demosBaseUrl}/interactions/toggle' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-iframe-1" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-iframe-1" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示
    </button>
</div>

***注***: デフォルトで [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) は `false` に設定されます。`true` に設定した場合、動作にいくつかの制限があります。たとえば要素が表示されているときにトグルボタンをクリックすると、外側のクリックとトグル方法が強制的に閉じられます。また外側のクリックで閉じるとアニメーションが閉じられます。更に閉じるアニメーションが開始された状態で toggle メソッドが open を呼び出します。これら 2 つのイベントは互いを無効化するため何も起こりません。以下は、無効化せずに動作させるためのオプションです。
- 下記のように [`IgxToggleActionDirective`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を使用します。
- 上記のサンプルのように [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) を `false` に設定します。

### トグル自動操作

このメソッドの呼び出しを回避するための `onClick` ハンドラーを含む、参照トグルの状態を変更できるディレクティブがあります。この機能を使用するには、同じ **IgxToggleModule** にある [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を使用します。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

次にテンプレートで [**IgxToggleDirective**]({environment:angularApiUrl}/classes/igxtoggledirective.html) を割り当てて [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を宣言します。トリガー (トグル) として使用する要素で [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を宣言します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <img src="link to random image"/>
    </section>
</div>
```

この変更後、トグルが以下のように動作します。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
</div>

***注***：デフォルトで、[**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) はホスト要素を [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) から除外します。ホスト要素をクリックすると、外側のクリックで閉じられることはが発生しません。さらに、[**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) はホスト要素を [`target`]({environment:angularApiUrl}/interfaces/positionsettings.html#target) のポジション ストラテジとして設定します。

### サービス プロバイダーを使用するトグル自動操作

状態を保持し、[**igxToggle**]({environment:angularApiUrl}/classes/igxtoggledirective.html) をコマンドするには、**igxNavigationService** プロパイダーを使用します。アプリケーションで状態を追跡する場合に便利です。[**igxToggle**]({environment:angularApiUrl}/classes/igxtoggledirective.html) ディレクティブの識別子を設定すると、サービスの登録が処理されます。この状態を自動的に制御するには、この識別子をヘルパー **igxToggleActionDirective** に渡します。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" class="toggle-button"  igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content">
    <section class="toggle-section">
    <h3>Click 
        <br/> Out of the Box</h3>
    </section>
</div>
```

結果は以下のようになります。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
</div>

### IgxOverlayOutlet ディレクティブ

[**IgxOverlayOutlet**]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html) は、コンポーネント テンプレートで要素を `igxOverlay` アウトレット コンテナとしてマークする方法を提供します。ディレクティブ インスタンスは `overlay-outlet` としてエクスポートされるため、テンプレート内で割り当てることができます。

```html
<div igxOverlayOutlet #outlet="overlay-outlet"></div>
```

これによって、`Outlet` テンプレート変数をトグル操作の設定として提供できます。
```html
<button [igxToggleAction]="reference" [igxToggleOutlet]="outlet">Toggle</button>
<custom-component #reference></custom-component>
```
### トグル コンテナのオフセット

対応する軸に沿って指定した量のみコンテナをオフセットする方法:
```typescript
    // deltaX and deltaY determine by how much the container will be offset compared to its' previous position
   const deltaX: number = 30;
   const deltaY: number = 15;
    this.toggleForm.setOffset(deltaX, deltaY);
```
## API まとめ

このトピックでは Toggle ディレクティブの使用方法について紹介しました。この動作を決定するコードでメソッドを呼び出して表示または非表示にすることができるコンテンツを作成しました。さらに適切なトグル参照を使用して同じ動作を自動的に制御するその他のディレクティブを追加しました。最後に、ヘルパー **igxToggleAction** ディレクティブに提供された ID を使用して、[**igxToggle**]({environment:angularApiUrl}/classes/igxtoggledirective.html) ディレクティブ **igxNavigationService** プロバイダーに登録しました。

### API リファレンス
<div class="divider"></div>

* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)
* [IgxOverlayOutletDirective]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)

<div class="divider"></div>

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
