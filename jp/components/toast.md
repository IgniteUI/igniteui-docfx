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
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。「[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)」のトピックで手順を参照できます。

### 使用方法

Ignite UI for Angular Toast を初期化する前に、最初に **IgxToastModule** を **app.module.ts** ファイルにインポートします:

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

Toast コンポーネントを表示するには、ボタン クリックで `show()` メソッドを呼び出します。`message` 入力を使用して通知を設定します。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed"></igx-toast>
```

サンプルが正しく構成された場合、ボタン クリック時に通知を表示する Toast が表示されます。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### 非表示/自動的に隠す

開いた後は、`displayTime` 入力によって指定した期間遅延後に非表示になります。デフォルト値は 4000 ミリ秒です。この動作はデフォルトで有効ですが、`autoHide` を **false** に設定して変更できます。この場合、Toast は非表示になりません。Toast の `hide()` メソッドを使用して、コンポーネントを閉じることができます。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">SHOW TOAST</button>
<button igxButton="raised" (click)="toast.hide()">HIDE TOAST</button>
<igx-toast #toast message="Notification displayed" [autoHide]="false"></igx-toast>
```

サンプルが正しく構成されると、[SHOW] ボタンをクリックしたときに Toast が表示されます。自動的に隠す機能が無効で、[HIDE] ボタンのクリックで Toast が非表示になります。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### 表示期間

`displayTime` でミリ秒間隔に設定し、Toast コンポーネントが表示される期間を構成します。

```html
<!--sample.component.html-->
 
<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed" displayTime="1000"></igx-toast>
```
 
サンプルが正しく構成された場合、Toast が自動ですばやく非表示になります。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

### 配置

`position` を使用すると、Toast の表示位置を構成します。デフォルトで、Toast はページの下に表示されます。以下のサンプルで、通知が上位置に表示されます。

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
    <iframe id="toast-sample-5-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### API まとめ

以下の表は便利な **igx-toast** コンポーネントの入力、出力、およびメソッドを示します。

<div class="divider--half"></div>

#### 入力

以下の入力は **igx-toast** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `autoHide` | boolean | `displayTime` 後、Toast を自動的に隠すかどうかを指定します。デフォルトで、`autoHide` は **true** に設定されます。 |
| `displayTime` | number | Toast が表示される間隔をミリ秒で指定します。デフォルトでは、`displayTime` が 4000 ミリ秒に設定されます。 |
| `isVisible` | boolean | コンポーネントのビジュアル ステートを指定します。デフォルトで、`isVisible` は **false** に設定されます。 |
| `message` | string | 表示されるメッセージを指定します。 |
| `position` | `IgxToastPosition` | Toast の位置を指定します。オプションは `IgxToastPosition.Top`、`IgxToastPosition.Middle`、および `IgxToastPosition.Bottom` です。デフォルトでは、`position` は `IgxToastPosition.Bottom` に設定されます。 |

<div class="divider--half"></div>

#### 出力

以下の出力は **igx-toast** コンポーネントで利用できます。

| 名前 | 説明 |
| :--- | :--- |
| `onShowing`  | Toast が表示される前にイベントを発生します。  |
| `onShown`  | Toast が表示されたときにイベントを発生します。 |
| `onHiding`  | Toast が非表示される前にイベントを発生します。 |
| `onHidden`  | Toast が非表示にされたときにイベントを発生します。 |

#### メソッド

以下のメソッドが **igx-toast** コンポーネントで利用できます。

| 名前 | 説明 |
| :--- | :--- |
| `show()`  | `autoHide` を **true** に設定した場合、Toast コンポーネントを表示し、`displayTime` 後に非表示にします。 |
| `hide()`  | Toast コンポーネントを非表示にします。 |

### 追加のリソース

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)