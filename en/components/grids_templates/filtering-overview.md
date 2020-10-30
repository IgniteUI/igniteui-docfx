@@if(igxName==='IgxGrid') {
---
title: Angular Filtering Overview | Angular Grid Filtering | Ignite UI for Angular | Infragistics
_description: Start using angular filter to return data with Ignite UI for Angular Material table similar to the one in excel with convenient usage be the Angular grid filtering
_keywords: angular filter, ignite ui for angular, infragistics
---
}
@@if(igxName!=='IgxGrid') {
---
title: Angular Filtering Overview | Angular Grid Filtering | Ignite UI for Angular | Infragistics
_description: Start using angular filter to return data with Ignite UI for Angular Material table similar to the one in excel with convenient usage be the Angular grid filtering
_keywords: angular filter, ignite ui for angular, infragistics
_canonicalLink: grid/filtering-overview
---
}

# @@igComponent Filtering Overview

IgniteUI for Angular @@igComponent component provides three different filtering types - [Quick filtering](filtering.md), [Excel style filtering](excel-style-filtering.md) and [Advanced filtering](advanced-filtering.md) which enable you to display only the records which meet specified criteria.

## Setup
In order to specify if filtering is enabled and which filtering mode should be used, the @@igComponent exposes the following boolean properties - [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering), [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering), [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) and [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable).

Property **[allowFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering)** enables you to specify the following options:
- **false** - the filtering for the corresponding grid will be disabled; /default value/
- **true** - the filtering for the corresponding grid will be enabled;

Property **[allowAdvancedFiltering]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering)** enables you to specify the following options:
- **false** - the advanced filtering for the corresponding grid will be disabled; /default value/
- **true** - the advanced filtering for the corresponding grid will be enabled;

Property **[filterMode]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode)** enables you to specify the following options:
- **quickFilter** - a simplistic filtering UI; /default value/
- **excelStyleFilter** - an Excel-like filtering UI;

Property **[filterable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable)** enables you to specify the following options:
- **true** - the filtering for the corresponding column will be enabled; /default value/
- **false** - the filtering for the corresponding column will be disabled;


```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</@@igSelector>
```

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) and [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering) input properties to `true`.

```html
<@@igSelector [data]="data" [autoGenerate]="true" [showToolbar]="true" [allowAdvancedFiltering]="true">
</@@igSelector>
```

>[!NOTE]
>You can enable both the [`quickFilter`]({environment:angularApiUrl}/enums/filtermode.html#quickfilter)/[`excelStyleFilter`]({environment:angularApiUrl}/enums/filtermode.html#excelstylefilter) and the advanced filtering user interfaces in the @@igComponent. Both filtering user interfaces will work independently of one another. The final filtered result in the @@igComponent is the intersection between the results of the two filters.

## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
