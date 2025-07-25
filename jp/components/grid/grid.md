---
title: Angular Data Grid | 高速な Angular テーブルを構築する | インフラジスティックス
_description: Ignite UI for Angular で超高速でレスポンシブな Angular データ グリッドとテーブルを作成します。編集、フィルタリング、データ バインディングなどをサポートします。今すぐお試しください。
_keywords: angular data grid, angular grid コンポーネント, angular data grid コンポーネント, angular table コンポーネント, angular data table コンポーネント, angular table, angular UI コンポーネント, ignite ui for angular
_language: ja
---

<style>
.sample-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.sample-column {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 0 25%;
    align-content: flex-start;
    min-width: 280px;
}

.tabbar-wrapper {
    width: inherit;
    position: relative;
    height: 100%;
    margin: 0 auto;
}

.tabbar-wrapper > p {
    padding-right: 20px
}
</style>

# Angular データ グリッド コンポーネントの概要

<div class="sample-content">
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <p>Angular Data Grid は、データを表形式で表示するためのコンポーネントです。最新のグリッドは複雑で、通常、データ選択、Excel スタイルのフィルタリング、ソート、ページング、グループ化、テンプレート化、列の移動、列のピン固定、Excel へのエクスポート、CSV 形式などの大規模な機能セットが詰め込まれています。</p>
            <p>Ignite UI Angular Data Grid は、これらの基本的なグリッド機能をすべてカバーするだけでなく、一括編集、状態保持、キーボード ナビゲーションなどの高度な機能も備えています。当社のコンポーネントは、さまざまなデータ ソースとのシームレスな統合を保証し、最高のパフォーマンスとスケーラビリティを提供するため、大規模なデータセットを処理するアプリや、高速なリアルタイム更新を必要とするアプリに最適です。</p>
        </div>
    </article>
    <article class="sample-column">
        <div class="tabbar-wrapper">
            <div class="tab-content">
                <img class="b-lazy responsive-img"
                    src="../../images/general/landing-grid-page.png" 
                    data-src="../../images/general/landing-grid-page.png" 
                    data-srcset="../../images/general/landing-grid-page.png 480w, ../../images/general/landing-grid-page.png 768w, ../../images/general/landing-grid-page.png 1100w" 
                    alt="Angular データ グリッド"
                    title="Angular Data Grid">
                </div>
        </div>
    </article>
</div>

## Angular データ グリッドの例

Boston Marathon 2021 – この Angular グリッドの例では、ユーザーが基本スタイルと Excel スタイルの両方のフィルタリング、ライブ データのソート、および[スパークライン](../charts/types/sparkline-chart.md) コンポーネント、[Circular Progress Indicator](../circular-progress.md) コンポーネントと [Icons](../icon.md) を含むグリッド集計とセル テンプレートの使用を実行する方法を確認できます。デモには、[Angular ページネーション](paging.md)のカスタム ページングとページごとの使用法も含まれています。


<code-view style="height:700px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           img-src="https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-marathon-app"
           iframe-src="{environment:lobDemosBaseUrl}/grid/grid" alt="Angular データ グリッドの例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Data Grid を使用した作業の開始

>[!NOTE]
>このコンポーネントは、**オプションで** [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を利用できます。タッチ操作が正しく動作するために、アプリケーションのルート モジュールにインポートできます。

Ignite UI for Angular Data Grid コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxGridModule` をインポートします。

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-angular';
// import { IgxGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxGridModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxGridComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/grid/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-grid [data]="localData" [autoGenerate]="true"></igx-grid>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_GRID_DIRECTIVES]
    /* or imports: [IgxGridComponent] */
})
export class HomeComponent {
    public data: Product [];
}
```

Ignite UI for Angular Grid モジュールまたはディレクティブをインポートしたので、`igx-grid` コンポーネントの使用を開始できます。

## Using the Angular Data Grid

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

**data** プロパティは、グリッド (この場合はオブジェクトのローカル配列) をバインドします。

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) プロパティは、データソース フィールドに基づいて `igx-grid` にグリッドの[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) を自動生成させます。開発者は[列](#angular-grid-列の構成)およびデータ ソース フィールドへのマッピングを明示的に定義することもできます。

## Angular Bootstrap グリッドの定義
<p>Ignite UI for Angular には、Flex に基づくレイアウト システムのような強力なブートストラップ グリッドが含まれています。今日の最新のアプリケーションは、レスポンシブ Web デザインのアプローチに従うことが期待されています。つまり、デバイスのサイズに基づいて、または単にブラウザーのサイズを変更するだけで、HTML 要素のレイアウトを適切に調整できます。Angular ブートストラップ グリッド レイアウトはこれまで最も使用されていたアプローチでしたが、CSS グリッドのような Flex に基づくレイアウト システムは、どのブラウザーでも機能するため、より一般的になりました。Ignite UI for Angular Layout ディレクティブにより、コンテンツ/テキストの折り返し、両端揃え、配置など、垂直方向と水平方向のフローが可能になります。Ignite UI for Angular グリッドは、CSS を使用したレスポンシブ レイアウトをサポートし、サイズ変更時のグリッドの動作に究極の柔軟性を提供します。</p>

## Angular Grid スタイルの構成
> [!NOTE]
> [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) は **css グリッド レイアウト**を使用しますが、**プレフィックスなしでは IE でサポートされていない**ため、正しく描画できません。

[**Angular**](https://angular.io/) のほとんどのスタイルは [Autoprefixer](https://www.npmjs.com/package/autoprefixer) プラグインで暗示的にプレフィックスされてます。

ただし、**グリッド レイアウト**のプレフィックスでは、[Autoprefixer](https://www.npmjs.com/package/autoprefixer) **グリッド プロパティ** をコメント `/* autoprefixer grid:on */` で有効にする必要があります。

作業を容易にするためにコメントを `src/styles.scss` ファイルに適用します。

 ```scss
// src/styles.scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
/* autoprefixer grid:on */
@include theme($default-palette);
 ```

## 編集可能な Angular グリッド
<p>Angular グリッド編集の各操作にはバッチ操作が含まれます。つまり、API には、編集を単一のサーバー呼び出しにグループ化するオプションがあります。または、グリッドの操作を使用して、グリッドの編集を実行したり、発生した操作を更新したりできます。CRUD 操作を備えた編集可能な Angular グリッドとしての優れた開発者エクスペリエンスに加えて、Angular グリッドには Excel のようなキーボード ナビゲーションが含まれています。一般的なデフォルトのグリッド ナビゲーションに加えて、お客様のニーズを満たすためにナビゲーション オプションを上書きするオプションが含まれています。優れたナビゲーション スキームを備えた Angular の編集可能なグリッドは、最新の業務アプリケーションにとって重要であり、Ignite UI グリッドを使用すると簡単になります。</p>

このトピックに続いて、[セル テンプレート](grid.md#セル-テンプレート)と[セル編集テンプレート](grid.md#セル編集テンプレート)および編集について詳しく学習します。

## Angular Grid 列の構成

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) は、グリッドの [`columns`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columns) コレクションを定義し、**ソート**、**フィルタリング**など、列ごとの機能を有効にするために使用します。セル、ヘッダー、およびフッター テンプレートも利用できます。

### 列の定義

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) プロパティを無効にし、マークアップで列コレクションを定義します。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)" [allowFiltering]="true">
    <igx-column field="Name" [sortable]="true" header=" "></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" header="Track progress" [filterable]="false">
        <ng-template igxCell let-value>
            <igx-linear-bar [stripped]="false" [value]="value" [max]="100"></igx-linear-bar>
        </ng-template>
    </igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-grid>
```

グリッドの各列は別のテンプレートを持つことができます。列に `ng-template` Angular グリッド モジュール ディレクティブが必要です。

また、カスタム プロパティや列自体に渡す任意のタイプのデータ コンテキストに使用できる [`additionalTemplateContext`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#additionalTemplateContext) 入力も公開します。

```html
<igx-column [additionalTemplateContext]="contextObject">
    <ng-template igxCell let-cell="cell" let-props="additionalTemplateContext">
        {{ props.firstProperty }}
    </ng-template>
</igx-column>
```

```ts
public contextObject = { firstProperty: 'testValue', secondProperty: 'testValue1'};
```

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
    [groupable]="true" [hasSummary]="true">
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

上記のスニペットで暗示的に提供されたセル値への参照を取得します。データを表示し、セルの値にカスタム スタイル設定およびパイプ変換を適用する場合に使用します。ただし、[`CellType`]({environment:angularApiUrl}/interfaces/celltype.html) オブジェクトを以下のように使用するとより効果的です。

```html
<igx-grid #grid [data]="data">
    <igx-column dataType="string" field="Name">
        <ng-template igxCell let-cell="cell">
            <!-- Implement row deleting inside the cell template itself -->
            <span tabindex="0" (keydown.delete)="grid.deleteRow(cell.row.index)">{{ cell.value | titlecase }}</span>
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

`ngModel` を使用して**セル テンプレート**を介してデータを変更する場合、適切な API メソッドを呼び出して、Angular グリッドの基になるデータ コレクションで値が正しく更新されることを確認する必要があります。上記のスニペットでは、`ngModelChange` 呼び出しはグリッドの[編集 API](cell-editing.md#api-を介した編集) を通過し、グリッドの編集パイプラインを通過し、トランザクション (該当する場合) を適切にトリガーし、[集計](summaries.md)、[選択](selection.md) などの処理を行います。ただし、この `ngModelChange` はユーザーが編集を完了したときだけでなく、セルが変更され、より多くの API 呼び出しが発生します。

> [!NOTE]
> グリッドは、数値、文字列、日付、およびブール列タイプのデフォルトの処理を公開します。例えば、ブール列タイプの場合に列はデフォルトで true/false の代わりに`チェック`または`閉じる`アイコンを表示します。

セル内のデータが `[(ngModel)]` でバインドされていて、値の変更が処理されない場合、新しい値は Angular グリッドの基になるデータソースで適切に**更新されません**。カスタム テンプレートを使用してセルの編集を行う場合は、セルの**セル編集テンプレート**を使用することを強くお勧めします。

適切に実装されると、セル編集テンプレートは、セルの `editValue` がグリッド[編集イベント サイクル](editing.md#イベントの引数とシーケンス) を正しく渡します。

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

テンプレートで使用可能なプロパティの詳細については、[`CellType`]({environment:angularApiUrl}/interfaces/celltype.html) の API を参照してください。

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

列プロパティもグリッドで列が初期化されるときに発生される [`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) イベントのコードで設定できます。

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

日付、数値、通貨、パーセント列のすべての値は、Angular [`DatePipe`](https://angular.io/api/common/DatePipe)、[`DecimalPipe`](https://angular.io/api/common/DecimalPipe)、[`CurrencyPipe`](https://angular.io/api/common/CurrencyPipe)、[`PercentPipe`](https://angular.io/api/common/PercentPipe) に応じて変換されます。これは元の値を変更せず、列に表示される値のみを変更します。データにまつわるすべての動作や操作はデータ ソースの値に基づいて実行されることに注意してください。デフォルトでは、値はグリッドの [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) に従って表示されます (指定しない場合、アプリケーション ロケールにフォールバックします。デフォルトは `'en-US'` です)。

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

すべての利用可能な列データ型は、公式の[列タイプ トピック](column-types.md#デフォルトのテンプレート)にあります。

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

>[autoGenerate]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) 列を使用する場合、データキーが同一である必要があります。

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

@Component({...})
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

**注**: リモート データにバインドする場合、グリッドの [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) プロパティは使用しないことをお勧めします。データを検証して適切な列を生成するためにデータが利用可能である必要があります。リモート サービスの応答が完了するまでデータが利用できないため、グリッドはエラーを発生します。リモート サービスへバインド時に [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autoGenerate) を使用する機能は今後追加予定です。

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


<code-view style="height:460px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-nested-data-binding-2" >
</code-view>

<div class="divider--half"></div>

**IgxGrid** で複雑なデータをバインドまたは複合データ (複数の列から) を可視化する別の方法は、列にカスタム ボディ テンプレートを使用することです。通常、以下のことができます。
    - ネストされたデータを含むセルの `value` を使用します。
    - `row.data` にアクセスするためにテンプレートの `cell` オブジェクトを使用します。それから、セルから任意の値 (`cell.row.data[field]` や `cell.row.data[field][nestedField]` など) を取得します。

それをテンプレートに挿入します。

```html
<igx-column field="abbreviation.long" header="Long">
    <ng-template igxCell let-cell="cell">
        <div>
            <div>
                {{ cell.value }}
                {{ cell.row.data['name'] }}  
                {{ cell.row.data['weight']['molecular'] }}
            </div>
        </div>
    </ng-template>
</igx-column>
```

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
                            <igx-input-group (keydown)="stop($event)" style="--ig-size: var(--ig-size-small)">
                                <label igxLabel for="title">Title</label>
                                <input type="text" name="title" igxInput [(ngModel)]="person.Title" style="text-overflow: ellipsis;" />
                            </igx-input-group>
                            <igx-input-group (keydown)="stop($event)" style="--ig-size: var(--ig-size-small); width: 15%;">
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


<code-view style="height:460px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-nested-data-binding"
           alt="Angular Grid ネストされたデータ バインディングの例">
</code-view>

<div class="divider--half"></div>

### フラット データの使用

フラットデータバインディングのアプローチは既に説明したものと似ていますが、**セル値**の代わりに、[IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html) の [`data`]({environment:angularApiUrl}/classes/igxgridrow.html#data) プロパティを使用します。

Angular グリッドはデータレコードを**レンダリング**、**操作**、**保存**するためのコンポーネントのため、**すべてのデータ レコード**へアクセスすることで、それを処理する方法をカスタマイズすることができます。それには、[`data`]({environment:angularApiUrl}/classes/igxgridrow.html#data) プロパティを使用します。

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
]
```

カスタム テンプレート:

```html
...
<igx-column field="Address" header="Address" width="25%" editable="true">
    <ng-template #compositeTemp igxCell let-cell="cell">
        <div class="address-container">
        // In the Address column combine the Country, City and PostCode values of the corresponding data record
            <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
            <br/>
            <span><strong>City:</strong> {{cell.row.data.City}}</span>
            <br/>
            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
        </div>
    </ng-template>
</igx-column>
```

上記で定義したテンプレートでは編集操作ができないため、エディター テンプレートが必要であることに注意してください。

```html
<igx-column field="Address" header="Address" width="25%" editable="true">
    <ng-template  igxCellEditor let-cell="cell">
        <div class="address-container">
            <span>
                <strong>Country:</strong> {{cell.row.data.Country}}
                <igx-input-group width="100%">
                        <input igxInput [(ngModel)]="cell.row.data.Country" />
                </igx-input-group>
            </span>
            <br/>
            <span><strong>City:</strong> {{cell.row.data.City}}</span>
            <igx-input-group width="100%">
                    <input igxInput [(ngModel)]="cell.row.data.City" />
            </igx-input-group>
            <br/>
            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
            <igx-input-group width="100%">
                    <input igxInput [(ngModel)]="cell.row.data.PostalCode" />
            </igx-input-group>
        </div>
    </ng-template>
</igx-column>
...
```

以下は結果です。


<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-composite-data-binding"
           alt="Angular Grid 複合データ バインディングの例">
</code-view>

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

## パフォーマンス (試験中)

`IgxGridComponent` のデザインでは、Angular で導入されたイベント結合機能を利用できます。この機能は、インタラクションとレスポンシブの点で **`20%`** のパフォーマンスを向上します。この機能は、`bootstrapModule` メソッドで `ngZoneEventCoalescing` と `ngZoneRunCoalescing` プロパティを `true` に設定するだけでアプリケーション レベルで有効にできます。

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> これは `IgxGridComponent` の試験中の機能です。これは、グリッドで予期しない動作が発生する可能性があることを意味します。このような動作が発生した場合は、[Github](https://github.com/IgniteUI/igniteui-angular/discussions) ページでお問い合わせください。

>[!NOTE]
> 有効にすると、`IgxGridComponent` に関連しない Angular アプリケーションの他の部分に影響します。

## 既知の制限

|制限|説明|
|--- |--- |
|`percentage` および `px` で設定した列幅|列に `%` と `px` を組み合わせて使用することはできません。|
|`number` 型の列をフィルターする場合|フィルター入力に入力された値が `number` と異なる場合、キャストが正しくないため `NaN` が返されます。|
|グリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) が列幅に依存しない | すべての列の [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) でグリッド自体のスパンは決定しません。親コンテナーのディメンションまたは定義したグリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) で決定されます。|
|親コンテナーでネストされた Grid | グリッドの [`width`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width) を設定せずに定義済みのディメンションで親コンテナーに配置した場合、グリッドがコンテナーに合わせてスパンします。|
|Grid `OnPush` ChangeDetectionStrategy|グリッドで `ChangeDetectionStrategy.OnPush` を処理し、カスタム表示されたときにグリッドに発生した変更について通知します。|
| 列には設定可能な最小幅があります。[`--ig-size`] CSS 変数の値に応じて、次のようになります: <br/>"small": 56px <br/> "medium": 64px <br/> "large ": 80px | 許容される最小幅未満に設定した場合、描画される要素に影響はありません。対応する [`--ig-size`] の最小許容幅で描画します。水平方向の仮想化は予期しない動作を招く場合があるためサポートしていません。
| ビューに描画されていないセル高さは行の高さに影響しません。|仮想化のため、セルの高さを変更するビューにないカスタム テンプレートの列は行の高さに影響しません。関連する列がビューにスクロールされるときのみ行の高さに影響します。

> [!NOTE]
> `igxGrid` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が `igxGrid` で有効です。詳細については、[igxForOf 既知の問題](../for-of.html#既知の問題と制限) のセクションを参照してください。

<div class="divider--half"></div>

## API リファレンス
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxInputGroup テーマ]({environment:sassApiUrl}/themes#function-input-group-theme)
* [IgxChip テーマ]({environment:sassApiUrl}/themes#function-chip-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/themes#function-overlay-theme)
* [IgxDropDown テーマ]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxCalendar テーマ]({environment:sassApiUrl}/themes#function-calendar-theme)
* [IgxSnackBar テーマ]({environment:sassApiUrl}/themes#function-snackbar-theme)
* [IgxBadge テーマ]({environment:sassApiUrl}/themes#function-badge-theme)

## ビデオ チュートリアル
Angular データ グリッドの作成について詳しくは、このビデオ チュートリアルをご覧ください:

> [!Video https://www.youtube.com/embed/Xv_fQVQ8fmM]

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
* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
