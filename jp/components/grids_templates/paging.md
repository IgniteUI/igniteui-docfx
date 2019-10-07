---
title: Angular Grid ソート|テンプレート |Ignite UI for Angular |Infragistics
_description: Angular ページネーションを設定し、Ignite UI を使用して Angular Material テーブルにカスタム ページを作成し、要求されたページのデータをさまざまな Angular イベントで取得します。
_keywords: angular pagination, igniteui for angular, infragistics
_language: ja
---

### @@igComponent ページング

@@igComponent のページングは、[`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) と [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) で設定できます。その他の Angular Material テーブルと同様に、@@igComponent のページングはカスタム ページのテンプレートをサポートします。
#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-paging-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}


[`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) は機能が有効かどうかを制御する Boolean プロパティです。[`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) プロパティはページごとに表示レコードを制御します。以下のように @@igComponent でページングを有効にします。

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" [perPage]="10" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```
### ページング テンプレート
ページング領域でテンプレート化がサポートされますが、初期化でテンプレート参照を @@igComponent に渡す必要があります。以下は、ページングが入力によって制御されるテンプレートの例です。

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

ページングはコードで @@igComponent API を使用して設定できます。[`paginate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paginate)、[`previousPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#previouspage)、[`nextPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#nextpage) メソッド:

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

### リモート データ

ページングはリモート データで処理することもできます。

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
はじめにデータ フェッチングを行うサービスを宣言します。
ページ カウントを計算するためにすべてのデータ項目のカウントをが必要なため、ロジックをサービスに追加する必要があります。
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
サービスを宣言した後にコンポーネントを作成する必要があり、@@igComponent コンストラクションとデータ サブスクリプションを処理します。
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

このサンプルでは、​​子レコードがいくつあっても、ページごとに一定数のルート レコードを表示する方法を示します。レベル (root または child) に関係なく一定数のレコードを表示するビルトインの Tree Grid ページング アルゴリズムをキャンセルするには、[`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) プロパティを `Number.MAX_SAFE_INTEGER` に設定してください。

```html
<igx-tree-grid #treeGrid ...
               [paging]="true" [perPage]="maxPerPage">
```
```typescript
public maxPerPage = Number.MAX_SAFE_INTEGER;
```
}
要求されたページのデータのみを取得し、選択したページと項目 [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) に基づいて `skip` と `top` パラメーターをリモート サービスに渡すためのカスタム ページャー テンプレートを作成します。
ページ ボタンの有効化および無効化も設定します。

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
最後にグリッドのテンプレートを宣言します。
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
これでサンプルを実行できます。またパージング テンプレートをランタイムで変更するオプションを追加してサンプルを更に拡張できます。以下は、実装方法です。はじめにテンプレートにもう 1 つページング テンプレートを追加します。

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

次にその他のロジックを使用してすでに作成したメソッドを拡張します。

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
最後にランタイムでユーザーがページャー テンプレートを変更するためのボタンを追加します。

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

上記すべての設定を完了すると以下のような結果になります。

#### デモ
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-remote-paging-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
### グループ化によるページング

ページングとグループ化の統合については、[グループ化](groupby.html#ページングによるグループ化)のトピックで説明しています。
}

### ページネータ コンポーネント
8.1.0 リリースでは、新しいコンポーネント `igx-paginator` が導入されました。このコンポーネントは、現在のページャーを置き換え、スタンドアロン コンポーネントとしても使用できます。
`igx-paginator` は、ページングを詳細なカスタマイズが可能な入力プロパティを公開します。

| 入力           |      説明                           | 
|-----------------|:------------------------------------------:|
| displayDensity  | 改ページの表示密度を設定します。 |
| dropdownEnabled | 有効状態をドロップダウンに設定します。 |
| dropdownHidden  | 非表示状態をドロップダウンに設定します。 |
| page            | 現在のページを設定します。 |
| pagerEnabled    | 有効状態をページャーに設定します。 |
| pagerHidden     | 非表示状態をページャーに設定します。 |
| perPage         | ページごとに表示される項目数を設定します。 |
| selectLabel     | 選択コンポーネントの前にテキストを設定します。デフォルトは'ページごとの項目'です。 |
| selectOptions   | ページごとの項目のカスタム オプションを設定します。 |
| totalRecords    | 合計レコード数を設定します。 |

#### 使用方法
以下の例では、`igx-paginator` コンポーネントは `igx-grid` コンポーネントとともに使用されますが、ページング機能が必要な場合は、他のコンポーネントとともに使用できます。

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

#### デモ
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-pager-sample-iframe" class="lazyload" src='{environment:demosBaseUrl}/grid/grid-pager-sample' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

<div class="divider--half"></div>

### スタイル設定

ページネータのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在するイ`ンデックス` ファイルをインポートする必要があります。

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法で [`igx-grid-paginator-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme) を拡張し`$text-color`、`$background-color` および `$border-color` パラメータを受け入れる新しいテーマを作成します。

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

`igx-grid-paginator-theme` はページング コンテナの色の制御のみですが、ポケットベル UI のボタンには影響しません。これらのボタンにスタイル設定するために、新しいボタン テーマを作成しましょう。

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

この例では、アイコンの色と背景、ボタンの無効な色のみを変更しましたが、igx-button-themeではボタン スタイルを制御するためのパラメータを増やすことができます。

最後のステップは、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
@include igx-grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include igx-button($dark-button);
}
```

>[!NOTE]
>igx-button mixins を `.igx-grid-paginator__pager` 内でスコープして、ページネータ ボタンのみにスタイルが設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 >[!NOTE]
 >コンポーネントが[`エミュレート`](../themes/component-themes.md#表示のカプセル化)された ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を貫通する必要があります。

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

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

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
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/palette.md)のトピックを参照してください。

#### スキーマの使用

テーマ エンジンには [**スキーマ**](../themes/schemas.md)を使用できる利点があり、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用するための方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (この場合は ([`dark-grid-pagination`]({environment:sassApiUrl}/index.html#variable-_dark-grid-pagination) と [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) スキーマ) の 1 つを拡張します。 

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

カスタム スキーマを適用するには、グローバル ([`軽量`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`暗色`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加する方法です。

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

テーマを上記と同じ方法で含める必要があることに注意してください。

@@if (igxName === 'IgxGrid'){

#### デモ

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-grid-paging-style-iframe" data-src='{environment:demosBaseUrl}/grid/custom-grid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
#### デモ

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-hGrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>  
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-hGrid-paging-style-iframe" 
        data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く
    </button>
</div>
}

@@if (igxName === 'IgxTreeGrid'){
#### デモ

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-treegrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-paging-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>  
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-treegrid-paging-style-iframe" 
        data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く
    </button>
</div>
}


### API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
