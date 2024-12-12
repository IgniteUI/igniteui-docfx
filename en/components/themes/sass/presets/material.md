# Default Theme
The *__light__* version of the Material theme is the default theme in Ignite UI for Angular. To use it you need to include the `theme` mixin after the `core` mixin.  

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $light-material-palette, $schema: $light-material-schema);

// We can also include the Material font and font scaling
@include typography($font-family: $material-typeface, $type-scale: $material-type-scale);
```

## Material Dark Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $dark-material-palette, $schema: $dark-material-schema);

@include typography($font-family: $material-typeface, $type-scale: $material-type-scale);
```

If you want to use only the dark schema, but with your own palette you have to manually do the following:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();

$primary-color: #2ab759;
$secondary-color: #f96a88;
$surface-color: #303030;

$my-color-palette: palette(
    // IMPORTANT, the primary and secondary colors are required
    $primary: $primary-color,
    $secondary: $secondary-color,
    $surface: $surface-color,
    // The $gray will ensure that all the black text, borders, etc will 
    // become a shade of white in order to be visible against a dark background
    $gray: #fff 
    // Since all individual components use the $default-palette by default, if you dont specify the rest of the colors like $info and $error they will use their default values from the $default-palette
);

@include theme($my-color-palette, $schema: $dark-schema);
```

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-theme)

