---
title: Column Resizing Component - Native Angular | Ignite UI for Angular
_description: With deferred column resizing, see a temporary resize indicator while the drag operation is in effect with using the Ignite UI for Angular Column Resizing Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Native Angular Components, Angular Grid component, Angular Grid control, Angular High Performance Grid, Column Resizing, Deferred Column Reszing, Grid Column Resizing, Angular Grid Column Resizing, Angular column
---

## Grid Column Resizing

With deferred column resizing, the user will see a temporary resize indicator while the drag operation is in effect. The new column size is only put into its place once the drag operation has ended.

### Grid Column Resizing Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

**Column resizing** is also enabled per-column level, meaning that the **igx-grid** can have a mix of resizable and non-resizable columns. This is done via the `resizable` input of the `igx-column`.

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
<igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
```

You can subscribe to the `onColumnResized` event of the `igx-grid` to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the `IgxColumnComponent` object, are exposed through the event arguments.

```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
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
<igx-column [field]="'ContactName'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

> [!NOTE]
> Resizing a column below **88px** is not possible, even when `minWidth` is set to a value less than that.

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
* [Selection](grid_selection.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
