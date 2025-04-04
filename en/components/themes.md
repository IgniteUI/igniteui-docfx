---
title: Theming Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Theming component was developed through SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Themes

With only a few lines of code, users can easily change the theming for their components. Being developed through SASS, the API use is low-difficulty and offers restyling of one component, multiple components, or the entire suite.

### The Essence of a Theme

Since **IgniteUI for Angular** bases its component designs on the **<a href="https://material.io/guidelines/material-design/introduction.html" target="_blank">Material Design Guidelines</a>**, we try to get as close as possible to colors, sizes, and overall look and feel of our components to those created by Google.

Our approach to theming is based around several simple concepts.

#### Palettes

The first concept is the one of palettes of colors. As in any visual tool, colors are the main difference between one application and another. The Material Design Guidelines prescribe predefined palettes of colors that range in hue and lightness for a base color. There's a good reason for that. They really want to ensure good color matching and contrast between the background colors and the foreground text colors. This is great, but limiting at the same time. If you wanted to have your own custom palette that matches your branding, you would be out of luck. We recognize this is a problem, so we invented an algorithm that would generate Material-like palettes from base colors you provide. Even more, we also generate contrast text colors for each hue in the palette.

#### Themes

The second concept is the one of themes. Palettes, wouldn't do much good if they weren't used by a theme. So we have themes for each component, and a global one, that styles the entire application and every component in it. You simply pass your generated palette to the global theme, we take care of the rest. You can, of course, style each component individually to your liking. We will take a closer look at how to do that later in this article.

#### Typography

The last concept revolves around typography. Although we have a default typeface choice, we really want to give you the power to style your application in every single way. Typography is such an important part of that. We provide a method for changing the font family, the sizes and weights for headings, subheadings and paragraph texts in your app.

> [!NOTE]
> Theming **requires** [**Sass**](https://github.com/sass/node-sass).

### Generating Color Palettes

Our theming library is based on Sass. If you used the **<a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">Ignite UI CLI</a>** to bootstrap your app, you can specify the style in the **angular.json** config to _scss_, the CLI will take care of compiling the Sass styles for you. If you haven't used Ignite UI CLI then you have to configure your builder to compile Sass styles for you.

Our palettes accept arguments for `primary`, `secondary`, `surface`, `info`, `success`, `warn`, and `error` colors. The primary color is the one that will be the more prominent color throughout your application. The secondary color is the one used on elements that are actionable, such as buttons, switches, sliders, etc. The surface color is used for the background color of some of the components. The only required arguments are the ones for `primary`, `secondary` and `surface` colors. We default the ones for `info`, `success`, `warn`, and `error` to a predefined set of our choosing.

To get started with our first color palette, create an _scss_ file that would be the base file for your global theme. I will call mine _"my-app-theme.scss"_.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink
$surface-color: #e5e5e5; // Light gray

$my-color-palette: palette(
  $primary: $company-color,
  $secondary: $secondary-color,
  $surface: $surface-color
);
```

Now we have a palette, that contains exactly 216 colors! Whoa, wait, what? How did that happen? You provided 3 and got 216? Where did the other 213 colors come from?
Let's stop here to explain what just happened as it's quite important. When you provided `primary`, `secondary` and `surface` colors, we took those and generated shades and accent colors for each one. Basically now in your palette you have 3 sub-palettes for `primary`, `secondary` and `surface` colors. Each sub-palette contains 13 additional color variations based on the original color. 5 of the 13 colors are lighter shades of your original color, and 4 are darker. The remaining 4 colors are more exaggerated 'accent' versions of the original color. With the original color that makes for a total of 14 colors in each palette.

With so many colors in each sub-palette you may be wondering, how on Earth will I know which one is which, right? It's quite simple, really. Each of the colors in the sub-palette has a number. We assign the number `500` to the original color. The lighter shades start from `50` and range to `400`. The darker shades start from `600` and range to `900`. The accent colors have string names `A100`, `A200`, `A400`, and `A700`, respectively. Okay, but now that's only 42 out of 216. Don't worry, there's another sub-palette we give you. One that consists of gray 'colors', called `grays`. It's just like the other two color sub-palettes, but doesn't include any accent variations. Good, now we're up to 42 + 10 for a total of 52 colors. That is still a long way from 216. Where do the other 164 colors come from? Let's solve the final puzzle. Remember you can also have 4 additional colors for `info`, `success`, `warn` and `error`. So that leaves another 56 colors unaccounted for. Remember the count for the `primary`, `secondary`, `surface`, `info`, `success`, `warn`, `error` and `grays` sub-palettes was exactly is exactly 108, which is the half of the 216 colors. The remaining half of the colors are the contrast text colors for each color variant, they all have `-contrast` as a suffix in their variable name, and they are either black or white.

Got it? Good! But how does one access any of the colors in the palette?

<div class="divider"></div>

#### Getting Sub-Palette Colors

We provide a function that is easy to remember and use `color`. It takes three arguments - `palette`, `color`, and `variant`;

```scss
$my-primary-600: color($my-color-palette, "primary", 600);
$my-primary-A700: color($my-color-palette, "secondary", "A700");
$my-warning-color: color($my-color-palette, "warn");
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

#### Getting Contrast Text Colors

Similar to how we get sub-palette colors, there's a way to get the contrast text color for each of the colors in the sub-palettes.

```scss
$my-primary-800: color($my-palette, "primary", 600);
$my-primary-800-text: contrast-color($my-palette, "primary", 600);
// sample usage

.my-awesome-article {
  background: $my-primary-800;
  color: $my-primary-800-text;
}
```

### Generating a Theme

If you've included the _"igniteui-angular.css"_ file in your application project, now is a good time to remove it. We are going to use our own _"my-app-theme.scss"_ file to generate our own theme.

Let's start from our very first example on this page. This time, though, we're going to be including two mixins `core` and `theme`; For now `core` doesn't accept any arguments. `theme`, however, does accept a few - `$palette`, `$schema`, `$exclude`, `$roundness`, `$elevation`, `$elevations`. For now, we'll only talk about the `$palette` argument. 

> [!IMPORTANT]
> Including `core` before `theme` is essential. The `core` mixin provides all base definitions needed for `theme` to work.

```scss
// Import the IgniteUI themes library first
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink
$surface-color: #e5e5e5; // Light gray

$my-color-palette: palette(
  $primary: $company-color,
  $secondary: $secondary-color,
  $surface: $surface-color
);

// IMPORTANT: Make sure you always include core first!
@include core();
// Pass the color palette we generated to the theme mixin
@include theme($my-color-palette);
```

That's it. Your application will now use the colors from your newly generated palette.



In its current state, the defining custom typography is limited to changing the `font family` of the application. We'll be updating this functionality with subsequent releases. Our intent is to provide a robust way to customize the typography in your application.

To customize the typography use the `typography` mixin. It takes exactly one argument - `config`.

> [!IMPORTANT]
> Including `typography` after `core` is essential. This is subject to change in future releases.

```scss
// Import the IgniteUI themes library first
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

// IMPORTANT: Make sure you always include core first!
@include core();
// Include typography before theme
@include typography(
  $config: (
    font-family: "Comic Sans MS",
  )
);
@include theme($default-palette);
```
