---
title: Roundness
_description: Ignite UI for Angular allow you to change the shape of components by changing their border-radius.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
---

# Components roundness 
<p class="highlight">In Ignite UI for Angular we allows you to change the shape of components by changing their border-radius</p>

<div class="divider--half"></div>

## Overview
Border radius as any other property is set through the theme schema like it's shown in the example bellow.

```scss
$_light-button: (
    flat-border-radius: .2,
    raised-border-radius: .2,
    fab-border-radius: 1,
    icon-border-radius: 1,
);
```

As you can see from the example above, the component schema for [Button theme]({environment:sassApiUrl}/index.html#function-igx-button-theme) defines the default border-radius for all types of buttons.

Let's look at how things work. 
The default value for "flat-border-radius" is set to 0.2 which in the end will be resolved to 4px, it is actually a fraction between 0 and 20px where 0 is the minimum border-radius and 20px is the maximum. 

We decided to not limit you to fractions only. You can use whatever unit you want - pixels, relative units like em or rem, etc., allowing you to overwrite the implicit border radius limits.

If you decide to go with fractions, you will automatically be limited by the theming engine to min and max boundary for each component.

## How to use?
Let's see how we can change the default values for the buttons from the example above.

```scss
// In the context of the button the min and max values are 0 - 20px, 
// For all baseline values see the table at the bottom of the page

$myButtons-theme: (
    $flat-border-radius: .5, // will resolve to 10px
    $raised-border-radius: 30px, // Will resolve to 30px
    $fab-border-radius: 10%, // Will resolve to 10%
    $icon-border-radius: .5 .2 .5 .2, // Will resolve to 10px 4px 10px 4px
);

@include igx-button($myButtons-theme);
```

The result from the above code snippets is:

<div class="sample-container loading" style="height: 250px">
    <iframe id="buttons-roundness-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/buttons-roundness-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-roundness-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-roundness-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

## Baseline roundness values
The table shows the default border-radius for each component and its min and max boundaries

|                        | **Corners can be shaped?** | **Min/Max boundaries** | **Baseline theme values** |
|------------------------|----------------------------|-----------------------|---------------------------|
| **Button(Flat)**       | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Button(Raised)**     | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **button(Fab)**        | Yes; Yes; Yes; Yes;        | 12px - 28px           | 28px                      |
| **button(Icon)**       | Yes; Yes; Yes; Yes;        | 0 - 18px              | 18px                      |
| **Button-group**       | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Chip**               | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Card**               | Yes; Yes; Yes; Yes;        | 0 - 24px              | 4px                       |
| **Carousel**           | Yes; Yes; Yes; Yes;        | 0 - 36px              | 0                         |
| **Dialog**             | Yes; Yes; Yes; Yes;        | 0 - 36px              | 4px                       |
| **Drop-down**          | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **Expansion panel**    | Yes; Yes; Yes; Yes;        | 0 - 16px              | 0                         |
| **input(Border)**      | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **input(Box)**         | Yes; Yes; No; No;          | 0 - 20px              | 4px 4px 0 0               |
| **input(Search)**      | Yes; Yes; Yes; Yes;        | 0 - 20px              | 4px                       |
| **List**               | Yes; Yes; Yes; Yes;        | 0 - 24px              | 0                         |
| **List item**          | Yes; Yes; Yes; Yes;        | 0 - 24px              | 0                         |
| **Navdrawer**          | Yes; Yes; Yes; Yes;        | 0 - 36px              | 0                      |
| **Snackbar**           | Yes; Yes; Yes; Yes;        | 0 - 24px              | 4px                       |
| **Tooltip**            | Yes; Yes; Yes; Yes;        | 0 - 16px              | 4px                       |
| **Toast**              | Yes; Yes; Yes; Yes;        | 0 - 26px              | 26px                       |


<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
