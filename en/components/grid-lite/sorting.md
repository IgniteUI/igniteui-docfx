---
title: Angular Grid Lite Sorting
_description: Sort operations, sort customization and remote sorting for {ComponentTitle}. See demos & examples!
_keywords: sorting, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Sort operations

The Grid Lite supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the **`sort`** property of the column configuration object.


```typescript
{
  key: 'price',
  sort: true
}
```

The **`sort`** property can be either a simple boolean or a **`ColumnSortConfiguration`** object which exposes additional configuration options:


```typescript
{
  key: 'name',
  sort: {
    /**
     * For string data types controls whether the sort operations for this column will be case sensitive.
     * By default, sort operations for string types are case insensitive.
     */
    caseSensitive: true,
    /**
     * Custom comparer function which will be used for sort operations for this column.
     *
     * In the following sample, we compare the `name` values based on their length.
     */
    comparer: (a, b) => a.length - b.length
  }
}
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-simple" alt="Angular Grid Lite Sorting Config">
</code-view>

## Single and multi-sorting

The grid supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the **`sortConfiguration`** property of the grid.



```typescript
grid.sortConfiguration = { multiple: false, triState: true };
```



>[!NOTE]
>The single/multi-column sorting behavior controls how end-users interact with the Grid lite. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-state sorting

Additionally, the Grid Lite component supports tri-state sorting and it is enabled by default. Depending on the configured **`triState`**
value for the grid **`sortConfiguration`** property, end-users will cycle through the following states,

- **Tri-state enabled**

  - ```typescript
    ascending -> descending -> none -> ascending
    ```

- **Tri-state disabled**

  - ```typescript
    ascending -> descending -> ascending
    ```

where **`none`** is the initial state of the data, that is to say with no sorting applied by the grid.

### Sorting indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

The following sample shows the grid **`sortConfiguration`** combinations and how they reflect in the grid.

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-grid-config" alt="Angular Grid Lite Sorting Config Grid">
</code-view>

## Sort model

The building block for sort operations in the Grid Lite component is the **`SortExpression`** which has the following properties:



```typescript
type SortExpression<T> = {
  /**
   * The `key` of the target column for the sort operation.
   */
  key: keyof T;
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

The Grid Lite component exposes two main approaches for applying sort operations from its API. Either through the **`GridLite.sort()`**/**`GridLite.clearSort()`** methods or through the **`Grid.Lite.sortExpressions`** property.

The **`sort()`** method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.



```typescript
// Single
grid.sort({ key: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
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



### Initial sorting state

The **`sortExpressions`** property is very similar in behavior to the **`sort()`** method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the Grid Lite is first rendered.



For example here is a Lit-based sample:

```typescript
{
  sortState: SortExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortExpressions=${sortState}></igc-grid-lite>`
  }
}
```



It can be used to get the current sort state of the component and do additional processing depending on another state in your application.



```typescript
const state = grid.sortExpressions;
// Save the current sort state
saveUserSortState(state);
```



## Events

When a sorting operation is performed through the UI, the component emits a custom **`sorting`** event. The **`detail`** property is the sort expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a **`sorted`** event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.



```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortExpression<T>>) => { ... });
```



In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-events" alt="Angular Grid Lite Sorting Config Events">
</code-view>

## Remote sort operations

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
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-pipeline" alt="Angular Grid Lite Sorting Config Pipeline">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

* [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
