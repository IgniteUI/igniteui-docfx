@@if (igxName === 'IgxGrid') {
---
title: Angular Grid の状態保持 - Ignite UI for Angular
_description: 包括的な Ignite UI for Angular のツールセットを使用して、グリッドの状態を簡単に保存および復元できます。列の復元、使用方法、デモをご覧ください。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス 
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid の状態保持 - Ignite UI for Angular
_description: 包括的な Ignite UI for Angular のツールセットを使用して、グリッドの状態を簡単に保存および復元できます。列の復元、使用方法、デモをご覧ください。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス 
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid の状態保持 - Ignite UI for Angular
_description: 包括的な Ignite UI for Angular のツールセットを使用して、グリッドの状態を簡単に保存および復元できます。列の復元、使用方法、デモをご覧ください。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス 
_language: ja
---
}
@@if (igxName === 'IgxPivotGrid') {
---
title: Angular Pivot Grid State Persistence - Ignite UI for Angular
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Angular. Learn how to restore configuration, explore usage, and see demos!
_keywords: state persistence, ignite ui for angular, infragistics
_canonicalLink: grid/state-persistence
---
}

# @@igComponent の状態保持

igxGridState ディレクティブによって開発者がグリッドの状態を簡単に保存および復元できます。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブがグリッドに適用されると、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) および [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。

## サポートされている機能
[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブは、以下の機能の状態の保存および復元をサポートします。

@@if (igxName !== 'IgxHierarchicalGrid' && igxName !== 'IgxPivotGrid') {

* `ソート`
* `フィルタリング`
* `高度なフィルタリング`
* `ページング`
* `セル選択`
* `行の選択`
* `列の選択`
* `行のピン固定`
* `展開`
* `グループ化`
* `複数の列`
    * 複数列ヘッダーが標準でサポートされるようになりました。
    * 列の順序
    * [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) インターフェイスによって定義される列プロパティ。
    * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#restoring-columns)セクションを参照してください。
}

@@if (igxName === 'IgxHierarchicalGrid') {
* `行アイランド`
    * 階層のすべての子グリッドの保存/復元機能
* `ソート`
* `フィルタリング`
* `高度なフィルタリング`
* `ページング`
* `セル選択`
* `行の選択`
* `列の選択`
* `行のピン固定`
* `展開`
* `複数の列`
    * 複数列ヘッダーが標準でサポートされるようになりました。
    * 列の順序
    * [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) インターフェイスによって定義される列プロパティ。
    * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#列の復元)セクションを参照してください。
}

@@if (igxName === 'IgxPivotGrid') {
* `Sorting`
* `Filtering`
* `Cell Selection`
* `Row Selection`
* `Column Selection`
* `Expansion`
* `Pivot Configuration`
    * Pivot Configuration properties defined by the [`IPivotConfiguration`]({environment:angularApiUrl}/interfaces/ipivotconfiguration.html) interface.
    * Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.
    * Pivot Row and Column strategies are also restored using application level code, see [Restoring Pivot Strategies](state-persistence.md#restoring-pivot-strategies) section.
}

@@if (igxName !== 'IgxPivotGrid') {
> [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブはテンプレートを処理しません。列テンプレートの復元方法については、「[列の復元](state-persistence.md#列の復元)」セクションを参照してください。
}
## 使用方法

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) - このメソッドは、シリアル化された JSON 文字列でグリッド状態を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウド、ブラウザーの localStorage など) に保存できます。このメソッドは最初のオプションのパラメーター `serialize` を受け取り、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) が [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) オブジェクトを返すか、シリアル化された JSON 文字列を返すかを決定します。
開発者は、機能名、または機能名を 2 番目の引数として持つ配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。
```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);
```

[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) - [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) メソッドは、シリアル化されたJSON文字列または [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) オブジェクトを引数として受け入れ、オブジェクト/JSON 文字列で見つかった各機能の状態を復元します。

```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```

`options` - [`options`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#options) オブジェクトは、[`IGridStateOptions`]({environment:angularApiUrl}/classes/igridstateoptions.html) インターフェースを実装します。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) メソッドはこれらの機能の状態を戻り値に入れず、[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) メソッドはその状態を復元しません。

```typescript
public options =  { cellSelection: false; sorting: false; }
```
@@if (igxName === 'IgxGrid') {
```html
<igx-grid [igxGridState]="options"></igx-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [igxGridState]="options"></igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [igxGridState]="options"></igx-tree-grid>
```
}
@@if (igxName === 'IgxPivotGrid') {
```html
<igx-pivot-grid [igxGridState]="options"></igx-pivot-grid>
```
}

これらのシンプルなシングル ポイント API を使用すると、わずか数行のコードで完全な状態維持機能を実現できます。**下からコードをコピーして貼り付けます** - ユーザーが現在のページを離れるたびに、ブラウザーの `sessionStorage` オブジェクトにグリッドの状態が保存されます。ユーザーがメイン ページに戻るときに、グリッドの状態が復元されます。必要なデータを取得するために、複雑で高度なフィルタリングやソートの式を毎回設定する必要はなくなりました。一度実行して、以下のコードでユーザーに代わって処理してください。

```typescript
// app.component.ts
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;

public ngOnInit() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });
}

public ngAfterViewInit() {
    this.restoreGridState();
}

public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);
}

public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);
}
```

@@if (igxName !== 'IgxPivotGrid') {
## 列の復元

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) はデフォルトで列テンプレート、列フォーマッタなどを保持しません ([`制限`](state-persistence.md#制限)を参照)。これらの復元は、アプリケーション レベルのコードで実現できます。テンプレート化された列でこれを行う方法を示します。

1. テンプレート参照変数 (以下の例では `#activeTemplate`) を定義し、[`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) イベントにイベント ハンドラーを割り当てます。
@@if (igxName === 'IgxGrid') {
```html
<igx-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-tree-grid>
```
}
2. @ViewChild または @ViewChildren デコレータを使用して、コンポーネントのテンプレート ビューをクエリします。[`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) イベント ハンドラーで、テンプレートを列の `bodyTemplate` プロパティに割り当てます。

```typescript
@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;
public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }
}
```
}


@@if (igxName === 'IgxPivotGrid') {
## Restoring Pivot Configuration
[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will not persist pivot dimension functions, value formatters, etc. by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxPivotGrid` exposes two events which can be used to set back any custom functions you have in the configuration: [`dimensionInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dimensionInit) and [`valueInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#valueInit). Let's show how to do this:

* Assign event handlers for the `dimensionInit` and `valueInit` events:

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfig" [igxGridState]="options"
    (valueInit)='onValueInit($event)' (dimensionInit)='onDimensionInit($event)'>
</igx-pivot-grid>
```
> The [`dimensionInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dimensionInit) and [`valueInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#valueInit) events are emitted for each value and dimension defined in the [`pivotConfiguration`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#pivotConfiguration) property.

* In the `valueInit` event handler set all custom aggregators, formatters and styles:

```typescript
public onValueInit(value: IPivotValue) {
    // Needed only for custom aggregators, formatter or styles.
    if (value.member === 'AmountofSale') {
        value.aggregate.aggregator = IgxTotalSaleAggregate.totalSale;
        value.aggregateList?.forEach((aggr: IPivotAggregator) => {
            switch (aggr.key) {
                case 'SUM':
                    aggr.aggregator = IgxTotalSaleAggregate.totalSale;
                    break;
                case 'MIN':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMin;
                    break;
                case 'MAX':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMax;
                    break;
            }
        });
    } else if (value.member === 'Value') {
        value.formatter = (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
        value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
        value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
}
```
* In the `dimensionInit` event handler set all custom `memberFunction` implementations:

```typescript
public onDimensionInit(dim: IPivotDimension) {
    switch (dim.memberName) {
        case 'AllProducts':
            dim.memberFunction = () => 'All Products';
            break;
        case 'ProductCategory':
            dim.memberFunction = (data) => data.Product.Name;
            break;
        case 'City':
            dim.memberFunction = (data) => data.Seller.City;
            break;
        case 'SellerName':
            dim.memberFunction = (data) => data.Seller.Name;
            break;
    }
}
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
## 子グリッドの復元
子グリッドの状態の保存/復元は、[`rowIslands`]({environment:angularApiUrl}/interfaces/igxgridstateoptions.html#rowislands) プロパティによって制御され、デフォルトで有効に設定されています。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) は、ルート グリッドと階層のすべての子グリッドの両方の機能を保存/復元するために同じオプションを使用します。たとえば、以下のオプションを渡す場合:

``` html
<!-- public options = {selection: false, sorting: false, rowIslands: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```
`getState` API は、`選択`と`ソート`を除くすべてのグリッド (ルート グリッドと子グリッド) 機能の状態を返します。開発者が後ですべてのグリッドの`フィルタリング`状態のみを復元するには、以下を使用します。
```typescript
this.state.setState(state, ['filtering', 'rowIslands']);
```
}


@@if (igxName === 'IgxGrid') {
## Demo

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-state" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {
## Demo

<code-view style="height:1000px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-state" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {
## Demo

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-state" >
</code-view>

}

@@if (igxName === 'IgxPivotGrid') {

<code-view style="height:820px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-state-persistence" >
</code-view>

}

@@if (igxName === 'IgxPivotGrid') {
## Restoring Pivot Strategies
[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will not persist neither remote pivot operations nor custom dimension strategies (For further information see [Pivot Grid Remote Operations](pivot-grid-custom.md) sample) by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxGridState` exposes an event called [`stateParsed`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#stateParsed) which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:

> [`stateParsed`]({environment:angularApiUrl}/classes/igxgridstatedirective) is only emitted when we are using [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) with string argument.

* Set custom sorting strategy and custom pivot column and row dimension strategies:

```html
<igx-pivot-grid #grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy" [defaultExpandState]='true'
    [igxGridState]="options" [sortStrategy]="customStrategy" [showPivotConfigurationUI]='false' [superCompactMode]="true" [height]="'500px'">
</igx-pivot-grid>
```

```typescript
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;

public customStrategy = NoopSortingStrategy.instance();
public options: IGridStateOptions = {...};
public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
    columns: [...],
    rows: [...],
    values: [...],
    filters: [...]
};
```

* Restoring the state from the `sessionStorage` and applying the custom strategies looks like the following:

```typescript
public restoreState() {
    const state = window.sessionStorage.getItem('grid-state');
    this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
        parsedState.sorting.forEach(x => x.strategy = NoopSortingStrategy.instance());
        parsedState.pivotConfiguration.rowStrategy = NoopPivotDimensionsStrategy.instance();
        parsedState.pivotConfiguration.columnStrategy = NoopPivotDimensionsStrategy.instance();
    });
    this.state.setState(state as string);
}
```
<code-view style="height: 580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-noop-persistence" alt="Angular Pivot Noop Grid State Persistence Example">
</code-view>

}

## 制限
@@if (igxName === 'IgxHierarchicalGrid') {
* パラメーターなしで `setState` API を使用してすべてのグリッド機能を一度に復元する場合、ルート グリッドの列プロパティがデフォルトにリセットされる場合があります。その場合は、後で列または列の選択機能を復元してください。
```typescript
state.setState(gridState);
state.setState(gridState.columns);
state.setState(gridState.columnSelection);
```
}
@@if (igxName !== 'IgxPivotGrid') {
* [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトを JSON 文字列に変換します。JSON.stringify() が関数をサポートしないため、[`IgxGridState`] ディレクティブは、列の [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter)、[`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters)、[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries)、[`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy)、[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses)、[`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellstyles)、[`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#headertemplate) および [`bodyTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#bodytemplate) プロパティを無視します。
}
@@if (igxName === 'IgxPivotGrid') {
* [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive will ignore the pivot dimension [`memberFunction`]({environment:angularApiUrl}/interfaces/IPivotDimension.html#memberFunction), pivot values [`member`]({environment:angularApiUrl}/interfaces/IPivotValue.html#member), [`formatter`]({environment:angularApiUrl}/interfaces/IPivotValue.html#formatter), custom [`aggregate`]({environment:angularApiUrl}/interfaces/IPivotValue.html#aggregate) functions,
 [`styles`]({environment:angularApiUrl}/interfaces/IPivotValue.html#styles) and pivot configuration strategies: [`columnStrategy`]({environment:angularApiUrl}/interfaces/ipivotconfiguration.html#columnStrategy) and [`rowStrategy`]({environment:angularApiUrl}/interfaces/ipivotconfiguration.html#rowStrategy).
}
<div class="divider--half"></div>


## API リファレンス

@@if (igxName === 'IgxGrid') {
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}
@@if (igxName === 'IgxHierarchicalGrid') {
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}
@@if (igxName === 'IgxTreeGrid') {
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}
@@if (igxName === 'IgxPivotGrid') {
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}

## その他のリソース
<div class="divider--half"></div>

@@if (igxName !== 'IgxPivotGrid') {
* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [選択](selection.md)
}
@@if (igxName === 'IgxPivotGrid') {
* [@@igComponent Overview](@@igMainTopic.md)
* [Pivot Grid Remote Operations](pivot-grid-custom.md)
* [Pivot Grid Features](pivot-grid-features.md)
}