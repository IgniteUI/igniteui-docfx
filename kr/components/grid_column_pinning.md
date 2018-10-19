---
title: Column Pinning Component – Native Angular | Ignite UI for Angular
_description: Pinning with the Ignite UI for Angular Column Pinning component allows the users to always see the pinned columns while horizontally scrolling. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, column pinning, pinning, pin
_language: kr
---

### Grid Column Pinning
A column or multiple columns can be pinned to the left-hand side of the grid. **Column Pinning** in Ignite UI for Angular allows the users to always see the pinned columns while horizontally scrolling. 

#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Column Pinning API

Each column can be pinned, as long as the pinned area does not become wider than the grid itself. Column pinning is controlled through the pinned input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html). Pinned columns are always rendered on the left side of the grid and stay fixed through horizontal scrolling of the unpinned columns in the grid body.

```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
</igx-grid>
```

You may also use the grid's [`pinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pincolumn) or [`unpinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#unpincolumn) methods of the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) to pin or unpin columns by their field name:

```typescript
this.grid.pinColumn("AthleteNumber");
this.grid.unpinColumn("Name");
```

Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state. [`pinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pincolumn) also fails when the result would mean that the pinned area becomes larger than or the same size as the grid itself. Consider the following example:

```html
<igx-grid #grid1 [data]="data | async" [width]="300px" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="200px"></igx-column>
</igx-grid>
```

```typescript
var succeed = this.grid.pinColumn("AthleteNumber"); // pinning fails and succeed will be false
```

If pinning the `AthleteNumber` column is allowed the pinned area would exceed the grid's width.

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`onColumnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnpinning) event and changing the [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) property of the event arguments to the desired position index.

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```

### Pinning Limitations

*   Setting column widths in percentage (%) explicitly makes the grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the grid.

<div class="divider--half"></div>

### Troubleshooting

This section will provide you with hints what to do if you are having trouble with the Column Pinning feature.

#### Warnings

* `igxGrid - The pinned area exceeds maximum pinned width. The following columns were unpinned to prevent further issues: ... .` - This warning is thrown when the user has defined too many pinned columns initially. The combined width of the initially pinned columns should not exceed 80% of the grid width. Otherwise the grid by default takes the first columns (in order of their definition) that don't exceed the limit and the rest are unpinned (the columns listed in the warning). You can execute your own logic in order to determine if you want to unpin some columns manually on initialization using the [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) event before the grid initializes the pinning. It is triggered for each column.


<div class="divider--half"></div>

### API
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Moving](grid_column_moving.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
