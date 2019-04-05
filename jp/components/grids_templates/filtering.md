@@if (igxName === 'IgxGrid') {
---
title: Grid フィルタリング
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, フィルタリング, Data Grid フィルタリング, Data Table フィルタリング
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Grid フィルタリング
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネントs スイート, Native Angular コントロール, Native Angular コンポーネントs Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid control, Angular Data Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンスe Tree Table, フィルタリング, Tree Grid フィルタリング, Tree Table フィルタリング
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid フィルタリング
_description: Ignite UI for Angular Hierarchical Grid コントロールは、タッチ レスポンシブなデータ グリッドです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネントs スイート, Native Angular コントロール, Native Angular コンポーネントs Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンスe Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, フィルタリング, Hierarchical Grid フィルタリング, Hierarchical Table フィルタリング
---
}

### @@igComponent フィルタリング

 Ignite UI for Angular の @@igComponent コンポーネントは、グリッドにバインドされるデータ コンテナーにフィルタリング API を提供します。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}

<div class="divider--half"></div>

###インタラクション

特定の列のフィルター行を開くには、ヘッダー下のフィルター チップをクリックします。状態を追加するために入力の左側のドロップダウンを使用してフィルター オペランドを選択し、値を入力します。`number` と `date` 列には、Equals がデフォルトで選択されます。`string` には 'Contains'、`boolean` には 'All' が選択されます。'Enter' を押して条件を確定して他の条件を追加できます。条件チップの間にドロップダウンがあり、それらの間の論理演算子を決定します。'AND' がデフォルトで選択されます。条件の削除はチップの X ボタンをクリックします。編集はチップを選択、入力はチップのデータで生成されます。フィルター行が開いているときにフィルター可能な列のヘッダーをクリックして選択し、フィルター条件を追加できます。

列に適用したフィルターがある場合、フィルター行が閉じられるとチップの閉じるボタンをクリックした条件の削除やいずれかのチップを選択してフィルター行を開くことができます。すべての条件を表示するための十分なスペースがない場合、条件数を示すバッジ付きのフィルター アイコンが表示されます。フィルター行を開くためにクリックできます。

###使用方法

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。@@igComponent には、簡易なフィルター UI と詳細なフィルター オプションがあります。列で設定された [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) に基づいて、適切な[**フィルタリング処理**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)のセットがフィルター UI ドロップダウンに読み込まれます。また、[`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) と最初の [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) プロパティを設定できます。

フィルタリング機能は、[`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) 入力を `true` に設定すると @@igComponent コンポーネントで有効になります。特定の列でこの機能を無効にするには、[`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) インプットを `false` に設定します。

@@if (igxName !== 'IgxHierarchicalGrid') {
Filtering feature is enabled for the @@igComponent component by setting the [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) input to `true`. The default [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) is `quickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) input to `false`.
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" dataType="number"></igx-column>
    ...
    <igx-column field="Discontinued" [dataType]="'boolean'" [filterable]="false">
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' [height]="'600px'" 
 [width]="'100%'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true'></igx-column>
    <igx-column field="Photo" [filterable]='false'>
    ...
</igx-hierarchical-grid>
```
}

> [!NOTE]
> `string` 型の値が dataType `Date` の列で使用される場合、@@igComponent は値を `Date` オブジェクトに解析しないためフィルター条件は使用できません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

列または複数の列は @@igComponent API でフィルターできます。@@igComponent は、このタスクに複数のメソッドを公開します ([`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter)、[`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal)、[`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearfilter).)。

*   [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) - 単一の列または複数の列をフィルターします。

以下の 5 つのフィルタリング オペランド クラスが公開されます。
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.@@igObjectRef.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition("contains"), true);
```

必要なパラメーターは列フィールド キーとフィルター用語のみです。条件および大文字と小文字の区別を設定しない場合、列プロパティで推測されます。フィルターが複数ある場合、このメソッドはフィルター式の配列を受け取ります。

> [!NOTE]
> フィルタリング操作でグリッドにバインドされているデータ ソースは変更されません。

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

this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
```

*   [`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal) - 既存フィルターをクリアして新しいフィルター条件をすべての @@igComponent 列に適用します。

```typescript
// Filter all cells for a value which contains `myproduct`
this.@@igObjectRef.filteringLogic = FilteringLogic.Or;
this.@@igObjectRef.filterGlobal("myproduct", IgxStringFilteringOperand.instance().condition("contains"), false);
```

*   [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearfilter) - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。

```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```

#### 初期のフィルター状態

グリッドの初期フィルタリング状態の設定は、[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) プロパティを [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の配列に設定して各列をフィルターします。

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

    this.@@igObjectRef.filteringExpressionsTree = gridFilteringExpressionsTree;
}
```

#### フィルター ロジック

@@igComponent コントロールの [`filteringLogic`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringlogic) プロパティは @@igComponent で複数の列のフィルターが解決する方法を制御します。@@igComponent. API または　@@igComponent の入力プロパティによって変更できます。

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```

[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) のデフォルト値は現在適用されているすべてのフィルター式と一致する行のみを返します。上記の例は、'ProductName セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

[`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) に設定される場合、'ProductName セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### リモート フィルタリング
[`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) と [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) アウトプットにサブスクライブしてグリッドでリモート フィルタリングができます。詳細については、`グリッドの仮想化とパフォーマンスの`[ヘルプ](virtualization.md#remote-sortingfiltering-virtualization)をご覧ください。

<div class="divider--half"></div>
}

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
@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<!-- grid-custom-filtering.component.html -->

 <@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%" [allowFiltering]="true">
    <igx-column field="ProductName" header="Product Name" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
    ...
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- hierarchical-grid-custom-filtering.component.html -->

  <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true'
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [filterable]='true' [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
        <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
            <ng-template igxCell let-cell="cell" let-val>
                <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
                <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
            </ng-template>
        </igx-column>
...
 </igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-filtering-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filter-conditions' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-filtering-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-custom' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-filtering-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-filtering' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}

#### フィルター セルの再テンプレート化
フィルター セルを再テンプレート化するために、`igxFilterCellTemplate` とマークされたテンプレートを追加することができます。以下のサンプルでは、​​文字列カラムへの入力と日付列に IgxDatePicker が追加されています。ユーザーが値を入力または選択すると、文字列カラムには contains 演算子、日付列には equals 演算子を使用したフィルターが、グリッドのパブリック API を使用して適用されます。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="grid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filtering-template-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="treegrid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}

@@if (igxName !== 'IgxHierarchicalGrid') {
#### 6.1.0 Volume 0 の重大な変更
* @@igxName `filteringExpressions` プロパティは削除されます。代わりに [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) を使用してください。
* `filter_multiple` メソッドは削除されました。[`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) メソッドおよび [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) プロパティを代わりに使用してください。
* [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) メソッドに新しいシグネチャがあります。以下のパラメーターを受け付けます。
  * `name` - フィルターする列の名前。
  * `name` - フィルタリングに使用する値。
  * `conditionOrExpressionTree` (オプション) - このパラメーターは、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) または [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 型のオブジェクトを受け付けます。簡単なフィルタリングが必要な場合、フィルタリング処理を引数として渡すことができます。高度なフィルタリングの場合、複雑なフィルタリング ロジックを含む式ツリーが引数として渡すことができます。
  * `ignoreCase` (オプション) - フィルタリングで大文字と小文字を区別するかどうか。
* [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) イベントは、フィルター列のフィルタリング状態を含む型 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の 1 パラメーターのみになりました。
* フィルタリング オペランド: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 条件プロパティは、フィルタリング状態メソッドに直接参照せずに [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) を参照するようになりました。
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) は、[`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) プロパティを公開し、[`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) クラス参照を取得します。
* カスタム フィルターは、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 型の処理で [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) の [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) プロパティを生成して @@igComponent 列で使用できます。
}
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
