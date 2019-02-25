---
title: Tree Grid Paging
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Paging, Pagination, Page
---

### Tree Grid Paging

In Ignite UI for Angular Tree Grid, **Paging** is initialized on the root `igx-tree-grid` component and is configurable via the [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) and [`perPage`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#perpage) inputs.

#### Demo



<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-paging-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>




Paging is a Boolean property that controls whether the feature is enabled, and the [`perPage`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#perpage) property controls the visible records per page. Let’s update our Tree Grid to enable paging:

```html
<igx-tree-grid #treeGrid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager" height="500px" width="100%" displayDensity="cosy">
</igx-tree-grid>
```

The paging area supports templating by the user, if a template reference is passed to the Tree Grid during initialization. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Current page: {{ treeGrid.page }}
    <input type="number" [ngModel]="grid.page" (onModelChange)="treeGrid.paginate($event)" />
    Total pages: {{ treeGrid.totalPages }}
</ng-template>

<igx-tree-grid [paging]="true" [paginationTemplate]="myTemplate">
    ...
</igx-tree-grid>
```

Paging can also be done programmatically through the Tree Grid API, using the [`paginate`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#nextpage) methods:

```typescript
// Go to page 6
this.treeGrid.paginate(5);

// Go to previous/next page
this.treeGrid.previousPage();
this.treeGrid.nextPage();

// Check for first/last page
this.treeGrid.isFirstPage;
this.treeGrid.isLastPage;

// Get the number of pages
this.treeGrid.totalPages;

// Change the number of records per page
this.treeGrid.perPage = 25;

// Enables/disables paging
this.treeGrid.paging = false;
```


### API References
* [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator Styles]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)

### Additional Resources
<div class="divider--half"></div>

* [Tree Grid overview](tree_grid.md)
* [Virtualization and Performance](virtualization.md)
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
