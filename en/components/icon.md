---
title: Icon Component
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

##Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font sets so developers can use them interchangeably and add material icons to markup. The component supports custom colors. Icons can be set as inactive.</p>
<div class="divider"></div>

### Icon Demo

<div class="sample-container" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample-1"  onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

The Icon component is exported as an `NgModule`, thus all you need to do in your application is to import the [`IgxIconModule`]({environment:angularApiUrl}/classes/igxiconmodule.html) inside your `AppModule`:

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
<div class="sample-container" style="height: 80px; width: 300px">
    <iframe id="icon-sample2-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample2"  onload="onSampleIframeContentLoaded(this);">
</div>

You can also use SVG image as an icon. First, you need to inject [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency in a component's constructor. Use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) method to import the SVG file in cache. Icon name and file URL path are method's mandatory parameters, you can specify font-set as well. After that, you can use the SVG files in the HTML markup. Alternatively, you can use the `addSvgIconFromText` method to import the SVG file providing the SVG text content instead of the file URL.

* Have in mind that if there are two icons with the same name and the same font-set - SVG icon will be displayed with priority.
* It is better not to provide image width and height in the SVG file.
* You may need additional polyfill scripts ("polyfills") for the browsers that you must support.

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

<div class="sample-container" style="height: 50px">
    <iframe id="svg-icon-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/svg-icon-sample"  onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
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
