---
title: Theming Library Configuration
_description: The Ignite UI for Angular Theming provides several global variables that let you configure how the theming engine works.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Configuration

<div class="highlight">The Ignite UI for Angular theming library exposes several input arguments variables that let you configure how the theming engine works.</div>
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

$color: color($light-material-palette, 'primary', 900);
```

We recommend you create a `_variables.scss` file in the `styles` directory of your project where you store all of your global configuration variables. In this way, you can simply import your configuration in every style file.

## Global Variables

Here's a list of global Sass variables forwarded in the main theming module:

| Variable Name | Description                                                                 |
|:-------------:|:---------------------------------------------------------------------------:|
| `$components` | Stores a register of all component themes. Used for tree-shaking.           |
| `$dropped-themes`  | Stores a register of dropped themes. Used for tree-shaking. |

## Scrollbar Styling

The Ignite UI for Angular themes ship with custom scrollbar styles that allow you to change the width and/or the colors of all scrollbars in your application. To apply the included styles, make sure to set the `ig-scrollbar` class to an element that contains your root app component.

To customize the scrollbar further, you can create a new theme that extends the existing [`scrollbar-theme`]({environment:sassApiUrl}/index.html#function-scrollbar-theme) and accepts the `$schema`, `$thumb-background`, `$track-background` and the `$scrollbar-size` parameters.

```scss
// app.component.scss
$my-scrollbar-theme: scrollbar-theme($thumb-background: black, $track-background: gray);

@include scrollbar($my-scrollbar-theme);
```
The parameters can also be directly applied to the scrollbar function to prevent the creation of additional themes.
```scss
// app.component.scss
@include scrollbar(scrollbar-theme($scrollbar-size: 16px));
```

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
