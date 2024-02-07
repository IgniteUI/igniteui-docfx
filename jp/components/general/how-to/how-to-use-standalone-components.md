---
title: スタンドアロン コンポーネントの使用方法 - Angular | Ignite UI for Angular
_description: Ignite UI for Angular コンポーネントをスタンドアロン コンポーネントとして、または他のスタンドアロン コンポーネントの依存関係として使用する方法について説明します。
_keywords: Ignite UI for Angular, スタンドアロン コンポーネント, Angular 16, Angular モジュール
_language: ja
---

# Ignite UI for Angular での Standalone (スタンドアロン) コンポーネントの使用

Angular 14 では[スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)の概念が導入されました。これにより、`NgModules` を使用する必要性が減り、アプリケーションを構築する方法が簡素化されます。スタンドアロン コンポーネントは、Angular 15 まで開発者プレビューでした。この新しいパラダイムをサポートするために、バージョン `16.0.0` では、すべての Ignite UI for Angular コンポーネントが `standalone` としてエクスポートされるようになりました。既存のすべての `NgModule` は、後方互換性のためにライブラリによって引き続きエクスポートされます。ただし、Ignite UI for Angular コンポーネントは宣言されなくなりました。代わりに、`standalone` コンポーネントをインポートおよびエクスポートします。

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

ただし、`standalone` コンポーネントで使用されるすべてのコンポーネントを個別にインポートすることもできます。`IgxGridComponent` と `IgxColumnComponent` を別のコンポーネントで使用する場合の例は次のとおりです。

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

## ユーティリティ ディレクティブ

前の例に示されているのは、すべてのグリッド関連のコンポーネントとディレクティブをエクスポートするユーティリティ ディレクティブです。次の表に、Ignite UI for Angular で使用できるすべての新しいユーティリティ ディレクティブを示します。

| ディレクティブのコレクション | 説明 |
| --- | --- |
| [`IGX_ACCORDION_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/accordion/public_api.ts) | すべてのアコーディオン関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_ACTION_STRIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/action-strip/public_api.ts) | すべてのアクション ストリップ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_BANNER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/banner/public_api.ts) | すべてのバナー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_BOTTOM_NAV_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/bottom-nav/public_api.ts) | すべての下部ナビゲーション関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_BUTTON_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/buttonGroup/public_api.ts) | すべてのボタン グループ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) | すべてのカレンダー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_CARD_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/card/public_api.ts) | すべてのカード関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_CAROUSEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/carousel/public_api.ts) | すべてのカルーセル関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_CHIPS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/chips/public_api.ts) | すべてのチップ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES `](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) | すべての円形のプログレス バー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/combo/public_api.ts) | すべてのコンボ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_DATE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-picker/public_api.ts) | すべての日付ピッカー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_DATE_RANGE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-range-picker/public_api.ts) | すべての日付範囲ピッカー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_DIALOG_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/dialog/public_api.ts) | すべてのダイアログ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_DRAG_DROP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/drag-drop/public_api.ts) | すべてのドラッグアンドドロップ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_DROP_DOWN_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/drop-down/public_api.ts) | すべてのドロップダウン関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_EXPANSION_PANEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/expansion-panel/public_api.ts) | すべての 展開パネル関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/grid/public_api.ts) | すべてのグリッド関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_HIERARCHICAL_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/hierarchical-grid/public_api.ts) | すべての階層グリッド関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/input-group/public_api.ts) | すべての入力グループ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_LINEAR_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) | すべてのリニア プログレス バー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_LIST_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/list/public_api.ts) | すべてのリスト関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_NAVBAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navbar/public_api.ts) | すべてのナビゲーションバー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_NAVIGATION_DRAWER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navigation-drawer/public_api.ts) | すべてのナビゲーション ドロワー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_PAGINATOR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/paginator/public_api.ts) | すべてのページネーター関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_PIVOT_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/pivot-grid/public_api.ts) | すべてのピボット グリッド関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) | すべてのプログレス バー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_QUERY_BUILDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/query-builder/public_api.ts) | すべてのクエリ ビルダー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_RADIO_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/radio/public_api.ts) | すべてのラジオ グループ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_SELECT_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/select/public_api.ts) | すべてのセレクト関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_SIMPLE_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/simple-combo/public_api.ts) | すべてのシンプルなコンボ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_SLIDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/slider/public_api.ts) | すべてのスライダー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_SPLITTER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/splitter/public_api.ts) | すべてのスプリッター関連コンポーネントとディレクティブをエクスポートします。 |
| [`IGX_STEPPER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/stepper/public_api.ts) | すべてのステッパー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_TABS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/tabs/public_api.ts) | すべてのタブ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_TIME_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/time-picker/public_api.ts) | すべてのタイム ピッカー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_TOOLTIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/tooltip/public_api.ts) | すべてのツールチップ関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_TREE_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tree/public_api.ts) | すべてのツリー関連のコンポーネントとディレクティブをエクスポートします。 |
| [`IGX_TREE_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/tree-grid/public_api.ts) | すべてのツリー グリッド関連のコンポーネントとディレクティブをエクスポートします。 |

## その他のリソース

関連トピック:

- [スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)
- [Ignite UI を使用した作業の開始](../getting-started.md)
- [Angular のサーバー側レンダリング](../ssr-rendering.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
