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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-remote-scenarios-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-remotefiltering-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-remotefiltering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
 <!-- TODO -->
}

デフォルトで、@@igComponent は独自のロジックを使用してデータ操作を実行します。
これらのタスクをリモートで実行し、@@igComponent で公開される特定の入力とイベントを使用して @@igComponent に結果のデータを供給できます。

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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### 無限スクロール

 エンドポイントからデータを分割して取得するシナリオの一般的なデザインは、無限スクロールです。データ グリッドの場合、エンドユーザーが一番下までスクロールすることによってトリガーされたロードデータが連続的に増加します。次の段落では、利用可能な API を使用して、`IgxGrid` で無限スクロールを簡単に実現する方法を説明します。

無限スクロールを実装するには、データを分割してフェッチする必要があります。すでにフェッチされたデータはローカルに保存し、チャンクの長さおよび数を決定する必要があります。また、グリッドで最後に表示されるデータ行インデックスを追跡する必要があります。このように、`startIndex` と `chunkSize` プロパティを使用して、ユーザーが上にスクロールして既にフェッチしたデータを表示するか、下にスクロールしてエンドポイントからさらにデータをフェッチする必要があるかを決定できます。

最初に、データの最初のチャンクをフェッチするために `ngAfterViewInit` ライフサイクル フックを使用します。`totalItemCount` プロパティはグリッドがスクロールバーのサイズを正しく設定できるために重要です。

```typescript
public ngAfterViewInit() {
    ...
    this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
        if (request.data) {
            this.grid.totalItemCount = this.page * this.pageSize;
            this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
            this.totalItems = request.data["@odata.count"];
            this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
            this.grid.isLoading = false;
        }
    });
    ...
}
```

さらに、`onDataPreLoad` 出力にサブスクライブする必要があります。これにより、グリッドが現在ロードされているものではなく、異なるチャンクを表示しようとするときに必要なデータを提供できます。イベント ハンドラーで、ローカルに既にキャッシュされている新しいデータをフェッチするか、データを返すかを決定する必要があります。

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


#### 無限スクロールのデモ
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-5-iframe" data-src='{environment:demosBaseUrl}/grid/grid-sample-5' width="100%" height="100%" seamless frameBorder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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

#### 一意の列値ストラテジのデモ

<div class="sample-container loading" style="height:800px">
    <iframe id="tree-grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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

#### 一意の列値ストラテジのデモ

<div class="sample-container loading" style="height:800px">
    <iframe id="hierarchical-grid-esf-load-on-demand-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-esf-load-on-demand-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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
デフォルトのページング テンプレートを使用する場合、`totalRecords` プロパティを設定する必要があります。それにより、グリッドは合計リモート レコードに基づいて合計ページ番号を計算できます。注: リモート サービスからフェッチ データを実装する必要があります。
ページ カウントを計算するためにすべてのデータ項目のカウントをが必要なため、ロジックをサービスに追加する必要があります。
```typescript
@Injectable()
export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = "https://www.igniteui.com/api/products";

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
    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages: number = 1;
    public totalCount = 0;

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
このサンプルでは、​​子レコードがいくつあっても、ページごとに一定数のルート レコードを表示する方法を示します。レベル (root または child) に関係なく一定数のレコードを表示するビルトインの Tree Grid ページング アルゴリズムをキャンセルするには、[`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) プロパティを `Number.MAX_SAFE_INTEGER` に設定してください。
```html
<igx-tree-grid #treeGrid ...
               [paging]="true" [perPage]="maxPerPage">
```
```typescript
public maxPerPage = Number.MAX_SAFE_INTEGER;
```
}
要求されたページのデータのみを取得し、選択したページと項目 [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) に基づいて `skip` と `top` パラメーターをリモート サービスに渡すためのカスタム ページャー テンプレートを作成します。構成を簡単にするには、`<igx-paginator>` を使用します。

@@if (igxName === 'IgxGrid') {
```html
<ng-template #customPager let-api>
    <igx-paginator #paginator
        [totalRecords]="totalCount"
        [(perPage)]="perPage"
        [selectOptions]="selectOptions"
        [displayDensity]="grid1.displayDensity"
        (pageChange)="paginate($event)">
    </igx-paginator>
</ng-template>
```

```typescript
@ViewChild("customPager", { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
@ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

private _perPage = 10;
private _dataLengthSubscriber;

constructor(private remoteService: RemotePagingService) {
}

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

```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<ng-template #customPager let-api>
    <igx-paginator #paginator
        [totalRecords]="totalCount"
        [(perPage)]="perPage"
        [selectOptions]="selectOptions"
        [displayDensity]="grid1.displayDensity"
        (pageChange)="paginate($event)">
    </igx-paginator>
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

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<ng-template #customPager let-api>
    <igx-paginator #paginator
        [totalRecords]="totalCount"
        [(perPage)]="perPage"
        [selectOptions]="selectOptions"
        [displayDensity]="grid1.displayDensity"
        (pageChange)="paginate($event)">
    </igx-paginator>
</ng-template>
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

上記すべての設定を完了すると以下のような結果になります。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-remote-paging-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
### カスタム テンプレートのリモート ページング

独自のページング動作を定義するために、ページング テンプレートを使用してカスタム ロジックを追加できます。上記を実証するために、リモート ページングの例を拡張する方法を説明します。

<div class="sample-container loading" style="height:620px">
    <iframe id="grid-custom-remote-paging-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-custom-remote-paging-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-custom-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-remote-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

以下は、独自の `next` および `previous` ページ操作を実装するために定義したメソッドです。

```typescript
@ViewChild("customPager", { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
@ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

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

public paginate(page: number, recalc = false) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalc) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);
}

public buttonDeselection(page: number, totalPages: number) {
...
}

...
public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);
}

```

}

@@if (igxName === 'IgxGrid') {

### 一括編集のリモート ページング

これまでの例で、リモート データで @@igxName を設定する方法を説明しました。次に、[一括編集のトピック](batch_editing.html)に従ってグリッドのバッチ編集を有効にします。

サンプルを続行する前に、現在のユースケースを明確します。ページネーションを実行すると、グリッドには現在のページのデータのみが含まれます。新しい行を追加すると、(一括編集により) 新しく追加された行はグリッドに含まれる現在のデータと連結されます。したがって、サーバーが指定されたページのデータを返さない場合、グリッドのデータソースは新しく追加された行のみで構成され、グリッドは定義されたページ設定 (page、perPage) に基づいてページを作成します。

```typescript
public ngOnInit() {
  ...
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
        this.grid1.page = page - this._totalPagesOnServer;
        this.page = page;
        return;
    } else {
        this.grid1.page = 0;
    }
    this.page = page;
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}

```

**paginate** メソッドで示されるように、 `_totalPagesOnServer` 値に基づいてカスタム ページネーション ロジックが実行されます。


#### デモ


<div class="sample-container loading" style="height:620px">
    <iframe id="remote-paging-batch-editing-iframe" data-src='{environment:demosBaseUrl}/grid/remote-paging-batch-editing' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="remote-paging-batch-editing-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="remote-paging-batch-editing-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
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
