---
title: Angular Grid Lite Cell Template | Ignite UI for Angular | MIT license
_description: Grid Lite column configuration and column properties. Try our open-source Angular Grid Lite - lightweight and packed with essential features.
_keywords: column configuration, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Column Configuration

The columns are defined with the **`columns`** property which has the type **`ColumnConfiguration<T>[]`**. **`key`** is the only required property for the **`ColumnConfiguration<T>`** as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

```typescript
const accountColumn: ColumnConfiguration<T> = {
  key: 'account',

  /* Additional configuration follows */
  ...
};
```

>[!NOTE]
>As a rule of thumb, the **column** prop should keep the same reference between renders. The columns are designed to be definitions and to rarely change once the grid is mounted, unless explicitly requested. Otherwise, you take the risk of losing state such as width, renderers, etc. and additional render cycles which may lead to performance degradation. Depending on the technology stack which you use, you can create the array outside the appropriate render function/mechanism or memoize it.

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source. It tries to infer the appropriate **`key`** and **`type`** props based on records in the data.

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```

```xml
<igc-grid-lite auto-generate .data=${data}></igc-grid-lite>
```

The previous snippet will result in the following column configuration for the grid:

```typescript
[
  { key: 'entryId', type: 'string' },
  { key: 'source', type: 'string' },
  { key: 'ts', type: 'number' },
];
```

Useful for a quick render of some data without any additional customizations.

>[!NOTE]
>This is a one-time operation which is executed when the grid is initially added to the DOM. Passing an empty data source or having a late bound data source (such as a HTTP request) will usually result in empty column configuration for the grid. This property is ignored if any existing column configuration already exists in the grid. See [the data binding topic](./binding.md) for additional information on auto-generating the column configuration based on the data source.

## Additional Column Configuration

The column configuration object exposes several more properties:

### Column Width

By default, the columns have a width of `minmax(136px, 1fr)` which translates to a minimum width of 136px and maximum of
1 part of the available space in the Grid Lite. This way the columns are fluid and responsive accommodating for changes
in the grid width.

To change the width of column, use the **`width`** property of the **`ColumnConfiguration`** object.

```typescript
{
  ...
  width: '250px'
}
```

The property accepts <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">valid CSS length units</a>.

### Hiding Columns

Columns can be hidden/shown by setting the **hidden** property to of the column configuration object.

```typescript
{
  ...,
  hidden: true
}
```

### Column Resize

Each column of the Grid Lite component can be configured to be resizable by setting the **`resizable`** property in the column definition.

```typescript
{
  ...
  resizable: true
}
```

If a column is set to be resizable, you can drag the right size of the column header to either increase/decrease  the column width. Double-clicking on the resize area will trigger auto-sizing of the column where it will try set its width according to the largest content of its cells/header.

>[!NOTE]
>Columns with "fluid" widths (fr, %, etc.) can behave erratically when resizing in the grid is performed as they try to accommodate for the new dimensions. Depending on the application scenario, it may be better to use "hard" units so users don't experience layout shifts.

In the sample below you can try out the different column properties and how they reflect in the rendered grid.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-dynamic" alt="Angular Grid Lite Column Config Dynamic">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Data Binding](binding.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
