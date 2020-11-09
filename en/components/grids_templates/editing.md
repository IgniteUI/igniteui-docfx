@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Editing | Data Manipulation | Ignite UI for Angular | Infragistics
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular tree grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
_canonicalLink: grid/editing
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular hierarchical grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
_canonicalLink: grid/editing
---
}

# @@igComponent Editing

Ignite UI for Angular @@igComponent component provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The data manipulation phases are: [Cell Editing](cell-editing.md), [Row Editing](row-editing.md), and [Batch Editing](batch-editing.md). The @@igComponent gives you a powerful public API which allows you to customize the way these operations are performed. Additionally, **Cell editing** exposes several default editors based on the column data type, that could be easily customized via [igxCellEditor directive](cell-editing.md#cell-editing-templates) or [igxRow directives](row-editing.md#customizing-row-editing-overlay).

## Setup
In order to specify which edit mode should be enabled, the @@igComponent exposes the following boolean properties - [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) and [`rowEditable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#roweditable).

Property **editable** enables you to specify the following options:
- **false** - the editing for the corresponding column will be disabled; /default value/
- **true** - the editing for the corresponding column will be enabled;

>Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the @@igComponent.

Property **rowEditable** enables you to specify the following options:
- **false** - the row editing in the corresponding grid will be disabled; /default value/
- **true** - the row editing in the corresponding grid will be enabled;

In the @@igComponent if you set rowEditable property to true, and editable property is not explicitly defined for any column, the editing will be enabled for all the columns except the *primary key*.

**Batch editing** in the grid can be enabled for both **cell editing** and **row editing** modes. In order to set up batch editing it is necessary to provide to the grid a  *TransactionService*.
- *Cell and Batch Editing* - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- *Row and Batch Editing* - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.


### Editing Templates

 If you want to use a data type specific *edit templates*, you should specify the column [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) property. So let's now see what are the default templates for each type:

 - For `string` data type, default template is using [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html)
 - For `number` data type, default template is using **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"**, so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to **0**.
 - For `date` data type, default template is using [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
 - For `boolean` data type, default template is using [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
 - For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)

### Event arguments and sequence
The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

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
 - `CellEditEnter` - Prevents entering cell edit. If [`rowEditable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#roweditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
 - `CellEdit` - Allowed Cell/Row edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
 - `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-lifecycle-iframe" src='{environment:demosBaseUrl}/grid/grid-editing-lifecycle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="tree-grid-editing-lifecycle-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-editing-lifecycle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="hGrid-editing-lifecycle-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hGrid-editing-lifecycle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hGrid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hGrid-editing-lifecycle-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

## API References

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)


## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [Searching](search.md)}
