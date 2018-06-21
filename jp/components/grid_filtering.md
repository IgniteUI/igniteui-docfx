---
title: グリッドのフィルタリング
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, フィルタリング, フィルター
_language: ja
---

### グリッドのフィルタリング

Ignite UI for Angular Grid コンポーネントは、グリッドにバインドされるデータ コンテナーにフィルタリング API を提供します。

#### デモ

<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。Grid には、簡易なフィルター UI および詳細なフィルター オプションがあります。列で設定された `dataType` に基づいて、[**フィルター条件**](grid.md#フィルター条件)の正しいセットがフィルター UI ドロップダウンで読み込まれます。また、列の `filteringIgnoreCase` および最初の `filteringCondition` プロパティを設定できます。

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

> [!NOTE]
> `string` 型の値が `Date` dataType の列で使用される場合、グリッドは値を `Date` オブジェクトに解析しないためフィルター条件は使用できません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

列または複数の列をグリッド API でフィルターできます。グリッドはフィルターのための 2 つのメソッドを公開します。

*   `filter` - 単一の列または複数の列をフィルターします。

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', STRING_FILTERS.contains, true);
```

必要なパラメーターは列フィールドおよびフィルター条件です。条件および大文字と小文字の区別を設定しない場合、列プロパティで推測されます。フィルターが複数ある場合、このメソッドはフィルター式の配列を受け取ります。

> [!NOTE]
> フィルタリング操作では、グリッドにバインドされているデータ ソースは変更**されません**。

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

`AND` のデフォルト値はすべての適用されているフィルター式と一致する行のみを返します。上記の例は、'ProductName セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

`OR` に設定される場合、'ProductName セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
