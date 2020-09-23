---
title: Ignite UI for Angular Frameworks and features 
_description: Learn how to configure ARIA Acessibility and directionality of your application with Ignite UI for Angular
_keywords: aria support, a11y, ignite ui for angular, infragistics
---

# Frameworks and features

### Accessibility and Directionality

This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the `directionality` of the components is.

#### Enabling right-to-left direction (RTL).

`Ignite UI for Angular` library is susceptible to `directionality` manipulation only when setting `dir` attribute on either `html` or `body` tags. Also, keep in mind that runtime changes are not detected.

With that being said, let's move to the following example:

##### Step 1 - Setting the 'dir' attribute on both tags.

```html
<html dir="rtl">
...
  <body dir="ltr">
  </body>
</html>
```

The precedence takes the inner tag which in the above case is the attribute at the `body` tag.

##### Step 2 - Notifying the [theming engine](../../themes/index.md) for the respective direction.

Setting the `$direction` parameter of [igx-core]({environment:sassApiUrl}/index.html#mixin-igx-core) mixin does the magic.

```scss 
@include igx-core($direction: rtl);
```

These are all the steps needed to adjust your content.


### RTL Support 
Most of the components in the framework now have full **right-to-left (RTL)** support via the newly included RTL themes.

For **CSS-based** projects add `node_modules/igniteui-angular/styles/igniteui-angular-rtl.css` to your `angular.json` styles collection.

For **Sass-based** projects pass `$direction` to the `igx-core` mixin in your root stylesheet.

Example:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

Currently the following components have only partial RTL support:

* Grid (igx-grid)
* Tabs (igx-tabs)
