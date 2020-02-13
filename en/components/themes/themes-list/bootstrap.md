### Switching from Material to Bootstrap theme
Since version `9.0` our components support a new theme, built based on the [`Bootstrap 4`](https://getbootstrap.com/) and [`and angular bootstrap`](https://ng-bootstrap.github.io/#/home).  
In order to switch from `material` to `Bootstrap`, you can use one of the build in mixins.

For the `light` version of the `Bootstrap theme` you can use: 

```scss
@include igx-bootstrap-theme($bootstrap-palette);
```

For the `dark` version of the `Bootstrap theme` you can use:

```scss
@include igx-bootstrap-dark-theme($dark-bootstrap-palette);
```

