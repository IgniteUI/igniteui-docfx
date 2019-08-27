---
title: Icon コンポーネント
_description: Ignite UI for Angular Icon コンポーネントを使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール
_language: ja
---

## Icon

<p class="highlight">Ignite UI for Angular Icon コンポーネントはアイコンおよびフォント セットを統合するため、交互の使用やマテリアル アイコンをマークアップに追加できます。コンポーネントはカスタム色をサポートします。アイコンを非アクティブに設定できます。</p>
<div class="divider"></div>

### Icon デモ

<div class="sample-container loading" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/icon-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 依存関係

Icon コンポーネントが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` への `IgxIconModule` のインポートのみが必要になります。

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

```html
<igx-icon color="magenta">home</igx-icon>
```

### コード例

[`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) を使用して [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) ホーム アイコンをマゼンタ [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor) に設定します。

```html
<igx-icon color="magenta" isActive="true">home</igx-icon>
```

`inactive` アイコンを設定します。

```html
<igx-icon [isActive]="false">volume_off</igx-icon>
```

CSS でアイコン サイズを設定するには、カスタム CSS を作成して名前を *custom-size* とします。アイコン サイズは **font-size** プロパティで変更でき、更に中央揃えにするには、**width** と **height** を同じ値にします。
```html
<igx-icon color="#0375be" class="custom-size">phone_iphone</igx-icon>
```
```css
<!-- icon-sample2.component.scss -->

.custom-size{
    font-size: 56px;
    width: 56px;
    height: 56px;
}
```
<div class="sample-container loading" style="height: 80px; width: 300px">
    <iframe id="icon-sample2-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample2" class="lazyload">
</iframe></div>

### SVG Icons

はじめに [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存を注入します。この例では、 [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存がコンポーネントのコンストラクタに注入されますが、コードで必要な場所に使用できます。

[`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) メソッドを SVG ファイルをキャッシュにインポートするために使用します。SVG をキャッシュした場合、アプリケーションのどこでも使用できるようになります。アイコン名とファイル URL がメソッドに必須のパラメーターです。フォントセットも指定できます。HTML マークアップの SVG ファイルを使用できます。または `addSvgIconFromText` メソッドを使用して SVG ファイルをインポートして SVC テキスト コンテンツを使用できます。

* 同じ名前のアイコンが 2 つある場合に同じフォント セット SVG アイコンが優先順位に従って表示されます。
* SVG ファイルの画像の幅と高さは指定しないことをお勧めします。
* 追加のポリフィル スクリプトがインターネット　エクスプローラーで必要な場合があります。

```typescript
// svg-icon-sample.ts

constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon("contains", "/assets/images/svg/contains.svg", "filter-icons");
}
```

```html
<!-- svg-icon-sample.html -->

<igx-icon name="contains" fontSet="filter-icons"></igx-icon>
```

<div class="sample-container loading" style="height: 50px">
    <iframe id="svg-icon-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/svg-icon-sample" class="lazyload">
</iframe></div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

### サーバーサイド レンダリング時の注意

> Angular Universal を使用してアプリケーションにサーバー側のレンダリング ロジックを実装し、`IgxIconService` を使用してアイコンを登録した場合は、以下の例外が発生することがあります。
<br/>
`XMLHttpRequest is not defined. Could not fetch SVG from url.` (XMLHttpRequest が定義されていません。url から SVG をフェッチできませんでした。)　
<br/>
これを避けるためには、以下の順序に従って下さい。
<ol>
<li>
`xmlhttprequest` のインストール:
```cmd
npm i xmlhttprequest
```
</li>
<li>
`Server.ts` ファイル以外に追加するファイル:  
``` typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```
</li>
</ol>

### Styling
The IgxIcon allows custom stylization through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The icon's [theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme) exposes a property that allows customization of the color of the component.        

#### Importing global theme
To begin styling of the predefined icon layout, you need to import the `index` file, where all styling functions and mixins are located.  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### Defining custom theme
You can easily create a new theme, that extends the [`igx-icon-theme`]({environment:sassApiUrl}/index.html#function-igx-icon-theme) and accepts the parameters, required to customize the icon as desired.   
   

```scss
$custom-theme: igx-icon-theme(
  $color: rgb(223, 181, 13),
  $disabled-color: #494949
);
```   

#### Defining a custom color palette
In the approach, that was described above, the color values were hardcoded. Instead, a greater flexibility could be achieved, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

```scss
$black-color: #494949;
$yellow-color: #ffcd0f;

$custom-palette: igx-palette(
    $primary: $black-color,
    $secondary: $yellow-color
);
```   

After the custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors.   

```scss
$custom-theme: igx-icon-theme(
    $color: igx-color($custom-palette, "secondary", 600),
    $disabled-color: igx-color($custom-palette, "primary", 500)
);
```

#### Defining custom schemas
You could go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `_dark_icon`.   

```scss
$custom-icon-schema: extend($_dark-icon, (
    color: (igx-color("secondary", 500)),
    disabled-color: (igx-color("primary", 500))
));
```   
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   

```scss
$my-custom-schema: extend($dark-schema, (
    igx-icon: $custom-icon-schema
));

$custom-theme: igx-icon-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### Applying the custom theme
After providing the function with the required parameters you have to **include** the component mixins.  
```scss
@include igx-icon($custom-theme);
```

 >[!NOTE]
  > If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. Note that the Emulated value of the ViewEncapsulation is the default one.  

```scss
:host {
    ::ng-deep {
        @include igx-icon($custom-theme);
    }
}
```    

#### Demo
<div class="sample-container loading" style="height:320px">
    <iframe id="icon-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/icon-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### 6.2.0 の重大な変更
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html) `iconName` プロパティは非推奨です。「マテリアル」アイコンのアイコン名を設定するには、開始タグと終了タグの間にアイコンの名前を配置します。'Font Awesome' と SVG のアイコンには `name` プロパティを使用します。

### API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

