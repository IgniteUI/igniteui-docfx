---
title: Angular Grid Lite Header Template | Ignite UI for Angular | MIT license
_description: Configure and customize custom Grid Lite column header renderers. See demos and examples! Build applications with open-source Angular Grid Lite. Try it now.
_keywords: header template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Customizing the Column Header

Similar to the cell templates, column headers can also be customized to better fit the desired use case. You can pass a text label through the `header` property, or provide a full-blown custom template.

## Customization via Header Text

By default the column uses the `field` property for label text. To customize the label, set the `header` property to a more human readable format.

```html
<igx-grid-lite-column field="price" header="Price per item"></igx-grid-lite-column>
```

>[!NOTE]
>When a header template is provided, `header` is ignored.

## Customization via Header Template

Similar to the cell template, you can also pass a custom template renderer and create your own DOM inside the column header.

```typescript
// Import the directive for it -> IgxGridLiteHeaderTemplateDirective
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteHeaderTemplateDirective } from 'igniteui-angular/grids/lite';

// And add it to your imports array
 imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective, // for templating cells
    IgxGridLiteHeaderTemplateDirective // for templating headers
],
```

```html
<igx-grid-lite-column field="rating" dataType="number">
    <!-- igxGridLiteHeader directive for templating the header -->
    <ng-template igxGridLiteHeader let-value>
        <h3>⭐ Rating ⭐</h3>
    </ng-template>

    <!-- igxGridLiteCell directive for templating the cell -->
    <ng-template igxGridLiteCell let-value>
        <igc-rating [value]="value" readonly step="0.01" min="0" max="5">
        </igc-rating>
    </ng-template>
</igx-grid-lite-column>
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/column-config-headers/" alt="Angular Grid Lite Column Config Headers">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Cell Template](cell-template.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite  **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
