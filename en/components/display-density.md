---
title: Size (Display Density) | Ignite UI for Angular 
_description: The Ignite UI for Angular provides a way of setting size (display density) property on application or component level. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, density, display density, size
---

# Size (Display Density)

Size (display density) configuration can significantly improve the visual representation of large amounts of data. In Ignite UI for Angular, we provide a pre-defined set of options – large (comfortable), medium (cosy), and small (compact).

Using the `--ig-size` custom CSS property, you can configure the size on an application or a component level.

## Angular Size Example
<code-view style="height: 250px; width: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/density" alt="Angular Size Example">
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

## Usage

**Setting size on an application/component level**

To set the size, use the `--ig-size` CSS custom property. You can set the size for all components in your app by setting the aforementioned property on the body element.

The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`.

```css
body {
    --ig-size: var(--ig-size-small);
}
```

To set the size on a component level, target the element selector. For instance, to set the size of the input group to `small`, you can do:

```css
igx-input-group {
    --ig-size: var(--ig-size-small);
}
```

## Incorporating size in your own components and layouts

Ignite UI for Angular exposes a few Sass functions and a mixin that allow you to implement layouts that react to changes of the `--ig-size` CSS property.

Here's an example on how we can make an element change its width and height based on the value of `--ig-size`.


```html
<div class="my-elem"></div>
```

```scss
@use "igniteui-angular/theming" as *;

.my-elem {
    // Make the element sizable
    @include sizable();

    // Define the default size of the element and hook it to the `--ig-size` property
    --component-size: var(--ig-size, var(--ig-size-large));

    // Define sizes for small (10px), medium (20px), and large (30px)
    --size: #{sizable(10px, 20px, 30px)};
    width: var(--size);
    height: var(--size);
}
```

Now any time the value of `--ig-size` changes, `.my-elem` will change its size.

## API References
<div class="divider"></div>

* [Themes - Sizable Mixin]({environment:sassApiUrl}/index.html#mixin-sizable)
* [Themes - Sizable Function]({environment:sassApiUrl}/index.html#function-sizable)

### Sizing and Spacing Functions
* [Utilities - Pad]({environment:sassApiUrl}/index.html#function-pad)
* [Utilities - Pad Inline]({environment:sassApiUrl}/index.html#function-pad-inline)
* [Utilities - Pad Block]({environment:sassApiUrl}/index.html#function-pad-block)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
