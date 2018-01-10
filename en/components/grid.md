---
title: Data Grid Component
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control
---

## Data Grid

<p class="highlight">Display and manipulate tabular data with the Ignite UI for Angular Data Grid. Quickly bind your data with very little coding or configuration. Features include filtering, sorting, paging, templates, movable columns, and the ability to edit and update data. User actions are easy to understand and can be controlled programmatically.</p>
<div class="divider"></div>

### Grid Demo

<div class="sample-container" style="height:780px">
    <iframe src='https://{environment:host}/angular-demos/grid' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Dependencies

The grid is exported as as an `NgModule`, thus all you need to do in your application is to import the _IgxGridModule_
inside your `AppModule`:

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-js-blocks/main';

@NgModule({
    imports: [
        ...
        IgxGridModule,
        ...
    ]
})
export class AppModule {}
```

Each of the components, directives and helper classes in the _IgxGridModule_ can be imported either through the _grid.component_ or through
the main bundle in _igniteui-js-blocks_. While you don't need to import all of them to instantiate and use the grid, you usually will import them
(or your editor will auto-import them for you) when declaring types that are part of the grid API.

```typescript
import { IgxGridComponent } from 'igniteui-js-blocks/grid/grid.component';
...

@ViewChild('myGrid', { read: IgxGridComponent }) public grid: IgxGridComponent;
```

<div class="divider--half"></div>

### Usage

Now that we have the grid module imported, let’s get started with a basic configuration of the **igx-grid** that binds to local data:

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

The **id** property is a string value and is the unique identifier of the grid, while **data** binds the grid, in this case to local data.

The **autoGenerate** property tells the **igx-grid** to autogenerate columns based on the data source fields. Otherwise, the developer needs to explicitly define the columns and the mapping to the data source fields.

<div class="divider--half"></div>

### Columns configuration

**IgxGridColumnComponent** is used to define the grid's _columns_ collection and to enable features per column like **filtering**, **sorting**, and **paging**. Cell, header, and footer templates are also available.

Let's turn the **autoGenerate** property off and define the columns collection in the markup:

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onCellSelection)="selectCell($event)">
    <igx-column field="Name" [sortable]="true" header=" " [filtering]="true"></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number"></igx-column>
    <igx-column field="TrackProgress" header="Track progress">
        <ng-template igxCell let-col="column" let-ri="rowIndex" let-item="item">
            <igx-linear-bar [striped]="false" [value]="item" [max]="100">
            </igx-linear-bar>
        </ng-template>
    </igx-column>
</igx-grid>
```

Column properties can also be set in code in the **initColumns** event:

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

The code above will make the **ProductName** column sortable, filterable, and editable and will instantiate the corresponding features UI (like inputs for editing, save dialogs, etc.).

<div class="divider--half"></div>

### Data binding

Before going any further with the grid we want to change the grid to bind to remote data service, which is a common scenario in real production applications. A good practice is to separate all data fetching related logic in a separate data service, so we are going to create a service which
will handle the fetching of data from the server.

Let's implement our service in a separate file

```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```

We're importing the `Injectable` decorator which is an [essential ingredient](https://angular.io/guide/dependency-injection) in every Angular service definition. The `HttpClient` will provide us with the functionality to communicate with
backend services. It returns an `Observable` of some result on which we will subscribe in our grid component.

**Note**: Before Angular 5 the `HttpClient` was located in `@angular/http` and was named `Http`.

Since we will receive a JSON response containing an array of records, we may as well help ourselves by specifing what kind
of data we're expecting to be returned in the observable by defining an interface with the correct shape. Type checking
is always recommended and can save you some headaches down the road.

```typescript
// northwind.service.ts

export interface NorthwindRecord {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    CategoryName: string;
}
```

The service itself is pretty simple consisting of one method: `fetchData` that will return an `Observable<NorthwindRecord[]>`.
In cases when the request fails for any reason (server unavailable, network error, etc), the `HttpClient` will return an
error. We'll leverage the `catchError` operator which intercepts an _Observable_ that failed and passes the error to an error handler.
Our error handler will log the error and return a safe value.

```typescript
// northwind.service.ts

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```

Make sure to import both the `HttpClientModule` and our service in the application module and register the service as a provider.

```typescript
// app.module.ts

import { HttpClientModule } from '@angular/common/http';
...
import { NorthwindService } from './northwind.service';

@NgModule({
    imports: [
        ...
        HttpClientModule
        ...
    ],
    providers: [
        NorthwindService
    ]
})
export class AppModule {}
```

After implementing the service we will inject it in our components constructor and use it to retrieve the data.
The `ngOnInit` lifecycle hook is a good place to dispatch the initial request.

**Note**: In the code below, you may wonder why are we setting the _records_ property to an empty array before subscribing to the service.
The Http request is asynchronous, and until it completes, the _records_ property will be _undefined_ which will result in an error
when the grid tries to bind to it. You should either initialize it with a default value or use a `BehaviorSubject`.

```typescript
// my.component.ts

@Component({
    ...
})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];


    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```

and in the template of the component:

```html
<igx-grid [data]="records">
    <igx-column field="ProductId"></igx-column>
    <!-- rest of the column definitions -->
    ...
</igx-grid>
```

**Note**: The grid `autoGenerate` property is best to be avoided when binding to remote data for now. It assumes that the data is available in order
to inspect it and generate the appropriate columns. This is usually not the case until the remote service responds, and
the grid will throw an error. Making `autoGenerate` available, when binding to remote service, is on our roadmap for future versions.

<div class="divider--half"></div>

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

These can be wired to user interactions, not necessarily related to the **igx-grid**; for example, a button click:

```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### Paging

**Paging** is initialized on the root **igx-grid** component, and is configurable via the `paging` and `perPage` inputs. Paging is a Boolean property that controls whether the feature is enabled and the perPage property controls the visible records per page. Let’s update our grid to enable paging:

```html
<igx-grid #grid1 [data]="data | async" [paging]="true" [perPage]="20" [autoGenerate]="false"></igx-grid>
```

<div class="divider--half"></div>

### Filtering

**Filtering** is enabled on a per-column level, either using markup or code using the `filtering` input. In addition, `filteringCondition` and `filteringIgnoreCase` properties are provided to customize the filtering behavior. `filteringCondition` is a function that performs filtering based on a specific condition, and if not set the value defaults to "contains". `filteringIgnoreCase` is a boolean property that controls whether capitalization is ignored. Now that we have filtering enabled for the columns, we can customize the behavior:

```html
<igx-column [field]="'ProductName'" [header]="'ProductName'" [sortable]="false" [filtering]="true" [filteringIgnoreCase]="false">
</igx-column>
```

<div class="divider--half"></div>

### Sorting

**Sorting** is also enabled on a per-column level, meaning that the **igx-grid** can have a mix of sortable and non-sortable columns. This is done via the sortable input, which takes a Boolean value as demonstrated already in the above code examples. In addition, the developer may want to have the grid sorted on load, which is done by passing the sorting expression to the `State` property:

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
                {
                    fieldName: 'TrackProgress',
                    dir: SortingDirection.Desc
                }
            ],
            strategy: new StableSortingStrategy()
        }
    };
}
```

As we can see from the above example, the `State` property defines the state not only for sorting, but also for paging and filtering.

<div class="divider"></div>

## API

### Inputs

Below is the list of all inputs that the developers may set to configure the grid look/behavior:
| Name | Type | Description |
| :--- |:--- | :--- |
| id | string | Unique identifier of the Grid |
| `paging` | bool | Enables paging feature |
| `perPage` | number | Visible items per page, default is 25 |
| `state` | IDataState | Define filtering, sorting and paging state |
| `autoGenerate` | boolean | Autogenerate grid's columns, default value is _false_ |

<div class="divider--half"></div>

### Outputs

A list of the events emitted by the **igx-grid**:

| Name              | Description                                                                 |
| :---------------- | :-------------------------------------------------------------------------- |
| _Event emitters_  | _Notify for a change_                                                       |
| `onEditDone`      | Used on update row to emit the updated row                                  |
| `onFilterDone`    | Used when filtering data to emit the column and filtering expression        |
| `onSortingDone`   | Used when sorting data to emit the column, direction and sorting expression |
| `onMovingDone`    | Used when moving column to emit the drop event                              |
| `onCellSelection` | Used when focusing a cell to emit the cell                                  |
| `onRowSelection`  | Used when focusing a row to emit the row                                    |
| `onPagingDone`    | Used when paginating to emit paginator event                                |
| `onColumnInit`    | Used when initializing a column to emit it                                  |
| `onBeforeProcess` | Emit binding behavior                                                       |

<div class="divider"></div>

Defining handlers for these event emitters is done using declarative event binding:

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false"
 (onColumnInit)="initColumns($event)" (onCellSelection)="selectCell($event)"></igx-grid>
```

<div class="divider--half"></div>

### Methods

Here is a list of all public methods exposed by the **igx-grid**:

| Signature                                        | Description                                              |
| :----------------------------------------------- | :------------------------------------------------------- |
| `getColumnByIndex(index: number)`                | Get grid column by index                                 |
| `getColumnByField(field: string)`                | Get grid column by field name                            |
| `getCell(rowIndex: number, columnField: string)` | Returns the cell at rowIndex/columnIndex.                |
| `getRow(rowIndex: number)`                       | Returns row                                              |
| `focusCell`                                      | Focuses the grid cell at position row x column           |
| `focusRow`                                       | Focuses the grid row at `index`.                         |
| `filterData`                                     | Filter data by search term and column                    |
| `addRow`                                         | Add record to the grid data container                    |
| `deleteRow`                                      | Remove record from the grid data container               |
| `updateRow`                                      | Update record from the grid data container               |
| `updateCell`                                     | Update grid cell by index, column field and passed value |
| `sortColumn`                                     | Sort grid column                                         |
| `paginate`                                       | Change the current page by passed number                 |

<div class="divider--half"></div>

#### Inputs

Inputs available on the **IgxGridColumnComponent** to define columns:
| Name | Type | Description |
| :--- |:--- | :--- |
| `field` | string | Column field name |
| `header` | string | Column header text |
| `sortable` | boolean | Set column to be sorted or not |
| `editable` | boolean | Set column values to be editable |
| `filtering` | boolean | Set column values to be filterable |
| `hidden` | boolean | Visibility of the column |
| `movable` | boolean | Column moving |
| `width` | string | Columns width |
| `index` | string | Column index |
| `filteringCondition` | FilteringCondition | Boolean, date, string or number conditions. Default is string _contains_ |
| `filteringIgnoreCase` | boolean | Ignore capitalization of words |
| `dataType` | DataType | String, number, Boolean or Date |

<div class="divider--half"></div>
