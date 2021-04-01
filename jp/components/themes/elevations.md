---
title: Elevations (Shadows)
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_language: ja
---

# Elevations

<p class="highlight">Elevations are used to establish and maintain functional boundaries between Document Object Model trees to enable better functional encapsulation. The implementation of the Elevations in Ignite UI for Angular is modeled after the [Elevations in Material Design](https://material.io/design/environment/elevation.html#elevation-in-material-design).</p>
<div class="divider"></div>

## Overview

Shadows in Ignite UI for Angular closely follow the Material Design guidelines for establishing depth hierarchy based on 25 elevation levels. The size of the shadow cast is related to the elevation level number. The higher the elevation level number, the larger the shadow will be. Elevations in Ignite UI for Angular are exposed as CSS variables. Each variable stores a set of 3 `box-shadows`. These `box-shadows` represent the umbra, penumbra, and antumbra elements that are the properties of shadows as observed in the real world.

Here's a list of resting elevations as used in various components in Ignite UI for Angular in the Material Theme and their corresponding CSS variable names:

| Component                                       | Default Elevation Level | CSS Variable       |
| ----------------------------------------------- | ----------------------- | ------------------ |
| banner, button, toast                           | 0                       | --igx-elevation-0  |
| badge, carousel buttons, search input           | 1                       | --igx-elevation-1  |
| button group, raised button, card, grid, switch | 2                       | --igx-elevation-2  |
| navbar, snackbar                                | 4                       | --igx-elevation-4  |
| floating action button,                         | 6                       | --igx-elevation-6  |
| bottom navigation, ghost chip, dropdown         | 8                       | --igx-elevation-8  |
| navdrawer                                       | 16                      | --igx-elevation-16 |
| dialog                                          | 24                      | --igx-elevation-24 |

As you can see from the `CSS Variable` column, all elevations are defined in the following format `--igx-elevation-[level]`. As mentioned, the elevation level number go from 0 through 24(inclusive).

## Usage

To begin using elevations in your own components all you need is to reference the variable name of the desired level.

```css
.floaty-element {
  box-shadow: var(--igx-elevation-6);
}
```

Changing the elevation in an existing component theme works in a similar way.

```css
[igxButton="raised"] {
  --resting-shadow: var(--igx-elevation-4);
  --hover-shadow: var(--igx-elevation-12);
  --focus-shadow: var(--igx-elevation-12);
}
```

The documentation for each component theme lists the default elevation used in each of its states. If elevation is not listed, the component doesn't use any of the predefined elevation levels.

## Defining Elevations

Updating the default elevations works in a similar way to updating the palette colors. You simply need to reassign the variable to a different value. With elevations, make sure the value is `box-shadow`.

Example:

```css
/* styles.css */
:root {
    --igx-elevation-1: 0 2px 6px 0 rgba(0, 0, 0, .18);
    --igx-elevation-2: 0 3px 9px 0 rgba(0, 0, 0, .24);
}
```

Now, all components that use elevation levels 1 and 2 will have their shadows updated.

### Shadowing
You can shadow the globally set elevations for a specific scope only. We already saw that the button component uses elevation level 2 for its resting state. Level 2 is also used by the card and grid components. So to change the shadows for all three, all you need to do is:

```css
[igxButton="raised"],
igx-grid,
igx-card {
    --igx-elevation-2: 0 3px 9px 0 rgba(0, 0, 0, .24);
}
```
This will set the `--resting-shadow` in the raised button and card, and the `--grid-shadow` in the grid, to the value assigned to `--igx-elevation-2`;

Elevations can be created and consumed in a more powerful way using Sass as well. Check out the related topics below to learn more.

## その他のリソース

Related topics:

- [Elevations with Sass](./sass/elevations.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
