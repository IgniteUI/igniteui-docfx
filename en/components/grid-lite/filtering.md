---
title: Angular Grid Lite Filtering | Ignite UI for Angular | MIT license
_description: Filter operations, filter customization, and remote filtering for Angular Grid Lite. Create apps with our open-source Angular Grid Lite. Try it now.
_keywords: filtering, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Angular Grid Lite Filter Operations

The Grid Lite supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the **`filterable`** attribute.

```html
<igc-grid-lite-column
  field="price"
  filterable
></igc-grid-lite-column>
```

For string data types, you can control whether the filter operations will be case sensitive using the **`filteringCaseSensitive`** attribute (defaults to `false` for case insensitive):

```html
<igc-grid-lite-column
  field="name"
  filterable
  filteringCaseSensitive
></igc-grid-lite-column>
```

You can also set these properties programmatically:

```typescript
// In TypeScript
column.filterable = true;
column.filteringCaseSensitive = true;
```

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/filtering-simple/" alt="Angular Grid Lite Filtering Config">
</code-view>

## Filter Model

The building blocks for filter operations in the grid is the **`FilterExpression`** which has the following structure:

```typescript
export interface FilterExpression<T, K extends Keys<T> = Keys<T>> {
  /**
   * The target column for the filter operation.
   */
  key: K;
  /**
   * The filter function which will be executed against the data records.
   */
  condition: FilterOperation<T[K]> | OperandKeys<T[K]>;

  /**
   * The filtering value used in the filter condition function.
   *
   * @remarks
   * Optional for unary conditions.
   */
  searchTerm?: T[K];
  /**
   * Dictates how this expression should resolve in the filter operation in relation to
   * other expressions.
   */
  criteria?: FilterCriteria;
  /**
   * Whether the sort operation should be case sensitive.
   *
   * @remarks
   * If not provided, the value is resolved based on the column filter configuration (if any).
   */
  caseSensitive?: boolean;
}
```

## Filter API

The Grid Lite exposes two main approaches for applying filter operations from its API. Either through the **`GridLite.filter()`**/**`GridLite.clearFilter()`** methods or through the **`Grid.Lite.filterExpressions`** property.

The **`filter()`** method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.

```typescript
// Single
grid.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
grid.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith' searchTerm: 'g', criteria: 'or' },
]);
```

The **`clearFilter()`** method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.

```typescript
// Clear the filter state for the `age` column.
grid.clearFilter('age');

// Clear the filter state of the grid.
grid.clearFilter();
```

## Initial Filter State

The **`filterExpressions`** property is very similar in behavior to the **`filter()`** method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the Grid Lite component is first rendered.

For example here is a Lit-based sample:

```typescript
{
  filterState: FilterExpression<User>[] = [
    { key: 'age', condition: 'greaterThan', searchTerm: 21 },
    /** unary condition so `searchTerm` is not required */
    { key: 'active', condition: 'true' },
  ];

  render() {
    return html`<igc-grid-lite .filterExpressions=${filterState}></igc-grid-lite>`
  }
}
```

It can be used to get the current filter state of the component and do additional processing depending on another state in your application.

```typescript
const state = grid.filterExpressions;
// Save the current filter state
saveUserFilterState(state);
```

## Events

When a filter operation is performed through the UI, the component emits a custom **`filtering`** event. The **`detail`** property is the sort expression which will be applied by the Grid Lite. The event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a **`filtered`** event is emitted. It contains the filter state for the column which was the target of the operation and it is not cancellable.

```typescript
grid.addEventListener('filtering', (event: CustomEvent<GridLiteFilteringEvent<T>>) => { ... });
grid.addEventListener('filtered', (event: CustomEvent<GridLiteFilteredEvent<T>>) => { ... });
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/filtering-events/" alt="Angular Grid Lite Filtering Config Events">
</code-view>

## Remote filter operations

In cases where filtering must be done remotely or you want to save the current state/data to a server somewhere,
the Grid Lite exposes a hook where you can implement and customize this behavior.

Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a filter operation is about to run. The callback is passed a **`DataPipelineParams`** object.

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
grid.dataPipelineConfiguration = { filter: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote filter operation, reflecting the REST endpoint generated based on the filter state of the component.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/filtering-pipeline/" alt="Angular Grid Lite Filtering Config Remote">
</code-view>

<!-- TODO ## API References
## API References

* `{ComponentName}`
* `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
