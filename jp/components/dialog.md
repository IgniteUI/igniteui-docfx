---
title: Dialog Window コンポーネント
_description: Ignite UI for Angular Dialog Window コンポーネントを使用すると、情報ダイアログまたはデータ変換ウィンドウを作成し、リアルタイムで情報を表示して管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Dialog Window コンポーネント, Angular Dialog Window コントロール
_language: ja
---

##Dialog Windows

<p class="highlight">Ignite UI for Angular Dialog Window コンポーネントをメッセージを表示するか、入力フォームを表示するために使用します。コンポーネントはアプリケーション コンテンツの中央上にダイアログ ウィンドウを開きます。キャンセル可能な規格の警告メッセージを提供できます。</p>
<div class="divider"></div>

### Dialog の例

<div class="sample-container" style="height:588px">
    <iframe src='{environment:demosBaseUrl}/dialog' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 警告

**警告を作成するには、タイトル、メッセージ、およびボタン ラベルを追加します。**

```html
<igx-dialog #alert
    title="警告"
    message="メールは正しく送信されました。"
    leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```

警告のタイトルを設定するには、`title="TitleofTheAlert"` を使用します。

詳細メッセージを設定するには、`message="メールは正しく送信されました。"` を使用します。

左ボタンの選択イベントにアタッチするには、`(onLeftButtonSelect)="alert.close()"` を使用します。

<div class="divider--half"></div>

### 規格のダイアログ

**ダイアログは警告と同様ですが、その他のボタンが追加されます。**

```html
<igx-dialog #dialog
    title="確認"
    message="Microsoft_Annual_Report_2015.pdf および Microsoft_Annual_Report_2015.pdf を削除してもよろしいですか?"
    leftButtonLabel="キャンセル"
    (onLeftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (onRightButtonSelect)="onDialogOKSelected($event)">
</igx-dialog>
```

次の属性を使用して、ボタン コンポーネントのすべてのプロパティにアクセスできます。

`leftButtonLabel`

`leftButtonType`

`leftButtonColor`

`leftButtonBackgroundColor`

`leftButtonRipple`

<div class="divider--half"></div>

### カスタム ダイアログ

**カスタム ダイアログを作成するには、マークアップを igx-dialog タグに追加します。**
カスタム ダイアログは message プロパティを設定しません。

```HTML
<igx-dialog #form
    title="サインイン"
    leftButtonLabel="キャンセル"
    (onLeftButtonSelect)="form.close()"
    rightButtonLabel="サインイン"
    rightButtonBackgroundColor="green"
    rightButtonColor="white"
    closeOnOutsideSelect="true">
    <div class="ig-form-group">
        <input type="text" igInput />
        <label igLabel>ユーザー名</label>
    </div>
    <div class="ig-form-group">
        <input type="password" igInput />
        <label igLabel>パスワード</label>
    </div>
</igx-dialog>
```

ダイアログを閉じられるようにするには、`closeOnOutsideSelect="true"` を設定します。

<div class="divider--half"></div>
