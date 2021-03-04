@@if (igxName === 'IgxGrid') {
---
title: グリッド行のドラッグ | Angular グリッド & 図コンポーネント | インフラジスティックス
_description: The Ignite UI for Angular Data Grid コントロールは、階層ビューやリストビューなどの需要の高い機能を備えた、最速でタッチレスポンス、データリッチな階層グリッドが実現できます。
_keywords: angular ドラッグ コンポーネント, マテリアル コンポーネント, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: ツリー グリッド行ドラッグ | Angular グリッド & 図コンポーネント | インフラジスティックス
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブ、データリッチなツリー データ グリッドで階層およびリスト ビューなどの機能があります。
_keywords: angular ドラッグ コンポーネント, マテリアル コンポーネント, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 階層グリッドの行ドラッグ | Angular グリッド & 図コンポーネント | インフラジスティックス
_description: Ignite UI for Angular Hierarchical Grid コントロールは、高速でタッチ レスポンシブが有効なデータ リッチなツリーグリッドです。
_keywords: angular ドラッグ コンポーネント, マテリアル コンポーネント, ignite ui for angular, インフラジスティックス
_language: ja
---
}

# @@igComponent 行ドラッグ

Ignite UI for Angular @@igComponent では、**RowDrag** がルート `@@igSelector` コンポーネントで初期化されて、[`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable) 入力で設定できます。行ドラッグを有効にすると、ユーザーは行ドラッグ ハンドルを使用して行のドラッグを開始できます。

## Angular @@igComponent 行ドラッグの例

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-drag-base" alt="Angular @@igComponent 行ドラッグの例">
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag-base" alt="Angular @@igComponent 行ドラッグの例">
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-drag-base" alt="Angular @@igComponent 行ドラッグの例">
</code-view>

<div class="divider--half"></div>
}

## 構成

`@@igSelector` の行ドラッグを有効にするには、グリッドの [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable) を **`true`** に設定します。これが有効になると、行ドラッグ ハンドルが各行に表示されます。このハンドルは行ドラッグを開始するために使用できます。

```html
<@@igSelector [rowDraggable]="true">
 ...
</@@igSelector>
```
ドラッグ ハンドルをクリックしてボタンを押しながらカーソルを動かすと、グリッドの [`onRowDragStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart) イベントが発生します。クリックをリリースすると、[`onRowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend) イベントが発生します。

以下は、行ドラッグをサポートするための `@@igSelector` の設定方法と、ドロップイベントの適切な処理方法についてのチュートリアルです。

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
この例では、グリッドから指定された領域に行をドラッグし、ドロップするとグリッドから削除します。
}
@@if (igxName === 'IgxGrid') {
この例では、あるグリッドから別のグリッドに行をドラッグし、それを最初のデータソースから削除し、それを 2 番目のデータソースに追加します。
}

### ドロップ エリア

行ドラッグを簡単に有効にできました。次は行ドロップを処理する方法を設定する必要があります。
[`igxDrop` ディレクティブ](../drag-drop.md) を使用して、行をドロップする場所を定義できます。

はじめに、アプリ モジュールに `IgxDragDropModule` をインポートする必要があります。

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular';
...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```

次にテンプレートでディレクティブのセレクターを使ってドロップ エリアを定義します。

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```
}
@@if (igxName === 'IgxGrid') {
この場合、ドロップ領域は行をドロップする 2 番目のグリッドになります。
```html
<igx-grid #targetGrid igxDrop [data]="data2" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
    (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)" (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
    ...
</igx-grid>
```

グリッドは最初空のため、ユーザーにとってより意味のあるテンプレートを定義します。

```html
<ng-template #dragHereTemplate>
    Drop a row to add it to the grid
</ng-template>
```
}

[`onRowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend) イベントの `animation` パラメーターを使用して、ドロップできない領域に行がドロップされたときにアニメーションを有効にできます。true に設定されている場合、ドラッグされた行は、ドロップできない領域の上にドロップされると元の位置に戻ります。

以下はアニメーションを有効にする方法です。

```typescript
export class @@igxNameRowDragComponent {
    ...
    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

### ドロップ エリア イベント ハンドラー

テンプレートでドロップ領域を定義したら、コンポーネントの `.ts` ファイルで `igxDrop` の [`enter`]({environment:angularApiUrl}/classes/igxdropdirective.html#enter)、[`leave`]({environment:angularApiUrl}/classes/igxdropdirective.html#leave)、[`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) イベントを宣言する必要があります。

はじめに、`enter` と `leave` ハンドラーを見てみましょう。これらのメソッドでは、ドラッグの **ghost** のアイコンを変更して、行をドロップできる領域の上にあることをユーザーに示すことができます。

```typescript
export class @@igxNameRowDragComponent {
    ...
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector(".igx-grid__drag-indicator  > igx-icon");
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }

}
```
`changeGhostIcon` **private** メソッドは、ドラッグ ゴースト内のアイコンを変更するだけです。メソッドのロジックは、アイコンを含む要素を検索し (ドラッグ インジケーター コンテナに適用される `igx-grid__drag-indicator` クラスを使用)、要素の内部テキストを渡されたものに変更します。
アイコンは [`material` フォントセット](https://material.io/tools/icons/)からのもので、別の **`enum`** で定義されています。
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "remove"
}
```
}
@@if (igxName === 'IgxGrid') {
```typescript
enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "add"
}
```
}

次に、ユーザーが実際にドロップ領域内に行を**ドロップ**したときに何が起こるかを定義する必要があります。
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
export class @@igxNameRowDragComponent {
    ...
    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: @@igxNameGridRowComponent = args.dragData;
        draggedRow.delete();
    }

}
```

行が削除されたら、行の [`delete()`]({environment:angularApiUrl}/classes/@@igxNameRowComponent.html#delete) メソッドを呼び出すだけです。
}

@@if (igxName === 'IgxGrid') {
```typescript
export class @@igxNameRowDragComponent {
    @ViewChild("sourceGrid", { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild("targetGrid", { read: IgxGridComponent }) public targetGrid: IgxGridComponent;
    ... 
    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.rowData);
        this.sourceGrid.deleteRow(args.dragData.rowID);
    }
    ...
}
```

次のように `ViewChild` デコレータを使用して各グリッドに refenrece を定義し、ドロップを処理します。
- 削除される行のデータを含む行を `targetGrid` に追加します。
- `sourceGrid` からドラッグした行を削除します。
}

> [!NOTE]
> イベント引数 (`args.dragData.rowData`) または他の行プロパティからの行データを使用する場合、行全体が参照として引数に渡されることに注意してください。つまり、ソースグリッドのデータと区別する必要がある場合は、必要なデータを複製する必要があります。

#### ドラッグ ゴーストのテンプレート化
ドラッグゴーストは、`@@igSelector` の本文内の `<ng-template>` に適用される `IgxRowDragGhost` ディレクティブを使用してテンプレート化できます。
```html
<@@igSelector>
...
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>
...
</@@igSelector>
```

以下は、行ドラッグと複数選択を有効にした `@@igSelector` で確認できる設定の結果です。以下のデモでは、現在ドラッグされている行の数を示します。

#### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multiple-row-drag" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-row-drag" >
</code-view>

<div class="divider--half"></div>
}


@@if (igxName === 'IgxHierarchicalGrid') {
ドラッグ ゴーストは各グリッド レベルでテンプレート化できます。複数のゴース トテンプレートを作成できて、または単一の行アイランドにのみテンプレートを提供できます。

```html
<@@igSelector>
...
    <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon> 
        </div>
    </ng-template>
    <igx-row-island>
        ...
        <ng-template IgxRowDragGhost>
            <img src="smile.gif" height="42" width="42">
        </ng-template>
    </igx-row-island>
...
</@@igSelector>
```

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-row-drag" >
</code-view>

<div class="divider--half"></div>
}

### ドラッグ アイコンのテンプレート化
ドラッグ ハンドル アイコンは、グリッドの [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dragindicatoricontemplate) を使用してテンプレート化できます。作成している例で、アイコンをデフォルトのもの (`drag_indicator`) から `drag_handle` に変更します。
`igxDragIndicatorIcon` を使用して `@@igSelector` の本文内にテンプレートを渡して変更できます。
```html
<@@igSelector>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</@@igSelector>
```

新しいアイコン テンプレートの設定後、`DragIcon enum` の `DEFAULT` アイコンも調整する必要があるため、`changeIcon` メソッドによって適切に変更されます。
```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
### ドロップ エリアのスタイル
ドロップ ハンドラが正しく設定されたら、次にドロップ領域をスタイル設定します。
```css
.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;
}

:host {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
}
```

結果は以下のデモで確認できます。
}
@@if (igxName === 'IgxGrid') {
ドロップ ハンドラが正しく設定されたら、準備完了です。
以下は、設定の結果です。
}

#### デモ
@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-drag-to-grid" >
</code-view>


<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag" >
</code-view>


<div class="divider--half"></div> 
}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag" >
</code-view>


<div class="divider--half"></div> 
}

## アプリケーション デモ
@@if (igxName === 'IgxGrid') {

### 行ドラッグ イベントの使用
以下のデモは、行ドラッグ イベント情報を使用して、行がドロップされたカスタム コンポーネントとソース グリッド自体の両方の状態を変更する方法を示しています。
グリッドから月をドラッグして、それらを対応する惑星にドロップしてみてください。行ドラッグ ゴーストの背景は、ホバーされた惑星に応じて動的に変更されます。成功するとグリッド内の行が選択され、ドラッグは無効になります。惑星をクリックすると役に立つ情報が得られます。


<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-drag" >
</code-view>


> [!NOTE] 
> 上記のデモで使用した行ドラッグ ゴーストに適用されるクラスは ::ng-deep 修飾子を使用しています。行ドラッグは内部グリッド機能であり、CSS カプセル化のためにアプリケーションレベルでアクセスできないためです。
}

### 行の並べ替えデモ
グリッドの行ドラッグ イベントと `igxDrop` ディレクティブを使用して、ドラッグよる行の並べ替えるが可能なグリッドを作成できます。

すべてのアクションはグリッド本体の _内側_ で発生するため、ここで `igxDrop` ディレクティブをアタッチする必要があります:

@@if (igxName === 'IgxGrid') {
```html
    <igx-grid #grid [data]="data" [rowDraggable]="true" [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
        ...
    </igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
    <igx-tree-grid igxPreventDocumentScroll  #treeGrid [data]="localData" childDataKey="Employees" [rowDraggable]="true" foreignKey="ParentID"
    [primaryKey]="'ID'" (onRowDragStart)="rowDragStart($event)" igxDrop (dropped)="dropInGrid($event)">
    ...
    </igx-tree-grid>
    
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" (onRowDragStart)="rowDragStart($event)" igxDrop (dropped)="rowDrop($event)">
    ...
    </igx-hierarchical-grid>
}


> [!NOTE]
> グリッドに `primaryKey` が指定されていることを確認してください！ロジックが行を適切に並べ替えられるように、行には一意の識別子が必要です。

`rowDraggable` が有効になり、ドロップ エリアが定義されたら、ドロップ イベントの単純なハンドラーを実装する必要があります。行をドラッグするときは、以下を確認してください:
@@if (igxName === 'IgxGrid') {
  - 行はグリッド内にドロップされましたか?
  - そうであれば、ドラッグされた行が他のどの行にドロップされましたか?
  - ターゲット行が見つかれば、`data` 配列内のレコードの位置を入れ替えます。
}
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
  - 行が展開されていますか? そうであれば、行を縮小します。
  - 行はグリッド内にドロップされましたか?
  - そうであれば、ドラッグされた行が他のどの行にドロップされましたか?
  - ターゲット行が見つかれば、`data` 配列内のレコードの位置を入れ替えます。
  - 行は最初に選択されてましたか? そうであれば、選択済みとしてマークします。
}

以下では、コンポーネントの `.ts` ファイルに実装されていることがわかります。

@@if (igxName === 'IgxGrid') {
```typescript
export class GridRowReorderComponent {
    ...
    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        this.grid.deleteRow(args.dragData.rowID);
        this.data.splice(currRowIndex, 0, args.dragData.rowData);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.indexOf(this.data.find((r) => r.ID === row.rowData.ID));
            }
        }

        return -1;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
    export class TreeGridRowReorderComponent {
    ...
    public rowDragStart(args: any): void {
        const targetRow: IgxTreeGridRowComponent = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetRow.rowID);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow: IgxTreeGridRowComponent = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: IgxTreeGridRowComponent, cursorPosition: Point): void {
        const row: IgxTreeGridRowComponent = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }
        if (row.rowData.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.rowData.ParentID === draggedRow.rowData.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedRow.rowData);
                this.localData[rowIndex].ParentID = row.rowData.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.rowData.ID === draggedRow.rowData.ID).rowID], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: IgxTreeGridRowComponent, targetRow: IgxTreeGridRowComponent) {
        const draggedRowIndex = this.getRowIndex(draggedRow.rowData);
        const targetRowIndex: number = this.getRowIndex(targetRow.rowData);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedRow.rowData);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point)
        : IgxTreeGridRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
    export class HGridRowReorderComponent {
    ...
    public rowDragStart(args: any): void {
        const targetRow: IgxHierarchicalRowComponent = args.dragData;
        if (targetRow.expanded) {
            targetRow.toggle();
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: IgxHierarchicalRowComponent, cursorPosition: Point): void {
        const parent: IgxHierarchicalGridComponent = draggedRow.grid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.rowData);
        if (draggedRow.selected) {
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowData.id === draggedRow.rowData.id).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: IgxHierarchicalRowComponent[], cursorPosition: Point): number {
        const targetElem: IgxHierarchicalRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: IgxHierarchicalRowComponent[], cursorPosition: Point)
        : IgxHierarchicalRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            } else if (row === rowListArr[rowListArr.length - 1] && cursorPosition.y > rowRect.bottom) {
                return row;
            }
        }
    }
}
```
}

これらの簡単な手順で、ドラッグ/ドロップで行を並べ替えることができるグリッドを構成しました! 次のデモで、上記コードの動作を確認できます。
@@if (igxName === 'IgxGrid') {
ドラッグ アイコンを押下しながら、グリッド内で好きな場所に行を移動できます。

<code-view style="height:830px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-reorder" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
行の選択も有効で、ドラッグした行をドロップしても選択が保持されます。

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-reordering" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
行の選択も有効で、ドラッグした行をドロップしても選択が保持されます。

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder" >
</code-view>

}
<div class="divider--half"></div>

## 制限

現在、`rowDraggable` ディレクティブに既知の制限はありません。

## API リファレンス

* [rowDraggable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable)
* [onRowDragStart]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart)
* [onRowDragEnd]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)