# Switching from Material to Bootstrap Theme
Since version `9.0` our components include a new theme inspired by [Bootstrap 4](https://getbootstrap.com/) and [ng-bootstrap](https://ng-bootstrap.github.io/#/home).
In order to switch from `Material` to `Bootstrap`, you can use one of the built-in mixins.

## Bootstrap Light Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-bootstrap-light-theme($light-bootstrap-palette);
```

## Bootstrap Dark Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-bootstrap-dark-theme($dark-bootstrap-palette);
```

## API Overview
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-dark-theme)
