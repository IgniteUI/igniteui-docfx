---
title: Angular Tree のリモートデータ操作 - Ignite UI for Angular
_description: リモート フィルタリング、リモートソート、リモート スクロールなどの Angular リモート データ操作を使用して、Ignite UI for Angularのサーバーからデータをロードします。
_keywords: angular リモート データ操作, ignite ui for angular, インフラジスティックス
_license: commercial
_language: ja
---



# Angular Tree Grid のリモートデータ操作

Ignite UI for Angular Tree Grid は、リモート仮想化、リモート ソート、リモート フィルタリングなどのリモート データ操作をサポートします。これにより、開発者はこれらのタスクをサーバー上で実行し、生成されたデータを取得して Tree Grid に表示できます。



## Angular Tree Grid リモート データ操作の例


<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-remote-filtering/" alt="Angular Tree Grid リモート データ操作の例">
</code-view>

<div class="divider--half"></div>



デフォルトで、Tree Grid は独自のロジックを使用してデータ操作を実行します。
これらのタスクをリモートで実行し、Tree Grid で公開される特定の入力とイベントを使用して Tree Grid に結果のデータを供給できます。



### リモート フィルタリング

リモート フィルタリングを提供するには、受け取った引数に基づいて適切な要求を行うように [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#filteringExpressionsTreeChange) 出力にサブスクライブする必要があります。[`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primaryKey) と [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignKey) を提供して、ツリー グリッドのデータ ソースとしてフラット コレクションを使用します。

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

リモート フィルタリングが提供される場合、ツリー グリッドの組み込みのフィルタリングは必要ありません。ツリー グリッドの [`filterStrategy`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#filterStrategy) 入力を `NoopFilteringStrategy` インスタンスに設定して、無効にできます。

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




### 一意の列値ストラテジ



Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。Tree Grid は、デフォルトでデータソースに基づいてこれらの値を生成します。リモート フィルタリングの場合、グリッドのデータにはサーバーからのすべてのデータが含まれていません。これらの一意の値を手動で提供し、オンデマンドで読み込むために、Tree Grid の [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#uniqueColumnValuesStrategy) 入力を利用できます。この入力は、実際には 3 つの引数を提供するメソッドです。
- **column**  - フィルタリング式ツリー。各列に基づいて削減されます。
- **filteringExpressionsTree** - フィルタリング式ツリー。各列に基づいて削減されます。
- **done** - サーバーから取得されたときに、新しく生成された列値で呼び出されるコールバック。

開発者は、**列**と **filteringExpressionsTree** 引数によって提供される情報に基づいて、必要な一意の列値を手動で生成し、**done** コールバックを呼び出すことができます。

> [!NOTE]
> [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#uniqueColumnValuesStrategy) 入力が提供される場合、Excel スタイル フィルタリングでプロセスを生成するデフォルトの一意の値は使用されません。




```html
<igx-tree-grid #treeGrid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
</igx-tree-grid>
```

```typescript
public columnValuesStrategy = (column: ColumnType,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

### 一意の列値ストラテジのデモ


<code-view style="height:800px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand/" >
</code-view>




Excel スタイル フィルタリングのカスタム ロード テンプレートを提供するには、`igxExcelStyleLoading` ディレクティブを使用できます。

```html
<igx-tree-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template>
</igx-tree-grid>
```

<div class="divider--half"></div>

## リモート ページング



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



これで、独自のカスタム ページング テンプレートを設定するか、`igx-paginator` が提供するデフォルトのテンプレートを使用するかを選択できます。まず、デフォルトのページング テンプレートを使用してリモート ページングを設定するために必要なものを見てみましょう。

### デフォルト テンプレートのリモート ページング

デフォルトのページング テンプレートを使用する場合、[`totalRecords`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#totalRecords) プロパティを設定する必要があります。それにより、グリッドはリモートの合計レコード数に基づいて合計ページ番号を計算できます。リモート ページネーションを実行する場合、グリッドに現在のページのデータのみを渡すため、グリッドは提供されたデータソースのページネーションを試行しません。そのため、[`pagingMode`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pagingMode) プロパティを _GridPagingMode.remote_ に設定する必要があります。リモート サービスからデータをフェッチするために [`pagingDone`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#pagingDone) または [`perPageChange`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPageChange) イベントにサブスクライブする必要があります。イベントが使用されるユース ケースによって異なります。




```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" [pagingMode]="mode">
    <igx-column field="Name"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)">
    </igx-paginator>
</igx-tree-grid>
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




<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-remote-paging-default-template/" >
</code-view>

<div class="divider--half"></div>



### カスタム igx-paginator-content のリモート ページング

カスタム ページネーター コンテンツを定義するときは、要求されたページのデータのみを取得するようにコンテンツを定義し、選択したページと [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 項目に応じて正しい **skip** および **top** パラメーターをリモート サービスに渡す必要があります。導入された [`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) と [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) とともに、設定例を簡単にするために `<igx-paginator>` を使用します。`igx-page-size` はページごとのドロップダウンとラベルを追加し、`igx-page-nav` はナビゲーション アクション ボタンとラベルを追加します。





```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
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



>[!NOTE]
> リモート ページングを適切に構成するには、`GridPagingMode.Remote` を設定する必要があります。





```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content"
        expansionDepth="0" width="100%" height="540px" [pagingMode]="mode"></igx-tree-grid>
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




<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging/" >
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
- [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [ページング](paging.md)
- [Tree Grid 概要](tree-grid.md)
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
