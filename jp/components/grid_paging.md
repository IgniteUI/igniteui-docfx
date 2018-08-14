---
title: グリッドのページング
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, ページング, ページング機能, ページ
_language: ja
---

### グリッドのページング

Ignite UI for Angular で、**ページング**がルート `igx-grid` コンポーネントで初期化され、`paging` および `perPage` 入力によって構成できます。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-paging-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

機能が有効かどうかを制御する paging は Boolean プロパティです。`perPage` プロパティはページごとに表示可能なレコードを制御します。以下のようにグリッドでページングを有効にします。

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

ページングも Grid API を使用してコードで設定できます。

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

#### ページングは定義済みのリモート データで処理することもできます。そのため、リモートで送信されるデータを渡すなどの追加の設定は必要はありません。

<div class="divider--half"></div>

最初にサービスを宣言してデータをフェッチします。

```typescript
@Injectable()
export class RemoteService {
    public remoteData: BehaviorSubject<any[]>;
    private url: string = "https://www.igniteui.com/api/products";

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]);
    }

    public getData(): any {
        return this.http
            .get(this.url)
            .subscribe((d: any) => {
                this.remoteData.next(d.Results ? d.Results : d);
            });
    }
}
```
サービスの宣言後、グリッド構成とデータ サブスクリプションのためのコンポーネントを作成します。

```typescript
export class RemotePagingGridSample implements OnInit, AfterViewInit {
    public data: Subject<any[]>;

    @ViewChild(IgxGridComponent) private grid: IgxGridComponent;

    constructor(private remoteService: RemoteService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData();
    }
}
```
最後にグリッドのテンプレートを宣言します。

```html
<igx-grid [data]="data | async" height="600px" [paging]="true" >
    <igx-column field="ID"></igx-column>
    <igx-column field="ProductName"></igx-column>
    <igx-column field="QuantityPerUnit"></igx-column>
    <igx-column field="SupplierName"></igx-column>
    <igx-column field="UnitsInStock"></igx-column>
    <igx-column field="Rating"></igx-column>
</igx-grid>
```

すべての設定の完了後、以下のような結果になります。

#### デモ

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-remote-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

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
