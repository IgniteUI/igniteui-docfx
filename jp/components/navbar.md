---
title: Navbar コンポーネント
_description: Ignite UI for Angular Navbar コントロールはアプリケーションでのスムーズな移動を可能にする UI コンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Navbar コンポーネント, Angular Navbar コントロール, Angular Navigation Bar, Angular Navigation Bar コンポーネント
_language: ja
---

# Angular Navbar (ナビゲーション バー) コンポーネントの概要

Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) は、アプリケーション内の現在位置をユーザーに通知し、ブラウザーの [戻る] ボタンのように戻る機能を提供するアプリケーション ヘッダー コンポーネントです。Navigation Bar の検索またはお気に入りなどのリンクによって、ユーザーはアプリケーションでナビゲーションをスムーズに実行できます。バーは、バーが含まれるコンテナ上に配置されます。

## Angular Navbar の例

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar/" alt="Angular Navbar の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Navbar を使用した作業の開始

Ignite UI for Angular Navbar コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

 はじめに、**app.module.ts** ファイルに `IgxNavbarModule` をインポートします。 

```typescript
// app.module.ts

import { IgxNavbarModule } from 'igniteui-angular';
// import { IgxNavbarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxNavbarComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_NAVBAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navbar/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_NAVBAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_NAVBAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-navbar title="Ignite UI for Angular"></igx-navbar>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_NAVBAR_DIRECTIVES],
  /* or imports: [IgxNavbarComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Navbar モジュールまたはディレクティブをインポートしたので、`igx-navbar` コンポーネントの使用を開始できます。

## Angular Navbar の使用

コンポーネントのテンプレートで、以下のコードを追加し、タイトルの基本的な NavBar を作成します。

```html
<!--navbar.component.html-->

<igx-navbar title="Ignite UI for Angular"> </igx-navbar>
```

### メニュー ボタンの追加

メニュー ボタンを追加するには、`actionButtonIcon` によってアクション ボタンを表示し、以下のようにメニュー アイコンを使用します。 

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true"></igx-navbar>
```

> [!NOTE]
> [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionButtonIcon) は、デザインで Material フォントセットを使用します。

### アイコン ボタンの追加

検索、お気に入りなどのオプションを追加するには、[**IgxIconButton**](icon-button.md) と [**IgxIcon**](icon.md) モジュールを **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxNavbarModule, IgxIconButtonDirective, IgxIconModule } from 'igniteui-angular';
// import { IgxNavbarModule, IgxButtonModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxIconButtonDirective, IgxIconModule],
})
export class AppModule {}
```

各オプションにアイコン ボタンを追加するためにテンプレートを更新します。

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App">
  <button igxIconButton="flat">
    <igx-icon>search</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>favorite</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-navbar>
```

以下は結果です:

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-1/" >
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
    <button igxIconButton="flat">
      <igx-icon family="fa" name="fa-home"></igx-icon>
    </button>
  </igx-navbar-action>

  <button igxIconButton="flat">
    <igx-icon>search</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>favorite</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-navbar>
```

以下はカスタム動作ボタン アイコンをした場合の navbar の外観です。

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-2/" >
</code-view>

<div class="divider--half"></div>

### ナビゲーション アイコを追加

戻るためのアイコンが付いたナビゲーション バーを作成する場合は、次の手順を実行します。まず、`actionButtonIcon` プロパティを使用して、Material フォントセットから適切なアイコンを選択できます。次に、以前にアクセスしたページに戻るかどうかを確認し、その結果を [`isActionButtonVisible`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#isActionButtonVisible) プロパティに渡します。最後の手順は、戻るためのメソッドを作成し、[`action`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#action) プロパティにフックすることです。 

```html
<!--navbar.component.html-->

<igx-navbar
  title="Ignite UI for Angular"
  actionButtonIcon="arrow_back"
  [isActionButtonVisible]="canGoBack()"
  (action)="navigateBack()"
>
</igx-navbar>
```

```typescript
export class NavbarSample3Component {
  constructor(private _location: Location) {}

  public ngOnInit() {}

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
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-3/" >
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
      <button igxIconButton="flat">
        <igx-icon>menu</igx-icon>
      </button>
    </igx-navbar-action>

    <div igxNavbarTitle>
      <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
        <img
          src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
          width="120px"
          height="50px"
          alt
          style="margin-top: 7px;"
        />
      </a>
    </div>

    <button igxIconButton="flat">
      <igx-icon>search</igx-icon>
    </button>
    <button igxIconButton="flat">
      <igx-icon>favorite</igx-icon>
    </button>
    <button igxIconButton="flat">
      <igx-icon>more_vert</igx-icon>
    </button>
  </igx-navbar>
</div>
```

> [!NOTE]
> [`igx-navbar-title`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) または [`igxNavbarTitle`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) の場合、デフォルト [`title`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#title) が使用されません。

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-custom-title/" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

### Navbar テーマのプロパティ マップ

プライマリ プロパティを変更すると、関連するすべての依存プロパティが自動的に更新され、変更が反映されます。

<table class="collapsible-table">
    <thead>
      <tr>
        <th>プライマリ プロパティ</th>
        <th>依存プロパティ</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody class="group">
      <tr class="primary">
        <td><details><summary><strong>$background</strong></summary></details></td>
        <td>$text-color</td>
        <td>ナビゲーション バーのテキストの色</td>
      </tr>
      <tr class="dependent"><td></td><td>$idle-icon-color</td><td>ナビゲーション バーのアイドル アイコンの色</td></tr>
      <tr class="dependent"><td></td><td>$hover-icon-color</td><td>ホバー時のナビゲーション バーのアイコンの色</td></tr>
      <tr class="dependent"><td></td><td>$border-color (indigo バリエーションのみの変更)</td><td>ナビゲーション バーの境界線の色</td></tr>
    </tbody>
    <tbody class="group">
      <tr class="primary">
        <td><strong>$idle-icon-color</strong></td>
        <td>$hover-icon-color</td>
        <td>ホバー時のナビゲーション バーのアイコンの色</td>
      </tr>
    </tbody>
</table>

Navbar のスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`navbar-theme`]({environment:sassApiUrl}/themes#function-navbar-theme) を拡張し、`$background` および `$idle-icon-color` パラメータのみを提供する新しいテーマを作成します。テーマは、さまざまなインタラクション状態に必要なすべての背景の色と前景の色を自動的に計算します。より細かい制御を行いたい場合は、個別のプロパティをオーバーライドすることも可能です。

```scss
$custom-navbar-theme: navbar-theme(
  $background: #011627,
  $idle-icon-color: #ecaa53,
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックをご覧ください。

最後に、新しく作成されたテーマを `css-vars` ミックスインに渡します。

```scss
@include css-vars($custom-navbar-theme);
```

### デモ

<code-view style="height: 150px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-style/" >
</code-view>

<div class="divider--half"></div>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して navbar をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-navbar`、`dark-navbar`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[navbar-theme]({environment:sassApiUrl}/themes#function-navbar-theme) で確認できます。構文は次のとおりです:

```html
<igx-navbar class="!light-navbar ![--background:#7B9E89] ![--text-color:#121E17]" title="Sample App">
  ...
</igx-navbar>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、navbar は次のようになります:

<div class="sample-container loading" style="height:120px">
    <iframe id="navbar-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/menus/navbar-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API リファレンス

<div class="divider--half"></div>

* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxNavbarActionDirective]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html)
* [IgxNavbarTitleDirective]({environment:angularApiUrl}/classes/igxnavbartitledirective.html)
* [IgxNavbarComponent スタイル]({environment:sassApiUrl}/themes#function-navbar-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/themes#function-icon-theme)

## テーマの依存関係

* [IgxIconComponent テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxButtonComponent テーマ]({environment:sassApiUrl}/themes#function-button-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
