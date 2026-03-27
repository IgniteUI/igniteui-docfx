---
title: Column Reordering & Moving in Angular Hierarchical Grid - Infragistics
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Angular Column Moving API. Try Ignite UI for Angular!
_keywords: column order, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-moving
---



# Hierarchical Grid Column Reordering & Moving

The Hierarchical Grid component in Ignite UI for Angular provides the **Column Moving** feature to allow columns reordering via standard drag/drop mouse or touch gestures, or by using the Column Moving API. Column moving works both with pinned and unpinned columns and with Multi-column Headers. Moving a column into the pinned area pins the column and vice versa, moving a column outside of the pinned area unpins the column.

> [!NOTE]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.
> [!NOTE]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**! This allows to attach handlers for any event emitted by the element, otherwise the event is consumed by the `igxDrag` directive.
> [!NOTE]
> If the pinned area exceeds its maximum allowed width (80% of the total Hierarchical Grid width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

## Angular Hierarchical Grid Column Moving Overview Example





<code-view style="height:660px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving/" alt="Angular Hierarchical Grid Column Moving Overview Example">
</code-view>

<div class="divider--half"></div>


## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [**igx-hierarchical-grid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) could have either movable or immovable columns. This is done via the [`moving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#moving) input of the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html).






```html
<igx-hierarchical-grid [moving]="true">
    ...
    <igx-row-island [moving]="true"></igx-row-island>
</igx-hierarchical-grid>
```



## API

In addition to the drag and drop functionality, the Column Moving feature also provides two API methods to allow moving a column/reordering columns programmatically:

[`moveColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#moveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `position` (representing a [`DropPosition`]({environment:angularApiUrl}/enums/dropposition.html) value), which determines whether to place the column before or after the target column.

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

Note that when using the API, only the [`columnMovingEnd`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnMovingEnd) event will be emitted, if the operation was successful. Also note that in comparison to the drag and drop functionality, using the API does not require setting the `moving` property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are [`columnMovingStart`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnMovingStart), [`columnMoving`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnMoving) and [`columnMovingEnd`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnMovingEnd).
You can subscribe to the [`columnMovingEnd`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnMovingEnd) event of the [`igx-hierarchical-grid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the Category after the Change On Year(%) column.






```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Country'"></igx-column>
    <igx-column [field]="'Phone'" [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Phone" && event.target.field === "Country") {
        event.cancel = true;
    }
}
```



## Styling

To get started with styling the Hierarchical Grid column moving headers, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the `$ghost-header-background`, `$ghost-header-text-color` and the `$ghost-header-icon-color` parameters.

```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: grid-theme(
  $ghost-header-text-color: #f4d45c,
  $ghost-header-background: #575757,
  $ghost-header-icon-color: #f4bb5c
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component mixins with its respective theme:

```scss
:host {
  @include tokens($dark-grid-column-moving-theme);
}
```

### Demo







<code-view style="height:660px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving-styled/" >
</code-view>



>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References

<div class="divider--half"></div>

- [ColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)


<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
