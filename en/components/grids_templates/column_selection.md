@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes grid interactions more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes Tree Grid interactions more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes Hierarchical Grid interaction more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}

## @@igComponent Column Selection
<p class="highlight">The <b>column selection feature</b> provides an easy way to select an entire column with a single click. It <b>emphasizes</b> the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich [`API`]({environment:angularApiUrl}) that allows for manipulation of the selection <b>state</b>, <b>data extraction</b> from the <b>selected</b> fractions and <b>data analysis</b> operations and visualizations.</p>

<div class="sample-container loading" style="height:570px">
    <iframe id="@@igObjectRef-column-selection-iframe" src='{environment:demosBaseUrl}/@@igDemoBasePath/column-selection' width="100%" height="100%" seamless frameborder="0" class="no-theming" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="@@igObjectRef-column-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Basic usage

#### Interactions
All of the presented columns are [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) by default. With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected).

> [!NOTE]
> [`Multi Column Headers`](multi_column_headers.md) don't reflect on the [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) is [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable), if at least one of its children has the selection behaviour enabled. In addition, the component is marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) if all of its descendents are [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected)

<div class="sample-container loading" style="height:570px">
    <iframe id="@@igObjectRef-column-group-selection" src='{environment:demosBaseUrl}/@@igDemoBasePath/column-group-selection' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="@@igObjectRef-column-group-selection" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Keyboard combinations
There are three scenarios for keyboard navigation of the **Column Selection** feature:
- Single column selection - <kbd>click</kbd> on the column header cell if it is **selectable**.
- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

#### API manipulations
The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.

> [!NOTE]
> The above statement also applies to the [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html), except that when the [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [`API References`](#api-references) section.

### Styling
Before diving into the styling options, the core module and all component mixins need to be imported.
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

>[!NOTE]
>Please note that [`row selection`](row_selection.md) and [`column selection`](column_selection.md) can't be manipulated   independently. They depend on the same `variables`.

With that being said, let's move on and change the **selection** and **hover** styles.<br/>
Following the simplest approach, let's define our custom **theme**.

```scss
$custom-grid-theme: igx-grid-theme(
    $row-selected-background: steelblue,
    $row-selected-text-color: gold,
    $row-selected-hover-background: steelblue
);
```
[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) accepts several parameters but those are the three responsible for changing the appearance of all selected columns:
- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.

#### Using CSS Variables
The last step is to include the custom `igx-grid` theme.

```scss
@include igx-css-vars($custom-grid-theme)
```

#### Overriding the Base Theme
In order to style components for Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. In order to prevent the custom theme to leak to other components, be sure that you have included the `:host` selector before `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-column-selection-theme);
    }
}
```
#### Demo

<div class="sample-container loading" style="height:570px">
    <iframe id="@@igObjectRef-column-selection-styles" src='{environment:demosBaseUrl}/@@igDemoBasePath/column-selection-styles' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="@@igObjectRef-column-selection-styles" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### <a name="api-references"></a>API References
<div class="divider--half"></div>
The column selection UI has a few more APIs to explore, which are listed below.

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumnomponent.html)
* [IgxColumnGrpupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) properties:
* [selectedColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectedColumns)
* [selectColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectColumns)
* [deselectColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectColumns)
* [selectAllColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectAllColumns)
* [deselectAllColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectAllColumns)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumnomponent.html) properties:
* [selectable]({environment:angularApiUrl}/classes/IgxColumnComponent.html#selectable)
* [selected]({environment:angularApiUrl}/classes/IgxColumnComponent.html#selected)

[`IgxColumnGrpupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) properties:
* [selectable]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selectable)
* [selected]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) events:
* [onColumnsSelectionChange]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onColumnsSelectionChange)

### Additional Resources

* [@@igComponent overview](@@igMainTopic.md)
* [Selection](selection.md)
* [Cell selection](cell_selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
