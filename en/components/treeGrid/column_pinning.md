---
title: Column Pinning Component – Native Angular | Ignite UI for Angular
_description: Pinning with the Ignite UI for Angular Column Pinning component allows the users to always see the pinned columns while horizontally scrolling. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control,Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, column pinning, Angular Data Table column pinning, pinning, pin
---

### Tree Grid Column Pinning
A column or multiple columns can be pinned to the left-hand side of the Tree Grid. **Column Pinning** in Ignite UI for Angular allows the users to always see the pinned columns while horizontally scrolling. 

#### Demo



<div class="sample-container loading" style="height:670px">
    <iframe id="treegrid-sample-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>



#### Column Pinning API

Each column can be pinned, as long as the pinned area does not become wider than the Tree Grid itself. Column pinning is controlled through the pinned input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html). Pinned columns are always rendered on the left side of the Tree Grid and stay fixed through horizontal scrolling of the unpinned columns in the Tree Grid body.




```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```



You may also use the Tree Grid's [`pinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pincolumn) or [`unpinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#unpincolumn) methods of the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) to pin or unpin columns by their field name:



```typescript
this.treeGrid.pinColumn("Title");
this.treeGrid.unpinColumn("Name");
```



Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state. [`pinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pincolumn) also fails when the result would mean that the pinned area becomes larger than or the same size as the Tree Grid itself. Consider the following example:



```html
<igx-tree-grid #treeGrid [data]="data" [width]="300px" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Title" [width]="200px"></igx-column>
</igx-tree-grid>
```

```typescript
var succeed = this.treeGrid.pinColumn("Title"); // pinning fails and succeed will be false
```

If pinning the `Title` column is allowed the pinned area would exceed the Tree Grid's width.



A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`onColumnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#oncolumnpinning) event and changing the [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) property of the event arguments to the desired position index.



```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-tree-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```



### Pinning Limitations

*   Setting column widths in percentage (%) explicitly makes the Tree Grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the Tree Grid.

<div class="divider--half"></div>

### Troubleshooting

This section will provide you with hints what to do if you are having trouble with the Column Pinning feature.

#### Warnings

* `IgxTreeGrid - The pinned area exceeds maximum pinned width. The following columns were unpinned to prevent further issues: ... .` - This warning is thrown when the user has defined too many pinned columns initially. The combined width of the initially pinned columns should not exceed 80% of the Tree Grid width. Otherwise the Tree Grid by default takes the first columns (in order of their definition) that don't exceed the limit and the rest are unpinned (the columns listed in the warning). You can execute your own logic in order to determine if you want to unpin some columns manually on initialization using the [`onColumnInit`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#oncolumninit) event before the Tree Grid initializes the pinning. It is triggered for each column.

<div class="divider--half"></div>

### API References
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [Tree Grid overview](tree_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)