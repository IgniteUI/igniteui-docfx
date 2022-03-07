@@if (igxName === 'IgxGrid') {
---
title: Angular リモート データ操作 | Angular Grid リモート データ操作 | Ignite UI for Angular | インフラジスティックス
_description: リモート フィルタリング、リモート ソート、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angular Material テーブルのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular リモート データ操作 | Angular Tree Grid リモート データ操作 | Ignite UI for Angular | インフラジスティックス
_description: リモート フィルタリング、リモート ソート、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angular Material テーブルのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular リモート データ操作 | Angular Hierarchical Grid リモート データ操作 | Ignite UI for Angular | インフラジスティックス
_description: リモート フィルタリング、リモート ソート、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angular Material テーブルのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}

# @@igComponent リモート データ操作の概要

Ignite UI for Angular @@igComponent は、リモート仮想化、リモート ソート、リモート フィルタリングなどのリモート データ操作をサポートします。これにより、開発者はこれらのタスクをサーバー上で実行し、生成されたデータを取得して @@igComponent に表示できます。

@@if (igxName === 'IgxGrid') {
## Angular @@igComponent リモート データ操作の例


<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-remote-filtering" alt="Angular @@igComponent リモート データ操作の例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
## Angular @@igComponent リモート データ操作の例


<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-remote-filtering" alt="Angular @@igComponent リモート データ操作の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
}

デフォルトで、@@igComponent は独自のロジックを使用してデータ操作を実行します。
これらのタスクをリモートで実行し、@@igComponent で公開される特定の入力とイベントを使用して @@igComponent に結果のデータを供給できます。

@@if (igxName === 'IgxGrid') {
## リモート仮想化

[@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は、データ チャンクがリモート サービスから要求されるシナリオをサポートし、内部で使用される [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) ディレクティブで実装された動作を公開します。

この機能を使用するには、[`dataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#datapreload) 出力にサブスクライブし、取得した引数に基づいて適切な要求を行い、パブリック [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) プロパティ [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount) とサービスの各情報を設定します。

```html
<igx-grid #grid [data]="remoteData | async" [autoGenerate]="false"
          (dataPreLoad)="processData(false)"
          (sortingDone)="processData(true)">
    <igx-column [field]="'ProductID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency" [sortable]="true"></igx-column>
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this.grid.isLoading = true;

    this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            this.grid.totalItemCount = data['@odata.count'];
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

### リモート仮想化のデモ


<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-4" alt="Angular @@igComponent リモート データ操作の例">
</code-view>



## 無限スクロール

 エンドポイントからデータを分割して取得するシナリオの一般的なデザインは、無限スクロールです。データ グリッドの場合、エンドユーザーが一番下までスクロールすることによってトリガーされたロードデータが連続的に増加します。次の段落では、利用可能な API を使用して、`IgxGrid` で無限スクロールを簡単に実現する方法を説明します。

無限スクロールを実装するには、データを分割してフェッチする必要があります。すでにフェッチされたデータはローカルに保存し、チャンクの長さおよび数を決定する必要があります。また、グリッドで最後に表示されるデータ行インデックスを追跡する必要があります。このように、`startIndex` と `chunkSize` プロパティを使用して、ユーザーが上にスクロールして既にフェッチしたデータを表示するか、下にスクロールしてエンドポイントからさらにデータをフェッチする必要があるかを決定できます。

最初に、データの最初のチャンクをフェッチするために `ngAfterViewInit` ライフサイクル フックを使用します。`totalItemCount` プロパティはグリッドがスクロールバーのサイズを正しく設定できるために重要です。

```typescript
public ngAfterViewInit() {
    this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
        if (request.data) {
            this.grid.totalItemCount = this.page * this.pageSize;
            this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
            this.totalItems = request.data['@odata.count'];
            this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
            this.grid.isLoading = false;
        }
    });
}
```

さらに、`dataPreLoad` 出力にサブスクライブする必要があります。これにより、グリッドが現在ロードされているものではなく、異なるチャンクを表示しようとするときに必要なデータを提供できます。イベント ハンドラーで、ローカルに既にキャッシュされている新しいデータをフェッチするか、データを返すかを決定する必要があります。

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


### 無限スクロールのデモ

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-5" >
</code-view>


## リモート ソート/フィルタリング

リモート ソートとフィルタリングには、取得した引数に基づいて適切な要求を実行するために [`dataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#datapreload)、[`sortingExpressionsChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressionschange) および [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filteringexpressionstreechange) 出力にサブスクライブし、サービスから送信される相対する情報とパブリック [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount) プロパティを設定する必要があります。

また、**rxjs** `debounceTime` 関数を使用します。この関数は、特定の期間の経過後、別のソースが出力されない場合にのみ、Observable のソースから値を出力します。この方法では、ユーザーが中断することなく指定された時間が経過した場合にのみ、リモート操作がトリガーされます。

```typescript
const DEBOUNCE_TIME = 300;
...
public ngAfterViewInit() {
    ...
    this.grid.dataPreLoad.pipe(
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

リモート ソートとフィルタリングが提供される場合、グリッドの組み込みのソートとフィルタリングは必要ありません。グリッドの [`sortStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortstrategy) および [`filterStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterstrategy) 入力をそれぞれのインスタンスの `NoopSortingStrategy` および `NoopFilteringStrategy` に設定して、無効にできます。

```html
<igx-grid #grid [data]="remoteData | async" [autoGenerate]="false"
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

### リモート ソート/フィルタリングのデモ

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

<igx-tree-grid #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID"
               [autoGenerate]="false"
               [filterStrategy]="noopFilterStrategy"
               [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
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

### リモート フィルタリングのデモ

このトピックのはじめにあるコードの結果は、[デモ](#angular-tree-grid-リモート-データ操作の例)で確認できます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
## 一意の列値ストラテジ
}

@@if (igxName !== 'IgxHierarchicalGrid') {
### 一意の列値ストラテジ
}

Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。@@igComponent は、デフォルトでデータソースに基づいてこれらの値を生成します。リモート フィルタリングの場合、グリッドのデータにはサーバーからのすべてのデータが含まれていません。これらの一意の値を手動で提供し、オンデマンドで読み込むために、@@igComponent の [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) 入力を利用できます。この入力は、実際には 3 つの引数を提供するメソッドです。
- **column**  - フィルタリング式ツリー。各列に基づいて削減されます。
- **filteringExpressionsTree** - フィルタリング式ツリー。各列に基づいて削減されます。
- **done** - サーバーから取得されたときに、新しく生成された列値で呼び出されるコールバック。

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

### 一意の列値ストラテジのデモ


<code-view style="height:800px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-load-on-demand" >
</code-view>

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

### 一意の列値ストラテジのデモ


<code-view style="height:800px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand" >
</code-view>

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
    null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));
}

public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                     columnExprTree: IFilteringExpressionsTree,
                                     done: (uniqueValues: any[]) => void) => {
// Get specific column data for the albums of a specific singer.
const parentRowId = (column.grid as any).foreignKey;
this.remoteValuesService.getColumnData(
    parentRowId, 'Albums', column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

### 一意の列値ストラテジのデモ


<code-view style="height:800px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand" >
</code-view>

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

## リモート ページング

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
はじめにデータ フェッチングを行うサービスを宣言します。デフォルトのページング テンプレートを使用する場合、`totalRecords` プロパティを設定する必要があります。それにより、グリッドは合計リモート レコードに基づいて合計ページ番号を計算できます。注: リモート サービスからフェッチ データを実装する必要があります。ページ カウントを計算するためにすべてのデータ項目のカウントをが必要なため、ロジックをサービスに追加する必要があります。

```typescript
@Injectable()
export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = 'https://www.igniteui.com/api/products';

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]) as any;
    }

    public getData(index?: number, perPage?: number): any {
        let qS = '';

        if (perPage) {
            qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        }

        this.http
            .get(`${this.url + qS}`).pipe(
                map((data: any) => data)
            ).subscribe((data) => this.remoteData.next(data));
    }

    public getDataLength(): any {
        return this.http.get(this.url).pipe(
            map((data: any) => data.length)
        );
    }
}
```
サービスを宣言した後にコンポーネントを作成する必要があり、@@igComponent コンストラクションとデータ サブスクリプションを処理します。
@@if (igxName === 'IgxGrid') {
```typescript
export class RemotePagingGridSample implements OnInit, AfterViewInit, OnDestroy {
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
    public data: BehaviorSubject<any> = new BehaviorSubject([]);
    private _dataLengthSubscriber;

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
このサンプルでは、​​子レコードがいくつあっても、ページごとに一定数のルート レコードを表示する方法を示します。レベル (root または child) に関係なく一定数のレコードを表示するビルトインの Tree Grid ページング アルゴリズムをキャンセルするには、[`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) プロパティを `Number.MAX_SAFE_INTEGER` に設定してください。
```html
<igx-tree-grid #treeGrid ...>
        <igx-paginator [perPage]="maxPerPage">
        </igx-paginator>
...
```
```typescript
public maxPerPage = Number.MAX_SAFE_INTEGER;
```
}

これで、独自のカスタム ページング テンプレートを設定するか、`igx-paginator` が提供するデフォルトのテンプレートを使用するかを選択できます。まず、デフォルトのページング テンプレートを使用してリモート ページングを設定するために必要なものを見てみましょう。

### デフォルト テンプレートのリモート ページング

デフォルトのページング テンプレートを使用する場合、[`totalRecords`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#totalRecords) プロパティを設定する必要があります。それにより、グリッドはリモートの合計レコード数に基づいて合計ページ番号を計算できます。リモート ページネーションを実行する場合、グリッドに現在のページのデータのみを渡すため、グリッドは提供されたデータソースのページネーションを試行しません。そのため、[`pagingMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pagingMode) プロパティを *GridPagingMode.remote* に設定する必要があります。リモート サービスからデータをフェッチするために [`pagingDone`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#pagingDone) または [`perPageChange`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPageChange) イベントにサブスクライブする必要があります。イベントが使用されるユース ケースによって異なります。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [isLoading]="isLoading" [pagingMode]="mode">
    <igx-column field="ID"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage"  [totalRecords]="totalCount" 
        (pagingDone)="paginate($event.current)">
    </igx-paginator>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" [pagingMode]="mode">
    <igx-column field="Name"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount" 
        (pagingDone)="paginate($event.current)">
    </igx-paginator>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'CustomerID'" [pagingMode]="mode">
    <igx-column field="CustomerID"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount" 
        (pagingDone)="paginate($event.current)" (perPageChange)="getFirstPage()">
    </igx-paginator>
</igx-hierarchical-grid>
```
}

```typescript
public totalCount = 0;
public data: Observable<any[]>;
public mode = GridPagingMode.remote;
public isLoading = true;
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

private _dataLengthSubscriber;

public set perPage(val: number) {
    this._perPage = val;
    this.paginate(0);
}

public ngOnInit() {
    this.data = this.remoteService.remoteData.asObservable();

    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
        this.totalCount = data;
        this.grid1.isLoading = false;
    });
}

public ngAfterViewInit() {
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}
```

@@if (igxName === 'IgxGrid') {

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/remote-paging-default-template" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-remote-paging-default-template" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/remote-paging-default-template" >
</code-view>

<div class="divider--half"></div>
}

### カスタム igx-paginator-content のリモート ページング

カスタム ページネーター コンテンツを定義するときは、要求されたページのデータのみを取得するようにコンテンツを定義し、選択したページと [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 項目に応じて正しい **skip** および **top** パラメーターをリモート サービスに渡す必要があります。導入された [`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) と [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) とともに、設定例を簡単にするために `<igx-paginator>` を使用します。`igx-page-size` はページごとのドロップダウンとラベルを追加し、`igx-page-nav` はナビゲーション アクション ボタンとラベルを追加します。

@@if (igxName === 'IgxGrid') {
```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(page)]="page" 
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
    [displayDensity]="grid1.displayDensity"
    (pageChange)="paginate($event)"
    (perPageChange)="perPageChange($event)">
    <igx-paginator-content>
	    <igx-page-size></igx-page-size>
        [This is my custom content]
	    <igx-page-nav></igx-page-nav>
    </igx-paginator-content>
</igx-paginator>
```

```typescript
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

private _perPage = 15;
private _dataLengthSubscriber: { unsubscribe: () => void; } | undefined;

constructor(private remoteService: RemotePagingService) { }
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

public perPageChange(perPage: number) {
    const skip = this.page * perPage;
    const top = perPage;

    this.remoteService.getData(skip, top);
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(perPage)]="perPage"
    [(page)]="page"
    [selectOptions]="selectOptions"
    (pageChange)="paginate($event)"
    (perPageChange)="perPageChange($event)">
    <igx-paginator-content>
        <igx-page-size></igx-page-size>
        [This is my custom content]
        <igx-page-nav></igx-page-nav>
    </igx-paginator-content>
</igx-paginator>
```
```typescript
@ViewChild('hierarchicalGrid', { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
...
public ngOnInit(): void {
    this._dataLengthSubscriber = this.remoteService.getDataLength(
        { parentID: null, rootLevel: true, key: 'Customers' }).subscribe((length) => {
            this.totalCount = length;
        });
}

public ngAfterViewInit() {
    this.hierarchicalGrid.isLoading = true;
    this._dataSubscriber = this.remoteService.getData({parentID: null, rootLevel: true, key: 'Customers' }, 0, this.perPage)
        .subscribe((data) => {
            this.hierarchicalGrid.isLoading = false;
            this.data.next(data);
        },(error) => {
                this.hierarchicalGrid.emptyGridMessage = error.message;
                this.hierarchicalGrid.isLoading = false;
                this.hierarchicalGrid.cdr.detectChanges();
            }
        );
}

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(perPage)]="perPage" 
    [selectOptions]="selectOptions"
    [displayDensity]="treeGrid.displayDensity"
    (pageChange)="paginate($event)">
    <igx-paginator-content>
        <igx-page-size></igx-page-size>
        [This is my custom content]
        <igx-page-nav></igx-page-nav>
    </igx-paginator-content>
</igx-paginator>
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

>[!NOTE]
> リモート ページングを適切に構成するには、`GridPagingMode.Remote` を設定する必要があります。 

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" width="100%" height="580px" [pagingMode]="mode"></igx-grid>
...
public mode = GridPagingMode.Remote;
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data | async" [primaryKey]="'CustomerID'" 
    [height]="'550px'" [width]="'100%'" [pagingMode]="mode"></igx-hierarchical-grid>
...
public mode = GridPagingMode.Remote;
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" 
        expansionDepth="0" width="100%" height="540px" [pagingMode]="mode"></igx-tree-grid>
...
public mode = GridPagingMode.Remote;
```
}

最後の手順は、要件に基づいてページネーターのコンテンツを宣言することです。

```html
<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav>
</igx-paginator-content>
```

上記すべての設定を完了すると以下のような結果になります。

@@if (igxName === 'IgxGrid') {

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-remote-paging-sample" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging" >
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
### カスタム ページネーターのリモート ページング

独自のページング動作を定義するために、ページング テンプレートを使用してカスタム ロジックを追加できます。上記を実証するために、リモート ページングの例を拡張する方法を説明します。


<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-custom-remote-paging-sample" >
</code-view>


以下は、独自の `next` および `previous` ページ操作を実装するために定義したメソッドです。

```typescript
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);
}

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

public paginate(page: number, recalculate = false) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalculate) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);
}
```
}

@@if (igxName === 'IgxGrid') {

### 一括編集のリモート ページング

これまでの例で、リモート データで @@igxName を設定する方法を説明しました。次に、[一括編集のトピック](batch-editing.md)に従ってグリッドのバッチ編集を有効にします。

サンプルを続行する前に、現在のユースケースを明確します。ページネーションを実行すると、グリッドには現在のページのデータのみが含まれます。新しい行を追加すると、(一括編集により) 新しく追加された行はグリッドに含まれる現在のデータと連結されます。したがって、サーバーが指定されたページのデータを返さない場合、グリッドのデータソースは新しく追加された行のみで構成され、グリッドは定義されたページ設定 (page、perPage) に基づいてページを作成します。

```typescript
public ngOnInit() {
    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
        this.totalCount = data;
        this._recordOnServer = data;
        this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
        this.grid1.isLoading = false;
    });
}
```

このユースケースを適切に処理するには、カスタム ロジックを実装する必要があります。最初に、サーバー上にあるレコードの総数を知る必要があります。サーバーのデータ ページの総数を計算し (`this._totalPagesOnServer ` を参照)、その値に基づいてカスタム ページネーション ロジックを実装します。

```typescript

public paginate(page: number) {
    this.grid1.endEdit(true);
    if (page > this._totalPagesOnServer) {
        if (this.page !== this._totalPagesOnServer) {
            const skipEl = this._totalPagesOnServer * this.perPage;
            this.remoteService.getData(skipEl, this.perPage);
        }
        this.page = page - this._totalPagesOnServer;
        this.page = page;
        return;
    } else {
        this.page = 0;
    }
    this.page = page;
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}

```

**paginate** メソッドで示されるように、`_totalPagesOnServer` 値に基づいてカスタム ページネーション ロジックが実行されます。


#### 一括編集のリモート ページングのデモ

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/remote-paging-batch-editing" >
</code-view>

}

## 既知の問題と制限

- グリッドに `primaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:
    * Row Selection
    * Row Expand/collapse
    * Row Editing
    * Row Pinning

## API リファレンス
<div class="divider--half"></div>

* [IgxPaginatorComponent API]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [ページング](paging.md)
* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
