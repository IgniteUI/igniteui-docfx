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

# @@igComponent Column Selection
The Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich [`API`]({environment:angularApiUrl}) that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.

@@if (igxName === 'IgxGrid') {
*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.
}
@@if (igxName === 'IgxTreeGrid') {
*_Unit Price_ and _Discontinued_ are with disabled column selection.
}
@@if (igxName === 'IgxHierarchicalGrid') {
*_Photo_ and _Debut_ are with disabled column selection.
}

<div class="sample-container loading" style="height:570px">
    <iframe id="@@igObjectRef-column-selection-iframe" src='{environment:demosBaseUrl}/@@igDemoBasePath/column-selection' width="100%" height="100%" seamless frameborder="0" class="no-theming" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="@@igObjectRef-column-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="@@igObjectRef-column-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Basic usage

The column selection feature can be enabled through the [`columnSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnselection) input, which takes [GridSelectionMode]({environment:angularApiUrl}/enums/gridselectionmode.html) values.

## Interactions
The default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!NOTE]
> [`Multi-column Headers`](multi_column_headers.md) don't reflect on the [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) is [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable), if at least one of its children has the selection behaviour enabled. In addition, the component is marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) if all of its `selectable` descendents are [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected).

@@if (igxName === 'IgxGrid') {
*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.
}
@@if (igxName === 'IgxTreeGrid') {
*Under _Personal Details_ Column Group only column _ID_ and _Title_ are selectable.
}
@@if (igxName === 'IgxHierarchicalGrid') {
*Under _Location_ Column Group only column _City_ is selectable.
}

<div class="sample-container loading" style="height:570px">
    <iframe id="@@igObjectRef-column-group-selection" src='{environment:demosBaseUrl}/@@igDemoBasePath/column-group-selection' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="@@igObjectRef-column-group-selection" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="@@igObjectRef-column-group-selection" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Keyboard combinations

> [!NOTE]
> The keyboard combinations are available only when the grid [`columnSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnselection) input is set to [`multiple`]({environment:angularApiUrl}/enums/gridselectionmode.html#multiple).

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
@import '~igniteui-angular/lib/core/styles/themes/index';
```

>[!NOTE]
>Please note that [`row selection`](row_selection.md) and [`column selection`](column_selection.md) can't be manipulated   independently. They depend on the same `variables`.

With that being said, let's move on and change the **selection** and **hover** styles.<br/>
Following the simplest approach, let's define our custom **theme**.

@@if (igxName === 'IgxTreeGrid') {
```scss
$custom-grid-theme: igx-grid-theme(
    $row-selected-background: #011627,
    $row-selected-text-color: #ECAA53,
    $row-selected-hover-background: #011627,
    $header-selected-text-color: #ECAA53,
    $header-selected-background: #011627,
    $expand-icon-color: #ECAA53,
    $expand-icon-hover-color: #B64B80
);
```
}
@@if (igxName !== 'IgxTreeGrid') {
```scss
$custom-grid-theme: igx-grid-theme(
    $row-selected-background: #011627,
    $row-selected-text-color: #ECAA53,
    $row-selected-hover-background: #011627,
    $header-selected-text-color: #ECAA53,
    $header-selected-background: #011627
);
```
}
[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:
- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.
- **$header-selected-text-color** - sets the text color of the selected column header 
- **$header-selected-background** - sets the background color of the selected column header.


### Using CSS Variables
The last step is to include the custom `igx-grid` theme.

```scss
@include igx-css-vars($custom-grid-theme)
```

### Overriding the Base Theme
In order to style components for Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

>[!NOTE]
>If the component is using the [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. In order to prevent the custom theme from leaking into other components, be sure that you have included the `:host` selector before `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-column-selection-theme);
    }
}
```
### Demo

<div class="sample-container loading" style="height:570px">
    <iframe id="@@igObjectRef-column-selection-styles" src='{environment:demosBaseUrl}/@@igDemoBasePath/column-selection-styles' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="@@igObjectRef-column-selection-styles" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="@@igObjectRef-column-selection-styles" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## <a name="api-references"></a>API References
<div class="divider--half"></div>
The column selection UI has a few more APIs to explore, which are listed below.

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumnomponent.html)
* [IgxColumnGrpupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) properties:
* [columnSelection]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnselection)
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

## Additional Resources

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
