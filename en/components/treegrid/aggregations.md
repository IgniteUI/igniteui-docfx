---
title: Tree Grid Aggregations - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Tree Grid aggregations, see the data grouped and aggregated.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Tree Grid, Angular Tree Grid component, Angular Tree Grid control, Angular High Performance Tree Grid, Summaries, Summary, Aggregate, Aggregations
---

# Tree Grid Aggregations
If you have non-hierarchical data and you want to **group by** one or more columns and populate the parent rows with **aggregated values**, you could use the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) and a custom implementation like in the demo below.

## Angular Tree Grid Aggregations Example

<div class="sample-container loading" style="height:850px">
    <iframe id="treegrid-finjs-iframe" src='{environment:lobDemosBaseUrl}/treegrid-finjs' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Tree Grid Aggregations Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> The sample contains custom logic which is not built in the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html). It is similar to the grouping and summaries features of the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html), but instead inside separate summary rows, the calculated data is displayed inside the parent rows.

#### Implementation

In this sample we have created a pipe class called `TreeGridGroupingPipe` which groups the tabular data by the **"Category"**, **"Type"** and **"Contract"** fields. The resulting hierarchy is displayed in the newly created **"Categories"** column. The pipe also calculates aggregated values for the generated parent rows for the **"Price"**, **"Change"** and **"Change(%)"** columns. For more information on how this pipe works you can take a look at the `TreeGridGroupingPipe` class in the `tree-grid-grouping.pipe.ts` file. The pipe is completely configurable so you could copy and re-use it in your own project.

Here is an example of how to use the pipe in the template:

```html
<igx-tree-grid #grid1 
               [data]="data | treeGridGrouping:groupColumns:aggregations:groupColumnKey:primaryKey:childDataKey"
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
public groupColumns = ["Category", "Type", "Contract"];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.Change).reduce((ty, u) => ty + u, 0);
        },
        field: "Change"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.Price).reduce((ty, u) => ty + u, 0);
        },
        field: "Price"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return parent.Change / (parent.Price - parent.Change) * 100;
        },
        field: "Change(%)"
    }
];
public primaryKey = "ID";
public childDataKey = "Children";
public groupColumnKey = "Categories";
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



