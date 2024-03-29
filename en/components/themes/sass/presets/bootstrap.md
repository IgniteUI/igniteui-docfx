# Switching from Material to Bootstrap Theme
Since version `9.0` our components include a new theme inspired by [Bootstrap 4](https://getbootstrap.com/) and [ng-bootstrap](https://ng-bootstrap.github.io/#/home).
In order to switch from `Material` to `Bootstrap`, you can use one of the built-in mixins.

## Bootstrap Light Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include bootstrap-light-theme($light-bootstrap-palette);
```

## Bootstrap Dark Theme
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include bootstrap-dark-theme($dark-bootstrap-palette);
```

## API Overview
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-bootstrap-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-bootstrap-dark-theme)
