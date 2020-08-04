@@if (igxName === 'IgxGrid') {
---
title: グリッド行のドラッグ
_description: The Ignite UI for Angular Data Grid コントロールは、階層ビューやリストビューなどの需要の高い機能を備えた、最速でタッチレスポンス、データリッチな階層グリッドが実現できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, Row Drag, Row Dragging, Data Grid Row Drag, Data Table Row Drag
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: ツリー グリッド行ドラッグ
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブ、データリッチなツリー データ グリッドで階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Data Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Row Drag, Row Dragging, Tree Grid Row Drag, Tree Table Row Drag
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 階層グリッドの行ドラッグ
_description: Ignite UI for Angular Hierarchical Grid コントロールは、高速でタッチ レスポンシブが有効なデータ リッチなツリーグリッドです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Data Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Row Drag, Row Dragging, Hierarchical Grid Row Drag, Hierarchical Table Row Drag
_language: ja
---
}

### @@igComponent 行ドラッグ

Ignite UI for Angular @@igComponent では、**RowDrag** がルート `@@igSelector` コンポーネントで初期化されて、[`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable) 入力で設定できます。行ドラッグを有効にすると、ユーザーは行ドラッグ ハンドルを使用して行のドラッグを開始できます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-base-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-drag-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-drag-base-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag-base'    width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-row-drag-base-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-drag-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>
}

### 構成

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

#### ドロップエリア

行ドラッグを簡単に有効にできました。次は行ドロップを処理する方法を設定する必要があります。
[`igxDrop` ディレクティブ](../drag_drop.md) を使用して、行をドロップする場所を定義できます。

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
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (\leave)="onLeaveAllowed($event)"
(onDrop)="onDropAllowed($event)">	(dropped)="onDropAllowed($event)">
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

#### ドロップ エリア イベント ハンドラー

テンプレートでドロップ領域を定義したら、コンポーネントの `.ts` ファイルで `igxDrop`の [`enter`]({environment:angularApiUrl}/classes/igxdropdirective.html#enter)、[`leave`]({environment:angularApiUrl}/classes/igxdropdirective.html#leave)、[`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) イベントを宣言する必要があります。

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
- `sourceGrid` からドラッグした行を削除します
}

> [!NOTE]
> イベント引数 (`args.dragData.rowData`) または他の行プロパティからの行データを使用する場合、行全体が参照として引数に渡されることに注意してください。つまり、ソースグリッドのデータと区別する必要がある場合は、必要なデータを複製する必要があります。

#### ドラッグ ゴーストのテンプレート化
ドラッグゴーストは、`@@igSelector` のボディ内の `<ng-template>` に適用される `IgxRowDragGhost` ディレクティブを使用してテンプレート化できます。

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

##### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-multiple-row-drag" data-src='{environment:demosBaseUrl}/grid/grid-multiple-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-multiple-row-drag" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-multi-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
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

<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchical-grid-multiple-row-drag" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

}

#### ドラッグ アイコンのテンプレート化
ドラッグ ハンドル アイコンは、グリッドの [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dragindicatoricontemplate) を使用してテンプレート化できます。作成している例で、アイコンをデフォルトのもの (`drag_indicator`) から `drag_handle` に変更します。
`igxDragIndicatorIcon` を使用して `@@igSelector` のボディ内にテンプレートを渡して変更できます。
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
#### ドロップ エリアのスタイル
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
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-to-grid-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-row-drag-to-grid' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

以下のサンプルは、グリッドで行の並べ替えを構成する方法を示します。ドラッグ アイコンを押下しながら、グリッド内で好きな場所に行を移動できます。
<div class="sample-container loading" style="height:830px">
    <iframe id="grid-row-reorder" data-src='{environment:demosBaseUrl}/grid/grid-row-reorder' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-reorder" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-reorder" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-drag-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

以下のサンプルは、ツリー グリッドで行の並べ替えを構成する方法を示します。行の選択も有効で、ドラッグした行をドロップしても選択が保持されます。
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-reorder-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-reordering' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div> 
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-drag-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

以下のサンプルでは、階層グリッドで行の並べ替えを構成する方法を示します。
行の選択も有効で、ドラッグした行をドロップしても選択が保持されます。
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-reorder-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div> 
}

@@if (igxName === 'IgxGrid') {
### アプリケーション デモ
以下のデモは、行ドラッグ イベント情報を使用して、行がドロップされたカスタム コンポーネントとソース グリッド自体の両方の状態を変更する方法を示しています。
グリッドから月をドラッグして、それらを対応する惑星にドロップしてみてください。行ドラッグ ゴーストの背景は、ホバーされた惑星に応じて動的に変更されます。成功するとグリッド内の行が選択され、ドラッグは無効になります。惑星をクリックすると役に立つ情報が得られます。

<div class="sample-container loading" style="height:560px">
    <iframe id="grid-row-drag-1" data-src='{environment:demosBaseUrl}/grid/grid-row-drag' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-1" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-drag-1" data-demos-base-url="{environment:demosBaseUrl}">codesandboxb で表示</button>
</div>

> [!NOTE] 
> 上記のデモで使用した行ドラッグ ゴーストに適用されるクラスは ::ng-deep 修飾子を使用しています。行ドラッグは内部グリッド機能であり、CSS カプセル化のためにアプリケーションレベルでアクセスできないためです。

<div class="divider--half"></div>
}

### 制限

現在、`rowDraggable` ディレクティブに既知の制限はありません。

### API リファレンス

* [rowDraggable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable)
* [onRowDragStart]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart)
* [onRowDragEnd]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)