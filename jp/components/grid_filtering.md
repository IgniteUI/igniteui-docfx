---
title: Grid filtering
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Filtering, filter
---

### フィルタリング

> [!NOTE]
> フィルタリング操作では、グリッドにバインドされているデータ ソースは変更**されません**。

列の `filterable` プロパティを true に設定すると、**フィルタリング**を列ごとに有効できます。

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

列で設定された `dataType` に基づいて、[**フィルター条件**](#フィルター条件)の正しいセットがフィルター UI ドロップダウンで読み込まれます。また、列の `filteringIgnoreCase` および最初の `filteringCondition` プロパティを設定できます。

#### API でのフィルター

列または複数の列をグリッド API でフィルターできます。グリッドはフィルターのための 2 つのメソッドを公開します。

*   `filter` - 単一の列または複数の列をフィルターします。

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', STRING_FILTERS.contains, true);
```

必要なパラメーターは列フィールドおよびフィルター条件です。条件および大文字と小文字の区別が設定されない場合、列プロパティから推測されます。複数フィルターの場合、このメソッドはフィルター式の配列を受け取ります。

```typescript
// Multi column filtering

this.grid.filter([
    { fieldName: 'ProductName', searchVal: 'myproduct' condition: STRING_FILTERS.contains, ignoreCase: true},
    { fieldName: 'Price', searchVal: 55, condition: NUMBER_FILTERS.greaterThan }
]);
```

*   `filterGlobal` - グリッドの列をすべてフィルターします。

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filterGlobal('myproduct', STRING.contains, true);
```

*   `clearFilter` - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### 初期のフィルター状態

グリッドの初期のフィルター状態を設定するには、式の配列をグリッドの `filteringExpressions` プロパティに設定します。

```typescript
public ngOnInit() {
    this.grid.filteringExpressions = [
        { fieldName: 'ProductName', searchVal: 'myproduct' condition: STRING_FILTERS.contains, ignoreCase: true},
        { fieldName: 'Price', searchVal: 55, condition: NUMBER_FILTERS.greaterThan }
    ];
}
```

#### フィルター ロジック

グリッドの `filteringLogic` プロパティはグリッドで複数の列のフィルターが解決する方法を制御します。グリッド API またはグリッドの入力プロパティによって変更できます。

```typescript
import { FilteringLogic } from 'igniteui-angular/main';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

`AND` のデフォルト値はすべての適用されているフィルター式と一致する行のみを返します。上記の例で、'ProductName セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

`OR` に設定される場合、'ProductName セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>