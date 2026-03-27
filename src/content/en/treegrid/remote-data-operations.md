---
title: Angular Tree Remote Data Operations - Ignite UI for Angular
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Angular.
_keywords: angular remote data operations, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/remote-data-operations
---




# Angular Tree Grid Remote Data Operations

The Ignite UI for Angular Tree Grid supports remote data operations such as remote virtualization, remote sorting, remote filtering and others. This allows the developer to perform these tasks on a server, retrieve the data that is produced and display it in the Tree Grid.




## Angular Tree Grid Remote Data Operations Overview Example


<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-remote-filtering/" alt="Angular Tree Grid Remote Data Operations Overview Example">
</code-view>

<div class="divider--half"></div>



By default, the Tree Grid uses its own logic for performing data operations.
You can perform these tasks remotely and feed the resulting data to the Tree Grid by taking advantage of certain inputs and events, which are exposed by the Tree Grid.




### Remote Filtering

To provide remote filtering, you need to subscribe to the [`filteringExpressionsTreeChange`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#filteringExpressionsTreeChange) output so that you make the appropriate request based on the arguments received. Let's use a flat collection as a data source for our Tree Grid by providing a [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primaryKey) and a [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignKey).

We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.

```typescript
const DEBOUNCE_TIME = 300;
...
public ngAfterViewInit() {
    ...
    this.treeGrid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });
}
```

When remote filtering is provided, usually we do not need the built-in filtering of the Tree Grid. We can disable it by setting the [`filterStrategy`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#filterStrategy) input of the Tree Grid to the `NoopFilteringStrategy` instance.

```html
<!-- tree-grid-remote-filtering-sample.html -->

<igx-tree-grid #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID"
               [autoGenerate]="false"
               [filterStrategy]="noopFilterStrategy"
               [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
</igx-tree-grid>
```

```typescript
// tree-grid-remote-filtering-sample.ts

public noopFilterStrategy = NoopFilteringStrategy.instance();

public processData() {
    this.treeGrid.isLoading = true;

    const filteringExpr = this.treeGrid.filteringExpressionsTree;

    this._remoteService.getData(filteringExpr, () => {
        this.treeGrid.isLoading = false;
    });
}
```

The remote filtering will have to be performed over the flat collection directly. We will also have to include all the parents for any record that matches the filtering condition regardless of whether or not the parents match the filtering (we do this to keep the hierarchy intact). The result can be seen below:

>[!NOTE]
>When remote data is requested, the filtering operation is case-sensitive.

### Remote Filtering Demo

You can see the result of the code from above at the beginning of this article in the [Demo](#angular-tree-grid-remote-data-operations-overview-example) section.





### Unique Column Values Strategy



The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The Tree Grid generates these values based on its data source by default. In case of remote filtering, the grid data does not contain all the data from the server. In order to provide the unique values manually and load them on demand, we can take advantage of the Tree Grid's [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#uniqueColumnValuesStrategy) input. This input is actually a method that provides three arguments:

- **column**  - The respective column instance.
- **filteringExpressionsTree** - The filtering expressions tree, which is reduced based on the respective column.
- **done** - Callback that should be called with the newly generated column values when they are retrieved from the server.

The developer can manually generate the necessary unique column values based on the information, that is provided by the **column** and the **filteringExpressionsTree** arguments and then invoke the **done** callback.

> [!NOTE]
> When the [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#uniqueColumnValuesStrategy) input is provided, the default unique values generating process in the excel style filtering will not be used.




```html
<igx-tree-grid #treeGrid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
</igx-tree-grid>
```

```typescript
public columnValuesStrategy = (column: ColumnType,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

### Unique Column Values Strategy Demo


<code-view style="height:800px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand/" >
</code-view>




In order to provide a custom loading template for the excel style filtering, we can use the `igxExcelStyleLoading` directive:

```html
<igx-tree-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template>
</igx-tree-grid>
```

<div class="divider--half"></div>

## Remote Paging



In this sample we will demonstrate how to display a certain number of root records per page no matter how many child records they have. In order to cancel the built-in Tree Grid paging algorithm, which displays a certain number of records no matter their level (root or child), we have to set the [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) property to `Number.MAX_SAFE_INTEGER`.

```html
<igx-tree-grid #treeGrid ...>
        <igx-paginator [perPage]="maxPerPage">
        </igx-paginator>
...
```

```typescript
public maxPerPage = Number.MAX_SAFE_INTEGER;
```



Now we can choose between setting-up our own _custom paging template_ or using the default one that the `igx-paginator` provides. Let's first take a look what is necessary to set-up remote paging by using the _default paging template_.

### Remote paging with default template

If you want to use the _default paging template_ you need to set the Paginator's [`totalRecords`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#totalRecords) property, only then the grid will be able to calculate the _total page number_ based on total remote records. When performing a remote pagination the Paginator will pass to the Grid only the data for the current page, so the grid will not try to paginate the provided data source. That's why we should set Grid's [`pagingMode`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pagingMode) property to _GridPagingMode.remote_. Also it is necessary to either subscribe to [`pagingDone`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#pagingDone) or [`perPageChange`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPageChange) events in order to fetch the data from your remote service, it depends on the use case which event will be used.




```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" [pagingMode]="mode">
    <igx-column field="Name"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)">
    </igx-paginator>
</igx-tree-grid>
```




```typescript
public totalCount = 0;
public data: Observable<any[]>;
public mode = GridPagingMode.remote;
public isLoading = true;
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

private _dataLengthSubscriber;

public set perPage(val: number) {
    this._perPage = val;
    this.paginate(0);
}

public ngOnInit() {
    this.data = this.remoteService.remoteData.asObservable();

    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
        this.totalCount = data;
        this.grid1.isLoading = false;
    });
}

public ngAfterViewInit() {
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}
```




<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-remote-paging-default-template/" >
</code-view>

<div class="divider--half"></div>



### Remote Paging with custom igx-paginator-content

When we define a custom paginator content we need to define the content in a way to get the data only for the requested page and to pass the correct **skip** and **top** parameters to the remote service according to the selected page and items [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage). We are going to use the `<igx-paginator>` in order to ease our example configuration, along with the [`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) and [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) that were introduced - `igx-page-size` will add the per page dropdown and label and `igx-page-nav` will add the navigation action buttons and labels.





```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
    (pageChange)="paginate($event)">
    <igx-paginator-content>
        <igx-page-size></igx-page-size>
        [This is my custom content]
        <igx-page-nav></igx-page-nav>
    </igx-paginator-content>
</igx-paginator>
```

```typescript
public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}
```



>[!NOTE]
> In order the Remote Paging to be configured properly a `GridPagingMode.Remote` should be set:





```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content"
        expansionDepth="0" width="100%" height="540px" [pagingMode]="mode"></igx-tree-grid>
...
public mode = GridPagingMode.Remote;
```



The last step will be to declare the paginator content based on your requirements.

```html
<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav>
</igx-paginator-content>
```

After all the changes above, the following result will be achieved.




<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-remote-paging/" >
</code-view>

<div class="divider--half"></div>







## Known Issues and Limitations

- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning
- In remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`]({environment:angularApiUrl}/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.

## API References

<div class="divider--half"></div>

- [IgxPaginatorComponent API]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html)
- [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Paging](paging.md)
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
