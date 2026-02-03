---
title: Angular Grid Lite Data Binding | Ignite UI for Angular | MIT license
_description: Data binding for Angular Grid Lite. Create apps with our open-source Angular Grid Lite. It’s lightweight and packed with essential features. Try now.
_keywords: data binding, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Angular Grid Lite Data Binding

The Grid Lite accepts and array of plain objects as a data source. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.

When applying data transformations, such as sorting and filtering, the grid does not modify the original data reference. That is to say, data transformations will not be reflected in the original source. The grid does not track changes to the objects inside the data array, so direct modification of the data objects will not be reflected.

## Change the Data Source at Runtime

The component supports changing its data source at runtime. If the new source has a different "shape" than the previous one make sure to update your column configuration as well.

```typescript
grid.data = [...{
  /** records follow */
}];
```

```html
<igc-grid-lite>
    <!-- Update column configuration, add or remove columns as needed to represent the new data. -->
    <igc-grid-lite-column field="id"></igc-grid-lite-column>
</igc-grid-lite>
```

If the grid has `autoGenerate` enabled, it will "_infer_" the new column configuration automatically when the data changes.

```typescript
grid.autoGenerate = true;

/** After the new binding the grid will infer the column collection from the bound data. */
grid.data = [];
```

>[!NOTE]
>The sort/filter states of the Grid Lite component are kept when changing the data source in this manner.
Usually you will want to reset them by calling either **`clearSort()`** and/or **`clearFilter()`**.

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/data-binding-dynamic/" alt="Angular Grid Lite Data Binding Example">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
