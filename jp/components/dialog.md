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
    <iframe id="dialog-sample-iframe" src='{environment:demosBaseUrl}/dialog' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Dialog Window を初期化する前に、**IgxDialogModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxDialogModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxDialogModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### 警告

通知を追加するには、メール コンポーネントのテンプレートで、以下のコードを追加すると通知ダイアログが作成されます。`title`、 `message`、`leftButtonLabel` を設定し、`onLeftButtonSelect` イベントを処理します。

```html
<!--email.component.html-->

<igx-dialog #alert
    title="Alert"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-1-iframe" src='{environment:demosBaseUrl}/dialog-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 標準ダイアログ

規格のダイアログを追加するには、ファイル マネージャー コンポーネントのテンプレートで、以下のコードを追加すると規格のダイアログが作成されます。`title`、 `message`、`leftButtonLabel`、`rightButtonLabel`、`rightButtonRipple` を設定し、`onLeftButtonSelect` および `onRightButtonSelect` イベントを処理します。

```html
<!--file-manager.component.html-->

<igx-dialog #dialog
    title="Confirmation"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    rightButtonRipple="#4CAF50"
    (onRightButtonSelect)="onDialogOKSelected($event)">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-2-iframe" src='{environment:demosBaseUrl}/dialog-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム ダイアログ

カスタム ダイアログを追加するには、サインイン コンポーネントのテンプレートで、以下のコードを追加するとカスタム ダイアログが作成されます。`title`、`leftButtonLabel`、`rightButtonLabel`、`rightButtonBackgroundColor`、`rightButtonColor`、`rightButtonLabel`、`closeOnOutsideSelect` を設定し、`onLeftButtonSelect` および `onRightButtonSelect` イベントを処理します。
また、[**igxLabel**](label_input.md) および [**igxInput**](label_input.md) ディレクティブでデコレートされるラベルおよび入力の 2 つのグループを追加できます。

```html
<!--sign-in.component.html-->

<igx-dialog #form
    title="Sign In"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="form.close()"
    (onRightButtonSelect)="signIn($event)"
    rightButtonLabel="Sign In"
    rightButtonBackgroundColor="#0375be"
    rightButtonColor="#ffffff"
    closeOnOutsideSelect="true">
    <div class="ig-form-group">
        <input type="text" igxInput />
        <label igxLabel>Username</label>
    </div>
    <div class="ig-form-group">
        <input type="password" igxInput />
        <label igxLabel>Password</label>
    </div>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-3-iframe" src='{environment:demosBaseUrl}/dialog-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API まとめ
以下の表は便利な **igx-dialog** コンポーネントの入力、出力、およびメソッドを説明します。

#### 入力
以下の入力が **igx-dialog** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `id` | string | ダイアログの一意識別子。 |
| `title` | string | ダイアログのタイトルを指定します。 |
| `message` | string | ダイアログのメッセージを指定します。 |
| `leftButtonLabel` | string | true に設定すると、左ボタンを表示します。 |
| `leftButtonType` | string | 左ボタンの [**type**](button.md#button-タイプ) を指定します。デフォルト値は flat です。 |
| `leftButtonColor` | string | 左ボタンのテキスト色を指定します。 |
| `leftButtonBackgroundColor` | string | 左ボタンの背景色を指定します。 |
| `leftButtonRipple` | string | 左ボタンの [**ripple**](ripple.md) エフェクトを指定します。 |
| `rightButtonLabel` | string | true に設定すると、右ボタンを表示します。 |
| `rightButtonType` | string | 右ボタンの [**type**](button.md#button-タイプ) を指定します。デフォルト値は flat です。 |
| `rightButtonColor` | string | 右ボタンのテキスト色を指定します。 |
| `rightButtonBackgroundColor` | string | 右ボタンの背景色を指定します。|
| `rightButtonRipple` | string | 右ボタンの [**ripple**](ripple.md) エフェクトを指定します。 |
| `closeOnOutsideSelect` | boolean | true に設定する場合、外にクリックするとダイアログを閉じます。デフォルトは false です。 |
<div class="divider--half"></div>

#### 出力
以下の出力は **igx-dialog** コンポーネントで利用できます。

| 名前 | 説明 |
| :--- | :--- |
| `onOpen`  | ユーザーがダイアログを開くときにイベントを発生します。 |
| `onClose`  | ユーザーがダイアログを閉じるときにイベントを発生します。 |
| `onLeftButtonSelect`  | ユーザーが左ボタンをクリックするときにイベントを発生します。 |
| `onRightButtonSelect`  | ユーザーが右ボタンをクリックするときにイベントを発生します。 |

#### メソッド
以下のメソッドが **igx-dialog** コンポーネントで利用できます。

| 構文 | 説明 |
| :--- | :--- |
| `open`  | ダイアログを開きます。 |
| `close`  | ダイアログを閉じます。 |
| `toggle`  | ダイアログの状態を変更します。 |

#### ゲッター
以下のゲッターが **igx-dialog** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `state` | string | ダイアログの状態を返します。 |
| `isOpen` | boolean | ダイアログが開いた場合は true、閉じた場合は false を返します。 |
| `role` | string | ダイアログのタイプを返します。 |
| `titleId` | string | ダイアログのタイトルの一意の ID を返します。 |

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)