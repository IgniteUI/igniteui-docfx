@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Multi-Cell Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use Row and Multi-cell data select of the Ignite UI for Angular Material table by using angular events, API or with mouse interactions.
_keywords: data select, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Multi-Cell Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use Row and Multi-cell data select of the Ignite UI for Angular Material table by using angular events, API or with mouse interactions.
_keywords: data select, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Multi-Cell Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use Row and Multi-cell data select of the Ignite UI for Angular Material table by using angular events, API or with mouse interactions.
_keywords: data select, igniteui for angular, infragistics
_language: ja
---
}


@@if (igxName !== 'IgxHierarchicalGrid') {

### @@igComponent Мulti-cell Selection and Row Selection

Multi-cell selection enables range data selection in the @@igComponent. Variety of multi-cell selection capabilities are available:
- By `Mouse drag` - Rectangular data selectoion of cells would be performed.
- `Ctrl キー` 押下 + マウス ドラッグ - 複数の範囲が選択されます。他の既存のセル選択は保持されます。
- Shift キーを使用して複数セルの選択をインスタンス化します。Shift キーを押しながら、単一セルを選択して別の単一セルを選択します。2 つのセル間のセル範囲が選択されます。`Shift キー`を押しながら他の 2 番目のセルを選択すると、最初に選択したセルの位置 (開始点) に基づいてセル選択範囲が更新されます。
- `Shift キー`を押しながら`矢印キー`を使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- `Shift キー`を押しながら `Ctrl + Arrow キー` と `Ctrl + Home/End` を使用してキーボードで複数セルを選択。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- `Ctrl キー`を押しながら`左マウスキー`でクリックすると、選択したセルコレクションに単一のセル範囲が追加されます。
- マウスでクリックしてドラッグすることで、連続した複数セルの選択が可能です。  

#### デモ

}

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-multi-cell-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-multi-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-cell-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="tree-grid-multi-cell-selection-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-multi-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-multi-cell-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName !== 'IgxHierarchicalGrid') {
#### キーボード ナビゲーションのインタラクション

##### Shift キーが押されている間
- <kbd>Shift</kbd> + <kbd>上矢印</kbd> - 現在の選択範囲に上のセルを追加します。
- <kbd>Shift</kbd> + <kbd>下矢印</kbd> - 現在の選択範囲に下のセルを追加します。
- <kbd>Shift</kbd> + <kbd>左矢印</kbd> - 現在の選択範囲に左のセルを追加します。
- <kbd>Shift</kbd> + <kbd>右矢印</kbd> - 現在の選択範囲に右のセルを追加します。

##### Ctrl + Shift キーが押されている間
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>上矢印</kbd> - 列内のフォーカスのあるセルの上にあるすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>下矢印</kbd> - 列内のフォーカスのあるセルの下にあるすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>左矢印</kbd> - 行の先頭まですべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>右矢印</kbd> - 行末まですべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> - フォーカスされているセルからグリッド内の最初のセルまでのすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> - フォーカスされているセルからグリッド内の最後のセルまでのすべてのセルを選択します。

> [!NOTE] 
> 連続スクロールは Grid のボディでのみ可能です。

### API の使用
以下は、範囲の選択、選択の解除、または選択したセル データを取得する方法です。

##### 範囲の選択

[`selectRange(range)`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#selectrange) - API を使用してセルの範囲を選択します。`rowStart` と `rowEnd` は行インデックスを使用する必要があり、`columnStart` と `columnEnd` は列インデックスまたは列データフィールド値を使用できます。 

```typescript
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid1.selectRange(range);
...

const range = { rowStart: 0, rowEnd: 2, columnStart: 'Name', columnEnd: 'ParentID' };
this.grid1.selectRange(range);

```

> [!NOTE] 
> 選択範囲は加法演算で以前の選択をクリアすることはありません。

##### セル選択のクリア

[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#clearcellselection) は現在のセル選択をクリアします。

##### 選択したデータの取得

[`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getselecteddata) は、選択したデータの配列を選択内容に応じた形式で返します。以下は例です。

1. 3 つの異なる単一セルが選択されている場合:
```
expectedData = [
    { CompanyName: "Infragistics" },
    { Name: "Michael Langdon" },
    { ParentID: 147 }
];
```
		
2. 1 列から 3 つのセルが選択されている場合:
```
expectedData = [
    { Address: "Obere Str. 57"},
    { Address: "Avda. de la Constitución 2222"},
    { Address: "Mataderos 2312"}
];
```

3. 1 行 3 列から 3 つのセルをマウスドラッグで選択した場合:
```
expectedData = [
    { Address: "Avda. de la Constitución 2222", City: "México D.F.", ContactTitle: "Owner" }
];
```

4. 2 行 3 列から 3 つのセルをマウスドラッグで選択した場合:
```
expectedData = [
    { ContactTitle: "Sales Agent", Address: "Cerrito 333", City: "Buenos Aires"},
    { ContactTitle: "Marketing Manager", Address: "Sierras de Granada 9993", City: "México D.F."}
];
```

5. 2 つの異なる範囲が選択されている場合:
```
expectedData = [
    { ContactName: "Martín Sommer", ContactTitle: "Owner"},
    { ContactName: "Laurence Lebihan", ContactTitle: "Owner"},
    { Address: "23 Tsawassen Blvd.", City: "Tsawassen"},
    { Address: "Fauntleroy Circus", City: "London"}
];
```

6. 2 つの重複範囲が選択されている場合、形式は次のようになります。
```
expectedData = [
    { ContactName: "Diego Roel", ContactTitle: "Accounting Manager", Address: "C/ Moralzarzal, 86"},
    { ContactName: "Martine Rancé", ContactTitle: "Assistant Sales Agent", Address: "184, chaussée de Tournai", City: "Lille"},
    { ContactName: "Maria Larsson", ContactTitle: "Owner", Address: "Åkergatan 24", City: "Bräcke"},
    { ContactTitle: "Marketing Manager", Address: "Berliner Platz 43", City: "München"}
];
```

> [!NOTE] 
> セルがグリッドビューポートに表示されていない場合、[`selectedCells()`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#selectedcells) は結果を返しませんが、[`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getselecteddata) は選択されたセルデータを返します。
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getselectedranges) は、キーボードとポインタの両方の操作からグリッドで現在選択されている範囲を返します。タイプは GridSelectionRange[] です。


### 機能の統合
マルチセル選択はインデックス ベースです (DOM 要素選択)。

- `Sorting` - ソートが実行されると、選択は解除されません。昇順または降順で並べ替えている間、現在選択されているセルはそのままになります。昇順または降順で並べ替えている間、現在選択されているセルはそのままになります。
- `Paging` - ページング時に選択されたセルはクリアされます。選択はページを超えては持続されません。選択はページを超えては持続されません。
- `Filtering` - フィルタリングが実行されると、選択は解除されません。フィルタリングがクリアされている場合は、最初に選択されたセルが返されます。
- `Resizing` - 列のサイズを変更すると、選択したセルはクリアされません。
- `Hiding` - 選択したセルはクリアされません。列が非表示の場合は、次に表示されている列のセルが選択されます。
- `Pinning` - 選択したセルはクリアされません。非表示と同じです。
- `Group by` - 列をグループ化すると、選択したセルはクリアされません。

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

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
