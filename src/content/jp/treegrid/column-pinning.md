---
title: Angular Tree Grid の列ピン固定 - Ignite UI for Angular
_description: アプリの開発時に Ignite UI for Angular のピン固定機能を使用して、豊富な API で簡単に列をロックまたは列の順序を変更できます。
_keywords: lock column, ignite ui for angular, infragistics
_license: commercial
_language: ja
---




# Angular Tree Grid 列ピン固定

単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、Tree Grid で水平スクロール時にロックされた列が常に表示されます。Material UI Grid には組み込みの列ピン固定 UI があり、Tree Grid のツールバーで列の表示状態を変更できます。その他、カスタム UI を定義し、Column Pinning API を介して列のピン固定状態を変更できます。

## Angular Tree Grid 列ピン固定の例




<code-view style="height:630px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-pinning/" alt="Angular Tree Grid 列ピン固定の例">
</code-view>




## 列固定 API

列ピン固定は、[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の `pinned` 入力によって制御されます。ピン固定列は常に Tree Grid の左側に描画され、Tree Grid 本体のピン固定されていない列の水平スクロールで固定されます。




```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```





[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) の Tree Grid の [`pinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pinColumn) または [`unpinColumn`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#unpinColumn) メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。




```typescript
this.treeGrid.pinColumn('Title');
this.treeGrid.unpinColumn('Name');
```




両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、[`columnPin`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnPin) イベントでイベント引数の [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertAtIndex) プロパティを適切な位置インデックスに変更します。




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




## ピン固定の位置

[`pinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pinning) 設定オプションを使用して、列のピン固定の位置を変更できます。列の位置を Start または End のいずれかに設定できます。End に設定すると、列がピン固定されていない列の後に、グリッドの最後にレンダリングされます。
ピン固定されていない列は水平にスクロールできますが、ピン固定された列は右側に固定されます。





```html
<igx-tree-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```





```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```

### デモ







<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-sample-right-pinning/" >
</code-view>



### 両側の列ピン固定

各列のピン固定位置を個別に指定できるため、グリッドの両側に列をピン固定して利便性を高め、データ セットの最適化を容易にすることができます。詳細については、以下のデモを参照してください。列をピン固定するには、ヘッダーをクリックして列を選択し、ツールバーに追加されたピン固定ボタンを使用するか、列を別のピン固定された列にドラッグします。







<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-both-sides-pinning/" >
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





カスタムアイコンをクリックすると、関連する列のピン状態は、列の API メソッドを使用して変更できます。

```typescript
public toggleColumn(col: ColumnType) {
    col.pinned ? col.unpin() : col.pin();
}
```

### デモ




<code-view style="height:630px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning/" >
</code-view>





## ピン固定の制限

- 列幅をパーセンテージ (%) で設定した場合にピン固定列があると Tree Grid 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、Tree Grid によって自動的に割り当てる必要があります。

<div class="divider--half"></div>



## API リファレンス

- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## その他のリソース

<div class="divider--half"></div>

- [Tree Grid 概要](tree-grid.md)
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