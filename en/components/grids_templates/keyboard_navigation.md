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
 - `Shift + Alt + Arrow Left` - group by the active column /if the column is marked as groupable/;
 - `Shift + Alt + Arrow Right` - ungroup by the active column /if the column is marked as groupable/;
 - `Alt + Arrow Left` or `Alt + Arrow Up` - collapses the column group header if the column is not already collapsed;
 - `Alt + Arrow Right` or `Alt + Arrow Down` - expands the column group header if the column is not already expanded;
 - `Space` - select the current column; If the column is already selected, it will remove the selection;

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
 - `Alt + Arrow Left` or `Alt + Arrow Up` - over GroupRow - collapses the group row content if the row is not already collapsed;
 - `Alt + Arrow Right` or `Alt + Arrow Down` - over GroupRow - collapses the group row content if the row is not already collapsed;

Having all that theory may be easily turned into practice with the demo below.

By focusing any navigable grid container an action list will be shown, that will guide you though some of the keyboard combinations above.

### Demo
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-keyboardnav-guide-sample-iframe" src='{environment:lobDemosBaseUrl}/grid/grid-keyboardnav-guide' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Custom keyboard navigation
Customizing the default behavior, that we described above when a certain key is pressed is one of the great benefits that our keyboard navigation feature provides. Like when `Enter key` or `Tab key` are pressed. Actions like `going to the next cell` or `cell below` could be handled easily with the powerful keyboard navigation API.

- [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#ongridkeydown) is exposed. The event will emit [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html). This event is available only through the keyboard key combinations mentioned above, for all other key actions you can use `keydown` event `(keydown)="onKeydown($event)"`
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) - this method allows you to navigate to a position based on provided `rowindex` and `visibleColumnIndex`
- [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) - returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) which defines the next cell, according to the current position, that match specific criteria. You can pass callback function as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) method
- [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) - returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) which defines the previous cell, according to the current position, that match specific criteria. You can pass callback function as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) method.

 @@if (igxName === 'IgxHierarchicalGrid') {
> Note: Both [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) and [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) are availabe on the current level, you cannot access child cells.
}

The sample below shows how to:
- add cell validation to number values on `tab key` press (horizontal navigation).

#### Demo
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
- perform column based navigation (vertical) on `enter key` press.

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

You can try the `actions below` in order to observe the custom keyboard navigation:
- Double click on a cell from number column type and after the cell is in edit mode, change the value to `7` and press `tab key`. Prompt message will be shown.
- Select a cell and press `Enter key` a couple of times. Column based navigation will be applied.

> Note: Keep in mind that the default `Enter key` action is overridden and in order to enter edit mode you can use `F2 key` instead.

<div class="sample-container loading" style="height:400px">
    <iframe id="grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
In order to add custom keyboard navigation to igxHierarchicalGrid child grids [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) should be handled and each child grid should subscribe to [`onGridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#ongridkeydown) event.

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

- perform column based navigation (vertical) on `enter key` press.

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

You can try the `actions below` in order to observe the custom keyboard navigation:
- Double click on a `number type` cell and after the cell is in edit mode, change the value to negative number (e.g. -1) and press `tab key`. Prompt message will be shown.
- Select a cell and press `Enter key` a couple of times. Column based navigation will be applied.

> Note: Keep in mind that the default `Enter key` action is overridden and in order to enter edit mode you can use `F2 key` instead.

<div class="sample-container loading" style="height:520px">
    <iframe id="hgrid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
- perform column based navigation (vertical) on `enter key` press.

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

You can try the `actions below` in order to observe the custom keyboard navigation:
- Double click on a cell from `Age` column and after the cell is in edit mode, change the value to `17` and press `tab key`. Prompt message will be shown.
- Select a cell and press `Enter key` a couple of times. Column based navigation will be applied.

> Note: Keep in mind that the default `Enter key` action is overridden and in order to enter edit mode you can use `F2 key` instead.

<div class="sample-container loading" style="height:520px">
    <iframe id="tree-grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

### Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates inside the grid, it will not scroll the parent container if there are cells out of view.|

### API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
