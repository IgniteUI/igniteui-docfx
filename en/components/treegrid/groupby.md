---
title: Angular Tree Grid Group By | Group by multiple fields | Infragistics
_description: Configure angular group by that allows visualizing of data records in Angular Material table, visualize the grouped data in separate and convenient column group.
_keywords: angular group by, igniteui for angular, infragistics
---

# Angular Tree Grid Group By

If you have non-hierarchical data and you want to **group by** one or more columns and populate the parent rows with **aggregated values**, you could use the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) and a custom implementation like in the demos below.

> [!NOTE]
> These samples contains custom logic which is not built in the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html). It is similar to the grouping and summaries features of the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html), but instead inside separate summary rows, the calculated data is displayed inside the parent rows.

In these samples we have also created an UI component with selector `igx-tree-grid-group-area` which handles the UI interactions related to the columns that are used for the grouping. For more information on how this component works you can take a look at the `IgxTreeGridGroupAreaComponent` class in the `tree-grid-group-area.component.ts` file. The component is completely configurable so you could copy and re-use it in your own project.

Here is an example of how to use the component in the template:

```html
<igx-grid-toolbar *ngIf="showToolbar">
    <igx-grid-toolbar-title class="grid-toolbar-title">
        <igx-tree-grid-group-area
            [grid]='grid1'
            [(groupColumns)]='groupColumns'
            [groupColumnKey]='groupColumnKey'>
        </igx-tree-grid-group-area>
    </igx-grid-toolbar-title>
```

The component's inputs are the following:
- grid - `IgxTreeGridComponent` that is used for the grouping
- groupColumns - an array of string values which contains the fields used to generate the hierarchy
- groupColumnKey - a string value for the name of the generated hierarchy column

## Angular Tree Grid Group By Example

<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Tree Grid Group By Example">
</code-view>

<div class="divider--half"></div>

#### Implementation

In this sample we have created a pipe class called `TreeGridGroupingPipe` which groups the tabular data by the **"category"**, **"type"** and **"contract"** fields. The resulting hierarchy is displayed in the newly created **"categories"** column. The pipe also calculates aggregated values for the generated parent rows for the **"price"**, **"change"** and **"changeP"** columns. For more information on how this pipe works you can take a look at the `TreeGridGroupingPipe` class in the `tree-grid-grouping.pipe.ts` file. The pipe is completely configurable so you could copy and re-use it in your own project.

Here is an example of how to use the pipe in the template:

```html
<igx-tree-grid #grid1 
               [data]="data$ | async | treeGridGrouping:groupColumns:aggregations:groupColumnKey:primaryKey:childDataKey"
               [primaryKey]="primaryKey" [childDataKey]="childDataKey">
    <igx-column [field]="groupColumnKey" [width]="'180px'" [sortable]='true' [resizable]='true' [disableHiding]="true"></igx-column>
```

The pipe arguments are the following:
- groupColumns - an array of string values which contains the fields used to generate the hierarchy
- aggregations - an array of `ITreeGridAggregation` objects which contains information about the aggregation functions
- groupColumnKey - a string value for the name of the generated hierarchy column
- primaryKey - a string value for the primary key field
- childDataKey - a string value for the field where the child collection of the generated parent rows is stored

```typescript
public groupColumns = ["category", "type", "contract"];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.change).reduce((ty, u) => ty + u, 0);
        },
        field: "change"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.price).reduce((ty, u) => ty + u, 0);
        },
        field: "price"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return parent.change / (parent.price - parent.change) * 100;
        },
        field: "changeP"
    }
];
public primaryKey = "id";
public childDataKey = "children";
public groupColumnKey = "categories";
```

## Angular Tree Grid Group By Load On Demand Example

<code-view style="height:850px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-group-by-load-on-demand" alt="Angular Tree Grid Group By Load On Demand Example">
</code-view>

<div class="divider--half"></div>

#### Implementation

In this sample, data is loaded in portions. Initially, only the top level categories are displayed, then child data is served once a parent row is expanded. For more information on this approach, please refer to the [Tree Grid Load On Demand](load-on-demand.md) topic. The data is grouped by the **"ShipCountry"**, **"ShipCity"** and **"Discontinued"** fields and the resulting hierarchy is displayed in a separate column. The grouping is performed on a remote service - the data is modified and corresponding child and parent keys are assigned that are used to display the final data in a hierarchical view. For more information on how this service works you can take a look at the `TreeGridGroupingLoadOnDemandService` class in the `remoteService.ts` file.

Here is an example of how to use load on demand:

```html
<igx-tree-grid #treeGrid
    [data]="data" [loadChildrenOnDemand]="loadChildren"
    [primaryKey]="primaryKey" [childDataKey]="childDataKey" [hasChildrenKey]="hasChildrenKey">
    <igx-column [field]="groupColumnKey" [width]="'180px'" [resizable]='true' [disableHiding]="true"></igx-column>
```

In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) - the children data is retrieved from the server and it is assigned to the requested parent row based on the grouping parameters.

```typescript
public groupColumns = ['ShipCountry', 'ShipCity', 'Discontinued'];
public primaryKey = 'id';
public childDataKey = 'children';
public hasChildrenKey = 'children';
public groupColumnKey = '';

private dataService = new TreeGridGroupingLoadOnDemandService();

public ngOnInit() {
    this.reloadData();
}

public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(parentID, groupingParameters, (children) => done(children));
};

private reloadData() {
    this.treeGrid.isLoading = true;
    this.treeGrid.expansionStates.clear();
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(null, groupingParameters, (children) => {
        this.data = children;
        this.treeGrid.isLoading = false;
    });
}
```

### API References

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)

### Additional Resources

<div class="divider--half"></div>

* [TreeGrid overview](tree-grid.md)
* [TreeGrid Summaries](summaries.md)
* [Grid Summaries](../grid/summaries.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
