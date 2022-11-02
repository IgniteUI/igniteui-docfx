---
title: Global Themes
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Global Themes
<div class="highlight">The global theme allows you to quickly generate a theme that uses your custom color palette, schema, and elevations. The color palette, schema, and elevations will be propagated to all components that don't have custom themes created for them.</div>
<div class="divider"></div>

## Overview
If you've included the _`igniteui-angular.css`_ file in your application project, now is a good time to remove it. We are going to use our own _`my-app-theme.scss`_ file to generate a global theme for all components in our application.

**Ignite UI for Angular** uses a global theme by default to theme the entire suite of components. You can, however, create themes scoped to components you have in your app, depending on your use case. For now, we will be including all of our themes in a single file.
To generate a global theme we're going to be including two mixins `core` and `theme`. Both of those mixins accept a few arguments: 

###core  
<div class="divider--half"></div>

|           Name            |  Type   | Default |                                Description                                |
| :-----------------------: | :-----: | :-----: | :-----------------------------------------------------------------------: |
|      `$print-layout`      | boolean |  true   |                 Include/exclude the styles for printing.                  |
| `$enhanced-accessibility` | boolean |  false  | Switches component colors and other properties to more accessible values. |


###theme  
<div class="divider--half"></div>

|     Name      |  Type   |         Default          |                                                 Description                                                  |
| :-----------: | :-----: | :----------------------: | :----------------------------------------------------------------------------------------------------------: |
|  `$palette`   |   map   |           null           |                    The palette map to be used to by the default themes of all components.                    |
|   `$schema`   |   map   | `$light-material-schema` |                             The schema used as basis for styling the components.                             |
|  `$exclude`   |  list   |            ()            |                       A list of component themes to be excluded from the global theme.                       |
| `$roundness`  | Number  |            1             | Sets the global roundness factor for all components (the value can be any decimal fraction between 0 and 1). |
| `$elevation`  | boolean |          `true`          |                           Turns on/off elevations for all components in the theme.                           |
| `$elevations` |   Map   |  `$material-elevations`  |                            The elevation map to be used by all component themes.                             |

Let's create a custom global theme that will use the primary and secondary colors of our company.

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always includecore first!
@include core();
// Add the typography styles before the main theme.
@include typography();
// Pass the color palette we generated to thetheme mixin.
@include theme($my-color-palette);
```

Let's explain what the `core` and `theme` mixins do. The `core` mixin takes care of some configurations, like adding enhanced accessibility(e.g. colors suitable for color blind users) and printing styles for all components. The `theme` mixin includes each individual component style (bar the ones listed as excluded) and configures the palette, schema, elevations, and roundness that is not listed in the `$exclude` list of components. 

> [!IMPORTANT]
> Including `core` and `typography` before `theme` is essential. The `core` and `typography` mixins provide all base definitions needed for the `theme` mixin to work correctly.

## Excluding Components
<div class="divider--half"></div>

The `theme` mixin allows you to provide a list of component names to be excluded from the global theme styles. For instance, if you want to completely remove all styles we include for the `igx-avatar` and `igx-badge` to reduce the amount of produced CSS or to supply your own custom styles, you can do so by passing the list of components like so:

```scss
// ...
$unnecessary: (igx-avatar, igx-badge);

@include theme($my-color-palette, $exclude: $unnecessary);
```

If you know your app will not be using some of our components, we recommend you add them to the `$exclude` list.

You can do the inverse, i.e. include only the component styles you want using the method below:

```scss
@use 'sass:map';

@function include($items, $register) {
    @return map.keys(map.remove($register, $items...));
}

$allowed: (igx-avatar, igx-badge);

@include theme(
    $exclude: include($allowed, $components)
);
```

## Light and Dark Themes

In addition to the more powerful `theme` mixin, we include two additional global theme mixins for fast bootstrapping *__light__* and *__dark__* themes. Those mixins are `light-theme` and `dark-theme`.

Here's a quick showcase of how you can create a light and dark theme for your application:

```scss
.light-theme {
    @include light-theme($light-material-palette);
}

.dark-theme {
    background: #333;
    color: #fff;

    @include dark-theme($light-material-palette);
}
```

Ideally, you set `.light-theme` or `.dark-theme` classes on an element high in your application DOM tree. Your `app-root` element is a good candidate for that.

### Available Themes
Ignite UI for Angular gives you the option to pick from a set of predefined themes.
The table below shows all the built-in themes that you can use right away.

| Theme                                                             | Mixin                                                                                      | Schema                             | Color Palette                                                                          | Available in version |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------- | -------------------- |
| [**Material (base)**](presets/material.md)                        | [theme()]({environment:sassApiUrl}/index.html#mixin-theme)                                 | `$light-material-schema          ` | null                                                                                   | **all**              |
| [**Material (light)**](presets/material.md#material-light-theme)  | [light-theme()]({environment:sassApiUrl}/index.html#mixin-light-theme)                     | `$light-material-schema          ` | $light-material-palette                                                                | **6.2 +**            |
| [**Material (dark)**](presets/material.md#material-dark-theme)    | [dark-theme()]({environment:sassApiUrl}/index.html#mixin-dark-theme)                       | `$dark-material-schema           ` | $dark-material-palette                                                                 | **6.2 +**            |
| [**Fluent**](presets/fluent.md)                                   | [fluent-light-theme()]({environment:sassApiUrl}/index.html#mixin-fluent-light-theme)       | `$light-fluent-schema   `          | $light-fluent-palette <br> $light-fluent-excel-palette <br> $light-fluent-word-palette | **8.2 +**            |
| [**Fluent (dark)**](presets/fluent.md#fluent-dark-theme)          | [fluent-dark-theme()]({environment:sassApiUrl}/index.html#mixin-fluent-dark-theme)         | `$dark-fluent-schema    `          | $dark-fluent-palette <br> $dark-fluent-excel-palette <br> $dark-fluent-word-palette    | **8.2 +**            |
| [**Bootstrap**](presets/bootstrap.md)                             | [bootstrap-light-theme()]({environment:sassApiUrl}/index.html#mixin-bootstrap-light-theme) | `$light-bootstrap-schema`          | $light-bootstrap-palette                                                               | **9.0 +**            |
| [**Bootstrap (dark)**](presets/bootstrap.md#bootstrap-dark-theme) | [bootstrap-dark-theme()]({environment:sassApiUrl}/index.html#mixin-bootstrap-dark-theme)   | `$dark-bootstrap-schema `          | $dark-bootstrap-palette                                                                | **9.0 +**            |
| [**Indigo**](presets/indigo.md)                                   | [indigo-light-theme()]({environment:sassApiUrl}/index.html#mixin-indigo-light-theme)       | `$light-indigo-schema`             | $light-indigo-palette                                                                  | **10.1 +**           |
| [**Indigo (dark)**](presets/indigo.md#indigo-dark-theme)          | [indigo-dark-theme()]({environment:sassApiUrl}/index.html#mixin-indigo-dark-theme)         | `$dark-indigo-schema `             | $dark-indigo-palette                                                                   | **10.1 +**           |

> [!NOTE]
> Note that all high-level theme mixins wrap the base `theme` mixin.

All theme mixins can be used as a starting point to create your own theme. Let's create a new theme by using the `bootstrap-light-theme` mixin.

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #b71053;
$secondary-color: #6c757d; 

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always includecore first!
@include core();
// Pass the color palette we generated to thebootstrap-theme mixin
@include bootstrap-light-theme($my-color-palette);
```

## Browser Support
<div class="divider--half"></div>

Prior to Ignite UI for Angular 13, the value of `$igx-legacy-support` is quite important as it determines how component themes work. When its value is set to `true`, individual component style rules will have their values set at build time to the hard-coded values defined in their theme. If you set the value of `$igx-legacy-support` to `false`, however, style rules will look for values from CSS variables defined at the `:root` scope, or the nearest block scope.

The general rule of thumb regarding what the value of `$legacy-support` should be dictated by whether you will be including support for Internet Explorer 11 or not. If you want to include support for IE11 set the `$legacy-support` value to `true`, otherwise setting its value to `false` (default) will force CSS variables for theming. Support for IE11 and older browsers was removed in Ignite UI for Angular 13.

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-theme)
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-dark-theme)
* [Palette]({environment:sassApiUrl}/index.html#function-igx-palette)

<div class="divider--half"></div>

## Additional Resources
<div class="divider--half"></div>

Learn how to create individual component themes:

* [Component Themes](component-themes.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
