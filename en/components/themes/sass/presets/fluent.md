# Switching from Material to Fluent Theme
Since version `8.2` our components include a new theme inspired by the [`Microsoft Fluent Design System`](https://www.microsoft.com/design/fluent/)  
 
In order to switch from `Material` to `Fluent`, you can use the [theme]({environment:sassApiUrl}/index.html#mixin-theme) build-in mixin.  

We also support Word and Excel palettes. To use them just pass one of the two *__light__* maps `$light-fluent-excel-palette`, `$light-fluent-word-palette` or one of the two *__dark__* maps `dark-fluent-excel-palette`, `$light-fluent-word-palette` to the `theme` mixin:

## Fluent Light Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $light-fluent-palette, $schema: $light-fluent-schema);
```

## Fluent Dark Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $dark-fluent-palette, $schema: $dark-fluent-schema);
```

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-theme)
