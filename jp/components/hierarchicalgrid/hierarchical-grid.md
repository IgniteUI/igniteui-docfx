---
title: Angular 階層データグリッド | マテリアル テーブル | Ignite UI for Angular | インフラジスティックス
_description: Angular Table に基づいて Ignite UI for Angular データグリッドの使用方法を学び、さまざまな Angular イベントを含むタッチレスポンシブ Angular コンポーネントを作成します。
_keywords: angular hierarchical data grid, angular hierarchical table, angular hierarchical data grid コンポーネント, angular hierarchical table コンポーネント, angular UI コンポーネント, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular 階層グリッド コンポーネントの概要

Ignite UI for Angular Hierarchical Data Grid は、階層表形式データの表示と操作に使用されます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイルのフィルタリング、ソート、ページング、テンプレート化、列の移動、列のピン固定、Excel および CSV へのエクスポートなどの豊富な機能セットを提供します。Hierarchical Grid は、Flat Grid コンポーネントをベースとして構築されており、親グリッドの行の展開/縮小、詳細な情報が必要な場合に対応する子グリッドを表示する機能を拡張しました。

## Angular 階層グリッドの例
この Angular グリッドの例では、ユーザーがデータの階層セットを視覚化し、セル テンプレートを使用して[スパークライン](../sparkline.md)などの他の視覚的コンポーネントを追加する方法を確認できます。

<code-view style="height:520px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing" alt="Angular 階層グリッドの例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Hierarchical Data Grid を使用した作業の開始

>[!NOTE]
>このコンポーネントは、**オプションで** [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を利用できます。タッチ操作が正しく動作するために、アプリケーションのルート モジュールにインポートできます。

Ignite UI for Angular Hierarchical Data Grid コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](../general/getting-started.md)」ピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxHierarchicalGridModule` をインポートします。

```typescript
// app.module.ts

import { IgxHierarchicalGridModule } from 'igniteui-angular';
// import { IgxHierarchicalGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxHierarchicalGridModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxHierarchicalGridComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_HIERARCHICAL_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/hierarchical-grid/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_HIERARCHICAL_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_HIERARCHICAL_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-hierarchical-grid #hierarchicalGrid [data]="singers" [autoGenerate]="true">
        <igx-row-island [key]="'Albums'" [autoGenerate]="true">
            <igx-row-island [key]="'Songs'" [autoGenerate]="true">
            </igx-row-island>
        </igx-row-island>
        <igx-row-island [key]="'Tours'" [autoGenerate]="true">
        </igx-row-island>
    </igx-hierarchical-grid>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES]
    /* or imports: [IgxHierarchicalGridComponent, IgxRowIslandComponent] */
})
export class HomeComponent {
    public singers: Artist [];
}
```

Ignite UI for Angular Hierarchical Grid モジュールまたはディレクティブをインポートしたので、`igx-hierarchical-grid` コンポーネントの使用を開始できます。

## Angular Hierarchical Data Grid の使用

## データ バインディング

`igx-hierarchical-grid` は、`igx-grid` から派生し、ほとんどの機能を共有します。主要な違いは階層で複数レベルを定義できることです。`igx-row-island` と呼ばれる `igx-hierarchical-grid` の定義内の個別のタグで設定されます。`igx-row-island` コンポーネントは、特定レベルの各子グリッドの設定を定義します。レベルごとの複数行アイランドがサポートされます。
階層グリッドで 2 通りのデータ バインドがサポートされます。 

### 階層データの使用

アプリケーションが階層データ全体をオブジェクトの子配列を参照するオブジェクトの配列として読み込む場合、Hierarchical Grid を設定して読み込み、自動的にバインドすることができます。以下はプロパティ構造の階層データソースのプロパティの例です。

```javascript
export const singers = [{
    "Artist": "Naomí Yepes",
    "Photo": "assets/images/hgrid/naomi.png",
    "Debut": "2011",
    "Grammy Nominations": 6,
    "Grammy Awards": 0,
    "Tours": [{
        "Tour": "Faithful Tour",
        "Started on": "Sep-12",
        "Location": "Worldwide",
        "Headliner": "NO",
        "Toured by": "Naomí Yepes"
    }],
    "Albums": [{
        "Album": "Dream Driven",
        "Launch Date": new Date("August 25, 2014"),
        "Billboard Review": "81",
        "US Billboard 200": "1",
        "Artist": "Naomí Yepes",
        "Songs": [{
            "No.": "1",
            "Title": "Intro",
            "Released": "*",
            "Genre": "*",
            "Album": "Dream Driven"
        }]
    }]
}];
```
各 `igx-row-island` は、子データを保持するプロパティのキーを指定します。

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="singers" [autoGenerate]="true">
    <igx-row-island [key]="'Albums'" [autoGenerate]="true">
        <igx-row-island [key]="'Songs'" [autoGenerate]="true">
        </igx-row-island>
    </igx-row-island>
    <igx-row-island [key]="'Tours'" [autoGenerate]="true">
    </igx-row-island>
</igx-hierarchical-grid>
```
> [!NOTE]
> `data` の代わりにユーザーは、データを自動的に設定するめの読み込みに `igx-hierarchical-grid` が必要な `key` のみ設定します。

### ロードオンデマンドの使用

ほとんどのアプリケーションがはじめに最小限のデータを読み込むようでざいんされているため、結果的に読み込み時間が短くなります。このような場合、`igx-hierarchical-grid` を設定してユーザーが作成したサービスでデータのオンデマンド フィードを可能にします。以下の設定は、特別な `@Output` と新しい loading-in-progress テンプレートでロードオンデマンドのすべての機能が提供されます。

```html
<!-- hierarchicalGridSample.component.html -->

<igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="true" [height]="'600px'" [width]="'100%'">
    <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="true"  (gridCreated)="gridCreated($event, 'CustomerID')">
        <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="true" (gridCreated)="gridCreated($event, 'OrderID')">
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```

```typescript
//  hierarchicalGridSample.component.ts

@Component({...})
export class HierarchicalGridLoDSampleComponent implements AfterViewInit {
    @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }

    public ngAfterViewInit() {
        this.hGrid.isLoading = true;
        this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
            this.hGrid.isLoading = false;
            this.hGrid.data = data;
            this.hGrid.cdr.detectChanges();
        });
    }

    public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
        const dataState = {
            key: event.owner.key,
            parentID: event.parentID,
            parentKey: _parentKey,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            }
        );
    }
}
```

```typescript
// remote-load-on-demand.service.ts

@Injectable()
export class RemoteLoDService {
    public url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState?: any): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response) => response["value"])
        );
    }

    public buildUrl(dataState) {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }
}
```

## 行展開インジケーターの非表示/表示

行がその展開前に子を持っているかの確認は、[`hasChildrenKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#hasChildrenKey) 入力プロパティで判断できます。このようにして、展開インジケータを表示するかどうかを示すデータ オブジェクトからブール値プロパティを提供できます。

```html
<igx-hierarchical-grid #grid [data]="data" primaryKey="ID" hasChildrenKey="hasChildren">
        ...
</igx-hierarchical-grid>
```

[`hasChildrenKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hasChildrenKey) プロパティを設定する必要がないことに注意してください。指定しなかった場合は、各行に展開インジケーターが表示されます。

さらに、ヘッダーのすべて展開/縮小インジケーターを表示/非表示にする場合は、[showExpandAll]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#showExpandAll) プロパティを使用できます。
この UI は、パフォーマンス上の理由からデフォルトで無効になっているため、データが大きいグリッドやロードオンデマンドのグリッドで有効にすることはお勧めしません。

## 機能

グリッド機能を有効にして `igx-row-island` マークアップを介して設定し、作成された各グリッドに適用されます。ランタイムに行アイランド インスタンスでオプションを変更すると生成した各グリッドで変更されます。 

```html
<igx-hierarchical-grid [data]="localData" [autoGenerate]="false"
    [allowFiltering]='true' [height]="'600px'" [width]="'800px'" #hGrid>
    <igx-column field="ID" [pinned]="true" [filterable]='true'></igx-column>
    <igx-column-group header="Information">
        <igx-column field="ChildLevels"></igx-column>
        <igx-column field="ProductName" hasSummary='true'></igx-column>
    </igx-column-group>
    <igx-row-island [key]="'childData'" [autoGenerate]="false" [rowSelection]="'multiple'" #layout1>
        <igx-column field="ID" [hasSummary]='true' [dataType]="'number'"></igx-column>
        <igx-column-group header="Information2">
            <igx-column field="ChildLevels"></igx-column>
            <igx-column field="ProductName"></igx-column>
        </igx-column-group>
        <igx-paginator *igxPaginator [perPage]="5"></igx-paginator>
    </igx-row-island>
    <igx-paginator>
    </igx-paginator>
</igx-hierarchical-grid>
```

以下のグリッド機能はグリッド レベルごとに動作するため、各グリッド インスタンスが残りのグリッドとは別に管理します。

- ソート
- フィルタリング
- ページング
- 複数列ヘッダー
- 非表示
- ピン固定
- 移動
- 集計
- 検索

選択とナビゲーション機能は、`igx-hierarchical-grid` 全体でグローバルに作用します。 

- 選択 
    選択は、選択したセルを異なる 2 つの子グリッドで同時に表示することを許可しません。
- ナビゲーション
    up/down へ移動するときに next/prev 要素が子グリッドの場合、ナビゲーションが関連子グリッド内で継続され、関連セルが選択済みにマークされ、フォーカスされます。子セルが現在の表示ビューポート以外にある場合にビューへスクロールされるため、選択したセルが常に表示されます。

## [すべて縮小] ボタン

左上の角にある [すべて縮小] ボタンを押して Hierarchical Grid で展開されてる行を縮小できます。更に他のグリッドを含む各子グリッドと Hierarchical Grid にも同様のボタンがあり、階層の特定のグリッドのみ縮小することができます。 

![](../../images/unfold_less_icon_screenshot.jpg)

## サイズ変更

詳細については、[Grid サイズ変更](sizing.md)トピックをご覧ください。

## CRUD 操作

> [!NOTE]
> フラットな Data Grid と行アイランドの各インスタンスの重要な違いは、同じトランザクション サービス インスタンスがあり、同じトランザクション ログを蓄積する点です。CRUD 機能を有効にするには、`IgxHierarchicalTransactionServiceFactory` を注入する必要があります。

CRUD API メソッドの呼び出しは,各グリッド インスタンスで可能です。

igxGrid を使用して [CRUD 操作を構築する方法](../general/how-to/how-to-perform-crud.md)のトピックをご覧ください。

## スタイル設定

igxHierarchicalGrid を使用すると、[`Ignite UI for Angular テーマ ライブラリ`](../themes/sass/component-themes.md) でスタイルを設定できます。[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。 

以下の手順では、igxHierarchicalGrid スタイルをカスタマイズする手順を実行しています。     

### グローバル テーマのインポート   
階層グリッドのカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。 

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### カスタム テーマの定義
次に、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張し、必要に応じて階層グリッドをカスタマイズするために必要なパラメーターを受け取る新しいテーマを作成します。

 >[!NOTE]
 >特定の `sass` 階層グリッド機能はありません。

```scss
$custom-theme: grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $row-hover-background: #f8e495,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: #e0b710,
  $resize-line-color: #ffcd0f,
  $row-highlight: #ffcd0f
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
@include css-vars($custom-theme);
```

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。
このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

### デモ

<code-view style="height:505px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-styling" >
</code-view>

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## パフォーマンス (試験中)

`igxHierarchicalGrid` のデザインでは、Angular で導入されたイベント結合機能を利用できます。この機能は、インタラクションとレスポンシブの点で **`20%`** のパフォーマンスを向上します。この機能は、`bootstrapModule` メソッドで `ngZoneEventCoalescing` と `ngZoneRunCoalescing` プロパティを `true` に設定するだけでアプリケーション レベルで有効にできます。

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]> これは `igxHierarchicalGrid` の試験中の機能です。これは、階層グリッドで予期しない動作が発生する可能性があることを意味します。このような動作が発生した場合は、[Github](https://github.com/IgniteUI/igniteui-angular/discussions) ページでお問い合わせください。

>[!NOTE]
> 有効にすると、`igxHierarchicalGrid` に関連しない Angular アプリケーションの他の部分に影響します。

## 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ化|グループ化機能は、階層グリッドでサポートされません。|

> [!NOTE]
> `igxHierarchicalGrid` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が `igxForOf` で有効です。詳細については、[igxForOf 既知の問題](../for-of.md#既知の問題と制限)のセクションを参照してください。

## API リファレンス

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxHierarchicalGridRow]({environment:angularApiUrl}/classes/igxhierarchicalgridrow.html)
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
* [IgxActionStrip テーマ]({environment:sassApiUrl}/themes#function-action-strip-theme)
* [IgxSnackBar テーマ]({environment:sassApiUrl}/themes#function-snackbar-theme)
* [IgxBadge テーマ]({environment:sassApiUrl}/themes#function-badge-theme)

## その他のリソース
<div class="divider--half"></div>

* [グリッド サイズ変更](sizing.md)
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

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)