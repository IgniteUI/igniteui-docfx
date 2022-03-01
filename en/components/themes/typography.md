---
title: Typography
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_extraFont: https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700
---

# Typography

<p class="highlight">The typography in Ignite UI for Angular is modeled after the [Material Type System](https://material.io/design/typography/the-type-system.html#). It's non-intrusive and optional, allowing you to modify the type styles using CSS only.</p>
<div class="divider"></div>

## Overview
The type system is a **_type scale_** consisting of **_13 different category type styles_** used across most components. All of the scale categories are completely reusable and adjustable by the end user.

Here's a list of all 13 category styles as defined for the Material Theme in Ignite UI for Angular:
| **Scale Category** | **Font Family** | **Font Weight** | **Font Size** | **Text Transform** | **Letter Spacing** | **Line Height** | **CSS Class**                |
|--------------------|-----------------|-----------------|---------------|--------------------|--------------------|-----------------|------------------------------|
| **h1**             | Titillium Web   | 300             | 6 rem         | none               | -.09375 rem        | 7 rem           | `igx-typography__h1`         |
| **h2**             | Titillium Web   | 300             | 3.75 rem      | none               | -.0312 rem         | 4.4375 rem      | `igx-typography__h2`         |
| **h3**             | Titillium Web   | 400             | 3 rem         | none               | 0                  | 3.5625 rem      | `igx-typography__h3`         |
| **h4**             | Titillium Web   | 400             | 2.125 rem     | none               | .015625 rem        | 2.5 rem         | `igx-typography__h4`         |
| **h5**             | Titillium Web   | 400             | 1.5 rem       | none               | 0                  | 1.75 rem        | `igx-typography__h4`         |
| **h6**             | Titillium Web   | 600             | 1.25 rem      | none               | .009375 rem        | 1.5 rem         | `igx-typography__h4`         |
| **subtitle-1**     | Titillium Web   | 400             | 1 rem         | none               | .009375 rem        | 1.5 rem         | `igx-typography__subtitle-1` |
| **subtitle-2**     | Titillium Web   | 600             | .875 rem      | none               | .00625 rem         | 1.5 rem         | `igx-typography__subtitle-2` |
| **body-1**         | Titillium Web   | 400             | 1 rem         | none               | .03125 rem         | 1.75 rem        | `igx-typography__body-1`     |
| **body-2**         | Titillium Web   | 400             | .875 rem      | none               | .015625 rem        | 1.25 rem        | `igx-typography__body-2`     |
| **button**         | Titillium Web   | 600             | .875 rem      | uppercase          | .046875            | 1 rem           | `igx-typography__button`     |
| **caption**        | Titillium Web   | 400             | .75 rem       | none               | .025 rem           | 1 rem           | `igx-typography__caption`    |
| **overline**       | Titillium Web   | 400             | .625 rem      | uppercase          | .09375 rem         | 1 rem           | `igx-typography__overline`   |

<div class="divider"></div>

Each theme defines its own type scale. This means each one of the themes we ship - Material, Fluent, Boostrap, and Indigo will have its own type scale. They all share the same _scale categories_, but can have different font family, weight, size, text transform, letter spacing, and line height.

## Usage
> [!IMPORTANT]
> By default we don't apply any typography styles. To use our typography in your application you have to set the `typography` CSS class on a top-level element. All of its children will then use our typography styles.

We have selected [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) to be the default font for the Material Theme in Ignite UI for Angular. To use it you have to host it yourself, or include it from Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700"
  rel="stylesheet"
/>
```

Enable the typography styles by setting `typography` class on the body element.

```html
<!-- index.html -->
<body class="igx-typography">
  <app-root></app-root>
</body>
```

### Changing the Font Family

To change the font family in all components, all you have to do is overwrite the `typography` class with the your desired font-family value;

```css
/* styles.css */
.igx-typography {
    font-family: "Open Sans", sans-serif;
}
```

## Type Styles

The type styles are used internally by most of the components in Ignite UI for Angular. For instance, the documentation says the button component uses the button type style. This means that we can copy and modify the typography of the button component by ovewriting the included `igx-typography__button` class.

Let's say we want to change the text of the button in the Material Theme to always be lowercase.

```css
.igx-typography .igx-typography__button {
    text-transform: lowercase;
}
```

```html
<!-- app.component.html -->
<button [igxButton] class="igx-typography__button">Flat</button>
```

Some components have a lot of elements buried deep in their templates. Those are a little tricky to modify directly using CSS classes. At the time of writing this article, the only way to completely modify the typography of such components you'd have to fall back to our [Sass typography](./sass/typography.md) mixins. We are currently working on providing better ways of modifying the typography for individual components via CSS variables.

<div class="divider"></div>

## Additional Resources

- [Typography with Sass](./sass/typography.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
