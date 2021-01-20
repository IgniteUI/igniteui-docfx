---
title: Generating color palettes at runtime
_description: The Ignite UI for Angular theming engine provides an algorithm that generates Material-like palettes from base colors and contrast text colors for each hue in the palette.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Generating color palettes at runtime
<p class="highlight">The Ignite UI for Angular theming engine provides an algorithm that generates Material-like palettes from base colors and contrast text colors for each hue in the palette.</p>
<div class="divider"></div>

## Overview

Our theming library has not only a global theme, that styles the entire application and every component in it, but also individual component themes where each component can use a different palette. Therefore, currently, we do not expose functionality for generating color palettes and switching the colors at runtime. The main obstacle to having this by default is that some of the colors generated for some of the components are not pure palette colors, instead, they are calculated at build time based on the component schema. They may start from a palette color, but then the color is scaled in one way or another using SASS color functions, which won't work with CSS variable references.

However, using slight modifications and custom schemas or themes, we will be able to use any custom CSS property as a value.

Let's take the [avatar]({environment:angularApiUrl}/classes/igxavatarcomponent.html) component for example.

First, make sure we include a palette to some scope, in this case, the root scope is used:

```scss
@include igx-palette-vars($light-material-palette, $contrast: true);
```

### Using custom theme schema

Then, we need to create a custom avatar schema that uses CSS variables, instead of the [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) function (default) for retrieving colors and the pass it to the [igx-avatar-theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme):

```scss
@include igx-core();
@include igx-theme($palette: $light-material-palette);

$custom-avatar-schema: extend($_light-avatar, (
   icon-background: var(--igx-grays-400),
   icon-color: var(--igx-grays-800),
   initials-background: var(--igx-grays-400),
   initials-color: var(--igx-grays-800)
));

@include igx-avatar(
    igx-avatar-theme(
        $schema: $custom-avatar-schema,
    )
);
```

Now every avatar will use the `global CSS palette vars`, which allows you to modify them at runtime using JavaScript. You will not see any warnings or errors in your console if you omit a color, like the `icon-color` for instance, as it will fallback to a value declared in the [$_light-avatar]({environment:sassApiUrl}/index.html#variable-_light-avatar) schema, which resolves to `var(--igx-avatar-icon-color)`.

### Declaring global component themes

The second approach is similar to the previous one, but instead of creating a new custom schema, we can pass the values directly to the [igx-avatar-theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) function:

```scss
@include igx-avatar(
    igx-avatar-theme(
        $icon-background: var(--igx-primary-500),
        $icon-color: var(--igx-grays-800),
        $initials-background: var(--igx-grays-400),
        $initials-color: var(--igx-grays-800)
    )
);
```

However, this solution will throw warnings if we do not pass the `$icon-color` property for instance, as it can't use the CSS variable reference at build time.

### Demo

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-css-variables-iframe" src='{environment:demosBaseUrl}/layouts/avatar-css-variables' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Avatar Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="avatar-css-variables-iframe" data-demos-base-url="{environment:demosBaseUrl}">        view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="avatar-css-variables-iframe" data-demos-base-url="{environment:demosBaseUrl}">        view on stackblitz
    </button>
</div>

## API Reference
<div class="divider--half"></div>

* [Palettes]({environment:sassApiUrl}/index.html#function-igx-palette)
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Light Components Schema]({environment:sassApiUrl}/index.html#variable-light-schema)
* [Getting Palette Colors]({environment:sassApiUrl}/index.html#function-igx-color)
* [Getting Contrast Colors]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [Generating Color Classes]({environment:sassApiUrl}/index.html#mixin-igx-color-classes)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

