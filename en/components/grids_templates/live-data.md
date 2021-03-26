
<style>
    .full-screen-btn {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        font-size: 13px;
        font-weight: 400;
        color: #fff;
        border: 0;
        text-transform: uppercase;
        padding: 8px 16px;
        margin: 24px 0;
        outline-style: none;
        -webkit-transition: all 0.25s ease-out;
        transition: all 0.25s ease-out;
        background: #0099ff; 
    }
    .full-screen-btn:hover, .full-screen-btn:focus {
        color: white;
        -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.26), 0 8px 10px 1px rgba(0, 0, 0, 0.12), 0 3px 14px 2px rgba(0, 0, 0, 0.08);
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.26), 0 8px 10px 1px rgba(0, 0, 0, 0.12), 0 3px 14px 2px rgba(0, 0, 0, 0.08); 
    }
    .full-screen-btn::before {
        content: "";
        display: inline-block;
        height: 28px;
        margin-right: 8px;
        background-size: 100%;
        background-repeat: no-repeat; 
    }
    .full-screen-btn[disabled] {
        color: rgba(0, 0, 0, 0.28);
        background: #eee;
        -webkit-box-shadow: none;
        box-shadow: none; 
    }

</style>
@@if (igxName === 'IgxGrid') {
---
title: Grid Live Data - Native Angular | Ignite UI for Angular | Infragistics
_description: Check out how the Ignite UI for Angular Data Grid can handle thousands of updates per second, while staying responsive for user interactions.
_keywords: angular data grid, angular grid updates, angular live data
---
}

@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Live Data - Native Angular | Ignite UI for Angular | Infragistics
_description: Check out how the Ignite UI for Angular Tree Grid can handle thousands of updates per second, while staying responsive for user interactions.
_keywords: angular data grid, angular grid updates, angular live data
_canonicalLink: grid/live-data
---
}

# Data @@igComponent Live Updating
The @@igComponent component is able to handle thousands of updates per second, while staying responsive for user interactions.

## Angular Live-data Update Example
The sample below demonstrates the @@igComponent performance when all records are updated multiple times per second. Use the UI controls to choose the number of records loaded and the frequency of updates.
Feed the same data into the [Category Chart](../category-chart.md) to experience the powerful charting capabilities of Ignite UI for Angular. The `Chart` button will show `Category Prices per Region` data for the selected rows and the `Chart` column button will show the same for the current row.
@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs" alt="Angular Live-data Update Example">
</code-view>


## Data binding and updates
A service provides data to the component when the page loads, and when the slider controller is used to fetch a certain number of records. While in a real scenario updated data would be consumed from the service, here data is updated in code. This is done to keep the demo simple and focus on its main goal - demonstrate the grid performance.
```html
<igx-grid #grid [data]="data" ...></igx-grid>
```
```typescript
public ngOnInit() {
    this.localService.getData(this.volume);
    this.volumeSlider.onValueChange.subscribe(x => this.localService.getData(this.volume);
    this.localService.records.subscribe(x => { this.data = x; });
}
```

Angular pipes are used internally to update the grid view. A change in the data field value or a change in the data object/data collection reference will trigger the corresponding pipes. However, this is not the case for columns, which are bound to [`complex data objects`](grid.md#complex-data-binding), because the Angular pure pipe will not detect a change in a nested property. To resolve the situation, provide a new object reference for the data object containing the property. Example:

```html
<igx-grid #grid [data]="data" ...>
    <igx-column field="price.usd"></igx-column>
</igx-grid>
```
```typescript
private updateData(data: IRecord[]) {
    const newData = []
    for (const rowData of data) {
        rowData.price = { usd: getUSD(), eur: getEUR() };
        newData.push({...rowData});
    }
    this.grid.data = newData;
}
```

## Templates
Updating the view works the same way for columns with a default template and for columns with a custom template. However, it is recommended to keep custom templates relatively simple. As number of elements in the template grows, negative performance impact rises as well.

## Live-data feed with Dock Manager and igxGrid Components

The purpose of this demo is to showcase a financial screen board with Real-time data stream using a [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) hub back-end. 
As you can see the igxGrid component handles with ease the high-frequency updates from the server. The code for the ASP.NET Core application using SignalR could be found in this [public GitHub repository](https://github.com/IgniteUI/finjs-web-api).

<code-view style="height:700px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs-dock-manager/grid-finjs-dock-manager" alt="Angular Live-data Update Example with a service">
</code-view>

### Start the hub connection

The signal-r.service handles the connectivity and updates of the exposed manageable parameters *frequency*, *volume* and *live-update state toggle* (Start/Stop).

```ts
this.hubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
        .build();
    this.hubConnection
        .start()
        .then(() => {
            this.hasRemoteConnection = true;
            this.registerSignalEvents();
            this.broadcastParams(interval, volume, live, updateAll);
        })
        .catch(() => {
```

Based on the specified frequency a total of 30 new updates will be received by the Grids from the server. A specific cellStyle classes are applied to the three columns that are handling the changes (Price, Change and Change in percent).

### Update frequency and data volume

By using the Action panel on the left, you can manage the frequency of the data feed and the volume of the requested data. All grids use the same data source. Feel free to use the other action elements to *stop the data feed*, change the *application theme* or add *dynamically a DockSlot container* with a igxGrid.

We use the 'updateparameters' method to request a new set of data with certain frequency. This method is part of the SignalR [stream hub implementation](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Models/StreamHub.cs#L18).

```ts
this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
    .then(() => console.log('requestLiveData', volume))
    .catch(err => {
        console.error(err);
    });
```

### Dynamically create DockSlot and Grid components

By using the [ComponentFactoryResolver](https://angular.io/api/core/ComponentFactoryResolver) we are able to create DockSlot and Grid components on the fly.

### DockManager component
Take leverage of the [Dock Manager](../dock-manager.md) WebComponent and build your own webview by using the docket or floating panels. In order to add a new floating panel, go ahead and open the Action pane on the right and click the 'Add floating pane' button. Drag and drop the new pane at the desired location.

## API References
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Live-data Update Example">
</code-view>


## API References

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## Additional Resources

<div class="divider--half"></div>

* [Data Grid](../grid/grid.md)
* [Row Editing](row-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

}