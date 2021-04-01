---
title: Palettes
_description: 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
---

# Palettes
<p class="highlight">The Ignite UI for Angular theming engine provides several powerful functions and mixins for generating and retrieving colors.</p>
<div class="divider"></div>

## Overview
Palettes in the context of Ignite UI for Angular are declared as [Sass Maps](https://sass-lang.com/documentation/values/maps) with the keys of those map being the palette colors (`primary`, `secondary`, `grays`, etc.). Each color is in turn a map itself and has all color variants listed as keys. The values assigned to those color variants are the actual colors used throughout all component themes. All palette maps are generated programatically by the palette function. The function accepts arguments for `primary`, `secondary`, `grays`, `surface`, `info`, `success`, `warn`, and `error` colors. The `primary` color is usually your brand color. It is mostly used to style static elements, such as the `igx-navbar` component. The secondary color is the one used on elements that are actionable, such as buttons, switches, sliders, etc. The only required arguments are the ones for `primary` and `secondary` colors. The surface color is used to color the 'surface' of some components, such as cards, menus, date/time pickers, banners sheets, etc. We default the colors for `surface`, `grays`, `info`, `success`, `warn`, and `error` to a predefined set of our choosing.

To get started with your first color palette, create an _scss_ file that would be the base file for your global theme. I will call mine _"_variables.scss"_.

```scss
// _variables.scss

// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$melon-palette: igx-palette(
    $primary: #2ab759,
    $secondary: #f96a88,
);
```

>[!WARNING]
> The value you pass to `$primary`, `$secondary`, or any other color **must be of type color**. You cannot pass CSS variables as arguments as those can't be resolved at Sass build-time.

We created a palette that contains variants for all colors in the it, including automatically created text contrast colors for each variant. If you haven't checked [the documentation](../palettes.md) regarding palettes with CSS variables, go check it out now. It contains information about all the color variants of a palette.

The `igx-palette` function does a lot internally to help you create colors at build-time that you can reuse throughout your `.scss` documents. The function is nice in that it will create a huge map of colors for you, but the algorithm for generating the color variants is very opinionated and may not match your exact needs. Our component themes don't care how the palette is generated, it only cares about the shape of the map.

In case you want to manually create your palette, or create the palette generating function yourself here's what we expect to get as a palette map.

```scss
$handmade-palette: (
    primary: (
        50: #c0c0ff,
        '50-contrast': black,
        100: #a7a7fa,
        '100-contrast': black,
        200: #6d6df1,
        '200-contrast': black,
        300: #3c3cf2,
        '300-contrast': white,
        400: #1d1df7,
        '400-contrast': white,
        500: blue,
        '500-contrast': white,
        600: #0000e5,
        '600-contrast': white,
        700: #0000d2,
        '700-contrast': white,
        800: #0000be,
        '800-contrast': white,
        900: #0000a8,
        '900-contrast': white,
        'A100': #55f,
        'A100-contrast': white,
        'A200': #2727ff,
        'A200-contrast': white,
        'A400': #0000eb,
        'A400-contrast': white,
        'A700': #00a,
        'A700-contrast': white
    ),
    secondary: (
        50: #ffc0c0,
        '50-contrast': black,
        100: #faa7a7,
        '100-contrast': black,
        200: #f16d6d,
        '200-contrast': black,
        300: #f23c3c,
        '300-contrast': black,
        400: #f71d1d,
        '400-contrast': black,
        500: var(--some-dynamic-color),
        '500-contrast': black,
        600: #e50000,
        '600-contrast': white,
        700: #d20000,
        '700-contrast': white,
        800: #be0000,
        '800-contrast': white,
        900: #a80000,
        '900-contrast': white,
        'A100': #f55,
        'A100-contrast': black,
        'A200': #ff2727,
        'A200-contrast': black,
        'A400': #eb0000,
        'A400-contrast': white,
        'A700': #a00,
        'A700-contrast': white
    ),
    grays: (
        50: rgba(0, 0, 0, .02),
        '50-contrast': black,
        100: rgba(0, 0, 0, .04),
        '100-contrast': black,
        200: rgba(0, 0, 0, .08),
        '200-contrast': black,
        300: rgba(0, 0, 0, .12),
        '300-contrast': black,
        400: rgba(0, 0, 0, .26),
        '400-contrast': black,
        500: rgba(0, 0, 0, .38),
        '500-contrast': black,
        600: rgba(0, 0, 0, .54),
        '600-contrast': white,
        700: rgba(0, 0, 0, .62),
        '700-contrast': white,
        800: rgba(0, 0, 0, .74),
        '800-contrast': white,
        900: rgba(0, 0, 0, .87),
        '900-contrast': white
    ),
    info: (
        500: #1377d5,
        '500-contrast': black
    ),
    success: (
        500: #4eb862,
        '500-contrast': black
    ),
    warn: (
        500: #fbb13c,
        '500-contrast': black
    ),
    error: (
        500: #ff134a,
        '500-contrast': black
    ),
    surface: (
        500: #fff,
        '500-contrast': black
    )
);
```
<div class="divider"></div>

## The Default Palette
The `igx-theme` mixin takes a palette(see the previous section) as one of its arguments. The passed palette is assigned to the global `$default-palette` variable. This palette stored in this variable is used across the Sass library as fallback palette, whenever a palette is expected, but not explicitly provided by the user.

You can use this knowledge to your advantage to allow you to re-use the same palette across multiple Sass documents in your application.

For example, you could have the following Sass files in your app.

```scss
// src/styles/_variables.scss

$my-palette: igx-palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

$default-palette: $my-palette;
```

In your main styles file:
```scss
// src/styles/styles.scss
@import '~igniteui-angular/src/lib/core/styles/themes/index';
@import 'variables';

@include igx-theme($palette: $my-palette);
```

In a component `.scss` file:
```scss
@import '../styles/styles/variables';

:host {
  background: igx-color($variant: 900);
}
```

This ensures that the same palette, declared in our `_variables.scss` file is used across all Sass files

## Grayscale Colors

Similar to the `primary` and `secondary` colors, you can provide another color to the `igx-palette` function that will be used to generate shades of gray. The default color used to generate the `grays` palette in all light themes is `#000`, or better known as `black`. The `grays` color variants are mainly used for setting text colors across components. Modifying the value is useful when changing the background or surface colors in your application. For instance, if your application uses a darker surface background, setting the `grays` color to `white` is sensible, and will force all text colors to be based on shades of `white`.

To generate a palette that uses `white` for its gray shades:

```scss
// Import the Ignite UI themes library first
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

## Colors Variants

We provide a function that is easy to remember and use - `igx-color`. It can take up to three arguments - `palette`, `color`, and `variant`;

```scss
// Get the primary 500 color variant from $default-palette
$my-primary-500: igx-color();

// Get the primary 600 color variant from $default-palette
$my-primary-600: igx-color($variant: 600);

// Get the secondary A700 color variant from $my-palette
$my-primary-A700: igx-color($my-palette, 'secondary', 'A700');

// Get the warn color from $my-palette
$my-warning-color: igx-color($my-palette, 'warn');

.my-awesome-class {
    background: $my-primary-600;
    border-color: $my-primary-A700;
}

.warning-bg {
    background: $my-warning-color;
}
```

If you omit the `$palette` argument, the value stored in `$default-palette` is used. If you do not provide `$color` and/or `$variant`, they will be assigned to `primary` and `500` respectively.

<div class="divider"></div>

## Contrast Text Colors

Similar to how we retrieve color variants, there's a way to get the contrast text color for each of the color variants in the palette.

```scss
$my-primary-800: igx-color($my-palette, 'primary', 600);
$my-primary-800-text: igx-contrast-color($my-palette, 'primary', 600);

// sample usage
.my-awesome-article {
    color: $my-primary-800-text;
    background: $my-primary-800;
}
```

<div class="divider"></div>

## Color Classes

We understand that some people prefer to use CSS classes to apply colors to web elements, be it text or background. We have a mixin that allows you to generate CSS classes for each color in the palette.

The mixin takes a few arguments that allow you control the CSS class name as well as the CSS property to pass the palette color to;

- `$prop` - The CSS property to assign the color to.
- `$prefix` - A prefix string to be attached to the generated class name. The default is 'igx'.
- `$suffix` - A suffix string to be attached to the generated class name.
- `$palette` - The palette to use.

For instance, if you want to generate CSS classes that apply background color to elements, you can do the following:

```scss
@include igx-color-classes(
    $prop: 'background-color',
    $prefix: 'bg'
);
```
The above code will generate CSS classes for each color variant in the palette. For instance, the `500` color variant of the `primary` palette will be given the following class `.bg-primary-500`;

```html
<div class="bg-primary-500">...</div>
```

<div class="divider--half"></div>

## CSS Variables

When reading about the color palette in the [CSS Variables](../palettes.md) section of the documentation, you would've noticed that all palette colors are included as CSS variables. We do this internally every time we generate a theme using the `igx-theme` mixin. The `igx-theme` calls another mixin in its body - `igx-palette-vars`. It takes a palette and converts the colors in it into CSS variables. 

You use this mixin when you want your custom palette colors to be included as CSS variables.

Here's an example:

```scss
$my-palette: igx-palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

@include igx-palette-vars($my-palette);
```

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
