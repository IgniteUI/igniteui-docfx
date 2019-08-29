---
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

### Styling

The igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid. 

In the below steps, we are going through the steps of customizing the grid's Group By styling.

#### Importing global theme

To begin the customization of the Group By feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### Defining custom theme

Next, create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the Group By as desired. You also need to extend the [`igx-chip-theme`]({environment:sassApiUrl}/index.html#function-igx-chip-theme), because it's used in the Group By feature.

```scss

$custom-theme: igx-grid-theme(
    /* Group By properties that affect styling */
    $group-row-background: #494949,
    $group-row-selected-background: #383838,
    $group-label-column-name-text: #f8f8f8,
    $group-label-icon: #FFCD0F,
    $group-label-text: #f8f8f8,
    $group-count-background: #FFCD0F,
    $group-count-text-color: #000,
    $expand-icon-color: #FFCD0F,
    $expand-icon-hover-color: rgb(223, 181, 13),
    $cell-active-border-color: #FFCD0F,
    $row-selected-background: #fff6d3,
    $row-selected-text-color: #000,
    $drop-indicator-color: #FFCD0F
    /* add other features properties here... */
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: igx-chip-theme(
    $background: #494949,
    $text-color: #f8f8f8,
    $hover-text-color: #e7e7e7
);
```

#### Defining a custom color palette

In the approach that we described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

```scss
$black-color: #292826;
$yellow-color: #FFCD0F;

$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
After a custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors. 

```scss
$custom-theme: igx-grid-theme(
    $group-row-background: igx-color($custom-palette, "primary", 300),
    $group-row-selected-background: igx-color($custom-palette, "primary", 400),
    $group-label-column-name-text: igx-contrast-color($custom-palette, "primary", 500),
    $group-label-icon: igx-color($custom-palette, "secondary", 600),
    $group-label-text: igx-contrast-color($custom-palette, "primary", 500),
    $group-count-background: igx-color($custom-palette, "secondary", 600),
    $group-count-text-color: igx-color($custom-palette, "primary", 400),
    $expand-icon-color: igx-color($custom-palette, "secondary", 600),
    $expand-icon-hover-color: igx-color($custom-palette, "secondary", 300),
    $cell-active-border-color: igx-color($custom-palette, "secondary", 600)
);

$custom-chips-theme: igx-chip-theme(
    $background: igx-color($custom-palette, "primary", 300),
    $text-color: igx-contrast-color($custom-palette, "primary", 500),
    $hover-text-color: igx-contrast-color($custom-palette, "primary", 600)
);
```
#### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme. 
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_light_grid`.   
```scss
$custom-grid-schema: extend($_light-grid,(
    group-row-background: (igx-color:('secondary', 100)),
    group-row-selected-background: (igx-color:('primary', 400)),
    group-label-column-name-text: (igx-color:('primary', 600)),
    group-label-icon: (igx-color:('primary', 600)),
    group-label-text: (igx-color:('secondary', 700)),
    group-count-background: (igx-color:('primary', 600)),
    group-count-text-color: (igx-color:('secondary', 400)),
    expand-icon-color: (igx-color:('primary', 600)),
    expand-icon-hover-color: (igx-color:('primary', 400))
));
```
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### Applying the custom theme

The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include igx-grid($custom-theme);
@include igx-chip($custom-chips-theme);
```

#### Scoped component theme

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
        @include igx-chip($custom-chips-theme);
    }
}
```

#### Demo   

<div class="sample-container loading" style="height:570px">
    <iframe id="grid-sample-groupby-styling" src='{environment:demosBaseUrl}/grid/grid-groupby-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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
