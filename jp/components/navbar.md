---
title: Navbar コンポーネント
_description: Ignite UI for Angular Navbar コントロールはアプリケーションでのスムーズな移動を可能にする UI コンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navbar コンポーネント, Angular Navbar コントロール
_language: ja
---

## Navbar

<p class="highlight">Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)、アプリケーション内の現在位置を示し、ブラウザーの [戻る] ボタンのように戻る機能を提供します。Navigation Bar の検索またはお気に入りなどのリンクによって、ユーザーはアプリケーションでナビゲーションをスムーズに実行できます。バーは、バーが含まれるコンテナ上に配置されます。</p>
<div class="divider"></div>

### Navbar デモ

<div class="sample-container loading" style="height: 530px">
    <iframe id="nav-bar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/menus/navbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular NavBar コンポーネントを初期化する前に `IgxNavbarModule` を **app.module.ts** ファイルにインポートします。

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

<igx-navbar title="Sample App">
</igx-navbar>
```

#### メニュー ボタン
開いたアプリケーションを確認できます。メニューで使用できる機能について説明します。 以下のコードは、アクション ボタンを表示し、ボタンにメニュー アイコンを使用します。

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
</igx-navbar>
```

> [!NOTE]
> [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) は、デザインで Material フォントセットを使用します。

#### アイコンの追加

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

以下は結果です。

<div class="sample-container loading" style="height: 330px">
    <iframe id="nav-bar-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-1' class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム アクション アイコン

アプリのナビゲーションで navbar の左端にあるデフォルト アイコンではなくカスタム アクション アイコンを使用したい場合、
[`igx-action-icon`]({environment:angularApiUrl}/classes/igxactionicondirective.html) ディレクティブを使用してデフォルトの操作アイコンをコンテンツで置き換えます。これには Font Awesome ホーム アイコンを使用します。

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

    <igx-action-icon>
        <igx-icon class="customIcon" fontSet="fa" name="fa-home"></igx-icon>
    </igx-action-icon>
</igx-navbar>
```

以下はカスタム アクション アイコンをした場合の navbar の外観です。

<div class="sample-container loading" style="height: 330px">
    <iframe id="nav-bar-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-2' class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> [`igx-action-icon`]({environment:angularApiUrl}/classes/igxactionicondirective.html) の場合、デフォルト [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) が使用されます。

### Styling

To get started with styling the navbar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-navbar-theme`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme) and accepts the `$text-color`, `$background`, `$idle-icon-color` and the `$hover-icon-color` parameters.

```scss
$dark-navbar: igx-navbar-theme(
    $text-color: #FFCD0F,
    $background: #292826,
    $idle-icon-color: #FFCD0F,
    $hover-icon-color: gray
);
```

The last step is to **include** the newly created theme.

```scss
@include igx-navbar($dark-navbar);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-navbar($dark-navbar);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$dark-navbar: igx-navbar-theme(
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background: igx-color($dark-palette, "primary", 400),
    $idle-icon-color: igx-color($dark-palette, "secondary", 400),
    $hover-icon-color: gray
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-navbar`]({environment:sassApiUrl}/index.html#variable-_dark-navbar) schema:

```scss
 // Extending the dark navbar schema.
 $dark-navbar-schema: extend($_dark-navbar,
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
        hover-icon-color: gray
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-navbar: $dark-navbar-schema
));

// Defining navbar-theme with the global dark schema
$dark-navbar: igx-navbar-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 150px">
    <iframe id="nav-bar-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-style' class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API リファレンス

このトピックでは NavBar コンポーネントの使用方法を紹介しました。以下は、使用した API のリンクです。

* [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [`IgxActionIconDirective`]({environment:angularApiUrl}/classes/igxactionicondirective.html)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)

スタイル:

* [`IgxNavbarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
