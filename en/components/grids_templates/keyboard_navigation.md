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

 Keyboard navigation in the `@@igxName` provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the `@@igxName` and allows to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the @@igxName has been reduced so that the navigation is compliant with W3C accesibility standards and convenient to use.

Currently, the @@igxName introduces the following tab stops:
* `GroupBy` or `Toolbar area` (if enabled);
* @@igxName `header`;
* @@igxName `body`;
* `Column summaries` (if enabled);
* @@igxName `paginator` (if enabled);

>[!NOTE]
> Due to this change, navigating between the cells with `tab` and `shift + tab` is no longer supported in the @@igxName.
> Pressing the `tab` key now goes through the tab stops in the following order: `GroupBy` / `Toolbar` -> `Headers` -> `Body` -> `Summaries` -> `Footer / Paginator`.

>[!NOTE]
> Exposing any **focusable** element into the `@@igxName` body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

### Header Navigation

A full *keyboard navigation* support in the `@@igxName` header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like `filtering`, `sorting`, `grouping` and etc.
When the `@@igxName` header container is focused, the following key combinations are available:

#### Key Combinations

 - `Arrow Up` - navigates one cell up in the headers (no looping). Available only when Multi Row Layout (MRL) or Multi Column Headers (MCH) are defined
 - `Arrow Down` - navigates one cell down in the headers (no wrapping). Available only when Multi Row Layout (MRL) or Multi Column Headers (MCH) are defined
 - `Arrow Left` - navigates one cell left (no looping)
 - `Arrow Right` - navigates one cell right (no wrapping between lines)
 - `Ctrl + Arrow Left` - navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
 - `Home` - navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
 - `Ctrl + Arrow Right` - navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
 - `End` - navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
 - `Alt + L` - opens Advanced Filtering dialog if Advanced Filtering is enabled
 - `Ctrl + Shift + L` - opens the Excel Style Filter dialog or the default (row) filter if the column is filterable
 - `Ctrl + Arrow Up` - sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared
 - `Ctrl + Arrow Down` - sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared
 - `Space` - selects the column; If the column is already selected, selection is cleared
@@if (igxName === "IgxGrid") { - `Shift + Alt + Arrow Left` - groups the column, if the column is marked as groupable
 - `Shift + Alt + Arrow Right` - ungroups the column, if the column is marked as groupable
 - `Alt + Arrow Left` or `Alt + Arrow Up` - collapses the column group header, if the header is not already collapsed
 - `Alt + Arrow Right` or `Alt + Arrow Down` - expands the column group header, if the header is not already expanded}

### Body navigation

When the `@@igxName` body is focused, the following key combinations are available:

#### Key Combination

 - `Arrow Up`- navigates one cell up @@if (igxName === 'IgxHierarchicalGrid') {, or one level up the grid hierarchy if necessary }(no wrapping)
 - `Arrow Down`- navigates one cell down @@if (igxName === 'IgxHierarchicalGrid') {, or one level down the grid hierarchy if necessary}(no wrapping)
 - `Arrow Left`- navigates one cell left (no wrapping between lines)
 - `Arrow Right`- navigates one cell right (no wrapping between lines)
 - `Ctrl + Arrow Left` - navigates to the leftmost cell in the row
 - `Ctrl + Arrow Right` - navigates to the rightmost cell in the row
 - `Ctrl + Arrow Up` - navigates to the first cell in the column
 - `Ctrl + Arrow Down` - navigates to the last cell in the column
 - `Home` - navigates to the leftmost cell in the row
 - `End`- navigates to the rightmost cell in the row
 - `Ctrl + Home` - navigates to the top leftmost data cell in the grid
 - `Ctrl + End` - navigates to the bottom rightmost data cell in the grid
 - `Page Up` - scrolls one page (view port) up
 - `Page Down` - scrolls one page (view port) down
 - `Enter` - enters edit mode
 - `F2` - enters edit mode
 - `Esc` - exits edit mode
 - `Tab` - available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When `Row Editing` is enabled, moves the focus from the right-most editable cell to the `CANCEL` and `DONE` buttons, and from `DONE` button to the left-most editable cell in the row
 - `Shift + Tab` - available only there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the the first cell in the row, moves the focus to the last editable cell in the previous row. When `Row Editing` is enabled, moves the focus from the right-most editable cell to the `CANCEL` and `DONE` buttons, and from the `DONE` button to the right-most editable cell in the row
 - `Space` - selects the row, if `Row Selection` is enabled
 - `Alt + Arrow Left` or `Alt + Arrow Up` - @@if (igxName === "IgxGrid") {over Group Row - collapses the group} @@if (igxName === "IgxHierarchicalGrid") {collapses the row island} @@if (igxName === "IgxTreeGrid") {collapses the current node}
 - `Alt + Arrow Right` or `Alt + Arrow Down` - @@if (igxName === "IgxGrid") {over Group Row - expands the group} @@if (igxName === "IgxHierarchicalGrid") {expands the row island } @@if (igxName === "IgxTreeGrid") {expands the current node}
 @@if (igxName === "IgxGrid") {- `Alt + Arrow Left` or `Alt + Arrow Up` - over Master Detail Row - collapses the details view
 - `Alt + Arrow Right` or `Alt + Arrow Down` - over Master Detail Row - expands the details view}

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

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


### Custom keyboard navigation
Overriding the default behavior for a certain key or keys combination is one of the benefits that the `Keyboard Navigation` feature provides. For example: press the `Enter` or `Tab` key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the `Keyboard Navigation` API:

| API | Description | Arguments |
|---------|-------------|-----------|
| [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#ongridkeydown) | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />*grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });* | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getnextcell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the next cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the previous cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |

 @@if (igxName === 'IgxHierarchicalGrid') {
>[!NOTE]
> Both [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getnextcell) and [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) are
> availabe for the current level and cannot access cells from upper or lower level.
}

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#ongridkeydown) event:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" (onGridKeydown)="customKeydown($event)">
```
}

@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-hierarchical-grid #grid1 [data]="data" (onGridKeydown)="customKeydown($event, grid1)">
    <igx-row-island [key]="'Albums'" (onGridCreated)="childGridCreated($event)">
    </igx-row-island>
</igx-hierarchical-grid>
```

In order to add custom keyboard navigation to igxHierarchicalGrid child grids too, each child grid should subscribe to [`onGridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#ongridkeydown) event. That's why in example above we have registered and event handler for for the [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) event:

```typescript
public childGridCreated(event: IGridCreatedEventArgs) {
    const grid = event.grid;
    event.grid.onGridKeydown.subscribe((args) => {
        this.customKeydown(args, grid);
    });
}
```
}


@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #grid1 [data]="data" (onGridKeydown)="customKeydown($event)">
</igx-tree-grid>
```
}

```typescript
public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === "dataCell" && target.inEditMode && evt.key.toLowerCase() === "tab") {
        // 1. USER INPUT VALIDATON ON TAB
    }
    if (type === "dataCell" && evt.key.toLowerCase() === "enter") {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

Based on the `IGridKeydownEventArgs` values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing `Tab` key over a cell in edit mode, we will perform validation on the input. If the user is pressing `Enter` key over a cell, we will move focus to cell in the next row:

@@if (igxName === 'IgxGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === "number" && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    grid.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
```
> Note: Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:
- Double click or press `F2` key on a cell in the `Order` column, change the value to `7` and press `tab key`. Prompt message will be shown.
- Select a cell and press `Enter` key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

#### Demo

<div class="sample-container loading" style="height:400px">
    <iframe id="grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === "number" && target.editValue < 0) {
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
- Double click or press `F2` key on a cell in the `Grammy Nominations` column, change the value to `-2` and press `tab key`. Prompt message will be shown.
- Select a cell and press `Enter` key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

#### Demo

<div class="sample-container loading" style="height:520px">
    <iframe id="hgrid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}



@@if (igxName === 'IgxTreeGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === "number" && target.editValue < 18) {
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
- Double click or press `F2` key on a cell in the `Age` column, change the value to `16` and press `tab key`. Prompt message will be shown.
- Select a cell and press `Enter` key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.
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
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

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
