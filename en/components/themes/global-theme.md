---
title: Global Themes
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Global Themes
<div class="highlight">The global theme allows you to quickly generate a theme that uses your custom color palette. The color palette will be propagated to all components that don't have custom themes created for them.</div>
<div class="divider"></div>

## Overview
If you've included the _`igniteui-angular.css`_ file in your application project, now is a good time to remove it. We are going to use our own _`my-app-theme.scss`_ file to generate a global theme for all components in our application.

**Ignite UI for Angular** uses a global theme by default to theme the entire suite of components. You can, however, create themes scoped to components you have in your app, depending on your use case. For now, we will be including all of our themes in a single file.
To generate a global theme we're going to be including two mixins `igx-core` and `igx-theme`; both of those mixins accepts a few arguments: 

### igx-core  

| Name                 |  Type    | Default            | Description                                                                           |
| :---------------:    | :-----:  | :---------------:  | :-----------------------------------------------------------------------------------: |
| `$print-layout`      | boolean  | true               | include/exclude the styles for printing                                               |
| `$direction`         | Keyword  | ltr                | Specifies the content direction for all components can be `ltr` or `rtl`              |


### igx-theme  

| Name              |  Type   | Default            | Description                                                                                                    |
| :---------------: | :-----: | :---------------:  | :------------------------------------------------------------------------------------------------------------: |
| `$palette`        | map     | undefined          | The palette map to be used to by the default themes of all components.                                         |
| `$schema`         | map     | $light-schema      | The schema used as basis for styling the components.                                                           |
| `$exclude`        | list    | ( )                | A list of component themes to be excluded from the global theme.                                               |
| `$legacy-support` | boolean | `false`             | Determines the theming strategy - if set to true, theming is done via hard values. |
| `$roundness`      | Number  |  null              | Sets the global roundness factor for all components (the value can be any decimal fraction between 0 and 1).   |
| `$elevation`      | boolean | `true`             | Sets the global elevation for all components that come with elevation.

Let's create a custom global theme that will use the primary and secondary colors of our company.

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always include igx-core first!
@include igx-core();
// Pass the color palette we generated to the igx-theme mixin
@include igx-theme($my-color-palette);
```

Let's explain what the `igx-core` and `igx-theme` mixins do. The `igx-core` mixin takes care of loading all essential parts like global elevations, global typography, etc. The `igx-theme` will set the global variable `$default-palette` to the palette map you pass; it will also set the global variable `$igx-legacy-support` to the value of `$legacy-support`. The `igx-theme` mixin also includes each individual component style that is not listed in the `$exclude` list of components. 

> [!IMPORTANT]
> Including `igx-core` before `igx-theme` is essential. The `igx-core` mixin provides all base definitions needed for `igx-theme` to work.

## Excluding Components
<div class="divider--half"></div>

The `igx-theme` mixin allows you to provide a list of component names to be excluded from the global theme styles. For instance, if you want to completely remove all styles we include for the `igx-avatar` and `igx-badge` and provide your own custom styles, you can do so by passing the list of components like so:

```scss
// ...
$unnecessary: (igx-avatar, igx-badge);

@include igx-theme($my-color-palette, $exclude: $unnecessary);
```

Additionally, if you know your app will not be using some of our components, you can list them in the `$exclude` list, thus reducing the overall size of the produced CSS.

## Light and Dark Themes

In addition to the more powerful `igx-theme` mixin, we include two additional global theme mixins for fast bootstrapping of *__light__* and *__dark__* themes. Those mixins are `igx-light-theme` and `igx-dark-theme`.

Here's a quick showcase of how you can create a light and dark theme for your application

```scss
.light-theme {
    @include igx-light-theme($default-palette);
}

.dark-theme {
    background: #333;
    color: #fff;

    @include igx-dark-theme($default-palette);
}
```
Ideally you would be applying `.light-theme` and `.dark-theme` CSS classes somewhere high in your application DOM tree. Your `app-root` element is a good candidate for that.

### Available Themes
Ignite UI for Angular gives you the option to pick from a set of predefined themes.
The table below shows all the built-in themes that you can use right away.

| Theme                                                                        | Mixin                                                                                             |  Schema                   |  color palette                                            | Available in version |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------|-----------------------------------------------------------|----------------------|
| [**Material (base)**](./themes-list/material.html)                           |  [igx-theme()]({environment:sassApiUrl}/index.html#mixin-igx-theme)                               | `$light-schema          ` | $default-palette                                          |      **all**         |
| [**Material (light)**](./themes-list/material.html)                          |  [igx-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)                   | `$light-material-schema          ` | $light-material-palette                                          |      **6.2 +**       |
| [**Material (dark)**](./themes-list/material.html)                           |  [igx-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)                     | `$dark-material-schema           ` | $dark-material-palette                                             |      **6.2 +**       |
| [**Fluent**](./themes-list/fluent.html)                                      |  [igx-fluent-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-fluent-light-theme)                 | `$light-fluent-schema   ` | $light-fluent-excel-palette <br> $light-fluent-word-palette           |      **8.2 +**       |
| [**Fluent (dark)**](./themes-list/fluent.html)                               |  [igx-fluent-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-fluent-dark-theme)       | `$dark-fluent-schema    ` | $dark-fluent-excel-palette <br> $dark-fluent-word-palette |      **8.2 +**       |
| [**Bootstrap**](./themes-list/bootstrap.html)                                |  [igx-bootstrap-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-light-theme)            | `$light-bootstrap-schema` | $light-bootstrap-palette                                        |      **9.0 +**       |
| [**Bootstrap (dark)**](./themes-list/bootstrap.html)                         |  [igx-bootstrap-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-dark-theme)  | `$dark-bootstrap-schema ` | $dark-bootstrap-palette                                   |      **9.0 +**       |
| [**Indigo**](./themes-list/indigo.html)                                |  [igx-indigo-light-theme()]({environment:sassApiUrl}/index.html#mixin-igx-indigo-light-theme)            | `$light-indigo-schema` | $light-indigo-palette                                        |      **10.1 +**       |
| [**Indigo (dark)**](./themes-list/indigo.html)                         |  [igx-indigo-dark-theme()]({environment:sassApiUrl}/index.html#mixin-igx-indigo-dark-theme)  | `$dark-indigo-schema ` | $dark-indigo-palette                                   |      **10.1 +**       |

> [!NOTE]
> Note that all high-level theme mixins wrap the base `igx-theme` mixin.

All theme mixins can be used as a starting point to create your own theme. Let's create a new theme by using the `igx-bootstrap-light-theme` mixin.

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #b71053;
$secondary-color: #6c757d; 

$my-color-palette: igx-palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always include igx-core first!
@include igx-core();
// Pass the color palette we generated to the igx-bootstrap-theme mixin
@include igx-bootstrap-light-theme($my-color-palette);
```

## Browser Support
<div class="divider--half"></div>

The value of `$igx-legacy-support` is quite important as it determines how component themes will work. When its value is set to `true`, individual component style rules will have their values set at build time to the hard-coded values defined in their theme. If you set the value of `$igx-legacy-support` to `false`, however, style rules will look for values from CSS variables defined at the `:root` scope, or the nearest block scope.

The general rule of thumb regarding what the value of `$legacy-support` should be is dictated by whether you will be including support for Internet Explorer 11 or not. If you want to include support for IE11 set the `$legacy-support` value to `true`, otherwise setting its value to `false` (default) will force CSS variables for theming.

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)
* [Palette]({environment:sassApiUrl}/index.html#function-igx-palette)

<div class="divider--half"></div>

## Additional Resources
<div class="divider--half"></div>

Learn how to create individual component themes:

* [Component Themes](./component-themes.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
