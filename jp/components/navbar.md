---
title: Navbar コンポーネント
_description: Ignite UI for Angular Navbar コントロールはアプリケーションでのスムーズな移動を可能にする UI コンポーネントです。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular NavBar component, Angular Navbar control, Angular Navigation Bar, Angular Navigation Bar component
_language: ja
---

# Angular Navbar Component Overview
The Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) is an application header component that informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.


## Angular Navbar の例

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar" alt="Angular Navbar の例">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Navbar

To get started with the Ignite UI for Angular Navbar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The first step is to import the `IgxNavbarModule` inside our **app.module.ts** file. 

```typescript
// app.module.ts
import { IgxNavbarModule } from 'igniteui-angular';
// import { IgxNavbarModule } from '@infragistics/igniteui-angular'; for licensed package
@@ import { IgxNavbarModule } from 'igniteui-angular';
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxNavbarComponent` as a standalone dependency, or use the [`IGX_NAVBAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navbar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts
import { IGX_NAVBAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_NAVBAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-home',
    template: '<igx-navbar title="Ignite UI for Angular"></igx-navbar>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_NAVBAR_DIRECTIVES]
    /* or imports: [IgxNavbarComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Navbar module or directives imported, you can start using the `igx-navbar` component.

## Using the Angular Navbar

Then in the template of our component we can add the following code to show a basic navbar with a title:

```html
<!--navbar.component.html-->
<igx-navbar title="Ignite UI for Angular">
</igx-navbar>
```

### メニュー ボタンの追加

メニュー ボタンを追加するには、`actionButtonIcon` によってアクション ボタンを表示し、以下のようにメニュー アイコンを使用します。 

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
</igx-navbar>
```

> [!NOTE]
> [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionButtonIcon) は、デザインで Material フォントセットを使用します。

### アイコン ボタンの追加

検索、お気に入りなどのオプションを追加するには、[**IgxButton**](button.md) と [**IgxIcon**](icon.md) モジュールを **app.module.ts** ファイルにインポートします。
```typescript
// app.module.ts

...
import {
    IgxNavbarModule,
    IgxButtonModule,
    IgxIconModule
} from 'igniteui-angular';
// import { 
//    IgxNavbarModule,
//    IgxButtonModule,
//    IgxIconModule
// } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxIconModule],
})
export class AppModule {}
```

各オプションにアイコン ボタンを追加するためにテンプレートを更新します。

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App">
    <button igxButton="icon">
        <igx-icon>search</igx-icon>
    </button>
    <button igxButton="icon">
        <igx-icon>favorite</igx-icon>
    </button>
    <button igxButton="icon">
        <igx-icon>more_vert</igx-icon>
    </button>
</igx-navbar>
```

以下は結果です:

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-1" >
</code-view>

<div class="divider--half"></div>

### カスタム動作の追加

アプリのナビゲーションでナビゲーション バーの左端にあるデフォルト アイコンではなくカスタム テンプレートを使用したい場合、`igx-navbar-action` ディレクティブを使用して提供したコンテンツをレンダリングします。これには Font Awesome ホーム アイコンのボタンを使用します。

```css
/* navbar.component.css */

@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");
```

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App">
    <igx-navbar-action>
        <button igxButton="icon">
            <igx-icon family="fa" name="fa-home"></igx-icon>
        </button>
    </igx-navbar-action>
        
    <button igxButton="icon">
        <igx-icon>search</igx-icon>
    </button>
    <button igxButton="icon">
        <igx-icon>favorite</igx-icon>
    </button>
    <button igxButton="icon">
        <igx-icon>more_vert</igx-icon>
    </button>
</igx-navbar>
```

以下はカスタム動作ボタン アイコンをした場合の navbar の外観です。


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-2" >
</code-view>

<div class="divider--half"></div>

### ナビゲーション アイコを追加

戻るためのアイコンが付いたナビゲーション バーを作成する場合は、次の手順を実行します。まず、`actionButtonIcon` プロパティを使用して、Material フォントセットから適切なアイコンを選択できます。次に、以前にアクセスしたページに戻るかどうかを確認し、その結果を [`isActionButtonVisible`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#isActionButtonVisible) プロパティに渡します。最後の手順は、戻るためのメソッドを作成し、[`action`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#action) プロパティにフックすることです。 

```html
<!--navbar.component.html-->

<igx-navbar title="Ignite UI for Angular"
    actionButtonIcon="arrow_back"
    [isActionButtonVisible]="canGoBack()"
    (action)="navigateBack()">
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


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-3" >
</code-view>

> [!NOTE]
> [`igx-navbar-action`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) または [`igxNavbarAction`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) が指定される場合、デフォルトの [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) は使用されません。

<div class="divider--half"></div>

### カスタムのタイトルを追加する

Navbar のタイトルにカスタム コンテンツを提供する場合は、`igx-navbar-title` または `igxNavbarTitle` ディレクティブを使用ます。これらは、`title` 入力プロパティによって提供されるデフォルトの navbar のタイトルを置き換えます。以下のサンプルには、画像付きのリンクを含むカスタム タイトルがあります。

```html
<!--navbar.component.html-->

<div class="sample-column">
    <igx-navbar>
        <igx-navbar-action>
            <button igxButton="icon">
                <igx-icon>menu</igx-icon>
            </button>
        </igx-navbar-action>

        <div igxNavbarTitle>
            <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
                <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
                     width="120px" height="50px" alt style="margin-top: 7px;">
            </a>
        </div>

        <button igxButton="icon">
            <igx-icon>search</igx-icon>
        </button>
        <button igxButton="icon">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxButton="icon">
            <igx-icon>more_vert</igx-icon>
        </button>
    </igx-navbar>
</div>
```

> [!NOTE]
> [`igx-navbar-title`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) または [`igxNavbarTitle`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) の場合、デフォルト [`title`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#title) が使用されません。 


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-custom-title" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

ページネーターのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`navbar-theme`]({environment:sassApiUrl}/index.html#function-navbar-theme) を拡張する新しいテーマを作成し、`$text-color`、`$background`、`$idle-icon-color`、`$hover-icon-color` パラメーターを受け取る方法です。

```scss
$custom-navbar-theme: navbar-theme(
    $text-color: #151515,
    $background: #dedede,
    $idle-icon-color: #151515,
    $hover-icon-color: #8c8c8c
);
```

### CSS 変数の使用

最後にコンポーネントのテーマを渡します。

```scss
@include css-vars($custom-navbar-theme);
```

### ミックスインの使用 

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。 

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Custom navbar theme を `igx-navbar` ミックスインに渡します
        @include navbar($custom-navbar-theme);
    }
}
```

### カラー パレットの使用

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を実現することができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$white-color: #dedede;
$black-color: #151515;
$light-navbar-palette: palette($primary: $white-color, $secondary: $black-color);
```

`igx-color` を使用して、パレットから簡単に取得することができます。

```scss
$custom-navbar-theme: navbar-theme(
    $text-color: color($light-navbar-palette, "secondary", 400),
    $background: color($light-navbar-palette, "primary", 400),
    $idle-icon-color: color($light-navbar-palette, "secondary", 400),
    $hover-icon-color: #8c8c8c
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

[**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`light-navbar`]({environment:sassApiUrl}/index.html#variable-_light-navbar)) の 1 つを拡張します。 

```scss
 // Extending the navbar schema
 $light-navbar-schema: extend($_light-navbar,
    (
        text-color: (
           color: ("secondary", 400)
        ),
        background: (
           color: ("primary", 400)
        ),
        idle-icon-color:(
           color: ("secondary", 400)
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
$cutom-navbar-theme: navbar-theme(
  $palette: $light-navbar-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ


<code-view style="height: 150px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxNavbarActionDirective]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html)
* [IgxNavbarTitleDirective]({environment:angularApiUrl}/classes/igxnavbartitledirective.html)
* [IgxNavbarComponent スタイル]({environment:sassApiUrl}/index.html#function-navbar-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/index.html#function-icon-theme)

## テーマの依存関係
* [IgxIconComponent テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxButtonComponent テーマ]({environment:sassApiUrl}/index.html#function-button-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
