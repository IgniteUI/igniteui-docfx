# Material から Fluent テーマへの切り替え
バージョン `8.2` 以降、インフラジスティックスのコンポーネントでは、[Microsoft Fluent デザイン システム](https://www.microsoft.com/design/fluent/) に基づいて構築された新しいテーマが含まれます。 
 
`Material` から `Fluent` へ切り替えるには、定義済みのミックスインの 1 つを使用できます。

Word および Excel パレットをサポートしています。使用するには、2 つのマップ `$light-fluent-excel-palette` または `$light-fluent-word-palette` のいずれかをミックスイン テーマに渡すだけです。

## Fluent Light テーマ
```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include fluent-light-theme($light-fluent-excel-palette);
```

## Fluent Dark テーマ
```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include fluent-dark-theme($dark-fluent-excel-palette);
```

## API の概要
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-fluent-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-fluent-dark-theme)
