@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Data Selection |Ignite UI for Angular |infragistics 
_description: Ignite UI Angular Material Table のデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Data Selection |Ignite UI for Angular |infragistics 
_description: Ignite UI Angular Material Table のデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid データ選択|Ignite UI for Angular |infragistics 
_description: Ignite UI Angular Material Table のデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス

---
}

### @@igComponent Selection 概要

Ignite UI for Angular @@ igComponentコンポーネントは、[行選択](row_selection.md)と[セル選択](cell_selection.md)の 2 つの異なる選択モードを提供します。グリッドのデフォルトの選択モードはマルチセル選択です。選択モードの変更または有効化は、[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection) プロパティと [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection) プロパティを使用します。

プロパティ [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection) を使用すると、次のオプションを指定できます。
- none - @@igComponent の行選択が無効になります。
- single - @@igComponent 内の 1 行のみの選択が利用可能になります。
- multiple - 複数行の選択は、<kbd>ctrl</kbd> + <kbd>click</kbd>、<kbd>space キー</kbd>を押して`行セレクター`を使用することにより、複数行の選択が可能になります。

> 詳細については、[行選択トピック](row_selection.md)を参照してください。

以下のオプションは、プロパティ [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) で指定できます。
- none - @@igComponent のセル選択が無効になります。
- single - @@igComponent 内の 1 セルのみ選択が利用可能になります。
- multiple - @@ igComponent の選択のデフォルト状態です。Multi - セルの選択は、マウスの左ボタンを連続してクリックした後、マウスをセル上にドラッグすることで利用できます。

> 詳細については、[セル選択トピック](cell_selection.md)を参照してください。

### ショーケース アプリケーション

@@if (igxName === 'IgxGrid') {
#### 選択に基づいた集計

このサンプルは、カスタム集計機能とともに複数選択の使用方法を示します。
選択を変更して、現在選択されている範囲の概要を表示します。

<div class="sample-container loading" style="height: 560px;">
    <iframe id="grid-selection-custom-summaries" data-src='{environment:demosBaseUrl}/grid/grid-selection-custom-summaries' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-custom-summaries" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

@@if (igxName === 'IgxGrid'){
#### グリッドのコンテキスト メニュー

[`onContextMenu`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncontextmenu) イベントは、カスタム コンテキスト メニューを追加して、**IgxGrid** での作業をアシストします。グリッドの本体を**右クリック**すると、イベントはトリガーされたセルをエミットします。**コンテキスト メニュー**は、エミットされたセルで動作します。

**複数セルの選択**がある場合、選択したセルが複数セルの選択領域にあるかどうかをチェックするロジックを配置します。その場合、選択したセルの値も出力します

基本的に、メイン関数は次のようになります。

```typescript
...
 public rightClick(eventArgs: any) {
     // Prevent the default behavior of the right click
    eventArgs.event.preventDefault();
    this.multiCellArgs = {};
    // If we have multi-cell selection, check if selected cell is within the ranges
    if (this.multiCellSelection) {
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid1.getSelectedRanges().some(range => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        })
        // If the cell is within a multi-cell selection range, bind all the selected cells data
        if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
        }
    }
    // Set the position of the context menu
    this.contextmenuX = eventArgs.event.clientX;
    this.contextmenuY = eventArgs.event.clientY;
    this.clickedCell = eventArgs.cell;
    // Enable the context menu
    this.contextmenu = true;
}
...
```
以下はコンテキストメニューの機能です。
- 選択したセルの値のコピー。
- 選択したセルの dataRow のコピー。
- 選択したセルが**複数セルの選択範囲**内にある場合、選択したすべてのデータをコピーします

```typescript
//contextmenu.component.ts
...
    public copySelectedCellData(event) {
        const selectedData = { [this.cell.column.field]: this.cell.value };
        this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copyRowData(event) {
        const selectedData = this.cell.row.rowData ;
        this.copyData(JSON.stringify(this.cell.row.rowData));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copySelectedCells(event) {
        const selectedData = this.selectedCells.data;
        this.copyData(JSON.stringify(selectedData));
        this.onCellValueCopy.emit({ data: selectedData });
    }
...
```

IgxGrid はコピーされたデータを取得し、コンテナ要素に貼り付けす。

グリッドとコンテキスト メニューを組み合わせるために使用するテンプレート:
```html
<div class="wrapper">
    <div class="grid__wrapper" (window:click)="disableContextMenu()">
        <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
            (onContextMenu)="rightClick($event)" (onRangeSelection)="getCells($event)"
            (onSelection)="cellSelection($event)">
        <!-- Columns area -->
        </igx-grid>
        <div *ngIf="contextmenu==true">
            <contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell" [selectedCells]="multiCellArgs" (onCellValueCopy)="copy($event)">
            </contextmenu>
        </div>
    </div>
    <div class="selected-data-area">
        <div>
           <pre>{{copiedData}}</pre>
        </div>
    </div>
</div>
```
 複数のセルを選択し、`マウスの右`ボタンを押します。コンテキストメニューが表示され、`セルデータのコピー`を選択すると、選択したデータが右側の空のボックスに表示されます。
 結果:

<div class="sample-container loading" style="height:600px">
    <iframe class="lazyload" id="grid-context-menu-iframe" data-src='{environment:demosBaseUrl}/grid/grid-contextmenu-sample' width="100%" height="100%" seamless frameborder="0"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-context-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

### API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [行選択](row_selection.md)
* [セル選択](cell_selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
