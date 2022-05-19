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

$melon-palette: palette(
    $primary: #2ab759,
    $secondary: #f96a88,
);
```

>[!WARNING]
> The value you pass to `$primary`, `$secondary`, or any other color **must be of type color**. You cannot pass CSS variables as arguments as those can't be resolved at Sass build-time.

We created a palette that contains variants for all colors in it, including automatically created text contrast colors for each variant. If you haven't checked [the documentation](../palettes.md) regarding palettes with CSS variables, go check it out now. It contains information about all the color variants of a palette.

The `igx-palette` function does a lot internally to help you create colors at build-time that you can reuse throughout your `.scss` documents. The function is nice in that it will create a huge map of colors for you, but the algorithm for generating the color variants is very opinionated and may not match your exact needs. Our component themes don't care how the palette is generated, it only cares about the shape of the map.

In case you want to manually create your palette, or create the palette generating function yourself here's what we expect to get as a palette map.

```scss
$handmade-palette: (
    primary: (
        50: to-hsl(#e6eff8),
        '50-contrast': black,
        100: to-hsl(#bfd7f2),
        '100-contrast': black,
        200: to-hsl(#98bfec),
        '200-contrast': black,
        300: to-hsl(#85b5e9),
        '300-contrast': white,
        400: to-hsl(#73a6e4),
        '400-contrast': white,
        500: to-hsl(#6797de),
        '500-contrast': white,
        600: to-hsl(#3681dd),
        '600-contrast': white,
        700: to-hsl(#357fda),
        '700-contrast': white,
        800: to-hsl(#306dc8),
        '800-contrast': white,
        900: to-hsl(#284ea8),
        '900-contrast': white,
        'A100': to-hsl(#98bfec),
        'A100-contrast': white,
        'A200': to-hsl(#73a6e4),
        'A200-contrast': white,
        'A400': to-hsl(#3681dd),
        'A400-contrast': white,
        'A700': to-hsl(#284ea8),
        'A700-contrast': white
    ),
    secondary: (
        50: to-hsl(#fef7e2),
        '50-contrast': black,
        100: to-hsl(#fdeab7),
        '100-contrast': black,
        200: to-hsl(#fbdd89),
        '200-contrast': black,
        300: to-hsl(#fad15c),
        '300-contrast': black,
        400: to-hsl(#f9c63f),
        '400-contrast': black,
        500: to-hsl(#f7bd32),
        '500-contrast': white,
        600: to-hsl(#f6b02d),
        '600-contrast': white,
        700: to-hsl(#f49e2a),
        '700-contrast': white,
        800: to-hsl(#f38e28),
        '800-contrast': white,
        900: to-hsl(#f38e28),
        '900-contrast': white,
        'A100': to-hsl(#fbdd89),
        'A100-contrast': black,
        'A200': to-hsl(#f9c63f),
        'A200-contrast': black,
        'A400': to-hsl(#f6b02d),
        'A400-contrast': white,
        'A700': to-hsl(#f38e28),
        'A700-contrast': white
    ),
    grays: (
        50: to-hsl(#fff),
        '50-contrast': black,
        100: to-hsl(#fafafa),
        '100-contrast': black,
        200: to-hsl(#f5f5f5),
        '200-contrast': black,
        300: to-hsl(#f0f0f0),
        '300-contrast': black,
        400: to-hsl(#dedede),
        '400-contrast': black,
        500: to-hsl(#b3b2b2),
        '500-contrast': black,
        600: to-hsl(#979696),
        '600-contrast': white,
        700: to-hsl(#7b7a7a),
        '700-contrast': white,
        800: to-hsl(#404040),
        '800-contrast': white,
        900: to-hsl(#1a1a1a),
        '900-contrast': white
    ),
    info: (
        500: to-hsl(rgb(18, 118, 211)),
        '500-contrast': black
    ),
    success: (
        500: to-hsl(rgb(76, 184, 96)),
        '500-contrast': black
    ),
    warn: (
        500: to-hsl(rgb(251, 178, 60)),
        '500-contrast': black
    ),
    error: (
        500: to-hsl(rgb(255, 20, 75)),
        '500-contrast': black
    ),
    surface: (
        500: to-hsl(rgb(255, 255, 255)),
        '500-contrast': black
    )
);

:root {
    --igx-primary-a: 1;
    --igx-secondary-a: 1;
    --igx-info-a: 1;
    --igx-success-a: 1;
    --igx-warn-a: 1;
    --igx-error-a: 1;
    --igx-grays-a: 1;
    --igx-surface-a: 1;
}
```
<div class="divider"></div>

We created a new `to-hsl()` function that takes a color, no matter the format, and gets its hue, saturation and lightness values, which we later use to generate the palette colors in `hsla` format. The `alpha` values must be initialized in the `:root` selector additionally.

## Predefined Palettes
We provide predefined light and dark palettes, which you can use along with our schemas to create themes for your components:

- Light Palettes
  - $light-material-palette
  - $light-fluent-excel-palette
  - $light-fluent-word-palette
  - $light-fluent-palette
  - $light-bootstrap-palette
  - $light-indigo-palette
- Dark Palettes
  - $dark-material-palette
  - $dark-fluent-excel-palette
  - $dark-fluent-word-palette
  - $dark-fluent-palette
  - $dark-bootstrap-palette
  - $dark-indigo-palette

We also provide a few additional palettes that you can use:

- Light Additional Palettes
  - $light-green-palette
  - $light-purple-palette
- Dark Additional Palettes
  - $dark-green-palette
  - $dark-purple-palette

You can mix and match all of the light palettes with a light schema of your choice and vice versa - all of the dark palettes with a dark schema that you think will best match your needs and vision.

## The Default Palette
The `theme` mixin takes a palette(see the previous section) as one of its arguments. The passed palette is assigned to the global `$default-palette` variable. This palette stored in this variable is used across the Sass library as fallback palette, whenever a palette is expected, but not explicitly provided by the user.

You can use this knowledge to your advantage to allow you to re-use the same palette across multiple Sass documents in your application.

For example, you could have the following Sass files in your app.

```scss
// src/styles/_variables.scss

$my-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

$default-palette: $my-palette;
```

In your main styles file:
```scss
// src/styles/styles.scss
@use 'variables' as *;

@include theme($palette: $my-palette);
```

In a component `.scss` file:
```scss
@use '../styles/styles/variables' as *;

:host {
  background: color($variant: 900);
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

$my-color-palette: palette(
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
$my-primary-500: color();

// Get the primary 600 color variant from $default-palette
$my-primary-600: color($variant: 600);

// Get the secondary A700 color variant from $my-palette
$my-primary-A700: color($my-palette, 'secondary', 'A700');

// Get the warn color from $my-palette
$my-warning-color: color($my-palette, 'warn');

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
$my-primary-800: color($my-palette, 'primary', 600);
$my-primary-800-text:contrast-color($my-palette, 'primary', 600);

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
@include color-classes(
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

When reading about the color palette in the [CSS Variables](../palettes.md) section of the documentation, you would've noticed that all palette colors are included as CSS variables. We do this internally every time we generate a theme using the `theme` mixin. The `theme` calls another mixin in its body - `palette-vars`. It takes a palette and converts the colors in it into CSS variables. 

You use this mixin when you want your custom palette colors to be included as CSS variables.

Here's an example:

```scss
$my-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
);

@include palette-vars($my-palette);
```

## API Reference
* [Palettes]({environment:sassApiUrl}/index.html#function-igx-palette)
* [Getting Palette Colors]({environment:sassApiUrl}/index.html#function-igx-color)
* [Getting Contrast Colors]({environment:sassApiUrl}/index.html#function-igx-contrast-color)
* [Generating Color Classes]({environment:sassApiUrl}/index.html#mixin-color-classes)
* [Schemas](./schemas.md)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
