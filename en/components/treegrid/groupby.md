---
title: Angular Tree Grid Group By | Group by multiple fields | Infragistics
_description: Configure angular group by that allows visualizing of data records in Angular Material table, visualize the grouped data in separate and convenient column group.
_keywords: angular group by, igniteui for angular, infragistics
---

# Angular Tree Grid Group By

If you have non-hierarchical data and you want to **group by** one or more columns and populate the parent rows with **aggregated values**, you could use the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) along with `treeGridGrouping` pipe and the UI component with selector `igx-tree-grid-group-by-area`.

The `treeGridGrouping` pipe groups the data based on the provided parameters and the resulting hierarchy is displayed in a separate column. The pipe can also calculate aggregated values for the generated parent rows if aggregations are provided. Here is an example of how to use the pipe in the template:

```html
<igx-tree-grid #grid 
               [data]="data | treeGridGrouping:groupingExpressions:groupKey:childDataKey:grid:aggregations"
               [childDataKey]="childDataKey"
               [sortStrategy]="sorting">
```

The pipe arguments are the following:
- groupingExpressions - an array of [`IGroupingExpression`]({environment:angularApiUrl}/interfaces/igroupingexpression.html) objects which contains information about the fields used to generate the hierarchy and the sorting details for each group
- groupKey - a string value for the name of the generated hierarchy column
- childDataKey - a string value for the field where the child collection of the generated parent rows is stored
- grid - `IgxTreeGridComponent` that is used for the grouping
- aggregations (optional) - an array of `ITreeGridAggregation` objects which contains information about the aggregation functions

The UI component with selector `igx-tree-grid-group-by-area` handles the UI interactions related to the columns that are used for the grouping. Here is an example of how to use the component in the template:

```html
<igx-tree-grid-group-by-area
    [grid]='grid'
    [(expressions)]='groupingExpressions'
    [hideGroupedColumns]='true'>
</igx-tree-grid-group-by-area>
```

The component's inputs are the following:
- grid - `IgxTreeGridComponent` that is used for the grouping
- expressions - an array of [`IGroupingExpression`]({environment:angularApiUrl}/interfaces/igroupingexpression.html) objects which contains the fields used to generate the hierarchy
- hideGroupedColumns - a boolean value indicating whether to hide the columns by which grouping was performed
- density - a [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) that can be used to change the view
- dropAreaTemplate - a template for the drop area that can be used to override the default drop area template
- dropAreaMessage - a string that can be used to override the default message for the default drop area template

> [!NOTE]
> In order for the sorting to work correctly you should set the `sortStrategy` property of the `IgxTreeGridComponent` to an instance of `IgxGroupedTreeGridSorting`.

## Angular Tree Grid Group By Example

<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular Tree Grid Group By Example">
</code-view>

<div class="divider--half"></div>

#### Implementation

In this sample we are using the `treeGridGrouping` pipe and the UI component with selector `igx-tree-grid-group-by-area` for the grouping. The data is grouped by the **"category"**, **"type"** and **"contract"** fields. The resulting hierarchy is displayed in the newly created **"categories"** column. The pipe also calculates aggregated values for the generated parent rows for the **"price"**, **"change"** and **"changeP"** columns. 

```html
<igx-tree-grid #grid1
    [data]="data$ | async | treeGridGrouping:groupingExpressions:groupColumnKey:childDataKey:grid1:aggregations"
    [childDataKey]="childDataKey"
    [sortStrategy]="sorting">
    <igx-tree-grid-group-by-area
        [grid]="grid1"
        [(expressions)]="groupingExpressions"
        [hideGroupedColumns]="true">
    </igx-tree-grid-group-by-area>
    <igx-column [field]="groupColumnKey"></igx-column>
```

Here you can see how the grouping expressions and aggregations are defined:

```typescript
public groupingExpressions: IGroupingExpression[] = [
    { fieldName: 'category', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'type', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'contract', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
        field: 'change'
    },
    {
        aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
        field: 'price'
    },
    {
        aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
        field: 'changeP'
    }
];
public childDataKey = 'children';
public groupColumnKey = 'categories';
public sorting = IgxGroupedTreeGridSorting.instance();
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
        [data]="data"
        [loadChildrenOnDemand]="loadChildren"
        [primaryKey]="primaryKey"
        [foreignKey]="foreignKey"
        [hasChildrenKey]="hasChildrenKey">
        <igx-tree-grid-group-by-area
            [grid]="treeGrid"
            [(expressions)]="groupingExpressions"
            (expressionsChange)="onExpressionsChange($event)"
            [hideGroupedColumns]="true">
        </igx-tree-grid-group-by-area>
        <igx-column [field]="groupColumnKey"></igx-column>
```

In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) - the children data is retrieved from the server and it is assigned to the requested parent row based on the grouping parameters.

```typescript
public groupingExpressions: IGroupingExpression[] = [
    { fieldName: 'ShipCountry', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'ShipCity', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
    { fieldName: 'Discontinued', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
];
public primaryKey = 'id';
public foreignKey = 'parentId';
public hasChildrenKey = 'children';
public groupColumnKey = '';

private dataService = new TreeGridGroupingLoadOnDemandService();

public ngOnInit() {
    this.reloadData();
}

public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(parentID, this.hasChildrenKey, groupingParameters, (children) => done(children));
};

private reloadData() {
    this.treeGrid.isLoading = true;
    this.treeGrid.expansionStates.clear();
    const groupingParameters = this.assembleGroupingParameters();
    this.dataService.getData(null, this.hasChildrenKey, groupingParameters, (children) => {
        this.data = children;
        this.treeGrid.isLoading = false;
        this.treeGrid.reflow();
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
