---
title: Typography
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700 
---

# Typography
<p class="highlight">The Ignite UI for Angular Typography Sass module allows you to modify the typography for the entire application, specific typographic scale, or specific components.</p>
<div class="divider"></div>

Ignite UI for Angular follows [The Type System](https://material.io/design/typography/the-type-system.html#) as described in the Material Design specification. The type system is a ***type scale*** consisting of ***13 different category type styles*** used across most components. All of the scale categories are completely reusable and adjustable by the end user.

Here's a list of all 13 category styles as defined in Ignite UI for Angular:
| **Scale Category** | **Font Family** | **Font Weight** | **Font Size** | **Text Transform** | **Letter Spacing** | **Line Height** |
|----------------|-----------------|-----------------|---------------|--------------------|--------------------|-----------------|
| **h1** | Titillium Web | 300 | 6 rem | none | -.09375 rem | 7 rem |
| **h2** | Titillium Web | 300 | 3.75 rem | none | -.0312 rem | 4.4375 rem |
| **h3** | Titillium Web | 400 | 3 rem | none | 0 | 3.5625 rem |
| **h4** | Titillium Web | 400 | 2.125 rem | none | .015625 rem | 2.5 rem |
| **h5** | Titillium Web | 400 | 1.5 rem | none | 0 | 1.75 rem |
| **h6** | Titillium Web | 600 | 1.25 rem | none | .009375 rem | 1.5 rem |
| **subtitle-1** | Titillium Web | 400 | 1 rem | none | .009375 rem | 1.5 rem |
| **subtitle-2** | Titillium Web | 600 | .875 rem | none | .00625 rem | 1.5 rem |
| **body-1** | Titillium Web | 400 | 1 rem | none | .03125 rem | 1.75 rem |
| **body-2** | Titillium Web | 400 | .875 rem | none | .015625 rem | 1.25 rem |
| **button** | Titillium Web | 600 | .875 rem | uppercase | .046875 | 1 rem |
| **caption** | Titillium Web | 400 | .75 rem | none | .025 rem | 1 rem |
| **overline** | Titillium Web | 400 | .625 rem | uppercase | .09375 rem | 1 rem |

<div class="divider"></div>

An application can define multiple `scales` that may share scale categories between one another. A `scale category` is a set of `type styles`, containing information about `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, and `text-transform`.

Ignite UI for Angular defines a `$default-type-scale` (illustrated by the table above), which is in turn used by the `igx-typography` mixin to set the initial typography styles. The user can, however, pass a different type scale to be used by `igx-typography` mixin.

### Usage
> [!IMPORTANT]
> By default we don't apply any typography styles. To use our typography in your application you have to set the `igx-typography` CSS class on a top-level element. All of its children will then use our typography styles.

We have selected [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) to be the default font for Ignite UI for Angular. To use it you have to host it yourself, or include it from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet">
```

There are a several mixins and functions that are used to set and retrieve category styles to/from a type scale. Those are:

- `igx-type-style` [function] - Returns a set of style rules to be used by a type scale category.
- `igx-type-scale` [function] - Returns a set of 13 style categories.
- `igx-type-scale-category` [function] - Returns a map of style rules from a type scale and category.
- `igx-type-style` [mixin] - Adds style rules to a selector from a specific type scale and category.
- `igx-typography` [mixin] - Defines the global application typography styles.


Let's take a closer look at what each one of the aforementioned mixins and functions do.

#### The Type Style
The `igx-type-style` function is an interface-like function that simply ensures that certain arguments are passed as part of the style set for a scale category. Say, for instance, that we want to define a new set of style rules for the `h1` scale category. To do so, we would simply write:

```scss
$h1-style: igx-type-style(
    $font-size: 112px,
    $font-weight: 600,
    $line-height: 96px
);
```

> [!NOTE]
> Any properties that you do not pass, such as `$font-family`, `letter-spacing`, etc. will be automatically replaced with the default values as specified in the `$default-type-scale` for the category you want to use your style for.


#### The Type Scale

The type scale is a map of type styles for all 13 scale categories. To generate a new type map, all you have to do is write the following Sass:

```scss
$my-type-scale: igx-type-scale();
```

This will produce a map, which is exactly the same as the `$default-scale-map` that the `igx-typography` mixin uses by default.

We can use the `$h1-style` we defined in our previous example to produce a slightly modified type scale.

```scss
$my-type-scale: igx-type-scale($h1: $h1-style);
```

Now `$my-type-scale` will store a modified type scale containing the modifications we specified for the `h1` category scale. 

> [!NOTE]
> You can modify as many of the 13 category scales as you want by passing type styles for each one of them. 

#### The Typography Mixin

The typography mixin defines the global typography styles for an application, including how the native h1-h6 and p elements look.

It currently accepts 3 arguments:
- `$font-family` - The global font family to be used by the application.
- `$type-scale` - The default type scale to be used by the application.

To overwrite the default typography, include the `igx-typography` mixin anywhere after the `igx-core` mixin. Let's take advantage of the type scale `$my-type-scale` we defined above and make it the default type scale.

```scss
@include igx-typography(
    $font-family: "'Roboto', sans-serif",
    $type-scale: $my-type-scale,
);
```

### Custom Type Styles
The `igx-type-style` mixin can be used to retrieve the style rules for a scale category from a specific type scale. Furthermore, it allows you to add additional style rules.

```scss
.my-fancy-h1 {
    @include igx-type-style($my-type-scale, 'h1') {
        color: royalblue;
    }
}
```

The above code will produce a class style selector `.my-fancy-h1`, which contains all of the style rules for the `h1` scale category from `$my-type-scale` with the addition of the `color` property set to the `royalblue` color. Now, if you set the class of any element to `.my-fancy-h1`, it will look like any other `h1` element but be also `royalblue` in color.

### Component Typography

Most of the components in Ignite UI for Angular use scale categories for styling the text. For instance, the `igx-card` component uses the following scale categories:
- `h5` - used for styling card title.
- `subtitle-2` - used for styling card subtitle and small title.
- `body-2` - used for styling card text content.

There are two ways to change the text styles of a card. The first is by modifying the `h5`, `subtitle-2`, and/or `body-2` scales in the ***default type scale*** that we pass to the typography mixin. So if we wanted to make the title in a card smaller, all we have to do is change the font-size for the `h5` scale category.

```scss
// Create a custom h5 scale category style
$my-h5: igx-type-style($font-size: 18px);

// Create a custom type scale with the modified h5
$my-type-scale: igx-type-scale($h5: $my-h5);

// Pass the custom scale to the global typography mixin
@include igx-typography($type-scale: $my-type-scale);
```

Note, however, that the above code will modify the `h5` scale category globally, which will affect the look and feel of all components that use the `h5` scale. This is done for consistency so that all `h5` elements look the same across your app. We understand that you may want to apply the modification for `h5` to specific components only, like the `igx-card` component in our case. This is why every component has its own typography mixin, which accepts a type scale itself, as well as a category configuration.

```scss
// Create a custom h5 scale category style
$my-h5: igx-type-style($font-size: 18px);

// Create a custom type scale with the modified h5
$my-type-scale: igx-type-scale($h5: $my-h5);

// Pass the custom scale to the card typography mixin only
@include igx-card-typography($type-scale: $my-type-scale);
```

We no longer include the `igx-typography` mixin by passing it the `$my-type-scale` scale with our modification to the `h5` category. Now all we do is pass the custom scale we created to the `igx-card-typography` mixin. The only component that uses our `$my-type-scale` scale is the card now.

Typography style mixins can be scoped to specific selectors. Say we wanted our custom card typography styles to be applied for all `igx-card` components with class name of `my-cool-card`. 

```scss
//...
.my-cool-card {
    @include igx-card-typography($type-scale: $my-type-scale);
}
```

The typography component mixins take a second argument - `$categories`. It is used to configure which parts of the component use what typography scale category. For instance, if we wanted our custom card to use a different scale category for the title than `h5`, we could change it.

```scss
@include igx-card-typography(
    $type-scale: $my-type-scale,
    $categories: (
        title: 'h6'
    )
);
```

Now the card component will use the `overline` scale category to style the title. The user can completely overhaul the entire card typography by assigning different type scales to the different text parts of the card.

### CSS Classes

In addition to adding text styles for all components based on type scale categories, we also style the default h1-h6 and p elements. We also separate semantics from styling. So for instance, even though the `h1` tag has some default styling that we provide when using `igx-typography`, you can modify it to look like an `h3` by giving it a class of `igx-typography__h3`.

```html
<h1 class="igx-typography__h3">Some text</h1>
```

Here's a list of all CSS classes we provide by default:

- `igx-typography__h1`
- `igx-typography__h2`
- `igx-typography__h3`
- `igx-typography__h4`
- `igx-typography__h5`
- `igx-typography__h6`
- `igx-typography__subtitle-1`
- `igx-typography__subtitle-2`
- `igx-typography__body-1`
- `igx-typography__body-2`
- `igx-typography__button`
- `igx-typography__caption`
- `igx-typography__overline`

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
