---
title: Toast コンポーネント
_description: Ignite UI for Angular Toast コンポーネントは、アプリケーションで非対話型メッセージをユーザーに表示できます。
_keywords: Angular Toast コンポーネント, Angular Toast コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Toast (トースト) コンポーネントの概要
<p class="highlight">Ignite UI for Angular Toast コンポーネントは、自動非表示でユーザーが閉じられない非対話型の情報および報告メッセージを表示できます。通知はページの上側、中央、または下側に表示できます。</p>
<div class="divider"></div>

## Angular Toast の例


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-2" alt="Angular Toast の例">
</code-view>

<div class="divider--half"></div>


## Ignite UI for Angular Toast を使用した作業の開始

Ignite UI for Angular Toast コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxToastModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxToastModule } from 'igniteui-angular';
// import { IgxToastModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxToastModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxToastComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxToastComponent, IgxButtonDirective } from 'igniteui-angular';
// import { IgxToastComponent, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" (click)="toast.open()">Show notification</button>
    <igx-toast #toast>Notification displayed</igx-toast>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxToastComponent, IgxButtonDirective]
    /* or imports: [IgxTimePickerComponent, IgxButtonDirective] */
})
export class HomeComponent {
    public time: Date;
}
```

Ignite UI for Angular Toast モジュールまたはコンポーネントをインポートしたので、`igx-toast` コンポーネントの使用を開始できます。

## Angular Toast の使用

### Toast の表示
Toast コンポーネントを表示するには、ボタン クリックで [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) メソッドを呼び出します。Toast コンテンツを要素内に渡すことができます。

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show notification</button>
<igx-toast #toast>Notification displayed</igx-toast>
```

Toast コンテンツを設定する別の方法は、メッセージをパラメーターとして [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) メソッドに直接渡すことです。

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open('Notification displayed')">Show notification</button>
<igx-toast #toast></igx-toast>
```

[`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) メソッドを AppComponent ファイルで使用して、メッセージの値を管理することもできます。

```typescript
// app.component.ts
@ViewChild('toast', { read: IgxToastComponent }) public toast: IgxToastComponent;

public message: any;

public ngOnInit() {
    this.message = 'Display message';
}

public showMessage() {
    this.toast.open(this.message);
}
```

## 例

### 非表示/自動的に隠す
開いた後は、[`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displayTime) に指定した時間期間後に非表示になります。デフォルト値は 4000 ミリ秒です。この動作はデフォルトで有効ですが、[`autoHide`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#autoHide) を **false** に設定して変更できます。このように、Toast は非表示になりません。Toast の [`close()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#close) メソッドを使用して、コンポーネントを閉じることができます。 

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show Toast</button>
<button igxButton="contained" (click)="toast.close()">Hide Toast</button>
<igx-toast #toast [autoHide]="false">Notification displayed</igx-toast>
```

サンプルが正しく構成されると、[SHOW] ボタンをクリックしたときに Toast が表示されます。自動的に隠す機能が無効で、[HIDE] ボタンのクリックで Toast が非表示になります。
他の 2 つのコンポーネントでは、[`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) メソッドを介してさまざまなメッセージを渡し、コンテンツ プロジェクションを使用する方法を実際に見ることができます。

<code-view style="height: 450px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-3" >
</code-view>

### 表示期間
[`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displayTime) でミリ秒間隔に設定し、Toast コンポーネントが表示される期間を構成します。

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show notification</button>
<igx-toast #toast displayTime="1000">Notification displayed</igx-toast>
```

サンプルが正しく構成された場合、Toast が自動ですばやく非表示になります。

<div class="sample-container loading">
    <iframe id="toast-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
</div>

### 配置
[`positionSettings`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#positionSettings) を使用すると、Toast の表示位置を構成します。デフォルトで、ページの下に表示されます。以下のサンプルで、通知が上位置に表示されます。

```html
<!--sample.component.html-->
<div>
    <button igxButton="contained" (click)="open(toast)">Show notification on top</button>
    <igx-toast #toast>Notification displayed</igx-toast>
</div>
```

```typescript
// sample.component.ts
import { VerticalAlignment } from 'igniteui-angular';
// import { VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package
...
public open(toast) {
    toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    toast.open();
}
...
```

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-5" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

Toast のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する index ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`toast-theme`]({environment:sassApiUrl}/index.html#function-toast-theme) を拡張する新しいテーマを作成し、`$background`、`$text-color` と `$border-radius` パラメーターを受け取る方法です。 

```scss
$custom-toast-theme: toast-theme(
    $background: #dedede,
    $text-color: #151515,
    $border-radius: 12px
);
```

### CSS 変数の使用

最後に Toast のカスタム テーマを設定します。

```scss
@include css-vars($custom-toast-theme);
```

### ミックスインの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。 

```scss
:host {
    ::ng-deep {
        // Custom toast theme を `igx-toast` ミックスインに渡します
        @include toast($custom-toast-theme);
    }
}
```

### カラー パレットの使用

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を実現することができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$white-color: #dedede;
$black-color: #151515;

$light-toast-palette: palette($primary: $white-color, $secondary: $black-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$custom-toast-theme: toast-theme(
    $background: color($light-toast-palette, "primary", 400),
    $text-color: color($light-toast-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/palettes.md)のトピックを参照してください。

### スキーマの使用

[**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`light-toast`]({environment:sassApiUrl}/index.html#variable-_light-toast)) の 1 つを拡張します。 

```scss
//  Extending the toast schema
$light-toast-schema: extend($_light-toast,
    (
        background: (
           color: ("primary", 400)
        ),
        text-color: (
           color: ("secondary", 400)
        ),
        border-radius: 12px
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-toast: $light-toast-schema
));

// Defining toast with the global light schema
$custom-toast-theme: toast-theme(
  $palette: $light-toast-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

<code-view style="height: 600px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)
* [IgxToastComponent スタイル]({environment:sassApiUrl}/index.html#function-toast-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
