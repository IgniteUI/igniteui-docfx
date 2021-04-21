# デフォルトのテーマ
Material テーマは、Ignite UI for Angular のデフォルトテーマです。これを使用するには、`igx-theme`ミックスインを `igx-core` の後に含めます。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-theme($default-palette);
```

## Material Light テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-light-theme($default-palette);
```

## Material Dark テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-dark-theme($default-palette);
```

`igx-light-theme` と `igx-dark-theme` の両方の mixin には、`igx-theme` mixin が含まれています。
これらの mixin は作成されますが、Dark パレットと Dark スキーマの `igx-theme` を使用する場合は、以下を手動で実行してください。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();

$primary-color: #2ab759;
$secondary-color: #f96a88;

$my-color-palette: igx-palette(
    // 注: primary と secondary 色が必要です。
    $primary: $primary-color,
    $secondary: $secondary-color,
    // $grays は、暗い背景で目立つようにすべての黒色のテキストや境界線などが白い影になります。
    $grays: #fff 
    // デフォルトで各コンポーネントすべてが $default-palette を使用するため、他の色 ($info や $error など) を指定しない場合、$default-palette のデフォルト値を使用します。
);

@include igx-theme($my-color-palette, $schema: $dark-schema);
```

## API の概要
* [グローバル テーマ]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-igx-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-igx-dark-theme)
