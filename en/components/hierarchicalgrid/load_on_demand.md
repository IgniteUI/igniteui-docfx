---
title: Hierarchical Grid load on demand - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Hierarchical Grid provides the necessary tools to load data on demand for each child grid that is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid component, Angular Hierarchical Data Table component, Angular Hierarchical Grid control, Angular Hierarchical Data Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Data Table, Hierarchical Grid, Hierarchical Data Table
---

### Hierarchical Grid Load On Demand

The Ignite UI for Angular [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) allows fast rendering by requesting the minimum amount of data to be retrieved from the server so that the user can see the result in view and interact with the visible data as quickly as possible. Initially only the root grid’s data is retrieved and rendered, only after the user expands a row containing a child grid, he will receive the data for that particular child grid. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.


This topic demonstrates how to configure Load on Demand by creating a Remote Service Provider that communicates with an already available remote oData v4 Service. Here's the working demo and later we will go through it step by step and describe the process of creating it.


#### Demo

<div class="sample-container loading" style="height:620px">
    <iframe id="hierarchical-grid-lod-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

### Remote Service Provider

First we will prepare our service provider so we will be ready to get the data we would need for the hierarchical grid.

#### Getting basic data

We will be communicating with our backend service over HTTP protocol using the XMLHttpRequest interface the browsers provide. In order to achieve this more easily we will use Angular's [`HttpClient`](https://angular.io/api/common/http/HttpClient) module that offers a simplified client HTTP API. That way in order to get our data we will need this simple method in our service:


```typescript
public getData(dataState): Observable<any[]> {
    return this.http.get(this.buildUrl(dataState)).pipe(
        map(response => response['value']),
    );
}
```

As you can see `this.http` will be a reference to our `HttpCLient` module, and `buildUrl()` will be the method that will generate our url based on the data that we have received. We map our response so we get only the value of our result and return an Observable, since this is executed asynchronously. That way we can later subscribe to it, process it further in our application and pass it to our grid.

#### Building our request url

Next we will define how we should build our URL for the GET request. This is where we will be able to get the data for our main grid but also for any child grid inside it. We will use the `Customers` data from `https://services.odata.org/V4/Northwind/Northwind.svc/` for our root level and use `Order` and `Order_Details` for the lower levels. The model will differ per application but we will use the following one:

![Dragging](../../images/hgrid-database.jpg)

 What we first need is the `key` of our table to determine from where to get the data for the desired grid, the primary key of the parent row and its unique ID. We will define all this in an interface called `IDataState`. An example:

```typescript
export interface IDataState {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
}

//...
public buildUrl(dataState: IDataState): string {
    let qS = "";
    if (dataState) {
        qS += `${dataState.key}?`;

        if (!dataState.rootLevel) {
            if (typeof dataState.parentID === "string") {
                qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
            } else {
                qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
            }
        }
    }
    return `${this.url}${qS}`;
}
//...
```

#### Result

Finally, this is how our `remote-lod.service.ts` would look like:


```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IDataState {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
}

@Injectable()
export class RemoteLoDService {
    url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState: IDataState): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response) => response['value'])
        );
    }

    public buildUrl(dataState: IDataState): string {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }
}
```

### Hierarchical Grid Setup

Next we will setup our hierarchical grid and connect it to our remote service provider.

#### Template defining

First we will define our hierarchical grid template with the levels of hierarchy that we expect to have. We know that our root grid [`primaryKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey) for the customers is their `CustomerID`, for their orders on the first level -  `OrderID` and respectively for order details - `ProductID`. Knowing each database table and their keys allows us to define our initial template:

```html
<igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="false" [height]="'600px'" [width]="'100%'">
    <igx-column field="CustomerID" [hidden]="true"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false" >
        <igx-column field="OrderID" [hidden]="true"></igx-column>
        <igx-column field="ShipCountry"></igx-column>
        <igx-column field="ShipCity"></igx-column>
        <igx-column field="ShipAddress"></igx-column>
        <igx-column field="OrderDate"></igx-column>
        <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="false" >
            <igx-column field="ProductID" [hidden]="true"></igx-column>
            <igx-column field="Quantity"></igx-column>
            <igx-column field="UnitPrice"></igx-column>
            <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```

There is one thing missing in our template though, and that is the data for our root level hierarchical grid, and eventually its children. We will easily set the data of the root grid after getting its data from the service in our code later, since we can use the `#hGrid` reference. Setting the data for any child that has been expanded is a bit different.

When a row is expanded for the first time, a new child `IgxHierarchicalGrid` is rendered for it and we need to get the reference for the newly created grid to set its data. That is why each [`IgxRowIsland`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html) component provides the [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated)  event that is fired when a new child grid is created for that specific row island. We can use that to get the reference we need for the new grid, request its data from the service, and apply it.

We can use one method for all row islands since we built our service so that it needs only information if it is the root level, the key of the row island, the primary key of the parent row, and its unique identifier. All this information can be accessed either directly from the event arguments, or from the row island responsible for triggering the event. 

Let's name the method that we will use `gridCreated`. Since the event [`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) provides the [`parentID`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#parentid) property, a reference to the row island as [`owner`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#owner) and the new child [`grid`]({environment:angularApiUrl}/interfaces/igridcreatedeventargs.html#grid) property, it will be passed as the first argument. We are only missing information about the parent row's `primaryKey`, but we can easily pass that as a second argument, depending on which row island we bind. 

The template file `hierarchical-grid-lod.component.html`, with these changes added, would look like this:

```html
<igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="false" [height]="'600px'" [width]="'100%'">
    <igx-column field="CustomerID" [hidden]="true"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false" (onGridCreated)="gridCreated($event, 'CustomerID')">
        <igx-column field="OrderID" [hidden]="true"></igx-column>
        <igx-column field="ShipCountry"></igx-column>
        <igx-column field="ShipCity"></igx-column>
        <igx-column field="ShipAddress"></igx-column>
        <igx-column field="OrderDate"></igx-column>
        <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="false" (onGridCreated)="gridCreated($event, 'OrderID')">
            <igx-column field="ProductID" [hidden]="true"></igx-column>
            <igx-column field="Quantity"></igx-column>
            <igx-column field="UnitPrice"></igx-column>
            <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```

#### Connecting our service

One of our final steps now will be to connect our previously created service to our hierarchical grid. Since we defined it as an `Injectable`, we can pass it as a provider to our application. We will get a reference to our root grid as well, by using `ViewChild` query to set its data:

````TypeScript
@Component({
    providers: [RemoteLoDService],
    selector: "app-hierarchical-grid-lod",
    styleUrls: ["./hierarchical-grid-lod.component.scss"],
    templateUrl: "./hierarchical-grid-lod.component.html"
})
export class HierarchicalGridLoDSampleComponent {
    @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }
}
````

In order to make sure that out grid is rendered before we request its data from the service and assign it, we will use the `AfterViewInit` lifecycle hook. As it doesn't have any parents we can only pass that `rootLevel` is `true`, and the key for it, to the `getData` of our service. Since it returns an observable we will need to subscribe to it:

````TypeScript
public ngAfterViewInit() {
    this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
        this.hGrid.data = data;
        this.hGrid.cdr.detectChanges();
    });
}
````

Next, we only need to create our `gridCreated` method that will request data for any new child grid created. It will be similar to getting the root level grid data, just this time we will need to pass more information, like `parentID` and `parentKey`. `rootLevel` will be `false` for any child:

````TypeScript
public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
    const dataState = {
        key: event.owner.key,
        parentID: event.parentID,
        parentKey: _parentKey,
        rootLevel: false
    };
    this.remoteService.getData(dataState).subscribe(
        (data) => {
            event.grid.data = data;
            event.grid.cdr.detectChanges();
        }
    );
}
````

With this, the setup of our application is almost done. This last step aims to improve the user experience by informing the user that the data is still loading so he doesn't have to look at an empty grid in the meantime. That's why the [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) supports a loading indicator that can be displayed while the grid is empty. If new data is received, the loading indicator will hide and the data will be rendered. 

#### Setup of loading indication

The [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) can display a loading indicator by setting the [`isLoading`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#isloading) property to `true` while there is no data. We need to set it initially for the root grid and also when creating new child grids, until their data is loaded. We could always set it to `true` in our template, but we want to hide it and display that the grid has no data if the service returns an empty array by setting it to `false`.

In this case the final version of our `hierarchical-grid-lod.component.ts` would look like this:

````TypeScript
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import {
    IGridCreatedEventArgs,
    IgxHierarchicalGridComponent,
    IgxRowIslandComponent
} from "igniteui-angular";
import { RemoteLoDService } from "../services/remote-lod.service";

@Component({
    providers: [RemoteLoDService],
    selector: "app-hierarchical-grid-lod",
    styleUrls: ["./hierarchical-grid-lod.component.scss"],
    templateUrl: "./hierarchical-grid-lod.component.html"
})
export class HierarchicalGridLoDSampleComponent implements AfterViewInit {
    @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }

    public ngAfterViewInit() {
        this.hGrid.isLoading = true;
        this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
            this.hGrid.isLoading = false;
            this.hGrid.data = data;
            this.hGrid.cdr.detectChanges();
        });
    }

    public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
        const dataState = {
            key: event.owner.key,
            parentID: event.parentID,
            parentKey: _parentKey,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            }
        );
    }
}
````

### API References

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)

### Additional Resources

<div class="divider--half"></div>

* [Hierarchical Grid Component](hierarchical_grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
