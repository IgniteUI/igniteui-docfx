---
title: Grid sorting
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Sorting, sort
_language: ja
---

### 並べ替え

> [!NOTE]
> 並べ替え操作では、グリッドにバインドされているデータ ソースは変更**されません**。

**並べ替え**も列ごとのレベルで有効化されます。つまり、**igx-grid** に並べ替え可能な列および並べ替え可能ではない列の両方を含むことが可能です。`sortable` 入力によって実行できます。グリッド フィルターと同じように、`sortingIgnoreCase` プロパティを設定すると、大文字と小文字を区別する並べ替えを実行できます。

#### API での並べ替え

グリッドの `sort` メソッドを使用すると、列または複数の列をグリッド API で並べ替えできます。

```typescript
import { SortingDirection } from 'igniteui-angular/main';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort('ProductName', SortingDirection.Asc, true);

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName' dir: SortingDirection.Asc, true },
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
        { fieldName: 'ProductName' dir: SortingDirection.Asc, true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Summaries](grid_summaries.html)
* [Column Pinning](grid_column_pinning.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)