# デフォルトのテーマ
Material テーマは、Ignite UI for Angular のデフォルトテーマです。これを使用するには、`theme`ミックスインを `core` の後に含めます。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme($default-palette);
```

## Material Light テーマ
```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include light-theme($default-palette);
```

## Material Dark テーマ
```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include dark-theme($default-palette);
```

`light-theme` と `dark-theme` の両方のミックスインには、`theme` ミックスインが含まれています。
これらのミックスイン は作成されますが、Dark パレットと Dark スキーマの `theme` を使用する場合は、以下を手動で実行してください。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();

$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: palette(
    // 注: primary と secondary 色が必要です。
    $primary: $primary-color,
    $secondary: $secondary-color,
    // $gray は、暗い背景で目立つようにすべての黒色のテキストや境界線などが白い影になります。
    $gray: #fff 
    // デフォルトで各コンポーネントすべてが $default-palette を使用するため、他の色 ($info や $error など) を指定しない場合、$default-palette のデフォルト値を使用します。
);

@include theme($my-color-palette, $schema: $dark-schema);
```

## API の概要
* [グローバル テーマ]({environment:sassApiUrl}/index.html#mixin-theme)
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-dark-theme)
