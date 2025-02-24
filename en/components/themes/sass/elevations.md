---
title: Elevations/Shadows
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

# Elevations
<p class="highlight">Elevations are used to establish and maintain functional boundaries between Document Object Model trees to enable better functional encapsulation. You can create sets of elevations using our Sass theming library.</p>
<div class="divider"></div>

## Overview
Elevations in Ignite UI for Angular are declared as a map of 25 elements. Each element is a key-value pair where the key is the elevation level name (0..24) and the value is a list of 3 `box-shadow` declarations. We allow you to generate new sets of elevations where you can define the color for the shadows. Additionally, we expose functions for retrieving a specific elevation level from the elevations map. We expose a global variable `$elevations` that is used across components by default. If you've not read the CSS variables [documentation](../elevations.md) related to Elevations, we suggest you do that first before reading on. 

## Usage
The following section demonstrates how to create and retrieve custom elevations.

### Configuring Elevations

To change the colors used by the default elevation presets, you need to configure the elevations preset module.

```scss
// Define the 3 elevation colors
@use 'igniteui-theming/sass/elevations/presets' as * with(
    $color-1: rgb(153, 191, 170), // Umbra
    $color-2: rgb(92, 134, 141), // Penumbra
    $color-3: rgb(92, 61, 70) // Ambient
);

@include elevations($material-elevations);
```

### Retrieving Elevations

To retrieve a set of box-shadows from the elevations map you can pass up to two arguments to the `elevation` function - an elevation map and the wanted elevation level. It returns a list of 3 box shadows for the given level.

If you want to retrieve the elevation from the default `$elevations` map, you can omit the first argument.

```scss
// Returns elevation 1 shadows
$elevation-1: elevation(1);

// Returns elevation 1 shadows
$my-elevation-1: elevation($name: 1);
```

### Passing Elevations to Themes

Several theme mixins allow you to pass an elevations map. Most notably, the `theme` has a parameter named `$elevations` which allows you to update the elevations for all component themes.

Force all component themes to use your custom elevations:

```scss
@include theme(
    //...
    $elevations: $my-elevations
);
```

In addition to this, you can tell the theme to ignore/not use elevations completely:

```scss
@include theme(
    //...
    $elevations: $my-elevations,
    $elevation: false // disables all elevations
);
```

Since the `elevation` function returns a list of box shadows, you can use the return value of that function to modify only certain elevations in your component themes. 

```scss
$card-theme: card-theme(
    $resting-shadow: elevation(10)
);

@include css-vars($card-theme);
```

You can also pass simple box shadows without taking advantage of the `elevation` function:
```scss
$card-theme: card-theme(
    $resting-shadow: 0 10px 10px 10px #666
);

.my-card {
  @include css-vars($card-theme);
}
```
<div class="divider--half"></div>

## Custom Elevations
It is possible to create an elevations map that doesn't adhere to the [Material Design Guidelines](https://material.io/design/environment/elevation.html) as generated by the `elevations` function. Make sure your custom elevation maps contain at least 25 elevation levels. Here's the elevations map signature our themes expect to build correctly:

```scss
// Omitted levels 2 through 23 for brevity
$elevations: (
    0: box-shadow(...),
    1: box-shadow(...),
    ...
    24: box-shadow(...)
);
```

## Elevation Schema Declarations
The elevation levels are also used in theme schema declarations. More on that in the [Schema](schemas.md) section of the documentation.
<div class="divider--half"></div>

## API References

* [Creating Elevations]({environment:sassApiUrl}/index.html#function-elevations)
* [Retrieving Elevations]({environment:sassApiUrl}/index.html#function-elevation)


## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
