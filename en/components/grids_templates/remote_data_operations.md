@@if (igxName === 'IgxGrid') {
---
title: Angular Remote Data Operations | Angular Grid Remote Data Operations | Ignite UI for Angular | Infragistics
_description: Start using angular remote data operations such as remote filtering, remote sorting and remote scrolling to load data from a server with Ignite UI for Angular Material table.
_keywords: angular remote data operations, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Remote Data Operations | Angular Tree Grid Remote Data Operations | Ignite UI for Angular | Infragistics
_description: Start using angular remote data operations such as remote filtering, remote sorting and remote scrolling to load data from a server with Ignite UI for Angular Material table.
_keywords: angular remote data operations, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Remote Data Operations | Angular Hierarchical Grid Remote Data Operations | Ignite UI for Angular | Infragistics
_description: Start using angular remote data operations such as remote filtering, remote sorting and remote scrolling to load data from a server with Ignite UI for Angular Material table.
_keywords: angular remote data operations, ignite ui for angular, infragistics
---
}

### @@igComponent Remote Data Operations Overview

The Ignite UI for Angular @@igComponent supports remote data operations such as remote virtualization, remote sorting, remote filtering and others. This allows the developer to perform these tasks on a server, retrieve the data that is produced and display it in the @@igComponent.

@@if (igxName === 'IgxGrid') {
#### Demo

<div class="sample-container loading" style="height:500px">
    <iframe id="grid-remote-scenarios-iframe" src='{environment:demosBaseUrl}/grid/grid-remote-filtering' width="100%" height="100%" seamless frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-scenarios-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-remotefiltering-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-filtering' width="100%" height="100%" seamless frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-remotefiltering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
}

By default, the @@igComponent uses its own logic for performing data operations.
You can perform these tasks remotely and feed the resulting data to the @@igComponent by taking advantage of certain inputs and events, which are exposed by the @@igComponent.

@@if (igxName === 'IgxGrid') {
### Remote Virtualization

The [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) supports the scenario in which the data chunks are requested from a remote service, exposing the behavior implemented in the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) directive it uses internally.

To utilize this feature, you need to subscribe to the [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) output so that you make the appropriate request based on the arguments received, as well as set the public [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) property [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount) with the respective information coming from the service.

```html
<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false'
          (onDataPreLoad)="processData(false)"
          (onSortingDone)="processData(true)">
    <igx-column [field]="'ProductID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency" [sortable]="true"></igx-column>
    ...
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this.grid.isLoading = true;

    this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            this.grid.totalItemCount = data["@odata.count"];
            this.grid.isLoading = false;
    });
}

public processData(reset) {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }

    this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
        this.grid.sortingExpressions[0], reset, () => {
        ...
        this.cdr.detectChanges();
    });
}
```

When requesting data, you need to utilize the [`IForOfState`]({environment:angularApiUrl}/interfaces/iforofstate.html) interface, which provides the [`startIndex`]({environment:angularApiUrl}/interfaces/iforofstate.html#startindex) and [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize) properties.

>[!NOTE]
>The first [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize) will always be 0 and should be determined by you based on the specific application scenario.

#### Remote Virtualization Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


#### Infinite Scroll

 A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterised by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in `IgxGrid`.

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the `startIndex` and `chunkSize` properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.

The first thing to do is use the `ngAfterViewInit` lifecycle hook to fetch the first chunk of the data. Setting the `totalItemCount` property is important, as it allows the grid to size its scrollbar correctly.

```typescript
public ngAfterViewInit() {
    ...
    this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
        if (request.data) {
            this.grid.totalItemCount = this.page * this.pageSize;
            this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
            this.totalItems = request.data["@odata.count"];
            this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
            this.grid.isLoading = false;
        }
    });
    ...
}
```

Additionally, you have to subscribe to the `onDataPreLoad` output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

```typescript
public handlePreLoad() {
    const isLastChunk = this.grid.totalItemCount ===
                        this.grid.virtualizationState.startIndex + this.grid.virtualizationState.chunkSize;
    // when last chunk reached load another page of data
    if (isLastChunk) {
        if (this.totalPageCount === this.page) {
            this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
            return;
        }
        this.page++;
        this.grid.isLoading = true;
        this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
            if (request.data) {
                this.grid.totalItemCount = Math.min(this.page * this.pageSize, this.totalItems);
                this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                this.grid.isLoading = false;
            }
        });
    } else {
        this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
    }
}
```


#### Infinite Scroll Demo
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-5-iframe" data-src='{environment:demosBaseUrl}/grid/grid-sample-5' width="100%" height="100%" seamless frameBorder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Remote Sorting/Filtering

To provide remote sorting and filtering, you need to subscribe to the [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload), [`sortingExpressionsChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressionschange) and [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstreechange) outputs, so that you make the appropriate request based on the arguments received, as well as set the public [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) property [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount) with the respective information coming from the service.

We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.

```typescript
const DEBOUNCE_TIME = 300;
...
public ngAfterViewInit() {
    ...
    this.grid.onDataPreLoad.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });

    this.grid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData(true);
    });

    this.grid.sortingExpressionsChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });
}
```

When remote sorting and filtering are provided, usually we do not need the built-in sorting and filtering of the grid. We can disable them by setting the [`sortStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortstrategy) and the [`filterStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterstrategy) inputs of the grid to the `NoopSortingStrategy` and the `NoopFilteringStrategy` respective instances.

```html
<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false'
        [filterStrategy]="noopFilterStrategy"
        [sortStrategy]="noopSortStrategy"
        [allowFiltering]="true">
    ...
</igx-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```

>[!NOTE]
>When remote data is requested, the filtering operation is case-sensitive.

#### Remote Sorting/Filtering Demo

You can see the result of the code from above at the beginning of this article in the [Demo](#demo) section.
}
@@if (igxName === 'IgxTreeGrid') {
### Remote Filtering

To provide remote filtering, you need to subscribe to the [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstreechange) output so that you make the appropriate request based on the arguments received. Let's use a flat collection as a data source for our Tree Grid by providing a [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) and a [`foreignKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#foreignkey).

We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.

```typescript
const DEBOUNCE_TIME = 300;
...
public ngAfterViewInit() {
    ...
    this.treeGrid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });
}
```

When remote filtering is provided, usually we do not need the built-in filtering of the Tree Grid. We can disable it by setting the [`filterStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterstrategy) input of the Tree Grid to the `NoopFilteringStrategy` instance.

```html
<!-- tree-grid-remote-filtering-sample.html -->

<igx-tree-grid #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="450px"
               [autoGenerate]="false"
               [filterStrategy]="noopFilterStrategy"
               [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
    ...
</igx-tree-grid>
```

```typescript
// tree-grid-remote-filtering-sample.ts

public noopFilterStrategy = NoopFilteringStrategy.instance();

public processData() {
    this.treeGrid.isLoading = true;

    const filteringExpr = this.treeGrid.filteringExpressionsTree;

    this._remoteService.getData(filteringExpr, () => {
        this.treeGrid.isLoading = false;
    });
}
```

The remote filtering will have to be performed over the flat collection directly. We will also have to include all the parents for any record that matches the filtering condition regardless of whether or not the parents match the filtering (we do this to keep the hierarchy intact). The result can be seen below:

>[!NOTE]
>When remote data is requested, the filtering operation is case-sensitive.

#### Remote Filtering Demo

You can see the result of the code from above at the beginning of this article in the [Demo](#demo) section.
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
### Unique Column Values Strategy
}

@@if (igxName !== 'IgxHierarchicalGrid') {
#### Unique Column Values Strategy
}

The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The @@igComponent generates these values based on its data source by default. In case of remote filtering, the grid data does not contain all the data from the server. In order to provide the unique values manually and load them on demand, we can take advantage of the @@igComponent's [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) input. This input is actually a method that provides three arguments:
- **column**  - The respective column instance.
- **filteringExpressionsTree** - The filtering expressions tree, which is reduced based on the respective column.
- **done** - Callback that should be called with the newly generated column values when they are retrieved from the server.

The developer can manually generate the necessary unique column values based on the information, that is provided by the **column** and the **filteringExpressionsTree** arguments and then invoke the **done** callback.

> [!NOTE]
> When the [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) input is provided, the default unique values generating process in the excel style filtering will not be used.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
</igx-grid>
```

```typescript
public columnValuesStrategy = (column: IgxColumnComponent,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

#### Unique Column Values Strategy Demo

<div class="sample-container loading" style="height:800px">
    <iframe id="grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
</igx-tree-grid>
```

```typescript
public columnValuesStrategy = (column: IgxColumnComponent,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

#### Unique Column Values Strategy Demo

<div class="sample-container loading" style="height:800px">
    <iframe id="tree-grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'Artist'" [data]="data" [filterMode]="'excelStyleFilter'"
                       [uniqueColumnValuesStrategy]="singersColumnValuesStrategy">
    ...
    <igx-row-island [primaryKey]="'Album'" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                    [uniqueColumnValuesStrategy]="albumsColumnValuesStrategy">
        ...
    </igx-row-island>
</igx-hierarchical-grid>
```

```typescript
public singersColumnValuesStrategy = (column: IgxColumnComponent,
                                      columnExprTree: IFilteringExpressionsTree,
                                      done: (uniqueValues: any[]) => void) => {
// Get specific column data for the singers.
this.remoteValuesService.getColumnData(
    null, "Singers", column, columnExprTree, uniqueValues => done(uniqueValues));
}

public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                     columnExprTree: IFilteringExpressionsTree,
                                     done: (uniqueValues: any[]) => void) => {
// Get specific column data for the albums of a specific singer.
const parentRowId = (column.grid as any).foreignKey;
this.remoteValuesService.getColumnData(
    parentRowId, "Albums", column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

#### Unique Column Values Strategy Demo

<div class="sample-container loading" style="height:800px">
    <iframe id="hierarchical-grid-esf-load-on-demand-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-esf-load-on-demand-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

In order to provide a custom loading template for the excel style filtering, we can use the `igxExcelStyleLoading` directive:

```html
<@@igSelector [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template>
</@@igSelector>
```

<div class="divider--half"></div>

### Remote Paging

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.

```typescript
@Injectable()
export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = "https://www.igniteui.com/api/products";

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]);
    }

    public getData(index?: number, perPage?: number): any {
        let qS = "";

        if (perPage) {
            qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        }

        this.http
            .get(`${this.url + qS}`).pipe(
                map((data: any) => {
                    return data;
                })
            ).subscribe((data) => this.remoteData.next(data));
    }

    public getDataLength(): any {
        return this.http.get(this.url).pipe(
            map((data: any) => {
                return data.length;
            })
        );
    }
}
```
After declaring the service, we need to create a component, which will be responsible for the @@igComponent construction and data subscription.
@@if (igxName === 'IgxGrid') {
```typescript
export class RemotePagingGridSample implements OnInit, AfterViewInit {
    public data: Observable<any[]>;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemoteService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
export class HGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages: number = 1;
    public totalCount = 0;

    constructor(private remoteService: RemotePagingService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }
}
```
}
}
@@if (igxName === 'IgxTreeGrid') {
In this sample we will demonstrate how to display a certain number of root records per page no matter how many child records they have. In order to cancel the built-in Tree Grid paging algorithm, which displays a certain number of records no matter their level (root or child), we have to set the [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) property to `Number.MAX_SAFE_INTEGER`.
```html
<igx-tree-grid #treeGrid ...
               [paging]="true" [perPage]="maxPerPage">
```
```typescript
public maxPerPage = Number.MAX_SAFE_INTEGER;
```
}

Now we can choose between setting-up our own *custom paging template* or using the default one that the @@igComponent provides. Let's first take a look what is necessary to set-up remote paging by using the *default paging template*.

#### Remote paging with default template

If you want to use the *default paging template* you need to set the [`totalRecords`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalrecords) property, only then the grid will be able to calculate the *total page number* based on total remote records. When performing a remote pagination we pass to the grid only the data for the current page, so the grid will not try to paginate the provided data source. That's why we should set the [`pagingMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pagingmode) property to *GridPagingMode.remote*. Also it is necessary to subscribe to [`onPagingDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onpagingdone) or [`perPageChange`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#perpagechange) events in order to fetch the data from your remote service, it depends on the use case which event will be used.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async"  [paging]="true" (perPageChange)="paginate()" (onPagingDone)="pagingDone($event)" 
    [pagingMode]="mode" [totalRecords]="totalCount">
    <igx-column field="ID"></igx-column>
    ...
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" [paging]="true" [perPage]="10"
        [pagingMode]="mode" [totalRecords]="totalCount" (onPagingDone)="paginate($event)">
    <igx-column field="Name"></igx-column>
    ...
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [paging]="true" [primaryKey]="'CustomerID'" (perPageChange)="getFirstPage()"
    [pagingMode]="mode"  [totalRecords]="totalCount" (onPagingDone)="pagingDone($event)" #hierarchicalGrid>
    <igx-column field="CustomerID"></igx-column>
    ...
</igx-hierarchical-grid>
```
}

```typescript
public totalCount = 0;
public data: Observable<any[]>;
public mode = GridPagingMode.remote;
@ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

private _dataLengthSubscriber;
...
public ngOnInit() {
    this.data = this.remoteService.remoteData.asObservable();
    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
        this.totalCount = data;
        this.grid1.isLoading = false;
    });
}
...
public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.grid1.perPage);
}

public pagingDone(page) {
    const skip = page.current * this.grid1.perPage;
    this.remoteService.getData(skip, this.grid1.perPage);
}

public paginate() {
    this.remoteService.getData(0, this.grid1.perPage);
}
```

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="remote-paging-default-template-iframe" data-src='{environment:demosBaseUrl}/grid/remote-paging-default-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="remote-paging-default-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-remote-paging-default-template-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-remote-paging-default-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-remote-paging-default-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="remote-paging-default-template-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/remote-paging-default-template' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="remote-paging-default-template-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

#### Remote Paging with custom template

When we define a *custom paging template* it's not necessary to define the @@igComponent properties like [`pagingMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pagingmode) or [`totalRecords`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalrecords), as we did for the *custom paging with default template*. We need to create a custom pager template to get the data only for the requested page and to pass the correct **skip** and **top** parameters to the remote service according to the selected page and items [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage). We are going to use the `<igx-paginator>` in order to ease our example configuration.

@@if (igxName === 'IgxGrid') {
```html
<ng-template #customPager let-api>
    <igx-paginator #paginator
        [totalRecords]="totalCount"
        [(perPage)]="perPage"
        [selectLabel]="'Records per page:'"
        [selectOptions]="selectOptions"
        [displayDensity]="grid1.displayDensity"
        (pageChange)="paginate($event)">
    </igx-paginator>
</ng-template>
```

```typescript
@ViewChild("customPager", { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
@ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

private _perPage = 10;
private _dataLengthSubscriber;

constructor(private remoteService: RemotePagingService) {
}

...

public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);
}

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}

```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<ng-template #customPager let-api>
    <igx-paginator #paginator
        [totalRecords]="totalCount"
        [(perPage)]="perPage"
        [selectLabel]="'Records per page:'"
        [selectOptions]="selectOptions"
        [displayDensity]="grid1.displayDensity"
        (pageChange)="paginate($event)">
    </igx-paginator>
</ng-template>
```
```typescript
@ViewChild("customPager", { read: TemplateRef })
public remotePager: TemplateRef<any>;
public title = "gridPaging";

@ViewChild("layout1")
public layout1: IgxRowIslandComponent;

@ViewChild("hierarchicalGrid")
public hierarchicalGrid: IgxHierarchicalGridComponent;

...

public ngAfterViewInit() {
    this.hierarchicalGrid.isLoading = true;
    this.remoteService.getData(
        { parentID: null, rootLevel: true, key: "Customers" }, 0, this.perPage).subscribe((data) => {
        this.hierarchicalGrid.isLoading = false;
        this.hierarchicalGrid.data = data;
        this.hierarchicalGrid.paginationTemplate = this.remotePager;
        this.hierarchicalGrid.cdr.detectChanges();
    });
}

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<ng-template #customPager let-api>
    <igx-paginator #paginator
        [totalRecords]="totalCount"
        [(perPage)]="perPage"
        [selectLabel]="'Records per page:'"
        [selectOptions]="selectOptions"
        [displayDensity]="grid1.displayDensity"
        (pageChange)="paginate($event)">
    </igx-paginator>
</ng-template>
```

```typescript
public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}
```
}
The last step will be to declare our template for the gird.
@@if (igxName === 'IgxGrid') {
```html
<@@igSelector #@@igObjectRef [data]="data | async" width="960px" height="550px" [paging]="true" >
    <igx-column field="ID"></igx-column>
    <igx-column field="ProductName"></igx-column>
    <igx-column field="QuantityPerUnit"></igx-column>
    <igx-column field="SupplierName"></igx-column>
    <igx-column field="UnitsInStock"></igx-column>
    <igx-column field="Rating"></igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [paging]="true" [primaryKey]="'CustomerID'" [height]="'550px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CustomerID"></igx-column>
        <igx-column field="CompanyName"></igx-column>
        <igx-column field="ContactName"></igx-column>
        <igx-column field="ContactTitle"></igx-column>
        <igx-column field="Country"></igx-column>
        <igx-column field="Phone"></igx-column>
        ...
</igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" expansionDepth="0" width="100%"
                [paging]="true" [perPage]="maxPerPage" [paginationTemplate]="customPager">
    <igx-column field="Name">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon *ngIf="cell.rowData.Type === 'File folder'" fontSet="material" class="typeIcon">folder</igx-icon>
            <igx-icon *ngIf="cell.rowData.Type === 'JPG File'" fontSet="material" class="typeIcon">photo</igx-icon>
            {{val}}
        </ng-template>
    </igx-column>
    <igx-column field="Type"></igx-column>
    <igx-column field="Size" dataType="number" [formatter]="formatSize"></igx-column>
</igx-tree-grid>
```
}

After all the changes above, the following result will be achieved.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-remote-paging-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
#### Remote Paging with custom paginator

In some cases you may want to define your own paging behavior and this is when we can take advantage of the Paging template and add our custom logic along with it. We are going to extend the Remote Paging example in order to demonstrate this:

<div class="sample-container loading" style="height:620px">
    <iframe id="grid-custom-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-custom-remote-paging-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Below you will find the methods that we've defined in order to implement our own `next` and `previous` page actions.

```typescript
@ViewChild("customPager", { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
@ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

public nextPage() {
    this.firstPage = false;
    this.page++;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page + 1 >= this.totalPages) {
        this.lastPage = true;
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
}

public previousPage() {
    this.lastPage = false;
    this.page--;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page <= 0) {
        this.firstPage = true;
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
}

public paginate(page: number, recalc = false) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalc) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);
}

public buttonDeselection(page: number, totalPages: number) {
...
}

...
public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);
}

```

}

@@if (igxName === 'IgxGrid') {

### Remote Paging with Batch editing

With the examples so far we clarified how to set up the @@igxName with remote data. Now, let's focus on enabling batch editing for the grid by following the [Batch Editing topic/guide](batch_editing.html).

Before continuing with the sample it is good to clarify the current use case. When pagination is done on the server, the grid contains the data only for the current page and if we add new rows the newly added rows (with Batch Editing) will be concatenated with the current data that the grid contains. Therefore, if the server returns no data for a given page, grid's data source will be consisted only from the newly added rows, which the grid will paginate based on the defined pagination settings (page, perPage).

```typescript
public ngOnInit() {
  ...
    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
        this.totalCount = data;
        this._recordOnServer = data;
        this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
        this.grid1.isLoading = false;
    });
    }
```

In order to handle this use case properly, we need to implement some custom logic.
First, we have to know the total number of records that are on the server. Given that, we calculate the total number of data pages on the server (see `this._totalPagesOnServer `) and based on its value, we will implement the custom pagination logic.

```typescript

public paginate(page: number) {
    this.grid1.endEdit(true);
    if (page > this._totalPagesOnServer) {
        if (this.page !== this._totalPagesOnServer) {
            const skipEl = this._totalPagesOnServer * this.perPage;
            this.remoteService.getData(skipEl, this.perPage);
        }
        this.grid1.page = page - this._totalPagesOnServer;
        this.page = page;
        return;
    } else {
        this.grid1.page = 0;
    }
    this.page = page;
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}

```

As you can see in the **paginate** method, custom pagination logic is performed, based on the `_totalPagesOnServer` value.


#### Remote Paging with Batch Editing Demo


<div class="sample-container loading" style="height:620px">
    <iframe id="remote-paging-batch-editing-iframe" data-src='{environment:demosBaseUrl}/grid/remote-paging-batch-editing' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="remote-paging-batch-editing-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

### API References
<div class="divider--half"></div>

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Paging](paging.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
