---
title: スタンドアロン コンポーネントの使用方法 - Angular | Ignite UI for Angular
_description: Ignite UI for Angular で NgModules を使用せずにコンポーネントをスタンドアロンでインポートできるようにする Angular 16 プレビュー機能の使用方法
_keywords: Ignite UI for Angular, スタンドアロン コンポーネント, Angular 16, Angular モジュール
_language: ja
---

# Ignite UI for Angular での Standalone (スタンドアロン) コンポーネントの使用 (プレビュー)

Angular 14 では[スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)の概念が導入されました。これにより、`NgModules` を使用する必要性が減り、アプリケーションを構築する方法が簡素化されます。スタンドアロン コンポーネントは、Angular 15 まで開発者プレビューでした。この新しいパラダイムをサポートするために、バージョン `16.0.0` では、すべての Ignite UI for Angular コンポーネントが `standalone` としてエクスポートされるようになりました。既存のすべての `NgModule` は、後方互換性のためにライブラリによって引き続きエクスポートされます。ただし、Ignite UI for Angular コンポーネントは宣言されなくなりました。代わりに、`standalone` コンポーネントをインポートおよびエクスポートします。

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

ただし、 `standalone` コンポーネントで使用されるすべてのコンポーネントを個別にインポートすることもできます。`IgxGridComponent` と `IgxColumnComponent` を別のコンポーネントで使用する場合の例は次のとおりです。

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
| `IGX_ACCORDION_DIRECTIVES` | すべてのアコーディオン関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_ACTION_STRIP_DIRECTIVES` | すべてのアクション ストリップ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_BANNER_DIRECTIVES` | すべてのバナー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_BOTTOM_NAV_DIRECTIVES` | すべての下部ナビゲーション関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_BUTTON_GROUP_DIRECTIVES` | すべてのボタン グループ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_CALENDAR_DIRECTIVES` | すべてのカレンダー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_CARD_DIRECTIVES` | すべてのカード関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_CAROUSEL_DIRECTIVES` | すべてのカルーセル関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_CHIPS_DIRECTIVES` | すべてのチップ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES` | すべての円形のプログレス バー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_COMBO_DIRECTIVES` | すべてのコンボ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_DATE_PICKER_DIRECTIVES` | すべての日付ピッカー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_DATE_RANGE_PICKER_DIRECTIVES` | すべての日付範囲ピッカー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_DIALOG_DIRECTIVES` | すべてのダイアログ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_DRAG_DROP_DIRECTIVES` | すべてのドラッグアンドドロップ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_DROP_DOWN_DIRECTIVES` | すべてのドロップダウン関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_EXPANSION_PANEL_DIRECTIVES` | すべての 展開パネル関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_GRID_DIRECTIVES` | すべてのグリッド関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_HIERARCHICAL_GRID_DIRECTIVES` | すべての階層グリッド関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_INPUT_GROUP_DIRECTIVES` | すべての入力グループ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_LINEAR_PROGRESS_BAR_DIRECTIVES` | すべてのリニア プログレス バー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_LIST_DIRECTIVES` | すべてのリスト関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_NAVBAR_DIRECTIVES` | すべてのナビゲーションバー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_NAVIGATION_DRAWER_DIRECTIVES` | すべてのナビゲーション ドロワー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_PAGINATOR_DIRECTIVES` | すべてのページネーター関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_PIVOT_GRID_DIRECTIVES` | すべてのピボット グリッド関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_PROGRESS_BAR_DIRECTIVES` | すべてのプログレス バー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_QUERY_BUILDER_DIRECTIVES` | すべてのクエリ ビルダー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_SELECT_DIRECTIVES` | すべてのセレクト関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_SIMPLE_COMBO_DIRECTIVES` | すべてのシンプルなコンボ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_SLIDER_DIRECTIVES` | すべてのスライダー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_SPLITTER_DIRECTIVES` | すべてのスプリッター関連コンポーネントとディレクティブをエクスポートします。 |
| `IGX_STEPPER_DIRECTIVES` | すべてのステッパー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_TABS_DIRECTIVES` | すべてのタブ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_TIME_PICKER_DIRECTIVES` | すべてのタイム ピッカー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_TOOLTIP_DIRECTIVES` | すべてのツールチップ関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_TREE_DIRECTIVES` | すべてのツリー関連のコンポーネントとディレクティブをエクスポートします。 |
| `IGX_TREE_GRID_DIRECTIVES` | すべてのツリー グリッド関連のコンポーネントとディレクティブをエクスポートします。 |

## その他のリソース

関連トピック:

- [スタンドアロン コンポーネント](https://angular.io/guide/standalone-components)
- [Ignite UI で作業を開始](../getting-started.md)
- [Angular のサーバー側レンダリング](../ssr-rendering.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
