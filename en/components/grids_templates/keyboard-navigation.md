@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Keyboard Navigation - Ignite UI for Angular
_description: Learn how to use Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Keyboard Navigation - Ignite UI for Angular
_description: Learn how to use Tree Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, ignite ui for angular, infragistics
_canonicalLink: grid/keyboard-navigation
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Keyboard Navigation - Ignite UI for Angular
_description: Learn how to use Hierarchical Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, ignite ui for angular, infragistics
_canonicalLink: grid/keyboard-navigation
---
}

# Angular @@igComponent Keyboard Navigation

 Keyboard navigation in the **@@igxName** provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the **@@igxName** and allows to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the @@igxName has been reduced so that the navigation is compliant with W3C accesibility standards and convenient to use.

Currently, the @@igxName introduces the following tab stops:
* **GroupBy or Toolbar area** (if enabled);
* **@@igxName header**;
* **@@igxName body**;
* **Column summaries** (if enabled);
* **@@igxName paginator** (if enabled);

>[!NOTE]
> Due to this change, navigating between the cells with <kbd>tab</kbd> and <kbd>Shift + Tab</kbd> is no longer supported in the @@igxName.
> Pressing the <kbd>Tab</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

>[!NOTE]
> Exposing any **focusable** element into the **@@igxName** body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full *keyboard navigation* support in the **@@igxName** header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the **@@igxName** header container is focused, the following key combinations are available:

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
@@if (igxName === "IgxGrid") { - <kbd>Shift + Alt + Arrow Left</kbd> groups the column, if the column is marked as groupable
 - <kbd>Shift + Alt + Arrow Right</kbd> ungroups the column, if the column is marked as groupable
 - <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> collapses the column group header, if the header is not already collapsed
 - <kbd>Alt + Arrow Right</kbd> or `Alt + Arrow Down</kbd> expands the column group header, if the header is not already expanded}

## Body navigation

When the **@@igxName** body is focused, the following key combinations are available:

### Key Combination

 - <kbd>Arrow Up</kbd>- navigates one cell up @@if (igxName === 'IgxHierarchicalGrid') {, or one level up the grid hierarchy if necessary }(no wrapping)
 - <kbd>Arrow Down</kbd> navigates one cell down @@if (igxName === 'IgxHierarchicalGrid') {, or one level down the grid hierarchy if necessary}(no wrapping)
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
 - <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> - @@if (igxName === "IgxGrid") {over Group Row - collapses the group} @@if (igxName === "IgxHierarchicalGrid") {collapses the row island} @@if (igxName === "IgxTreeGrid") {collapses the current node}
 - <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> - @@if (igxName === "IgxGrid") {over Group Row - expands the group} @@if (igxName === "IgxHierarchicalGrid") {expands the row island } @@if (igxName === "IgxTreeGrid") {expands the current node}
 @@if (igxName === "IgxGrid") {- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> - over Master Detail Row - collapses the details view
 - <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> - over Master Detail Row - expands the details view}
 @@if (igxName === "IgxGrid") {- <kbd>Space</kbd> - over Group Row - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple}

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Demo
@@if (igxName === "IgxGrid") {

<code-view style="height:470px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-keyboardnav-guide" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === "IgxHierarchicalGrid") {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hgrid-keyboard-guide" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === "IgxTreeGrid") {

<code-view style="height:470px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tgrid-keyboardnav-guide" >
</code-view>

<div class="divider--half"></div>
}


## Custom keyboard navigation
Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>Enter</kbd> or <kbd>Tab</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:



@@if (igxName === 'IgxGrid') {
| API | Description | Arguments |
|---------|-------------|-----------|
| [`gridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridKeydown) | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`activeNodeChange`]({environment:angularApiUrl}/classes/igxgridcomponent.html#activeNodeChange) | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [IActiveNodeChangeEventArgs]({environment:angularApiUrl}/interfaces/iactivenodechangeeventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxgridcomponent.html#navigateTo) | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />*grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });* | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getNextCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the next cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getPreviousCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the previous cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getPreviousCell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
}
@@if (igxName === 'IgxTreeGrid') {
| API | Description | Arguments |
|---------|-------------|-----------|
| [`gridKeydown`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#gridKeydown) | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`activeNodeChange`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#activeNodeChange) | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [IActiveNodeChangeEventArgs]({environment:angularApiUrl}/interfaces/iactivenodechangeeventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#navigateTo) | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />*grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });* | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getNextCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the next cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getPreviousCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the previous cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getPreviousCell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
}
@@if (igxName === 'IgxHierarchicalGrid') {

| API | Description | Arguments |
|---------|-------------|-----------|
| [`gridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#gridKeydown) | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`activeNodeChange`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#activeNodeChange) | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [IActiveNodeChangeEventArgs]({environment:angularApiUrl}/interfaces/iactivenodechangeeventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#navigateTo) | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />*grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });* | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getNextCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the next cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell)| returns [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) object, which defines the previous cell by `rowIndex` and `visibileColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />*const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
}

 @@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> Both [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getNextCell) and [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell) are
> availabe for the current level and cannot access cells from upper or lower level.
}

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the [`gridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridKeydown) event:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" (gridKeydown)="customKeydown($event)">
```
}

@@if (igxName === 'IgxHierarchicalGrid') {

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
}


@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #grid1 [data]="data" (gridKeydown)="customKeydown($event)">
</igx-tree-grid>
```
}

```typescript
public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCell = args.target as IgxGridCell;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATON ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

Based on the [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>Tab</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>Enter</kbd> key over a cell, we will move focus to cell in the next row:

@@if (igxName === 'IgxGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
        });
```
>[!NOTE]
> Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:
- Double click or press <kbd>F2</kbd> key on a cell in the **Order** column, change the value to **7** and press <kbd>Tab</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>Enter</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

#### Demo


<code-view style="height:400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
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
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === 'number' && target.editValue < 18) {
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
- Double click or press <kbd>F2</kbd> key on a cell in the `Age` column, change the value to `16` and press <kbd>tab</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>Enter</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

<code-view style="height:520px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-keyboard-navigation" >
</code-view>

}

## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources
<div class="divider--half"></div>

@@if (igxName === 'IgxHierarchicalGrid') {* [Grid Keyboard Navigation](../grid/keyboard-navigation.md)}
@@if (igxName === 'IgxHierarchicalGrid') {* [Tree Grid Keyboard Navigation](../treegrid/keyboard-navigation.md)}
@@if (igxName === 'IgxTreeGrid') {* [Hierarchical Grid Keyboard Navigation](../hierarchicalgrid/keyboard-navigation.md)}
@@if (igxName === 'IgxTreeGrid') {* [Grid Keyboard Navigation](../grid/keyboard-navigation.md)}
@@if (igxName === 'IgxGrid') {* [Hierarchical Grid Keyboard Navigation](../hierarchicalgrid/keyboard-navigation.md)}
@@if (igxName === 'IgxGrid') {* [Tree Grid Keyboard Navigation](../treegrid/keyboard-navigation.md)}
* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
