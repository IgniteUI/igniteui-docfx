# デフォルトのテーマ

Material テーマの _**light**_ バージョンは、Ignite UI for Angular のデフォルト テーマです。これを使用するには、`core` ミックスインの後に `theme` ミックスインを含める必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-material-palette,
  $schema: $light-material-schema
);

// We can also include the Material font and font scaling
@include typography(
  $font-family: $material-typeface,
  $type-scale: $material-type-scale
);
```

## Material Dark テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-material-palette,
  $schema: $dark-material-schema
);

@include typography(
  $font-family: $material-typeface,
  $type-scale: $material-type-scale
);
```

ダーク スキーマのみを使用しながら独自のパレットを使用する場合は、手動で次の操作を行う必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();

$primary-color: #2ab759;
$secondary-color: #f96a88;
$surface-color: #303030;

// IMPORTANT, the primary, secondary and surface colors are required
// The $gray will ensure that all the black text, borders, etc will become a shade of white in order to be visible against a dark background
$my-color-palette: palette(
  $primary: $primary-color,
  $secondary: $secondary-color,
  $surface: $surface-color,
  $gray: #fff,
);

@include theme($my-color-palette, $schema: $dark-schema);
```

デフォルトで各コンポーネントすべてが `$light-material-palette` を使用するため、他のカラー ($info や $error など) を指定しない場合、`$light-material-palette` のデフォルト値を使用します。

## API の概要

* [グローバル テーマ]({environment:sassApiUrl}/themes#mixin-theme)
