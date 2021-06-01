---
title: Angular Tree Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: Angular グループを設定して Angular Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, infragistics, angular グループ化, インフラジスティックス
_language: ja
---

# Angular Tree Grid グループ化

階層以外のデータ列を **グループ化**し、**集計値**で親行を生成する場合、[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) と以下のデモのようなカスタム実装を使用します。

> [!NOTE]
> これらのサンプルには、[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) に組み込まれていないカスタム ロジックが含まれています。以下の [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) のグループ化や集計機能と同様ですが、集計行内ではなく、集計データが親行に表示されます。

このサンプルでは、グループ化に使用される列に関連する UI 操作を処理するセレクター `igx-tree-grid-group-area` を使用して UI コンポーネントも作成しました。このコンポーネントの動作の詳細については、 `tree-grid-group-area.component.ts` ファイルの `IgxTreeGridGroupAreaComponent` クラスを参照してください。コンポーネントは完全にカスタマイズが可能でカスタム プロジェクトに使用できます。

以下はテンプレートでコンポーネントを使用した例です。

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

コンポーネントの入力は次のとおりです:
- grid - グループ化に使用される `IgxTreeGridComponent`。
- groupColumns - 階層を生成するために使用されるフィールドを含む文字列の配列。
- groupColumnKey - 生成した階層列の名前の文字列値。

## Angular Tree Grid グループ化の例

<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Tree Grid グループ化の例">
</code-view>

<div class="divider--half"></div>

#### 実装

サンプルでは、パイプ クラス `TreeGridGroupingPipe` を作成しました。このクラスは、**category**、**type**、**contract** で表形式のデータをグループ化します。ソート後の階層は新しく作成された **Categories** 列に表示されます。パイプは、**price**、**change**、**changeP** 列に生成した親行の集計値を計算します。パイプの詳細については、`tree-grid-grouping.pipe.ts` ファイルの `TreeGridGroupingPipe` クラスを参照してください。パイプは完全にカスタマイズが可能でカスタム プロジェクトに使用できます。

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

このサンプルでは、データを部分的に読み込みます。最初は最上位のカテゴリのみが表示され、親行が展開されると子データが提供されます。このアプローチの詳細については、[ツリー グリッド ロードオンデマンド](load-on-demand.md) トピックを参照してください。データは、**ShipCountry**、**ShipCity**、**Discontinued** フィールドによってグループ化され、結果の階層が別の列に表示されます。グループ化はリモート サービスで実行されます。データが変更され、対応する子キーと親キーが割り当てられ、最終データを階層ビューで表示するために使用されます。このサービスの仕組みについて詳しくは、`remoteService.ts` ファイルの `TreeGridGroupingLoadOnDemandService` クラスをご覧ください。

ロードオンデマンドの使用方法の例を次に示します。

```html
<igx-tree-grid #treeGrid
    [data]="data" [loadChildrenOnDemand]="loadChildren"
    [primaryKey]="primaryKey" [childDataKey]="childDataKey" [hasChildrenKey]="hasChildrenKey">
    <igx-column [field]="groupColumnKey" [width]="'180px'" [resizable]='true' [disableHiding]="true"></igx-column>
```

ユーザーが行を展開するときに子行を読み込むために、ツリーグリッドはコールバック入力プロパティ [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) を提供します - 子データはサーバーから取得され、グループ化パラメーターに基づいて要求された親行に割り当てられます。

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
