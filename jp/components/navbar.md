---
title: Navbar コンポーネント
_description: Ignite UI for Angular Navbar コントロールはアプリケーションでのスムーズな移動を可能にする UI コンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navbar コンポーネント, Angular Navbar コントロール
_language: ja
---

# Navbar
<p class="highlight">Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)、アプリケーション内の現在位置を示し、ブラウザーの [戻る] ボタンのように戻る機能を提供します。Navigation Bar の検索またはお気に入りなどのリンクによって、ユーザーはアプリケーションでナビゲーションをスムーズに実行できます。バーは、バーが含まれるコンテナ上に配置されます。</p>


## Angular Navbar 例
<div class="sample-container loading" style="height: 300px">
    <iframe id="nav-bar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/menus/navbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="nav-bar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

Navbar コンポーネントを初期化する前に、`IgxNavbarModule` を **app.module.ts** ファイルにインポートします。 

```typescript
// app.module.ts

...
import { IgxNavbarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

コンポーネントのテンプレートで、以下のコードを追加し、タイトルのみのベーシックな NavBar を作成します。

```html
<!--navbar.component.html-->

<igx-navbar title="Ignite UI for Angular">
</igx-navbar>
```

## 例

### メニュー ボタンの追加

メニュー ボタンを追加するには、`actionButtonIcon` によってアクション ボタンを表示し、以下のようにメニュー アイコンを使用します。 

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
</igx-navbar>
```

> [!NOTE]
> [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) は、デザインで Material フォントセットを使用します。

### アイコンの追加

アプリケーションのメニューを実装した後、検索、お気に入りなどのオプションを追加できます。要素を追加するには、[**IgxIcon**](icon.md) モジュールを **app.module.ts** ファイルにインポートします。
```typescript
// app.module.ts

...
import {
    IgxNavbarModule,
    IgxIconModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxIconModule],
})
export class AppModule {}
```

各オプションにアイコンを追加するためにテンプレートを更新します。

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>
</igx-navbar>
```

以下は結果です:
<div class="sample-container loading" style="height: 300px">
    <iframe id="nav-bar-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-1' class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="nav-bar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### カスタム アクション アイコンの追加

アプリのナビゲーションでナビゲーション バーの左端にあるデフォルト アイコンではなくカスタム アクション アイコンを使用したい場合、`igx-navbar-action` ディレクティブを使用してデフォルトの操作アイコンをコンテンツで置き換えます。`igx-navbar-action` ディレクティブを使用してデフォルトの操作アイコンをコンテンツで置き換えます。これには Font Awesome ホーム アイコンを使用します。

```css
/* navbar.component.css */

@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");

.customIcon {
    vertical-align: middle;
}
```

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>

    <igx-navbar-action>
        <igx-icon class="customIcon" fontSet="fa" name="fa-home"></igx-icon>
    </igx-navbar-action>
</igx-navbar>
```

> [!NOTE]
> [`igx-navbar-action`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) または [`igxNavbarAction`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) の場合、デフォルト [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) が使用されません。 

以下はカスタム アクション アイコンをした場合の navbar の外観です。

<div class="sample-container loading" style="height: 300px">
    <iframe id="nav-bar-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-2' class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="nav-bar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### ナビゲーション アイコを追加

戻るためのアイコンが付いたナビゲーション バーを作成する場合は、次の手順を実行します。まず、 `actionButtonIcon` プロパティを使用して、Material フォントセットから適切なアイコンを選択できます。次に、以前にアクセスしたページに戻るかどうかを確認し、その結果を [`isActionButtonVisible`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#isactionbuttonvisible) プロパティに渡します。最後の手順は、戻るためのメソッドを作成し、[`onAction`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#onaction) プロパティにフックすることです。 

```html
<!--navbar.component.html-->

<igx-navbar title="Ignite UI for Angular" 
    actionButtonIcon="arrow_back" 
    [isActionButtonVisible]="canGoBack()" 
    (onAction)="navigateBack()">
</igx-navbar>
```

```typescript
export class NavbarSample3Component {

  constructor(private _location: Location) { }

  public ngOnInit() {  }

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }
}
```

サンプルが正しく構成された場合、ブラウザーで以下が表示されます。 

<div class="sample-container loading" style="height: 300px">
    <iframe id="navbar-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-3' class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="navbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="navbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### カスタムのタイトルを追加する

Navbar のタイトルにカスタム コンテンツを提供する場合は、 `igx-navbar-title` または `igxNavbarTitle` ディレクティブを使用ます。これらは、`title` 入力プロパティによって提供されるデフォルトの navbar のタイトルを置き換えます。以下のサンプルには、画像付きのリンクを含むカスタム タイトルがあります。

```html
<!--navbar.component.html-->

<div class="sample-column">
    <igx-navbar actionButtonIcon="menu" [isActionButtonVisible]="true">
        <div igxNavbarTitle>
            <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
                <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
                     width="120px" height="50px" alt="" style="margin-top: 7px;">
            </a>
        </div>

        <igx-icon>search</igx-icon>
        <igx-icon>favorite</igx-icon>
        <igx-icon>more_vert</igx-icon>
    </igx-navbar>
</div>
```

> [!NOTE]
> [`igx-navbar-title`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) または [`igxNavbarTitle`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) の場合、デフォルト [`title`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#title) が使用されません。 

<div class="sample-container loading" style="height: 300px">
    <iframe id="navbar-custom-title-iframe" frameborder="0" seamless width="100%" height="100%" 
    data-src='{environment:demosBaseUrl}/menus/navbar-custom-title' class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="navbar-custom-title-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="navbar-custom-title-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## スタイル設定

ページネータのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-navbar-theme`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme) を拡張する新しいテーマを作成し、`$text-color`、`$background`、`$idle-icon-color`、`$hover-icon-color` パラメーターを受け取る方法です。

```scss
$custom-navbar-theme: igx-navbar-theme(
    $text-color: #151515,
    $background: #dedede,
    $idle-icon-color: #151515,
    $hover-icon-color: #8c8c8c
);
```

### CSS 変数の使用

最後にコンポーネントのテーマを渡します。

```scss
@include igx-css-vars($custom-navbar-theme);
```

### ミックスインの使用 

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。 

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom navbar theme to the `igx-navbar` mixin
        @include igx-navbar($custom-navbar-theme);
    }
}
```

### カラー パレットの使用

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を実現することができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$white-color: #dedede;
$black-color: #151515;
$light-navbar-palette: igx-palette($primary: $white-color, $secondary: $black-color);
```

`igx-color` を使用して、パレットから簡単に取得することができます。

```scss
$custom-navbar-theme: igx-navbar-theme(
    $text-color: igx-color($light-navbar-palette, "secondary", 400),
    $background: igx-color($light-navbar-palette, "primary", 400),
    $idle-icon-color: igx-color($light-navbar-palette, "secondary", 400),
    $hover-icon-color: #8c8c8c
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/palette.md)のトピックを参照してください。

### スキーマの使用

[**スキーマ**](themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`light-navbar`]({environment:sassApiUrl}/index.html#variable-_light-navbar)) の 1 つを拡張します。 

```scss
 // Extending the navbar schema
 $light-navbar-schema: extend($_light-navbar,
    (
        text-color: (
            igx-color: ("secondary", 400)
        ),
        background: (
            igx-color: ("primary", 400)
        ),
        idle-icon-color:(
            igx-color: ("secondary", 400)
        ),
        $hover-icon-color: #8c8c8c
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-navbar: $light-navbar-schema
));

// Defining navbar with the global light schema
$cutom-navbar-theme: igx-navbar-theme(
  $palette: $light-navbar-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<div class="sample-container loading" style="height: 150px">
    <iframe id="nav-bar-style-iframe" frameborder="0" seamless width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-style' class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="nav-bar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxNavbarActionDirective]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html)
* [IgxNavbarTitleDirective]({environment:angularApiUrl}/classes/igxnavbartitledirective.html)
* [IgxNavbarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-navbar-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
