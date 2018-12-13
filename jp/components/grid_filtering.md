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

###Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For `number` and `date` columns 'Equals' is selected by default, for `string` - 'Contains' and for `boolean` - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While there are applied conditions for a column and the filter row is closed, you can either remove the conditions by clicking the chip's close button or you can open the filter row by selecting any of the chips. When there is not enough space to show all conditions a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

###Usage

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。Grid には、簡易なフィルター UI や詳細なフィルター オプションがあります。列で設定された [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) に基づいて、適切な[**フィルター条件**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)のセットがフィルター UI ドロップダウンに読み込まれます。また、列の [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) および最初の [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) プロパティを設定できます。

フィルタリング機能は、[`allowFiltering`]({environment:angularApiUrl}/classes/igxgridcomponent.html#allowfiltering) 入力を `true` に設定すると igxGrid コンポーネントで有効になります。特定の列でこの機能を無効にするには、filterable インプットを false に設定します。
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    ...
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</igx-grid>
```

> [!NOTE]
> `string` 型の値が `Date` dataType の列で使用される場合、グリッドは値を `Date` オブジェクトに解析しないためフィルター条件は使用できません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

列または複数の列はグリッド API でフィルターできます。グリッドはフィルター メソッド ([`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter)、[`filterGlobal`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filterglobal)、[`clearFilter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearfilter)) を公開します。

*   [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) - 単一の列または複数の列をフィルターします。

以下の 5 つのフィルタリング オペランド クラスが公開されます。
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) は、`numeric` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) は、`string` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) は、`Date` 型のすべてのデフォルト フィルタリング条件を定義します。

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

*   [`filterGlobal`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filterglobal) - 既存フィルターをクリアして新しいフィルター条件をすべてのグリッド列に適用します。

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filteringLogic = FilteringLogic.Or;
this.grid.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearfilter) - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### 初期のフィルター状態

グリッドの初期フィルタリング状態の設定は、[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) プロパティを [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の配列に設定して各列をフィルターします。

```typescript
public ngAfterViewInit() {
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

グリッドの [`filteringLogic`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringlogic) プロパティはグリッドで複数の列のフィルターが解決する方法を制御します。グリッド API またはグリッドの入力プロパティによって変更できます。

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) のデフォルト値はすべての適用されているフィルター式と一致する行のみを返します。上記の例は、'ProductName セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

[`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) に設定される場合、'ProductName セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>

#### リモート フィルタリング
[`onDataPreLoad`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ondatapreload) と [`onFilteringDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onfilteringdone) アウトプットにサブスクライブしてグリッドでリモート フィルタリングができます。詳細については、`グリッドの仮想化とパフォーマンス` [ヘルプ](grid_virtualization.md#リモートの並べ替えフィルタリングの仮想化)をご覧ください。

<div class="divider--half"></div>

#### カスタム フィルタリング オペランド
フィルタリング メニューは、フィルタリング オペランド削除または変更してカスタマイズします。デフォルトでフィルタリング メニューは列のデータ型 ([`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html)、[`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html)、[`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html)) に基づいて特定のオペランドを含みます。これらのクラスまたは基本クラス [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) を拡張してフィルタリング メニュー項目の動作を変更できます。

以下のサンプルの “Product Name” と “Discontinued” 列フィルタリング メニューを確認してください。“Discontinued” 列フィルターでは、オペランドの数が All に制限されています。“Product Name” 列フィルター - Contains および Does Not Contain オペランド ロジックを変更して大文字と小文字を区別した検索を実行し、Empty と Not Empty を追加します。

これにより、[`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) と [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) を拡張し、オペランドとロジックを変更して列 [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) 入力を新しいオペランドに設定します。

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent implements OnInit {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
    ...
}
...
export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: "contains",
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: "Contains (case sensitive)"
            },
            {
                iconName: "does_not_contain",
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: "Does Not Contain (case sensitive)"
            }
        ];

        const emptyOperators = [
            // "Empty"
            this.operations[6],
            // "Not Empty"
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // "All"
            this.operations[0],
            // "TRUE"
            this.operations[1],
            // "FALSE"
            this.operations[2]
        ];
    }
}
```

```html
<!-- grid-custom-filtering.component.html -->

 <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
    ...
</igx-grid>
```

<div class="sample-container loading" style="height:600px">
    <iframe id="grid-filtering-iframe" src='{environment:demosBaseUrl}/grid-filter-conditions' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### 6.1.0 Volume 0 の重大な変更
* IgxGridComponent `filteringExpressions` プロパティは削除されます。代わりに [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) を使用してください。
* `filter_multiple` メソッドは削除されました。[`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) メソッドおよび [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filteringexpressionstree) プロパティを代わりに使用してください。
* [`filter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filter) メソッドに新しいシグネチャがあり、以下のパラメーターを受け付けます。
  * `name` - フィルターする列の名前。
  * `value` - フィルタリングに使用する値。
  * `conditionOrExpressionTree`  (オプション) - このパラメーターは、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) または [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 型のオブジェクトを受け付けます。簡単なフィルタリングが必要な場合、フィルタリング処理を引数として渡すことができます。高度なフィルタリングの場合、複雑なフィルタリング ロジックを含む式ツリーが引数として渡すことができます。
* [`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) (オプション) - フィルタリングで大文字と小文字を区別するかどうか。
* [`onFilteringDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onfilteringdone) イベントは、フィルター列のフィルタリング状態を含む型 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の 1 パラメーターのみになりました。
* フィルタリング オペランド: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 条件プロパティは、フィルタリング状態メソッドに直接参照せずに [`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) を参照するようになりました。
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) は、[`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) クラス参照を取得する [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) プロパティを公開しました。
* カスタム フィルターは、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 型の演算で [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) の[`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) プロパティを生成してグリッド列に提供されます。

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
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
