---
title: Snackbar コンポーネント
_description: Ignite UI for Angular Snackbar を使用すると、単一行メッセージをモバイルおよびデスクトップ アプリケーションに含みます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Snackbar コンポーネント, Angular Snackbar コントロール
---
## Snackbar
<p class="highlight">Snack Bar コンポーネントは単一行のメッセージで操作のフィードバックを提供します。元に戻すなどの操作へのリンクを追加できます。Snack Bar メッセージがその他の画面要素の上に表示されます。モバイル デバイス画面の下部に配置され、より大きいデバイス画面の左下に配置されます。</p>
<div class="divider"></div>

### Snackbar デモ
<div class="sample-container" style="height: 672px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:host}/angular-demos/snackbar"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法
**ボタンのある Snackbar**
```html
<button (click)="snackbar.show()">Snackbar の表示</button>

<igx-snackbar #snackbar
            message="これはシンプルな Snackbar です。">
</igx-snackbar>
```

詳細メッセージを設定するには、`message="これはシンプルな Snackbar です。"` を使用します。

Snackbar を表示するには `snackbar.show()` メソッドを使用します。


**ボタンと動作のある Snackbar**
```html
<button (click)="snackbar.show()">Snackbar の表示</button>

<igx-snackbar #snackbar
             message="これはボタンと動作のある Snackbar です。"
             actionName="閉じる"
             (onAction)="snackbar.hide()">
</igx-snackbar>
```

ボタンのタイトルを設定できます。例: `actionName="閉じる"`。

Snackbar を非表示するには `snackbar.hide()` メソッドを使用します。

Snackbar は 10000 ミリ秒の後に非表示されます。`displayTime` 属性でこの期間を設定できます。自動非表示は `autoHide` 属性でも構成できます。
<div class="divider--half"></div>
