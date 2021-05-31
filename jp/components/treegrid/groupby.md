---
title: Angular Tree Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: Angular グループを設定して Angular Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, infragistics, angular グループ化, インフラジスティックス
_language: ja
---

# Angular Tree Grid グループ化

階層以外のデータ列を **グループ化**し、**集計値**で親行を生成する場合、[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) と以下のデモのようなカスタム実装を使用します。

> [!NOTE]
> These samples contains custom logic which is not built in the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html). It is similar to the grouping and summaries features of the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html), but instead inside separate summary rows, the calculated data is displayed inside the parent rows.

In these samples we have also created an UI component with selector `igx-tree-grid-group-area` which handles the UI interactions related to the columns that are used for the grouping. For more information on how this component works you can take a look at the `IgxTreeGridGroupAreaComponent` class in the `tree-grid-group-area.component.ts` file. The component is completely configurable so you could copy and re-use it in your own project.

Here is an example of how to use the component in the template:

```html
<igx-grid-toolbar *ngIf="showToolbar">
    <igx-grid-toolbar-title class="grid-toolbar-title">
        <igx-tree-grid-group-area
            [grid]='grid1'
            [(groupColumns)]='groupColumns'
            [groupColumnKey]='groupColumnKey'>
        </igx-tree-grid-group-area>
    </igx-grid-toolbar-title>
```

The component's inputs are the following:
- grid - `IgxTreeGridComponent` that is used for the grouping
- groupColumns - an array of string values which contains the fields used to generate the hierarchy
- groupColumnKey - a string value for the name of the generated hierarchy column

## Angular Tree Grid グループ化の例

<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Tree Grid グループ化の例">
</code-view>

<div class="divider--half"></div>

#### 実装

サンプルでは、パイプ クラス `TreeGridGroupingPipe` を作成しました。このクラスは、**"category"**、**"type"**、**"contract"** で表形式のデータをグループ化します。ソート後の階層は新しく作成された **Categories** 列に表示されます。パイプは、**"price"**、**"change"**、**"changeP"** 列に生成した親行の集計値を計算します。パイプの詳細については、`tree-grid-grouping.pipe.ts` ファイルの `TreeGridGroupingPipe` クラスを参照してください。パイプは完全にカスタマイズが可能でカスタム プロジェクトに使用できます。

以下はテンプレートでパイプを使用した例です。

```html
<igx-tree-grid #grid1 
               [data]="data$ | async | treeGridGrouping:groupColumns:aggregations:groupColumnKey:primaryKey:childDataKey"
               [primaryKey]="primaryKey" [childDataKey]="childDataKey">
    <igx-column [field]="groupColumnKey" [width]="'180px'" [sortable]='true' [resizable]='true' [disableHiding]="true"></igx-column>
```

以下は引数です。
- groupColumns - 階層を生成するために使用されるフィールドを含む文字列の配列。
- aggregations - 集計関数の情報を含む `ITreeGridAggregation` オブジェクトの配列。
- groupColumnKey - 生成した階層列の名前の文字列値。
- primaryKey - プライマリキー フィールドの文字列値。
- childDataKey - 生成された親行の子コレクションが保存されるフィールドのための文字列値。

```typescript
public groupColumns = ["category", "type", "contract"];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.change).reduce((ty, u) => ty + u, 0);
        },
        field: "change"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.price).reduce((ty, u) => ty + u, 0);
        },
        field: "price"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return parent.change / (parent.price - parent.change) * 100;
        },
        field: "changeP"
    }
];
public primaryKey = "id";
public childDataKey = "children";
public groupColumnKey = "categories";
```

## Angular Tree Grid グループ化 ロード オン デマンドの例

<code-view style="height:850px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-group-by-load-on-demand" alt="Angular Tree Grid グループ化 ロード オン デマンドの例">
</code-view>

<div class="divider--half"></div>

#### 実装

In this sample, data is loaded in portions. Initially, only the top level categories are displayed, then child data is served once a parent row is expanded. For more information on this approach, please refer to the [Tree Grid Load On Demand](load-on-demand.md) topic. The data is grouped by the **"ShipCountry"**, **"ShipCity"** and **"Discontinued"** fields and the resulting hierarchy is displayed in a separate column. The grouping is performed on a remote service - the data is modified and corresponding child and parent keys are assigned that are used to display the final data in a hierarchical view. For more information on how this service works you can take a look at the `TreeGridGroupingLoadOnDemandService` class in the `remoteService.ts` file.

Here is an example of how to use load on demand:

```html
<igx-tree-grid #treeGrid
    [data]="data" [loadChildrenOnDemand]="loadChildren"
    [primaryKey]="primaryKey" [childDataKey]="childDataKey" [hasChildrenKey]="hasChildrenKey">
    <igx-column [field]="groupColumnKey" [width]="'180px'" [resizable]='true' [disableHiding]="true"></igx-column>
```

In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) - the children data is retrieved from the server and it is assigned to the requested parent row based on the grouping parameters.

```typescript
public groupColumns = ['ShipCountry', 'ShipCity', 'Discontinued'];
public primaryKey = 'id';
public childDataKey = 'children';
public hasChildrenKey = 'children';
public groupColumnKey = '';

private dataService = new TreeGridGroupingLoadOnDemandService();

public ngOnInit() {
    this.reloadData();
}

public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(parentID, groupingParameters, (children) => done(children));
};

private reloadData() {
    this.treeGrid.isLoading = true;
    this.treeGrid.expansionStates.clear();
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(null, groupingParameters, (children) => {
        this.data = children;
        this.treeGrid.isLoading = false;
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
