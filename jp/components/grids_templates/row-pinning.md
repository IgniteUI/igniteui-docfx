@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 行のピン固定 | 行のロック | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Material テーブルのピン留め機能を使用して豊富で使いやすい API で行をロックできます。
_keywords: lock row, ignite ui for angular, infragistics, 行のロック, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 行のピン固定 | 行のロック | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Material テーブルのピン留め機能を使用して豊富で使いやすい API で行をロックできます。
_keywords: lock row, ignite ui for angular, infragistics, 行のロック, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 行のピン固定 | 行のロック | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Material テーブルのピン留め機能を使用して豊富で使いやすい API で行をロックできます。
_keywords: lock row, ignite ui for angular, infragistics, 行のロック, インフラジスティックス
_language: ja
---
}

## @@igComponent 行のピン固定
単一または複数の行を Angular UI グリッドの上側または下側にピン固定できます。Ignite UI for Angular の**行ピン固定**を使用すると、エンドユーザーは特定の順序で行をピン固定し、@@igComponent を垂直にスクロールしても常に表示される特別な領域に行を複製できます。Material UI Grid には組み込みの行ピン固定 UI が含まれており、@@igComponent のコンテキストで `igxActionStrip` コンポーネントを初期化することで有効になります。その他、カスタム UI を定義し、行のピン固定 API を介して行のピン固定状態を変更できます。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-row-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-row-pinning' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-pinning' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchical-grid-row-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

## 行のピン固定 UI

組み込みの行ピン固定 UI は、`GridPinningActions` コンポーネントと `igxActionStrip` コンポーネントを追加することで有効になります。アクション ストリップは、行を方法すると自動的に表示され、表示される行の状態に基づいてピンまたはピン固定解除ボタンのアイコンを表示します。ピン固定された行のコピーをビューにスクロールする追加のアクションがピン固定された行ごとに表示されます。

@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-hierarchical-grid>
```
}


## 行のピン固定 API

行のピン固定は、[`igx-row`]({environment:angularApiUrl}/classes/igxrowcomponent.html) の `pinned` 設定によって制御されます。デフォルトでピン固定行は @@igComponent の上側に固定して描画され、@@igComponent 本体のピン固定されていない行は垂直スクロールされます。

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.getRowByIndex(0).pinned = true;
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.getRowByIndex(0).pinned = true;
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.getRowByIndex(0).pinned = true;
```
}

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`pinRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinrow) または [`unpinRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#unpinrow) メソッドを使用して ID によってレコードをピン固定またはピン固定解除できます。

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.pinRow("ALFKI");
this.grid.unpinRow("ALFKI");
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.pinRow("ALFKI");
this.treeGrid.unpinRow("ALFKI");
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.pinRow("ALFKI");
this.hierarchicalGrid.unpinRow("ALFKI");
```
}

注: 行の ID は、グリッドの [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) またはレコード インスタンス自体によって定義される主キー値です。両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因に行がすでにその状態になっていることがあります。

行は、最後にピンされた行の下にピン固定されます。ピン固定行の順序を変更するには、[`onRowPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowpinning) イベントにサブスクライブして [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipinroweventargs.html#insertatindex) プロパティを適切な位置インデックスに変更します。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="true" (onRowPinning)="rowPinning($event)">
</igx-grid>
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (onRowPinning)="rowPinning($event)">
</igx-tree-grid>
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="true" (onRowPinning)="rowPinning($event)">
</igx-hierarchical-grid>
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```
}

## ピン固定の位置

[`pinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinning) 設定オプションを使用して、行のピン固定の位置を変更できます。ピン固定の位置を Top または Bottom のいずれかに設定できます。
Bottom に設定すると、行がピン固定されていない行の後に、グリッドの一番下にレンダリングされます。ピン固定されていない行は垂直にスクロールできますが、ピン固定された行は下側に固定されます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>
```
}

```typescript
public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Bottom };
```


## カスタム行ピン固定 UI

カスタム UI を定義し、関連する API を介して行のピン状態を変更できます。

### アイコン付きの追加の列によるカスタム行ピン固定 UI

アクション ストリップの代わりに、すべての行にピンのアイコンを表示し、エンドユーザーが特定の行のピン状態をクリックして変更できます。
カスタム アイコンを含むセル テンプレートの列を追加することで実行できます。

@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid [data]="data" [primaryKey]="'ID'">
    <igx-column width="70px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
</igx-grid>
```

}

@@if (igxName === 'IgxTreeGrid') {

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column width="70px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
</igx-tree-grid>
```

}

@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-hierarchical-grid [data]="localdata">
     <igx-column width='70px' [filterable]='false'>
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="true">
    </igx-row-island>
</igx-hierarchical-grid>
```
}

カスタムアイコンをクリックすると、関連する行のピン状態は、行の API メソッドを使用して変更できます。

```typescript
public togglePinning(row: IgxGridRowComponent, event) {
    event.preventDefault();
    if (row.pinned) {
        row.unpin();
    } else {
        row.pin();
    }
}
```

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-row-pinning-extra-column-iframe" src='{environment:demosBaseUrl}/grid/grid-row-pinning-extra-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-pinning-extra-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-extra-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-row-pinning-extra-column-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-pinning-extra-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-pinning-extra-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-pinning-extra-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchical-grid-row-pinning-extra-column-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning-extra-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-pinning-extra-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-pinning-extra-column-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}


@@if (igxName === 'IgxGrid') {

### 行ドラッグを使用した方法

ピン状態を変更するために、ピン固定された行とピン固定されていない行の間に直接行をドラッグアンドドロップできるようにするとします。
これは、行のドラッグ機能を有効にし、ドロップの際に API で行をピン固定/ピン固定解除することで実現できます。

最初に、`igxDrop` ディレクティブによってグリッドをドロップ領域としてマークし、`rowDraggable` オプションで行のドラッグ機能を有効にします。

```html
<igx-grid [data]="data" [autoGenerate]="true" [rowDraggable]="true"
    [primaryKey]="'ID'" igxDrop (dropped)="onDropAllowed($event)">
</igx-grid>
```

次に、`dropped` イベントを使用してソートとピン固定/ピン固定解除のロジックを処理できます。

```typescript
public onDropAllowed(args) {
    const event = args.originalEvent;
    let currRowPinnedIndex;
    const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });
    if (currRowIndex === -1) { return; }

    const currRowID = this.getCurrentRowID(this.grid.rowList.toArray(),
        { x: event.clientX, y: event.clientY });

    const currentRow = this.grid.rowList.toArray().find((r) => r.rowID === currRowID);
    if (currentRow.pinned) {
        currRowPinnedIndex = this.grid.pinnedRows.indexOf(this.grid.pinnedRows.find((r) => r.rowID === currRowID));
    }
    // remove the row that was dragged and place it onto its new location
    this.grid.deleteRow(args.dragData.rowID);
    this.data.splice(currRowIndex, 0, args.dragData.rowData);
    if (currentRow.pinned && !args.dragData.pinned) {
        this.grid.pinRow(args.dragData.rowID, currRowPinnedIndex);
    } else if (!currentRow.pinned && args.dragData.pinned) {
        this.grid.unpinRow(args.dragData.rowID);
    } else if (currentRow.pinned && args.dragData.pinned) {
        this.grid.unpinRow(args.dragData.rowID);
        this.grid.pinRow(args.dragData.rowID, currRowPinnedIndex);
    }
}
```

これにより、行をソートしたり、ピン固定とピン固定解除の行コレクション間で移動できるようになります。

#### デモ

<div class="sample-container loading" style="height:510px">
    <iframe id="grid-row-pinning-drag-iframe" src='{environment:demosBaseUrl}/grid/grid-row-pinning-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-pinning-drag-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-drag-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

}


## 行ピン固定の制限

* データソースに存在するレコードのみをピン固定できます。
* 行のピン固定状態は Excel にエクスポートされません。グリッドは行のピン固定が適用されずにエクスポートされます。
* ピン固定行が内部でグリッドのピン固定領域と非固定領域の両方に存在するよう保存される仕様上、グリッド内のレコードがオンデマンドでリモート エンドポイントから取得される場合 (リモート仮想化)、行のピン固定はサポートされません。
* グリッドのスクロール可能領域におけるピン固定行のコピーは、ピン固定行が存在する状態で他のグリッド機能が動作するのに不可欠な役割を果たします。そのため、その生成を無効化または削除することはできません。
* 行選択 は 行 ID のみで動作するため、ピン固定行を選択するとそのコピーも選択されます (逆も同様)。さらに、ピン固定領域での範囲選択 (Shift + クリックにより) は、スクロール可能な領域で行を範囲選択する場合と同じように機能します。結果として、間にある行はピン固定されていなくてもすべて選択されます。API を 介して選択した行を取得すると、選択した各レコードの単一のインスタンスのみを返します。

<div class="divider--half"></div>

## スタイル設定

@@igxName は、[Ignite UI for Angular テーマ ライブラリ](../themes/component-themes.md)でスタイルを設定できます。@@igComponent の [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) は、@@igComponent のすべての機能をカスタマイズできるさまざまなプロパティを公開します。

以下では、@@igComponent の行ピン固定スタイルをカスタマイズする手順を示します。

### スタイル ライブラリのインポート

行ピン固定機能をカスタマイズするには、まずすべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

### テーマの定義

次に、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、必要に応じて行のピン固定機能のカスタマイズに必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-grid-theme: igx-grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```

### CSS 変数の使用

最後にカスタム グリッド テーマを設定します。

```scss
@include igx-css-vars($custom-grid-theme);
```

### ミックスインの使用

Internet Explorer 11 のコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。

コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。ただし、カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom grid theme to the `igx-grid` mixin
        @include igx-grid($custom-grid-theme);
    }
}
```

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:540px">
    <iframe id="grid-row-pinning-styling" src='{environment:demosBaseUrl}/grid/grid-row-pinning-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:540px">
    <iframe id="tree-grid-row-pinning-styling" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-pinning-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:540px">
    <iframe id="hierarchical-grid-row-pinning-styling" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

## API リファレンス
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxRowComponent]({environment:angularApiUrl}/classes/igxrowcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並び替え](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
