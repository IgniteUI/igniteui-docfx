---
title: Angular 階層データグリッド | マテリアル テーブル | Ignite UI for Angular | インフラジスティックス
_description: Angular Material Table に基づいて Ignite UI for Angular データグリッドの使用方法を学び、さまざまな Angular イベントを含むタッチレスポンシブ Angular コンポーネントを作成します。
_keywords: Angular データ グリッド, igniteui for angular, インフラジスティックス
_language: ja
---

## 階層グリッド

<p class="highlight">Ignite UI for Angular 階層データ グリッド は、データの表示や操作が簡単にできます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、並べ替え、ページング、テンプレート、列移動などの豊富な機能を提供します。Hierarchical Grid は、Flat Grid コンポーネントをベースとして構築されており、親グリッドの行の展開/縮小、詳細な情報が必要な場合に対応する子グリッドを表示する機能を拡張しました。マテリアル テーブル ベースの UI グリッドにより、階層データの表示がさらに簡単できれいになりました。</p>

### デモ

<div class="sample-container loading" style="height:520px">
    <iframe id="grid-sample-iframe" src='{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

>[!NOTE]
>**このコンポーネントでは、タッチ操作が正しく動作するために、アプリケーションのルート モジュールに [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) をインポートする必要があります。**.

階層データ グリッドを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](../general/getting_started.md)トピックををご覧ください。

階層グリッドが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxHierarchicalGridModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxHierarchicalGridModule,
        ...
    ]
})
export class AppModule {}
```

以下の方法で TypeScript の Hierarchical Grid の参照を取得します。

```typescript
@ViewChild('hgrid1', { read: IgxHierarchicalGridComponent })
public hgrid1: IgxHierarchicalGridComponent;
```

### データ バインディング

**igx-hierarchical-grid** は、**igx-grid** から派生し、ほとんどの機能を共有します。主要な違いは階層で複数レベルを定義できることです。**Igx-row-island** と呼ばれる **Igx-hierarchical-grid** の定義内の個別のタグで設定されます。**igx-row-island** コンポーネントは、特定レベルの各子グリッドの設定を定義します。レベルごとの複数行アイランドがサポートされます。
階層グリッドで 2 通りのデータ バインドがサポートされます。 

#### 1.階層データの使用

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
各 **igx-row-island** は、子データを保持するプロパティのキーを指定します。

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
> `data` の代わりにユーザーは、データを自動的に設定するめの読み込みに **igx-hierarchical-grid** が必要な `key` のみ設定します。

#### 2.ロードオンデマンドの使用

ほとんどのアプリケーションがはじめに最小限のデータを読み込むようでざいんされているため、結果的に読み込み時間が短くなります。このような場合、**igx-hierarchical-grid** を設定してユーザーが作成したサービスでデータのオンデマンド フィードを可能にします。以下の設定は、特別な `@Output` と新しい loading-in-progress テンプレートでロードオンデマンドのすべての機能が提供されます。

```html
<!-- hierarchicalGridSample.component.html -->

    <igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="true" [height]="'600px'" [width]="'100%'">
        <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="true"  (onGridCreated)="gridCreated($event, 'CustomerID')">
            <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="true" (onGridCreated)="gridCreated($event, 'OrderID')">
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```

```typescript
//  hierarchicalGridSample.component.ts

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
### 機能

グリッド機能を有効にして **igx-row-island** マークアップを介して設定し、作成された各グリッドに適用されます。ランタイムに行アイランド インスタンスでオプションを変更すると生成した各グリッドで変更されます。 

```html
<igx-hierarchical-grid [data]="localData" [displayDensity]="density" [autoGenerate]="false"
    [allowFiltering]='true' [paging]="true" [height]="'600px'" [width]="'800px'" #hGrid>
    <igx-column field="ID" [pinned]="true" [filterable]='true'></igx-column>
    <igx-column-group header="Information">
        <igx-column field="ChildLevels"></igx-column>
        <igx-column field="ProductName" hasSummary='true'></igx-column>
    </igx-column-group>
    <igx-row-island [key]="'childData'" [autoGenerate]="false" [rowSelectable]='true' #layout1>
        <igx-column field="ID" [hasSummary]='true' [dataType]="'number'"></igx-column>
        <igx-column-group header="Information2">
            <igx-column field="ChildLevels"></igx-column>
            <igx-column field="ProductName"></igx-column>
        </igx-column-group>
    </igx-row-island>
</igx-hierarchical-grid>
```

以下のグリッド機能はグリッド レベルごとに動作するため、各グリッド インスタンスが残りのグリッドとは別に管理します。

- 並べ替え
- フィルタリング
- ページング
- 複数列ヘッダー
- 非表示
- ピン固定
- 移動
- 集計
- 検索

選択とナビゲーション機能は、**igx-hierarchical-grid** 全体でグローバルに作用します。 

- 選択 
    選択は、選択したセルを異なる 2 つの子グリッドで同時に表示することを許可しません。
- ナビゲーション
    up/down へ移動するときに next/prev 要素が子グリッドの場合、ナビゲーションが関連子グリッド内で継続され、関連セルが選択済みにマークされ、フォーカスされます。子セルが現在の表示ビューポート以外にある場合にビューへスクロールされるため、選択したセルが常に表示されます。


#### "すべて縮小" ボタン

左上の角にある [すべて縮小] ボタンを押して Hierarchical Grid で展開されてる行を縮小できます。更に他のグリッドを含む各子グリッドと Hierarchical Grid にも同様のボタンがあり、階層の特定のグリッドのみ縮小することができます。 

![](../../images/unfold_less_icon_screenshot.jpg)

サイズ変更

詳細については、[Grid Sizing](sizing.md) トピックをご覧ください。

### CRUD 操作

> [!NOTE]
> フラットな Data Grid と行アイランドの各インスタンスの重要な違いは、同じトランザクション サービス インスタンスがあり、同じトランザクション ログを蓄積する点です。CRUD 機能を有効にするには、`IgxHierarchicalTransactionServiceFactory` を注入する必要があります。

CRUD API メソッドの呼び出しは,各グリッド インスタンスで可能です。

### スタイル設定

igxHierarchicalGrid を使用すると、[Ignite UI for Angular Theme ライブラリ](../themes/component-themes.md) でスタイルを設定できます。[テーマ]({environment:sassApiUrl}/index.html#function-igx-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。 

以下の手順では、igxHierarchicalGrid スタイルをカスタマイズする手順を実行しています。     

#### グローバル テーマのインポート   
階層グリッドのカスタマイズは、すべてのスタイリング機能と mixins が配置されている `index` ファイルをインポートする必要があります。 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### カスタム テーマの定義
次に、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、必要に応じて階層グリッドをカスタマイズするために必要なパラメーターを受け取る新しいテーマを作成します。

 >[!NOTE]
 >特定の `sass` 階層グリッド機能はありません。


```scss
$custom-theme: igx-grid-theme(
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

#### カスタム カラー パレットの定義
上記で説明したアプローチでは、色の値がハード コーディングされていました。または、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、柔軟性を高めることができます。   
`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。 

 ```scss
$black-color: #494949;
$yellow-color: #FFCD0F;
 
$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。   
```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: (igx-color($custom-palette, "secondary", 500)),
    $cell-selected-background: (igx-color($custom-palette, "primary", 300)),
    $row-hover-background: (igx-color($custom-palette, "secondary", 100)),
    $row-selected-background: (igx-color($custom-palette, "primary", 100)),
    $header-background: (igx-color($custom-palette, "primary", 500)),
    $header-text-color: (igx-contrast-color($custom-palette, "primary", 500)),
    $expand-icon-color: (igx-color($custom-palette, "secondary", 500)),
    $expand-icon-hover-color: (igx-color($custom-palette, "secondary", 600)),
    $resize-line-color: (igx-color($custom-palette, "secondary", 500)),
    $row-highlight: (igx-color($custom-palette, "secondary", 500))
);
```   

#### カスタム スキーマの定義
さらに進んで、[**スキーマ**](../themes/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。   
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマの 1 つを拡張します。この場合、`$_light_grid` を使用します。
```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 100)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    expand-icon-color: (igx-color:('secondary', 500)),
    expand-icon-hover-color: (igx-color:('secondary', 600)),
    resize-line-color: (igx-color:('secondary', 500)),
    row-highlight: (igx-color:('secondary', 500))
));
```
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```   

#### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。 

```scss
@include igx-grid($custom-theme);
```

#### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが[`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイル設定は `::ng-deep` を使用してこのカプセル化を解除する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```   

#### デモ
<div class="sample-container loading" style="height:505px">
    <iframe id="hierarchical-grid-styling" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-styling" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ化|グループ化機能は、階層グリッドでサポートされません。|
|Excel エクスポート|Excel へのエクスポートは Hierarchical Grid でサポートされませんが、今後の Ignite UI for Angular アップデートでサポート予定です。|

> [!NOTE]
> `igxHierarchicalGrid` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が `igxForOf` で有効です。詳細については、[igxForOf 既知の問題](../for_of.html#既知の問題と制限) のセクションを参照してください。

## API リファレンス

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [グリッド サイズ変更](sizing.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
