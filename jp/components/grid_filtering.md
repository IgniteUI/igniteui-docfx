---
title: グリッド フィルタリング
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, フィルタリング, フィルター
_language: ja
---

### グリッド フィルタリング

Ignite UI for Angular Grid コンポーネントは、グリッドにバインドされるデータ コンテナーにフィルタリング API を提供します。

#### デモ

<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。Grid には、簡易なフィルター UI や詳細なフィルター オプションがあります。列で設定された `dataType` に基づいて、適切な[**フィルター条件**](grid.md#フィルター条件)のセットがフィルター UI ドロップダウンに読み込まれます。また、列の `ignoreCase` および最初の `condition` プロパティを設定できます。

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

> [!NOTE]
> `string` 型の値が `Date` dataType の列で使用される場合、グリッドは値を `Date` オブジェクトに解析しないためフィルター条件は使用できません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

列または複数の列はグリッド API でフィルターできます。グリッドはフィルター メソッド (`filter`、`filterGlobal `、`clearFilter`) を公開します。

*   `filter` - 単一の列または複数の列をフィルターします。

以下の 5 つのフィルタリング オペランド クラスが公開されます。
   - `IgxFilteringOperand`: カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
   - `IgxBooleanFilteringOperand` は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
   - `IgxNumberFilteringOperand` は、`numeric` 型のすべてのデフォルト フィルタリング条件を定義します。
   - `IgxStringFilteringOperand` は、`string` 型のすべてのデフォルト フィルタリング条件を定義します。
   - `IgxDateFilteringOperand` は、`Date` 型のすべてのデフォルト フィルタリング条件を定義します。

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition("contains"), true);
```

必要なパラメーターは列フィールド キーおよびフィルター条件です。条件および大文字と小文字の区別を設定しない場合、列プロパティで推測されます。フィルターが複数ある場合、このメソッドはフィルター式の配列を受け取ります。

> [!NOTE]
> フィルタリング操作では、グリッドにバインドされているデータ ソースは変更**されません**。

```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "ProductName");
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition("contains"),
    fieldName: "ProductName",
    ignoreCase: true,
    searchVal: "ch"
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "Price");
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition("greaterThan"),
    fieldName: "UnitPrice",
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
```

*   `filterGlobal` - 既存フィルターをクリアして新しいフィルター条件をすべてのグリッド列に適用します。

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   `clearFilter` - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### 初期のフィルター状態

グリッドの初期フィルタリング状態の設定は、IgxGridComponent `filteringExpressionsTree` プロパティを IFilteringExpressionsTree の配列に設定して各列をフィルターします。

```typescript
public ngOnInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, "ProductName");
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition("contains"),
        fieldName: "ProductName",
        ignoreCase: true,
        searchVal: "c"
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

#### フィルター ロジック

グリッドの `filteringLogic` プロパティはグリッドで複数の列のフィルターが解決する方法を制御します。グリッド API またはグリッドの入力プロパティによって変更できます。

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

`AND` のデフォルト値はすべての適用されているフィルター式と一致する行のみを返します。上記の例は、'ProductName セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

`OR` に設定される場合、'ProductName セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>

#### 6.1.0 Volume 0 の重大な変更
* IgxGridComponent `filteringExpressions` プロパティは削除されます。代わりに `filteringExpressionsTree` を使用してください。
* `filter_multiple` メソッドは削除されました。`filter` メソッドおよび`filteringExpressionsTree` プロパティを代わりに使用してください。
* `filter` メソッドに新しいシグネチャがあり、以下のパラメーターを受け付けます。
  * `name` - フィルターする列の名前。
  * `value` - フィルタリングに使用する値。
  * `conditionOrExpressionTree`  (オプション) - このパラメーターは、`IFilteringOperation` または `IFilteringExpressionsTree` 型のオブジェクトを受け付けます。簡単なフィルタリングが必要な場合、フィルタリング処理を引数として渡すことができます。高度なフィルタリングの場合、複雑なフィルタリング ロジックを含む式ツリーが引数として渡すことができます。
* `ignoreCase` (オプション) - フィルタリングで大文字と小文字を区別するかどうか。
* `onFilteringDone` イベントは、フィルター列のフィルタリング状態を含む型 `IFilteringExpressionsTree` の 1 パラメーターのみになりました。
* フィルタリング オペランド: `IFilteringExpression` 条件プロパティは、フィルタリング状態メソッドに直接参照せずに `IFilteringOperation` を参照するようになりました。
* `IgxColumnComponent` は、`IgxFilteringOperand` クラス参照を取得する `filters` プロパティを公開しました。
* カスタム フィルターは、`IFilteringOperation` 型の演算で `IgxFilteringOperand` の`operations` プロパティを生成してグリッド列に提供されます。

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
