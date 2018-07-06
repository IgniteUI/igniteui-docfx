---
title: Theming
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

## Themes

<div class="highlight">With just a few lines of code, you can easily change the theme of your components. Being developed in SASS, the API is easy and allows for theming granularity on different levels from a single component, multiple components, or the entire suite.</div>

### Overview
Since **IgniteUI for Angular** bases its component designs on the **<a href="https://material.io/guidelines/material-design/introduction.html" target="_blank">Material Design Principles</a>**, we try to get as close as possible to colors, sizes, typography, and overall look and feel of our components to those created by Google.

Our approach to theming is based around several simple concepts.

> [!NOTE]
> The Ignite UI for Angular theming library is based on [**Sass**](https://sass-lang.com). If you used the **<a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">Ignite UI CLI</a>** to bootstrap your app, you can specify the style in the **angular.json** config to _scss_, the CLI will take care of compiling the Sass styles for you. If you haven't used Ignite UI CLI then you have to configure your builder to compile Sass styles for you.

### Palettes
<div class="divider--half"></div>

The first concept is the one of palettes of colors. As in any visual tool, colors are the main difference between one application and another. The Material Design Guidelines prescribe predefined palettes of colors that range in hue and lightness for a base color. There's a good reason for that. They really want to ensure good color matching and contrast between the background colors and the foreground text colors. This is great, but limiting at the same time. If you wanted to have your own custom palette that matches your branding, you would be out of luck. We recognize this is a problem, so we invented an algorithm that would generate Material-like palettes from base colors you provide. Even more, we also generate contrast text colors for each hue in the palette.

<div class="divider--half"></div>

### Themes
<div class="divider--half"></div>

The second concept is the one of themes. Palettes, wouldn't do much good if they weren't used by a theme. So we have themes for each component, and a global one, that styles the entire application and every component in it. You simply pass your generated palette to the global theme, we take care of the rest. You can, of course, style each component individually to your liking. We will take a closer look at how to do that later in this article.

### Typography
<div class="divider--half"></div>

The last concept revolves around typography. Although we have a default typeface choice, we really want to give you the power to style your application in every single way. Typography is such an important part of that. We provide a method for changing the font family, the sizes and weights for headings, subheadings, buttons, body text, etc. in your app.
<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

Learn how to configure a global theme:

* [Global Themes](./global-theme.md)
* [Component Themes](./component-themes.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)