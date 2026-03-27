---
title: Angular Hierarchical Grid の列ピン固定 - Ignite UI for Angular
_description: アプリの開発時に Ignite UI for Angular のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: lock column, ignite ui for angular, infragistics
_license: commercial
_language: ja
---



# Angular Hierarchical Grid 列ピン固定

単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、Hierarchical Grid で水平スクロール時にロックされた列が常に表示されます。Material UI Grid には組み込みの列ピン固定 UI があり、Hierarchical Grid のツールバーで列の表示状態を変更できます。その他、カスタム UI を定義し、Column Pinning API を介して列のピン固定状態を変更できます。

## Angular Hierarchical Grid 列ピン固定の例





<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-pinning/" alt="Angular Hierarchical Grid 列ピン固定の例">
</code-view>



## 列固定 API

列ピン固定は、[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の `pinned` 入力によって制御されます。ピン固定列は常に Hierarchical Grid の左側に描画され、Hierarchical Grid 本体のピン固定されていない列の水平スクロールで固定されます。






```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```



[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) の Hierarchical Grid の [`pinColumn`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pinColumn) または [`unpinColumn`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#unpinColumn) メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。





```typescript
this.hierarchicalGrid.pinColumn('Artist');
this.hierarchicalGrid.unpinColumn('Debut');
```



両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、[`columnPin`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnPin) イベントでイベント引数の [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertAtIndex) プロパティを適切な位置インデックスに変更します。





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



## ピン固定の位置

[`pinning`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pinning) 設定オプションを使用して、列のピン固定の位置を変更できます。列の位置を Start または End のいずれかに設定できます。End に設定すると、列がピン固定されていない列の後に、グリッドの最後にレンダリングされます。
ピン固定されていない列は水平にスクロールできますが、ピン固定された列は右側に固定されます。







```html
<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>
```



```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```

### デモ





<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sample-right-pinning/" >
</code-view>





### 両側の列ピン固定

各列のピン固定位置を個別に指定できるため、グリッドの両側に列をピン固定して利便性を高め、データ セットの最適化を容易にすることができます。詳細については、以下のデモを参照してください。列をピン固定するには、ヘッダーをクリックして列を選択し、ツールバーに追加されたピン固定ボタンを使用するか、列を別のピン固定された列にドラッグします。





<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-both-sides-pinning/" >
</code-view>





## カスタム列ピン固定 UI

カスタム UI を定義し、関連する API を介して列のピン状態を変更できます。

ツールバーの代わりに、エンドユーザーが特定の列のピンの状態を変更するためにクリックできる列ヘッダーにピンアイコンを定義するとします。
これは、カスタムアイコンを使用して列のヘッダーテンプレートを作成することで実行できます。







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



カスタムアイコンをクリックすると、関連する列のピン状態は、列の API メソッドを使用して変更できます。

```typescript
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```

### デモ





<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning/" >
</code-view>




## ピン固定の制限

- 列幅をパーセンテージ (%) で設定した場合にピン固定列があると Hierarchical Grid 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、Hierarchical Grid によって自動的に割り当てる必要があります。

<div class="divider--half"></div>



## API リファレンス

- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)