---
title: Ignite UI for Angular Frameworks and features  | Ignite UI for Angular | Infragistics
_description: Learn how to configure ARIA Accessibility and Directionality of your application with Ignite UI for Angular
_keywords: aria support, a11y, ignite ui for angular, infragistics
---

# Right to Left (RTL) Support

## RTL Support 

Most of the components in the framework have full **right-to-left (RTL)** support by default. To switch to RTL direction you have to just set the `dir` attribute of the html or the body tag to `rtl`.

Example:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

Currently the following components have only partial RTL support:

* Grid (igx-grid)

## RTL Example
This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the `directionality` of the components is.

<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-rtl-sample" alt="Angular RTL Support Example">
</code-view>



## Enabling right-to-left direction (RTL).

`Ignite UI for Angular` library is susceptible to `directionality` manipulation only when setting `dir` attribute on either `html` or `body` tags. Also, keep in mind that runtime changes are not detected.

With that being said, let's move to the following example:

### Step 1 - Setting the 'dir' attribute on both tags.

```html
<html dir="rtl">
...
</html>
```

or 

```html
<html>
  <body dir="ltr">
  ...
  </body>
</html>
```

> [!NOTE]
> Currently the `Igx-Grid` component only has partial(visual) RTL support.

> [!NOTE]
> ### Breaking Changes in version 13.2.0
> All RTL specific stylesheets have been removed, therefore, users who have previously used *-rtl.css specific themes must switch to the regular theme files.
