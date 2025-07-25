@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Selection - Ignite UI for Angular
_description: Learn how to configure column selection with Ignite UI for Angular Data grid. This makes grid interactions much easier and faster than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Selection - Ignite UI for Angular
_description: Learn how to configure column selection with Ignite UI for Angular Tree grid. This makes grid interactions much easier and faster than ever.
_keywords: column selection, igniteui for angular, infragistics
_canonicalLink: grid/column-selection
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Selection - Ignite UI for Angular
_description: Learn how to configure column selection with Ignite UI for Angular Hierarchical grid. This makes grid interactions much easier and faster than ever.
_keywords: column selection, igniteui for angular, infragistics
_canonicalLink: grid/column-selection
---
}

# Angular @@igComponent Column Selection
The Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich [`API`]({environment:angularApiUrl}) that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.

## Angular Column Selection Example
<div class="divider--half"></div>

The sample below demonstrates the three types of @@igComponent's **column selection** behavior. Use the _column selection_ dropdown below to enable each of the available selection modes.
@@if (igxName === 'IgxGrid') {
*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.
}
@@if (igxName === 'IgxTreeGrid') {
*_Units_, _Unit Price_ and _Delivered_ are with disabled column selection.
}
@@if (igxName === 'IgxHierarchicalGrid') {
*_Photo_ and _Debut_ are with disabled column selection.
}


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/@@igDemoBasePath/column-selection" alt="Angular Column Selection Example">
</code-view>

<div class="divider--half"></div>

## Basic usage

The column selection feature can be enabled through the [`columnSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnSelection) input, which takes [GridSelectionMode]({environment:angularApiUrl}/index.html#gridselectionmode) values.

## Interactions
The default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!NOTE]
> [`Multi-column Headers`](multi-column-headers.md) don't reflect on the [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) is [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) if all of its `selectable` descendants are [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected).

@@if (igxName === 'IgxGrid') {
*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.
}
@@if (igxName === 'IgxTreeGrid') {
*Under _Personal Details_ Column Group only column _ID_ and _Title_ are selectable.
}
@@if (igxName === 'IgxHierarchicalGrid') {
*Under _Location_ Column Group only column _City_ is selectable.
}


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/@@igDemoBasePath/column-group-selection" >
</code-view>

<div class="divider--half"></div>

## Keyboard combinations

> [!NOTE]
> The keyboard combinations are available only when the grid [`columnSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnselection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:
- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API manipulations
The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.

> [!NOTE]
> The above statement also applies to the [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html), except that when the [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [`API References`](#api-references) section.

## Styling
Before diving into the styling options, the core module and all component mixins need to be imported.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

>[!NOTE]
>Please note that [`row selection`](row-selection.md) and [`column selection`](column-selection.md) can't be manipulated independently. They depend on the same `variables`.

With that being said, let's move on and change the **selection** and **hover** styles.<br/>
Following the simplest approach, let's define our custom **theme**.

@@if (igxName === 'IgxTreeGrid') {
```scss
$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627,
  $expand-icon-color: #ecaa53,
  $expand-icon-hover-color: #b64b80
);
```
}
@@if (igxName !== 'IgxTreeGrid') {
```scss
$custom-grid-theme: grid-theme(
  $row-selected-background: #011627,
  $row-selected-text-color: #ecaa53,
  $row-selected-hover-background: #011627,
  $header-selected-text-color: #ecaa53,
  $header-selected-background: #011627
);
```
}

The [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:
- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.
- **$header-selected-text-color** - sets the text color of the selected column header 
- **$header-selected-background** - sets the background color of the selected column header.


### Using CSS Variables
The last step is to include the custom `igx-grid` theme.

```scss
@include css-vars($custom-grid-theme)
```

### Demo


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/@@igDemoBasePath/column-selection-styles" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

## <a name="api-references"></a>API References
<div class="divider--half"></div>
The column selection UI has a few more APIs to explore, which are listed below.

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) properties:
* [columnSelection]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnSelection)
* [selectedColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectedColumns)
* [selectColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectColumns)
* [deselectColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectColumns)
* [selectAllColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectAllColumns)
* [deselectAllColumns]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectAllColumns)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) properties:
* [selectable]({environment:angularApiUrl}/classes/IgxColumnComponent.html#selectable)
* [selected]({environment:angularApiUrl}/classes/IgxColumnComponent.html#selected)

[`IgxColumnGrpupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) properties:
* [selectable]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selectable)
* [selected]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) events:
* [onColumnsSelectionChange]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onColumnsSelectionChange)

## Additional Resources

* [@@igComponent overview](@@igMainTopic.md)
* [Selection](selection.md)
* [Cell selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
