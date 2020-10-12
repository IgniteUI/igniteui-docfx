# Material から Indigo テーマへの切り替え
バージョン `10.1` 以降、インフラジスティックスのコンポーネントでは、独自のデザイン言語に基づいて構築された新しいテーマが含まれます。
 
`Material` から `Indigo` へ切り替えるには、定義済みの mixins の 1 つを使用できます。

## Indigo Light テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-indigo-light-theme($light-indigo-palette);
```

## Indigo Dark テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-indigo-dark-theme($dark-indigo-palette);
```

## API の概要
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-igx-indigo-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-igx-indigo-dark-theme)
