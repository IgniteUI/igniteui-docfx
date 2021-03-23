---
title: Icon Component
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
_language: kr
---

##Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font sets so developers can use them interchangeably and add material icons to markup. The component supports custom colors. Icons can be set as inactive.</p>
<div class="divider"></div>

### Icon Demo

<div class="sample-container loading" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/icon-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

The Icon component is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxIconModule` inside your `AppModule`:

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
### Usage

Using [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) to set an [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) home icon with magenta [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor).

```html
<igx-icon color="magenta">home</igx-icon>
```

Setting an inactive icon.
```html
<igx-icon [isActive]="false">volume_off</igx-icon>
```

Setting icon with content projection.

```html
<igx-icon color="red">bluetooth</igx-icon>
```

You can set the icon's size through CSS. Create a custom CSS class and name it *custom-size*. The icon's size is changed by the **font-size** property. Additionally to center it, set the **width** and the **height** to the same value.
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

You can also use a SVG image as an icon. First, inject [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency. In this example [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency is injected in a component's constructor but you can use it wherever it is needed in your code. 

Use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) method to import the SVG file in cache. When the SVG is cached, it can be used anywhere in the application. Icon name and file URL path are method's mandatory parameters; you can specify font-set as well. After that, you can use the SVG files in the HTML markup. Alternatively, you can use the `addSvgIconFromText` method to import the SVG file providing the SVG text content instead of the file URL.

* Have in mind that if there are two icons with the same name and the same font-set - SVG icon will be displayed with priority.
* It is better not to provide image width and height in the SVG file.
* You may need additional polyfill scripts ("polyfills") for Internet Explorer.

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz 에서보기
    </button>
</div>

### Styling
The igxIcon allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The icon's [theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme) exposes a property that allows customization of the color of the component.

#### Importing global theme
To begin styling of the predefined icon layout, you need to import the `index` file, where all styling functions and mixins are located.  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### Defining custom theme
You can easily create a new theme, that extends the [`igx-icon-theme`]({environment:sassApiUrl}/index.html#function-igx-icon-theme) and accepts the parameters, required to customize the icon as desired.   
   

```scss
$custom-theme: igx-icon-theme(
  $color: #ffcd0f,
  $disabled-color: #494949
);
```   

#### Defining a custom color palette
In the approach, that was described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
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
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_dark_icon`.   

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
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include igx-icon($custom-theme);
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
        @include igx-icon($custom-theme);
    }
}
```    

#### Demo
<div class="sample-container loading" style="height:320px">
    <iframe id="icon-styling-sample-iframe" data-src='{environment:demosBaseUrl}/data-display/icon-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Breaking Changes in 6.2.0

* The [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html) `iconName` property is deprecated. To set the icon name for 'material' icons, place the name of the icon between the opening and closing tags. For 'Font Awesome' and SVG icons, use the `name` property.

### API References
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
