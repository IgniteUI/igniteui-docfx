## Material から Fluent テーマへの切り替え
バージョン `8.2` 以降、インフラジスティックスのコンポーネントでは、[Microsoft Fluent デザイン システム](https://www.microsoft.com/design/fluent/) に基づいて構築された新しいテーマが含まれます。 
 
`Material` から `Fluent` へ切り替えるには、定義済みの mixins の 1 つを使用できます。

Word および Excel パレットをサポートしています。使用するには、2 つのマップ `$ fluent-excel-palette` または `$ fluent-word-palette` のいずれかを mixin テーマに渡すだけです。

### Fluent Light テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-fluent-theme($fluent-excel-palette);
```

### Fluent Dark テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igc-core();
@include igx-fluent-dark-theme($fluent-excel-palette);
```

### API Overview
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-igx-fluent-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-igx-fluent-dark-theme)
