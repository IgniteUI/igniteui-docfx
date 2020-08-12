---
title: Icon Component
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

## Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font sets so developers can use them interchangeably and add material icons to markup.</p>

### Demo

<div class="sample-container loading" style="height: 75px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/icon-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

### Usage

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
### Examples

#### Icon Color

Use the [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor) property of the `igx-icon` component to change its default color:

```html
<igx-icon color="#e41c77">home</igx-icon>
```
<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-3" class="lazyload">
</iframe></div>

#### Inactive Icon

If you want to disable an icon, you can use the [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) property:

```html
<igx-icon [isActive]="false">volume_off</igx-icon>
```
<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-4-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-4" class="lazyload">
</iframe></div>

#### Content Projection

You can set icons with content projection:

```html
<igx-icon>bluetooth</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-5-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-5" class="lazyload">
</iframe></div>

#### Icon Size

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

### SVG Icons

You can also use an SVG image as an icon. First, inject the [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency. In this example we will inject it in a component's constructor but you can use it wherever it is needed in your code. 

Use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) method to import the SVG file in cache. When the SVG is cached, it can be used anywhere in the application. The icon name and file URL path are the method's mandatory parameters; font-set can be specified as well. After that, you can use the SVG files in the HTML markup. Alternatively, you can use the `addSvgIconFromText` method to import an SVG file, providing the SVG text content instead of the file URL.

* Have in mind that if there are two icons with the same name and the same font-set, the SVG icon will be displayed with priority.
* It is better not to provide image width and height in the SVG file.
* You may need additional polyfill scripts ("polyfills") for Internet Explorer.

```typescript
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon("contains", "/assets/images/svg/contains.svg", "filter-icons");
}
```

```html
<igx-icon name="contains" fontSet="filter-icons"></igx-icon>
```

<div class="sample-container loading" style="height: 70px">
    <iframe id="svg-icon-sample-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/svg-icon-sample" class="lazyload">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
</div>

### Server-side Rendering Note

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
``` typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```
</li>
</ol>

### Styling

To get started with styling the icons, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-icon-theme`]({environment:sassApiUrl}/index.html#function-igx-icon-theme) and accepts the parameters, required to customize the icon as desired. 

```scss
$custom-icon-theme: igx-icon-theme(
  $color: #1481b8,
  $disabled-color: #494949
);
```   

#### Using CSS variables 

The last step is to pass the custom icon theme in our application: 

```scss
 @include igx-css-vars($custom-icon-theme);
```

#### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-icon($custom-icon-theme);
    }
}
```

#### Demo
<div class="sample-container loading" style="height:75px">
    <iframe id="icon-styling-sample-iframe" data-src='{environment:demosBaseUrl}/data-display/icon-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
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
