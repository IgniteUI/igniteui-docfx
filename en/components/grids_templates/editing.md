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
In order to specify which edit mode should be enabled, the @@igComponent exposes the following boolean properties - [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable).

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

 - For `string` data type, default template is using [igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html)
 - For `number` data type, default template is using [igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
 - For `date` data type, default template is using [igxDatePicker]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
 - For `dateTime` data type, default template is using [IgxDateTimeEditor directive]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html). This editor will give you a mask directions for the input elements part of the DateTime object.
 - For `date` data type, default template is using [IgxDatePicker component]({environment:angularApiUrl}/classes/igxdatepickercomponent.html). 
 - For `time` -  data type, default template is using [IgxTimePicker component]({environment:angularApiUrl}/classes/igxtimepickercomponent.html). 
 - For `boolean` data type, default template is using [igxCheckbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
 - For `currency` data type, default template is using [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) with prefix/suffix configuration based on application or grid locale settings. 
 - For `percent` data type, default template is using [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) with suffix element that shows a preview of the edited value in percents. 
 - For custom templates you can see [Cell Editing topic](cell-editing.md#cell-editing-templates)

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

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
 - `CellEditEnter` - Prevents entering cell edit. If [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
 - `CellEdit` - Allowed Cell/Row edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
 - `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:
@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-lifecycle" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-editing-lifecycle" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-editing-lifecycle" >
</code-view>

}

### Features integration
While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:

| @@igComponent     | Filtering  | Sorting | Paging | Moving | Pinning | Hiding | GroupBy | Resizing | Escape | Enter | F2 | Tab | Cell Click | Add new row/Delete/Edit |
| ----------------- |:---------:|:-------:|:------:|:------:|:-------:|:------:|:-------:|:--------:|:------:|:-----:|:--:|:---:|:----------:|:-----------------------:|
| Keep edit mode    |           |      |   |   |   |   |   | ✔ |   |   |   |   |   |   |
| Exit edit mode    |✔         | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |   | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Commit            |   |   |  |  |  |   |   |   |  | ✔ | ✔ | ✔ | ✔ | ✔ |
| Discard        | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |✔ |   | ✔  |  |   |   |   |  |

As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.

Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:

```html
<igx-grid #grid [data]="localData" [primaryKey]="'ProductID'" (sorting)="onSorting($event)">
...
</igx-grid>
```

```typescript
public onSorting(event: ISortingEventArgs) {
    this.grid.endEdit(true);
    // (event.owner as IgxGridComponent).endEdit(true);
}
```

## API References

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)}
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
* [Column Data Types](column-types.md#default-template)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [Searching](search.md)}
