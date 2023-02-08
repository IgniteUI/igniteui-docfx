---
title: Customizing Ignite UI Theming - Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Theming engine allows for full application theming customization and styles size optimization.
_keywords: Ignite UI for Angular, Customizing Ignite UI Theming, Optimizing Ignite UI Theming, Angular Theming Engine, Angular Theming
---

# Customizing Ignite UI for Angular Theming

This article will walk you through the details of customizing Ignite UI for Angular application theming and optimizing the size of the produced stylesheet. The article shows details of how the Ignite UI for Angular theming engine works and presents advanced usage of it. The article is very useful for both making full customization of the component styles, such that your Angular application is taylored to match your desired look and feel, and for making your application optimal for deployment by reducing the style sizes down to only what is used by the app.

>[!NOTE] 
> This document describes the theming system in Ignite UI for Angular from version 15 forward. Examples include both using the SASS APIs provided by the theming engine and exposed CSS variables.

## Getting Started

We will be using the [App Builder](https://www.infragistics.com/products/appbuilder) to produce an Angular application and then we will modify the styling of it in the generated repository. We start by creating a new app from "Header + mini nav + content + side pane" template in the App Builder and we add some components to the design surface.

<img class="responsive-img"  src="../../../images/general/theming-walkthrough/getting-started-appbuilder.png" />

Then we generate our app, using Angular as a target, to a GitHub repository, on top of which we will work both from the App Builder and modifying the generated code itself. After cloning the repository and building the project, we get the running Angular application in its initial state.

<img class="responsive-img"  src="../../../images/general/theming-walkthrough/getting-started-runningapp.png" />

As you can see, the application has applied default theming, which is [material light variant](../../themes/sass/presets/material.md). The generated `styles.scss` file looks like this:

```scss
/* You can add global styles to this file, and also import other style files */

// Standard CSS normalize, comment out if not required or using a different module
@use "minireset.css/minireset";
@use "@infragistics/igniteui-angular/theming" as *;

@include core();
@include typography();
@include light-theme($light-material-palette);

body {
  background: hsla(var(--ig-surface-500));
  color: var(--ig-surface-500-contrast);
}

html, body {
  height: 100%;
}

.igx-typography {
  h1, h2, h3, h4, h5, h6, p, .igx-typography__body-1 {
    margin: 0;
  }
}

.outer-wrapper > *:not(router-outlet) {
  width: 100%;
}
```

## Theme Customization

We want a dark variant of the same theme, add our own [color palette](../../themes/palettes.md) to match our branding, and change the font to `Poppins` instead of the default `Titillium Web`, all of which we can change directly through the App Builder and we can push the change as a pull request from the App Builder into the repository.

<img class="responsive-img"  src="../../../images/general/theming-walkthrough/getting-started-appbuilder-theming.png" />

The updated `styles.scss` looks like this:

```scss
@include core();
@include typography($font-family: "Poppins");

$custom-palette: palette(
  $primary: #1028c7,
  $secondary: #e0d94c,
  $surface: #000000,
  $gray: #FFFFFF);
@include theme($palette: $custom-palette, $schema: $dark-material-schema);
```

As you can see, the code generation changed from the specific `@include light-theme($light-material-palette);`, which is the [default theme](../../themes/sass/presets/material.md) and [color palette](../../themes/palettes.md), to a generic [`theme()`](../../themes/sass/global-themes.md) include, which provides as parameters our custom color palette and a [dark material schema](../../themes/sass/schemas.md) for the theming structure. The running Angular app result looks like this now:

<img class="responsive-img"  src="../../../images/general/theming-walkthrough/getting-started-dark-app.png" />

We want to dig deeper and customize a specific [component theme](../../themes/sass/component-themes.md) in our application and we will do this by bringing in the CSS variables for an individual component theme, in this case the grid toolbar theme. 

```scss
@include core();
@include typography($font-family: "Poppins");

$primary: #1028c7;

/* All of the components will use this custom color palette */
$custom-palette: palette(
  $primary: $primary,
  $secondary: #e0d94c,
  $surface: #000000,
  $gray: #FFFFFF);
@include theme($palette: $custom-palette, $schema: $dark-material-schema);

/* Grid Toolbar */
/* All grid toolbars will have custom background and elevations */
$toolbar-theme: grid-toolbar-theme(
  $background-color: $primary,
  $elevations: 0px 15px 30px 0px rgba(0,0,0,0.4)
);
@include css-vars($toolbar-theme);
/* END Grid Toolbar */
```

And the result in our app now looks like this:

<img class="responsive-img"  src="../../../images/general/theming-walkthrough/customizing-updating-toolbar.png" />

The same process can be applied to override and customize any of the component themes individually.

### What can be customized

Ignite UI theming abstracts multiple dimensions of theming and provides for very robust retheming capabilities. Developers and designers can take advantage of the theming engine APIs to make tailored visual design for their applications, which gives them unique look and feel when using Ignite UI for Angular. The theming engine also exposes variables from each of the dimensions, which can be used to apply theming to the rest of the application structure, which is not directly built with Ignite UI for Angular components as UI. The dimensions exposed for modifications are:

 * [Colors](../../themes/sass/palettes.md) (color palette)
 * [Shape](../../themes/sass/roundness.md) (borders and radiuses)
 * [Elevations](../../themes/sass/elevations.md) (shadows)
 * [Typography](../../themes/sass/typography.md) (fonts and font sizes)
 * [Display density](../../display-density.md) (the density of information that is fitted on the screen)

>[!NOTE]
> If you really want a fully custom visual design, you will need to modify all of the supported theming dimensions and you will take full advantage of the SASS APIs. 
> If you just need to change things like the fonts and а few colors, then you can just take a look at the section for palettes and typography. In most cases, all you will need is to change a few CSS variables and you won't need the full SASS APIs.
> We've made this as granular as possible, so modifications can be applied without unexpected side results on the visual design of your applications. 

## Theme Optimization

After making some customizations, we're going to build the application to see what our application theme looks like in terms of size.

## Additional Resources

Related topics:

- [Palettes](./palettes.md)
- [Elevations](./elevations.md)
- [Typography](./typography.md)
- [Theming with Sass](./sass/index.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
