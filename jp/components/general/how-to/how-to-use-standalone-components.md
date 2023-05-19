---
title: スタンドアロン コンポーネントの使用方法 - Angular | Ignite UI for Angular
_description: Ignite UI for Angular で NgModules を使用せずにコンポーネントをスタンドアロンでインポートできるようにする Angular 16 プレビュー機能の使用方法
_keywords: Ignite UI for Angular, スタンドアロン コンポーネント, Angular 16, Angular モジュール
_language: ja
---

# Ignite UI for Angular での Standalone (スタンドアロン) コンポーネントの使用 (プレビュー)

Angular 14 では[スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)の概念が導入されました。これにより、`NgModules` を使用する必要性が減り、アプリケーションを構築する方法が簡素化されます。Standalone components were in developer preview until Angular 15. この新しいパラダイムをサポートするために、バージョン `16.0.0` では、すべての Ignite UI for Angular コンポーネントが `standalone` としてエクスポートされるようになりました。既存のすべての `NgModule` は、後方互換性のためにライブラリによって引き続きエクスポートされます。ただし、Ignite UI for Angular コンポーネントは宣言されなくなりました。代わりに、`standalone` コンポーネントをインポートおよびエクスポートします。

`standalone` コンポーネントはまだ**プレビュー**段階にあります。一部のユーティリティ ディレクティブのエクスポートは将来変更される可能性があり、初期リリースのドキュメントに含まれない可能性があります。

## 新しいスタンドアロン コンポーネントの使用方法

Angular 16 および Ignite UI for Angular 16.0 以降では、`standalone` コンポーネントに必要なインポートを `imports` プロパティに簡単に追加できるようになりました。次の例では、`IGX_GRID_DIRECTIVES` を使用して、すべてのグリッド関連のコンポーネントとディレクティブをインポートできます。
    
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

But you can also import all components used by your `standalone` component individually. Example with the `IgxGridComponent` and `IgxColumnComponent` when only these two are used by another component is as follows.

```typescript
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IgxGridComponent, IgxColumnComponent, AsyncPipe]
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

## Utility Directives

The `IGX_GRID_DIRECTIVES` shown in the previous examples is a utility directive that exports all grid related components and directives. The following table lists all new utility directives that are available in Ignite UI for Angular.

| Directive Collection | 説明 |
| --- | --- |
| `IGX_ACCORDION_DIRECTIVES` | Exports all accordion related components and directives. |
| `IGX_ACTION_STRIP_DIRECTIVES` | Exports all action strip related components and directives. |
| `IGX_BANNER_DIRECTIVES` | Exports all banner related components and directives. |
| `IGX_BOTTOM_NAV_DIRECTIVES` | Exports all bottom navigation related components and directives. |
| `IGX_BUTTON_GROUP_DIRECTIVES` | Exports all button group related components and directives. |
| `IGX_CALENDAR_DIRECTIVES` | Exports all calendar related components and directives. |
| `IGX_CARD_DIRECTIVES` | Exports all card related components and directives. |
| `IGX_CAROUSEL_DIRECTIVES` | Exports all carousel related components and directives. |
| `IGX_CHIPS_DIRECTIVES` | Exports all chip related components and directives. |
| `IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES` | Exports all circular progress bar related components and directives. |
| `IGX_COMBO_DIRECTIVES` | Exports all combo related components and directives. |
| `IGX_DATE_PICKER_DIRECTIVES` | Exports all date-picker related components and directives. |
| `IGX_DATE_RANGE_PICKER_DIRECTIVES` | Exports all date-range picker related components and directives. |
| `IGX_DIALOG_DIRECTIVES` | Exports all dialog related components and directives. |
| `IGX_DRAG_DROP_DIRECTIVES` | Exports all drag and drop related components and directives. |
| `IGX_DROP_DOWN_DIRECTIVES` | Exports all drop-down related components and directives. |
| `IGX_EXPANSION_PANEL_DIRECTIVES` | Exports all expansion panel related components and directives. |
| `IGX_GRID_DIRECTIVES` | Exports all grid related components and directives. |
| `IGX_HIERARCHICAL_GRID_DIRECTIVES` | Exports all hierarchical grid related components and directives. |
| `IGX_INPUT_GROUP_DIRECTIVES` | Exports all input group related components and directives. |
| `IGX_LINEAR_PROGRESS_BAR_DIRECTIVES` | Exports all linear progress bar related components and directives. |
| `IGX_LIST_DIRECTIVES` | Exports all list related components and directives. |
| `IGX_NAVBAR_DIRECTIVES` | Exports all navbar related components and directives. |
| `IGX_NAVIGATION_DRAWER_DIRECTIVES` | Exports all navigation drawer related components and directives. |
| `IGX_PAGINATOR_DIRECTIVES` | Exports all paginator related components and directives. |
| `IGX_PIVOT_GRID_DIRECTIVES` | Exports all pivot grid related components and directives. |
| `IGX_PROGRESS_BAR_DIRECTIVES` | Exports all progress bar related components and directives. |
| `IGX_QUERY_BUILDER_DIRECTIVES` | Exports all query builder related components and directives. |
| `IGX_SELECT_DIRECTIVES` | Exports all select related components and directives. |
| `IGX_SIMPLE_COMBO_DIRECTIVES` | Exports all simple combo related components and directives. |
| `IGX_SLIDER_DIRECTIVES` | Exports all slider related components and directives. |
| `IGX_SPLITTER_DIRECTIVES` | Exports all splitter related components and directives. |
| `IGX_STEPPER_DIRECTIVES` | Exports all stepper related components and directives. |
| `IGX_TABS_DIRECTIVES` | Exports all tabs related components and directives. |
| `IGX_TIME_PICKER_DIRECTIVES` | Exports all time picker related components and directives. |
| `IGX_TOOLTIP_DIRECTIVES` | Exports all tooltip related components and directives. |
| `IGX_TREE_DIRECTIVES` | Exports all tree related components and directives. |
| `IGX_TREE_GRID_DIRECTIVES` | Exports all tree grid related components and directives. |

## その他のリソース

関連トピック:

- [スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)
- [Ignite UI で作業を開始](../getting-started.md)
- [Angular のサーバー側レンダリング](../ssr-rendering.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
