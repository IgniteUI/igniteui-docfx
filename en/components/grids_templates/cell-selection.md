@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Cell Selection - Ignite UI for Angular
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Cell Selection - Ignite UI for Angular
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for angular, infragistics
_canonicalLink: grid/cell-selection
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Cell Selection - Ignite UI for Angular 
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for angular, infragistics
_canonicalLink: grid/cell-selection
---
}

# Angular Cell Selection
The selection feature enables rich data select capabilities in the Material UI based @@igComponent. Variety of events and single select actions are available thanks to the powerful API and easy to use methods. The @@igComponent now supports three modes for cell selection, and you can easily switch between them by changing [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) property. You can disable cell selection, you can *select only one cell within the grid* or to *select multiple cells in the grid*, which is provided as default option.
@@if (igxName === 'IgxHierarchicalGrid') { In the Hierarchical Grid you can specify the cell selection mode on grid level. So for example in the parent grid multi-cell selection can be enabled, but in child grids cell selection mode can be single or disabled. }But let's dive deeper in each of these options.

## Angular Cell Selection Example
The sample below demonstrates the three types of @@igComponent's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-selection" alt="Angular Cell Selection Example">
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-selection" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection" >
</code-view>

<div class="divider--half"></div>
}

## Selection types
### @@igComponent Multiple-cell Selection

@@if (igxName === 'IgxHierarchicalGrid') {
This is the default cell selection mode in both parent and child grids. Please keep in mind that you can make cell selection one grid at a time, you can not make cross grid range selection or to have a selected cells in multiple grids. Each key combination related to range selection and mouse drag functionality can be used only in the same grid.
}
How to select cells:
- By `Mouse drag` - Rectangular data selection of cells would be performed.
- By `Ctrl key` press + `Mouse drag` - Multiple range selections would be performed. Any other existing cell selection will be persisted.
- Instant multi-cell selection by using Shift key. Select single cell and select another single cell by holding the Shift key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding `Shift key` the cell selection range will be updated based on the first selected cell position (starting point).
- Keyboard multi-cell selection by using the `Arrow keys` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.
- Keyboard multi-cell selection by using the `Ctrl + Arrow keys` and `Ctrl + Home/End` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.
- Clicking with the `Left Mouse key` while holding `Ctrl key` will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.

@@if (igxName === 'IgxGrid') {
#### Demo


<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multi-cell-selection" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
#### Demo


<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-cell-selection" >
</code-view>

<div class="divider--half"></div>
}

### @@igComponent Single Selection

When you set the `[cellSelection]="'single'"`, this allows you to have only one selected cell in the grid at a time. Also the mode `mouse drag` will not work and instead of selecting a cell, this will make default text selection.

>[!NOTE]
> When single cell is selected [`selected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selected) event is emitted, no matter if the `selection mode` is `single` or `multiple`. In multi-cell selection mode when you select a range of cells [`rangeSelected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rangeSelected) event is emitted.

### @@igComponent None selection
If you want to disable cell selection you can just set `[cellSelection]="'none'"` property. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the `activation style` is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.

@@if (igxName !== 'IgxHierarchicalGrid') {
## Keyboard navigation interactions

### While Shift key is pressed
- <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> to add above cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Down</kbd> to add below cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> to add left cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Right</kbd> to add right cell to the current selection.

### While Ctrl + Shift keys are pressed
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> to select all cells above the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Down</kbd> to select all cells below the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> to select all cells till the start of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Right</kbd> to select all cells till the end of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> to select all cells from the focused cell till the first-most cell in the grid
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> to select all cells from the focused cell till the last-most cell in the grid

> [!NOTE]
> Continuous scroll is possible only within Grid's body.

## Api usage
Below are the methods that you can use in order to select ranges, clear selection or get selected cells data.

### Select range

@@if (igxName === 'IgxGrid') {
[`selectRange(range)`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectRange) - Select a range of cells with the API. `rowStart` and `rowEnd` should use row indexes and `columnStart` and `columnEnd` could use column index or column data field value.
}
@@if (igxName === 'IgxTreeGrid') {
[`selectRange(range)`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#selectRange) - Select a range of cells with the API. `rowStart` and `rowEnd` should use row indexes and `columnStart` and `columnEnd` could use column index or column data field value.
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`selectRange(range)`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selectRange) - Select a range of cells with the API. `rowStart` and `rowEnd` should use row indexes and `columnStart` and `columnEnd` could use column index or column data field value.
}

```typescript
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid1.selectRange(range);
...

const range = { rowStart: 0, rowEnd: 2, columnStart: 'Name', columnEnd: 'ParentID' };
this.grid1.selectRange(range);

```

> [!NOTE]
> Select range is additive operation. It will not clear your previous selection.

### Clear cell selection

@@if (igxName === 'IgxGrid') {
[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearCellSelection) will clear the current cell selection.
}
@@if (igxName === 'IgxTreeGrid') {
[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#clearCellSelection) will clear the current cell selection.
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearCellSelection) will clear the current cell selection.
}
### Get selected data

@@if (igxName === 'IgxGrid') {
[`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:
}
@@if (igxName === 'IgxTreeGrid') {
[`getSelectedData()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`getSelectedData()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:
}

1. If three different single cells are selected:
```
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

2. If three cells from one column are selected:
```
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

3. If three cells are selected with mouse drag from one row and three columns:
```
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

4. If three cells are selected with mouse drag from two rows and three columns:
```
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

5. If two different ranges are selected:
```
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

6. If two overlapping ranges are selected, the format would be:
```
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```


@@if (igxName === 'IgxGrid') {
> [!NOTE]
> [`selectedCells()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectedCells) will return cells from all visible rows (rows in the grid's view port) and from all columns, including columns that are out of view. [`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedData) will also return the selected cell data.
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedRanges) will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is GridSelectionRange[].
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> [`selectedCells()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#selectedCells) will return cells from all visible rows (rows in the grid's view port) and from all columns, including columns that are out of view. [`getSelectedData()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getSelectedData) will also return the selected cell data.
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedRanges) will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is GridSelectionRange[].
}
@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> [`selectedCells()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selectedCells) will return cells from all visible rows (rows in the grid's view port) and from all columns, including columns that are out of view. [`getSelectedData()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getSelectedData) will also return the selected cell data.
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedRanges) will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is GridSelectionRange[].
}


## Features integration
The multi-cell selection is index based (DOM elements selection).

- `Sorting` - When sorting is performed selection will not be cleared. It will leave currently selected cells the same while sorting ascending or descending.
- `Paging` - On paging selected cells will be cleared. Selection wont be persisted across pages.
- `Filtering` - When filtering is performed selection will not be cleared. If filtering is cleared it will return - the initially selected cells.
- `Resizing` - On column resizing selected cells will not be cleared.
- `Hiding` - It will not clear the selected cells. If column is hidden, the cells from the next visible column will be selected.
- `Pinning` - Selected cell will not be cleared. Same as hiding
- `Group by` - On column grouping selected cells will not be cleared.

}

## Styling

The theme engine exposes properties that allow us to style the **range of selected cells**.

### Import theme

To get started with styling the selection, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

### Define colors

Once done, we can make use of the [`contrast-color`]({environment:sassApiUrl}/palettes#function-contrast-color) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. With them, we define the colors we would like to use for our selection range:

```scss
$text-color: contrast-color($color: 'primary', $variant: 900);
$background-color: color($color: "primary", $variant: 900);
$border-yellow: #f2c43c;
```

>[!NOTE]
>If we don't want to use the `contrast-color` and `color` functions, we can always hardcode the color values.

### Create custom theme

Next we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) passing our `text-color`, `background-color` and `border-yellow` variables as `$cell-selected-text-color`, `$cell-selected-background` and `$cell-active-border-color`, respectively:

```scss
$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color
);
```

### Apply theme

Afterwards, all we need to do is include the mixin in our component's style (could also be in the app styles), so that our @@igSelector uses the newly created theme instead of the default one:

```scss
@include css-vars($custom-grid-theme);
```

With the custom theme applied, the selected grid cells are highlighted with our selected colors:

@@if (igxName === 'IgxGrid'){
### Demo


<code-view style="height:620px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multi-cell-selection-style" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid'){
### Demo

<code-view style="height:620px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-cell-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){
### Demo

<code-view style="height:620px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-cell-selection-style" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRow API]({environment:angularApiUrl}/classes/igxtreegridrow.html)}
* [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Selection](selection.md)
* [Row selection](row-selection.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
