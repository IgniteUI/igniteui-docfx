# Default Theme
The Material theme is the default theme in Ignite UI for Angular. To use it include the `theme` mixins after `core`.  

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($light-material-palette);
```

## Material Light Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include light-theme($light-material-palette);
```

## Material Dark Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include dark-theme($dark-material-palette);
```

Both `light-theme` and `dark-theme` mixins includes the `theme` mixin.
We create those mixins just for your convenience, otherwise, if you want to use the `theme` but with a dark palette and dark schema you have to manually do the following:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();

$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: palette(
    // IMPORTANT, the primary and secondary colors are required
    $primary: $primary-color,
    $secondary: $secondary-color,
    // The $gray will ensure that all the black text, borders, etc will 
    // become a shade of white in order to be visible against a dark background
    $gray: #fff 
    // Since all individual components use the $default-palette by default, if you don't specify the rest of the colors like $info and $error they will use their default values from the $default-palette
);

@include theme($my-color-palette, $schema: $dark-schema);
```

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-theme)
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-dark-theme)
