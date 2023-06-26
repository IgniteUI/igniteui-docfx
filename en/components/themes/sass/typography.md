---
title: Typography
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700 
---

# Typography
<p class="highlight">The Ignite UI for Angular Typography Sass module allows you to modify the typography for all components in your application, specific typographic scale, or specific components.</p>
<div class="divider"></div>

## Overview
An application can define multiple typography `scales` that may share scale categories between one another. A `scale category` is a set of `type styles`, containing information about `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, and `text-transform`.

Ignite UI for Angular exposes 4 default type scales for each of its themes - `$material-type-scale`, `$fluent-type-scale`, `$bootstrap-type-scale`, and `$indigo-type-scale`, which are in turn used by the `typography` mixin to set the typography styles. You can, however, create additional type scales.

In many cases you would only need to make slight modifications to the typography, thus it's recommended that you read the [Typography](../typography.md) section of the CSS Variables documentation first, if you haven't already. Using Sass to modify the typography is only required if you want to make deeper changes pertaining to the entire typographic scale.

## Usage
> [!IMPORTANT]
> By default we don't apply any typography styles. To use our typography in your application you have to set the `ig-typography` CSS class on a top-level element and include the `typography` mixin in your base `.scss` file.

We have selected [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) to be the default font in the Material theme for Ignite UI for Angular. To use it you have to host it yourself, or include it from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet">
```

There are a several mixins and functions that are used to set and retrieve category styles to/from a type scale. Those are:

- `type-style` [function] - Returns a set of style rules to be used by a type scale category.
- `type-scale` [function] - Returns a set of 13 style categories.
- `type-scale-category` [function] - Returns a map of style rules from a type scale and category.
- `type-style` [mixin] - Adds style rules to a selector from a specific type scale and category.
- `type-style-vars` [mixin] - Adds style rules to a selector from a specific type style.
- `typography` [mixin] - Defines the global application typography styles.

Let's take a closer look at what each one of the aforementioned mixins and functions do.

### The Type Style
The `type-style` function is an interface-like function that simply ensures that certain arguments are passed as part of the style set for a scale category. Say, for instance that we want to define a new set of style rules for the `h1` scale category. To do so, we could simply write:

```scss
$h1-style: type-style(
    $font-size: 112px,
    $font-weight: 600,
    $line-height: 96px,
    ...
);
```

### The Type Scale
The type scale produces a map of 13 typography styles used as scale categories. To generate a new type scale, do the following:

```scss
$my-type-scale: type-scale(...);
```

> [!IMPORTANT]
> You have to provide a type style for each of the 13 scale categories. A style can be generated using the `type-style` function as shown above.

```scss
$my-type-scale: type-scale($h1: $h1-style, [$h2...$overline]);
```

You can modify an existing type scale by extending it. To change the `h1` type style of the `$material-type-scale` you can do:

```scss
$my-type-scale: extend(
  $material-type-scale, 
  (
    h1: type-style(...)
  )
);
```

Adding additional type styles to a scale is just as easy:

```scss
$my-type-category: type-style(
    $font-weight: 600,
    $font-size: 42px,
    $text-transform: uppercase,
    ...
);

$my-type-scale: extend(
  $my-type-scale, 
  (
    'my-category': $my-type-category
  )
);
```

### The Typography Mixin

The typography mixin defines the global typography styles for an application, including how the native h1-h6 and p elements are styled.

It currently accepts 2 arguments:
- `$font-family` - The global font family to be used by the application.
- `$type-scale` - The default type scale to be used by the application.

To use the typography styles, include the `typography` mixin anywhere after the `core` mixin and before the `theme` mixin. Let's take advantage of the type scale `$my-type-scale` we defined above and make it the default type scale.

```scss
@include typography(
    $font-family: $material-typeface,
    $type-scale: $my-type-scale,
);
```

We expose four variables for typeface, similar to type-scale - `$material-typeface`, `$fluent-typeface`, `$bootstrap-typeface`, and `$indigo-typeface`. You can use any of them in combination with any type-scale when including the `typography` mixin.

## Custom Type Styles
The `type-style` mixin can be used to retrieve the style rules for a scale category from a specific type scale. Furthermore, it allows you to add additional style rules.

```scss
.my-fancy-h1 {
    @include type-style('h1') {
        color: royalblue;
    }
}
```

The above code will produce a class style selector `.my-fancy-h1`, which contains all of the style rules for the `h1` scale category from `$my-type-scale` with the addition of the `color` property set to the `royalblue` color. Now, if you set the class of any element to `.my-fancy-h1`, it will look like any other `h1` element but be also `royalblue` in color.

## Component Typography

Most of the components in Ignite UI for Angular use scale categories for styling the text. For instance, the `igx-card` component uses the following scale categories:
- `h6` - used for styling card title.
- `subtitle-2` - used for styling card subtitle and small title.
- `body-2` - used for styling card text content.

There are two ways to change the text styles of a card. The first is by modifying the `h6`, `subtitle-2`, and/or `body-2` scales in the ***material type scale*** that we pass to the typography mixin. So if we wanted to make the title in a card smaller, all we have to do is change the font-size of the `h6` scale category.

```scss
// Create a custom h6 scale category style
$my-h6: type-style($font-size: 12px);

// Create a custom type scale with the modified h6
$my-type-scale: extend($material-type-scale, (h6: $my-h6));

// Pass the custom scale to the global typography mixin
@include typography($type-scale: $my-type-scale);
```

> [!WARNING] 
> The above code will modify the `h6` scale category globally, which will affect the look and feel of all components that use the `h6` scale. This is done for consistency so that all `h6` elements look the same across your app. We understand that you may want to apply the modification for `h6` to specific components only, like the `igx-card` component in our case. This is why every component has its own typography mixin, which accepts a category configuration.

```scss
// Create a custom h6 scale category style
$my-h6: type-style($font-size: 12px);

// You can specify which categories from the type sale the card uses
$card-categories: (
    title: 'h6',
    title-small: 'subtitle-2',
    subtitle: 'subtitle-2',
    content: 'body-2',
);

.my-cool-card {
  // Overwrite the 'h6' type style for this scope
  @include type-style-vars('h6', $my-h6);

  // Pass the custom card catergories to the card typography mixin
  @include card-typography($card-categories);
}
```

We no longer include the `typography` mixin by passing it the `$my-type-scale` scale with our modification to the `h6` category. Now all we do is pass the custom h6 style we created to the `type-style-vars` mixin.

## CSS Classes

In addition to adding text styles for all components based on type scale categories, we also style the default h1-h6 and p elements. This allows us to separate semantics from styling. So for instance, even though the `h1` tag has some default styling that we provide when using `typography`, you can modify it to look like an `h3` by giving it a class of `ig-typography__h3`.

```html
<h1 class="ig-typography__h3">Some text</h1>
```

Here's a list of all CSS classes we provide by default:

- `ig-typography__h1`
- `ig-typography__h2`
- `ig-typography__h3`
- `ig-typography__h4`
- `ig-typography__h5`
- `ig-typography__h6`
- `ig-typography__subtitle-1`
- `ig-typography__subtitle-2`
- `ig-typography__body-1`
- `ig-typography__body-2`
- `ig-typography__button`
- `ig-typography__caption`
- `ig-typography__overline`

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
