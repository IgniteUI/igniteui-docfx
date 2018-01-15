---
title: Toast コンポーネント
_description: Ignite UI for Angular Toast コンポーネントは、アプリケーションで非対話型メッセージをユーザーに表示できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Toast コンポーネント, Angular Toast コントロール
---

##Toast
<p class="highlight">Toast コンポーネントはユーザーによって閉じることができない非対話型の情報および報告メッセージを表示できます。通知はページの下側、中央、または上側に表示できます。</p>
<div class="divider"></div>

### Toast デモ
<div class="sample-container" style="height: 928px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:demosBaseUrl}/toast"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<button (click)="toast.show()">Toast の表示</button>
<button (click)="toast.hide()">Toast の非表示</button>

<igx-toast #toast
           message="メッセージを表示しました。">
</igx-toast>
```

詳細メッセージを設定するには、`message="メッセージを表示しました。"` を使用します。

Toast を表示するには `toast.show()` メソッドを使用します。

Toast を非表示するには `toast.hide()` メソッドを使用します。
<div class="divider--half"></div>

### 配置

```html
<button (click)="toast.show()">Toast の表示</button>

<igx-toast #toast
           message="メッセージを表示しました。"
           position="IgxToastPosition.Top">
</igx-toast>
```

Toast の位置を変更できます。例: `postion="IgxToastPosition.Top"`。
<div class="divider--half"></div>

### イベント

```html
<button (click)="toast.show()">Toast の表示</button>

<igx-toast #toast
           message="メッセージを表示しました。"
           (onShowing)="onToastShowing($event)"
           (onShown)="onToastShown($event)"
           (onHiding)="onToastShowing($event)"
           (onHidden)="onToastHidden($event)">
</igx-toast>
```

onShowing イベントを処理できます。例: `(onShowing)="someFunc($event)"`。
onShown イベントを処理できます。例: `(onShown)="someFunc($event)"`。
onHiding イベントを処理できます。例: `(onHiding)="someFunc($event)"`。
onHidden イベントを処理できます。例: `(onHidden)="someFunc($event)"`。
<div class="divider--half"></div>
