---
title: Dialog Window コンポーネント
_description: Ignite UI for Angular Dialog Window コンポーネントを使用すると、情報ダイアログまたはデータ変換ウィンドウを作成し、リアルタイムで情報を表示して管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Dialog Window コンポーネント, Angular Dialog Window コントロール
_language: ja
---

## Dialog Window
<p class="highlight">Ignite UI for Angular Dialog Window コンポーネントをメッセージを表示するか、入力フォームを表示するために使用します。コンポーネントはアプリケーション コンテンツの中央上にダイアログ ウィンドウを開きます。キャンセル可能な標準の警告メッセージを提供できます。</p>
<div class="divider"></div>

### Dialog デモ
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Dialog Window を初期化する前に、[**IgxDialogModule**] を **app.module.ts** ファイルにインポートします。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 標準ダイアログ

規格のダイアログを追加するには、ファイル マネージャー コンポーネントのテンプレートで、以下のコードを追加すると規格のダイアログが作成されます。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、 [`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel)、[`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) および [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) イベントを処理します。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム ダイアログ

カスタム ダイアログを追加するには、サインイン コンポーネントのテンプレートで、以下のコードを追加するとカスタム ダイアログが作成されます。[`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title)、[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel)、[`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel)、[`closeOnOutsideSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#closeonoutsideselect) を設定し、[`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) および [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) イベントを処理します。
また、[**igxLabel**](input_group.md) および [**igxInput**](input_group.md) ディレクティブでデコレートされるラベルおよび入力の 2 つのグループを追加できます。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### タイトルとアクションのカスタマイズ

ダイアログ タイトル領域は `igxDialogTitle` ディレクティブまたは ` igx-dialog-title` セレクターを使ってカスタマイズできます。また、アクション領域は `igxDialogActions` ディレクティブまたは ` igx-dialog-actions` セレクターを使ってカスタマイズできます。

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

### Styling

To get started with styling the dialog window, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-dialog-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) and accepts the `$background`, `$title-color`, `$message-color`, `$border-radius` and `$shadow` parameters.

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
> As we see the `$shadow` parameter accepts `igx-elevation`, which is of type box-shadow. In order to learn more about various options for IgniteUI Shadows, you can take a look at this [link](shadows.md).

> [!NOTE]
> In order to style any additional components that are used as part of the dialog window's content (such as [`IgxButton`](button.md)), an additional theme should be created that is specific to the respective component and placed under the dialog window's scope only (so it does not affect the rest of the application).

Since the dialog window uses the [`IgxOverlayService`](overlay_main.md), in order for our custom theme to reach down the dialog window that we want to style, we will provide a specific outlet where the dialog window will be placed in the DOM when it is visible.

```html
<div igxOverlayOutlet>
    <igx-dialog #dialog1>
        <!-- .... -->
    </igx-dialog>
</div>
```

> [!NOTE]
> In order to learn more about various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay_main.md), you can take a look at this [link](overlay_main.md#styling).

The last step is to **include** the component mixins: 

```scss
@include igx-dialog($my-dialog-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-dialog($my-dialog-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

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

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

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
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-dialog`]({environment:sassApiUrl}/index.html#variable-_light-dialog):  

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

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

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

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-styling-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog-styling-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Known Limitations
|Limitation|Description|
|--- |--- |
| Scroll position of an `<igx-dialog>` that uses `igxForOf` won't be preserved |An `<igx-dialog>` that uses the `igxForOf` directive won't preserve its scrollbar position, even though the data position would be. The reason for that behavior is that the `igxForOf` directive is internally used, which causes inability to identify the detaching and re-attaching of the DOM elements from the DOM tree and thus inability to update the scrollbar thumb position. Some possible workarounds could be: <br/> <ul><li>Resetting the DOM node's state, for example by wrapping it in an `ngIf`, that'd follow it's state (the tab gets selected => attaching nodes to the DOM tree, the tab gets disselected => removing nodes from the tree).</li><li>Persisting the state, i.e. determining whether the element has been re-added to the DOM tree and resetting its scroll position manually. For example using [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).</li></ul>

### API まとめ
<div class="divider--half"></div>

* [IgxDialogComponent]({environment:angularApiUrl}/classes/igxdialogcomponent.html)
* [IgxDialogComponent Styles]({environment:sassApiUrl}/index.html#function-igx-dialog-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)