---
title: Angular Grid Pagination | Template | Ignite UI for Angular | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular Material table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
---

### @@igComponent Paging Functionality
Angular pagination in the @@igComponent is configurable via the [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) and [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) inputs. As in any Angular Material table, the pagination in @@igComponent supports template for custom pages.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-paging-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

The [`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) input is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) property controls the visible records per page. Let’s update our @@igComponent to enable paging:

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" [perPage]="10" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```

### Pagination Templating
The paging area supports templating by the user, if a template reference is passed to the @@igComponent during initialization. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Current page: {{ @@igObjectRef.page }}
    <input type="number" [(ngModel)]="grid.page" />
    Total pages: {{ @@igObjectRef.totalPages }}
</ng-template>

<@@igSelector [paging]="true" [paginationTemplate]="myTemplate">
    ...
</@@igSelector>
```

Paging can also be done programmatically through the @@igComponent API, using the [`paginate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#nextpage) methods:

```typescript
// Go to page 6
this.@@igObjectRef.paginate(5);

// Go to previous/next page
this.@@igObjectRef.previousPage();
this.@@igObjectRef.nextPage();

// Check for first/last page
this.@@igObjectRef.isFirstPage;
this.@@igObjectRef.isLastPage;

// Get the number of pages
this.@@igObjectRef.totalPages;

// Change the number of records per page
this.@@igObjectRef.perPage = 25;

// Enables/disables paging
this.@@igObjectRef.paging = false;
```

### Remote Data

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

#### Demo
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-remote-paging-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
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

@@if (igxName === 'IgxGrid') {
### Paging with Group By

Integration between Paging and Group By is described in the [Group By](groupby.html#group-by-with-paging) topic.
}

### Paginator Component
A new component `igx-paginator` is introduced with 8.1.0 release. This component replaces the current pager and can be used as a standalone component as well.
The `igx-paginator` exposes a couple of input properties that enable further customization of the paging.

| Input           |      Description                           | 
|-----------------|:------------------------------------------:|
| displayDensity  | Sets the display density of the paginator. |
| dropdownEnabled | Sets the enabled state to the drop-down. |
| dropdownHidden  | Sets the hidden state to the drop-down. |
| page            | Sets the current page. |
| pagerEnabled    | Sets the enabled state to the pager. |
| pagerHidden     | Sets the hidden state to the pager. |
| perPage         | Sets the number of visible items per page. |
| selectLabel     | Sets the text before the select component. Default is 'Items per page' |
| selectOptions   | Sets custom options for items per page. |
| totalRecords    | Sets the total records count. |

#### Usage
The `igx-paginator` component is used along with the `igx-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
...
</igx-grid>

<ng-template #pager>
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="grid.perPage"
            [dropdownHidden]="isDropdownHidden" [pagerHidden]="isPagerHidden" [selectLabel]="'Records per page:'"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</ng-template>
```

#### Demo
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-pager-sample-iframe" class="lazyload" src='{environment:demosBaseUrl}/grid/grid-pager-sample' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Styling

To get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-grid-paginator-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

As seen, the `igx-grid-paginator-theme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new button theme:

```scss
$dark-button: igx-button-theme(
    $icon-color: #FFCD0F,
    $icon-hover-color: #292826,
    $icon-hover-background: #FFCD0F,
    $icon-focus-color: #292826,
    $icon-focus-background: #FFCD0F,
    $disabled-color: #16130C
);
```

In this example we only changed the icon color and background and the button disabled color, but the the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) provides way more parameters to control the button style.

The last step is to **include** the component mixins, each with its respective theme: 

```scss
@include igx-grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include igx-button($dark-button);
}
```

>[!NOTE]
>We scope the **igx-button** mixin within `.igx-grid-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other buttons in the grid would be affected too.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-grid-paginator($dark-grid-paginator);
        .igx-grid-paginator__pager {
            @include igx-button($dark-button);
        }
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the pallette. 

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $palette: $dark-palette,
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background-color: igx-color($dark-palette, "primary", 200),
    $border-color:  igx-color($dark-palette, "primary", 500)
);

$dark-button: igx-button-theme(
    $palette: $dark-palette,
    $icon-color: igx-color($dark-palette, "secondary", 700),
    $icon-hover-color: igx-color($dark-palette, "primary", 500),
    $icon-hover-background: igx-color($dark-palette, "secondary", 500),
    $icon-focus-color: igx-color($dark-palette, "primary", 500),
    $icon-focus-background: igx-color($dark-palette, "secondary", 500),
    $disabled-color: igx-color($dark-palette, "primary", 700)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

 Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-grid-pagination`]({environment:sassApiUrl}/index.html#variable-_dark-grid-pagination) and [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) schemas: 

```scss
// Extending the dark paginator schema
$dark-grid-paginator-schema: extend($_dark-grid-pagination,
        (
            text-color:(
                igx-color: ("secondary", 400)
            ),
            background-color:(
                igx-color: ("primary", 200)
            ),
            border-color:(
                igx-color:( "primary", 500)
            )
        )
);
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
        (
            icon-color:(
                igx-color:("secondary", 700)
            ),
            icon-hover-color:(
                igx-color:("primary", 500)
            ),
            icon-hover-background:(
                igx-color:("secondary", 500)
            ),
            icon-focus-color:(
                igx-color:("primary", 500)
            ),
            icon-focus-background:(
                igx-color:("secondary", 500)
            ),
            disabled-color:(
                igx-color:("primary", 700)
            )
        )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-grid-paginator: $dark-grid-paginator-schema,
    igx-button: $dark-button-schema
));

// Defining grid-paginator-theme with the global dark schema
$dark-grid-paginator: igx-grid-paginator-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$dark-button: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.
@@if (igxName === 'IgxGrid'){
#### Demo

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-grid-paging-style-iframe" data-src='{environment:demosBaseUrl}/grid/custom-grid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
#### Demo
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-hGrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>  
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-hGrid-paging-style-iframe" 
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
#### Demo
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-treegrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>  
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-treegrid-paging-style-iframe" 
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}

### API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator Styles]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
