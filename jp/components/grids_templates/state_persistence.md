@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 状態保持 | Ignite UI for Angular | インフラジスティックス 
_description: IgxGridState ディレクティブによって公開されるAPIを使用して、IgxGrid の状態の永続性を簡単に実現します。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス 
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 状態保持 | Ignite UI for Angular | インフラジスティックス 
_description: IgxGridState ディレクティブによって公開されるAPIを使用して、IgxTreeGrid の状態の永続性を簡単に実現します。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス 
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 状態保持 | Ignite UI for Angular | インフラジスティックス 
_description: IgxGridState ディレクティブによって公開されるAPIを使用して、IgxHierarchicalGrid の状態の永続性を簡単に実現します。
_keywords: 状態保持, ignite ui for angular, infragistics, インフラジスティックス 
_language: ja
---
}

### @@igComponent 状態の保持

igxGridState ディレクティブによって開発者がグリッドの状態を簡単に保存および復元できます。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブがグリッドに適用されると、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) および [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。

#### サポートされている機能
[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブは、以下の機能の状態の保存および復元をサポートします。

@@if (igxName !== 'IgxHierarchicalGrid') {

* `並べ替え`
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
    * 列の順序
    * [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) インターフェイスによって定義される列プロパティ。
    * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state_persistence.md#restoring-columns)セクションを参照してください。
}

@@if (igxName === 'IgxHierarchicalGrid') {
* `行アイランド`
    * 階層のすべての子グリッドの保存/復元機能
* `並べ替え`
* `フィルタリング`
* `高度なフィルタリング`
* `ページング`
* `セル選択`
* `行の選択`
* `列の選択`
* `行のピン固定`
* `展開`
* `複数の列`
    * 列の順序
    * [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) インターフェイスによって定義される列プロパティ。
    * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state_persistence.md#列の復元)セクションを参照してください。
}

> [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブはテンプレートを処理しません。列テンプレートの復元方法については、「[列の復元](state_persistence.md#列の復元)」セクションを参照してください。

#### 使用方法

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) - このメソッドは、シリアル化された JSON 文字列でグリッド状態を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウド、ブラウザーの localStorage など) に保存できます。このメソッドは最初のオプションのパラメーター `serialize` を受け取り、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) が [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) オブジェクトを返すか、シリアル化された JSON 文字列を返すかを決定します。
開発者は、機能名、または機能名を 2 番目の引数として持つ配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。
```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ["sorting", "filtering"]);
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

これらのシンプルなシングル ポイント API を使用すると、わずか数行のコードで完全な状態維持機能を実現できます。**下からコードをコピーして貼り付けます** - ユーザーが現在のページを離れるたびに、ブラウザーの `sessionStorage` オブジェクトにグリッドの状態が保存されます。ユーザーがメイン ページに戻るときに、グリッドの状態が復元されます。必要なデータを取得するために、複雑で高度なフィルタリングや並べ替えの式を毎回設定する必要はなくなりました。一度実行して、以下のコードでユーザーに代わって処理してください。

```typescript
  // app.component.ts
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
      window.sessionStorage.setItem("grid1-state", state);
  }

  public restoreGridState() {
      const state = window.sessionStorage.getItem("grid1-state");
      this.state.setState(state);
  }
```

#### 列の復元

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) はデフォルトで列テンプレート、列フォーマッタなどを保持しません ([`制限`](state_persistence.md#制限)を参照)。これらの復元は、アプリケーション レベルのコードで実現できます。テンプレート化された列でこれを行う方法を示します。

1. テンプレート参照変数 (以下の例では `#activeTemplate`) を定義し、[`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) イベントにイベント ハンドラーを割り当てます。
@@if (igxName === 'IgxGrid') {
```html
<igx-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
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
<igx-hierarchical-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
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
<igx-tree-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-tree-grid>
```
}
2. @ViewChild または @ViewChildren デコレータを使用して、コンポーネントのテンプレート ビューをクエリします。[`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) イベント ハンドラーで、テンプレートを列の `bodyTemplate` プロパティに割り当てます。

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

@@if (igxName === 'IgxHierarchicalGrid') {
#### 子グリッドの復元
子グリッドの状態の保存/復元は、[`rowIslands`]({environment:angularApiUrl}/interfaces/igxgridstateoptions.html#rowislands) プロパティによって制御され、デフォルトで有効に設定されています。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) は、ルート グリッドと階層のすべての子グリッドの両方の機能を保存/復元するために同じオプションを使用します。たとえば、以下のオプションを渡す場合:

``` html
<!-- public options = {selection: false, sorting: false, rowIslands: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```
`getState` API は、`選択`と`並べ替え`を除くすべてのグリッド (ルート グリッドと子グリッド) 機能の状態を返します。開発者が後ですべてのグリッドの`フィルタリング`状態のみを復元するには、以下を使用します。
```typescript
this.state.setState(state, ['filtering', 'rowiIslands']);
```
}

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:1000px">
    <iframe id="treegrid-state" src='{environment:demosBaseUrl}/tree-grid/tree-grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-state" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
    <button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-state" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="hierarchical-grid-state" src='{environment:demosBaseUrl}/hierarchical-grid/hGrid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-state" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
    <button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-state" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
</div>
}


#### 制限
* @@if (igxName === 'IgxHierarchicalGrid') {
パラメーターなしで `setState` API を使用してすべてのグリッド機能を一度に復元する場合、ルート グリッドの列プロパティがデフォルトにリセットされる場合があります。その場合は、後で列または列の選択機能を復元してください。
```typescript
state.setState(gridState);
state.setState(gridState.columns);
state.setState(gridState.columnSelection);
```
}
* [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトを JSON 文字列に変換します。JSON.stringify() が関数をサポートしないため、[`IgxGridState`] ディレクティブは、列の [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter)、[`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters)、[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries)、[`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy)、[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses)、[`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellstyles)、[`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#headertemplate) および [`bodyTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#bodytemplate) プロパティを無視します。
<div class="divider--half"></div>


### API リファレンス

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

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [選択](selection.md)