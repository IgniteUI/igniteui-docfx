# Material から Fluent テーマへの切り替え

バージョン `8.2` 以降、インフラジスティックスのコンポーネントでは、[Microsoft Fluent デザイン システム](https://www.microsoft.com/design/fluent/) に基づいて構築された新しいテーマが含まれます。
 
`Material` から `Fluent` に切り替えるには、[theme]({environment:sassApiUrl}/index.html#mixin-theme) 組み込みのミキシンを使用します。

Word および Excel パレットもサポートしています。これらを使用するには、2 つの _**light**_ マップ `$light-fluent-excel-palette`、`$light-fluent-word-palette` のいずれか、または 2 つの _**dark**_ マップ `dark-fluent-excel-palette`、`$light-fluent-word-palette` のいずれかを `theme` ミックスインに渡すだけです。

## Fluent Light テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-fluent-palette, 
  $schema: $light-fluent-schema
);

// We can also include the Indigo font and font scaling
@include typography(
  $font-family: $fluent-typeface,
  $type-scale: $fluent-type-scale
);
```

## Fluent Dark テーマ

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-fluent-palette, 
  $schema: $dark-fluent-schema
);

@include typography(
  $font-family: $fluent-typeface,
  $type-scale: $fluent-type-scale
);
```

## API の概要

* [グローバル テーマ]({environment:sassApiUrl}/index.html#mixin-theme)
