---
title: Ignite UI for Angular Frameworks and features  | Ignite UI for Angular | Infragistics
_description: Learn how to configure ARIA Accessibility and Directionality of your application with Ignite UI for Angular
_keywords: aria support, a11y, ignite ui for angular, infragistics
---

# Right to Left (RTL) Support

## RTL Support 

Most of the components in the framework have full **right-to-left (RTL)** support by default. To switch to RTL direction you have to just set the `dir` attribute of the html or the body tag to `rtl`.

Example:

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

>[!NOTE]
>Currently the `Igx-Grid` component have only partial RTL support.

>[!NOTE]
> ### Breaking Changes in version 13.2.0
> All RTL specific stylesheets have been removed, therefore, users who have previously used *-rtl.css specific themes must switch to the regular theme files.