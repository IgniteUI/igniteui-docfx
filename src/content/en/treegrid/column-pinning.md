---
title: Angular Tree Grid Column Pinning - Ignite UI for Angular
_description: Want to use the Pinning feature of the Ignite UI for Angular when you develop your next app? Easily lock column or change column order with rich API.
_keywords: lock column, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-pinning
---




# Angular Tree Grid Column Pinning

A column or multiple columns can be pinned to the left or right side of the Angular UI Grid. **Column Pinning** in Ignite UI for Angular allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the Tree Grid. The Material UI Grid has a built-in column pinning UI, which can be used through the Tree Grid's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.

## Angular Tree Grid Column Pinning  Example




<code-view style="height:630px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-pinning/" alt="Angular Tree Grid Column Pinning  Example">
</code-view>




## Column Pinning API

Column pinning is controlled through the `pinned` input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html). Pinned columns are rendered on the left side of the Tree Grid by default and stay fixed through horizontal scrolling of the unpinned columns in the Tree Grid body.




```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```





You may also use the Tree Grid's [`pinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pinColumn) or [`unpinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#unpinColumn) methods of the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) to pin or unpin columns by their field name:




```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```




Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the column is already in the desired state.

A column is pinned to the right of the rightmost pinned column. Changing the order of the pinned columns can be done by subscribing to the [`columnPin`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnPin) event and changing the [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertAtIndex) property of the event arguments to the desired position index.




```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-tree-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```




## Pinning Position

You can change the column pinning position via the [`pinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.





```html
<igx-tree-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```





```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```

### Demo







<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-sample-right-pinning/" >
</code-view>



### Column Pinning on Both Sides
Additionally, you can specify each column pinning location separately, allowing you to pin columns to both sides of the grid for greater convenience and easier optimization of data sets. Please refer to the demo below for further reference. In order to pin a column, please either select a column by clicking on a header and use the pin buttons added to the toolbar, or simply drag a column to another pinned one.







<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-both-sides-pinning/" >
</code-view>



## Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.
This can be done by creating a header template for the column with a custom icon.





```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```





On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```

### Demo




<code-view style="height:630px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning/" >
</code-view>





## Pinning Limitations

- Setting column widths in percentage (%) explicitly makes the Tree Grid body and header content to be misaligned when there are pinned columns. For column pinning to function correctly the column widths should be in pixels (px) or auto-assigned by the Tree Grid.

<div class="divider--half"></div>



## API References

- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
