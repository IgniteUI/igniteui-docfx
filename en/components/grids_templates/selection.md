@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Data Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to select data in the Ignite UI Angular Material Table by using variety of events, rich API or with simple mouse interactions like single select
_keywords: data select, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Data Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to select data in the Ignite UI Angular Material Table by using variety of events, rich API or with simple mouse interactions like single select
_keywords: data select, igniteui for angular, infragistics
_canonicalLink: grid/selection
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Data Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to select data in the Ignite UI Angular Material Table by using variety of events, rich API or with simple mouse interactions like single select
_keywords: data select, igniteui for angular, infragistics
_canonicalLink: grid/selection
---
}

# Angular @@igComponent Selection Overview
With Ignite UI for Angular @@igComponent you can easily select data by using variety of events, rich API or with simple mouse interactions like single select.

## Angular Grid Selection Example

The sample below demonstrates the three types of @@igComponent's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-selection" alt="Angular Grid Selection Example">
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-selection" alt="Angular Grid Selection Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection" alt="Angular Grid Selection Example">
</code-view>

<div class="divider--half"></div>
}

## Angular Grid Selection Options

IgniteUI for Angular @@igComponent component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the @@igComponent. In order to change/enable selection mode you can use [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection), [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) or [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) properties.

### Angular Row Selection

Property [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection) enables you to specify the following options:
- none - Row selection would be disabled for the @@igComponent
- single - Selection of only one row within the @@igComponent would be available
- multiple - Multi-row selection would be available by using the `Row selectors`, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused @@if (igxName === 'IgxTreeGrid') {
- multipleCascade -  This is a mode for cascading selection, resulting in the selection of all children in the tree below the record that the user selects with user interaction. In this mode a parent's selection state entirely depends on the selection state of its children.
}

> Go to [Row selection topic](row-selection.md) for more information.

### Angular Cell Selection

Property [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) enables you to specify the following options:
- none - Cell selection would be disabled for the @@igComponent
- single - Selection of only one cell within the @@igComponent would be available.
- multiple - Currently, this is the default state of the selection in the @@igComponent. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

> Go to [Cell selection topic](cell-selection.md) for more information.

### Angular Column Selection

The [`selectable` property]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) enables you to specify the following options for each **column**:
- false - the corresponding column selection will be disabled for the @@igComponent
- true - the corresponding column selection will be enabled for the @@igComponent
- This lead to the following three variations:
 - Single selection - <kbd>mouse click</kbd> over the column cell.
 - Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.
 - Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.

> Go to [Column selection topic](column-selection.md) for more information.

@@if (igxName === 'IgxGrid'){
## Grid Context Menu

Using the [`onContextMenu`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncontextmenu) event you can add a custom context menu to facilitate your work with **IgxGrid**. With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.

If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.

Basically the main function will look like this:

```typescript
...
 public rightClick(eventArgs: any) {
     // Prevent the default behavior of the right click
    eventArgs.event.preventDefault();
    this.multiCellArgs = {};
    // If we have multi-cell selection, check if selected cell is within the ranges
    if (this.multiCellSelection) {
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid1.getSelectedRanges().some(range => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        })
        // If the cell is within a multi-cell selection range, bind all the selected cells data
        if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
        }
    }
    // Set the position of the context menu
    this.contextmenuX = eventArgs.event.clientX;
    this.contextmenuY = eventArgs.event.clientY;
    this.clickedCell = eventArgs.cell;
    // Enable the context menu
    this.contextmenu = true;
}
...
```
The context menu will have the following functions:
- Copy the selected cell's *value*
- Copy the selected cell's *dataRow*
- If the selected cell is within a **multi-cell selection range**, copy all the *selected data*

```typescript
//contextmenu.component.ts
...
    public copySelectedCellData(event) {
        const selectedData = { [this.cell.column.field]: this.cell.value };
        this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copyRowData(event) {
        const selectedData = this.cell.row.data ;
        this.copyData(JSON.stringify(this.cell.row.data));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copySelectedCells(event) {
        const selectedData = this.selectedCells.data;
        this.copyData(JSON.stringify(selectedData));
        this.onCellValueCopy.emit({ data: selectedData });
    }
...
```

The IgxGrid will fetch the copied data and will paste it in a container element.

The template we are going to use to combine the grid with the context menu:
```html
<div class="wrapper">
    <div class="grid__wrapper" (window:click)="disableContextMenu()">
        <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
            (onContextMenu)="rightClick($event)" (onRangeSelection)="getCells($event)"
            (onSelection)="cellSelection($event)">
        <!-- Columns area -->
        </igx-grid>
        <div *ngIf="contextmenu==true">
            <contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell" [selectedCells]="multiCellArgs" (onCellValueCopy)="copy($event)">
            </contextmenu>
        </div>
    </div>
    <div class="selected-data-area">
        <div>
           <pre>{{copiedData}}</pre>
        </div>
    </div>
</div>
```
 Select multiple cells and press the `right mouse` button. The context menu will appear and after selecting `Copy cells data` the selected data will appear in the right empty box.
 The result is:


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-contextmenu-sample" >
</code-view>

<div class="divider--half"></div>
}

## Known Issues and Limitations

- Using the @@igComponent with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application.

    ```typescript
    import 'core-js/es7/array';
    ```

## API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Row Selection](row-selection.md)
* [Cell Selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Virtualization and Performance](virtualization.md)
@@if (igxName === 'IgxGrid'){* [Selection-based Aggregates]({environment:angularApiUrl}/grid/selection-based-aggregates.html)}

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
