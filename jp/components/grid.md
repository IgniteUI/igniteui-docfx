---
title: Data Grid コンポーネント
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール
---

## Data Grid

<p class="highlight">Ignite UI for Angular Data Grid で表形式データを表示して変更します。最小限のコードと構成でデータをすばやくバインドできます。機能は、フィルタリング、並べ替え、ページング、テンプレート、移動可能な列、およびデータの編集と更新です。ユーザー操作が簡単に認識できるため、コードで制御できます。</p>
<div class="divider"></div>

### Grid デモ

<div class="sample-container" style="height:780px">
    <iframe src='https://{environment:demosBaseUrl}/grid' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 依存関係

グリッドは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxGridModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxGridModule,
        ...
    ]
})
export class AppModule {}
```

_IgxGridModule_ の各コンポーネント、ディレクティブ、およびヘルパー クラスは _grid.component_ または _igniteui-angular_ のメイン バンドルでインポートできます。グリッドをインスタンス化して使用するためすべての機能をインポートする必要はありませんが、グリッド API の部分である型を宣言するときにそれをインポートまたはエディターで自動的にインポートします。

```typescript
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
...

@ViewChild('myGrid', { read: IgxGridComponent }) public grid: IgxGridComponent;
```

<div class="divider--half"></div>

### 使用方法

グリッド モジュールをインポート後、ローカル データにバインドする **igx-grid** の基本構成を設定します。

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

**id** プロパティは文字列値で、グリッドの一意識別子です。**data** はグリッドをローカル データにバインドします。

**autoGenerate** プロパティは **igx-grid** をデータ ソース フィールドに基づいて列を自動生成します。それ以外の場合、開発者は列およびデータ ソース フィールドへのマッピングを明示的に定義する必要があります。

<div class="divider--half"></div>

### 列の構成

**IgxGridColumnComponent** はグリッドの _columns_ コレクションを定義し、**フィルタリング**、**並べ替え**、および**ページング**などの列ごとの機能を有効にするために使用されます。セル、ヘッダー、およびフッター テンプレートも利用可能です。

**autoGenerate** プロパティを無効にし、マークアップで列コレクションを定義します。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onCellSelection)="selectCell($event)">
    <igx-column field="Name" [sortable]="true" header=" " [filtering]="true"></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="選手番号"></igx-column>
    <igx-column field="TrackProgress" header="進捗状況">
        <ng-template igxCell let-col="column" let-ri="rowIndex" let-item="item">
            <igx-linear-bar [striped]="false" [value]="item" [max]="100">
            </igx-linear-bar>
        </ng-template>
    </igx-column>
</igx-grid>
```

列プロパティを **initColumns** イベントにコードで設定できます。

```typescript
public initColumns(event: IgxGridColumnInitEvent) {
    const column: IgxColumnComponent = event.column;
    if (column.field === 'ProductName') {
      column.filtering = true;
      column.sortable = true;
      column.editable = true;
    }
}
```

上記のコードは **ProductName** 列の並べ替え、フィルター、および編集機能を有効にし、対応する機能の UI (編集の入力フィールド、保存ダイアログなど) をインスタンス化します。

<div class="divider--half"></div>

### データ バインディング

グリッドをリモート データ サービスにバインドするために変更します。実際のアプリケーションでは一般的なシナリオです。すべてのデータ取得に関連するロジックを別のデータ サービスに分割することがベスト プラクティスであるため、サーバーからデータの取得を処理するサービスを作成します。

サービスを別のファイルで実装します。

```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```

各 Angular サービス定義で[必要な](https://angular.io/guide/dependency-injection) `Injectable` デコレータをインポートします。`HttpClient` はバックエンド サービスに接続する機能を提供します。グリッド コンポーネントにサブスクライブする結果である `Observable` を返します。

**注**: Angular 5 の前では `HttpClient` が `@angular/http` にあり、名前は `Http` でした。

レコードの配列を含む JSON レスポンスを受け取るため、監視可能な要素に返されるデータの型を指定するために適切なインターフェイスを定義します。タイプ チェックを行うことにより、後で発生する可能性のある問題を防止できます。

```typescript
// northwind.service.ts

export interface NorthwindRecord {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    CategoryName: string;
}
```

サービスは `Observable<NorthwindRecord[]>` を返す `fetchData` の単一のメソッドを含みます。要求が任意の理由 (サーバーが利用不可、ネットワーク エラーなど) のため失敗すれば、`HttpClient` はエラーを返します。 失敗した _Observable_ をインターセプトしてエラーをハンドラーに渡す `catchError` 演算子を使用します。エラー ハンドラーがエラーをログに追加して有効な値を返します。

```typescript
// northwind.service.ts

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```

`HttpClientModule` および作成したサービスをアプリケーションのモジュールにインポートし、サービスをプロバイダーとして登録します。

```typescript
// app.module.ts

import { HttpClientModule } from '@angular/common/http';
...
import { NorthwindService } from './northwind.service';

@NgModule({
    imports: [
        ...
        HttpClientModule
        ...
    ],
    providers: [
        NorthwindService
    ]
})
export class AppModule {}
```

サービスを実装した後、コンポーネントのコンストラクターにインジェクトしてデータを取得するために使用します。
`ngOnInit` ライフサイクル フックに最初の要求を追加します。

**注**: 以下のコードでは、サービスに加入する前に _records_ プロパティを空の配列に設定しています。
Http 要求は非同期です。完了するまで、_records_ プロパティが _undefined_ で、グリッドをプロパティにバインドしようとするときにエラーが発生されます。デフォルト値に初期化するか、`BehaviorSubject` を使用します。

```typescript
// my.component.ts

@Component({
    ...
})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];


    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```

コンポーネントのテンプレートのコード:

```html
<igx-grid [data]="records">
    <igx-column field="ProductId"></igx-column>
    <!-- rest of the column definitions -->
    ...
</igx-grid>
```

**注**: リモート データにバインドする場合、グリッドの `autoGenerate` プロパティは使用しないことをお勧めします。データを検証して適切な列を生成するためにデータが利用可能である必要があります。リモート サービスの応答が完了するまでデータが利用できないため、グリッドはエラーを発生します。リモート サービスにバインド時に `autoGenerate` を使用する機能は今後追加予定です。

<div class="divider--half"></div>

### API による CRUD 操作

開発者が CRUD 操作を実行するために対応パブリック メソッドが公開されます。

```typescript
public addRow() {
    const record = {ProductID: this.grid1.data[this.grid1.data.length - 1].ProductID + 1, ProductName: 'Camembert Pierrot'};
    this.grid1.addRow(record);
}

public updateRecord(event) {
    this.grid1.updateCell(this.selectedCell.rowIndex, this.selectedCell.columnField, event);
    this.grid1.getCell(this.selectedCell.rowIndex, this.selectedCell.columnField);
}

public deleteRow(event) {
    this.selectedRow = Object.assign({}, this.grid1.getRow(this.selectedCell.rowIndex));
    this.grid1.deleteRow(this.selectedCell.rowIndex);
    this.selectedCell = {};
    this.snax.message = `ID ${this.selectedRow.record.ID} の行が削除されました。`;
    this.snax.show();
}
```

**igx-grid** に関係なく、ボタンのクリックなどのユーザー インタラクションに接続できます。

```html
<button igxButton igxRipple (click)="deleteRow($event)">行の削除</button>
```

<div class="divider--half"></div>

### ページング

**ページング**がルート **igx-grid** コンポーネントで初期化され、`paging` および `perPage` 入力によって構成できます。機能が有効かどうかを制御する paging は Boolean プロパティです。perPage プロパティはページごとで表示可能なレコードを制御します。グリッドでページングを有効にします。

```html
<igx-grid #grid1 [data]="data | async" [paging]="true" [perPage]="20" [autoGenerate]="false"></igx-grid>
```

<div class="divider--half"></div>

### フィルタリング

**フィルタリング**は、マークアップ、または `filtering` 入力を使用するコードで、列ごとのレベルで有効化されます。さらに、フィルタリング動作をカスタマイズするために、`filteringCondition` および `filteringIgnoreCase` プロパティが提供されます。`filteringCondition` は特定の条件に基づいてフィルタリングを実行する関数です。設定されていない場合、デフォルト値は "contains" です。`filteringIgnoreCase` は大文字小文字を区別するかどうかを制御するブール値のプロパティです。フィルタリングを列で有効にした後、動作をカスタマイズできます。

```html
<igx-column [field]="'ProductName'" [header]="'ProductName'" [sortable]="false" [filtering]="true" [filteringIgnoreCase]="false">
</igx-column>
```

<div class="divider--half"></div>

### 並べ替え

**並べ替え**も列ごとのレベルで有効化されます。つまり、**igx-grid** に並べ替え可能な列および並べ替え可能ではない列の両方を含むことが可能です。上記のコード例で説明したとおり、Boolean 値を取得する sortable 入力を使用します。また、グリッドを読み込みで並べ替えるには、並べ替え式を `State` プロパティに渡します。

```typescript
public ngOnInit(): void {
    this.data = this.localService.records;

    this.grid1.state = {
        paging: {
            index: 2,
            recordsPerPage: 10
        },
        sorting: {
            expressions: [
                {
                    fieldName: 'TrackProgress',
                    dir: SortingDirection.Desc
                }
            ],
            strategy: new StableSortingStrategy()
        }
    };
}
```

上記の例で、`State` プロパティは並べ替えだけでなく、ページングおよびフィルタリングの状態も定義します。

<div class="divider"></div>

## API

### 入力

グリッドの外観および動作を構成するには、以下の入力を使用します。
| 名前 | 型 | 説明 |
| :--- |:--- | :--- |
| id | string | グリッドの一意識別子。 |
| `paging` | bool | ページング機能を有効化にします。 |
| `perPage` | number | ページごとの表示項目。デフォルト値は 25 です。 |
| `state` | IDataState | フィルタリング、並べ替え、およびページングの状態を定義します。 |
| `autoGenerate` | boolean | グリッドの列を自動生成します。デフォルト値は _false_ です。 |

<div class="divider--half"></div>

### 出力

**igx-grid** によって発生されるイベントのリスト:

| 名前              | 説明                                                                           |
| :---------------- | :----------------------------------------------------------------------------- |
| _イベント発生_    | _変更の通知_                                                                   |
| `onEditDone`      | 更新された行を出力するために行更新で使用されます。                             |
| `onFilterDone`    | 列およびフィルタリング式を出力するためにデータのフィルタリングで使用されます。 |
| `onSortingDone`   | 列、方向、および並べ替え式を出力するためにデータの並べ替えで使用されます。     |
| `onMovingDone`    | ドロップ イベントを発生するために列移動で使用されます。                        |
| `onCellSelection` | セルを出力するためにセルのフォーカスで使用されます。                           |
| `onRowSelection`  | 行を出力するために行のフォーカスで使用されます。                               |
| `onPagingDone`    | ページング イベントを発生するためにページングで使用されます。                  |
| `onColumnInit`    | 列を出力するために初期化で使用されます。                                       |
| `onBeforeProcess` | バインド動作を出力します。                                                     |

<div class="divider"></div>

このイベント発生のハンドラーは宣言的なイベント バインディングで定義されます。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false"
 (onColumnInit)="initColumns($event)" (onCellSelection)="selectCell($event)"></igx-grid>
```

<div class="divider--half"></div>

### メソッド

**igx-grid** によって公開されるすべてのパブリック メソッドのリスト:

| 構文                                             | 説明                                                                            |
| :----------------------------------------------- | :------------------------------------------------------------------------------ |
| `getColumnByIndex(index: number)`                | グリッドの列をインデックスによって取得します。                                  |
| `getColumnByField(field: string)`                | グリッドの列をフィールド名によって取得します。                                  |
| `getCell(rowIndex: number, columnField: string)` | rowIndex/columnIndex にあるセルを返します。                                     |
| `getRow(rowIndex: number)`                       | 行を返します。                                                                  |
| `focusCell`                                      | 指定した行および列にあるグリッド セルにフォーカスします。                       |
| `focusRow`                                       | `index` にあるグリッド行にフォーカスします。                                    |
| `filterData`                                     | データを検索用語および列によってフィルターします。                              |
| `addRow`                                         | レコードをグリッド データ コンテナーに追加します。                              |
| `deleteRow`                                      | レコードをグリッド データ コンテナーから削除します。                            |
| `updateRow`                                      | レコードをグリッド データ コンテナーに更新します。                              |
| `updateCell`                                     | インデックス、列フィールド、および渡された値によってグリッド セルを更新します。 |
| `sortColumn`                                     | グリッド列を並べ替えます。                                                      |
| `paginate`                                       | 現在のページを渡された数値によって変更します。                                  |

<div class="divider--half"></div>

#### 入力

**IgxGridColumnComponent** で列を定義するために利用可能な入力:
| 名前 | 型 | 説明 |
| :--- |:--- | :--- |
| `field` | string | 列フィールド名。 |
| `header` | string | 列ヘッダー テキスト。 |
| `sortable` | boolean | 列が並べ替え可能かどうかを設定します。 |
| `editable` | boolean | 列値を編集可能に設定します。 |
| `filtering` | boolean | 列値をフィルター可能に設定します。 |
| `hidden` | boolean | 列の表示状態。 |
| `movable` | boolean | 列移動。 |
| `width` | string | 列幅。 |
| `index` | string | 列インデックス。 |
| `filteringCondition` | FilteringCondition | ブール値、日付、文字列、または数値条件。デフォルトは _contains_ 文字列条件です。 |
| `filteringIgnoreCase` | boolean | 大文字小文字を無視します。 |
| `dataType` | DataType | String、Number、Boolean、または Date。 |

<div class="divider--half"></div>
