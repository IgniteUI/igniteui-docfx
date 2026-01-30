---
title: Angular Grid Lite Cell Template | Ignite UI for Angular | MIT license
_description: Grid Lite column configuration and column properties. Try our open-source Angular Grid Lite - lightweight and packed with essential features.
_keywords: column configuration, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Column Configuration

Columns are defined declaratively using **`<igc-grid-lite-column>`** elements as children of the **`<igc-grid-lite>`** component. **`field`** is the only required property for a column as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

```html
<igc-grid-lite [data]="data">
  <igc-grid-lite-column
    field="account"
  ></igc-grid-lite-column>
  <!-- Additional columns -->
</igc-grid-lite>
```

In TypeScript, you can access the columns collection via the grid's `columns` property, which is read-only:

```typescript
// Access columns (read-only)
const columns = grid.columns;
```

>[!NOTE]
>The declarative columns are designed to be definitions and should rarely change once the grid is mounted. The grid will automatically detect changes to column elements and their attributes.

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source. It tries to infer the appropriate **`field`** and **`dataType`** based on records in the data.

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```

```html
<igc-grid-lite auto-generate [data]="data"></igc-grid-lite>
```

The previous snippet will result in the following auto-generated columns for the grid:

```typescript
// Equivalent to:
<igc-grid-lite [data]="data">
  <igc-grid-lite-column field="entryId" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="source" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="ts" data-type="number"></igc-grid-lite-column>
</igc-grid-lite>
```

Useful for a quick render of some data without any additional customizations.

>[!NOTE]
>This is a one-time operation which is executed when the grid is initially added to the DOM. Passing an empty data source or having a late bound data source (such as a HTTP request) will usually result in empty column configuration for the grid. This property is ignored if any existing column configuration already exists in the grid. See [the data binding topic](./binding.md) for additional information on auto-generating the column configuration based on the data source.

## Additional Column Configuration

Column elements expose several properties via attributes:

### Column Width

By default, the columns have a width of `minmax(136px, 1fr)` which translates to a minimum width of 136px and maximum of
1 part of the available space in the Grid Lite. This way the columns are fluid and responsive accommodating for changes
in the grid width.

To change the width of a column, use the **`width`** attribute:

```html
<igc-grid-lite-column
  field="account"
  width="250px"
></igc-grid-lite-column>
```

The property accepts <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">valid CSS length units</a>.

### Hiding Columns

Columns can be hidden/shown by setting the **`hidden`** attribute:

```html
<igc-grid-lite-column
  field="account"
  hidden
></igc-grid-lite-column>
```

### Column Resize

Each column of the Grid Lite component can be configured to be resizable by setting the **`resizable`** attribute:

```html
<igc-grid-lite-column
  field="account"
  resizable
></igc-grid-lite-column>
```

If a column is set to be resizable, you can drag the right size of the column header to either increase/decrease  the column width. Double-clicking on the resize area will trigger auto-sizing of the column where it will try set its width according to the largest content of its cells/header.

>[!NOTE]
>Columns with "fluid" widths (fr, %, etc.) can behave erratically when resizing in the grid is performed as they try to accommodate for the new dimensions. Depending on the application scenario, it may be better to use "hard" units so users don't experience layout shifts.

In the sample below you can try out the different column properties and how they reflect in the rendered grid.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-dynamic/" alt="Angular Grid Lite Column Config Dynamic">
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
