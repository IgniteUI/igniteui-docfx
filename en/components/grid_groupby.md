---
title: Group By Component – Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Group By component allows users to group data based on common values for particular columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, group by, groupby, grouping
---

### Grid Group By

`igxGrid` supports column grouping that enables the user to employ the data in one or more columns in a grid as a primary and, respectively, secondary, tertiery, etc. criteria for organizing the data records in groups. Groups can be expanded or collapsed and the order of grouping may be changed through the UI or API.


#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid-sample-groupby' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Initial Grouping State

It is possible to set the initial grouping of the grid by an array of expressions to the `groupingExpressions` property of the grid.

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

Grouping expressions implement the `ISortingExpression` interface.

#### Group By API

Grouping is available through the UI and through a robust API exposed by the grid component. At the most basic level you can allow end-users to group columns by setting their `groupable` property to `true`.

```html
<igx-grid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```

During runtime the expressions are gettable and settable from the `groupingExpressions` property. If you need to just add or change an existing expression you may also use the `groupBy` method with both a single or an array of `ISortingExpression`.

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

Grouping works in conjuction with sorting and grouping expressions are applied as sorting ones even though columns may be sorted without being grouped. You will always find the grouping expressions in the `sortingExpression` property, sorted in a way that grouped columns' expressions are always first. The sorting API will affect grouping if it changes the expression for a column that is grouped. Removing a grouping expression (ungrouping a column) also unsorts it.

In addition to grouping expresions you can also control the expansion states for group rows. They are stored in a seperate property of the `igxGrid` component `groupingExpansionState`. A group row is uniquely identified based on the field name it is created for and the value it represents for each level of grouping. This means that the signature of an expansion state interface is the following:

```typescript
export interface IGroupCompositeKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupCompositeKey>;
    expanded: boolean;
}
```

As with `groupingExpression`, setting a list of `IGroupByExpandState` directly to the `groupingExpansionState` will change the expansion accordingly. Additionally `igxGrid` exposes a method that toggles a group by the group record instance.

```typescript
    const groupRow = grid.getGroupRow([{ fieldName: 'Category', value: 'soft drinks' }]);
    grid.toggleGroup(groupRow);
```

---

#### Group Row Templates




### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
