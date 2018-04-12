---
title: Grid column deferred resizing
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, column resizing, deferred column reszing
---

### Grid Column Resizing

**Column resizing** is also enabled per-column level, meaning that the **igx-grid** can have a mix of resizable and non-resizable columns. This is done via the `resizable` input of the `igx-column`. The **igx-grid** supports deferred column resizing, meaning that columns are not immediately resized. A temporary resize indicator is shown while the drag operation is in effect and the new column size is only applied once the drag operation ends. Resizing a certain column affects the overall width of the grid meaning that the rest of the columns will preserve their current widths.

```html
    <igx-column [field]="Name" [width]="'200px'" [resizable]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="'200px'"></igx-column>
```

You can subscribe to the `onColumnResized` event of the `igx-grid` to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the `IgxColumnComponent` object, are exposed through the event arguments.

```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="'200px'" [resizable]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="'200px'"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

#### Restrict column resizing

You can also configure the minimum and maximum allowable column widths. This is done via the `minWidth` and `maxWidth` inputs of the `igx-column`. In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the bounderies defined by `minWidth` and `maxWidth`.

```html
    <igx-column [field]="Name" [width]="'150px'" [resizable]="true" [minWidth]="'60px'"
        [maxWidth]="'250px'"></igx-column>
```

> [!NOTE]
> Resizing a column below **48px** is not possible, even when `minWidth` is set to a value less than that.

#### Auto-size columns on double click

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be autosized in case `maxWidth` is set on that column and the new width exceeds that `maxWidth` value. In this case the column will be sized acccording to preset `maxWidth` value.

#### Pinned columns resizing

Pinned columns can also be resized. However resizing is limited so that the overall width of the pinned columns container cannot become larger than 80% of the overall grid width.
Again, if you try to autosize a pinned column and the new width will cause the pinned columns container to exceed those 80% of the overall grid with, autosizing will be discarded. We just want to make sure that the unpinned columns are always visible and availble to the user!

### API Summary

#### Inputs
The following inputs are available for **column resizing**:

| Name | Type | Description |
| :--- | :--- | :--- |
|`resizable`|boolean|Set column to be resizable|
|`minWidth`|string|Columns minimal width|
|`maxWidth`|string|Columns miximum width|

<div class="divider--half"></div>

#### Outputs
The following output is available for **column resizing**:

| Name | Description |
| :--- | :--- |
|`onColumnResized`|Emitted when a column is resized. Returns the column object, previous and new column width.|

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Sorting](grid_sorting.html)
* [Summaries](grid_summaries.html)
* [Column Pinning](grid_column_pinning.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
