@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Row Pinning | Lock Row | Ignite UI for Angular | Infragistics
_description: Start to use the Pinning feature of the Ignite UI for Angular Material table in order to lock rows with rich and easy to use API
_keywords: lock row, ignite ui for angular, infragistics 
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Row Pinning | Lock Row | Ignite UI for Angular | Infragistics
_description: Start to use the Pinning feature of the Ignite UI for Angular Material table in order to lock rows with rich and easy to use API
_keywords: lock row, ignite ui for angular, infragistics 
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Row Pinning | Lock Row | Ignite UI for Angular | Infragistics
_description: Start to use the Pinning feature of the Ignite UI for Angular Material table in order to lock rows with rich and easy to use API
_keywords: lock row, ignite ui for angular, infragistics 
---
}

### @@igComponent Row Pinning 
One or multiple rows can be pinned to the top or bottom of the Angular UI Grid. **Row Pinning** in Ignite UI for Angular allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the @@igComponent vertically. The Material UI Grid has a built-in row pinning UI, which is enabled by initializing an `igxActionStrip` component in the context of @@igComponent. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-row-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="treegrid-row-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

### Row Pinning UI

The built-in row pinning UI is enabled by adding an `igxActionStrip` component with the `GridPinningActions` component. The action strip can then be shown or hidden via its API and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.

@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid [data]="data" [width]="'800px'" [height]="'500px'" [rowSelectable]="false" (mouseleave)="actionstrip.hide()">
    <igx-column *ngFor="let c of columns" [sortable]="true" [field]="c.field" [header]="c.field"
                        [width]="c.width" [pinned]='c.pinned' [hidden]='c.hidden' [editable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <div (mouseover)="actionstrip.show(cell.row)">
                 <span>{{val}}</span>
            </div>
        </ng-template>
    </igx-column>

    <igx-action-strip #actionstrip>
        <igx-grid-pinning-actions [grid]="grid"></igx-grid-pinning-actions>
        <igx-grid-editing-actions [grid]="grid"></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #grid [data]="data" [width]="'800px'" [height]="'500px'" [rowSelectable]="false" (mouseleave)="actionstrip.hide()">
    <igx-column *ngFor="let c of columns" [sortable]="true" [field]="c.field" [header]="c.field"
                        [width]="c.width" [pinned]='c.pinned' [hidden]='c.hidden' [editable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <div (mouseover)="actionstrip.show(cell.row)">
                 <span>{{val}}</span>
            </div>
        </ng-template>
    </igx-column>

    <igx-action-strip #actionstrip>
        <igx-grid-pinning-actions [grid]="grid"></igx-grid-pinning-actions>
        <igx-grid-editing-actions [grid]="grid"></igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```   
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #grid [data]="data" [width]="'800px'" [height]="'500px'" [rowSelectable]="false" (mouseleave)="actionstrip.hide()">
    <igx-column *ngFor="let c of columns" [sortable]="true" [field]="c.field" [header]="c.field"
                        [width]="c.width" [pinned]='c.pinned' [hidden]='c.hidden' [editable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <div (mouseover)="actionstrip.show(cell.row)">
                 <span>{{val}}</span>
            </div>
        </ng-template>
    </igx-column>

    <igx-action-strip #actionstrip>
        <igx-grid-pinning-actions [grid]="grid"></igx-grid-pinning-actions>
        <igx-grid-editing-actions [grid]="grid"></igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```    
}


#### Row Pinning API

Row pinning is controlled through the `pinned` input of the [`igx-row`]({environment:angularApiUrl}/classes/igxrowcomponent.html). Pinned rows are rendered at the top of the @@igComponent by default and stay fixed through vertical scrolling of the unpinned rows in the @@igComponent body.

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.getRowByIndex(0).pinned = true;
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.getRowByIndex(0).pinned = true;
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.getRowByIndex(0).pinned = true;
```
}

You may also use the @@igComponent's [`pinRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinrow) or [`unpinRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#unpinrow) methods of the [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) to pin or unpin records by their ID:

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.pinRow("ALFKI");
this.grid.unpinRow("ALFKI");
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.pinRow("ALFKI");
this.treeGrid.unpinRow("ALFKI");
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.pinRow("ALFKI");
this.hierarchicalGrid.unpinRow("ALFKI");
```
}

Note that the row ID is the primary key value, defined by the [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

When pinned a row appears below the last pinned row until that moment. Changing the order of the pinned rows can be done by subscribing to the [`onRowPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowpinning) event and changing the [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipinroweventargs.html#insertatindex) property of the event arguments to the desired position index.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onRowPinning)="rowPinning($event)"></igx-grid>
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (onRowPinning)="rowPinning($event)"></igx-tree-grid>
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
       (onRowPinning)="rowPinning($event)" #hierarchicalGrid>
</igx-hierarchical-grid> 
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
}

### Pinning Position

You can change the row pinning position via the [`pinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>
```
}

```typescript
public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Bottom };
```


### Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

#### Custom Row Pinning UI via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.

@@if (igxName === 'IgxGrid') {

```html
<igx-grid  #grid [data]="data" [pinning]='pinningConfig' [height]="'800px'" [width]="'1000px'" [autoGenerate]="false"
        [primaryKey]="'ID'">
        <igx-column width='70px' [filterable]='false'>
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                    {{cell.row.pinned ? 'lock' : 'lock_open'}}
                </igx-icon>
            </ng-template>
        </igx-column>
        <igx-column [field]="'ID'" [header]="'ID'" width="100px" [groupable]='false'></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="100px" [groupable]='true'></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="100px" [minWidth]="'60px'"
            [maxWidth]="'230px'" [groupable]='true'></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="100px" [groupable]='true'></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" width="100px"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" width="100px" [groupable]='true'></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" width="100px"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="100px"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" width="100px"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" width="100px"></igx-column>
    </igx-grid>
```

}

@@if (igxName === 'IgxTreeGrid') {

```html
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column width='70px' [filterable]='false'>
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                    {{cell.row.pinned ? 'lock' : 'lock_open'}}
                </igx-icon>
            </ng-template>
        </igx-column>
        <igx-column [field]="'Name'" dataType="string" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```

}

@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
     <igx-column width='70px' [filterable]='false'>
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                    {{cell.row.pinned ? 'lock' : 'lock_open'}}
                </igx-icon>
            </ng-template>
    </igx-column>
    <igx-column field="CompanyName" header="Company Name" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="RequiredDate" header="Required Date" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShippedDate" header="Shipped Date" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShipVia" header="Ship Via" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
                <igx-column field="Quantity" width="150px"></igx-column>
                <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```typescript
public togglePinning(row: IgxGridRowComponent, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }
```

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-row-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="treegrid-row-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


@@if (igxName === 'IgxGrid') {

#### Custom Row Pinning UI via row drag

Let's say that you want to be able to directly drag and drop a row between the pinned and unpinned rows to change its pin state.
This can be achieved by enabling the row drag feature and pinning/unpinning the rows via the API on drop.

First, the grid should be marked as a drop area using the `igxDrop` directive and the row drag functionality should be enabled via the `rowDraggable` option. 

```html
<igx-grid  #grid [data]="data" [height]="'800px'" [width]="'1000px'" [autoGenerate]="true" [rowDraggable]="true"
        [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
</igx-grid>
```

Then the `dropped` event can be used to handle the reorder and pin/unpin logic.

```typescript
public onDropAllowed(args) {
        const event = args.originalEvent;
        let currRowPinnedIndex;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }

        const currRowID = this.getCurrentRowID(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });

        const currentRow = this.grid.rowList.toArray().find((r) => r.rowID === currRowID);
        if (currentRow.pinned) {
            currRowPinnedIndex = this.grid.pinnedRows.indexOf(this.grid.pinnedRows.find((r) => r.rowID === currRowID));
        }
        // remove the row that was dragged and place it onto its new location
        this.grid.deleteRow(args.dragData.rowID);
        this.data.splice(currRowIndex, 0, args.dragData.rowData);
        if (currentRow.pinned && !args.dragData.pinned) {
            this.grid.pinRow(args.dragData.rowID, currRowPinnedIndex);
        } else if (!currentRow.pinned && args.dragData.pinned) {
            this.grid.unpinRow(args.dragData.rowID);
        } else if (currentRow.pinned && args.dragData.pinned) {
            this.grid.unpinRow(args.dragData.rowID);
            this.grid.pinRow(args.dragData.rowID, currRowPinnedIndex);
        }
    }
```

This would allow reordering the rows and moving them between the pinned and unpinned row collections.

#### Demo

<div class="sample-container loading" style="height:510px">
    <iframe id="grid-row-pinning-drag-iframe" src='{environment:demosBaseUrl}/grid/grid-row-pinning-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-drag-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

}


### Row Pinning Limitations

* Only records that exist in the data source can be pinned.
* The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied. 
* Because of how pinned rows are stored internally so that they may appear both in the pinned and unpinned areas of the grid, row pinning is not supported when records in the grid are fetched from a remote endpoint on demand (remote virtualization).
* The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
* As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vise versa). Additionally, range selection (e.g. using Shift + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.

<div class="divider--half"></div>

### API References
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxRowComponent]({environment:angularApiUrl}/classes/igxrowcomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
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
