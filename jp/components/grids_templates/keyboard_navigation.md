@@if (igxName === 'IgxGrid') {
---
title: Grid Keyboard Navigation | Ignite UI for Angular | Infragistics
_description: Learn how to use Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction users can use keys to navigate between cells, rows and columns
_keywords: keyboard navigation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: TreeGrid Keyboard Navigation | Ignite UI for Angular | Infragistics
_description: Learn how to use TreeGrid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction users can use keys to navigate between cells, rows and columns
_keywords: keyboard navigation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: HierarchicalGrid Keyboard Navigation | Ignite UI for Angular | Infragistics
_description: Learn how to use HierarchicalGrid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction users can use keys to navigate between cells, rows and columns
_keywords: keyboard navigation, ignite ui for angular, infragistics
---
}

## @@igComponent Keyboard Navigation

The @@igComponent provides variety of keyboard interactions for the user. Keyboard navigation enhances the accessibility of the @@igxName by providing vast details of every element while navigating through each cell, row, column header or any other navigable element. This functionality comes with the @@igxName by the default, although the user has the freedom to override it by implementing a custom one.

The tabulations of the @@igxName has been reduced so that it is fully compliant and convenient to use.
Currently, the @@igxName introduces the following tab stops:
* `GroupBy` or `Toolbar area` (if enabled);
* @@igxName `header`;
* @@igxName `body`;
* `Column summaries` (if enabled);
* @@igxName `paginator` (if enabled);

>[!NOTE]
> Due to this behavior change to navigate between the cells with `tab` and `shift + tab` key is no longer supported in the @@igxName.
> Having that in mind, when pressing `tab` key leads to the following navigation sequence: "Grid Toolbar" -> "Grid Headers" -> "Grid Body" -> "Summaries" -> "Footer / Grid Paginator".
> Also, if @@igxName template contains any focusable element, they will be included in the navigation sequence either.

### Header Navigation

It has been introduced a full *keyboard navigation* support in the @@igxName header so that it can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger a different column functionality like filtering, sorting, grouping and etc.
When the @@igxName header container is focused and press one of the following key combinations, the described behavior is performed.

#### Key Combinations

 - `Arrow Up` - navigates one cell up in the headers (no wrapping); Available only when multi row layout or column groups are defined;
 - `Arrow Down` - navigates one cell down in the headers (no wrapping); Available only when multi row layout or column groups are defined;
 - `Arrow Left` - navigates one cell left (no wrapping between lines);
 - `Arrow Right` - navigates one cell right (no wrapping between lines);
 - `Ctrl + Arrow Left` - moves to leftmost cell in  the row; if there is MRL or MCH to the leftmost cell at the same level;
 - `Home` - moves to leftmost cell in  the row; if there is MRL or MCH to the leftmost cell at the same level;
 - `Ctrl + Arrow Right` - moves to rightmost cell in row; if there is MRL or MCH to the rightmost cell at the same level;
 - `End` - moves to rightmost cell in row; if there is MRL or MCH to the rightmost cell at the same level;
 - `Alt + L` - opens Advanced filtering dialog if advanced filtering is enabled;
 - `Ctrl + Shift + L` - opens the Excel style filter or default (row) filter if the column is filterable;
 - `Ctrl + Arrow Up` - sorts the active column header in ASC order. If the column is already sorted in ASC, it will remove the sorting;
 - `Ctrl + Arrow Down` - sorts the active column header in DSC order. If the column is already sorted in DSC, it will remove the sorting;
 - `Space` - select the current column; If the column is already selected, it will remove the selection;
@@if (igxName === "IgxGrid") { - `Shift + Alt + Arrow Left` - group by the active column **if the column is marked as groupable**;
 - `Shift + Alt + Arrow Right` - ungroup by the active column **if the column is marked as groupable**;
 - `Alt + Arrow Left` or `Alt + Arrow Up` - collapses the column group header **if the column is not already collapsed**;
 - `Alt + Arrow Right` or `Alt + Arrow Down` - expands the column group header **if the column is not already expanded**;}

### Body navigation

When the @@igxName body is focused and press one of the following key combinations, the described behavior is performed.

#### Key Combination

 - `Arrow Up`- navigates one cell up @@if (igxName === 'IgxHierarchicalGrid') {, going up the grid hierarchy if necessary}(no wrapping);
 - `Arrow Down`- navigates one cell down  @@if (igxName === 'IgxHierarchicalGrid') {, going deeper into the grid hierarchy if necessary}(no wrapping);
 - `Arrow Left`- navigates one cell left (no wrapping between lines);
 - `Arrow Right`- navigates one cell right (no wrapping between lines);
 - `Ctrl + Arrow Left` - moves to leftmost cell in row;
 - `Ctrl + Arrow Right` - moves to rightmost cell in row;
 - `Ctrl + Arrow Up` - navigates to the first cell in the current column;
 - `Ctrl + Arrow Down` - navigates to the last cell in the current column;
 - `Home` - moves to leftmost cell in row;
 - `End`- moves to rightmost cell in row;
 - `Ctrl + Home` - moves to the top leftmost data cell in the grid;
 - `Ctrl + End` - moves to bottom rightmost data cell in the grid;
 - `Page Up` - scrolls one page (view port) up;
 - `Page Down` - scrolls one page (view port) down;
 - `Enter` - enters edit mode;
 - `F2` - enters edit mode;
 - `Esc` - exits edit mode;
 - `Tab` - available only there is a cell in edit mode; sequentially move the focus to the next editable cell on the row and if the last cell is reached move to first editable cell of the next row; When the row editing is enabled from the right-most editable cell moves the focus to the `CANCEL` and `DONE` buttons, and from `DONE` button to the left-most editable cell within the currently edited row;
 - `Shift + TabF2` - available only there is a cell in edit mode; sequentially move the focus yo the previous editable cell on the row, if the first cell is reached move the focus to the last editable cell of the previous row. When the row editing is enabled from from the right-most editable cell  moves the focus to the `CANCEL` and `DONE` buttons, and from the `DONE` button to the left-most editable cell within the currently edited row;
 - `Space` - if the row is selectable, on key down `space` triggers row selection;
@@if (igxName === "IgxGrid") { - `Alt + Arrow Left` or `Alt + Arrow Up` - over GroupRow - collapses the group row content **if the row is not already collapsed**;
 - `Alt + Arrow Right` or `Alt + Arrow Down` - over GroupRow - collapses the group row content **if the row is not already collapsed**;
 - `Alt + Arrow Left` or `Alt + Arrow Up` - over master detailed row - collapses the row content **if the row is not already collapsed**;
 - `Alt + Arrow Right` or `Alt + Arrow Down` - over master detailed row - collapses the row content **if the row is not already collapsed**;}
@@if (igxName === "IgxHierarchicalGrid") {- `Alt + Arrow Left` or `Alt + Arrow Up` - collapses the **row island if the it is not already collapsed**;
 - `Alt + Arrow Right` or `Alt + Arrow Down` - over master detailed row - collapses the **row island if the it is not already collapsed**;}

Having all that theory may be easily turned into practice with the demo below.

By focusing any navigable grid container an action list will be shown, that will guide you though some of the keyboard combinations above.

### Demo
@@if (igxName === "IgxGrid") {
<div class="sample-container loading" style="height:470px">
    <iframe id="grid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-keyboardnav-guide' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === "IgxHierarchicalGrid") {
<div class="sample-container loading" style="height:470px">
    <iframe id="hgrid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hgrid-keyboard-guide' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === "IgxTreeGrid") {
<div class="sample-container loading" style="height:470px">
    <iframe id="tgrid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tgrid-keyboardnav-guide' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tgrid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

### カスタム キーボード ナビゲーション
特定のキーが押されたときに上記に示したデフォルトの動作をカスタマイズすることは、キーボード　ナビゲーション機能が提供する利点の 1 つです。`Enter キー`または `Tab キー`が押されたときと同じです。`次のセル`または`下のセル`に移動するようなアクションは、強力なキーボードナビゲーションAPIを使用して簡単に処理できます。

- [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#ongridkeydown) が公開されます。イベントは [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) を発生します。このイベントは、キーボードで上記のキー組み合わせを介してのみ使用できます。他のすべてのキー操作では、`keydown` event(keydown)= "onKeydown($ event)"を使用できます。
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) -
このメソッドを使用すると、提供された `rowindex` と `visibleColumnIndex` に基づいて位置に移動できます。
- [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) -
現在の位置に従って、特定の基準に一致する次のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) を返します。[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) メソッドの 3 番目のパラメータ－としてコールバック関数を渡すことができます。
- [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) -
現在の位置に従って、特定の基準に一致する前のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) を返します。[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) メソッドの 3 番目のパラメータ－としてコールバック関数を渡すことができます。。

 @@if (igxName === 'IgxHierarchicalGrid') {
> 注: [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) および [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) は現在のレベルでは使用できないため、子セルにアクセスすることはできません。
}

以下のサンプルは、その方法を示しています。
- `Tab キー` を押したときに数値にセル検証を追加します (水平ナビゲーション)。

#### デモ
@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [displayDensity]="'compact'"
    width="100%" height="350px" [paging]="true" [rowSelectable]="true" (onGridKeydown)="customKeydown($event)">
    <igx-column field="ProductID" header="Product ID" width="16%" [headerClasses]="'prodId'"
        [editable]="true">
    </igx-column>
```

```typescript
const cell = args.event.shiftKey ?
    this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
    this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
    (obj) => { obj.target.nativeElement.focus(); });
```
- `Enter key` キーを押すと列ベースのナビゲーション(垂直)を実行します。

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

カスタム キーボード ナビゲーションを確認するために以下の操作を試すことができます。
- 数値列タイプのセルをダブルクリックし、セルが編集モードになったら、値を `7` に変更して `tab キー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに `F2 キー`を使用できることに注意してください。

<div class="sample-container loading" style="height:400px">
    <iframe id="grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
igxHierarchicalGrid子グリッドにカスタムキーボードナビゲーションを追加するには、[`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) を処理し、各子グリッドを [`onGridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#ongridkeydown) イベントにサブスクライブする必要があります。

```typescript
public childGridCreated(event: IGridCreatedEventArgs) {
    const grid = event.grid;
    event.grid.onGridKeydown.subscribe((args) => {
        this.customKeydown(args, grid);
    });
}
```

```html
<igx-hierarchical-grid #grid1 class="hgrid" [data]="data" (onGridKeydown)="customKeydown($event, grid1)"
    [height]="'500px'" [width]="'80%'" [rowHeight]="'65px'">
        <igx-column field="Artist" editable="true" width="20%"></igx-column>
        ...
        <igx-column field="Grammy Awards" editable="true" dataType="number" width="20%"></igx-column>

        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [showToolbar]="true" toolbarTitle="Albums"
        (onGridCreated)="childGridCreated($event)">
            <igx-column field="Album"></igx-column>
            <igx-column field="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" editable="true"></igx-column>
            <igx-column field="US Billboard 200" editable="true"></igx-column>
        </igx-row-island>

</igx-hierarchical-grid>
```

- `Enter key` キーを押すと列ベースのナビゲーション (垂直) を実行します。

```typescript
public customKeydown(args: IGridKeydownEventArgs, grid) {
    ...
    if (type === "dataCell" && target.inEditMode && evt.key.toLowerCase() === "tab") {
        ...
        const cell = evt.shiftKey ?
            grid.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
            grid.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

        grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
            (obj) => { obj.target.nativeElement.focus(); });
    } else if (type === "dataCell" && evt.key.toLowerCase() === "enter") {
        ...
        grid.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
            (obj) => { obj.target.nativeElement.focus(); });
    }
}
```

カスタム キーボード ナビゲーションを確認するために`以下の操作`を試すことができます。
- `数値タイプ`のセルをダブル クリックし、セルが編集モードになったら、値を負の数値 (-1 など) に変更して `Tabキー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに F2 キーを使用できることに注意してください。

<div class="sample-container loading" style="height:520px">
    <iframe id="hgrid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {

```html
<igx-tree-grid #grid1 [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [displayDensity]="'compact'"
    width="100%" height="350px" [paging]="true" [rowSelectable]="true" (onGridKeydown)="customKeydown($event)">
    <igx-column field="ProductID" header="Product ID" width="16%" [headerClasses]="'prodId'"
        [editable]="true">
    </igx-column>
    ...
```

```typescript
const cell = args.event.shiftKey ?
    this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
    this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
    (obj) => { obj.target.nativeElement.focus(); });
```
- `Enter key` キーを押すと列ベースのナビゲーション (垂直) を実行します。

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

カスタム キーボード ナビゲーションを確認するために`以下の操作`を試すことができます。
- `Age` 列のセルをダブルクリックし、セルが編集モードになったら、値を `17` に変更して `Tab キー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに F2 キーを使用できることに注意してください。

<div class="sample-container loading" style="height:520px">
    <iframe id="tree-grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
</div>
}

既知の制限
|制限|説明|
|--- |--- |
|スクロール可能な親コンテナを使用してグリッド内を移動します。|グリッドがスクロール可能な親コンテナ内に配置され、ユーザーがグリッド内をナビゲートする際にビュー範囲外にセルがある場合、親コンテナーはスクロールしません。|

### API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

