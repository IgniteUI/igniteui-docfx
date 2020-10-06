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
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular hierarchical grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}

# @@igComponent Editing

Ignite UI for Angular @@igComponent component provides an easy way to perform data manipulation operations like creating, updating, and deleting records. Modifying of data can be achieved through: [Cell Editing](cell_editing.md), [Row Editing](row_editing.md), [Row Adding](row_adding.md) and [Batch Editing](batch_editing.md). The @@igComponent gives you a powerful public API which allows you to customize the way these operations are performed. **Cell editing** mode is enabled by default and different editors will be shown based on the column data type. Also, defining a custom edit templates is achievable by using [igxCellEditor directive](cell_editing.md#cell-editing-templates) and a couple of [igxRow directives](row_editing.md#customizing-row-editing-overlay).

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
 - For custom templates you can see [cell editing topic](cell_editing.md#cell-editing-templates)

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
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [Searching](search.md)}