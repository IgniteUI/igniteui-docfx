# Material から Fluent テーマへの切り替え
バージョン `8.2` 以降、インフラジスティックスのコンポーネントでは、[Microsoft Fluent デザイン システム](https://www.microsoft.com/design/fluent/) に基づいて構築された新しいテーマが含まれます。 
 
`Material` から `Fluent` へ切り替えるには、定義済みの mixins の 1 つを使用できます。

Word および Excel パレットをサポートしています。使用するには、2 つのマップ `$ light-fluent-excel-palette` または `$ light-fluent-word-palette` のいずれかを mixin テーマに渡すだけです。

## Fluent Light テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-fluent-light-theme($light-fluent-excel-palette);
```

## Fluent Dark テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-fluent-dark-theme($dark-fluent-excel-palette);
```

## API の概要
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-igx-fluent-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-igx-fluent-dark-theme)
