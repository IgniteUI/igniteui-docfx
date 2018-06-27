---
title: Column Moving - Native Angular | Ignite UI for Angular
_description: Column moving feature provides a means for reordering columns interactively via a standard drag/drop mouse gesture.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Native Angular Components, Angular Grid component, Angular Grid control, Angular High Performance Grid, Column Moving, Grid Column Moving, Angular Grid Column Moving, Angular column moving
---

### Grid Column Moving

The Grid component in Ignite UI for Angular provides **column moving** to allow columns reordering via standard drag/drop mouse or touch gestures.

#### Demo

<div class="sample-container loading" style="height:630px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Overview
**Column moving** feature is enabled on a per-column level, meaning that the **igx-grid** can have a mix of movable and immovable columns. This is done via the `movable` input of the `igx-column`.

```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```

#### Events
There are several events related to the column moving to provide a means of tapping into the columns' drag and drop operations. These are `onColumnMovingStart`, `onColumnMoving` and `onColumnMovingEnd`. 
You can subscribe to the `onColumnMovingEnd` event of the `igx-grid` to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the Category after the Change On Year(%) column.

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

### API Summary

#### Inputs
The following `IgxColumnComponent` input is available to configure the **column moving**:

| Name | Type | Description |
| :--- | :--- | :--- |
|`movable`|boolean|Sets column to be movable.|

<div class="divider--half"></div>

#### Outputs
The following `IgxGridComponent` outputs are available for **column moving**:

| Name | Type | Description |
| :--- | :--- | :--- |
|`onColumnMoving`| EventEmitter |Emitted throughout the column moving operation. Returns the source and target columns objects. This event is cancelable.|
|`onColumnMovingEnd`| EventEmitter |Emitted when column moving ends. Returns the source and target columns objects. This event is cancelable.|
|`onColumnMovingStart`| EventEmitter |Emitted when column moving starts. Returns the moved column object.|

<div class="divider--half"></div>

#### Methods
The following `IgxGridComponent` method is related to **column moving**:

| Name | Description |
| :--- | :--- |
|`moveColumn(column: IgxColumnComponent, dropTarget: IgxColumnComponent)` | Provides a way to move a column to the specified drop target via API. |

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Searching](grid_search.md)
* [Excel Exporter](exporter_excel.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
