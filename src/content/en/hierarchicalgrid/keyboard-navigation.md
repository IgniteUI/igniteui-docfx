---
title: Angular Hierarchical Grid Keyboard Navigation - Ignite UI for Angular
_description: Learn how to use Hierarchical Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/keyboard-navigation
---



# Angular Hierarchical Grid Keyboard Navigation

 Keyboard navigation in the **IgxHierarchicalGrid** provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the **IgxHierarchicalGrid** and allows to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the IgxHierarchicalGrid has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the IgxHierarchicalGrid introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled);
- **IgxHierarchicalGrid header**;
- **IgxHierarchicalGrid body**;
- **Column summaries** (if enabled);
- **IgxHierarchicalGrid paginator** (if enabled);

>[!NOTE]
> Due to this change, navigating between the cells with <kbd>tab</kbd> and <kbd>Shift + Tab</kbd> is no longer supported in the IgxHierarchicalGrid.
> Pressing the <kbd>Tab</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.
>[!NOTE]
> Exposing any **focusable** element into the **IgxHierarchicalGrid** body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full _keyboard navigation_ support in the **IgxHierarchicalGrid** header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the **IgxHierarchicalGrid** header container is focused, the following key combinations are available:

### Key Combinations

- <kbd>Arrow Up</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined
- <kbd>Arrow Down</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined
- <kbd>Arrow Left</kbd> navigates one cell left (no looping)
- <kbd>Arrow Right</kbd> navigates one cell right (no wrapping between lines)
- <kbd>Ctrl + Arrow Left</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
- <kbd>Home</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
- <kbd>Ctrl + Arrow Right</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
- <kbd>End</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
- <kbd>Alt + L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled
- <kbd>Ctrl + Shift + L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable
- <kbd>Ctrl + Arrow Up</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared
- <kbd>Ctrl + Arrow Down</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared
- <kbd>Space</kbd> selects the column; If the column is already selected, selection is cleared


## Body navigation

When the **IgxHierarchicalGrid** body is focused, the following key combinations are available:

### Key Combination

- <kbd>Arrow Up</kbd>- navigates one cell up , or one level up the grid hierarchy if necessary (no wrapping)
- <kbd>Arrow Down</kbd> navigates one cell down , or one level down the grid hierarchy if necessary(no wrapping)
- <kbd>Arrow Left</kbd> navigates one cell left (no wrapping between lines)
- <kbd>Arrow Right</kbd> - navigates one cell right (no wrapping between lines)
- <kbd>Ctrl + Arrow Left</kbd> navigates to the leftmost cell in the row
- <kbd>Ctrl + Arrow Right</kbd> navigates to the rightmost cell in the row
- <kbd>Ctrl + Arrow Up</kbd> navigates to the first cell in the column
- <kbd>Ctrl + Arrow Down</kbd> navigates to the last cell in the column
- <kbd>Home</kbd> navigates to the leftmost cell in the row
- <kbd>End</kbd> navigates to the rightmost cell in the row
- <kbd>Ctrl + Home</kbd> navigates to the top leftmost data cell in the grid
- <kbd>Ctrl + End</kbd> navigates to the bottom rightmost data cell in the grid
- <kbd>Page Up</kbd> scrolls one page (view port) up
- <kbd>Page Down</kbd> scrolls one page (view port) down
- <kbd>Enter</kbd> enters edit mode
- <kbd>F2</kbd> enters edit mode
- <kbd>Esc</kbd> exits edit mode
- <kbd>Tab</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When **Row Editing** is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row
- <kbd>Shift + Tab</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When **Row Editing** is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row
- <kbd>Space</kbd> - selects the row, if <kbd>Row Selection</kbd> is enabled
- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> -  collapses the row island 
- <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> -  expands the row island  
 
 

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Demo




<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hgrid-keyboard-guide/" >
</code-view>

<div class="divider--half"></div>




## Custom keyboard navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>Enter</kbd> or <kbd>Tab</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:






| API | Description | Arguments |
|---------|-------------|-----------|
| [`gridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#gridKeydown) | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`activeNodeChange`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#activeNodeChange) | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [IActiveNodeChangeEventArgs]({environment:angularApiUrl}/interfaces/iactivenodechangeeventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#navigateTo) | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />_grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });_ | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getNextCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the next cell by `rowIndex` and `visibleColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />_const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the previous cell by `rowIndex` and `visibleColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />_const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |



 
> [!NOTE]
> Both [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getNextCell) and [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell) are
> availabe for the current level and cannot access cells from upper or lower level.


Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the [`gridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridKeydown) event:





```html
<igx-hierarchical-grid #grid1 [data]="data" (gridKeydown)="customKeydown($event, grid1)">
    <igx-row-island [key]="'Albums'" (gridCreated)="childGridCreated($event)">
    </igx-row-island>
</igx-hierarchical-grid>
```

In order to add custom keyboard navigation to igxHierarchicalGrid child grids too, each child grid should subscribe to [`gridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#gridKeydown) event. That's why in example above we have registered and event handler for for the [`gridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#gridCreated) event:

```typescript
public childGridCreated(event: IGridCreatedEventArgs) {
    const grid = event.grid;
    event.grid.gridKeydown.subscribe((args) => {
        this.customKeydown(args, grid);
    });
}
```






```typescript
public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCell = args.target as IgxGridCell;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

Based on the [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>Tab</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>Enter</kbd> key over a cell, we will move focus to cell in the next row:





```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 0) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    const nexRowIndex = target.row.expanded ? target.rowIndex + 2 : target.rowIndex + 1;
    grid.navigateTo(nexRowIndex, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
```

> Note: Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:

- Double click or press <kbd>F2</kbd> key on a cell in the `Grammy Nominations` column, change the value to `-2` and press <kbd>tab</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>Enter</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

#### Demo


<code-view style="height:520px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation/" >
</code-view>





## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## API References

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

_[Grid Keyboard Navigation](../grid/keyboard-navigation.md)
_ [Tree Grid Keyboard Navigation](../treegrid/keyboard-navigation.md)





- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
