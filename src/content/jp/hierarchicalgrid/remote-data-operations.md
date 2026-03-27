---
title: Angular Hierarchical Grid のリモートデータ操作 - Ignite UI for Angular
_description: リモート フィルタリング、リモートソート、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angularのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_license: commercial
_language: ja
---


# Angular Hierarchical Grid のリモートデータ操作

Ignite UI for Angular Hierarchical Grid は、リモート仮想化、リモート ソート、リモート フィルタリングなどのリモート データ操作をサポートします。これにより、開発者はこれらのタスクをサーバー上で実行し、生成されたデータを取得して Hierarchical Grid に表示できます。




 <!-- TODO -->


デフォルトで、Hierarchical Grid は独自のロジックを使用してデータ操作を実行します。
これらのタスクをリモートで実行し、Hierarchical Grid で公開される特定の入力とイベントを使用して Hierarchical Grid に結果のデータを供給できます。




 <!-- TODO -->
## 一意の列値ストラテジ





Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。Hierarchical Grid は、デフォルトでデータソースに基づいてこれらの値を生成します。リモート フィルタリングの場合、グリッドのデータにはサーバーからのすべてのデータが含まれていません。これらの一意の値を手動で提供し、オンデマンドで読み込むために、Hierarchical Grid の [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#uniqueColumnValuesStrategy) 入力を利用できます。この入力は、実際には 3 つの引数を提供するメソッドです。
- **column**  - フィルタリング式ツリー。各列に基づいて削減されます。
- **filteringExpressionsTree** - フィルタリング式ツリー。各列に基づいて削減されます。
- **done** - サーバーから取得されたときに、新しく生成された列値で呼び出されるコールバック。

開発者は、**列**と **filteringExpressionsTree** 引数によって提供される情報に基づいて、必要な一意の列値を手動で生成し、**done** コールバックを呼び出すことができます。

> [!NOTE]
> [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#uniqueColumnValuesStrategy) 入力が提供される場合、Excel スタイル フィルタリングでプロセスを生成するデフォルトの一意の値は使用されません。





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
public singersColumnValuesStrategy = (column: ColumnType,
                                      columnExprTree: IFilteringExpressionsTree,
                                      done: (uniqueValues: any[]) => void) => {
// Get specific column data for the singers.
this.remoteValuesService.getColumnData(
    null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));
}

public albumsColumnValuesStrategy = (column: ColumnType,
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
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand/" >
</code-view>



Excel スタイル フィルタリングのカスタム ロード テンプレートを提供するには、`igxExcelStyleLoading` ディレクティブを使用できます。

```html
<igx-hierarchical-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template>
</igx-hierarchical-grid>
```

<div class="divider--half"></div>

## リモート ページング


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

サービスを宣言した後にコンポーネントを作成する必要があり、Hierarchical Grid コンストラクションとデータ サブスクリプションを処理します。



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





これで、独自のカスタム ページング テンプレートを設定するか、`igx-paginator` が提供するデフォルトのテンプレートを使用するかを選択できます。まず、デフォルトのページング テンプレートを使用してリモート ページングを設定するために必要なものを見てみましょう。

### デフォルト テンプレートのリモート ページング

デフォルトのページング テンプレートを使用する場合、[`totalRecords`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#totalRecords) プロパティを設定する必要があります。それにより、グリッドはリモートの合計レコード数に基づいて合計ページ番号を計算できます。リモート ページネーションを実行する場合、グリッドに現在のページのデータのみを渡すため、グリッドは提供されたデータソースのページネーションを試行しません。そのため、[`pagingMode`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pagingMode) プロパティを _GridPagingMode.remote_ に設定する必要があります。リモート サービスからデータをフェッチするために [`pagingDone`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#pagingDone) または [`perPageChange`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPageChange) イベントにサブスクライブする必要があります。イベントが使用されるユース ケースによって異なります。





```html
<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'CustomerID'" [pagingMode]="mode">
    <igx-column field="CustomerID"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)" (perPageChange)="getFirstPage()">
    </igx-paginator>
</igx-hierarchical-grid>
```



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





<code-view style="height:580px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/remote-paging-default-template/" >
</code-view>

<div class="divider--half"></div>


### カスタム igx-paginator-content のリモート ページング

カスタム ページネーター コンテンツを定義するときは、要求されたページのデータのみを取得するようにコンテンツを定義し、選択したページと [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 項目に応じて正しい **skip** および **top** パラメーターをリモート サービスに渡す必要があります。導入された [`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) と [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) とともに、設定例を簡単にするために `<igx-paginator>` を使用します。`igx-page-size` はページごとのドロップダウンとラベルを追加し、`igx-page-nav` はナビゲーション アクション ボタンとラベルを追加します。




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




>[!NOTE]
> リモート ページングを適切に構成するには、`GridPagingMode.Remote` を設定する必要があります。




```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data | async" [primaryKey]="'CustomerID'"
    [height]="'550px'" [width]="'100%'" [pagingMode]="mode"></igx-hierarchical-grid>
...
public mode = GridPagingMode.Remote;
```




最後の手順は、要件に基づいてページネーターのコンテンツを宣言することです。

```html
<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav>
</igx-paginator-content>
```

上記すべての設定を完了すると以下のような結果になります。





<code-view style="height:580px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-remote-paging/" >
</code-view>

<div class="divider--half"></div>






## 既知の問題と制限

- グリッドに `primaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:
  - 行の選択
  - 行の展開/縮小
  - 行の編集
  - 行のピン固定
- リモート データ シナリオでは、グリッドに `primaryKey` が設定されている場合、[`rowSelectionChanging.oldSelection`]({environment:angularApiUrl}/interfaces/IRowSelectionEventArgs.html#oldSelection) イベント引数には、現在データ ビューに含まれていない行の完全な行データ オブジェクトが含まれません。この場合、`rowSelectionChanging.oldSelection` オブジェクトには、`primaryKey` フィールドである 1 つのプロパティのみが含まれます。現在データ ビューにある残りの行については、`rowSelectionChanging.oldSelection` に行データ全体が含まれます。

## API リファレンス

<div class="divider--half"></div>

- [IgxPaginatorComponent API]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html)
- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [ページング](paging.md)
- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
