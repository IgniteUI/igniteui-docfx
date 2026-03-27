---
title: Angular Tree Grid の行ドラッグ - Ignite UI for Angular
_description: Angular Tree Grid の行ドラッグは、マウスで行をすばやくドラッグして再配置します。プロジェクトで行ドラッグを構成する方法を説明します。
_keywords: angular ドラッグ コンポーネント, マテリアル コンポーネント, ignite ui for angular, インフラジスティックス
_license: commercial
_language: ja
---




# Angular Tree Grid の行ドラッグ

Ignite UI for Angular Tree Grid では、**RowDrag** がルート `igx-tree-grid` コンポーネントで初期化されて、[`rowDraggable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDraggable) 入力で設定できます。行ドラッグを有効にすると、ユーザーは行ドラッグ ハンドルを使用して行のドラッグを開始できます。

## Angular Tree Grid 行ドラッグの例





<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag-base/" alt="Angular Tree Grid 行ドラッグの例">
</code-view>

<div class="divider--half"></div>




## 構成

`igx-tree-grid` の行ドラッグを有効にするには、グリッドの [`rowDraggable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDraggable) を **`true`** に設定します。これが有効になると、行ドラッグ ハンドルが各行に表示されます。このハンドルは行ドラッグを開始するために使用できます。

```html
<igx-tree-grid [rowDraggable]="true">
 ...
</igx-tree-grid>
```

ドラッグ ハンドルをクリックしてボタンを押しながらカーソルを動かすと、グリッドの [`rowDragStart`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDragStart) イベントが発生します。クリックをリリースすると、[`rowDragEnd`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDragEnd) イベントが発生します。

以下は、行ドラッグをサポートするための `igx-tree-grid` の設定方法と、ドロップイベントの適切な処理方法についてのチュートリアルです。


この例では、グリッドから指定された領域に行をドラッグし、ドロップするとグリッドから削除します。



### ドロップ エリア

行ドラッグを簡単に有効にできました。次は行ドロップを処理する方法を設定する必要があります。
[`igxDrop` ディレクティブ](../drag-drop.md)を使用して、行をドロップする場所を定義できます。

はじめに、アプリ モジュールに `IgxDragDropModule` をインポートする必要があります。

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular/directives';
// import { ..., IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package
...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```

次にテンプレートでディレクティブのセレクターを使ってドロップ エリアを定義します。



```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```




[`rowDragEnd`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDragEnd) イベントの `animation` パラメーターを使用して、ドロップできない領域に行がドロップされたときにアニメーションを有効にできます。true に設定されている場合、ドラッグされた行は、ドロップできない領域の上にドロップされると元の位置に戻ります。

以下はアニメーションを有効にする方法です。

```typescript
export class IgxTreeGridRowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

### ドロップ エリア イベント ハンドラー

テンプレートでドロップ領域を定義したら、コンポーネントの `.ts` ファイルで `igxDrop` の [`enter`]({environment:angularApiUrl}/classes/igxdropdirective.html#enter)、[`leave`]({environment:angularApiUrl}/classes/igxdropdirective.html#leave)、[`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) イベントを宣言する必要があります。

はじめに、`enter` と `leave` ハンドラーを見てみましょう。これらのメソッドでは、ドラッグの **ghost** のアイコンを変更して、行をドロップできる領域の上にあることをユーザーに示すことができます。

```typescript
export class IgxTreeGridRowDragComponent {
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
```

`changeGhostIcon` **private** メソッドは、ドラッグ ゴースト内のアイコンを変更するだけです。メソッドのロジックは、アイコンを含む要素を検索し (ドラッグ インジケーター コンテナーに適用される `igx-grid__drag-indicator` クラスを使用)、要素の内部テキストを渡されたものに変更します。
アイコンは [`material` フォントセット](https://material.io/tools/icons/)からのもので、別の **`enum`** で定義されています。


```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}
```




次に、ユーザーが実際にドロップ領域内に行を**ドロップ**したときに何が起こるかを定義する必要があります。


```typescript
export class IgxTreeGridRowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

}
```

行が削除されたら、行の [`delete()`]({environment:angularApiUrl}/classes/IgxTreeGridRowComponent.html#delete) メソッドを呼び出すだけです。




> [!NOTE]
> イベント引数 (`args.dragData.data`) または他の行プロパティからの行データを使用する場合、行全体が参照として引数に渡されることに注意してください。つまり、ソースグリッドのデータと区別する必要がある場合は、必要なデータを複製する必要があります。

#### ドラッグ ゴーストのテンプレート化

ドラッグゴーストは、`igx-tree-grid` の本体内の `<ng-template>` に適用される `IgxRowDragGhost` ディレクティブを使用してテンプレート化できます。

```html
<igx-tree-grid>
...
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>
...
</igx-tree-grid>
```

以下は、行ドラッグと複数選択を有効にした `igx-tree-grid` で確認できる設定の結果です。以下のデモでは、現在ドラッグされている行の数を示します。

#### デモ




<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-row-drag/" >
</code-view>

<div class="divider--half"></div>





### ドラッグ アイコンのテンプレート化

ドラッグ ハンドル アイコンは、グリッドの [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#dragIndicatorIconTemplate) を使用してテンプレート化できます。作成している例で、アイコンをデフォルトのもの (`drag_indicator`) から `drag_handle` に変更します。
`igxDragIndicatorIcon` を使用して `igx-tree-grid` の本体内にテンプレートを渡して変更できます。

```html
<igx-tree-grid>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</igx-tree-grid>
```

新しいアイコン テンプレートの設定後、`DragIcon enum` の `DEFAULT` アイコンも調整する必要があるため、`changeIcon` メソッドによって適切に変更されます。

```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```



### ドロップ エリアのスタイル設定

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



#### デモ





<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag/" >
</code-view>


<div class="divider--half"></div>




## アプリケーション デモ



### 行の並べ替えデモ

グリッドの行ドラッグ イベントと `igxDrop` ディレクティブを使用して、ドラッグよる行の並べ替えるが可能なグリッドを作成できます。

すべてのアクションはグリッド本体の内側で発生するため、ここで `igxDrop` ディレクティブをアタッチする必要があります:




```html
<igx-tree-grid igxPreventDocumentScroll  #treeGrid [data]="localData" [rowDraggable]="true" foreignKey="ParentID"
    [primaryKey]="'ID'" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="dropInGrid($event)">
    ...
</igx-tree-grid>
```





> [!NOTE]
> グリッドに `primaryKey` が指定されていることを確認してください！ロジックが行を適切に並べ替えられるように、行には一意の識別子が必要です。

`rowDraggable` が有効になり、ドロップ エリアが定義されたら、ドロップ イベントの単純なハンドラーを実装する必要があります。行をドラッグするときは、以下を確認してください:


- 行が展開されていますか? そうであれば、行を縮小します。
- 行はグリッド内にドロップされましたか?
- そうであれば、ドラッグされた行が他のどの行にドロップされましたか?
- ターゲット行が見つかれば、`data` 配列内のレコードの位置を入れ替えます。
- 行は最初に選択されてましたか? そうであれば、選択済みとしてマークします。


以下では、コンポーネントの `.ts` ファイルに実装されていることがわかります。




```typescript
export class TreeGridRowReorderComponent {
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




これらの簡単な手順で、ドラッグ/ドロップで行を並べ替えることができるグリッドを構成しました! 次のデモで、上記コードの動作を確認できます。


行の選択も有効で、ドラッグした行をドロップしても選択が保持されます。

<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-reordering/" >
</code-view>



<div class="divider--half"></div>



<div class="divider--half"></div>

## 制限

現在、`rowDraggable` ディレクティブに既知の制限はありません。

## API リファレンス

- [rowDraggable]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDraggable)
- [rowDragStart]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDragStart)
- [rowDragEnd]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowDragEnd)
- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)

## その他のリソース

<div class="divider--half"></div>

- [Tree Grid 概要](tree-grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
