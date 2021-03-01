---
title: Ignite UI for Angular Frameworks and features  | Ignite UI for Angular | Infragistics
_description: Learn how to configure ARIA Accessibility and Directionality of your application with Ignite UI for Angular
_keywords: aria support, a11y, ignite ui for angular, infragistics
---

# Directionality

## Directionality Example
This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the `directionality` of the components is.

<div class="divider--half"></div>
<div class="sample-container loading" style="height: 600px">
    <iframe id="calendar-sample-5-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-rtl-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular RTL Support Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
</div>


## Enabling right-to-left direction (RTL).

`Ignite UI for Angular` library is susceptible to `directionality` manipulation only when setting `dir` attribute on either `html` or `body` tags. Also, keep in mind that runtime changes are not detected.

With that being said, let's move to the following example:

### Step 1 - Setting the 'dir' attribute on both tags.

```html
<html dir="rtl">
...
  <body dir="ltr">
  </body>
</html>
```

The precedence takes the inner tag which in the above case is the attribute at the `body` tag.

### Step 2 - Notifying the [theming engine](../../themes/index.md) for the respective direction.

Setting the `$direction` parameter of [igx-core]({environment:sassApiUrl}/index.html#mixin-igx-core) mixin does the magic.

```scss 
@include igx-core($direction: rtl);
```

These are all the steps needed to adjust your content.


## RTL Support 
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

