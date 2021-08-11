---
title: How to enable CRUD operations in Angular.
_description: Build a CRUD service and Angular and use it to perform CRUD operations with the @@igComponent  data.
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

All the code that will work with the above mentioned API can be abstracted in an Angular service. Such a service is injecatable and can be reused by any component that needs to perform the same CRUD operations. See more at this [HTTP Services](https://angular.io/tutorial/toh-pt6) tutorial on Angular official documentation.


# CRUD Operations with @@igComponent 

Enabling CRUD operations in the @@igComponent  means to provide UI for the users to do these CRUD operations from within the grid, and preserve all changes to the original database.

First thing is quite easy - the @@igComponent provides **Cell Editing**, **Row Editing**, **Row Adding** and **Row Deleting** UI out of the box, and powerful API to do this on your own.

Let's say that we have the Angular service implemented, and it provides us with methods to use to do any CRUD operation against our database. In summary, such a service will look like:


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

Using the rich grid API, we can take the result of each CRUD action, and communicate it directly to the corresponding method in the data service.

Next section is written as HOW-TO tutorial on enabling CRUD operations in @@igComponent , accompanied by code snippets that you can take and copy paste in your code.

# How to do CRUD operations in Angular with @@igComponent 

## Grid bindings

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

public rowAdded(event: IRowDataEventArgs) {
    this._crudService.add(event.data).subscribe((rec) => {
        // notify the user that action is completed
        // any adittional handling
    });
}

public rowDeleted(event: IRowDataEventArgs) {
    this._crudService.delete(event.data)
}

public rowEditDone(event: IGridEditDoneEventArgs) {
    this._crudService.update(event.newValue);
}
```

In the above example, we only call the corresponding methods and pass the data that os read from the event arguments. Most API endpoints will return the updated/added/deleted entity, which indicateds that request wass successful. This is useful to do adittional validation, and notify the users that actions has completed succesfully or if an error occurred.

In such case, you may want to pass handlers for the error and complete notifications too:

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
    },
    error: err => {
      console.log(err);
    },
    complete: () => {
      console.log('Complete notification')
    }
});
```

# Customize
## Events
## Templates
## Batch Editing
## Paging
## API











