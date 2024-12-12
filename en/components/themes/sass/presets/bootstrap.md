# Switching from Material to Bootstrap Theme
Since version `9.0` our components include a new theme inspired by [Bootstrap 4](https://getbootstrap.com/) and [ng-bootstrap](https://ng-bootstrap.github.io/#/home).
In order to switch from `Material` to `Bootstrap`, you can use the [theme]({environment:sassApiUrl}/index.html#mixin-theme) build-in mixin.

## Bootstrap Light Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $light-bootstrap-palette, $schema: $light-bootstrap-schema);
```

## Bootstrap Dark Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($palette: $dark-bootstrap-palette, $schema: $dark-bootstrap-schema);
```

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-theme)
