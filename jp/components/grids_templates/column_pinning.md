@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列固定 | 列のロック | Ignite UI for Angular | インフラジスティックス
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics
_language: ja 
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 列固定 | 列のロック | Ignite UI for Angular | インフラジスティックス
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Tree Grid 列固定 | 列のロック | Ignite UI for Angular | インフラジスティックス
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
_language: ja
---
}

### @@igComponent 列ピン固定 
単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、@@igComponent で水平スクロール時にロックされた列が常に表示されます。Material UI Grid には組み込みの列ピン固定 UI があり、@@igComponent のツールバーで列の表示状態を変更できます。その他、カスタム UI を定義し、Column Pinning API を介して列のピン固定状態を変更できます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-toolbar-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-toolbar-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="treegrid-toolbar-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-toolbar-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

#### 列固定 API

列ピン固定は、[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の `pinned` 入力によって制御されます。ピン固定列は常に @@igComponent の左側に描画され、@@igComponent 本体のピン固定されていない列の水平スクロールで固定されます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```
}

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の @@igComponent の [`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pincolumn) または [`unpinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#unpincolumn) メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.pinColumn("AthleteNumber");
this.grid.unpinColumn("Name");
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.pinColumn("Title");
this.treeGrid.unpinColumn("Name");
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.pinColumn("Artist");
this.hierarchicalGrid.unpinColumn("Debut");
```
}

両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、[`onColumnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnpinning) イベントでイベント引数の [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) プロパティを適切な位置インデックスに変更します。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-tree-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
        (onColumnPinning)="columnPinning($event)" #hierarchicalGrid>
</igx-hierarchical-grid> 
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Artist") {
        event.insertAtIndex = 0;
    }
}
```
}

### ピン固定の位置

[`pinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinning) 設定オプションを使用して、列のピン固定の位置を変更できます。列の位置を Start または End のいずれかに設定できます。End に設定すると、列がピン固定されていない列の後に、グリッドの最後にレンダリングされます。
ピン固定されていない列は水平にスクロールできますが、ピン固定された列は右側に固定されます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>
```
}

```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```
#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-right-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-right-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-right-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-right-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-right-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sample-right-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="tree-grid-sample-right-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-sample-right-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-right-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sample-right-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

### カスタム列ピン固定 UI

カスタム UI を定義し、関連する API を介して列のピン状態を変更できます。

ツールバーの代わりに、エンドユーザーが特定の列のピンの状態を変更するためにクリックできる列ヘッダーにピンアイコンを定義するとします。
これは、カスタムアイコンを使用して列のヘッダーテンプレートを作成することで実行できます。

@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
</igx-grid>
```

}

@@if (igxName === 'IgxTreeGrid') {

```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```

}

@@if (igxName === 'IgxHierarchicalGrid') {

```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
                <igx-column field="Quantity" width="150px"></igx-column>
                <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

カスタムアイコンをクリックすると、関連する列のピン状態は、列の API メソッドを使用して変更できます。

```typescript
public toggleColumn(col: IgxColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="treegrid-sample-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}


### ピン固定の制限

*   列幅をパーセンテージ (%) で設定した場合にピン固定列があると @@igComponent 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、@@igComponent によって自動的に割り当てる必要があります。

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
### スタイル設定   

igxGridを使用すると、[Ignite UI for Angular Theme ライブラリ](../themes/component-themes.md) でスタイルを設定できます。[テーマ]({environment:sassApiUrl}/index.html#function-igx-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。      

以下の手順では、グリッドのピン固定スタイルをカスタマイズする手順を実行しています。

#### グローバル テーマのインポート
グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### カスタム テーマの定義
次に、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、必要に応じて Group By をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。   

```scss
$custom-theme: igx-grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```    

#### カスタム カラー パレットの定義
上記で説明したアプローチでは、色の値がハード コーディングされていました。または、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、柔軟性を高めることができます。   
`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。 

 ```scss
$primary-color: #292826;
$secondary-color: #ffcd0f;

$custom-palette: igx-palette(
  $primary: $primary-color,
  $secondary: $secondary-color
);
```   

カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。   


```scss
$custom-theme: igx-grid-theme(
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: igx-color($custom-palette, "secondary", 500),
    $cell-active-border-color: igx-color($custom-palette, "secondary", 500)
);
```   

`$custom-theme` には前のセクションと同じプロパティが含まれていますが、今回は色がハードコードされていません。代わりに、カスタム `igx-palette` パレットが使用され、特定のカラーバリアントを使用して、プライマリ カラーとセカンダリ カラーから色が取得されました。   

#### カスタム スキーマの定義
さらに進んで、[**スキーマ**](../themes/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ**はテーマを作成させるための方法です。   
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマの 1 つを拡張します。この場合、`$_light_grid` を使用します。   
```scss
$custom-grid-schema: extend($_light-grid,(
    pinned-border-width: 5px,
    pinned-border-style: double,
    pinned-border-color: igx-color:("secondary", 500),
    cell-active-border-color: igx-color:("secondary", 500)
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
 >コンポーネントが[`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイル設定は `::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
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

<div class="sample-container loading" style="height:506px">
    <iframe id="grid-pinning-styling" data-src='{environment:demosBaseUrl}/grid/grid-pinning-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

### API リファレンス
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)