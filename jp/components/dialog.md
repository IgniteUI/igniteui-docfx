---
title: Dialog Window コンポーネント
_description: Ignite UI for Angular Dialog Window コンポーネントを使用すると、情報ダイアログまたはデータ変換ウィンドウを作成し、リアルタイムで情報を表示して管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Dialog Window コンポーネント, Angular Dialog Window コントロール
---

##ダイアログ ウィンドウ
<p class="highlight">Ignite UI for Angular Dialog Window コンポーネントをメッセージを表示するか、入力フォームを表示するために使用します。コンポーネントはアプリケーション コンテンツの中央上にダイアログ ウィンドウを開きます。キャンセル可能な規格の警告メッセージを提供できます。</p>
<div class="divider"></div>

### Dialog デモ
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Dialog Window コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに  **IgxDialogModule** をインポートします。

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

#### 警告

通知を追加するには、メール コンポーネントのテンプレートで、以下のコードを追加すると通知ダイアログが作成されます。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、 [`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) イベントを処理します。

```html
<!--email.component.html-->

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### 標準ダイアログ

規格のダイアログを追加するには、ファイル マネージャー コンポーネントのテンプレートで、以下のコードを追加すると規格のダイアログが作成されます。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message) を設定する必要があります。 
[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel)、[`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) と [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) イベントを処理する必要があります。

```html
<!--file-manager.component.html-->

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム ダイアログ

カスタム ダイアログを追加するには、サインイン コンポーネントのテンプレートで、以下のコードを追加するとカスタム ダイアログが作成されます。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel)、[`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel)、[`closeOnOutsideSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#closeonoutsideselect) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) と [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) イベントを処理する必要があります。
また、[**igxLabel**](input_group.md) および [**igxInput**](input_group.md) ディレクティブで装飾されたラベルと入力の 2 つのグループを追加できます。

```html
<!--sign-in.component.html-->

<igx-dialog #form title="Sign In"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="form.close()"
    (onRightButtonSelect)="signIn($event)"
    rightButtonLabel="Sign In"
    [closeOnOutsideSelect]="true">
    <form class="signInForm">
        <igx-input-group>
            <igx-prefix>
                <igx-icon>person</igx-icon>
            </igx-prefix>
            <label igxLabel for="username">Username</label>
            <input igxInput id="username" type="text" />
        </igx-input-group>
        <igx-input-group>
            <igx-prefix>
                <igx-icon>lock</igx-icon>
            </igx-prefix>
            <label igxLabel>Password</label>
            <input igxInput id="password" type="password" />
        </igx-input-group>
    </form>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### タイトルとアクションのカスタマイズ

ダイアログ タイトル領域は `igxDialogTitle` ディレクティブまたは `igx-dialog-title` セレクターを使ってカスタマイズできます。アクション領域は `igxDialogActions` ディレクティブまたは `igx-dialog-actions` セレクターを使ってカスタマイズできます。

```html
<!-- dialog.component.html -->

<igx-dialog #dialog [closeOnOutsideSelect]="true" message="This will create a new social media account.">
    <igx-dialog-title>
        <div class="dialog-container">
            <igx-icon>account_box</igx-icon>
            <div class="dialog-title">Create a new account?</div>
        </div>
    </igx-dialog-title>
    <div igxDialogActions class="dialog-container dialog-actions">
        <button igxButton (click)="dialog.close()">CREATE</button>
        <button igxButton (click)="dialog.close()">CANCEL</button>
    </div>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="custom-dialog-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/custom-dialog-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### さまざまな位置とアニメーション設定を構成する

`igxDialog` が表示される位置を変更するには、2 つの方法があります。

- 
[`open`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#open) メソッドを使用して、有効な [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) を渡します。例:

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

> [!Note] 同じアプローチをアニメーション設定に使用する必要があります。`openAnimation` と `closeAnimation` を使用して、期間などのアニメーション パラメーターを定義します。

`params` object example:

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

最も簡単なアプローチに従って、[`igx-dialog-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) を拡張し、`$background`、`$title-color`, `$message-color`、`$border-radius`、`$shadow` パラメーターを受け入れる新しいテーマを作成します。

```scss
$color-1: rgb(119, 119, 119);
$color-2: #1c83e4;
$color-3: rgb(16, 4, 51);

$elevations-color: igx-elevations($color-1 , $color-2, $color-3);

$my-dialog-theme: igx-dialog-theme(
    $background: #000000,
    $title-color: #1c83e4,
    $message-color: #ffffff,
    $border-radius: .3,
    $shadow: igx-elevation($elevations-color, 14)
);
```

> [!NOTE]
> ご覧のとおり、`$shadow` パラメーターは `igx-elevation` を受け取ります。Ignite UI シャドウのさまざまなオプションの詳細については、この[リンク](shadows.md)をご覧ください。

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
> [`IgxOverlayService`](overlay_main.md) を使用して表示される要素にテーマを提供するためのさまざまなオプションの詳細については、この[リンク](overlay_main.md#styling)をご覧ください。

最後のステップは、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
@include igx-dialog($my-dialog-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

 ```scss
:host {
  ::ng-deep {
    @include igx-dialog($my-dialog-theme);
  }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$black-color: #000000;
$light-blue-color: #1c83e4;
$white-color: #ffffff;

$custom-palette: igx-palette(
    $primary: $black-color,
    $secondary: $light-blue-color,
    $info: $white-color
);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

```scss
$my-dialog-theme: igx-dialog-theme(
    $background: igx-color($custom-palette, "primary", 500),
    $title-color: igx-color($custom-palette, "secondary", 500),
    $message-color: igx-color($custom-palette, "info", 500),
    $border-radius: .3,
    $shadow: igx-elevation($elevations-color, 14)
);
```

>[!NOTE]
>`Igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`Palettes`](../themes/palette.md) のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して　[スキーマ](./themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ [`_light-dialog`]({environment:sassApiUrl}/index.html#variable-_light-dialog) の 1 つを拡張します。  

```scss
// Extending the light dialog schema
$custom-dialog-schema: extend($_light-dialog,
    (
        background: igx-color($custom-palette, "primary", 500),
        title-color: igx-color($custom-palette, "secondary", 500),
        message-color: igx-color($custom-palette, "info", 500),
        border-radius: .3,
        shadow: igx-elevation($elevations-color, 14)
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-dialog: $custom-dialog-schema
    )
);

// Defining our custom theme with the custom schema
$my-dialog-theme: igx-dialog-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

テーマを上記と同じ方法で含めることに注意してください。

#### デモ
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-styling-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog-styling-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
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