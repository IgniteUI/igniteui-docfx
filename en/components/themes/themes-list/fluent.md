### Switching from Material to Fluent theme
Since version `8.2` our components support a new theme, built based on the [`Microsoft Fluent Design System`](https://www.microsoft.com/design/fluent/).  
In order to switch from `material` to `fluent`, you can use one of the build in mixins.

```scss
// For the `light` version
@include igx-fluent-theme($fluent-excel-palette);
// For the `Dark` version
@include igx-fluent-dark-theme($fluent-excel-dark-palette);
```

We also added a `Microsoft Word` palette. To use it just replace the `$fluent-excel-palette` with `$fluent-word-palette`:

```scss
// For the `light` version
@include igx-fluent-theme($fluent-word-palette);
// For the `Dark` version
@include igx-fluent-dark-theme($fluent-word-dark-palette);
```
