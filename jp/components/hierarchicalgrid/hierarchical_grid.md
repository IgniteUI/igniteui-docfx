---
title: Hierarchical Grid コンポーネント
_description: Ignite UI for Angular Hierarchical Grid コントロールは、タッチ レスポンシブが有効なデータ リッチな階層グリッドです。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Grid コントロール, Angular 高パフォーマンス Hierarchical Grid, Hierarchical Grid
_language: ja
---
## 階層グリッド
<p class="highlight">Ignite UI for Angular Hierarchical Grid は、階層形式のデータの表示や編集ができます。フィルタリング、並べ替え、ページング、テンプレート、列ピン固定、列移動、列非表示などの機能が含まれます。Hierarchical Grid は、Data Grid コンポーネントをベースとして構築されており、親グリッドの行の展開/縮小、詳細な情報が必要な場合に子グリッドを表示する機能を拡張しました。</p>

### デモ

<div class="sample-container loading" style="height:520px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係
Hierarchical Grid が `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxTreeGridModule_ をインポートする必要があります。

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

### キーボード ナビゲーション
キーボード ナビゲーションは Hierarchical Grid でデフォルトでサポートされます。セルをフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

 - `Arrow Up` - 1 つ上のセル、必要に応じてグリッド上階層へ移動 (ラッピングなし);
 - `Arrow Down` - 1 つ下のセル、必要に応じてグリッド下階層へ移動 (ラッピングなし);
 - `左矢印` - 1 つ左のセルへ移動 (行間のラッピングなし);
 - `右矢印` - 1 つ右のセルへ移動 (行間のラッピングなし);
 - `Ctrl + 上矢印` - 現在の列の最初のセルへ移動;
 - `Ctrl + 下矢印` - 現在の列の最後のセルへ移動;
 - `Ctrl + 左矢印` -  行の左端のセルへ移動;
 - `Home` - 行の左端のセルへ移動;
 - `Ctrl + Home` - moves to top left cell in the grid;
 - `Ctrl + 右矢印` - 行の右端のセルへ移動;
 - `End` - 行の右端のセルへ移動;
 - `Ctrl + End` -  moves to bottom right cell in the grid;
 - `Page Up` - 1 ページ (ビューポート) 上へスクロール;
 - `Page Down` - 1 ページ (ビューポート) 下へスクロール;
 - `Enter` - 編集モードに入る;
 - `F2` - 編集モードに入る;
 - `Esc` - 編集モードを終了する;
 - `Tab` - 行の次のセルへ順番に移動して最後のセルの後は次の行へ移動。展開した行の最後のセルにフォーカスがある場合、最初の子にフォーカスを移動します。セルが編集モードの場合、行で編集可能な次のセルにフォーカスを移動します。編集可能な一番右のセルから `CANCEL`、`DONE`ボタンへ、`DONE` から編集可能な一番左のセルへ移動します;
 - `Shift + Tab` - 行の前のセルへフォーカスを順番に移動し、最初のセルの次に前の行へフォーカスを移動します。展開した子グリッドの最初のセルにフォーカスがある場合、その親内にフォーカスを移動します。セルが編集モードの場合、行で編集可能な次のセルにフォーカスを移動します。編集可能な一番右のセルから `CANCEL`、`DONE` ボタンへ、`DONE` から編集可能な一番左のセルへ移動します;
 - `Space` -  行が選択可能な場合、スペースキーを押下すると行選択をトリガーします;
 - 親グリッド行で `Alt + 左矢印` - 行が縮小されていない場合は親行コンテンツを縮小します;
 - 親グリッド行で `Alt + 上矢印` - 行が縮小されていない場合は親行コンテンツを縮小します;
 - 親グリッド行で `Alt + 右矢印` - 行が展開されていない場合は親行コンテンツを展開します;
 - 親グリッド行で `Alt + 下矢印` - 行が展開されていない場合は親行コンテンツを展開します;
 - マウス `ホイール` - フォーカス要素をぼかします;


#### "すべて縮小" ボタン

左上の角にある [すべて縮小] ボタンを押して Hierarchical Grid で展開されてる行を縮小できます。更に他のグリッドを含む各子グリッドと Hierarchical Grid にも同様のボタンがあり、階層の特定のグリッドのみ縮小することができます。 

![](../../images/unfold_less_icon_screenshot.jpg)

### 既知の問題と制限

|制限|説明|
|--- |--- |
|グループ化|グループ化機能は、階層グリッドでサポートされません。|
|Excel へエクスポート|Excel へのエクスポートは Hierarchical Grid でサポートされませんが、今後の Ignite UI for Angular アップデートでサポート予定です。|

### CRUD 操作

> [!NOTE]
> フラットな Data Grid と行アイランドの各インスタンスの重要な違いは、同じトランザクション サービス インスタンスがあり、同じトランザクション ログを蓄積する点です。CRUD 機能を有効にするには、`IgxHierarchicalTransactionServiceFactory` を注入する必要があります。

CRUD API メソッドの呼び出しは,各グリッド インスタンスで可能です。

## API リファレンス

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

### その他のリソース
<div class="divider--half"></div>

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