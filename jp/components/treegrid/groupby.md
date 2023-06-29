---
title: Angular Tree Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: Angular グループを設定して Angular テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, infragistics, angular グループ化, インフラジスティックス
_language: ja
---

# Angular Tree Grid グループ化

階層以外のデータ列を **グループ化し**、**集計値**で親行を生成する場合、[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) を `treeGridGrouping` パイプと一緒に使用し、UI コンポーネントをセレクター `igx-tree-grid-group-by-area` と一緒に使用できます。

`treeGridGrouping` パイプは、提供されたパラメーターに基づいてデータをグループ化し、結果の階層は別の列に表示されます。集計が提供されている場合、パイプは生成された親行の集計値を計算することもできます。以下はテンプレートでパイプを使用した例です。

```html
<igx-tree-grid #grid 
               [data]="data | treeGridGrouping:groupingExpressions:groupKey:childDataKey:grid:aggregations"
               [childDataKey]="childDataKey"
               [sortStrategy]="sorting">
```

以下は引数です。
- groupingExpressions - [`IGroupingExpression`]({environment:angularApiUrl}/interfaces/igroupingexpression.html) オブジェクトの配列。これには、階層の生成に使用されるフィールドと各グループの並べ替えの詳細に関する情報が含まれます。
- groupKey - 生成された階層列の名前の文字列値。
- childDataKey - 生成された親行の子コレクションが保存されるフィールドのための文字列値。
- grid - グループ化に使用される `IgxTreeGridComponent`。
- aggregations (オプション) - 集計関数の情報を含む `ITreeGridAggregation` オブジェクトの配列。

`igx-tree-grid-group-by-area` セレクターを備えた UI コンポーネントは、グループ化に使用される列に関連する UI 操作を処理します。以下はテンプレートでコンポーネントを使用した例です。

```html
<igx-tree-grid-group-by-area
    [grid]='grid'
    [(expressions)]='groupingExpressions'
    [hideGroupedColumns]='true'>
</igx-tree-grid-group-by-area>
```

コンポーネントの入力は次のとおりです:
- grid - グループ化に使用される `IgxTreeGridComponent`。
- expressions - [`IGroupingExpression`]({environment:angularApiUrl}/interfaces/igroupingexpression.html) オブジェクトの配列。これには、階層の生成に使用されるフィールドと各グループの並べ替えの詳細が含まれます。
- hideGroupedColumns - グループ化が実行された列を非表示にするかどうかを示すブール値。
- density - ビューを変更するために使用できる [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displayDensity)。
- dropAreaTemplate - デフォルトのドロップ エリア テンプレートを上書きするために使用できるドロッ プエリアのテンプレート。
- dropAreaMessage - デフォルトのドロップ エリア テンプレートのデフォルト メッセージを上書きするために使用できる文字列。

> [!NOTE]
> ソートが正しく機能するためには、`IgxTreeGridComponent` の `sortStrategy` プロパティを `IgxGroupedTreeGridSorting` のインスタンスに設定する必要があります。

## Angular Tree Grid グループ化の例

<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Tree Grid グループ化の例">
</code-view>

<div class="divider--half"></div>

#### 実装

このサンプルでは、`treeGridGrouping` パイプと UI コンポーネントを使用してグループ化にセレクター `igx-tree-grid-group-by-area` を使用しています。データは、**"category"**、**"type"**、および **"contract"** フィールドによってグループ化されます。結果の階層は、新しく作成された **"categories"** 列に表示されます。パイプは、**"price"**、**"change"** および **"changeP"** 列に対して生成された親行の集計値も計算します。

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

ここでは、グループ化式と集計がどのように定義されているかを確認できます。

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

ユーザーが行を展開するときに子行を読み込むために、ツリーグリッドはコールバック入力プロパティ [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadChildrenOnDemand) を提供します - 子データはサーバーから取得され、グループ化パラメーターに基づいて要求された親行に割り当てられます。

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
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-grid-theme)

### その他のリソース

<div class="divider--half"></div>

* [TreeGrid 概要](tree-grid.md)
* [TreeGrid 集計](summaries.md)
* [Grid 集計](../grid/summaries.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
