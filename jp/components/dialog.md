---
title: Dialog Window コンポーネント
_description: Ignite UI for Angular Dialog Window コンポーネントを使用すると、情報ダイアログまたはデータ変換ウィンドウを作成し、リアルタイムで情報を表示して管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Dialog Window コンポーネント, Angular Dialog Window コントロール
_language: ja
---

## ダイアログ ウィンドウ
<p class="highlight">Ignite UI for Angular Dialog Window コンポーネントをメッセージを表示するか、入力フォームを表示するために使用します。コンポーネントはアプリケーション コンテンツの中央上にダイアログ ウィンドウを開きます。キャンセル可能な規格の警告メッセージを提供できます。</p>
<div class="divider"></div>

### Dialog デモ
<div class="sample-container loading" style="height:200px">
    <iframe id="dialog-sample-1-iframe" src='{environment:demosBaseUrl}/interactions/dialog-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

はじめに、**app.module.ts** ファイルに **IgxDialogModule** をインポートします。

```typescript
// app.module.ts

...
import { IgxDialogModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDialogModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### 通知ダイアログ

通知のダイアログを作成するには、メールコンポーネントのテンプレートに以下のコードを追加します。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) イベントを処理します。 

```html
<!--email.component.html-->
<button igxButton="raised" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```

すべて適切に設定できると、ブラウザ上でデモサンプルを確認することができます。

<div class="divider--half"></div>

#### 標準ダイアログ

標準のダイアログを作成するには、ファイル マネージャー コンポーネントのテンプレートに以下のコードを追加します。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel)、[`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) および [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) イベントを処理します。 

```html
<!--file-manager.component.html-->
<button igxButton="raised" igxRipple="white" (click)="dialog.open()">Show Confirmation Dialog</button>

<igx-dialog #dialog title="Confirmation"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (onRightButtonSelect)="onDialogOKSelected($event)"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム ダイアログ

カスタム ダイアログを作成するには、サインイン コンポーネントのテンプレートに以下のコードを追加します。ダイアログのタイトル領域は `igxDialogTitle` ディレクティブまたは `igx-dialog-title` セレクターを使ってカスタマイズできます。アクション領域は `igxDialogActions` ディレクティブまたは `igx-dialog-actions` セレクターを使ってカスタマイズできます。
[**igxLabel**](input_group.md) および [**igxInput**](input_group.md) ディレクティブで装飾された label と input を含む 2 つの入力グループを追加します。

```html
<!--sign-in.component.html-->
<button igxButton="raised" igxRipple="white" (click)="alert.open()">Show Custom Dialog</button>

<igx-dialog #form [closeOnOutsideSelect]="true">
    <igx-dialog-title>
        <div class="dialog-container">
            <igx-icon>vpn_key</igx-icon>
            <div class="dialog-title">Sign In</div>
        </div>
    </igx-dialog-title>

    <form class="signInForm">
        <igx-input-group>
            <igx-prefix>
                <igx-icon>person</igx-icon>
            </igx-prefix>
            <label igxLabel for="username">Username</label>
            <input igxInput id="username" type="text"/>
        </igx-input-group>
        <igx-input-group>
            <igx-prefix>
                <igx-icon>lock</igx-icon>
            </igx-prefix>
            <label igxLabel>Password</label>
            <input igxInput id="password" type="password"/>
        </igx-input-group>
    </form>

    <div igxDialogActions>
        <button igxButton (click)="form.close()">CANCEL</button>
        <button igxButton (click)="form.close()">SIGN IN</button>
    </div>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 位置とアニメーション設定 

`igxDialog` が表示される位置を変更するには、2 つの方法があります。

- [`open`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#open) メソッドを使用して、有効な [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) を渡します。例:

```typescript
public positionSettingsOnOpen: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Middle,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Middle,
};
public overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(this.positionSettingsOnOpen),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: false,
    closeOnOutsideClick: true
};
....
public openDialog() {
    this.alert.open(this.overlaySettings);
}
....
this.dialog.open(overlaySettings)
```

- `positionSettings` @input を使用します。例:

```html
<igx-dialog #alert title="Notification" [positionSettings]="positionSettings" >
</igx-dialog>
```

```typescript
public positionSettings: PositionSettings = {
    openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
    closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
    horizontalDirection: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Middle,
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Middle,
    minSize: { height: 100, width: 100 }
};
```

> [!Note] 
> 同じアプローチをアニメーション設定に使用する必要があります。`openAnimation` と `closeAnimation` プロパティを使用して、期間などのアニメーション パラメーターを定義します。

`params` オブジェクトの例:

```typescript
params: {
    delay: '0s',
    duration: '350ms',
    easing: EaseOut.quad,
    endOpacity: 1,
    fromPosition: 'translateX(-500px)',
    startOpacity: 0,
    toPosition: 'translateY(0)'
}
```

### スタイル設定

ダイアログ ウィンドウのスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをはじめにインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

[`igx-dialog-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) を拡張する新しいテーマを作成し、ダイアログのスタイルを設定できるさまざまなパラメーターを受け取ります。

```scss
$my-dialog-theme: igx-dialog-theme(
    $background: #011627,
    $title-color: #ECAA53,
    $message-color: #FEFEFE,
    $border-radius: .3,
);
```

> [!NOTE]
> ダイアログ ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ダイアログ ウィンドウのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

ダイアログウィンドウは [`IgxOverlayService`](overlay_main.md) を使用するため、カスタム テーマがスタイルを設定するダイアログ ウィンドウに届くように、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

```html
<div igxOverlayOutlet>
    <igx-dialog #dialog1>
        <!-- .... -->
    </igx-dialog>
</div>
```

> [!NOTE]
> [`IgxOverlayService`](overlay_main.md) を使用して表示される要素にテーマを提供するためのさまざまなオプションの詳細については、[こちら](overlay_main.md#スタイル設定)をご覧ください。

#### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマを**含めます**。

`$legacy-support` が `true` に設定されている場合、**テーマ**を以下のように含めます。

```scss
 @include igx-dialog($my-dialog-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-dialog($my-dialog-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($my-dialog-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($my-dialog-theme);
}
```

#### デモ
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-styling-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog-styling-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API まとめ
<div class="divider--half"></div>

* [IgxDialogComponent]({environment:angularApiUrl}/classes/igxdialogcomponent.html)
* [IgxDialogComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-dialog-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)