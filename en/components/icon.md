---
title: Angular Icon Component – Ignite UI for Angular | Infragistics
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

# Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font families so developers can use them interchangeably and add material icons to markup.</p>

## Angular Icon Example


<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-sample-1" alt="Angular Icon Example">
</code-view>


<div class="divider--half"></div>

## Usage

The Icon component is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxIconModule` inside your `AppModule`:

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular';
// import { IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```
## Examples

### Icon Color

Use `style.color` CSS property to change its default color:

```html
<igx-icon [style.color]="'#e41c77'">home</igx-icon>
```
<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-3" class="lazyload">
</iframe></div>


### Inactive Icon

If you want to disable an icon, you can use the [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) property:

```html
<igx-icon [active]="false">volume_off</igx-icon>
```
<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-4-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-4" class="lazyload">
</iframe></div>

### Content Projection

You can set icons with content projection:

```html
<igx-icon>bluetooth</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-5-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-5" class="lazyload">
</iframe></div>

### Icon Size

You can customize the icons using CSS. The icon's size can be changed through the `font-size` property. Additionally to center it, set equal values to the `width` and `height` properties:

```scss
.custom-size{
    font-size: 56px;
    width: 56px;
    height: 56px;
}
```
<div class="sample-container loading" style="height: 80px">
    <iframe id="icon-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-2" class="lazyload">
</iframe></div>

## SVG Icons

You can also use an SVG image as an icon. First, inject the [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency. In this example we will inject it in a component's constructor but you can use it wherever it is needed in your code. 

Use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addSvgIcon) method to import the SVG file in cache. When the SVG is cached, it can be used anywhere in the application. The icon name and file URL path are the method's mandatory parameters; family can be specified as well. After that, you can use the SVG files in the HTML markup. Alternatively, you can use the `addSvgIconFromText` method to import an SVG file, providing the SVG text content instead of the file URL.

* Have in mind that if there are two icons with the same name and the same family, the SVG icon will be displayed with priority.
* It is better not to provide image width and height in the SVG file.
* You may need additional polyfill scripts ("polyfills") for Internet Explorer.

```typescript
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon('contains', '/assets/images/svg/contains.svg', 'filter-icons');
}
```

```html
<igx-icon name="contains" family="filter-icons"></igx-icon>
```


<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/svg-icon-sample" >
</code-view>

## Material Symbols

Additionally, users can take advantage of the latest Material icons and their design variations included in the newly created [`Material Symbols Library`](https://fonts.google.com/icons). To start using Material Symbols, first you have to add the library to your application:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
```

Then we need to inject the [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency and make use of its `registerFamilyAlias` method so that Material Symbols can work with `igx-icon`: 

```ts
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // registers a 'material-symbols-outlined' class to be applied to all igx-icons with 'material-symbols' font-family
    this.iconService.registerFamilyAlias('material-symbols', 'material-symbols-outlined');
}
```

Now, we are ready to add the desired icon into our markup and customize it using adjustable font styles:

```html
<igx-icon family="material-symbols" class="custom-icon">diamond</igx-icon>
```

```scss
.custom-icon {
  font-variation-settings:
  'FILL' 0,
  'wght' 200,
  'GRAD' 0,
  'opsz' 40
}
```

<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/material-symbols" >
</code-view>

To learn more about Material Symbols styles please visit their [`official documentation`](https://fonts.google.com/icons).

## Server-side Rendering Note

> In case you have implemented server side rendering logic in your application using Angular Universal and have used the `IgxIconService` to register icons, this may cause the following exception:
<br/><br/>
`XMLHttpRequest is not defined. Could not fetch SVG from url.`
<br/><br/>
In order to avoid this, execute the listed steps:
<ol>
<li>
Install `xmlhttprequest`:

```cmd
npm i xmlhttprequest
```
</li>
<li>
On the top of your `server.ts` file, add: 

```typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```
</li>
</ol>

## Styling

To get started with styling the icons, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) and accepts the parameters, required to customize the icon as desired. 

```scss
$custom-icon-theme: icon-theme(
  $color: #1481b8,
  $disabled-color: #494949
);
```   

### Using CSS variables 

The last step is to pass the custom icon theme in our application: 

```scss
 @include css-vars($custom-icon-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include icon($custom-icon-theme);
    }
}
```

### Demo

<code-view style="height:75px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-styling" alt="Angular Icon Example">
</code-view>



## API References
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
