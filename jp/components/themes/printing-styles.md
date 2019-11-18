---
title: Print Layout
_description: 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, printing styles, @media print 
---

## Printing styles
<p class="highlight">The Ignite UI for Angular theming engine provides some default printing styles, which make sure that our components have at least the bare minimum to look decent when they are printed on a paper</p>
<div class="divider--half"></div>

### How to make use of the printing styles

In order to make use of the printing styles, you need to make sure that your components are the same size as the selected document for print, otherwise, they will be cut off. 

For example, if you are planning to `print` a `Grid` in A4 format, you need to make sure that your `grid` size is exactly the same as the document for print. The `width and height` should match the size of the format that you want to print in. Also, the data needs to fit in that view, without the need for scrollbars to appear.

If you have huge amount of data that requires scrollbars, the data that is currently in the view will be printed and everything else will be cut off.

By `default` the `printing styles` are incorporated in the `compiled CSS`.
If you are not planning to print, we suggest you turn them off in order to reduce the size of the outputted CSS.
 
You can do that in your theme `SCSS` file:
```scss
// Import the IgniteUI themes library first.
@import '~igniteui-angular/lib/core/styles/themes/index';

// Turn the print styles off by setting the $print-layout param to false.
igx-core($print-layout: false)

// Add the theme and the palette.
@include igx-theme($default-palette);
```

Note that even if you have a colorful grid it will appear black and white in order to be as clean and simple as possible and to reduce the use of ink. All the clickable elements in the grid will be omitted since they don't make sense on a paper

If you have other elements on the page and you don't want them to appear in the print document you can add the `.igx-no-print` class that we provide. That class will set the display property on the target element to `display: none` which will make sure that the element will be omitted from the print page, so you can have a nice clean `Data Grid` ready for print.
