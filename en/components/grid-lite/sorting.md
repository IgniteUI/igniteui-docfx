---
title: Angular Grid Lite Sorting | Ignite UI for Angular | MIT license
_description: Try Angular Grid Lite with sort operations, sort customization, and remote sorting for Angular Grid Lite. See demos and examples and build your next app.
_keywords: sorting, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Sort Operations

The Grid Lite supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the **`sortable`** attribute.

```html
<igc-grid-lite-column
  field="price"
  sortable
></igc-grid-lite-column>
```

For additional sorting configuration, you can use the **`sortingCaseSensitive`** attribute and **`sortConfiguration`** property:

```html
<igc-grid-lite-column
  field="name"
  sortable
  sortingCaseSensitive
></igc-grid-lite-column>
```

For custom sorting logic, set the **`sortConfiguration`** property in TypeScript:

```typescript
// In TypeScript - custom comparer function for sort operations
column.sortable = true;
column.sortingCaseSensitive = true;
column.sortConfiguration = {
  /**
   * Custom comparer function which will be used for sort operations for this column.
   *
   * In the following sample, we compare the `name` values based on their length.
   */
  comparer: (a, b) => a.length - b.length
};
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-simple/" alt="Angular Grid Lite Sorting Config">
</code-view>

## Single and Multi-Sorting

The grid supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the **`sortingOptions`** property of the grid.

```typescript
grid.sortingOptions = { mode: 'single' };
```

>[!NOTE]
>The single/multi-column sorting behavior controls how end-users interact with the Grid lite. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-State Sorting

The Grid Lite component supports tri-state sorting and it is now always enabled. End-users will cycle through the following states:

```typescript
ascending -> descending -> none -> ascending
```

where **`none`** is the initial state of the data, that is to say with no sorting applied by the grid.

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

The following sample shows the grid **`sortingOptions`** combinations and how they reflect in the grid.

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-grid-config/" alt="Angular Grid Lite Sorting Config Grid">
</code-view>

## Sort model

The building block for sort operations in the Grid Lite component is the **`SortingExpression`** which has the following properties:

```typescript
type SortingExpression<T> = {
  /**
   * The `field` of the target column for the sort operation.
   */
  field: keyof T;
  /**
   * The sort direction for the operation.
   */
  direction: 'ascending' | 'descending' | 'none';
  /**
   * Should the operation be case sensitive. Applies to the default string type.
   * If not explicitly passed, it will use the value from the target column sort configuration if applicable.
   */
  caseSensitive?: boolean;
  /**
   * Specifies a custom comparer function for the operation.
   * Will use the value from the target column sort configuration if applicable.
   */
  comparer?: SortComparer<T, T[keyof T]>;
};
```

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

The Grid Lite component exposes two main approaches for applying sort operations from its API. Either through the **`GridLite.sort()`**/**`GridLite.clearSort()`** methods or through the **`Grid.Lite.sortingExpressions`** property.

The **`sort()`** method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.

```typescript
// Single
grid.sort({ field: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { field: 'price', direction: 'descending' },
  { field: 'name', direction: 'descending' },
]);
```

The **`clearSort()`** method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.

```typescript
// Clear the sort state for the `price` column.
grid.clearSort('price');

// Clear the sort state of the grid.
grid.clearSort();
```

### Initial Sorting State

The **`sortingExpressions`** property is very similar in behavior to the **`sort()`** method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the Grid Lite is first rendered.

For example here is a Lit-based sample:

```typescript
{
  sortState: SortingExpression<Products>[] = [
    { field: 'price', direction: 'descending' },
    { field: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortingExpressions=${sortState}></igc-grid-lite>`
  }
}
```

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

```typescript
const state = grid.sortingExpressions;
// Save the current sort state
saveUserSortState(state);
```

## Events

When a sorting operation is performed through the UI, the component emits a custom **`sorting`** event. The **`detail`** property is the sort expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a **`sorted`** event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.

```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortingExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortingExpression<T>>) => { ... });
```

In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-events/" alt="Angular Grid Lite Sorting Config Events">
</code-view>

## Remote Sort Operations

In cases where sorting must be done remotely or you want to save the current state/data to a server somewhere, the Grid Lite exposes a hook where you can implement and customize this behavior.

Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a sort operation is about to run. The callback is passed a **`DataPipelineParams`** object.

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * The current data state of the grid.
   */
  data: T[];
  /**
   * The grid component itself.
   */
  grid: GridLite<T>;
  /**
   * The type of data operation being performed.
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote sorting operation, reflecting the REST endpoint generated based on the sort state of the component.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-pipeline/" alt="Angular Grid Lite Sorting Config Pipeline">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
