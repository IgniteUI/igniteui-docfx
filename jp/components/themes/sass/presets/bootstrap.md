# Material から Bootstrap テーマへの切り替え

バージョン `9.0` 以降、コンポーネントには [Bootstrap 4](https://getbootstrap.com/)  および [ng-bootstrap](https://ng-bootstrap.github.io/#/home) に基づいて構築された新しいテーマが含まれます。
`Material` から `Bootstrap` に切り替えるには、[theme]({environment:sassApiUrl}/themes#mixin-theme) 組み込みのミキシンを使用します。

## Bootstrap Light テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-bootstrap-palette,
  $schema: $light-bootstrap-schema
);

// We can also include the Indigo font and font scaling
@include typography(
  $font-family: $bootstrap-typeface,
  $type-scale: $bootstrap-type-scale
);
```

## Bootstrap Dark テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-bootstrap-palette,
  $schema: $dark-bootstrap-schema
);

@include typography(
  $font-family: $bootstrap-typeface,
  $type-scale: $bootstrap-type-scale
);
```

## API の概要

- [グローバル テーマ]({environment:sassApiUrl}/themes#mixin-theme)
