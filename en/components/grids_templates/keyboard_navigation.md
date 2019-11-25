@@if (igxName === 'IgxGrid') {
---
title: Data Grid Component
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Component
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid Component
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich hierarchical grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid component, Angular Hierarchical Grid control, Angular High Performance Hierarchical Grid, Hierarchical Grid
---
}

## @@igComponent Keyboard Navigation

Keyboard navigation is available by default in any grid and aims at covering as many as possible features and scenarios for the end user. When you focus a specific cell and press one of the following key combinations, the described behavior is performed.

### Key combinations
@@if (igxName === 'IgxHierarchicalGrid') {
 - `Arrow Up` - navigates one cell up, going up the grid hierarchy if necessary (no wrapping);
 - `Arrow Down` - navigates one cell down, going deeper into the grid hierarchy if necessary (no wrapping);}@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
 - `Arrow Up` - navigates one cell up (no wrapping);
 - `Arrow Down` - navigates one cell down (no wrapping);}
 - `Arrow Left` - navigates one cell left (no wrapping between lines);
 - `Arrow Right` - navigates one cell right (no wrapping between lines);
 - `Ctrl + Arrow Up` - navigates to the first cell in the current column;
 - `Ctrl + Arrow Down` - navigates to the last cell in the current column;
 - `Ctrl + Arrow Left` -  moves to leftmost cell in row;
 - `Home` - moves to leftmost cell in row;
 - `Ctrl + Home` - moves to top left cell in the grid;
 - `Ctrl + Arrow Right` - moves to rightmost cell in row;
 - `End` - moves to rightmost cell in row;
 - `Ctrl + End` - moves to bottom right cell in the grid;
 - `Page Up` - scrolls one page (view port) up;
 - `Page Down` -  scrolls one page (view port) down;
 - `Enter` - enters edit mode;
 - `F2` - enters edit mode;
 - `Esc` - exits edit mode;
 - `Tab` - sequentially move the focus over the next cell on the row and if the last cell is reached move to next row; If next row is group row the whole row is focused, if it is data row, move focus over the first cell; When cell is in edit mode, will move the focus to next editable cell in the row, and from the right-most editable cell to the `CANCEL` and `DONE` buttons, and from the `DONE` button to the left-most editable cell within the currently edited row;
 - `Shift + Tab` - sequentially move focus to the previous cell on the row, if the first cell is reached move the focus to the previous row. If previous row is group row focus the whole row or if it is data row, focus the last cell of the row; when cell is in edit mode, will move the focus to the next editable cell in the row, and from the right-most editable cell to the `CANCEL` and `DONE` buttons, and from the `DONE` button to the left-most editable cell within the currently edited row;
 - `Space` -  if the row is selectable, on keydown space triggers row selection;@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
 - `Alt + Arrow Left` over GroupRow - collapses the group row content if the row is not already collapsed;
 - `Alt + Arrow Right` over GroupRow - expands the group row content if the row is not already expanded;}
 - on mouse `wheel` -  blurs the focused element;

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

