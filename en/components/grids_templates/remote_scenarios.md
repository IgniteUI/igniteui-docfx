@@if (igxName === 'IgxGrid') {
---
title: Angular Remote Scenarios | Angular Grid Remote Scenarios | Ignite UI for Angular | Infragistics
_description: Start using angular remote scenarios such as remote filtering, remote sorting and remote scrolling to load data from a server with Ignite UI for Angular Material table.
_keywords: angular remote scenarios, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Remote Scenarios | Angular Tree Grid Remote Scenarios | Ignite UI for Angular | Infragistics
_description: Start using angular remote scenarios such as remote filtering, remote sorting and remote scrolling to load data from a server with Ignite UI for Angular Material table.
_keywords: angular remote scenarios, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Remote Scenarios | Angular Hierarchical Grid Remote Scenarios | Ignite UI for Angular | Infragistics
_description: Start using angular remote scenarios such as remote filtering, remote sorting and remote scrolling to load data from a server with Ignite UI for Angular Material table.
_keywords: angular remote scenarios, ignite ui for angular, infragistics
---
}

### @@igComponent Remote Scenarios Overview

The Ignite UI for Angular @@igComponent supports remote scenarios such as Remote Virtualization, Remote Sorting, Remote Filtering, Remote Paging and others. This allows the developer to perform remote operations on a server, retrieve the data that is produced and display it in the @@igComponent.


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

***Note:*** The first [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize) will always be 0 and should be determined by you based on the specific application scenario.

#### Remote Virtualization Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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

Note that when requesting remote data, filtering operation is case-sensitive.

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

Note that when requesting remote data, filtering operation is case-sensitive.

#### Remote Filtering Demo

You can see the result of the code from above at the beginning of this article in the [Demo](#demo) section.
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
}

### Remote Paging

Paging could also operate with remote data.

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
Lets first declare our service that will be responsible for data fetching.
We will need the count of all the data items in order to calculate pages count and we will add this logic to our service.
```typescript
@Injectable()
export class RemoteService {
    public remoteData: BehaviorSubject<any[]>;
    private url: string = "https://www.igniteui.com/api/products";

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

    constructor(private remoteService: RemoteService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
        });
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

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: "Customers" }).subscribe((length) => {
            this.totalCount = length;
            this.totalPages = Math.ceil(length / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
        });
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
We need to create a custom pager template to get the data only for the requested page and to pass the correct `skip` and `top` parameters to the remote service according to the selected page and items [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage).
We also need to take care of the disabling and enabling of the pager buttons.

@@if (igxName === 'IgxGrid') {
```html
<ng-template #customPager let-api>
    <div class="igx-grid__footer">
        <div class="igx-grid-paginator">
            <div class="igx-grid-paginator__select">
                <label class="igx-grid-paginator__label">Items per page</label>
                <div class="igx-grid-paginator__select-input">
                    <igx-select [(ngModel)]="perPage" type="border">
                        <igx-select-item *ngFor=" let item of [5, 10, 15, 25, 50, 100, 500]" [value]="item">
                            {{item}}
                        </igx-select-item>
                    </igx-select>
                </div>
            </div>
            <div class="igx-grid-paginator__pager">
                <button [disabled]="firstPage" (click)="paginate(0, false)" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">first_page</igx-icon>
                </button>
                <button [disabled]="firstPage" (click)="previousPage()" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">chevron_left</igx-icon>
                </button>
                <span>{{ page + 1 }} of {{totalPages}}</span>
                <button [disabled]="lastPage" (click)="nextPage()" igxRipple igxRippleCentered="true"
                        igxButton="icon">
                    <igx-icon fontSet="material">chevron_right</igx-icon>
                </button>
                <button [disabled]="lastPage" (click)="paginate(totalPages - 1, false)" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">last_page</igx-icon>
                </button>
            </div>
        </div>
    </div>
</ng-template>
```

```typescript
@ViewChild("customPager", { read: TemplateRef })
public remotePager: TemplateRef<any>;

public nextPage() {
    this.firstPage = false;
    this.page++;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page + 1 >= this.totalPages) {
        this.lastPage = true;
    }
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
}

public paginate(page: number, recalc: true) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalc) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);
}

public buttonDeselection(page: number, totalPages: number) {
...
}

...
public ngAfterViewInit() {
    this.remoteService.getData(0, this.perPage);
    this.@@igObjectRef.paginationTemplate = this.remotePager;
}

```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<ng-template #customPager let-api>
    <div class="igx-grid__footer">
        <div class="igx-grid-paginator">
            <div class="igx-grid-paginator__select">
                <label class="igx-grid-paginator__label">Items per page</label>
                <div class="igx-grid-paginator__select-input">
                    <igx-select [(ngModel)]="perPage" type="border">
                        <igx-select-item *ngFor=" let item of [5, 10, 15, 25, 50, 100, 500]" [value]="item">
                            {{item}}
                        </igx-select-item>
                    </igx-select>
                </div>
            </div>
            <div class="igx-grid-paginator__pager">
                <button [disabled]="firstPage" (click)="paginate(0, false)" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">first_page</igx-icon>
                </button>
                <button [disabled]="firstPage" (click)="previousPage()" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">chevron_left</igx-icon>
                </button>
                <span>{{ page + 1 }} of {{totalPages}}</span>
                <button [disabled]="lastPage" (click)="nextPage()" igxRipple igxRippleCentered="true"
                        igxButton="icon">
                    <igx-icon fontSet="material">chevron_right</igx-icon>
                </button>
                <button [disabled]="lastPage" (click)="paginate(totalPages - 1, false)" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">last_page</igx-icon>
                </button>
            </div>
        </div>
    </div>
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

...

public nextPage() {
    this.firstPage = false;
    this.page++;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(
        { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
        this.hierarchicalGrid.data = data;
        this.hierarchicalGrid.cdr.detectChanges();
    });
    if (this.page + 1 >= this.totalPages) {
        this.lastPage = true;
    }
}

public previousPage() {
    this.lastPage = false;
    this.page--;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(
        { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
        this.hierarchicalGrid.data = data;
        this.hierarchicalGrid.cdr.detectChanges();
    });
    if (this.page <= 0) {
        this.firstPage = true;
    }
}

public paginate(page: number, recalc: true) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalc) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.remoteService.getData(
        { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
        this.hierarchicalGrid.data = data;
        this.hierarchicalGrid.cdr.detectChanges();
    });
    this.buttonDeselection(this.page, this.totalPages);
}

public buttonDeselection(page: number, totalPages: number) {
    ...
}

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<ng-template #customPager let-api>
    <div class="igx-grid__footer">
        <div class="igx-grid-paginator">
            <div class="igx-grid-paginator__select">
                <label class="igx-grid-paginator__label">Items per page</label>
                <div class="igx-grid-paginator__select-input">
                    <igx-select [(ngModel)]="perPage" type="border">
                        <igx-select-item *ngFor=" let item of [5, 10, 15, 25, 50, 100, 500]" [value]="item">
                            {{item}}
                        </igx-select-item>
                    </igx-select>
                </div>
            </div>
            <div class="igx-grid-paginator__pager">
                <button [disabled]="firstPage" (click)="paginate(0, false)" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">first_page</igx-icon>
                </button>
                <button [disabled]="firstPage" (click)="previousPage()" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">chevron_left</igx-icon>
                </button>
                <span>{{ page + 1 }} of {{totalPages}}</span>
                <button [disabled]="lastPage" (click)="nextPage()" igxRipple igxRippleCentered="true"
                        igxButton="icon">
                    <igx-icon fontSet="material">chevron_right</igx-icon>
                </button>
                <button [disabled]="lastPage" (click)="paginate(totalPages - 1, false)" igxButton="icon" igxRipple
                        igxRippleCentered="true">
                    <igx-icon fontSet="material">last_page</igx-icon>
                </button>
            </div>
        </div>
    </div>
</ng-template>
```

```typescript
public nextPage() {
    this.firstPage = false;
    this.page++;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page + 1 >= this.totalPages) {
        this.lastPage = true;
    }
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
}

public paginate(page: number, recalc: true) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalc) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);
}

public buttonDeselection(page: number, totalPages: number) {
    if (totalPages === 1) {
        this.lastPage = true;
        this.firstPage = true;
    } else if (page + 1 >= totalPages) {
        this.lastPage = true;
        this.firstPage = false;
    } else if (page !== 0 && page !== totalPages) {
        this.lastPage = false;
        this.firstPage = false;
    } else {
        this.lastPage = false;
        this.firstPage = true;
    }
}
```
}
The last step will be to declare our template for the gird.
@@if (igxName === 'IgxGrid') {
```html
<@@igSelector #@@igObjectRef [data]="data | async" width="960px" height="550px" [paging]="true" [perPage]="perPage">
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
<igx-hierarchical-grid [paging]="true" [perPage]="perPage"
    [primaryKey]="'CustomerID'" [height]="'550px'" [width]="'100%'" #hierarchicalGrid>
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
@@if (igxName === 'IgxGrid') {
This is absolutely enough if we want an up and running sample. But we can extend this sample even more by adding an option to change our paging template at run time. Let's see how we can achieve that. First we will start by adding one more paging template in our template:

```html
<ng-template #secCustomPager let-api>
    <div class="igx-grid__footer">
        <div id="numberPager" class="igx-grid-paginator" style="justify-content: center;">
            <button [disabled]="firstPage" (click)="previousPage()" igxButton="flat">
                PREV
            </button>
            <span *ngIf="shouldShowFirstPage" (click)="paginate(0, false)">
                <a class="pageNavLinks" [routerLink]=''>{{1}}</a> <span class="pageNavLinks">...</span>
            </span>
            <span *ngFor="let item of pages" (click)="paginate(item, false)">
                <a class="pageNavLinks {{activePage(item)}}" [routerLink]=''>{{item + 1}}</a>
            </span>
            <span *ngIf="shouldShowLastPage" (click)="paginate(totalPages - 1, false)">
                <span class="pageNavLinks">...</span> <a class="pageNavLinks" [routerLink]=''>{{ totalPages }}</a>
            </span>
            <button [disabled]="lastPage" (click)="nextPage()" igxButton="flat">
                NEXT
            </button>
        </div>
    </div>
</ng-template>
```

After that we need to extend the methods that we have already created with some additional logic:

```typescript
// the same also applies for the methods previousPage() and paginate(page: number, recalc: true)
public nextPage() {
    ...
    if (this.grid1.paginationTemplate === this.secondPagerTemplate) {
        this.setNumberOfPagingItems(this.page, this.totalPages);
    }
}
// creates an array with the visible page numbers where the user can navigate according to the current page and the total page number
public setNumberOfPagingItems(currentPage, totalPages) {
    ....
}
```
And finally we need to add a button which allows the user to change the pager template at run time:

```html
<button (click)="changeTemplate()" igxButton="flat">Change Paging Template</button>
```

```typescript
public changeTemplate() {
    if (this.grid1.paginationTemplate === this.remotePager) {
        this.grid1.paginationTemplate = this.secondPagerTemplate;
        this.setNumberOfPagingItems(this.page, this.totalPages);
    } else {
        this.pages = [];
        this.grid1.paginationTemplate = this.remotePager;
    }
    this.grid1.cdr.detectChanges();
}
```
}

After all the changes above, the following result will be achieved.

#### Remote Paging Demo

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
