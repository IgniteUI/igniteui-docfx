---
title: Angular Grid Lite Header Template
_description: Configure and customize custom Grid Lite column header renderers. See demos & examples!
_keywords: header template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Customizing the column header

Similar to the cell templates, column headers can also be customized to better fit the desired use case. You can pass a text label through the **`headerText`** property, or provide a full-blown custom template.

## Customization via header text

By default the column uses the **`key`** configuration property for label text. To customize the label, set the **`headerText`** property to a more human readable format.



```typescript
{
  key: 'price',
  headerText: 'Price per item'
}
```

>[!NOTE]
>When **`headerTemplate`** is provided, **`headerText`** is ignored.

## Customization via header template

Similar to the cell template, you can also pass a custom template renderer and create your own DOM inside the column header.



```typescript
import { html } from 'lit';


{
  key: 'rating',
  headerTemplate: () => html`<h3>⭐ Rating ⭐</h3>`,
}
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid=lite/column-config-headers" alt="Angular Grid Lite Column Config Headers">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Cell Template](cell-template.md)
* [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

* [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
