---
title: Data Grid Component
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control
---

## Data Grid
**igx-grid** is a Material Design inspired component used for displaying and manipulating tabular data. The component architecture follows the Angular way of building using decoupled components and directives, where each one perform a specific task, for example filtering the data.

### Dependencies
The most basic grid that can be run depends on the **IgxGridComponent** only, however in order to use all features available, let's include the adittional dependencies too. Some of these are **DataContainer** (responsible for CRUD operations, data records access, data processing etb.), **IDataSate** (filtering, sorting, paging features), sorting and filtering strategies, etc:

```typescript
import { IgxColumnComponent } from 'igniteui-js-blocks/grid/column.component';
import {
   DataContainer,
   IDataState,
   IgxGridBindingBehavior,
   IgxGridColumnInitEvent,
   IgxGridComponent,
   IPagingState, PagingError,
   SortingDirection,
   IgxGridCell, IgxGridRow
} from 'igniteui-js-blocks/main';
```

### Usage
Now that we have all dependencies imported, let’s get started with a basic configuration of the IgxGrid that binds to local data:

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true">
</igx-grid>
```
The **id** property is a string value and is the unique identifier of the grid, while **data** binds the grid, in this case to local data.

The **autoGenerate** property tells the **igx-grid** to auto generate columns based on the data source fields. Otherwise, the developer needs to explicitly define the columns and the mapping to the data source fields.

#### Columns configuration

**IgxGridColumnComponent** is used to define grid's *columns* collection and to enable features per column like **fitering**, **sorting**, **paging**. Cell, header and footer templates are also available. 

Let's turn the autogenerating option off and define the columns collection in the markup:

```html
<igx-grid #grid1 [data]="localData" [autoGenerate]="false"
    (onColumnInit)="initColumns($event)" (onCellSelection)="selectCell($event)">
    <igx-column [field]="'ID'" [header]="'ID'" []>
        <ng-template igxHeader let-column="column">
            <p style="color: crimson">{{ column.field }}</p>
        </ng-template>
    </igx-column>
    <igx-column [field]="'Name'" [header]="'Name'" [sortable]="true" [filtering]="true">
        <ng-template igxCell let-col="column" let-ri="rowIndex" let-item="item">
            <span *ngIf="!showInput(ri, col.field)">{{ item }}</span>
            <input *ngIf="showInput(ri, col.field)" igxInput [value]="item" (blur)="editCell = null"    (change)="grid1.updateCell(ri, col.field, $event.target.value); editCell = null">
        </ng-template>
    </igx-column>
</igx-grid>
```
An alternative to define columns in the markup is defining the columns in code in the onColumnsInit event:

```typescript
  public initColumns(event: IgxGridColumnInitEvent) {
    const column: IgxColumnComponent = event.column;
    if (column.field === 'ProductName') {
      column.filtering = true;
      column.sortable = true;
      column.editable = true;
    }
  }
```
The above code will make the column sortable, filterable and editable and will bring the corresponding features UI (like inputs for editing and save dialogs) out of the box. 

### Data binding
Before going any further with the grid we want to change the grid to bind to remote data, like it will in a real life scenario. A good practice is to separate all data fetching related logic in a separate data service, so we are going to create data-service.ts

```typescript
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
    public records: Observable<any[]>;
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';
    private _records: BehaviorSubject<any[]>;
    private dataStore: any[];

    constructor(private http: Http) {
      this.dataStore = [];
      this._records = new BehaviorSubject([]);
      this.records = this._records.asObservable();
    }

    public getData() {
      return this.http.get(this.url)
        .map((response) => response.json())
        .subscribe((data) => {
          this.dataStore = data.value;
          this._records.next(this.dataStore);
        });
    }
}

```
After importing the data service in the component, we need to initialize it in the constructor and use it to retrieve the data in the ngOnInit event:

```typescript
constructor(
    private localService: DataService,
) {}
public ngOnInit(): void {
    this.data = this.dataService.records;
}
```

### CRUD operations though the API

Corresponding public methods are exposed for developers to perform CRUD operations:

```typescript
public addRow() {
    const record = {ProductID: this.grid1.data[this.grid1.data.length - 1].ProductID + 1, ProductName: 'Camembert Pierrot'};
    this.grid1.addRow(record);
}

public updateRecord(event) {
    this.grid1.updateCell(this.selectedCell.rowIndex, this.selectedCell.columnField, event);
    this.grid1.getCell(this.selectedCell.rowIndex, this.selectedCell.columnField);
}

public deleteRow(event) {
    this.selectedRow = Object.assign({}, this.grid1.getRow(this.selectedCell.rowIndex));
    this.grid1.deleteRow(this.selectedCell.rowIndex);
    this.selectedCell = {};
    this.snax.message = `Row with ID ${this.selectedRow.record.ID} was deleted`;
    this.snax.show();
}
```
These can be wired to user interactions, not necessarily related to the **igx-grid**, for example a button click:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

### Paging
**Paging** is initialized on the root igxGrid component, and is configurable via the `paging` and `perPage` options. Paging is a boolean that controls whether the feature is enabled and the perPage option controls the visible records per page. Let’s update our grid to provide paging:

```html
<igx-grid #grid1 [data]="data | async" [paging]="true" [perPage]="20" [autoGenerate]="false">
```

### Filtering
**Filtering** is enabled on column level, either using markup or code using the `filtering` input. In addition, `filteringCondition` and `filteringIgnoreCase` options are provided to customize the filtering behavior. `filteringCondition` is a function that does filtering on specific condition, and if not set the default value falls back to "contains". `filteringIgnoreCase` is a boolean that controls if capitalization is ignored. We have already enabled filtering on columns, now we can customize the behavior:

```html
<igx-column [field]="'ProductName'" [header]="'ProductName'" [sortable]="false" [filtering]="true" [filteringIgnoreCase]="false">
</igx-column>
```

### Sorting
**Sorting** is also enabled on column level, meaning that the **igx-grid** can have both sortable and non-sortable columns. This is done via the sortable option, that takes a Boolean value as demonstrated already in the above code examples. Additionally the developer may want to have the grid sorted on load, which is done by passing the sorting expression to the State property:

```typescript
  public ngOnInit(): void {
    this.data = this.localService.records;
    this.grid1.state = {
      paging: {
          index: 2,
          recordsPerPage: 10
      },
      sorting: {
          expressions: [
          {fieldName: 'UnitsInStock', dir: SortingDirection.Desc}
          ]
      }
    };
```
As we can see from the above example, the State property defines the state not only for sorting, but also for paging and filtering.

### Example
<div class="sample-container" style="height:600px">
<iframe src='https://embed.plnkr.co/uua2w0Dj7tm6zQurt3VQ/?show=preview&sidebar=false' width="100%" height="100%" seamless frameBorder="0"></inframe>
</div>

## API

### Inputs

Below is the list if all inputs that the developers may set to configure the grid look/behavior:
| Name | Type | Description |
| :--- |:--- | :--- |
| id  | string  | Unique identifier of the Grid |
| paging  | bool  | Enables paging feature |
| perPage  | number  | Visible items per page, default is 25 |
| state  | IDataState  | Define filtering, sorting and paging state  |
| autoGenerate  | boolean  | Autogenerate grid's columns, default value is *false* |


### Outputs
A list of the events emitted by the **igx-grid**:
| Name | Description |
| :--- | :--- |
| *Event emitters* | *Notify for a change* |
| onEditDone  | Used on update row to emit the updated row  |
| onFilterDone  | Used when filtering data to emit the column and filtering expression  |
| onSortingDone  | Used when sorting data to emit the column, direction and sorting expression  |
| onMovingDone  | Used when moving column to emit the drop event  |
| onCellSelection  | Used when focusing a cell to emit the cell  |
| onRowSelection  | Used when focusing a row to emit the row  |
| onPagingDone  | Used when paginating to emit paginator event  |
| onColumnInit  | Used when initializing a column to emit it  |
| onBeforeProcess  | Emit binding behavior  |


Defining handlers for these event emitters id done using declarative event binding:
```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false"
 (onColumnInit)="initColumns($event)" (onCellSelection)="selectCell($event)">
```
### Methods

Here is a list of all public methods exposed by the **igx-grid**:

| Signature | Description |
| :--- | :--- |
| getColumnByIndex(index: number)  | Get grid column by index  |
| getColumnByField(field: string)  | Get grid column by field name  |
| getCell(rowIndex: number, columnField: string) | Returns the cell at rowIndex/columnIndex.  |
| getRow(rowIndex: number) | Returns row  |
| focusCell | Focuses the grid cell at position row x column  |
| focusRow | Focuses the grid row at `index`.  |
| filterData | Filter data by search term and column  |
| addRow | Add record to the grid data container  |
| deleteRow | Remove record from the grid data container  |
| updateRow | Update record from teh grid data container  |
| updateCell | Update grid cell by index, column field and passed value  |
| sortColumn | Sort grid column  |
| paginate | Change the current page by passed number  |

#### Inputs

Inputs available on the **IgxGridColumnComponent** to define columns:
| Name | Type | Description |
| :--- |:--- | :--- |
| field  | string  | Column field name |
| header  | string  | Column header text |
| sortable  | boolean  | Set column to be sorted or not |
| editable  | boolean  | Set column values to be editable |
| filtering  | boolean  | Set column values to be filterable |
| hidden  | boolean  | Visibility of the column |
| movable  | boolean  | Column moving |
| width  | string  | Columns width |
| index  | string  | Column index |
| filteringCondition  | FilteringCondition  | Boolean, date, string or number conditions. Default is string *contains*  |
| filteringIgnoreCase  | boolean  | Ignore capitalization of words |
| dataType  | DataType  | String, number, Boolean or Date |
