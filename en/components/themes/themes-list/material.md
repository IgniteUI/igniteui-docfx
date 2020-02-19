## Default Theme
The Material theme is the default theme in Ignite UI for Angular. To use it include the `igx-theme` mixins after `igx-core`.  

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-theme($default-palette);
```

### Material Light Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-light-theme($default-palette);
```

### Material Dark Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-dark-theme($default-palette);
```

Both `igx-light-theme` and `igx-dark-theme` mixins includes the `igx-theme` mixin.
We create those mixins just for your convenience, otherwise, if you want to use the `igx-theme` but with a dark palette and dark schema you have to manually do the following:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();

$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: igx-palette(
    // IMPORTANT, the primary and secondary colors are required
    $primary: $primary-color,
    $secondary: $secondary-color,
    // The $grays will ensure that all the black text, borders, etc  will 
    // become a shade of whites in order to be visible in the dark theme
    $grays: #fff 
    // Since all individual components use the $default-palette by default, if you don't specify the rest of the colors like $info and $error they will use their default values from the $default-palette
);

$my-palette: igx-palette(
  $primary: #09f,
  $secondary: #ff4ba4,
);

@include igx-theme($my-color-palette, $schema: $dark-schema);
```

### API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)
