---
title: Palettes
_description: 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
---

## Palettes

### Overview

Our palettes accept arguments for `primary`, `secondary`, `info`, `success`, `warn`, and `error` colors. The primary color is the one that will be the more prominent color throughout your application. The secondary color is the one used on elements that are actionable, such as buttons, switches, sliders, etc. The only required arguments we require, though, are the ones for `primary` and `secondary` colors. We default the ones for `info`, `success`, `warn`, and `error` to a predefined set of our choosing.

To get started with our first color palette, create an _scss_ file that would be the base file for your global theme. I will call mine _"my-app-theme.scss"_.

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/core/styles/themes/index";

$company-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: igx-palette(
  $primary: $company-color,
  $secondary: $secondary-color
);
```

Now we have a palette, that contains exactly 74 colors! Whoa, wait, what? How did that happen? You provided 2 and got 74? Where did the other 72 colors come from?
Let's stop here to explain what just happened as it's quite important. When you provided `primary` and `secondary` colors, we took those and generated shades and accent colors for each one. Basically now in your palette you have 2 sub-palettes for `primary` and `secondary` colors. Each sub-palette contains 12 additional color variations based on the original color. 4 of the 12 colors are lighter shades of your original color, and 4 are darker. The remaining 4 colors are more exaggerated 'accent' versions of the original color. With the original color that makes for a total of 13 colors in each palette.

With so many colors in each sub-palette you may be wondering, how on Earth will I know which one is which, right? It's quite simple, really. Each of the colors in the sub-palette has a number. We assign the number `500` to the original color. The lighter shades start from `100` and range to `400`. The darker shades start from `600` and range to `900`. The accent colors have string names `A100`, `A200`, `A400`, and `A700`, respectively. Okay, but now that's only 26 out of 72. Don't worry, there's another sub-palette we give you. One that consists of gray 'colors', called `grays`. It's just like the other two color sub-palettes, but doesn't include any accent variations. Good, now we're up to 26 + 9 for a total of 35 colors. That is still a long way from 74. Where do the other 39 colors come from? Let's solve the final puzzle. Remember you can also have 4 additional colors for `info`, `success`, `warn` and `error`. So that leaves another 35 colors unaccounted for. Remember the count for the `primary`, `secondary`, and `grays` sub-palettes was exactly 35? The other 35 remaining colors are contrast text colors for each of the colors in the `primary`, `secondary`, and `grays` sub-palettes.

Got it? Good! But how does one access any of the colors in the palette?

<div class="divider"></div>

### Sub-Palette Colors

We provide a function that is easy to remember and use `igx-color`. It takes three arguments - `palette`, `color`, and `variant`;

```scss
$my-primary-600: igx-color($my-palette, "primary", 600);
$my-primary-A700: igx-color($my-palette, "secondary", "A700");
$my-warning-color: igx-color($my-palette, "warn");
// sample usage

.my-awesome-class {
  background: $my-primary-600;
  border-color: $my-primary-A700;
}

.warning-bg {
  background: $my-warning-color;
}
```

<div class="divider"></div>

### Contrast Text Colors

Similar to how we get sub-palette colors, there's a way to get the contrast text color for each of the colors in the sub-palettes.

```scss
$my-primary-800: igx-color($my-palette, "primary", 600);
$my-primary-800-text: igx-contrast-color($my-palette, "primary", 600);
// sample usage

.my-awesome-article {
  background: $my-primary-800;
  color: $my-primary-800-text;
}
```

### Color Classes

### Default Colors

#### Base Colors
<article class="row">
    <div class="col-md-4 col-sm-12">
        <div class="color-container primary-color">
            <h4 class="color-title">Primary Color</h4>
            <div class="color-values">
                <span class="variable">$ocean-blue</span>
                <span class="hex">#0375BE</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container secondary-color">
            <h4 class="color-title">Secondary Color</h4>
            <div class="color-values">
                <span class="variable">$vivid-cerise</span>
                <span class="hex">#E41C77</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container accent-color">
            <h4 class="color-title">Accent Color</h4>
            <div class="color-values">
                <span class="variable">$yellow-orange</span>
                <span class="hex">#FBB13C</span>
            </div>
        </div>
    </div>
</article>

<div class="divider"></div>

#### Supporting Colors
<article class="row">
    <div class="col-md-4 col-sm-12">
        <div class="color-container success-color">
            <h4 class="color-title">Success Color</h4>
            <div class="color-values">
                <span class="variable">$success-color</span>
                <span class="hex">#4CAF50</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container warn-color">
            <h4 class="color-title">Warning Color</h4>
            <div class="color-values">
                <span class="variable">$warn-color</span>
                <span class="hex">#FBB13C</span>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="color-container error-color">
            <h4 class="color-title">Error Color</h4>
            <div class="color-values">
                <span class="variable">$error-color</span>
                <span class="hex">#F44336</span>
            </div>
        </div>
    </div>
</article>

<div class="divider"></div>

#### Color Palettes
<article class="color-palettes row">
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container primary-color">
            <h4 class="color-title">Primary Color</h4>
            <div class="color-values">
                <span class="variable">500 ($primary-color)</span>
                <span class="hex">#0375BE</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100</span>
                <span class="hex">#82CEFF</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">#70C0F5</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">#1D8CD3</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400</span>
                <span class="hex">#0A80CC</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($primary-color)</span>
                <span class="hex">#0375BE</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600</span>
                <span class="hex">#0166A7</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">#015A94</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800</span>
                <span class="hex">#014E80</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900</span>
                <span class="hex">#01416A</span>
            </div>
        </div>
    </div>
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container secondary-color">
            <h4 class="color-title">Secondary Color</h4>
            <div class="color-values">
                <span class="variable">500 ($secondary-color)</span>
                <span class="hex">#E41C77</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100</span>
                <span class="hex">#FCC5DE</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">#E17FAB</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">#DC5491</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400</span>
                <span class="hex">#DF3683</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($secondary-color)</span>
                <span class="hex">#E41C77</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600</span>
                <span class="hex">#DC0A6A</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">#D30160</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800</span>
                <span class="hex">#BF0157</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900</span>
                <span class="hex">#A5044D</span>
            </div>
        </div>
    </div>
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container accent-color">
            <h4 class="color-title">Accent Color</h4>
            <div class="color-values">
                <span class="variable">500 ($accent-color)</span>
                <span class="hex">#FBB13C</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100</span>
                <span class="hex">#FCF0DD</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">#F4D4A2</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">#F2C173</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400</span>
                <span class="hex">#F6B856</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($accent-color)</span>
                <span class="hex">#FBB13C</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600</span>
                <span class="hex">#FFA81E</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">#FFA10C</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800</span>
                <span class="hex">#F69701</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900</span>
                <span class="hex">#E08901</span>
            </div>
        </div>
    </div>
    <div class="color-palette col-md-6 col-sm-12">
        <div class="color-container gray-color">
            <h4 class="color-title">Gray Color</h4>
            <div class="color-values">
                <span class="variable">500 ($gray)</span>
                <span class="hex">rgba(0, 0, 0, .38)</span>
            </div>
            <div class="color-values m-100">
                <span class="variable">100 ($off-white)</span>
                <span class="hex">rgba(0, 0, 0, .04)</span>
            </div>
            <div class="color-values m-200">
                <span class="variable">200</span>
                <span class="hex">rgba(0, 0, 0, .08)</span>
            </div>
            <div class="color-values m-300">
                <span class="variable">300</span>
                <span class="hex">rgba(0, 0, 0, .12)</span>
            </div>
            <div class="color-values m-400">
                <span class="variable">400 ($lightgray)</span>
                <span class="hex">rgba(0, 0, 0, .26)</span>
            </div>
            <div class="color-values m-500">
                <span class="variable">500 ($gray)</span>
                <span class="hex">rgba(0, 0, 0, .38)</span>
            </div>
            <div class="color-values m-600">
                <span class="variable">600 ($darkgray)</span>
                <span class="hex">rgba(0, 0, 0, .54)</span>
            </div>
            <div class="color-values m-700">
                <span class="variable">700</span>
                <span class="hex">rgba(0, 0, 0, .62)</span>
            </div>
            <div class="color-values m-800">
                <span class="variable">800 ($off-black)</span>
                <span class="hex">rgba(0, 0, 0, .74)</span>
            </div>
            <div class="color-values m-900">
                <span class="variable">900 ($black)</span>
                <span class="hex">rgba(0, 0, 0, .87)</span>
            </div>
        </div>
    </div>
</article>