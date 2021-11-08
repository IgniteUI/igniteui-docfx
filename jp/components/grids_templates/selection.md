@@if (igxName === 'IgxGrid') {
---
title: Angular Grid データ選択 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI Angular Material Table のデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid データ選択 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI Angular Material Table のデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid データ選択 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI Angular Material Table のデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス

---
}

# Angular @@igComponent 選択の概要
Ignite UI for Angular @@igComponent を使用して、さまざまなイベント、豊富な API、または単一選択などのシンプルなマウス操作でデータを簡単に選択できます。

## Angular Grid 選択の例

以下のサンプルは、@@igComponent の**セル選択**動作の 3 つのタイプを示します。以下のボタンを使用して、使用可能な各選択モードを有効にします。Snackbar メッセージ ボックスで各ボタンの操作について簡単に説明します。
<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-selection" alt="Angular Grid 選択の例">
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-selection" alt="Angular Grid 選択の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection" alt="Angular Grid 選択の例">
</code-view>

<div class="divider--half"></div>
}

## Angular Grid 選択のオプション

Ignite UI for Angular @@igComponent コンポーネントは、[行選択](row-selection.md)、[セル選択](cell-selection.md)、[列選択](column-selection.md)の 3 つの選択モードを提供します。デフォルトでは、@@igComponent で**複数セル選択**モードのみが有効になっています。選択モードを変更/有効化するには、[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection)、[`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) 、または [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) プロパティを使用できます。

### Angular 行選択

[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection) プロパティを使用すると、次のオプションを指定できます。
- none - @@igComponent の行選択が無効になります。
- single - @@igComponent 内の 1 行のみの選択が利用可能になります。
- multiple - 複数行の選択は、<kbd>ctrl</kbd> + <kbd>click</kbd>、<kbd>space キー</kbd>を押して`行セレクター`を使用することにより、複数行の選択が可能になります。@@if (igxName === 'IgxTreeGrid') {
- multipleCascade -  これはカスケード選択のモードであり、ユーザーがユーザーの操作で選択したレコードの下のツリー内のすべての子が選択されます。このモードでは、親の選択状態はその子の選択状態に完全に依存します。
}

> 詳細については、[行選択トピック](row-selection.md)を参照してください。

### Angular セル選択

以下のオプションは、プロパティ [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) で指定できます。
- none - @@igComponent のセル選択が無効になります。
- single - @@igComponent 内の 1 セルのみ選択が利用可能になります。
- multiple - @@igComponent の選択のデフォルト状態です。Multi - セルの選択は、マウスの左ボタンを連続してクリックした後、マウスをセル上にドラッグすることで利用できます。

> 詳細については、[セル選択トピック](cell-selection.md)を参照してください。

### Angular 列選択

[`selectable` プロパティ]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) を使用して、**列**ごとに以下のオプションを指定できます。
- False - 対応する列選択は @@igComponent に対して無効になります。
- True - 対応する列選択は @@igComponent に対して有効になります。
- 以下の 3 つのバリエーションがあります。
 - 単一選択 - 列セルを<kbd>マウス クリック</kbd>します。
 - 複数列の選択 - <kbd>Ctrl</kbd> キーを押しながら列セルを<kbd>マウス クリック</kbd>します。
 - 列の範囲選択 - <kbd>Shift</kbd> キーを押しながら + <kbd>マウス クリック</kbd>、その間のすべての列が選択されます。

> 詳細については、[列選択トピック](column-selection.md)を参照してください。

@@if (igxName === 'IgxGrid'){
## グリッドのコンテキスト メニュー

[`contextMenu`]({environment:angularApiUrl}/classes/igxgridcomponent.html#contextMenu) イベントは、カスタム コンテキスト メニューを追加して、**IgxGrid** での作業をアシストします。グリッドの本体を**右クリック**すると、イベントはトリガーされたセルを放出します。**コンテキスト メニュー**は、放出されたセルで動作します。

**複数セルの選択**がある場合、選択したセルが複数セルの選択領域にあるかどうかをチェックするロジックを配置します。その場合、選択したセルの値も出力します。

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
        const selectedData = this.cell.row.data ;
        this.copyData(JSON.stringify(this.cell.row.data));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copySelectedCells(event) {
        const selectedData = this.selectedCells.data;
        this.copyData(JSON.stringify(selectedData));
        this.onCellValueCopy.emit({ data: selectedData });
    }
...
```

IgxGrid はコピーされたデータを取得し、コンテナ要素に貼り付けます。

グリッドとコンテキスト メニューを組み合わせるために使用するテンプレート:
```html
<div class="wrapper">
    <div class="grid__wrapper" (window:click)="disableContextMenu()">
        <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
            (contextMenu)="rightClick($event)" (rangeSelected)="getCells($event)"
            (selected)="cellSelection($event)">
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


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-contextmenu-sample" >
</code-view>

<div class="divider--half"></div>
}

## 既知の問題と制限

- IE11 で選択を有効にした @@igComponent コンポーネントを使用するには、Angular アプリケーションの polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。

    ```typescript
    import 'core-js/es7/array';
    ```

- グリッドに `primaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:
    * Row Selection
    * Row Expand/collapse
    * Row Editing
    * Row Pinning

## API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRow API]({environment:angularApiUrl}/classes/igxtreegridrow.html)}
* [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [行選択](row-selection.md)
* [セル選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [仮想化とパフォーマンス](virtualization.md)
@@if (igxName === 'IgxGrid'){* [選択に基づいた集計](selection-based-aggregates.md)}

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
