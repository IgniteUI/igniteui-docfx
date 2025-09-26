@@if (igxName === 'IgxGrid') {
---
title: Angular Grid の列ピン固定 - Ignite UI for Angular
_description: アプリの開発時に Ignite UI for Angular のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: lock column, ignite ui for angular, infragistics
_language: ja 
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid の列ピン固定 - Ignite UI for Angular
_description: アプリの開発時に Ignite UI for Angular のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: lock column, ignite ui for angular, infragistics 
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid の列ピン固定 - Ignite UI for Angular
_description: アプリの開発時に Ignite UI for Angular のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: lock column, ignite ui for angular, infragistics 
_language: ja
---
}

# Angular @@igComponent 列ピン固定 
単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、@@igComponent で水平スクロール時にロックされた列が常に表示されます。Material UI Grid には組み込みの列ピン固定 UI があり、@@igComponent のツールバーで列の表示状態を変更できます。その他、カスタム UI を定義し、Column Pinning API を介して列のピン固定状態を変更できます。

## Angular @@igComponent 列ピン固定の例

@@if (igxName === 'IgxGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-toolbar-pinning/" alt="Angular @@igComponent 列ピン固定の例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-pinning/" alt="Angular @@igComponent 列ピン固定の例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-pinning/" alt="Angular @@igComponent 列ピン固定の例">
</code-view>

}

## 列固定 API

列ピン固定は、[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の `pinned` 入力によって制御されます。ピン固定列は常に @@igComponent の左側に描画され、@@igComponent 本体のピン固定されていない列の水平スクロールで固定されます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" (columnInit)="initColumns($event)"
    (selected)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
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

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の @@igComponent の [`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinColumn) または [`unpinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#unpinColumn) メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.pinColumn('AthleteNumber');
this.grid.unpinColumn('Name');
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.pinColumn('Artist');
this.hierarchicalGrid.unpinColumn('Debut');
```
}

両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、[`columnPin`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnPin) イベントでイベント引数の [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertAtIndex) プロパティを適切な位置インデックスに変更します。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (columnPin)="columnPinning($event)"></igx-tree-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Name') {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
        (columnPin)="columnPinning($event)" #hierarchicalGrid>
</igx-hierarchical-grid> 
```

```typescript
public columnPinning(event) {
    if (event.column.field === 'Artist') {
        event.insertAtIndex = 0;
    }
}
```
}

## ピン固定の位置

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
### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-right-pinning/" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sample-right-pinning/" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-sample-right-pinning/" >
</code-view>

}

各列のピン固定位置を個別に指定できるため、グリッドの両側に列をピン固定して利便性を高め、データ セットの最適化を容易にすることができます。詳細については、以下のデモを参照してください。列をピン固定するには、ヘッダーをクリックして列を選択し、ツールバーに追加されたピン固定ボタンを使用するか、列を別のピン固定された列にドラッグします。

@@if (igxName === 'IgxGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-pinning-both-sides/" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-both-sides-pinning/" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-both-sides-pinning/" >
</code-view>

}

## カスタム列ピン固定 UI

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
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sample-pinning/" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning/" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning/" >
</code-view>

}


## ピン固定の制限

*   列幅をパーセンテージ (%) で設定した場合にピン固定列があると @@igComponent 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、@@igComponent によって自動的に割り当てる必要があります。

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
## スタイル設定   

igxGridを使用すると、[Ignite UI for Angular テーマ ライブラリ](../themes/sass/component-themes.md) でスタイルを設定できます。[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) は、グリッドのすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下の手順では、グリッドのピン固定スタイルをカスタマイズする手順を実行しています。

### グローバル テーマのインポート
グループ化機能のカスタマイズは、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。
```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### カスタム テーマの定義
次に、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張し、必要に応じて Group By をカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。 

```scss
@include css-vars($custom-theme);
```

### デモ


<code-view style="height:506px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-pinning-styling/" >
</code-view>

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

}

## API リファレンス
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)