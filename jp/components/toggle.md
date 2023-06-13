---
title: Toggle コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Toggle ディレクティブを使用すると、トグル コンテナーを開く、操作、アニメーションに適用、および閉じることができます。
_keywords: Angular Toggle directive, Angular Toggle control, Angular Toggle Component, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Native Angular Components
_language: ja
---

# Angular Toggle Directive Overview

<p class="highlight">The Ignite UI for Angular Toggle directive allows the users to make a container in the DOM toggleable through user interaction.</p>

## Angular Toggle の例


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-1" alt="Angular Toggle の例">
</code-view>


## Getting Started with Ignite UI for Angular Toggle

To get started with the Ignite UI for Angular Toggle directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxToggleModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular';
// import { IgxToggleModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxToggleDirective` as a standalone dependency.

```typescript
// home.component.ts
import { IgxToggleDirective, IgxButtonDirective } from 'igniteui-angular';
// import { IgxToggleDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-home',
    template: `
    <button class="toggle-button" igxButton="raised" (click)="toggleContent()">Toggle</button>
    <div class="toggle-content" igxToggle>
        <section class="toggle-section">
            <img src="assets/images/toggle/nature.jpg" alt="Nature" />
        </section>
    </div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxToggleDirective, IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Toggle module or directive imported, you can start using the `igxToggle` directive.

## Using the Angular Toggle Directive

### トグルの表示

トグルのコンテンツを表示および非表示にするには、[open]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) および [close]({environment:angularApiUrl}/classes/igxtoggledirective.html#close) メソッドを使用します。

```typescript
import { IgxToggleDirective } from 'igniteui-angular'
// import { IgxToggleDirective } from '@infragistics/igniteui-angular'; for licensed package
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
> デフォルトで、[`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeOnOutsideClick) プロパティは `true`に設定されています。この機能を無効にするには、プロパティを `false` に設定する必要があります。さらに、[`closeOnEscape`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeOnEscape) プロパティのデフォルトの設定は `false` であるため、利用するには、`true` に設定する必要があります。

```typescript
// template.component.ts

...
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild('button') public igxButton: ElementRef;

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


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle" >
</code-view>


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


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-2" >
</code-view>


>[!NOTE]
> デフォルトで、`IgxToggleActionDirective` はホスト要素を [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeOnOutsideClick) プロパティから除外します。したがって、ホスト要素をクリックしてもイベントは発生しません。さらに、このディレクティブはホスト要素をオーバーレイ設定の [`target`]({environment:angularApiUrl}/interfaces/overlaysettings.html#target) として設定します。

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


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-3" >
</code-view>


### トグル コンテナーのオフセット

対応する軸に沿ったトグル コンテナーの位置を指定した量だけ操作できます。

```typescript
// deltaX and deltaY determine by how much the container will be offset compared to its' previous position
public offsetToggle() {
    const deltaX = 30;
    const deltaY = 30;
    this.toggle.setOffset(deltaX, deltaY);
}
```


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-4" >
</code-view>


## API リファレンス
<div class="divider"></div>

* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxOverlayOutletDirective]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [igxNavigationService]({environment:angularApiUrl}/classes/igxnavigationservice.html)

## テーマの依存関係
* [IgxOverlay テーマ]({environment:sassApiUrl}/index.html#function-overlay-theme)


## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
