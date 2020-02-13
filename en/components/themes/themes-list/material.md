### Material theme
Material theme is the default theme for igniteUI for Angular

in order to use it, include one of the following mixins:
```scss
@include igx-theme($default-palette);
```

For the `light` version of the `Material theme` you can use the following mixin: 
```scss
@include igx-light-theme($default-palette);
```

For the `Dark` version of the `Material theme` you can use the following mixin: 
```scss
@include igx-dark-theme($default-palette);
```

Both `igx-light-theme` and `igx-dark-theme` mixins extend the `igx-theme` mixin.
We create those mixins just for your convenience, otherwise, if you want to use the `igx-theme` but with a dark palette and dark schema you have to manually do the following:

```scss
$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: igx-palette(
    $primary: $primary-color,
    $secondary: $secondary-color,
    // This will ensure that all the black text, borders, etc  will 
    // become some shade of white in order to be visible in the dark theme
    $grays: #fff 
    // If you don't specify the rest of the colors like $info and $error they will use their default values from the $default-palette 
);

$my-palette: igx-palette(
  $primary: #09f,
  $secondary: #ff4ba4,
);
@include igx-theme($my-color-palette, $schema: $dark-schema);
```
