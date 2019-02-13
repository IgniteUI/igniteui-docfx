---
title: Data Grid コンポーネント
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid
_language: ja
---

## Data Grid

<p class="highlight">Ignite UI for Angular Data Grid は、表形式でデータの表示や編集ができます。最小限のコードと構成でデータをすばやくバインドできます。フィルタリング、並べ替え、ページング、テンプレート、移動列、データの編集と更新機能をサポートします。ユーザー操作が簡単に認識できるため、コードで制御できます。</p>

### デモ

<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### 依存関係

グリッドが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に [`IgxGridModule`]({environment:angularApiUrl}/classes/igxgridmodule.html) をインポートする必要があります。

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

[`IgxGridModule`]({environment:angularApiUrl}/classes/igxgridmodule.html) の各コンポーネント、ディレクティブ、およびヘルパー クラスはグリッド サブパッケージまたは igniteui-angular のメイン バンドルでインポートできます。グリッドをインスタンス化して使用するためにすべての機能をインポートする必要はありませんが、グリッド API の一部である型を宣言する場合はインポート (またはエディターで自動的にインポート) します。

```typescript
import { IgxGridComponent } from 'igniteui-angular/grid/';
// Or
import { IgxGridComponent } from 'igniteui-angular'
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

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) プロパティは、データソース フィールドに基づいて **igx-grid** にグリッドの[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) を自動生成させます。列の適切なデータ型の決定を試みます。それ以外の場合、開発者は列およびデータ ソース フィールドへのマッピングを明示的に定義する必要があります。

### スタイルの構成
> [!NOTE]
> [**IgxGridComponent**]({environment:angularApiUrl}/classes/igxgridcomponent.html) は **css グリッド レイアウト**を使用しますが、プレフィックスなしでは IE でサポートされていないため、正しく描画できません。

[**Angular**](https://angular.io/) のほとんどのスタイルは [Autoprefixer](https://www.npmjs.com/package/autoprefixer) プラグインで暗示的にプレフィックスされてます。 

ただし、**グリッド レイアウト**のプレフィックスでは、[Autoprefixer](https://www.npmjs.com/package/autoprefixer) **グリッド プロパティ** をコメント `/* autoprefixer grid:on */` で有効にする必要があります。

作業を容易にするためにコメントを `src/styles.scss` ファイルに適用します。

 ```scss
 // src/styles.scss
    @import '~igniteui-angular/lib/core/styles/themes/index';
    @include igx-core();
    @include igx-theme($default-palette);

    /* autoprefixer grid:on */
 ...
 ``` 

### 列の構成

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) は、グリッドの _columns_ コレクションを定義し、**フィルタリング**、**並べ替え**、**ページング**など、列ごとの機能を有効にするために使用します。セル、ヘッダー、およびフッター テンプレートも利用できます。

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) プロパティを無効にし、マークアップで列コレクションを定義します。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)" [allowFiltering]="true">
    <igx-column field="Name" [sortable]="true" header=" "></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" header="Track progress" [filterable]="false">
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

`igxCell` は提供したテンプレートを列のすべてのセルに適用します。テンプレートで提供されるコンテキスト オブジェクトは暗示的に提供されたセル値およびセル オブジェクトです。以下のようにセルがコンテンツに応じて拡張するテンプレートを定義するために使用できます。

```html
...
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
...
```

上記のスニペットで暗示的に提供されたセル値への参照を取得します。データを表示し、セルの値にカスタム スタイル設定およびパイプ変換を適用する場合に使用します。ただし、[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) オブジェクトを以下のように使用するとより効果的です。

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

列は、セルが編集モードにある場合に使用されるテンプレートを使用します。その他の列テンプレートと同じように、提供されるコンテキスト オブジェクトはセル値およびセル オブジェクトです。編集モード テンプレートをユーザー アクセス可能にするには、[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) プロパティを `true` に設定します。

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

テンプレートで使用可能なプロパティの詳細については、[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) の API を参照してください。

各列テンプレートが [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) オブジェクトでコードによって変更可能です。以下のコード例で、ユーザー データの 2 つのテンプレートを宣言しました。TypeScript コードでテンプレートへの参照を取得し、条件に基づいてアプリケーションで列の適切なテンプレートを描画します。

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

列プロパティもグリッドで列が初期化されるときに発生される [`initColumns`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) イベントのコードで設定できます。

```typescript
public initColumns(column: IgxGridColumn) {
    const column: IgxColumnComponent = column;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```

上記のコードは **ProductName** 列の並べ替えや編集機能を有効にし、対応する機能の UI (編集の入力など) をインスタンス化します。

### データ構造

[IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html) は**フラットデータ**のみ取得します。描画に固有のデータ構造はフォームにあります。 

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    {
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    .
    .
    .,
    {
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN 
    }];

```
>[!WARNING]
>**キー値に配列またはその他のオブジェクトを含まないでください。**

>[autoGenerate]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) 列を使用する場合、データキーが同一である必要があります。

### データ バインディング

はじめにリモート データ サービスにバインドするためにグリッドを変更します。大規模なアプリケーション レベルでは一般的なシナリオです。すべてのデータ取得に関連するロジックを別のデータ サービスに分割することがベスト プラクティスであるため、サーバーからデータの取得を処理するサービスを作成します。

サービスを別のファイルで実装します。

```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```

各 Angular サービス定義で[必須要素](https://angular.io/guide/dependency-injection) となる `Injectable` デコレータをインポートします。`HttpClient` はバックエンド サービスに接続する機能を提供します。グリッド コンポーネントにサブスクライブする結果である `Observable` を返します。

**注**: Angular 5 の前では `HttpClient` が`@angular/http` にあり、名前は `Http` でした。

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

サービスは `Observable<NorthwindRecord[]>` を返す `fetchData` の単一のメソッドを含みます。要求が任意の理由 (サーバーが利用不可、ネットワーク エラーなど) により失敗した場合、`HttpClient` はエラーを返します。`catchError` 演算子を使用して失敗した Observable を傍受してエラーをエラー ハンドラーへ渡します。エラー ハンドラーはエラーをログして値を返します。

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

**注**: 以下のコードでは、サービスに加入する前に records プロパティを空の配列に設定しています。Http 要求は非同期です。完了するまで records プロパティは undefined で、グリッドをプロパティにバインドするときにエラーが発生されます。デフォルト値に初期化、または `BehaviorSubject` を使用します。

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

**注**: リモート データにバインドする場合、グリッドの [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) プロパティは使用しないことをお勧めします。データを検証して適切な列を生成するためにデータが利用可能である必要があります。リモート サービスの応答が完了するまでデータが利用できないため、グリッドはエラーを発生します。リモート サービスへバインド時に [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) を使用する機能は今後追加予定です。

### キーボード ナビゲーション
キーボード ナビゲーションはすべてのグリッドでデフォルトで有効です。エンドユーザーの要件に合わせて機能を追加できます。以下は、特定のセルをフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

 - `上矢印` - 1 つ上のセルへ移動 (ラッピングなし)
 - `下矢印` - 1 つ下のセルへ移動 (ラッピングなし)
 - `左矢印` - 1 つ左のセルへ移動 (行間のラッピングなし)
 - `右矢印` - 1 つ右のセルへ移動 (行間のラッピングなし)
 - `Ctrl + 上矢印` - 現在の列の最初のセルへ移動
 - `Ctrl + 下矢印` - 現在の列の最後のセルへ移動
 - `Ctrl + 左矢印` -  行の左端のセルへ移動
 - `Home` - 行の左端のセルへ移動
 - `Ctrl + Home` - 行の左端のセルへ移動
 - `Ctrl + 右矢印` -  行の右端のセルへ移動
 - `End` - 行の右端のセルへ移動
 - `Ctrl + End` -  行の右端のセルへ移動
 - `Page Up` - 1 ページ (ビューポート) 上へスクロール
 - `Page Down` - 1 ページ (ビューポート) 下へスクロール
 - `Enter` - 編集モードに入る
 - `F2` - 編集モードに入る
 - `Esc` - 編集モードを終了する
 - `Tab` - フォーカスを行の次のセルへ順番に移動し、最後のセルのあとは次の行へ移動します。次の行がグループ行の場合、行全体がフォーカスされます。データ行の場合、最初のセルにフォーカスを移動します。セルが編集モードの場合、フォーカスを次の編集可能なセルへ移動し、編集可能な一番右のセルから`CANCEL`、`DONE` ボタン、`DONE` から編集可能な一番左のセルへ移動します。
 - `Shift + Tab` - 行の前のセルへフォーカスを順番に移動し、最初のセルの次に前の行へフォーカスを移動します。前の行がグループ行の場合、行全体をフォーカスします。データ行の場合、最後のセルをフォーカスします。セルが編集モードの場合、フォーカスを次の編集可能なセルへ移動し、編集可能な一番右のセルから `CANCEL` および `DONE` ボタン、`DONE` から編集可能な一番左のセルへ移動します。
 - `Space` -  行が選択可能な場合、スペースキーを押下すると行選択をトリガーします。
 - GroupRow \ Tree Grid 行で `Alt + 左矢印` - 行が縮小されていない場合はグループ行コンテンツを縮小します。
 - GroupRow \ Tree Grid 行で `Alt + 右矢印` - 行が展開されていない場合はグループ行コンテンツを展開します。
 - マウス `ホイール` - フォーカス要素をぼかします。

### 更新ライブデモ

ライブデータにバインドした `igxGrid` のサンプルです。 

<div class="sample-container loading" style="height:915px">
    <iframe id="grid-sample-finjs-iframe" src='{environment:demosBaseUrl}/finjs-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

## 既知の問題と制限

|制限|説明|
|--- |--- |
|`percentage` および `px` で設定した列幅|列に `%` と `px` を組み合わせて使用することはできません。|
|`number` 型の列をフィルターする場合|フィルター入力に入力された値が `number` と異なる場合、キャストが正しくないため `NaN` が返されます。|
|グリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) が列幅に依存しない | すべての列の [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) でグリッド自体のスパンは決定しません。親コンテナーのディメンションまたは定義したグリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) で決定されます。|
|親コンテナーでネストされた Grid | グリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) を設定せずに定義済みのディメンションで親コンテナーに配置した場合、グリッドがコンテナーに合わせてスパンします。|
|Grid `OnPush` ChangeDetectionStrategy|グリッドで `ChangeDetectionStrategy.OnPush` を処理し、カスタム表示されたときにグリッドに発生した変更について通知します。|
| 列には設定可能な最小幅があります。[`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) オプションに基づきます。 <br/>"compact": 24px <br/> "cosy": 32px <br/> "comfortable ": 48px | 許容される最小幅未満に設定した場合、描画要素には影響せずに対応する [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) に合わせて許容される最小幅で描画します。水平方向の仮想化は予期しない動作を招く場合があるためサポートしていません。
| ビューに描画されていないセル高さは行の高さに影響しません。| 仮想化のため、セルの高さを変更するビューにないカスタム テンプレートの列は行の高さに影響しません。関連する列がビューにスクロールされるときのみ行の高さに影響します。

<div class="divider--half"></div>

## API
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
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
