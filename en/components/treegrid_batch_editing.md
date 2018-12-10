---
title: Tree Grid Batch Editing - Native Angular | Ignite UI for Angular
_description:  TransactionService is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid 
---

## Tree Grid Batch Editing

[`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactiondervice.html) is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

The [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactiondervice.html) works with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode, while row transaction is created, when the row exits edit mode. But in both cases the state of the grid edits consist of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on the editing mode in use, and accumulated per data row/record.

Batch editing allows to **Add/Update/Delete** several records in a chunk and manually commit all of the editing changes at ones. Until the changes are committed, there is a visual representation for each edited record so that the end user will be able to differentiate the updated and deleted ones from the unmodified for example. Additionally, it exposes **Undo/Redo** functionality, that can be used to manage the changes before committing.

In order to be able to use the Batch Editing functionality, it is required to import the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactiondervice.html) from "igniteui-angular". Again Transaction is a provider that accumulates the applied changes as a transaction log and in the same time holds a state for each modified row and its last state.

### Demo

The following sample illustrates how to enable and use Batch Editing via Transaction as provider and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed. The sample uses a flat data source.

<div class="sample-container loading" style="height:890px">
    <iframe id="tree-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/treegrid-batch-edit' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows and their last states.

## Usage

To get started import the [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html) in the **app.module.ts** file:

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```
Then you need to define the igxTransactionService as provider for the tree grid itself as shown below, OR on some of its parent components:

```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxTransactionService, IgxTreeGridComponent } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-batch-editing-sample.component",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent {

```
> [!NOTE]
> `IgxGridTransaction` is an injection token defined by the grid.


Then define a tree grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) set to true and bind:

```html
    <igx-tree-grid #treeGrid [data]="data" primaryKey="EmployeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true columnHiding=true>
        ...
    </igx-tree-grid>
    ...
        <button igxButton (click)="addRow('treeGrid')">Add Row</button>
        <button igxButton [disabled]="!undoEnabled" (click)="undo('treeGrid')">Undo</button>
        <button igxButton [disabled]="!redoEnabled" (click)="redo('treeGrid')">Redo</button>
        <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog('treeGrid')">Commit</button>
    ...
```

The following code demonstrates the usage of the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactiondervice.html) API - undo, redo, commit.

```typescript

export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    ...
    public deleteRow(event, gridID, rowID) {
        this.treeGrid.deleteRow(rowID);
    }

    public undo(gridID) {
        this.treeGrid.transactions.undo();
    }

    public redo(gridID) {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
       return this.treeGrid.transactions.canRedo;
    }

```

> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) property will modify grid to create transactions on cell change and will not expose row editing overlay in the UI.


### API References

* [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactiondervice.html) 
* [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)
* [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)


### Additional Resources

<div class="divider--half"></div>

* [Data Grid](grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)








