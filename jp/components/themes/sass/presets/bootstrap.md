# Material から Bootstrap テーマへの切り替え
バージョン `9.0` 以降、コンポーネントには [Bootstrap 4](https://getbootstrap.com/)  および [ng-bootstrap](https://ng-bootstrap.github.io/#/home) に基づいて構築された新しいテーマが含まれます。
`Material` から `Bootstrap` へ切り替えるには、定義済みのミックスインの 1 つを使用できます。

## Bootstrap Light テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-bootstrap-light-theme($light-bootstrap-palette);
```

## Bootstrap Dark テーマ
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
@include igx-core();
@include igx-bootstrap-dark-theme($dark-bootstrap-palette);
```

## API の概要
* [Light テーマ]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-light-theme)
* [Dark テーマ]({environment:sassApiUrl}/index.html#mixin-igx-bootstrap-dark-theme)
