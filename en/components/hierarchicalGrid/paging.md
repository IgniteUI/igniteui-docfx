---
title: Hierarchical Grid Paging
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Paging, Pagination, Page
---

### Hierarchical Grid Paging

In Ignite UI for Angular Hierarchical Grid, **Paging** is initialized on the root `igx-hierarchical-grid` component and is configurable via the [`paging`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#paging) and [`perPage`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#perpage) inputs.

#### Demo




<div class="sample-container loading" style="height:550px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>



Paging is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#perpage) property controls the visible records per page. Let’s update our Hierarchical Grid to enable paging:

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager" height="500px" width="100%" displayDensity="cosy">
</igx-hierarchical-grid>
```

The paging area supports templating by the user, if a template reference is passed to the Hierarchical Grid during initialization. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Current page: {{ hierarchicalGrid.page }}
    <input type="number" [ngModel]="grid.page" (onModelChange)="hierarchicalGrid.paginate($event)" />
    Total pages: {{ hierarchicalGrid.totalPages }}
</ng-template>

<igx-hierarchical-grid [paging]="true" [paginationTemplate]="myTemplate">
    ...
</igx-hierarchical-grid>
```

Paging can also be done programmatically through the Hierarchical Grid API, using the [`paginate`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#nextpage) methods:

```typescript
// Go to page 6
this.hierarchicalGrid.paginate(5);

// Go to previous/next page
this.hierarchicalGrid.previousPage();
this.hierarchicalGrid.nextPage();

// Check for first/last page
this.hierarchicalGrid.isFirstPage;
this.hierarchicalGrid.isLastPage;

// Get the number of pages
this.hierarchicalGrid.totalPages;

// Change the number of records per page
this.hierarchicalGrid.perPage = 25;

// Enables/disables paging
this.hierarchicalGrid.paging = false;
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
After declaring the service, we need to create a component, which will be responsible for the Hierarchical Grid construction and data subscription.


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

We need to create a custom pager template to get the data only for the requested page and to pass the correct `skip` and `top` parameters to the remote service according to the selected page and items [`perPage`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#perpage).
We also need to take care of the disabling and enabling of the pager buttons.



```html
    <ng-template #customPager let-api>
        <button [disabled]="firstPage" (click)="paginate(0, false)" igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon fontSet="material">first_page</igx-icon>
        </button>
        <button [disabled]="firstPage" (click)="previousPage()" igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon fontSet="material">chevron_left</igx-icon>
        </button>
        <span>{{ page + 1 }} of {{totalPages}}</span>
        <button [disabled]="lastPage" (click)="nextPage()" igxRipple igxRippleCentered="true" igxButton="icon">
            <igx-icon fontSet="material">chevron_right</igx-icon>
        </button>
        <button [disabled]="lastPage" (click)="paginate(totalPages - 1, false)" igxButton="icon" igxRipple
            igxRippleCentered="true">
            <igx-icon fontSet="material">last_page</igx-icon>
        </button>
        <select style="margin-left: 1rem;" (change)="parseToInt($event.target.value);">
            <option [value]="val" [selected]="perPage == val" *ngFor="let val of [5, 10, 15, 20]">{{ val
                }}</option>
        </select>
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

The last step will be to declare our template for the gird.


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

This is absolutely enough if we want up and running sample. But we can extend this sample even more by adding an option to change our paging template run time. Let's see how we can achieve that. First we will start by adding one more paging template in our template:

```html
<ng-template #secCustomPager let-api>
    <button [disabled]="firstPage" (click)="previousPage()" igxButton="flat" igxButtonColor="#09f">
        PREV
    </button>
    <span *ngIf="shouldShowFirstPage" (click)="paginate(0, false)"><a class="pageNavLinks" [routerLink]=''>{{1}}</a> ...</span>
    <span *ngFor="let item of pages" (click)="paginate(item, false)">
        <a class="pageNavLinks {{activePage(item)}}" [routerLink]=''>{{item + 1}}</a>
    </span>
    <span *ngIf="shouldShowLastPage" (click)="paginate(totalPages - 1, false)">... <a class="pageNavLinks" [routerLink]=''>{{ totalPages }}</a></span>
    <button [disabled]="lastPage" (click)="nextPage()"  igxButton="flat" igxButtonColor="#09f">
        NEXT
    </button>
</ng-template>
```

After that we need to extend the methods that we have already created with some additional logic:

```typescript
// same applies and for the methods previousPage() and paginate(page: number, recalc: true)
public nextPage() {
    ...
    if (this.grid1.paginationTemplate === this.secondPagerTemplate) {
        this.setNumberOfPagingItems(this.page, this.totalPages);
    }
}
// creates array with the visible page numbers where the user can navigate according the current page and the total page number
public setNumberOfPagingItems(currentPage, totalPages) {
    ....
}
```
And finally we need to add a button which allows the user to change the pager template run time:

```html
    <button (click)="changeTemplate()" class='changeBtn' igxButton="flat" igxButtonColor="#09f" igxButtonBackground="#dadada"> Change Paging Template</button>
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

After all the changes above, the following result will be achieved.

#### Demo


<div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-remote-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


If you want your sample to look exactly like this one do not forget to apply the custom paging theme:

```css
@import '~igniteui-angular/lib/core/styles/themes/index';

@include igx-core();
@include igx-theme($default-palette, $legacy-support: true);


$custom-paginator-theme: igx-grid-paginator-theme(
    $text-color: #09f
);
$custom-button-theme: igx-button-theme(
    $icon-color: #09f,
    $icon-hover-color: #dadada,
    $icon-focus-color:rgb(0, 119, 255),
    $icon-focus-background: #aeaeae
  );

.customPager {
    @include igx-grid-paginator($custom-paginator-theme);
    @include igx-button($custom-button-theme);
}
```

### API References
* [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator Styles]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)

### Additional Resources
<div class="divider--half"></div>

* [Hierarchical Grid overview](hierarchical_grid.md)
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
