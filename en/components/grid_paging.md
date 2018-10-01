---
title: Grid paging
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Paging, Pagination, Page
---

### Grid Paging

In Ignite UI for Angular, **Paging** is initialized on the root `igx-grid` component and is configurable via the [`paging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#paging) and [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) inputs.

#### Demo

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

Paging is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) property controls the visible records per page. Let’s update our grid to enable paging:

```html
<igx-grid #grid1 [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager" height="500px" width="100%" displayDensity="cosy"></igx-grid>
```

The paging area supports templating by the user, if a template reference is passed to the grid during initialization. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Current page: {{ grid.page }}
    <input type="number" [ngModel]="grid.page" (onModelChange)="grid.paginate($event)" />
    Total pages: {{ grid.totalPages }}
</ng-template>

<igx-grid paging="true" [paginationTemplate]="myTemplate">
    ...
</igx-grid>
```

Paging can also be done programmatically through the Grid API, using the [`paginate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#nextpage) methods:

```typescript
// Go to page 6
this.grid.paginate(5);

// Go to previous/next page
this.grid.previousPage();
this.grid.nextPage();

// Check for first/last page
this.grid.isFirstPage;
this.grid.isLastPage;

// Get the number of pages
this.grid.totalPages;

// Change the number of records per page
this.grid.perPage = 25;

// Enables/disables paging
this.grid.paging = false;
```

### Remote Data

Paging could also operate with remote data.

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
After declaring the service, we need to create a component, which will be responsible for the grid construction and data subscription.

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
We need to create a custom pager template to get the data only for the requested page and to pass the correct `skip` and `top` parameters to the remote service according to the selected page and items [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage).
We also need to take care of the disabling and enabling of the pager buttons.

```html
<ng-template #customPager>
    <button [disabled]="firstPage" (click)="paginate(0, false)" igxButton="icon" igxRipple igxRippleCentered="true">
        <igx-icon fontSet="material" name="first_page"></igx-icon>
    </button>
    <button [disabled]="firstPage" (click)="previousPage()" igxButton="icon" igxRipple igxRippleCentered="true">
        <igx-icon fontSet="material" name="chevron_left"></igx-icon>
    </button>
    <span>{{ page + 1 }} of {{totalPages}}</span>
    <button [disabled]="lastPage" (click)="nextPage()" igxRipple igxRippleCentered="true" igxButton="icon">
        <igx-icon fontSet="material" name="chevron_right"></igx-icon>
    </button>
    <button [disabled]="lastPage" (click)="paginate(totalPages - 1, false)" igxButton="icon" igxRipple igxRippleCentered="true">
        <igx-icon fontSet="material" name="last_page"></igx-icon>
    </button>
    <select style="margin-left: 1rem;" (change)="perPage = parseToInt($event.target.value);">
        <option [value]="val" [selected]="perPage == val" *ngFor="let val of [5, 10, 15, 25, 50, 100, 500]">{{ val }}</option>
    </select>
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
    this.grid1.paginationTemplate = this.remotePager;
}

```
The last step will be to declare our template for the gird.

```html
<igx-grid #grid1 [data]="data | async" width="960px" height="550px" [paging]="true" [perPage]="perPage">
    <igx-column field="ID"></igx-column>
    <igx-column field="ProductName"></igx-column>
    <igx-column field="QuantityPerUnit"></igx-column>
    <igx-column field="SupplierName"></igx-column>
    <igx-column field="UnitsInStock"></igx-column>
    <igx-column field="Rating"></igx-column>
</igx-grid>
```

After all the changes above, the following result will be achieved.

#### Demo

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-remote-paging-sample-iframe" src='{environment:demosBaseUrl}/grid-remote-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Moving](grid_column_moving.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
