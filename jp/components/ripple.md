---
title: Ripple ディレクティブ
_description: Ignite UI for Angular Ripple ディレクティブは、リップル アニメーション エフェクトが適用されている領域を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Ripple コンポーネント, Angular Ripple コントロール
_language: ja
---

## Ripple

<p class="highlight">Ignite UI for Angular Ripple ディレクティブを使用すると、入力の受け取りが構成されていない領域にクリックまたはタッチした場合にリップル アニメーション エフェクトのフィードバックを作成できます。タッチまたはマウス クリックの応答としてアニメーションを再生する相対的な位置を持つ要素にこのディレクティブを設定します。</p>
<div class="divider"></div>

### Ripple デモ

<div class="sample-container loading" style="height: 558px">
    <iframe id="ripple-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/interactions/ripple-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ripple-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Ripple ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxRippleModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```
> [!WARNING]
> [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) は Web Animation API を使用し、[サポートされるブラウザー](http://caniuse.com/#feat=web-animation)でネイティブに実行します。その他のブラウザーでは `web-animations.min.js` [ポリフィル](https://github.com/web-animations/web-animations-js)を使用します。

### 使用方法
#### リップル エフェクトの追加

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) を使用して指定した要素にリップル効果を追加します。デフォルト色のリップル エフェクトを追加します。

```html
<button igxButton="raised" igxRipple>Click Me</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" class="lazyload">
</iframe></div>

#### カスタム色

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) でリップル色を設定できます。このサンプルでは、リップルに白色を設定します。

```html
<button igxButton="raised" igxRipple="white">White</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" class="lazyload">
</iframe></div>

#### 中央揃えのリップル エフェクト

リップル エフェクトはクリック イベントの位置から開始します。この動作で要素の中点を原点に変更するには、[`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) を使用できます。

```html
<button igxButton="raised" igxRipple="white" igxRippleCentered="true">Centered</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" class="lazyload">
</iframe></div>

#### リップルの対象要素

[`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) を使用して親要素内の特定の要素にリップル エフェクトをアタッチします。

```html
<div class="parent-div" igxRipple="blue" igxRippleTarget=".child-div" igxRippleCentered="true">
  Parent Div
  <div class="child-div">
    Child Div
  </div>
</div>
```

親 div または子 div をクリックすると、リップル エフェクトは子 div 内のみに表示されます。子 div の要素を **relative** に設定する必要があります。

<div class="sample-container loading" style="height: 168px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" class="lazyload">
</iframe></div>

#### リップルの期間

[`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) を使用するとリップル アニメーションの期間を変更できます。デフォルト値は 600 ミリ秒です。このサンプルで [`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) は 2000 ミリ秒に設定されます。

```html
<div class="ripple-sample dark" [igxRippleDuration]=2000 igxRipple="white">
  <p style="margin-bottom:0">Long Ripple Animation</p>
</div>
```

<div class="sample-container loading" style="height: 148px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" class="lazyload">
</iframe></div>

> [!NOTE]
> リップル アニメーションで相対的な位置を持つ要素を使用します。また、[`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) を使用して子要素を対象にすることもできます。

### Styling
The igxRipple allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The ripple's [theme]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) exposes a property that allows customization of the color of the effect.        

#### Importing global theme
To begin styling of the predefined ripple color, you need to import the `index` file, where all styling functions and mixins are located.  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### Defining custom theme
You can easily create a new theme, that extends the [`igx-ripple-theme`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) and accepts the parameters, required to customize the ripple as desired.

```scss
$custom-theme: igx-ripple-theme(
  $color: #FFCD0F
);
```   

#### Defining a custom color palette
In the approach, that was described above, the color value was hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
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
$custom-theme: igx-ripple-theme(
    $color: igx-color($custom-palette, "secondary", 500)
);
```

#### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_dark_ripple`.   

```scss
$custom-ripple-schema: extend($_dark-ripple, (
    color: (igx-color("secondary", 500))
));
```   
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   

```scss
$my-custom-schema: extend($dark-schema, (
    igx-ripple: $custom-ripple-schema
));

$custom-theme: igx-ripple-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include igx-ripple($custom-theme);
```

#### Scoped component theme

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-ripple($custom-theme);
    }
}
```    

>[!NOTE]
  > A color that is set using the `igxRiple` directive, would take precedence from the one, set within a custom theme.  

#### Demo
<div class="sample-container loading" style="height:700px">
    <iframe id="ripple-styling-sample-iframe" src='{environment:demosBaseUrl}/interactions/ripple-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple Styles]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)