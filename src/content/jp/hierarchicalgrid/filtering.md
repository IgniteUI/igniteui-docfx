---
title: Angular Hierarchical Grid のフィルター - Ignite UI for Angular
_description: Angular フィルターを使用して、Ignite UI for Angular で特定のデータを返します。データ型の Excel スタイル フィルタリングを含む高度なフィルタリング オプションをお試しください。
_keywords: angular フィルター, ignite ui for angular, インフラジスティックス
_license: commercial
_language: ja
---



# Angular Hierarchical Grid フィルタリング

IgniteUI for [Angular Hierarchical Grid コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid)は、クイック フィルタリング、[Excel スタイル フィルタリング](excel-style-filtering.md)、および[高度なフィルタリング](advanced-filtering.md)の 3 つの異なるフィルタリング タイプを提供します。それらのフィルタリング タイプは指定された基準を満たすレコードのみを表示できるようにします。Ignite UI の Material UI グリッドコンポーネントは、Hierarchical Grid がバインドされているデータコンテナーを介して、Angular フィルター機能と広範なフィルター API を提供します。

## Angular Hierarchical Grid フィルタリングの例

以下のサンプルは、Hierarchical Grid の**クイック フィルタリング**ユーザー エクスペリエンスを示しています。




<code-view style="height:610px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering/" alt="Angular Hierarchical Grid フィルタリングの例">
</code-view>



<div class="divider--half"></div>

## 設定

フィルタリングが有効かどうか、およびどのフィルタリング モードを使用するかを指定するために、Hierarchical Grid は次のブール プロパティを公開します - [`allowFiltering`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowFiltering)、[`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering)、[`filterMode`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filterMode) と [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)。

**[allowFiltering]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowFiltering)** プロパティを使用して、以下のオプションを指定できます:

- **false** - 対応する列のフィルタリングが無効になります /デフォルト値/。
- **true** - 対応する列のフィルタリングが有効になります。

**[allowAdvancedFiltering]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering)** プロパティを使用して、以下のオプションを指定できます:

- **false** - 対応するグリッドのフィルタリングが無効になります /デフォルト値/。
- **true** - 対応するグリッドのフィルタリングが有効になります。

**[filterMode]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filterMode)** プロパティを使用して、以下のオプションを指定できます:

- **quickFilter** - 簡易なフィルタリング UI /デフォルト値/。
- **excelStyleFilter** - Excel のようなフィルタリング UI。

**[filterable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)** プロパティを使用して、以下のオプションを指定できます:

- **true** - 対応する列のフィルタリングが有効なになります /デフォルト値/。
- **false** - 対応する列のフィルタリングが無効になります。




```html
<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</igx-hierarchical-grid>
```



ただし、[高度なフィルタリング](advanced-filtering.md)を有効にするには、[`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering) 入力プロパティを `true` に設定します。

```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</igx-hierarchical-grid>
```

>[!NOTE]
>Hierarchical Grid で `quickFilter`/`excelStyleFilter` と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。Hierarchical Grid の最終的なフィルター結果は、2 つのフィルター結果の共通部分です。

## インタラクション

特定の列のフィルター行を開くには、ヘッダー下のフィルター チップをクリックします。状態を追加するために入力の左側のドロップダウンを使用してフィルター オペランドを選択し、値を入力します。`number` と `date` 列には、Equals がデフォルトで選択されます。`string` には 'Contains'、`boolean` には 'All' が選択されます。'Enter' を押して条件を確定して他の条件を追加できます。条件チップの間にドロップダウンがあり、それらの間の論理演算子を決定します。'AND' がデフォルトで選択されます。条件の削除はチップの X ボタンをクリックします。編集はチップを選択、入力はチップのデータで生成されます。フィルター行が開いているときにフィルター可能な列のヘッダーをクリックして選択し、フィルター条件を追加できます。

列に適用したフィルターがある場合、フィルター行が閉じられるとチップの閉じるボタンをクリックした条件の削除やいずれかのチップを選択してフィルター行を開くことができます。すべての条件を表示するための十分なスペースがない場合、条件数を示すバッジ付きのフィルター アイコンが表示されます。フィルター行を開くためにクリックできます。

## 使用方法

デフォルトの定義済みフィルタリングおよび標準のフィルタリング条件があり、カスタム実装で置き換えることも可能です。また、カスタム フィルタリング条件を追加することもできます。Hierarchical Grid には、簡易なフィルター UI と詳細なフィルター オプションがあります。列で設定された [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) に基づいて、適切な[**フィルタリング処理**]({environment:angularApiUrl}/interfaces/ifilteringoperation.html)のセットがフィルター UI ドロップダウンに読み込まれます。また、[`ignoreCase`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) と最初の [`condition`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html#condition) プロパティを設定できます。

フィルタリング機能は、[`allowFiltering`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowFiltering) 入力を `true` に設定すると Hierarchical Grid コンポーネントで有効になります。デフォルトの [`filterMode`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filterMode) は `quickFilter` で、実行時には**変更できません**。特定の列に対してこの機能を無効にするには、[`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) 入力を `false` に設定します。





```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]="true"></igx-column>
    <igx-column field="Photo" [filterable]="false">
</igx-hierarchical-grid>
```



> [!NOTE]
> `string` 型の値が dataType `Date` の列で使用される場合、Hierarchical Grid は値を `Date` オブジェクトに解析しないためフィルター条件は使用できません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

列または複数の列は Hierarchical Grid API でフィルターできます。Hierarchical Grid は、このタスクに複数のメソッドを公開します ([`filter`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filter)、[`filterGlobal`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filterGlobal)、[`clearFilter`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearFilter))。

- [`filter`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filter) - 単一の列または複数の列をフィルターします。

以下の 5 つのフィルタリング オペランド クラスが公開されます。

- [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html): カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
- [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
- [`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html) は、`numeric` 型のすべてのデフォルト フィルタリング条件を定義します。
- [`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) は、`string` 型のすべてのデフォルト フィルタリング条件を定義します。
- [`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html) は、`Date` 型のすべてのデフォルト フィルタリング条件を定義します。




```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.hierarchicalGrid.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```



必要なパラメーターは列フィールド キーとフィルター用語のみです。条件および大文字と小文字の区別を設定しない場合、列プロパティで推測されます。フィルターが複数ある場合、このメソッドはフィルター式の配列を受け取ります。

> [!NOTE]
> フィルタリング操作でグリッドにバインドされているデータ ソースは変更されません。




```typescript
// Multi column filtering

const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);

this.hierarchicalGrid.filteringExpressionsTree = gridFilteringExpressionsTree;
```



- [`filterGlobal`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filterGlobal) - 既存フィルターをクリアして新しいフィルター条件をすべての Hierarchical Grid 列に適用します。

```typescript
// Filter all cells for a value which contains `myproduct`
this.hierarchicalGrid.filteringLogic = FilteringLogic.Or;
this.hierarchicalGrid.filterGlobal('myproduct', IgxStringFilteringOperand.instance().condition('contains'), false);
```

- [`clearFilter`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearFilter) - 対象列から適用されたフィルターを削除します。引数がない場合、すべての列のフィルターをクリアします。




```typescript
// Remove the filtering state from the ProductName column
this.hierarchicalGrid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.hierarchicalGrid.clearFilter();
```



## 初期のフィルター状態

グリッドの初期フィルタリング状態の設定は、[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) [`filteringExpressionsTree`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filteringExpressionsTree) プロパティを [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) の配列に設定して各列をフィルターします。




```typescript
constructor(private cdr: ChangeDetectorRef) { }

public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'ProductName',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.hierarchicalGrid.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```



### フィルター ロジック

Hierarchical Grid コントロールの [`filteringLogic`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#filteringLogic) プロパティは Hierarchical Grid で複数の列のフィルターが解決する方法を制御します。Hierarchical Grid API または Hierarchical Grid の入力プロパティによって変更できます。

```typescript
import { FilteringLogic } from 'igniteui-angular/grids/core';
// import { FilteringLogic } from '@infragistics/igniteui-angular'; for licensed package
...

this.hierarchicalGrid.filteringLogic = FilteringLogic.OR;
```

[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) のデフォルト値は現在適用されているすべてのフィルター式と一致する行のみを返します。上記の例は、'ProductName' セル値が 'myproduct' を含み、'Price' セル値が 55 より大きい場合に行が返されます。

[`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) に設定される場合、'ProductName' セル値が 'myproduct' を含むか、'Price' セル値が 55 より大きい場合に行が返されます。

<div class="divider--half"></div>



## カスタム フィルタリング オペランド

フィルタリング メニューは、フィルタリング オペランド削除または変更してカスタマイズします。デフォルトでフィルタリング メニューは列のデータ型 ([`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html)、[`IgxDateFilteringOperand`]({environment:angularApiUrl}/classes/igxdatefilteringoperand.html)、[`IgxNumberFilteringOperand`]({environment:angularApiUrl}/classes/igxnumberfilteringoperand.html)、[`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html)) に基づいて特定のオペランドを含みます。これらのクラスまたは基本クラス [`IgxFilteringOperand`]({environment:angularApiUrl}/classes/igxfilteringoperand.html) を拡張してフィルタリング メニュー項目の動作を変更できます。


以下のサンプルの "Product Name" と "Discontinued" 列フィルタリング メニューを確認してください。"Discontinued" 列フィルターでは、オペランドの数が All に制限されています。"Product Name" 列フィルター - Contains および Does Not Contain オペランド ロジックを変更して大文字と小文字を区別した検索を実行し、Empty と Not Empty を追加します。



これにより、[`IgxStringFilteringOperand`]({environment:angularApiUrl}/classes/igxstringfilteringoperand.html) と [`IgxBooleanFilteringOperand`]({environment:angularApiUrl}/classes/igxbooleanfilteringoperand.html) を拡張し、オペランドとロジックを変更して列 [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters) 入力を新しいオペランドに設定します。

```typescript
// grid-custom-filtering.component.ts

export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}

export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```





```html
<!-- hierarchical-grid-custom-filtering.component.html -->

<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]='true' [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
            <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
        </ng-template>
    </igx-column>
</igx-hierarchical-grid>
```






<code-view style="height:610px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-filtering/" >
</code-view>



## フィルター セルの再テンプレート化

フィルター セルを再テンプレート化するために、`igxFilterCellTemplate` とマークされたテンプレートを追加することができます。以下のサンプルでは、​​文字列カラムへの入力と日付列に IgxDatePicker が追加されています。ユーザーが値を入力または選択すると、文字列カラムには contains 演算子、日付列には equals 演算子を使用したフィルターが、グリッドのパブリック API を使用して適用されます。





<code-view style="height:610px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-template/" >
</code-view>







## スタイル設定

フィルター行のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張する新しいテーマを作成し、`$filtering-row-text-color`、`$filtering-row-background`、`$filtering-header-text-color`、`$filtering-header-background` パラメーターを受け取ります。

```scss
$custom-grid: grid-theme(
  $filtering-row-text-color: #292826,
  $filtering-row-background: #ffcd0f,
  $filtering-header-text-color: #292826,
  $filtering-header-background: #ffcd0f
);
```

以下のように、`grid-theme` は、フィルタリング行とフィルタリングされているそれぞれの列ヘッダーの色のみを制御します。入力グループ、チップ、ボタンなど、フィルタリング行内には明らかに多くのコンポーネントがあります。スタイルの設定は、それぞれに個別のテーマを作成する必要があるため、新しい [`input-group-theme`]({environment:sassApiUrl}/themes#input-group-theme) と新しい [`flat-button-theme`]({environment:sassApiUrl}/themes#flat-button-theme) を作成します。

```scss
$dark-input-group: input-group-theme(
  $box-background: #ffcd0f,
  $idle-text-color: #292826,
  $focused-text-color: #292826,
  $filled-text-color: #292826
);

$dark-button: flat-button-theme(
  $background: #ffcd0f,
  $foreground: #292826,
  $hover-background: #292826,
  $hover-foreground: #ffcd0f
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

この例では、入力グループとボタンのパラメーターの一部のみを変更しましたが、[`input-group-theme`]({environment:sassApiUrl}/themes#function-input-group-theme) と [`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme) は、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後の手順は、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。また、入力のプレース ホルダーの色プロパティを設定します。

```scss
:host {
@include tokens($custom-grid);

    .igx-grid__filtering-row {
        @include tokens($dark-button);
        @include tokens($dark-input-group);  

        .igx-input-group__input::placeholder {
            color: #ffcd0f;
        }
    }
}
```

>[!NOTE]
>作成した **flat-button-theme** と **input-group-theme** を `.igx-grid__filtering-row` 内に含めて、フィルタリング行ボタンとその入力グループのみにスタイルを設定します。そうでない場合は、グリッド内の他のボタンと入力グループも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
  ::ng-deep {
    @include tokens($custom-grid);

    .igx-grid__filtering-row {
      @include tokens($dark-button);
      @include tokens($dark-input-group)

      .igx-input-group__input::placeholder {
        color: #ffcd0f;
      }
    }
  }
}
```

### デモ





<code-view style="height:650px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-filtering-style/" >
</code-view>



>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## 既知の制限

> [!NOTE]
> Firefox などの一部のブラウザーは、地域固有の小数点区切り文字をグループ化区切りと見なすため解析できず、無効になります。数値列フィルター値にそのような値を入力すると、数値の有効な部分のみがフィルター式に適用されます。詳細については、Firefox [問題](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665)を参照してください。


## API リファレンス

<div class="divider--half"></div>

- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
