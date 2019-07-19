@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列固定|Lock Column |Ignite UI for Angular |Infragistics
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 列固定|Lock Column |Ignite UI for Angular |Infragistics
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Tree Grid 列固定|Lock Column |Ignite UI for Angular |Infragistics
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
---
}

### @@igComponent 列ピン固定 
単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、@@igComponent で水平スクロール時にロックされた列が常に表示されます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:670px">
    <iframe id="treegrid-sample-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}

#### 列固定 API

ピン固定領域の幅が @@igComponent より大きくならない限り各列をピン固定できます。列のピン固定は [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の pinned 入力によって制御されます。ピン固定列は常に @@igComponent の左側に描画され、@@igComponent 本体のピン固定されていない列の水平スクロールで固定されます。


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
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column #artist field="Artist" [width]="'180px'">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Artist</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(artist)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #photo field="Photo">
                <ng-template igxHeader>
                        <div class="title-inner">
                            <span style="float:left">Photo</span>
                            <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(photo)"></igx-icon>
                        </div>
                    </ng-template>
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column #debut field="Debut">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Debut</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(debut)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #grammynominations field="Grammy Nominations" [width]="'200px'">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Grammy Nominations</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(grammynominations)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #grammyawards field="Grammy Awards" [width]="'180px'">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Grammy Awards</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(grammyawards)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
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

両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。[`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pincolumn) は、@@igComponent よりピン固定領域が大きいか同じサイズの場合に失敗します。以下はその例です。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="300px" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="200px"></igx-column>
</igx-grid>
```

```typescript
var succeed = this.grid.pinColumn("AthleteNumber"); // pinning fails and succeed will be false
```

`AthleteNumber` 列をピン固定すると、ピン固定領域が @@igComponent の幅より大きくなります。
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [width]="300px" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Title" [width]="200px"></igx-column>
</igx-tree-grid>
```

```typescript
var succeed = this.treeGrid.pinColumn("Title"); // pinning fails and succeed will be false
```

`Title` 列をピン固定すると、ピン固定領域が @@igComponent の幅より大きくなります。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-tree-grid>
```

```typescript
var succeed = this.hierarchicalGrid.pinColumn("Artist"); // pinning fails and succeed will be false
```

`Artist` 列をピン固定すると、ピン固定領域が @@igComponent の幅より大きくなります。
}

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
        (onColumnPinning)="columnPinning($event) #hierarchicalGrid></igx-hierarchical-grid> 
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Artist") {
        event.insertAtIndex = 0;
    }
}
```
}

### ピン固定の制限

*   列幅をパーセンテージ (%) で設定した場合にピン固定列があると @@igComponent 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、@@igComponent によって自動的に割り当てる必要があります。

<div class="divider--half"></div>

### トラブルシューティング

このセクションは、列固定機能で発生した問題を解決するためのトラブルシューティングを提供します。

#### 警告:

* `@@igxName - ピン固定領域がピン固定可能な最大幅を超過しています。次の列のピン固定は、問題を回避するため解除しています。.`- この警告は初期時にユーザーが列をピン固定を過剰に定義した場合にスローされます。初期時にピン固定した列の合計幅は、@@igComponent 幅の 80% を超えないようにしてください。超過した場合は、デフォルトで @@igComponent の最初の列を取得し、残りの列 (警告にリストされた列) はピン解除されます。@@igComponent でピン固定を初期化する前に [`onColumnInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumninit) を使用し、初期化時に手動で列のピン固定解除するかどうかを決定するためのロジックを実行できます。各列でトリガーされます。

<div class="divider--half"></div>

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
