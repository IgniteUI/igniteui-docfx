---
title: 階層グリッド - グループ化|Column Group|Ignite UI for Angular|infragistics
_description: Angular グループを設定して Angular Material テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, インフラジスティックス・ジャパン株式会社
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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
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
### ページングによるグループ化

グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。展開または折りたたみ操作を行うと、ページングでページ数が再計算され、必要に応じてページ インデックスが調整されます。
複数のページにまたがるグループは、ページ間で分割されます。グループ行は、開始ページでのみ表示され、後続のページでは繰り返されません。グループ行の要約情報はグループ全体に基づいて計算され、ページングの影響を受けません。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-paging-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-paging-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 集計でグループ化

グループ化と要約の統合については、[集計](summaries.html#グループの集計)トピックで説明しています。


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

### スタイル設定

igxGridを使用すると、[Ignite UI for Angular Theme ライブラリ](../themes/component-themes.md) でスタイルを設定できます。グリッドの [テーマ]({environment:sassApiUrl}/index.html#function-igx-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。 

以下の手順では、グリッドの Group By スタイルをカスタマイズする手順を実行しています。

#### グローバル テーマのインポート

グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### カスタム テーマの定義

次に、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、必要に応じて Group By をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。Group By 機能で使用されるため、[`igx-chip-theme`]({environment:sassApiUrl}/index.html#function-igx-chip-theme) を拡張する必要もあります。

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

#### カスタム カラー パレットの定義

上記で説明したアプローチでは、色の値がハード コーディングされていました。または、柔軟性を高めるために [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette)、[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することもできます。   
`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。

```scss
$black-color: #292826;
$yellow-color: #FFCD0F;

$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。 

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
#### カスタム スキーマの定義
さらに進んで、[**スキーマ**](../themes/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。 
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマの 1 つを拡張します。この場合、`$_light_grid` を使用します。   
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
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### カスタム テーマの適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。
```scss
@include igx-grid($custom-theme);
@include igx-chip($custom-chips-theme);
```

#### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (インデックス ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
        @include igx-chip($custom-chips-theme);
    }
}
```

#### デモ   

<div class="sample-container loading" style="height:570px">
    <iframe id="grid-sample-groupby-styling" data-src='{environment:demosBaseUrl}/grid/grid-groupby-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-styling" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ列の最大値は 10 です。 | 10 列以上の場合はエラーがスローされます。

### API リファレンス

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IGroupByExpandState]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

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
