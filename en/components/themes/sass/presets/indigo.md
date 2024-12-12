# Switching from Material to Indigo Theme
Since version `10.1` our components include a new theme inspired by our own design language.
 
In order to switch from `Material` to `Indigo`, you can use the [theme]({environment:sassApiUrl}/index.html#mixin-theme) build-in mixin.

## Indigo Light Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $light-indigo-palette, $schema: $light-indigo-schema);
```

## Indigo Dark Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $dark-indigo-palette, $schema: $dark-indigo-schema);
```

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-theme)
