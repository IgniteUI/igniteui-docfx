---
title: Dialog Window コンポーネント
_description: Ignite UI for Angular Dialog Window コンポーネントを使用すると、情報ダイアログまたはデータ変換ウィンドウを作成し、リアルタイムで情報を表示して管理できます。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Dialog Window component, Angular Dialog Window control, Angular Dialog Component
_language: ja
---

# Angular Dialog Window (ダイアログ ウィンドウ) コンポーネントの概要
<p class="highlight">Ignite UI for Angular Dialog Window コンポーネントをメッセージを表示するか、入力フォームを表示するために使用します。コンポーネントはアプリケーション コンテンツの中央上にダイアログ ウィンドウを開きます。キャンセル可能な規格の警告メッセージを提供できます。</p>
<div class="divider"></div>

## Angular Dialog の例

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/dialog-sample-1" alt="Angular Dialog の例">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Dialog Window

To get started with the Ignite UI for Angular Dialog Window component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxDialogModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDialogModule } from 'igniteui-angular';
// import { IgxDialogModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDialogModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDialogComponent` as a standalone dependency, or use the [`IGX_DIALOG_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/dialog/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts
import { IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
// import { IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-home',
    template: `
    <button igxButton="raised" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>
    <igx-dialog #alert
        title="Notification"
        message="Your email has been sent successfully!"
        leftButtonLabel="OK"
        (leftButtonSelect)="alert.close()">
    </igx-dialog>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective]
    /* or imports: [IgxDialogComponent, IgxButtonDirective, IgxRippleDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Dialog Window module or directives imported, you can start using the `igx-dialog` component.

<div class="divider--half"></div>

## Using the Angular Dialog Window
### 通知ダイアログ

通知のダイアログを作成するには、メールコンポーネントのテンプレートに以下のコードを追加します。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftButtonLabel) を設定し、[`leftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftButtonSelect) イベントを処理します。 

```html
<!--email.component.html-->
<button igxButton="raised" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (leftButtonSelect)="alert.close()">
</igx-dialog>
```

すべて適切に設定できると、ブラウザ上でデモサンプルを確認することができます。

<div class="divider--half"></div>

### 標準ダイアログ

標準のダイアログを作成するには、ファイル マネージャー コンポーネントのテンプレートに以下のコードを追加します。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftButtonLabel)、[`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightButtonLabel) を設定し、[`leftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftButtonSelect) および [`rightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightButtonSelect) イベントを処理します。 

```html
<!--file-manager.component.html-->
<button igxButton="raised" igxRipple="white" (click)="dialog.open()">Show Confirmation Dialog</button>

<igx-dialog #dialog title="Confirmation"
    leftButtonLabel="Cancel"
    (leftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (rightButtonSelect)="onDialogOKSelected($event)"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?">
</igx-dialog>
```


<code-view style="height:250px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/dialog-sample-2" >
</code-view>

<div class="divider--half"></div>

### カスタム ダイアログ

カスタム ダイアログを作成するには、サインイン コンポーネントのテンプレートに以下のコードを追加します。ダイアログのタイトル領域は `igxDialogTitle` ディレクティブまたは `igx-dialog-title` セレクターを使ってカスタマイズできます。アクション領域は `igxDialogActions` ディレクティブまたは `igx-dialog-actions` セレクターを使ってカスタマイズできます。
[**igxLabel**](input-group.md) および [**igxInput**](input-group.md) ディレクティブで装飾された label と input を含む 2 つの入力グループを追加します。

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


<code-view style="height:300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/dialog-sample-3" >
</code-view>

<div class="divider--half"></div>

### 位置とアニメーション設定 

`igx-dialog` が表示される位置を変更するには、2 つの方法があります。

- Using [`open`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#open) method and pass a valid [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html). Example:

```typescript
import { PositionSettings, OverlaySettings, GlobalPositionStrategy, NoOpScrollStrategy, HorizontalAlignment, VerticalAlignment } from 'igniteui-angular';
// import { PositionSettings, OverlaySettings, GlobalPositionStrategy, NoOpScrollStrategy, HorizontalAlignment, VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package
@Component({...})
export class HomeComponent {
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
    public openDialog() {
        this.alert.open(this.overlaySettings);
    }
}
```

- Using the `positionSettings` `@Input`. Example:

```html
<igx-dialog #alert title="Notification" [positionSettings]="positionSettings" >
</igx-dialog>
```

```typescript
import { useAnimation } from '@angular/animations';
import { PositionSettings, HorizontalAlignment, VerticalAlignment } from 'igniteui-angular';
// import { PositionSettings, HorizontalAlignment, VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package
@Component({...})
export class HomeComponent {
    public positionSettings: PositionSettings = {
        openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
        closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
        horizontalDirection: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Middle,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Middle,
        minSize: { height: 100, width: 100 }
    };
}
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

### ダイアログ内にフォーカスをトラップ

デフォルトでは、ダイアログが開かれると、Tab キーのフォーカスがダイアログ内にトラップされます。つまり、ユーザーがフォーカス可能な要素をタブで移動し続けても、フォーカスは要素から離れません。フォーカスが最後の要素を離れると、最初の要素に移動します。その逆も同様です。Shift + Tab キーを押すと、フォーカスが最初の要素を離れると、最後の要素にフォーカスが移されます。ダイアログにフォーカス可能な要素が含まれていない場合、フォーカスはダイアログ コンテナー自体にトラップされます。この動作は、[`focusTrap`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#focusTrap) プロパティを設定することで変更できます。

## スタイル設定

ダイアログ ウィンドウのスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをはじめにインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

[`dialog-theme`]({environment:sassApiUrl}/index.html#function-dialog-theme) を拡張する新しいテーマを作成し、ダイアログのスタイルを設定できるさまざまなパラメーターを受け取ります。

```scss
$my-dialog-theme: dialog-theme(
    $background: #011627,
    $title-color: #ECAA53,
    $message-color: #FEFEFE,
    $border-radius: .3,
);
```

> [!NOTE]
> ダイアログ ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ダイアログ ウィンドウのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

ダイアログウィンドウは [`IgxOverlayService`](overlay.md) を使用するため、カスタム テーマがスタイルを設定するダイアログ ウィンドウに届くように、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

```html
<div igxOverlayOutlet>
    <igx-dialog #dialog1>
        <!-- .... -->
    </igx-dialog>
</div>
```

> [!NOTE]
> [`IgxOverlayService`](overlay.md) を使用して表示される要素にテーマを提供するためのさまざまなオプションの詳細については、[オーバーレイ スタイリングのトピック](overlay-styling.md)をご覧ください。

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマを**含めます**。

`$legacy-support` が `true` に設定されている場合、**テーマ**を以下のように含めます。

```scss
 @include dialog($my-dialog-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
:host {
     ::ng-deep {
        @include dialog($my-dialog-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include css-vars($my-dialog-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include css-vars($my-dialog-theme);
}
```

### デモ

<code-view style="height:300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/dialog-styling-sample" >
</code-view>

<div class="divider--half"></div>

## API まとめ
<div class="divider--half"></div>

* [IgxDialogComponent]({environment:angularApiUrl}/classes/igxdialogcomponent.html)
* [IgxDialogComponent スタイル]({environment:sassApiUrl}/index.html#function-dialog-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-overlay-theme)

## テーマの依存関係

* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/index.html#function-ripple-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/index.html#function-overlay-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)