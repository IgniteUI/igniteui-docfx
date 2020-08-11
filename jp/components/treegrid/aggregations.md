---
title: Tree Grid 集計 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tree Grid 集計については、データのグループ化と集計をご覧ください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular Controls, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Tree Grid, Angular Tree Grid コンポーネント, Angular Tree Grid コントロール, Angular 高パフォーマンス Tree Grid, Summaries, Summary, Aggregate, Aggregations
_language: ja
---

### Tree Grid 集計
階層以外のデータ列を **group by** し、**集計値**で親行を生成する場合、[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) と以下のデモのようなカスタム実装を使用します。

#### デモ

<div class="sample-container loading" style="height:850px">
    <iframe id="treegrid-finjs-iframe" src='{environment:lobDemosBaseUrl}/treegrid-finjs-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> このサンプルは [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) には含まれていないカスタム ロジックを使用します。  [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) のグループ化や集計機能と同様ですが、集計行内ではなく、集計データが親行に表示されます。

#### 実装

サンプルでは、パイプ クラス `TreeGridGroupingPipe` を作成しました。このクラスは、**Category**、**Type**、**Contract** で表形式のデータをグループ化します。ソート後の階層は新しく作成された **Categories** 列に表示されます。パイプは、**Price**、**Change**、**Change(%)** 列に生成した親行の集計値を計算します。パイプの詳細については、`tree-grid-grouping.pipe.ts` ファイルの `TreeGridGroupingPipe` クラスを参照してください。パイプは完全にカスタマイズが可能でカスタム プロジェクトに使用できます。

以下はテンプレートでパイプを使用した例です。

```html
<igx-tree-grid #grid1 
               [data]="data | treeGridGrouping:groupColumns:aggregations:groupColumnKey:primaryKey:childDataKey"
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
public groupColumns = ["Category", "Type", "Contract"];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.Change).reduce((ty, u) => ty + u, 0);
        },
        field: "Change"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.Price).reduce((ty, u) => ty + u, 0);
        },
        field: "Price"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return parent.Change / (parent.Price - parent.Change) * 100;
        },
        field: "Change(%)"
    }
];
public primaryKey = "ID";
public childDataKey = "Children";
public groupColumnKey = "Categories";
```

### API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)

### その他のリソース

<div class="divider--half"></div>

* [TreeGrid 概要](tree_grid.md)
* [TreeGrid 集計](summaries.md)
* [Grid 集計](../grid/summaries.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)



