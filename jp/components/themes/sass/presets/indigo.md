# Material から Indigo テーマへの切り替え
バージョン `10.1` 以降、インフラジスティックスのコンポーネントでは、独自のデザイン言語に基づいて構築された新しいテーマが含まれます。
 
`Material` から `Indigo` に切り替えるには、[theme]({environment:sassApiUrl}/themes#mixin-theme) 組み込みのミキシンを使用します。

## Indigo Light テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-indigo-palette, 
  $schema: $light-indigo-schema
);

// We can also include the Indigo font and font scaling
@include typography(
  $font-family: $indigo-typeface,
  $type-scale: $indigo-type-scale
);
```

## Indigo Dark テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-indigo-palette, 
  $schema: $dark-indigo-schema
);

@include typography(
  $font-family: $indigo-typeface,
  $type-scale: $indigo-type-scale
);
```

## API の概要

* [グローバル テーマ]({environment:sassApiUrl}/themes#mixin-theme)