---
title: Column Moving - Native Angular | Ignite UI for Angular
_description: Column moving feature provides a means for reordering columns interactively via a standard drag/drop mouse gesture.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control,Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Column Moving, Grid Column Moving, Angular Grid Column Moving, Angular Data Table Column Moving, Angular column moving
---

### Grid Column Moving

The Grid component in Ignite UI for Angular provides **column moving** to allow columns reordering via standard drag/drop mouse or touch gestures.

Column moving works as well with pinned columns. Dragging an unpinned column and dropping it inside the pinned area makes that column pinned and vice versa, dragging a pinned column and dropping it outside the pinned area makes that column unpinned.

#### Demo


<div class="sample-container loading" style="height:650px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>




#### Overview

**Column moving** feature is enabled on a per-column level, meaning that the [**igx-grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) can have a mix of movable and immovable columns. This is done via the [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable) input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html).



```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```




> [!NOTE]
> If the pinned area exceeds its maximum allowed width (80% of the total Grid width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

#### Events

There are several events related to the column moving to provide a means of tapping into the columns' drag and drop operations. These are [`onColumnMovingStart`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingstart), [`onColumnMoving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmoving) and [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend). 
You can subscribe to the [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) event of the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the Category after the Change On Year(%) column.


```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'" [movable]="true"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```




### API References
<div class="divider--half"></div>
 
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)
* [Searching](search.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)