---
title: Palettes
_description: 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
---

# Palettes
<p class="highlight">The Ignite UI for Angular theming engine provides several powerful functions and mixins for generating and retrieving colors.</p>
<div class="divider"></div>

## Overview

Palettes accept arguments for `primary`, `secondary`, `grays`, `surface`, `info`, `success`, `warn`, and `error` colors. The `primary` color is usually your brand color. It is mostly used to style static elements, such as the `igx-navbar` component. The secondary color is the one used on elements that are actionable, such as buttons, switches, sliders, etc. The only required arguments are the ones for `primary` and `secondary` colors. The surface color is used to color the 'surfaces' of some components, such as cards, menus, date/time pickers, banners sheets, etc. We default the colors for `surface`, `grays`, `info`, `success`, `warn`, and `error` to a predefined set of our choosing.

To get started with your first color palette, create an _scss_ file that would be the base file for your global theme. I will call mine _"my-app-theme.scss"_.

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$company-color: #2ab759; /* Some green shade I like */
$secondary-color: #f96a88; /* Watermelon pink */

$my-color-palette: igx-palette(
    $primary: $company-color,
    $secondary: $secondary-color
);
```

Now we have a palette that contains exactly 43 colors! Whoa, wait, what? How did that happen? You provided 2 and got 43? Where did the other 41 colors come from?
Let's stop here to explain what just happened as it's quite important. When you provided `primary` and `secondary` colors, we took those and generated shades and accent colors for each one. Basically now in your palette you have 2 sub-palettes for `primary` and `secondary` colors. Each sub-palette contains 13 additional color variations based on the original color. 5 of the 13 colors are lighter shades of your original color, and 4 are darker. The remaining 4 colors are more exaggerated 'accent' versions of the original color. With the original color that makes for a total of 14 colors in each palette.

With so many colors in each sub-palette you may be wondering, how on Earth will I know which one is which, right? It's quite simple, really. Each of the colors in the sub-palette has a number. We assign the number `500` to the original color. The lighter shades start from `50` and range to `400`. The darker shades start from `600` and range to `900`. The accent colors have string names `A100`, `A200`, `A400`, and `A700`, respectively. Okay, but now that's only 28 out of 43. Don't worry, there's another sub-palette we give you. One that consists of gray 'colors', called `grays`. It's just like the other two color sub-palettes, but doesn't include any accent variations. Good, now we're up to 28 + 10 for a total of 38 colors. That is still a some way from 43. Where do the other 5 colors come from? Let's solve the final puzzle. Remember you can also have 5 additional colors for `surface`, `info`, `success`, `warn` and `error`.

Got it? Good! But how does one access any of the colors in the palette?

<div class="divider"></div>

## The Grayscale Palette

Similar to the `primary` and `secondary` palettes, you can provide a color to the `igx-palette` function that will be used to generate shades of gray. The default color used to generate the `grays` palette is `#000`, or better known as `black`. The `grays` palette is mainly used for setting text colors across components. Modifying the value is useful when changing the background of your application. For instance, if your application uses a darker background, setting the `grays` color to `white` is sensible, and will force all text colors to be based on shades of `white`.

To generate a palette, which uses `white` for setting the shades of the `grays` palette:

```scss
// Import the IgniteUI themes library first
$company-color: #2ab759; /* Some green shade I like */
$secondary-color: #f96a88; /* Watermelon pink */
$grayscale-base: #fff; /* Used to generate shades of gray */

$my-color-palette: igx-palette(
    $primary: $company-color,
    $secondary: $secondary-color,
    $grays: $grayscale-base
);
```

<div class="divider"></div>

## Sub-Palette Colors

We provide a function that is easy to remember and use `igx-color`. It takes three arguments - `palette`, `color`, and `variant`;

```scss
$my-primary-600: igx-color($my-palette, 'primary', 600);
$my-primary-A700: igx-color($my-palette, 'secondary', 'A700');
$my-warning-color: igx-color($my-palette, 'warn');
// sample usage

.my-awesome-class {
    background: $my-primary-600;
    border-color: $my-primary-A700;
}

.warning-bg {
    background: $my-warning-color;
}
```

<div class="divider"></div>

## Contrast Text Colors

Similar to how we get sub-palette colors, there's a way to get the contrast text color for each of the colors in the sub-palettes.

```scss
$my-primary-800: igx-color($my-palette, 'primary', 600);
$my-primary-800-text: igx-contrast-color($my-palette, 'primary', 600);
// sample usage

.my-awesome-article {
    background: $my-primary-800;
    color: $my-primary-800-text;
}
```

<div class="divider"></div>

## Color Classes

We understand that some people prefer to use CSS classes to apply colors to web elements, be it text or background. We have a mixin that allows you to generate CSS classes for each color in a palette.

The mixin takes a few arguments that allow you control the css class name as well as the css property to pass the palette color to;

- `$prop` - The CSS property to assign the color to.
- `$prefix` - A prefix string to be attached to the generated class name. The default is 'igx'.
- `$suffix` - A suffix string to be attached to the generated class name.

For instance, if you want to generate CSS classes that apply background color to elements, you can do the following:

```scss
@include igx-color-classes(
    $prop: 'background-color',
    $suffix: 'bg'
);
```
The above code will generate CSS classes for each color variant in the palette. For instance, the `500` color variant of the `primary` palette will be given the following class `.igx-primary-500-bg`;

<div class="divider--half"></div>

## API Reference
* [Palettes]({environment:sassApiUrl}/index.html#function-igx-palette)
* [Getting Palette Colors]({environment:sassApiUrl}/index.html#function-igx-color)
* [Getting Contrast Colors]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [Generating Color Classes]({environment:sassApiUrl}/index.html#mixin-igx-color-classes)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
