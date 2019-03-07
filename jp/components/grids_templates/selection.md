@@if (igxName === 'IgxGrid') {
---
title: Row Selection コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 行選択は、行内のすべての列の前に描画されるチェックボックス列にあるチェックボックスで行を選択/選択解除でき、データを含む複数の行を選択/選択解除できます。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular Components Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, Angular Grid Row Selection, Angular Data Table Row Selection, Angular Row Selection, Angular Grid Selection, Data Grid Row Selection, Data Table Row Selection, Grid Selection
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Row Selection コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 行選択は、行内のすべての列の前に描画されるチェックボックス列にあるチェックボックスで行を選択/選択解除でき、データを含む複数の行を選択/選択解除できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, Native Angular コンポーネント ライブラリ, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table,  Angular Tree Grid Row Selection, Angular Tree Table Row Selection, Angular Row Selection, Angular Tree Grid Selection, Tree Grid Row Selection, Tree Table Row Selection, Tree Grid Selection
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Row Selection コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 行選択は、行内のすべての列の前に描画されるチェックボックス列にあるチェックボックスで行を選択/選択解除でき、データを含む複数の行を選択/選択解除できます。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, Native Angular コンポーネント ライブラリ, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Angular Hierarchical Grid Row Selection, Angular Hierarchical Table Row Selection, Angular Row Selection, Angular Hierarchical Grid Selection, Hierarchical Grid Row Selection, Hierarchical Table Row Selection, Hierarchical Grid Selection
_language: ja
---
}
### @@igComponent 行選択

Ignite UI for Angular の行選択には、行内のその他すべての列の前にチェックボックスがあります。チェックボックスをクリックすると、行を選択または選択解除になり、データの複数行を選択できます。  

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="treegrid-selection-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-selection-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

### 設定

#### 単一選択

@@igComponent の単一選択を @@igComponent の [`onSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onselection) イベントを設定して簡単に設定できます。イベントは、セル コンポーネントへの参照を発生します。セル コンポーネントは、保持している行コンポーネントへの参照を持ちます。行コンポーネント参照の [`rowID`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxgridrowcomponent.html#rowid) ゲッターを使用して、 ([`rowData[primaryKey]`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) または [`rowData`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowdata) オブジェクト自身のいずれかを使用して) 選択の適切なリストに行の一意識別子を渡します。単一行のみを常に選択させるには、選択行の選択リストを空にします ([`selectRows`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectrows) メソッド呼び出しの 2 番目の引数です)。

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [rowSelectable]="false" (onSelection)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
        ...
</igx-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    if (!this.selection) {
        this.grid1.selectRows([targetCell.row.rowID], true);
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" [height]="'530px'" width="100%"
            [rowSelectable]="selection" [allowFiltering]="true" (onSelection)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(event) {
    const targetCell = event.cell;
    if (!this.selection) {
        this.treeGrid.deselectAllRows();
        this.treeGrid.selectRows([targetCell.row.rowID]);
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (onSelection)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.hGrid.deselectAllRows();
            this.hGrid.selectRows([targetCell.row.rowID]);
        }
    }
```
}

#### 複数選択

複数行選択を有効にするには、[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) で [`rowSelectable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowselectable) プロパティを公開します。[`rowSelectable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowselectable) を `true` に設定すると、各行および @@igComponent ヘッダーで選択チェックボックス フィールドを有効にします。チェックボックスを使用して複数行を選択できます。選択はスクロール、ページング、および並べ替えとフィルターなどのデータ操作で保持されます。

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
    ...
</igx-grid>
```

```typescript
/* selectionExample.component.ts */

public selection = true;
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [height]="'530px'" width="100%" [autoGenerate]="false" [rowSelectable]="selection" [allowFiltering]="true" (onSelection)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```

```typescript
/* selectionExample.component.ts */

public selection = true;
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (onSelection)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

public selection = true;
```
}

@@if (igxName !== 'IgxTreeGrid') {
**Note:** 行選択およびセル選択を正しく実行するには、@@igComponent にリモート仮想化がある場合、[`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) を設定します。
}

**注:** フィルタリングを設定した場合、[`selectAllRows()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectallrows) と [`deselectAllRows()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectallrows) がすべての*フィルター*行を選択/非選択します。

@@if (igxName !== 'IgxTreeGrid') {
**Note:** @@igComponent にリモート仮想化を設定している場合、ヘッダー チェックボックスがすべてのレコードを選択/非選択にします。すべてのレコードをヘッダー チェックボックスで選択した後に表示行の選択が解除された場合、オンデマンドで @@igComponent に新しいデータを読み込んだ際に新しく読み込んだ行が選択されない機能制限があります。
}

**注:** セル選択は [`onSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onselection) をトリガーしますが [`onRowSelectionChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowselectionchange) はトリガーしません。

### コード スニペット

#### コードで行を選択

以下のコード例は ([`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)) を使用して単一または複数行を選択できます。

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5])">Select 1,2 and 5</button>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'artist'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5])">Select 1,2 and 5</button>
```
}

1、2、および 5 の ID を持つデータ エントリに対応する行を @@igComponent の選択に追加します。

#### 選択イベントのキャンセル
```html
<!-- selectionExample.component.html -->

<@@igSelector (onRowSelectionChange)="handleRowSelectionChange($event)">
...
</@@igSelector>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI
    args.checked = false; // overwrites the checkbox state
}
```

### API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular** フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)