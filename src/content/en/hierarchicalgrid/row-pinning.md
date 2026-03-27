---
title: Row Pinning in Angular Hierarchical Grid - Ignite UI for Angular
_description: Use the Angular Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: lock row, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/row-pinning
---



# Angular Hierarchical Grid Row Pinning

One or multiple rows can be pinned to the top or bottom of the Angular UI Grid. **Row Pinning** in Ignite UI for Angular allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the Hierarchical Grid vertically. The Material UI Grid has a built-in row pinning UI, which is enabled by initializing an `igxActionStrip` component in the context of Hierarchical Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## Angular Hierarchical Grid Row Pinning Example





<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning/" alt="Angular Hierarchical Grid Row Pinning Example">
</code-view>



## Row Pinning UI

The built-in row pinning UI is enabled by adding an `igxActionStrip` component with the `GridPinningActions` component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.







```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="false">
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-hierarchical-grid>
```




## Row Pinning API

Row pinning is controlled through the `pinned` input of the [`row`]({environment:angularApiUrl}/interfaces/rowtype.html). Pinned rows are rendered at the top of the Hierarchical Grid by default and stay fixed through vertical scrolling of the unpinned rows in the Hierarchical Grid body.





```typescript
this.hierarchicalGrid.getRowByIndex(0).pinned = true;
```



You may also use the Hierarchical Grid's [`pinRow`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pinRow) or [`unpinRow`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#unpinRow) methods of the [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) to pin or unpin records by their ID:





```typescript
this.hierarchicalGrid.pinRow('ALFKI');
this.hierarchicalGrid.unpinRow('ALFKI');
```



Note that the row ID is the primary key value, defined by the [`primaryKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primaryKey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the [`rowPinning`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowPinning) event and changing the [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipinroweventargs.html#insertAtIndex) property of the event arguments to the desired position index.





```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="true" (rowPinning)="rowPinning($event)">
</igx-hierarchical-grid>
```

```typescript
public rowPinning(event) {
    event.insertAtIndex = 0;
}
```



## Pinning Position

You can change the row pinning position via the [`pinning`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.







```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>
```



```typescript
public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Bottom };
```


## Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

### Via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.







```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false">
    <igx-column width='70px' [filterable]='false'>
        <ng-template igxCell let-cell="cell" let-val>
            <igx-icon class="pin-icon" (mousedown)="togglePinning(cell.row, $event)">
                {{cell.row.pinned ? 'lock' : 'lock_open'}}
            </igx-icon>
        </ng-template>
    </igx-column>
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.field">
    </igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="true">
    </igx-row-island>
</igx-hierarchical-grid>
```



On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```typescript
public togglePinning(row: IgxGridRow, event) {
    event.preventDefault();
    if (row.pinned) {
        row.unpin();
    } else {
        row.pin();
    }
}
```

#### Demo





<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning-extra-column/" >
</code-view>







## Row Pinning Limitations

- Only records that exist in the data source can be pinned.
- The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
- Because of how pinned rows are stored internally so that they may appear both in the pinned and unpinned areas of the grid, row pinning is not supported when records in the grid are fetched from a remote endpoint on demand (remote virtualization).
- The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
- As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vise versa). Additionally, range selection (e.g. using Shift + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.
- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning

<div class="divider--half"></div>

## Styling

The IgxHierarchicalGrid allows styling through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The Hierarchical Grid's [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the Hierarchical Grid.

Below, we are going through the steps of customizing the Hierarchical Grid's row pinning styling.

### Importing the Styling Library

To begin the customization of the row pinning feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Defining a Theme

Next, create a new theme, that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the parameters, required to customize the row pinning feature as desired.

```scss
$custom-grid-theme: grid-theme(
  $pinned-border-width: 5px,
  $pinned-border-style: double,
  $pinned-border-color: #ffcd0f,
  $cell-active-border-color: #ffcd0f
);
```

### Using CSS variables

The last step is to pass the custom grid theme:

```scss
:host {
  @include tokens($custom-grid-theme);
}
```

### Demo





<code-view style="height:540px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-pinning-styling/" >
</code-view>



>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References

- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
- [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
- [IgxHierarchicalGridRow]({environment:angularApiUrl}/classes/igxhierarchicalgridrow.html)
- [RowType]({environment:angularApiUrl}/interfaces/RowType.html)
- [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
