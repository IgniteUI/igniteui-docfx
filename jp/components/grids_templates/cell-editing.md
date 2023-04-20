@@if (igxName === 'IgxGrid') {
---
title: Angular Data Grid セル編集 - Ignite UI for Angular
_description: Grid はセル内編集を使用しています。デフォルトのセル編集テンプレートがありますが、データ更新操作のカスタム テンプレートを定義することもできます。今すぐお試しください。
_keywords: データ操作, ignite ui for angular, excel editing, excel 編集, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid のセル編集 - Ignite UI for Angular
_description: Grid はセル内編集を使用しています。デフォルトのセル編集テンプレートがありますが、データ更新操作のカスタム テンプレートを定義することもできます。今すぐお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid のセル編集 - Ignite UI for Angular
_description: Grid はセル内編集を使用しています。デフォルトのセル編集テンプレートがありますが、データ更新操作のカスタム テンプレートを定義することもできます。今すぐお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス
_language: ja
---
}

# Angular @@igComponent のセル編集

Ignite UI for Angular @@igComponent コンポーネントは、Angular CRUD 操作のための優れたデータ操作機能と強力な API を提供します。デフォルトで @@igComponent は**セル編集**を使用し、**デフォルトのセル編集テンプレート**によって、列のデータ型に基づいてさまざまなエディターが表示されます。さらに、データ更新アクション用の独自のカスタム テンプレートを定義したり、変更をコミット/破棄したりするためのデフォルトの動作をオーバーライドすることもできます。

## Angular @@igComponent セル編集とセル テンプレートの例

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing" alt="Angular @@igComponent セル編集とセル テンプレートの例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-editing" alt="Angular @@igComponent セル編集とセル テンプレートの例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:660px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing" alt="Angular @@igComponent セル編集とセル テンプレートの例">
</code-view>

}
<div class="divider--half"></div>

> [!NOTE]
>任意のタイプのエディター コンポーネントで `igxCellEditor` を使用すると、キーボード ナビゲーション フローが中断されます。同じことが、編集モードに入るカスタム セルの直接編集にも当てはまります。これは、追加したエディター コンポーネント ([`igxSelect`](../select.md)、[`igxCombo`](../combo.md) など) ではなく、セル要素にフォーカスが残るためです。これが、`igxFocus` ディレクティブを利用する必要がある理由です。これにより、フォーカスがセル内コンポーネントに直接移動し、セル/行の`流暢な編集フロー`が維持されます。

## セルの編集

### UI を介した編集


編集可能なセルがフォーカスされたときに以下のいずれかの方法で特定のセルを編集モードにすることができます。
 - ダブルクリック;
 - シングル クリック - 以前選択したセルが編集モードで現在選択したセルが編集可能な場合のみ、シングル クリックで編集モードに入ります。以前選択したセルが編集モードではない場合、編集モードに入らずにシングル クリックでセルを選択します。
 - `Enter` キーの押下;
 - `F2` キーの押下;

**変更をコミットしない場合**も以下の方法で編集モードを終了できます。
 - `Escape` キーの押下;
 - *ソート*、*フィルターリング*、*検索*、*非表示* 操作の実行時。

変更を**コミット**しない場合も以下の方法で編集モードを終了できます。
 - `Enter` キーの押下;
 - `F2` キーの押下;
 - `Tab` キーの押下;
 - 他のセルをシングル クリック - @@igComponent で他のセルをクリックしたときに変更がサブミットされます。
 - その他の操作 (ページング、サイズ変更、ピン固定、移動など) は、編集モードを終了して変更を送信します。

> [!NOTE]
> セルは、垂直/水平方向へのスクロールや @@igComponent 以外をクリックした場合も編集モードのままです。セル編集と行編集両方で有効です。

### API を介した編集

プライマリキーが定義されている場合のみ @@igxName API でもセル値を変更することができます。

@@if (igxName === 'IgxGrid') {
```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```
}

セルを更新するその他の方法として [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) の [`update`]({environment:angularApiUrl}/classes/igxgridcell.html#update) メソッドで直接更新する方法があります。

@@if (igxName === 'IgxGrid') {
```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
public updateCell() {
    const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
    // You can also get cell by rowID if primary key is defined
    // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
    cell.update(9999);
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
public updateCell() {
    const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```
}

### セル編集テンプレート

デフォルトのセル編集テンプレートの詳細については、[編集トピック](editing.md#テンプレートの編集)を参照してください。

セルが編集モードのときに適用されるカスタム テンプレートを提供する場合は、[`igxCellEditor` ディレクティブ]({environment:angularApiUrl}/classes/igxcelltemplatedirective.html)を使用できます。これを行うには、`igxCellEditor` ディレクティブでマークされた `ng-template` を渡し、カスタム コントロールを [`cell.editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editValue) に適切にバインドする必要があります:

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```
このコードは、`Race`、`Class`、および `Alignment` 列のセルに [`IgxSelectComponent`](../select.md) を実装する以下のサンプルで使用されています。


<code-view style="height:625px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-select" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> 編集モードでセルの [`editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editValue) に加えられた変更は、終了時に適切な[`編集イベント`](editing.md#イベントの引数とシーケンス)をトリガーし、[トランザクション状態](./batch-editing.md)に適用されます (トランザクションが有効な場合)。

> [!NOTE]
> セルテンプレート [`igxCell`](../grid/grid.md#セル-テンプレート) は、編集モード外での列のセルの表示方法を制御します。
> `igxCellEditor` セル編集テンプレート ディレクティブは、編集モードでの列のセルの表示方法を処理し、編集されたセルの編集値を制御します。

> [!NOTE]
>任意のタイプのエディター コンポーネントで `igxCellEditor` を使用すると、キーボード ナビゲーション フローが中断されます。同じことが、編集モードに入るカスタム セルの直接編集にも当てはまります。これは、追加したエディター コンポーネント ([`igxSelect`](../select.md)、[`igxCombo`](../combo.md) など) ではなく、セル要素にフォーカスが残るためです。これが、`igxFocus` ディレクティブを利用する必要がある理由です。これにより、フォーカスがセル内コンポーネントに直接移動し、セル/行の `流暢な編集フロー`が維持されます。


列とそのテンプレートの構成方法の詳細については、[グリッド列構成](../grid/grid.md#angular-grid-列の構成)のドキュメントを参照してください。

@@if (igxName === 'IgxGrid') {

### @@igComponent Excel スタイル編集


Excel スタイル編集を使用すると、Excel を使用する場合と同じようにセルをナビゲートし、すばやく編集できます。

このカスタム機能を実装するには、グリッドのイベントを使用します。最初にグリッドの keydown イベントにフックし、そこから 2 つの機能を実装できます。

* 常時編集モード

```typescript
public keydownHandler(event) {
  const key = event.keyCode;
  const grid = this.grid;
  const activeElem = grid.navigation.activeNode;

  if(
    (key >= 48 && key <= 57) ||
    (key >= 65 && key <= 90) ||
    (key >= 97 && key <= 122)){
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !grid.crudService.cellInEditMode) {
            grid.crudService.enterEditMode(cell);
            cell.editValue = event.key;
        }
    }
}
```

  * `Enter` / `Shift + Enter` ナビゲーション

```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eiligible cell, we will use a custom method that will check the next suitable index
    let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
    });
}
```
次の適格なインデックスを見つけるための重要な部分は以下のようになります。

```typescript
//first we check if the currently selected cell is the first or the last
if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
return currentRowIndex;
}
// in case using shift + enter combination, we look for the first suitable cell going up the field
if(previous){
return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
}
// or for the next one down the field
return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
```

詳細については、サンプルを参照してください。

##### Angular Grid Excel スタイル編集のサンプル

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-excel-style" alt="Angular Grid Excel スタイル編集の例">
</code-view>


上記のアプローチの主な利点は次のとおりです:

- 常時編集モード: セルが選択されているときに入力すると、編集モードに入り、入力された値が既存の値を置き換えます。
- `Enter` / `Shift + Enter` で移動する場合、データ以外の行はスキップされます。これにより、ユーザーは値をすばやく切り替えることができます。

}

## CRUD 操作

> [!NOTE]
> **CRUD 操作**を実行した場合、**filtering**、**sorting**、**grouping** などのパイプが再適用されるため、ビューが自動的に更新されることに注意してください。

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は基本的な CRUD 操作のための簡易な API を提供します。

### 新しいレコードの追加

@@igComponent コンポーネントは、提供したデータをデータ ソースに追加する [`addRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#addRow) メソッドを公開します。

@@if (igxName === 'IgxGrid') {
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
}
```
}

### データを @@igComponent で更新

@@igComponent のデータ更新は、**グリッドでプライマリキーが定義されている場合のみ** [`updateRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updateRow) と [`updateCell`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updateCell) メソッドで行うことができます。セルと行の値またはそのいずれかを各 `update` メソッドで直接更新できます。

@@if (igxName === 'IgxGrid') {
```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```
}

### @@igComponent からデータを削除

[`deleteRow()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deleterow) メソッドは、プライマリキーが定義されている場合に指定した行のみを削除することに注意してください。

@@if (igxName === 'IgxGrid') {
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
}
**@@igSelector** に関係なく、ボタンのクリックなどのユーザー インタラクションに関連付けできます。
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### 編集イベントでのセル検証
グリッドの編集イベントを使用して、ユーザーがグリッドを操作する方法を変更できます。
この例では、[`cellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEdit) イベントにバインドすることにより、入力されたデータに基づいてセルを検証します。セルの新しい値が事前定義された基準を満たしていない場合、イベントをキャンセルすることでデータソースに到達しないようにします (`event.cancel = true`)。また、[`IgxToast`](../toast.md) を使用してカスタム エラーメッセージを表示します。

最初に必要なことは、グリッドのイベントにバインドすることです。

```html
<@@igSelector (cellEdit)="handleCellEdit($event)"
...>
...
</@@igSelector>
```

`cellEdit` は、セルの値がコミットされる直前に発生します。`handleCellEdit` の定義では、アクションを実行する前に特定の列を確認する必要があります。

@@if (igxName === 'IgxGrid') {
```typescript
export class MyGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Ordered') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
```
**注文済み**列の下のセルに入力された値が使用可能量 (**在庫数**の値) よりも大きい場合、編集はキャンセルされ、エラー メッセージ付きのトーストが表示されます。
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
export class MyTreeGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Age') {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = 'Employees must be at least 18 years old!';
                this.toast.open();
            }
        } else if (column.field === 'HireDate') {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = 'The employee hire date must be in the past!';
                this.toast.open();
            }
        }
    }
}
```
ここでは、2 つの列を検証しています。ユーザーが従業員の**年齢** (18歳未満) または**雇用日** (将来の日付) に無効な値を設定しようとすると、編集がキャンセルされ (値は送信されません)、エラー メッセージ付きのトースターが表示されます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
export class MyHGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = 'The debut date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                this.toast.message = 'The launch date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        }
    }
}
```
ここでは、2 つの列を検証しています。ユーザーがアーティストの**デビュー**年またはアルバムの**発売日**を変更しようとした際に、グリッドは今日よりも後の日付を許可しません。
}

以下は、上記の検証が `@@igSelector` に適用された結果のデモです。
@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-events" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-editing-events" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-events" >
</code-view>

}


## スタイル設定

@@igxName で [Ignite UI for Angular テーマ ライブラリ](../themes/sass/component-themes.md) を使用してセルのスタイルを設定できます。グリッドの [theme]({environment:sassApiUrl}/index.html#function-grid-theme) は、ユーザーがグリッドのさまざまな側面をスタイル設定できる広範なプロパティを公開します。

以下の手順では、編集モードでグリッドのセルのスタイルを設定する方法と、それらのスタイルの範囲を設定する方法について説明します。

[Ignite UI Theming ライブラリ](../themes/sass/component-themes.md)を使用するには、まずグローバル スタイルでテーマ `index` ファイルをインポートする必要があります。

### スタイル ライブラリのインポート

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

以上で Ignite UI for Angular テーマ エンジンによって公開されているすべての機能を使用できます。

### パレットの定義

インデックス ファイルをインポート後、カスタム パレットを作成します。好きな 2 つの色を定義し、それらを使用して [`igx-palette`](../themes/palettes.md) でパレットを作成しましょう。

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: palette($primary: $white, $secondary: $blue);
```

### テーマの定義

これで、パレットを使用してテーマを定義できます。セルは [`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) によってスタイル設定されているため、それを使用して @@igxName のテーマを生成できます。

```scss
$custom-grid-theme: grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: color($color-palette, "secondary", 200)
);
```

### テーマを適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
@include grid($custom-grid-theme);
```

これにより、テーマはアプリケーションの**すべて**のグリッドに適用されます。このカスタム スタイルを特定のコンポーネントにのみ適用する場合は、テーマのスコープを設定する必要があります。

### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイル ファイルに移動できます (`index` ファイルの [import](#スタイル-ライブラリのインポート) を含む)。

このように、Angular の [`ViewEncapsulation`](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッドのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を解除する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
            @include grid($custom-grid-theme);
        }
    }
}
```

### デモのスタイル設定

上記の手順に加えて、セルの編集テンプレートに使用されるコントロールのスタイルを設定することもできます ([`igx-input-group`](../input-group.md#スタイル設定)、[`igx-datepicker`](../date-picker.md#スタイル設定) および [`igx-checkbox`](../checkbox.md#angular-checkbox-のスタイル設定))。

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-style" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-editing-style" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:660px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-style" >
</code-view>

}

>[!NOTE]
>このサンプルは、「テーマの変更」から選択したグローバル テーマに影響を受けません。
<div class="divider--half"></div>

## API リファレンス

* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)}
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/index.html#function-checkbox-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-overlay-theme)


## その他のリソース
<div class="divider--half"></div>

* [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}