---
title: Hierarchical Grid Row Editing - Native Angular | Ignite UI for Angular
_description: Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the Hierarchical Grid's data source. Leverages the pending changes functionality of the new transaction provider.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular TreeGrid, Angular Data Grid component, Angular Data TreeGrid component, Angular Data Grid control, Angular Data TreeGrid control, Angular TreeGrid component, Angular Grid component, Angular Grid control, Angular TreeGrid control, Angular High Performance Grid, Cell Editing
---

### Hierarchical Grid Row Editing

Row editing allows modification of several cells in the row, before submitting, at once, all those changes to the Hierarchical Grid's data source. Leverages the pending changes functionality of the new transaction provider.


#### Demo

The following sample demonstrates how to enable row editing in the Hierarchical Grid. Changing a cell value and then clicking or navigating to another cell on the same row will not update row value until confirmed, using the Done button, or discarded, using the Cancel one.




   <div class="sample-container loading" style="height:500px">
    <iframe id="hierarchical-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


> [!NOTE]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

### Usage

To get started import the `IgxHierarchicalGridModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...
})
export class AppModule {}
```

Then define a Hierarchical Grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable) set to true:



```html
        <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'">
            <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
            </igx-column>
            <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
            <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
            [hasSummary]="true"></igx-column>
            <igx-column width="10%">
                <ng-template igxCell let-cell="cell">
                    <button igxButton="icon" (click)="removeRow(cell.cellID.rowIndex)">
                        <igx-icon>delete</igx-icon>
                    </button>
                </ng-template>
            </igx-column>

        <igx-row-island [key]="'Albums'" #layout1 [autoGenerate]="false">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="US Billboard 200" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```


> [!NOTE]
> Setting primary key is mandatory for row editing operations.

> [!NOTE]
> It's not needed to enable editing for individual columns. Using the [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable) property in the Hierarchical Grid, will mean that all rows, with defined `field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.





```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from './data';

@Component({
    selector: "hierarchical-grid-row-editing",
    styleUrls: ["./hierarchical-grid-row-editing.component.scss"],
    templateUrl: "hierarchical-grid-row-editing.component.html"
})

export class HGridRowEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid')
    hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}
```


> [!NOTE]
> The Hierarchical Grid uses internally a provider [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) that holds pending cell changes, until row state submitted or cancelled.

### Positioning

- Default position of the overlay will be below the row that is in edit mode
     
- If there is no space below the row then overlay will appear above the row.
     
- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

### Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and Hierarchical Grid is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When Hierarchical Grid is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the Hierarchical Grid, the cell will also stay in edit mode.

- Any other Hierarchical Grid operations like, resize, pin, move, sort column or change page, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when Hierarchical Grid is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.


### Keyboard Navigation

- `Enter` and `F2` enters row edit mode

- `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.


### Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

- Expanding and collapsing grouped rows will not terminate editing for the current row.


### Customizing Row Editing Overlay

#### Customizing Text

Customizing the text of the row editing overlay is possible using the `igxRowEditTextDirective`.
The `rowChangesCount` property is exposed and it holds the count of the changed cells.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

#### Customizing Buttons
Customizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

### API References

* [rowEditable]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#onrowedit)
* [onRowEditCancel]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#endedit)
* [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [primaryKey]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primarykey)
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [Hierarchical Grid Overview](hierarchical_grid.md)
* [Hierarchical Grid Editing](editing.md)
* [Hierarchical Grid Transactions](batch_editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)