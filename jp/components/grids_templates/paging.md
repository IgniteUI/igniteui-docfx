@@if (igxName === 'IgxGrid') {
---
title: グリッドのページング機能
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, ページング, 改ページ位置の自動修正, Data Grid ページング, Data Table ページング
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid ページング
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブ、データリッチなツリー データ グリッドで階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネントs スイート, Native Angular コントロール, Native Angular コンポーネントs Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid control, Angular Data Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Paging, Pagination, Tree Grid Paging, Tree Table Paging
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid ページング
_description: Ignite UI for Angular Hierarchical Grid コントロールは、高速でタッチ レスポンシブが有効なデータ リッチなツリーグリッドです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネントs スイート, Native Angular コントロール, Native Angular コンポーネントs Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Paging, Pagination, Hierarchical Grid Paging, Hierarchical Table Paging
_language: ja
---
}

### @@igComponent ページング

In Ignite UI for Angular @@igComponent では、**Paging** がルート `@@igSelector` コンポーネントで初期化されて、[`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) と [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) 入力で設定できます。

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
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}


Paging は機能が有効かどうかを制御する Boolean プロパティです。[`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) プロパティはページごとに表示レコードを制御します。以下のように @@igComponent でページングを有効にします。

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```

ページング領域でテンプレート化がサポートされますが、初期化でテンプレート参照を @@igComponent に渡す必要があります。以下は、ページングが入力によって制御されるテンプレートの例です。

```html
<ng-template #myTemplate let-grid>
    Current page: {{ @@igObjectRef.page }}
    <input type="number" [ngModel]="grid.page" (onModelChange)="@@igObjectRef.paginate($event)" />
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

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
### リモート データ

ページングはリモート データで処理することもできます。

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
要求されたページのデータのみを取得し、選択したページと項目 [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) に基づいて `skip` と `top` パラメーターをリモート サービスに渡すためのカスタム ページャー テンプレートを作成します。
ページ ボタンの有効化および無効化も設定します。

@@if (igxName === 'IgxGrid') {
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
    this.@@igObjectRef.paginationTemplate = this.remotePager;
}

```
}
@@if (igxName === 'IgxHierarchicalGrid') {
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
これでサンプルを実行できます。またパージング テンプレートをランタイムで変更するオプションを追加してサンプルを更に拡張できます。以下は、実装方法です。はじめにテンプレートにもう 1 つページング テンプレートを追加します。

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

上記すべての設定を完了すると以下のような結果になります。

#### デモ
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-remote-paging-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

このサンプルのルックアンドフィール再現するにはカスタム ページング テーマを適用してください。

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
}

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

The paginator UI also contains buttons, so a new button theme needs to be created too:

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

In this example we only changed the icon color and background and the button disabled color, but the the [`igx-button-theme`](({environment:sassApiUrl}/index.html#function-igx-button-theme)) provides way more paramaters to control the button style.

The last step is to **include** the component mixins, each with its respective theme: 

```scss
@include igx-grid-paginator($dark-grid-paginator);
.igx-paginator {
    @include igx-button($dark-button);
}
```

>[!NOTE]
>We include the **igx-button** mixin within the scope of the `igx-paginator`, so that only the paginator buttons could be styled. Otherwise other buttons in the grid would be affected too.

 >[!NOTE]
 >Depending on the component [**View Encapsulation**](../themes/component-themes.md#view-encapsulation) strategy, it may be necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-grid-paginator($dark-grid-paginator);
        .igx-paginator {
            @include igx-button($dark-button);
        }
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.

**igx-palette** generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with **igx-color**({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the pallete. 

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
>The igx-color and igx-palette are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

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

#### Demo

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-grid-paging-style-iframe" src='{environment:demosBaseUrl}/grid/custom-grid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
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
