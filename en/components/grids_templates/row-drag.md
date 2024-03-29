@@if (igxName === 'IgxGrid') {
---
title: Row Dragging in Angular Data Grid - Ignite UI for Angular
_description: Row dragging in Angular Data Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: angular drag component, material component, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Row Dragging in Angular Tree Grid - Ignite UI for Angular
_description: Row dragging in Angular Tree Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: angular drag component, material component, ignite ui for angular, infragistics
_canonicalLink: grid/row-drag
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Row Dragging in Angular Hierarchical Grid - Ignite UI for Angular
_description: Row dragging in Angular Hierarchical Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: angular drag component, material component, ignite ui for angular, infragistics
_canonicalLink: grid/row-drag
---
}

# Row Dragging in Angular @@igComponent

In Ignite UI for Angular @@igComponent, **RowDrag** is initialized on the root `@@igSelector` component and is configurable via the [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDraggable) input. Enabling row dragging provides users with a row drag-handle with which they can initiate dragging of a row.

## Angular @@igComponent Row Drag Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-drag-base" alt="Angular @@igComponent Row Drag Example">
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag-base" alt="Angular @@igComponent Row Drag Example">
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-drag-base" alt="Angular @@igComponent Row Drag Example">
</code-view>

<div class="divider--half"></div>
}

## Configuration

In order to enable row-dragging for your `@@igSelector`, all you need to do is set the grid's [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDraggable) to **`true`**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging.

```html
<@@igSelector [rowDraggable]="true">
 ...
</@@igSelector>
```
Clicking on the drag-handle and *moving the cursor* while holding down the button will cause the grid's [`rowDragStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragStart) event to fire. Releasing the click at any time will cause [`rowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragEnd) event to fire.

Below, you can find a walkthrough on how to configure an `@@igSelector` to support row dragging and how to properly handle the drop event.

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.
}
@@if (igxName === 'IgxGrid') {
In this example, we'll handle dragging a row from one grid to another, removing it from the first data source and adding it to the second.
}

### Drop Areas

Enabling row-dragging was pretty easy, but now we have to configure how we'll handle row-*dropping*.
We can define where we want our rows to be dropped using the [`igxDrop` directive](../drag-drop.md).

First we need to import the `IgxDragDropModule` in our app module:

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular';
// import { ..., IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package
...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```

Then, in our template, we define a drop-area using the directive's selector:

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```
}
@@if (igxName === 'IgxGrid') {
In this case, our drop-area will be a whole second grid where we'll drop the rows.
```html
<igx-grid #targetGrid igxDrop [data]="data2" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
    (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)" (dropped)="onDropAllowed($event)" [primaryKey]="'ID'">
    ...
</igx-grid>
```

Since the grid will initially be empty, we also define a template that will be more meaningful to the user:

```html
<ng-template #dragHereTemplate>
    Drop a row to add it to the grid
</ng-template>
```
}

You may enable animation when a row is dropped on a non-droppable area using the `animation` parameter of the [`rowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragEnd) event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.

You may enable animation like this:

```typescript
export class @@igxNameRowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

### Drop Area Event Handlers

Once we've defined our drop-area in the template, we have to declare our handlers for the `igxDrop`'s [`enter`]({environment:angularApiUrl}/classes/igxdropdirective.html#enter), [`leave`]({environment:angularApiUrl}/classes/igxdropdirective.html#leave) and [`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) events in our component's `.ts` file.

First, let's take a look at our `enter` and `leave` handlers. In those methods, we just want to change the icon of the drag's *ghost* so we can indicate to the user that they are above an area that allows them to drop the row:

```typescript
export class @@igxNameRowDragComponent {
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
```
The `changeGhostIcon` **private** method just changes the icon inside of the drag ghost. The logic in the method finds the element that contains the icon (using the `igx-grid__drag-indicator` class that is applied to the drag-indicator container), changing the element's inner text to the passed one.
The icons themselves are from the [`material` font set](https://material.io/tools/icons/) and are defined in a separate **`enum`**:
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}
```
}
@@if (igxName === 'IgxGrid') {
```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'add'
}
```
}

Next, we have to define what should happen when the user actually *drops* the row inside of the drop-area.
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
export class @@igxNameRowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

}
```

Once the row is dropped, we just call the row's [`delete()`]({environment:angularApiUrl}/classes/@@igxNameRowComponent.html#delete) method
}

@@if (igxName === 'IgxGrid') {
```typescript
export class @@igxNameRowDragComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent }) public targetGrid: IgxGridComponent;

    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
    }
}
```

We define a reference to each of our grids via the `ViewChild` decorator and the handle the drop as follows:
- add a row to the `targetGrid` that contains the data of the row being dropped
- remove the dragged row from the `sourceGrid`
}

> [!NOTE]
> When using row data from the event arguments (`args.dragData.data`) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.

### Templating the drag ghost
The drag ghost can be templated using the `IgxRowDragGhost` directive, applied to a `<ng-template>` inside of the `@@igSelector`'s body:
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

The result of the configuration can be seem below in a `@@igSelector` with row dragging and multiple selection enabled. The demo shows the count of the currently dragged rows:

#### Example Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multiple-row-drag" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-row-drag" >
</code-view>

<div class="divider--half"></div>
}


@@if (igxName === 'IgxHierarchicalGrid') {
The drag ghost can be templated on every grid level, making it possible to have multiple ghost templates or to only provide a template for a single row island.

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

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-row-drag" >
</code-view>

<div class="divider--half"></div>
}

### Templating the drag icon
The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (`drag_indicator`) to `drag_handle`.
To do so, we can use the `igxDragIndicatorIcon` to pass a template inside of the `@@igSelector`'s body:
```html
<@@igSelector>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</@@igSelector>
```

Once we've set the new icon template, we also need to adjust the `DEFAULT` icon in our `DragIcon enum`, so it's properly change by the `changeIcon` method:
```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
### Styling the drop area
Once our drop handlers are properly configured, all that's left is to style our drop area a bit:
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

The result can be seen in the demo below:
}
@@if (igxName === 'IgxGrid') {
Once our drop handlers are properly configured, we're good to go!
The result of the configuration can be seem below:
}

#### Example Demo
@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-drag-to-grid" >
</code-view>


<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag" >
</code-view>


<div class="divider--half"></div> 
}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag" >
</code-view>


<div class="divider--half"></div> 
}

## Application Demo
@@if (igxName === 'IgxGrid') {

### Using Row Drag Events
The following demo demonstrates how to use row drag event information to change both states of a custom component, where the row is dropped, and the source grid itself.
Try to drag moons from the grid and drop them to their corresponding planets. Row drag ghost background is dynamically changed, depending on the hovered planet. If you succeed then the row in the grid will be selected and dragging will be disabled for it. Clicking planets will give you useful information.


<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-drag" >
</code-view>


> [!NOTE] 
> The classes applied to the row drag ghost, used in the demo above, are using ::ng-deep modifier, because row drag is an internal grid feature and cannot be accessed on application level, due to the CSS encapsulation.
}

### Row Reordering Demo
With the help of the grid's row drag events and the `igxDrop` directive, you can create a grid that allows you to reorder rows by dragging them.

Since all of the actions will be happening _inside_ of the grid's body, that's where you have to attach the `igxDrop` directive:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid [data]="data" [rowDraggable]="true" [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
    ...
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid igxPreventDocumentScroll  #treeGrid [data]="localData" [rowDraggable]="true" foreignKey="ParentID"
    [primaryKey]="'ID'" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="dropInGrid($event)">
    ...
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="rowDrop($event)">
    ...
</igx-hierarchical-grid>
```
}


> [!NOTE]
> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered

Once `rowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:
@@if (igxName === 'IgxGrid') {
  - Was the row dropped inside of the grid?
  - If so, on which _other_ row was the dragged row dropped?
  - Once you've found the _target_ row, swap the records' places in the `data` array
}
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
  - Is the row expanded? If so, collapse it.
  - Was the row dropped inside of the grid?
  - If so, on which _other_ row was the dragged row dropped?
  - Once you've found the _target_ row, swap the records' places in the `data` array
  - Was the row initially selected? If so, mark it as selected.
}

Below, you can see this implemented in the component's `.ts` file:

@@if (igxName === 'IgxGrid') {
```typescript
export class GridRowReorderComponent {
    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.indexOf(this.data.find((r) => r.rowID === row.rowID));
            }
        }

        return -1;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
export class TreeGridRowReorderComponent {
    public rowDragStart(args: any): void {
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetrow.key);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        const row = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }
        if (row.data.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.data.ParentID === draggedrow.data.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedrow.data);
                this.localData[rowIndex].ParentID = row.data.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.rowID === draggedrow.key).rowID], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: IgxTreeGridRowComponent, targetRow: IgxTreeGridRowComponent) {
        const draggedRowIndex = this.getRowIndex(draggedrow.data);
        const targetRowIndex: number = this.getRowIndex(targetrow.data);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedrow.data);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point)
        : IgxTreeGridRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
export class HGridRowReorderComponent {
    public rowDragStart(args: any): void {
        const targetRow = args.dragData;
        if (targetRow.expanded) {
            targetRow.expanded = false;
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        // const parent: IgxHierarchicalGridComponent = (draggedRow as any).grid;
        // const parent = args.drag.ghostContext.grid;
        const parent = this.hGrid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        const wasSelected = draggedRow.selected;
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.data);
        if (wasSelected) {
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowID === draggedRow.key).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: RowType[], cursorPosition: Point): number {
        const targetElem: IgxHierarchicalRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point)
        : IgxHierarchicalRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            } else if (row === rowListArr[rowListArr.length - 1] && cursorPosition.y > rowRect.bottom) {
                return row;
            }
        }
    }
}
```
}

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.
@@if (igxName === 'IgxGrid') {
Holding onto the drag icon will allow you to move a row anywhere in the grid:

<code-view style="height:830px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-row-reorder" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-row-reordering" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder" >
</code-view>

}
<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
### Improving UX in row drag scenarios

Being able to obtain the row index which is currently below the cursor provides you with the opportunity to build rich custom functionalities and to improve the UX of your application. For example, you can change the drag ghost or display a drop indicator, based on the position of the dragged row over the grid. Another useful behavior that you can achieve that way is to scroll the grid up or down while dragging a row, when reaching the border of the grid.

Below you can find example snippets of a couple of custom implementations you can achieve by knowing the row's position.

#### Changing the drag ghost based on cursor position
In the snippets below you see how you can change the text inside the drag ghost to display the name of the hovered row.

First, you specify a template which you'd like to use for the drag ghost. The `dropName` property will dynamically change, getting the name of the row over which the cursor is hovering:

```html
<ng-template igxRowDragGhost>
    <div class="customGhost">
        <div>{{ dropName }}</div>
    </div>
</ng-template>
```

Then, define a method that returns the instance of the row you're over (similar to the one used in the [row reordering demo](#row-reordering-demo)):

```typescript
class MyRowGhostComponent {
    private getRowDataAtPoint(rowList: IgxGridRowComponent[], cursorPosition: Point): any {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return this.data.find((r) => r.rowID === row.rowID);
            }
        }
        return null;
    }
}
```

Finally, we create a method that will be used to handle the [`IgxDragDirective.dragMove`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragMove) event (emitted for the dragged row). The method will change the value of the property used in the `igxRowDragGhost` template and force a rerender.
We want to subscribe to the `dragMove` event only of the specific row we're dragging and unsub from it (to prevent memory leaks) each time a row is dropped.

```typescript
class MyRowGhostComponent {
    public ngAfterViewInit(): void {
        this.grid.rowDragStart.pipe(takeUntil(this.destroy$)).subscribe(this.onRowDragStart.bind(this));
    }

    private onRowDragStart(e: IRowDragStartEventArgs) {
        if (e !== null) {
            this._draggedRow = e.dragData.rowData;
        }
        const directive = e.dragDirective;
        directive.dragMove
            .pipe(takeUntil(this.grid.rowDragEnd))
            .subscribe(this.onDragMove.bind(this));
    }

    private onDragMove(args: IDragMoveEventArgs) {
        const cursorPosition = this.getCursorPosition(args.originalEvent);
        const hoveredRowData = this.getRowDataAtPoint(
            this.grid.rowList.toArray(),
            cursorPosition
        );
        if (!hoveredRowData) {
            args.cancel = true;
            return;
        }
        const rowID = hoveredRowData.ID;
        if (rowID !== null) {
            let newName = this.dropName;
            if (rowID !== -1) {
                const targetRow = this.grid.rowList.find((e) => {
                    return e.rowData.ID === rowID;
                });
                newName = targetRow?.rowData.Name;
            }
            if (newName !== this.dropName) {
                this.dropName = newName;
                args.owner.cdr.detectChanges();
            }
        }
    }
}

```

#### Displaying a drop indicator based on cursor position

In the demo in the next section you see how you can display an indicator of where the dragged row would be dropped. You can customize this indicator as you like - it may be a placeholder row, placed at the position where the dragged row would be dropped, a border style indicating if the dragged row would be dropped above or below the currently hovered row, etc.

In order to track the position of the cursor, we bind to the `dragMove` event of the [`IgxDragDirective`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragMove) when we start dragging a row.

> [!NOTE]
> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered

```typescript
public ngAfterViewInit() {
  this.grid.rowDragStart
    .pipe(takeUntil(this.destroy$))
    .subscribe(this.handleRowStart.bind(this));
}

private handleRowStart(e: IRowDragStartEventArgs): void {
  if (e !== null) {
    this._draggedRow = e.dragData.data;
  }
  const directive = e.dragDirective;
  directive.dragMove
    .pipe(takeUntil(this.grid.rowDragEnd))
    .subscribe(this.handleDragMove.bind(this));
}

private handleDragMove(event: IDragMoveEventArgs): void {
  this.handleOver(event);
}

private handleOver(event: IDragMoveEventArgs) {
  const ghostRect = event.owner.ghostElement.getBoundingClientRect();
  const rowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
    x: ghostRect.x,
    y: ghostRect.y
  });
  if (rowIndex === -1) {
    return;
  }
  const rowElement = this.grid.rowList.find(
    e => e.rowData.ID === this.grid.data[rowIndex].ID
  );
  if (rowElement) {
    this.changeHighlightedElement(rowElement.element.nativeElement);
  }
}

private clearHighlightElement(): void {
  if (this.highlightedRow !== undefined) {
    this.renderer.removeClass(this.highlightedRow, 'underlined-class');
  }
}

private setHightlightElement(newElement: HTMLElement) {
  this.renderer.addClass(newElement, 'underlined-class');
  this.highlightedRow = newElement;
}

private changeHighlightedElement(newElement: HTMLElement) {
  if (newElement !== undefined) {
    if (newElement !== this.highlightedRow) {
      this.clearHighlightElement();
      this.setHightlightElement(newElement);
    } else {
      return;
    }
  }
}
```



<div class="divider--half"></div>

#### Scrolling the grid on row drag

A very useful scenario is being able to scroll the grid when the dragged row reaches its' top or bottom border. This allows reordering rows outside of the current viewport when the number of rows in the grid requires a scrollbar.

Below you see an example of the two methods we use to check if we have reached the edge of the viewport and to scroll it if needed. The `isGridScrolledToEdge` accepts one parameter - the direction we'd like to scroll the grid (1 for "Down", -1 for "Up") and returns `true` if we've reach the final row in that direction. The `scrollGrid` method will attempt to scroll the grid in a direction (1 or -1), doing nothing if the grid is already at _that_ edge.

```typescript
class MyGridScrollComponent {
    private isGridScrolledToEdge(dir: 1 | -1): boolean {
        if (this.grid.data[0] === this.grid.rowList.first.data && dir === -1) {
            return true;
        }
        if (
            this.grid.data[this.grid.data.length - 1] === this.grid.rowList.last.data &&
            dir === 1
        ) {
            return true;
        }
        return false;
    }

    private scrollGrid(dir: 1 | -1): void {
        if (!this.isGridScrolledToEdge(dir)) {
            if (dir === 1) {
                this.grid.verticalScrollContainer.scrollNext();
            } else {
                this.grid.verticalScrollContainer.scrollPrev();
            }
        }
    }
}

```

We'll still be subscribing to the `dragMove` event of the specific row in the way we did in the previous example. Since `dragMove` is fired only when the cursor actually moves, we want to have a nice and simple way to auto-scroll the grid when the row is at one of the edges, but the user **does not** move the mouse. We'll an additional method which will setup an `interval`, auto-scrolling the grid every `500ms`.

We create and subscribe to the `interval` when the pointer reaches the grid's edge and we `unsubscribe` from that `interval` everytime the mouse moves or the row is dropped (regardless of cursor position).

```typescript
class MyGridScrollComponent {
    public ngAfterViewInit() {
        this.grid.rowDragStart
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.onDragStart.bind(this));
        this.grid.rowDragEnd
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.unsubInterval());
    }

    private onDragMove(event: IDragMoveEventArgs): void {
        this.unsubInterval();
        const dir = this.isPointOnGridEdge(event.pageY);
        if (!dir) {
            return;
        }
        this.scrollGrid(dir);
        if (!this.intervalSub) {
            this.interval$ = interval(500);
            this.intervalSub = this.interval$.subscribe(() => this.scrollGrid(dir));
        }
    }

    private unsubInterval(): void {
        if (this.intervalSub) {
            this.intervalSub.unsubscribe();
            this.intervalSub = null;
        }
    }
}
```

Following is the example of both scenarios described above - showing a drop indicator and scrolling the viewport when border's edge is reached.

<code-view style="height:830px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-drop-indicator" >
</code-view>
}

<div class="divider--half"></div>

## Limitations

Currently, there are no known limitations for the `rowDraggable` directive.

## API References

* [rowDraggable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDraggable)
* [rowDragStart]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragStart)
* [rowDragEnd]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDragEnd)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent Overview](@@igMainTopic.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
