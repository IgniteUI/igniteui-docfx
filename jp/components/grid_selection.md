---
title: 行選択 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 行選択を使用すると、行ですべての他の列の前に描画されるチェックボックス列があります。このチェックボックスによって行を選択または選択解除でき、データの複数行を選択できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, Angular Grid 行選択, Angular 行選択,Angular Grid 選択, Grid 行選択, Grid 選択
_language: ja
---

### Data Grid 行選択

Ignite UI for Angular 行選択は、行内のすべての列の前に描画されるチェックボックス列にあるチェックボックスで行を選択/選択解除でき、データを含む複数の行を選択/選択解除できます。

#### デモ

<div class="sample-container loading" style="height:730px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>


### 構成

#### 単一選択

グリッドの単一選択を grid の `onSelection` イベントで構成できます。イベントはセル コンポーネントへの参照を発行します。イベントはセル コンポーネントへの参照を発行し、そのセルコンポーネントは含まれる行コンポーネントへの参照を含みます。行コンポーネント参照の `rowID` ゲッターを使用して、`rowData[primaryKey]` または `rowData` オブジェクト自身を使用して行の一意識別子を selectionAPI の適切なリストに渡します。単一行のみを選択させるには、`selectionAPI` 行選択リストを空にします。これは `selectRows` メソッドの呼び出しの 2 番目の引数です。

```html
    <!-- in example.component.html -->
    ...
    <igx-grid #grid1 [data]="remote | async" [rowSelectable]="false" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
            ...
    </igx-grid>
    ...
```
```typescript
    /* in examplegrid.component.ts */
    public handleRowSelection(args) {
        const targetCell = args.cell as IgxGridCellComponent;
        if (!this.selection) {
            this.grid1.selectRows([targetCell.row.rowID], true);
        }
    }

```

#### 複数選択

複数行選択を有効にするには、`igx-grid` の `rowSelectable` プロパティを使用します。`rowSelectable` を `true` に設定すると、各行およびグリッド ヘッダーで選択チェックボックス フィールドが有効になります。チェックボックスを使用して複数行を選択でき、スクロール、ページング、および並べ替えとフィルターなどのデータ操作で選択が保持されます。

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
```

**注**: グリッドにリモート仮想化がある場合に行選択およびセル選択が正しく動作するには、`primaryKey` を設定します。

**注**: グリッドでリモート仮想化が有効な場合、ヘッダー チェックボックスをクリックすると、すべてのレコードを選択/選択解除できます。すべてのレコードをヘッダー チェックボックスで選択した後に表示行の選択が解除された場合、オンデマンドでグリッドに新しいデータを読み込んだ際に新しく読み込んだ行が選択されない機能制限があります。

### メソッド

#### IgxGridComponent

| 名前     | 説明                | 戻り型                                       | パラメーター           |
|----------|----------------------------|---------------------------------------------------|----------------------|
| selectedRows | 現在の選択状態を取得します。    | `Array<any>`- 選択済み行の ID (primaryKey または rowData) を持つ配列| |
| selectRows   | 指定した行を ID によって選択します。      | `void`- 何も返しません。 | `Array<any>`, clearCurrentSelection: `boolean`    |   
| deselectRows | 指定した行を ID によって選択解除します。    | `void`- 何も返しません。 | `Array<any>` |
| selectAllRows | すべての行を選択します。            | `void`- 何も返しません。 |    N/A                    |
| deselectAllRows | すべての行を選択解除します。         | `void`- 何も返しません。 |    N/A                    |

**注**: フィルタリング機能が有効にされる場合、`selectAllRows()` および `deselectAllRows()` は**フィルターされた行**のみを選択/選択解除します。

### イベント
|名前|説明|パラメーター|
|--|--|--|
| onRowSelectionChange | 選択が変更されているときに発生します。 | { selection: `Array<any>`, row: IgxRowComponent, rowID: any|

**注**: セル選択は onSelection をトリガーしますが、onRowSelection をトリガーしません。

### コード スニペット

#### コードで行を選択

以下のコード例は `primaryKey` を使用して単一または複数行を選択します。

```html
<!-- in component.html -->
<igx-grid ... [primaryKey]="'ID'">
...
</igx-grid>
...
<button (click)="this.grid.selectRows([1,2,5])">Select 1,2 and 5</button>
```

1、2、および 5 の ID を持つデータ エントリに相対する行をグリッド選択に追加します。

#### 選択イベントのキャンセル

```html
<!-- in component.html -->
<igx-grid
    (onRowSelectionChange)="handleRowSelectionChange($event)"
>
...
</igx-grid>
```

```typescript
// in component.ts
public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI
    args.checked = false; // overwrites the checkbox state
}
```

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [仮想化とパフォーマンス](grid_virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
