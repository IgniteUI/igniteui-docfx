---
title: Toast コンポーネント
_description: Ignite UI for Angular Toast コンポーネントは、アプリケーションで非対話型メッセージをユーザーに表示できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Toast コンポーネント, Angular Toast コントロール
_language: ja
---

## Toast
<p class="highlight">Ignite UI for Angular Toast コンポーネントは、ユーザーが閉じられない非対話型の情報および報告メッセージを表示できます。通知はページの上側、中央、または下側に表示できます。</p>
<div class="divider"></div>

### Toast デモ

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toast-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>


### 使用方法

#### はじめに

Toast コンポーネントを初期化する前に、 `IgxToastModule` を **app.module.ts** ファイルにインポートします。

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
Toast コンポーネントを表示するには、ボタン クリックで [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) メソッドを呼び出します。Toast コンテンツを要素内に渡すことができます。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast >Notification displayed</igx-toast>
```

サンプルが正しく構成された場合、ボタン クリック時に通知を表示する Toast が表示されます。

Toast コンテンツを設定する別の方法は、メッセージをパラメーターとして [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) メソッドに直接渡すことです。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show('Notification displayed')">Show notification</button>
<igx-toast #toast ></igx-toast>
```

### 例

#### 非表示/自動的に隠す
開いた後は、[`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) に指定した時間期間後に非表示になります。デフォルト値は 4000 ミリ秒です。この動作はデフォルトで有効ですが、[`autoHide`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#autohide) を **false** に設定して変更できます。このように、Toast は非表示になりません。Toast の [`hide()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#hide) メソッドを使用して、コンポーネントを閉じることができます。 

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show Toast</button>
<button igxButton="raised" (click)="toast.hide()">Hide Toast</button>
<igx-toast #toast message="Notification displayed" [autoHide]="false"></igx-toast>
```

サンプルが正しく構成されると、[SHOW] ボタンをクリックしたときに Toast が表示されます。自動的に隠す機能が無効で、[HIDE] ボタンのクリックで Toast が非表示になります。
他の 2 つのコンポーネントでは、 [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) メソッドを介してさまざまなメッセージを渡し、コンテンツ プロジェクションを使用する方法を実際に見ることができます。

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-3-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-3" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toast-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

#### 表示期間
[`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) でミリ秒間隔に設定し、Toast コンポーネントが表示される期間を構成します。

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed" displayTime="1000"></igx-toast>
```

サンプルが正しく構成された場合、Toast が自動ですばやく非表示になります。

<div class="sample-container loading">
    <iframe id="toast-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
</div>

### 配置
[`position`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#position) を使用すると、Toast の表示位置を構成します。デフォルトで、ページの下に表示されます。以下のサンプルで、通知が上位置に表示されます。

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

<div class="sample-container loading" style="height: 200px">
    <iframe id="toast-sample-5-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-5" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

<div class="divider--half"></div>

### スタイル設定

Toast のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する index ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-toast-theme`]({environment:sassApiUrl}/index.html#function-igx-toast-theme) を拡張する新しいテーマを作成し、`$shadow`、 `$background`、`$text-color` と `$border-radius` パラメーターを受け取る方法です。 

```scss
$custom-toast-theme: igx-toast-theme(
    $background: #dedede,
    $text-color: #151515,
    $border-radius: 12px
);
```

#### CSS 変数の使用 

最後に Toast のカスタム テーマを設定します。 

```scss
@include igx-css-vars($custom-toast-theme);
```

#### ミックスインの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。 カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。 

```scss
:host {
    ::ng-deep {
        // Pass the custom toast theme to the `igx-toast` mixin
        @include igx-toast($custom-toast-theme);
    }
}
```

#### カラー パレットの使用

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を実現することができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$white-color: #dedede;
$black-color: #151515;

$light-toast-palette: igx-palette($primary: $white-color, $secondary: $black-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$custom-toast-theme: igx-toast-theme(
    $background: igx-color($light-toast-palette, "primary", 400),
    $text-color: igx-color($light-toast-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/palette.md)のトピックを参照してください。

#### スキーマの使用

[**スキーマ**](themes/schemas.md) の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`light-toast`]({environment:sassApiUrl}/index.html#variable-_light-toast)) の 1 つを拡張します。 

```scss
//  Extending the toast schema
$light-toast-schema: extend($_light-toast,
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
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-toast: $light-toast-schema
));

// Defining toast with the global light schema
$custom-toast-theme: igx-toast-theme(
  $palette: $light-toast-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

<div class="sample-container loading" style="height: 500px">
    <iframe id="toast-style-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-style" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toast-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)
* [IgxToastComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-toast-theme)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
