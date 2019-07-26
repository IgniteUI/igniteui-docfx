---
title: Angular Grid Group By | Column Group | Ignite UI for Angular | infragistics
_description: Configure angular group by that allows visualizing of data records in Angular Material table, visualize the grouped data in separate and convenient column group.
_keywords: angular group by, igniteui for angular, infragistics
---

### Grid Group By

A Group by behavior in an Angular Material table or UI grid creates grouped data rows based on the column values. The Group By in [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API.

#### Demo

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Initial Grouping State

It is possible to define initial grouping of the grid by assigning an array of expressions to the [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) property of the grid.

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

Grouping expressions implement the [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) interface.

#### Group By API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's [`groupable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#groupable) property to `true`.

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

During runtime the expressions are gettable and settable from the [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) property. If you need to add or change an existing expression you may also use the [`groupBy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupby) method with either a single or an array of [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html).

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

Grouping works in conjunction with sorting and grouping expressions are applied as sorting ones even though columns may be sorted without being grouped. You will always find the grouping expressions in the [`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions) property, sorted in a way that grouped columns' expressions are always first. The sorting API will affect grouping if it changes the expression for a column that is grouped. Removing a grouping expression (ungrouping a column) also unsorts it.

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) component [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate). A group row is uniquely identified based on the field name it is created for and the value it represents for each level of grouping. This means that the signature of an expansion state interface is the following:

```typescript
export interface IGroupByKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupByKey>;
    expanded: boolean;
}
```

As with [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions), setting a list of [`IGroupByExpandState`]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html) directly to the [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate) will change the expansion accordingly. Additionally [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) exposes a method that toggles a group by the group record instance.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    grid.toggleGroup(groupRow);
```

Groups can be created expanded (***default***) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the [`groupsExpanded`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupsexpanded) property.

#### Group Row Templates

The group row without its expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The grouping record template is rendered against has the following signature:

```typescript
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
}
```

As an example, the following template would make the group rows summary more verbose:

```html
<ng-template igxGroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```


### Group By with Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

#### Demo

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-paging-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-paging-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Group By with Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.html#summaries-with-group-by) topic.

#### Keyboard Navigation

The grouping UI supports the following keyboard interactions:

- For group rows (focus should be on the row or the expand/collapse cell)
   - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - Expands the group
   - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - Collapses the group

- For group [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) components in the group by area (focus should be on the chip)
   - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - moves the focused chip left, changing the grouping order, if possible
   - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - moves the focused chip right, changing the grouping order, if possible
   - <kbd>SPACE</kbd> - changes the sorting direction
   - <kbd>DELETE</kbd> - ungroups the field
   - The seperate elements of the chip are also focusable and can be interacted with using the <kbd>ENTER</kbd> key.

### Known Limitations

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

### API References

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IGroupByExpandState]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent Styles]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Column Moving](column_moving.md)
* [Summaries](summaries.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
