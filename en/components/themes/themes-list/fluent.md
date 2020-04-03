## Switching from Material to Fluent Theme
Since version `8.2` our components include a new theme inspired by the [`Microsoft Fluent Design System`](https://www.microsoft.com/design/fluent/)  
 
In order to switch from `Material` to `Fluent`, you can use one of the build-in mixins.  

We support Word and Excel palettes. To use them just pass one of the two maps `$fluent-excel-palette` or `$fluent-word-palette` to the theme mixin:

### Fluent Light Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-fluent-theme($fluent-excel-palette);
```

### Fluent Dark Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-fluent-dark-theme($fluent-excel-palette);
```

### API Overview
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-fluent-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-fluent-dark-theme)
