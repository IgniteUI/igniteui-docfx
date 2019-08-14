@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 編集|データの変更|Ignite UI for Angular |Infragistics
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular グリッド編集機能を使用した CRUD (クラッド) をお試しください。 
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid 編集|データの変更|Ignite UI for Angular
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular ツリー グリッド編集機能を使用した CRUD (クラッド) をお試しください。
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid 編集|データの変更|Ignite UI for Angular
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular 階層グリッド編集機能を使用した CRUD (クラッド) をお試しください。
_keywords: data manipulation, ignite ui for angular, infragistics
---
}

### @@igComponent セル編集とセル テンプレート

Ignite UI for Angular @@igComponent コンポーネントは、Angular CRUD 操作のための優れたデータ操作機能と強力な API を提供します。デフォルトで @@igComponent はセル編集を使用し、デフォルトのセル編集テンプレートによって、列のデータ型に基づいてさまざまなエディターが表示されます。さらに、データ更新アクション用の独自のカスタム テンプレートを定義したり、変更をコミット/破棄したりするためのデフォルトの動作をオーバーライドすることもできます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
<div class="divider--half"></div>

編集モードに入るには、データ型固有の*編集テンプレート*を使用する場合、列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを指定する必要があります。次に各型のデフォルト テンプレートについて説明します。

 - `string` データ型ではデフォルトのテンプレートは [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html) を使用します。
 - `number` データ型のデフォルト テンプレートは **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"** を使用します。数値に解析できない値にセルを更新した場合、変更は無視されてセルの値が **0** に設定されます。
 - `date` データ型ではデフォルトのテンプレートは [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用します。
 - `boolean` データ型ではデフォルトのテンプレートは [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) を使用します。

編集可能なセルがフォーカスされたときに以下のいずれかの方法で特定のセルを編集モードにすることができます。
 - ダブルクリック;
 - シングル クリック - 以前選択したセルが編集モードで現在選択したセルが編集可能な場合のみ、シングル クリックで編集モードに入ります。以前選択したセルが編集モードではない場合、編集モードに入らずにシングル クリックでセルを選択します。
 - `Enter` キーの押下;
 - `F2` キーの押下;

**変更をコミットしない場合**も以下の方法で編集モードを終了できます。
 - `Escape` キーの押下;
 - *sorting*、*filtering*、*searching*、*hiding* 操作の実行時。

変更を**コミット**しない場合も以下の方法で編集モードを終了できます。
 - `Enter` キーの押下;
 - `F2` キーの押下;
 - `Tab` キーの押下;
 - 他のセルをシングル クリック - @@igComponent で他のセルをクリックしたときに変更がサブミットされます。
 - その他の操作 (ページング、サイズ変更、ピン固定、移動など) は、編集モードを終了して変更を送信します。

> [!NOTE]
> セルは、垂直/水平方向へのスクロールや @@igComponent 以外をクリックした場合も編集モードのままです。セル編集と行編集両方で有効です。

プライマリキーが定義されている場合のみ IgxGrid API でもセル値を変更することができます。

@@if (igxName === 'IgxGrid') {
```typescript
...
    public updateCell() {
        this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
    }
...
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
...
    public updateCell() {
        this.treeGrid.updateCell(newValue, rowID, 'Age');
    }
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
...
    public updateCell() {
        this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
    }
...
```
}
以外を更新したい場合

セルを更新するその他の方法として [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) の [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) メソッドで直接更新する方法があります。

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
...
    public updateCell() {
        const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
        // You can also get cell by rowID if primary key is defined
        // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
        cell.update(9999);
    }
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
...
    public updateCell() {
        const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
        // You can also get cell by rowID if primary key is defined
        // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
        cell.update(70);
    }
...
```
}

@@if (igxName === 'IgxGrid') {
セルが編集モード時に適用されるカスタム テンプレートの定義については、[Grid 列設定](grid.md#columns-configuration) をご覧ください。
}

### CRUD 操作

> [!NOTE]
> **CRUD 操作**を実行した場合、**filtering**、**sorting**、**grouping** などのパイプが再適用されるため、ビューが自動的に更新されることに注意してください。

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は基本的な CRUD 操作のための簡易な API を提供します。

#### 新しいレコードの追加

@@igComponent コンポーネントは、提供したデータをデータ ソースに追加する [`addRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#addrow) メソッドを公開します。

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

#### データを @@igComponent で更新

@@igComponent のデータ更新は、**グリッドでプライマリキーが定義されている場合のみ** [`updateRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updaterow) と [`updateCell`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updatecell) メソッドで行うことができます。セルと行の値またはそのいずれかを各 `update` メソッドで直接更新できます。

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

#### @@igComponent からデータを削除

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

<!-- ### Styling

The @@igxName allows for its cells to be styled through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.

In the below steps, we are going to go over how you can style the grid's cell in edit mode and how you can scope those styles.

In order to use the [Ignite UI Theming Library](../themes/component-themes.md), we must first import the theme `index` file in our global styles:

#### Importing style library

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
```
Now we can make use of all of the functions exposed by the Ignite UI for Angular theme engine.

#### Defining a palette

After we've properly imported the index file, we create a custom palette that we can use. Let's define two colors that we like and use them to build a palette with [`igx-palette`](../themes/palette.md):

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: igx-palette($primary: $white, $secondary: $blue);
```

#### Defining themes

We can now define the theme using our palette. The cells are styled by the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme), so we can use that to generate a theme for our @@igxName:

```scss
$custom-grid-theme: igx-grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: igx-color($color-palette, "secondary", 200)
);
```

#### Applying the theme

The easiest way to apply our theme is with a `sass` `@include` statement in the global styles file:

```scss
@include igx-grid($custom-grid-theme); 
```

This way, the theme will apply to **all** grids in our application. If we wish to apply this custom styling only to a specific component, we need to scope the theme.

#### Scoped component theme

In order for the custom theme do affect only our specific component, we can move all of the styles we just defined from the global styles file to our custom component's style file (including the [import](#importing-style-library) of the `index` file).

This way, due to Angular's [`ViewEncapsulation`](https://angular.io/api/core/Component#encapsulation), our styles will be applied only to our custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >We wrap the statement inside of a `:host` selector to prevent our styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
            @include igx-grid($custom-grid-theme); 
        }
    }
}
```

#### Styling Demo

In addition to the steps above, we can also style the controls that are used for the cells' editing templates: [`igx-input-group`](../input_group.md#styling), [`igx-datepicker`](../date_picker.md#styling) & [`igx-checkbox`](../checkbox.md#styling)

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
<div class="divider--half"></div>
 -->

### API リファレンス

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)


### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)
* [検索](search.md)
