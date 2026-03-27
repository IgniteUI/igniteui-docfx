---
title: Angular Hierarchical Grid のセル編集 - Ignite UI for Angular
_description: Grid はセル内編集を使用しています。デフォルトのセル編集テンプレートがありますが、データ更新操作のカスタム テンプレートを定義することもできます。今すぐお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス
_license: commercial
_language: ja
---


# Angular Hierarchical Grid のセル編集

Ignite UI for Angular Hierarchical Grid コンポーネントは、Angular CRUD 操作のための優れたデータ操作機能と強力な API を提供します。デフォルトで Hierarchical Grid は**セル編集**を使用し、**デフォルトのセル編集テンプレート**によって、列のデータ型に基づいてさまざまなエディターが表示されます。さらに、データ更新アクション用の独自のカスタム テンプレートを定義したり、変更をコミット/破棄したりするためのデフォルトの動作をオーバーライドすることもできます。

## Angular Hierarchical Grid セル編集とセル テンプレートの例





<code-view style="height:660px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing/" alt="Angular Hierarchical Grid セル編集とセル テンプレートの例">
</code-view>


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
- **ソート**、**フィルターリング**、**検索**、**非表示**操作の実行時。

変更を**コミット**しない場合も以下の方法で編集モードを終了できます。
- `Enter` キーの押下;
- `F2` キーの押下;
- `Tab` キーの押下;
- 他のセルをシングル クリック - Hierarchical Grid で他のセルをクリックしたときに変更がサブミットされます。
- その他の操作 (ページング、サイズ変更、ピン固定、移動など) は、編集モードを終了して変更を送信します。

> [!NOTE]
> セルは、垂直/水平方向へのスクロールや Hierarchical Grid 以外をクリックした場合も編集モードのままです。セル編集と行編集両方で有効です。

### API を介した編集

プライマリキーが定義されている場合のみ IgxHierarchicalGrid API でもセル値を変更することができます。





```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```



セルを更新するその他の方法として [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) の [`update`]({environment:angularApiUrl}/classes/igxgridcell.html#update) メソッドで直接更新する方法があります。





```typescript
public updateCell() {
    const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```



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
           iframe-src="{environment:demosBaseUrl}/grid/grid-select/" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> 編集モードでセルの [`editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editValue) に加えられた変更は、終了時に適切な[編集イベント](editing.md#イベントの引数とシーケンス)をトリガーし、[トランザクション状態](./batch-editing.md)に適用されます (トランザクションが有効な場合)。

> [!NOTE]
> セルテンプレート [`igxCell`](../grid/grid.md#セル-テンプレート) は、編集モード外での列のセルの表示方法を制御します。
> `igxCellEditor` セル編集テンプレート ディレクティブは、編集モードでの列のセルの表示方法を処理し、編集されたセルの編集値を制御します。

> [!NOTE]
>任意のタイプのエディター コンポーネントで `igxCellEditor` を使用すると、キーボード ナビゲーション フローが中断されます。同じことが、編集モードに入るカスタム セルの直接編集にも当てはまります。これは、追加したエディター コンポーネント ([`igxSelect`](../select.md)、[`igxCombo`](../combo.md) など) ではなく、セル要素にフォーカスが残るためです。これが、`igxFocus` ディレクティブを利用する必要がある理由です。これにより、フォーカスがセル内コンポーネントに直接移動し、セル/行の `流暢な編集フロー`が維持されます。


列とそのテンプレートの構成方法の詳細については、[グリッド列構成](../grid/grid.md#angular-grid-列の構成)のドキュメントを参照してください。



## CRUD 操作

> [!NOTE]
> **CRUD 操作**を実行した場合、**filtering**、**sorting**、**grouping** などのパイプが再適用されるため、ビューが自動的に更新されることに注意してください。

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) は基本的な CRUD 操作のための簡易な API を提供します。

### 新しいレコードの追加

Hierarchical Grid コンポーネントは、提供したデータをデータ ソースに追加する [`addRow`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#addRow) メソッドを公開します。





```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
}
```



### データを Hierarchical Grid で更新

Hierarchical Grid のデータ更新は、**グリッドでプライマリキーが定義されている場合のみ** [`updateRow`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#updateRow) と [`updateCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#updateCell) メソッドで行うことができます。セルと行の値またはそのいずれかを各 `update` メソッドで直接更新できます。





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



### Hierarchical Grid からデータを削除

[`deleteRow()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#deleteRow) メソッドは、プライマリキーが定義されている場合に指定した行のみを削除することに注意してください。





```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```


**igx-hierarchical-grid** に関係なく、ボタンのクリックなどのユーザー インタラクションに関連付けできます。

```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### 編集イベントでのセル検証

グリッドの編集イベントを使用して、ユーザーがグリッドを操作する方法を変更できます。
この例では、[`cellEdit`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#cellEdit) イベントにバインドすることにより、入力されたデータに基づいてセルを検証します。セルの新しい値が事前定義された基準を満たしていない場合、イベントをキャンセルすることでデータソースに到達しないようにします (`event.cancel = true`)。また、[`IgxToast`](../toast.md) を使用してカスタム エラーメッセージを表示します。

最初に必要なことは、グリッドのイベントにバインドすることです。

```html
<igx-hierarchical-grid (cellEdit)="handleCellEdit($event)"
...>
...
</igx-hierarchical-grid>
```

`cellEdit` は、セルの値がコミットされる直前に発生します。`handleCellEdit` の定義では、アクションを実行する前に特定の列を確認する必要があります。





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


以下は、上記の検証が `igx-hierarchical-grid` に適用された結果のデモです。




<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-events/" >
</code-view>




## スタイル設定

IgxHierarchicalGrid で [`Ignite UI for Angular テーマ ライブラリ`](../themes/sass/component-themes.md)を使用してセルのスタイルを設定できます。グリッドの [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) は、ユーザーがグリッドのさまざまな側面をスタイル設定できる広範なプロパティを公開します。

以下の手順では、編集モードでグリッドのセルのスタイルを設定する方法と、それらのスタイルの範囲を設定する方法について説明します。

[`Ignite UI テーマ ライブラリ`](../themes/sass/component-themes.md)を使用するには、まずグローバル スタイルでテーマ `index` ファイルをインポートする必要があります。

### スタイル ライブラリのインポート

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

以上で Ignite UI for Angular テーマ エンジンによって公開されているすべての機能を使用できます。

### パレットの定義

インデックス ファイルをインポート後、カスタム パレットを作成します。好きな 3 つの色を定義し、それらを使用して [`palette`](../themes/palettes.md) でパレットを作成しましょう。

```scss
$white: #fff;
$blue: #4567bb;
$gray: #efefef;

$color-palette: palette(
  $primary: $white, 
  $secondary: $blue, 
  $surface: $gray
);
```

### テーマの定義

これで、パレットを使用してテーマを定義できます。セルは [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) によってスタイル設定されているため、それを使用して IgxHierarchicalGrid のテーマを生成できます。

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

### デモ

上記の手順に加えて、セルの編集テンプレートに使用されるコントロールのスタイルを設定することもできます ([`input-group`](../input-group.md#スタイル設定)、[`datepicker`](../date-picker.md#スタイル設定) および [`checkbox`](../checkbox.md#スタイル設定))。





<code-view style="height:660px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-style/" >
</code-view>



>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。
<div class="divider--half"></div>

## API リファレンス

- [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
- [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
- [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
- [IgxDatePickerComponent スタイル]({environment:sassApiUrl}/themes#function-date-picker-theme)
- [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
- [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/themes#function-checkbox-theme)
- [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
- [IgxOverlay スタイル]({environment:sassApiUrl}/themes#function-overlay-theme)


## その他のリソース

<div class="divider--half"></div>

- [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

