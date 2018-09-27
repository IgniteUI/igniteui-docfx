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

The Icon component is exported as an `NgModule`, thus all you need to do in your application is to import the [**IgxIconModule**]({environment:angularApiUrl}/classes/igxiconmodule.html) inside your `AppModule`:

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
<igx-icon name="home" color="magenta" ></igx-icon>
```

Setting an inactive icon.
```html
<igx-icon name="volume_off" [isActive]="false"></igx-icon>
```

Setting icon with content projection.

```html
<igx-icon color="red">bluetooth</igx-icon>
```

You can set the icon's size through CSS. Create a custom CSS class and name it *custom-size*. The icon's size is changed by the **font-size** property. Additionally to center it, set the **width** and the **height** to the same value.
```html
<igx-icon name="phone_iphone" color="#0375be" class="custom-size"></igx-icon>
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

### API References
<div class="divider--half"></div>

* [IgxIconModule]({environment:angularApiUrl}/classes/igxiconmodule.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
