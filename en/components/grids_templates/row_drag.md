@@if (igxName === 'IgxGrid') {
---
title: Grid Row Drag
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Row Drag, Row Dragging, Data Grid Row Drag, Data Table Row Drag
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Row Drag
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich tree grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Row Drag, Row Dragging, Tree Grid Row Drag, Tree Table Row Drag
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid Row Drag
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich hierarchical grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Row Drag, Row Dragging, Hierarchical Grid Row Drag, Hierarchical Table Row Drag
---
}

### @@igComponent Row Drag

In Ignite UI for Angular @@igComponent, **RowDrag** is initialized on the root `@@igSelector` component and is configurable via the [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable) input. Enabling row dragging provides users with a row drag-handle with which they can initiate dragging of a row.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-base-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-drag-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-drag-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-drag-base-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-drag-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-drag-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-row-drag-base-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-drag-base' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-row-drag-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-row-drag-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>
}

### Configuration

In order to enable row-dragging for your `@@igSelector`, all you need to do is set the grid's [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable) to **`true`**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging.

```html
<@@igSelector [rowDraggable]="true">
 ...
</@@igSelector>
```
Clicking on the drag-handle and *moving the cursor* while holding down the button will cause the grid's [`onRowDragStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart) event to fire. Releasing the click at any time will cause [`onRowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend) event to fire.

Below, you can find a walkthrough on how to configure an `@@igSelector` to support row dragging and how to properly handle the drop event.

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
In this example, we'll handle dragging a row from a grid to a designated area and, when dropping it, removing it from the grid.
}
@@if (igxName === 'IgxGrid') {
In this example, we'll handle dragging a row from one grid to another, removing it from the first data source and adding it to the second.
}

#### Drop Areas

Enabling row-dragging was pretty easy, but now we have to configure how we'll handle row-*dropping*.
We can define where we want our rows to be dropped using the [`igxDrop` directive](../drag_drop.md).

First we need to import the `IgxDragDropModule` in our app module:

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular';
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

You may enable animation when a row is dropped on a non-droppable area using the `animation` parameter of the [`onRowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend) event. If set to true, the dragged row will animate back to its' original position when dropped over a non-droppable area.

You may enable animation like this:

```typescript
export class @@igxNameRowDragComponent {
    ...
    public onRowDragEnd(args) {
        args.animation = true;
    }

}
```

#### Drop Area Event Handlers

Once we've defined our drop-area in the template, we have to declare our handlers for the `igxDrop`'s [`enter`]({environment:angularApiUrl}/classes/igxdropdirective.html#enter), [`leave`]({environment:angularApiUrl}/classes/igxdropdirective.html#leave) and [`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) events in our component's `.ts` file.

First, let's take a look at our `enter` and `leave` handlers. In those methods, we just want to change the icon of the drag's *ghost* so we can indicate to the user that they are above an area that allows them to drop the row:

```typescript
export class @@igxNameRowDragComponent {
    ...
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector(".igx-grid__drag-indicator  > igx-icon");
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
    DEFAULT = "drag_indicator",
    ALLOW = "remove"
}
```
}
@@if (igxName === 'IgxGrid') {
```typescript
enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "add"
}
```
}

Next, we have to define what should happen when the user actually *drops* the row inside of the drop-area.
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
export class @@igxNameRowDragComponent {
    ...
    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: @@igxNameGridRowComponent = args.dragData;
        draggedRow.delete();
    }

}
```

Once the row is dropped, we just call the row's [`delete()`]({environment:angularApiUrl}/classes/@@igxNameRowComponent.html#delete) method
}

@@if (igxName === 'IgxGrid') {
```typescript
export class @@igxNameRowDragComponent {
    @ViewChild("sourceGrid", { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild("targetGrid", { read: IgxGridComponent }) public targetGrid: IgxGridComponent;
    ... 
    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.rowData);
        this.sourceGrid.deleteRow(args.dragData.rowID);
    }
    ...
}
```

We define a reference to each of our grids via the `ViewChild` decorator and the handle the drop as follows:
- add a row to the `targetGrid` that contains the data of the row being dropped
- remove the dragged row from the `sourceGrid`
}

> [!NOTE]
> When using row data from the event arguments (`args.dragData.rowData`) or any other row property, note that the entire row is passed in the arguments as a reference, which means that you must clone the data you need, if you want to distinguish it from the one in the source grid.

#### Templating the drag ghost
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

##### Example Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-multiple-row-drag" data-src='{environment:demosBaseUrl}/grid/grid-multiple-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-multiple-row-drag" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-multi-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
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
<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchical-grid-multiple-row-drag" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-multiple-row-drag" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>
}

#### Templating the drag icon
The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dragindicatoricontemplate). In the example we're building, let's change the icon from the default one (`drag_indicator`) to `drag_handle`.
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
#### Styling the drop area
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

##### Example Demo
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-to-grid-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-row-drag-to-grid' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

The following sample demonstrates how to configure row reordering in the grid. Holding onto the drag icon will allow you to move a row anywhere in the grid.
<div class="sample-container loading" style="height:830px">
    <iframe id="grid-row-reorder" data-src='{environment:demosBaseUrl}/grid/grid-row-reorder' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-reorder" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-reorder" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-drag-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

The following sample demonstrates how to configure row reordering in the tree grid. Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-reorder-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-reordering' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div> 
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-drag-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

The following sample demonstrates how to configure row reordering in the hierarchical grid.
Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-reorder-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div> 
}

@@if (igxName === 'IgxGrid') {
### Application Demo
The following demo demonstrates how to use row drag event information to change both states of a custom component, where the row is dropped, and the source grid itself.
Try to drag moons from the grid and drop them to their corresponding planets. Row drag ghost background is dynamically changed, depending on the hovered planet. If you succeed then the row in the grid will be selected and dragging will be disabled for it. Clicking planets will give you useful information.

<div class="sample-container loading" style="height:560px">
    <iframe id="grid-row-drag-1" data-src='{environment:demosBaseUrl}/grid/grid-row-drag' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-1" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-drag-1" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

> [!NOTE] 
> The classes applied to the row drag ghost, used in the demo above, are using ::ng-deep modifier, because row drag is an internal grid feature and cannot be accessed on application level, due to the CSS encapsulation.

<div class="divider--half"></div>
}

### Limitations

Currently, there are no known limitations for the `rowDraggable` directive.


### API References

* [rowDraggable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable)
* [onRowDragStart]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart)
* [onRowDragEnd]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent Overview](@@igMainTopic.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)