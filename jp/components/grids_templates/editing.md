@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 編集| データの変更 | Ignite UI for Angular| インフラジスティックス
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular グリッド編集機能を使用した CRUD (クラッド) をお試しください。 
_keywords: データ操作, ignite ui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid 編集 | データの変更 | Ignite UI for Angular
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular ツリー グリッド編集機能を使用した CRUD (クラッド) をお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid 編集 | データの変更 | Ignite UI for Angular
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular 階層グリッド編集機能を使用した CRUD (クラッド) をお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
<div class="divider--half"></div>

#### セルの編集

##### UI を介した編集

特定のセルで編集モードに入るには、最初に列を [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) に設定する必要があります。データ型固有の編集テンプレートを使用する場合、列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを指定する必要があります。次に各型のデフォルト テンプレートについて説明します。

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

##### API を介した編集

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
更新するセルが @@igComponent の表示コンテナ外にある場合、新しい値は送信されないことに注意してください。

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

#### セル編集テンプレート

セルが編集モードのときに適用されるカスタム テンプレートを提供する場合は、[`igxCellEditor` ディレクティブ]({environment:angularApiUrl}/classes/igxcelltemplatedirective.html) を使用できます。これを行うには、`igxCellEditor` ディレクティブで `ng-template` を渡し、カスタムコントロールを [`cell.editValue`]({environment:angularApiUrl}/classes/igxcell.html#editvalue) に適切にバインドする必要があります。

```html
<igx-column field="ReorderLevel" header="Reorder Level" [editable]="true">
    <ng-template igxCellEditor let-cell="cell">
        <input type="number" [(ngModel)]="cell.editValue" />
    </ng-template>
</igx-column>
```

> [!NOTE]
> 編集モードでセルの [`editValue`]({environment:angularApiUrl}/classes/igxcell.html#editvalue) に加えられた変更は、終了時に適切な[編集イベント](#編集イベント)をトリガーし、[トランザクション状態](batch_editing.md)に適用されます (トランザクションが有効な場合)。

> [!NOTE]
> セル編集テンプレート ディレクティブ (`igxCellEditor`) は、[セル テンプレート(`igxCell`)](../grid/grid.md#セル編集テンプレート) とは異なります。前者は、**編集モード**の列のセルの表示方法を処理し、編集されたセルの**編集値**を制御します。後者は、**編集モード外**での列のセルの表示方法を制御します。


列とそのテンプレートの構成方法の詳細については、[グリッド列構成](grid.md#列の構成)のドキュメントを参照してください。

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

### 編集イベント

グリッドは、編集エクスペリエンスをより詳細に制御できる広範なイベントを公開します。これらのイベントは、[**行の編集**](row_editing.md)および**セルの編集**のライフサイクル-編集の開始、コミット、またはキャンセル時に発生します。

イベントは次のように分類できます。

| イベント | 説明 | 引数 | キャンセル可能 |
|-------|-------------|-----------|-------------|
| [`onCellEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncelleditenter) | セルが**編集モードに入る**と発生します。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`onRowEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter) | `[rowEditing]` が有効な場合、行が**編集モードに入る**と起動します (`onCellEditEnter` の後)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`onCellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncelledit) | セルの値が**確定**されたときに発生します (Enter の押下など)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`onCellEditCancel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncelleditcancel) | セルがその値を**コミットせず**に編集モードを終了すると起動します (`Esc` キーの押下など)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`onRowEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit) | 編集モードの値の行が**コミット**されたときに発生します (行編集オーバーレイの`完了`ボタンをクリックなど)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`onRowEditCancel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel) | 行が値を**コミットせず**に編集モードを終了するときに発生します (行編集オーバーレイの`キャンセル`ボタンをクリックなど) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |

上記のイベントはすべてキャンセルできます。たとえば、`onCellEditEnter` がキャンセルされた場合、セルは編集モードになりません。

#### 編集イベントでのセル検証
グリッドの編集イベントを使用して、ユーザーがグリッドを操作する方法を変更できます。
この例では、[`onCellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncelledit) イベントにバインドすることにより、入力されたデータに基づいてセルを検証します。セルの新しい値が事前定義された基準を満たしていない場合、イベントをキャンセルすることでデータソースに到達しないようにします (`event.cancel = true`)。また、[`IgxToast`](../toast.md)　を使用してカスタム エラーメッセージを表示します。

最初に必要なことは、グリッドのイベントにバインドすることです。

```html
<@@igSelector (onCellEdit)="handleCellEdit($event)"
...>
...
</@@igSelector>
```

`onCellEdit` は、セルの値がコミットされる直前に発生します。`handleCellEdit` の定義では、アクションを実行する前に特定の列を確認する必要があります。

@@if (igxName === 'IgxGrid') {
```typescript
export class MyGridEventsComponent {
    ...
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = this.grid.columnList.find(e => e.index === event.cellID.columnID);
        if (column.header === "Ordered") {
            const rowData = this.grid.data
            .find(entry => entry[this.grid.primaryKey] === event.cellID.rowID);
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.show();
            }
        }
    }
}
```
**Ordered**列の下のセルに入力された値が使用可能量 (**在庫数**の値) よりも大きい場合、編集はキャンセルされ、エラー メッセージ付きのトーストが表示されます。
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
export class MyTreeGridEventsComponent {
    ...
    public handleCellEdit(event: IGridEditEventArgs): void {
        const row = this.data.find(e => e[this.grid.primaryKey] === event.cellID.rowID);
        if (!row) {
            return;
        }
        const column = this.grid.columnList.find(col => col.index === event.cellID.columnID);
        if (column.field === "Age") {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = "Employees must be at least 18 years old!";
                this.toast.show();
            }
        } else if (column.field === "HireDate") {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = "The employee hire date must be in the past!";
                this.toast.show();
            }
        }
    }
}
```
ここでは、2 つの列を検証しています。ユーザーが従業員の**年齢** (18歳未満) または雇用日 (将来の日付) に無効な値を設定しようとすると、編集がキャンセルされ (値は送信されません)、エラー メッセージ付きのトースターが表示されます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
export class MyHGridEventsComponent {
    ...
    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = this.grid.columnList.find(col => col.index === event.cellID.columnID);
        if (column.field === "Debut") {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = "The debut date must be in the past!";
                this.toast.show();
                event.cancel = true;
            }
        } else if (column.field === "LaunchDate") {
            if (event.newValue > new Date()) {
                this.toast.message = "The launch date must be in the past!";
                this.toast.show();
                event.cancel = true;
            }
        }
    }
}
```
`handleCellEdit` 呼び出しの 2 番目の引数としてグリッドを渡すため、渡されたグリッドの列を使用して、セルが属する列を見つけます。上記の検証が行われている場合、ユーザーがアーティストの**デビュー**年またはアルバムの**発売日**を変更しようとした際に、グリッドは今日よりも後の日付を許可しません。
}

以下は、上記の検証が `@@igSelector` に適用された結果のデモです。
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-events-iframe" src='{environment:demosBaseUrl}/grid/grid-editing-events' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-editing-events-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing-events' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-editing-events-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-events' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}


### スタイル設定

@@ igxName で [Ignite UI for Angular Theme ライブラリ](../themes/component-themes.md) を使用してセルのスタイルを設定できます。グリッドの [テーマ]({environment:sassApiUrl}/index.html#function-igx-grid-theme) は、ユーザーがグリッドのさまざまな側面をスタイル設定できる広範なプロパティを公開します。

以下の手順では、編集モードでグリッドのセルのスタイルを設定する方法と、それらのスタイルの範囲を設定する方法について説明します。

[Ignite UI Theming ライブラリ](../themes/component-themes.md)を使用するには、まずグローバル スタイルでテーマ インデックス ファイルをインポートする必要があります。

#### スタイル ライブラリのインポート

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
```
以上で Ignite UI for Angular テーマ エンジンによって公開されているすべての機能を使用できます。

#### パレットの定義

インデックス ファイルをインポート後、カスタム パレットを作成します。好きな 2 つの色を定義し、それらを使用して [`igx-palette`](../themes/palette.md) でパレットを作成しましょう。

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: igx-palette($primary: $white, $secondary: $blue);
```

#### テーマの定義

これで、パレットを使用してテーマを定義できます。セルは [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) によってスタイル設定されているため、それを使用して @@igxName のテーマを生成できます。

```scss
$custom-grid-theme: igx-grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: igx-color($color-palette, "secondary", 200)
);
```

#### テーマを適用

テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。

```scss
@include igx-grid($custom-grid-theme); 
```

これにより、テーマはアプリケーションの**すべて**のグリッドに適用されます。このカスタム スタイルを特定のコンポーネントにのみ適用する場合は、テーマのスコープを設定する必要があります。

#### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイル ファイルに移動できます (`index` ファイルの [import](#スタイル-ライブラリのインポート) を含む)。

このように、Angular の [`ViewEncapsulation`](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネント外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
            @include igx-grid($custom-grid-theme); 
        }
    }
}
```

#### デモのスタイル設定

上記の手順に加えて、セルの編集テンプレートに使用されるコントロールのスタイルを設定することもできます ([`igx-input-group`](../input_group.md#スタイル設定), [`igx-datepicker`](../date_picker.md#styling) & [`igx-checkbox`](../checkbox.md#スタイル設定))。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
<div class="divider--half"></div>

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
