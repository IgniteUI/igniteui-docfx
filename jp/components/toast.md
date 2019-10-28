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

### 使用方法

Toast コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxToastModule` をインポートします。

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
    <iframe id="toast-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-2" class="lazyload"></iframe>
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
    <iframe id="toast-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-3" class="lazyload"></iframe>
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
    <iframe id="toast-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
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
    <iframe id="toast-sample-5-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-5" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### スタイル設定

トーストのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントmixins が存在する index ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-toast-themegx-toast-them`]({environment:sassApiUrl}/index.html#function-igx-toast-theme) を拡張する新しいテーマを作成し、`$background`、`$text-color`、`$border-radius` パラメーターを受け取る方法です。

```scss
$dark-toast: igx-toast-theme(
    $background: #292826,
    $text-color: #FFCD0F,
    $border-radius: 12px
);
```

最後にコンポーネントのテーマを**含めます**。

```scss
@include igx-toast($dark-toast);
```

>[!NOTE]
>コンポーネントが[`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-toast($dark-toast);
    }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$dark-toast: igx-toast-theme(
    $background: igx-color($dark-palette, "primary", 400),
    $text-color: igx-color($dark-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/palette.md)のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法のことです。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`dark-toast`]({environment:sassApiUrl}/index.html#variable-_dark-toast)) の 1 つを拡張します。 

```scss
//  Extending the toast schema
$dark-toast-schema: extend($_dark-toast,
    (
        background: (
            igx-color: ("primary", 400)
        ),
        text-color: (
            igx-color: ("secondary", 400)
        ),
        border-radius: 12px
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-toast: $dark-toast-schema
));

// Defining toast with the global dark schema
$dark-toast: igx-toast-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

<div class="sample-container loading" style="height: 200px">
    <iframe id="toast-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-style" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API リファレンス

このトピックでは、[`IgxToastComponent`]({environment:angularApiUrl}/classes/igxtoastcomponent.html) を使用と構成方法を説明しました。API の詳細については以下のリンク先を参照してください。

* [`IgxToastComponent`]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

スタイル:

* [`IgxToastComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-toast-theme)

### その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
