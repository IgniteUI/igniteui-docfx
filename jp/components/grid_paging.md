---
title: グリッドのページング
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, ページング, ページング機能, ページ
_language: ja
---

### グリッドのページング

Ignite UI for Angular で、**ページング**がルート `igx-grid` コンポーネントで初期化され、[`paging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#paging) および [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) 入力によって構成できます。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

機能が有効かどうかを制御する paging は Boolean プロパティです。[`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) プロパティはページごとに表示可能なレコードを制御します。以下のようにグリッドでページングを有効にします。

```html
<igx-grid #grid1 [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager" height="500px" width="100%" displayDensity="cosy"></igx-grid>
```

ページング領域でテンプレート化がサポートされますが、初期化でテンプレート参照をグリッドに渡す必要があります。以下は、ページングが入力によって制御されるテンプレートの例です。

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

### リモート データ

ページングはリモート データで処理することもできます。

はじめにデータをフェッチして現在のページ データのみを返すサービスを宣言します。
ページ カウントを計算するためにすべてのデータのカウントをサービスに追加する必要があります。

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
サービスの宣言後、グリッド構成とデータ サブスクリプションのためのコンポーネントを作成します。

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
要求されたページのデータのみを取得し、選択したページと`ページごとの項目`に基づいて `skip` と `top` パラメーターをリモート サービスに渡すためのカスタム ページャー テンプレートを作成します。
更にページ ボタンの有効化および無効化も設定します。

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
最後にグリッドのテンプレートを宣言します。

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

すべての設定を完了すると以下のような結果になります。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-remote-paging-sample-iframe" src='{environment:demosBaseUrl}/grid-remote-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### API
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
