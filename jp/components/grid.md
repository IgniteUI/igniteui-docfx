---
title: Data Grid コンポーネント
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス グリッド
_language: ja
---

## Data Grid

<p class="highlight">Ignite UI for Angular Data Grid は、最小限のコードと構成でデータをすばやくバインドし、表形式でのデータの表示や編集ができます。フィルタリング、並べ替え、ページング、テンプレート、列移動、データの編集と更新など、多数の機能があり、ユーザー操作を簡単に認識してコード制御できます。</p>
<div class="divider"></div>

### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

グリッドは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxGridModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-angular';
// Or
import { IgxGridModule } from 'igniteui-angular/grid';

@NgModule({
    imports: [
        ...
        IgxGridModule.forRoot(),
        ...
    ]
})
export class AppModule {}
```

_IgxGridModule_ の各コンポーネント、ディレクティブ、およびヘルパー クラスは _grid_ または _igniteui-angular_ のメイン バンドルでインポートできます。グリッドをインスタンス化して使用するためにすべての機能をインポートする必要はありませんが、グリッド API の一部である型を宣言する場合はインポート (またはエディターで自動的にインポート) します。

```typescript
import { IgxGridComponent } from 'igniteui-angular/grid/';
// Or
import { IgxGridComponent } from 'igniteui-angular';
...

@ViewChild('myGrid', { read: IgxGridComponent })
public grid: IgxGridComponent;
```

### 使用方法

グリッド モジュールをインポート後、ローカル データにバインドする **igx-grid** の基本構成を設定します。

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```
**id** プロパティは文字列値で、設定されない場合に自動生成されるグリッドの一意識別子です。**data** はグリッドをローカル データにバインドします。

**autoGenerate** プロパティは **igx-grid** にデータ ソース フィールドに基づいてグリッドの `IgxColumnComponent` を自動生成します。列の適切なデータ型の決定を試みます。それ以外の場合、開発者は列およびデータ ソース フィールドへのマッピングを明示的に定義する必要があります。

### 列の構成

**IgxGridColumnComponent** は、グリッドの _columns_ コレクションを定義し、**フィルタリング**、**並べ替え**、**ページング**など、列ごとの機能を有効にするために使用します。セル、ヘッダー、およびフッター テンプレートも利用できます。

**autoGenerate** プロパティを無効にし、マークアップで列コレクションを定義します。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column field="Name" [sortable]="true" header=" " [filterable]="true"></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="選手番号"></igx-column>
    <igx-column field="TrackProgress" header="進捗状況">
        <ng-template igxCell let-value>
            <igx-linear-bar [stripped]="false" [value]="value" [max]="100"></igx-linear-bar>
        </ng-template>
    </igx-column>
</igx-grid>
```

グリッドの各列は別のテンプレートを持つことができます。列にグリッド モジュール ディレクティブの 1 つでデコレートした `ng-template` タグが必要です。

`igxHeader` は列ヘッダーを対象とし、列オブジェクトをコンテキストとして提供します。

```html
...
<igx-column field="Name">
    <ng-template igxHeader let-column>
        {{ column.field | uppercase }}
    </ng-template>
</igx-column>
...
```

`igxCell` は提供したテンプレートを列のすべてのセルに適用します。テンプレートで提供されるコンテキスト オブジェクトは暗示的に提供されたセル値およびセル オブジェクトです。

```html
...
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
...
```

上記のスニペットで暗示的に提供されたセル値への参照を取得します。データを表示し、セルの値にカスタム スタイル設定およびパイプ変換を適用する場合に使用します。ただし、`IgxGridCellComponent` オブジェクトを以下のように使用するとより効果的です。

```html
<igx-grid #grid [data]="data">
    <igx-column dataType="string" field="Name">
        <ng-template igxCell let-cell="cell">
            <!-- Implement row deleting inside the cell template itself -->
            <span tabindex="0" (keydown.delete)="grid.deleteRow(cell.rowIndex)">{{ cell.value | titlecase }}</span>
        </ng-template>
    </igx-column>
    <igx-column dataType="boolean" field="Subscribtion">
        <ng-template igxCell let-cell="cell">
            <!-- Bind the cell value through the ngModel directive and update the data source when the value is changed in the template -->
            <input type="checkbox" [ngModel]="cell.value" (ngModelChange)="cell.update($event)" />
        </ng-template>
    </igx-column>
<igx-grid>
```

列は、セルが編集モードにある場合に使用されるテンプレートを使用します。その他の列テンプレートと同じように、提供されたコンテキスト オブジェクトはセル値およびセル オブジェクトです。編集モード テンプレートをユーザー アクセス可能にするには、`IgxColumnComponent` の `editable` プロパティを `true` に設定します。

```html
<igx-column dataType="number" editable="true" field="Price">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [ngModel]="cell.value" (ngModelChange)="cell.update(convertToNumber($event))" />
    </ng-template>
</igx-column>
```

テンプレートで使用可能なプロパティの詳細については、[IgxGridCellComponent](#igxgridcellcomponent) の API を参照してください。

各列テンプレートが `IgxColumnComponent` オブジェクトでコードによって変更可能です。以下のコード例で、ユーザー データの 2 つのテンプレートを宣言しました。TypeScript コードでテンプレートへの参照を取得し、条件に基づいてアプリケーションで列の適切なテンプレートを描画します。

```html
<igx-grid>
    <!-- Column declarations -->
</igx-grid>

<ng-template #normalView let-value>
    <div class="user-details">{{ val }}</div>
    <user-details-component></user-details-component>
</ng-template>

<ng-template #smallView let-value>
    <div class="user-details-small">{{ val }}</div>
</ng-template>
```

```typescript
@ViewChild("normalView", { read: TemplateRef })
public normalView: TemplateRef<any>;

@ViewChild("smallView", { read: TemplateRef })
public smallView: TemplateRef<any>;

....

const column = this.grid.getColumnByName("User");
// Return the appropriate template based on some conditiion.
// For example saved user settings, viewport size, etc.
column.bodyTemplate = this.smallView;
```

列プロパティもグリッドで列が初期化されるときに発生される **initColumns** イベントのコードで設定できます。

```typescript
public initColumns(column: IgxGridColumn) {
    const column: IgxColumnComponent = column;
     if (column.field === 'ProductName') {
        column.filterable = true;
        column.sortable = true;
        column.editable = true;
     }
 }
```

上記のコードは **ProductName** 列の並べ替え、フィルター、および編集機能を有効にし、対応する機能の UI (編集の入力フィールドなど) をインスタンス化します。

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

サービスは `Observable<NorthwindRecord[]>` を返す `fetchData` の単一のメソッドを含みます。要求が任意の理由 (サーバーが利用不可、ネットワーク エラーなど) により失敗した場合、`HttpClient` はエラーを返します。失敗した _Observable_ をインターセプトしてエラーをハンドラーに渡す `catchError` 演算子を使用し、エラー ハンドラーがエラーをログに追加して有効な値を返します。

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

サービスを実装した後、コンポーネントのコンストラクターにインジェクトしてデータを取得するために使用します。`ngOnInit` ライフサイクル フックに最初の要求を追加します。

**注**: 以下のコードでは、サービスに加入する前に _records_ プロパティを空の配列に設定しています。Http 要求は非同期です。完了するまで _records_ プロパティは _undefined_ で、グリッドをプロパティにバインドするときにエラーが発生されます。デフォルト値に初期化するか、`BehaviorSubject` を使用します。

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

**注**: リモート データにバインドする場合、グリッドの `autoGenerate` プロパティは使用しないことをお勧めします。データを検証して適切な列を生成するためにデータが利用可能である必要があります。リモート サービスの応答が完了するまでデータが利用できないため、グリッドはエラーを発生します。リモート サービスへバインド時に `autoGenerate` を使用する機能は今後追加予定です。

### 仮想化

グリッドは水平および垂直 DOM 仮想化をサポートします。仮想化をアクティブ化するには、グリッドの `height` または `width` プロパティを設定します。


## 既知の問題と制限

|制限|説明|
|--- |--- |
|`percentage` および `px` で設定した列幅|列に `%` と `px` を組み合わせて使用することはできません。|
|`number` 型の列をフィルターする場合|フィルター入力に入力された値が `number` と異なる場合、キャストが正しくないため `NaN` が返されます。|
|グリッドの `width` が列幅に依存しない| すべての列の `width` でグリッド自体のスパンは決定しません。親コンテナーのディメンションまたは定義したグリッドの `width` で決定されます。|
|親コンテナーでネストされた Grid | グリッドの `width` を設定せずに定義済みのディメンションで親コンテナーに配置した場合、グリッドがコンテナーに合わせてスパンします。|
|Grid `OnPush` ChangeDetectionStrategy |グリッドで `ChangeDetectionStrategy.OnPush` を処理し、カスタム表示されたときにグリッドに発生した変更について通知します。|
| 列には設定可能な最小幅があります。`displayDensity` オプションに基づき、<br/>"compact": 24px <br/> "cosy": 32px <br/> "comfortable": 48px があります。| 幅が最小幅未満の場合、描画要素には影響せずに対応する `displayDensity` に合わせて最小幅で描画します。水平方向の仮想化は予期しない動作を招く場合があるためサポートしていません。

## API

### 入力

グリッドの外観および動作を構成するには、以下の入力を使用します。
| 名前 | 型 | 説明 |
| :--- |:--- | :--- |
|`id`| string | グリッドの一意識別子。提供されていない場合、自動的に生成されます。 |
|`data`|Array|グリッドのデータソース。|
|`autoGenerate`|boolean|グリッドの列を自動生成します。デフォルト値は _false_ です。|
|`paging`| bool | ページング機能を有効化にします。デフォルト値は _false_ です。 |
|`perPage`| number | ページごとの表示項目。デフォルト値は 15 です。 |
|`filteringLogic`|FilteringLogic|グリッドのフィルター ロジック。デフォルト値は _AND_ です。|
|`filteringExpressionsTree`|IFilteringExpressionsTree|グリッドのフィルター状態。|
|`sortingExpressions`|Array|グリッドの並べ替え状態。|
|`height`|string|グリッド要素の高さ。`1000px`、`75%` などの値を渡すことができます。|
|`width`|string|グリッド要素の幅。`1000px`、`75%` などの値を渡すことができます。|
|`evenRowCSS`|string|グリッドですべての偶数行に適用される追加のスタイル設定クラス。|
|`oddRowCSS`|string|グリッドですべての奇数行に適用される追加のスタイル設定クラス。|
|`paginationTemplate`|TemplateRef|グリッドのページングのためにカスタム `ng-template` を提供できます。|

<div class="divider--half"></div>

### 出力

**igx-grid** によって発生されるイベントのリスト:

|名前|説明|
|--- |--- |
|イベント発生|変更の通知  |
|`onEditDone`|セル値を変更するときに発生されます。`{ currentValue: any, newValue: any }` を返します。|
|`onCellClick`|セルがクリックされたときに発生されます。セル オブジェクトを返します。|
|`onSelection`|セルが選択されたときに発生されます。セル オブジェクトを返します。|
|`onColumnInit`|グリッド列が初期化されるときに発生されます。列オブジェクトを返します。|
|`onSortingDone`|並べ替えが UI で実行されたときに発生されます。並べ替え式を返します。|
|`onFilteringDone`|フィルタリングが UI で実行されたときに発生されます。フィルター式を返します。|
|`onPagingDone`|ページングが実行されたときに発生されます。前のページおよび新しいページを含むオブジェクトを返します。|
|`onRowAdded`|行が API によってグリッドに追加されている間に発生されます。新しい行オブジェクトのデータを返します。|
|`onRowDeleted`|行がグリッド API によって削除されたときに発生されます。削除されている行オブジェクトを返します。|
|`onColumnPinning`|列がグリッド API によってピン固定されたときに発生されます。列に挿入するインデックスは `insertAtIndex` プロパティによって変更できます。|
|`onColumnResized`|列がサイズ変更されたときに発生されます。列オブジェクト、以前の列幅、および新しい列幅を返します。|
|`onContextMenu`|セルが右クリックされたときに発生されます。セル オブジェクトを返します。|
|`onDoubleClick`|セルがダブルクリックされたときに発生します。セル オブジェクトを返します。|

<div class="divider--half"></div>

このイベント発生のハンドラーは宣言的なイベント バインディングで定義されます。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false"
 (onColumnInit)="initColumns($event)" (onSelection)="selectCell($event)"></igx-grid>
```

<div class="divider--half"></div>

### メソッド

**igx-grid** によって公開されるすべてのパブリック メソッドのリスト:

|構文|説明 |
|--- |--- |
|`getColumnByName(name: string)`|`name` と等しいフィールド プロパティを持つ列オブジェクトを返します。このような列がない場合は `undefined` を返します。|
|`getCellByColumn(rowIndex: number, columnField: string)`|列が `columnField` で、行が `rowIndex` である列のセル オブジェクトを返します。ない場合は `undefined` を返します。|
|`getCellByKey(rowSelector: any, columnField: string)`|Returns cell object **only if primary key is specified in the grid**, `rowSelector` match any rowID and columnField exists in the grid, else returns undefined.|
|`getRowByIndex(index: number)`|Returns row object if the specified rowIndex exist and is currently in the display area of the grid.|
|`getRowByKey(keyValue: any)`|Returns row object **only if primary key is specified in the grid** and the specified keyValue exist as a rowID in the grid.|
|`addRow(data: any)`|新しい行オブジェクトを作成し、データ レコードをデータ ソースの終了に追加します。|
|`deleteRow(rowSelector: any)`|Removes the row object and the corresponding data record from the data source **only if primary key is specified in the grid**. The method accept `rowSelector` as a parameter, which is the rowID.|
|`updateRow(value: any, rowSelector: any)`|Updates the row object, which is specified by `rowSelector` parameter /`rowSelector` parameter correspond to rowID/ and the data source record with the passed value. **This method will apply requested update only if primary key is specified in the grid.**|
|`updateCell(value: any, rowSelector: any, column: string)`|Updates the cell object and the record field in the data source. The method accept 3 parameters - `value` - the new value which is to be set, and the other two params `rowSelector` and `column` identify the cell which going to be updated. `rowSelector` corresponds to rowID and `column` to column field. **This method will apply requested update only if primary key is specified in the grid.**|
|`filter(name: string, value: any, conditionOrExpressionTree?: IFilteringOperation, ignoreCase?: boolean)`|単一の列をフィルターします。フィルタリング処理はパラメーターとして使用されます。利用可能な[フィルター条件](#フィルター条件)を参照してください。|
|`filter(name: string, value: any, conditionOrExpressionTree?: IFilteringExpressionsTree, ignoreCase?: boolean)`|単一の列をフィルターします。フィルタリング式ツリーはパラメーターとして使用されます。|
|`filterGlobal(value: any, condition?, ignoreCase?)`|同じ条件でグリッドのすべての列をフィルターします。|
|`filter(column: string, value: any, condition?, ignoreCase?: boolean)`|単一の列をフィルターします。利用可能な[フィルター条件](#フィルター条件)を参照してください。|
|`filter(expressions: Array)`|グリッド列を提供したフィルター式の配列に基づいてフィルターします。|
|`filterGlobal(value: any, condition? ignoreCase?)`|グリッドの列をすべてフィルターします。|
|`clearFilter(name?: string)`|`name` が提供された場合、相対する列のフィルター状態をクリアします。それ以外の場合、すべての列のフィルター状態をクリアします。|
|`sort(expression: ISortingExpression)`|単一の列を並べ替えます。|
|`sort(expressions: Array)`|グリッド列を提供した並べ替え式の配列に基づいて並べ替えます。|
|`clearSort(name?: string)`|`name` が提供された場合、相対する列の並べ替え状態をクリアします。それ以外の場合、すべての列の並べ替え状態をクリアします。|
|`enableSummaries(fieldName: string, customSummary?: any)`|指定した列で集計を有効にし、`customSummary` を適用します。`customSummary` を設定しない場合、列のデータ型のデフォルト集計が適用されます。|
|`enableSummaries(expressions: Array)`|列で集計を有効にし、提供される場合に `customSummary` を適用します。|
|`disableSummaries(fieldName: string)`|指定した列で集計を無効にします。|
|`disableSummaries(columns: string[])`|配列の列で集計を無効にします。|
|`clearSummaryCache()`|すべてのキャッシュされた集計を削除し、再計算を実行します。|
|`previousPage()`|ページングが有効で、現在のページが最初のページではない場合に前のページに移動します。|
|`nextPage()`|ページングが有効で、現在のページが最後のページではない場合に次のページに移動します。|
|`paginate(page: number)`|ページングが有効な場合、指定したページに移動します。ページ インデックスは 0 から開始します。|
|`markForCheck()`|グリッドおよびすべての子要素に変更検出サイクルを手動的にトリガーします。|
|`pinColumn(name: string): boolean`|列をフィールド名によってピン固定します。操作が成功したかどうかを返します。|
|`unpinColumn(name: string): boolean`|列をフィールド名によってピン固定解除します。操作が成功したかどうかを返します。|

<div class="divider--half"></div>

## IgxColumnComponent

### 入力

**IgxGridColumnComponent** で列を定義するために利用可能な入力:
| 名前 | 型 | 説明 |
| --- |--- | --- |
| `field` | string | 列フィールド名。 |
| `header` | string | 列ヘッダー テキスト。 |
| `sortable` | boolean | 列が並べ替え可能かどうかを設定します。 |
| `editable` | boolean | 列値を編集可能に設定します。 |
| `filterable` | boolean | 列値をフィルター可能に設定します。 |
|`hasSummary`| boolean  |特定の列に集計が有効化されるかどうかを設定します。|
|`summaries`| IgxSummaryOperand |指定した列にカスタム集計を設定します。|
| `hidden` | boolean | 列の表示状態。 |
| `movable` | boolean | 列移動。 |
|`resizable`|boolean|列をサイズ変更可能に設定します。|
| `width` | string | 列幅。 |
|`minWidth`|string|列の最小幅|
|`maxWidth`|string|列の最大幅|
|`headerClasses`|string|ヘッダー要素に適用される追加の CSS クラス。|
|`cellClasses`|string|この列のセルに適用される追加の CSS クラス。|
|`formatter`|Function|列にセル テンプレートを渡さずにセルの値をテンプレート化するために使用される関数。|
| `index` | string | 列インデックス。 |
|`filteringIgnoreCase`|boolean|フィルタリングが適用される場合に文字列の大文字化を無視します。デフォルトは _true_ です。|
|`sortingIgnoreCase`|boolean|並べ替えが適用される場合に文字列の大文字化を無視します。デフォルトは _true_ です。|
|`dataType`|DataType|string、number、boolean、または Date。フィルタリングが有効な場合、フィルター UI 条件は列の `dataType` に基づきます。設定されない場合、デフォルト値は `string` です。`autoGenerate` が有効な場合、グリッドはデータ ソースに基づいて各列の正しいデータ型を解決しようとします。|
|`pinned`|boolean|列がピン固定かどうかを設定します。|

### メソッド
**IgxGridColumnComponent** によって公開されるすべてのパブリック メソッドのリスト:

|構文|説明|
|--- |--- |
|`pin(): boolean`|列をピン固定します。操作が成功したかどうかを返します。|
|`unpin(): boolean`|列をピン固定解除します。操作が成功したかどうかを返します。|

<div class="divider--half"></div>

### ゲッター/セッター

|名前|型|ゲッター|セッター|説明|
|--- |--- |--- |--- |--- |
|`bodyTemplate`|TemplateRef|はい|はい|列のセルに適用されるテンプレートへの参照を取得または設定します。|
|`headerTemplate`|TemplateRef|はい|はい|列ヘッダーに適用されるテンプレートへの参照を取得または設定します。|
|`footerTemplate`|TemplateRef|はい|はい|列フッターに適用されるテンプレートへの参照を取得または設定します。|
|`inlineEditorTemplate`|TemplateRef|はい|はい|セルが編集モードに入るときに適用されるテンプレートへの参照を取得または設定します。|

<div class="divider--half"></div>

## フィルター条件

 5 つのフィルタリング オペランドを使用できます。
- `IgxFilteringOperand` は、カスタムフィルタリング条件の定義時に継承できるベース フィルタリング オペランドです。
- `IgxBooleanFilteringOperand` は、`boolean` 型のすべてのデフォルト フィルタリング条件を定義します。
- `IgxDateFilteringOperand` は、`Date` 型のすべてのデフォルト フィルタリング条件を定義します。
- `IgxNumberFilteringOperand` は、`numeric` 型のすべてのデフォルト フィルタリング条件を定義します。
- `IgxStringFilteringOperand` は、`string` 型のすべてのデフォルト フィルタリング条件を定義します。

```typescript
import {
    IgxBooleanFilteringOperand,
    IgxDateFilteringOperand,
    IgxFilteringOperand,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand,
} from 'igniteui-angular';
```

```typescript
public filter(term) {
    this.grid.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
}
```

### 文字列型

|名前|構文|説明|
|--- |--- |--- |
|`contains`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`target` が `searchVal` を含む場合 true を返します。|
|`startsWith`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`target` が `searchVal` で開始する場合 true を返します。|
|`endsWith`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`target` が `searchVal` で終了する場合 true を返します。|
|`doesNotContain`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`searchVal` が `target` にない場合、true を返します。|
|`equals`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`searchVal` が `target` と一致する場合、true を返します。|
|`doesNotEqual`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`searchVal` が `target` と一致しない場合、true を返します。|
|`null`|`(target: any)`|`target` が `null` の場合、true を返します。|
|`notNull`|`(target: any)`|`target` が `null` ではない場合、true を返します。|
|`empty`|`(target: any)`|`target` が `null`、`undefined`、または 0 長さの文字列の場合、true を返します。|
|`notEmpty`|`(target: any)`|`target` が `null`、`undefined`、または 0 長さの文字列ではない場合、true を返します。|

<div class="divider--half"></div>

### 数値型

|名前|構文|説明|
|--- |--- |--- |
|`equals`|`(target: number, searchVal: number)`|`target` が `searchVal` に等しい場合、true を返します。|
|`doesNotEqual`|`(target: number, searchVal: number)`|`target` が `searchVal` に等しくない場合、true を返します。|
|`doesNotEqual`|`(target: number, searchVal: number)`|`target` が `searchVal` より大きい場合、true を返します。|
|`lessThan`|`(target: number, searchVal: number)`|`target` が `searchVal` より小さい場合、true を返します。|
|`greaterThanOrEqualTo`|`(target: number, searchVal: number)`|`target` が `searchVal` 以上の場合、true を返します。|
|`lessThanOrEqualTo`|`(target: number, searchVal: number)`|`target` が `searchVal` 以下の場合、true を返します。|
|`null`|`(target: any)`|`target` が `null` の場合、true を返します。|
|`notNull`|`(target: any)`|`target` が `null` ではない場合、true を返します。|
|`empty`|`(target: any)`|`target` が `null`、`undefined`、または `NaN` の場合、true を返します。|
|`notEmpty`|`(target: any)`|`target` が `null`、`undefined`、または `NaN` ではない場合、true を返します。|

<div class="divider--half"></div>

### ブール値型

|名前|構文|説明|
|--- |--- |--- |
|`all`|`(target: boolean)`|すべての行を返します。|
|`true`|`(target: boolean)`|`target` が truthy の場合、true を返します。|
|`false`|`(target: boolean)`|`target` が falsy の場合、true を返します。|
|`null`|`(target: any)`|`target` が `null` の場合、true を返します。|
|`notNull`|`(target: any)`|`target` が `null` ではない場合、true を返します。|
|`empty`|`(target: any)`|`target` が `null` または `undefined` の場合、true を返します。|
|`notEmpty`|`(target: any)`|`target` が `null` または `undefined` ではない場合、true を返します。|

<div class="divider--half"></div>

### 日付型

|名前|構文|説明|
|--- |--- |--- |
|`equals`|`(target: Date, searchVal: Date)`|`target` が `searchVal` に等しい場合、`true` を返します。|
|`doesNotEqual`|`(target: Date, searchVal: Date)`|`target` が `searchVal` に等しくない場合、`true` を返します。|
|`before`|`(target: Date, searchVal: Date)`|`target` が `searchVal` より早い場合、`true` を返します。|
|`after`|`(target: Date, searchVal: Date)`|`target` が `searchVal` より遅い場合、`true` を返します。|
|`today`|`(target: Date)`|`target` が現在の日付の場合、`true` を返します。|
|`yesterday`|`(target: Date)`|`target` が現在の日付の前の日の場合、`true` を返します。|
|`thisMonth`|`(target: Date)`|`target` が現在の月に含まれる場合、`true` を返します。|
|`lastMonth`|`(target: Date)`|`target` が現在の月の前の月に含まれる場合、`true` を返します。|
|`nextMonth`|`(target: Date)`|`target` が現在の月の後の月に含まれる場合、`true` を返します。|
|`thisYear`|`(target: Date)`|`target` が現在の年に含まれる場合、`true` を返します。|
|`lastYear`|`(target: Date)`|`target` が現在の年の前の年に含まれる場合、`true` を返します。|
|`nextYear`|`(target: Date)`|`target` が現在の年の後の年に含まれる場合、`true` を返します。|
|`null`|`(target: any)`|`target` が `null` の場合、`true` を返します。|
|`notNull`|`(target: any)`|`target` が `null` ではない場合、`true` を返します。|
|`empty`|`(target: any)`|`target` が `null` または `undefined` の場合、`true` を返します。|
|`notEmpty`|`(target: any)`|`target` が `null` または `undefined` ではない場合、`true` を返します。|

<div class="divider--half"></div>

## IgxGridRowComponent

### ゲッター/セッター

|名前|型|ゲッター|セッター|説明|
|--- |--- |--- |--- |--- |
|`rowData`|Array|はい|いいえ|行コンポーネントに渡されるデータ。|
|`index`|number|はい|いいえ|行のインデックス。|
|`cells`|QueryList|はい|いいえ|行コンポーネントの描画されるセル。|
|`grid`|IgxGridComponent|はい|いいえ|行を含むグリッドへの参照。|
|`nativeElement`|HTMLElement|はい|いいえ|行を表すネイティブ DOM 要素。特定の環境で `null` 値が可能です。|

### Methods
|Signature|Description|
|--- |--- |
|`update(value: any)`|Updates the specified row object and the data source record with the passed value. This method emits `onEditDone` event.|
|`delete()`|Removes the specied row from the grid's data source. This method emits `onRowDeleted` event.|

<div class="divider--half"></div>

## IgxGridCellComponent

### ゲッター/セッター

|名前|型|ゲッター|セッター|説明|
|--- |--- |--- |--- |--- |
|`column`|IgxColumnComponent|はい|いいえ|セルが属する列。|
|`row`|IgxGridRowComponent|はい|いいえ|セルが属する行。|
|`value`|any|はい|いいえ|セルの値。|
|`rowIndex`|number|はい|いいえ|このセルが属する行のインデックス。|
|`columnIndex`|number|はい|いいえ|このセルが属する列のインデックス。|
|`grid`|IgxGridComponent|はい|いいえ|グリッド コンポーネント。|
|`inEditMode`|boolean|はい|はい|セルが編集モードにあるかどうかを取得または設定します。|
|`nativeElement`|HTMLElement|はい|いいえ|セルを表すネイティブ DOM 要素。特定の環境で `null` 値か可能です。|

### メソッド

|名前|戻り値の型|説明|
|--- |--- |--- |
|`update(val: any)`|void|`onEditDone` イベントを発生し、データ ソースで適切なレコードを更新します。|

### 追加のリソース
<div class="divider--half"></div>

* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列の移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
