---
title: Data Grid Component
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid
---




## Grid Keyboard Navigation

Keyboard navigation is available by default in any grid and aims at covering as many as possible features and scenarios for the end user. When you focus a specific cell and press one of the following key combinations, the described behaviour is performed.

### Key combinations

 - `Arrow Up` - navigates one cell up (no wrapping);
 - `Arrow Down` - navigates one cell down (no wrapping);
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
 - `Space` -  if the row is selectable, on keydown space triggers row selection;
 - `Alt + Arrow Left` over GroupRow - collapses the group row content if the row is not already collapsed;
 - `Alt + Arrow Right` over GroupRow - expands the group row content if the row is not already expanded;
 - on mouse `wheel` -  blurs the focused element;

### Custom keyboard navigation
Customizing the default behavior, that we described above when a certain key is pressed is one of the great benefits that our keyboard navigation feature provides. Like when `Enter key` or `Tab key` are pressed. Actions like `going to the next cell` or `cell below` could be handled easily with the powerful keyboard navigation API.

- [`gridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridKeydown) is exposed. The event will emit [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html). This event is available only through the keyboard key combinations mentioned above, for all other key actions you can use `keydown` event `(keydown)="onKeydown($event)"`
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridcomponent.html#navigateto) - this method allows you to navigate to a position based on provided `rowindex` and `visibleColumnIndex`
- [`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#navigateto) - returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) which defines the next cell, according to the current position, that match specific criteria. You can pass callback function as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getpreviouscell) method
- [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getpreviouscell) - returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) which defines the previous cell, according to the current position, that match specific criteria. You can pass callback function as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getpreviouscell) method.

 

The sample below shows how to:
- add cell validation to number values on `tab key` press (horizontal navigation).

#### Demo


```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [displayDensity]="'compact'"
    width="100%" height="350px" [rowSelectable]="true" (gridKeydown)="customKeydown($event)">
    <igx-column field="ProductID" header="Product ID" width="16%" [headerClasses]="'prodId'"
        [editable]="true">
    </igx-column>
    <igx-paginator>
    </igx-paginator>
```

```typescript
const cell = args.event.shiftKey ?
    this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
    this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

this.grid1.navigateTo(cell.row.index, cell.column.visibleIndex,
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

> Note: Keep in mind that the default `Enter key` action is overriden and in order to enter edit mode you can use `F2 key` instead.


<code-view style="height:400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation/" >
</code-view>







### Known Limitations
|Limitation|Description|
|--- |--- |
| Navigating inside grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates inside the grid, it will not scroll the parent container if there are cells out of view.|

## API References
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

