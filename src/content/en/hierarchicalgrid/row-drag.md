---
title: Row Dragging in Angular Hierarchical Grid - Ignite UI for Angular
_description: Row dragging in Angular Hierarchical Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: angular drag component, material component, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/row-drag
---



# Row Dragging in Angular Hierarchical Grid

In Ignite UI for Angular Hierarchical Grid, **RowDrag** is initialized on the root `igx-hierarchical-grid` component and is configurable via the [`rowDraggable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDraggable) input. Enabling row dragging provides users with a row drag-handle with which they can initiate dragging of a row.

## Angular Hierarchical Grid Row Drag Example







<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-drag-base/" alt="Angular Hierarchical Grid Row Drag Example">
</code-view>

<div class="divider--half"></div>


## Configuration

In order to enable row-dragging for your `igx-hierarchical-grid`, all you need to do is set the grid's [`rowDraggable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDraggable) to **`true`**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging.

```html
<igx-hierarchical-grid [rowDraggable]="true">
 ...
</igx-hierarchical-grid>
```

Clicking on the drag-handle and _moving the cursor_ while holding down the button will cause the grid's [`rowDragStart`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragStart) event to fire. Releasing the click at any time will cause [`rowDragEnd`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragEnd) event to fire.

Below, you can find a walkthrough on how to configure an `igx-hierarchical-grid` to support row dragging and how to properly handle the drop event.


In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.



### Drop Areas

Enabling row-dragging was pretty easy, but now we have to configure how we'll handle row-_dropping_.
We can define where we want our rows to be dropped using the [`igxDrop` directive](../drag-drop.md).

First we need to import the `IgxDragDropModule` in our app module:

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular/directives';
// import { ..., IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package
...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```

Then, in our template, we define a drop-area using the directive's selector:



```html
<div class="drop-area" igxDrop (enter)="onEnterAllowed($event)" (leave)="onLeaveAllowed($event)"
(dropped)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```




You may enable animation when a row is dropped on a non-droppable area using the `animation` parameter of the [`rowDragEnd`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragEnd) event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.

You may enable animation like this:

```typescript
export class IgxHierarchicalGridRowDragComponent {

    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

### Drop Area Event Handlers

Once we've defined our drop-area in the template, we have to declare our handlers for the `igxDrop`'s [`enter`]({environment:angularApiUrl}/classes/igxdropdirective.html#enter), [`leave`]({environment:angularApiUrl}/classes/igxdropdirective.html#leave) and [`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) events in our component's `.ts` file.

First, let's take a look at our `enter` and `leave` handlers. In those methods, we just want to change the icon of the drag's _ghost_ so we can indicate to the user that they are above an area that allows them to drop the row:

```typescript
export class IgxHierarchicalGridRowDragComponent {
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


```typescript
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}
```




Next, we have to define what should happen when the user actually _drops_ the row inside of the drop-area.


```typescript
export class IgxHierarchicalGridRowDragComponent {

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
    }

}
```

Once the row is dropped, we just call the row's [`delete()`]({environment:angularApiUrl}/classes/IgxHierarchicalGridRowComponent.html#delete) method




> [!NOTE]
> When using row data from the event arguments (`args.dragData.data`) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.

### Templating the drag ghost

The drag ghost can be templated using the `IgxRowDragGhost` directive, applied to a `<ng-template>` inside of the `igx-hierarchical-grid`'s body:

```html
<igx-hierarchical-grid>
...
   <ng-template igxRowDragGhost>
        <div>
            <igx-icon fontSet="material">arrow_right_alt</igx-icon>
        </div>
    </ng-template>
...
</igx-hierarchical-grid>
```

The result of the configuration can be seem below in a `igx-hierarchical-grid` with row dragging and multiple selection enabled. The demo shows the count of the currently dragged rows:

#### Example Demo






The drag ghost can be templated on every grid level, making it possible to have multiple ghost templates or to only provide a template for a single row island.

```html
<igx-hierarchical-grid>
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
</igx-hierarchical-grid>
```

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-row-drag/" >
</code-view>

<div class="divider--half"></div>


### Templating the drag icon

The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (`drag_indicator`) to `drag_handle`.
To do so, we can use the `igxDragIndicatorIcon` to pass a template inside of the `igx-hierarchical-grid`'s body:

```html
<igx-hierarchical-grid>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</igx-hierarchical-grid>
```

Once we've set the new icon template, we also need to adjust the `DEFAULT` icon in our `DragIcon enum`, so it's properly change by the `changeIcon` method:

```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```



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



#### Example Demo







<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag/" >
</code-view>


<div class="divider--half"></div>


## Application Demo



### Row Reordering Demo

With the help of the grid's row drag events and the `igxDrop` directive, you can create a grid that allows you to reorder rows by dragging them.

Since all of the actions will be happening _inside_ of the grid's body, that's where you have to attach the `igxDrop` directive:





```html
<igx-hierarchical-grid #grid [data]="localData" [primaryKey]="'id'"
    [rowDraggable]="true" (rowDragStart)="rowDragStart($event)" igxDrop (dropped)="rowDrop($event)">
    ...
</igx-hierarchical-grid>
```




> [!NOTE]
> Make sure that there is a `primaryKey` specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered

Once `rowDraggable` is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:


- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which _other_ row was the dragged row dropped?
- Once you've found the _target_ row, swap the records' places in the `data` array
- Was the row initially selected? If so, mark it as selected.


Below, you can see this implemented in the component's `.ts` file:





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



With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.



Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder/" >
</code-view>


<div class="divider--half"></div>



<div class="divider--half"></div>

## Limitations

Currently, there are no known limitations for the `rowDraggable` directive.

## API References

- [rowDraggable]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDraggable)
- [rowDragStart]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragStart)
- [rowDragEnd]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragEnd)
- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Hierarchical Grid Overview](hierarchical-grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
