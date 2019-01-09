---
title: Toast コンポーネント
_description: Ignite UI for Angular Toast コンポーネントは、アプリケーションで非対話型メッセージをユーザーに表示できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Toast コンポーネント, Angular Toast コントロール
_language: ja
---

##Toast

<p class="highlight">Ignite UI for Angular Toast コンポーネントは、ユーザーが閉じられない非対話型の情報および報告メッセージを表示できます。通知はページの上側、中央、または下側に表示できます。</p>
<div class="divider"></div>

### Toast デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/toast-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。「[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)」のトピックで手順を参照できます。

### 使用方法

Ignite UI for Angular Toast を初期化する前に、最初に [`IgxToastModule`]({environment:angularApiUrl}/classes/igxtoastmodule.html) を **app.module.ts** ファイルにインポートします:

```typescript
// app.module.ts

...
import { IgxToastModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxToastModule],
    ...
})
export class AppModule {}
```

#### Toast の表示

Toast コンポーネントを表示するには、ボタン クリックで [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) メソッドを呼び出します。[`message`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#message) 入力を使用して通知を設定します。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed"></igx-toast>
```

サンプルが正しく構成された場合、ボタン クリック時に通知を表示する Toast が表示されます。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/toast-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### 非表示/自動的に隠す

開いた後は、[`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) 入力によって指定した期間遅延後に非表示になります。デフォルト値は 4000 ミリ秒です。この動作はデフォルトで有効ですが、[`autoHide`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#autohide) を **false** に設定して変更できます。この場合、Toast は非表示になりません。Toast の [`hide()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#hide) メソッドを使用して、コンポーネントを閉じることができます。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">SHOW TOAST</button>
<button igxButton="raised" (click)="toast.hide()">HIDE TOAST</button>
<igx-toast #toast message="Notification displayed" [autoHide]="false"></igx-toast>
```

サンプルが正しく構成されると、[SHOW] ボタンをクリックしたときに Toast が表示されます。自動的に隠す機能が無効で、[HIDE] ボタンのクリックで Toast が非表示になります。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/toast-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### 表示期間

[`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) でミリ秒間隔に設定し、Toast コンポーネントが表示される期間を構成します。

```html
<!--sample.component.html-->
 
<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed" displayTime="1000"></igx-toast>
```
 
サンプルが正しく構成された場合、Toast が自動ですばやく非表示になります。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/toast-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

### 配置

[`position`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#position) を使用すると、Toast の表示位置を構成します。デフォルトで、Toast はページの下に表示されます。以下のサンプルで、通知が上位置に表示されます。

```html
<!--sample.component.html-->

<div>
    <button igxButton="raised" (click)="show(toast)">Show notification on top</button>
    <igx-toast #toast message="Notification displayed" [position]="toastPosition"></igx-toast>
</div>
```

```typescript
// sample.component.ts

import { IgxToastPosition } from 'igniteui-angular';

...
public toastPosition: IgxToastPosition;
public show(toast) {
    this.toastPosition = IgxToastPosition.Top;
    toast.show();
}
...

```

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-5-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/toast-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### API リファレンス

このトピックでは、[`IgxToastComponent`]({environment:angularApiUrl}/classes/igxtoastcomponent.html) を使用と構成方法を説明しました。API の詳細については以下のリンク先を参照してください。

* [`IgxToastComponent`]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

スタイル:

* [`IgxToastComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-toast-theme)

### その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)