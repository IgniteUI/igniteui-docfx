## Switching from Material to Fluent Theme
Since version `8.2` our components include a new theme inspired by the [`Microsoft Fluent Design System`](https://www.microsoft.com/design/fluent/)  
  
We also added a `Microsoft Word` palette. To use it just replace the `$fluent-excel-palette` with `$fluent-word-palette`:  

In order to switch from `Material` to `Fluent`, you can use one of the build-in mixins.

### Fluent Light Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-fluent-theme($fluent-excel-palette);
```

### Fluent Dark Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-fluent-dark-theme($fluent-word-palette);
```

### API Overview
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-fluent-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-fluent-dark-theme)
