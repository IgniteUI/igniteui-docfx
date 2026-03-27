---
title: Angular Hierarchical Grid の状態保持 - Ignite UI for Angular
_description: 包括的な Ignite UI for Angular のツールセットを使用して、グリッドの状態を簡単に保存および復元できます。列の復元、使用方法、デモをご覧ください。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス
_license: commercial
_canonicalLink: grid/state-persistence
_language: ja
---




# Hierarchical Grid の状態保持

igxGridState ディレクティブによって開発者がグリッドの状態を簡単に保存および復元できます。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブがグリッドに適用されると、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) および [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の保持を実現できます。

## サポートされている機能

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブは、以下の機能の状態の保存および復元をサポートします。






- `行アイランド`
  - 階層のすべての子グリッドの保存/復元機能
- `ソート`
- `フィルタリング`
- `高度なフィルタリング`
- `ページング`
- `セル選択`
- `行の選択`
- `列の選択`
- `行のピン固定`
- `展開`
- `列`
  - 複数列ヘッダー
  - 列の順序
  - [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) インターフェイスによって定義される列プロパティ。
  - 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#列の復元)セクションを参照してください。





>[!NOTE]
> [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブはテンプレートを処理しません。列テンプレートの復元方法については、「[列の復元](state-persistence.md#列の復元)」セクションを参照してください。


>[!NOTE]
> `Row Selection` 機能を使用するには、[`primaryKey`]({environment:angularApiUrl}/classes/IgxGridComponent.html#primaryKey) プロパティを設定して、正しく保存/復元する必要があります。

## 使用方法

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) - このメソッドは、シリアル化された JSON 文字列でグリッド状態を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウド、ブラウザーの localStorage など) に保存できます。このメソッドは最初のオプションのパラメーター `serialize` を受け取り、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) が [`IGridState`]({environment:angularApiUrl}/interfaces/igridstate.html) オブジェクトを返すか、シリアル化された JSON 文字列を返すかを決定します。
開発者は、機能名、または機能名を 2 番目の引数として持つ配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。

```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);
```

[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) - [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) メソッドは、シリアル化されたJSON文字列または [`IGridState`]({environment:angularApiUrl}/interfaces/igridstate.html) オブジェクトを引数として受け入れ、オブジェクト/JSON 文字列で見つかった各機能の状態を復元します。

```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```

`options` - [`options`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#options) オブジェクトは、[`IGridStateOptions`]({environment:angularApiUrl}/interfaces/igridstateoptions.html) インターフェースを実装します。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) メソッドはこれらの機能の状態を戻り値に入れず、[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) メソッドはその状態を復元しません。

```typescript
public options =  { cellSelection: false; sorting: false; }
```




```html
<igx-hierarchical-grid [igxGridState]="options"></igx-hierarchical-grid>
```





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


## 列の復元

可能であれば、State ディレクティブは、新しい列インスタンスを作成するのではなく、状態を復元するときにグリッド上に既に存在する列を再利用します。新しいインスタンスが作成される唯一のシナリオは、列 (​​または列グループの場合はその子) に `field` プロパティがなく、一致する列を一意に識別して再利用する方法がない場合です。

このようなシナリオでは、以下の[`制限`](state-persistence.md#制限)が課せられます。これらの復元は、アプリケーション レベルのコードで実現できます。テンプレート化された列でこれを行う方法を示します。

1. テンプレート参照変数 (以下の例では `#activeTemplate`) を定義し、[`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) イベントにイベント ハンドラーを割り当てます。



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






## 子グリッドの復元

子グリッドの状態の保存/復元は、[`rowIslands`]({environment:angularApiUrl}/interfaces/igxgridstateoptions.html#rowIslands) プロパティによって制御され、デフォルトで有効に設定されています。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) は、ルート グリッドと階層のすべての子グリッドの両方の機能を保存/復元するために同じオプションを使用します。たとえば、以下のオプションを渡す場合:

``` html
<!-- public options = {selection: false, sorting: false, rowIslands: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```

`getState` API は、`selection` と `sorting` を除くすべてのグリッド (ルート グリッドと子グリッド) 機能の状態を返します。開発者が後ですべてのグリッドの`filtering` 状態のみを復元するには、以下を使用します。

```typescript
this.state.setState(state, ['filtering', 'rowIslands']);
```








## デモ

<code-view style="height:715px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-state/" >
</code-view>








## 制限


- パラメーターなしで `setState` API を使用してすべてのグリッド機能を一度に復元する場合、ルート グリッドの列プロパティがデフォルトにリセットされる場合があります。その場合は、後で列または列の選択機能を復元してください。

```typescript
state.setState(gridState);
state.setState(gridState.columns);
state.setState(gridState.columnSelection);
```



- [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトを JSON 文字列に変換します。JSON.stringify() が関数をサポートしないため、[`IgxGridState`] ディレクティブは、列の [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter)、[`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters)、[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries)、[`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy)、[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses)、[`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellStyles)、[`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#headerTemplate) および [`bodyTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#bodyTemplate) プロパティを無視します。





- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)




## その他のリソース

<div class="divider--half"></div>



- [Hierarchical Grid 概要](hierarchical-grid.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [選択](selection.md)

