---
title: Angular Grid Lite Theming
_description: Styling the Grid Lite. See demos & examples!
_keywords: styling, theming, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Styles and themes

The Grid Lite comes with four distinct themes - Bootstrap, Material, Fluent and Indigo. The grid and its UI components have the themes baked in, but the component requires a global stylesheet for palettes, typography and other global configurations to work.

## Loading a base themes

Depending on your project type, setup and build configuration the method of how to include one of the files below will vary. If you are using a framework/build tool refer to its documentation on how to add external styles to your output bundle.

As a rule of thumb, you can always copy the `themes` folder to your assets directory and link the theme from there in your index.html.

```html
<link rel="stylesheet" href="./assets/themes/light/bootstrap.css"
```

| Theme     | Variant | Path                                                           |
| --------- | ------- | -------------------------------------------------------------- |
| Bootstrap | Light   | node_modules/igniteui-webcomponents/themes/light/bootstrap.css |
| Bootstrap | Dark    | node_modules/igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material  | Light   | node_modules/igniteui-webcomponents/themes/light/material.css  |
| Material  | Dark    | node_modules/igniteui-webcomponents/themes/dark/material.css   |
| Fluent    | Light   | node_modules/igniteui-webcomponents/themes/light/fluent.css    |
| Fluent    | Dark    | node_modules/igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo    | Light   | node_modules/igniteui-webcomponents/themes/light/indigo.css    |
| Indigo    | Dark    | node_modules/igniteui-webcomponents/themes/dark/indigo.css     |

<!--
In the sample below, you can preview all the default base themes.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/styling-config-themes" alt="Angular Grid Lite Styling Config Themes">
</code-view>

-->

## Creating custom themes

Aside from the default themes shipped with the `igniteui-grid-lite` package, you can also create and modify your own to match your project identity and branding.

---

Refer to the <a href="https://github.com/IgniteUI/igniteui-theming#readme" target="_blank">Ignite UI theming package</a> wiki
for documentation and usage of both the SCSS and CSS interfaces.

---

```scss
@use 'node_modules/igniteui-theming' as *;

// Our dark theme
$my_dark_palette: palette(
  $primary: #dab785,
  $secondary: #d5896f,
  $surface: #031d44,
  $gray: #04395e,
);

// Our light theme
$my-light-palette: palette(
  $primary: #c1292e,
  $secondary: #f1d302,
  $surface: #fdfffc,
  $gray: #235789,
);

.custom-light {
  @include palette($my_light_palette);
  @include typography('"Roboto Condensed", sans-serif', $bootstrap-type-scale);
}

.custom-dark {
  @include palette($my_dark_palette);
  @include typography('"Merriweather Sans", sans-serif', $bootstrap-type-scale);
}
```

Here is an example showcasing the custom theming from above.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/styling-custom" alt="Angular Grid Lite Styling Custom Theme">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`
-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

* [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)