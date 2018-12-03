---
title: グループ化機能 - ネイティブ  Angular | Ignite UI for Angular
_description: Ignite UI for Angular グループ化機能は、特定の列の共通の値に基づいてデータをグループ化します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid, group by, groupby, グループ化, 列グループ化
_language: ja
---

### グリッドのグループ化

[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) は、列グループ値に基づいて階層グループのデータ レコードを可視化できる列グループをサポートします。グループは展開または縮小でき、グループの順序は UI または API で変更できます。


#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-iframe" src='{environment:demosBaseUrl}/grid-groupby' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

#### 初期のグループ化状態

グリッドの初期のグループ化状態を設定するには、式の配列をグリッドの [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) プロパティに設定します。

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc, ignoreCase: false }
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

ランタイムの式は [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) プロパティから取得または設定できます。既存の式を追加または変更する必要がある場合、[`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) の単一または配列 の [`groupBy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupby) メソッドを使用してください。

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc });
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

### API

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
* [可視化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
