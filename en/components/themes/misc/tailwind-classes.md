---
title: Tailwind Integration for Ignite UI
_description: Learn how to integrate Tailwind CSS with custom utility classes from the Ignite UI for Angular theming engine. This guide walks you through the setup and demonstrates how to use design tokens for colors, typography, and shadows in a utility-first approach.
_keywords: Ignite UI for Angular, Tailwind CSS, Angular styling, Angular theming, custom CSS, utility classes, theming engine, typography, shadows, colors
---

# Tailwind CSS Integration with Ignite UI for Angular
<p class="highlight">Ignite UI for Angular offers full theming customization through CSS variables and a powerful Sass engine. In this guide, you'll learn how to integrate Tailwind CSS into an Angular project and enhance it with custom utility classes provided by the `igniteui-theming` package. These classes expose Ignite UI design tokens for colors, shadows, and typography, enabling a seamless utility-first styling experience.</p>
<br>

## Overview

> [!NOTE]
> This guide assumes you already have **Ignite UI for Angular** installed. If not, run:
>
> ```cmd
> ng add igniteui-angular
> ```

### 1. Install Tailwind
Install tailwind using the following command:

```cmd
npm install tailwindcss @tailwindcss/postcss postcss --force
```

### 2.Configure PostCSS Plugins

Create a `.postcssrc.json` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

### 3.Import Tailwind CSS
In your main stylesheet (`styles.css` or `styles.scss`), import Tailwind and the Ignite UI Tailwind theme configuration.

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/theme.css";
```

If your project uses `sass` for styling, you should import the `theme.scss` from the sass folder.

```scss
@import "tailwindcss";
@import "igniteui-theming/sass/tailwind/theme.scss";
```

> Ensure the import path resolves correctly from `node_modules`.

## Choosing a Theme Preset
If you haven’t already included a theme in your project—or if you'd like to apply a specific set of theme variables—you can use one of the available [predefined themes](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/sass/global-themes#available-themes).
To apply a preset, simply include its path in your `angular.json` file:

```json
"styles": [
    "src/styles.css",
    "node_modules/igniteui-theming/tailwind/presets/material-light.css"
],
```
>You can swap `material-light.css` with any other preset available in the `igniteui-theming/tailwind/presets/` directory.

## Using Ignite UI Custom Utility Classes
The `igniteui-theming` package includes a custom Tailwind configuration that exposes Ignite UI design tokens through utility classes. These include support for:

- Colors and contrast colors

- Elevation (shadows)

- Typography styles

Let’s look at how to use each.

#### Color Utility Classes
Use Ignite UI color tokens directly in your HTML:
```html
<h1 class="bg-primary-500 text-primary-500-contrast">This is a title</h1>
```

You can explore Tailwind’s full color system [here](https://tailwindcss.com/docs/color), and apply it using the Ignite UI-provided class names.
<br>

#### Shadow utility classes

You can add depth using any of the predefined [elevation levels](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/elevations) (from 0 to 24):

```html
<div class="shadow-elevation-8">Elevated container</div>
```

You can find all the shadow-related utility classes provided by Tailwind [here](https://tailwindcss.com/docs/box-shadow)
<br>

#### Typography custom utility styles
We provide custom utility classes for each typography level (e.g., h1, h2, body-1). Use them like so:

```html
<p class="type-style-h3">This paragraph gets the h3 styles</p>
```
Each class applies all necessary font settings, spacing, and sizing according to the [Ignite UI type scale](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/typography).

>[!NOTE]
>These custom typography utilities only work outside of `ig-typography`. If you have to set the `ig-typography` CSS class on a top-level element, these styles won't apply.
<div class="divider--half"></div>

## Summary
With just a few configuration steps, you can combine Tailwind’s utility-first approach with Ignite UI’s robust design system. This integration allows you to rapidly build consistent, themed UI components using well-defined tokens for color, elevation, and typography—right from your HTML.

## Additional Resources

<br>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
