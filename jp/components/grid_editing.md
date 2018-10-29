---
title: Grid 編集 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Data Grid コントロールは、列のデータ型に基づいて編集可能な列にデフォルト セル テンプレートを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス グリッド, セル編集
_language: ja
---

### Grid 編集

Ignite UI for Angular の Grid コンポーネントは、列のデータ型に基づいて編集可能な列にデフォルト セル テンプレートを提供します。更に編集可能な列にカスタムテンプレートを定義でき、セル値の変更の確定や破棄でデフォルトの動作をオーバーライドできます。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-sample-iframe" src='{environment:demosBaseUrl}/grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

特定のセルで編集モードに入るには、最初に列を**編集可能**にする必要があります。データ型固有の編集テンプレートを使用する場合は、列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを指定してください。以下は各型のデフォルト テンプレートです。

 - `string` データ型のデフォルトのテンプレートは [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html) を使用します。
 - `number` データ型のデフォルト テンプレートは、**[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"** を使用し、セルを数値に解析できない値に更新した場合は変更が破棄され、セル値は **0** に設定されます。
 - `date`データ型のデフォルトのテンプレートは  [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用します。
 - `boolean` データ型のデフォルトのテンプレートは [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) を使用します。

以下のいずれかの方法でセルがフォーカスされている場合、編集モードに入ることができます。
 - ダブル クリック
 - シングル クリック - 以前選択したセルが編集モードで現在選択したセルが編集可能な場合のみシングル クリックで編集モードに入ります。以前選択したセルが編集モードでない場合、シングルクリックは編集モードに入らずにセルが選択されるのみです。
 - `Enter` キーの押下
 - `F2` キーの押下

以下のいずれかの方法で変更を**確定せずに**編集モードを終了します。
 - `Escape` キーの押下
 - 並べ替え、フィルタリング、検索、非表示の操作時

編集モードを終了して以下のいずれかの方法で変更を**確定**します。
 - `Enter` キーの押下
 - `F2` キーの押下
 - `Tab` キーの押下
 - その他のセルをシングル クリック - グリッドのその他のセルをクリックした際に変更が提出されます。
 - 'moving' および 'pinning' 操作時

> [!NOTE]
> セルは、水平方向または垂直方向へスクロール、グリッド以外をクリック、列のサイズ変更、列のピン固定、またはその他のページへ移動した場合も編集モードのままです。

You can also modify the cell value through the IgxGrid API but only if primary key is defined:

```typescript
...
    public updateCell() {
        this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
    }
...
```
更新したいセルがグリッド表示コンテナ以外の場合、新しい値は提出されません。

セル更新のその他の方法として [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) の [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) メソッドがあります。

```typescript
...
    public updateCell() {
        const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
        // You can also get cell by rowID if primary key is defined
        // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
        cell.update(70);
    }
...
```
セルが編集モードの際に適用するカスタム テンプレートを定義する方法については、[Grid 列の構成](grid.md#列の構成)をご覧ください。

### CRUD 操作

> [!NOTE]
> **CRUD 操作**を実行する場合、**フィルタリング**、**並べ替え**、**グループ化**など適用したすべてのパイプは再度適用されて表示が自動的に更新されます。

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) は基本的な CRUD 操作のための簡易な API を提供します。

#### 新しいレコードの追加

グリッド コンポーネントは、提供したデータをデータ ソースに追加する [`addRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#addrow) メソッドを公開します。

```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```

#### グリッド データの更新

グリッド データの更新は、**グリッドでプライマリキーが定義されている場合のみ** [`updateRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updaterow) と [`updateCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updatecell) メソッドで行うことができます。セルおよび行の値を直接更新するには [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) メソッドを使用できます。

```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particualr cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```

#### グリッド データの削除

[`deleteRow()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deleterow) メソッドは、プライマリキーが定義されている場合に指定した行のみを削除することに注意してください。


```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
**igx-grid** に関係なく、ボタンのクリックなどのユーザー インタラクションに接続できます。
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### API
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)
* [検索](grid_search.md)