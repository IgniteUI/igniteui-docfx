---
title: Angular Tree Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: Angular グループを設定して Angular Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, infragistics, angular グループ化, インフラジスティックス
_language: ja
---

# Angular Tree Grid グループ化

階層以外のデータ列を **グループ化**し、**集計値**で親行を生成する場合、[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) along with `treeGridGrouping` pipe and the UI component with selector `igx-tree-grid-group-by-area`.

The `treeGridGrouping` pipe groups the data based on the provided parameters and the resulting hierarchy is displayed in a separate column. The pipe can also calculate aggregated values for the generated parent rows if aggregations are provided. Here is an example of how to use the pipe in the template:

```html
<igx-tree-grid #grid 
               [data]="data | treeGridGrouping:groupingExpressions:groupKey:childDataKey:grid:aggregations"
               [childDataKey]="childDataKey"
               [sortStrategy]="sorting">
```

The pipe arguments are the following:
- groupingExpressions - an array of [`IGroupingExpression`]({environment:angularApiUrl}/interfaces/igroupingexpression.html) objects which contains information about the fields used to generate the hierarchy and the sorting details for each group
- groupKey - a string value for the name of the generated hierarchy column
- childDataKey - a string value for the field where the child collection of the generated parent rows is stored
- grid - `IgxTreeGridComponent` that is used for the grouping
- aggregations (optional) - an array of `ITreeGridAggregation` objects which contains information about the aggregation functions

The UI component with selector `igx-tree-grid-group-by-area` handles the UI interactions related to the columns that are used for the grouping. Here is an example of how to use the component in the template:

```html
<igx-tree-grid-group-by-area
    [grid]='grid'
    [(expressions)]='groupingExpressions'
    [hideGroupedColumns]='true'>
</igx-tree-grid-group-by-area>
```

コンポーネントの入力は次のとおりです:
- grid - グループ化に使用される `IgxTreeGridComponent`。
- expressions - an array of [`IGroupingExpression`]({environment:angularApiUrl}/interfaces/igroupingexpression.html) objects which contains the fields used to generate the hierarchy
- hideGroupedColumns - a boolean value indicating whether to hide the columns by which grouping was performed
- density - a [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) that can be used to change the view
- dropAreaTemplate - a template for the drop area that can be used to override the default drop area template
- dropAreaMessage - a string that can be used to override the default message for the default drop area template

> [!NOTE]
> In order for the sorting to work correctly you should set the `sortStrategy` property of the `IgxTreeGridComponent` to an instance of `IgxGroupedTreeGridSorting`.

## Angular Tree Grid グループ化の例

<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Tree Grid グループ化の例">
</code-view>

<div class="divider--half"></div>

#### 実装

In this sample we are using the `treeGridGrouping` pipe and the UI component with selector `igx-tree-grid-group-by-area` for the grouping. The data is grouped by the **"category"**, **"type"** and **"contract"** fields. The resulting hierarchy is displayed in the newly created **"categories"** column. The pipe also calculates aggregated values for the generated parent rows for the **"price"**, **"change"** and **"changeP"** columns. 

```html
<igx-tree-grid #grid1
    [data]="data$ | async | treeGridGrouping:groupingExpressions:groupColumnKey:childDataKey:grid1:aggregations"
    [childDataKey]="childDataKey"
    [sortStrategy]="sorting">
    <igx-tree-grid-group-by-area
        [grid]="grid1"
        [(expressions)]="groupingExpressions"
        [hideGroupedColumns]="true">
    </igx-tree-grid-group-by-area>
    <igx-column [field]="groupColumnKey"></igx-column>
```

Here you can see how the grouping expressions and aggregations are defined:

```typescript
public groupingExpressions: IGroupingExpression[] = [
    { fieldName: 'category', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'type', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'contract', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
        field: 'change'
    },
    {
        aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
        field: 'price'
    },
    {
        aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
        field: 'changeP'
    }
];
public childDataKey = 'children';
public groupColumnKey = 'categories';
public sorting = IgxGroupedTreeGridSorting.instance();
```

## Angular Tree Grid グループ化 ロード オン デマンドの例

<code-view style="height:850px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-group-by-load-on-demand" alt="Angular Tree Grid グループ化 ロード オン デマンドの例">
</code-view>

<div class="divider--half"></div>

#### 実装

このサンプルでは、データを部分的に読み込みます。最初は最上位のカテゴリのみが表示され、親行が展開されると子データが提供されます。このアプローチの詳細については、[ツリー グリッド ロードオンデマンド](load-on-demand.md) トピックを参照してください。データは、**ShipCountry**、**ShipCity**、**Discontinued** フィールドによってグループ化され、結果の階層が別の列に表示されます。グループ化はリモート サービスで実行されます。データが変更され、対応する子キーと親キーが割り当てられ、最終データを階層ビューで表示するために使用されます。このサービスの仕組みについて詳しくは、`remoteService.ts` ファイルの `TreeGridGroupingLoadOnDemandService` クラスをご覧ください。

ロードオンデマンドの使用方法の例を次に示します。

```html
    <igx-tree-grid #treeGrid
        [data]="data"
        [loadChildrenOnDemand]="loadChildren"
        [primaryKey]="primaryKey"
        [foreignKey]="foreignKey"
        [hasChildrenKey]="hasChildrenKey">
        <igx-tree-grid-group-by-area
            [grid]="treeGrid"
            [(expressions)]="groupingExpressions"
            (expressionsChange)="onExpressionsChange($event)"
            [hideGroupedColumns]="true">
        </igx-tree-grid-group-by-area>
        <igx-column [field]="groupColumnKey"></igx-column>
```

ユーザーが行を展開するときに子行を読み込むために、ツリーグリッドはコールバック入力プロパティ [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) を提供します - 子データはサーバーから取得され、グループ化パラメーターに基づいて要求された親行に割り当てられます。

```typescript
public groupingExpressions: IGroupingExpression[] = [
    { fieldName: 'ShipCountry', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'ShipCity', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'Discontinued', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
];
public primaryKey = 'id';
public foreignKey = 'parentId';
public hasChildrenKey = 'children';
public groupColumnKey = '';

private dataService = new TreeGridGroupingLoadOnDemandService();

public ngOnInit() {
    this.reloadData();
}

public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(parentID, this.hasChildrenKey, groupingParameters, (children) => done(children));
};

private reloadData() {
    this.treeGrid.isLoading = true;
    this.treeGrid.expansionStates.clear();
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(null, this.hasChildrenKey, groupingParameters, (children) => {
        this.data = children;
        this.treeGrid.isLoading = false;
        this.treeGrid.reflow();
    });
}
```

### API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)

### その他のリソース

<div class="divider--half"></div>

* [TreeGrid 概要](tree-grid.md)
* [TreeGrid 集計](summaries.md)
* [Grid 集計](../grid/summaries.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
