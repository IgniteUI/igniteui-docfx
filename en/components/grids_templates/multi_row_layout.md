---
title: Grid - Multi Row Layout - Native Angular | Ignite UI for Angular
_description: Multi row layout allow positioning and sizing the columns in a more powerful and flexible way. Every single column layout is a representation of a complete grid layout which consists of column fields.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Multi Row Layout, Angular Multi Row Layout, Angular Data Table Multi Row Layout, Grid Layout, Angular Grid Layout, Column Layout, ColumnLayout, igxColumnLayout
---

### Multi Row Layout

Multi Row Layout extends the rendering capabilities of the `igxGridComponent`. The feature allows splitting a single data record into multiple visible rows.

#### Demo

<div class="sample-container loading" style="height:755px">
    <iframe id="grid-multi-row-layout-iframe" src='{environment:demosBaseUrl}/grid/grid-multi-row-layout' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The declaration of Multi Row Layout is achieved through [`igx-column-layout`]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html) component. Each `igx-column-layout` component should be considered as a block, containing one or multiple `igx-column` components. Some of the grid features work on block level (those are listed in the "Feature Integration" section below). For example the virtualization will use the block to determine the virtual chunks, so for better performance split the columns into more `igx-column-layout` blocks if the layout allows it. There should be no columns outside of those blocks and no usage of `IgxColumnGroupComponent` when configuring a multi row layout. Multi Row Layout is implemented on top of the [grid layout](https://www.w3.org/TR/css-grid-1/) specification and should conform to its requirements.

`IgxColumnComponent` exposes four `@Input` properties to determine the location and span of each cell:
* [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart) - column index from which the field is starting. This property is **mandatory**.
* [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) - row index from which the field is starting. This property is **mandatory**.
* [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colend) - column index where the current field should end. The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field. This property is **optional**. If not set defaults to `colStart + 1`.
* [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowend) - row index where the current field should end. The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field. This property is **optional**. If not set defaults to `rowStart + 1`.


```html
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID"></igx-column>
</igx-column-layout>
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName"></igx-column>
	<igx-column [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle"></igx-column>
</igx-column-layout>
<igx-column-layout>
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>
	<igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>
	<igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode"></igx-column>
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>
	<igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>
</igx-column-layout>
<igx-column-layout>
		<igx-column [rowStart]="1" [colStart]="1" field="Phone"></igx-column>
		<igx-column [rowStart]="2" [colStart]="1" field="Fax"></igx-column>
</igx-column-layout>
```

The result of the above configuration can be seen on the screenshot below:

<img src="../../images/multi-row-layout-1.png" style="width: 100%"/>


> [!Note]
> [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) and [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart) properties must be set for each `igx-column` into `igx-column-layout`. The `igxColumnLayout` component is not verifying if the layout is correct and not throwing errors or warnings about that. The developers must make sure that the declaration of their layout is correct and complete, otherwise they may end up in broken layout with misalignments, overlaps and browser inconsistencies.

### Feature Integration
Due to the completly different rendering approach of Multi Row Layout, some of the column features will work only on `igx-column-layout` component. Such features are Column Pinning and Column Hiding. Othes like - Sorting and Grouping will work in the same way - on `igx-column` component.
- Filtering - only Excel Style Filtering is supported. Setting `filterMode` explicitly to `FilterMode.quickFilter` has no effect.
- Paging - works on records, not visual rows.
- Group By - `hideGroupedColumns` option has no effect in Multi Row Layout. The grouped columns are always visible.

The following features are currently **not** supported:
- Column Moving 
- Multi Column Headers
- Export to Excel
- Summaries

### Keyboard Navigation

* <kbd>TAB</kbd> move to the next cell from left to right in the row (unaffected by the column blocks that are defined).
* <kbd>Shift</kbd> + <kbd>TAB</kbd> move to the previous cell from right to left in the row (unaffected by the column blocks that are defined).
* <kbd>Arrow left</kbd> and <kbd>Arrow right</kbd> move to the adjacent cell on the left/right within the current row (unaffected by the column blocks that are defined).
* <kbd>Arrow up</kbd> and <kbd>Arrow down</kbd> move to the cell above/below with which it shares common border. If it shares border with multiple cells the most left takes precedence.

### API References
<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnLayoutComponent]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)