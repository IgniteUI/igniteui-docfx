---
title: Hierarchical Grid Component
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich hierarchical grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid component, Angular Hierarchical Grid control, Angular High Performance Hierarchical Grid, Hierarchical Grid
---
## Hierarchical Grid
<p class="highlight">Display and manipulate hierarchically structured data with the Ignite UI for Angular Hierarchical Grid. Features include Filtering, Forting, Paging, Templates, Column Pinning, Column Moving and Column Hiding, as well as the ability to edit and update data. The Hierarchical Grid builds upon the Data Grid and extends its functionality by allowing the users to expand or collapse the rows of the parent grid, revealing the according child grid when more detailed information is needed.</p>

### Demo

<div class="sample-container loading" style="height:900px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies
The Hierarchical Grid is exported as an `NgModule` - all you need to do in your application is import the _IgxHierarchicalGridModule_ inside your `AppModule`.

```typescript
// app.module.ts

import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxHierarchicalGridModule,
        ...
    ]
})
export class AppModule {}
```

We can obtain a reference to the Hierarchical Grid in TypeScript the following way:

```typescript
@ViewChild('hgrid1', { read: IgxHierarchicalGridComponent })
public hgrid1: IgxHierarchicalGridComponent;
```

### Data Binding

**igx-hierarchical-grid** derives from **igx-grid** and shares most of its functionality. The main difference is that it allows multiple levels of hierarchy to be defined. They are configured through a separate tag within the definition of **igx-hierarchical-grid**, called **igx-row-island**. The **igx-row-island** component defines the configuration for each child grid for the particular level. Multiple row islands per level are also supported.
The Hierarchical Grid supports two ways of binding to data: 

#### 1. Using hierarchical data

If the application loads the whole hierarchical data as an array of objects referencing children arrays of objects, then the Hierarchical Grid can be configured to read it and bind to it automatically. Each **igx-row-island** should specify the key of the property that holds the children data.

```html
<igx-hierarchical-grid #grid1 [data]="companies" [autoGenerate]="true">
    <igx-row-island [key]="'employees'" [autoGenerate]="true">
    </igx-row-island>
    <igx-row-island [key]="'products'" [autoGenerate]="true">
        <igx-row-island [key]="'shipments'" [autoGenerate]="true">
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
> [!NOTE]
> Note that instead of `data` the user configures only the `key` that the **igx-hierarchical-grid** needs to read to set the data automatically.

#### 2. Using load-on-demand

Most applications are designed to load as little data as possible initially, which results in faster load times. In such cases **igx-hierarchical-grid** may be configured to allow user-created services to feed it with data on demand. The following configuration uses a special `@Output` and a newly introduced loading-in-progress template to provide a fully-featured load-on-demand.

```html
<!-- hierarchicalGridSample.component.html -->

<igx-hierarchical-grid #grid1 [isLoading]="true" [data]="remoteData" [autoGenerate]="true">
    <igx-row-island #rowIsland1 [key]="'Orders'" [isLoading]="true" [autoGenerate]="true"
    (onGridCreated)="gridCreated($event, rowIsland1)">
        <igx-row-island #rowIsland2 [key]="'Order_Details'" [autoGenerate]="true"
        (onGridCreated)="gridCreated($event, rowIsland2)">
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```

```typescript
//  hierarchicalGridSample.component.ts

    gridCreated(event: IGridCreatedEventArgs, rowIsland: IgxRowIslandComponent) {
        this.remoteService.getData(
            {
                parentID: event.parendID,
                level: rowIsland.level,
                key: rowIsland.key
            }, (data) => {
                event.grid.data = data['value'];
                event.grid.isLoading = false;
                event.grid.cdr.detectChanges();
            }
        );
    }
```
### Features

The grid features could be enabled and configured through the **igx-row-island** markup - they get applied for every grid that is created for it. Changing options at runtime through the row instance changes them for each of the grids it has spawned. 

```html
<igx-hierarchical-grid [data]="localData" [displayDensity]="density" [autoGenerate]="false"
    [allowFiltering]='true' [paging]="true" [height]="'600px'" [width]="'800px'" #hGrid>
    <igx-column field="ID" [pinned]="true" [filterable]='true'></igx-column>
    <igx-column-group header="Information">
        <igx-column field="ChildLevels"></igx-column>
        <igx-column field="ProductName" hasSummary='true'></igx-column>
    </igx-column-group>
    <igx-row-island [key]="'childData'" [autoGenerate]="false" [rowSelectable]='true' #layout1>
        <igx-column field="ID" [hasSummary]='true' [dataType]="'number'"></igx-column>
        <igx-column-group header="Information2">
            <igx-column field="ChildLevels"></igx-column>
            <igx-column field="ProductName"></igx-column>
        </igx-column-group>
    </igx-row-island>
</igx-hierarchical-grid>
```

The following grid features work on a per grid level, which means that each grid instance manages them independently of the rest of the grids:

- Sorting
- Filtering
- Paging
- Multi-column headers
- Hiding
- Pinning
- Moving
- Summaries
- Search

The Selection and Navigation features work globally for the whole **igx-hierarchical-grid** 

- Selection 
    Selection does not allow selected cells to be present for two different child grids at once.
- Navigation
    When navigating up/down, if next/prev element is a child grid, navigation will continue in the related child grid, marking the related cell as selected and focused. If the child cell is outside the current visible view port it is scrolled into view so that selected cell is always visible.

### Known Limitations

|Limitation|Description|
|--- |--- |
|Group By|Group By feature is not supported by the hierarchical grid.|
|Export to Excel|Export to Excel is currently not supported by the hierarchical grid, but it would be available in future versions of Ignite UI for Angular.|

### CRUD operations

An important difference from the flat grid is that each instance for a given row island has the same transaction service instance and accumulates the same transaction log. In order to enable the CRUD functionality users should inject the `IgxHierarchicalTransactionServiceFactory`.

Calling CRUD API methods should still be done through each separate grid instance.

## API

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)
* [IgxHierarchicalTransactionServiceFactory]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservicefactory.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)