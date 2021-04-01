---
title: Palettes
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_language: ja
---

# Palettes

<p class="highlight">Ignite UI for Angular exposes CSS variables that allow you to update the colors in your application in a consistent way.</p>
<div class="divider"></div>

## Overview

Ignite UI for Angular exposes over 80 color variants as CSS variables for 8 base colors - `primary`, `secondary`, `grays`, `info`, `success`, `warn`, `error`, and `surface`.

The `primary`, `secondary`, and `grays` colors follow the [2014 Material Design Color Palette](https://material.io/design/color/the-color-system.html#tools-for-picking-colors). This means these colors include the following variants:

<table>
    <tr>
        <th colspan="10" style="text-align: center !important">All</th>
        <th colspan="4" style="text-align: center !important">*Primary & Secondary Only*</th>
    </tr>
    <tr>
        <td>**50**</td>
        <td>**100**</td>
        <td>**200**</td>
        <td>**300**</td>
        <td>**400**</td>
        <td>**500**</td>
        <td>**600**</td>
        <td>**700**</td>
        <td>**800**</td>
        <td>**900**</td>
        <td>*A100*</td>
        <td>*A200*</td>
        <td>*A400*</td>
        <td>*A700*</td>
    </tr>
</table>

<div class="divider--half"></div>
As the table above shows, the `grays` color doesn't include the `A100`, `A200`, `A400`, and `A700` variants, while the `primary` and `secondary` colors contain all 14 color variants. We include 5 additional colors that are not part of the 2014 Material Design Color Palette - `info`, `success`, `warn`, `error`, and `surface`. These colors have only one color variant - `500`.

On top of the aforementioned colors, we also include **Level AAA** [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) compliant `contrast` colors for each color variant. This means that you can safely use the corresponding `contrast` color variants as foreground colors for the base color variant.

> [!NOTE]
> Contrast colors are generated at build-time by the Sass theming engine. Overriding the CSS variables will not update the corresponding contrast colors.

Here's an excerpt of the `primary` color as declared in the Light Material Palette:

```css
:root {
  --igx-primary-h: 204deg;
  --igx-primary-s: 100%;
  --igx-primary-l: 50%;
  --igx-primary-a: 1;
  --igx-primary-50: hsla(
                      var(--igx-primary-h), 
                      calc(var(--igx-primary-s) * 1.23),
                      calc(var(--igx-primary-l) * 1.78), 
                      var(--igx-primary-a)
                    );
  --igx-primary-100: hsla(
                      var(--igx-primary-h), 
                      calc(var(--igx-primary-s) / 1.25),
                      calc(var(--igx-primary-l) * 1.66),
                      var(--igx-primary-a)
                    );
  --igx-primary-200: hsla(
                      var(--igx-primary-h),
                      calc(var(--igx-primary-s) * .64),
                      calc(var(--igx-primary-l) * 1.43),
                      var(--igx-primary-a)
                    );
  // ...
  --igx-primary-50-contrast: black;
  --igx-primary-100-contrast: black;
  --igx-primary-200-contrast: black;
  // ...
}
```

All colors variants are derived from 4 base variables - `--igx-primary-h`, `--igx-primary-s`, `--igx-primary-l`, and `--igx-primary-a`. Each one of these variables holds the [HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation) parts for a single color. HSLA stands for `hue`, `saturation`, `lightness`, and `alpha`. It's another color scheme used to describe colors. We decided to use this approach as it allows us to modify all variants of the `primary`, `secondary` and other colors at runtime.

## Defining Palettes

If you wanted to change the color variants for a color from the palette, you can do so by overriding its HSLA values in your stylesheets. For instance, changing the primary colors is as easy as writing:

```css
/* The HSLA representation of orange (#ffa500) */
/* hsla(38.8,100%,50%, 1); */
:root {
  --igx-primary-h: 38.8deg; 
  --igx-primary-s: 100%; 
  --igx-primary-l: 50%; 
  --igx-primary-a: 1; 
}
```

This will automatically update all the other primary variants.

You will notice that color variants for each color are monochromatic. This is because all color variants are generated from the HSLA variables. You can override individual colors only using any color scheme:

```css
:root {
  --igx-primary-600: darkorange;
}
```

Be cautious when doing this:

```css
:root {
  --igx-primary-500: orange;
  --igx-primary-600: blue;
}
```

It may result in unexpected results, as some component themes use more than one color variant. We designed all component themes around monochromatic palettes.

## Scoping

We've seen that overriding colors in the palette is relatively easy. We can update the _global_ palette by scoping color variants to the `:root` selector in the `styles.css` file of our application:

Let's say your corporate primary color is `#9f349c` and you want to create primary variants for it. One option would be to use the [Material Color Tool](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) to generate all color variants for you. Here's how we will declare the produced colors by the tool:

```css
:root {
  --igx-primary-50: #f3e6f2;
  --igx-primary-100: #e2c0e0;
  --igx-primary-200: #d096cd;
  --igx-primary-300: #d096cd;
  --igx-primary-400: #bd6db9;
  --igx-primary-500: #9f349c;
  --igx-primary-600: #923095;
  --igx-primary-700: #81298d;
  --igx-primary-800: #722584;
  --igx-primary-900: #561d74;
}
```
This approach disregards the `calc` function we use for coming up with color variants from HSLA scheme at runtime, however, it allows you to specify a hand-picked palette.

The Material Color Tool doesn't give you the contrast color for each color variant. There are many tools out there that will help you determine if a specific color has enough contrast when used in combination with another color. You can use the built-in contrast checker in Chrome when determining the contrast color you want to pick for each color variant. We provide a Sass function for generating color palettes at build-time. If you prefer that we generate all color variants and their contrast colors for you from your own colors, check out the [Palettes with Sass](./sass/palettes.md) section of the documentation.

Apart from having a single global palette, you can also create several palettes scoped to other CSS selectors. For example, we can have a blue and red palette scoped to class selectors:

```css
/* styles.css */

/* cornflowerblue hsl(218.5,79.2%,66.1%) */
.blue-theme {
  --igx-primary-h: 218.5deg; 
  --igx-primary-s: 79.2%; 
  --igx-primary-l: 66.1%; 
  --igx-primary-a: 1; 
}

/* brick red hsl(351.7,57%,52.5%) */
.red-theme {
  --igx-primary-h: 351.7deg; 
  --igx-primary-s: 57%; 
  --igx-primary-l: 52.5%; 
  --igx-primary-a: 1; 
}
```

```html
<app-component class="blue-theme"></app-component>
```

Then you can simply overhaul the colors in your application by changing the value of the class attribute from `blue-theme` to `red-theme`.

This approach works for overriding palette colors for individual components as well. In some instances, you don't want to create multiple palettes, but you would want to change a palette color used in component.

Let's look at the button, calendar, and the input group component themes. They all use the _100_ variant of the _grays_ color as their disabled background. Now, we can customize the theme for each component by overriding the individual properties responsible for setting the disabled background or we could change the disabled background color for all three in one fell swoop by overriding the _grays 100_ palette color for all three:

```css
igx-avatar,
igx-button,
igx-calendar {
  --igx-grays-100: lightgray;
}
```

## Dark vs. Light

Palettes in Ignite UI for Angular dictate whether a theme is going to be light or dark. The two colors that have the biggest impact on that are `grays` and `surface`. See, the `grays` color variants in all themes are based on either a very light color shade, like `#fff`, or a very dark one like `#222`. Light themes have `grays` variants based on dark shades of gray, while dark themes are the opposite - all `grays` variants are a shade of white. These `grays` colors will be displayed against another color, usually the `surface` color. The `surface` color should always be on the opposite end of the `grays` in the gray scale to ensure themes look good.

To make this a bit clearer, bellow is the complete list of all `grays` and `surface` color variants in both a light and a dark theme as represented in the RGBA color space.

*Material Light:*
```css
:root {
  /* surface is set to white */
  --igx-surface-500: #fff;

  /* grays are based on black to contrast the surface color */
  --igx-grays-50: rgba(0, 0, 0, 0.02);
  --igx-grays-100: rgba(0, 0, 0, 0.04);
  --igx-grays-200: rgba(0, 0, 0, 0.08);
  --igx-grays-300: rgba(0, 0, 0, 0.12);
  --igx-grays-400: rgba(0, 0, 0, 0.26);
  --igx-grays-500: rgba(0, 0, 0, 0.38);
  --igx-grays-600: rgba(0, 0, 0, 0.54);
  --igx-grays-700: rgba(0, 0, 0, 0.62);
  --igx-grays-800: rgba(0, 0, 0, 0.74);
  --igx-grays-900: rgba(0, 0, 0, 0.87);
}
```

*Material Dark:*
```css
:root {
  /* surface is a dark shade of gray */
  --igx-surface-500: #222;

  /* grays are based on white to contrast the surface color */
  --igx-grays-50: rgba(255, 255, 255, 0.02);
  --igx-grays-100: rgba(255, 255, 255, 0.04);
  --igx-grays-200: rgba(255, 255, 255, 0.08);
  --igx-grays-300: rgba(255, 255, 255, 0.12);
  --igx-grays-400: rgba(255, 255, 255, 0.26);
  --igx-grays-500: rgba(255, 255, 255, 0.38);
  --igx-grays-600: rgba(255, 255, 255, 0.54);
  --igx-grays-700: rgba(255, 255, 255, 0.62);
  --igx-grays-800: rgba(255, 255, 255, 0.74);
  --igx-grays-900: rgba(255, 255, 255, 0.87);
}
```

Be mindful when changing the `grays` and `surface` color variants as they are used in most components and have a big impact on their overall look and feel. 

## Other Colors

So far we've covered the `primary`, `secondary`, `grays`, and `surface` color variants and how you can override them. There are four more colors - `info`, `success`, `warn`, and `error`. They are usually used to set the colors in different states. For example, the `igx-input-group` component uses these colors in its input validation states.

```css
:root {
  --igx-info-500: blue;
  --igx-success-500: green;
  --igx-warn-500: orange;
  --igx-error-500: red;
}
```

## その他のリソース

Related topics:

- [Palettes with Sass](./sass/palettes.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
