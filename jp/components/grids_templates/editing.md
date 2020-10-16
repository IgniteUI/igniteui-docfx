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

# @@igComponent 編集

Ignite UI for Angular @@igComponent component provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The data manipulation pheses are: [Cell Editing](cell_editing.md), [Row Editing](row_editing.md), and [Batch Editing](batch_editing.md). The @@igComponent gives you a powerful public API which allows you to customize the way these operations are performed. Additionally, **Cell editing** exposes several default editors based on the column data type, that could be easly customized via [igxCellEditor directive](cell_editing.md#cell-editing-templates) or [igxRow directives](row_editing.md#customizing-row-editing-overlay).

## 設定
有効にする編集モードを指定するために、@@igComponent は [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) および [`rowEditable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#roweditable) ブール値プロパティを公開します。

以下のオプションは、プロパティ **editable** で指定できます。
- **false** - 対応する列の編集は無効になります。 /デフォルト値/
- **true** - 対応する列の編集が有効になります。

>列が編集できない場合でも、@@igComponent によって公開されるパブリック API を介して値を変更できます。

以下のオプションは、プロパティ **rowEditable** で指定できます。
- **false** - 対応するグリッドの行編集は無効になります。 /デフォルト値/
- **true** - 対応するグリッドで行編集が有効になります。

@@igComponent で rowEditable プロパティを true に設定し、editable プロパティがどの列にも明示的に定義されていない場合、編集は**主キー**以外のすべての列で有効になります。

グリッドの**一括編集**は、**セル編集**モードと**行編集**モードの両方で有効にできます。一括編集を設定するには、グリッドに *TransactionService* を提供する必要があります。
- **セルおよび一括編集** - このシナリオでは、各セルの変更は個別に保持され、元に戻す/やり直し操作はセル レベルで使用できます。
- **行および一括編集** - このシナリオでは、変更は行レベルで保持されるため、元に戻す/やり直し操作は変更された各セルではなく、各行のセル全体に対して動作します。


### テンプレートの編集

 データ型固有の**編集テンプレート**を使用する場合、列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを指定する必要があります。次に各型のデフォルト テンプレートについて説明します。

 - `string` データ型ではデフォルトのテンプレートは [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html) を使用します。
 - `number` データ型のデフォルト テンプレートは **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"** を使用します。数値に解析できない値にセルを更新した場合、変更は無視されてセルの値が **0** に設定されます。
 - `date` データ型ではデフォルトのテンプレートは [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用します。
 - `boolean` データ型ではデフォルトのテンプレートは [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) を使用します。
 - カスタム テンプレートについては、[セル編集トピック](cell_editing.md#セル編集テンプレート)を参照してください。

### Event arguments and sequence
The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row_editing.md) and [**Cell Editing**](cell_editing.md) lifecycle - when starting, committing or canceling the editing action.

 | Event | Description | Arguments | Cancellable |
|-------|-------------|-----------|-------------|
| [`rowEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditEnter) | If `rowEditing` is enabled, fires when a row enters edit mode | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEditEnter) | Fires when a cell **enters edit mode** (after `rowEditEnter`) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEdit) | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing `Enter`) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#celleditdone) | If value is changed, fires **after** a cell has been edited and cell's value is **committed** | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igrideditdoneeventargs.html) | `false` |
| [`cellEditExit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEditExit) | Fires when a cell **exits edit mode** | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowedit) | If `rowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`rowEditDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone) | If `rowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**. | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEditExit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditExit) | If `rowEditing` is enabled, fires when a row **exits edit mode** | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |

### Event cancelation
 - `RowEditEnter` - Neither Row nor Cell will enter edit mode.
  - `CellEditEnter` - Prevents entering cell edit. If [`rowEditable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#roweditable) enabled, row edit will be triggered, although cell edit will remain forbidden.
 - `CellEdit` - Allowed Cell/Row edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
 - `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-lifecycle-iframe" src='{environment:demosBaseUrl}/grid/grid-editing-lifecycle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="tree-grid-editing-lifecycle-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-editing-lifecycle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="hGrid-editing-lifecycle-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hGrid-editing-lifecycle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hGrid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hGrid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

## API リファレンス

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


## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}