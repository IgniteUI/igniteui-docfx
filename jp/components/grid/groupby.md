﻿---
title: Angular Grid Group By |Column Group |Ignite UI for Angular |infragistics
_description: Angular グループを設定して Angular Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, infragistics
_language: ja
---

### グリッドのグループ化

Angular Material テーブルまたは UI グリッドの Group by 動作は、列の値に基づいてグループ化されたデータ行を作成します。[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) の Group By では、グループを階層構造で視覚化できます。グループデータ行は展開または縮小でき、グループの順序は UI または API で変更できます。


#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

#### 初期のグループ化状態

グリッドの [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) プロパティに式の配列を割り当てることによって、グリッドの初期グループ化を定義することができます。

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

グループ式は、[`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) インターフェイスを実装します。

#### グループ化 API

グループ化は、UI およびグリッド コンポーネントで公開された API で実行できます。各列の [`groupable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#groupable) プロパティを `true`に設定してエンドユーザーは特定の列でグリッド データをグループ化できます。

```html
<igx-grid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```

ランタイムの式は [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) プロパティの取得または設定できます。既存の式を追加または変更する必要がある場合、[`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) の単一または配列の [`groupBy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupby) メソッドを使用してください。

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

グループ化は、並べ替えおよびグループ式が列がグループ化されずに並べ替えられた場合も並べ替えされた列として適用される場合に可能です。グループ式は [`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions) プロパティにあり、グループ列の式が常に最初になるよう並べ替えます。並べ替え API は、グループ化された列の式を変更した場合にグルーピングに影響があります。グループ式 (列グループ解除) を削除して並べ替えを解除します。

グループ式の他にグループ行の展開も制御できます。[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) コンポーネント [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate) の別のプロパティに保存されます。グループ行は、作成されたフィールド名とグループ化の各レベルを表す値に基づいて識別されます。以下は展開状態のインターフェイスのシグネチャです。

```typescript
export interface IGroupByKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupByKey>;
    expanded: boolean;
}
```

[`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) で [`IGroupByExpandState`]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html) のリストを直接 [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate) に設定すると展開が変更されます。[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) はグループ レコード インスタンスでトグルするメソッドを公開します。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    grid.toggleGroup(groupRow);
```

グループは展開済み (***デフォルト***) または縮小済みに作成でき、展開状態は一般的にデフォルト動作の反対の状態のみ含みます。グループを作成して展開するかどうか、または [`groupsExpanded`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupsexpanded) プロパティを介すかどうかを制御できます。

#### グループ行テンプレート

UI の展開/縮小なしのグループ行は完全なテンプレート化が可能です。デフォルトでグループ アイコンを描画し、フィールド名と値を表示します。テンプレートが描画されるレコードのグループ化には、以下のシグネチャがあります。

```typescript
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
}
```

たとえば、以下のテンプレートはグループ行集計でより詳細な情報を表示します。

```html
<ng-template igxGroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```
<!-- ### Group By with Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

#### Demo

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-paging-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-paging-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Group By with Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.html#summaries-with-group-by) topic. -->

#### キーボード ナビゲーション

グループ UI は、以下のキーボード インタラクションをサポートします。

- グループ行 (行または展開/縮小セルにフォーカス)
   -  <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - グループの展開
   -  <kbd>ALT</kbd> + <kbd>LEFT</kbd> - グループの縮小


- グループ領域の [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) コンポーネントのグループ化 (チップにフォーカス)
   - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - フォーカスしたチップの左へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - フォーカスしたチップの右へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SPACE</kbd> - 並べ替えの方向を変更します。
   - <kbd>DELETE</kbd> - フィールドのグループ解除
   - チップの別の要素をフォーカスでき <kbd>ENTER</kbd> キーでインタラクティブに操作できます。

### 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ列の最大値は 10 です。 | 10 列以上の場合はエラーがスローされます。

### API リファレンス

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IGroupByExpandState]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent Styles]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### その他のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [可視化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
