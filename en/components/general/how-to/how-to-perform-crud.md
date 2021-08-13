---
title: How to enable CRUD operations in Angular.
_description: What is Angular Crud? How to Build a CRUD service in Angular and use it to perform CRUD operations with the Grid data? Learn more here.
_keywords: angular, crud, crud operations, infragistics, crud tutorial
---

# What is CRUD

CRUD is an acronym in computer programming that stands for the CREATE, READ, UPDATE, DELETE operations that can be performed against a data collection. In computer world, talking about CRUD applications, is a main difference compared to applications that provide read-only data to users.
# Angular CRUD

While talking about Angular CRUD, or CRUD operations in Angular, it is important to note that the data storage is on a remote server. The Angular application can not directly access the data layer, so it needs to communicate with it through a Web API that provides endpoints for the CRUD operations, i.e.:
 
| API | Operation | HTTP methods |
|-----|-----------| ----------- |
| "api/entities" | READ all entities | GET |
| "api/entities/id" | READ the entity with corresponding id | GET |
| "api/entities/update" | UPDATE the entity with corresponding id  | PUT / PATCH |
| "api/entities/create" | CREATE a new entity | POST |
| "api/entities/delete" | DELETE the entity with corresponding id | DELETE |

Notice that the CRUD operations also map conceptually to the HTTP methods that are used to communicate with APIs over HTTP.

The entire code that will work with the above mentioned API can be abstracted in an Angular service. Such a service is injectable and can be reused by any component that needs to perform CRUD operations against the same database. A good practice is to write such service as generic as possible, thus making it suitable to be reused in many components, and against different servers as well.

A generic example of such service will look like this:


```typescript
@Injectable()
export class CRUDService {
  /** See https://angular.io/api/common/http/HttpClient */
  constructor(private http: HttpClient) { }

  /** Gets all entities from server */
  public getData() {
      return this.http.get(`${this.serverURL}\api\entities`);
  }

  /** Gets entity with corrresponding id */
  public getRecord(id) {
      return this.http.get(`${this.serverURL}\api\entities\${id}`);
  }

  /** Creates entity from body */
  public add(entity) {
      return this.http.post(`${this.serverURL}\api\entities\create`, entity);
  }

  /* Updates entity with data from body */
  public update(entity) {
      return this.http.put(`${this.serverURL}\api\entities\update`, entity);
  }

  /** Deletes the corresponding entity */
  public delete(entity) {
      return this.http.delete(`${this.serverURL}\api\entities\delete`, entity);
  }
}
```

What the above service is missing is configuration for filtering/sorting/paging, etc. Depending on the exact API implementation of the endpoints, requests to the server may need optional parameters to handle filtering/sorting/paging for you. See our [Remote Data Operations](../../grid/remote-data-operations.md) for demos accompanied with code examples.

For more examples and guidance, refer to the [HTTP Services](https://angular.io/tutorial/toh-pt6) tutorial in the official Angular documentation.


# CRUD Operations with Grid 

Enabling CRUD in the Grid means providing UI for the users to perform these CRUD operations from within the grid. This is quite easy - the Grid provides [**Cell Editing**](../../grid/cell-editing.md), [**Row Editing**](../../grid/row-editing.md), [**Row Adding**](../../grid/row-adding.md) and **Row Deleting** UI out of the box, and powerful API to do this on your own. Next, we want to take the result of each editing action and communicate it to the corresponding method in our CRUD service, thus preserving all changes to the original database. By completing this, we may say the grid is CRUD enabled.


This section is written as HOW-TO tutorial on enabling CRUD operations in Grid, accompanied by code snippets that you can take and copy paste in your code.



## How to
Let's first enable the rowEditing behavior, bring the UI we need for the editing actions, benefiting from the `IgxActionStrip` (see more about the [`IgxActionStrip`](../../action-strip.md)), and attach event handlers:

```html
<igx-grid 
    primaryKey="ID"
    [rowEditable]="true"
    (rowAdded)="rowAdded($event)"
    (rowDeleted)="rowDeleted($event)"
    (rowEditDone)="rowEditDone($event)">

  <igx-action-strip #actionstrip>
      <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
  </igx-action-strip>
```

In the Angular component, inject the data service using DI. Now we are ready to use the service to do full CRUD operations against our data layer:

```typescript
constructor(private crudService: CRUDService) { }

public rowDeleted(event: IRowDataEventArgs) {
    this._crudService.delete(event.data).subscribe((rec) => {
        // notification or do any adittional handling
        this.snackbar.open(`Row with ID of ${rec.ID} was deleted.`);
    });
}

public rowAdded(event: IRowDataEventArgs) {
    this._crudService.add(event.data);
}

public rowEditDone(event: IGridEditDoneEventArgs) {
    this._crudService.update(event.newValue);
}
```

In the above example, we only call the corresponding methods and pass the data that is read from the event arguments. Most API endpoints will return the updated/added/deleted entity, which indicates that the request was successful. 

A good practice is to add validation, notifying the users that all actions have been completed successfully or that an error has occurred. In such case, you may want to pass handlers for the error and complete notifications too:

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      console.log('success');
    },
    error: err => {
      console.log(err);
    },
    complete: () => {
      console.log('Complete notification')
    }
});
```

> [NOTE]
> The above examples are based on the default grid UI for editing actions. Another valid approach is if you provide your own external UI. In such case, responding to user interactions with the UI should work with the grid editing API (**make sure the grid has a primaryKey set**):

## API
Updating data in the grid is achieved through methods exposed both by the grid:
- [`updateRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updaterow)
- [`updateCell`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updatecell) 
- [`deleteRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deleterow)
- [`addRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#addrow)

and `update` method exposed by the [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html) and [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html) instances:

```typescript
// Through the grid methods
this.grid.updateRow(newData, rowKey);
this.grid.updateCell(newData, rowKey, columnField);
this.grid1.deleteRow(0);
this.grid.addRow(data);

// Through the methods exposed by cell/row
this.grid.getCellByColumn(rowIndex, columnField).update(newData);
this.grid.getCellByKey(rowKey, columnField).value = newData;
this.grid.getRowByKey(rowID).update(newData);
this.grid.getRowByKey(rowID).delete();
```

More details and information about using the grid API can be found in the [Cell Editing CRUD Operations](../../grid/cell-editing.md#crud-operations) section.

> [NOTE]
> Make sure to follow best practices and ano allow difference in your local data compared to the server database. For example - you may decide to first make a request to the server to delete a record, but if request fails, do not delete the data on the local grid data:

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      this.grid.getRowByKey(event.data[this.grid.primaryKey]).delete();
    },
    error: err => {
      console.log(err); // notify and don't delete the grid row
    }
});
```

## Demo

See the demo that was built following the guidance. Play around with it and try the examples for customization to fit your scenario in the best possible way.

<code-view style="height:410px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-crud" >
</code-view>

# Customizations
The rich Grid API allows you to customize the editing process in almost any way in order to fit your needs. This includes, but is not limited to:
 - [**Batch Editing**](how-to-perform-crud.md#batch-editing): Enable Batch Editing to batch all updates, and commit everything with single request.
 - [**Templating**](how-to-perform-crud.md#templates): Add tenplates for cell editing, or use your own external UI for row/cell editing, row adding and row deleting.
 - [**Events**](how-to-perform-crud.md#events): Monitor the editing flow and react accordingly. Attach event handlers for all events emitted during editing, will allow you to do:
    - data validation per cell
    - data validation per row
    - prompt user for expected type of input
    - cancel further processing, based on business rules
    - manual committing of the changes

## Batch Editing
 - Enable **Batch Editing** to keep your updates on the client, and commit all of them with single request. Batch updating is enabled bysetting `batchEditing` option to true:
 ```html
 <igx-grid [batchEditing]="'true'" ...>
 ```
 
Go to [Batch Editing](../../grid/batch-editing.md) for more details and demo samples.

## Templates

You can see and learn more about default cell editing templates in the [general editing topic](../../grid/editing.md#editing-templates).

If you want to provide a custom template which will be applied when a cell is in edit mode, you can make use of the [`igxCellEditor` directive]({environment:angularApiUrl}/classes/igxcelltemplatedirective.html). To do this, you need to pass an `ng-template` marked with the `igxCellEditor` directive and properly bind your custom control to the [`cell.editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editvalue):

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```

For more information and demos, see the [Cell Editing](../../grid/cell-editing.md) topic.

## Events
The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](../../grid/row-editing.md) and [**Cell Editing**](../../grid/cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

 | Event | Description | Arguments | Cancellable |
|-------|-------------|-----------|-------------|
| [`rowEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditEnter) | If `rowEditing` is enabled, fires when a row enters edit mode | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEditEnter) | Fires when a cell **enters edit mode** (after `rowEditEnter`) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEdit) | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing `Enter`) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#celleditdone) | If value is changed, fires **after** a cell has been edited and cell's value is **committed** | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igrideditdoneeventargs.html) | `false` |
| [`cellEditExit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEditExit) | Fires when a cell **exits edit mode** | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowedit) | If `rowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`rowEditDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone) | If `rowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**. | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEditExit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditExit) | If `rowEditing` is enabled, fires when a row **exits edit mode** | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |

Go to [Events](../../grid/editing.md#event-arguments-and-sequence) for more details and demo samples.

# Takeaway
Enabling CRUD in a robust way is major milestone for any data driven application. The IgxGrid is built with the CRID capabilities in mind, providing UI out of the box and flexible APIs that will save you lots of time when implementing a CRUD against any database out there.

# API References
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
* [`IgxActionStripMenuItemDirective`]({environment:angularApiUrl}/classes/igxmenuitemdirective.html)
* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxeditingactionscomponent.html)










