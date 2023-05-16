---
title: スタンドアロン コンポーネントの使用方法 - Angular | Ignite UI for Angular
_description: Ignite UI for Angular で NgModules を使用せずにコンポーネントをスタンドアロンでインポートできるようにする Angular 16 プレビュー機能の使用方法
_keywords: Ignite UI for Angular, スタンドアロン コンポーネント, Angular 16, Angular モジュール
_language: ja
---

# Ignite UI for Angular でのスタンドアロン コンポーネントの使用 (プレビュー)

Angular 16 では[スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)の概念が導入されており、`NgModules` を使用する必要性が減り、アプリケーションを構築する方法が簡素化されます。この新しいパラダイムをサポートするために、すべての Ignite UI for Angular コンポーネントが `スタンドアロン` としてエクスポートされるようになりました。既存のすべての `NgModule` は、後方互換性のためにライブラリによって引き続きエクスポートされます。ただし、Ignite UI for Angular コンポーネントは宣言されなくなりました。代わりに、`スタンドアロン` コンポーネントをインポートおよびエクスポートします。

`スタンドアロン` コンポーネントはまだ**プレビュー**段階にあります。一部のユーティリティ ディレクティブのエクスポートは将来変更される可能性があり、初期リリースのドキュメントに含まれない可能性があります。

## 新しいスタンドアロン コンポーネントの使用方法

Angular 16 および Ignite UI for Angular 16.0 以降では、コンポーネントに必要なインポートを `imports` プロパティに簡単に追加できるようになりました。次の例では、`IGX_GRID_DIRECTIVES` を使用して、すべてのグリッド関連のコンポーネントとディレクティブをインポートできます。
    
```typescript
import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IGX_GRID_DIRECTIVES, AsyncPipe]
})
```

ただし、`IgxGridComponent` のみをインポートすることもできます。

```typescript
import { IgxGridComponent } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IgxGridComponent, AsyncPipe]
})
```

さらに、既存のモジュールはすべて保持されますが、スタンドアロン コンポーネントのインポートとエクスポートのみが行われるため、それらをスタンドアロン コンポーネントに使用することもできます。

```typescript
// `NgModule` import of the `IgxGridModule` module, which is equivalent to IGX_GRID_DIRECTIVES in terms of exported components and directives.
import { IgxGridModule } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IgxGridModule, AsyncPipe]
})
```

## その他のリソース

関連トピック:

- [スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)
- [Ignite UI で作業を開始](../getting-started.md)
- [Angular のサーバー側レンダリング](../ssr-rendering.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
