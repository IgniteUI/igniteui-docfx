---
title: Angular Grid グループ化 | 複数のフィールドでグループ化 | インフラジスティックス
_description: Angular グループを設定して Angular テーブルにデータ レコードを視覚化し、グループ化されたデータを個別の列グループに視覚化できます。
_keywords: angular group by, igniteui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---

# Angular Grid グループ化

Ignite UI for Angular Table または UI Grid の Group By 動作は、列の値に基づいてグループ化されたデータ行を作成します。[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) の Group By では、グループを階層構造で視覚化できます。グループデータ行は展開または縮小でき、グループの順序は UI または API で変更できます。行選択を有効にすると、Group By 行セレクターがグループ行の一番左の領域に描画されます。[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) プロパティが単一に設定されている場合、チェックボックスは無効になり、選択が行われるグループの表示としてのみ機能します。[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) プロパティが複数に設定されている場合、Group By 行セレクターをクリックすると、このグループに属するすべてのレコードが選択されます。

## Angular Grid グループ化の例
この例は、大量のデータのグループ化が可能であることを示しています。列ヘッダーを一番上 (グループ化領域) にドラッグすると、ユーザーは選択した列のデータを階層構造で表示できます。さらに列ヘッダーを一番上にドラッグすることで、複数のフィールドでグループ化できます。これらのグループ化オプションは、ユーザーが多数の行と列を持つテーブルがあり、はるかに高速で視覚的に受け入れられる方法でデータを表示しようとする場合に役立ちます。


<code-view style="height:605px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby" alt="Angular Grid グループ化の例">
</code-view>


## 初期のグループ化状態

グリッドの [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingExpressions) プロパティに式の配列を割り当てることによって、グリッドの初期グループ化を定義することができます。

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

グループ式は、[`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) インターフェイスを実装します。

## Group By API

### グループ化 API

グループ化は、UI およびグリッド コンポーネントで公開された API で実行できます。各列の [`groupable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#groupable) プロパティを `true` に設定してエンドユーザーは特定の列でグリッド データをグループ化できます。

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

ランタイムの式は [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingExpressions) プロパティの取得または設定できます。既存の式を追加または変更する必要がある場合、[`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) の単一または配列の [`groupBy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupBy) メソッドを使用してください。

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

>[!NOTE]
> これまで、グループ化 / ソートは互いに連携して機能していました。13.2 バージョンでは、グループ化をソートから切り離す新しい動作が導入されています。たとえば、グループ化をクリアしても、グリッド内のソート式はクリアされません。その逆も同様です。それでも、列がソートおよびグループ化されている場合は、グループ化された式が優先されます。

### API の展開/縮小

グループ式の他にグループ行の展開も制御できます。[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) コンポーネント [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingExpansionState) の別のプロパティに保存されます。グループ行は、作成されたフィールド名とグループ化の各レベルを表す値に基づいて識別されます。以下は展開状態のインターフェイスのシグネチャです。

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

[`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingExpressions) で [`IGroupByExpandState`]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html) のリストを直接 [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingExpansionState) に設定すると展開が変更されます。[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) はグループ レコード インスタンスでトグルするメソッドを公開します。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.toggleGroup(groupRow);
    groupRow.expanded = false;
```

グループは展開済み (**デフォルト**) または縮小済みに作成でき、展開状態は一般的にデフォルト動作の反対の状態のみ含みます。グループを作成して展開するかどうか、または [`groupsExpanded`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupsExpanded) プロパティを介すかどうかを制御できます。

### グループ API ですべての行を選択/選択解除

グループ内のすべての行の選択/選択解除は、[`selectRowsInGroup`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectRowsInGroup) および [`deselectRowsInGroup`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deselectRowsInGroup) API メソッドを介して利用できます。

以下のコードスニペットは、グループ レコード [`selectRowsInGroup`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectRowsInGroup) メソッドを使用してグループ内のすべての行を選択するために使用できます。さらに、このメソッドの 2 番目のパラメーターは boolean プロパティです。それを使用して、前の行の選択をクリアするかどうかを選択できます。以前の選択はデフォルトで保存されます。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.selectRowsInGroup(groupRow);
```

プログラムでグループ内のすべての行の選択を解除する必要がある場合は、[`deselectRowsInGroup`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deselectRowsInGroup) メソッドを使用できます。

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.deselectRowsInGroup(groupRow);
```

## テンプレート

### グループ行テンプレート

展開/縮小 UI を除くグループ行は完全にテンプレート化可能です。デフォルトでグループ アイコンを描画し、フィールド名と値を表示します。テンプレートが描画されるレコードのグループ化には、以下のシグネチャがあります:

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

たとえば、以下のテンプレートはグループ行集計でより詳細な情報を表示します:

```html
<ng-template igxGroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

### グループ行セレクター テンプレート

上記のように、展開/縮小 UI を除くグループ行は完全にテンプレート化可能です。グリッド内にカスタムの GroupBy 行セレクター テンプレートを作成するには、`igxGroupByRowSelector` ディレクティブを使用して `<ng-template>` を宣言します。テンプレートから、Group By 行の状態に関する情報を提供するプロパティを使用して、暗黙的に提供されたコンテキスト変数にアクセスできます。

`selectedCount` プロパティは、現在選択されているグループ レコードの数を示し、`totalCount` はグループに属するレコードの数を示します。

```html
<ng-template igxGroupByRowSelector let-groupByRowContext>
    {{ groupByRowContext.selectedCount }} / {{ groupByRowContext.totalCount  }}
</ng-template>
```

`groupRow` プロパティは、グループ行への参照を返します。

```html
<ng-template igxGroupByRowSelector let-groupByRowContext>
    <div (click)="handleGroupByRowSelectorClick($event, groupByRowContext.groupRow)">Handle groupRow</div>
</ng-template>
```

`selectedCount` と `totalCount` プロパティを使用して、Group By 行セレクターをチェックするか不確定にする (部分的に選択する) かを決定できます。

```html
<igx-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template igxGroupByRowSelector let-context>
        <igx-checkbox
            [checked]=" context.selectedCount > 0 && context.selectedCount === context.totalCount"
            [indeterminate]="context.selectedCount > 0 && context.selectedCount !== context.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```

## Angular Grid ページングでグループ化

グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。展開または折りたたみ操作を行うと、ページングでページ数が再計算され、必要に応じてページ インデックスが調整されます。
複数のページにまたがるグループは、ページ間で分割されます。グループ行は、開始ページでのみ表示され、後続のページでは繰り返されません。グループ行の要約情報はグループ全体に基づいて計算され、ページングの影響を受けません。

### Angular ページングでグループ化の例


<code-view style="height:605px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-paging" alt="Angular ページングでグループ化の例">
</code-view>


## 集計でグループ化

グループ化と要約の統合については、[集計](summaries.md#グループの集計)トピックで説明しています。

## キーボード ナビゲーション

グループ UI は、以下のキーボード インタラクションをサポートします。

- グループ行 (行または展開/縮小セルにフォーカス)
   - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - グループの展開
   - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - グループの縮小
   - <kbd>SPACE</kbd> - <kbd>rowSelection</kbd> プロパティが複数に設定されている場合、グループ内のすべての行を選択します。

- グループ領域の [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) コンポーネントのグループ化 (チップにフォーカス)
   - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - フォーカスしたチップの左へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - フォーカスしたチップの右へ移動し、可能な場合はグループ順序を変更します。
   - <kbd>SPACE</kbd> - ソートの方向を変更します。
   - <kbd>DELETE</kbd> - フィールドのグループ解除
   - チップの別の要素をフォーカスでき <kbd>ENTER</kbd> キーでインタラクティブに操作できます。

## Angular Grid カスタム グループ化

igxGrid では、列ごとまたはグループ化式ごとにカスタム グループを定義できます。これにより、カスタム条件に基づいてグループ化が提供されます。これは、複雑なオブジェクトごとにグループ化する必要がある場合、または他のアプリケーション固有のシナリオで役立ちます。

> [!NOTE]
> カスタム グループ化を実装するには、まずデータを適切にソートする必要があります。このため、ベース [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) を拡張するカスタムのソート ストラテジを適用する必要がある場合もあります。データがソートされた後、列または特定のグループ化式に [`groupingComparer`]({environment:angularApiUrl}/interfaces/igroupingexpression.html#groupingComparer) を指定することにより、カスタム グループを決定できます。

以下のサンプルは、`Date` によるカスタム グループ化を示しています。日付の値は、ユーザーが選択したグループ化モードに基づいて、日、週、月、または年でソート / グループ化されています。

### Angular カスタム グループ化の例


<code-view style="height:605px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-custom" alt="Angular カスタム グループ化の例">
</code-view>


このサンプルでは、さまざまな日付条件のカスタム ソート ストラテジを定義しています。
各カスタム ストラテジ、ベースの [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) を拡張し、[`compareValues`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html#compareValues) メソッドを定義します。値をソートするときに使用されるカスタム比較関数です。さらに、比較に必要な日付から値を抽出します。

```typescript
class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : 0;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : dateA.day < dateB.day ?
            -1 : dateA.day > dateB.day ?
            1 : 0;
    }
}

class WeekSortingStrategy extends BaseSortingStrategy {

    public getWeekOfDate(a: any) {
       return parseInt(new DatePipe("en-US").transform(a, 'w'), 10);
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        const weekA = this.getWeekOfDate(a);
        const weekB = this.getWeekOfDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : weekA < weekB ?
            -1 : weekA > weekB ?
            1 : 0;
    }
}
```

[`groupingComparer`]({environment:angularApiUrl}/interfaces/igroupingexpression.html#groupingComparer) 関数がグループ化式に対して定義され、選択されたグループ化モードに基づいて同じグループに属するアイテムを決定します。この関数が 0 を返すソートされた値は、同じグループの一部としてマークされます。

```typescript
 groupingComparer: (a, b) => {
    const dateA = this.sortingStrategy.getParsedDate(a);
    const dateB = this.sortingStrategy.getParsedDate(b);
    if (this.groupByMode === 'Month') {
        return dateA.month === dateB.month ? 0 : -1;
    } else if (this.groupByMode === "Year") {
        return dateA.year === dateB.year ? 0 : -1;
    } else if (this.groupByMode === "Week") {
        return this.sortingStrategy.getWeekOfDate(a) === this.sortingStrategy.getWeekOfDate(b) ? 0 : -1;
    }
    return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
}
```

バージョン 15.1.0 以降、組み込みのソート ストラテジ `GroupMemberCountSortingStrategy` を使用して、メンバー数に基づいて項目をソートすることもできます。

```typescript
public sortByGroup() {
        const expressions = this.grid1.groupingExpressions;
        if (expressions.length) {
            const fieldName = expressions[0].fieldName;
            const dir = expressions[0].dir === SortingDirection.Asc ? SortingDirection.Desc : SortingDirection.Asc;
            this.grid1.groupBy({ fieldName, dir, ignoreCase: false, strategy: GroupMemberCountSortingStrategy.instance() });
        }
    }
```

## スタイル設定

igxGridを使用すると、[`Ignite UI for Angular テーマ ライブラリ`](../themes/sass/component-themes.md)でスタイルを設定できます。グリッドの [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。 

以下の手順では、グリッドの Group By スタイルをカスタマイズする手順を実行しています。

### グローバル テーマのインポート

グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

### カスタム テーマの定義

次に、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張し、必要に応じて Group By をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。Group By 機能で使用されるため、[`chip-theme`]({environment:sassApiUrl}/themes#function-chip-theme) を拡張する必要もあります。

```scss

$custom-theme: grid-theme(
  $group-row-background: #494949,
  $group-row-selected-background: #383838,
  $group-label-column-name-text: #f8f8f8,
  $group-label-icon: #ffcd0f,
  $group-label-text: #f8f8f8,
  $group-count-background: #ffcd0f,
  $group-count-text-color: #000,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: rgb(223, 181, 13),
  $cell-active-border-color: #ffcd0f,
  $row-selected-background: #fff6d3,
  $row-selected-text-color: #000,
  $drop-indicator-color: #ffcd0f
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: chip-theme(
  $background: #494949,
  $text-color: #f8f8f8,
  $hover-text-color: #e7e7e7
);
```

### カスタム カラー パレットの定義

上記で説明したアプローチでは、色の値がハード コーディングされていました。または、柔軟性を高めるために [`palette`]({environment:sassApiUrl}/palettes#function-palette)、[`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用することもできます。
`palette` は、指定されたプライマリ カラー、セカンダリ カラー、およびサーフェス カラーに基づいてカラー パレットを生成します。

```scss
$black-color: #292826;
$yellow-color: #ffcd0f;
$grey-color: #efefef;

$custom-palette: palette(
  $primary: $black-color, 
  $secondary: $yellow-color, 
  $surface: $grey-color
);
```

カスタム パレットが生成された後、`color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。 

```scss
$custom-theme: grid-theme(
  $group-row-background: color($custom-palette, "primary", 300),
  $group-row-selected-background: color($custom-palette, "primary", 400),
  $group-label-column-name-text:contrast-color($custom-palette, "primary", 500),
  $group-label-icon: color($custom-palette, "secondary", 600),
  $group-label-text:contrast-color($custom-palette, "primary", 500),
  $group-count-background: color($custom-palette, "secondary", 600),
  $group-count-text-color: color($custom-palette, "primary", 400),
  $expand-icon-color: color($custom-palette, "secondary", 600),
  $expand-icon-hover-color: color($custom-palette, "secondary", 300),
  $cell-active-border-color: color($custom-palette, "secondary", 600)
);

$custom-chips-theme: chip-theme(
  $background: color($custom-palette, "primary", 300),
  $text-color:contrast-color($custom-palette, "primary", 500),
  $hover-text-color:contrast-color($custom-palette, "primary", 600)
);
```

### カスタム スキーマの定義
さらに進んで、[**スキーマ**](../themes/sass/schemas.md)のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマの 1 つを拡張します。この場合、[`light-grid`]({environment:sassApiUrl}/schemas#variable-light-material-schema) を使用します。

```scss
$custom-grid-schema: extend(
  $light-grid,
  (
    group-row-background: (color:('secondary', 100)),
    group-row-selected-background: (color:('primary', 400)),
    group-label-column-name-text: (color:('primary', 600)),
    group-label-icon: (color:('primary', 600)),
    group-label-text: (color:('secondary', 700)),
    group-count-background: (color:('primary', 600)),
    group-count-text-color: (color:('secondary', 400)),
    expand-icon-color: (color:('primary', 600)),
    expand-icon-hover-color: (color:('primary', 400))
  )
);
```

カスタム スキーマを適用するには、[`light`]({environment:sassApiUrl}/schemas#variable-light-material-schema) グローバルまたは [`dark`]({environment:sassApiUrl}/schemas#variable-dark-material-schema) グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。

```scss
$my-custom-schema: extend(
  $light-material-schema, 
  ( 
    grid: $custom-grid-schema
  )
);

$custom-theme: grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

### カスタム テーマの適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
@include css-vars($custom-theme);
@include css-vars($custom-chips-theme);
```

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッド内のコンポーネントをスタイル設定するためには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

この例では、チップ テーマに `::ng-deep` を使用する必要があります。

```scss
@include css-vars($custom-theme);

:host {
  ::ng-deep {
    @include chip($custom-chips-theme);
  }
}
```

### デモ


<code-view style="height:570px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-styling" >
</code-view>

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## 既知の制限

|制限|説明|
|--- |--- |
|グループ列の最大値は 10 です。 | 10 列以上の場合はエラーがスローされます。

## API リファレンス

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGroupByRow]({environment:angularApiUrl}/classes/igxgroupbyrow.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IGroupByExpandState]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent スタイル]({environment:sassApiUrl}/themes#function-chip-theme)

## その他のリソース
<div class="divider--half"></div>

* [Grid 概要](grid.md)
* [可視化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列移動](column-moving.md)
* [集計](summaries.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
