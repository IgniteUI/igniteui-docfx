---
title: Snackbar コンポーネント
_description: Ignite UI for Angular Snackbar を使用すると、単一行メッセージをモバイルおよびデスクトップ アプリケーションに含みます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Snackbar コンポーネント, Angular Snackbar コントロール
_language: ja
---

## Snackbar

<p class="highlight">Ignite UI for Angular Snack Bar コンポーネントは単一行のメッセージで操作のフィードバックを提供します。元に戻すなどの操作へのリンクを追加できます。Snack Bar メッセージがその他の画面要素の上に表示されます。モバイル デバイス画面の下部に配置され、より大きいデバイス画面の左下に配置されます。</p>
<div class="divider"></div>

### Snackbar デモ

<div class="sample-container loading" style="height: 350px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="snackbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。「[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)」のトピックで手順を参照できます。

### 使用方法

Ignite UI for Angular Snack Bar を初期化する前に、**IgxSnackbarModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxSnackbarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxSnackbarModule],
    ...
})
export class AppModule {}
```

#### Snackbar の表示

Snackbar コンポーネントを表示するには、ボタン クリックで `show()` メソッドを呼び出します。`message` 入力を使用してテキスト メッセージを設定します。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Delete Message</button>
<div>
    <igx-snackbar #snackbar message="Message deleted"></igx-snackbar>
</div>
```

サンプルが正しく構成された場合、ボタン クリック時にテキスト メッセージを表示する Snackbar が表示されます。

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### 非表示/自動的に隠す

開いた後は、`displayTime` 入力によって指定した期間遅延後に非表示になります。デフォルト値は 4000 ミリ秒です。この動作はデフォルトで有効ですが、`autoHide` を **false** に設定して変更できます。この場合、Snackbar は非表示になりません。Snackbar の `hide()` メソッドを使用して、コードでコンポーネントを閉じることができます。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar message="Message sent" [autoHide]="false" actionText="CLOSE" (onAction)="close(snackbar)"></igx-snackbar>
</div>
```

```typescript
// sample.component.ts

public close(element) {
    element.hide();
}
```

サンプルを正しく構成した後、ボタンをクリックするとメッセージおよびアクション ボタンを含む Snackbar が表示されます。自動的に隠す機能が無効で、[CLOSE] ボタンのクリックで Snackbar が非表示になります。

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### 表示期間

`displayTime` でミリ秒間隔に設定し、Snackbar コンポーネントが表示される期間を構成します。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar message="Message sent" displayTime="1000"></igx-snackbar>
</div>
```

サンプルが正しく構成された場合、Snackbar が自動ですばやく非表示になります。

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### リストの Snackbar

Snackbar の主な機能を説明しました。次の例はより複雑なサンプルにコンポーネントを追加します。通知およびアクションの元に戻す機能を提供する Snackbar を作成します。
 
削除可能な連絡先のリストを作成します。項目を削除後、メッセージおよびアクションを元に戻すボタンを含む Snackbar が表示されます。

```html
<!--sample.component.html-->

<igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>

	<igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item" *ngFor="let item of navItems">
        <div class="item-container">
            <div class="contact">
                <igx-avatar [src]="item.avatar" roundShape="true"></igx-avatar>
                <div class="contact__info">
                    <span class="name">{{item.text}}</span>
                </div>
            </div>
            <span igxButton="icon" igxRipple igxRippleCentered="true" (click)="delete(item)">
                <igx-icon color="#ff5252">delete</igx-icon>
            </span>
		</div>
		
    </igx-list-item>
	
    <igx-snackbar message="Contact deleted" actionText="Undo" (onAction)="restore()"></igx-snackbar>
</igx-list>
```

```typescript
//sample.component.ts 

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSnackbarComponent } from "igniteui-angular/main";

...
@ViewChild(IgxSnackbarComponent)
public snackbar: IgxSnackbarComponent;
public navItems: any[];
public deletedItems = [];

constructor() { }

public ngOnInit() {
    this.navItems = [{
        avatar: "assets/images/avatar/2.jpg",
        text: "Richard Mahoney"
    },
    {
        avatar: "assets/images/avatar/4.jpg",
        text: "Lisa Landers"
    },
    {
        avatar: "assets/images/avatar/14.jpg",
        text: "Marianne Taylor"
    }, 
    {
        avatar: "assets/images/avatar/17.jpg",
        text: "Ward Riley"
    }];
  }

public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.show();
}

public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.hide();
}

```

<div class="sample-container loading" style="height: 350px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="snackbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### API まとめ

以下の表は便利な **igx-snackbar** コンポーネントの入力、出力、およびメソッドを説明します。

#### 入力

以下の入力が **igx-snackbar** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `actionText` | string | アクション ボタンに表示するテキストを指定します。 |
| `autoHide` | boolean | `displayTime` 後、Snackbar を自動的に隠すかどうかを指定します。デフォルトで、`autoHide` は **true** に設定されます。 |
| `displayTime` | number | Snackbar が表示される間隔をミリ秒で指定します。デフォルトでは、`displayTime` が 4000 ミリ秒に設定されます。 |
| `isVisible` | boolean | コンポーネントのビジュアル ステートを指定します。デフォルトで、`isVisible` は **false** に設定されます。|
| `message` | string | 表示されるメッセージを指定します。|

<div class="divider--half"></div>

#### 出力

以下のイベントが **igx-snackbar** コンポーネントで利用できます。

| 名前 | 説明 |
| :--- | :--- |
| `animationStarted`  | Snackbar のアニメーションが開始するときにイベントを発生します。 |
| `animationDone`  | Snackbar のアニメーションが終了するときにイベントを発生します。 |
| `onAction`  | アクションが実行されたときにイベントを発生します。Snackbar コンポーネントへの参照を引数として提供します。 |

#### メソッド

以下のメソッドが **igx-snackbar** コンポーネントで利用できます。

| 構文       | 説明                     |
| :-------------- | :------------------------------ |
| `show()`  | Snackbar コンポーネントを表示し、`autoHide` が **true** に設定される場合に `displayTime` がかかった後に非表示にします。 |
| `hide()`  | Snackbar コンポーネントを非表示にします。 |

### 追加のリソース

<div class="divider--half"></div>

是非コミュニティに参加してください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)