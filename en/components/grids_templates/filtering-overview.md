---
title: Angular Filtering Types Overview | Angular Grid Filtering | Ignite UI for Angular | Infragistics
_description: Start using angular filter to return data with Ignite UI for Angular Material table similar to the one in excel with convenient usage be the Angular grid filtering
_keywords: angular filter, ignite ui for angular, infragistics
---

### @@igComponent Filtering Types Overview

IgniteUI for Angular @@igComponent component provides three different filtering types - [Quick filtering](quick-filtering.md), [Excel style filtering](excel_style_filtering.md) and [Advanced filtering](advanced_filtering.md) which enable you to display only the records which meet specified criteria.

#### Setup
In order to specify if filtering is enabled and which filtering mode should be used, the @@igComponent exposes the following boolean properties - [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering), [`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) and [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable).

Property **allowFiltering** enables you to specify the following options:
- **false** - the filtering for the corresponding grid will be disabled; /default value/
- **true** - the filtering for the corresponding grid will be enabled;

Property **filterMode** enables you to specify the following options:
- **quickFilter** - a simplistic filtering UI; /default value/
- **excelStyleFilter** - an Excel-like filtering UI;

Property **filterable** enables you to specify the following options:
- **true** - the filtering for the corresponding column will be enabled; /default value/
- **false** - the filtering for the corresponding column will be disabled;

```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName" dataType="string"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</@@igSelector>
```

To enable the [Advanced filtering](advanced_filtering.md) however, you need to set the [`showToolbar`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#showtoolbar) and [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#allowadvancedfiltering) input properties to `true`.

```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [showToolbar]="true" [allowAdvancedFiltering]="true">
</igx-hierarchical-grid>
```

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)