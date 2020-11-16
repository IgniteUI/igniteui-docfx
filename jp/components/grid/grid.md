---
title: Angular Data Grid | 高速な Angular テーブルを構築する | インフラジスティックス
_description: Ignite UI for Angular を使用して、超高速でレスポンシブな Angular データ グリッドとテーブルを作成します。 編集、フィルタリング、データ バインディングなどをサポートします。 30 日間の無料トライアル。
_keywords: angular データ グリッド, angular マテリアル テーブル, ignite ui for angular
_language: ja
---

# Angular データ グリッドの概要と構成

Ignite UI for Angular Data Grid は、データの表示や操作が簡単にできます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。Material Table ベースの UI グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。

## Angular データ グリッドの例

Boston Marathon 2020 – この Angular グリッドの例では、ユーザーが基本スタイルと Excel スタイルの両方のフィルタリング、ライブ データのソート、および[スパークライン](../sparkline.md) コンポーネント、[Circular Progress Indicator](../circular-progress.md) コンポーネントと [Icons](../icon.md) を含むグリッド集計とセル テンプレートの使用を実行する方法を確認できます。デモには、[Angular 改ページ](paging.md)のカスタム ページングとページごとの使用法も含まれています。

<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-iframe" src='{environment:lobDemosBaseUrl}/grid/grid' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular データ グリッドの例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## Ignite UI for Angular Data Grid で作業を開始
### 依存関係

>[!NOTE]
>**このコンポーネントでは、タッチ操作が正しく動作するために、アプリケーションのルート モジュールに [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) をインポートする必要があります。**.

Angular データ グリッドを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](../general/getting-started.md)トピックををご覧ください。

Angular グリッドが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxGridModule` をインポートする必要があります。

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

`IgxGridModule` の各コンポーネント、ディレクティブ、およびヘルパー クラスはグリッド サブパッケージまたは igniteui-angular のメイン バンドルでインポートできます。グリッドをインスタンス化して使用するためにすべての機能をインポートする必要はありませんが、グリッド API の一部である型を宣言する場合はインポート (またはエディターで自動的にインポート) します。

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

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) プロパティは、データソース フィールドに基づいて **igx-grid** にグリッドの[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) を自動生成させます。列の適切なデータ型の決定を試みます。それ以外の場合、開発者は列およびデータ ソース フィールドへのマッピングを明示的に定義する必要があります。

## Angular Grid スタイルの構成
> [!NOTE]
> [**IgxGridComponent**]({environment:angularApiUrl}/classes/igxgridcomponent.html) は **css グリッド レイアウト**を使用しますが、**プレフィックスなしでは IE でサポートされていない**ため、正しく描画できません。

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

## Angular Grid 列の構成

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) は、グリッドの [`columns`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columns) コレクションを定義し、**ソート**、**ページング**など、列ごとの機能を有効にするために使用します。セル、ヘッダー、およびフッター テンプレートも利用できます。


### 列の定義

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

グリッドの各列は別のテンプレートを持つことができます。列に `ng-template` Angular グリッド モジュール ディレクティブが必要です。

### ヘッダー テンプレート

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

>[!NOTE]
>グループ化/移動機能と一緒にヘッダー テンプレートを使用すると、*列ヘッダー領域*は**ドラッグ可能**になり、ヘッダー テンプレートのカスタム要素部分に**ドラッグ不可**としてマークするまでアクセスできません。以下は例です。

```html
<igx-column #col field="ProductName" header="Product Name"
    [groupable]="true" [movable]="true" [hasSummary]="true">
    <ng-template igxHeader let-col>
        <div class="text">{{col.field}}</div>
        <igx-icon (click)="toggleSummary(col)" [attr.draggable]="false">functions
        </igx-icon>
    </ng-template>
</igx-column>
```
**draggable** 属性を false に設定して追加しています。

### セル テンプレート

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

`ngModel` を使用して**セル テンプレート**を介してデータを変更する場合、適切な API メソッドを呼び出して、Angular グリッドの基になるデータ コレクションで値が正しく更新されることを確認する必要があります。上記のスニペットでは、`ngModelChange` 呼び出しはグリッドの[編集 API](editing.md#API-を介した編集) を通過し、グリッドの編集パイプラインを通過し、トランザクション (該当する場合) を適切にトリガーし、[集計](summaries.md)、[選択](selection.md) などの処理を行います。ただし、この `ngModelChange` はユーザーが編集を完了したときだけでなく、セルが変更され、より多くの API 呼び出しが発生します。

> [!NOTE]
> グリッドは、数値、文字列、日付、およびブール列タイプのデフォルトの処理を公開します。例えば、ブール列タイプの場合に列はデフォルトで true/false の代わりに`チェック`または`閉じる`アイコンを表示します。

セル内のデータが `[(ngModel)]` でバインドされていて、値の変更が処理されない場合、新しい値は Angular グリッドの基になるデータソースで適切に**更新されません**。カスタム テンプレートを使用してセルの編集を行う場合は、セルの**セル編集テンプレート**を使用することを強くお勧めします。

適切に実装されると、セル編集テンプレートは、セルの `editValue` がグリッド[編集イベント サイクル](editing.md#編集イベント) を正しく渡します。

### セル編集テンプレート

列は、セルが編集モードにある場合に使用されるテンプレートを使用します。その他の列テンプレートと同じように、提供されるコンテキスト オブジェクトはセル値およびセル オブジェクトです。編集モード テンプレートをユーザー アクセス可能にするには、[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) プロパティを `true` に設定します。

```html
<igx-column dataType="number" editable="true" field="Price">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [(ngModel)]="cell.editValue" />
    </ng-template>
</igx-column>
```

テンプレートで使用可能なプロパティの詳細については、[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) の API を参照してください。

### 列テンプレート API

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

上記のコードは **ProductName** 列のソートや編集機能を有効にし、対応する機能の UI (編集の入力など) をインスタンス化します。

### カスタム表示形式

日付列または数値列のすべての値は、[`Angular DatePipe`](https://angular.io/api/common/DatePipe) または [`DecimalPipe`](https://angular.io/api/common/DecimalPipe) を介して変換されます。これは元の値を変更せず、列に表示される値のみを変更します。デフォルトでは、値はグリッドの[`ロケール`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale)に従って表示されます (指定しない場合、アプリケーション ロケールにフォールバックします。デフォルトは `'en-US'` です)。

詳細については、[「Setting up the locale of your app (英語)」](https://angular.io/guide/i18n#setting-up-the-locale-of-your-app)をご覧ください。

また、書式設定のためのオプションのパラメーターがあります。

- `format` - 表示される日付/時間部分を決定します。デフォルトの設定は `'mediumDate'` です (`'MMM d, y'`)。
- `timezone` - 日付のタイムゾーン オフセット。デフォルトでは、エンドユーザーのローカル システムのタイムゾーンを使用します。
- `digitsInfo` - 10 進表現オブジェクト。デフォルトの設定は `'1.0-3'` です。

これらのパラメーターによって表示形式をカスタマイズできるようにするには、[`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) 入力を公開します。`pipeArgs` が設定されている場合、列はそのデータ型の対応するプロパティのみに遵守します。例:

```typescript
const pipeArgs: IColumnPipeArgs = {
     format: 'longDate',
     timezone: 'UTC',
     digitsInfo: '1.1-2'
}
```
```html
<igx-column field="OrderDate" dataType="date" [pipeArgs]="pipeArgs"></igx-column>
<igx-column field="UnitPrice" dataType="number" [pipeArgs]="pipeArgs"></igx-column>
```

`OrderDate` 列は `format` および `timezone` プロパティのみに遵守しますが、`UnitPrice` は `digitsInfo` のみに遵守します。詳細については、[「Localizing your app (英語)」](https://angular.io/guide/i18n)で Angular の公式ドキュメントを参照してください。

## Angular Grid データ構造

[IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html) は**フラット データ**とネストされた **POJOs (Plain old Java objects)** を処理します。描画に固有のデータ構造はフォームにあります。

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    .
    .
    .
  }];

const POJO = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: {
          ObjectKeyN1: value1,
          ObjectKeyN2: value2,
          .
          .
          .
          ObjectKeyNM: valueNM,
        }
    },
    .
    .
    .
  }];

```
>[!WARNING]
>**キー値に配列を含まないでください。**

>[autoGenerate]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) 列を使用する場合、データキーが同一である必要があります。

## Angular Grid データ バインディング

はじめにリモート データ サービスにバインドするために Angular グリッドを変更します。大規模なアプリケーション レベルでは一般的なシナリオです。すべてのデータ取得に関連するロジックを別のデータ サービスに分割することがベスト プラクティスであるため、サーバーからデータの取得を処理するサービスを作成します。

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

## 複雑なデータ バインディング

[IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html) は、データ レコード内のプロパティのパスを介した複合オブジェクト (1 レベルより深いネストを含む) へのバインドをサポートします。

次のデータ モデルを見てください:
```typescript
interface AminoAcid {
    name: string;
    abbreviation: {
        short: string;
        long: string;
    }
    weight: {
        molecular: number;
        residue: number;
    },
    formula: {
        molecular: string;
        residue: string;
    }
    ...
}
```
たとえば、グリッド内の特定のアミノ酸の重みを表示するには、次のスニペットで十分です。
```html
<igx-column field="weight.molecular"></igx-column>
<igx-column field="weight.residue"></igx-column>
```
詳しくは、以下のサンプルを参照してください。このバインディングのタイプは、グリッドに期待されるすべてのデフォルト機能をサポートします。
つまり、追加の構成を行わなくても、すべてのソートおよびフィルタリング操作がそのまま使用できます。トランザクションの有無に関係なく、グループ化と編集の操作、およびバインドされた列のセルをテンプレート化する機能についても同様です。

>[!WARNING]
>グリッドは、`primary key`、`foreign key` および `child key` プロパティのこの種のバインディングを**サポートしていません**。

<div class="sample-container loading" style="height:460px">
    <iframe id="grid-nested-data-amino-iframe" data-src='{environment:demosBaseUrl}/grid/grid-nested-data-binding-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-nested-data-amino-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-nested-data-amino-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

**IgxGrid** で複雑なデータをバインドまたは複合データ (複数の列から) を可視化する別の方法は、列にカスタム ボディ テンプレートを使用することです。通常、以下のことができます。
    - ネストされたデータを含むセルの値を使用します。
    - `rowData` にアクセスするためにテンプレートの `cell` オブジェクトを使用します。それから、セルから任意の値 (`cell.rowData[field]` など) を取得します。

それをテンプレートに挿入します。

以下は使用するデータです。

```typescript
export const EMPLOYEE_DATA = [
    {
        Age: 55,
        Employees: [
            {
                Age: 43,
                HireDate: new Date(2011, 6, 3),
                ID: 3,
                Name: "Michael Burke",
                Title: "Senior Software Developer"
            },
            {
                Age: 29,
                HireDate: new Date(2009, 6, 19),
                ID: 2,
                Name: "Thomas Anderson",
                Title: "Senior Software Developer"
            },
            {
                Age: 31,
                HireDate: new Date(2014, 8, 18),
                ID: 11,
                Name: "Monica Reyes",
                Title: "Software Development Team Lead"
            },
            {
                Age: 35,
                HireDate: new Date(2015, 9, 17),
                ID: 6,
                Name: "Roland Mendel",
                Title: "Senior Software Developer"
            }],
        HireDate: new Date(2008, 3, 20),
        ID: 1,
        Name: "John Winchester",
        Title: "Development Manager"
    },
...
```
ネスト データをレンダリングする列のカスタム テンプレート。

```html
...
 <igx-column field="Employees" header="Employees" [cellClasses]="{ expand: true }" width="40%">
        <ng-template #nestedDataTemp igxCell let-people let-cell="cell">
            <div class="employees-container">
                <igx-expansion-panel *ngFor="let person of people">
                    <igx-expansion-panel-header iconPosition="right">
                        <igx-expansion-panel-description>
                            {{ person.Name }}
                        </igx-expansion-panel-description>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        <div class="description">
                            <igx-input-group (keydown)="stop($event)" displayDensity="compact">
                                <label igxLabel for="title">Title</label>
                                <input type="text" name="title" igxInput [(ngModel)]="person.Title" style="text-overflow: ellipsis;" />
                            </igx-input-group>
                            <igx-input-group (keydown)="stop($event)" displayDensity="compact" style="width: 15%;">
                                <label igxLabel for="age">Age</label>
                                <input type="number" name="age" igxInput [(ngModel)]="person.Age" />
                            </igx-input-group>
                        </div>
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
            </div>
        </ng-template>
 </igx-column>
...
```

以下は、この設定の結果です。

<div class="sample-container loading" style="height:460px">
    <iframe id="grid-nested-dataBind-iframe" data-src='{environment:demosBaseUrl}/grid/grid-nested-data-binding' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-nested-dataBind-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-nested-dataBind-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### フラット データの使用

フラットデータバインディングのアプローチは既に説明したものと似ていますが、**セル値**の代わりに、[IgxRowDirective]({environment:angularApiUrl}/classes/igxrowdirective.html) の [`rowData`]({environment:angularApiUrl}/classes/igxrowdirective.html#rowdata) プロパティを使用します。

Angular グリッドはデータレコードを**レンダリング**、**操作**、**保存**するためのコンポーネントのため、**すべてのデータ レコード**へアクセスすることで、それを処理する方法をカスタマイズすることができます。それには、[`rowData`]({environment:angularApiUrl}/classes/igxrowdirective.html#rowdata) プロパティを使用します。

以下は使用するデータです。
```typescript
export const DATA: any[] = [
    {
        Address: "Obere Str. 57",
        City: "Berlin",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        Country: "Germany",
        Fax: "030-0076545",
        ID: "ALFKI",
        Phone: "030-0074321",
        PostalCode: "12209",
        Region: null
    },
...
```
カスタム テンプレート:

```html
...
<igx-column field="Address" header="Address" width="25%" editable="true">
                <ng-template #compositeTemp igxCell let-cell="cell">
                    <div class="address-container">
                    // In the Address column combine the Country, City and PostCode values of the corresponding data record
                        <span><strong>Country:</strong> {{cell.row.rowData.Country}}</span>
                        <br/>
                        <span><strong>City:</strong> {{cell.row.rowData.City}}</span>
                        <br/>
                        <span><strong>Postal Code:</strong> {{cell.row.rowData.PostalCode}}</span>
                    </div>
                </ng-template>
...
```
上記で定義したテンプレートでは編集操作ができないため、エディター テンプレートが必要であることに注意してください。

```html
...
                 <ng-template  igxCellEditor let-cell="cell">
                        <div class="address-container">
                        <span>
                            <strong>Country:</strong> {{cell.row.rowData.Country}}
                            <igx-input-group width="100%">
                                    <input igxInput [(ngModel)]="cell.row.rowData.Country" />
                            </igx-input-group>
                        </span>
                            <br/>
                            <span><strong>City:</strong> {{cell.row.rowData.City}}</span>
                            <igx-input-group width="100%">
                                    <input igxInput [(ngModel)]="cell.row.rowData.City" />
                            </igx-input-group>
                            <br/>
                            <span><strong>Postal Code:</strong> {{cell.row.rowData.PostalCode}}</span>
                            <igx-input-group width="100%">
                                    <input igxInput [(ngModel)]="cell.row.rowData.PostalCode" />
                            </igx-input-group>
                            <br/>
                        </div>
                </ng-template>
</igx-column>
...
```
以下は結果です。

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-composite-dataBind-iframe" data-src='{environment:demosBaseUrl}/grid/grid-composite-data-binding' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-composite-dataBind-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-composite-dataBind-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## キーボード ナビゲーション
Grid のキーボード ナビゲーションは、さまざまなキーボード操作をユーザーに提供します。アクセシビリティが向上し、内部の要素 (セル、行、列ヘッダー、ツールバー、フッターなど) を直感的にナビゲートできます。詳細については、これらのリソースを参照してください。
 - [Grid キーボード ナビゲーション](../grid/keyboard-navigation.md)
 - [TreeGrid キーボード ナビゲーション](../treegrid/keyboard-navigation.md)
 - [Hierarchical Grid キーボード ナビゲーション](../hierarchicalgrid/keyboard-navigation.md)
 -「Improving Usability, Accessibility and ARIA Compliance with Grid keyboard navigation」の[ブロク](https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility)

## パーシステンス (永続化) 状態

新しい組み込みの [`IgxGridState`](state-persistence.md) ディレクティブを使用することで、状態永続フレームワークの実装が更に簡単になりました。


## サイズ変更

[グリッドのサイズ変更](sizing.md) トピックをご覧ください。

## 既知の制限

|制限|説明|
|--- |--- |
|`percentage` および `px` で設定した列幅|列に `%` と `px` を組み合わせて使用することはできません。|
|`number` 型の列をフィルターする場合|フィルター入力に入力された値が `number` と異なる場合、キャストが正しくないため `NaN` が返されます。|
|グリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) が列幅に依存しない | すべての列の [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) でグリッド自体のスパンは決定しません。親コンテナーのディメンションまたは定義したグリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) で決定されます。|
|親コンテナーでネストされた Grid | グリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) を設定せずに定義済みのディメンションで親コンテナーに配置した場合、グリッドがコンテナーに合わせてスパンします。|
|Grid `OnPush` ChangeDetectionStrategy|グリッドで `ChangeDetectionStrategy.OnPush` を処理し、カスタム表示されたときにグリッドに発生した変更について通知します。|
| 列には設定可能な最小幅があります。[`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) オプションに基づきます。 <br/>"compact": 56px <br/> "cosy": 64px <br/> "comfortable ": 80px | 許容される最小幅未満に設定した場合、描画要素には影響せずに対応する [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) に合わせて許容される最小幅で描画します。水平方向の仮想化は予期しない動作を招く場合があるためサポートしていません。
| ビューに描画されていないセル高さは行の高さに影響しません。|仮想化のため、セルの高さを変更するビューにないカスタム テンプレートの列は行の高さに影響しません。関連する列がビューにスクロールされるときのみ行の高さに影響します。

> [!NOTE]
> `igxGrid` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が `igxGrid` で有効です。詳細については、[igxForOf 既知の問題](../for-of.html#既知の問題と制限) のセクションを参照してください。

<div class="divider--half"></div>

## API リファレンス
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

## その他のリソース
<div class="divider--half"></div>

* [グリッドのサイズ変更](sizing.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
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
