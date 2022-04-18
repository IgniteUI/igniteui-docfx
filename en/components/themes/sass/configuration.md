---
title: Theming Library Configuration
_description: The Ignite UI for Angular Theming provides several global variables that let you configure how the theming engine works.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Configuration

<div class="highlight">The Ignite UI for Angular theming library provides several global variables that let you configure how the theming engine works.</div>
<div class="divider"></div>

## Legacy Support

The development of Ignite UI for Angular started back in 2016 when Internet Explorer 11 was still relevant. Some of our users depend on IE11 to this day. Our theming engine was built in a way that allows you to produce styles for ever-green and old browsers alike, using the same API. We allow you to configure how the engine behaves based on a single global variable - `$igx-legacy-support`. By default, it is set to `false`, but you can shadow its declaration. The value of this variable is also implicitly set when you specify the `$legacy-support` parameter on the `theme` mixin.

> [!WARNING]
> The `$legacy-support` option was removed in igniteui-angular 13.0.x. Support for IE11 and legacy browsers was removed in version 13 and this option is no longer valid.

Example:

```scss
// Sets the global $igx-legacy-support variable to true
@include theme(
  $legacy-support: true
);
```

This is the default way to turn off legacy support for the theme you're building in your `styles.scss` file. If you have styles scoped to specific components, like the `app.component.scss` file, you will have to specify the legacy support there as well.

```scss
// app.component.scss
$igx-legacy-support: true;

$color: color($default-palette, 'primary', 900);
```

We recommend you create a `_variables.scss` file in the `styles` directory of your project where you store all of your global configuration variables. In this way, you can simply import your configuration in every style file.

## Default Palette

Another global variable is `$default-palette`. It is implicitly set when you pass a palette to the `theme` mixin. This variable sets the palette to be used by default by theming functions and mixin when a palette is not explicitly provided.

For instance, the `igx-color` function may not be called with a specific palette in which case the value assigned to `$default-palette` will be used to retreive the color.

You can change the default palette at any time by shadowing its declaration:

```scss
$my-palette: palette(
  $primary: red, 
  $secondary: blue
);

// Sets the global $default-palette variable 
// the value stored in $my-palette
@include theme(
  $palette: $my-palette
);
```

Now, we can assign `$my-palette` to `$default-palette` and store it in our `_variables.scss` file. Then pass either `$default-palette` or `$my-palette` to the theme mixin:

```scss
// _variables.scss

$legacy-support: true; /* not supported in Ignite UI for Angular 13 */

$my-palette: palette(
  $primary: red, 
  $secondary: blue
);

$default-palette: $my-palette;
$igx-legacy-support: $legacy-support;
```

```scss
@use 'variables' as *;

@include theme(
  $palette: $my-palette,
  $legacy-support: $legacy-support
);
```

## Direction

Like `$default-palette`, we allow you to modify the direction (left-to-right vs. right-to-left) of the produced styles. To switch to RTL direction just set the `dir` attribute on either `html` or `body` tag:

```html
<html dir="rtl">
...
  <body>
  </body>
</html>
```

Ignite UI themes provide full RTL support by default.
## Global Variables

Here's a list of global Sass variables forwarded in the main theming module:

| Variable Name | Description                                                                 |
|:-------------:|:---------------------------------------------------------------------------:|
| `$components` | Stores a register of all component themes. Used for tree-shaking.           |
| `$keyframes`  | Stores a register of all keyframe animation mixins. Used for tree-shaking. |

## Scrollbar Styling

The Ignite UI for Angular themes ship with custom scrollbar styles that allow you to change the width and/or the colors of all scrollbars in your application. To apply the included styles, make sure to set the `igx-scrollbar` class to an element that contains your root app component.

<div class="divider"></div>

## Additional Resources
Learn the concepts:

* [Palettes](./palettes.md)
* [Typography](./typography.md)
* [Elevations](./elevations.md)
* [Schemas](./schemas.md)
* [Animations](./animations.md)

Learn how to create application-wide themes:
* [Application Themes](./global-themes.md)

Learn how to create component-specific themes:
* [Component Themes](./component-themes.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
