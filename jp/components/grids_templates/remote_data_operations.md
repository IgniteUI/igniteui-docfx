@@if (igxName === 'IgxGrid') {
---
title: Angular リモート データ操作 | Angular Grid リモート データ操作 | Ignite UI for Angular | インフラジスティックス
_description: リモート フィルタリング、リモート並べ替え、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angular Material テーブルのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular リモート データ操作 | Angular Tree Grid リモート データ操作 | Ignite UI for Angular | インフラジスティックス
_description: リモート フィルタリング、リモート並べ替え、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angular Material テーブルのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular リモート データ操作 | Angular Hierarchical Grid リモート データ操作 | Ignite UI for Angular | インフラジスティックス
_description: リモート フィルタリング、リモート並べ替え、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angular Material テーブルのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}

### @@igComponent リモート データ操作の概要

Ignite UI for Angular @@igComponent は、リモート仮想化、リモート並べ替え、リモート フィルタリングなどのリモート データ操作をサポートします。これにより、開発者はこれらのタスクをサーバー上で実行し、生成されたデータを取得して @@igComponent に表示できます。

@@if (igxName === 'IgxGrid') {
#### デモ

<div class="sample-container loading" style="height:500px">
    <iframe id="grid-remote-scenarios-iframe" src='{environment:demosBaseUrl}/grid/grid-remote-filtering' width="100%" height="100%" seamless frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-scenarios-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
#### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-remotefiltering-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-filtering' width="100%" height="100%" seamless frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-remotefiltering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
}

デフォルトで、@@igComponent は独自のロジックを使用してデータ操作を実行します。これらのタスクをリモートで実行し、@@igComponent で公開される特定の入力とイベントを使用して @@igComponent に結果のデータを供給できます。

@@if (igxName === 'IgxGrid') {
### リモート仮想化

[@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は、データ チャンクがリモート サービスから要求されるシナリオをサポートし、内部で使用される [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) ディレクティブで実装された動作を公開します。

この機能を使用するには、[`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) 出力にサブスクライブし、取得した引数に基づいて適切な要求を行い、パブリック [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) プロパティ [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount) とサービスの各情報を設定します。

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

データを要求時、[`startIndex`]({environment:angularApiUrl}/interfaces/iforofstate.html#startindex) と [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize) プロパティを提供する [`IForOfState`]({environment:angularApiUrl}/interfaces/iforofstate.html) インターフェイスを使用する必要があります。

>[!NOTE]
>最初の [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize) は常に 0 で、特定のアプリケーション シナリオに基づいて設定する必要があります。

#### リモート仮想化のデモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### リモート並べ替え/フィルタリング

リモート並べ替えとフィルタリングには、取得した引数に基づいて適切な要求を実行するために [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload)、[`sortingExpressionsChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressionschange) および [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstreechange) 出力にサブスクライブし、サービスから送信される相対する情報とパブリック [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount) プロパティを設定する必要があります。

また、**rxjs** `debounceTime` 関数を使用します。この関数は、特定の期間の経過後、別のソースが出力されない場合にのみ、Observable のソースから値を出力します。この方法では、ユーザーが中断することなく指定された時間が経過した場合にのみ、リモート操作がトリガーされます。

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

リモート並べ替えとフィルタリングが提供される場合、グリッドの組み込みの並べ替えとフィルタリングは必要ありません。グリッドの [`sortStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortstrategy) および [`filterStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterstrategy) 入力をそれぞれのインスタンスの `NoopSortingStrategy` および `NoopFilteringStrategy` に設定して、無効にできます。

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
>リモー トデータが要求された場合、フィルタリング操作が大文字と小文字を区別します。

#### リモート並べ替え/フィルタリングのデモ

このトピックのはじめにあるコードの結果は、[デモ](#デモ)で確認できます。
}
@@if (igxName === 'IgxTreeGrid') {
### リモート フィルタリング

リモート フィルタリングを提供するには、受け取った引数に基づいて適切な要求を行うように [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstreechange) 出力にサブスクライブする必要があります。[`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) と [`foreignKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#foreignkey) を提供して、ツリー グリッドのデータ ソースとしてフラット コレクションを使用します。

また、**rxjs** `debounceTime` 関数を使用します。この関数は、特定の期間の経過後、別のソースが出力されない場合にのみ、Observable のソースから値を出力します。この方法では、ユーザーが中断することなく指定された時間が経過した場合にのみ、リモート操作がトリガーされます。

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

リモート フィルタリングが提供される場合、ツリー グリッドの組み込みのフィルタリングは必要ありません。ツリー グリッドの [`filterStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterstrategy) 入力を `NoopFilteringStrategy` インスタンスに設定して、無効にできます。

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

リモート フィルタリングは、フラット コレクションで直接実行する必要があります。また、親がフィルターに一致するかどうかにかかわらず、フィルター条件に一致するすべてのレコードにすべての親を含める必要があります (階層をそのままにするためにこれを行います)。結果は以下で確認できます。

>[!NOTE]
>リモー トデータが要求された場合、フィルタリング操作が大文字と小文字を区別します。

#### リモート フィルタリングのデモ

このトピックのはじめにあるコードの結果は、[デモ](#デモ)で確認できます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
### 一意の列値ストラテジ
}

@@if (igxName !== 'IgxHierarchicalGrid') {
#### 一意の列値ストラテジ
}

Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。@@igComponent は、デフォルトでデータソースに基づいてこれらの値を生成します。リモート フィルタリングの場合、グリッドのデータにはサーバーからのすべてのデータが含まれていません。これらの一意の値を手動で提供し、オンデマンドで読み込むために、@@igComponent の [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) 入力を利用できます。この入力は、実際には 3 つの引数を提供するメソッドです。
- **column**  - フィルタリング式ツリー。各列に基づいて削減されます。
- **filteringExpressionsTree** - フィルタリング式ツリー。各列に基づいて削減されます。
- **done** - 
サーバーから取得されたときに、新しく生成された列値で呼び出されるコールバック。

開発者は、**列**と **filteringExpressionsTree** 引数によって提供される情報に基づいて、必要な一意の列値を手動で生成し、**done** コールバックを呼び出すことができます。

> [!NOTE]
> [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) 入力が提供される場合、Excel スタイル フィルタリングでプロセスを生成するデフォルトの一意の値は使用されません。

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

#### 一意の列値ストラテジのデモ

<div class="sample-container loading" style="height:800px">
    <iframe id="grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
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

<div class="sample-container loading" style="height:800px">
    <iframe id="tree-grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
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

<div class="sample-container loading" style="height:800px">
    <iframe id="hierarchical-grid-esf-load-on-demand-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-esf-load-on-demand-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

Excel スタイル フィルタリングのカスタム ロード テンプレートを提供するには、`igxExcelStyleLoading` ディレクティブを使用できます。

```html
<@@igSelector [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template>
</@@igSelector>
```

<div class="divider--half"></div>

### リモート ページング


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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

### API リファレンス
<div class="divider--half"></div>

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [ページング](paging.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
