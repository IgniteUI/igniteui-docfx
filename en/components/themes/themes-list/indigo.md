## Switching from Material to Indigo Theme
Since version `10.1` our components include a new theme inspired by our own design language.
 
In order to switch from `Material` to `Indigo`, you can use one of the built-in mixins.  

### Indigo Light Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-indigo-light-theme($light-indigo-palette);
```

### Indigo Dark Theme
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-indigo-dark-theme($dark-indigo-palette);
```

### API Overview
* [Light Theme]({environment:sassApiUrl}/index.html#mixin-igx-indigo-light-theme)
* [Dark Theme]({environment:sassApiUrl}/index.html#mixin-igx-indigo-dark-theme)
