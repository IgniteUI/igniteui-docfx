---
title: グリッドの並べ替え
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 並べ替え機能, 並べ替え
_language: ja
---

### グリッドの並べ替え

In Ignite UI for Angular, **Sorting** is enabled on a per-column level, meaning that the igx-grid can have a mix of sortable and non-sortable columns. This is done via the `sortable` input. With the grid sorting, you can also set the `sortingIgnoreCase` property to perform case sensitive sorting.

### Grid Demo
Additionally there is a custom contextmenu added for sorting using **igx-grid**'s onContextMenu Output.

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> 並べ替え操作では、グリッドにバインドされているデータ ソースは変更**されません**。

#### API での並べ替え

グリッドの `sort` メソッドを使用すると、列または複数の列をグリッド API で並べ替えできます。

```typescript
import { SortingDirection } from 'igniteui-angular/main';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort('ProductName', SortingDirection.Asc, true);

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName' dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

フィルター動作と同様に、並べ替え状態をクリアするには `clearSort` メソッドを使用します。

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the grid
this.grid.clearSort();
```

#### 初期の並べ替え状態

グリッドの初期の並べ替え状態を設定するには、並べ替え式の配列をグリッドの `sortingExpressions` プロパティに渡します。

```typescript
public ngOnInit() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName' dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.html)
* [仮想化とパフォーマンス](grid_virtualization.html)
* [ページング](grid_paging.html)
* [フィルタリング](grid_filtering.html)
* [集計](grid_summaries.html)
* [列のピン固定](grid_column_pinning.html)
* [列のサイズ変更](grid_column_resizing.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)