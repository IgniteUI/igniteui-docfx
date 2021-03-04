@@if (igxName === 'IgxGrid') {
---
title: Angular フィルター | Angular フィルタリング可能なデータ グリッド | インフラジスティックス
_description: Angular フィルターを使用して、Ignite UI for Angular で特定のデータを返します。データ型の Excel スタイル フィルタリングを含む高度なフィルタリング オプションをお試しください。
_keywords: angular フィルター, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular フィルター | Angular フィルタリング可能なデータ ツリー グリッド | インフラジスティックス
_description: Angular フィルターを使用して、Ignite UI for Angular で特定のデータを返します。データ型の Excel スタイル フィルタリングを含む高度なフィルタリング オプションをお試しください。
_keywords: angular フィルター, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular フィルター | Angular フィルタリング可能なデータ階層グリッド | インフラジスティックス
_description: Angular フィルターを使用して、Ignite UI for Angular で特定のデータを返します。データ型の Excel スタイル フィルタリングを含む高度なフィルタリング オプションをお試しください。
_keywords: angular フィルター, ignite ui for angular, インフラジスティックス
_language: ja
---
}

# Angular @@igComponent フィルタリング
IgniteUI for Angular @@igComponent コンポーネントは、[クイック フィルタリング、[Excel スタイル フィルタリング](excel-style-filtering.md)、および[高度なフィルタリング](advanced-filtering.md)の 3 つの異なるフィルタリング タイプを提供します。それらのフィルタリング タイプは指定された基準を満たすレコードのみを表示できるようにします。Ignite Ui の Material UI グリッドコンポーネントは、@@igComponent がバインドされているデータコンテナを介して、Angular フィルター機能と広範なフィルター API を提供します。

## Angular @@igComponent フィルタリングの例

以下のサンプルは、@@igComponent の**クイック フィルタリング** ユーザー エクスペリエンスを示しています。@@if(igxName!=='IgxHierarchicalGrid'){API [filter()]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) メソッドは、外部の _igxInputGroup_ コンポーネントを介して _ProductName_  列に _contains_ 条件を適用するために使用されます。} 
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-filtering-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent フィルタリングの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent フィルタリングの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent フィルタリングの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

## 設定
フィルタリングが有効かどうか、およびどのフィルタリング モードを使用するかを指定するために、@@igComponent は次のブール プロパティを公開します - [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering)、[`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering)、[`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) と [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)。

**[allowFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering)** プロパティを使用して、以下のオプションを指定できます:
- **false** - 対応する列のフィルタリングが無効になります /デフォルト値/。
- **true** - 対応する列のフィルタリングが有効になります。

**[allowAdvancedFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering)** プロパティを使用して、以下のオプションを指定できます:
- **false** - 対応するグリッドのフィルタリングが無効になります /デフォルト値/。
- **true** - 対応するグリッドのフィルタリングが有効になります。

**[filterMode]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode)** プロパティを使用して、以下のオプションを指定できます:
- **quickFilter** - 簡易なフィルタリング UI /デフォルト値/。 
- **excelStyleFilter** - Excel のようなフィルタリング UI。

**[filterable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)** プロパティを使用して、以下のオプションを指定できます:
- **true** - 対応する列のフィルタリングが有効なになります /デフォルト値/。
- **false** - 対応する列のフィルタリングが無効になります。


```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</@@igSelector>
```

ただし、[高度なフィルタリング](advanced-filtering.md)を有効にするには、[`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering) 入力プロパティを `true` に設定します。

```html
<@@igSelector [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</@@igSelector>
```

>[!NOTE]
>@@igComponent で [`quickFilter`]({environment:angularApiUrl}/enums/filtermode.html#quickfilter)/[`excelStyleFilter`]({environment:angularApiUrl}/enums/filtermode.html#excelstylefilter) と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。@@igComponent の最終的なフィルター結果は、2 つのフィルター結果の共通部分です。

## インタラクション

特定の列のフィルター行を開くには、ヘッダー下のフィルター チップをクリックします。状態を追加するために入力の左側のドロップダウンを使用してフィルター オペランドを選択し、値を入力します。`number` と `date` 列には、Equals がデフォルトで選択されます。`string` には 'Contains'、`boolean` には 'All' が選択されます。'Enter' を押して条件を確定して他の条件を追加できます。条件チップの間にドロップダウンがあり、それらの間の論理演算子を決定します。'AND' がデフォルトで選択されます。条件の削除はチップの X ボタンをクリックします。編集はチップを選択、入力はチップのデータで生成されます。フィルター行が開いているときにフィルター可能な列のヘッダーをクリックして選択し、フィルター条件を追加できます。

列に適用したフィルターがある場合、フィルター行が閉じられるとチップの閉じるボタンをクリックした条件の削除やいずれかのチップを選択してフィルター行を開くことができます。すべての条件を表示するための十分なスペースがない場合、条件数を示すバッジ付きのフィルター アイコンが表示されます。フィルター行を開くためにクリックできます。

###使用方法

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。@@igComponent には、簡易なフィルター UI と詳細なフィルター オプションがあります。列で設定された [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) に基づいて、適切な[**フィルタリング処理**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)のセットがフィルター UI ドロップダウンに読み込まれます。また、[`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) と最初の [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) プロパティを設定できます。

フィルタリング機能は、[`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) 入力を  `true` に設定すると @@igComponent コンポーネントで有効になります。デフォルトの [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) は `quickFilter` で、実行時には変更**できません**。特定の列に対してこの機能を無効にするには、[`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) 入力を `false` に設定します。

@@if (igxName !== 'IgxHierarchicalGrid') {
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

列または複数の列は @@igComponent API でフィルターできます。@@igComponent は、このタスクに複数のメソッドを公開します ([`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter)、[`filterGlobal`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterglobal)、[`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearFilter))。

*   [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) - 単一の列または複数の列をフィルターします。

以下の 5 つのフィルタリング オペランド クラスが公開されます。
   - [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
   - [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) は、`numeric` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) は、`string` 型のすべてのデフォルト フィルタリング条件を定義します。
   - [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) は、`Date` 型のすべてのデフォルト フィルタリング条件を定義します。

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

*   [`clearFilter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearFilter) - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。

```typescript
// Remove the filtering state from the ProductName column
this.@@igObjectRef.clearFilter('ProductName');

// Clears the filtering state from all columns
this.@@igObjectRef.clearFilter();
```

## 初期のフィルター状態

グリッドの初期フィルタリング状態の設定は、[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) プロパティを [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の配列に設定して各列をフィルターします。

```typescript
constructor(private cdr: ChangeDetectorRef) { }

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
    this.cdr.detectChanges();
}
```

### フィルター ロジック

@@igComponent コントロールの [`filteringLogic`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringlogic) プロパティは @@igComponent で複数の列のフィルターが解決する方法を制御します。@@igComponent API または @@igComponent の入力プロパティによって変更できます。

```typescript
import { FilteringLogic } from 'igniteui-angular';
...

this.@@igObjectRef.filteringLogic = FilteringLogic.OR;
```

[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) のデフォルト値は現在適用されているすべてのフィルター式と一致する行のみを返します。上記の例は、'ProductName' セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

[`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) に設定される場合、'ProductName' セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
## リモート フィルタリング

@@igComponent はリモート フィルタリングをサポートします。詳細については、[`@@igComponent リモート データ操作`](remote-data-operations.md) で説明されています。

<div class="divider--half"></div>
}

## カスタム フィルタリング オペランド
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
    <iframe id="grid-filtering-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filter-conditions' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-filtering-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-custom' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-filtering-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-filtering' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

## フィルター セルの再テンプレート化
フィルター セルを再テンプレート化するために、`igxFilterCellTemplate` とマークされたテンプレートを追加することができます。以下のサンプルでは、​​文字列カラムへの入力と日付列に IgxDatePicker が追加されています。ユーザーが値を入力または選択すると、文字列カラムには contains 演算子、日付列には equals 演算子を使用したフィルターが、グリッドのパブリック API を使用して適用されます。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="grid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filtering-template-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="treegrid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-template' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-filtering-template-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-template' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}


## スタイル設定

フィルター行のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張する新しいテーマを作成し、`$filtering-row-text-color`、`$filtering-row-background`、`$filtering-header-text-color`、`$filtering-header-background` パラメーターを受け取ります。

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-text-color: #292826,
    $filtering-row-background: #FFCD0F,
    $filtering-header-text-color: #292826,
    $filtering-header-background: #FFCD0F
);
```

以下のように、`igx-grid-theme` は、フィルタリング行とフィルタリングされているそれぞれの列ヘッダーの色のみを制御します。入力グループ、チップ、ボタンなど、フィルタリング行内には明らかに多くのコンポーネントがあります。スタイルの設定は、それぞれに個別のテーマを作成する必要があるため、新しい入力グループのテーマと新しいボタンのテーマを作成します。

```scss
$dark-input-group: igx-input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$dark-button: igx-button-theme(
    $flat-background: #FFCD0F,
    $flat-text-color: #292826,
    $flat-hover-background: #292826,
    $flat-hover-text-color: #FFCD0F
);
```

この例では、入力グループとボタンのパラメーターの一部のみを変更しましたが、[`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) と [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) は、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後の手順は、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。また、入力のプレース ホルダーの色プロパティを設定します。

```scss
@include igx-grid($custom-grid);
.igx-grid__filtering-row {
    @include igx-button($dark-button);
    @include igx-input-group($dark-input-group);

    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

>[!NOTE]
>`.igx-grid__filtering-row` 内で **igx-button** および **igx-input-group** mixins をスコープし、行フィルター ボタンとその入力グループのみのスタイルを設定します。そうでない場合は、グリッド内の他のボタンと入力グループも影響を受けます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-grid($custom-grid);
        .igx-grid__filtering-row {
            @include igx-button($dark-button);
            @include igx-input-group($dark-input-group);

            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-text-color: igx-color($dark-palette, "primary", 400),
    $filtering-row-background: igx-color($dark-palette, "secondary", 400),
    $filtering-header-text-color: igx-color($dark-palette, "primary", 400),
    $filtering-header-background: igx-color($dark-palette, "secondary", 400)
);

$dark-input-group: igx-input-group-theme(
    $box-background: igx-color($dark-palette, "secondary", 400),
    $idle-text-color: igx-color($dark-palette, "primary", 400),
    $focused-text-color: igx-color($dark-palette, "primary", 400),
    $filled-text-color: igx-color($dark-palette, "primary", 400)
);

$dark-button: igx-button-theme(
    $flat-background: igx-color($dark-palette, "secondary", 400),
    $flat-text-color: igx-color($dark-palette, "primary", 400),
    $flat-hover-background: igx-color($dark-palette, "primary", 400),
    $flat-hover-text-color: igx-color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>`igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については[`パレット`](../themes/palette.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供される定義済みスキーマ ([`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid)、[`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group)、[`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button)) のうちの 1 つを拡張します。 

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-text-color:(
            igx-color: ("primary", 400)
        ),
        filtering-row-background:(
            igx-color: ("secondary", 400)
        ),
        filtering-header-text-color:(
            igx-color: ("primary", 400)
        ),
        filtering-header-background:(
            igx-color: ("secondary", 400)
        )
    )
);

// Extending the light input group schema
$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
            igx-color: ("secondary", 400)
        ),
        idle-text-color:(
            igx-color: ("primary", 400)
        ),
        focused-text-color:(
            igx-color: ("primary", 400)
        ),
        filled-text-color:(
            igx-color: ("primary", 400)
        )
    )
);

// Extending the light button schema
$custom-button-schema: extend($_light-button,
    (
        flat-background:(
            igx-color: ("secondary", 400)
        ),
        flat-text-color:(
            igx-color: ("primary", 400)
        ),
        flat-hover-background:(
            igx-color: ("primary", 400)
        ),
        flat-hover-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-input-group: $custom-input-group-schema,
    igx-button: $custom-button-schema
));

// Defining grid-theme with the global light schema
$custom-grid: igx-grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);

// Defining button-theme with the global light schema
$custom-button: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);

// Defining input-group-theme with the global light schema
$custom-input-group: igx-input-group-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="grid-filtering-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:500px">
    <iframe id="treegrid-filtering-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-filtering-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

## 既知の制限

> [!NOTE] 
> Firefox などの一部のブラウザーは、地域固有の小数点区切り文字をグループ化区切りと見なすため解析できず、無効になります。数値列フィルター値にそのような値を入力すると、数値の有効な部分のみがフィルター式に適用されます。詳細については、Firefox [問題](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665)を参照してください。
@@if (igxName !== 'IgxHierarchicalGrid') {
### 6.1.0 の重大な変更
* @@igxName `filteringExpressions` プロパティは削除されます。代わりに [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) を使用してください。
* `filter_multiple` メソッドは削除されました。[`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) メソッドおよび [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstree) プロパティを代わりに使用してください。
* [`filter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filter) メソッドに新しいシグネチャがあります。以下のパラメーターを受け付けます。
  * `name` - フィルターする列の名前。
  * `value` - フィルタリングに使用する値。
  * `conditionOrExpressionTree` (オプション) - このパラメーターは、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) または [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) 型のオブジェクトを受け付けます。簡単なフィルタリングが必要な場合、フィルタリング処理を引数として渡すことができます。高度なフィルタリングの場合、複雑なフィルタリング ロジックを含む式ツリーが引数として渡すことができます。
  * `ignoreCase` (オプション) - フィルタリングで大文字と小文字を区別するかどうか。
* [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) イベントは、フィルター列のフィルタリング状態を含む型 [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の 1 パラメーターのみになりました。
* フィルタリング オペランド: [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) 条件プロパティは、フィルタリング状態メソッドに直接参照せずに [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) を参照するようになりました。
* [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) は、[`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) プロパティを公開し、[`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) クラス参照を取得します。
* カスタム フィルターは、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 型の処理で [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) の [`operations`]({environment:angularApiUrl}/classes/igxfilteringoperand.html#operations) プロパティを生成して @@igComponent 列で使用できます。
}

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
