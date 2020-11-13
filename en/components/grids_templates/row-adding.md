@@if(igxName==='IgxGrid') {
---
title: Angular Grid Row Adding | UI Grid | Ignite UI for Angular | Infragistics
_description: Learn how to use and customize the built-in row adding functionality with Ignite UI for Angular. Intuitive grid row adding and CRUD capabilities are available with the UI grid.
_keywords: row adding, igniteui for angular, infragistics
---
}

@@if(igxName!=='IgxGrid') {
---
title: Angular Grid Row Adding | UI Grid | Ignite UI for Angular | Infragistics
_description: Learn how to use and customize the built-in row adding functionality with Ignite UI for Angular. Intuitive grid row adding and CRUD capabilities are available with the UI grid.
_keywords: row adding, igniteui for angular, infragistics
_canonicalLink: grid/row-adding
---
}

# @@igComponent Row Adding

@@if (igxName !== 'IgxTreeGrid') {
The @@igComponent provides a convenient way to perform data manipulations through inline row adding and a powerful API for Angular CRUD operations. Add an [Action Strip](../action-strip.md) component with editing actions enabled in the grid's template, hover a row and use the provided button or press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.
}
@@if (igxName === 'IgxTreeGrid') {
The @@igComponent provides a convenient way to perform data manipulations through inline row adding and a powerful API for Angular CRUD operations. Add an [Action Strip](../action-strip.md) component with editing actions enabled in the grid's template, hover a row and use the provided button, press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI or <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> to spawn the UI for adding a child for the selected row.
}

### Angular @@igComponent Row Adding Example

The following sample demonstrates how to enable native row adding in the @@igComponent. Changing a cell value and then clicking or navigating to another cell on the same row doesn't update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:520px">
    <iframe id="grid-add-row-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-add-row' width="100%" height="100%"
    seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-add-row-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-add-row-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:520px">
    <iframe id="tree-grid-row-adding-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-add-row' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-adding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-adding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-add-row' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

## Row Adding Usage

To get started import the `@@igxNameModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

Then define a @@igComponent with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) set to true and an [Action Strip](../action-strip.md) component with editing actions enabled. The [`addRow`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html#addRow) input controls the visibility of the button that spawns the row adding UI.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" dataType="number"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" dataType="number"></igx-column>
    <igx-column field="ProductName" header="ProductName" dataType="string"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" dataType="number"></igx-column>
    <igx-column field="OrderDate" dataType="date"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" dataType="boolean"></igx-column>
    
    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid igxPreventDocumentScroll #treeGrid [data]="data"
    primaryKey="ID" foreignKey="ParentID" [rowEditable]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date"></igx-column>
    <igx-column [field]="'OnPTO'" dataType="boolean" width="130px">
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon [color]="cell.row.rowData.OnPTO? 'red': 'green'">account_circle</igx-icon>
        </ng-template>
    </igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
    <igx-action-strip #actionstrip>
        <igx-grid-editing-actions [addRow]="true" [addChild]="actionstrip.context?.treeRow.level < 2">
        </igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid igxPreventDocumentScroll #hierarchicalGrid class="hgrid" [data]="localdata"
    [autoGenerate]="false" [height]="'500px'" [width]="'100%'" [primaryKey]="'Debut'" [rowEditable]="true">
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-action-strip #actionstrip1>
        <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
    </igx-action-strip>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [primaryKey]="'USBillboard200'" [rowEditable]="true">
        <igx-column field="Album" [dataType]="'string'"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false" [primaryKey]="'Number'" [rowEditable]="true">
            <igx-column field="Number" header="No." dataType="number"></igx-column>
            <igx-column field="Title" [dataType]="'string'"></igx-column>
            <igx-column field="Released" [dataType]="'date'"></igx-column>
            <igx-column field="Genre" [dataType]="'string'"></igx-column>

            <igx-action-strip #actionstrip3>
                <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
            </igx-action-strip>

        </igx-row-island>

        <igx-action-strip #actionstrip2>
            <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
        </igx-action-strip>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

> [!NOTE]
> Setting primary key is mandatory for row adding operations.

> [!NOTE]
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.

@@if (igxName !== 'IgxTreeGrid') {
> [!NOTE]
> The IgxGridEditingActions input controlling the visibility of the add row button may use the action strip context (which is of type [`IgxGridRowComponent`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)) to fine tune which records the button shows for.
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> The IgxGridEditingActions inputs controlling the visibility of the add row and add child buttons may use the action strip context (which is of type [`IgxTreeGridRowComponent`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)) to fine tune which records the buttons show for.
}

The internal [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) is automatically provided for @@igComponent. It holds pending cell changes until the row state is submitted or cancelled.

## Positioning

- The Default position row add UI is below the row that the end user clicked the add row button for.

- The @@igComponent scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [@@igComponent Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the @@igComponent. In a @@igComponent that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the @@igComponent to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row
@@if (igxName === 'IgxTreeGrid') {

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a child
}

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the @@igComponent gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.
@@if (igxName === 'IgxHierarchicalGrid') {

- When spawning the UI for Hierarchical Grids, any child layout currently expanded for a row that the end user clicks the add row button for is collapsed.
}

## Remote scenarios

In most remote data scenarios the Primary Key assignment happens on the create server request. In this case the added records on the client will not have the final primary key value until saved on the server's data base. In that case the recommended way to handle this update in the @@igComponent is as follows:

- If the @@igComponent does not use transactions.

    Once the create request is successfully completed and returns the added record data, you can replace that record's id in the local data record instance.

- If the @@igComponent uses transactions.

    Once the create request or batch update request is successfully completed and returns the added record instances (with their db generated ids), the related ADD transactions should be cleared from the transaction log using the [clear]({environment:angularApiUrl}/interfaces/transactionservice.html#clear) API method. This is necessary because the local transaction will have a generated id field, which may differ than the one created in the data base, so they should be cleared. You can then add the record(s) passed in the response to the local data instance.

This will ensure that the remotely generated ids are always reflected in the local data, and subsequent update/delete operations target the correct record ids.

## Styling

The row adding UI comprises the buttons in the `IgxActionStrip` editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [@@igComponent Row Editing](row-editing.md#styling)
- [IgxSnackbar](../snackbar.html#styling)
- [IgxActionStrip](../action-strip.md#styling)

## API References

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit)
* [rowEditDone]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endedit)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxActionStripComponent]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
* [IgxGridEditingActionsComponent]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)