---
title: 그리드 페이징
_description: Ignite UI for Angular 데이터 그리드 컨트롤은 신속하며, 계층 및 목록 보기를 포함하여 널리 사용되는 기능으로 풍부한 터치 반응 데이터 그리드를 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 페이징, 페이지 매김, 페이지
_language: kr
---

### 그리드 페이징

Ignite UI for Angular에서 **Paging**은 루트 `igx-grid` 컴포넌트에서 초기화되며 [`paging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#paging) 및 [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) 입력을 통해 구성할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

페이징은 해당 기능이 사용되는지 여부를 제어하는 불 속성이며 [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) 속성은 페이지당 표시할 수 있는 레코드를 제어합니다. 페이징을 활성화하기 위해 그리드를 업데이트합니다:

```html
<igx-grid #grid1 [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager" height="500px" width="100%" displayDensity="cosy"></igx-grid>
```

페이징 영역은 초기화 중에 템플릿 참조가 그리드에 전달되는 경우 사용자가 템플릿화를 할 수 있습니다. 아래 예제는 페이징이 입력을 통해 제어되는 템플릿입니다.

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

[`paginate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#nextpage) 메소드를 사용하여 페이징은 Grid API를 사용해 프로그래밍 방식으로도 실행할 수 있습니다:

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

### 원격 데이터

페이징은 원격 데이터에서도 작동할 수 있습니다.

먼저 서비스를 선언하여 데이터 가져오기를 실행합니다.
페이지 수를 계산하기 위해 모든 데이터 항목 수가 필요하며 이 논리를 서비스에 추가할 것입니다.

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
서비스를 선언 한 후에는 그리드 생성 및 데이터 서브스크립션을 위한 컴포넌트를 작성해야 합니다.

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
요청된 페이지에 대한 데이터만 가져오고 선택된 페이지 및 항목 [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage)에 따라 정확한 `skip` 및 `top` 매개 변수를 원격 서비스에 전달하려면 사용자 호출 템플릿을 생성해야 합니다.
또한, 호출 버튼의 비활성화 및 활성화도 관리해야 합니다.

```html
<ng-template #customPager>
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
    <button [disabled]="lastPage" (click)="paginate(totalPages - 1, false)" igxButton="icon" igxRipple igxRippleCentered="true">
        <igx-icon fontSet="material">last_page</igx-icon>
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
마지막 단계는 그리드의 템플릿을 선언하는 것입니다.

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

상기의 모든 변경 후 다음과 같은 결과가 됩니다.

#### 데모

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-remote-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-remote-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
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

### API
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator Styles]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
