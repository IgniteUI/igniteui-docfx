---
title: Theming Library Configuration
_description: The Ignite UI for Angular Theming provides several global variables that let you configure how the theming engine works.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Configuration

<div class="highlight">The Ignite UI for Angular theming library exposes several input arguments variables that let you configure how the theming engine works.</div>
<div class="divider"></div>

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
