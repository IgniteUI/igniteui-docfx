---
title: Display Density | Ignite UI for Angular 
_description: The Ignite UI for Angular provides a way of setting display density property on application or component level. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, density, display density
_language: kr
---

## Display Density

Display density configuration can significantly improve the visual representation of large amount of data. In Ignite UI for Angular, we provide a pre-defined set of options – comfortable, compact and cosy.

Using the [DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken) injection token, you can configure the display density on an application and/or on a component level. 

### Display Density Demo
<div class="sample-container loading" style="height: 250px; width: 600px;">
    <iframe id="density-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/theming/density" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="density-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage

**Setting display density on an application/component level**

To set the display density, use the [DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken) injection token to create a DI provider.

```typescript
providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.compact } }],
```

You can set the display density's default value through `useValue` or `useFactory`.

Depending on the required scope, you can apply the created provider for the entire application or to a component.

**Setting control display density explicitly**

To set the display density explicitly for a control, use the [`displayDensity`]({environment:angularApiUrl}/classes/displaydensitybase.html#displaydensity) input.

```html
<igx-input-group [displayDensity]="'cosy'"> ... </igx-input-group>
```

### API References
<div class="divider"></div>

* [DisplayDensity]({environment:angularApiUrl}/enums/displaydensity.html)
* [DisplayDensityBase]({environment:angularApiUrl}/classes/displaydensitybase.html)
* [IDisplayDensityOptions]({environment:angularApiUrl}/interfaces/idisplaydensityoptions.html)
* [DisplayDensityToken]({environment:angularApiUrl}/index.html#displaydensitytoken)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
