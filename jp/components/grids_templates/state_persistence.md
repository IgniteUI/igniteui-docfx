@@if (igxName === 'IgxGrid') {
---
title: Angular Grid ステート パーシステンス | Ignite UI for Angular |インフラジスティックス
_description: IgxGridState ディレクティブによって公開されるAPIを使用して、IgxGridの状態の永続性を簡単に実現します。
_keywords: ステート パーシステンス, ignite ui for angular, インフラジスティックス
_language: ja
---
}
<!-- @@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid Editing |Data Manipulation | Ignite UI for Angular
_description: Easily achieve state persistence for the IgxTreeGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Editing |Data Manipulation | Ignite UI for Angular
_description: Easily achieve state persistence for the IgxTreeGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
} -->

### @@igComponent ステート パーシステンス

Angular @@igComponent コンポーネントの Ignite UI には、開発者がグリッドの状態を簡単に保存および復元できる IgxGridState ディレクティブが用意されています。[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) ディレクティブがグリッドに適用されると、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) および [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate)メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。

#### API

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) - このメソッドは、シリアル化された JSON 文字列でグリッド状態を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウドなど) に保存する最も簡単な方法です。開発者がこの状態を復元する必要がある場合は、[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) メソッドに渡します。最初のオプションのメソッド パラメーターは serialize で、[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) が元のオブジェクトを返すか、シリアル化された JSOn 文字列を返すかを決定します。
開発者は、機能名、または機能名を 2 番目の引数として持つ配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。
```typescript
// get all features` state in a serialized JSON string
const gridState = this.state.getState();

// get all features original state objects, as returned by the grid public API
const gridState = this.state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates = this.state.getState(false, ["sorting", "filtering"]);
```

[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) - [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) メソッドは、シリアル化されたJSON文字列または [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) インターフェイスを実装するオブジェクトを引数として受け入れ、オブジェクト/JSON 文字列で見つかった各機能の状態を復元します。内部的には、IgxGridState ディレクティブはパブリック グリッド API で動作するため、アプリケーション自体から実行できないことを抽象化することはありません。代わりに、使いやすい単一の API で機能のプロパティ/状態を取得/設定するための API をラップする場合。

```typescript
public restoreGridState(gridState) {
    this.state.setState(gridState);
}

public restoreSortingFiltering(sortingFilteringStates: IGridState) {
    this.state.setState(sortingFilteringStates)
}
```

`options` - [`options`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#options) オブジェクトは、[`IGridStateOptions`]({environment:angularApiUrl}/classes/igridstateoptions.html) インターフェイスを実装するオブジェクトです。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。開発者が特定の機能を除外した場合、オブジェクトは [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) メソッドを取得し、それらの機能の状態は含まれません。

```typescript
public options =  { cellSelection: false; sorting: false; }
```
```html
<igx-grid [IgxGridState]="options"></igx-grid>
```


これらのシンプルなシングル ポイント API を使用すると、わずか数行のコードで完全な状態維持機能を実現できます。**以下のコードをコピーして貼り付け** - ユーザーが現在のページを離れるたびに、ブラウザーの `sessionStorage` オブジェクトにグリッドの状態が保存されます。ユーザーがこのページに戻るたびに、グリッドはユーザーが設定したのと同じ状態に復元されます。必要なデータを取得するために、複雑で高度なフィルタリングや並べ替えの式を毎回設定する必要はなくなりました。一度実行して、以下のコードでユーザーに代わって処理してください。

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
      window.localStorage.setItem("grid1-state", state);
  }

  public restoreGridState() {
      const state = window.localStorage.getItem("grid1-state");
      this.state.setState(state);
  }
```
状況に応じてステートをブラウザーの `localStorage` または `sessionStorage` オブジェクトに保存、またはデータベースやクラウドに保存し、サービスへ渡すことができます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:960px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

#### 制限

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトをJSON文字列に変換します。ただし、関数をサポートしないため、[`IgxGridState`] ディレクティブは、columns [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter)、[`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters)、[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries)、[`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy)、[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) プロパティを無視します。アプリケーション レベルでそれらを追跡および復元するのは開発者です。[`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) イベントでこれらを設定することをお勧めします。

```typescript
// app.component.ts
public initColumns(column: IgxColumnComponent) {
    if (column.field === 'Age') {
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }
}
```

<!-- @@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-state" src='{environment:demosBaseUrl}/tree-grid/treegrid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-state" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
} -->
<div class="divider--half"></div>


### API リファレンス

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)


### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [選択](selection.md)
