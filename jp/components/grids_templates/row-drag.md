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
ドラッグ ハンドルをクリックしてボタンを押しながらカーソルを動かすと、グリッドの [`rowDragStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragStart) イベントが発生します。クリックをリリースすると、[`rowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragEnd) イベントが発生します。

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

[`rowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragEnd) イベントの `animation` パラメーターを使用して、ドロップできない領域に行がドロップされたときにアニメーションを有効にできます。true に設定されている場合、ドラッグされた行は、ドロップできない領域の上にドロップされると元の位置に戻ります。

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
        const draggedRow: RowType = args.dragData;
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
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
    }
    ...
}
```

次のように `ViewChild` デコレータを使用して各グリッドに refenrece を定義し、ドロップを処理します。
- 削除される行のデータを含む行を `targetGrid` に追加します。
- `sourceGrid` からドラッグした行を削除します。
}

> [!NOTE]
> イベント引数 (`args.dragData.data`) または他の行プロパティからの行データを使用する場合、行全体が参照として引数に渡されることに注意してください。つまり、ソースグリッドのデータと区別する必要がある場合は、必要なデータを複製する必要があります。

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

すべてのアクションはグリッド本体の内側で発生するため、ここで `igxDrop` ディレクティブをアタッチする必要があります:

@@if (igxName === 'IgxGrid') {
```html
    <igx-grid #grid [data]="data" [rowDraggable]="true" [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
        ...
    </igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
    <igx-tree-grid igxPreventDocumentScroll  #treeGrid [data]="localData" childDataKey="Employees" [rowDraggable]="true" foreignKey="ParentID"
    [primaryKey]="'ID'" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="dropInGrid($event)">
    ...
    </igx-tree-grid>
    
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="rowDrop($event)">
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
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.indexOf(this.data.find((r) => r.rowID === row.rowID));
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
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetrow.key);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        const row = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }
        if (row.data.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.data.ParentID === draggedrow.data.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedrow.data);
                this.localData[rowIndex].ParentID = row.data.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.rowID === draggedrow.key).rowID], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: IgxTreeGridRowComponent, targetRow: IgxTreeGridRowComponent) {
        const draggedRowIndex = this.getRowIndex(draggedrow.data);
        const targetRowIndex: number = this.getRowIndex(targetrow.data);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedrow.data);
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
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            targetRow.expanded = false;
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        // const parent: IgxHierarchicalGridComponent = (draggedRow as any).grid;
        // const parent = args.drag.ghostContext.grid;
        const parent = this.hGrid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        const wasSelected = draggedRow.selected;
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.data);
        if (wasSelected) {
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowID === draggedRow.key).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: RowType[], cursorPosition: Point): number {
        const targetElem: IgxHierarchicalRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point)
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

@@if (igxName === 'IgxGrid') {
### 行ドラッグ シナリオでの UX の改善

現在カーソルの下にある行インデックスを取得できることで、豊富なカスタム機能を構築し、アプリケーションの UX を向上させる機会が得られます。たとえば、グリッド上のドラッグされた行の位置に基づいて、ドラッグ ゴーストを変更したり、ドロップ インジケーターを表示したりできます。この方法で実現できるもう 1 つの便利な動作は、グリッドの境界に達したときに、行をドラッグしながらグリッドを上下にスクロールすることです。

以下に、行の位置を知ることで実現できるいくつかのカスタム実装のスニペットの例を示します。

#### カーソル位置に基づいてドラッグ ゴーストを変更する
以下のスニペットでは、ドラッグ ゴースト内のテキストを変更して、ホバーされた行の名前を表示する方法を示しています。

まず、ドラッグ ゴーストに使用するテンプレートを指定します。`dropName` プロパティは動的に変化し、カーソルが置かれている行の名前を取得します。

```html
<ng-template igxRowDragGhost>
    <div class="customGhost">
        <div>{{ dropName }}</div>
    </div>
</ng-template>
```

次に、終了した行のインスタンスを返すメソッド ([行の並べ替えデモ](#行の並べ替えデモ)で使用されているものと同様) を定義します。

```typescript
class MyRowGhostComponent {
    ...
    private getRowDataAtPoint(rowList: IgxGridRowComponent[], cursorPosition: Point): any {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.find((r) => r.rowID === row.rowID);
            }
        }
        return null;
    }
}
```

最後に、[`IgxDragDirective.dragMove`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragmove) イベント (ドラッグされた行に対して発行) を処理するために使用されるメソッドを作成します。このメソッドは、`igxRowDragGhost` テンプレートで使用されているプロパティの値を変更し、強制的に再描画します。ドラッグしている特定の行の `dragMove` イベントのみをサブスクライブし、行がドロップされるたびに (メモリ リークを防ぐために) サブスクライブを解除します。

```typescript
class MyRowGhostComponent {
    ...
    public ngAfterViewInit(): void {
        this.grid.rowDragStart.pipe(takeUntil(this.destroy$)).subscribe(this.onRowDragStart.bind(this));
    }
    ...
    private onRowDragStart(e: IRowDragStartEventArgs) {
        if (e !== null) {
            this._draggedRow = e.dragData.rowData;
        }
        const directive = e.dragDirective;
        directive.dragMove
            .pipe(takeUntil(this.grid.rowDragEnd))
            .subscribe(this.onDragMove.bind(this));
    }
    ...
    private onDragMove(args: IDragMoveEventArgs) {
        const cursorPosition = this.getCursorPosition(args.originalEvent);
        const hoveredRowData = this.getRowDataAtPoint(
            this.grid.rowList.toArray(),
            cursorPosition
        );
        if (!hoveredRowData) {
            args.cancel = true;
            return;
        }
        const rowID = hoveredRowData.ID;
        if (rowID !== null) {
            let newName = this.dropName;
            if (rowID !== -1) {
                const targetRow = this.grid.rowList.find((e) => {
                    return e.rowData.ID === rowID;
                });
                newName = targetRow?.rowData.Name;
            }
            if (newName !== this.dropName) {
                this.dropName = newName;
                args.owner.cdr.detectChanges();
            }
        }
    }
    
}

```

#### カーソル位置に基づいたドロップ インジケーターの表示

次のセクションのデモでは、ドラッグされた行がドロップされる場所のインジケーターを表示する方法を確認します。このインジケーターは好きなようにカスタマイズできます - ドラッグされた行がドロップされる位置に配置されたプレースホルダー行、ドラッグされた行が現在ホバーされている行の上または下にドロップされるかどうかを示す境界線スタイルなどです。

カーソルの位置を追跡するために、行のドラッグを開始するときに [`IgxDragDirective`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragmove) の `dragMove` イベントにバインドします。

> [!NOTE]
> グリッドに `primaryKey` が指定されていることを確認してください! ロジックが行を適切に並べ替えられるように、行には一意の識別子が必要です。

```typescript
public ngAfterViewInit() {
  this.grid.rowDragStart
  .pipe(takeUntil(this.destroy$))
  .subscribe(this.handleRowStart.bind(this));
     ...
}

private handleRowStart(e: IRowDragStartEventArgs): void {
  if (e !== null) {
    this._draggedRow = e.dragData.data;
  }
  const directive = e.dragDirective;
  directive.dragMove
  .pipe(takeUntil(this.grid.rowDragEnd))
  .subscribe(this.handleDragMove.bind(this));
}

private handleDragMove(event: IDragMoveEventArgs): void {
  this.handleOver(event);
    ...
}

private handleOver(event: IDragMoveEventArgs) {
  const ghostRect = event.owner.ghostElement.getBoundingClientRect();
  const rowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
    x: ghostRect.x,
    y: ghostRect.y
  });
  if (rowIndex === -1) {
    return;
  }
  const rowElement = this.grid.rowList.find(
    e => e.rowData.ID === this.grid.data[rowIndex].ID
  );
  if (rowElement) {
    this.changeHighlightedElement(rowElement.element.nativeElement);
  }
}

private clearHighlightElement(): void {
  if (this.highlightedRow !== undefined) {
    this.renderer.removeClass(this.highlightedRow, 'underlined-class');
  }
}

private setHightlightElement(newElement: HTMLElement) {
  this.renderer.addClass(newElement, 'underlined-class');
  this.highlightedRow = newElement;
}

private changeHighlightedElement(newElement: HTMLElement) {
  if (newElement !== undefined) {
    if (newElement !== this.highlightedRow) {
      this.clearHighlightElement();
      this.setHightlightElement(newElement);
    } else {
      return;
    }
  }
}
```



<div class="divider--half"></div>

#### 行ドラッグでグリッドをスクロールする

非常に便利なシナリオは、ドラッグされた行がその上部または下部の境界に達したときにグリッドをスクロールできることです。これにより、グリッド内の行数にスクロールバーが必要な場合に、現在のビューポートの外側で行を並べ替えることができます。

以下に、ビューポートの端に到達したかどうかを確認し、必要に応じてスクロールするために使用する 2 つの方法の例を示します。`isGridScrolledToEdge` は、グリッドをスクロールする方向 (「下」の場合は 1、「上」の場合は -1) の 1 つのパラメーターを受け入れ、その方向の最後の行に到達した場合は `true` を返します。`scrollGrid` メソッドは、グリッドをある方向 (1 または -1) にスクロールしようとしますが、グリッドがすでにその端にある場合は何もしません。

```typescript
class MyGridScrollComponent {
    ...
    private isGridScrolledToEdge(dir: 1 | -1): boolean {
        if (this.grid.data[0] === this.grid.rowList.first.data && dir === -1) {
            return true;
        }
        if (
            this.grid.data[this.grid.data.length - 1] === this.grid.rowList.last.data &&
            dir === 1
        ) {
            return true;
        }
        return false;
    }

    private scrollGrid(dir: 1 | -1): void {
        if (!this.isGridScrolledToEdge(dir)) {
            if (dir === 1) {
                this.grid.verticalScrollContainer.scrollNext();
            } else {
                this.grid.verticalScrollContainer.scrollPrev();
            }
        }
    }
}

```

前の例で行ったように、特定の行の `dragMove` イベントをサブスクライブします。`dragMove` はカーソルが実際に移動したときにのみ起動されるため、行が端の 1 つにあるときにグリッドを自動スクロールするための便利で簡単な方法が必要ですが、ユーザーはマウスを**移動しません** 。`500Ms` ごとにグリッドを自動スクロールする `interval` を設定するメソッドを追加します。

ポインタがグリッドの端に達したときに `interval` を作成してサブスクライブし、マウスが移動したり行がドロップされたりするたびに (カーソル位置に関係なく)、その `interval` からサブスクライブを解除します。

```typescript
class MyGridScrollComponent {
    public ngAfterViewInit() {
        this.grid.rowDragStart
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.onDragStart.bind(this));
        this.grid.rowDragEnd
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.unsubInterval());
    }
    ...
    private onDragMove(event: IDragMoveEventArgs): void {
        this.unsubInterval();
        const dir = this.isPointOnGridEdge(event.pageY);
        if (!dir) {
            return;
        }
        this.scrollGrid(dir);
        if (!this.intervalSub) {
            this.interval$ = interval(500);
            this.intervalSub = this.interval$.subscribe(() => this.scrollGrid(dir));
        }
    }
    ...
    private unsubInterval(): void {
        if (this.intervalSub) {
            this.intervalSub.unsubscribe();
            this.intervalSub = null;
        }
    }
}
```

以下は、上記の両方のシナリオの例です。ドロップ インジケーターを表示し、境界線の端に達したときにビューポートをスクロールします。

<code-view style="height:830px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-drop-indicator" >
</code-view>
}

<div class="divider--half"></div>

## 制限

現在、`rowDraggable` ディレクティブに既知の制限はありません。

## API リファレンス

* [rowDraggable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable)
* [rowDragStart]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragStart)
* [rowDragEnd]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragEnd)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)