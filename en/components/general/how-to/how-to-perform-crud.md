---
title: How to enable CRUD operations in Angular.
_description: Build a CRUD service and Angular and use it to perform CRUD operations with the Grid  data.
_keywords: angular, crud, crud operations, infragistics, crud tutorial
---

# What is CRUD

CRUD stands for the CREATE, READ, UPDATE, DELETE operations that can be performed against a data collection. In computer world, talking about CRUD applications, CRUD operations, etc, is a main difference compared to applications that provide data to users only to be read.

# Angular CRUD

While talking about Angular CRUD, or CRUD operations in Angular, it is important to note: the data storage is on a remote server. The Angular application can not directly access the data layer, so it needs to communicate with it through a Web API that provides us endpoints for the CRUD operations, i.e:
 
| API | Operation | HTTP methods |
|-----|-----------| ----------- |
| "api/entities" | READ all entities | GET |
| "api/entities/id" | READ the entity with corresponding id | GET |
| "api/entities/update" | UPDATE the entity with corresponding id  | PUT / PATCH |
| "api/entities/create" | CREATE a new entity | POST |
| "api/entities/delete" | DELETE the entity with corresponding id | DELETE |

Notice that the CRUD operations also map conceptually to the HTTP methods that are used to communicate with APIs over HTTP.

All the code that will work with the above mentioned API can be abstracted in an Angular service. Such a service is injecatable and can be reused by any component that needs to perform CRUD operations agains the same database. A good practice is to write such a service as generic as possible, thus making it suitable to be reused in many components, also against different servers.

A generic example of such service will look like the following:


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

What the above service is missing is confguration for filtering/sorting/paging, etc. Depending on the exact API implementation of the endpoints, requests to the server may require optional parameters to handle filtering/sorting/paging for you. See our [Remote Data Operations](../../grid/remote-data-operations.md) for demos accompanied with code examples.

For more examples and guidance, refer to the [HTTP Services](https://angular.io/tutorial/toh-pt6) tutorial on Angular official documentation.


# CRUD Operations with Grid 

Enabling CRUD in the Grid means to provide UI for the users to perform these CRUD operations from within the grid. This is quite easy - the Grid provides **Cell Editing**, **Row Editing**, **Row Adding** and **Row Deleting** UI out of the box, and powerful API to do this on your own. Next, we want to take the result of each editing action and communicate it to the corresponding method in our CRUD service, thus preserving all changes to the original database. Completing that, we may say the grid is CRUD enabled.


This section is written as HOW-TO tutorial on enabling CRUD operations in Grid, accompanied by code snippets that you can take and copy paste in your code

## How to
Let's first enable the rowEditing behavior, bring the UI we need for the editing actions, benefiting from the `IgxActionStrip`, and attach event handlers:

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
    this._crudService.delete(event.data)subscribe((rec) => {
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

In the above example, we only call the corresponding methods and pass the data that is read from the event arguments. Most API endpoints will return the updated/added/deleted entity, which indicateds that request was successful. 

A good practice is to add validation, notify the users that actions has completed succesfully or if an error occurred. In such case, you may want to pass handlers for the error and complete notifications too:

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      console.log('succes');
    },
    error: err => {
      console.log(err);
    },
    complete: () => {
      console.log('Complete notification')
    }
});
```

## Demo

See the demo that was build following the guidance. Play with it and try the examples for customization to fit your scenario as best as possible.

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-crud" >
</code-view>

# Customizations
The rich Grid API allows you to customize the editing process in almost any way, to fit any of your needs. This includes, but is not limited to:
 - Enable **Batch Editing** to keep your updates on the client, and commit all of them with single request to the server.
 - Use your own UI for editing cell/rows. Use the cell editing template.
 - Use your own UI for adding row adding and row deleting.
 - Monitor the editing flow and react accordingly. Attach event handlers for all events emitted during editing, will allow you to do:
    - data validation per cell
    - data validation per row
    - prompt user for expected type of input
    - cancel further processing, based on business rules
    - manual commiting of the cnages

## Events
The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

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

Go to [Events](editing.md#event-arguments-and-sequence) for more details and demo samples.

## Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

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

For more information and demos, see the [Cell Editing](cell-editing.md) topic.
## Batch Editing
 - Enable **Batch Editing** to keep your updates on the client, and commit all of them with single request. Batch updating is enabled bysetting `batchEditing` option to true:
 ```html
 <igx-grid [batchEditing]="'true'" ...>
 ```
 
. Go to [Batch Editing](batch-editing.md) for more details and demo samples.











