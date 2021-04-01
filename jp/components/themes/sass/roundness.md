---
title: Roundness
_description: Ignite UI for Angular allow you to change the shape of components by changing their border-radius.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
_language: ja
---

# Roundness
<p class="highlight">Ignite UI for Angular allows you to change the shape of components by setting their roundness to a value between 0 and 1.</p>
<div class="divider"></div>

## Overview
Roundness, as any other property, is set in the component theme or schema like it's shown in the examples bellow.

```scss
$_material-shape-button: (
    border-radius: .2
);
```

As you can see from the example above, the component schema for the [Button Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme) defines the default border-radius for all types of buttons.

Let's look at how this works. 

The default `border-radius` value is set to `.2`, which in the end will be resolved to 4px. This fraction, between 0 and 1 represents the minimum and maximum allowed roundness. 0 is the minimum border-radius, i.e. 0px and 1 is the maximum or 20px. The minimum and maximum pixel values are defined for each individual component in its Sass theme.

We decided to not limit you to fractions only. You can use whatever unit you want - pixels, relative units (em or rem), etc., allowing you to overwrite the implicit border radius limits.

If you decide to go with fractions, you will automatically be limited by the theming engine to min and max values for each component.

## Usage 
Let's see how we can change the default values for the buttons from the example above.

Using the theme mixin:
```scss
$my-button-theme: igx-button-theme(
    $border-radius: .5 .2 .5 .2, // resolves to 10px 4px 10px 4px
);

@include igx-button($my-button-theme);
```

Using a component schema:
```scss
$my-flat-button: extend(
    $_material-flat-button,
    (
        border-radius: .5 .2 .5 .2
    )
);

$my-light-schema: extend(
    $_material-light-schema, 
    (
        igx-button: $my-flat-button
    )
);

@include igx-theme(
    $palette: $light-material-palette,
    $schema: $my-light-schema
);
```

Using either approach, the result from the above code snippets is:

<div class="sample-container loading" style="height: 250px">
    <iframe id="buttons-roundness-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/buttons-roundness-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-roundness-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-roundness-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

## Baseline Roundness
The table below shows the default roundness for each component and its min and max boundaries:

|                     | **Corners can be shaped?** | **Min/Max boundaries** | **Baseline theme values** |
|---------------------|----------------------------|------------------------|---------------------------|
| **Button(Flat)**    | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **Button(Raised)**  | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **button(Fab)**     | Yes; Yes; Yes; Yes;        | 12px - 28px            | 28px                      |
| **button(Icon)**    | Yes; Yes; Yes; Yes;        | 0 - 18px               | 18px                      |
| **Button-group**    | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **Chip**            | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **Card**            | Yes; Yes; Yes; Yes;        | 0 - 24px               | 4px                       |
| **Carousel**        | Yes; Yes; Yes; Yes;        | 0 - 36px               | 0                         |
| **Dialog**          | Yes; Yes; Yes; Yes;        | 0 - 36px               | 4px                       |
| **Drop-down**       | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **Expansion panel** | Yes; Yes; Yes; Yes;        | 0 - 16px               | 0                         |
| **input(Border)**   | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **input(Box)**      | Yes; Yes; No; No;          | 0 - 20px               | 4px 4px 0 0               |
| **input(Search)**   | Yes; Yes; Yes; Yes;        | 0 - 20px               | 4px                       |
| **List**            | Yes; Yes; Yes; Yes;        | 0 - 24px               | 0                         |
| **List item**       | Yes; Yes; Yes; Yes;        | 0 - 24px               | 0                         |
| **Navdrawer**       | Yes; Yes; Yes; Yes;        | 0 - 36px               | 0                         |
| **Snackbar**        | Yes; Yes; Yes; Yes;        | 0 - 24px               | 4px                       |
| **Tooltip**         | Yes; Yes; Yes; Yes;        | 0 - 16px               | 4px                       |
| **Toast**           | Yes; Yes; Yes; Yes;        | 0 - 26px               | 26px                      |


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
