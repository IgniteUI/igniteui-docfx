---
title: Angular Grid Lite Cell Template | Ignite UI for Angular | MIT license
_description: Configure and customize custom Grid Lite cell renderers. Create apps with our open-source Angular Grid Lite. Try now.
_keywords: cell template, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# Column Cell Template

By default, the grid uses the key of the column to render the value as a string inside the cell. This is fine for basic scenarios, but if you want to customize the rendered output or the final output is a combination of different data fields, you should use a cell template renderer.

To achieve that, set the **`cellTemplate`** property of the column.

```typescript
{
  cellTemplate?: (params: GridLiteCellContext<T, K>) => TemplateResult;
}
```

## Use as a Formatter Function

For the simple scenario where some formatting is required, one can just return the formatted value. Here is an example for displaying a number value to a locale currency format:

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

{
  ...
  /** Return the custom currency format for a value `value = 123456.789` */
  cellTemplate: (params) => asCurrency(params.value) // => "€123,456.79"
  ...
}
```

You can combine values different fields from the data source as well.
<!-- TODO: 
Refer to the API documentation for **`GridLiteCellContext`** for more information. -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

{
  ...
  /** Return the custom currency format for an order of 10 items where the price is 99.99 */
  cellTemplate: ({value, row}) => asCurrency(value * row.data.count) // => "€999.90"
  ...
}
```

## Custom DOM Templates

Aside from using the **`cellTemplate`** property as a value formatter, you can also create your own DOM template, which
will be rendered inside the cell container.

We've decided to re-use the functionality provided by <a href="https://lit.dev/" target="_blank">Lit</a> and its
<a href="https://lit.dev/docs/templates/expressions/" target="_blank">tagged template syntax</a> for building declarative
DOM fragments.

You can template any standard DOM elements as well as web components from other libraries.

```typescript
// Import the `html` tag function from the Lit package.
import { html } from "lit";

{
  key: 'rating',
  // Use another web component to represent the `rating` value in the grid
  cellTemplate: ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`
  ...
}
```

>[!NOTE]
>Keep in mind the more complex and involved the template is, the greater the performance cost. Avoid complex DOM structures if performance is important.

## Cell Context Object

The custom cell renderer is passed an **`GridLiteCellContext`** object as a parameter with the following props:


```typescript
/**
 * Context object for the row cell template callback.
 */
export interface GridLiteCellContext<
  T extends object,
  K extends Keys<T> = Keys<T>
> {
  /**
   * The cell element parent of the template.
   */
  parent: GridLiteCell<T>;
  /**
   * The row element containing the cell.
   */
  row: GridLiteRow<T>;
  /**
   * The current configuration for the column.
   */
  column: ColumnConfiguration<T, K>;
  /**
   * The value from the data source for this cell.
   */
  value: PropertyType<T, K>;
}
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-simple" alt="Angular Grid Lite Column Config Basic">
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
