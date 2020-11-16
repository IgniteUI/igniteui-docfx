---
title: Toggle コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Toggle ディレクティブを使用すると、トグル コンテナーを開く、操作、アニメーションに適用、および閉じることができます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Toggle ディレクティブ, Angular Toggle コントロール, Angular Toggle コンポーネント
_language: ja
---

# Toggle

<p class="highlight">Ignite UI for Angular の Toggle ディレクティブは、ユーザーが簡単に開閉できるボックスにコンテンツをラップします。</p>

## Angular Toggle 例

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-1' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       Stackblitz で表示
    </button>
</div>

## 使用方法

### はじめに

Toggle コンポーネントを初期化にするには、まず `IgxToggleModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```

### トグルの表示

トグルのコンテンツを表示および非表示にするには、[open]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) および [close]({environment:angularApiUrl}/classes/igxtoggledirective.html#close) メソッドを使用します。

```typescript
import { IgxToggleDirective } from 'igniteui-angular'

...

export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggleContent() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

コンポーネントのテンプレートで、トグルを可能にする要素にディレクティブを適用します。 

```html
<!--template.component.html-->
<button class="toggle-button" igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle>
    <section class="toggle-section">
        <img src="assets/images/toggle/nature.jpg"/>
    </section>
</div>
```

## コード例 

### 位置の変更 

次のサンプルでは、さまざまな配置方法を使用してコンテンツをボタンの下に表示します。 

`igxToggle` ディレクティブは  [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) プロバイダーを使用します。`open`、`close`、`toggle` メソッドは、コンテンツの表示方法を制御するオプションのオーバーレイ設定を受け取ります。省略した場合は、上のサンプルのようにデフォルトのオーバーレイ設定が使用されます。

>[!NOTE]
> デフォルトで、[`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) プロパティは `true`に設定されています。この機能を無効にするには、プロパティを `false` に設定する必要があります。さらに、[`closeOnEsc`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonesc) プロパティのデフォルトの設定は `false` であるため、利用するには、`true` に設定する必要があります。

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
        target: this.igxButton.nativeElement,
        closeOnOutsideClick: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this.igxToggle.toggle(this._overlaySettings);
    }
```

トグルは以下のようになります。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/interactions/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       Stackblitz で表示
    </button>
</div>

### トグル自動操作

`open` および `close` メソッドの使用を回避するために、`onClick` ハンドラーを含む、参照するトグルの状態を自動的に変更できるディレクティブがあります。

この機能を利用するには、`IgxToggleModule` の `IgxToggleActionDirective` を使用して `IgxToggleDirective` を割り当てる必要があります。

>[!NOTE]
> トリガー (トグル) として使用する要素で [`IgxToggleActionDirective`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を宣言します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <h6>Automatic toggle actions</h6>
    </section>
</div>
```

この変更後、トグルが以下のように動作します。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       Stackblitz で表示
    </button>
</div>

>[!NOTE]
> デフォルトで、`IgxToggleActionDirective` はホスト要素を [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) プロパティから除外します。したがって、ホスト要素をクリックしてもイベントは発生しません。 さらに、このディレクティブはホスト要素をオーバーレイ設定の [`target`]({environment:angularApiUrl}/interfaces/overlaysettings.html#target) として設定します。

### 自動トグル サービス プロバイダー

`igxToggle` ディレクティブの状態を保持し、[`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) プロバイダーを介してコマンドする便利な方法があります。トグルをサービスに登録するために使用される `igxToggle` 要素の識別子を設定します。状態を自動的に制御したい場合、この識別子を `igxToggleActionDirective`に渡す必要があります。

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" class="toggle-button" igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content">
    <section class="toggle-section">
        <h6>Toggled by the service provider</h6>
    </section>
</div>
```

すべて適切に設定できると、結果は以下のようになります。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       Stackblitz で表示
    </button>
</div>

### トグル コンテナのオフセット

対応する軸に沿ったトグル コンテナーの位置を指定した量だけ操作できます。

```typescript
// deltaX and deltaY determine by how much the container will be offset compared to its' previous position
public offsetToggle() {
    const deltaX = 30;
    const deltaY = 30;
    this.toggle.setOffset(deltaX, deltaY);
}
```

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-4-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toggle-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       Stackblitz で表示
    </button>
</div>

## API リファレンス
<div class="divider"></div>

* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxOverlayOutletDirective]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [igxNavigationService]({environment:angularApiUrl}/classes/igxnavigationservice.html)


## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
